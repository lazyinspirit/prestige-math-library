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

## Alpha — step 6, the whole-level audit

454 items across 24 pages are authored and all twelve step-5 gates are clear.
This is the audit that has to hold before the text is frozen for the paired
judges at step 7.

### The seven independent readers are already running

Assigned on a rotation so **no reader audits a batch it authored**: reader *i*
audits batch *i*+1, reader 7 audits batch 1. They are read-only on content and
write `research/frontier-12-reader-<i>.findings.md`. Re-assign or add readers if
you judge the rotation wrong; that call is yours.

**You adjudicate every finding from disk** — confirm, refute with evidence, or
apply and gate the repair. A finding is evidence, never a verdict. The 30-second
rule holds: a gap a competent reader closes in 30 seconds is nonfatal. Record it,
do not open a fatal repair cycle on it. Cosmetic polish and 30-second tidying
belong **here**, at step 6, before the text is frozen — at step 8 the polish is
withdrawn and only `confirmed_fatal` licenses an edit.

### Proof-refuters

Dispatch read-only `refuter` subagents (GPT 5.6 Sol, cap 8) held to the judges'
skeptical standard: report only a concrete false claim, unlicensed inference,
missing hypothesis, or inaccurate citation, and inspect the supplied dependency
before alleging it is too weak. **A refuter never writes content.**

### risk_review — 235 dispositions, but read the tiers critically

`risk-report` routed all 370 proof-bearing items: **116 CRITICAL, 119 HIGH, 93
MODERATE**. Every high or critical item needs a recorded `risk_review`.

That 64% rate is not 235 suspicious proofs. The scorer is explicitly *not* a
defect detector — it says where to spend reading attention. Its signals here are
dominated by generic ones: cited-fact count, "analytic limiting/completeness
language", boundary-sensitive phrasing. A page about limits and colimits trips
"limiting language" on nearly every item, which is why category theory is
over-represented. **Prioritise by real mathematical exposure, and say so in the
record where a tier is an artefact of the scorer rather than a signal.**

### Specific obligations for this run

1. **Harvest faithfulness, second pass.** You checked the scaffolds at step 3 and
   found three truncated locators. Check the harvest is still true of what was
   actually authored — `coverage-checklist` only checks structural completeness.
2. **Provenance.** Every mathematical-content item needs `provenance.statement`
   and `provenance.proof`. Retag any component you materially alter, and probe an
   `ai-generated` claim, witness or refutation for counterexamples when its truth
   is in doubt. Repairing a proof does not establish the Statement.
3. **The D10 wiring must survive.** `def-field-of-fractions`,
   `thm-field-of-fractions-is-a-field-and-the-domain-embeds`,
   `thm-universal-property-of-the-field-of-fractions` and
   `cor-rational-function-field-as-a-fraction-field` must remain **A-page** items
   with those exact ids. Step 9 wires two published items to them: a load-bearing
   forward reference from `cex-ordered-field-not-archimedean` (order 9) and an
   ordinary `deps` edge from `ex-rational-function-field-order` (order 125). If a
   repair moves or renames any of them, the wiring fails.
4. **Green's theorem** is scoped to elementary regions and finite unions by
   decision D2. Confirm the hypothesis is stated exactly and that
   `rem-greens-theorem-jordan-domain-limitation` still names the boundary. A
   proof step quietly assuming a Jordan domain is a fatal defect.
5. **`complex-analysis` is a new category.** Confirm it agrees with the ℂ
   actually on disk (`ℝ[x]/(x²+1)`), and that nobody touched a renderer file or
   the app repo. Presentation is FROZEN.
6. **`finite-smoke` now runs.** Two poset checks were registered this run and
   both pass, verifying batch 7's two category-theory counterexamples
   independently. If you find another finite claim that a bounded check could
   falsify, say so — the registry is short and that is a known weakness.

### Gates after your repairs

Re-run and leave green: `precheck`, `depcheck`, `fwdcheck`, `extcheck`,
`rendercheck`, `prosecheck`, `citecheck`, `proof-contract --strict`,
`finite-smoke`, `risk-report --require-reviewed`, `impact-audit` from the
`after-authoring` snapshot in `research/frontier-12-touches.json`, and
`audit-manifest`. Record your whole-level receipt in
`research/frontier-12-audit-coverage.json`.

**Any item you create must be spliced into `plan-spec.json`** — tell the
orchestrator. On the previous run a reader created an item at step 6 that never
entered the spec, and because the judge sweep resolves items through the spec it
was judged by **neither** lane. Only `level-coverage --verify-current-context`
caught it, at the very end.

### Output

`research/frontier-12-alpha-step6.md` — findings adjudicated, repairs applied and
gated, risk reviews recorded, and an explicit statement of whether the level is
ready to freeze for step 7.
