"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Loader2, Search, Filter } from "lucide-react"

interface Hostel {
  id: number
  name: string
  location: string
  price: string
  image: string
}

const hostelsData: Hostel[] = [
  {
    id: 1,
    name: "Sunrise Hostel",
    location: "Zomba",
    price: "MWK 120,000 / semester",
    image: "https://www.tripadvisor.com/LocationPhotoDirectLink-g298274-d2156347-i198045976-Doogles_Lodge-Blantyre_Southern_Region.html"
  },
  {
    id: 2,
    name: "Campus View Lodge",
    location: "Blantyre",
    price: "MWK 150,000 / semester",
    image: "https://www.facebook.com/groups/malawi.houses.for.rent/posts/9234352209941202/"
  },
  {
    id: 3,
    name: "Green Valley Hostel",
    location: "Lilongwe",
    price: "MWK 110,000 / semester",
    image: "https://www.facebook.com/groups/lilongwe.houses.for.sale/posts/to-rental-hostel-for-rent-at-area-25-c-near-tarmac-roadthe-roomanother-room-goin/1261545458311661/"
  },
  {
    id: 4,
    name: "Green Valley Hostel",
    location: "Lilongwe",
    price: "MWK 110,000 / semester",
    image: "https://malawiplus.com/doogles/"
  }
]

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Hostel[]>([])
  const [loading, setLoading] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState("All")
  const [selectedPrice, setSelectedPrice] = useState("All")

  useEffect(() => {
    setResults(hostelsData)
  }, [])

  const handleSearch = () => {
    setLoading(true)

    setTimeout(() => {
      let filtered = hostelsData.filter(hostel =>
        hostel.name.toLowerCase().includes(query.toLowerCase())
      )

      if (selectedLocation !== "All") {
        filtered = filtered.filter(hostel => hostel.location === selectedLocation)
      }

      if (selectedPrice !== "All") {
        filtered = filtered.filter(hostel => hostel.price === selectedPrice)
      }

      setResults(filtered)
      setLoading(false)
    }, 600)
  }

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-6 space-y-8">

        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold tracking-tight">
            Find Your Perfect Hostel
          </h1>
          <p className="text-muted-foreground">
            Browse available hostels and submit your application
          </p>
        </div>

        {/* Search Input */}
        <div className="flex gap-2 max-w-2xl mx-auto">
          <Input
            placeholder="Search by location, name, or price"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button onClick={handleSearch}>
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>

        {/* Show Filters Button */}
        <div className="flex justify-center mt-4">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="w-4 h-4" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>

        {/* Filters Section */}
        {showFilters && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            {/* Location Filter */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-blue-800">Location</label>
              <select
                className="border rounded-lg px-3 py-2"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="All">All Locations</option>
              </select>
            </div>

            {/* Price Filter */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-blue-800">Price</label>
              <select
                className="border rounded-lg px-3 py-2"
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
              >
                <option value="All">All Prices</option>
                <option value="MWK 120,000 / semester">MWK 120,000</option>
                <option value="MWK 150,000 / semester">MWK 150,000</option>
                <option value="MWK 110,000 / semester">MWK 110,000</option>
              </select>
            </div>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex justify-center mt-6">
            <Loader2 className="animate-spin" />
          </div>
        )}

        {/* Results Count */}
        {!loading && (
          <p className="text-center text-sm text-muted-foreground mt-2">
            {results.length} hostel(s) available
          </p>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          {results.map((hostel) => (
            <Card
              key={hostel.id}
              className="rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
            >
              <CardHeader className="p-0">
                <img
                  src={hostel.image}
                  alt={hostel.name}
                  className="rounded-t-2xl h-48 w-full object-cover"
                />
              </CardHeader>

              <CardContent className="space-y-2 pt-4">
                <h3 className="text-lg font-semibold">{hostel.name}</h3>
                <p className="text-sm text-muted-foreground">{hostel.location}</p>
                <p className="font-medium">{hostel.price}</p>
              </CardContent>

              <CardFooter>
                <Button className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {!loading && results.length === 0 && (
          <div className="text-center py-10">
            <p className="text-lg font-medium">No hostels found</p>
            <p className="text-muted-foreground">
              Try searching with different criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}