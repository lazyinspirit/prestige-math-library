---
page: algebraic-group-actions-orbits-stabilizers-and-controlled-quotients-examples
title: "Algebraic Group Actions, Orbits, Stabilizers, and Controlled Quotients — Examples"
status: draft
category: scheme-theory
requires: [algebraic-group-actions-orbits-stabilizers-and-controlled-quotients]
items: []
examples:
  - cex-orbit-set-need-not-represent-quotient-sheaf
  - ex-gl2-quotient-by-diagonal-torus
---

The examples test the quotient theory of
[[algebraic-group-actions-orbits-stabilizers-and-controlled-quotients]] on
explicit actions. [[cex-orbit-set-need-not-represent-quotient-sheaf]] takes
$\mu_2$ acting on $\operatorname{Spec}k[x]/(x^2-a)$ for a nonsquare $a$: the
orbit set of $k$-points is empty, yet the quotient sheaf is represented by
$\operatorname{Spec}k$, so sheafification is strictly necessary and the orbit
set does not compute the $k$-points of the quotient sheaf.
[[ex-gl2-quotient-by-diagonal-torus]] computes the quotient of
$\mathrm{GL}_2$ by the diagonal torus as the complement of the diagonal in
$\mathbb P^1_k\times_k\mathbb P^1_k$, with its dimension, projection fibres and
field-valued coset description.
