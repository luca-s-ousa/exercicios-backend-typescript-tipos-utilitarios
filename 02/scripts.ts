type Item = {
  nome: string;
  descricao: string;
  valor: number;
};

type Cartao = {
  numero: number;
  validade: string;
  nome: string;
  cvv: number;
};

type Carrinho = {
  item: Item;
  qtd: number;
  desconto: number;
  frete: number;
  tipoTransacao: "credito" | "Debito";
  cartao: Cartao;
};

type Endereco = {
  cep: string;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
};

// type NovoCarrinho = {
//   item: Item;
//   qtd: number;
//   desconto: number;
//   frete: number;
//   tipoTransacao: Lowercase<"credito" | "Debito">;
//   cartao: Cartao;
//   endereco: Endereco;
// };

// outra forma

// junta o tipo Carrinho com o tipo Endereco atraves do &,
// omitindo a propriedade tipoTransacao! E depois adiciono
// esta propriedade adicionado o Lowercase para trata-la

type NovoCarrinho = Omit<Carrinho, "tipoTransacao"> & {
  endereco: Endereco;
  tipoTransacao: Lowercase<"credito" | "Debito">;
};
