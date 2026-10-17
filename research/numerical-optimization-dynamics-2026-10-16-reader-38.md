# Step 3a reader report — batch 38

Run: numerical-optimization-dynamics-2026-10-16

## Inventory opened

Assigned pages:

- A page: ceas-lemma-and-aubin-nitsche-error-estimates.
- B page: ceas-lemma-and-aubin-nitsche-error-estimates-examples.

Assigned items, read in dependency order:

- A page: lem-galerkin-orthogonality-for-conforming-galerkin-approximations;
  thm-adjoint-problem-for-bounded-coercive-variational-forms;
  cor-poisson-adjoint-h2-estimate-from-global-regularity;
  lem-two-cell-hat-and-quadratic-functions-lie-in-h10;
  thm-cea-quasi-optimality-for-conforming-galerkin-approximations;
  cor-symmetric-galerkin-best-approximation-in-energy-norm;
  thm-aubin-nitsche-l2-error-estimate-under-adjoint-regularity;
  cor-shape-regular-affine-fe-primal-energy-approximation;
  cor-aubin-nitsche-h-r-plus-s-rate-under-primal-and-dual-approximation.
- B page: ex-nonsymmetric-coercive-form-attains-cea-factor;
  ex-symmetric-poisson-best-approximation-on-two-cell-mesh;
  cex-reentrant-corner-poisson-solution-not-h2.

The A page's prerequisite pages were opened at
library/pde/interior-and-boundary-sobolev-elliptic-regularity.md,
library/pde/lax-milgram-and-weak-elliptic-solutions.md, and
library/numerical-pdes-and-spatial-discretization/finite-element-meshes-and-interpolation.md.
The B page's required A page was also read. The batch notes, cross-batch
dependency record, and current proof-contract file were consulted as navigation
and contract evidence, not as verdicts.

Direct item suppliers opened:

- Current-run batch 24: def-matching-affine-simplicial-meshes,
  def-reference-finite-element-and-unisolvent-dofs,
  lem-unisolvent-dofs-define-reference-interpolant,
  lem-affine-pullback-weak-derivatives-and-scaling,
  lem-shape-regular-affine-simplex-scaling, and
  thm-bramble-hilbert-on-reference-simplex. Their actual statements and proofs
  support the stated affine mesh, reference-element, interpolation, scaling,
  and polynomial approximation uses.
- Other directly used suppliers: cor-finite-dimensional-subspaces-are-closed,
  def-axiom-of-choice, def-bounded-c-k-domain-and-boundary-charts,
  def-bounded-coercive-and-symmetric-sesquilinear-forms,
  def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice,
  def-h-minus-one-as-the-dual-of-h-one-zero, def-hilbert-space,
  def-integrable-real-and-complex-functions-and-their-integrals,
  def-integral-over-a-measurable-set,
  def-l-p-space-as-a-quotient-by-null-functions,
  def-nonnegative-lebesgue-integral, def-sobolev-space-wkp-and-its-norm,
  def-the-standard-smooth-step-function,
  def-weak-dirichlet-solution-for-a-divergence-form-operator,
  def-wkp-zero-as-a-sobolev-closure,
  lem-classical-derivatives-are-weak-derivatives,
  prop-order-and-scalar-rules-for-the-nonnegative-integral,
  thm-algebra-of-derivatives,
  thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral,
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions,
  thm-chain-rule, thm-complex-holder-minkowski-and-the-quotient-norm,
  thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz,
  thm-continuous-on-a-rectangle-is-riemann-integrable,
  thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem,
  thm-extreme-value-r, thm-ftc-second-part,
  thm-global-h-two-dirichlet-regularity, thm-lax-milgram, and
  thm-lebesgue-measure-of-a-box-of-every-kind.
- Additional repair suppliers: def-lebesgue-outer-measure,
  thm-lebesgue-measure-is-a-complete-measure, and
  thm-poincare-inequality-for-w-one-p-zero.

## Findings and repairs

### cor-shape-regular-affine-fe-primal-energy-approximation

The statement's polynomial-space condition was made explicit because the
general local finite-element definition only guarantees continuity. This
clarifies why the polynomial shape functions used in proof step 1.1 have finite
W¹,² norms; it does not narrow the stated polynomial finite-element setting.

Proof step 4.1 previously assumed the mesh facets were null. It now covers each
bounded affine facet by at most C₀Nᵈ⁻¹ slightly enlarged half-open boxes, each
of volume at most C₂N⁻ᵈ. The outer-measure definition gives outer measure at
most C₀C₂/N for every N; completeness makes each facet Lebesgue-null. The
finite face-to-face mesh then partitions the domain up to this null union, so
summing the local squared estimates gives the claimed global bound. The proof
contract now cites def-lebesgue-outer-measure,
thm-lebesgue-measure-is-a-complete-measure, and
thm-lebesgue-measure-of-a-box-of-every-kind.

Evidence opened: items/def-reference-finite-element-and-unisolvent-dofs.md
(Definition); items/def-matching-affine-simplicial-meshes.md (Definition);
items/def-lebesgue-outer-measure.md (Definition);
items/thm-lebesgue-measure-is-a-complete-measure.md (Statement); and
items/thm-lebesgue-measure-of-a-box-of-every-kind.md (Statement).

### cex-reentrant-corner-poisson-solution-not-h2

The former witness established a non-H² weak solution but did not exclude a
different H² solution, so it did not by itself refute the existential
statement. The repaired proof verifies that the L-shaped domain is bounded
Lipschitz using local graph coordinates, defines smooth radial and angular
cutoffs explicitly, proves the H¹ and H¹₀ claims, shows the forcing belongs to
L², and verifies the weak equation. It then proves uniqueness using the
Poincaré inequality on the width-two slab and shows the radial second
derivative is not square-integrable. Therefore no H² weak solution exists for
this forcing, which refutes the statement as written.

Evidence opened: items/def-the-standard-smooth-step-function.md (Definition);
items/thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions.md
(Statement); items/thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz.md
(Statement); items/thm-poincare-inequality-for-w-one-p-zero.md (Statement);
items/def-h-minus-one-as-the-dual-of-h-one-zero.md (Definition);
items/def-weak-dirichlet-solution-for-a-divergence-form-operator.md (Definition);
items/lem-classical-derivatives-are-weak-derivatives.md (Statement); and
items/thm-aubin-nitsche-l2-error-estimate-under-adjoint-regularity.md (Statement).

The proof contract now records the additional suppliers used for the cutoff,
polar integration, H⁻¹ datum, weak solution convention, classical derivative
identification, and uniqueness. Neither repaired item had a
verification.judge record to remove.

The CEX item now directly lists def-h-minus-one-as-the-dual-of-h-one-zero,
def-the-standard-smooth-step-function,
def-weak-dirichlet-solution-for-a-divergence-form-operator,
lem-classical-derivatives-are-weak-derivatives, thm-algebra-of-derivatives,
thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions,
thm-chain-rule,
thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz,
thm-extreme-value-r, and thm-poincare-inequality-for-w-one-p-zero.

No other defect was confirmed in the assigned items or page prose. The
conditional h^(r+s) corollary was read in its current post-repair form and its
final inequality follows from the Aubin–Nitsche estimate and Céa's estimate.

## Page verdicts

| Page | Verdict |
| --- | --- |
| ceas-lemma-and-aubin-nitsche-error-estimates | Sound after the two item repairs. Its summary retains the separate primal and dual approximation hypotheses and the curved-boundary geometry caveat. |
| ceas-lemma-and-aubin-nitsche-error-estimates-examples | Sound after the counterexample repair. Its summary does not overstate a convergence-rate lower bound. |

## Validation

- Final reflow: unchanged for both repaired item files.
- Final precheck: pass for both repaired items.
- proof-contract --strict on the two repaired items: 0 errors, 0 warnings.
- Batched proof-layout on both changed item paths: 2 items, 12 steps, 0 defects.

## Blocker

The repairs add direct dependencies to the two item frontmatters. The assigned
batch manifest and Step 1 readiness records still contain the pre-reader
dependency lists. Reader scope permits item and assigned A-page repairs, but
not edits to those run records. The owner must reconcile the batch-38 manifest
and readiness dependency mirrors before later dependency-level or final gates.
For cor-shape-regular-affine-fe-primal-energy-approximation the new direct
dependencies are def-lebesgue-outer-measure,
thm-lebesgue-measure-is-a-complete-measure, and
thm-lebesgue-measure-of-a-box-of-every-kind. The CEX additions are listed
above. The batch proof-contract entries were updated; run state was not changed.

## Coverage note

I opened every assigned item and page, the page prerequisites, and each direct
supplier used by the assigned proofs, including all six current-run batch-24
suppliers. I reviewed published suppliers at the interfaces used here; I did
not independently re-audit every supplier's full transitive proof closure.
