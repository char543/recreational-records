import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function NewsSection() {
  const news = [
    {
      title: "Echo Drift's New Album 'Digital Dreams' Drops Next Month",
      excerpt:
        "The highly anticipated follow-up to 'Synthetic Memories' promises to push ambient electronic music into new territories.",
      date: "Dec 15, 2024",
      category: "Release",
      image: "/digital-dreams-ambient-album.png",
      featured: true,
    },
    {
      title: "Recreational Records Signs Rising Star 'Quantum Flux'",
      excerpt: "The experimental producer joins our roster with a unique blend of glitch-hop and neo-soul influences.",
      date: "Dec 10, 2024",
      category: "Signing",
      image: "/quantum-flux-artist-signing.png",
      featured: false,
    },
    {
      title: "Label Showcase at SXSW 2025 Announced",
      excerpt:
        "Recreational Records will host an exclusive showcase featuring all our artists at the premier music festival.",
      date: "Dec 5, 2024",
      category: "Event",
      image: "/sxsw-electronic-showcase.png",
      featured: false,
    },
  ]

  return (
    <section className="py-24 px-4 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8">
            Latest <span className="text-primary">News</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest releases, signings, and events from Recreational Records.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {news.map((article, index) => (
            <Card
              key={index}
              className={`group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 ${article.featured ? "lg:col-span-2 lg:row-span-2" : ""}`}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${article.featured ? "h-80" : "h-48"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge
                    className={`absolute top-6 right-6 ${article.category === "Release" ? "bg-accent text-accent-foreground" : article.category === "Signing" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
                  >
                    {article.category}
                  </Badge>
                </div>
                <div className={`${article.featured ? "p-10" : "p-8"}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-muted-foreground font-medium">{article.date}</span>
                  </div>
                  <h3
                    className={`font-headline font-bold mb-5 group-hover:text-primary transition-colors leading-tight ${article.featured ? "text-2xl lg:text-3xl" : "text-xl"}`}
                  >
                    {article.title}
                  </h3>
                  <p className={`text-muted-foreground mb-6 leading-relaxed ${article.featured ? "text-lg" : ""}`}>
                    {article.excerpt}
                  </p>
                  <Button
                    variant="outline"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent h-11 px-6"
                  >
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
