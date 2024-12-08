import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, FileText, GitCompare, Search, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen mx-auto w-full">
        <section className="py-20 text-center">
          <h1 className="text-6xl font-extrabold mb-6 animate-fade-in text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600">
            Project Ichnaea
          </h1>
          <p className="text-2xl mb-8 max-w-2xl mx-auto text-gray-700">
            Unleash the power of data exploration and analysis
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white animate-float">
              <Link href="/datasets">Explore Datasets <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-100">
              <Link href="/diff-viewer">Try Diff Viewer</Link>
            </Button>
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-600">Discover Our Features</h2>
          <div className="flex gap-5 mx-auto max-[433px]:flex-col  p-10">
            <FeatureCard
              icon={<Search className="h-12 w-12 text-purple-500" />}
              title="Intuitive Explorer"
              description="Navigate through datasets with powerful search and filtering."
            />
            <FeatureCard
              icon={<GitCompare className="h-12 w-12 text-blue-500" />}
              title="Smart Diff Viewer"
              description="Visualize changes between dataset versions effortlessly."
            />
            <FeatureCard
              icon={<Database className="h-12 w-12 text-pink-500" />}
              title="Format Flexibility"
              description="Work with CSV, JSON, XML, and more. Your data, your way."
            />
            <FeatureCard
              icon={<FileText className="h-12 w-12 text-yellow-500" />}
              title="Rich Metadata"
              description="Access comprehensive dataset information and history."
            />
          </div>
        </section>
      </div>
    </>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white">
      <CardHeader>
        <CardTitle className="flex flex-col items-center gap-4 text-center">
          {icon}
          <span className="text-xl text-gray-800">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
