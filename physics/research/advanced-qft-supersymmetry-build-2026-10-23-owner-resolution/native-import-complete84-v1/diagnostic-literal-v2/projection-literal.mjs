// Private diagnostic helper: no production checker condition changes.
export function injectReviewLiteral(source, review) {
  const needle = "const review = JSON.parse(readFileSync(path, 'utf8'));";
  if (source.split(needle).length !== 2) throw Error('diagnostic authority-read expression must be unique');
  return source.replace(needle, () => 'const review = ' + JSON.stringify(review) + ';');
}
