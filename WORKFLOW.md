# From a prompt to a publish-ready page: the end-to-end authoring workflow

> **No shell-permission prompts (owner, 2026-07-30).** Every agent and
> every current and future agent use commands already permitted inside the
> workspace sandbox and choose non-escalated equivalents for routine repository
> work. Do not ask the owner to approve shell commands. Claude agents pass
> `dangerouslyDisableSandbox: true` on every Bash call; sandboxed Codex agents
> stay within granted workspace permissions. An indispensable operation with no
> escalation-free form is reported as a blocker rather than prompting.

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

At `LEVELS.md` step 3, the driver also makes the scaffold decisions: after
verifying each Beta recommendation from disk, it approves or declines it using
best judgment. Mathematical accuracy and correct dependency citation are
non-negotiable; among valid alternatives, minimizing forward references takes
priority over preserving additional mathematical richness. Routine step-3
adjudication does not pause for owner approval.

---

## Read these first (the contract wins over this runbook)

**The four normative documents, and what each owns:**

| doc | scope |
|---|---|
| `CLAUDE.md` | session entry point, hard rules, the publish path |
| `WORKFLOW.md` | this file: the per-PAGE runbook, and the hard rules in full |
| `LEVELS.md` | the per-LEVEL build, step 0 to 10 |
| `ARCHITECTURE.md` | every mechanism — gates, ledgers, briefs, visual tiers — how each works and which failure it prevents |

All four are **updated in the same commit as the change they describe**
(owner, 2026-07-27). Verify against the code, never from memory: when a doc
and the code disagree, the code is the truth and the doc is the bug.
`SCHEMA.md` is the item/page contract and outranks all four.

This document is a runbook. The normative contract lives in other files, and they
take precedence over anything here if they ever disagree. Before building
anything, read:

- `SCHEMA.md`: the item and page contract (frontmatter, ids, the phase-proof
  format, the publish checklist).
- `README.md`: provenance (origin, component provenance, and verification), the judge
  lineup by origin, and the citation honesty rules.
- `CLAUDE.md`: project rules, including the frozen presentation constraint.
- `items/lem-cauchy-bounded.md`: the approved house-style exemplar proof. Match
  its frontmatter shape, section headings, step numbering, and prose density.
- `worker/src/precheck.ts` (in the app repo): the normative phase-format checker.

Follow those files, not this runbook, wherever they differ.

For a per-level build, the active Step 6 is the routed pipeline in `LEVELS.md`:
per-batch reader hashes, exact read-only refuter coverage of untouched and
high/critical items, machine-complete group-Alpha decisions with defect-ledger
ownership, then lead-Alpha cross-batch/forward-reference/post-6b-change closure and the final
gate battery, followed by an immutable Step-6 evidence receipt. Alpha does not spawn duplicate build refuters, and 6c does not
repeat same-batch or published-dependency citations already assigned to 6a.

**The model lineup lives in `CLAUDE.md` §Model lineup — the single source of
truth** — and this file never restates it: a second copy of a lineup drifts,
and this one had already retired a judge lane in one paragraph while naming it
in the next.
The current per-level step order and numbering are in
`LEVELS.md`.

### Context-continuity checkpoint (hard rule)

The checkpoint rule is `CLAUDE.md` §Operating — **60%** of active context for
every actor, orchestrator and agents alike, durable state at a safe boundary,
never mid-operation. (An earlier copy here said 50% and then contradicted
itself eleven lines later; deleting the copy removes the disagreement by
construction.)

**Future Beta capacity (owner, 2026-08-01):** a Beta may scaffold and author at
most two A/B pairs. Step 0 records that bound in each batch manifest and
`content-policy.mjs --manifest-only` enforces it for future in-flight manifests; the capacity
limit does not create dependencies between otherwise independent pairs or alter
their legal build order.

### The content model and file map

- `items/<id>.md` is one atomic item per file, in a single flat global pool.
  Items are reused across pages by citation, never copied. Ids are stable and
  IMMUTABLE once merged: rename only through `aliases`, never by reusing a
  retired id.
- `library/<category>/[<subcategory>/]<page>.md` is a page composition file: an
  item list and an examples list, plus the fixed two-paragraph authored summary
  on A pages only. B/examples pages have no authored summary body. `_category.md`
  holds category metadata.
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

**Natural voice and proposition fidelity (owner, 2026-07-30).** Write direct,
natural mathematical prose throughout, without canned headings,
meta-commentary, or rhetorical filler that sounds generated rather than written
for a reader. A dependency fact is not a place for an agent to explain what a
source result is "doing". Avoid AI-sounding headings and filler such as `Null definition:`, `the key bridge
says`, `serves as`, or `captures the idea that`. In `[F#]`, `[A#]`, and `[L#]`,
state the source proposition itself. Use the exact Definition or Statement when
practical. A concise version is allowed only when it retains the source's domain,
quantifiers, hypotheses, conclusion, and direction with maximum fidelity. This
rule binds scaffolding, authoring, Beta/Alpha audit, judge review, and the
every repair anyone applies.

### Component provenance and dependency eligibility (hard rule)

Every future mathematical-content item carries `provenance.statement` and
`provenance.proof`. The former labels the claim/witness/construction; the latter
labels only its local derivation. Beta records evidence for both in the batch
source ledger; Alpha verifies both at Step 6. An AI-generated Statement/
Construction is a heightened truth-risk route: if there is concrete doubt,
search for counterexamples before authoring or accepting a repair. A proof
repair does not establish that its Statement is true.

A logical dependency is eligible solely by the target's statement provenance:
`literature-derived` and `ai-altered` are permitted; `ai-generated` is
forbidden. Proof provenance never changes that decision. AI adaptation remains
a reason for vigilance: Beta and Alpha reopen the cited item and check reputable
literature whenever its exact claim, hypotheses, conclusion, or conventions are
in doubt. Do not backfill legacy content merely to meet this future-session rule.

### Generated-claim minimization (hard rule, owner instruction 2026-08-01)

Beta builds from well-established, literature-backed statements rather than
inventing new theorems to make a page look rich or a proof convenient. Do not
create an AI-generated theorem, proposition, definition, false statement, or
mathematical remark for that purpose. The permitted generated content is narrow:
directly and easily verifiable corollaries, and examples or counterexamples with
checkable witnesses. Every AI-generated Statement/Construction is excluded from
the dependency spine. A would-be generated proof-decomposition lemma stays inline
or is replaced with a source-backed statement.

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

### Twice-touched proofs (hard rule, owner instruction 2026-07-27)

A proof that is **refuted OR REPAIRED more than once** is treated as
structurally suspect, not as a repair queue. Repetition is the strongest signal
this process produces that something is wrong at the level of the mathematics
rather than the wording.

**Two independent triggers. Either one fires.**

- **Refuted more than once by the judge before step 6 completes** — the escalation below.
- **Refuted or fixed more than once by ANY subagent, Alpha-n included** — the
  lead Alpha audits it personally, assesses, reports to the owner and
  iterates. This trigger does not wait for step 6 and does not require a judge
  rejection at all: an item three different agents kept rewriting is suspect
  even if every individual repair looked reasonable and every judge call passed.

The counting is over **refutations + repairs combined**, per item, across the
whole level.

**The escalation, in order:**

1. **Two refutations before step 6 completes.** Name the proof explicitly in
   Alpha-n's step-6 brief, and instruct Alpha-n to review **the proof AND all of
   its neighbouring dependencies** — every item it cites and every item that
   cites it. A proof that keeps failing is often correct in itself and resting on
   a neighbour that is not.
2. **Refuted again after step 6 — a RED FLAG.** The lead Alpha audits the proof
   personally. Not a subagent, and not another repair cycle.

(Step 6 is the final whole-level Beta/Alpha audit under the renumbered workflow.)
3. **The personal audit must state, explicitly:**
   - the **nature** of the problem — mathematical inaccuracy, incorrectly cited
     dependency, unjustified step, false statement, or a judge false positive;
   - the **ramification of dropping** the whole theorem or example: what cites
     it, what breaks, what the page loses, and whether a weaker true statement
     would serve.
4. **Report to the owner and iterate.** Beta/Alpha may add or delete in-flight
   draft results under `LEVELS.md` step 6, but **published** theorems/examples or
   items outside the in-flight level are not removed without explicit owner
   approval. A twice-refuted proof is not self-evidently wrong — measured judge
   precision on this corpus is 21–24%, so a repeated rejection can still be a
   repeated false positive.

**This rule needs data the process used to discard.** `verification.judge`
records only passes, correctly — a rejection leaves no trace once repaired, and
`JUDGE_COSTLOG` stores spend, not verdicts. So **every judge invocation for a
level must set `JUDGE_VERDICTLOG` to that level's ledger**, at a stable path,
e.g.:

```
export JUDGE_VERDICTLOG=research/<run>-judge.jsonl
```

The configured judge (lineup: `CLAUDE.md` §Model lineup) records
`{id, model, keep, reason, context_sha256, at}` for every call, including `keep: null` tool
failures. Commit the shared ledger with the level. Count refutations per item
version; never rotate it mid-level, because the count is the entire point
of keeping it.

For every `keep: false`, Alpha also appends a decision to
`research/<run>-judge-adjudications.jsonl`, keyed by `{id, model,
context_sha256}`. `outcome` is `confirmed_fatal`, `confirmed_nonfatal`, or
`false_positive`; confirmed fatal findings classify `defect_type` as `logic`,
`dependency_citation`, or `other`. Step 10 runs
`tools/judge-compare.mjs <ledger> --adjudications <file>`: the confirmed fatal
count measures Terra's precision among adjudicated rejections, while raw
rejections alone are not an effectiveness claim and cannot measure recall.

**Repairs are worse — they had no record at all**, living only in subagent prose
reports, which is exactly what amendment 6 of the build workflow says not to
trust. Item files are untracked while a level is in draft, so `git log` cannot
supply it either. `tools/touchlog.mjs` closes this by hashing every item file:

```
node tools/touchlog.mjs snap  research/<run>-touches.json "<stage label>"
node tools/touchlog.mjs audit research/<run>-touches.json research/<run>-judge.jsonl
```

**Take a snapshot after EVERY stage that can modify items** — authoring, step-6
Beta/Alpha audit, and step-8 judge adjudication. A file appearing for the first time
counts as creation, not a repair. `audit` combines repairs with judge refutations
and prints the escalation set: every id whose total exceeds one.

Each new snapshot also records a public-interface fingerprint. After an audit
stage, run `tools/impact-audit.mjs` against the authoring baseline. If a title,
dependency declaration, Fact, Statement/Definition/Example, or Remark changed,
Alpha records a disposition for every transitive logical and direct-citation
consumer. A proof-only repair is still audited and rejudged, but does not create
a spurious full downstream work queue.

Before a future level closes, `spine-audit.mjs` also requires an independent,
content-hashed proof reading of the proof-bearing items among the 100 largest
transitive dependency cones. This deliberately spends attention by blast radius,
not by the current level; the receipt lapses when an audited proof changes and is
checked by the whole-level coverage gate.

Measure repairs from disk; do not count them from what an agent reported.

### Self-contained scope and last-resort external fallback (hard rule, owner instruction 2026-08-01)

**`LEVELS.md` §"Step 2" owns this rule** (owner ruling, 2026-08-16) and states it
in full: no item resting on a result the library has not established; the source
search and local-proof attempt, `ai-generated` dependencies avoided; building the
missing prerequisites rather than dropping the result; decomposing or rescoping
before dropping; splitting an A page over 60 items; the source-cited `rem-` /
`proved_here: false` last resort with its machine-required `external_dependency`
record; `external_refs` for non-logical mentions only; the adopted-axiom
exception and its limit; the ‡ tier as catalogue; and a dropped item deferred,
not deleted, as a `coverage.json` row. Read it there. This runbook keeps no
second copy on purpose — two copies of a rule this load-bearing drift, and the
scaffolding agent reads `LEVELS.md`.

### The recurring definition obligations (hard rule)

These are the concrete shapes the §"Definition justification" obligation above
takes. Each recurs, and each requires:

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

`CLAUDE.md` §Model lineup is the single source of truth for every lane, model,
runner, effort and window, and `tools/dispatch.mjs` is its mechanical
expression (`--dry-run --json` attests it). This section held a full copy; the
copy drifted twice — it still named a retired Sonnet judge lane while its own
table two paragraphs later said DeepSeek + Terra — which is the argument for
the pointer. The lineup has since changed twice more (deepseek+terra restored
2026-08-20, deepseek+opus 2026-08-23), which is the argument for it again.

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

Current session cost rule: Claude Opus 5 authoring, Beta, **build Alpha**, every
other dispatched role, and the second judge lane all run through the **Claude
subscription** (owner, 2026-08-23, moving every GPT lane off Codex after that
subscription reached its weekly limit); DeepSeek V4 Pro judging is direct
DeepSeek API spend, and is now the only non-subscription lane and the only
non-Anthropic one. Anthropic-family work must not be routed through ofox.

**The concentration is the risk to watch.** Until 2026-08-23 the run drew on two
independent subscriptions, so exhausting one left the other working; it now draws
on one, and a single session limit stalls the dispatched roles and nulls the
judge sweep together. A capacity refusal is a null verdict and an incomplete
stage, never a verdict and never a completed stage.

Two hard rules govern the models:

1. Generation never runs through the public billed pipeline, and never wires a
   subscription into the worker service. Current authoring uses Claude Opus 5
   through the claude CLI at `xhigh` reasoning with a 1,000,000-token context
   window, selected by the `[1m]` suffix on the model id.
2. Subscription models (author, Beta, Alpha, and every other dispatched role)
   run via the claude CLI, never through ofox; the judge lanes are `CLAUDE.md`
   §Model lineup's. Never adopt an additional judge model on latency, price,
   or fluent reasons; inject a defect you know is there and see whether it
   says so. DeepSeek v4-flash remains barred as judge because it passed a
   blatant injected falsehood.

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
   **Standing Beta rule (owner, 2026-07-30): even for standard material, the
   scaffolding Beta first searches reputable mathematical sources on the web**
   for definitions, theorem and corollary statements, counterexamples, and proof
   strategies. It records working URLs, what each source supports, and convention
   disagreements in its namespaced notes. This is a knowledge and verification
   pass, not permission to label session-authored work as scraped.
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

**Per-pair richness rule (owner, 2026-07-30).** During scaffolding, each Beta
separately reviews every A/B pair for long, multi-part theorem or lemma proofs
that should become a chain of focused intermediate lemmas, then reviews each
substantial result for useful immediate corollaries with cheap proofs. This is
not permission to create trivial microlemmas, duplicates, or cosmetic variants.
The A-page size-warning ceiling is **100 total items**, raised from 60. It is a
review ceiling, not a target or minimum. Never pad toward it, and never omit
valuable mathematics merely for ergonomics or to suppress the warning; report a
possible structural split when coherent content genuinely exceeds it.

`node tools/depcheck.mjs` reports the depth per page so it is measured rather
than asserted.

**Published-library closure during scaffolding (owner, 2026-07-30).** Betas may
read the full published corpus and must do so for every dependency they propose:
open the item on disk, verify its published status and exact proposition, and
search for existing ids before minting another. A load-bearing dependency is
allowed only when it is established by published content on a strictly earlier
page or by an earlier item inside the A/B pair. Anything else is decomposed,
rescoped, or dropped with a note explaining what would license it; a web source
cannot substitute for an unbuilt library dependency.

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
work is driven by the engine through subagents rather than by the worker
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
node tools/tsx-run.mjs tools/precheck.mts items/<id>.md
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
node tools/tsx-run.mjs tools/reflow.mts items/<id>.md
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

**Judge.** The lineup is `CLAUDE.md` §Model lineup, selected by
`JUDGE_LINEUP=terra` and run with `tools/judge.mts`. That program loads
`briefs/judge-conventions.txt` by default into the frozen prompt and its hash;
`briefs/codex-judge.md` is historical human documentation, not a second runtime
prompt. Terra reads proofs and dependencies skeptically and accepts unless it
can name a specific defect. Record its verdict in `research/<run>-judge.jsonl`
as `{id, model, keep, reason, context_sha256, at}`. Terra is same-family with
most work it screens, so this route supplies no cross-family corroboration
(`CLAUDE.md` §Skeptical judge).

The initial Step-7 sweep covers **every item in every completed A/B pair**,
not merely Alpha-touched items. Only after that full sweep may Alpha select the
exact materially repaired items for a targeted rejudge.

Dependencies cited by an item are treated as separately-verified, so the judge
grades only the item's own reasoning — but it is given the text of those
dependencies, of its own page, and of its A/B companion page, so "faithfully
restated?" and "actually licensed?" are checkable rather than assumed. `--batch`
adds the rest of the level. See `ARCHITECTURE.md` §5.

**Adjudication.** Alpha alone adjudicates every configured-judge
rejection in this and all future sessions. It reads the frozen verdict against
the text on disk, records `confirmed_fatal`, `confirmed_nonfatal`, or
`false_positive`, applies any permitted draft repair, and limits rejudging to
the changed items. The engine maintains the ledgers and runs the gates.
Alpha treats a logical gap a competent human can close within 30 seconds as
nonfatal; it may polish the prose but does not start a fatal repair cycle for it.

**Beta dependency discipline (owner, 2026-07-31).** At scaffolding and Step 5,
Beta writes each load-bearing dependency fact from the source item on disk:
verbatim when practical, otherwise as the least-deviating faithful shortening.
It may not turn a nearby result into a stronger result, reverse an implication,
or hide a missing hypothesis. If the source does not license the move, Beta
expands the proof with the necessary internal steps, changes strategy, or
reassesses whether the proposed theorem/example/counterexample is true.
A target with `provenance.statement: ai-generated` is categorically unavailable.
For an eligible AI-altered target, Beta still source-checks the exact statement
and conventions whenever the adaptation leaves doubt; proof provenance is
irrelevant to both decisions.

**Beta proof-design discipline (owner, 2026-07-31).** Before prose, Beta maps
each substantive subclaim to an exact dependency or inline derivation, then
checks empty cases, zero/one indices, degenerate parameters, endpoints,
nonempty choices, and both directions of iff claims. A step may use only an
explicit fact, earlier step, given hypothesis, or elementary algebra. Distinct
conceptual moves are separated into focused lemmas. If those licensed moves do
not close the proof, Beta narrows or drops the claim instead of overstating a
dependency.

**Durable proof contracts and high-risk routing (owner, 2026-08-01).** The
private proof-obligation map and boundary pass are now persisted per batch in
`research/<run>-batch-<i>.proof-contracts.json`; see
`QUALITY-CONTROLS.md` for the schema. A contract records exact source excerpts
for every fact citation, the input map for every numbered proof step, and the
disposition of every standard boundary case. The engine merges the
namespaced files before the whole-level `proof-contract.mjs --strict` gate,
runs any selected independently computed finite countermodel checks, and routes
high-risk items to an extra Alpha refuter via `risk-report.mjs`. Finite checks
falsify bounded cases only; passing never establishes a theorem. Repeat all
three gates after Step-6 repairs and before freezing Step-7 judge context.

**Scope closure and downstream containment (owner, 2026-08-01).** Future levels
also run `content-policy.mjs` over their batch manifests, save the full
`audit-manifest.mjs` relationship checklist, and bind Alpha's reader coverage to
it with `level-coverage.mjs`. A changed public interface runs through
`impact-audit.mjs`, which requires Alpha to inspect every computed consumer. The
post-Step-7 coverage gate checks current prompt hashes, not merely historical
ledger rows, and records every planned-versus-authored dependency difference in
the signed Alpha receipt. It also consumes Alpha's exact-hash judge
adjudications: a current `confirmed_fatal` or unadjudicated rejection blocks
closure, while an explicitly `confirmed_nonfatal` or `false_positive` finding
does not override the 30-second nonfatal-gap policy. The judge-closure receipt
stores exact `(id, model, context_sha256)` work units for any missing outcome;
Step 8 routes those units to a narrow recovery Alpha rather than re-running the
completed adjudications or spending an empty repair round.

**Obvious published-dependency repair (owner, 2026-08-01).** The owner has
delegated a narrow exception to the usual published-content read-only boundary:
Beta and Alpha may correct a published item used as a dependency only when its
current mathematical statement, cited fact, or load-bearing citation is plainly
false and the exact replacement is either source-checked from reputable
literature or directly elementary. Record the erroneous and corrected text,
the source URL and conventions or the complete elementary derivation, in
`research/<run>-published-dependency-repairs.md`. “Common sense” is limited
to a short direct calculation or unfolding of the stated definitions; it does
not establish a nontrivial theorem. Take a touch snapshot immediately before the
repair, run `impact-audit.mjs` from it, and resolve every logical and
direct-citation consumer it returns. The correction may not rename/remove an id,
silently choose a convention, create a new theorem, or leave a consumer queue
open. A Beta's repair is independently checked by Alpha, and Alpha's by an
independent Step-6 reader; the repairer never certifies itself. Materially
AI-repaired content is `ai-altered` unless it was already `ai-generated`. Clear
the stale judge and owner-audit records, have both current judge lanes rejudge
the final changed material, and use a current `verification.verified` record
with `scope: published-dependency-repair` and `delegated_by: owner` as the
delegated public gate. A `proved_here: false` record instead receives a fresh
`sources_checked` check. A complex or debatable correction is outside this
exception and is reported rather than partially applied.

**Report.** List every problematic pair regardless of whether the judge accepted,
rejected, escalated, or dropped it. "Problematic" is the driver's determination,
not the judge's. A judge rejection that the audit refutes is not problematic; a
judge acceptance that the audit finds shaky is.

**Fix.** For each genuine defect, either fix it directly (small, precise
corrections) or escalate it under the current `LEVELS.md` model assignment with
the specific critique and a concrete correction plan. In the original session the
genuine defects the judge caught
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

Step 3 writes exact, closure-bound decisions for every coverage decline. Step 9
rechecks only decisions whose row or relevant context changed; runs without the
new receipt perform the full sweep. Delta capture, receipt refresh, Alpha review,
register render and the scope snapshot run serially. Every created or mathematically modified
item since `post-step8` is derived by guarded hash; creations require one run
manifest owner and modified published items enter a targeted change manifest.
Every changed id passes through Terra and exact adjudication/rejudge, then
stamped after impact closure. An impact-repair snapshot waits for its exact
Alpha result. Unchanged current verdicts are not re-spent.

Before the owner pause, Step 10 mechanically reconciles the final receipts and
ledgers into a hash-bound evidence packet. Its deterministic renderer includes
every fatal defect row, build/judge/pathway statistics and readiness facts. A
read-only Alpha returns only executive interpretation, caveats, owner reading
priorities and evidence-supported recommendations; it cannot omit a fatal row
or alter the validated tree.

---

## Step 6. Build the page, serve it locally, view it over SSH

**Compose the page.** Write one page file that lists the items in reading order
plus the examples. For every A page, the authored summary has exactly two
nonempty prose paragraphs, each under 150 words. The first gives mathematical
background and names the definitions and results from declared dependencies that
are used. The second names the main definitions and theorems developed on the
page and explains their general logical progression. A B/examples page has no
authored summary body. A summaries remain subject to SCHEMA §6: no counts,
self-ranking, unsupported reading-position claims, or surveys of what other
pages contain.

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
2a. Check the page sits in its category's course pathway:
   `node tools/pathcheck.mjs <category>`. A published page in no part is a hard
   error there. `tools/pathway-sync.mjs` places it, in the part its
   prerequisites allow; the brief it lands under is prose, so if the part now
   covers something its brief does not mention, write the sentence.
3. Record the judge outcome honestly. Items the judge genuinely passed get
   `judge: { verdict: pass }`. Items published on owner audit over a verified
   judge false-positive are recorded as `audited` without a fabricated judge
   pass. Never record a pass the judge did not give.
4. Commit and push with a conventional-commit message and no co-author trailers.
   The content repo commits to `main`; a fix to the app repo goes on whatever
   feature branch that repo is using.
5. Report the total session cost on completion, broken down as firecrawl plus
   apify (step-0 scraping, zero when nothing was scraped) plus direct DeepSeek
   judge spend. Claude Opus 5 authoring, Beta, build Alpha, every other
   dispatched role and the second judge lane run on the Claude subscription and
   are not counted as direct-API spend. Since 2026-08-23 no lane runs on the
   Codex subscription, so direct DeepSeek spend is the whole of the model bill.

---

## Mechanics and gotchas worth remembering

- **Precheck's structural tags are line-based.** Keep ordinary numbered prose on
  one physical line and use `tools/reflow.mts` on accidental soft wraps. A
  deliberate display or continuation before the next numbered step still
  belongs to that step for proof-contract purposes: `facts-block.mjs` parses the
  whole block, and both `proof-contract.mjs` and contract regeneration consume
  that shared view.
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

The library records origin (session or pipeline), separate statement/construction
and proof/verification provenance on future mathematical-content items, and
verification (mechanical precheck, Terra judge, owner audit). The component
chips tell the reader which part was
generated, materially altered, or faithfully derived from literature;
`proved_here` still
separately says whether this library supplies a proof. Page badges are derived
mechanically from the items. The honesty rules are strict: sources are never
fabricated, a judge pass is never recorded unless the judge gave it, and the
owner audit is always the final gate before publish. When the guardrail overrules
the judge, the record shows owner audit without a judge pass, so a reader can
see exactly how each item was verified.

---

## Platform notes

The workflow is platform-neutral. It assumes an agentic coding environment that
can:

- spawn parallel subagents with a chosen model, for generation and escalation;
- call an external model gateway for the independent judge;
- run shell commands (precheck, git, a dev server) and read and write files;
- keep a durable engine that stays in the loop, gates results, and escalates
  the publish decision.

Claude Code, Codex, and pi all satisfy this. The specific model choices
(generator, judge, escalation) are swappable, subject to the two hard rules: keep
the generator off the billed pipeline, and keep the judge in a different model
family from the generator.
