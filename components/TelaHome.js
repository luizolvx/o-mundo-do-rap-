// components/TelaHome.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import TelaDetalhesAlbum from './TelaDetalhesAlbum';
import estilos from '../css/estilo';

const dadosDosAlbuns = [
  {
    id: 'illmatic',
    title: 'Illmatic',
    artist: 'Nas',
    year: 1994,
    image: require('../assets/imagens/illmatic.jpeg'),
    description: 'Illmatic é o álbum de estreia de Nas, lançado em 1994. É amplamente considerado um marco no hip hop, elogiado por suas letras complexas, produção inovadora e representação vívida da vida no Queensbridge. O álbum consolidou a reputação de Nas como um dos letristas mais talentosos de sua geração.',
    tracks: [
      'The Genesis',
      'N.Y. State of Mind',
      'Life\'s a Bitch (feat. AZ)',
      'The World Is Yours',
      'Halftime',
      'Memory Lane (Sittin\' in da Park)',
      'One Love',
      'One Time 4 Your Mind',
      'Represent',
      'It Ain\'t Hard to Tell',
    ],
    highlightedTrack: 'N.Y. State of Mind',
    highlightedTrackDescription: 'Uma das faixas mais aclamadas de Nas, esta música é uma representação crua e vívida da vida nas ruas de Nova York, com letras complexas e um fluxo impecável.',
  },
  {
    id: 'itwaswritten',
    title: 'It Was Written',
    artist: 'Nas',
    year: 1996,
    image: require('../assets/imagens/itWasWritten.jpeg'),
    description: 'It Was Written é o segundo álbum de estúdio de Nas, lançado em 1996. Apresenta uma sonoridade mais comercial em comparação com Illmatic, com produção de grandes nomes como Dr. Dre e Trackmasters. Inclui sucessos como "If I Ruled the World (Imagine That)" e "Street Dreams", expandindo seu apelo sem sacrificar a profundidade lírica.',
    tracks: [
      'Album Intro',
      'The Message',
      'Street Dreams',
      'I Gave You Power',
      'Remember the Times (Intro)',
      'Watch Dem Niggas',
      'Take It In Blood',
      'The Set Up',
      'Black Girl Lost (feat. JoJo Hailey)',
      'Nas Is Coming (feat. Dr. Dre)',
      'Makings of a Perfect Bitch',
      'If I Ruled the World (Imagine That) (feat. Lauryn Hill)',
      'Silent Murder',
      'Street Dreams (Remix)',
    ],
    highlightedTrack: 'If I Ruled the World (Imagine That)',
    highlightedTrackDescription: 'Com a participação de Lauryn Hill, esta música é um hino reflexivo onde Nas contempla como ele mudaria o mundo se tivesse o poder, abordando temas de justiça social e comunidade.',
  },
  {
    id: 'meagainsttheworld',
    title: 'Me Against the World',
    artist: '2Pac',
    year: 1995,
    image: require('../assets/imagens/meAgainstTheWorld.webp'),
    description: 'Me Against the World é o terceiro álbum de estúdio do rapper americano 2Pac, lançado em 1995. O álbum é notável por seu conteúdo lírico introspectivo, que reflete seus sentimentos de isolamento e paranoia. É amplamente considerado uma de suas obras mais poéticas e aclamadas pela crítica.',
    tracks: [
      'Intro',
      'If I Die 2Nite',
      'Me Against the World (feat. Dramacydal)',
      'So Many Tears',
      'Temptations',
      'Old School',
      'Lord Knows',
      'Dear Mama',
      'It Ain\'t Easy',
      'Can U Get Away',
      'Violent By Nature',
      'Thug Passion',
      'Fuck the World',
      'Death Around the Corner',
      'Only God Can Judge Me',
    ],
    highlightedTrack: 'Dear Mama',
    highlightedTrackDescription: 'Uma emocionante homenagem de 2Pac à sua mãe, Afeni Shakur, expressando amor, gratidão e reconhecimento pelos sacrifícios que ela fez. É amplamente considerada uma das melhores canções dedicadas a mães na história da música.',
  },
  {
    id: 'alleyezonme',
    title: 'All Eyez on Me',
    artist: '2Pac',
    year: 1996,
    image: require('../assets/imagens/allEyezOnMe.jpeg'),
    description: 'All Eyez on Me é o quarto álbum de estúdio do rapper americano 2Pac, lançado em 1996. É um álbum duplo e um dos mais vendidos de todos os tempos. Caracterizado por seu som mais upbeat e focado em festas, é um marco na história do hip hop.',
    tracks: [
      'Ambitionz Az a Ridah',
      'All About U (feat. Snoop Dogg, Nate Dogg, Fatal & Yaki Kadafi)',
      '2 of Amerikaz Most Wanted (feat. Snoop Dogg)',
      'California Love (feat. Dr. Dre)',
      'I Ain\'t Mad at Cha (feat. Danny Boy)',
      'What\'s Ya Phone #',
      'Can\'t C Me',
      'Shorty Wanna Be a Thug',
      'Holla at Me',
      'Wonda Why They Call U Bytch',
      'When We Ride (feat. Outlawz)',
      'Thug Passion',
      'Picture Me Rollin\'',
      'Check Out Time',
      'Rather Be Ya Nigga',
      'All Eyez on Me',
      'Run tha Streetz',
      'Ain\'t No Fun (If the Homies Can\'t Have None) (feat. Nate Dogg, Kurupt & Snoop Dogg)',
      'Money Don\'t Make U Rich',
      'How Do U Want It (feat. K-Ci & JoJo)',
      'Hit \'Em Up',
      'Skandalouz (feat. Nate Dogg)',
      'Only God Can Judge Me',
      'Heartz of Men',
      'Life Goes On',
      'Picture Me Rollin\'',
      'I Ain\'t Mad at Cha',
    ],
    highlightedTrack: 'California Love',
    highlightedTrackDescription: 'Um dos maiores sucessos de 2Pac, com a participação de Dr. Dre. É um hino vibrante para a Califórnia, celebrando o estilo de vida da Costa Oeste com um som funk contagiante.',
  },
  {
    id: 'readytodie',
    title: 'Ready to Die',
    artist: 'The Notorious B.I.G.',
    year: 1994,
    image: require('../assets/imagens/readyToDie.jpeg'),
    description: 'Ready to Die é o álbum de estreia do rapper americano The Notorious B.I.G., lançado em 1994. É amplamente aclamado pela crítica e é considerado um dos álbuns mais importantes da história do hip hop. As letras de Biggie exploram temas como a vida nas ruas, violência e sonhos de sucesso.',
    tracks: [
      'Intro',
      'Things Done Changed',
      'Gimme the Loot',
      'Machine Gun Funk',
      'Warning',
      'Ready to Die',
      'One More Chance',
      'Fuck Me (Interlude)',
      'The What (feat. Method Man)',
      'Juicy',
      'Everyday Struggle',
      'Me & My Bitch',
      'Big Poppa',
      'Respect',
      'Friend of Mine',
      'Unbelievable',
      'Suicidal Thoughts',
      'Who Shot Ya?',
    ],
    highlightedTrack: 'Juicy',
    highlightedTrackDescription: 'Uma narrativa inspiradora sobre a ascensão de Biggie da pobreza ao sucesso no rap, detalhando suas origens humildes e o impacto que o hip hop teve em sua vida. É uma das músicas mais icônicas e celebratórias do gênero.',
  },
  {
    id: 'lifeafterdeath',
    title: 'Life After Death',
    artist: 'The Notorious B.I.G.',
    year: 1997,
    image: require('../assets/imagens/lifeAfterDeath.jpeg'),
    description: 'Life After Death é o segundo e último álbum de estúdio do rapper americano The Notorious B.I.G., lançado postumamente em 1997. É um álbum duplo que apresenta uma ampla gama de estilos e temas, consolidando seu legado como um dos maiores rappers de todos os tempos. Contém sucessos como "Hypnotize" e "Mo Money Mo Problems".',
    tracks: [
      'Life After Death Intro',
      'Somebody\'s Gotta Die',
      'Hypnotize',
      'Kick in the Door',
      'Fuck You Tonight (feat. R. Kelly)',
      'Last Day (feat. The Lox)',
      'I Love the Dough (feat. Jay-Z & Angela Winbush)',
      'What\'s Beef?',
      'B.I.G. Interlude',
      'Mo Money Mo Problems (feat. Puff Daddy & Mase)',
      'Niggas Bleed',
      'I Got a Story to Tell',
      'Notorious Thugs (feat. Bone Thugs-n-Harmony)',
      'Miss U (feat. 112)',
      'Another One Bites the Dust',
      'Ten Crack Commandments',
      'Playa Hater',
      'Nasty Boy',
      'Things Done Changed',
      'You\'re Nobody (Til Somebody Kills You)',
      'Still Can\'t Stop the Reign',
      'My Downfall (feat. DMC)',
      'Long Kiss Goodnight',
      'You\'re Nobody (Til Somebody Kills You)',
    ],
    highlightedTrack: 'Hypnotize',
    highlightedTrackDescription: 'Um single de sucesso com um refrão cativante e produção impecável, "Hypnotize" mostra o carisma e a fluidez lírica de Biggie, tornando-se um de seus maiores sucessos comerciais e um clássico da festa.',
  },
];

const TelaHome = () => {
  const [abaAtiva, setAbaAtiva] = useState('musica');
  const [idAlbumSelecionado, setIdAlbumSelecionado] = useState(null);

  const voltarParaGaleria = () => {
    setIdAlbumSelecionado(null);
  };

  const renderizarConteudo = () => {
    switch (abaAtiva) {
      case 'musica':
        return (
          <ScrollView contentContainerStyle={estilos.estilosHome.contentScroll}>
            <Text style={estilos.estilosHome.contentTitle}>Clássicos do Rap dos Anos 90</Text>
            {dadosDosAlbuns.map((album) => (
                <View key={album.id} style={estilos.estilosHome.songItem}>
                    <Image
                      source={album.image}
                      style={estilos.estilosHome.songCover}
                      accessibilityLabel={`Capa do álbum ${album.title} de ${album.artist}`}
                    />
                    <View>
                        <Text style={estilos.estilosHome.songTitle}>{album.title}</Text>
                        <Text style={estilos.estilosHome.songArtist}>{album.artist} ({album.year})</Text>
                        <View style={estilos.estilosHome.tracksPreview}>
                          {album.tracks.slice(0, 2).map((faixa, indice) => (
                            <Text key={indice} style={estilos.estilosHome.trackPreviewText}>- {faixa}</Text>
                          ))}
                          {album.tracks.length > 2 && <Text style={estilos.estilosHome.trackPreviewText}>...</Text>}
                        </View>
                    </View>
                </View>
            ))}
          </ScrollView>
        );
      case 'biografia':
        return (
          <ScrollView contentContainerStyle={estilos.estilosHome.contentScroll}>
            <Text style={estilos.estilosHome.contentTitle}>Lendas do Rap dos Anos 90</Text>

            <Text style={estilos.estilosHome.contentText}>
              O rap dos anos 90 foi uma era dourada, marcada por inovação lírica, produção musical influente e uma explosão de subgêneros que moldaram a cultura hip hop para sempre. Artistas como Nas, 2Pac e The Notorious B.I.G. se tornaram ícones, cada um com um estilo único e narrativas poderosas que ressoavam com milhões.
            </Text>
            <Text>{'\n'}</Text> {/* Pulo de linha */}

            <Text style={estilos.estilosHome.contentText}>
              <Text style={{fontWeight: 'bold'}}>Nas:</Text> Conhecido por suas letras complexas e introspectivas, Nas surgiu de Queensbridge com seu aclamado álbum "Illmatic" em 1994, solidificando seu lugar como um mestre da poesia e do storytelling no hip hop.
            </Text>
            <Text>{'\n'}</Text> {/* Pulo de linha */}

            <Text style={estilos.estilosHome.contentText}>
              <Text style={{fontWeight: 'bold'}}>2Pac (Tupac Shakur):</Text> Uma figura carismática e controversa, 2Pac dominou as paradas com sua energia crua e letras que abordavam desde a vida nas ruas e desigualdade social até festas e amor. Álbuns como "Me Against the World" e "All Eyez on Me" definiram sua carreira antes de sua trágica morte em 1996.
            </Text>
            <Text>{'\n'}</Text> {/* Pulo de linha */}

            <Text style={estilos.estilosHome.contentText}>
              <Text style={{fontWeight: 'bold'}}>The Notorious B.I.G. (Biggie Smalls):</Text> De Brooklyn, Biggie se destacou com seu fluxo inconfundível e letras detalhadas. Seu álbum de estreia, "Ready to Die" (1994), e o póstumo "Life After Death" (1997) são considerados obras-primas, consolidando-o como um gigante lírico e um dos mais importantes da Costa Leste.
            </Text>
            <Text>{'\n'}</Text> {/* Pulo de linha */}

            <Text style={estilos.estilosHome.contentText}>
              Esses artistas, entre muitos outros, não apenas criaram músicas atemporais, mas também influenciaram a moda, a linguagem e o comportamento, deixando um legado indelével que continua a inspirar novas gerações de artistas e fãs de hip hop.
            </Text>
          </ScrollView>
        );
      case 'galeria':
        if (idAlbumSelecionado) {
          const album = dadosDosAlbuns.find((a) => a.id === idAlbumSelecionado);
          return <TelaDetalhesAlbum album={album} aoVoltar={voltarParaGaleria} />;
        }
        return (
          <ScrollView contentContainerStyle={estilos.estilosHome.contentScroll}>
            <Text style={estilos.estilosHome.contentTitle}>Álbuns Clássicos do Rap dos Anos 90</Text>
            <View style={estilos.estilosHome.galleryGrid}>
              {dadosDosAlbuns.map((album) => (
                <TouchableOpacity key={album.id} onPress={() => setIdAlbumSelecionado(album.id)}>
                  <Image
                    source={album.image}
                    style={estilos.estilosHome.galleryImage}
                    accessibilityLabel={`Capa do álbum ${album.title} de ${album.artist}`}
                  />
                  <Text style={estilos.estilosHome.galleryImageText}>{album.title}{'\n'}({album.artist})</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={estilos.estilosHome.container}>
      <View style={estilos.estilosHome.header}>
        <Text style={estilos.estilosHome.headerText}>O Mundo do Rap dos Anos 90</Text>
      </View>

      <View style={estilos.estilosHome.contentArea}>
        {renderizarConteudo()}
      </View>

      <View style={estilos.estilosHome.menuBar}>
        <TouchableOpacity
          style={[estilos.estilosHome.menuItem, abaAtiva === 'musica' && estilos.estilosHome.activeMenuItem]}
          onPress={() => { setAbaAtiva('musica'); setIdAlbumSelecionado(null); }}
        >
          <Text style={[estilos.estilosHome.menuText, abaAtiva === 'musica' && estilos.estilosHome.activeMenuText]}>Música</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[estilos.estilosHome.menuItem, abaAtiva === 'biografia' && estilos.estilosHome.activeMenuItem]}
          onPress={() => { setAbaAtiva('biografia'); setIdAlbumSelecionado(null); }}
        >
          <Text style={[estilos.estilosHome.menuText, abaAtiva === 'biografia' && estilos.estilosHome.activeMenuText]}>Biografia</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[estilos.estilosHome.menuItem, abaAtiva === 'galeria' && estilos.estilosHome.activeMenuItem]}
          onPress={() => { setAbaAtiva('galeria'); setIdAlbumSelecionado(null); }}
        >
          <Text style={[estilos.estilosHome.menuText, abaAtiva === 'galeria' && estilos.estilosHome.activeMenuText]}>Galeria</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TelaHome;
