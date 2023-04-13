import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User from "App/Models/User";
import Estabelecimento from "App/Models/Estabelecimento";
import { faker } from "@faker-js/faker";
import Estado from "App/Models/Estado";
import Cidade from "App/Models/Cidade";
import CidadesEstabelecimento from "App/Models/CidadesEstabelecimento";

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

    for (let i = 2; i <= 20; i++) {
      await User.create({
        email: `estabelecimento${i}@email.com`,
        password: "Senha123*",
        tipo: "estabelecimentos",
      });
    }
    for (let i = 2; i <= 20; i++) {
      await Estabelecimento.create({
        nome: `Estabelecimento ${i}`,
        logo: `https://picsum.photos/id/${i}/200/200`,
        online: true,
        bloqueado: false,
        userId: i,
      });
    }

    await Estado.createMany([
      {
        nome: "Minas Gerais",
        uf: "MG",
      },
      {
        nome: "Espirito Santo",
        uf: "ES",
      },
    ]);

    await Cidade.createMany([
      {
        nome: "Aimorés",
        estado_id: 1,
      },
      {
        nome: "Colatina",
        estado_id: 2,
      },
    ]);

    for (let i = 1; i <= 20; i++) {
      await CidadesEstabelecimento.create({
        cidade_id: faker.datatype.number({ min: 1, max: 2 }),
        estabelecimento_id: i,
        custo_entrega: faker.datatype.float({
          min: 0,
          max: 3,
          precision: 0.5,
        }),
      });
    }
  }
}
