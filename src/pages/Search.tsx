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
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5"
  },
  {
    id: 2,
    name: "Campus View Lodge",
    location: "Blantyre",
    price: "MWK 150,000 / semester",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
  },
  {
    id: 3,
    name: "Green Valley Hostel",
    location: "Lilongwe",
    price: "MWK 110,000 / semester",
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e"
  }
  ,
  {
    id: 4,
    name: "Mountain View Hostel",
    location: "Mzuzu",
    price: "MWK 130,000 / semester",
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e"
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
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 space-y-10">

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-semibold text-black">
            Find Your Hostel
          </h1>
          <p className="text-gray-500 text-sm">
            Browse available hostels and apply
          </p>
        </div>

        {/* Search */}
        <div className="flex gap-3 max-w-xl mx-auto">
          <Input
            placeholder="Search hostel name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border-gray-300 focus-visible:ring-blue-500"
          />
          <Button
            onClick={handleSearch}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>

        {/* Filter Toggle */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 text-sm transition ${
              showFilters
                ? "text-blue-600"
                : "text-gray-600 hover:text-black"
            }`}
          >
            <Filter className="w-4 h-4" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="flex flex-col sm:flex-row justify-center gap-6 border-t pt-6">
            <div className="flex flex-col">
              <label className="text-xs text-gray-500">Location</label>
              <select
                className="border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="All">All Locations</option>
                <option value="Zomba">Zomba</option>
                <option value="Blantyre">Blantyre</option>
                <option value="Lilongwe">Lilongwe</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-xs text-gray-500">Price</label>
              <select
                className="border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
              >
                <option value="All">All Prices</option>
                <option value="MWK 110,000 / semester">MWK 110,000</option>
                <option value="MWK 120,000 / semester">MWK 120,000</option>
                <option value="MWK 150,000 / semester">MWK 150,000</option>
              </select>
            </div>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex justify-center">
            <Loader2 className="animate-spin text-blue-600" />
          </div>
        )}

        {/* Results Count */}
        {!loading && (
          <p className="text-center text-xs text-gray-500">
            {results.length} hostel(s) found
          </p>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {results.map((hostel) => (
            <Card
              key={hostel.id}
              className="rounded-2xl border border-gray-200 shadow-none hover:shadow-sm transition"
            >
              <CardHeader className="p-0">
                <img
                  src={hostel.image}
                  alt={hostel.name}
                  className="rounded-t-2xl h-48 w-full object-cover"
                />
              </CardHeader>

              <CardContent className="pt-4 space-y-1">
                <h3 className="text-lg font-medium text-black">
                  {hostel.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {hostel.location}
                </p>
                <p className="text-sm font-medium text-blue-600">
                  {hostel.price}
                </p>
              </CardContent>

              <CardFooter>
                <Button className="w-full bg-black text-white hover:bg-gray-900">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {!loading && results.length === 0 && (
          <div className="text-center py-12">
            <p className="text-base font-medium text-black">
              No hostels found
            </p>
            <p className="text-sm text-gray-500">
              Try a different search term.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}