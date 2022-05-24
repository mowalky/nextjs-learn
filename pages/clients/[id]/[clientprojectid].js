import { useRouter } from "next/router";

function SelectedClientsProjectsPage() {
  const router = useRouter();
  const { id, clientprojectid } = router.query;
  return (
    <div>
      View Details {id} Projects Page for {clientprojectid}
    </div>
  );
}

export default SelectedClientsProjectsPage;
