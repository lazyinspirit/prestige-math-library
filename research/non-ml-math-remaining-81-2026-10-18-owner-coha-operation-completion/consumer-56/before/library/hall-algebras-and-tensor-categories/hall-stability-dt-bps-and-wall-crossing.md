---
page: hall-stability-dt-bps-and-wall-crossing
title: "Hall Integration, Stability, DT/BPS Invariants, and Wall Crossing"
status: draft
requires:
  - derived-hall-algebras
  - motivic-hall-algebras-and-integration
  - cohomological-hall-algebras-and-quiver-correspondences
  - hall-algebra-modules-and-geometric-actions
items:
  - def-finite-acyclic-quiver-stability-data
  - lem-finite-acyclic-quiver-representations-are-finitary-hereditary-with-euler-form
  - lem-upper-half-plane-sum-phase-between
  - lem-quiver-semistable-loci-are-open
  - lem-quiver-hardernarasimhan-filtrations-exist-are-unique-and-descend
  - lem-finite-field-quiver-semistable-stack-points-are-hall-groupoids
  - def-subobject-first-completed-finite-quiver-hall-algebra-and-tori
  - lem-finite-quiver-hall-extension-orbit-count
  - thm-finite-quiver-euler-and-skew-integration-is-multiplicative
  - thm-finite-quiver-hall-wall-crossing
  - rem-finite-quiver-hall-counts-and-dt-bps-interpretation
examples: []
---

This page proves the finite-field counting branch of Hall wall crossing for
every finite acyclic quiver, including wild quivers. Fix $k=\mathbb F_q$,
finite-dimensional representations, and arbitrary vertex charges in the open
upper half-plane. The local HN proof gives existence, uniqueness, and descent
from the algebraic closure. The Hall convention is subobject first; its
Euler and skew integrations are both proved with their exact twists.

## Construction order

1. [[def-finite-acyclic-quiver-stability-data]] fixes the representation,
   Euler, phase, semistability, and quotient-stack conventions.
2. [[lem-finite-acyclic-quiver-representations-are-finitary-hereditary-with-euler-form]]
   supplies the small finitary abelian category, a length-one projective
   resolution, and the Hom-minus-Yoneda-Ext$^1$ Euler formula without
   identifying Yoneda and derived Ext$^1$.
3. [[lem-upper-half-plane-sum-phase-between]] proves the phase comparison
   for sums of central charges used in the HN argument.
4. [[lem-quiver-semistable-loci-are-open]] proves openness by an explicit
   subrepresentation incidence construction. Its projective-closedness
   argument records the closed-embedding and projective-properness AC branches
   separately.
5. [[lem-quiver-hardernarasimhan-filtrations-exist-are-unique-and-descend]]
   proves the choice-free HN result and finite-field descent.
6. [[lem-finite-field-quiver-semistable-stack-points-are-hall-groupoids]]
   trivializes the finite-field general-linear torsors and identifies the
   semistable stack mass with the finite Hall groupoid.
7. [[def-subobject-first-completed-finite-quiver-hall-algebra-and-tori]],
   [[lem-finite-quiver-hall-extension-orbit-count]], and
   [[thm-finite-quiver-euler-and-skew-integration-is-multiplicative]]
   fix the product order, prove the extension orbit formula, and establish
   both continuous integration maps.
8. [[thm-finite-quiver-hall-wall-crossing]] proves the completed HN product
   and its Euler and skew integrated wall identities, including strict
   semistables.

The finite-field series are Euler-normalized groupoid masses. This proof does
not establish Behrend-weighted CY$_3$ DT invariants, motivic vanishing-cycle
integration, cohomological BPS spaces, or physical state-counting
identifications. Their hypotheses and the current CoHA interface status are
recorded in [[rem-finite-quiver-hall-counts-and-dt-bps-interpretation]]. The
four required preceding pages remain separate constructions and are reading
context; no integration theorem from them supplies this proof.

Companion calculations: [[hall-stability-dt-bps-and-wall-crossing-examples]].
