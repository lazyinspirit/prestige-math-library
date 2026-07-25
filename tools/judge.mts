// Topic-neutral GPT-5.4 refuter-judge for library items (ofox gateway).
// Run from the repo root (the app worker's tsx supplies the TS loader):
//   npx --prefix /root/Projects/prestige-intelligence/worker tsx tools/judge.mts \
//     items/<id>.md [--model openai/gpt-5.4] [--topic "..."] [--conventions "..."] [--allow-claude]
//
// Prints one line of JSON: {"id":..,"model":..,"keep":true|false|null,"reason":..}
//   keep=true  -> accepted (no specific defect found)
//   keep=false -> rejected  (reason names the defect)
//   keep=null  -> call/parse error (reason explains)
//
// Appends {id,model,pt,ct} to $JUDGE_COSTLOG when set, for the session cost report.
//
// Honesty rule (README): a session item must NOT be judged by a Claude-family
// model. This tool refuses an anthropic/claude model unless --allow-claude is
// passed. Needs OFOXAI_API_KEY in the environment.
import { readFileSync, appendFileSync, existsSync, readdirSync } from "node:fs";
import { basename } from "node:path";

const argv = process.argv.slice(2);
const VALUE_FLAGS = new Set(["model", "topic", "conventions", "mode"]);
// --no-context disables the cited-item RAG block, for A/B measurement only.
const opts: Record<string, string> = {};
const bools = new Set<string>();
let file = "";
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a.startsWith("--")) {
    const name = a.slice(2);
    if (VALUE_FLAGS.has(name)) opts[name] = argv[++i] ?? "";
    else bools.add(name);
  } else if (!file) {
    file = a;
  }
}
if (!file) {
  console.error('usage: tsx tools/judge.mts items/<id>.md [--model M] [--topic "T"] [--conventions "C"] [--allow-claude]');
  process.exit(2);
}
const model = opts.model ?? "openai/gpt-5.4";
const topic = opts.topic ?? "";
const conventions = opts.conventions ?? "";
const id = basename(file).replace(/\.md$/, "");

if (/(^|\/)(anthropic|claude)/i.test(model) && !bools.has("allow-claude")) {
  console.error(`refusing to judge with a Claude-family model (${model}); session items need a cross-family judge. Pass --allow-claude to override.`);
  process.exit(2);
}
const key = process.env.OFOXAI_API_KEY;
if (!key) {
  console.error("OFOXAI_API_KEY not set");
  process.exit(2);
}

const body = readFileSync(file, "utf8");
// Auto-activate the diagram refuter discipline when the item declares a diagram.
const hasDiagram = /\*\*Diagram:\*\*/.test(body) || /\[C\d+\]/.test(body);
const DIAGRAM_RULES = `

DIAGRAM CHASING (this item declares a commutative diagram): "the diagram commutes", "by the diagram", or "a diagram chase shows" used as a justification is a SPECIFIC error. Every commutativity assertion must be a concrete composite equation derived from declared cells [C#], facts, or prior steps, and a step tiling cells into an outer equation must cite EVERY cell it uses; every [C#] a step cites must be DECLARED in the Diagram block. A "naturality" justification must name BOTH the transformation AND the morphism it is instantiated at; an axiom or universal-property instance must name its objects; an isomorphism used in a chase must be THE induced/canonical map for the construction, not merely some isomorphism. A cancellation (faithful functor, mono/epi) without its declared enabling fact, or a map/transformation used before its [choose]/[construct] obligations are discharged (independence of choices; naturality; both composites for a claimed bijection), is a SPECIFIC error: name the step. A named lemma (snake, five, 3x3, ...) whose hypotheses are not each established by a cited step or cell is a SPECIFIC error: name the missing hypothesis.`;

// ---------------------------------------------------------------- cited context
//
// Owner decision, 2026-07-25: give the judge the FULL text of what this item
// cites. Measured on round 2: 29 of 38 rejections were false positives, and the
// dominant mechanism was the judge assuming a cited [L#] fact was WEAKER than it
// actually is, then objecting that the step was unjustified. It could not do
// otherwise, because it never saw the cited item.
//
// We include each cited item's Statement/Definition, NOT its proof. The judge is
// told to treat cited items as correct, so what it needs is what they SAY, not
// how they are established; pulling proofs in would multiply the prompt for no
// gain. One level deep only, for the same reason.
//
// This also turns the context into a two-way check: with the real text in hand,
// an [L#] that OVERSTATES its source becomes a defect the judge can actually
// catch, which is a real class it was previously blind to.
const withContext = !argv.includes("--no-context");

function statementOf(src: string): string {
  const m = src.match(/\n## (?:Statement|Definition)\b[^\n]*\n([\s\S]*?)(?=\n## |$)/);
  return (m ? m[1] : src).trim();
}

function citedContext(itemBody: string): string {
  if (!withContext) return "";
  const dir = "items";
  if (!existsSync(dir)) return "";
  // ids cited anywhere in this item, plus everything in deps/justified_by
  const ids = new Set<string>();
  for (const m of itemBody.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)) ids.add(m[1].trim());
  for (const key of ["deps", "justified_by", "forward_refs"]) {
    const m = itemBody.match(new RegExp("^" + key + ":\\s*\\[([^\\]]*)\\]", "m"));
    if (m) for (const x of m[1].split(",").map((t) => t.trim()).filter(Boolean)) ids.add(x);
  }
  ids.delete(basename(file, ".md"));
  if (!ids.size) return "";

  // resolve through aliases
  const byId = new Map<string, string>();
  const alias = new Map<string, string>();
  for (const f of readdirSync(dir)) {
    if (!f.endsWith(".md")) continue;
    const src = readFileSync(dir + "/" + f, "utf8");
    const id = f.replace(/\.md$/, "");
    byId.set(id, src);
    const am = src.match(/^aliases:\s*\[([^\]]*)\]/m);
    if (am) for (const a of am[1].split(",").map((t) => t.trim()).filter(Boolean)) alias.set(a, id);
  }

  const blocks: string[] = [];
  for (const raw of [...ids].sort()) {
    const id = byId.has(raw) ? raw : alias.get(raw);
    if (!id) continue;
    const src = byId.get(id)!;
    const title = (src.match(/^title:\s*"?(.*?)"?\s*$/m) ?? [, id])[1];
    const notProved = /^proved_here:\s*false/m.test(src);
    blocks.push(
      `### [[${id}]] ${title}${notProved ? "  (RECORDED, NOT PROVED IN THIS LIBRARY)" : ""}\n` +
        statementOf(src),
    );
  }
  if (!blocks.length) return "";
  return (
    "\n\n=== EXACT TEXT OF EVERY ITEM THIS ONE CITES ===\n" +
    "These are the real statements behind the [[wikilinks]] and behind the [L#] facts.\n" +
    "Treat each as CORRECT. Use them to check that this item's facts restate them FAITHFULLY.\n\n" +
    blocks.join("\n\n")
  );
}

const CONTEXT_RULES = `

CITED CONTEXT: the exact text of every item this one cites is supplied below the item. Use it, and note that it cuts BOTH ways.
  * If an [L#] fact FAITHFULLY restates its cited item, then any step citing that [L#] is LICENSED. Do NOT object that such a step is unjustified, and do NOT assume a cited item says less than the supplied text says. Read the supplied text before claiming a step lacks support.
  * If an [L#] fact is STRONGER than its cited item, or restates it inaccurately, that IS a specific defect: name the fact and the discrepancy.
  * An item marked RECORDED, NOT PROVED IN THIS LIBRARY is a deliberate external citation, not a gap. Depending on one is not a defect.`;

const certifySys =
  `You are AUDITING ONE item of a rigorous, cross-referenced public math library for PUBLICATION${topic ? ` (topic: ${topic})` : ""}. Decide whether it can be certified.

CERTIFY (keep=true) when all three hold: the mathematics is correct; each [L#]/[A#] fact FAITHFULLY restates the cited item supplied below, without strengthening it; and the item's dependencies cover what its Statement and Facts actually cite.

WITHHOLD (keep=false) ONLY if you can name a concrete defect: a false claim, a step that does not follow from what it cites, a fact that overstates its source, a symbol used outside its scope, an undischarged proof obligation, or a definition that is not well formed.

NOT defects: terseness; routine algebra compressed under an [algebra] tag; deferring a standard, tedious verification to a cited source; a proof that is correct but could be clearer; a citation you would have made differently.

MOST ITEMS ARE CORRECT. Certifying a correct item is the expected outcome and is a complete, successful audit. Do not manufacture an objection to demonstrate diligence; an unfounded WITHHOLD is worse than a CERTIFY, because it costs a human an adjudication.${conventions ? `\n\nConventions in use:\n${conventions}` : ""}${withContext ? CONTEXT_RULES : ""}${hasDiagram ? DIAGRAM_RULES : ""}

Output STRICT minified JSON ONLY, no prose around it:
{"keep":true|false,"reason":"<if keep=false, the specific defect and where; if keep=true, a one-line note on what you verified>"}`;

const refuterSys =
  `You are a REFUTER auditing ONE mathematical library item (a definition, theorem+proof, lemma+proof, example, or false-statement+refutation) for a rigorous, cross-referenced public math library${topic ? ` (topic: ${topic})` : ""}.

Your ONLY job is to find a SPECIFIC defect. Flag the item (keep=false) ONLY if you can point to a concrete problem: a false claim, a concrete counterexample, a logically unjustified or mis-cited step, a symbol used out of its scope, a wrong or incompletely-discharged proof strategy, a definition that is not well-formed, or ill-formed / mathematically wrong LaTeX. If you find no specific error, ACCEPT (keep=true). Do NOT reject merely because a proof is terse, omits routine algebra, or defers a genuinely tedious-but-standard verification to a cited textbook, PROVIDED the core argument is present and correct.

DEPENDENCIES: any step citing another library item by [[id]] or by a fact label ([L#]) whose content restates a cited item may be treated as ASSUMED-CORRECT (those items are audited separately). Judge only THIS item's own reasoning: does its proof correctly establish its stated claim FROM its cited facts?${conventions ? `\n\nConventions in use:\n${conventions}` : ""}${withContext ? CONTEXT_RULES : ""}${hasDiagram ? DIAGRAM_RULES : ""}

Output STRICT minified JSON ONLY, no prose around it:
{"keep":true|false,"reason":"<if keep=false, the specific defect and where; if keep=true, a one-line note on what you verified>"}`;

const sys = opts.mode === "certify" ? certifySys : refuterSys;

const payload = {
  model,
  temperature: 0,
  max_tokens: 3000,
  messages: [
    { role: "system", content: sys },
    { role: "user", content: "Audit this library item. Return only the JSON verdict.\n\n---\n" + body + citedContext(body) },
  ],
};

const sleep = (ms: number): Promise<void> => new Promise((r) => setTimeout(r, ms));

interface OfoxResp {
  choices?: { message?: { content?: string } }[];
  usage?: { prompt_tokens?: number; completion_tokens?: number };
}

async function call(): Promise<{ content: string; usage?: OfoxResp["usage"]; raw: string }> {
  for (let attempt = 0; attempt < 3; attempt++) {
    let resp: Response;
    try {
      resp = await fetch("https://api.ofox.ai/v1/chat/completions", {
        method: "POST",
        headers: { authorization: `Bearer ${key}`, "content-type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(180_000),
      });
    } catch (e) {
      if (attempt < 2) { await sleep((attempt + 1) * 4000); continue; }
      return { content: "", raw: String((e as Error)?.message ?? e) };
    }
    const raw = await resp.text();
    if ((resp.status === 429 || resp.status >= 500) && attempt < 2) {
      const ra = Number(resp.headers.get("retry-after") ?? NaN);
      await sleep(!Number.isNaN(ra) ? Math.min(ra * 1000, 60_000) : (attempt + 1) * 4000);
      continue;
    }
    let j: OfoxResp = {};
    try { j = JSON.parse(raw) as OfoxResp; } catch { /* leave raw for the error path */ }
    return { content: j.choices?.[0]?.message?.content ?? "", usage: j.usage, raw };
  }
  return { content: "", raw: "retries exhausted" };
}

const { content, usage, raw } = await call();

const costlog = process.env.JUDGE_COSTLOG;
if (costlog) {
  try {
    appendFileSync(costlog, JSON.stringify({ id, model, pt: usage?.prompt_tokens ?? 0, ct: usage?.completion_tokens ?? 0 }) + "\n");
  } catch { /* non-fatal */ }
}

const emit = (keep: boolean | null, reason: string): void => {
  process.stdout.write(JSON.stringify({ id, model, keep, reason }) + "\n");
};

if (!content) {
  emit(null, "NO_CONTENT: " + raw.slice(0, 300));
  process.exit(0);
}
const cleaned = content.replace(/^```json/i, "").replace(/^```/, "").replace(/```$/, "").trim();
try {
  const v = JSON.parse(cleaned) as { keep?: boolean; reason?: string };
  emit(typeof v.keep === "boolean" ? v.keep : null, v.reason ?? content);
} catch {
  emit(null, "UNPARSEABLE: " + content.slice(0, 300));
}
