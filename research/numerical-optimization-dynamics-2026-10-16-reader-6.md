# Step 3a reader report — batch 6

Run: numerical-optimization-dynamics-2026-10-16  
Batch: 6  
Role: independent reader

## Review scope and inventory

The run status at review start was running, with Step 3a read counting and no
reader artifacts yet recorded. The assignment manifest lists the following
pages and 21 carriers.

### Pages

- A page inequality-kkt-duality-and-optimality-certificates, at
  library/numerical-optimization-inverse-problems-and-uncertainty-quantification/inequality-kkt-duality-and-optimality-certificates.md.
- B companion inequality-kkt-duality-and-optimality-certificates-examples, at
  library/numerical-optimization-inverse-problems-and-uncertainty-quantification/inequality-kkt-duality-and-optimality-certificates-examples.md.

### Assigned items, in dependency groups

- Foundations: def-inequality-constrained-program-and-kkt-geometry;
  def-convex-program-duality-and-slater-condition;
  lem-finitely-generated-euclidean-cones-are-closed;
  lem-second-order-jet-on-a-regular-level-set.
- Level 1: def-kkt-residual-and-normal-cone;
  thm-farkas-alternative-for-finite-linear-systems;
  thm-mfcq-linearized-cone-equals-bouligand-tangent-cone;
  thm-critical-cone-equivalence-under-kkt;
  thm-lagrangian-weak-duality;
  thm-convex-value-function-support-at-relative-interior-domain-points.
- Level 2: thm-first-order-kkt-necessity-under-mfcq;
  thm-convex-kkt-sufficiency-and-normal-cone-certificate;
  thm-kkt-residual-vanishes-exactly-on-kkt-tuples;
  thm-second-order-sufficient-condition-on-the-critical-cone;
  thm-slater-strong-duality-and-dual-attainment.
- Level 3: prop-licq-implies-mfcq-and-unique-kkt-multipliers;
  ex-failed-constraint-qualification-blocks-kkt;
  ex-closed-convex-program-with-positive-duality-gap.
- Level 4: thm-second-order-necessary-condition-on-the-critical-cone;
  ex-active-set-quadratic-kkt-certificate.
- Level 5: ex-kkt-stationary-saddle-point.

The 16 direct external prerequisite items opened were:
cor-finite-dimensional-subspaces-are-closed;
cor-regular-level-set-local-graph-theorem;
cor-second-order-taylor-expansion-with-the-hessian;
def-ck-euclidean-maps-and-diffeomorphisms;
def-convex-subset-of-euclidean-space;
def-euclidean-inner-product;
def-jacobian-matrix-and-gradient;
lem-finite-dimensional-unit-spheres-are-sequentially-compact;
lem-projection-onto-a-closed-convex-set-has-the-variational-inequality;
thm-compact-iff-finite-intersection-property;
thm-convex-functions-on-open-convex-sets-are-locally-lipschitz;
thm-differentiable-convex-functions-and-gradient-inequality;
thm-differential-rank-is-lower-semicontinuous;
thm-extreme-value-metric;
thm-heine-borel-rn;
thm-nearest-point-in-a-nonempty-closed-convex-set.

I also opened the five direct current-run consumers outside batch 6 to check
whether the definition repair below affects them:
def-conic-optimization-primal-dual-models and
thm-fraction-to-boundary-and-primal-dual-gap-certificates (batch 59);
ex-consensus-admm-least-squares (batch 60);
def-factorable-box-convex-relaxation-interface and
thm-factorable-dual-certificate-is-valid-box-lower-bound (batch 69).
None uses the removable-inequality clause. The further manifest dependency
closure has consumers in batches 59, 69, and 100; no direct consumer statement
was changed, so no downstream proof repair was indicated.

The batch-6 proof-contract file was reviewed for all 21 item entries, including
citations, derivation maps, and checked boundary cases. The two pages, all
assigned items, and all direct external prerequisite items were opened. A
short vector-valued Taylor expansion is used componentwise from the cited
scalar result in the level-set and second-order arguments; the finite
component count closes this step immediately.

## Edit and evidence

Edited def-convex-program-duality-and-slater-condition. Its original
removal sentence allowed dropping an extended-real constraint that is
nonpositive on the current common domain, even when its function domain is
what restricts that common domain. For example, with objective zero and
g(x) equal to the indicator of the singleton {0}, the common domain is {0}
and g is zero there. Dropping g from the function list changes the common
domain and feasible set to the whole real line.

The definition now allows deletion only when the domain formed without that
function is contained in its domain and the inequality is nonpositive
throughout that larger domain. Then deleting the function and test leaves the
common domain unchanged. Deletions are made one at a time with the condition
recomputed. A test redundant only on the existing common domain is explicitly
not enough.

I updated research/numerical-optimization-dynamics-2026-10-16-batch-6.proof-contracts.json:
the three batch-6 citations quoting this Definition now match its edited text;
the definition boundary evidence records the domain-preserving deletion rule;
and the Slater degenerate-boundary evidence now names that rule. The changed
item had no verification.judge record to remove.

The four assigned direct consumers of the edited Definition were checked:
thm-lagrangian-weak-duality;
thm-convex-value-function-support-at-relative-interior-domain-points;
thm-slater-strong-duality-and-dual-attainment; and
ex-closed-convex-program-with-positive-duality-gap. Their arguments use the
common domain and the remaining listed inequalities, but do not rely on
deleting an inequality whose domain changes that common domain. No consumer
repair was needed. The five direct consumers outside batch 6 listed above
were likewise checked for the changed clause and do not use it.

For the edited item, reflow reported unchanged; precheck reported 0 checked,
0 failing; proof-layout reported 1 item, 0 steps, 0 defects. No other item or
page was edited.

## Unedited defects

No mathematical defect remains unedited in the assigned carriers. No
withdrawal is proposed. One out-of-scope evidence defect remains: citation F3
for ex-consensus-admm-least-squares in
research/numerical-optimization-dynamics-2026-10-16-batch-60.proof-contracts.json
still quotes “An inequality is trivial ...; trivial inequalities may be
removed without changing the feasible set,” which is no longer the current
Definition. The item itself was opened and does not use the removable-inequality
rule. I left the other-batch contract untouched under this dispatch scope.

## Page verdicts

- inequality-kkt-duality-and-optimality-certificates (A): pass after the
  definition clarification. Its summary accurately distinguishes the KKT,
  convex-duality, and second-order hypotheses.
- inequality-kkt-duality-and-optimality-certificates-examples (B): pass. Its
  four summaries match the calculations in the assigned examples.

## Blocker and coverage limitation

No mathematical blocker remains. The first four level-0 assigned carriers
were opened before their external suppliers; after opening those suppliers,
their claims were assessed against the supplier statements and proofs without
rereading those carriers. The batch-60 contract quote noted above remains
outside this reader's edit scope.
