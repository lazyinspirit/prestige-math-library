---
page: morse-inequalities-and-the-handle-chain-complex
title: Morse Inequalities and the Handle Chain Complex
status: published
items: [def-morse-numbers-and-morse-polynomial, def-poincare-polynomial-over-a-field, lem-exact-sequence-dimension-inequality, lem-long-exact-sequence-of-a-triple-in-singular-homology, lem-a-collar-product-region-deformation-retracts-onto-its-face, lem-a-k-handle-deformation-retracts-onto-its-cocore-and-outgoing-region, lem-one-handle-changes-relative-homology-in-one-degree, lem-higher-index-handle-attachments-do-not-change-lower-homology, thm-morse-polynomial-identity, cor-strong-morse-inequalities, cor-weak-morse-inequalities, def-perfect-morse-function-over-a-field, cor-total-critical-point-lower-bound, prop-relative-morse-inequalities-for-a-cobordism, prop-morse-handle-chain-complex-computes-singular-homology, cor-morse-euler-characteristic-identity, lem-perfectness-is-equivalent-to-vanishing-morse-correction-polynomial, lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers, rem-morse-inequalities-depend-on-the-coefficient-field]
examples: []
---

This page turns the handle-theoretic sublevel filtration into the classical
numerical Morse inequalities. It starts from the Morse numbers $m_k(f)$ and the
Morse polynomial $M_f(t)$, fixes the Poincare polynomial over a field, and
isolates the linear algebra of a long exact sequence: the rank bookkeeping that
produces the correction polynomial $Q$ with
$M_f(t)=P_{M,F}(t)+(1+t)Q(t)$.

The geometric input is the one-level computation: attaching one rounded handle
changes relative homology in the handle's index only, and a critical level with
several nondegenerate critical points contributes one copy of the coefficient
field per point in its own index. Slicing a closed manifold along its critical
values and telescoping the exact sequences of the successive sublevel pairs
gives the Morse polynomial identity, from which the weak and strong
inequalities, the total critical-point bound, and the Euler characteristic
identity follow. The local lemmas (the collar retraction, the dual handle
retraction onto the cocore, the triple sequence, and the higher-index
stabilization) supply the exact sequences and quotient identifications used
throughout.

The second half builds the handle chain complex of an index-ordered
presentation, shows that its homology is the singular homology over the field,
and identifies its boundary matrix with the attaching-belt intersection
numbers. Perfectness over a field is then characterised as the vanishing of the
correction polynomial and of all handle boundary maps. The relative form for an
adapted Morse function on a cobordism is proved for use in the h-cobordism
argument, and the final remark records that all of this numerical content
depends on the coefficient field, with the Euler identity field
independent.

The whole-page argument assumes the countable axiom of choice $\mathrm{AC}_\omega$,
used exactly where the in-run handle-presentation suppliers are invoked
(existence and rearrangement of handle presentations, corner rounding, and the
separation of critical values); the local retractions and the linear algebra
are choice free.
