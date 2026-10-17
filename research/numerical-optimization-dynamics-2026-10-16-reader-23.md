# Step 3a reader report — batch 23

Run: numerical-optimization-dynamics-2026-10-16
Role: reader-23
Scope: batch 23

## Review basis

I read CLAUDE.md, README.md, SCHEMA.md, briefs/reader.md, and the assigned
batch-23 manifest. I also inspected the batch-specific coverage record,
cross-batch dependency record, authoring notes, and relevant proof-contract
clauses as evidence; none was treated as a verdict. The run status recomputed
from disk as 3a-read, with no worker in flight when checked.

The dispatch did not include a separate rendered evidence bundle. I reviewed
the current page and item carriers directly. I inspected the three referenced
source documents at the cited spans: Süli, §3.2 and §4.1(a), PDF pp. 15–31;
MIT 18.336 Lecture 5, pp. 1–7; and MIT 18.336 Lecture 6, pp. 1–5. The MIT PDFs
opened directly; I fetched the Oxford PDF after its initial browser timeout and
read the cited pages locally.

## Opened inventory

Assigned pages:

- library/numerical-pdes-and-spatial-discretization/elliptic-finite-difference-methods.md
- library/numerical-pdes-and-spatial-discretization/elliptic-finite-difference-methods-examples.md

Assigned items, read in supplier-first order:

1. items/def-rectangular-grid-and-dirichlet-flux-stencil.md
2. items/lem-discrete-summation-by-parts-poincare-and-inverse-bound.md
3. items/lem-variable-coefficient-flux-stencil-second-order-consistency.md
4. items/thm-elliptic-finite-difference-l2-error-on-rectangles.md
5. items/ex-first-order-neumann-closure-causes-first-order-error.md
6. items/ex-dirichlet-laplacian-has-uniform-infinity-inverse-bound.md
7. items/ex-variable-coefficient-flux-and-expanded-stencils.md
8. items/ex-five-point-laplacian-is-exact-on-quadratics.md

I opened the page summaries for the three page-level prerequisites named by the
batch manifest:

- library/pde/lax-milgram-and-weak-elliptic-solutions.md
- library/pde/sobolev-poincare-and-morrey-inequalities.md
- library/numerical-pdes-and-spatial-discretization/linear-scheme-stability-and-lax-equivalence.md

The assigned item proofs do not invoke results from these prerequisite pages.
The theorem's remark identifies the continuous pages as context; its proof
uses only the batch's local grid definition, inverse estimate, and residual
estimate. The in-run Lax-equivalence page concerns time evolution on a common
Banach space and is not used in the stationary elliptic argument.

## Findings by carrier

No repairs were made. No confirmed defect remained uneditable.

- def-rectangular-grid-and-dirichlet-flux-stencil: the index ranges, edge
  differences, face midpoint samples, operator signs, and edge-energy ranges
  are consistent. The constant-coefficient specialization is the positive
  five-point Dirichlet Laplacian.
- lem-discrete-summation-by-parts-poincare-and-inverse-bound: horizontal and
  vertical telescoping give the stated four boundary terms. The rowwise
  Cauchy–Schwarz estimate yields the Lx-squared discrete Poincaré constant;
  coercivity, finite-dimensional injectivity, and Cauchy–Schwarz then give the
  stated inverse bound Lx-squared over a0, uniformly in both mesh counts.
- lem-variable-coefficient-flux-stencil-second-order-consistency: the Taylor
  expansions use the stated C3 coefficient and C4 solution hypotheses. The
  discarded products are bounded by the displayed Cx and Cy constants, the
  common quadratic face-flux term cancels, and the negative divergence signs
  match the definition of f.
- thm-elliptic-finite-difference-l2-error-on-rectangles: the exact boundary
  samples make the error homogeneous on the boundary. The inverse estimate
  applies to the residual equation, and the count of weighted interior nodes
  gives the displayed square-root area factor. The smooth-solution caveat is
  explicit.
- ex-first-order-neumann-closure-causes-first-order-error: the proposed grid
  values satisfy the interior, Neumann, and Dirichlet rows; the recurrence
  proves uniqueness and the maximum error is exactly h.
- ex-dirichlet-laplacian-has-uniform-infinity-inverse-bound: the quadratic
  barrier and finite-grid minimum principle prove the 1/8 bound, including
  N=2.
- ex-variable-coefficient-flux-and-expanded-stencils: direct midpoint
  evaluation gives the exact difference hx-squared over 2 at each interior
  node.
- ex-five-point-laplacian-is-exact-on-quadratics: the central differences
  produce f=-4 exactly, and the local zero-kernel result gives uniqueness.

The source locators are accurate for the claims assigned to them: Süli's
one- and two-dimensional summation-by-parts, discrete Poincaré, stability,
and constant-coefficient error analysis; Lecture 5's Taylor stencil material
and one-sided Neumann boundary example; and Lecture 6's variable-conductivity
flux form, residual identity, and stability discussion. The batch's
variable-coefficient remainder and exact examples are established locally,
not attributed to those sources as proof substitutes.

## Page verdicts

- elliptic-finite-difference-methods: no defect found. Its summary matches the
  local scheme, energy estimate, smoothness assumptions, exact-boundary
  theorem, and weak-solution caveat.
- elliptic-finite-difference-methods-examples: no defect found. Its summary
  accurately lists the four example calculations.

## Edits, uneditable defects, and blockers

Edits: none.

Uneditable defects: none.

Blocker: none for the batch-23 mathematical review. I did not independently
recompute the unrelated whole-run dependency-level check mentioned in the
authoring notes.

## Coverage note

All two assigned pages, all eight assigned items, and all three named
page-level prerequisite summaries were opened. The prerequisite pages'
item-level proofs were not audited because no assigned proof or page summary
uses their results as a premise. The current batch's cited source spans were
checked; the Oxford PDF fetch succeeded on retry after the browser fetch timed
out. No repair or validation command was needed.
