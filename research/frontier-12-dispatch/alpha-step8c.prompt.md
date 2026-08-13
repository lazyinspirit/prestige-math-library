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

## Alpha — step 8c. `lem-green-type-ii-boundary-identity`, third touch, fourth objection.

Your 8b repair was rejudged. **Terra PASS, DeepSeek REJECT** at
`item_sha256` `852a1e5161dcd689…`. Terra's pass explicitly verified "the
coordinate-swapped Fubini justification", so your transpose repair did land.

DeepSeek's objection is **new** — not a restatement of the Fubini one:

> Fact [L4] overstates the cited Newton–Leibniz theorem: it asserts the endpoint
> increment for any interior derivative of a continuous function, but the theorem
> requires the derivative to have a Riemann-integrable extension agreeing with G'
> on the interior. Without that assumption the claim is false.

This is the same **shape** as the defect you confirmed at 8b — a `[F#]` fact
restating a cited theorem with a hypothesis dropped — on a different fact.

### The escalation is now live, and it is the question I need answered

`touchlog` records **3 touches** on this item: step-5 authoring, your step-8
endpoint repair, your step-8b transpose repair. This is the run's only
thrice-touched item.

Fatal repairs are deliberately uncapped, because *"a proof that keeps yielding
real fatal defects is either converging toward correctness or is actually false,
and both must run to conclusion."* **Say which it is.** Concretely:

- Adjudicate this objection on its merits first: open
  `thm-newton-leibniz-with-interior-derivative` on disk and read exactly what it
  requires. Is `[L4]` dropping a real hypothesis, or does the item already
  establish the integrable-extension condition somewhere DeepSeek did not read?
- Then answer the escalation question. Each successive defect has been smaller
  and more local — false endpoint identity, then wrong-orientation Fubini, now a
  possibly-missing integrability hypothesis. **Is that convergence, or is the
  Type II case being patched toward a statement the library cannot yet license?**
- If it is the latter, say so plainly and name the alternative: a different proof
  route, a narrowed Statement, or deferring the Type II lemma and scoping Green's
  theorem to what the Type I case plus a written transpose actually supports.
  Narrowing a claim that cannot be closed honestly is an available and correct
  outcome, not a failure.

I would rather ship a narrower Green's theorem that is true than a broader one on
its fourth patch.

### Constraints

- R1 binds: only `confirmed_fatal` licenses an edit. `step8-guard` re-runs
  against the `pre-step8` baseline.
- Record the row with `item_sha256` set to the **pre-edit** hash.
- Any repair rejudges again on both lanes.
- If you narrow or restructure the Statement, note every consumer:
  `thm-greens-theorem-for-finite-unions-of-elementary-regions` and
  `cor-area-as-a-line-integral-for-elementary-regions` both rest on this lemma,
  and `rem-greens-theorem-jordan-domain-limitation` documents the scope.
- If the Statement changes, the item's `plan_reconciliation` row (which you wrote)
  needs updating to match.

### Output

Append to `research/frontier-12-alpha-step8b.md` or write
`research/frontier-12-alpha-step8c.md`. State the adjudication, the repair or
narrowing if any, and an explicit convergence verdict.
