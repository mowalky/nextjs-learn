import { useRouter } from "next/router";

function ClientsProjectsPage() {
  const router = useRouter();
  const { id } = router.query;

  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: {
        id: id,
        clientprojectid: "A",
      },
    });
  }

  return (
    <div>
      <h1>Client {id} Projects Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientsProjectsPage;
