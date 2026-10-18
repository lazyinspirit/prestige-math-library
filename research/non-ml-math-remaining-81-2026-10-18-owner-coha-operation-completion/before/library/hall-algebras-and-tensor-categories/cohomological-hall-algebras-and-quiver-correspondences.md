---
page: cohomological-hall-algebras-and-quiver-correspondences
title: "Cohomological Hall Algebras and Quiver Correspondences"
status: draft
items:
  - lem-general-linear-quotient-stacks-are-algebraic
  - def-quiver-representation-stacks-and-exact-sequence-correspondences
  - lem-quiver-exact-sequence-correspondence-is-smooth-and-proper
  - def-quiver-potential-and-monodromic-vanishing-cycle-data
  - rem-preprojective-coha-and-nakajima-action-source-boundaries
  - def-untwisted-quiver-cohomological-hall-algebra
  - lem-quiver-potential-trace-is-additive-on-extensions
  - thm-untwisted-quiver-coha-is-associative-and-unital
  - def-critical-quiver-coha-from-vanishing-cycle-data
  - thm-critical-quiver-coha-associative-under-coherence-axioms
examples: []
---

This page records the geometric construction and conventions for quiver
cohomological Hall algebras (CoHAs), separates the ordinary and potential
dependent constructions, and reports preprojective/Yangian actions with their
source hypotheses. The local flag proof is supplied, but the ordinary
quotient-stack Borel–Moore operation interface still needs a local supplier;
the affected product and associativity items are escalated.

Companion: [[cohomological-hall-algebras-and-quiver-correspondences-examples]].

## Reading prerequisites

The planned reading order is [[finitary-ringel-hall-algebras]] and
[[dg-and-homological-algebra-foundations]]. These are page-level reading
prerequisites from the plan, not item-level logical dependencies. The current
Ringel–Hall draft is count theoretic, and the current DG foundations supply
cohomological DGA/module definitions; neither supplies equivariant
Borel–Moore operations for the quiver quotient-stack correspondences.

## Scope and local results

### Untwisted CoHA

For a finite quiver $Q$ over $\mathbb C$, the page defines the
representation spaces $\operatorname{Rep}_Q(\mathbf d)$, their
change-of-basis quotient stacks, and the exact-sequence correspondence with
the subrepresentation first and the quotient second.
It proves the map $q$ smooth of relative stack dimension
$-\chi_Q(\mathbf b,\mathbf a)$, and $p$ representable proper, with loops,
multiple arrows, zero coordinates, and the empty quiver included.

The intended untwisted product is $p_*q^!(\alpha\boxtimes\beta)$ on rational
equivariant Borel–Moore homology. Its convention has the subrepresentation as
the first factor, no Euler-form sign twist, no automorphism denominators, and
no extra Tate twist. The shift is recorded in Borel–Moore grading; conversion
to the usual equivariant-cohomology grading gives the source shift
$-2\chi_Q(\mathbf a,\mathbf b)$.

The flag argument identifies both parenthesizations with the same
three-step exact-sequence flag and checks the shifts. However, the current
equivariant Borel–Moore supplier handles operations on schemes with a fixed
acting group. It does not construct the required operations across the
parabolic-to-Levi group map in $q$, or the parabolic-to-general-linear group
map in $p$. The CoHA product and its unconditional associativity theorem
remain escalated pending that quotient-stack operation bridge.

### Potential dependent and critical CoHA

A quiver potential is a cyclic class of a finite linear combination of
oriented cycles; its trace function is proved invariant under change of basis
and additive on exact sequences. The critical construction is kept distinct
from the ordinary CoHA. It specifies on-shell support, monodromy, coefficient
category, degree/orientation shifts, additive critical-value sets, and the
proper, smooth, and Thom–Sebastiani operations required of a coefficient
package. The associativity argument is conditional on that package.

This page does not establish that standard monodromic mixed-Hodge-module
vanishing cycles supply the full equivariant operation/orientation package.
The local conditional critical construction also depends on the unresolved
ordinary quotient-stack Borel–Moore interface above. Off-shell rapid-decay
cohomology is a separate construction and is not identified with this
on-shell version.

### Preprojective, Nakajima, and Yangian scope

The source report distinguishes three claims: the arbitrary-finite-quiver
preprojective CoHA/action in Yang–Zhao's stated oriented-cohomology setup; the
ordinary Kac–Moody action on the Lagrangian core for quivers with no edge
loops; and the narrower Yangian comparison with its no-edge-loop condition,
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
- The source coverage, actual inspected supplier interfaces, unresolved
  quotient-stack operation bridge, and source dispositions are recorded in
  [batch 55 notes](../../research/non-ml-math-remaining-81-2026-10-18-batch-55.notes.md)
  and the associated source-evidence file.

Apply the [definition and diagram contracts](../../research/physics-algebras-planning-2026-10-17/definition-and-diagram-contracts.md)
and [prerequisite and repair holds](../../research/physics-algebras-planning-2026-10-17/prerequisites.md).
Diagrams describe the correspondence maps; proofs use the matrix and flag
arguments, not diagrammatic inference. Existing carriers keep their canonical
identities and placements.
