---
page: group-c-star-algebras-and-the-fell-unitary-dual
title: "Group C Star Algebras and the Fell Unitary Dual"
status: draft
requires: [the-modular-function-and-l1-group-algebras, unitary-representations-positive-type-and-gns, peter-weyl-theory-for-general-compact-groups, banach-algebras-spectrum-and-holomorphic-functional-calculus, gelfand-theory-and-commutative-c-star-algebras]
items:
  - def-integrated-form-of-a-unitary-representation
  - def-nondegenerate-star-representation-of-a-banach-star-algebra
  - def-state-on-a-c-star-algebra
  - def-unitary-dual-of-a-locally-compact-group
  - def-weak-containment-of-unitary-representations
  - lem-c-star-positive-calculus-and-order-estimates
  - lem-operators-commuting-with-a-point-separating-family-of-multiplications-are-multiplications
  - lem-positive-type-functions-satisfy-translation-estimates
  - lem-quadratic-form-of-a-self-adjoint-operator-attains-the-norm
  - rem-the-kernel-map-need-not-be-injective-outside-type-i
  - def-fell-topology-on-the-unitary-dual
  - lem-a-nondegenerate-l1-representation-recovers-a-unitary-group-representation
  - lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units
  - lem-integrated-forms-are-nondegenerate-star-representations
  - lem-the-norm-of-a-positive-element-is-the-supremum-of-state-values
  - thm-raikov-compact-open-and-weak-star-topologies-coincide-on-normalized-positive-type-functions
  - cor-the-unitary-dual-of-a-compact-group-is-fell-discrete
  - def-full-group-c-star-algebra
  - def-reduced-group-c-star-algebra
  - lem-fell-closure-of-a-single-representation-is-its-weak-containment-closure
  - lem-quotient-of-a-c-star-algebra-by-a-closed-two-sided-ideal-is-a-c-star-algebra
  - lem-value-of-a-state-at-a-self-adjoint-element-lies-between-the-spectral-bounds
  - thm-unitary-representations-and-nondegenerate-l1-star-representations-correspond
  - lem-states-of-a-concretely-represented-c-star-algebra-are-weak-star-limits-of-vector-states
  - lem-the-full-group-c-star-seminorm-is-finite-and-separates-the-required-quotient
  - thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g
  - cor-the-abelian-group-c-star-algebra-recovers-pontryagin-duality
  - def-primitive-ideal-space-of-a-group-c-star-algebra
  - lem-irreducible-group-vector-functionals-are-extreme-in-the-positive-dual-ball
  - lem-kernel-inclusion-implies-the-norm-inequality
  - lem-kernel-inclusion-implies-weak-containment
  - lem-weak-containment-implies-kernel-inclusion
  - thm-the-canonical-map-from-full-to-reduced-group-c-star-algebra
  - lem-irreducible-weak-containment-in-a-family-selects-one-coefficient
  - thm-weak-containment-is-equivalent-to-kernel-inclusion
  - lem-normalized-coefficient-approximation-for-irreducible-weak-containment
  - thm-the-kernel-map-is-a-homeomorphism-onto-the-primitive-ideal-space
  - lem-fell-closure-is-characterized-by-weak-containment
  - lem-fell-neighbourhoods-of-an-irreducible-representation-are-saturated-under-weak-equivalence
  - lem-weak-containment-of-the-trivial-representation-and-almost-invariant-vectors
  - prop-the-unitary-dual-to-primitive-ideal-map-is-continuous-and-surjective
examples: []
---

This page develops the group C*-algebra packaging of unitary representation
theory and the Fell topology on the unitary dual. Starting from the integrated
form of a unitary representation on $L^1(G)$, it proves that nondegenerate
star-representations of $L^1(G)$ are exactly the integrated forms of strongly
continuous unitary representations ([[thm-unitary-representations-and-nondegenerate-l1-star-representations-correspond]]),
constructs the full group C*-algebra $C^*(G)$ as the completion in the maximal
norm ([[def-full-group-c-star-algebra]]), and shows that nondegenerate
star-representations of $C^*(G)$ are again exactly the unitary
representations of $G$
([[thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g]]).
The reduced algebra $C^*_r(G)$ is the norm closure of the integrated left
regular representation, and the canonical star-homomorphism
$C^*(G)\twoheadrightarrow C^*_r(G)$ is analysed
([[thm-the-canonical-map-from-full-to-reduced-group-c-star-algebra]]).

On the dual side, the page defines weak containment, proves Raikov's
compact-open/weak-*-coincidence for normalized positive-type functions, and
develops the Fell topology through coefficientwise neighbourhoods. The main
structural results are that weak containment is equivalent to inclusion of
$C^*$-kernels, that the kernel map exhibits the primitive ideal space as the
space of weak equivalence classes, and that Fell convergence and closure are
governed by weak containment of direct sums. The A page closes with the
abelian case, where $C^*(G)$ recovers Pontryagin duality
([[cor-the-abelian-group-c-star-algebra-recovers-pontryagin-duality]]), and
with the canonical full-to-reduced comparison. Every item is a draft authored
under the Axiom of Choice where the GNS, direct-sum and dual constructions
require it; selective prerequisites such as the nondegeneracy convention
([[def-nondegenerate-star-representation-of-a-banach-star-algebra]]) are
recorded explicitly rather than assumed.
