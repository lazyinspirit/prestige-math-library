# Batch 68 authoring notes — Matrix functions and scaling squaring

## Scope and controlling documents

This batch owns A page `matrix-functions-and-scaling-squaring` (order 2420,
category `numerical-linear-algebra-and-approximation`) and B page
`matrix-functions-and-scaling-squaring-examples` (order 2421). The manifest
contains 24 A items and 3 B examples, below the 100-item cap. The batch-level
dependency artifact assigns level 4 and prerequisite batches 1, 33, 49, and 61.
The dispatch supplied scheduling input
`6dfd0c45f2a8223c7d6f772198513d38987ad90fa865c52f24f2241dd5c6d510`.

I read the owner authoring direction, the assigned design section
`research/plan-numerical-linear-track.md` §1852, `research/plan-spec.json`,
the schema/workflow, batch inventory and dependency evidence, and the actual
supplier bodies. The controlling design and plan spec agree on the six page
requirements and mathematical scope; no substantive plan conflict was found.
The local manifest now records the item-level dependencies needed by the
certified Padé and branch-aware Schur paths. This includes the resolvent-cover
validator and soundness, complex infinity norm inputs, the operationwise
arithmetic model, and the finite Francis reduction required to check a
principal branch before evaluating it.

The shared batch dependency artifact currently records batch 68 at level 4
with prerequisites 1, 33, 49, and 61. Its stored `input_sha256` is
`e003165909bf844a4efd5e4bf735ccedd8997534ddd33bc930b85761dbba8cd8`; I left
that shared artifact untouched. The assignment hash and the artifact's
`input_sha256` are distinct; the shared check cannot reconcile them because it
is blocked by
malformed YAML in an unrelated Adam item (`items/alg-adam-update.md`, source
metadata around the Kingma–Ba citation).

## Item dependency levels

Levels were recomputed against all current run manifests, not just local
suppliers. They agree with the assigned labels, and the 27 carrier dependency
lists agree with the batch manifest.

| Level | Assigned items |
|---:|---|
| 0 | `def-diagonal-pade-approximant-for-exponential`; `ex-spd-square-root-and-polar-factor`; `lem-finite-hermite-interpolation-for-jordan-data`; `lem-scaling-and-squaring-error-recurrence` |
| 1 | `def-analytic-primary-matrix-function`; `lem-diagonal-pade-remainder-bound` |
| 2 | `alg-exact-jordan-block-analytic-evaluation`; `def-matrix-sign-for-spectrum-off-imaginary-axis`; `thm-analytic-primary-matrix-function-jordan-contour-agreement` |
| 3 | `ex-nonnormal-exponential-large-transient-norm`; `thm-exact-jordan-block-analytic-evaluation-correct`; `thm-frechet-exponential-integral-and-block-function-identity`; `thm-principal-matrix-logarithm-and-square-root-exist` |
| 4 | `alg-pade-denominator-solve-by-householder-qr`; `thm-matrix-function-rational-contour-error-bound` |
| 5 | `rem-matrix-function-condition-estimates-are-not-certified-bounds`; `thm-pade-denominator-solve-verified-branch-correct` |
| 6 | `alg-newton-matrix-sign-iteration`; `alg-newton-polar-factor-iteration` |
| 7 | `alg-pade-scaling-and-squaring-exponential`; `alg-schur-parlett-matrix-function`; `thm-newton-matrix-sign-convergence-and-quadratic-rate`; `thm-newton-polar-factor-quadratic-convergence` |
| 8 | `alg-principal-matrix-logarithm-and-square-root`; `thm-pade-scaling-and-squaring-error-bound`; `thm-schur-parlett-recurrence-correctness` |
| 9 | `ex-rotation-logarithm-branch-cut` |

The manifest edits keep supplier-before-consumer order. No dependency cycle or
page-capacity issue was found.

## Mathematical route and caveats

- The analytic primary function is first written by Jordan jets. A local finite
  Hermite interpolation lemma supplies the unique polynomial representative;
  the theorem proves independence of Jordan form, similarity invariance,
  multiplication, block-upper-triangular diagonal blocks, the scalar Cauchy
  contour formula, and agreement with the normal spectral calculus. The
  contour proof uses scalar global Cauchy results, preserving the
  choice-free route rather than relying on the Countable-Choice-dependent
  Banach-valued Cauchy result.
- The principal logarithm and square root use the scalar slit-plane branches.
  Their matrix identities and uniqueness under the stated spectral
  restrictions are proved using Jordan jets and the Sylvester uniqueness
  theorem.
- The diagonal Padé exponential has a finite scalar remainder proof from an
  explicit beta-integral identity. A separate lemma gives the noncommutative
  squaring-defect recurrence. The matrix contour transfer requires a uniform
  resolvent bound; a scalar Padé error or condition estimate alone is not a
  nonnormal matrix error certificate.
- The scaling-and-squaring output status is now named
  `conditional-error-bound`. It is sound only when the caller's finite
  polygonal contour lies in the scalar error disk, encloses the scaled
  spectrum with index one, is null-homologous and disjoint from the spectrum,
  and the validator certifies a uniform resolvent bound. The validator checks
  disk inequalities and segment coverage; it does not verify contour topology
  or count eigenvalues. Candidate-only output has no error guarantee. The
  procedure uses fixed finite order and does not claim adaptive Higham
  parameter selection or stability of rounded candidates.
- The Schur–Parlett method returns success only after exact Schur and local
  Sylvester checks. It has a separate exact recurrence-correctness theorem;
  no floating-point stability bound is claimed. The principal log/square-root
  algorithm now obtains and exactly checks a Schur pair, checks the branch
  domain, then runs holomorphic evaluation. This order is needed for the
  half-turn example, where no principal branch exists.
- Newton polar and sign convergence statements concern exact sequences. Their
  finite operationwise algorithms return budget/range/solve statuses and
  make no rounded convergence claim.

No choice axiom is used in the local arguments. The B examples give exact
computations for a positive diagonal Gram matrix and polar factor, a stable
spectrum with a large nonnormal transient row norm, and a half-turn on the
principal logarithm branch cut.

## Sources and harvested coverage

The A page has six full-text sources, including independent lecture notes and
a book chapter, with exact locators, item support, and dispositions in
`numerical-optimization-dynamics-2026-10-16-batch-68.source-coverage.json`.
The harvest has 37 result rows. All six sources have inspected full-text
receipts and `fetch_verified` stamps; no retrieval failed and no source was
dropped.

1. Jan Zur, *Matrix Functions*, complete 101-page TU Berlin lecture notes:
   §§2.2, 2.4–2.6; §§3.2.1–3.2.3; §§4.1–4.1.1; §§5.2–5.2.4; §5.3.1; and
   §§5.4.1–5.4.2.
2. Nicholas Higham, *Functions of Matrices: Theory and Computation*, Chapter 5
   (author-hosted full text): §5.1 and §5.3, printed pp. 107–114.
3. Nicholas Higham, “Functions of Matrices,” *Handbook of Linear Algebra*,
   Chapter 17 (author-hosted book chapter): §17.1, §§17.3–17.4, and
   §§17.8–17.9.
4. Nicholas Higham, “Computing the Polar Decomposition—with Applications,”
   *SIAM Journal on Scientific and Statistical Computing* 7(4) (1986): §3.2,
   printed pp. 1165–1167.
5. Awad H. Al-Mohy and Nicholas Higham, “A New Scaling and Squaring Algorithm
   for the Matrix Exponential,” *SIAM Journal on Matrix Analysis and
   Applications* 31(3) (2009): §3, printed pp. 978–980, plus the introduction's
   nonnormality/overscaling caveat.
6. Philip Davies and Nicholas Higham, “A Schur–Parlett Algorithm for Computing
   Matrix Functions,” *SIAM Journal on Matrix Analysis and Applications* 25(2)
   (2003): §§1, 3, 5, and 8.

`coverage-checklist` reports 1 A page, 37 harvested results, 0 errors, and 0
warnings. `source-fetch-check` resolves 6/6 sources with no drops.

## Cross-batch reconciliation and readiness

Current cross-batch review is in
`numerical-optimization-dynamics-2026-10-16-batch-68.cross-batch-dependencies.json`.
It records 30 page/item edges: 4 verified interface reviews and 26 open reviews.
The four required context pages outside this pair remain assigned as page
requirements; the semigroup page and spectral-theorem page are published, and
their relevant exponential/spectral items are published.

The current Step 1 records for 12 direct suppliers in batches 1, 33, 49, and
61 have `decision: ready` but are hash-stale. The current
`step1Decision` check reports exactly “Item or dependency changed; record
current readiness.” The source bodies were inspected for their interfaces,
but stale records are not current readiness or approval:

- Batch 1: `alg-complex-scaled-householder-reflector-step`.
- Batch 33: `alg-finite-budget-francis-schur-reduction` and
  `def-real-and-complex-schur-forms`.
- Batch 49: `def-sylvester-operator-and-separation-number`,
  `thm-sylvester-unique-solvability-spectral-separation`,
  `alg-bartels-stewart-sylvester-equation`, and
  `thm-bartels-stewart-sylvester-exact-correctness`.
- Batch 61: `def-complex-infinity-matrix-norm`,
  `lem-complex-infinity-matrix-norm-submultiplicative`,
  `thm-complex-resolvent-cover-certificate-soundness`,
  `alg-complex-resolvent-cover-validator`, and
  `thm-complex-resolvent-cover-validator-soundness`.

The exact interfaces are recorded beside each edge. They include the scaled
complex Householder operation/status contract; exact Schur pair shape and
candidate verification; Sylvester separation/uniqueness and exact successful
solve identities; the complex row-sum norm; diskwise outward resolvent
inequalities and the validator's uniform bound on covered segments. The
validator proves no contour topology or eigenvalue count. These are owner
refresh blockers; no other pair's items, decisions, shared plans, engine
state, or verdicts were edited.

The final Step 1 records contain 12 `ready` and 15 `escalated` items. The
ready items have no stale supplier in their transitive dependency closure.
The escalated set is:

- `thm-principal-matrix-logarithm-and-square-root-exist`
- `thm-matrix-function-rational-contour-error-bound`
- `alg-pade-denominator-solve-by-householder-qr`
- `thm-pade-denominator-solve-verified-branch-correct`
- `alg-pade-scaling-and-squaring-exponential`
- `rem-matrix-function-condition-estimates-are-not-certified-bounds`
- `alg-newton-polar-factor-iteration`
- `alg-newton-matrix-sign-iteration`
- `thm-pade-scaling-and-squaring-error-bound`
- `thm-newton-polar-factor-quadratic-convergence`
- `thm-newton-matrix-sign-convergence-and-quadratic-rate`
- `alg-schur-parlett-matrix-function`
- `thm-schur-parlett-recurrence-correctness`
- `alg-principal-matrix-logarithm-and-square-root`
- `ex-rotation-logarithm-branch-cut`

## Scoped checks and run state

- `proof-layout`: 27 items, 58 steps, 0 defects.
- `precheck`: 27 files, 16 proof-bearing items checked, 0 failures; 11
  definitions/algorithms/remarks are not applicable.
- `rendercheck`: 29 changed item/page files, all math spans and frontmatter
  parse.
- Strict proof contracts: 27/27 checked, 0 errors, 0 warnings.
- Manifest dependency check: 27 items, 0 normalized, 0 errors.
- `coverage-checklist`: 37 harvested rows, 0 errors, 0 warnings.
- `source-fetch-check`: 6/6 full-text sources resolved.
- Whole-run `item-dependency-levels check`: 34 errors, all empty scaffold
  inventories outside batch 68; no assigned item-level errors.
- Whole-run `batch-dependency-levels check`: blocked by the malformed Adam
  frontmatter cited above; the shared artifact was not rewritten.
- The recomputed run status remains `running` at `1-scaffold`, 68/107 covered,
  with no in-flight writers and an owner repair/recertification blocker. This
  batch's author records do not advance the run or constitute independent
  approval.

No tests were run.
