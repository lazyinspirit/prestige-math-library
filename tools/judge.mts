// Topic-neutral cross-family refuter-judge for library items (ofox gateway).
// Default judge: z-ai/glm-5.2.
//
// MEASURED TWICE, so no future session re-runs either experiment.
//
// PASS 1 — 56 calls, 7 candidate models, against 5 items verified correct by hand
// and 3 historical versions carrying defects verified from git:
//
//   model                         median latency   false pos   caught defects
//   z-ai/glm-5.2                       73.8 s         0/5           0/3
//   deepseek/deepseek-v4-flash          5.1 s         1/5           0/3
//   google/gemini-3.1-flash-lite        3.4 s         0/5           0/3
//   openai/gpt-5.4-mini                 ~3   s         4/5           0/3
//   minimax/minimax-m2.7 | moonshotai/kimi-k2.6 | bailian/qwen3.7-plus: UNPARSEABLE
//
// On pass 1 the default was switched to deepseek for 14x lower latency, since its
// REASON strings named the specific construction under test and read as genuine
// engagement. THAT WAS WRONG, and the way it was wrong is the lesson here.
//
// PASS 2 — INJECTION TEST, which is what actually separates a judge from a rubber
// stamp. Two defects were injected into a known-good item:
//
//   (a) BLATANT: claim 3 restated as "n ~ m implies n < m", false on its face
//       (n = m gives n ~ n) and flatly contradicted by the item's own step 6.1.
//   (b) SUBTLE: trichotomy attributed to lem-nat-transitive-irreflexive, which
//       states only that naturals are transitive sets with n not in n.
//
//   model                        blatant (a)   subtle (b)
//   z-ai/glm-5.2                 CAUGHT        missed
//   deepseek/deepseek-v4-flash   MISSED        missed
//
// DeepSeek passed the blatant injection and reported "No false claim, unjustified
// step, or mis-cited fact was found." GLM named claim 3, gave the n = m witness,
// and pointed out that step 6.1 proves n = m rather than n < m. Reverted.
//
// THE METHOD, not the ranking, is what to keep: A LOW REJECTION RATE AND A
// FLUENT-SOUNDING REASON ARE NOT EVIDENCE OF A GOOD JUDGE. A model that always
// accepts scores zero false positives and writes a confident summary of the proof
// it just failed to check. The only test that separates them is injecting a defect
// you KNOW is there and seeing whether the model says so. Run the injection test
// before adopting any judge model.
//
// The finding that outranks all of it: on 3 real historical defects EVERY model
// scored 0/3, GLM included. All three were found by reading tiers. Keep the judge
// as a cheap screen; never model it as the thing that finds defects.
//
// PASS 3 — INJECTION TEST FOR THE A/B PAIR CONTEXT, 2026-07-28, 3 calls. The
// companion-page block below was added on the owner's instruction; the same rule
// applies to a CONTEXT change as to a model change, so it was injection-tested
// before being used on a level.
//
//   injection                                                          GLM 5.2
//   (a) INVALID TEST, discarded: a Remark asserting gcd(0,0) = 0       accepted
//       and that Bezout extends to (0,0) with x = y = 0
//   (b) a Remark asserting the companion page never uses the           CAUGHT
//       Euclidean algorithm and finds coefficients by inspection
//   (c) control: an untouched item that passed pre-change              accepted
//
// (a) is recorded because getting it wrong is instructive: it was written as a
// false claim and it is TRUE. def-common-divisor-and-gcd fixes gcd(0,0) := 0 by
// convention, the B page does treat that pair, and 0 = 0*0 + 0*0. The judge was
// right and the test was broken. VERIFY AN INJECTION IS ACTUALLY FALSE, against
// the library's own conventions, before reading an acceptance as a miss.
//
// (b) is the class this block exists for: mathematically NEUTRAL, false only
// relative to the companion page's contents, so no amount of mathematical
// knowledge can catch it and only the supplied text can. GLM named both refuting
// items (ex-euclidean-algorithm-worked, ex-euclidean-algorithm-on-consecutive-
// fibonacci-numbers) and added that the proof itself was correct, so the bigger
// prompt did not buy the catch with a collateral false positive.
//
// This does NOT promote the judge above a screen. It closes one structural
// blindness; the 0/3 on real historical defects stands unchallenged.
//
// Also: half the catalogue is not drop-in. Reasoning-style models return <think>
// blocks or reasoning-only content this harness cannot parse. Check parseability
// before swapping a model, not after.
// Run from the repo root (the app worker's tsx supplies the TS loader):
//   npx --prefix /root/Projects/prestige-intelligence/worker tsx tools/judge.mts \
//     items/<id>.md [--model z-ai/glm-5.2] [--topic "..."] [--conventions "..."] \
//     [--batch "<A-page-slug>,<A-page-slug>,..."] [--allow-claude]
//
// CONTEXT SUPPLIED, in the order the prompt carries it (see the blocks below):
//   1. the item itself
//   2. every item it cites          — Statement + Remarks, or FULL if same pair
//   3. the other items on its page  — FULL text, proofs included
//   4. its A/B companion page       — FULL text, proofs included
//   5. other pages in the batch     — Statement + Remarks, only with --batch
// --batch takes A-page slugs; each pulls in its own `-examples` companion, so
// naming the level's A pages is enough. JUDGE_BATCH is the env equivalent.
// --no-context disables 2-5 for A/B measurement.
//
// Prints one line of JSON: {"id":..,"model":..,"keep":true|false|null,"reason":..}
//   keep=true  -> accepted (no specific defect found)
//   keep=false -> rejected  (reason names the defect)
//   keep=null  -> call/parse error (reason explains)
//
// Appends {id,model,pt,ct} to $JUDGE_COSTLOG when set, for the session cost report.
// Appends the FULL VERDICT {id,model,keep,reason,at} to $JUDGE_VERDICTLOG when set.
// Set that one for every judge run of a level, at a stable path, so refutations
// survive their own repair — the owner's twice-refuted escalation rule counts
// rejections per proof across runs and cannot work off stdout alone.
//
// Honesty rule (README): a session item must NOT be judged by a Claude-family
// model. This tool refuses an anthropic/claude model unless --allow-claude is
// passed. Needs OFOXAI_API_KEY in the environment.
import { readFileSync, appendFileSync, existsSync, readdirSync } from "node:fs";
import { basename } from "node:path";

const argv = process.argv.slice(2);
const VALUE_FLAGS = new Set(["model", "topic", "conventions", "batch"]);
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
  console.error('usage: tsx tools/judge.mts items/<id>.md [--model M] [--topic "T"] [--conventions "C"] [--batch "slug,slug"] [--allow-claude]');
  process.exit(2);
}
// SESSION items only. The production generator lineup is
// ["z-ai/glm-5.2", "deepseek/deepseek-v4-pro"] (worker/src/ofox.ts genLineup), so
// this default is an IDENTITY collision with the first generator entry. Harmless
// for session items, whose generator is Claude; a PIPELINE item must NOT be judged
// with this default, since that is a generator grading its own work. Pipeline
// items keep the origin-conditioned lineup in worker/src/ofox.ts.
const model = opts.model ?? "z-ai/glm-5.2";
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

/**
 * What a cited or sibling item SAYS: its Statement/Definition AND its Remarks.
 *
 * Remarks are NOT optional here, and leaving them out was a real bug. Items
 * legitimately cross-reference each other's Remarks ("the argument is written
 * out once, in the remarks of X", "by the remark at the end of Y"). With only
 * Statements supplied, the judge cannot find the referenced argument and reports
 * the cross-reference as a false claim about the library's contents. That
 * produced FOUR rejections in one run, every one of them wrong, and every one
 * pointing at text that does exist.
 *
 * Proof and Refutation stay out: the judge is told to treat cited items as
 * correct, so it needs what they SAY, not how they are established.
 */
function quotedTextOf(src: string): string {
  const grab = (h: string) => {
    const m = src.match(new RegExp("\\n## " + h + "\\b[^\\n]*\\n([\\s\\S]*?)(?=\\n## |$)"));
    return m ? m[1].trim() : "";
  };
  const parts = [
    grab("Statement refuted") || grab("Statement") || grab("Definition") || grab("Example"),
    grab("Remarks") && "**Remarks.**\n" + grab("Remarks"),
  ].filter(Boolean);
  const text = parts.length ? parts.join("\n\n") : src.trim();
  // Cap per item. A 23-item page of full Remarks reached ~103k chars, and the
  // gateway already timed out once on this page at half that. The cap is marked
  // so the judge knows text was elided and does not read the elision as absence.
  const CAP = 3000;
  return text.length <= CAP
    ? text
    : text.slice(0, CAP) + "\n… [truncated here; this item continues. Do NOT infer that anything is missing from it.]";
}

/**
 * The WHOLE body of a page sibling: Statement/Definition, Facts & Assumptions,
 * the full Proof or Refutation, and Remarks. Frontmatter is stripped.
 *
 * Owner decision, 2026-07-26: the judge is to be given the FULL context of its
 * page. quotedTextOf's proof-free summary is what made the judge structurally
 * blind to an unbacked step or a mis-stated [L#] inside a sibling, which is the
 * defect class the reading tiers keep finding. The largest page in the repo is
 * ~124k chars (~35k tokens) of body, well inside GLM 5.2's 1M window, so the old
 * 3000-char cap was protecting a gateway timeout, not a context limit. The
 * request timeout is raised alongside this.
 */
function fullTextOf(src: string): string {
  const body = src.replace(/^---\n[\s\S]*?\n---\n/, "").trim();
  const CAP = 24000;
  return body.length <= CAP
    ? body
    : body.slice(0, CAP) + "\n… [truncated here; this item continues. Do NOT infer that anything is missing from it.]";
}

// Ids already shown in an earlier block, so no later block repeats them.
const shownIds = new Set<string>();

// ------------------------------------------------------------- page structure
//
// Owner decision, 2026-07-28: the judge's context unit is the A/B PAIR, and it
// may additionally be given the rest of the batch being built.
//
// The 2026-07-25 tier below supplied only the item's OWN page, and that leaves
// two blind spots that the pair closes:
//   * an A-page theorem never sees the `-examples` page that illustrates it, so
//     an example that misstates its theorem, or claims a hypothesis the theorem
//     does not have, is invisible from both sides;
//   * a B-page example sees the A-page results ONLY where it happens to cite
//     them, which is precisely the case where a MISSING citation cannot be seen.
// An A page and its companion are published, and read, as one unit; judging half
// of it against the other half is what the pair block restores.
//
// The batch block is wider and deliberately cheaper (statement + remarks, no
// proofs). Its job is cross-PAGE dependency checking inside one level: a step
// resting on a result that a sibling page states but this item never cites, or
// two pages of the same batch stating the same result differently. It is opt-in
// per run via --batch / JUDGE_BATCH because the batch is a property of the build,
// not of the content, and nothing in items/ or library/ records it.
interface PageInfo {
  path: string;
  slug: string;
  title: string;
  ids: string[];
}

function loadPages(): PageInfo[] {
  if (!existsSync("library")) return [];
  const paths: string[] = [];
  const walk = (dir: string): void => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = dir + "/" + e.name;
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith(".md")) paths.push(p);
    }
  };
  walk("library");

  const listed = (fm: string, key: string): string[] => {
    const m = fm.match(new RegExp("^" + key + ":\\s*\\[([^\\]]*)\\]", "m"));
    return m ? m[1].split(",").map((t) => t.trim()).filter(Boolean) : [];
  };

  const out: PageInfo[] = [];
  for (const p of paths) {
    const src = readFileSync(p, "utf8");
    const fm = (src.match(/^---\n([\s\S]*?)\n---/) ?? [, ""])[1];
    const ids = [...listed(fm, "items"), ...listed(fm, "examples")];
    if (!ids.length) continue; // _category.md and any other non-page markdown
    out.push({
      path: p,
      slug: basename(p).replace(/\.md$/, ""),
      title: (fm.match(/^title:\s*"?(.*?)"?\s*$/m) ?? [, p])[1],
      ids,
    });
  }
  return out;
}

// The A/B pairing convention, and the ONLY one the renderer uses:
// web/lib/library-categories.ts pairs `<slug>` with `<slug>-examples`.
const EXAMPLES_SUFFIX = "-examples";
const companionSlug = (slug: string): string =>
  slug.endsWith(EXAMPLES_SUFFIX) ? slug.slice(0, -EXAMPLES_SUFFIX.length) : slug + EXAMPLES_SUFFIX;

const allPages = withContext ? loadPages() : [];
const ownPage = allPages.find((p) => p.ids.includes(id));
const pairPage = ownPage ? allPages.find((p) => p.slug === companionSlug(ownPage.slug)) : undefined;

// --batch a,b,c (or JUDGE_BATCH=a,b,c): page slugs or paths. Each named page
// pulls in its companion too, so naming the three A pages of a level is enough.
const batchArg = opts.batch ?? process.env.JUDGE_BATCH ?? "";
const namedBatch = batchArg
  .split(",")
  .map((t) => basename(t.trim()).replace(/\.md$/, ""))
  .filter(Boolean);
const batchSlugs = new Set<string>();
for (const slug of namedBatch) {
  batchSlugs.add(slug);
  batchSlugs.add(companionSlug(slug));
  // A named page that matches nothing is a silent no-op otherwise, and a
  // silently-empty context block reads as "the batch is clean". Say so.
  if (withContext && !allPages.some((p) => p.slug === slug)) {
    console.error(`[judge] --batch: no page "${slug}" under library/ — that page contributes NO context`);
  }
}
const batchPages = allPages.filter(
  (p) => batchSlugs.has(p.slug) && p.slug !== ownPage?.slug && p.slug !== pairPage?.slug,
);

/** Ids supplied IN FULL somewhere in the prompt: this item's page and its pair. */
const inFullPage = (x: string): boolean =>
  (ownPage?.ids.includes(x) ?? false) || (pairPage?.ids.includes(x) ?? false);

function blocksFor(page: PageInfo, mode: "full" | "quoted"): string[] {
  const out: string[] = [];
  for (const x of page.ids) {
    if (x === id || shownIds.has(x)) continue;
    const f = "items/" + x + ".md";
    if (!existsSync(f)) continue;
    const s = readFileSync(f, "utf8");
    shownIds.add(x);
    const t = (s.match(/^title:\s*"?(.*?)"?\s*$/m) ?? [, x])[1];
    out.push(`### [[${x}]] ${t}\n` + (mode === "full" ? fullTextOf(s) : quotedTextOf(s)));
  }
  return out;
}

function pageContext(): string {
  if (!withContext || !ownPage) return "";
  let out = "";

  const own = blocksFor(ownPage, "full");
  if (own.length) {
    out +=
      `\n\n=== THE OTHER ITEMS ON THIS ITEM'S PAGE ("${ownPage.title}") ===\n` +
      "This item is published as part of the page above and is read in that order.\n" +
      "Use these to check for defects that live BETWEEN items: this item contradicting\n" +
      "a sibling, restating one inaccurately, claiming the page proves something it does\n" +
      "not, or duplicating a sibling's result while disagreeing with it. Items already\n" +
      "quoted in the citation section above are not repeated here.\n\n" +
      own.join("\n\n");
  }

  if (pairPage) {
    const pair = blocksFor(pairPage, "full");
    if (pair.length) {
      const ownIsExamples = ownPage.slug.endsWith(EXAMPLES_SUFFIX);
      out +=
        `\n\n=== THE COMPANION PAGE ("${pairPage.title}") ===\n` +
        (ownIsExamples
          ? "This item is an example on the B page of an A/B pair. The block below is the A\n" +
            "page it illustrates: the definitions and results these examples are examples OF.\n"
          : "This item sits on the A page of an A/B pair. The block below is the companion\n" +
            "B page: the examples and counterexamples published alongside these results.\n") +
        "The two pages are published and read as ONE unit. Supplied IN FULL, like the page\n" +
        "siblings above, so cross-references between them are checkable in both directions.\n\n" +
        pair.join("\n\n");
    }
  }

  if (batchPages.length) {
    // Budget: the pair blocks above are the high-value context and are never cut.
    // The batch is cut rather than allowed to push the request into the gateway
    // timeout that this file's history already records. Elisions are declared.
    const BATCH_BUDGET = 200_000;
    const kept: string[] = [];
    const dropped: string[] = [];
    let used = 0;
    for (const p of batchPages) {
      const blocks = blocksFor(p, "quoted");
      if (!blocks.length) continue;
      const text = `#### page: ${p.title}\n\n` + blocks.join("\n\n");
      if (used + text.length > BATCH_BUDGET) {
        dropped.push(p.title);
        continue;
      }
      used += text.length;
      kept.push(text);
    }
    if (dropped.length) {
      console.error(`[judge] batch context budget reached; omitted: ${dropped.join(", ")}`);
    }
    if (kept.length) {
      out +=
        "\n\n=== OTHER PAGES IN THE CURRENT BATCH ===\n" +
        "These pages are being written alongside this one, at the same dependency level.\n" +
        "Statement/Definition and Remarks only, NO proofs, so treat every one as CORRECT\n" +
        "and do not audit them: they are judged separately, on their own calls.\n" +
        (dropped.length ? `NOTE: further batch pages were omitted for length (${dropped.join(", ")}).\n` : "") +
        "\n" +
        kept.join("\n\n");
    }
  }

  return out;
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
    shownIds.add(id);
    // A cited item on this item's own page or its companion is supplied IN FULL.
    // Previously the citation block claimed every entry first, so citing a sibling
    // DOWNGRADED it from full text to a 3000-char statement — exactly backwards,
    // and it contradicted the prompt rule telling the judge siblings come in full.
    const full = inFullPage(id);
    blocks.push(
      `### [[${id}]] ${title}` +
        (notProved ? "  (RECORDED, NOT PROVED IN THIS LIBRARY)" : "") +
        (full ? "  (FULL TEXT — this page or its companion)" : "") +
        "\n" +
        (full ? fullTextOf(src) : quotedTextOf(src)),
    );
  }
  if (!blocks.length) return "";
  return (
    "\n\n=== EXACT TEXT OF EVERY ITEM THIS ONE CITES ===\n" +
    "These are the real statements behind the [[wikilinks]] and behind the [L#] facts.\n" +
    "Treat each as CORRECT. Use them to check that this item's facts restate them FAITHFULLY.\n" +
    "Entries marked FULL TEXT carry their proofs too; the rest are Statement + Remarks.\n\n" +
    blocks.join("\n\n")
  );
}

const CONTEXT_RULES = `

CITED CONTEXT: the exact text of every item this one cites is supplied below the item. Use it, and note that it cuts BOTH ways.
  * If an [L#] fact FAITHFULLY restates its cited item, then any step citing that [L#] is LICENSED. Do NOT object that such a step is unjustified, and do NOT assume a cited item says less than the supplied text says. Read the supplied text before claiming a step lacks support.
  * If an [L#] fact is STRONGER than its cited item, or restates it inaccurately, that IS a specific defect: name the fact and the discrepancy.
  * An item marked RECORDED, NOT PROVED IN THIS LIBRARY is a deliberate external citation, not a gap. Depending on one is not a defect.

PAGE CONTEXT: the other items published on this item's page are supplied after the cited items. They are there so you can catch defects that live BETWEEN items, which are invisible when an item is read alone:
  * this item CONTRADICTING a sibling on the same page, or the two taking opposite positions on the same question;
  * this item claiming the page (or the library) proves, supplies or discusses something that no sibling actually does. If this item says "proved below", "supplied by the page that develops X", "as shown in the remarks of Y", CHECK the supplied text. A false claim about the library's own contents is a defect even when the mathematics is fine;
  * a ledger, conventions or summary item whose claims do not match what its page actually establishes;
  * this item restating a sibling INACCURATELY, whether or not it cites it.
  Two cautions. A sibling covering related ground is NOT duplication, and a sibling that comes LATER on the page is not a forward-reference violation: same-page links are ordinary links. Do not object to either.
  A THIRD point, and read it carefully because the two blocks below the item differ:
  * PAGE SIBLINGS are supplied IN FULL: statement, facts, every proof step, and remarks. So a cross-reference to a sibling's step, fact or proof IS checkable, and a claim about a sibling that its full text contradicts IS a defect you should name. Use this.
  * CITED ITEMS FROM OTHER PAGES are supplied as Statement/Definition and Remarks only, TRUNCATED at a marked cut, with no Proof. For those you may NOT conclude a cross-reference is false merely because you cannot find the passage. Report it as unverifiable, or say nothing, unless the supplied text CONTRADICTS it.

COMPANION PAGE: pages are published in A/B pairs. The A page develops definitions and results; the B page, named "<A>-examples", carries the examples and counterexamples for them. THE PAIR IS ONE UNIT, read together, so the companion is supplied IN FULL exactly like the page siblings. Check across it in whichever direction applies:
  * an example that MISSTATES the result it illustrates: attributing a hypothesis the theorem does not have, dropping one it does have, or claiming it shows a hypothesis is necessary when it does not exhibit the required failure;
  * an example claiming to be a counterexample to a result that, as the A page actually states it, it does not contradict;
  * a result whose statement or remarks promise an example, a counterexample, or a witness that the companion page does not in fact supply, or a companion item that claims the A page proves something it does not;
  * the two pages using the same term, symbol or notation with DIFFERENT meanings, or defining the same object twice and inequivalently.
  Same caution as above: a companion item that comes later, or that is not cited, is not by itself a defect. The pair is symmetric, and links across it are ordinary links.

BATCH CONTEXT: if a block of OTHER PAGES IN THE CURRENT BATCH is supplied, those pages are being written at the same time as this one, at the same dependency level. They are Statement/Definition and Remarks only, with NO proofs. Their purpose is narrow, and staying inside it matters:
  * USE them to catch a step that makes a mathematical move which a batch item states but this item never cites, when the item's OWN facts do not already license that move. That is a missing-dependency defect and it is worth naming.
  * USE them to catch this item and a batch item stating the SAME result incompatibly, or defining the same term differently.
  * USE them to check a claim this item makes about what the library does or does not contain.
  * DO NOT audit the batch items themselves. They are judged separately, on their own calls; a defect in one of them is not a defect in this item.
  * DO NOT reject this item merely because it does not cite a batch item, because a batch item covers similar ground, or because a batch item would have given a shorter proof. Only a step that is actually UNLICENSED as written is a defect.
  * DO NOT treat a batch item as unavailable machinery: the batch is being published together with this item.

Your primary job is unchanged and outranks all of the above: the logical validity of THIS item's own steps, each against the facts it cites. The blocks below exist so that a step resting on something outside this item can be checked against what that something actually says.`;

// The `--mode certify` arm was MEASURED AND DELETED, 2026-07-25. Scored against
// research/verification-benchmark.md (150 items, 50 known defects), a gentler
// "most items are correct, do not manufacture an objection" framing halved the
// rejections (29 -> 14) but gutted recall: it caught 2 of 6 real defects where
// the refuter caught 6 of 6, and its precision was WORSE too (14% vs 21%). It
// became agreeable, not accurate. The refuter framing below is deliberate: this
// judge is a high-recall SCREEN whose ~20-25% precision is a property of
// adversarial refutation, not a bug to tune out. Do not re-run this experiment,
// and do not soften the prompt to reduce false positives -- that trade has been
// measured and it loses real defects.

const refuterSys =
  `You are a REFUTER auditing ONE mathematical library item (a definition, theorem+proof, lemma+proof, example, or false-statement+refutation) for a rigorous, cross-referenced public math library${topic ? ` (topic: ${topic})` : ""}.

WHERE TO LOOK FIRST (owner instruction, 2026-07-26). Two classes account for nearly every real defect found in this library. Spend your effort on them, in this order, before anything else:

  (1) MISSING OR INCORRECT CITATIONS OF DEPENDENCIES. A step that makes a mathematical move with no fact behind it at all. An [L#] fact that is STRONGER than, or does not literally say, what its cited item says. A step whose tag cites facts that do not license the move it makes. A named property (transitivity, antisymmetry, trichotomy, cancellation, density, completeness) used with nothing establishing it. This is the single most common real defect here: check EVERY step's tag against the facts it names, and every [L#] against the supplied text of its source.

  (2) LOGICAL GAPS IN THE IMMEDIATE NEIGHBOURHOOD OF THE PROOF. Within this item's own argument: a step that does not follow from the steps and facts it cites, a hypothesis used but never established (nonemptiness before a minimum, a denominator before a division, a case never discharged), a quantifier or scope slip, a claim in the statement that the proof does not reach. Stay close to the proof; you are not auditing the whole library.

Report anything else you happen to notice, but do not go hunting for it at the expense of these two.

Your ONLY job is to find a SPECIFIC defect. Flag the item (keep=false) ONLY if you can point to a concrete problem: a false claim, a concrete counterexample, a logically unjustified or mis-cited step, a symbol used out of its scope, a wrong or incompletely-discharged proof strategy, a definition that is not well-formed, or ill-formed / mathematically wrong LaTeX. If you find no specific error, ACCEPT (keep=true). Do NOT reject merely because a proof is terse, omits routine algebra, or defers a genuinely tedious-but-standard verification to a cited textbook, PROVIDED the core argument is present and correct.

DEPENDENCIES: any step citing another library item by [[id]] or by a fact label ([L#]) whose content restates a cited item may be treated as ASSUMED-CORRECT (those items are audited separately). Judge only THIS item's own reasoning: does its proof correctly establish its stated claim FROM its cited facts?${conventions ? `\n\nConventions in use:\n${conventions}` : ""}${withContext ? CONTEXT_RULES : ""}${hasDiagram ? DIAGRAM_RULES : ""}

Output STRICT minified JSON ONLY, no prose around it:
{"keep":true|false,"reason":"<if keep=false, the specific defect and where; if keep=true, a one-line note on what you verified>"}`;

const sys = refuterSys;

// --dump-prompt prints the exact system + user message and exits, so the context
// assembly can be inspected without spending a call.
if (bools.has("dump-prompt")) {
  const user = "Audit this library item. Return only the JSON verdict.\n\n---\n" + body + citedContext(body) + pageContext();
  console.log("========== SYSTEM ==========\n" + sys + "\n\n========== USER ==========\n" + user);
  console.error(`\n[dump-prompt] system ${sys.length} chars, user ${user.length} chars`);
  process.exit(0);
}

const payload = {
  model,
  temperature: 0,
  // Raised 3000 -> 8000 -> 40000 on 2026-07-26 (owner). Under the full-page context
  // the reason strings grew, and a truncated reason arrives as unparseable JSON ->
  // keep=null, which reads as a call failure rather than as a verdict. A page agent
  // hit this twice on one item and correctly refused to record a verdict from it.
  // Reasoning models also spend this budget on thinking BEFORE emitting the JSON, so
  // the ceiling must clear both; that is why the generous value.
  //
  // This is a CEILING, not a target: billing is on tokens actually produced, and
  // measured completions run about 1.4k. Headroom here costs nothing.
  // GLM 5.2's max_completion_tokens is 128000, so 40000 is comfortably in range;
  // check that field before raising it further, and note the GPT-5.4 fallback is
  // also 128000 while the Gemini fallback caps at 65536.
  max_tokens: 40000,
  messages: [
    { role: "system", content: sys },
    { role: "user", content: "Audit this library item. Return only the JSON verdict.\n\n---\n" + body + citedContext(body) + pageContext() },
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
        signal: AbortSignal.timeout(420_000),
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

// A REFUTATION LEDGER, not a cost log. The costlog above records spend only, so
// until now a rejection existed solely on stdout and vanished the moment it was
// repaired. The owner's twice-refuted rule (WORKFLOW §"Twice-refuted proofs")
// needs a COUNT PER PROOF ACROSS RUNS, so verdicts must outlive the run that
// produced them. Set JUDGE_VERDICTLOG to the level's ledger and never rotate it
// mid-level; the count is the whole point.
const emit = (keep: boolean | null, reason: string): void => {
  const line = JSON.stringify({ id, model, keep, reason });
  process.stdout.write(line + "\n");
  const vlog = process.env.JUDGE_VERDICTLOG;
  if (vlog) {
    try {
      appendFileSync(vlog, JSON.stringify({ id, model, keep, reason, at: new Date().toISOString() }) + "\n");
    } catch { /* non-fatal: stdout is still the primary channel */ }
  }
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
