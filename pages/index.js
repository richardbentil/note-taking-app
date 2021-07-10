import { connectToDatabase } from "../util/mongodb";
import HomePageLayout from "../components/HomePageLayout";
import HomePage from "../components/HomePage";

export default function Home({ isConnected }) {
  return (
    <HomePageLayout>
      <HomePage />
    </HomePageLayout>
  );
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase();

  const isConnected = await client.isConnected();

  return {
    props: { isConnected },
  };
}
