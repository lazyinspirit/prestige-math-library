# From a prompt to a publish-ready page: the end-to-end authoring workflow

This document describes, in human-readable terms, how a single natural-language
request from the owner becomes a fully verified, rendered, publish-ready page in
this math library. It reflects exactly what was done in the session that built
*Construction of the Real Numbers via Dedekind Cuts*, and it is written to be
reusable by any capable agentic coding platform (Claude Code, Codex, pi, or
similar). The running example throughout is a hypothetical request:

> "Build a webpage for undergraduate group theory covering all main definitions
> and theorems."

The orchestrating agent (the "driver") stays in the loop the whole way. It
delegates generation and revision to subagents, calls an external judge, but
personally audits every result and makes every publish decision.

---

## Read these first (the contract wins over this runbook)

This document is a runbook. The normative contract lives in other files, and they
take precedence over anything here if they ever disagree. Before building
anything, read:

- `SCHEMA.md`: the item and page contract (frontmatter, ids, the phase-proof
  format, the publish checklist).
- `README.md`: provenance (the origin and verification axes), the judge lineup by
  origin, and the citation honesty rules.
- `CLAUDE.md`: project rules, including the frozen presentation constraint.
- `items/lem-cauchy-bounded.md`: the approved house-style exemplar proof. Match
  its frontmatter shape, section headings, step numbering, and prose density.
- `worker/src/precheck.ts` (in the app repo): the normative phase-format checker.

Follow those files, not this runbook, wherever they differ.

### The content model and file map

- `items/<id>.md` is one atomic item per file, in a single flat global pool.
  Items are reused across pages by citation, never copied. Ids are stable and
  IMMUTABLE once merged: rename only through `aliases`, never by reusing a
  retired id.
- `library/<category>/[<subcategory>/]<page>.md` is a page composition file: an
  item list, an examples list, and a short authored summary. `_category.md` holds
  category metadata.
- Id prefixes are a closed set whose prefix must match the item `kind`: `def`
  (definition), `thm` (theorem), `lem` (lemma), `prop` (proposition), `cor`
  (corollary), `ex` (example), `cex` (counterexample), `fs` (false statement),
  `rem` (remark).
- Every rendered page is five fixed sections: Prerequisites (mechanical, and
  PAGE-level: links to the other library pages that prove this page's dependency
  closure, not links to individual items), Summary (the only authored prose),
  Flowchart (birds-eye, landmarks only), the item bodies, and the examples.

### Frozen presentation (hard rule)

The owner-approved look is FROZEN: the per-kind colour palette, the mechanical
proof rendering in `ItemBody`, the birds-eye Mermaid style, and the five fixed
page sections. Do NOT change the visual style, layout, colours, spacing,
typography, or flowchart look in either repo without an explicit in-session owner
instruction to restyle. Adding content is always fine; restyling is not. New
content must be authored to the schema's layout rules so it renders identically
to what exists.

### Citation honesty (hard rule)

Every source carries a working URL, verified to resolve before it enters
frontmatter. Session-authored items list standard textbook references, not
fabricated scraped sources: the end-of-page Sources section is split into Sources
scraped (may be empty) and Standard references (recommended treatments, labelled
as such, not extraction sources). Never invent a source.

### Definition justification (hard rule)

Every definition must be fully justified for logical validity and
well-definedness whenever it carries a nontrivial obligation. A definition may
not simply assert that an object exists, is single-valued, or has the structure
its name claims; each such obligation is discharged by a proof-bearing item (a
lemma or theorem) that the definition cites by `[[id]]`. Asserting the obligation
in the definition's prose or Remarks with a bare citation that does not actually
prove it is a citation-honesty violation, not a justification. When the obligation
is nontrivial and no existing item discharges it, author the missing lemma or
theorem and prove it before the definition is published.

**Where the citation goes (this is not cosmetic).** A discharging item comes in
two flavours and they belong in different frontmatter fields:

- If the discharging item **depends on the definition** (it is a statement *about*
  the object the definition introduces, e.g. "the inverse in a field is unique",
  "each rational cut is a cut"), it points FORWARD. Put it in **`justified_by`**.
  Putting it in `deps` creates a genuine cycle in the dependency graph: the
  definition would cite the lemma and the lemma would cite the definition.
- If the discharging item **does not depend on the definition** (it is a genuine
  prerequisite that LICENSES the definition, e.g. the recursion theorem licensing
  a definition by recursion), it belongs in **`deps`** as normal.

`node tools/depcheck.mjs` enforces the distinction: it rejects a `justified_by`
target that does not transitively depend on the citing item, and it rejects any
cycle in `deps`. Run it before publish; it is the mechanical guarantee that the
library contains no circular reasoning.

### Self-contained scope (hard rule, owner instruction 2026-07-27)

**No item may rest on a result this library has not established.** If a theorem,
example or counterexample requires machinery beyond the current scope — measure
theory, functional analysis, or anything else the library has not yet built — it
is **DROPPED from the scaffold**, not marked and kept.

**The one exception is a foundational axiom the library has already adopted**:
the Axiom of Choice and its relatives (`def-axiom-of-choice`,
`def-countable-choice`, `def-dependent-choice`). An axiom is assumed rather than
derived, so depending on one is not an unproved dependency. The
metamathematical independence facts *about* those axioms (Cohen forcing, the
Feferman-Levy model, the constructible universe) are exempt on the same
grounds: they are cited as external facts about an axiom, never used as a step
inside a mathematical proof.

**What this changes.** Until now an unproved dependency was permitted whenever
it was visibly marked — the fuchsia / dotted / ‡ "not proved here" tier. **That
tier is not removed.** The `deferred-*` pages exist precisely to record results
the library does not prove, they stay, and their rendering is untouched. What
changes is that **nothing in the mathematical development may depend on them**.
The ‡ tier is a catalogue, not a licence to build on unproved material.

**Consequences for scaffolding.** When a prose scaffold lists a result whose
standard proof needs out-of-scope machinery:

- drop the item from the page, and
- record in the scaffold **why** it was dropped and **what would license it**,
  so it can be restored when the prerequisite track exists.

Richness is added back later, at or below the current dependency level, as the
advanced topics are developed. **A dropped item is deferred, not deleted** — the
scaffold note is what makes it recoverable.

**This is forward-looking** (owner: "from now on"). Published items are not
retrofitted. As of 2026-07-27 only nine items carry a load-bearing dependency on
a ‡ item, and every one is a choice or independence result covered by the
exception above, so the existing corpus is already compliant.

**Where it bites first.** A scaffold that says "this is true but the standard
proof uses Lebesgue measurability", or that reaches for a Vitali set, a
non-measurable function, a positive-measure hypothesis, or a Banach-space
theorem, is describing an item that must be dropped and noted — not authored
with a ‡ dependency.

The obligations that recur, and what each requires:

- **Quotient constructions.** Defining a quotient (a quotient group $G/N$, a
  quotient ring, or a set of equivalence classes such as $\mathbb Z$, $\mathbb Q$,
  or the Cauchy reals) requires proving: (i) the relation is an equivalence
  relation (or $N$ is a normal subgroup / two-sided ideal, as appropriate);
  (ii) every operation defined on representatives is **well-defined**, i.e.
  independent of the choice of representative (independent of the coset
  representatives, in the $G/N$ case); and (iii) the quotient **satisfies all the
  axioms of the structure it is claimed to be** (all group axioms for $G/N$, all
  field axioms for a quotient field, and so on). Each of (i), (ii), (iii) is a
  separate proof obligation; none may be skipped as "obvious".
- **Operations and objects defined via representatives or a construction.** A sum,
  product, inverse, reciprocal, or order defined on class representatives needs a
  representative-independence proof for *each* such operation (do not let one
  "operations are well-defined" lemma silently stand in for an operation it does
  not actually cover, e.g. a lemma that proves it for $+,\cdot,-$ does not cover
  $x^{-1}$). A constructed object claimed to be a member of the target set (the
  sum of two Dedekind cuts is again a cut; a reciprocal class is again a legal
  rational) must be proven to lie in that set.
- **Definitions by cases.** The cases must be exhaustive and consistent: they
  cover every input and agree wherever they overlap, so the object is
  single-valued. Cite the result that makes them exhaustive/exclusive (e.g.
  trichotomy of the order).
- **Notation that presupposes uniqueness.** Writing "the" inverse, "the"
  identity, "the" supremum, or $-x$, $x^{-1}$, $\sup S$ as single-valued notation
  presupposes a uniqueness result; that uniqueness must be proven or cited.
- **Existence claims.** If a definition presupposes that some object exists (a
  representative of a required form, a least upper bound under completeness),
  that existence is a proof obligation unless it is an axiom.

Genuinely axiomatic or structural definitions (a field, an ordered field, a
homomorphism, a limit predicate) carry no well-definedness obligation and need no
such proof; do not manufacture one. The audit question for every definition is
narrow and mechanical: *list each object it introduces that could fail to exist,
be multi-valued, escape its target set, or lack a claimed axiom, and confirm a
cited proof-bearing item discharges it.*

---

## 0. Roles and models (every LLM in the loop)

The library separates who *writes* math from who *checks* it, and keeps those in
different model families so a generator never grades its own work. Every LLM that
touched this session's work is named below, with its exact identifier and the
runtime it ran on.

| Role | Model this session | Exact identifier | Runtime and cost |
|------|--------------------|------------------|------------------|
| Driver, guardrail, auditor | Claude Opus 4.8 (1M context) | `claude-opus-4-8` | Claude Code main loop, subscription |
| Generator (writes items) | Claude Opus 4.8 | `claude-opus-4-8` | Agent-tool subagents on the Claude subscription, spawned with `model: opus`; not the billed API |
| Judge (refutes items) | OpenAI GPT-5.4 | `openai/gpt-5.4` | `ofox` gateway, raw API cost |
| Escalation (revises rejects) | Claude Opus 4.8 | `claude-opus-4-8` | Agent-tool subagents on the Claude subscription |
| Final audit and publish gate | the human owner | n/a | n/a |

The owner, not any model, is the final publish gate.

### Who overrides whom (owner decision, 2026-07-25)

Each tier below has strictly more context than the one above it, so **each
overrides the one above**. This is a role model, not a politeness ranking: it
says whose verdict survives a disagreement.

| tier | who | scope it can see | what it decides | overruled by |
|---|---|---|---|---|
| Generator | Claude Opus subagent | one page | nothing | everyone |
| **Judge** | non-Claude, GLM 5.2 | the item in FULL; for everything else (cited items and page siblings alike) only Statement/Definition/Example plus Remarks, capped at 3000 chars each. **NO OTHER ITEM'S PROOF IS EVER SHOWN.** | nothing; it NAMES CANDIDATES | every tier below |
| **Page verifier** | one Opus 5 subagent PER PAGE | its page, plus the full text of everything that page cites | CERTIFY / WITHHOLD per item | auditor, owner |
| **Cross-page auditor** | the driver, main loop | the whole library at once | final **among models** | **the owner only** |
| Owner | the human | everything | `verification.audited`, publish | nobody |

**The order, and the bound** (owner, 2026-07-25). For an item rejected at least
once the loop is

```
escalation (page ctx) -> judge (page ctx) -> escalation (page ctx) -> judge (page ctx) -> auditor (full ctx)
```

**"page ctx" is weaker for the judge than for the escalation tier, and the
difference matters.** The escalation subagent reads whole files. The judge never
sees another item's PROOF, only Statement/Definition/Example plus Remarks, truncated
at 3000 chars. So the judge is structurally blind to an unbacked step, a mis-stated
`[L#]` fact, or a missing hypothesis living in a sibling's proof — which is the
defect class the auditors keep finding. Judge silence bounds much less than the
phrase "page context" suggests; never read a clean judge run as page-level
assurance.

Escalation runs FIRST and the judge screens the repaired text; running the judge
first records verdicts on text that escalation then changes. The loop is bounded
at EXACTLY ONE repair cycle: a second rejection goes to the auditor, not to
another repair. And **the auditor waits until every item has been through the
loop** before auditing anything, rather than adjudicating items while others are
still in flight.

That bound is what makes re-judging safe. Objections rotate between runs, so
chasing a clean sheet is a treadmill that ends in damaging correct proofs; one
repair cycle converts the judge's high recall into fixes and hands the residue to
a tier that can actually adjudicate it. Re-judging CHANGED text is a real check;
re-judging UNCHANGED text is the treadmill.

Three things this makes explicit, each learned the expensive way:

1. **A judge rejection is evidence, not a work item.** Measured precision is
   ~20-25% and that is permanent (see `research/verification-benchmark.md`).
   Never iterate judge -> fix -> judge toward a clean sheet: objections *rotate*
   between runs rather than being confirmed, so the treadmill ends with a
   correct proof damaged to satisfy an objection that was wrong.
2. **The page verifier is a genuinely different role from "Escalation (revises
   rejects)" below.** Escalation applies a correction the driver already
   adjudicated. The page verifier adjudicates, with the cited text in hand.
3. **Higher tier does not mean honest.** A page verifier fabricated a quotation
   during this session (`research/verification-benchmark.md`, "What this
   benchmark is NOT"). Every tier's output is evidence to be checked. Before
   acting on a reported defect that quotes an item, `grep` the item for the
   quoted string; if it is not there, report that and change nothing.

### The production defaults these replaced

In normal operation the same steps run through the `ofox` gateway on a stock,
provider-disjoint lineup (defined in `worker/src/ofox.ts`). This session
substituted the models above for these defaults:

- Generator lineup: `z-ai/glm-5.2` (EU or unknown region), or `z-ai/glm-5.2`
  then `deepseek/deepseek-v4-pro` (non-EU, for the data-residency fallback).
- Judge lineup: `anthropic/claude-sonnet-5`, then `openai/gpt-5.4`.
- Escalation lineup: `google/gemini-3.1-pro-preview`, then `google/gemini-2.5-pro`.
- Utility lineup (labels and small tasks): `google/gemini-3.1-flash-lite`,
  `anthropic/claude-haiku-4.5`, `openai/gpt-5-nano`.

Judge pricing used for the session cost report: `openai/gpt-5.4` at 2.5 USD per
million input tokens and 15 USD per million output tokens. Firecrawl and Apify
(the step-0 scraping tools) were not invoked, so their cost was zero.

Two hard rules govern the models:

1. Generation never runs through the public billed pipeline, and never wires a
   subscription into the worker service. It uses either the session route
   (subagents) or the internal harness at raw API cost.
2. Session-authored items are judged by a non-Claude model (**GLM 5.2 primary**,
   GPT-5.4 then Gemini as fallback), never by a Claude model.
   **`deepseek/deepseek-v4-flash` was adopted and REVERTED on 2026-07-25**, inside
   a single batch. It is 14x faster and its verdict prose reads like genuine
   engagement, but an injection test settled it: given an item whose claim 3 had
   been restated as a blatant falsehood contradicted by its own proof, DeepSeek
   replied "No false claim, unjustified step, or mis-cited fact was found." GLM
   named the claim, gave the witness, and cited the step that refutes it.
   **Rule: never adopt a judge model on latency, price, or how substantial its
   reasons sound. Inject a defect you know is there and see whether it says so.**
   A model that always accepts scores zero false positives too. The full table is
   in the `tools/judge.mts` header.
   **Note the collision:** the production GENERATOR lineup is
   `["z-ai/glm-5.2", "deepseek/deepseek-v4-pro"]`, so GLM as judge is an identity
   collision with the first entry. Harmless for session items, whose generator is
   Claude, but a PIPELINE item must never be judged with GLM or DeepSeek, since
   that is a generator grading its own work. The judge lineup is conditioned on
   origin precisely so both rules hold at once.

---

## 1. The seven-step loop

```
  0. Discover  ->  1. Generate  ->  2. Audit  ->  3. Report + fix  ->  4. Re-run on fixes
                                        ^                                     |
                                        |_____________ 5. repeat _____________|
                                                          |
                                                          v
                                              6. Build page, serve, view
                                                          |
                                                          v
                                          Publish, commit, push
```

Each step is described below with the concrete tools used.

---

## Step 0. Discovery, guardrail, and RAG

The driver acts as the discovery and guardrail layer. It decides the *content
plan* before any generation happens.

1. **Enumerate the required items.** For "undergraduate group theory", list every
   definition and theorem the topic needs: group, subgroup, homomorphism, coset,
   Lagrange's theorem, normal subgroup, quotient group, the isomorphism theorems,
   group actions, orbit-stabiliser, Cauchy's theorem, Sylow theorems, and so on.
   Fix stable ids for each (`def-group`, `thm-lagrange`, `thm-first-iso`, ...).
2. **Scan the repo for what already exists.** Before writing anything, search the
   whole content repo for pre-existing definitions, theorems, lemmas, and
   examples. Reuse them by citation (`[[id]]`) instead of regenerating a
   duplicate proof. In this session the entire N to Z to Q chain and several
   items such as "no rational squares to 2" were reused rather than rewritten.
3. **Source strategy.** For standard undergraduate material, do not scrape:
   author from mathematical knowledge and cite recommended textbooks honestly
   (this repo forbids fabricated scraped sources). For specialised or advanced
   topics, discover reputable sources and generate RAG raw data first, then feed
   that context to the generators. Firecrawl and Apify are the scraping tools;
   they cost nothing when no scraping happens.
4. **Fix the mathematical conventions once, centrally.** Write a single spec
   sheet that pins every id, kind, dependency list, landmark flag, and the exact
   statement and definitional convention for each item. This is what keeps
   independently-generated items mutually consistent. In this session the spec
   fixed the lower-set cut convention, the sumset addition, Rudin's negation
   formula, the sign-case multiplication, and the least-upper-bound completeness
   target, so five separate generator subagents produced items that fit together.

**The RAG distiller (domain-knowledge injection).** The pipelines are otherwise
stateless: each generator and judge call sees only its prompt. For advanced or
niche sources, where definitions, theorems, and load-bearing background sit in
prose rather than formal declarations, the pipelines carry a RAG layer that
distills that knowledge into source-grounded context and injects it into the
generate and judge prompts. Two indexes exist:

- The **proof RAG index** (`worker/src/rag.ts`), used by the reasoning pipeline,
  verbatim-extracts formal statements from a source and offers them as context.
- The **knowledge RAG index**
  (`worker/src/engines/knowledge/rag-knowledge.ts`), used by the knowledge
  pipeline, recognizes and summarizes prose-embedded concepts into
  self-contained summaries, each anchored to a verbatim evidence quote (an entry
  whose evidence is not found character-for-character in the source is dropped).

Both are advisory and gated: a source is distilled only when it is judged
advanced enough to need it, the injected pack is capped (about 2400 tokens per
chunk), and when no pack applies the prompts are byte-identical to the no-RAG
case, so the layer can never inject an ungrounded claim into a pair. The
distillation cost is tracked separately (`ragUsd`) as part of the harvest budget.

This session did not trigger the distiller: the real-number construction is
standard, self-contained undergraduate material, authored from knowledge with
textbook references, so no source needed distilling. It is documented here
because a request on a specialised topic (a recent arXiv area, say) would rely
on it to give the otherwise-stateless generator and judge the domain context
they lack.

**No cap on theorem depth** (owner decision, 2026-07-25). This previously read
"maximum theorem depth is 5", a limit inherited from generating a page in one
pipeline pass. Authoring now runs through Claude Code subagents with no timeout
restriction, so depth costs nothing and the cap only pushed toward coarse,
hard-to-check lemmas.

It was in any case never observed. Measured per page, counting proof-bearing
results and treating cross-page dependencies as leaves, the published corpus runs
`construction-of-the-natural-numbers` 10, `construction-of-r-via-cauchy-sequences`
16, `construction-of-r-via-dedekind-cuts` 12, `foundations-of-the-real-numbers` 9.
Globally the deepest chain reaches 26, at `thm-equivalence-of-constructions`.

**What survives, and it is the part that mattered:** every proof-bearing item
must be *self-contained at its own level*. It may cite only definitions, axioms,
or results already established earlier on its page or on a strictly earlier page,
never an unproven sub-result. Depth is then a consequence of decomposing
honestly, not a budget to stay inside. Prefer more, smaller lemmas: the owner's
standing rule is that difficulty is never a reason to omit or hand-wave, only to
decompose further.

`node tools/depcheck.mjs` reports the depth per page so it is measured rather
than asserted.

---

## Step 1. Generate (the two pipelines)

Two pipelines run, both wired to the substituted models:

- The **reasoning pipeline** produces definitions, theorems, lemmas, and worked
  examples.
- The **disproof pipeline** produces false statements and counterexamples (items
  that are refuted rather than proved).

These are not new inventions for this page. They are the production dataset
engines that live in the sibling app repo:

- `~/Projects/prestige-intelligence/worker/src/engines/proofs/` is the reasoning
  pipeline (planner, generator, and refuter-judge prompt systems in
  `prompts.ts`: `PLANNER_SYS_PROOFS`, `GEN_SYS_PROOF_FULL`, `JUDGE_SYS_PROOF_DEEP`,
  `STMT_CHECK_SYS`).
- `~/Projects/prestige-intelligence/worker/src/engines/disproof/` is the disproof
  pipeline (`engine.ts`, `run.ts`).

This session runs **modified** versions of both. The pipeline shape is unchanged
(plan, generate, precheck, judge, escalate) and the prompt discipline is the
same, but two things are swapped: the model roles are substituted per section 0
(Opus 4.8 subagents for generation and escalation on the Claude subscription,
GPT-5.4 as the judge through `ofox`) instead of the stock billed lineup, and the
work is driven by the orchestrator through subagents rather than by the worker
service. Generation therefore never touches the public billed pipeline, which is
the first hard rule.

The driver spawns generator subagents in parallel, clustering tightly-coupled
items (a definition and the lemma that uses it) into one subagent so they share
context, while keeping unrelated clusters independent. Each subagent receives the
spec sheet, the house-style exemplar, the schema, and the closed vocabulary of
proof justification tags. It writes complete item files directly to `items/`.

Every proof-bearing item follows the phase-stratified format: numbered steps,
each ending in a bracket justification tag drawn from a closed vocabulary
(`[given]`, `[L1]`, `[step 1.2]`, `[algebra]`, `[choose]`, `[assume-contra]`,
`[discharge-contradiction]`, and so on), no forward references, QED symbol last.

### The proof format and the precheck tag vocabulary

The closed justification-tag vocabulary (every step ends in one or more of these)
is: `[given]`; the citation tags `[F#]`, `[A#]`, `[L#]` (Facts, Assumptions,
Lemmas), `[C#]` (a declared diagram cell; see the diagram note below), and
`[step k.j]` (a prior step); `[algebra]`; `[choose]`;
`[suffices: ...]`; and the strategy tags `[assume-contra]`, `[assume-hyp]`,
`[assume-case ...]`, `[ih]`, `[base]`, `[construct]`, `[contrapositive-reduce]`,
`[cases]` / `[cases-exhaustive]`, and the discharges `[discharge-contradiction |
contrapositive | induction | construct]`.

Structure rules the checker enforces: a `**Given:**` context line, then one
labelled fact per paragraph in Facts and Assumptions; a first
`**Proof technique:** <strategy>.` line, then one numbered step per paragraph;
phase stratification (a step citing phase-k steps sits in phase k+1); at least 70
percent of steps carry a tag; no forward references; the QED symbol is final.
Strategy-specific requirements: contradiction needs `[assume-contra]` and a final
`[discharge-contradiction]`; cases needs at least two `[assume-case ...]` and a
`[cases-exhaustive]`; constructive needs `[construct]` and a final
`[discharge-construct]`; direct needs no special tags. The normative source is
`worker/src/precheck.ts`; this list is a convenience, not a substitute for it.

**Diagram chasing (categorical proofs).** Fully supported end to end (see
`SCHEMA.md` 5.1 for the authoring contract). A proof that reasons about a
commutative diagram carries two co-located pieces:

- **Verification**: a `**Diagram:**` block in `## Facts & Assumptions`, with
  named arrows then numbered cells `[C1], [C2], ...`, each cell one composite
  equation justified from the closed grammar (`naturality of <nt> at <morphism>`,
  `universal property of <object>`, `functor <F> applied to [C#]`, and so on).
  Steps cite cells with `[C#]`; every cited cell must be declared, and "the
  diagram commutes" or "a diagram chase shows" as a justification is rejected.
  `precheck.ts` enforces the cell gate, and `tools/judge.mts` auto-activates its
  diagram refuter rules when a `**Diagram:**` block is present.
- **Rendering**: a fenced ` ```tikzcd ` block in a prose section. The app renders
  it to an inline SVG on the server (tikz-cd via `node-tikzjax`, cached by source
  hash; no client payload, no build step). Diagrams sit on a white card that
  reads in both themes.

The generator brief for a categorical topic must instruct the subagents to emit
both pieces. The one part still deferred is step-0 reading of diagrams from
raster source images (Opus 4.8 vision), needed only when scraping figure-only
sources. Deploy note: the production `output: standalone` build must trace
`node-tikzjax`'s `tex/*.gz` assets (`outputFileTracingIncludes`).

**Mechanical precheck** runs on every generated item (free, deterministic):

```
npx --prefix /root/Projects/prestige-intelligence/worker tsx tools/precheck.mts items/<id>.md
```

It verifies the phase stratification, tag vocabulary, strategy-specific required
tags, and step numbering, and prints a canonical repaired form when a proof is
correct but numbered non-canonically. Adopt the printed canonical form and re-run
until clean.

One recurring mechanical gotcha: the checker is line-based, so every numbered
step must sit on a single physical line. Generators sometimes hard-wrap a long
step across several lines. The helper `tools/reflow.mts` joins wrapped step lines
back into one line; run it before precheck:

```
npx --prefix /root/Projects/prestige-intelligence/worker tsx tools/reflow.mts items/<id>.md
```

---

## Step 2. Personal audit

The driver personally reads every item, whether or not the judge later accepts
it. This is the guardrail. The audit checks three things:

1. **Mathematical soundness.** Is each proof correct, and does each step follow
   from what it cites?
2. **Sufficiency and depth.** Is the whole set of definitions and theorems
   enough for the topic, and does every leaf of the dependency tree bottom out
   in something this library proves, in an axiom, or in an explicitly marked
   `proved_here: false` remark? (There is no cap on dependency depth. The owner
   removed it — see "no artificial depth limit" above — because rigor and
   non-circularity outrank brevity: a chain is as long as the mathematics needs.)
3. **Syntactic accuracy.** Precheck clean, ids equal filenames, kinds match
   prefixes, and every dependency and wikilink resolves.

The audit is independent of the judge. When the judge and the audit disagree,
the audit wins, in both directions: a judge acceptance never excuses a real
defect the audit finds, and a judge rejection that the audit proves to be a
hallucination or trivial pedantry is overruled with the reason recorded.

---

## Step 3. Report and fix every problematic pair

Run the judge, then report and fix.

**Judge.** GPT-5.4 runs as a refuter through `ofox`: its only job is to find a
specific defect, and it accepts unless it can name one. The harness is
`tools/judge.mts`, a topic-neutral refuter over the gateway that parses a JSON
verdict `{keep, reason}`. Pass the topic (and optionally the domain conventions)
so it frames the audit correctly; it refuses a Claude-family model for a session
item, and it appends token usage to `$JUDGE_COSTLOG` for the cost report:

```
npx --prefix /root/Projects/prestige-intelligence/worker tsx tools/judge.mts \
  items/<id>.md --topic "undergraduate group theory"
```

Dependencies cited by an item are treated as separately-verified, so the judge
grades only the item's own reasoning.

**Report.** List every problematic pair regardless of whether the judge accepted,
rejected, escalated, or dropped it. "Problematic" is the driver's determination,
not the judge's. A judge rejection that the audit refutes is not problematic; a
judge acceptance that the audit finds shaky is.

**Fix.** For each genuine defect, either fix it directly (small, precise
corrections) or escalate it to an Opus subagent with the specific critique and a
concrete correction plan. In this session the genuine defects the judge caught
and escalation fixed were: a circular use of completeness before it was proved, a
missing direction of distributivity, an embedding multiplicativity that was
hand-waved across sign cases, and an under-justified Archimedean step. When a
single proof grows too large and its sub-arguments start colliding (variable
reuse across blocks), split a sub-result into its own lemma, which also keeps the
tree shallow and readable.

---

## Step 4. Re-run the pipelines on the fixed pairs only

Re-precheck and re-judge only the items that changed. Do not re-run the whole
set. This keeps each cycle cheap and focused.

---

## Step 5. Iterate to convergence

Repeat steps 2 to 4 until no problematic pairs remain. Convergence is defined by
the driver's audit, not by the judge accepting everything. A strict refuter will,
on long or intricate proofs, keep surfacing a new nitpick on each stochastic run:
some are real and get fixed, others are hallucinations (a miscounted axiom, a
misread scope, an arithmetic slip in the judge itself) or demands to spell out a
trivially-true implicit step. Fix the real ones; document and overrule the rest.
Stop when the audit is satisfied and the remaining judge objections are all
verified non-defects.

How to tell a real defect from judge noise, item by item:

- Real defect: the judge names a concrete counterexample, a specific false step,
  a mis-cited or out-of-scope symbol, an unproven sub-result, or ill-formed math.
  Fix it directly or escalate it.
- Noise: the objection is a miscount of the axioms, a misread of a step's stated
  scope, an arithmetic slip in the judge itself, a circular restatement, or a
  demand to spell out a trivially-true implicit step. Verify it is false, record
  why, and overrule it. Never corrupt a correct item to satisfy a hallucination.

A strict refuter tends to surface a different nitpick on each stochastic run of
the same long proof, so treat repeated re-judging as sampling, not as a verdict.
The owner audit, not judge unanimity, is the convergence criterion.

---

## Step 6. Build the page, serve it locally, view it over SSH

**Compose the page.** Write one page file that lists the items in reading order
plus the examples, and a short authored summary. The summary is the only
hand-written prose on the page. Structure it well: compress shared foundational
layers into a single short paragraph that references the sibling page instead of
re-deriving them, and break the novel layer into several small paragraphs.

The rendered page is always five fixed sections: Prerequisites (mechanical and
page-level: links to the other pages that prove this page's dependency closure,
never to individual items), Summary, Flowchart, the item bodies, and the
examples. The
**flowchart is birds-eye**: only landmark items are nodes, and edges are the
transitive reduction of nearest-landmark-ancestor over the dependency graph.
Confirm the flowchart follows the proof spine: the landmark set should be the
real milestones (key definitions and main theorems), and every edge should
reflect a genuine citation in the bodies.

**Serve locally.** The renderer is the app repo's Next.js app, reading the
content directory through the `MATH_LIBRARY_DIR` environment variable. Start the
dev server on the box, bound to loopback:

```
cd <app-repo>/web
npm run dev -- -p 3001 -H 127.0.0.1
```

**View over SSH.** The browser must address the app as `http://localhost:3000`
(the OAuth redirect is registered there), so tunnel the laptop's port 3000 to the
server's port 3001:

```
ssh -N -o ExitOnForwardFailure=yes -L 3000:localhost:3001 <user>@<host>
```

Then open `http://localhost:3000/library/<category>/<page>` and sign in as the
owner. Draft pages render only for the signed-in owner, with a DRAFT banner;
the public sees only published pages. On Windows with WSL2, run the tunnel from
Windows PowerShell rather than inside WSL2, so port 3000 binds on the same
loopback the browser uses and there is no WSL-to-Windows hop.

---

## Publish, commit, push

Publishing is a frontmatter flip, not a deploy: the live site reads the content
directory directly.

1. Flip `status: draft` to `status: published` on the page and on every item it
   lists. A published page that lists a draft or missing item is a hard error,
   not a silent skip.
2. Set the owner-audit date (`verification.audited`) on every item. This is the
   gate.
3. Record the judge outcome honestly. Items the judge genuinely passed get
   `judge: { verdict: pass }`. Items published on owner audit over a verified
   judge false-positive are recorded as `audited` without a fabricated judge
   pass. Never record a pass the judge did not give.
4. Commit and push with a conventional-commit message and no co-author trailers.
   The content repo commits to `main`; a fix to the app repo goes on whatever
   feature branch that repo is using.
5. Report the total session cost on completion, broken down as firecrawl plus
   apify (step-0 scraping, zero when nothing was scraped) plus ofox (the judge
   spend; generation and escalation run on the subscription and cost zero on
   ofox). The ofox spend is summed from the judge harness token log at the
   `openai/gpt-5.4` rate.

---

## Mechanics and gotchas worth remembering

- **Precheck is line-based.** Each numbered proof step must be one physical line.
  Reflow wrapped steps with `tools/reflow.mts` before prechecking.
- **YAML titles must escape backslashes.** A frontmatter title like
  `"... $A \\cdot B$ ..."` needs a double backslash. A single backslash is an
  invalid YAML escape, and the renderer silently drops the whole item, which then
  shows up as "missing" on its page.
- **Display math must be a single source line.** A `$$ ... $$` block split across
  two source lines is mis-parsed by the markdown-math pipeline. Keep it on one
  line.
- **No em dashes.** Use commas, colons, semicolons, or parentheses in item
  bodies, summaries, and messages.
- **Resolve the content directory at call time.** If the renderer captures
  `MATH_LIBRARY_DIR` in a module-level constant, a dev bundle that evaluates
  before the environment is injected can bake the wrong default and return 404
  for every page while other routes work. Read the environment variable inside
  the loader functions.
- **Reuse over regeneration.** Always scan the repo first and cite existing items
  rather than producing a duplicate proof.

---

## Verification honesty

The library records two orthogonal axes per item: origin (session or pipeline)
and verification (mechanical precheck, cross-family judge, owner audit). Page
badges are derived mechanically from the items. The honesty rules are strict:
sources are never fabricated, a judge pass is never recorded unless the judge
gave it, and the owner audit is always the final gate before publish. When the
guardrail overrules the judge, the record shows owner audit without a judge pass,
so a reader can see exactly how each item was verified.

---

## Platform notes

The workflow is platform-neutral. It assumes an agentic coding environment that
can:

- spawn parallel subagents with a chosen model, for generation and escalation;
- call an external model gateway for the independent judge;
- run shell commands (precheck, git, a dev server) and read and write files;
- keep a durable orchestrator that stays in the loop, audits results, and makes
  the publish decision.

Claude Code, Codex, and pi all satisfy this. The specific model choices
(generator, judge, escalation) are swappable, subject to the two hard rules: keep
the generator off the billed pipeline, and keep the judge in a different model
family from the generator.
