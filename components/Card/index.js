import { Image, FlatList, SafeAreaView, Text, View } from "react-native";

import styles from "./styles";
import data from "../../assets/data/data";

const Item = ({ picture, author, about, tags, comments }) => (
  <View style={styles.container}>
    <Image style={styles.picture} source={{ uri: picture }} />
    <View style={styles.containerInfo}>
      <Text style={styles.about}>{about.split(" ").slice(0, 8).join(" ")}</Text>
      <Text style={styles.author}>by: {author}</Text>
      <View style={styles.containerTags}>
        {tags.slice(0, 2).map((tag, key) => {
          return <Text style={styles.tag}>{(key, tag)}</Text>;
        })}
      </View>
      <View style={styles.containerComment}>
        <Image
          style={styles.pictureComment}
          source={require("../../assets/comentariosss.png")}
        />
        <Text style={styles.comment}>{`${comments.length} Comments`}</Text>
      </View>
    </View>
  </View>
);

const Cards = () => {
  const renderItem = ({ item }) => (
    <Item
      picture={item.picture}
      author={item.author}
      about={item.about}
      tags={item.tags}
      comments={item.comments}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={{ width: "100%", height: 1, backgroundColor: "#000" }} />
        )}
      />
    </SafeAreaView>
  );
};

export default Cards;
