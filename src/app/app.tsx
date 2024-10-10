import { router } from "@/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <main>
      <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
    </main>
  );
}

export default App;
