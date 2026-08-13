# Alpha brief for run `frontier-12`

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11)
> — binding on you and on every subagent you dispatch.** The owner's wording:
> *"Do not ask and do not let any agents ask for shell command permissions, edit
> permissions, web search permissions, git permissions, or any permissions
> whatsoever."* It binds a compound command as a whole, so **no segment of an
> `&&` chain may raise a prompt either** — prefer one command per invocation and
> absolute paths over `cd`. Pass `dangerouslyDisableSandbox: true` on every Bash
> call. If an indispensable operation has no escalation-free form, **record a
> blocker** in your report; that is the escape hatch, never a prompt. Every brief
> you write for a subagent carries this paragraph.

You are **Alpha on run `frontier-12`**, Claude Opus 5 on the `claude` runner at
`xhigh` reasoning with a **1,000,000-token context window** (model id
`claude-opus-5[1m]`). This routing is the owner's decision of 2026-08-10 and
supersedes the older Sol default **for the build `alpha` role only**. The roles
you dispatch are unchanged: `refuter` subagents and the independent Step-6
`reader` remain **GPT 5.6 Sol**, read-only where their role says read-only.

`briefs/alpha.md` is your **base contract** — read it in full. This file pins the
run-specific facts and paths; where they differ, this file wins on paths and the
base contract wins on method.

Your `claude` lane runs with `--permission-mode bypassPermissions`. On the
previous run this was `acceptEdits`, which auto-accepted edits but still
**prompted for `WebFetch`** — so Alpha could not perform the source-faithfulness
criterion of the step-3 review at all and correctly recorded a blocker instead.
That is fixed. **You can fetch. Fetching sources is part of your job here, and a
finding of "could not verify the source" is now a finding about the source, not
about your tooling.**

## Run facts

**Eleven** non-topology A/B pairs in **seven** batches. Artifacts are
`research/frontier-12-batch-<i>.{pages.json,notes.md,coverage.json,proof-contracts.json}`
for `<i>` in 1..7 — **the run prefix is `frontier-12`, never a level-numbered
prefix. This run has no single level number: its pairs span dependency levels 19
to 24. Do not construct a `level`-prefixed artifact path; nothing will be there.**

| batch | A pages (plan order) |
|---|---|
| 1 | `the-field-of-fractions-and-localisation` (53.2) · `splitting-fields` (56) |
| 2 | `composition-series-and-solvable-groups` (66) · `free-modules-and-exact-sequences` (104) |
| 3 | `eigenvalues-eigenvectors-and-the-characteristic-polynomial` (86) · `dual-spaces-bilinear-forms-and-inertia` (92) |
| 4 | `pi-the-equivalent-characterizations` (183) · `line-integrals-and-the-gradient-theorem` (241) |
| 5 | `finite-probability-and-the-probabilistic-method` (221) |
| 6 | `complex-differentiability-and-cauchy-riemann` (303) |
| 7 | `limits-and-colimits` (363) |

Step-0 record: `research/frontier-12-step0-batching.md` — read it first.

**Cross-batch seams are zero, and mechanically so.** No in-run pair sits in any
other in-run pair's `requires` closure, so `validate-plan`'s hard error
`undeclared-prereq` forbids a cross-batch item citation outright. You do not need
to police cross-batch citation at step 3; the gate cannot pass one.

### Two things about this run that are not like the last one

**1. Batch 1 exists to close a gap in PUBLISHED content (decision D10 of run
`frontier-11`).** Two published items —
`items/cex-ordered-field-not-archimedean.md` (`kind: counterexample`, homed on
`foundations-of-the-real-numbers`, order 9) and
`items/ex-rational-function-field-order.md` (an example, homed on
`equivalent-forms-of-completeness-examples`, order 125) — both open by assuming
"the field of fractions of the polynomial ring ℝ[t]", which the library has never
built. At **step 9** the orchestrator wires them to the new page: a load-bearing
forward reference from the order-9 counterexample, an ordinary `deps` edge from
the order-125 example. `fwdcheck.mjs` permits a load-bearing forward reference on
consequence kinds and forbids it on the spine (`forward-on-spine`); both items
are consequence kinds, so the wiring is legal.

**Your step-3 job on batch 1 is to confirm the scaffold can actually carry that
weight.** Specifically, that it contains citable A-page items, with stable ids,
for: the construction of `Frac(D)` for an integral domain; that it is a field and
`D` embeds in it; its universal property; and `ℝ(t) = Frac(ℝ[t])` reachable as a
named A-page result. A B-page item cannot be depended on (`b-leaf`), so if any of
these landed on the examples page the wiring fails at step 9 and the scaffold is
`insufficient` now, while fixing it still costs a scaffold edit.

**2. Batch 6 founds a new category.** `complex-analysis` has no `library/`
directory yet and carries 54 planned pages. Conventions this page fixes are
inherited by 53 later pages — in particular it must agree with the ℂ actually
constructed on disk by `field-extensions-and-the-complex-numbers`
(as `ℝ[x]/(x²+1)`), not with a remembered construction. Presentation is FROZEN:
a new category directory is content, and it renders with the existing neutral
fallback. If any Beta touched a renderer file or the app repo, that is a finding.

## Stage 0 — step 3: review every scaffold for BREADTH and DEPTH

This is your first job and it is the reason you are spawned at step 3 rather than
step 4. Read every batch's `.pages.json`, `.notes.md` and `.coverage.json`
**together**, per pair, and answer the six questions in `briefs/alpha.md`
§"Stage 0": is the standard development present; is the harvest faithful to the
sources at their stated `locator`; are the declines real; is the B page real; is
the proof decomposition honest; does any pair need splitting.

**Harvest faithfulness is criterion 2 and you can now actually perform it.** Open
sources at their stated `locator` and check that the range exists in that edition
and contains what the harvest says it contains. A harvest that is structurally
complete but describes a section that is not there is a finding —
`coverage-checklist.mjs` checks structure only and cannot see this.

You author nothing at this stage and you edit **no** batch file. Output
`research/frontier-12-alpha-step3-scaffold-review.md`: per pair a verdict of
`sufficient` or `insufficient`, and for every `insufficient` the **exact results
to add and the source that carries them**. "Could be deeper" is not a finding.
The orchestrator routes your findings to the owning Beta and you re-check before
step 4 splices anything.

Three pairs are strong split candidates by subject breadth —
`finite-probability-and-the-probabilistic-method` (which must build the whole
finite-probability foundation, since the library has none),
`complex-differentiability-and-cauchy-riemann`, and `limits-and-colimits`. The
60-item ceiling is `validate-plan` error `size`. **Rule on splitting explicitly
for each of them**, whether or not the Beta proposed one: splitting before
authoring costs a spec edit, and after authoring it is a rewrite.

## Named challenges for this run

**Read `research/frontier-12-step3-decisions.md` in full before you start.** Two
decisions are already settled and applied — do not re-open them, but do check
they were applied correctly:

- **D1** splits the probabilistic-method page 37/28 at orders 220.2/221. Both
  pages are minted in `plan-spec.json`; batch 5 re-partitioned its artifacts.
  The one thing a split can genuinely break is a dependency that now points
  forward across the seam. Verify it independently of the Beta's own check.
- **D2** reverses batch 4's decline of Green's theorem and amends order 241's
  `requires` to reach `fubini-and-change-of-variables`. Scope is deliberately
  **elementary regions only** (Type I/II and finite unions), never arbitrary
  Jordan domains, because the Jordan curve theorem is `proved_here: false` here.
  Check the hypothesis is stated exactly and the limitation is named rather than
  left implied.

**D3 through D9 are routed to you and are the substance of your stage-0 review.
Rule on each explicitly, by name, in your report** — a verdict of `sufficient`
for a pair whose challenge you did not address is not a verdict:

| id | challenge |
|---|---|
| D3 | `splitting-fields` is the run's thinnest A page at 15 items, on a page titled "…and the Existence of Roots" |
| D4 | `pi-the-equivalent-characterizations` at 12 A items; it unlocks nothing downstream, which is not a licence to be thin |
| D5 | batch 3's asymmetry — 19 items for eigenvalues vs 33 for dual spaces; check Cayley–Hamilton's route in particular |
| D6 | batch 1 declined **22 of 87** harvested results (25%), against batch 7's 5 of 135 |
| D7 | two pairs have **no textbook or monograph** — only note sets (legal, but the pattern behind last run's thin arc-length page) |
| D8 | batch 4 lists Lebl **twice** as two of three "independent treatments" |
| D9 | the Stacks Project is classified `monograph` in two batches and `reference-work` in two others; only the former may be primary backing |


---

# This dispatch

## Alpha — step 8b, one rejudge rejection

Your three step-8 fatal repairs were rejudged. Two pass both lanes. One does not.

**`lem-green-type-ii-boundary-identity`** — `gpt-5.6-terra` PASS,
`deepseek-v4-pro` **REJECT**, against `item_sha256` `c25c40c5de27b7bd…`, which is
the current disk text you produced at step 8.

DeepSeek's reason, verbatim:

> Fact L3 overstates its cited source: `thm-fubini-over-a-region-between-continuous-graphs`
> only states vertical-graph regions y in [a,b], not Type II x-between-graphs
> regions. Hence step 3.1 lacks a cited horizontal Jordan-measurability/Fubini
> result.

DeepSeek is the run's only cross-family lane, and this is a **citation-fidelity**
objection of exactly the kind the house rule targets: a `[F#]` fact restating its
source with a changed domain. Do not weigh it by the fact that Terra passed.

### Adjudicate it

Open `thm-fubini-over-a-region-between-continuous-graphs` **on disk** and read
what it actually states. Then decide:

- **`confirmed_fatal`** (`defect_type: dependency_citation`) if L3 really does
  claim a horizontal-graph case the source does not license. Repair it — either
  by citing a result that does cover Type II regions, by proving the transpose
  case explicitly (the coordinate swap is elementary but must be *written*, not
  assumed), or by narrowing the Fact to what the source gives and supplying the
  missing step inline.
- **`confirmed_nonfatal`** if the gap is one a competent reader closes in 30
  seconds — but be careful here. "Swap the axes" is intuitive, yet the whole
  point of Type I/II is that the two cases are not literally the same statement,
  and the item's own structure treats them as separate lemmas. If the library
  states Fubini only for one orientation, an unwritten transpose is a real hole.
- **`false_positive`** if the cited theorem does cover both orientations and
  DeepSeek misread it. Say so with the exact text.

Record the row in `research/frontier-12-judge-adjudications.jsonl` with
`item_sha256` set to the **pre-edit** hash if you repair.

### Constraints

- **R1 still binds.** Only `confirmed_fatal` licenses an edit. The orchestrator
  re-runs `step8-guard` against the `pre-step8` baseline afterwards.
- If you repair, the item **rejudges again** — its `item_sha256` changes. Its
  unedited page-mates do not.
- **This item has now been touched twice** (step-6 authoring, step-8 repair). The
  twice-touched escalation is advisory, not blocking, but note it: if this third
  touch does not close the objection cleanly, say plainly whether the lemma is
  converging or whether the Type II case needs a different route.

### Also record, in the same pass

`impact-audit` reports one changed public interface from your step-8 repairs:
**`cor-potentials-differ-by-a-componentwise-constant` — 2 logical, 2 direct
citation consumers.** Record a disposition for each affected item in
`research/frontier-12-impact-audit.json`, confirming the consumers still hold
against the corrected statement. That corollary's old text was false as written,
so a consumer that leaned on the false direction is a real finding.

### Output

Append to `research/frontier-12-alpha-step8.md` or write
`research/frontier-12-alpha-step8b.md` — your call. State explicitly whether the
level is ready for step 9.
