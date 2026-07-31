# ARCHITECTURE — every mechanism in this library, and why it exists

**Companion to `LEVELS.md`.** `LEVELS.md` says *what happens in what order*;
this file says *what each mechanism is, how it works, and which failure it was
built to prevent*. `SCHEMA.md` and `CLAUDE.md` win where they differ.

**Keep this current.** Every mechanism added, changed or retired gets an entry
here in the same commit. A mechanism nobody can find is a mechanism that gets
rebuilt worse. See §9.

Verified against the code 2026-07-31.

---

## 1. The shape of the system

Four layers, and **every one of them has caught defects the others missed**.
That is the design claim, and it is measured, not assumed.

```
  PROSE SCAFFOLD          research/plan-*.md         human page designs
        │  Beta-n-i reads
        ▼
  MACHINE SCAFFOLD        research/plan-spec.json    ids, order, deps
        │  validate-plan + depsource gate it BEFORE authoring
        ▼
  CONTENT                 items/*.md, library/*/*.md
        │  9 gates + Beta/Alpha reading audit + 1 judge
        ▼
  RENDERED PAGE           app repo, read-only bind mount
```

The asymmetry worth internalising: **mechanical gates prove absence of a defect
class; reading tiers find defects; the judge is a cheap screen and finds almost
nothing.** Historical judge measurements on this corpus were **21–24%**
precision and **0/3** on real historical defects. The current DeepSeek/Terra
pair receives no inherited quality claim: its effectiveness is reported only
from owner-adjudicated per-level findings. Never model it as the thing that
finds problems.

## 2. The content contract (`SCHEMA.md`)

Frontmatter fields, and what enforces each:

| field | meaning | enforced by |
|---|---|---|
| `id` | must equal filename | `depcheck` (`id-filename`) |
| `kind` | definition/lemma/theorem/corollary/example/counterexample/false-statement/remark | `depcheck` (`kind-prefix`), `validate-plan` (`prefix`) |
| `status` | `draft` → `published` | `depcheck` (`draft-on-published-page`) |
| `deps` | **logical** dependencies | `depcheck` (cycles, resolution), `citecheck` |
| `justified_by` | forward-pointing discharge of a definition's obligation | `depcheck` (target must transitively depend on the citer) |
| `forward_refs` | references to later material | `fwdcheck` |
| `external_refs` | *mentions* of unproved items | `extcheck` |
| `proved_here: false` | this item is a ‡ catalogue entry | `extcheck` |
| `landmark` | appears as a flowchart node | curation only |
| `verification.precheck` | phase-format result | `precheck` |
| `verification.judge` | **passes only, never rejections** | honesty rule |
| `verification.audited` | **the owner's field alone** | `depcheck` (`published-unaudited`) |

**Why `justified_by` is separate from `deps`:** a lemma proving a definition is
well-defined *depends on that definition*, so putting it in `deps` creates a real
cycle. The split is what lets `depcheck` guarantee acyclicity without losing the
justification.

**Why `external_refs` is separate from `deps`:** a `deps` edge to an unproved
remark would inject a false logical edge into acyclicity, the page prerequisite
closure and the flowchart — `def-axiom-of-choice` does not *depend* on Cohen's
theorem.

## 3. The nine gates

Run from the repo root. The orchestrator runs the authoritative pass **after**
every agent in a stage finishes; no stage advances on an agent's report.

### 3.1 `precheck.mts` — phase-proof format
Normative checker is `worker/src/precheck.ts`. Verifies every proof-bearing item
parses as a phase proof and that its declared strategy is discharged.

Strategies: `direct`, `contradiction`, `cases`, `induction`, `contrapositive`,
`constructive`. Tag families, opener → discharge: `contrapositive-reduce` →
`discharge-contrapositive`; `assume-contra` → `discharge-contradiction`;
`base`/`ih` → `discharge-induction`; `assume-case`/`cases-exhaustive` → `cases`.
Errors: `no-given`, `no-steps`, `no-qed`, `qed-not-final`,
`qed-not-final-postrepair`, `untagged-steps`, `bad-tag`, `strategy-missing(...)`.

**It is LINE-BASED**, so a soft-wrapped step fails. Run `reflow.mts` first. On
REPAIR output the repo stores the canonical stratification — a step citing
phase-k steps sits in phase k+1 — adopted with `adopt-repair.mjs`, which also
rewrites stale prose references like "step 3.2" that precheck cannot see.

**Known limitation, measured 2026-07-27 (level-7-algebra authoring):
`adopt-repair.mjs` SKIPped 20 of 22 REPAIR blocks**, at `tools/adopt-repair.mjs:94`,
`"repaired steps do not match the originals by text"`. Cause: precheck's repair
renumbers steps *and* rewrites the `step k.j` back-references inside step bodies,
so the repaired line no longer matches the original line and the text-based
mapping goes ambiguous. The more a proof cross-references its own steps, the more
likely adoption fails — so it fails hardest exactly on the long proofs that need
it most. **Adopting REPAIR output is therefore substantially a hand operation
today; budget for it, and never assume a clean `adopt-repair` run means the
repair was applied.** A positional-fallback adopter would fix this and does not
exist in `tools/`; adding one is a tool change and carries the §9 doc obligation.

### 3.2 `depcheck.mjs` — dependency and circularity
Runs over **actual content**, not the plan, so it stays true as things are
authored. Errors: `id-filename`, `yaml-escape`, `kind-prefix`, `dep-unresolved`,
`link-unresolved`, `self-dep`, `item-cycle`, `page-cycle`, `page-item-missing`,
`page-item-dup`, `draft-on-published-page`, `published-unaudited`,
`published-unchecked`, `orphan`, `multi-home`, `cited-not-in-deps`,
`justification-backward`, `justification-duplicated`,
`sources-checked-on-proved` (19 total).

**This is the mechanical guarantee behind "no circular reasoning."**
`published-unaudited` is what forces the owner's re-audit when an amendment
changes published text.

### 3.3 `fwdcheck.mjs` — forward references
`forward-on-spine` is the hard one: a *load-bearing* forward reference on a
definition, lemma, proposition or theorem is forbidden, because the spine must
stay strictly ordered. Everything outside `## Remarks` counts as load bearing.
Also `forward-undeclared`, `forward-in-deps`, `forward-not-later`,
`forward-same-page`, `forward-dangling`, `forward-unused`, `forward-cycle`,
`stack-cycle`. Computes a `direct`/`inherited` marking that propagates along
`deps`, so a consequence of a forward reference is marked too. `--ledger` writes
the generated forward-reference ledger.

**Measured, 2026-07-27: the orientation/load-bearing split is what makes anchoring
vocabulary in a low published item affordable.** `web/lib/library-forward.ts`
strips `## Remarks` before seeding, so only load-bearing references propagate. The
algebra track needed the five order-7 items that say "commutative ring", "ideal"
and "maximal ideal" to point at the definitions arriving at order 34. A
load-bearing edge there would have marked **570 of 862 published items (66%)** as
resting on later material, because ℤ and the Cauchy construction sit at the bottom
of the graph, and a marker carried by two thirds of the library carries nothing.
As Remarks-only orientation refs the blast radius is **zero items**, and
`forward-on-spine` would have rejected the load-bearing form anyway, since those
five are theorems and lemmas. **Anchoring vocabulary in the spine is a
Remarks-only operation; there is no other legal form.**

**The corollary, measured 2026-07-28 (frontier-1): an item that DECLARES
`forward_refs` is radioactive as a dependency.** Propagation runs along `deps`,
so citing such an item marks the citer and everything downstream of it as resting
on later material — regardless of what the citer needed it for.

`rem-r-native-topology-scope` is the live example, and it is a trap because it is
the *natural* citation for a true and useful fact: that the two collections of
open subsets of ℝ (the order-native one and the metric one) are one collection.
`def-metrizable-space` attributes exactly that to it. But it declares
`forward_refs: [cex-closed-bounded-in-q-not-compact, def-topological-space,
def-metrizable-space]`, and when `separation-axioms` (order 261) cited it, **13
items inherited the sky ↗ chip for targets all published far earlier than 261** —
an assertion that is simply false about those items. The author removed all 13 by
unfolding the identification inline from `def-open-and-closed-in-r`,
`def-neighbourhood-r`, `def-metric-topology` and `lem-real-line-is-a-metric-space`.

So: before citing any item, check whether it declares `forward_refs`. If it does
and the fact wanted is elementary, unfold the fact rather than inherit the
marking. No gate reports this — `fwdcheck` is doing exactly what it should, and
the resulting chip is a correct consequence of an incorrect citation choice.

### 3.4 `extcheck.mjs` — the ‡ "not proved here" tier
`proved_here: false` items must be `rem-`, have `precheck: n/a`, carry no proof
section, carry a real citation, and have **no judge block** (there is no proof to
judge): `unproved-kind`, `unproved-has-proof`, `unproved-judged`,
`unproved-precheck`, `unproved-on-published`, `unproved-uncited`. For references:
`external-dangling`, `external-in-deps`, `external-not-unproved`,
`external-unused`.

**A DEPENDENCE propagates; a MENTION does not.** Owner decision on a
measurement: propagating mentions marked 26 items instead of 13, including
`thm-zorn` and `thm-well-ordering-theorem`, which are proved in full here and
rest on Cohen for nothing — the chip would have asserted something false.
Mentions are added *after* the propagation fixed point so they can never act as
seeds.

### 3.5 `citecheck.mjs` — mis-attribution
Heuristic lint for the **dominant historical defect class**: 14 of 50 defects in
a 150-item certification pass were a fact citing an item that does not state it.
Pattern-matches elementary ordered-field and order-theoretic moves against the
item actually cited. Also flags **nonstrict attribution**: a source giving only
the strict form cited for a nonstrict claim. Warnings, not hard errors —
`[cited-not-in-deps]` has documented legitimate cases, notably naming an axiom
without using it.

### 3.6 `rendercheck.mjs` — defects visible only when rendered
Exists because two defects reached the owner's eye at level 8 in text that was
valid markdown, valid frontmatter, valid phase format and mathematically
correct. `wikilink-in-math` (the renderer rewrites `[[id]]` before KaTeX, so a
wikilink inside `$…$` silently kills the block while every other gate stays
green), `nested-dollar-in-display`, `dollar-in-tag`, `multiline-display`,
`unclosed-display`, `unbalanced-inline-dollar`, `blank-line-in-inline-math`, and
**`katex-parse-error` from a real KaTeX parse** using the app's own KaTeX, plus
`unreadable` for a file it cannot open.

### 3.7 `prosecheck.mjs` — the prose defect class (owner approved 2026-07-28)
**Every defect this library has shipped for seven consecutive builds was in
prose**, and almost none was mathematical: they were claims *about the library* —
counts, positions, what the corpus does not contain. An author cannot verify any
of those while writing, because each is a claim about a file they are not looking
at. That is why they survive authoring and cost a human reading tier to find.

Three rules, gated: **no count in prose**; **no positional claim not derived from
the spec**; **scope denials scoped to this page's declared prerequisites, never to
"the library"**.

**Severity is split on certainty.** The only ERROR is `position-contradiction`: a
"later/earlier page" phrase whose linked target's page order contradicts it —
decidable from `plan-spec.json`, no judgement. Warnings are the heuristics
(`count-in-prose`, `count-of-this-page`, `library-scope-denial`), modelled on
`citecheck`, which is warnings-only for the same reason. **Never silence a warning
by making a true sentence vaguer.**

**Its own false-positive history is the instructive part, and is why the ERROR is
narrow.** The first draft fired whenever a direction word shared a *sentence* with
any wikilink and produced **240 "errors" on a corpus that had just been read end
to end** — i.e. almost all false. Two causes, both now handled: "above"/"below"
overwhelmingly mean *within this item*, not a page position, so only
"later"/"earlier" count; and the word must attach to the link, so the phrase must
name a page or the reading order and the link must fall inside the same sentence.
`"later on this page"` is excluded outright. After tightening: **0 errors on the
live corpus, and an injection of the real historical defect** (general compactness
at order 255 called "a later page" from 283) **is caught**, with the control clean
and the file byte-identical after restore.

Current corpus: 0 errors, ~670 warnings — dominated by real counts in prose such
as "three false statements" and "three theorems", which are *true today* and
exactly the class the rule bans.

### 3.8 `validate-plan.mjs` — the scaffold, before authoring
**Takes the spec path as an argument** — `node tools/validate-plan.mjs
research/plan-spec.json`. Run bare it prints usage and exits non-zero, which
reads as a gate failure and is not one.

Errors: `resolve`, `requires-resolve`, `requires-cycle`, `item-cycle`,
`page-cycle`, `prereq-order`, `undeclared-prereq`, `forward-ref`,
`forward-whitelist`, `intra-order`, **`b-leaf`** (nothing may depend on an item
on a B/examples page — B pages are leaves), `b-requires-a`, `dup-id`, `prefix`,
`kind`, `companion`. Warnings: `orphan`, `size` (above 100 A-page items; a review
ceiling, not a target or permission to prune), `redundant-prereq` (a declared prerequisite already reachable transitively; 12
stand in the spec as of 2026-07-27 and are kept deliberately where the direct
edge is mathematically real). 19 codes total.

### 3.9 `depsource.mjs` — where each dep actually lives
Per dep: `published` / `planned-earlier` / `draft-page` / `homeless` /
`planned-later` / `unresolved`. **Only `unresolved` fails.** `planned-later` is
the forward-reference report.

**Known blind spot: it reads `deps` only and cannot see `forward_refs`.** A level
can declare dozens of forward references while `depsource` reports
`planned-later 0`. This caused a false "zero forward references" claim at
level 9.

### Helpers
`reflow.mts` (join soft-wrapped steps; purely syntactic, never changes
mathematics) · `adopt-repair.mjs` · `consumers.mjs --changed` (who cites what I
touched — one agent per page otherwise leaves consumers unowned, which has failed
three times) · `rounds.mjs` (static levels; **ignores publication state**) ·
`gen-spec.mjs`.

**`rounds.mjs` emits ONE ROUND PER LEVEL** (owner, 2026-07-28). The old `--max 8`
cap split wide levels into sequential sub-rounds and turned 19 dependency levels
into 36 rounds; it is now opt-in and off by default. Splitting a level bought
nothing, because pages sharing a level are provably mutually independent — a
dependency would force the dependent page to a strictly higher level — so there
is no ordering to discover inside a level. The whole level is authored in
parallel, one agent per A/B pair. Only a real dependency edge forces sequencing.

**`rounds.mjs --pairs`** (owner, 2026-07-28) prints one row per A/B pair ranked
by dependency level, so a session can build the library layer by layer with
minimal forward referencing; `--md` emits it as the committed table
`research/BUILD-LEVELS.md`. **Regenerate that file, never hand-edit it** — the
spec moves under it every time a track is spliced. It shares `rounds.mjs`'s level
function deliberately, so the table and the round plan cannot disagree.

Unlike the round plan, `--pairs` reads **publication state from disk**, and it
reads the PAGE FILE first rather than the spec's `items` array. That matters: 62
page files exist and only 58 spec entries carry an item list, so a state inferred
from `items` alone reports long-published pages as unscaffolded. It also
distinguishes a B companion that is outstanding work from one the owner has said
is never being built — five A pages are published with no B page file at all, and
labelling those `not-building` is what stops every future session re-proposing
them.

## 4. The ledgers — state that must outlive its own repair

| ledger | written by | answers |
|---|---|---|
| `research/level<n>-judge.jsonl` | `judge.mts` via `JUDGE_VERDICTLOG` | how many times was this proof refuted? |
| `research/level<n>-judge-attempts.jsonl` | `judge.mts` via `JUDGE_ATTEMPTLOG` | why did a judge call slow, retry, or fail? |
| `research/level<n>-touches.json` | `touchlog.mjs` | how many times was this proof repaired? |

Both exist for the **twice-touched escalation rule**, and both were built because
the data was being destroyed:

- `verification.judge` records **passes only** — correctly, since an absent block
  honestly says "not yet judged" while a stale one claims a pass on text the
  judge never saw. So a rejection vanished the moment it was repaired.
  `JUDGE_COSTLOG` stores spend, not verdicts.
- Repairs had **no record at all**: they lived in subagent prose, and item files
  are untracked while a level is draft, so `git log` cannot supply them either.

**SNAP AFTER EVERY ITEM-MODIFYING STAGE, OR THE LEDGER IS EMPTY — measured
2026-07-28 (frontier-1), and it was the orchestrator's error.** A baseline
snapshot taken *before* authoring, followed by one taken after step 8, records
every item as a **first appearance**, i.e. a creation. First appearance is
deliberately not a repair (below), so `touchlog report --min 1` returned **0
items** for a build in which eleven step-8 repairs and nine author repairs had
actually happened. The escalation set had to be reconstructed from narrative in
the resume log rather than measured, which is exactly what the ledger exists to
prevent.

The rule in `LEVELS.md` — snap "after EVERY item-modifying stage" — is not
advice, and two snapshots at the ends of a build do not satisfy it. Minimum for a
build: baseline, **after authoring**, after step 6 audit, after step 8
adjudication, and after the step-9 sweep (plus after any item repair in step
10). The judge ledger still supplied refutation counts, so the
escalation rule fired correctly on its other trigger; repairs were the half that
went unrecorded.

`touchlog.mjs` hashes item files per stage. **The hash excludes the
`verification` block**, because stamping a judge verdict rewrites the file
without touching a character of mathematics — hashing raw bytes charged 53
stamped items with a phantom repair in one pass. It keeps `title`, `deps`,
`forward_refs`, `external_refs` and `proved_here`, since changing those *is* a
mathematical edit despite living in frontmatter. First appearance = creation,
not repair.

**Attempt telemetry is separate from the verdict ledger.** A verdict line says
only whether the model produced a mathematical pass, refutation, or honest null;
it must not be polluted by an individual socket error or rate-limit retry. The
attempt ledger instead records the per-attempt latency, HTTP status and available
rate-limit headers, terminal finish reason, token usage, and structured transport
error cause. Empty non-final responses (`content: ""`, no finish reason) are
requeued by the sweep with jitter under the existing three-attempt limit; the
slot is released during the wait so other independent calls are not starved.
DeepSeek starts at
40k maximum-reasoning output tokens and receives a single 80k fallback only for an empty
`length` response; a second length response is retained as a reasoning-budget
null so its distinct failure mode remains measurable.

## 5. The judge

**Current routing (owner, 2026-07-31): session-item judging runs DeepSeek V4
Pro directly at maximum reasoning and freshly spawned GPT 5.6 Terra through the
Codex subscription at `xhigh`, in parallel.** Both receive the exact same
hash-attested frozen item, A/B-pair, dependency, and conventions prompt; Terra
runs read-only from an empty temporary work directory. Every
GPT 5.6 Sol author, Beta, and Alpha uses `xhigh` reasoning with a 1,000,000-token
context window. DeepSeek is the cross-family screen from the Sol author; Terra
is an independent same-context comparison lane, not a claim of cross-family
separation. `tools/judge.mts --parallel` supports a one-item paired call and
retains the historical GLM/DeepSeek injection-test record. The normal sweep
uses independent model lanes so a slow judge never blocks the other's next item.

**When it runs:** once, after the step-6 independent-reader/Alpha audit, on final
text, with **both judges covering every item in the completed level** regardless
of whether Alpha changed it. The old
reason still applies: judging before audit bought verdicts that later rewrites
invalidated. Measured on `frontier-1`, 292 calls for 212 items produced 80 repeat
calls and 30 destroyed passes. Judging after audit preserves coverage and makes
verdicts describe the text that ships.

**Prompt files:** `briefs/codex-judge.md` plus `briefs/judge-conventions.txt`.
They instruct both judges to read proofs and dependency citations skeptically.
The conventions file is still stored because forgetting it makes a judge flag
30-second gaps and drives useless repair cycles.

**Context unit:** the A/B pair. The judge receives the target item, its own page
and companion `-examples` page in full, plus only additional A pages that the
target page both declares in `requires` and actually cites. That edge-restricted
context rule was measured on `frontier-1`: passing every sibling page produced a
mean 93,810-token prompt and omitted three of five siblings on every call.

**Ledger:** every paired judge run writes two full lines to
`research/level<n>-judge.jsonl`, one per model, with at least
`{id, model, keep, reason, context_sha256, at}`. The matching
`context_sha256` attests that the pair saw the same frozen prompt.
`verification.judge` records a pass only when both models passed the current
text; an absent block means unjudged or owner-audited over a refuted false
positive. `keep: null` is not a pass. `tools/judge-sweep.mjs` resumes selected
plan pages: naming an A page automatically includes the item list on its
B/examples companion, so A/B-pair coverage cannot silently omit examples. It
skips only complete pairs whose hash also matches a freshly
assembled current prompt. It assembles that hash once per selected item and
shares it across both model queues. At step 10, `tools/judge-compare.mjs` reports both
latest-attempt and latest-usable agreement: a later null cannot erase an
earlier complete verdict on the same prompt, but a later substantive verdict
does. It also summarizes model-only findings for the owner report. Its optional
`--adjudications` input measures which judge actually found owner-confirmed
fatal logic or dependency-citation defects; rejection volume alone is never
treated as effectiveness.
The ordinary sweep selects both judges; a targeted `--models` recovery selects
only the named model's missing current-context verdicts and never re-spends a
complete verdict from its peer.

**Effectiveness ledger:** step 8 appends one owner decision per rejected
`{id, model, context_sha256}` to
`research/level<n>-judge-adjudications.jsonl`: `outcome` is
`confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`; a fatal outcome
also classifies `defect_type` as `logic`, `dependency_citation`, or `other`.
`tools/judge-compare.mjs <ledger> --adjudications <file>` reports the two
models' owner-confirmed fatal detection counts and fatal-confirmation rate among
adjudicated rejection candidates. It makes no unsupported recall claim, because
the complete universe of fatal defects is not independently enumerated.

**Concurrency cap (owner, 2026-07-31):** `tools/judge-sweep.mjs` uses one
file-backed, cross-process global pool. DeepSeek and Terra never wait for one
another before advancing to their next items; a freed slot takes the next
eligible call for whichever model is ready. The hard ceiling is ten judge calls
total, with no per-model quota. The ten numbered slots live under `/tmp`,
are acquired atomically, heartbeat while a child judge runs, and are reclaimed
only after a five-minute stale heartbeat, so a second resumed sweep cannot add
calls past the cap and a killed run cannot block it forever.

**Injection tests still govern future model changes.** DeepSeek v4-flash was
reverted after passing a blatantly false injected claim; GLM caught that
injection but still scored 0/3 on real historical defects. A low rejection rate
and fluent reasons are not evidence of a good judge. The owner has nevertheless
required a DeepSeek v4 Pro parallel screen. The historical GLM result is
preserved as evidence, but the current DeepSeek/Terra comparison is measured
from paired Step-10 owner adjudications, especially fatal logic and
dependency-citation detections. Before any further judge model or context-shape
change, inject a defect known to be false under this library's conventions and
verify the model catches it.

## 5b. Audit-manifest coverage backstop

`tools/audit-manifest.mjs` supports step 6. Given the level batch JSON files, it
classifies authored dependency edges as same-batch, cross-batch,
published-backward, forward, unresolved, or missing-source. It does not certify
semantic correctness; it makes omissions visible so Beta and Alpha reports can be
reconciled against an explicit checklist.

## 6. The prompt-side mechanisms (`briefs/`)

Half the workflow. These are templates; substitute `<n>` and `<i>`.

| file | actor | carries |
|---|---|---|
| `beta-scaffold.md` | Beta-n-i, steps 1–2 | reputable-web-source research ledger, full published-corpus read access, plan order, dependency closure, namespaced writes, id reuse, seams, per-pair proof decomposition, corollary pass, 100-item review ceiling |
| `beta-step8-audit.md` | independent Step-6 reader, **step 6a batch auditor** (historical filename retained) | exhaustive audit of a batch the reader did not author; fixes; added/deleted in-flight results |
| `authoring.md` | the same GPT 5.6 Sol Beta-n-i that scaffolded the batch, step 5 | precheck traps, shipped-defect checklist, fixed A/B page-summary contract, no-judge rule |
| `alpha.md` | Alpha-n, steps 4, 6, and 8 | dispatches read-only skeptical proof-refuters; adjudicates their and judges' findings; propagates, audits independent-reader fixes, and audits cross-batch and cross-level references |
| `codex-judge.md` | DeepSeek V4 Pro + GPT 5.6 Terra judges, step 7 (historical filename) | shared frozen judge prompt and JSON verdict contract |
| `judge-conventions.txt` | the judge | the triage rule and library conventions |

**Beta proof-design backstop (owner, 2026-07-31).** The scaffold and authoring
briefs require a proof-obligation map, a boundary-case pass, step-level
dependency whitelisting, focused lemmas for distinct conceptual moves, and
claim-narrowing or dropping when the licensed proof does not close. These act
before the independent Step-6 audit; they do not replace it.

**Every one states the triage rule verbatim.** Non-negotiable: mathematical
accuracy, logical validity, correct citation. Explicitly acceptable, zero effort:
citational quirks, gaps a competent reader closes **within 30 seconds**,
non-fatal quirks, letter-level imperfection. It is repeated rather than
referenced because an agent that does not receive it damages correct text roughly
three times per real repair.

**Every content-facing brief also carries the natural-voice and citation rule
(owner, 2026-07-30).** Agents write direct mathematical prose without canned
headings, meta-commentary, or rhetorical filler. A `[F#]`, `[A#]`, or `[L#]`
fact states the cited proposition,
not an AI-sounding label or an interpretation of what the result is for. Exact
Definition/Statement text is preferred; a concise shortening must preserve the
domain, quantifiers, hypotheses, conclusion, and direction. The live defect that
prompted the rule was `Null definition: a null perturbation is eventually
smaller ...`, which obscured the ordinary quantified null-sequence definition.

**Beta scaffolding is source-grounded and dependency-closed (owner,
2026-07-30).** Before constructing page item lists, Beta searches reputable
mathematical sources on the web for definitions, theorem and corollary
statements, counterexamples, and proof strategies, recording working URLs,
supported planned material, and convention disagreements in its namespaced
notes. This is deliberately paired with full read access to published `items/`
and `library/`: every proposed published dependency is opened from disk and
checked for exact statement, hypotheses, direction, and status. Web evidence can
correct a scaffold, but cannot license a load-bearing result the library has not
established; that result must be decomposed, rescoped, or dropped under the
self-contained-scope rule.

**Step-3 adjudication is an orchestrator mechanism (owner, 2026-07-30).** Beta
reports discrete recommendations with evidence; the orchestrator verifies them
from disk and approves or declines them without a routine owner pause. Its
ordered decision rule is: mathematical accuracy and correct dependency citation
are non-negotiable; then minimize forward references; then preserve
mathematical richness. The decision ledger is the durable audit trail.

**The step-10 fatal-error rundown and sole owner pause are durable aggregation
mechanisms (owner, 2026-07-31).** Step 9 completes the scope-denial sweep and
continues without a pause. Beta audit reports and Alpha's audit ledger classify every
publish-blocking defect by mathematical type, location in the artifact, affected
id, and fix disposition. Judge and touch ledgers add refutation/repair history;
the orchestrator adjudication log adds approved reversals and drops. Step 10
aggregates those records into a concise but complete owner report grouped by
type and location, then makes the only owner pause. Grouping may
compress repeated defects, but every fatal item must remain named and every
resolution must be stated.

### 6.1 No shell-permission prompts, and the mechanical backstops

**Owner rule, 2026-07-30:** neither the orchestrator nor any current or future
subagent may ask the owner for shell-command permission. Routine repository
reads, writes, and gates must use command forms already allowed inside the
workspace sandbox. A runtime without an escalation-free form records a blocker;
it does not raise an approval prompt.

On Claude runtimes, every brief still says to pass
`dangerouslyDisableSandbox: true` on every Bash call. On sandboxed Codex
runtimes, that parameter does not exist, so agents instead remain inside the
granted workspace and use non-escalated equivalents. This distinction preserves
the unattended-build outcome without asking the owner to approve prefixes one
command at a time.

Two Claude-side backstops remain in `.claude/settings.local.json`:

| backstop | what it does |
|---|---|
| `"sandbox": {"enabled": false}` | removes the cause — there is no sandbox to escalate out of, so no prompt can be raised |
| a `SubagentStart` hook | injects the rule verbatim into **every** subagent's context at spawn, whatever brief it was given |

The hook was verified end to end rather than assumed: a probe subagent reported
the rule present verbatim and its Bash call needed no approval.

**Why the rule is also written in every brief.** `.claude/settings.local.json` is
gitignored and does not travel with a checkout, so a fresh clone — or any machine
but this one — has neither backstop. The briefs are the only copy that ships.
Belt and braces is the correct redundancy here, not duplication to be tidied away.

`briefs/alpha.md` additionally carries a **pass-it-on** clause, because Alpha-n
briefs independent Step-6 readers at step 6 and those prompts may be composed by Alpha, not by
this repo.

## 7. Presentation (FROZEN — owner-approved 2026-07-24)

Implemented in the **app repo**, `/root/Projects/prestige-intelligence`. Do not
restyle without an explicit in-session owner instruction.

| file | owns |
|---|---|
| `web/lib/library-kinds.ts` | per-kind palette; colour always paired with the kind label |
| `web/components/library/ItemBody.tsx` | sectioned proof rendering, per-citation tag chips |
| `web/components/library/badges.tsx` | kind chips, DRAFT banner, provenance + verification chips |
| `web/components/library/Mermaid.tsx` | flowchart v2, birds-eye, `landmark: true` nodes only |
| `web/lib/library-forward.ts` | the sky / dashed / ↗ forward-reference accent |
| `web/lib/library-external.ts` | the fuchsia / dotted / ‡ accent + `unprovedDependence` closure |
| `web/lib/library-categories.ts` | index grouping (itself frozen since 2026-07-26) |
| `web/lib/math-library.ts` | `plainTitle`, the one de-TeX for every plain-text context |

**Three ranked citation tiers, none relying on colour alone:**

| tier | colour | underline | glyph |
|---|---|---|---|
| ordinary citation | indigo | solid | none |
| forward reference | sky | dashed | ↗ |
| not proved here | fuchsia | dotted | ‡ |

The bottom tier **outranks** the middle: "never proved here" is a far stronger
caveat than "developed later". Since 2026-07-27 the ‡ tier is a **catalogue
only** — new content may not depend on it (`LEVELS.md`, self-contained scope).

## 8. What no mechanism covers

State this honestly rather than implying coverage.

- **No gate reads a page summary.** The judge reads items and cannot see a page
  file; precheck ignores prose. Six summary defects survived every gate at
  level 7; two published summaries were false at level 8. Level 7-algebra added
  one more: a summary opened "Nothing here assumes anything about numbers" while
  a theorem purely about ℤ was homed on that same page, contradicted by the
  summary's OWN later paragraph. The prompt-side backstop is now a fixed page
  contract (owner, 2026-07-30): every A summary is exactly two nonempty prose
  paragraphs under 150 words each, first for mathematical background and used
  declared dependencies, second for the main definitions/results and their
  logical progression; B pages carry no authored summary body. This remains a
  reading rule, not a mechanical gate.
- **`depsource` cannot see `forward_refs`** (§3.8).
- **`b-leaf` is enforced only against the SPEC, never against `items/`.**
  `validate-plan` owns the check and reads `research/plan-spec.json`;
  `depcheck` is the only gate that reads authored content and contains **zero**
  b-leaf checks (verified 2026-07-27). An authoring agent that adds a `deps` edge
  onto a B-page item after the splice is therefore invisible to all nine gates.
  Note the rule's exact shape before "fixing" a report of one:
  `validate-plan.mjs` guards with `dp.kind === 'B' && dp.id !== p.id`, so an item
  citing an **earlier item on its own B page is legal** — ordinary intra-page
  structure, covered by `intra-order`. A level-7-algebra audit misread this and
  rewrote a correct item on a false premise.
- **`b-leaf` used to be unreachable for a dep that was ALREADY PUBLISHED — fixed
  2026-07-28.** The main check loop begins `if (existing.has(d)) continue;`, so
  any dep resolving to an item already in `items/` skipped the leaf test
  entirely, and the rule was enforced against planned items only. A second loop
  now runs the same test against `homePageOf` after that map is built.
  **The hole was PARTLY masked, and the unmasked case is the dangerous one:** if
  the depending page does not declare the examples page in `requires`, the
  violation surfaces as `undeclared-prereq` instead — a real failure, but under
  the wrong name. If the page DOES declare it, the old gate passed the spec
  clean. That is exactly the shape an agent produces when it believes depending
  on a B page is allowed. Verified by injection both ways before and after the
  fix, and the current spec is unaffected (still exits 0).
- **Nothing reconciles the spec's `deps` against the authored items' `deps`.**
  Step 5 authors legitimately adjust deps as proofs take shape (19 of 40 items
  did at level 7-algebra), and no tool ever compares the two afterwards. The
  spec and the content drift apart silently, which is also why the gap above
  cannot be caught by re-running `validate-plan`.
- **Scope-denial decay has no detector.** A claim true when written that a later
  level falsifies changes no file, so every gate passes forever. Only the step-9a
  sweep finds it — and a repair confirmed by reading the diff can leave the same
  falsehood elsewhere in the same file, which happened at level 8.
- **`citecheck` is a heuristic**, not a proof of correct attribution.
- **No reader at any tier has read the PROOFS of cited dependencies.** Readers
  open a cited item's Statement and check the `[L#]` restates it faithfully,
  which catches the dominant defect class and nothing about whether the cited
  proof is itself sound. Measured 2026-07-28, and the shape is better than it
  sounds: the dep graph is a power law, so this is a **~40-item problem, not a
  1204-item one**. Of the top 100 items by consumer count, 60 are definitions
  with no proof to read; the proof-bearing 40 total **342 proof steps** (median
  9, max 20). The top 20 carry 28% of all 11,705 dep edges and the top 100 carry
  64%; `def-natural-numbers` alone has 945 transitive consumers.
  **If this is ever closed, rank by blast radius and not by level** — auditing
  per level re-reads `lem-of-abs-value` (233 consumers, 9 steps) every level and
  still never finishes it, whereas reading it once covers every future level.
  Key it to a content hash so a repair lapses the read. Do NOT point the judge
  at it. Owner deferred 2026-07-28; recorded so the measurement is not redone.
- **No page has ever been visually rendered.** `rendercheck` closes part of this.
- **The step-6 Alpha/Beta audit** required by `CLAUDE.md` before publishing
  mathematical content is the reading tier; it is not replaced by the judge.

## 9. Maintaining this file, `LEVELS.md`, `WORKFLOW.md` and `CLAUDE.md`

Owner instruction, 2026-07-27. These four are normative and **must be updated in
the same commit as the change they describe**:

| doc | scope |
|---|---|
| `CLAUDE.md` | session entry point, hard rules, publish path |
| `WORKFLOW.md` | per-page runbook and the hard rules in full |
| `LEVELS.md` | the per-level build, step 0 → 10 |
| `ARCHITECTURE.md` | this file — every mechanism, how it works, why |

**Triggers:** a new or retired tool; a new gate error code; a change to the agent
hierarchy or a brief; a new owner rule; a change to the frontmatter contract; a
measured fact about a mechanism (a precision number, a timeout, a failure mode).

**Verify against the code, not from memory.** Reading the source for this file
turned up a stale cross-reference and two undocumented mechanisms on the day it
was written. When a doc and the code disagree, **the code is the truth and the
doc is the bug** — fix the doc in that commit.
