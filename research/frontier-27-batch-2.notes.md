# frontier-27 batch 2 notes - beta scaffold

Owned pair:

- `conjugate-gradients-minres-and-preconditioning` / `conjugate-gradients-minres-and-preconditioning-examples`

Artifacts written in this dispatch:

- `research/frontier-27-batch-2.pages.json`
- `research/frontier-27-batch-2.coverage.json`
- this file

Session date: Monday, August 31, 2026.

## Design against spec

I read `README.md`, `CLAUDE.md`, `SCHEMA.md`,
`research/frontier-27-beta-batch.task.md`, `research/plan-spec.json`, and the
controlling design block in
[research/plan-algebra-track-expansion-v2.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-algebra-track-expansion-v2.md:924).

For the assigned pair, the live spec and the controlling design agree on:

- page id
- companion page id
- page title
- order
- category
- declared prerequisite pages

I therefore followed the live `research/plan-spec.json` entry directly and had
no design-vs-spec drift to record for batch 2.

## Item census and split check

- A page `conjugate-gradients-minres-and-preconditioning`: `21` items
- B page `conjugate-gradients-minres-and-preconditioning-examples`: `9` items

The A page is well below the `60`-item split ceiling, so no split is needed.

## Route choices

### LA-22 -- `conjugate-gradients-minres-and-preconditioning`

I kept the design's intended route and made the proof spine explicit in the
order the later authoring will actually spend it:

1. define the energy inner product and the quadratic energy first,
2. prove the exact-solution-as-unique-energy-minimizer theorem before any
   recurrence,
3. define the Krylov Galerkin iterate and isolate the orthogonality/uniqueness
   proposition before introducing CG,
4. state CG as a recurrence and then prove positivity of the denominators before
   the orthogonality and conjugacy theorem,
5. identify CG with the Krylov Galerkin method before using the earlier grade
   page to get exact termination and then the Chebyshev bound,
6. keep the finite-precision warning as a remark rather than hiding it inside an
   exact-arithmetic theorem,
7. define Lanczos as Hermitian Arnoldi with the standard real-subdiagonal phase
   convention, then derive MINRES from the tridiagonal least-squares problem,
8. separate stationary splittings from preconditioning, because the convergence
   criterion for the iteration matrix and the equivalence maps for transformed
   systems are different pieces of mathematics, and
9. combine the SPD-preservation statement with the preconditioned CG-bound
   statement so the page keeps every design commitment without minting a
   redundant extra theorem.

Important choices:

- I did not add a separate spectral-radius definition item. The stationary
  splitting theorem can define `ρ(B)` inline and then use the existing
  complexification/Jordan-form chain honestly in the later proof, so a local
  standalone definition would add surface area without carrying any later page.
- I kept the scaled-Chebyshev polynomial construction and the real-to-complex
  passage as proof-internal arguments rather than separate dependencies. The
  declared page prerequisites for this pair do not open the trigonometric or
  complexification pages directly, and `validate-plan` correctly rejects such
  undeclared page edges.
- I kept the page matrix-centric. The spectral-theorem and Cholesky pages
  already supply the operator/matrix dictionary, so this scaffold speaks in the
  matrix language the design uses for CG, MINRES, and preconditioning.
- I did not add SYMMLQ, CGNE/CGNR, SOR, or incomplete-factorization items.
  Those are legitimate neighboring methods, but the design fixes this page on
  CG, MINRES, stationary splittings, and preconditioning, with GMRES already
  handled on the previous page.
- I split the designed “indefinite and nonsymmetric CG failures” into two B-page
  counterexamples. They witness two different traps: loss of denominator
  positivity in the symmetric-indefinite case, and failure of the whole SPD
  orthogonality/minimization theory in the nonsymmetric case.

## Source set actually read

I re-opened the following live sources in the web reader on Monday, August 31,
2026.

1. Magnus R. Hestenes and Eduard Stiefel, *Methods of Conjugate Gradients for
   Solving Linear Systems*.
2. Jonathan Richard Shewchuk, *An Introduction to the Conjugate Gradient Method
   Without the Agonizing Pain*.
3. Richard Barrett et al., *Templates for the Solution of Linear Systems:
   Building Blocks for Iterative Methods*.
4. Gilbert Strang, MIT 18.086 notes, `§6.2 Iterative Methods`.

How they are used:

- Hestenes--Stiefel is the eligible primary treatment for the CG recurrence, the
  exact-arithmetic orthogonality/conjugacy structure, and the finite-step
  perspective.
- Shewchuk is the full lecture-note treatment for the energy norm, the
  polynomial and Chebyshev convergence viewpoint, and the symmetric
  preconditioning transform.
- *Templates* is the independent monograph treatment for Lanczos/MINRES and the
  left-right-symmetric preconditioning framework.
- Strang supplies the stationary-iteration error recurrence and the
  spectral-radius convergence test in a compact full-note treatment, and it also
  gives the Jacobi concrete matrix that the B page will later spend.

## URL verification and source handling

All recorded source URLs were re-opened in the web reader on Monday, August 31,
2026. During the scaffold gate, the original NIST path for the
Hestenes--Stiefel paper became intermittently unavailable and its mechanically
substituted archive snapshot later returned HTTP 500. NIST's canonical article
PDF at `https://math.nist.gov/mcsd/Reports/2002/hestenes-steifel-52.pdf`
is the same 28-page paper with matching title, authors, journal pagination,
section numbering, and theorem numbering. It is now the reader-facing URL; the
original NIST path remains as `original_url` provenance.

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
`research/frontier-27-batch-2.coverage.json`.

The canonical carriers are used only for two synthesis seams that do not sit
under one source heading cleanly:

- the finite-precision remark, which is a warning assembled from exact-arithmetic
  theorems plus the source-side roundoff cautions, and
- the preconditioned CG bound, which is the ordinary Chebyshev theorem applied
  to the symmetrically transformed operator.

Every other harvested result is carried directly by a source heading or named
result row. The deferred rows all name the companion B page as destination,
because they are genuinely examples-or-implementation material rather than
missing A-page theory.

## Validation checklist

I ran the scaffold-stage checks relevant to this batch:

```bash
node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-2.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-27-batch-*.pages.json
node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-2.coverage.json
node tools/url-sweep.mjs --coverage research/frontier-27-batch-2.coverage.json --out /tmp/frontier-27-batch-2-url-liveness.json --recover --fail-on-dead
node tools/validate-plan.mjs research/plan-spec.json
node tools/validate-plan.mjs /tmp/frontier-27-batch-2-spliced-plan.json
git diff --check
```

The temporary spliced plan replaces the two live `frontier-27` batch-2 page
entries inside `research/plan-spec.json` with the scaffolded entries from
`research/frontier-27-batch-2.pages.json`, so `validate-plan` checks the actual
proposed batch rather than the still-empty run plan.

## Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-2.coverage.json`
  passed on Monday, August 31, 2026: `1` page(s), `29` harvested results,
  `0` errors, `0` warnings.

- `node tools/content-policy.mjs --manifest-only research/frontier-27-batch-*.pages.json`
  passed on Monday, August 31, 2026: `255` scoped items, `0` errors,
  `0` warnings.

- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-2.coverage.json`
  passed on Monday, August 31, 2026: `4/4` source(s) fetch-verified.

- `node tools/validate-plan.mjs research/plan-spec.json`
  passed on Monday, August 31, 2026. The final line was:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 594 page(s) with item lists.`

- `node tools/validate-plan.mjs /tmp/frontier-27-batch-2-spliced-plan.json`
  passed on Monday, August 31, 2026. The final line was:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 596 page(s) with item lists.`

- `git diff --check`
  passed on Monday, August 31, 2026 with no whitespace or patch-format
  defects.

### URL liveness blocker

`node tools/url-sweep.mjs --coverage research/frontier-27-batch-2.coverage.json --out /tmp/frontier-27-batch-2-url-liveness.json --recover --fail-on-dead`
failed on Monday, August 31, 2026 in this runner's shell environment:

- summary: `url-sweep: 0/4 live; 4 failed; 0 recoverable from the archive; 0 suspect`
- failure mode for every external host: `curl: (6) Could not resolve host`

Because the shell network is DNS-blocked while the web reader can still open the
same URLs, this is an environment blocker rather than evidence that the sources
are actually dead. I therefore retained the fetch-verified web-open blocks and
recorded the liveness failure here instead of re-sourcing away from material
that I did in fact re-open and read.

## Step-3 fix pass

Run on Monday, August 31, 2026, against Alpha group `a`'s stable findings in
`research/frontier-27-alpha-a-step3-scaffold-review.md`.

- Finding id: **none issued for the batch-2 carrier-completeness repair** in
  the stable review.
  Disposition: `already applied`; no further coverage edit needed on current
  bytes.
  Evidence: the stable review says
  `research/frontier-27-batch-2.coverage.json` had omitted direct carriers for
  five A-page items. The live canonical carrier block now includes
  `def-quadratic-energy-of-a-hermitian-positive-definite-linear-system`,
  `thm-hermitian-positive-definite-linear-system-has-a-unique-energy-minimizer`,
  `def-krylov-galerkin-iterate-for-a-hermitian-positive-definite-system`,
  `prop-galerkin-orthogonality-for-a-krylov-galerkin-iterate`, and
  `def-lanczos-process-as-hermitian-arnoldi`, so the current batch no longer
  has the missing-carrier gap. The live rerun
  `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-2.coverage.json`
  now returns `coverage-checklist: 1 page(s), 34 harvested result(s), 0 error(s), 0 warning(s)`.
  Changed scaffold record:
  `research/frontier-27-batch-2.coverage.json` canonical carrier records for
  those five A-page items.

- Finding id: `0858912bbea02d436fbfe1c5bab7c498b5e2eadf543b491d07b6cf76a71abc0a`.
  Disposition: `stands`; no scaffold repair applied.
  Evidence: Hestenes-Stiefel `Theorem 5:2` remains an honest
  `out-of-scope` row for the LA-22 page design's narrower Krylov-Galerkin,
  CG, Lanczos, MINRES, stationary-splitting, and SPD-preconditioning route.
  Changed scaffold record: none in
  `research/frontier-27-batch-2.pages.json` or
  `research/frontier-27-batch-2.coverage.json`; the existing decline row
  remains correct on current bytes.

- Finding id: `094647ee0bdac04797137d2d5f56cdbbc0e22ed7ddd028e183ee8d613115411b`.
  Disposition: `stands`; no scaffold repair applied.
  Evidence: Strang `Jacobi Iterations` still belongs on
  `conjugate-gradients-minres-and-preconditioning-examples`, matching the
  design's reservation of concrete splitting-matrix witnesses for the
  companion B page.
  Changed scaffold record: none in
  `research/frontier-27-batch-2.pages.json` or
  `research/frontier-27-batch-2.coverage.json`; the existing deferment row
  remains correct on current bytes.

- Finding id: `2dade4a9d2d672aef5b7d2b704af60a36c0810fcc3722d9301568b8971ea37bf`.
  Disposition: `stands`; no scaffold repair applied.
  Evidence: Templates `3.2 Jacobi Preconditioning` still matches the designed
  diagonal-SPD worked example reserved for
  `conjugate-gradients-minres-and-preconditioning-examples`, not the theorem
  spine of the A page.
  Changed scaffold record: none in
  `research/frontier-27-batch-2.pages.json` or
  `research/frontier-27-batch-2.coverage.json`; the existing deferment row
  remains correct on current bytes.

- Finding id: `5389b5bb7e995cb2da48611656769d31bd653bf75737b33980502f296325b928`.
  Disposition: `stands`; no scaffold repair applied.
  Evidence: Templates `3.2.2 Discussion` is still comparative implementation
  material for the companion examples page, including the contrast with
  stronger preconditioners and the bad-preconditioner witness already designed
  for the B page.
  Changed scaffold record: none in
  `research/frontier-27-batch-2.pages.json` or
  `research/frontier-27-batch-2.coverage.json`; the existing deferment row
  remains correct on current bytes.

- Finding id: `56ffeef66ba345804d167c6a6529bdcb4966f2d28708d2f2b52d2bd57a88ea3e`.
  Disposition: `stands`; no scaffold repair applied.
  Evidence: Hestenes-Stiefel `Theorem 6:2` is still a nonessential geometric
  reformulation beyond the live affine-Krylov minimization route, so the
  current `out-of-scope` disposition remains honest.
  Changed scaffold record: none in
  `research/frontier-27-batch-2.pages.json` or
  `research/frontier-27-batch-2.coverage.json`; the existing decline row
  remains correct on current bytes.

- Finding id: `79e9cd500161ff83f8290a8bf358e57bae9d29fb7adfb3e18343dda58249722f`.
  Disposition: `stands`; no scaffold repair applied.
  Evidence: Templates `3.3 SSOR preconditioning` remains outside the current
  LA-22 page contract, which still stops at the general preconditioning
  framework plus one diagonal SPD example rather than opening an SSOR branch.
  Changed scaffold record: none in
  `research/frontier-27-batch-2.pages.json` or
  `research/frontier-27-batch-2.coverage.json`; the existing decline row
  remains correct on current bytes.

- Finding id: `d978af83097405217f6485d058884cd4558651ce916bc6340094e5d6d71b1715`.
  Disposition: `stands`; no scaffold repair applied.
  Evidence: Shewchuk `Figure 36` still belongs on
  `conjugate-gradients-minres-and-preconditioning-examples`, where the design
  keeps the diagonal-SPD preconditioning geometry as worked example material.
  Changed scaffold record: none in
  `research/frontier-27-batch-2.pages.json` or
  `research/frontier-27-batch-2.coverage.json`; the existing deferment row
  remains correct on current bytes.

- Current fetch and validator evidence.
  Disposition: recorded; no further scaffold repair needed in this pass.
  Evidence: I re-opened all four recorded source URLs in the web reader on
  Monday, August 31, 2026: the NIST Hestenes-Stiefel PDF, Shewchuk's CMU PDF,
  the Netlib *Templates* HTML, and Strang's MIT OCW PDF. The live reruns still
  pass:
  `source-fetch-check: 4/4 source(s) fetch-verified`;
  `content-policy: 449 scoped item(s), 0 error(s), 0 warning(s)` for
  `research/frontier-27-batch-*.pages.json`;
  `validate-plan` on `research/plan-spec.json` ends `OK`; and
  `validate-plan` on `/tmp/frontier-27-batch-2-spliced-plan.json` also ends
  `OK`.
  Changed scaffold record: this notes section only.

## Step-5 authoring

Session date: Monday, August 31, 2026.

Authored item ids:

- A page: `def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix`, `def-quadratic-energy-of-a-hermitian-positive-definite-linear-system`, `thm-hermitian-positive-definite-linear-system-has-a-unique-energy-minimizer`, `def-krylov-galerkin-iterate-for-a-hermitian-positive-definite-system`, `prop-galerkin-orthogonality-for-a-krylov-galerkin-iterate`, `def-conjugate-gradient-recurrence`, `prop-conjugate-gradient-denominators-are-positive-before-convergence`, `thm-conjugate-gradient-residuals-are-orthogonal-and-search-directions-are-a-conjugate`, `thm-conjugate-gradient-is-the-krylov-galerkin-method-and-minimizes-the-energy-error`, `thm-conjugate-gradient-terminates-by-the-relative-grade-in-exact-arithmetic`, `thm-conjugate-gradient-chebyshev-bound-in-the-a-norm`, `rem-floating-point-conjugate-gradients-can-lose-orthogonality-conjugacy-and-finite-termination`, `def-lanczos-process-as-hermitian-arnoldi`, `thm-hermitian-arnoldi-collapses-to-the-lanczos-three-term-recurrence`, `def-minres-iterate-from-the-lanczos-tridiagonalization`, `thm-minres-minimizes-the-euclidean-residual-over-the-hermitian-krylov-space`, `def-stationary-iteration-from-a-matrix-splitting`, `thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one`, `def-left-right-and-symmetric-positive-definite-preconditioning`, `prop-invertible-preconditioners-give-equivalent-linear-systems-with-explicit-residual-maps`, `thm-symmetric-positive-definite-preconditioning-preserves-the-hermitian-positive-definite-cg-problem`.
- B page: `ex-conjugate-gradients-on-a-two-by-two-hermitian-positive-definite-system`, `ex-conjugate-gradients-can-terminate-at-a-relative-grade-smaller-than-the-dimension`, `ex-clustered-eigenvalues-give-a-better-cg-bound-than-spread-eigenvalues`, `cex-conjugate-gradients-can-break-on-a-symmetric-indefinite-system`, `cex-conjugate-gradients-does-not-apply-to-a-nonsymmetric-invertible-matrix`, `ex-minres-on-a-symmetric-indefinite-system`, `ex-jacobi-and-gauss-seidel-splittings-with-spectral-radius-comparison`, `ex-diagonal-spd-preconditioning-improves-the-preconditioned-condition-number`, `cex-a-preconditioner-can-worsen-the-preconditioned-condition-number`.

Authored page files:

- `library/linear-algebra/conjugate-gradients-minres-and-preconditioning.md`
- `library/linear-algebra/conjugate-gradients-minres-and-preconditioning-examples.md`
- `research/frontier-27-batch-2.proof-contracts.json`

Proof-contract scope authored:

- `21` proof-bearing items: the `12` A-page proposition/theorem items and all `9` B-page examples or counterexamples.

Provenance rationale kept truthful:

- The standard CG, Lanczos, MINRES, splitting, and preconditioning definitions and core theorems stay `literature-derived` when the statement is a direct sourced result.
- The page-local packaging and synthesis statements stay `ai-altered`: `def-krylov-galerkin-iterate-for-a-hermitian-positive-definite-system`, `prop-galerkin-orthogonality-for-a-krylov-galerkin-iterate`, `def-lanczos-process-as-hermitian-arnoldi`, `thm-conjugate-gradient-is-the-krylov-galerkin-method-and-minimizes-the-energy-error`, `thm-symmetric-positive-definite-preconditioning-preserves-the-hermitian-positive-definite-cg-problem`, and the floating-point remark.
- Every B-page witness uses a batch-local explicit matrix or vector choice, so those statements are tagged `ai-generated` with the required `generation.role` value (`example` or `counterexample`). None is a dependency target.
- No draft item was given a `verification.judge` record or any published-only verification state.

Authoring repairs applied during this pass:

- Created the missing batch-local proof-contract file `research/frontier-27-batch-2.proof-contracts.json` from the authored on-disk item text, then regenerated its `citations` and `derivations` with `node tools/regen-contract-entries.mjs`.
- Applied the canonical precheck repair by reflowing every numbered proof step into a single paragraph, so the checker sees each step's displays, citations, and trailing tags on the same parsed step.
- Adopted precheck's required stratification for `prop-invertible-preconditioners-give-equivalent-linear-systems-with-explicit-residual-maps` by renumbering its proof to `1.1`, `1.2`, `2.1`.
- Tightened `def-krylov-galerkin-iterate-for-a-hermitian-positive-definite-system` so it defines the residual-orthogonality condition only, with the equivalence to error $A$-orthogonality proved later in `prop-galerkin-orthogonality-for-a-krylov-galerkin-iterate`.
- Removed decimal approximations from two B-page computations because `proof-contract.mjs` interprets digit-dot-digit strings inside proof steps as step references, and made the `L2` citation explicit in `thm-conjugate-gradient-residuals-are-orthogonal-and-search-directions-are-a-conjugate`.

Narrowed or dropped claims:

- none

Checks run on Monday, August 31, 2026:

- `node tools/tsx-run.mjs tools/precheck.mts <21 proof-bearing batch-2 items>` -> `21 checked, 0 failing — all clean`.
- `node tools/content-policy.mjs research/frontier-27-batch-2.pages.json` -> `content-policy: 30 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json` -> ended with `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 622 page(s) with item lists.` The command also prints the repository's standing run-wide `redundant-prereq` advisories on unrelated pages.
- `node tools/validate-plan.mjs /tmp/frontier-27-batch-2-spliced-plan.json` -> ended with the same `OK` line on the scratch overlay that replaces the two batch-2 pages inside `research/plan-spec.json` with the authored manifest entries.
- `node tools/proof-contract.mjs research/frontier-27-batch-2.proof-contracts.json --strict` -> `proof-contract: 0 error(s), 0 warning(s), 21/21 item(s) checked`.
- `git diff --check -- items library/linear-algebra research/frontier-27-batch-2.proof-contracts.json research/frontier-27-batch-2.notes.md` -> clean.

Blockers:

- none inside the Step-5 authoring scope.
