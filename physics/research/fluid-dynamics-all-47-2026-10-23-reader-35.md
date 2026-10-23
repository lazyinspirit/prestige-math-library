# Step 3a reader report — batch 35

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: reader  
Scope: batch `35` only

## Opened inventory

The current batch manifest assigns two draft mathematics pages and five items:

- `fd-da01` — [library/fluid-dynamics-mathematics/fd-da01.md](../library/fluid-dynamics-mathematics/fd-da01.md), with `def-fd-fluid-coefficient-observation-model`, `prop-fd-linear-fluid-filter-interface`, `rem-fd-fluid-enkf-scope`, and `prop-fd-finite-observation-identifiability`.
- `fd-da01-examples` — [library/fluid-dynamics-mathematics/fd-da01-examples.md](../library/fluid-dynamics-mathematics/fd-da01-examples.md), with `ex-fd-two-mode-one-sensor`.

I read each assigned item in dependency order and checked its title, kind,
statement or definition, dependencies, facts, proof or verification, source
links, proof contract where applicable, and diagram content. No TikZ or
tikzcd diagrams occur in the assigned items. Both assigned pages have
frontmatter only, empty bodies, the declared inventories, and
`page_layout: compact-v1`.

I also opened the batch-35 manifest, proof contracts and coverage, proof-contract
coverage, cross-batch-dependency record, and batch notes. These records were
treated as navigation and evidence, not as mathematical verdicts.

The five published page prerequisites were opened at their canonical mathematics
paths: `data-assimilation-variational-and-ensemble-methods`, `kalman-filtering`,
`the-spectral-theorem-and-singular-value-decomposition`,
`relations-functions-and-quotients`, and
`state-space-models-as-probability-laws`. Their current files match the pinned
hashes in `research/math-imports.json`.

The direct published mathematical item suppliers used by the assigned claims
were opened: `alg-kalman-filter`, `alg-ensemble-kalman-filter`,
`def-linear-gaussian-state-space-model-with-independent-noises`,
`def-axiom-of-choice`, `thm-kalman-filter-is-exact-posterior`,
`thm-perturbed-observation-ensemble-kalman-large-ensemble-limit`,
`thm-singular-value-decomposition`, and
`thm-non-negative-square-root-exists-and-is-unique`. I additionally opened the
relevant state-space, Gaussian-conditioning, kernel, Cholesky, triangular-solve,
exchangeability, convergence, and moment-bound suppliers used in those proofs,
including `def-multivariate-normal-law`, `def-independent-random-elements`,
`lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal`,
`thm-linear-gaussian-state-space-path-law-is-jointly-gaussian`,
`def-state-space-filtering-laws`,
`thm-state-space-filtering-and-smoothing-laws-exist`,
`lem-independent-noise-extends-a-conditional-law`,
`lem-one-step-kalman-gaussian-conditioning`,
`thm-multivariate-normal-conditional-law`,
`thm-measurability-of-integration-against-a-kernel`, `thm-dynkin-pi-lambda`,
`thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`,
`thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost`,
`lem-near-iid-exchangeable-arrays-have-convergent-means`,
`lem-near-iid-exchangeable-arrays-have-convergent-sample-covariances`,
`lem-probability-convergence-plus-higher-moments-gives-lp-convergence`,
`lem-ensemble-kalman-update-preserves-joint-exchangeability`,
`lem-linear-gaussian-reference-ensemble-reproduces-kalman-filter`,
`lem-perturbed-observation-ensemble-kalman-moment-bounds`,
`cor-real-spectral-theorem-for-self-adjoint-endomorphisms`,
`thm-factorization-of-expectations-for-independent-variables`, and
`thm-chebyshev-markov-inequality-for-the-integral`.

For the repaired Definition interface, I checked its current in-run consumers
and their pages as read-only context: `post-fd-fluid-observation-and-noise`,
`pthm-fd-conditional-fluid-filter-law`, `ex-fd-symbolic-single-sensor`,
`fd-pda01`, and `fd-pda01-examples`. Their time horizons are already stated as
integers; none uses the pressure-gauge illustration. No outside carrier was
edited.

## Mathematical review and edits

### `def-fd-fluid-coefficient-observation-model`

In `## Definition`, the horizon was written only as `$T\\ge0$` even though all
states and recursions are indexed by integers. I made the input precise as a
nonnegative integer horizon. I also specified the one-step ensemble size as an
integer `N\\ge2`, since it indexes a finite list and the divisor-`N` sample
covariance.

The finite-dimensional state and observation spaces, ordered bases, maps,
noise laws, covariance signs, AC assumption, admissible innovation solves, and
the deterministic inverse interface are otherwise explicit. The Kalman
procedure uses the supplied algorithm and its stated Cholesky solves. No
empirical claim is made by this mathematics definition.

### `prop-fd-linear-fluid-filter-interface`

The integer horizon is now explicit. The hypothesis match to the imported
finite-horizon linear-Gaussian model and to the exact filtering theorem is
correct: AC, mutually independent Gaussian initial/process/observation vectors,
positive-semidefinite covariances, and positive-definite innovation matrices
are all stated. The supplied theorem provides a Gaussian conditional-law version
at every history, including singular state/noise covariances.

I replaced the phrase “under a nonsingular observation law” with an explicit
statement that the selected version has parameters at every history, including
on model-null sets, where another version need not agree. This avoids an
undefined qualifier and retains the exact claim and its null-set limitation.
The proof's two steps correctly match the model hypotheses and apply the exact
filtering result; there is no hidden density or nonsingularity assumption.

### `rem-fd-fluid-enkf-scope`

The horizon and ensemble size are now explicitly integers. The statement's
sampling model matches the imported perturbed-observation theorem: fixed finite
horizon and data, linear-Gaussian transitions/observations, positive-semidefinite
state/process covariances, positive-definite observation covariances, iid prior
members, and independent per-member process and observation perturbations. The
divisor-`N` convention is explicit. The claimed limits concern finite-time
empirical statistics and bounded-Lipschitz averages in probability; the
statement correctly makes no finite-`N` posterior-exactness, nonlinear, or
uniform-in-time claim. The procedure is a model deduction and reports no
experiment or measurement.

I read Mandel, Cobb, and Beezley's *On the Convergence of the Ensemble Kalman
Filter*, §§3–4, Theorem 1, its proof, and Corollary 1. The paper's introduction
states a constant state-space dimension for its result; the current imported
theorem has a local proof for the stated finite sequence of dimensions, so the
local claim does not rely on silently transferring that paper's narrower
statement. Its proof's exchangeability, covariance convergence, gain stability,
moment bounds, coupling, and bounded-Lipschitz sample-average steps match the
stated hypotheses. The source's EnKF presentation uses divisor `N-1`; the
divisor-`N` claim here is supported by the exact imported theorem and its
proof. Law, Stuart, and Zygalakis, Chapter 4 §4.2.3, supplies context but is not
used to establish that divisor-`N` interface.

### `prop-fd-finite-observation-identifiability`

The whitening construction is valid for symmetric positive-definite `R`:
the supplied square-root theorem gives a symmetric positive-semidefinite root,
positive definiteness makes it invertible, and `W^T W=R^{-1}`. The SVD gives
attainment of the minimum gain, the equivalence between positive gain and
injectivity, uniqueness of the weighted least-squares minimizer, and the stated
pointwise realized-error bound. Rank deficiency produces the stated nonzero
kernel direction. No probability or confidence claim is made.

I made the pressure-gauge caveat self-contained by specifying a spatial domain,
the scalar-function space, the linear pressure representation, and the exact
constant coefficient direction. The condition `G v_c=0` now directly identifies
that direction as an instance of the proved nullspace case in step 2.1. The
statement specifies that restricting to a complement fixes this direction or,
alternatively, identifying coefficients that differ by its span treats them as
one equivalence class. It remains explicitly finite-dimensional and does not
claim a general PDE identifiability theorem.

The relevant source statements are Axler, *Linear Algebra Done Right*, 4th ed.,
§7E, Theorem 7.70 (SVD for linear maps between finite-dimensional inner-product
spaces), and the local published square-root and SVD supplier proofs. The exact
SVD formulation supports the real Euclidean map used here.

### `ex-fd-two-mode-one-sensor`

The witness is correct: `G=[1 0]` sends the nonzero vector `(0,1)` to zero, and
adding any nonzero multiple leaves the predicted observation unchanged. The
fixed realized error does not create a statistical claim. No edit was needed.

### Contract and mechanical checks

I updated the batch-35 contract entries for the filtering-version/null-set
qualification, the integer-horizon boundary, and the pressure-kernel
consequence. None of the four edited items had a `verification.judge` record to
remove.

- Reflow: all four edited items unchanged.
- Precheck: `def-fd-fluid-coefficient-observation-model` and
  `rem-fd-fluid-enkf-scope`: 0 applicable proof steps, 0 failures;
  `prop-fd-linear-fluid-filter-interface` and
  `prop-fd-finite-observation-identifiability`: direct proof checks passed,
  0 failures.
- Final proof-layout command: 4 items, 6 steps, 0 defects.
- The updated proof-contract JSON parses successfully.

## Page verdicts

- `fd-da01`: **Pass for the assigned authored content.** The page is
  frontmatter-only, lists the four assigned A items, and the current manifest
  lists five published mathematical page prerequisites. The item claims and
  proofs above are conditionally mathematical and do not assert empirical fluid
  behavior.
- `fd-da01-examples`: **Pass for the assigned authored content.** The page is
  frontmatter-only, lists the one assigned example, and requires `fd-da01`.

## Uneditable defects and blocker

No confirmed defect remains in an assigned item or page. No diagram defect or
missing diagram was found.

One workflow-metadata discrepancy is left for owner routing: the current
`fd-da01` page and batch-35 manifest each list five page prerequisites, while
`research/fluid-dynamics-all-47-2026-10-23-batch-35.cross-batch-dependencies.json`
contains three page rows and the batch notes describe three page requirements.
All five current prerequisite pages were independently opened and their import
pins match. This is not an authored page/item defect, so I did not edit the
metadata file or create a content finding. No mathematical/content blocker
remains.

## Coverage limit

The assigned items, their direct supplier items, the specific Gaussian,
filtering, exchangeability, moment, Cholesky/solve, and SVD/square-root
arguments used by their proofs, and the exact primary-source sections listed
above were reviewed. I did not audit the complete transitive foundational
dependency closure of the root mathematics suppliers; that closure includes
many unrelated foundational items. This report does not certify that full
closure.

Primary source locators consulted:

- [Mandel, Cobb, and Beezley, *On the Convergence of the Ensemble Kalman Filter*, §§3–4, Theorem 1 and Corollary 1](https://arxiv.org/pdf/0901.2951v2)
- [Law, Stuart, and Zygalakis, *Data Assimilation: A Mathematical Introduction*, Chapter 4 §§4.1 and 4.2.3](https://arxiv.org/pdf/1506.07825v1)
- [Axler, *Linear Algebra Done Right*, 4th ed., §7E](https://linear.axler.net/LADR4e.pdf)
