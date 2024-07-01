const frutas: Set<string> = new Set<string>();

frutas.add("Kiwi");
frutas.add("Caqui");
frutas.add("Manga");
frutas.add("Banana");

console.table(frutas); 

console.log(`A fruta caqui existe? ${frutas.has("Caqui")}`);

frutas.delete("Caqui");

console.table(frutas);