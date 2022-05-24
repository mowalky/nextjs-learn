import { useRouter } from "next/router";

function ClientsProjectsPage() {
  const router = useRouter();
  const { id } = router.query;
  return <div>Client {id} Projects Page</div>;
}

export default ClientsProjectsPage;
