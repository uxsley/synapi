var express = require('express');
var router = express.Router();

let data = [
    "Abadia dos Dourados",
    "Abaeté",
    "Abre Campo",
    "Acaiaca",
    "Açucena",
    "Água Boa",
    "Água Comprida",
    "Aguanil",
    "Águas Formosas",
    "Águas Vermelhas",
    "Aimorés",
    "Aiuruoca",
    "Alagoa",
    "Albertina",
    "Além Paraíba",
    "Alfenas",
    "Alfredo Vasconcelos",
    "Almenara",
    "Alpercata",
    "Alpinópolis",
    "Alterosa",
    "Alto Caparaó",
    "Alto Jequitibá",
    "Alto Rio Doce",
    "Alvarenga",
    "Alvinópolis",
    "Alvorada de Minas",
    "Amparo do Serra",
    "Andradas",
    "Andrelândia",
    "Angelândia",
    "Antônio Carlos",
    "Antônio Dias",
    "Antônio Prado de Minas",
    "Araçaí",
    "Aracitaba",
    "Araçuaí",
    "Araguari",
    "Arantina",
    "Araponga",
    "Araporã",
    "Arapuá",
    "Araújos",
    "Araxá",
    "Arceburgo",
    "Arcos",
    "Areado",
    "Argirita",
    "Aricanduva",
    "Arinos",
    "Astolfo Dutra",
    "Ataléia",
    "Augusto de Lima",
    "Baependi",
    "Baldim",
    "Bambuí",
    "Bandeira",
    "Bandeira do Sul",
    "Barão de Cocais",
    "Barão de Monte Alto",
    "Barbacena",
    "Barra Longa",
    "Barroso",
    "Bela Vista de Minas",
    "Belmiro Braga",
    "Belo Horizonte",
    "Belo Oriente",
    "Belo Vale",
    "Berilo",
    "Berizal",
    "Bertópolis",
    "Betim",
    "Bias Fortes",
    "Bicas",
    "Biquinhas",
    "Boa Esperança",
    "Bocaina de Minas",
    "Bocaiúva",
    "Bom Despacho",
    "Bom Jardim de Minas",
    "Bom Jesus da Penha",
    "Bom Jesus do Amparo",
    "Bom Jesus do Galho",
    "Bom Repouso",
    "Bom Sucesso",
    "Bonfim",
    "Bonfinópolis de Minas",
    "Bonito de Minas",
    "Borda da Mata",
    "Botelhos",
    "Botumirim",
    "Brás Pires",
    "Brasilândia de Minas",
    "Brasília de Minas",
    "Brasópolis",
    "Braúnas",
    "Brumadinho",
    "Bueno Brandão",
    "Buenópolis",
    "Bugre",
    "Buritis",
    "Buritizeiro",
    "Cabeceira Grande",
    "Cabo Verde",
    "Cachoeira da Prata",
    "Cachoeira de Minas",
    "Cachoeira de Pajeú",
    "Cachoeira Dourada",
    "Caetanópolis",
    "Caeté",
    "Caiana",
    "Cajuri",
    "Caldas",
    "Camacho",
    "Camanducaia",
    "Cambuí",
    "Cambuquira",
    "Campanário",
    "Campanha",
    "Campestre",
    "Campina Verde",
    "Campo Azul",
    "Campo Belo",
    "Campo do Meio",
    "Campo Florido",
    "Campos Altos",
    "Campos Gerais",
    "Cana Verde",
    "Canaã",
    "Canápolis",
    "Candeias",
    "Cantagalo",
    "Caparaó",
    "Capela Nova",
    "Capelinha",
    "Capetinga",
    "Capim Branco",
    "Capinópolis",
    "Capitão Andrade",
    "Capitão Enéas",
    "Capitólio",
    "Caputira",
    "Caraí",
    "Caranaíba",
    "Carandaí",
    "Carangola",
    "Caratinga",
    "Carbonita",
    "Careaçu",
    "Carlos Chagas",
    "Carmésia",
    "Carmo da Cachoeira",
    "Carmo da Mata",
    "Carmo de Minas",
    "Carmo do Cajuru",
    "Carmo do Paranaíba",
    "Carmo do Rio Claro",
    "Carmópolis de Minas",
    "Carneirinho",
    "Carrancas",
    "Carvalhópolis",
    "Carvalhos",
    "Casa Grande",
    "Cascalho Rico",
    "Cássia",
    "Cataguases",
    "Catas Altas",
    "Catas Altas da Noruega",
    "Catuji",
    "Catuti",
    "Caxambu",
    "Cedro do Abaeté",
    "Central de Minas",
    "Centralina",
    "Chácara",
    "Chalé",
    "Chapada do Norte",
    "Chapada Gaúcha",
    "Chiador",
    "Cipotânea",
    "Claraval",
    "Claro dos Poções",
    "Cláudio",
    "Coimbra",
    "Coluna",
    "Comendador Gomes",
    "Comercinho",
    "Conceição da Aparecida",
    "Conceição da Barra de Minas",
    "Conceição das Alagoas",
    "Conceição das Pedras",
    "Conceição de Ipanema",
    "Conceição do Mato Dentro",
    "Conceição do Pará",
    "Conceição do Rio Verde",
    "Conceição dos Ouros",
    "Cônego Marinho",
    "Confins",
    "Congonhal",
    "Congonhas",
    "Congonhas do Norte",
    "Conquista",
    "Conselheiro Lafaiete",
    "Conselheiro Pena",
    "Consolação",
    "Contagem",
    "Coqueiral",
    "Coração de Jesus",
    "Cordisburgo",
    "Cordislândia",
    "Corinto",
    "Coroaci",
    "Coromandel",
    "Coronel Fabriciano",
    "Coronel Murta",
    "Coronel Pacheco",
    "Coronel Xavier Chaves",
    "Córrego Danta",
    "Córrego do Bom Jesus",
    "Córrego Fundo",
    "Córrego Novo",
    "Couto de Magalhães de Minas",
    "Crisólita",
    "Cristais",
    "Cristália",
    "Cristiano Otoni",
    "Cristina",
    "Crucilândia",
    "Cruzeiro da Fortaleza",
    "Cruzília",
    "Cuparaque",
    "Curral de Dentro",
    "Curvelo",
    "Datas",
    "Delfim Moreira",
    "Delfinópolis",
    "Delta",
    "Descoberto",
    "Desterro de Entre Rios",
    "Desterro do Melo",
    "Diamantina",
    "Diogo de Vasconcelos",
    "Dionísio",
    "Divinésia",
    "Divino",
    "Divino das Laranjeiras",
    "Divinolândia de Minas",
    "Divinópolis",
    "Divisa Alegre",
    "Divisa Nova",
    "Divisópolis",
    "Dom Bosco",
    "Dom Cavati",
    "Dom Joaquim",
    "Dom Silvério",
    "Dom Viçoso",
    "Dona Euzébia",
    "Dores de Campos",
    "Dores de Guanhães",
    "Dores do Indaiá",
    "Dores do Turvo",
    "Doresópolis",
    "Douradoquara",
    "Durandé",
    "Elói Mendes",
    "Engenheiro Caldas",
    "Engenheiro Navarro",
    "Entre Folhas",
    "Entre Rios de Minas",
    "Ervália",
    "Esmeraldas",
    "Espera Feliz",
    "Espinosa",
    "Espírito Santo do Dourado",
    "Estiva",
    "Estrela Dalva",
    "Estrela do Indaiá",
    "Estrela do Sul",
    "Eugenópolis",
    "Ewbank da Câmara",
    "Extrema",
    "Fama",
    "Faria Lemos",
    "Felício dos Santos",
    "Felisburgo",
    "Felixlândia",
    "Fernandes Tourinho",
    "Ferros",
    "Fervedouro",
    "Florestal",
    "Formiga",
    "Formoso",
    "Fortaleza de Minas",
    "Fortuna de Minas",
    "Francisco Badaró",
    "Francisco Dumont",
    "Francisco Sá",
    "Franciscópolis",
    "Frei Gaspar",
    "Frei Inocêncio",
    "Frei Lagonegro",
    "Fronteira",
    "Fronteira dos Vales",
    "Fruta de Leite",
    "Frutal",
    "Funilândia",
    "Galiléia",
    "Gameleiras",
    "Glaucilândia",
    "Goiabeira",
    "Goianá",
    "Gonçalves",
    "Gonzaga",
    "Gouveia",
    "Governador Valadares",
    "Grão Mogol",
    "Grupiara",
    "Guanhães",
    "Guapé",
    "Guaraciaba",
    "Guaraciama",
    "Guaranésia",
    "Guarani",
    "Guarará",
    "Guarda-Mor",
    "Guaxupé",
    "Guidoval",
    "Guimarânia",
    "Guiricema",
    "Gurinhatã",
    "Heliodora",
    "Iapu",
    "Ibertioga",
    "Ibiá",
    "Ibiaí",
    "Ibiracatu",
    "Ibiraci",
    "Ibirité",
    "Ibitiúra de Minas",
    "Ibituruna",
    "Icaraí de Minas",
    "Igarapé",
    "Igaratinga",
    "Iguatama",
    "Ijaci",
    "Ilicínea",
    "Imbé de Minas",
    "Inconfidentes",
    "Indaiabira",
    "Indianópolis",
    "Ingaí",
    "Inhapim",
    "Inhaúma",
    "Inimutaba",
    "Ipaba",
    "Ipanema",
    "Ipatinga",
    "Ipiaçu",
    "Ipuiúna",
    "Iraí de Minas",
    "Itabira",
    "Itabirinha de Mantena",
    "Itabirito",
    "Itacambira",
    "Itacarambi",
    "Itaguara",
    "Itaipé",
    "Itajubá",
    "Itamarandiba",
    "Itamarati de Minas",
    "Itambacuri",
    "Itambé do Mato Dentro",
    "Itamogi",
    "Itamonte",
    "Itanhandu",
    "Itanhomi",
    "Itaobim",
    "Itapagipe",
    "Itapecerica",
    "Itapeva",
    "Itatiaiuçu",
    "Itaú de Minas",
    "Itaúna",
    "Itaverava",
    "Itinga",
    "Itueta",
    "Ituiutaba",
    "Itumirim",
    "Iturama",
    "Itutinga",
    "Jaboticatubas",
    "Jacinto",
    "Jacuí",
    "Jacutinga",
    "Jaguaraçu",
    "Jaíba",
    "Jampruca",
    "Janaúba",
    "Januária",
    "Japaraíba",
    "Japonvar",
    "Jeceaba",
    "Jenipapo de Minas",
    "Jequeri",
    "Jequitaí",
    "Jequitibá",
    "Jequitinhonha",
    "Jesuânia",
    "Joaíma",
    "Joanésia",
    "João Monlevade",
    "João Pinheiro",
    "Joaquim Felício",
    "Jordânia",
    "José Gonçalves de Minas",
    "José Raydan",
    "Josenópolis",
    "Juatuba",
    "Juiz de Fora",
    "Juramento",
    "Juruaia",
    "Juvenília",
    "Ladainha",
    "Lagamar",
    "Lagoa da Prata",
    "Lagoa dos Patos",
    "Lagoa Dourada",
    "Lagoa Formosa",
    "Lagoa Grande",
    "Lagoa Santa",
    "Lajinha",
    "Lambari",
    "Lamim",
    "Laranjal",
    "Lassance",
    "Lavras",
    "Leandro Ferreira",
    "Leme do Prado",
    "Leopoldina",
    "Liberdade",
    "Lima Duarte",
    "Limeira do Oeste",
    "Lontra",
    "Luisburgo",
    "Luislândia",
    "Luminárias",
    "Luz",
    "Machacalis",
    "Machado",
    "Madre de Deus de Minas",
    "Malacacheta",
    "Mamonas",
    "Manga",
    "Manhuaçu",
    "Manhumirim",
    "Mantena",
    "Mar de Espanha",
    "Maravilhas",
    "Maria da Fé",
    "Mariana",
    "Marilac",
    "Mário Campos",
    "Maripá de Minas",
    "Marliéria",
    "Marmelópolis",
    "Martinho Campos",
    "Martins Soares",
    "Mata Verde",
    "Materlândia",
    "Mateus Leme",
    "Mathias Lobato",
    "Matias Barbosa",
    "Matias Cardoso",
    "Matipó",
    "Mato Verde",
    "Matozinhos",
    "Matutina",
    "Medeiros",
    "Medina",
    "Mendes Pimentel",
    "Mercês",
    "Mesquita",
    "Minas Novas",
    "Minduri",
    "Mirabela",
    "Miradouro",
    "Miraí",
    "Miravânia",
    "Moeda",
    "Moema",
    "Monjolos",
    "Monsenhor Paulo",
    "Montalvânia",
    "Monte Alegre de Minas",
    "Monte Azul",
    "Monte Belo",
    "Monte Carmelo",
    "Monte Formoso",
    "Monte Santo de Minas",
    "Monte Sião",
    "Montes Claros",
    "Montezuma",
    "Morada Nova de Minas",
    "Morro da Garça",
    "Morro do Pilar",
    "Munhoz",
    "Muriaé",
    "Mutum",
    "Muzambinho",
    "Nacip Raydan",
    "Nanuque",
    "Naque",
    "Natalândia",
    "Natércia",
    "Nazareno",
    "Nepomuceno",
    "Ninheira",
    "Nova Belém",
    "Nova Era",
    "Nova Lima",
    "Nova Módica",
    "Nova Ponte",
    "Nova Porteirinha",
    "Nova Resende",
    "Nova Serrana",
    "Nova União",
    "Novo Cruzeiro",
    "Novo Oriente de Minas",
    "Novorizonte",
    "Olaria",
    "Olhos-d'Água",
    "Olímpio Noronha",
    "Oliveira",
    "Oliveira Fortes",
    "Onça de Pitangui",
    "Oratórios",
    "Orizânia",
    "Ouro Branco",
    "Ouro Fino",
    "Ouro Preto",
    "Ouro Verde de Minas",
    "Padre Carvalho",
    "Padre Paraíso",
    "Pai Pedro",
    "Paineiras",
    "Pains",
    "Paiva",
    "Palma",
    "Palmópolis",
    "Papagaios",
    "Pará de Minas",
    "Paracatu",
    "Paraguaçu",
    "Paraisópolis",
    "Paraopeba",
    "Passa Quatro",
    "Passa Tempo",
    "Passa-Vinte",
    "Passabém",
    "Passos",
    "Patis",
    "Patos de Minas",
    "Patrocínio",
    "Patrocínio do Muriaé",
    "Paula Cândido",
    "Paulistas",
    "Pavão",
    "Peçanha",
    "Pedra Azul",
    "Pedra Bonita",
    "Pedra do Anta",
    "Pedra do Indaiá",
    "Pedra Dourada",
    "Pedralva",
    "Pedras de Maria da Cruz",
    "Pedrinópolis",
    "Pedro Leopoldo",
    "Pedro Teixeira",
    "Pequeri",
    "Pequi",
    "Perdigão",
    "Perdizes",
    "Perdões",
    "Periquito",
    "Pescador",
    "Piau",
    "Piedade de Caratinga",
    "Piedade de Ponte Nova",
    "Piedade do Rio Grande",
    "Piedade dos Gerais",
    "Pimenta",
    "Pingo-d'Água",
    "Pintópolis",
    "Piracema",
    "Pirajuba",
    "Piranga",
    "Piranguçu",
    "Piranguinho",
    "Pirapetinga",
    "Pirapora",
    "Piraúba",
    "Pitangui",
    "Piumhi",
    "Planura",
    "Poço Fundo",
    "Poços de Caldas",
    "Pocrane",
    "Pompéu",
    "Ponte Nova",
    "Ponto Chique",
    "Ponto dos Volantes",
    "Porteirinha",
    "Porto Firme",
    "Poté",
    "Pouso Alegre",
    "Pouso Alto",
    "Prados",
    "Prata",
    "Pratápolis",
    "Pratinha",
    "Presidente Bernardes",
    "Presidente Juscelino",
    "Presidente Kubitschek",
    "Presidente Olegário",
    "Prudente de Morais",
    "Quartel Geral",
    "Queluzito",
    "Raposos",
    "Raul Soares",
    "Recreio",
    "Reduto",
    "Resende Costa",
    "Resplendor",
    "Ressaquinha",
    "Riachinho",
    "Riacho dos Machados",
    "Ribeirão das Neves",
    "Ribeirão Vermelho",
    "Rio Acima",
    "Rio Casca",
    "Rio do Prado",
    "Rio Doce",
    "Rio Espera",
    "Rio Manso",
    "Rio Novo",
    "Rio Paranaíba",
    "Rio Pardo de Minas",
    "Rio Piracicaba",
    "Rio Pomba",
    "Rio Preto",
    "Rio Vermelho",
    "Ritápolis",
    "Rochedo de Minas",
    "Rodeiro",
    "Romaria",
    "Rosário da Limeira",
    "Rubelita",
    "Rubim",
    "Sabará",
    "Sabinópolis",
    "Sacramento",
    "Salinas",
    "Salto da Divisa",
    "Santa Bárbara",
    "Santa Bárbara do Leste",
    "Santa Bárbara do Monte Verde",
    "Santa Bárbara do Tugúrio",
    "Santa Cruz de Minas",
    "Santa Cruz de Salinas",
    "Santa Cruz do Escalvado",
    "Santa Efigênia de Minas",
    "Santa Fé de Minas",
    "Santa Helena de Minas",
    "Santa Juliana",
    "Santa Luzia",
    "Santa Margarida",
    "Santa Maria de Itabira",
    "Santa Maria do Salto",
    "Santa Maria do Suaçuí",
    "Santa Rita de Caldas",
    "Santa Rita de Ibitipoca",
    "Santa Rita de Jacutinga",
    "Santa Rita de Minas",
    "Santa Rita do Itueto",
    "Santa Rita do Sapucaí",
    "Santa Rosa da Serra",
    "Santa Vitória",
    "Santana da Vargem",
    "Santana de Cataguases",
    "Santana de Pirapama",
    "Santana do Deserto",
    "Santana do Garambéu",
    "Santana do Jacaré",
    "Santana do Manhuaçu",
    "Santana do Paraíso",
    "Santana do Riacho",
    "Santana dos Montes",
    "Santo Antônio do Amparo",
    "Santo Antônio do Aventureiro",
    "Santo Antônio do Grama",
    "Santo Antônio do Itambé",
    "Santo Antônio do Jacinto",
    "Santo Antônio do Monte",
    "Santo Antônio do Retiro",
    "Santo Antônio do Rio Abaixo",
    "Santo Hipólito",
    "Santos Dumont",
    "São Bento Abade",
    "São Brás do Suaçuí",
    "São Domingos das Dores",
    "São Domingos do Prata",
    "São Félix de Minas",
    "São Francisco",
    "São Francisco de Paula",
    "São Francisco de Sales",
    "São Francisco do Glória",
    "São Geraldo",
    "São Geraldo da Piedade",
    "São Geraldo do Baixio",
    "São Gonçalo do Abaeté",
    "São Gonçalo do Pará",
    "São Gonçalo do Rio Abaixo",
    "São Gonçalo do Rio Preto",
    "São Gonçalo do Sapucaí",
    "São Gotardo",
    "São João Batista do Glória",
    "São João da Lagoa",
    "São João da Mata",
    "São João da Ponte",
    "São João das Missões",
    "São João del Rei",
    "São João do Manhuaçu",
    "São João do Manteninha",
    "São João do Oriente",
    "São João do Pacuí",
    "São João do Paraíso",
    "São João Evangelista",
    "São João Nepomuceno",
    "São Joaquim de Bicas",
    "São José da Barra",
    "São José da Lapa",
    "São José da Safira",
    "São José da Varginha",
    "São José do Alegre",
    "São José do Divino",
    "São José do Goiabal",
    "São José do Jacuri",
    "São José do Mantimento",
    "São Lourenço",
    "São Miguel do Anta",
    "São Pedro da União",
    "São Pedro do Suaçuí",
    "São Pedro dos Ferros",
    "São Romão",
    "São Roque de Minas",
    "São Sebastião da Bela Vista",
    "São Sebastião da Vargem Alegre",
    "São Sebastião do Anta",
    "São Sebastião do Maranhão",
    "São Sebastião do Oeste",
    "São Sebastião do Paraíso",
    "São Sebastião do Rio Preto",
    "São Sebastião do Rio Verde",
    "São Thomé das Letras",
    "São Tiago",
    "São Tomás de Aquino",
    "São Vicente de Minas",
    "Sapucaí-Mirim",
    "Sardoá",
    "Sarzedo",
    "Sem-Peixe",
    "Senador Amaral",
    "Senador Cortes",
    "Senador Firmino",
    "Senador José Bento",
    "Senador Modestino Gonçalves",
    "Senhora de Oliveira",
    "Senhora do Porto",
    "Senhora dos Remédios",
    "Sericita",
    "Seritinga",
    "Serra Azul de Minas",
    "Serra da Saudade",
    "Serra do Salitre",
    "Serra dos Aimorés",
    "Serrania",
    "Serranópolis de Minas",
    "Serranos",
    "Serro",
    "Sete Lagoas",
    "Setubinha",
    "Silveirânia",
    "Silvianópolis",
    "Simão Pereira",
    "Simonésia",
    "Sobrália",
    "Soledade de Minas",
    "Tabuleiro",
    "Taiobeiras",
    "Taparuba",
    "Tapira",
    "Tapiraí",
    "Taquaraçu de Minas",
    "Tarumirim",
    "Teixeiras",
    "Teófilo Otoni",
    "Timóteo",
    "Tiradentes",
    "Tiros",
    "Tocantins",
    "Tocos do Moji",
    "Toledo",
    "Tombos",
    "Três Corações",
    "Três Marias",
    "Três Pontas",
    "Tumiritinga",
    "Tupaciguara",
    "Turmalina",
    "Turvolândia",
    "Ubá",
    "Ubaí",
    "Ubaporanga",
    "Uberaba",
    "Uberlândia",
    "Umburatiba",
    "Unaí",
    "União de Minas",
    "Uruana de Minas",
    "Urucânia",
    "Urucuia",
    "Vargem Alegre",
    "Vargem Bonita",
    "Vargem Grande do Rio Pardo",
    "Varginha",
    "Varjão de Minas",
    "Várzea da Palma",
    "Varzelândia",
    "Vazante",
    "Verdelândia",
    "Veredinha",
    "Veríssimo",
    "Vermelho Novo",
    "Vespasiano",
    "Viçosa",
    "Vieiras",
    "Virgem da Lapa",
    "Virgínia",
    "Virginópolis",
    "Virgolândia",
    "Visconde do Rio Branco",
    "Volta Grande",
    "Wenceslau Braz"];

/* GET home page. */
router.get('/api/cidades', function(req, res, next) {
  res.json(data);
});

module.exports = router;
