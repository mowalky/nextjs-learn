import { useRouter } from "next/router";

function Page() {
  const router = useRouter();

  return <div>{router}</div>;
}
export default Page;
