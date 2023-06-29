(() => {
  const GET = () => {
    let res = localStorage.getItem("PS");
    return res ? JSON.parse(res) : [];
  }

  const REG = (F) => localStorage.setItem("PS", JSON.stringify(F));

  window.ps = {
    add: (...f) => REG([
      ...GET(),
      ...f.filter(f => typeof f === "function").map(f => f + "")
    ]),
    remove: (...indexes) => indexes.length == 0
      ? REG([])
      : REG(GET().filter((_, i) => !indexes.includes(i))),
    eval: () => GET().forEach(f => eval(f)()),
    list: () => GET().forEach((f, i) => console.log(`${i} | ${f}`))
  };

  window.ps.eval();

  console.log(
    `PerScript evaluated ${GET().length} scripts on ${window.location.hostname}`,
    '\n`ps` object is available in console'
  );
})();
