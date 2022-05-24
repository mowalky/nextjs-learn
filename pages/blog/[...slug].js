import { useRouter } from "next/router";

function BlogPage() {
  const router = useRouter();
  const { slug } = router.query;
  return <div>blog {slug}</div>;
}

export default BlogPage;
