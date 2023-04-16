import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Cidade from "App/Models/Cidade";
import CidadesEstabelecimento from "App/Models/CidadesEstabelecimento";
import Estabelecimento from "App/Models/Estabelecimento";
import Pedido from "App/Models/Pedido";

export default class EstabelecimentosController {
  public async pedidos({ response, auth }: HttpContextContract) {
    const userAuth = await auth.use("api").authenticate();
    const estabeleicmento = await Estabelecimento.findByOrFail(
      "user_id",
      userAuth.id
    );

    const pedidos = await Pedido.query()
      .where("estabelecimento_id", estabeleicmento.id)
      .preload("cliente")
      .preload("pedido_status", (statusQuery) => {
        statusQuery.preload("status");
      })
      .orderBy("pedido_id", "desc");

    return response.ok(pedidos);
  }

  public async show({ response, params }: HttpContextContract) {
    const idEstab: number = params.id;

    let arrayCidades: any = [];
    const cidades = await CidadesEstabelecimento.query().where(
      "estabelecimento_id",
      idEstab
    );

    for await (const cidade of cidades) {
      const cidade_ = await Cidade.findByOrFail("id", cidade.cidade_id);
      arrayCidades.push({
        id: cidade_.id,
        cidade: cidade_.nome,
        custo_entrega: cidade.custo_entrega,
      });
    }

    const estabelecimento = await Estabelecimento.query()
      .where("id", idEstab)
      .preload("categorias", (categoriasQuery) => {
        categoriasQuery.preload("produtos");
      })
      .preload("meiospagamentos")
      .firstOrFail();

    return response.ok({
      id: estabelecimento.id,
      nome: estabelecimento.nome,
      logo: estabelecimento.logo,
      bloqueado: estabelecimento.bloqueado,
      online: estabelecimento.online,
      cidades: arrayCidades,
      meios_pagamentos: estabelecimento.meiospagamentos,
      categorias: estabelecimento.categorias,
    });
  }
}
