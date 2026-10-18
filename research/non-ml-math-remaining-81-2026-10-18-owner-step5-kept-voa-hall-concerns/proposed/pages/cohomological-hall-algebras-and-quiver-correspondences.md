---
page: cohomological-hall-algebras-and-quiver-correspondences
title: Cohomological Hall Algebras and Quiver Correspondences
status: draft
items:
- lem-general-linear-quotient-stacks-are-algebraic
- def-quiver-representation-stacks-and-exact-sequence-correspondences
- lem-quiver-exact-sequence-correspondence-is-smooth-and-proper
- lem-algebraic-milnor-neighborhoods-admit-controlled-sector-transport
- thm-normalized-rational-vanishing-cycles-have-coherent-operations
- rem-preprojective-coha-and-nakajima-action-source-boundaries
- def-intrinsic-quotient-stack-borel-moore-grading
- def-quiver-potential-and-monodromic-vanishing-cycle-data
- lem-quiver-parabolic-levi-borel-model-comparisons
- thm-quiver-quotient-stack-borel-moore-operation-package
- def-untwisted-quiver-cohomological-hall-algebra
- lem-quiver-potential-trace-is-additive-on-extensions
- thm-untwisted-quiver-coha-is-associative-and-unital
- lem-standard-rational-quiver-vanishing-cycles-realize-critical-correspondences
- def-critical-quiver-coha-from-vanishing-cycle-data
- thm-critical-quiver-coha-associative-under-coherence-axioms
examples: []
requires:
  - finitary-ringel-hall-algebras
  - dg-and-homological-algebra-foundations
  - graded-quiver-algebras-and-derived-tensor-functors

---

This page records the geometric construction and conventions for quiver
cohomological Hall algebras (CoHAs), separates the ordinary and potential
dependent constructions, and reports preprojective/Yangian actions with their
source hypotheses. The ordinary quotient-stack operation package and the standard rational vanishing-cycle realization are proved locally, followed by flag associativity.

Companion: [[cohomological-hall-algebras-and-quiver-correspondences-examples]].

## Reading prerequisites

The planned reading order is [[finitary-ringel-hall-algebras]],
[[dg-and-homological-algebra-foundations]], and
[[graded-quiver-algebras-and-derived-tensor-functors]]. These are page-level
reading prerequisites from the plan, not additional item-level premises; any
actual logical dependencies remain named in each item's `deps` (including the
path-ring convention used here). The current Ringel–Hall draft is count
theoretic, the DG foundations supply cohomological DGA/module definitions, and
the graded-quiver page supplies neighboring derived-tensor context; none
supplies the equivariant Borel–Moore operations for the quiver quotient-stack
correspondences. The graded-quiver route supplies context for the later KLR
reuse boundary. The local KLR equivariant-Ext realization cited below is an
adjacent flag technique; it supplies neither the CoHA product nor its action.

## Scope and local results

### Untwisted CoHA

For a finite quiver $Q$ over $\mathbb C$, the page defines the
representation spaces $\operatorname{Rep}_Q(\mathbf d)$, their
change-of-basis quotient stacks, and the exact-sequence correspondence with
the subrepresentation first and the quotient second.
It proves the map $q$ smooth of relative stack dimension
$-\chi_Q(\mathbf b,\mathbf a)$, and $p$ representable proper, with loops,
multiple arrows, zero coordinates, and the empty quiver included.

The untwisted product is $p_*q^!(\alpha\boxtimes\beta)$ on rational intrinsic quotient-stack homology
$\mathbb H_i([X/G])=H_{i+2\dim G}^{\mathrm{BM},G}(X)$. This explicit regrading distinguishes it from the variety-normalized published equivariant Borel–Moore definition. Its convention has the subrepresentation first, no Euler-form sign twist or automorphism denominators, and no mixed-Hodge/Tate enrichment. The intrinsic homological shift is $-2\chi_Q(\mathbf b,\mathbf a)$; conversion through the dimension of each smooth quotient stack gives the usual cohomological shift $-2\chi_Q(\mathbf a,\mathbf b)$.

The parabolic/Levi comparison uses actual induced varieties and coherent frame models. Smooth pullback across the nonrepresentable map $q$ is constructed as a vector-bundle pullback composed with the inverse of an affine-bundle pullback; proper pushforward is the incidence trace in one fixed total-dimension general linear group. The operation package proves proper/smooth base change and Cartesian pasting on the flag diagrams. Thus the two parenthesizations are the same actual three-step flag pull-push operation, and the zero representation gives the unit. These statements include all finite quivers with loops and repeated arrows. The algebraic direct sum requires no completion.

### Potential dependent and critical CoHA

A quiver potential is a cyclic class of a finite linear combination of oriented cycles. Its trace function is invariant under change of basis and additive on exact sequences. The critical construction uses rational bounded algebraically constructible vanishing cycles with positive-loop monodromy. The exact normalization is $V_f=\phi_f[-1]$, so $V_0\mathbb Q=\mathbb Q$ and the reduced $H^0$ of the $x^2$ Milnor fibre occurs in coefficient degree one.

The local Milnor-neighborhood proof supplies sector transport and the actual Thom–Sebastiani isomorphism. Principalization of the function ideal reduces the constructibility argument to a simple-normal-crossing monomial; the proper, smooth, duality and support maps are proved coherent. On an extension correspondence, Thom–Sebastiani identifies the vanishing cycles of the restricted trace function with the pullback of the diagonal coefficients. Proper functoriality gives a coefficient morphism to the total-dimension theory after duality; it does not assert a closed-restriction isomorphism.

The standard homological coefficient on $X/G$ is $K=D_X^G(V_f\mathbb Q)[-2\dim G]$. This realizes the intrinsic shift $-2\chi_Q(\mathbf b,\mathbf a)$, retains all critical values, and gives an associative unital critical CoHA for every finite quiver with potential. For zero potential it recovers the ordinary intrinsic CoHA with the same maps and grading. The more general construction with any supplied coherent coefficient datum remains available. The algebraic direct sum needs no completion. Mixed Hodge enrichment and off-shell rapid-decay cohomology are separate theories and are not asserted by this rational realization.

### Preprojective, Nakajima, and Yangian scope

The source report distinguishes three claims: the arbitrary-finite-quiver
preprojective CoHA/action in Yang–Zhao's stated oriented-cohomology setup; the
ordinary Kac–Moody action on top-degree homology of the Lagrangian cores for
quivers with no edge loops; and the narrower Yangian comparison with its no-edge-loop condition,
sign twist, parameter specialization, torsion quotient, ADE isomorphism
range, and stated intertwining action. These are source-reported results, not
local action proofs. No general CoHA–Yangian identification is claimed.

## Dependencies, sources, and reuse boundaries

- Page-level requirements above are reading order only; they are not imported
  as logical proof suppliers.
- The local KLR equivariant-Ext realization
  ([[thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes]])
  is an adjacent flag-correspondence technique, not the CoHA product or its
  action theorem.
- The ordinary Hall algebra in
  [[finitary-ringel-hall-algebras]] counts subobjects in a finitary category;
  it is distinct from this geometric equivariant construction.
- The source coverage, actual inspected supplier interfaces, local operation and realization proofs, and source dispositions are recorded in
  [batch 55 notes](../../research/non-ml-math-remaining-81-2026-10-18-batch-55.notes.md)
  and the associated source-evidence file.

Apply the [definition and diagram contracts](../../research/physics-algebras-planning-2026-10-17/definition-and-diagram-contracts.md)
and [prerequisite and repair holds](../../research/physics-algebras-planning-2026-10-17/prerequisites.md).
Diagrams describe the correspondence maps; proofs use the matrix and flag
arguments, not diagrammatic inference. Existing carriers keep their canonical
identities and placements.
