/** Escape a literal string for use in a RegExp source. */
function regexEscape(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Remove matching YAML scalar quotes from the small ID lists used here. */
function unquote(value) {
  const text = stripComment(value).trim();
  if (text.length >= 2 && ((text[0] === '"' && text.at(-1) === '"')
    || (text[0] === "'" && text.at(-1) === "'"))) return text.slice(1, -1);
  return text;
}

function stripComment(value) {
  let single = false;
  let double = false;
  for (let i = 0; i < value.length; i++) {
    const char = value[i];
    if (char === "'" && !double) single = !single;
    else if (char === '"' && !single && value[i - 1] !== '\\') double = !double;
    else if (char === '#' && !single && !double && (i === 0 || /\s/.test(value[i - 1]))) {
      return value.slice(0, i);
    }
  }
  return value;
}

/**
 * Read a top-level YAML sequence whose entries are scalar IDs.
 *
 * Repository frontmatter uses both `key: [a, b]` and block form:
 *
 *     key:
 *       - a
 *       - b
 *
 * This intentionally remains a narrow parser rather than a second general YAML
 * implementation. Strict YAML validity is owned by rendercheck's renderer parser.
 */
export function frontmatterList(fm, key) {
  const wrapped = fm.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (wrapped) fm = wrapped[1];
  const escaped = regexEscape(key);
  const inlineStart = fm.search(new RegExp(`^${escaped}:[ \\t]*\\[`, 'm'));
  if (inlineStart >= 0) {
    const open = fm.indexOf('[', inlineStart);
    return flowList(fm, open);
  }

  const header = new RegExp(`^${escaped}:[ \\t]*(?:#.*)?$`, 'm').exec(fm);
  if (!header) return [];
  const tail = fm.slice((header.index ?? 0) + header[0].length).replace(/^\r?\n/, '');
  const firstContent = tail.search(/\S/);
  if (firstContent >= 0 && tail[firstContent] === '[') return flowList(tail, firstContent);
  const values = [];
  for (const line of tail.split(/\r?\n/)) {
    if (!line.trim()) continue;
    // YAML permits a sequence to be indentationless directly below its key.
    const entry = /^[ \t]*-[ \t]+(.+?)[ \t]*$/.exec(line);
    if (!entry) break;
    const value = unquote(entry[1]);
    if (value) values.push(value);
  }
  return values;
}

function flowList(text, open) {
  let depth = 0;
  let end = -1;
  for (let i = open; i < text.length; i++) {
    if (text[i] === '[') depth += 1;
    else if (text[i] === ']' && --depth === 0) {
      end = i;
      break;
    }
  }
  if (end < 0) return [];
  return text.slice(open + 1, end)
    .split(',')
    .map(unquote)
    .filter(Boolean);
}
