# frontier-23 — Alpha group `c`, step-3 scaffold review

Batches `6` and `7`, the analysis cluster in
`research/frontier-23-alpha-groups.json`. I read
`research/frontier-23-batch-6.{pages.json,coverage.json,notes.md}`,
`research/frontier-23-batch-7.{pages.json,coverage.json,notes.md}`,
the controlling design sections in
`research/plan-measure-theory-track.md` and
`research/plan-complex-analysis-track.md`, and the live
`research/plan-spec.json`.

All `5` pending scope rows are now resolved in
`research/frontier-23-alpha-c-scope-decisions.json` as `4` `stands` rows and
`1` `owner-decision` row. The required check passes on Friday, August 28, 2026:
`node tools/scope-decisions.mjs check --run frontier-23 --group c`
-> `5 current decline(s), 0 error(s)`.

| A page | batch | A items | B items | verdict | notes |
|---|---:|---:|---:|---|---|
| `product-measures-and-the-fubini-tonelli-theorems` | 6 | 38 | 11 | **insufficient** | missing required MT-11 false-statement result |
| `conformal-mapping-branches-and-the-schwarz-lemma` | 7 | 23 | 10 | **sufficient** | route and sources are sufficient; scope exclusions are honest |
| `infinite-products-and-weierstrass-factorisation` | 7 | 20 | 8 | **sufficient** | route and sources are sufficient |

Machine half: `research/frontier-23-alpha-c-step3-verdicts.json`.

## Findings

| id | page | severity | disposition |
|---|---|---|---|
| C6-1 | `product-measures-and-the-fubini-tonelli-theorems` | **blocking** | insufficient: missing A-page Tonelli failure statement and its source citation |

### C6-1 — MT-11 still omits the designed A-page failure of Tonelli without `sigma`-finiteness

`research/plan-measure-theory-track.md` is explicit at the MT-11 `FS.` block:
one of the required false statements is `Tonelli holds without sigma-finiteness`.
The same design section's B-page block then names the diagonal example
`cex-tonelli-fails-without-sigma-finiteness` as the witness.

The current batch-6 scaffold does not carry that A-page result. In
`research/frontier-23-batch-6.pages.json`, the A page has
`fs-product-measure-is-unique-without-sigma-finiteness`, but no matching
`fs-` item for the failure of Tonelli without `sigma`-finiteness. The B page
does already carry
`cex-tonelli-fails-without-sigma-finiteness-on-the-diagonal`, and
`research/frontier-23-batch-6.coverage.json` already maps Folland, *Real
Analysis*, Exercise `46` ("the diagonal under Lebesgue times counting measure")
to that counterexample.

The batch-6 notes misread the design on this point: they say the explicit MT-11
`FS.` block names the uniqueness failure, but the live design text names the
Tonelli failure instead. That matters because the pair's promised route is "the
product measure, Tonelli, Fubini, the completed product, the layer-cake
formula, every standard failure", and the diagonal witness is already budgeted
to discharge exactly this omission.

I did not repair this directly. The step-3 license here is clear for backward
prerequisites and missing lemmas; this defect is a missing A-page result. The
right step-3 action is therefore to mark the pair insufficient and name the
exact result and source Beta must restore.

## Page review

### `product-measures-and-the-fubini-tonelli-theorems`

This pair is insufficient on exactly C6-1. The rest of the scaffold is rich and
current: the A page follows the MT-11 route through the product `sigma`-algebra,
sections, the `sigma`-finite section-measure theorem, product measure, Tonelli,
Fubini, the completed-product theorem, Euclidean product/completion statements,
layer cake, polar coordinates, and the `C^1` change-of-variables block. The
source form is also sufficient on Friday, August 28, 2026:
`textbook, lecture-notes, textbook`.

The scope decisions are honest and now recorded. Tao's absolute-integrability
extension beyond `sigma`-finiteness still has no exact later page id in the live
plan, so that row is correctly an `owner-decision`. Tao's Dirac-measure example
is an honest out-of-scope omission, and the approximation-to-the-identity row
lands exactly on `density-separability-and-convolution-in-lp` at order
`288.029`.

What remains wrong is narrower than a source or dependency defect: the pair
already has the diagonal witness and its source, but it still fails to state the
corresponding A-page false result that MT-11 requires.

**Verdict:** insufficient.

### `conformal-mapping-branches-and-the-schwarz-lemma`

This pair is sufficient. The 23-item A page matches the live CA-12 route:
branch-defined powers, branch-discrepancy statements, disc and upper-half-plane
automorphisms, Schwarz and Schwarz-Pick, the Poincare metric block, the
elementary biholomorphisms, and the three-model non-equivalence theorem. The
pair stays within the page budget, keeps branch domains explicit, and needs no
forward edge or reading-order change.

The source form is sufficient on Friday, August 28, 2026:
`textbook, textbook, lecture-notes`. The Howell HTML corroboration mentioned in
the notes is not needed for sufficiency because Ahlfors, Stein-Shakarchi, and
Lebl already provide exact fetch-verified coverage for the authored route. The
two source-side exclusions are also exact on current disk: Stein-Shakarchi's
strip Dirichlet problem belongs with
`harmonic-functions-and-the-poisson-integral` at order `327`, and Ahlfors's
Riemann-surface section belongs with `analytic-continuation-and-monodromy` at
order `341`.

**Verdict:** sufficient.

### `infinite-products-and-weierstrass-factorisation`

This pair is sufficient. The 20-item A page matches the live CA-18 route and
respects its reuse discipline: it cites the published `def-infinite-product`,
keeps the Weierstrass elementary-factor estimate as a real lemma, carries the
normal-convergence theorem, the plane Weierstrass product and factorisation
theorems, Jensen's formula with the boundary-zero caveat, and Hadamard as the
page ceiling. No split is owed.

The source form is sufficient on Friday, August 28, 2026:
`textbook, textbook, lecture-notes`. The current manifest keeps the exact route
the design wants and does not spend any foreign B-page dependency or hidden
forward reference to close it.

**Verdict:** sufficient.

## Checks run

- `node tools/scope-decisions.mjs check --run frontier-23 --group c`
  -> `scope-decisions: 5 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-23-batch-6.coverage.json research/frontier-23-batch-7.coverage.json --require-destination`
  -> `coverage-checklist: 3 page(s), 167 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-6.pages.json research/frontier-23-batch-7.pages.json`
  -> `content-policy: 110 scoped item(s), 0 error(s), 0 warning(s)`
- focused local closure audit over the current group-c manifests
  -> `0` missing prerequisite homes, `0` forward-order deps, `0` foreign examples-page deps
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with only the repository's standing `redundant-prereq` advisories outside this group
- `node tools/scaffold-verdicts.mjs --run frontier-23`
  -> `3/14` A page(s) reviewed, `1` insufficient, `11` unreviewed; every `verdict-missing` page named by the tool belongs to another group
- `git diff --check -- research/frontier-23-alpha-c-scope-decisions.json research/frontier-23-alpha-c-step3-scaffold-review.md research/frontier-23-alpha-c-step3-verdicts.json`
  -> clean

## Final verdicts

Group `c` has two sufficient A pages and one insufficient A page on the current
Friday, August 28, 2026 bytes. No split is owed: the A-page counts are `38`,
`23`, and `20`, all below the step-3 ceiling.
