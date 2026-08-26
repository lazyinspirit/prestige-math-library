# frontier-19 — Alpha group **c**, step-3 scaffold breadth and depth review

Batches **7** and **8** (`covers:` line of the step3-c dispatch). Group
rationale in `research/frontier-19-alpha-groups.json`: the two batches share
analytic machinery around measure/regularity hypotheses and around limiting and
boundary arguments, so one Alpha can check the hidden closure assumptions once.

| pair | batch | A items | B items | verdict |
|---|---:|---:|---:|---|
| `non-measurable-sets-and-the-cost-of-choice` | 7 | 21 | 11 | **sufficient** after direct repair (B7-1, B7-2) |
| `isolated-singularities-and-laurent-series` | 8 | 21 | 9 | **sufficient** after scope repair (B8-1) |
| `harmonic-functions-and-the-poisson-integral` | 8 | 26 | 9 | **sufficient** with owner scope decisions recorded (B8-2) |

Machine half: `research/frontier-19-alpha-c-step3-verdicts.json`.

Scope receipt: `research/frontier-19-alpha-c-scope-decisions.json`
(`scope-decisions check --run frontier-19 --group c` now passes with **0**
errors).

---

## Severity table

| id | pair | class | severity | disposition |
|---|---|---|---|---|
| **B7-1** | non-measurable sets | measurable-not-Borel route did not close from its listed dependencies | **blocking** | repaired in `research/frontier-19-batch-7.pages.json` |
| **B7-2** | non-measurable sets | `deps` edge into a published `ai-generated` statement | **blocking** | repaired in `research/frontier-19-batch-7.pages.json` |
| **B8-1** | isolated singularities | two deferred coverage rows used stale `owner-decision` destinations despite concrete future page ids in the current spec | medium | repaired in `research/frontier-19-batch-8.coverage.json` and resolved as `stands` |
| **B8-2** | harmonic / meromorphic scope | four source-backed results remain unhoused by any exact current page id | medium | recorded as `owner-decision` in the scope receipt |

---

## What I checked

- `node tools/coverage-checklist.mjs research/frontier-19-batch-7.coverage.json`
  and `...batch-8.coverage.json` both pass with **0 errors, 0 warnings**.
- `node tools/content-policy.mjs --manifest-only research/frontier-19-batch-*.pages.json`
  passes with **0 errors, 0 warnings** after the batch-7 repairs.
- `node tools/scope-decisions.mjs check --run frontier-19 --group c`
  passes with **8 current decline(s), 0 error(s)**.
- I opened the governing design sections:
  `research/plan-measure-theory-track.md` §MT-5 and
  `research/plan-complex-analysis-track.md` §§CA-8, CA-13, CA-14, plus the CA-9/CA-10
  planning rows that own the deferred complex-analysis material.
- I opened the harvested source locators themselves, not only the Beta notes.
  The key ones were:
  Hunter ch. 2 §§2.4–2.7; Tao ch. 1 §1.2; Cichoń–Kharazishvili–Węglorz ch. 8
  pp. 149–167; Campesato MAT334 Oct. 23/26/28/30, 2020; Orloff Topic 7 §§7.4–7.9;
  Brosnan §3.10; Rutgers Math 403 / Math 503 diaries; Orloff Topic 5 §§5.2–5.5;
  Helgason Lecture 16; Viaclovsky Lectures 1–2; the Encyclopedia of Mathematics
  entry `Harnack theorem`; the Stony Brook MAT 536 schedule; Brosnan §3.2.

---

## Batch 7 — `non-measurable-sets-and-the-cost-of-choice`

The page is now breadth-complete for its chosen remit. The A page contains the
standard MT-5 spine: inner measure and the bounded criterion, Vitali existence
and nonmeasurability, the translation-invariant-measure obstruction, positive
outer-measure subsets containing nonmeasurable subsets, the Cantor-homeomorphism
route to measurable/non-Borel witnesses, Bernstein existence and extremal
nonmeasurability, the free-ultrafilter witness, and the choice-cost ledger. The
B page is real: 11 items, with concrete examples, counterexamples, and false
statements rather than token filler.

The harvest is faithful. Hunter really does supply completeness, translation
invariance, Borel regularity, and Example 2.22; Tao really does contain the
inner-measure / Vitali / no-global-translation-invariant-measure material around
Lebesgue measure; and the Cichoń–Kharazishvili–Węglorz monograph really does
carry the selector construction, Bernstein theorem, and Sierpiński ultrafilter
theorem in the exact chapter the coverage file names. There are no silent declines
in the coverage ledger for this batch.

Two route defects were real and I repaired both directly.

### B7-1 — the measurable-not-Borel witness needed the Borel-trace theorem · repaired

`cor-there-is-a-lebesgue-measurable-subset-of-r-that-is-not-borel` originally
tried to conclude that the image of a Borel subset under the Cantor-set
homeomorphism was Borel using only
`thm-continuous-preimages-of-borel-sets-are-borel`. That does not close: the
argument also needs the subspace Borel trace theorem, both on the Cantor set and
on its compact image.

I repaired the scaffold directly in
`research/frontier-19-batch-7.pages.json` by

- rewriting the strategy so it passes through the Borel sigma-algebra of the
  Cantor set and of the compact image as subspace traces, and
- adding `thm-borel-sigma-algebra-of-a-subspace-is-the-trace` to the deps list.

With that repair, the route closes from the listed dependencies.

### B7-2 — one false statement depended on a published `ai-generated` statement · repaired

`fs-a-dense-set-of-outer-measure-zero-and-a-dense-set-of-full-inner-measure-cannot-coexist`
originally depended on the published example
`ex-a-dense-null-g-delta-set-containing-the-rationals`, whose
`provenance.statement` is `ai-generated`. The run rules forbid using such an item
as a `deps` target.

I repaired the scaffold directly in
`research/frontier-19-batch-7.pages.json` by

- replacing that dependency with the eligible published
  `cex-dense-set-of-measure-zero`,
- adding `thm-lebesgue-measure-of-a-box-of-every-kind` to license positive
  interval length, and
- rewriting the strategy to use the dense null rationals and their dense
  full-measure complement.

After that swap, the item no longer violates the provenance rule and the route
still closes.

Nonblocking note: the MT-5 design/spec `requires` disagreement is real, but it is
drift, not scaffold thinness. The authored scaffold itself is now coherent.

**Verdict:** sufficient after direct Alpha repair.

---

## Batch 8 — `isolated-singularities-and-laurent-series`

The CA-8 pair is mathematically sufficient. The A page contains the standard
local isolated-singularity development: annuli, Laurent expansion, coefficient
formula and uniqueness, regular/principal decomposition, removable/pole/essential
classification, Casorati–Weierstrass, residue formulas, singularity at infinity,
and the discreteness/countability of poles. The B page is real: 9 items, with
distinct Laurent-expansion examples and concrete essential / nonisolated
counterexamples.

The harvest is faithful. Campesato’s MAT334 page really separates isolated
singularities, Laurent series, residues, and residue at infinity as distinct
headings. Brosnan §3.10 really places meromorphicity, the local quotient
characterization, and the argument principle together. Rutgers 403 really carries
the removable/pole/essential table and Casorati–Weierstrass. Rutgers 503 really
states that the pole set is discrete and at most countable.

### B8-1 — two deferred rows had stale destinations · repaired

Two batch-8 coverage rows were still marked `owner-decision` even though the live
spec already contains exact future homes:

- `Residue at infinity` belongs on CA-9, whose current page id is
  `the-residue-theorem`.
- `The argument principle and logarithmic derivatives of meromorphic functions`
  belongs on CA-10, whose current page id is
  `the-argument-principle-and-rouche`.

I repaired `research/frontier-19-batch-8.coverage.json` to use those concrete
page ids and then regenerated the scope receipt. Both rows are now resolved as
`stands` in `research/frontier-19-alpha-c-scope-decisions.json`.

The remaining CA-8 meromorphic-quotient deferral is not hidden or dishonest. It
is a real theorem in Brosnan §3.10, but no exact current page id in the spec owns
it; I recorded that as an `owner-decision` rather than pretending the current
library already has a home.

**Verdict:** sufficient after scope repair.

---

## Batch 8 — `harmonic-functions-and-the-poisson-integral`

The CA-13 pair is also mathematically sufficient. The A page carries the standard
disc-harmonic chapter: harmonic functions and conjugates, smoothness/analyticity,
mean value, maximum/minimum principles, uniqueness for the bounded Dirichlet
problem, harmonic Liouville, the open-set identity theorem, conformal
invariance, the Poisson kernel and Poisson integral, Poisson representation,
the converse mean-value theorem, bounded removable singularities, Harnack
inequality, Harnack convergence, and Schwarz reflection. The B page is real:
9 items, with concrete harmonic examples and counterexamples rather than a
two-token appendix.

The harvest is faithful here too. Orloff Topic 5 really gives harmonicity,
real-part potentials, smoothness, and mean value / maximum principle. Helgason’s
Lecture 16 really gives Poisson’s formula and separately states the annular mean
theorem. Viaclovsky’s lectures really separate mean value / maximum / Harnack /
Green representation from Poisson / converse mean value / analyticity / Green
functions. The Encyclopedia article really distinguishes Harnack’s first and
second theorems.

### B8-2 — four source-backed results still have no exact current home · recorded

Four harvested results are honest scope pressure rather than hidden omissions:

- `Proposition 3.53: a meromorphic function is a local quotient of holomorphic functions`
- `Theorem 20: the mean of a harmonic function on an annulus is alpha log r plus beta`
- `Derivative estimates for harmonic functions`
- `Harnack's first theorem`

For each of these I checked the live spec on disk. There is no exact current page
id that isolates the result. They are therefore not eligible `stands`
destinations, but neither should they be silently forgotten. I resolved them as
`owner-decision` in the scope receipt with concrete evidence that adopting any of
them now would mean either broadening CA-13/CA-8 or creating a new page.

By contrast, the Green-representation and Green-function rows do have a real later
home, `subharmonic-functions-and-the-dirichlet-problem`, and those deferments
stand exactly as written.

**Verdict:** sufficient, with owner scope decisions recorded.

---

## Final verdicts

All three A pages in group **c** are **sufficient** for authoring after the two
direct scaffold repairs in batch 7 and the one scope-destination repair in batch
8. No split is owed: the A-page counts are 21, 21 and 26, all comfortably below
the 60-item ceiling.
