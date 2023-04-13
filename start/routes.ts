import Route from "@ioc:Adonis/Core/Route";

// Login para os 3 tipos de user
Route.post("/login", "AuthController.login");
Route.post("/logout", "AuthController.logout");

// Cadastra user cliente
Route.post("/cliente/cadastro", "ClientesController.store");

// Todas as cidades
Route.get("/cidades", "CidadesController.index");

//Todas as cidades com estabelecimentos
Route.get(
  "/cidades/:id/estabelecimentos",
  "CidadesController.estabelecimentos"
);

Route.group(() => {
  Route.get("/auth/me", "AuthController.me");

  Route.put("/cliente/editar", "ClientesController.update");
}).middleware("auth");

Route.get("/", async () => {
  return {
    hortifruti: "prático",
  };
});
