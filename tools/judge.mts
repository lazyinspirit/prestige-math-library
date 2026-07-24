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
import { readFileSync, appendFileSync } from "node:fs";
import { basename } from "node:path";

const argv = process.argv.slice(2);
const VALUE_FLAGS = new Set(["model", "topic", "conventions"]);
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

const sys =
  `You are a REFUTER auditing ONE mathematical library item (a definition, theorem+proof, lemma+proof, example, or false-statement+refutation) for a rigorous, cross-referenced public math library${topic ? ` (topic: ${topic})` : ""}.

Your ONLY job is to find a SPECIFIC defect. Flag the item (keep=false) ONLY if you can point to a concrete problem: a false claim, a concrete counterexample, a logically unjustified or mis-cited step, a symbol used out of its scope, a wrong or incompletely-discharged proof strategy, a definition that is not well-formed, or ill-formed / mathematically wrong LaTeX. If you find no specific error, ACCEPT (keep=true). Do NOT reject merely because a proof is terse, omits routine algebra, or defers a genuinely tedious-but-standard verification to a cited textbook, PROVIDED the core argument is present and correct.

DEPENDENCIES: any step citing another library item by [[id]] or by a fact label ([L#]) whose content restates a cited item may be treated as ASSUMED-CORRECT (those items are audited separately). Judge only THIS item's own reasoning: does its proof correctly establish its stated claim FROM its cited facts?${conventions ? `\n\nConventions in use:\n${conventions}` : ""}

Output STRICT minified JSON ONLY, no prose around it:
{"keep":true|false,"reason":"<if keep=false, the specific defect and where; if keep=true, a one-line note on what you verified>"}`;

const payload = {
  model,
  temperature: 0,
  max_tokens: 3000,
  messages: [
    { role: "system", content: sys },
    { role: "user", content: "Audit this library item. Return only the JSON verdict.\n\n---\n" + readFileSync(file, "utf8") },
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
