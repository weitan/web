export default function camelcase(str) {
  const [first, ...rest] = str.split('-');
  return first + rest.map(i => `${i[0].toUpperCase()}${i.slice(1)}`).join('');
}
