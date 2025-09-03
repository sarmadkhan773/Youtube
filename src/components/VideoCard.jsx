export default function VideoCard({ thumbnail, title, channel, views }) {
  return (
    <div className="w-full sm:w-100 cursor-pointer">
      <img src={thumbnail} alt={title} className="rounded-lg hover:rounded-none" />
      <div className="mt-2">
        <h3 className="font-semibold text-sm line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-xs">{channel}</p>
        <p className="text-gray-500 text-xs">{views}</p>
      </div>
    </div>
  );
}
