// Research-only hash-free transcription of native detector functions.
// Not a native audit/gate invocation; no hashes or review flags are generated.
import {readFileSync,existsSync,writeFileSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
const outDir=fileURLToPath(new URL('.',import.meta.url));
const scope=JSON.parse(readFileSync(join(outDir,'scope.json'),'utf8'));
const itemsDir='items';
const CASES = ['empty', 'zero', 'one', 'degenerate', 'endpoints', 'nonempty-choice', 'iff-forward', 'iff-reverse'];
const normalise = (text, id, title) => {
  let t = String(text ?? '')
    .replace(/"[^"]*"/g, '<QUOTE>')
    .replace(/“[^”]*”/g, '<QUOTE>')
    .replace(/`[^`]*`/g, '<QUOTE>')
    .replace(/\$[^$]*\$/g, '<MATH>');
  if (id) t = t.split(id).join('<ID>');
  // NOT stripped: the item's own title, though it is substituted text exactly
  // as the id is. Stripping it collapses frontier-15's interpolated rows into
  // 31 clusters — but most of those are honest: "this item states no
  // biconditional" is the true disposition for 45 items and there is only one
  // way to write it. Precision is this tool's whole design, so the title stays
  // in the key and the interpolated-template class is reported by the
  // `checked`-row detector below, which is airtight rather than suggestive.
  if (title) void title;
  for (const c of CASES) t = t.split(c).join('<CASE>');
  return t.toLowerCase().replace(/[^a-z<>]+/g, ' ').trim();
};

/** If step `number` of `proof` only NAMES its checks, return its text; else null.
 *  Kept deliberately narrow: every sentence must open by announcing an activity
 *  and none may state an outcome, so a terse but real discharge does not fire. */
const ANNOUNCE = /^(?:We\s+(?:treat|include|check|cover|handle|address|verify|record|note|consider)|Cover|Treat|Include|Handle|Check|Address|Verify|Note|Consider|The\s+(?:preceding|foregoing|above)\s+(?:argument|steps?|reasoning))\b/i;
const OUTCOME = /(?:,|:|;|\bso\b|\bhence\b|\bthen\b|\bwhich\b|\bgives?\b|\byields?\b|\bforces?\b|\bbecomes?\b|\bequals?\b|\bis\b|\bare\b|\bhas\b|\bmakes?\b)/i;
const announcementStep = (proof, number) => {
  const re = new RegExp(`^${number.replace('.', '\\.')}\\s+([\\s\\S]*?)(?=^\\d+\\.\\d+\\s|\\s*$)`, 'm');
  const raw = re.exec(proof)?.[1];
  if (!raw) return null;
  const text = raw.replace(/\[[^\]]*\]\s*∎?\s*$/m, '').replace(/∎/g, '').trim();
  const sentences = text.split(/(?<=[.!?])\s+/).map((s) => s.trim())
    .filter((s) => s && !/^This proves the stated claim\.?$/i.test(s));
  if (!sentences.length || !sentences.every((s) => ANNOUNCE.test(s))) return null;
  const tail = (s) => s.replace(/^[^,:;]*?\b(?:treat|include|check|cover|handle|address|verify|record|note|consider|argument|steps?|reasoning)\b/i, '');
  if (sentences.some((s) => OUTCOME.test(tail(s)))) return null;
  return text.length > 120 ? `${text.slice(0, 120)}…` : text;
};

/** The item's frontmatter title, for `normalise`. */
const titleOf = (text) => {
  if (!text) return null;
  const m = /^title:[ \t]*(.*)$/m.exec(text.split(/\n---\n/)[0] ?? '');
  return m ? m[1].trim().replace(/^["']|["']$/g, '') : null;
};

const itemText = (() => {
  const cache = new Map();
  return (id) => {
    if (cache.has(id)) return cache.get(id);
    const p = join(itemsDir, `${id}.md`);
    const t = existsSync(p) ? readFileSync(p, 'utf8') : null;
    cache.set(id, t);
    return t;
  };
})();

/** Everything below the frontmatter. Frontmatter titles carry "iff" too, and a
 *  title is not where a proof discharges a direction. */
const body = (text) => {
  const m = /^---\n[\s\S]*?\n---\n/.exec(text);
  return m ? text.slice(m[0].length) : text;
};

/** Split an item into its `## `-delimited sections.
 *
 *  Scoping each detector to the right section is what makes the output
 *  readable. Run whole-body, the biconditional detector fired 256 times on the
 *  frontier-13 corpus, and the first case inspected was a false positive:
 *  `thm-monomial-symmetric-polynomials-form-a-basis` has "exactly when" in its
 *  **Facts & Assumptions** block, inside `[L2]`, which is a QUOTED DEPENDENCY —
 *  someone else's biconditional, not this item's claim. The boundary axis asks
 *  about the top-level claim, so the detector must read the Statement. Same
 *  logic for division: a quoted fact may divide by anything; what matters is
 *  whether THIS proof does. */
const sections = (text) => {
  const out = {};
  const parts = body(text).split(/^##\s+/m);
  for (const part of parts.slice(1)) {
    const nl = part.indexOf('\n');
    const head = (nl < 0 ? part : part.slice(0, nl)).trim().toLowerCase();
    out[head] = nl < 0 ? '' : part.slice(nl + 1);
  }
  return out;
};
const claimOf = (text) => {
  const s = sections(text);
  return s['statement'] ?? s['definition'] ?? s['construction'] ?? '';
};
const proofOf = (text) => {
  const s = sections(text);
  // Every proof-bearing section name the corpus uses: an `ex-`/`cex-` item
  // carries its numbered steps under Example or Counterexample. Scoping to
  // Proof/Verification/Refutation alone made every step reference in a
  // counterexample's boundary row read as "step does not occur".
  return s['proof'] ?? s['verification'] ?? s['refutation']
    ?? s['counterexample'] ?? s['example'] ?? '';
};

// ---------------------------------------------------------------------------
// The three contradiction detectors.
//
// Each returns a short reason string when the axis is exhibited by the text, or
// null. Precision over recall throughout: a detector that fires on a third of
// the corpus is a detector nobody reads.
// ---------------------------------------------------------------------------

/** A biconditional in the item's own prose or TeX. Nearly airtight: if the
 *  claim is an iff, both directions are obligations, full stop. Guarded against
 *  the common false friend "if and only if" appearing inside a QUOTED external
 *  statement in a Facts block — those are citations, not this item's claim. */
const exhibitsIff = (t) => {
  const stripped = t
    .replace(/^>.*$/gm, '')                     // block quotes: cited text
    .replace(/\\\[[\s\S]*?\\\]/g, ' ');         // display math is not prose
  const patterns = [
    /\bif and only if\b/i, /\biff\b/i, /\\iff\b/, /\\Leftrightarrow\b/,
    /\\longleftrightarrow\b/, /\bexactly when\b/i, /\bprecisely when\b/i,
    /\bare equivalent\b/i,
  ];
  const hit = patterns.find((p) => p.test(stripped));
  return hit ? `the item's own text states a biconditional (${hit.source})` : null;
};

/** Division by an expression that names a variable. The counting-lemma defect
 *  was exactly this: gamma divides by 2h with h unbounded below. Denominators
 *  that are pure numerals are ignored. */
const exhibitsDivision = (t) => {
  const denoms = [];
  for (const m of t.matchAll(/\\d?frac\{[^{}]*\}\{([^{}]+)\}/g)) denoms.push(m[1]);
  // `\over` only as the primitive fraction command. The negative lookahead is
  // load-bearing: without it `\overline{y}` matches and the tool reports a
  // denominator of "line y", which is how a detector loses its reader.
  for (const m of t.matchAll(/\\over(?![A-Za-z])\s*\{?([A-Za-z][A-Za-z0-9_^{}\\ ]*)\}?/g)) denoms.push(m[1]);
  const symbolic = denoms.filter((d) => /[A-Za-z]/.test(d) && !/^\\(?:pi|infty|epsilon)\b/.test(d.trim()));
  if (!symbolic.length) return null;
  const shown = [...new Set(symbolic)].slice(0, 3).join(', ');
  return `the proof divides by a symbolic denominator (${shown}) — the zero case is a real obligation unless a hypothesis excludes it`;
};

/** An indexed family, union, product or sum over a set the item does not
 *  visibly bound below. The empty case is where "for every element" claims go
 *  quietly vacuous or quietly false. */
const exhibitsFamily = (t) => {
  const patterns = [
    /\\bigcup/, /\\bigcap/, /\\prod_\{/, /\\sum_\{/,
    /\bfamily\b/i, /\bindexed by\b/i, /\bcollection of\b/i,
  ];
  const hit = patterns.find((p) => p.test(t));
  return hit ? `the item quantifies over a family or indexed aggregate (${hit.source})` : null;
};

/** Each detector is paired with the section it is entitled to read. */
const DETECTORS = {
  'iff-forward': { scope: claimOf, detect: exhibitsIff },
  'iff-reverse': { scope: claimOf, detect: exhibitsIff },
  zero: { scope: proofOf, detect: exhibitsDivision },
  empty: { scope: claimOf, detect: exhibitsFamily },
};

// ---------------------------------------------------------------------------


const rows=[];
for(const file of scope.files){const d=JSON.parse(readFileSync(file,'utf8'));for(const[id,e]of Object.entries(d.contracts)){for(const[index,b]of(e.boundaries??[]).entries()){if(b.reviewed||b.template_review)throw Error('Review flags appeared: hash-free inventory must not pretend to validate them');rows.push({file,id,index,case:b.case,status:b.status,text:b.reason??b.evidence??'',row:b});}}}
if(rows.length!==scope.boundary_rows||!rows.length)throw Error('Nonempty exact scope count changed');
const clusters=new Map();for(const r of rows){if(!['checked','not_applicable'].includes(r.status))continue;const k=r.status+'|'+normalise(r.text,r.id,titleOf(itemText(r.id)));if(k.endsWith('|'))continue;if(!clusters.has(k))clusters.set(k,[]);clusters.get(k).push(r);}
const templates=[...clusters.entries()].filter(([,m])=>new Set(m.map(r=>r.id)).size>=3).map(([k,m])=>({status:m[0].status,normalised:k.slice(k.indexOf('|')+1),members:m.length,distinct_items:new Set(m.map(r=>r.id)).size,rows:m})).sort((a,b)=>b.members-a.members);
const contradicted=[];
for(const r of rows){const text=itemText(r.id);if(text===null)continue;if(r.status==='checked'){const proof=proofOf(text);for(const m of String(r.text).matchAll(/\bsteps?\s+(\d+\.\d+)\b/gi)){if(!proof.includes(m[1])){contradicted.push({...r,kind:'checked_step_absent',why:'the row credits step '+m[1]+', which does not occur in the proof'});continue;}const credited=announcementStep(proof,m[1]);if(credited)contradicted.push({...r,kind:'checked_step_announcement',why:'the row credits step '+m[1]+', which names a check without performing it: '+credited});}continue;}if(r.status!=='not_applicable')continue;const d=DETECTORS[r.case];if(!d)continue;const scoped=d.scope(text);if(!scoped.trim())continue;const why=d.detect(scoped);if(why)contradicted.push({...r,kind:'retained_na',why});}
const report={scope,mode:'Hash-free copied native detector functions; research inventory only, no native gate or approval/binding execution',summary:{boundary_rows:rows.length,templates:templates.length,template_rows:templates.reduce((s,x)=>s+x.members,0),contradictions:contradicted.length,retained_na:contradicted.filter(x=>x.kind==='retained_na').length,checked_candidates:contradicted.filter(x=>x.kind!=='retained_na').length},templates,contradicted};
writeFileSync(join(outDir,'residual-report.json'),JSON.stringify(report,null,2)+'\n');process.stdout.write(JSON.stringify(report.summary,null,2)+'\n');
