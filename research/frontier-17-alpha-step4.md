# Frontier 17 — lead Alpha step-4 edge adjudication

Stage: step4-adjudicate-1. The predecessor check found no earlier step-4
adjudication result or log; this is the first round for this lane. The mechanical
splice completed all nine batch receipts, and
research/frontier-17-splice-refusals.json contains no declared-requires
refusal. The work below therefore adjudicates the ten errors emitted by the
post-splice validate-plan run.

No edge is forward. Every retained target has order strictly below its declaring
page. I did not run splice-plan.

## Batch 1: frattini-subgroups-and-the-burnside-basis-theorem-examples

### ex-frattini-subgroup-of-a-cyclic-p-group → lem-order-of-a-power-in-a-finite-cyclic-group

Evidence read: the batch strategy explicitly uses the cyclic power-order formula
to compute \(P^p=\langle g^p\rangle\). The Conrad harvest in
research/frontier-17-batch-1.coverage.json includes Example 6.9, the Frattini
subgroup of a nontrivial cyclic \(p\)-group. The target item is on the published
A page primitive-roots-and-unit-groups-modulo-n, order 57.001, and states
\(\operatorname{ord}(g^a)=m/\gcd(a,m)\) for a generator of a cyclic group of
finite order \(m\). That is exactly the proposition the example consumes.

Decision: **apply the backward edge**.

Exact edit: add primitive-roots-and-unit-groups-modulo-n to the requires
array of frattini-subgroups-and-the-burnside-basis-theorem-examples in both
research/frontier-17-batch-1.pages.json and research/plan-spec.json.

## Batch 7: applications-of-the-fundamental-group

### Polynomial items → the-complex-exponential-and-eulers-formula

Evidence read: the Hatcher and May harvests both include the
fundamental-group proof of the fundamental theorem of algebra. The two planned
polynomial-loop lemmas and their theorem use the formal complex-polynomial
definition, complex-plane continuity, and the published minimum-modulus proof
route. The target A page is published at order 189 and contains
def-complex-polynomial-degree-and-monic,
def-complex-metric-convergence-and-continuity, and
thm-fundamental-theorem-of-algebra-minimum-modulus-proof.

Decision: **apply the backward edge**.

Exact edit: add the-complex-exponential-and-eulers-formula to the A page's
requires in research/frontier-17-batch-7.pages.json and
research/plan-spec.json.

### Polynomial items → field-extensions-and-the-complex-numbers

Evidence read: both polynomial-loop lemmas use
lem-complex-conjugation-and-modulus-laws. The published target A page at order
54 contains that lemma, whose Statement gives definiteness, multiplicativity,
and subadditivity of complex modulus. These are used directly in normalization
and leading-term estimates.

Decision: **apply the backward edge**. Although this page is also in the
transitive closure of the-complex-exponential-and-eulers-formula, the direct
relationship is mathematically real and keeps the cited modulus result explicit.

Exact edit: add field-extensions-and-the-complex-numbers to the A page's
requires in the batch manifest and research/plan-spec.json.

### lem-loop-products-in-a-topological-group-agree-up-to-homotopy → uniform-spaces

Evidence read: May Problem 3 is harvested specifically for pointwise loop
multiplication and the abelian fundamental group of a topological group. The
target A page is published at order 279 and contains def-topological-group,
which states that multiplication and inversion are continuous. The planned
square homotopy uses precisely continuous group multiplication.

Decision: **apply the backward edge**.

Exact edit: add uniform-spaces to the A page's requires in the batch
manifest and research/plan-spec.json.

### applications-of-the-fundamental-group-examples → the-complex-exponential-and-eulers-formula

Evidence read: ex-cubic-polynomial-large-circle-loop-has-degree-three uses
def-complex-polynomial-degree-and-monic from the published order-189 target.
Its B page already requires its A companion.

Decision: **apply through the companion closure**. The A-page edit above puts
the target in the B page's declared closure; adding the same direct edge to the
B page would duplicate the companion's prerequisite without changing the
closure.

Exact edit: no separate B-page line; the A-page requires edit is the
disposition for this induced edge.

## Batch 8: the-identity-theorem-and-the-open-mapping-theorem-examples

### cex-boundary-accumulation-does-not-force-holomorphic-identity → ex-punctured-line-versus-punctured-plane

Evidence read: the target is published on
the-topology-of-euclidean-space-examples, a B page, and says that
\(\mathbb R^2\setminus\{0\}\) is polygonally connected by citing
lem-punctured-rn-is-polygonally-connected. The new counterexample needs only
that connectedness result, together with its existing complex-plane dictionary
and complex-domain definition, to verify that the punctured plane is a domain.
The B-page example itself contributes no further load-bearing fact.

Decision: **strike the B-leaf dependency and rebind it to the A-page lemma**.

Exact edits in both research/frontier-17-batch-8.pages.json and
research/plan-spec.json: replace ex-punctured-line-versus-punctured-plane by
lem-punctured-rn-is-polygonally-connected. The batch proof contract now quotes
that lemma's exact Statement and assigns it to the domain-verification step.
This also clears the corresponding undeclared-prereq line naming
the-topology-of-euclidean-space-examples; no page edge to a B leaf was added.

### cex-flat-smooth-function-has-no-holomorphic-extension → cex-smooth-function-not-equal-to-its-maclaurin-series

Evidence read: the target is published on the-exponential-function-examples,
a B page. Its construction ultimately relies on another B-page example for
flatness. No published A-page item states the exact smooth-flat construction.
The Hunter source recorded in the batch notes supports the construction, while
published A-page results already supply the complete local proof machinery:
exponential domination and positivity, differentiation of exponential and
powers, the product and chain rules, differentiability-implies-continuity, and
the definition of smoothness.

Decision: **strike the B-leaf dependency and repair the scaffold route**. This
is the real scaffold finding in the B-leaf subclass: adding a page edge would be
invalid, and merely deleting the dependency would leave flatness unproved.

Exact edits in the batch manifest and research/plan-spec.json: replace the
old strategy by an inline induction proving that every derivative off zero is a
polynomial in \(1/x\) times \(\exp(-1/x^2)\), use exponential domination to
extend every derivative at zero with value zero, and then apply the holomorphic
coefficient and Taylor theorems. Replace the B-page dependency with the ten
published A-page dependencies named by that route. The batch proof-contract
entry was expanded to six derivation steps with ten exact source clauses; each
published quote was checked byte-for-byte against its source item.

### fs-injective-real-differentiable-map-has-nonzero-jacobian → cex-a-c-one-bijection-of-the-line-that-is-not-a-diffeomorphism

Evidence read: the target is published on
the-inverse-function-theorem-completed-examples, a B page. Its cube-map
construction is not needed by the new planar witness: the current strategy
already proves injectivity of \(F(x,y)=(x^3,y)\) from lem-power-monotone,
computes the derivative from lem-derivative-of-a-power and the
total-derivative items, and evaluates the Jacobian directly. The target's
additional conclusion about the inverse failing to be differentiable is not
used.

Decision: **strike the wrong/redundant B-leaf dependency**.

Exact edits in the batch manifest and research/plan-spec.json: remove
cex-a-c-one-bijection-of-the-line-that-is-not-a-diffeomorphism; retain the
existing A-page dependencies and strategy. This also clears the
undeclared-prereq line naming
the-inverse-function-theorem-completed-examples; no B-page edge was added.

## Verification and residual diagnostic

- node tools/validate-plan.mjs research/plan-spec.json exits 0; all ten
  original b-leaf and undeclared-prereq errors are gone.
- JSON parsing passes for the shared plan, the three edited manifests, and the
  updated batch-8 proof contract.
- node tools/content-policy.mjs --manifest-only over batches 1, 7, and 8
  reports 120 scoped item(s), 0 error(s), 0 warning(s).
- node tools/splice-plan.mjs --run frontier-17 --verify reports no
  disagreement in any edited batch. It remains red on four pre-existing
  manifest/plan disagreements in batches 2, 4, and 5 concerning unbuilt
  volume/surface-area pages. Those rows were not part of this dispatch's
  validate-plan failure and were left untouched for the engine's licensed
  per-batch update/re-adjudication route.

No owner-only reading-order change and no step-4 blocker remains in the
adjudicated edge set.
