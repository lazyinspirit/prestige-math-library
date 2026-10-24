---
page: coxeter-euler-forms-and-sortable-chamber-cones-examples
title: "Coxeter Euler Forms and Sortable Chamber Cones — Examples"
status: published
items: []
examples:
  - cex-cg-rank-two-inversion-set-violating-closure
  - ex-cg-euler-and-skew-form-in-a3
  - ex-cg-source-sink-move-and-sign-convention
  - ex-cg-skips-and-cone-walls-for-a-sorting-word-in-a3
---

This draft companion is a dependency leaf. Its exercises and examples use only the theory of [[coxeter-euler-forms-and-sortable-chamber-cones]] and that page’s established prerequisite closure; no other theory page may depend on a supplier homed here.

For c=s1s2s3 in A3 compute the Euler/skew form, all skips of a short sorting word and cone walls. Change c by a source-sink move and check the sign convention. Test a rank-two inversion set violating closure.

Each example states its hypotheses and checks the calculation directly. A
counterexample identifies the precise dropped hypothesis; a drawing or symbolic
calculation alone does not certify a general theorem.

## A2 rank-two inversion-set counterexample

[[cex-cg-rank-two-inversion-set-violating-closure]] lists every inversion set in A2 and shows that positive-combination closure alone does not recognize inversion sets.

## Euler and skew forms in A3

[[ex-cg-euler-and-skew-form-in-a3]] computes the Euler and skew forms for $c=s_1s_2s_3$, checks their signs on the two standard A2 root orders, and recomputes the forms for $c'=s_1s_3s_2$.

## A source–sink move and the sign convention

[[ex-cg-source-sink-move-and-sign-convention]] conjugates $c=s_1s_2s_3$ by the initial letter $s_1$, recomputes $E_{c'}$ and $\omega_{c'}$ for the reduced Coxeter word $c'=s_2s_3s_1$, and verifies on all nine basis pairs that the forms transport by $\rho(s_1)$ while the sign of the noncommuting pair is prescribed by the order of its letters in the word.

## Skips and cone walls for a short sorting word

[[ex-cg-skips-and-cone-walls-for-a-sorting-word-in-a3]] computes all skips, skip roots, forced and unforced alternatives of the $c$-sortable element $v=s_1s_2$ in $A_3$, identifies the unique cover reflection of $v$, and verifies the cone inclusion $vC\subseteq\mathrm{Cone}_c(v)$ predicted by the cone criterion.
