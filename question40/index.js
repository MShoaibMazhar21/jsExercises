const make_album = (artistName, albumName, trackNumber = 1) => {
  const musicAlbum = {
    artistName,
    album: albumName,
  };
  console.log(
    `music artist name is ${musicAlbum.artistName} and album is ${musicAlbum.album} and track nubmer is ${trackNumber}`
  );
};
make_album("atif aslum", "abc");
make_album("Rahat", "cde", 5);
make_album("Ali azmat", "sfd", 2);
