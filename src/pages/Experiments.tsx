import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play } from "lucide-react";

interface Video {
  id: string;
  title: string;
  url: string;
  description: string;
  category: string;
}

// Simulated backend data - replace with actual API call when backend is ready
const backendVideos: Video[] = [
  {
    id: "toPWqrq-1SM",
  title: "Static Electricity Experiment with Balloon",
  url: "https://www.youtube.com/watch?v=toPWqrq-1SM",
  description: "A simple demonstration of static electricity using a balloon and paper, showing how objects attract when charged.",
  category: "Static Electricity"
  },
  {
  id: "wkEqgp-ADkw",
  title: "Jumping Paper Experiment",
  url: "https://www.youtube.com/watch?v=wkEqgp-ADkw",
  description: "Demonstrates how small pieces of paper jump toward a charged balloon due to static electricity.",
  category: "Static Electricity"
},
  {
    id: "hFAOXdXZ5TM",
    title: "Magnetic Field Visualization",
    url: "https://www.youtube.com/watch?v=hFAOXdXZ5TM", 
    description: "Iron filings reveal invisible magnetic field lines",
    category: "Electromagnetism"
  },
  {
  id: "8R6O0ncMn-o",
  title: "How to Make a Magnet Maze",
  url: "https://www.youtube.com/watch?v=8R6O0ncMn-o",
  description: "A creative DIY project showing how to move a paperclip (or similar object) through a maze using only a magnet.",
  category: "Magnetic Maze"
},
{
  id: "IJgzVaTPEow",
  title: "Plotting Magnetic Field Lines",
  url: "https://www.youtube.com/watch?v=IJgzVaTPEow",
  description: "A clear demonstration of magnetic field visualization using iron filings on top of a magnet.",
  category: "Magnetic Field Visualization"
},
{
  id: "dIdE-pqYqbs",
  title: "5 Ways to Make a Rainbow",
  url: "https://www.youtube.com/watch?v=dIdE-pqYqbs",
  description: "Shows how to create rainbows at home using simple materials like water and light sources.",
  category: "Make a Rainbow"
},
{
  id: "4Onqeeanq_E",
  title: "Light Experiment with Mirror",
  url: "https://www.youtube.com/watch?v=4Onqeeanq_E",
  description: "Shows how light reflects off a mirror when a flashlight is shined at it.",
  category: "Mirror Magic"
},
{
  id: "e5luNTl-yls",
  title: "Playful Pendulum at Home STEM Experiment",
  url: "https://www.youtube.com/watch?v=e5luNTl-yls",
  description: "Shows how to build a simple pendulum and observe its back-and-forth motion.",
  category: "Pendulum Swing"
},

];

const Experiments = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulate loading videos from backend
  useEffect(() => {
    const loadVideos = async () => {
      setLoading(true);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setVideos(backendVideos);
      setCurrentVideo(backendVideos[0]?.id || null);
      setLoading(false);
    };
    
    loadVideos();
  }, []);

  const currentVideoData = videos.find(v => v.id === currentVideo);

  if (loading) {
    return (
      <div className="min-h-screen py-20 px-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading experiments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
            Science Experiments
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch amazing science experiments that bring the concepts from our magazines to life! 
            Explore carefully curated physics demonstrations and experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <Card className="h-fit">
              <CardContent className="p-6">
                {currentVideo ? (
                  <>
                    <div className="aspect-video mb-4">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${currentVideo}`}
                        title="Science Experiment Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg"
                      ></iframe>
                    </div>
                    {currentVideoData && (
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">{currentVideoData.title}</h3>
                        <p className="text-sm text-primary font-medium">{currentVideoData.category}</p>
                        <p className="text-muted-foreground">{currentVideoData.description}</p>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Play className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-lg text-muted-foreground">
                        No videos available
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Video List */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Experiment Library ({videos.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {videos.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    No experiments available yet.
                  </p>
                ) : (
                  <div className="space-y-3">
                    {videos.map((video) => (
                      <div
                        key={video.id}
                        className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 group ${
                          currentVideo === video.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => setCurrentVideo(video.id)}
                      >
                        <div className="space-y-2">
                          <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-sm leading-tight">{video.title}</p>
                              <p className="text-xs text-primary font-medium mt-1">{video.category}</p>
                            </div>
                            {currentVideo === video.id && (
                              <Play className="h-4 w-4 text-primary flex-shrink-0 ml-2" />
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2">{video.description}</p>
                          <p className="text-xs text-muted-foreground">Click to watch</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experiments;
