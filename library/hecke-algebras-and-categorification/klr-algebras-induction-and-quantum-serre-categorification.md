---
page: klr-algebras-induction-and-quantum-serre-categorification
title: "KLR Algebras, Induction, and Quantum-Serre Categorification"
status: draft
requires: [quantized-enveloping-algebras-and-quantum-serre-relations, divided-powers-integral-forms-and-quantum-highest-weights, balanced-triples-and-global-crystal-bases, graded-bimodules-and-tensor-functors, grothendieck-groups-and-graded-cartan-pairings, signed-quiver-flag-convolution-and-klr-ext-realization, quiver-full-flag-projective-semisimplicity]
items: [def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum, def-klr-grading-and-diagrammatic-composition, thm-polynomial-representation-of-a-klr-algebra, thm-klr-pbw-basis-theorem, def-klr-induction-and-restriction-bimodules, thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives, def-divided-power-klr-idempotents-and-projectives, lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases, lem-klr-maximal-tail-restriction-and-induction-have-a-unique-simple-head, thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations, def-the-klr-cartan-pairing, thm-klr-cartan-pairing-agrees-with-lusztigs-bilinear-form, thm-klr-categorification-of-the-negative-quantum-half, lem-klr-projective-duality-and-positive-divided-string-leading-terms, thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis]
examples: []
---

**Objective.** This page builds the generic theory of quiver Hecke (KLR) algebras and
their categorification of the negative half of a symmetrizable quantum group. It
starts from the polynomial presentation of
[[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]] and the
internal grading of [[def-klr-grading-and-diagrammatic-composition]], proves the
faithful divided-difference polynomial representation
[[thm-polynomial-representation-of-a-klr-algebra]], and deduces the PBW
(monomial) basis theorem [[thm-klr-pbw-basis-theorem]] with finite-dimensional
graded components. On that foundation it defines the induction and restriction
bimodules [[def-klr-induction-and-restriction-bimodules]], proves exactness,
projective preservation and the two adjunctions (left $\mathrm{Ind}\dashv
\mathrm{Res}$, right coinduction as reversed-block induction) together with the
Mackey filtration in
[[thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives]],
constructs the nil-Hecke divided-power idempotents and projectives
[[def-divided-power-klr-idempotents-and-projectives]], and records the local
graded Krull-Schmidt and shift-orbit basis facts
[[lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases]] and the
maximal-tail/unique-head/absolute-simplicity package
[[lem-klr-maximal-tail-restriction-and-induction-have-a-unique-simple-head]].

**Quantum Serre and the Cartan form.** The induction product on the split
Grothendieck group satisfies the divided-power quantum Serre relations
([[thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations]]),
so it receives the isomorphism $\gamma$ from the divided-power form of the
negative half. The graded Hom (Cartan) pairing is defined in
[[def-the-klr-cartan-pairing]] and identified with the Lusztig-normalized half
form in [[thm-klr-cartan-pairing-agrees-with-lusztigs-bilinear-form]]; the
combined statement is the categorification theorem
[[thm-klr-categorification-of-the-negative-quantum-half]], an isomorphism of
graded twisted bialgebras with compatible coinvolutions.

**Scope and guards.** All of the above holds for every field and every graded
hermitian KLR parameter satisfying (Q1)-(Q4). The final global-basis
identification
[[thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis]]
is stated only for symmetric Cartan data with $d_i=1$, characteristic zero and
finite loopless quiver parameters $Q_{ij}=(-1)^{h_{ij}}(u-v)^{h_{ij}+h_{ji}}$,
with arbitrary arrow multiplicities; it consumes the geometric suppliers on
[[signed-quiver-flag-convolution-and-klr-ext-realization]] and
[[quiver-full-flag-projective-semisimplicity]] and the positive first-string
supplier [[lem-klr-projective-duality-and-positive-divided-string-leading-terms]].
The companion page [[klr-algebras-induction-and-quantum-serre-categorification-examples]]
works the small cases, the double-edge braid correction, the degenerate-parameter
boundary and the rank-two nil-Hecke projective.
