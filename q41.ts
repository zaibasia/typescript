const show_magicians = (magiciansArr: string[]) => {
    magiciansArr.map((magician: string) => {
      console.log(magician);
    });
  };
  let magicians: string[] = ["Aladdin", "David", "Lalisar", "John"];
  show_magicians(magicians);