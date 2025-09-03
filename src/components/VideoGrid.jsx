import VideoCard from "./VideoCard";

const videos = [
  {
    thumbnail: "https://i.ytimg.com/vi/ysz5S6PUM-U/maxresdefault.jpg",
    title: "Hill View",
    channel: "Tech Channel",
    views: "1.2M",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/MXeQwbKPrfo/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4AfQJgALQBYoCDAgAEAEYTCBcKGUwDw==&rs=AOn4CLClanfeNjlr6theC61GykqWNFTrkQ",
    title: "My Mix",
    channel: "Alan Walker, Alok, David Guetta and more",
    views: "Updated today",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
    title: "Luis Fonsi - Despacito ft. Daddy Yankee",
    channel: "Luis Fonsi",
    views: "8.8B views • 8 years ago",
  },
  {
    thumbnail: "https://img.youtube.com/vi/v3iUx2SNspY/maxresdefault.jpg",
    title: "Cyber Security Full Course for Beginners in 11 Hours - 2025 ",
    channel: "WsCube Cyber Security",
    views: "1M views • 1 year ago"
  },
  {
    thumbnail: "https://img.youtube.com/vi/vM_jFPxcXpM/maxresdefault.jpg",
    title: "Bachon ky liye naya Bike khareed liya 😍 | Rashid and Ustad ludo fun match 😂| Bilal marth",
    channel: "Bilal Marth 7",
    views: "153K views • 3 days ago"
  },
  {
    thumbnail: "https://img.youtube.com/vi/onXn0YUmeWQ/maxresdefault.jpg",
    title: "World’s Best Cricketers Vs Impossible Batting Challenge 🏏",
    channel: "Red Bull",
    views: "12M views • 2 months ago"
  }
];

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {videos.map((video, index) => (
        <VideoCard key={index} {...video} />
      ))}
    </div>
  );
}
