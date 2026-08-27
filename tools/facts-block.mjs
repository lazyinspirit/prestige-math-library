// facts-block.mjs — the one parser for `## <Section>` blocks and for the
// `[F#]` / `[A#]` / `[L#]` entries inside `## Facts & Assumptions`.
//
// WHY THIS EXISTS. Five gates read the same two structures out of an item, and
// each had grown its own regex:
//
//   tools/citation-fidelity.mjs          Facts block, line entries
//   tools/proof-contract.mjs             any section, paragraph entries
//   tools/citation-faithfulness-screen.mjs   Facts block by string split
//   tools/truncated-citation.mjs         line entries, unscoped
//   tools/depcheck.mjs                   any section, unanchored
//
// Five spellings of one grammar is five places for a parsing defect to hide,
// and one already did: citation-fidelity's block terminator was written `\Z`,
// which is an end-of-string anchor in Python and Perl and a LITERAL Z in
// JavaScript. `$\mathbb{Z}$` saturates this corpus, so with a lazy body the
// block truncated at the first Z: 35 of frontier-14's 291 contract items lost
// 108 fact lines, and every widening detector downstream went quiet on them
// without a single gate turning red. The end anchor here is `(?![\s\S])` —
// true end of string, no `\Z` lookalike available to reach for.
//
// The five originals were compared entry-by-entry over all 4,986 published
// items before they were replaced. They agree, and the three apparent
// disagreements are each cosmetic:
//
//  1. `^##\s+Facts[^\n]*\n` (prefix heading, citation-fidelity) and
//     `^##\s+Facts & Assumptions\s*$\r?\n` (exact heading, proof-contract)
//     select the same block; the first simply keeps the blank line after the
//     heading, which line- and paragraph-splitting discards. 0/4,986 differ by
//     anything else.
//  2. citation-faithfulness-screen's paragraph regex ends its lazy body at
//     `(?=\n\n\[[LFA]\d+\]|\n*$)`, and under `m` the second branch matches at
//     the first line end — so it read ONE LINE per fact all along, which is
//     exactly `factLines`. Identical on 4,986/4,986.
//  3. depcheck's `## <name>` is unanchored, so `section('Statement')` also
//     matches `## Statement refuted`. depcheck unions the wikilinks of both,
//     so the union is unchanged: identical cited-set on 4,986/4,986.
//
// Both granularities are kept, deliberately. `factLines` reads the first line
// of an entry — enough for a restatement and its trailing citation, and what
// the widening detectors compare. `factParagraphs` reads the whole entry, and
// proof-contract needs that: a fact whose `[[link]]` sits on a continuation
// line is invisible to the line reader, and 138 published items have one.

/** Wikilink targets, `[[id]]` and `[[id|label]]` alike. */
export const wikilinks = (text) =>
  [...String(text ?? '').matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)].map((m) => m[1]);

/** Split an item file into YAML frontmatter and body. */
export function splitFrontmatter(source) {
  const match = String(source ?? '').match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  return match ? { fm: match[1], body: match[2] } : { fm: '', body: String(source ?? '') };
}

/** The body of `## <heading>`, up to the next `##` heading or the end of the
 *  string; `''` when the heading is absent. The heading match is anchored to a
 *  line start and to the end of its own line, so `Statement` does not select
 *  `Statement refuted`. */
export function sectionText(body, heading) {
  const escaped = String(heading).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = String(body ?? '').match(
    new RegExp(`^##\\s+${escaped}\\s*$\\r?\\n([\\s\\S]*?)(?=^##\\s+|(?![\\s\\S]))`, 'm'));
  return match?.[1] ?? '';
}

/** The Facts block, matched on a heading whose text BEGINS `Facts`.
 *
 *  Prefix, not exact, and deliberately so: `## Facts` and
 *  `## Facts & Assumptions` are both written, and a gate that reads one and
 *  silently returns nothing for the other is the failure mode this whole module
 *  exists to end. Every published item today writes the long form — the short
 *  one appears only in fixtures — so widening the match to it changes nothing on
 *  the corpus and stops a hand-written page from going unchecked.
 *
 *  Accepts a whole item file or a bare body. */
export function factsSectionText(text) {
  const match = splitFrontmatter(text).body
    .match(/^##\s+Facts[^\n]*\r?\n([\s\S]*?)(?=^##\s+|(?![\s\S]))/m);
  return match?.[1] ?? '';
}

/** One fact entry's opening line: `[L2] restatement… ([[cited-id]])`. */
export const FACT_LINE_RE = /^\s*\[([FLA]\d+)\]\s*(.+)$/;

/** Parse a single line as a fact entry, or `null`. Callers that must report a
 *  line number keep their own loop and use this; nothing about the regex needs
 *  to be copied to do so. */
export function parseFactLine(line) {
  const match = FACT_LINE_RE.exec(String(line ?? ''));
  return match ? { fact: match[1], text: match[2].trim() } : null;
}

/** Fact entries by their opening line: `[{ fact, text, links }]`, in document
 *  order. `text` is the line after the label, trimmed. */
export function factLines(text) {
  const out = [];
  for (const line of factsSectionText(text).split('\n')) {
    const entry = parseFactLine(line);
    if (entry) out.push({ ...entry, links: wikilinks(entry.text) });
  }
  return out;
}

/** Fact entries as whole blank-line-separated paragraphs, keyed by label:
 *  `Map(label -> { label, text, links })`, where `text` is the full paragraph
 *  INCLUDING its `[F#]` label and `links` covers continuation lines. */
export function factParagraphs(body) {
  const facts = new Map();
  for (const paragraph of factsSectionText(body).split(/\n\s*\n/)) {
    const match = paragraph.trim().match(/^\[([FAL]\d+)\]\s*([\s\S]*)$/);
    if (!match) continue;
    facts.set(match[1], { label: match[1], text: paragraph, links: wikilinks(paragraph) });
  }
  return facts;
}

/** The sections a proof contract may quote from. A citation names one, and the
 *  quote is checked inside it — not against the whole file, where a phrase in
 *  a different section could vouch for a claim it does not make. Remarks are
 *  included because page-level convention records are legitimate fact sources. */
export const SOURCE_SECTIONS = new Set(['Statement', 'Statement refuted', 'Definition', 'Example', 'Remark']);

/** The text a `source_section` quote must be found in, or `null` when the
 *  section is not one a citation may name. `null` is the caller's cue to say so
 *  rather than to silently widen the search back to the whole file. */
export function sourceSectionText(body, section) {
  if (!SOURCE_SECTIONS.has(section)) return null;
  return sectionText(body, section);
}

/** Numbered proof blocks, not merely their opening lines.
 *
 * A proof step begins with `N.N ` at the start of a line and continues until
 * the next numbered step or the end of its proof-like section. Displayed
 * calculations and wrapped prose therefore belong to the step that introduces
 * them. This matters for contracts: a fact cited on a continuation line is
 * still an input to that step, and treating only the opening line as the step
 * made the checker and contract regenerator silently omit it.
 *
 * Returns document order across Proof, Refutation, Counterexample and
 * Verification sections. `text` is the complete block after the step id;
 * `claim` removes only a trailing input tag and proof tombstone; `inputs` is
 * that final tag split on commas. */
export function numberedProofSteps(body) {
  const steps = [];
  for (const heading of ['Proof', 'Refutation', 'Counterexample', 'Verification']) {
    const lines = sectionText(body, heading).split(/\r?\n/);
    for (let index = 0; index < lines.length; index += 1) {
      const opening = lines[index].match(/^(\d+\.\d+)\s+(.+)$/);
      if (!opening) continue;
      const block = [opening[2]];
      while (index + 1 < lines.length && !/^\d+\.\d+\s+/.test(lines[index + 1])) {
        block.push(lines[++index]);
      }
      while (block.length > 1 && block.at(-1) === '') block.pop();
      const text = block.join('\n');
      const tags = [...text.matchAll(/\[([^\[\]]*)\]\s*(?:∎)?\s*(?=\n|$)/g)];
      const finalTag = tags.at(-1);
      const isTrailingTag = finalTag && finalTag.index + finalTag[0].length === text.length;
      const inputs = isTrailingTag
        ? finalTag[1].split(',').map((value) => value.trim()).filter(Boolean)
        : [];
      const claim = (isTrailingTag ? text.slice(0, finalTag.index) : text)
        .replace(/\s*∎\s*$/, '').trim();
      steps.push({ id: opening[1], text, claim, inputs });
    }
  }
  return steps;
}
