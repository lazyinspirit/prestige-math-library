// Pure frontmatter readers shared by content-policy and its regression tests.

function urlsIn(value) {
  return [...value.matchAll(/\burl:\s*("[^"]+"|'[^']+'|[^,\]}\n]+)/g)]
    .map((match) => match[1].trim().replace(/^['"]|['"]$/g, ''));
}

export function referenceUrls(fm) {
  // A sources mapping may be written in YAML block form or as one flow-form
  // mapping. Restrict extraction to its references member so unrelated source
  // metadata cannot satisfy the provenance requirement accidentally.
  const lines = fm.split(/\r?\n/);
  const sourcesIndex = lines.findIndex((line) => /^sources:\s*/.test(line));
  if (sourcesIndex < 0) return [];

  const sourcesTail = lines[sourcesIndex].replace(/^sources:\s*/, '');
  if (sourcesTail.trim()) {
    const flow = [sourcesTail];
    for (let cursor = sourcesIndex + 1; cursor < lines.length; cursor += 1) {
      if (lines[cursor].trim() && !/^\s+/.test(lines[cursor])) break;
      flow.push(lines[cursor]);
    }
    const text = flow.join('\n');
    const references = text.match(/\breferences\s*:\s*([\s\S]*)/);
    return references ? urlsIn(references[1]) : [];
  }

  const referencesIndex = lines.slice(sourcesIndex + 1)
    .findIndex((line) => /^\s{2}references:\s*/.test(line));
  if (referencesIndex < 0) return [];
  const index = sourcesIndex + 1 + referencesIndex;
  const block = [lines[index].replace(/^\s{2}references:\s*/, '')];
  for (let cursor = index + 1; cursor < lines.length; cursor += 1) {
    const line = lines[cursor];
    if (line.trim() && !/^\s{4,}/.test(line)) break;
    block.push(line);
  }
  return urlsIn(block.join('\n'));
}
