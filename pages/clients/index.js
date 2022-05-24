import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "client1", name: "Client 1" },
    { id: "client2", name: "Client 2" },
    { id: "client3", name: "Client 3" },
    { id: "client4", name: "Client 4" },
  ];

  return (
    <div>
      Clients Page
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.name}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
