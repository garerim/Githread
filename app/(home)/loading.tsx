import { PostPlaceholder } from "@/src/feature/post/PostSkeleton";


export default function loading() {
  return (
    <div className="divide-y divide-accent">
        {Array.from({length: 20}).map((_, index) => {
            return <PostPlaceholder key={index} />
        })}
    </div>
  )
}
