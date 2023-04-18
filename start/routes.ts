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

Route.get("/estabelecimentos/:id", "EstabelecimentosController.show");

Route.group(() => {
  Route.get("/auth/me", "AuthController.me");

  Route.resource("/enderecos", "EnderecosController").only([
    "store",
    "index",
    "update",
    "destroy",
  ]);

  Route.post("/pedidos", "PedidosController.store");
  Route.get("/pedidos", "PedidosController.index");
  Route.get("/pedidos/:hash_id", "PedidosController.show");

  Route.get("/estabelecimento/pedidos", "EstabelecimentosController.pedidos");

  Route.post("/pedidos/:hash_id/statuses", "PedidosController.statuses");

  Route.put("/cliente/editar", "ClientesController.update");

  Route.resource("/estabelecimento/categorias", "CategoriasController").only([
    "store",
    "index",
    "update",
    "destroy",
  ]);
}).middleware("auth");

Route.get("/", async () => {
  return {
    hortifruti: "prático",
  };
});
