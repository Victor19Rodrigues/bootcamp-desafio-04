import React, { Component } from "react";

import Post from "./Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Vaiols Nedewi",
          avatar: "https://randomuser.me/api/portraits/lego/1.jpg"
        },
        date: "28 de Agosto de 2019",
        content:
          "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Casamentiss faiz malandris se pirulitá. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Quem num gosta di mé, boa gentis num é.",
        comments: [
          {
            id: 1,
            author: {
              name: "Gapuyn Guinin",
              avatar: "https://randomuser.me/api/portraits/lego/3.jpg"
            },
            content:
              "Delegadis gente finis, bibendum egestas augue arcu ut est. Manduma pindureta quium dia nois paga. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget."
          },
          {
            id: 2,
            author: {
              name: "Noarki Tyuxyu",
              avatar: "https://randomuser.me/api/portraits/lego/4.jpg"
            },
            content:
              "Paisis, filhis, espiritis santis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Pra lá , depois divoltis porris, paradis. Si num tem leite então bota uma pinga aí cumpadi!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Himari Enasxe",
          avatar: "https://randomuser.me/api/portraits/lego/8.jpg"
        },
        date: "01 Jul 2019",
        content:
          "Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Leite de capivaris, leite de mula manquis sem cabeça. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.",
        comments: [
          {
            id: 1,
            author: {
              name: "Arrilu Tyuxyu",
              avatar: "https://randomuser.me/api/portraits/lego/9.jpg"
            },
            content:
              "A ordem dos tratores não altera o pão duris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Suco de cevadiss deixa as pessoas mais interessantis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl."
          },
          {
            id: 2,
            author: {
              name: "Sanifu Usbron",
              avatar: "https://randomuser.me/api/portraits/lego/6.jpg"
            },
            content:
              "Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Pra lá , depois divoltis porris, paradis. Aenean aliquam molestie leo, vitae iaculis nisl. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl."
          },
          {
            id: 3,
            author: {
              name: "Heihar Metyur",
              avatar: "https://randomuser.me/api/portraits/lego/5.jpg"
            },
            content:
              "Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Paisis, filhis, espiritis santis."
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Arhoun Nuwyan",
          avatar: "https://randomuser.me/api/portraits/lego/4.jpg"
        },
        date: "01 Jul 2019",
        content:
          "Atirei o pau no gatis, per gatis num morreus. Si num tem leite então bota uma pinga aí cumpadi! Viva Forevis aptent taciti sociosqu ad litora torquent. Copo furadis é disculpa de bebadis, arcu quam euismod magna.",
        comments: [
          {
            id: 1,
            author: {
              name: "Rauonr Arrilu",
              avatar: "https://randomuser.me/api/portraits/lego/6.jpg"
            },
            content:
              "Sapien in monti palavris qui num significa nadis i pareci latim.  Viva Forevis aptent taciti sociosqu ad litora torquent. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. In elementis mé pra quem é amistosis quis leo."
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="post-list">
        {this.state.posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
