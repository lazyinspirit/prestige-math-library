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
- Every rendered page is five fixed sections: Prerequisites (mechanical
  dependency closure), Summary (the only authored prose), Flowchart (birds-eye,
  landmarks only), the item bodies, and the examples.

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
2. Session-authored items are judged by a non-Claude model (GPT-5.4 primary,
   Gemini fallback), never by a Claude model.

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

**Maximum theorem depth is 5.** Plan the dependency tree so the deepest chain of
proof-bearing results (definitions are depth-0 leaves) is at most five levels,
and so that whatever sits at depth 5 is self-contained: it cites only
definitions, axioms, or already-established results, never an unproven
sub-result.

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
is: `[given]`; the citation tags `[F#]`, `[A#]`, `[L#]`, `[C#]` (Facts,
Assumptions, Lemmas, prior Claims) and `[step k.j]`; `[algebra]`; `[choose]`;
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
   enough for the topic? Compute the theorem-dependency depth and confirm it is
   at most 5, and that nothing at depth 5 needs further justification.
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

The rendered page is always five fixed sections: Prerequisites (mechanical
dependency closure), Summary, Flowchart, the item bodies, and the examples. The
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
