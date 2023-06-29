const perScript = () => {
  if (!window.location.hostname) { return }

  const REG = (F) => {
    localStorage.setItem("SR", JSON.stringify(F));
  }

  const GET = () => {
    let res = localStorage.getItem("SR");
    return res ? JSON.parse(res) : [];
  }

  window.ps = {
    add: (...f) => {
      REG([
        ...GET(),
        ...f.filter(f => typeof f === "function").map(f => f + "")
      ]);
    },
    eval: () => {
      GET().forEach(f => eval(f)());
    },
    remove: (...indexes) => {
      indexes.length == 0
        ? REG([])
        : REG(GET().filter((_, i) => !indexes.includes(i)));
    },
    list: () => {
      GET().forEach((f, i) => console.log(`${i} | ${f}`));
    }
  };

  window.ps.eval();

  console.log(
    `PerScript evaluated ${GET().length} scripts on ${window.location.hostname}`,
    '\n`ps` object is available in console'
  );
}

perScript();
