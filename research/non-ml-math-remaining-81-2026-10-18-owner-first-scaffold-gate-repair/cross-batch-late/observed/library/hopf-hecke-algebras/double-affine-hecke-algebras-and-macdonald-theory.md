---
page: double-affine-hecke-algebras-and-macdonald-theory
title: "Double-Affine Hecke Algebras and Macdonald Theory"
status: draft
items:
  - def-daha-a1-root-datum-and-parameter-conventions
  - lem-daha-a1-bernstein-quotients-are-laurent
  - lem-daha-a1-q-affine-automorphisms-linearly-independent
  - def-daha-a1-double-affine-hecke-algebra
  - lem-daha-a1-affine-normal-words-span
  - lem-daha-a1-polynomial-operators-satisfy-presentation
  - def-daha-a1-polynomial-representation
  - thm-daha-a1-polynomial-representation-faithful
  - def-daha-a1-symmetric-macdonald-operator
  - rem-daha-skein-and-physical-knot-interfaces-require-specific-maps
  - lem-daha-a1-macdonald-operator-preserves-orbit-sums
  - lem-daha-a1-y-sum-restricts-to-macdonald-operator
  - thm-daha-a1-macdonald-eigenfunctions
examples: []
---

This draft proves the double-affine presentation and polynomial representation for the selected root system $A_1$, including generic faithfulness and the symmetric Macdonald eigenbasis. It fixes the independent translation and Hecke parameters and records the specialization boundary.

## Selected root system and conventions

The local construction uses the reduced root system $A_1$, with weight lattice $P=\mathbb Z\rho$, root $\alpha=2\rho$, and independent parameters $q,t$. The Hecke generators satisfy $(T_i-t)(T_i+t^{-1})=0$; $q$ controls the double-affine translations. This symmetric normalization is stated explicitly at every operator formula.

## Locally proved construction

- [[def-daha-a1-root-datum-and-parameter-conventions]] fixes the lattice, affine reflections, length-zero symmetry, and finite Laurent forms of the Bernstein quotients.
- [[def-daha-a1-double-affine-hecke-algebra]] gives the root-datum DAHA quotient presentation. [[lem-daha-a1-bernstein-quotients-are-laurent]] verifies the cross-relation quotients, and [[lem-daha-a1-affine-normal-words-span]] proves spanning without asserting independence.
- [[lem-daha-a1-polynomial-operators-satisfy-presentation]] checks every quadratic, affine, and lattice relation on $K[z,z^{-1}]$. [[thm-daha-a1-polynomial-representation-faithful]] proves faithfulness for non-root-of-unity $q$ and nonzero $t$ by a local leading-substitution argument.
- [[def-daha-a1-symmetric-macdonald-operator]] defines the rank-one symmetric difference operator. [[lem-daha-a1-macdonald-operator-preserves-orbit-sums]] proves its triangular action; [[lem-daha-a1-y-sum-restricts-to-macdonald-operator]] derives it from the DAHA translations and proves the commuting family statement; [[thm-daha-a1-macdonald-eigenfunctions]] constructs and uniquely identifies the monic eigenbasis under the exact nonsingularity condition.

## Boundaries and open interfaces

The representation and eigenbasis claims use the parameter ranges stated in their items. At roots of unity the q-affine substitutions can coincide; at $t^2=q^{-N}$ eigenvalue separation can fail. [[cex-daha-a1-eigenvalue-separation-fails-at-q-one]] gives the explicit $q=1$ boundary.

The A-page prerequisite [[affine-hecke-algebras-beyond-type-a]] remains a planning route. Its current draft supplies an Iwahori–Matsumoto definition and basis, but its general Bernstein PBW remark is explicitly unresolved. The published [[thm-hh-affine-type-a-bernstein-pbw]] is type A affine only and supplies no DAHA generators, DAHA PBW theorem, or Macdonald eigenfunction proof. This batch does not use either result as a logical premise.

[[rem-daha-skein-and-physical-knot-interfaces-require-specific-maps]] preserves the skein/DAHA and physical-knot interface claims. A specific skein algebra map, knot parameter correspondence, or physical operator model remains a separate proof obligation.

Companion: [[double-affine-hecke-algebras-and-macdonald-theory-examples]].
