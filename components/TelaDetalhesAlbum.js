// components/TelaDetalhesAlbum.js
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import estilos from '../css/estilo';

const TelaDetalhesAlbum = ({ album, aoVoltar }) => {
  if (!album) {
    return <Text style={estilos.estilosDetalhesAlbum.errorText}>Detalhes do álbum não disponíveis.</Text>;
  }

  return (
    <SafeAreaView style={estilos.estilosDetalhesAlbum.container}>
      <TouchableOpacity onPress={aoVoltar} style={estilos.estilosDetalhesAlbum.backButton}>
        <Text style={estilos.estilosDetalhesAlbum.backButtonText}>{'< Voltar para Galeria'}</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={estilos.estilosDetalhesAlbum.scrollContent}>
        <Text style={estilos.estilosDetalhesAlbum.title}>{album.title}</Text>
        <Text style={estilos.estilosDetalhesAlbum.year}>{album.year}</Text>
        <Image
          source={album.image}
          style={estilos.estilosDetalhesAlbum.albumCover}
          accessibilityLabel={`Capa do álbum ${album.title}`}
        />
        <Text style={estilos.estilosDetalhesAlbum.description}>{album.description}</Text>

        {album.highlightedTrack && (
          <View style={estilos.estilosDetalhesAlbum.highlightedTrackContainer}>
            <Text style={estilos.estilosDetalhesAlbum.highlightedTrackTitle}>Música em Destaque:</Text>
            <Text style={estilos.estilosDetalhesAlbum.highlightedTrackItem}>{album.highlightedTrack}</Text>
            {album.highlightedTrackDescription && (
              <Text style={estilos.estilosDetalhesAlbum.highlightedTrackDescriptionText}>
                {album.highlightedTrackDescription}
              </Text>
            )}
          </View>
        )}

        {album.tracks && album.tracks.length > 0 && (
          <View style={estilos.estilosDetalhesAlbum.tracksContainer}>
            <Text style={estilos.estilosDetalhesAlbum.tracksTitle}>Todas as Músicas:</Text>
            {album.tracks.map((faixa, indice) => (
              <Text
                key={indice}
                style={[
                  estilos.estilosDetalhesAlbum.trackItem,
                  faixa === album.highlightedTrack && estilos.estilosDetalhesAlbum.trackItemHighlighted,
                ]}
              >
                {`${indice + 1}. ${faixa}`}
              </Text>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TelaDetalhesAlbum;
