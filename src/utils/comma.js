export function comma(init) {
  return String(init).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
}

export function commaEssence(init) {
  let calc = String(init);
  const arr = calc.split("."); //정수, 소숫점이하 분리
  let first = String(arr[0]).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,"); //정수에 콤마
  if (arr[1] === undefined) {
    return `${first}`;
  } else {
    return `${first}.${arr[1]}`;
  }
}
