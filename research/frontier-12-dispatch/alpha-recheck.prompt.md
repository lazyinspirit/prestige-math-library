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

## Alpha re-check before the step-4 splice

You returned `research/frontier-12-alpha-step3-scaffold-review.md`: **7 sufficient,
4 insufficient**, plus §5 corrections C1–C12. The orchestrator routed every one to
the owning Beta and all six fix rounds have reported. **Re-check them from disk.**
This is the re-check your own §7 called for, and it is the last gate before step 4
splices 451 items into `plan-spec.json`.

You are not re-reviewing the seven `sufficient` pairs. Confirm or refute the
repairs, and say plainly whether each `insufficient` verdict is now discharged.

### The four `insufficient` verdicts

| pair | was | now | claimed fix |
|---|---|---|---|
| `splitting-fields` (56) | 15 A | **18 A** | the three normality results from Stacks 09HL — tags 09HN, 09HP, 0BR3 |
| `eigenvalues-…` (86) | 19 A | **23 A** | Pinkham §12.3 — `thm-trace-is-sum-of-eigenvalues`, `thm-determinant-is-product-of-eigenvalues`, `thm-spectral-mapping-for-polynomials`, and the corollary |
| `pi-…` (183) | 12 A | **14 A** | the Archimedean characterization and the second addition you named |
| `finite-probability-spaces-and-random-variables` (220.2) | 37 A | 37 A | **sourcing**: Grinstead & Snell added; harvest 136 → 197 rows |

For each: is the verdict discharged, and does the **new** material carry real
coverage rows at real locators? You found these gaps by opening sources — check
the repairs the same way. In particular, 220.2's fix is the one most likely to be
cosmetic: confirm that the 14 previously unsourced items (Bayes, total
probability, the chain rule, product spaces, binomial, Cauchy–Schwarz among them)
now trace to actual Grinstead & Snell sections that contain them, and that 220.2
independently satisfies two independent treatments now that the split gave it its
own source obligation.

### The §5 corrections

C1–C11 were routed. Verify the ones with mathematical content rather than the
clerical ones:

- **C5** — did batch 1 source the **prime** ideal clause of
  `thm-ideal-correspondence-for-localisation`, or drop it? Stacks Lemma 10.9.16
  gives only the ideal statement. Either resolution is acceptable; a row still
  claiming more than its source gives is not.
- **C7** — did batch 4 fix the Lebl quote to `sin(x) ≤ x` for `x ≥ 0`, and does
  nothing in the scaffold still lean on the stronger `|sin x| ≤ |x|`?
- **C8** — is Donaldson's *"A Sketch Proof of Green's Theorem"* now corroboration
  only, with no `[F#]` fact citing it?
- **C6** — is the phantom Pinkham "Theorem 12.1.3" row split so that no scaffold
  item is unsourced and none unmapped?
- **C3/C4** — do batch 1's Judson and Milne locators now match the editions at
  the URLs actually cited?
- **C11** — are batch 2's nine A and thirteen B items now mapped? Harvest went
  115 → 137 rows.

### Two decisions the orchestrator took on your findings

Recorded in `research/frontier-12-step3-decisions.md`; check the reasoning, do not
redo the work:

- **D11** — module localisation (C1) is homed on **no** page in the plan. It is
  recorded as a tracked gap rather than wedged into batch 2's accepted pair: it
  cannot live at order 53.2 (modules arrive at 102), and nothing downstream needs
  it. Batch 1 was told only to stop naming a destination that will not contain it.
  **Say whether you agree that is the right disposition**, since you found it.
- **D12** — order 88 retitled to "Diagonalisation and the Minimal Polynomial",
  matching its id, because Cayley–Hamilton is now homed at 86.

### Gate state at re-check

884 harvested results across 12 A pages, 0 errors, 0 warnings. Merged in-memory
splice: **24 pages, 451 items, `validate-plan` exit 0, zero errors** — no
`undeclared-prereq`, `b-leaf`, `forward-ref`, `dup-id` or item cycle.

### Output

Write `research/frontier-12-alpha-recheck.md`: per routed item, `discharged` /
`not discharged`, with evidence. End with a single explicit verdict — **is the
scaffold set ready for the step-4 splice?** If anything is not discharged, name
the exact remaining work and the owning batch.
