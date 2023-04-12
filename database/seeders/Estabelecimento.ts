import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User from "App/Models/User";
import Estabelecimento from "App/Models/Estabelecimento";

export default class extends BaseSeeder {
  public async run() {
    const user = await User.create({
      email: "estabelecimento@email.com",
      password: "123456",
      tipo: "estabelecimentos",
    });

    await Estabelecimento.create({
      nome: "Estabelecimento",
      logo: "https://webevolui.com.br/principal/images/web-evolui-logo.png",
      online: true,
      bloqueado: false,
      userId: user.id,
    });
  }
}
