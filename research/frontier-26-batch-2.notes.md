# frontier-26 batch 2 notes - beta scaffold

Owned pairs:

- `krylov-subspaces-arnoldi-and-gmres` / `krylov-subspaces-arnoldi-and-gmres-examples`
- `matrix-differentiation-and-first-order-spectral-perturbation` / `matrix-differentiation-and-first-order-spectral-perturbation-examples`

Artifacts written in this dispatch:

- `research/frontier-26-batch-2.pages.json`
- `research/frontier-26-batch-2.coverage.json`
- this file

Session date: Monday, August 31, 2026.

## Design against spec

I read `README.md`, `CLAUDE.md`, `SCHEMA.md`,
`research/frontier-26-beta-2.task.md`,
`research/frontier-26-dispatch/beta-batch-2.prompt.md`,
`research/plan-spec.json`, and the controlling design blocks in
[research/plan-algebra-track-expansion-v2.md](/Users/ianx/Projects/prestige-math-library/research/plan-algebra-track-expansion-v2.md:826)
and
[research/plan-algebra-track-expansion-v2.md](/Users/ianx/Projects/prestige-math-library/research/plan-algebra-track-expansion-v2.md:871).

For both assigned pairs, the live spec and the controlling design agree on:

- page id
- companion page id
- page title
- order
- category
- declared prerequisite pages

I therefore followed the live `research/plan-spec.json` entries directly and had
no design-vs-spec drift to record for batch 2.

## Item census and split check

- A page `krylov-subspaces-arnoldi-and-gmres`: `20` items
- B page `krylov-subspaces-arnoldi-and-gmres-examples`: `8` items
- A page `matrix-differentiation-and-first-order-spectral-perturbation`: `23` items
- B page `matrix-differentiation-and-first-order-spectral-perturbation-examples`: `9` items

Both A pages are well below the `60`-item split ceiling, so no split is needed.

## Route choices

### LA-20 -- `krylov-subspaces-arnoldi-and-gmres`

I kept the design's intended route and made the closure explicit in the order
the later proofs actually use:

1. define the Krylov space and the relative minimal polynomial first,
2. prove the dimension-growth and stabilization facts before Arnoldi,
3. isolate the exact-solution-at-grade corollary in the invertible case,
4. build Arnoldi as the orthonormal-basis and Hessenberg-factorization engine,
5. use that engine first for Ritz pairs and only then for GMRES,
6. separate the residual-polynomial and exact-termination statements from the
   diagonalizable residual bound, and
7. place restarted GMRES and the matrix-free access model at the end as the
   design's practical cautions rather than as prerequisites for unrestarted
   GMRES.

Important choices:

- I kept lucky breakdown as its own proposition instead of burying it inside the
  Arnoldi theorem. The design explicitly warns not to confuse exact breakdown
  with finite-precision loss of orthogonality, and the cleanest way to preserve
  that trap is to make invariance the exact statement.
- I kept the residual-polynomial characterization separate from the affine-space
  minimization corollary. The finite-termination and spectral-set convergence
  analysis both spend that polynomial form directly.
- I did not add FOM, IOM, DIOM, Lanczos, or CG items to this page. The sources
  discuss them, but the design fixes this page as Arnoldi/GMRES only, and the
  next planned page is exactly `conjugate-gradients-minres-and-preconditioning`.
- I included a nonnormal stagnation counterexample on the B page rather than a
  false statement about eigenvalues alone. That gives the design's practical
  warning in a worked form that step 5 can actually author without needing a
  second abstract comparison theorem.

### LA-21 -- `matrix-differentiation-and-first-order-spectral-perturbation`

I kept the design's chosen route and enforced its underlying-real-space and
simple-spectrum cautions explicitly:

1. define the real Frechet derivative on matrix spaces first,
2. package the sum, product, adjoint, inverse, determinant, trace, quadratic,
   and least-squares differential rules before any spectral perturbation,
3. define compatible left/right eigenvectors, the simple eigenvalue condition
   number, the simple spectral projector, and the reduced resolvent as the
   eigendata spine,
4. use the inverse/implicit-function machinery to justify local $C^1$ simple
   eigenpair branches with a gauge condition,
5. derive the simple eigenvalue, projector, and gauge-fixed eigenvector
   derivative formulas from that branch construction, and
6. close with the singular-value derivative in the simple positive case and the
   two failure modes the design names: defective square-root splitting and loss
   of a differentiable ordered eigenvector branch through a crossing.

Important choices:

- I kept the matrix calculus over the underlying real vector space throughout.
  That is the design's explicit convention, and it matters for the singular-value
  derivative and for avoiding accidental holomorphic claims about general
  complex-valued matrix maps.
- I kept the projector derivative separate from the eigenvector derivative.
  The design calls out the gauge dependence of eigenvectors and the scale
  invariance of projectors as distinct points; merging them would blur exactly
  the distinction the page is meant to teach.
- I used the reduced resolvent/group-inverse language as a genuine page item,
  not a proof-side remark. The later derivative formulas spend it directly, so
  omitting it would make the scaffold appear shorter by hiding a real
  prerequisite.
- I did not add higher-order perturbation theory, multiple-eigenvalue
  derivatives, or differentiability through singular-value multiplicity changes.
  The design explicitly forbids differentiating through those regimes without a
  separate theorem.

## Source set actually read

I re-opened the following live sources in the web reader on Monday, August 31,
2026.

### Krylov / Arnoldi / GMRES

1. Yousef Saad, CSCI 8314 Set 13 lecture notes.
2. Lloyd N. Trefethen and David Bau III, *Numerical Linear Algebra*.
3. Yousef Saad, CSCI 8314 Set 14 lecture notes.

How they are used:

- Saad Set 13 is the primary treatment for the Krylov-space definition, the
  relative minimal-polynomial viewpoint, Arnoldi, and the GMRES least-squares
  reduction.
- Trefethen--Bau is the independent textbook treatment for lucky breakdown,
  Ritz information, GMRES residual polynomials, monotonicity, finite
  termination in exact arithmetic, and the diagonalizable residual bound with
  the eigenvector-conditioning factor.
- Saad Set 14 supplies the restart algorithm and confirms that restart is a
  practical variant rather than an extension of the unrestarted finite-termination
  theorem.

### Matrix differentiation / spectral perturbation

1. Edelman and Johnson, *Matrix Calculus for Machine Learning and Beyond*.
2. David Bindel, CS 6210 perturbation-theory lecture notes.
3. Stewart and Sun, *Matrix Perturbation Theory*.
4. Benjamin Texier, *Basic matrix perturbation theory*.

How they are used:

- Edelman--Johnson is the primary lecture-note treatment for the matrix
  differential rules, determinant and inverse derivatives, and the Hermitian
  eigenproblem viewpoint.
- Bindel supplies the simple left/right eigenvalue derivative formula, the
  condition-number expression, the contour-projector picture, and the explicit
  defective square-root splitting example.
- Stewart--Sun supplies the reduced-resolvent/group-inverse language and the
  gauge-sensitive eigenvector-derivative seam.
- Texier supplies the contour-integral eigenprojector formula and an independent
  coalescing-eigenvalue source for the square-root splitting warning.

## URL verification and source handling

All recorded source URLs were re-opened in the web reader on Monday, August 31,
2026. None needed URL recovery, archive substitution, or `original_url`
provenance handling in this batch.

The runner's shell network is restricted, so I did not fabricate byte hashes or
page-tree counts by pretending to run `source-fetch-check --stamp`. Instead I
recorded manual `fetch_verified` blocks of the same accepted form already used
elsewhere in this repository:

- `at`
- `kind`
- `verified_via: "web-open"`
- `pages` when the web reader exposed a page count
- a short note stating that the URL was opened in the web reader and that local
  shell stamping failed with `ENOTFOUND`

This is sufficient for scaffold-stage `source-fetch-check` in check mode, which
only requires a durable fetch-verification block.

## Coverage notes

The coverage ledger is A-page scoped, matching the repository's current batch
contract. The B-page examples and counterexamples are scaffolded in the batch
manifest but are not given separate page objects in
`research/frontier-26-batch-2.coverage.json`.

For both A pages the ledger now uses exact source rows whenever the source range
exposed a named heading or displayed result, and page-level canonical rows only
for synthesis seams that the reread sources use without isolating under a
single heading:

- LA-20 keeps canonical carriers only for the invertible exact-solution-at-grade
  corollary, restarted GMRES, and the matrix-free model; the grade/minimal-
  polynomial pair and the GMRES minimization/termination pair are now carried by
  exact rows from Saad Set 13 and Trefethen-Bau Lecture 35.
- LA-21 keeps canonical carriers for the least-squares derivative bundle, the
  local simple-branch theorem, the reduced-resolvent identity package, the
  singular-value derivative restriction, the crossing counterexample, and the
  projector scale-invariance seam; the matrix differential rule bundle, the
  trace/Frobenius-linear functional formulas, the quadratic-form gradient
  formula, and the compatible left/right eigendata plus condition-number setup
  are now carried by exact Edelman-Johnson and Bindel rows.

## Validation checklist

I ran the scaffold-stage checks relevant to this batch:

```bash
node tools/coverage-checklist.mjs --require-destination research/frontier-26-batch-2.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-26-batch-*.pages.json
node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-2.coverage.json
node tools/url-sweep.mjs --coverage research/frontier-26-batch-2.coverage.json --out /tmp/frontier-26-batch-2-url-liveness.json --recover --fail-on-dead
node tools/validate-plan.mjs research/plan-spec.json
node tools/validate-plan.mjs /tmp/frontier-26-batch-2-spliced-plan.json
git diff --check
```

The temporary spliced plan replaces the four live `frontier-26` batch-2 page
entries inside `research/plan-spec.json` with the scaffolded entries from
`research/frontier-26-batch-2.pages.json`, so `validate-plan` checks the actual
proposed batch rather than the still-empty run plan.

## Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-26-batch-2.coverage.json`
  passed on Monday, August 31, 2026: `2` page(s), `46` harvested results,
  `0` errors, `0` warnings.

- `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-*.pages.json`
  passed on Monday, August 31, 2026: `361` scoped items, `0` errors,
  `0` warnings.

- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-2.coverage.json`
  passed on Monday, August 31, 2026: `7/7` source(s) fetch-verified.

- `node tools/validate-plan.mjs research/plan-spec.json`
  passed on Monday, August 31, 2026. The final line was:
  `OK -- declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 566 page(s) with item lists.`

- `node tools/validate-plan.mjs /tmp/frontier-26-batch-2-spliced-plan.json`
  passed on Monday, August 31, 2026. The final line was:
  `OK -- declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 570 page(s) with item lists.`

- `git diff --check`
  passed on Monday, August 31, 2026 with no whitespace or patch-format
  defects.

### URL liveness blocker

`node tools/url-sweep.mjs --coverage research/frontier-26-batch-2.coverage.json --out /tmp/frontier-26-batch-2-url-liveness.json --recover --fail-on-dead`
failed on Monday, August 31, 2026 in this runner's shell environment:

- summary: `url-sweep: 0/7 live; 7 failed; 0 recoverable from the archive; 0 suspect`
- failure mode for every external host: `curl: (6) Could not resolve host`

## Step-5 authoring

Authored page ids:

- `krylov-subspaces-arnoldi-and-gmres`
- `krylov-subspaces-arnoldi-and-gmres-examples`
- `matrix-differentiation-and-first-order-spectral-perturbation`
- `matrix-differentiation-and-first-order-spectral-perturbation-examples`

Authored item scope:

- all `60` batch-2 manifest item ids from `research/frontier-26-batch-2.pages.json`
- all `48` proof-bearing batch-2 item ids now recorded in `research/frontier-26-batch-2.proof-contracts.json`

Provenance rationale:

- every authored item and page remains `status: draft`
- every authored statement is tagged `provenance.statement: ai-altered`, because the claims and examples follow the harvested literature route but the library packaging and local phrasing are newly authored for this run
- proof-bearing items are tagged `provenance.proof: ai-generated`; definitions use `provenance.proof: not-applicable`
- no item in this batch uses `provenance.statement: ai-generated`, so no generated-statement dependency target was introduced

Canonical repair and content corrections applied before the final check pass:

- collapsed proof rows to single-paragraph canonical phase format so `precheck` could read the stored steps exactly as authored
- adopted the one required canonical step split in `thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization`
- normalized all batch-2 display math to one-line `$$...$$` blocks for renderer compliance
- corrected one algebra defect in `ex-the-inverse-derivative-of-a-two-by-two-matrix` by replacing the faulty expansion with a diagonal `2x2` check that matches `-A^{-1}HA^{-1}` exactly

Narrowed or dropped claims:

- none

Blockers:

- none in the authored batch-2 item/page content
- the earlier shell-only URL liveness blocker above remains a tooling/network limitation, not a content-authoring blocker

Checks run on the final authored bytes:

- `node tools/tsx-run.mjs tools/precheck.mts $(node -e "...batch-2 proof-bearing items...")`
  - result: `48 checked, 0 failing — all clean`
- `node tools/content-policy.mjs research/frontier-26-batch-2.pages.json`
  - result: `content-policy: 60 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - result: pass; ends `OK — declared page order is acyclic and consistent...` with only the standing repository-wide `redundant-prereq` advisories
- `node tools/rendercheck.mjs $(node -e "...batch-2 pages and items...")`
  - result: `OK — 64 file(s)...`
- `node -e "JSON.parse(...frontier-26-batch-2.proof-contracts.json...)"`
  - result: `json ok`
- `git diff --check -- items library/linear-algebra research/frontier-26-batch-2.proof-contracts.json research/frontier-26-batch-2.notes.md`
  - result: pass

Exact failed URLs:

- `https://classpages.cselabs.umn.edu/Spring-2019/csci8314/FILES/LecN13.pdf`
- `https://classpages.cselabs.umn.edu/Spring-2019/csci8314/FILES/LecN14.pdf`
- `https://djvu.online/file/DTGVxlxBwTy0n`
- `https://djvu.online/file/j5uuUqxIKij6w`
- `https://ems.press/content/serial-article-files/44369?nt=1`
- `https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf`
- `https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-22.html`

This is an environment-side shell-network blocker, not a web-reader blocker:
the same seven URLs were opened successfully in the web reader earlier in this
dispatch and therefore remain the honest recorded sources. No batch-local edit
can make `curl` resolve external hosts inside this runner, so I am leaving the
exact liveness failure here as the required scaffold-stage blocker record.

## Step-3 fix pass

I re-opened all seven recorded source URLs in the web reader on Monday, August
31, 2026. No URL recovery, archive substitution, or re-sourcing was needed for
this batch. No manifest or dependency change was needed, so
`research/frontier-26-batch-2.pages.json` is intentionally unchanged.

### Finding dispositions

- **B2-1 — applied.** Evidence: the live reread of Saad Set 13 again exposed
  the `Notation: \mu = \deg` minimal-polynomial clause and the displayed
  polynomial-image identity for `K_m`, and the live reread of Trefethen-Bau
  Lecture 35 again exposed the GMRES residual-minimization clause and the exact
  arithmetic finite-termination discussion. Changed scaffold record:
  `research/frontier-26-batch-2.coverage.json` now adds exact carriers for
  `def-grade-and-relative-minimal-polynomial-of-a-start-vector`,
  `prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector`,
  `cor-gmres-minimizes-the-residual-over-the-affine-krylov-space`, and
  `thm-unrestarted-gmres-terminates-in-at-most-the-relative-grade-in-exact-arithmetic`.
  Post-fix manifest-to-coverage audit: `krylov-subspaces-arnoldi-and-gmres`
  has `0` uncovered A-page items.
- **B2-2 — applied, with narrow pushback on one sub-item.** Evidence: the live
  reread of Edelman-Johnson Chapter 5 again exposed the `d(A^T A)`, `d(tr B)`,
  `f(A)=x^TAy`, and `f(x)=x^TAx` formulas used by the matrix-differential
  bundle, and the live reread of Bindel's `First-order perturbation theory`
  again exposed the left/right eigendata setup, the nonvanishing pairing
  statement, and the condition-number definition route. Changed scaffold
  record: `research/frontier-26-batch-2.coverage.json` now adds exact carriers
  for `prop-matrix-differentials-obey-sum-product-and-adjoint-rules`,
  `prop-differentials-of-trace-and-frobenius-linear-functionals`,
  `prop-gradient-of-a-quadratic-matrix-form`,
  `def-compatible-left-and-right-eigenvectors-for-a-simple-eigenvalue`,
  `prop-simple-eigenvalues-admit-left-right-normalization`, and
  `def-condition-number-of-a-simple-eigenvalue`; it also adds one expanded
  canonical carrier for `prop-simple-spectral-projector-is-scale-invariant`,
  because the reread sources state the projector formula but do not isolate the
  rescaling invariance as a standalone named result. Post-fix manifest-to-
  coverage audit: `matrix-differentiation-and-first-order-spectral-perturbation`
  has `0` uncovered A-page items.

### Gates rerun

- `node tools/coverage-checklist.mjs --require-destination research/frontier-26-batch-2.coverage.json`
  — green: `2` page(s), `58` harvested results, `0` errors, `0` warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-*.pages.json`
  — green: `441` scoped item(s), `0` errors, `0` warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-2.coverage.json`
  — green: `7/7` source(s) fetch-verified.
- `node tools/validate-plan.mjs research/plan-spec.json`
  — green: declared page order is acyclic and consistent; no item-level cycles,
  forward references, B-page dependencies, or unresolved ids among the `566`
  page(s) with item lists.
- `node tools/splice-plan.mjs --run frontier-26 --batch 2 --dry-run`
  — green: `4` page(s) spliced, `0` already correct, `60` item(s).
- `node tools/validate-plan.mjs /tmp/frontier-26-batch-2-spliced-plan.json`
  — green: declared page order is acyclic and consistent; no item-level cycles,
  forward references, B-page dependencies, or unresolved ids among the `570`
  page(s) with item lists.
