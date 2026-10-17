# Batch 34 authoring notes

Run `numerical-optimization-dynamics-2026-10-16`; assigned pair only:
`krylov-methods-and-lanczos-convergence` and its examples page. The local
scaffold contains six A items and four B examples. No published item, shared
plan, owner verdict, runtime state, or another pair's carrier was edited.

## Controlling plan and conflicts

- The controlling design is the complete NA-05 section in
  [`plan-numerical-linear-track.md`](/home/lazyinspirit/Projects/prestige-math-library/research/plan-numerical-linear-track.md:995),
  including its approved amendment at line 1045. It gives the exact sparse
  Arnoldi/GMRES and Lanczos proof route, the start-angle and spectral-gap
  requirements, and the finite-precision MGS/CG additions. Its detailed
  interface and amendment govern over the shorter NA05 summary in
  [`plan-numerical-analysis-track.md`](/home/lazyinspirit/Projects/prestige-math-library/research/plan-numerical-analysis-track.md:74).
- The short summary does not mention the later MGS local-relation,
  orthogonality-loss, GMRES residual-gap, and CG attainable-accuracy amendment.
  This is a summary omission, not a scope conflict; the controlling section
  and owner direction require those results, so all are included.
- The eight page requirements in `plan-spec.json`, the task, and the batch
  manifest agree. No requirement was removed to improve readiness.
- The dependency override ledger is historical, not executable. Its raw NA-01
  row does not add another edge: the current track plan resolves that amendment
  by placing its compensated-arithmetic delta in NA-02. No new supplier pair
  was inferred from that historical row.
- The active owner direction says this run is active and prior resume files are
  concluded. The native status was read from `.autopilot/`: stage 1-scaffold,
  6/107 covered, no worker in flight, held for owner repair/recertification.
  This batch did not change that state.

## Inventory and dependency levels

The inventory was placed in the batch pages manifest before writing carriers.
Levels were recomputed from direct in-run item suppliers:

| Level | Items |
| --- | --- |
| 0 | `lem-scaled-chebyshev-filter-bound-on-a-separated-interval`; `ex-unrestarted-and-restarted-gmres-on-a-diagonal-system` |
| 1 | `thm-two-pass-mgs-arnoldi-local-relation-and-orthogonality-bound`; `thm-cg-recursive-residual-gap-and-attainable-accuracy`; `thm-lanczos-largest-ritz-value-chebyshev-bound-with-degenerate-cases` |
| 2 | `thm-gmres-true-residual-gap-from-computed-arnoldi-relation`; `ex-cg-denominator-failure-and-minres-on-an-indefinite-system`; `ex-lanczos-poorly-aligned-start-vector-delays-the-largest-ritz-value`; `ex-lanczos-repeated-top-zero-component-and-invariant-breakdown` |
| 3 | `prop-sparse-unrestarted-gmres-work-and-storage` |

The level-1 items consume the level-0 Chebyshev lemma or batch-1 floating-point
model. The GMRES residual-gap theorem consumes the level-1 MGS result. The
three level-2 examples consume their assigned A-page supplier. The sparse cost
proposition consumes batch-2 CSR storage/matvec results, with maximum supplier
level 2. The batch level remains 2 with prerequisite batches 1, 2, and 18; the
scheduling input SHA-256 is the dispatch value
`d997601c2c9ff82f60db4edbeaf97535a3cb6e2ca4d9c1e17ce4186a5cf63abd`.
No dependency cycle was found in this assigned graph.

## Supplier interfaces and unresolved page requirements

Direct item bodies used in proofs were inspected. Batch 1's
`def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma` is
still a draft body; its Step 1 record is ready, which is not independent
approval. It supplies real operationwise round-to-nearest rules, successful
normal-range operations, positive correctly rounded square roots, and
`gamma_k=ku/(1-ku)` when `ku<1`. Batch 2's
`def-csr-matrix-with-stored-entry-semantics`,
`alg-csr-matrix-vector-product-with-validation`, and
`thm-csr-storage-and-exact-matvec-cost` bodies were inspected. The latter two
have Step 1 ready records, not independent approval. Their exact limits are
preserved: canonical stored-entry counts, square nonempty rows for `s>=n`,
exact CSR arithmetic counts, and no runtime, bandwidth, or convergence claim.

The planned supplier pages currently have these bodies on disk:

- Present: `finite-precision-direct-factorizations`,
  `sparse-matrix-models-and-kernel-costs`, and
  `stationary-iterations-and-relaxation`.
- No page body: `conjugate-gradients-minres-and-preconditioning`,
  `eigenvalue-iterations-and-the-qr-algorithm`,
  `krylov-subspaces-arnoldi-and-gmres`,
  `matrix-norms-condition-numbers-and-numerical-stability`, and
  `the-spectral-theorem-and-singular-value-decomposition`.

These five exact page IDs remain unresolved as page-level requirements. Their
relevant item interfaces were available and inspected: CG recurrence, energy
norm and MINRES definition; Arnoldi/Krylov/GMRES/Lanczos definitions; Ritz
definition/residual; Courant–Fischer and the real spectral theorem; induced
Euclidean matrix norm and Cauchy–Schwarz. No extra eigenvalue-iteration, SVD,
condition-number, or stationary-iteration claim was imported. The exact
required hypotheses, affected page-level claims, and owner reconciliation
request are recorded in `batch-34.dependencies.json`. These unresolved
page-level edges are why the batch cannot claim pair-level completeness even
though the available item interfaces support the authored proofs.

## Mathematical scope decisions

- The Chebyshev lemma is proved from the defining recurrence, including
  $|T_k(t)|\le1$ on $[-1,1]$ and positivity at the exterior normalizer.
- The real-symmetric Lanczos theorem retains the top projection ratio and
  unwanted spectral interval. It covers repeated top eigenvalues, no top
  component, a collapsed interval, scalar matrices, and exact invariant
  breakdown separately. No finite-precision exact-grade claim is made.
- The sparse proposition defines the counted MGS and incremental Givens work;
  it proves the nonsingular projected solve only in the no-breakdown branch.
  Earlier breakdown counts stop at the computed column; no rank-deficient
  fallback solve is counted.
- The MGS result states actual operationwise errors, two-pass recurrence,
  computed normalization and its lower bound, a local Arnoldi relation, and an
  a posteriori Gram-defect bound. It requires successful normal-range
  operations and a full-rank generated basis for the orthogonality conclusion.
  Zero norm or failed assumptions do not become a convergence claim.
- The GMRES theorem defines the Arnoldi-coordinate least-squares residual using
  the computed values, retains basis defect, local relation, initial and
  update gaps, and separately bounds a rounded recomputation. It makes no
  least-squares solver accuracy claim.
- The CG result uses the actual stored scalar in each rounded recurrence and
  relates the recursive residual to the exact residual. The energy-norm bound
  uses the smallest eigenvalue. It does not claim true-residual monotonicity or
  exact-grade termination.
- The examples directly verify their scalar arithmetic. The indefinite
  MINRES example asserts only a defined first MINRES least-squares step and
  exact solution membership in `K_2`; it does not claim a step-2 MINRES iterate
  after exact breakdown.

## Source history

Full-text evidence is in `batch-34.source-coverage.json`; harvested results
and dispositions are in `batch-34.coverage.json`. The active treatments are
Saad's full book, Higham's full book text, Golub–Van Loan's full fourth-edition
PDF from the IIT Bombay academic host, and complete Cornell course-note PDFs.
The official Saad PDF uses the printed second-edition locators, not the older
mirror's shifted pagination. Cornell Lecture 37 linked under the Fall 2012
directory has a Fall 2009 cover; the correct F09 copy was identified, and
Lecture 37 is not used as an active source here.

The earlier StudyLib full-text mirror for Golub–Van Loan returned HTTP 403 on
its initial fetch and five recovery retries. The failed URL, all six exact
timestamps, three searches, and the alternate-source proof/dependency record
are preserved in `source_resolution` in the source coverage. A complete
fourth-edition PDF from IIT Bombay then fetched successfully (14 MB, 780 PDF
pages); the relevant §§5.2.8–5.2.9 were extracted and inspected from that PDF.
The failed StudyLib URL is the one dropped entry; the book treatment and MGS
claim remain covered by the accessible full PDF, Higham, Saad, and the full
local proof. A direct institutional PDF candidate for Golub–Van Loan had also
returned 404 earlier; its exact URL was not retained. A Paige et al. Citeseer
MGS–GMRES PDF candidate likewise returned 404; its exact URL was not retained
and no claim depends on it. Neither candidate is represented as a successful
fetch or proof approval.

## Checks and readiness

Final scoped checks:

- `node tools/proof-layout.mjs` on the ten assigned item files: **10 items,
  38 steps, 0 defects**.
- `node tools/tsx-run.mjs tools/precheck.mts` on the ten item files: **10
  checked, 0 failing**.
- `node tools/rendercheck.mjs` on the ten item files and both pages: **12
  files, OK**; KaTeX and YAML checks were available.
- `coverage-checklist.mjs` on batch 34: **2 pages, 22 harvested results, 0
  errors, 0 warnings**.
- `source-fetch-check.mjs --stamp` and its final check: **7/8 fetch-stamped,
  8/8 resolved**, with one documented drop for the StudyLib GVL URL and the
  alternate full-PDF URL fetch-stamped.
- The scoped item-dependency calculation over all run manifests matched all
  ten assigned labels: levels 0, 1, 2, and 3 as listed above. A second
  assigned-manifest/contract audit found ten matching carriers and ten
  matching contracts, with exact supplier excerpts and no forward step refs.
- The global `item-dependency-levels.mjs check` still fails on empty
  inventories and level mismatches owned by other batches. The mismatched
  unassigned items are `def-scalar-neutral-delay-equation-and-segment-shift`,
  `thm-neutral-delay-method-of-steps-well-posedness`,
  `lem-neutral-delay-shift-neumann-inverse`,
  `alg-neutral-delay-euler-compatible-grid`,
  `thm-neutral-delay-euler-first-order-error`,
  `lem-distributed-delay-midpoint-error-split`,
  `ex-neutral-delay-derivative-amplification`, `def-generalized-schur-form`,
  `alg-generalized-hessenberg-triangular-reduction`,
  `prop-generalized-hessenberg-triangular-reduction-preserves-form-and-equivalence`,
  `alg-finite-budget-qz-iteration-with-deflation-and-residual`,
  `prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence`,
  `thm-computed-qz-pair-has-certified-backward-error`, and
  `ex-symplectic-euler-harmonic-oscillator`. Other reported errors are empty
  inventories for unassigned pairs. No other batch was edited.
- `batch-dependency-levels.mjs check --run` is blocked before comparison by
  malformed unassigned batch 46 source metadata:
  `items/thm-first-impact-step-complementarity-momentum-and-energy.md:20`
  has the unquoted colon in the source title “Dynamics with Inequalities:
  Impacts and Hard Constraints”. This item belongs to batch 46; it was not
  edited. The supplied batch-34 scheduling hash and level are recorded above.

`step1-decisions.mjs record` wrote all ten assigned items as `ready` with
`owner:false`; the scoped hash check reports **10/10 closed**. Each record
names its direct item prerequisites. The five missing page bodies remain a
page-level owner reconciliation item; no assigned claim relies on an
uninspected additional statement from them. The records do not constitute
independent approval, and no `--owner` override was used.
