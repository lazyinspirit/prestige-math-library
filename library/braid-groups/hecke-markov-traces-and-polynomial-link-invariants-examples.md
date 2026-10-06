---
page: hecke-markov-traces-and-polynomial-link-invariants-examples
title: "Hecke Markov Traces and Polynomial Link Invariants — Examples"
status: draft
requires: [hecke-markov-traces-and-polynomial-link-invariants]
items: []
examples: [ex-the-burau-determinant-for-a-two-strand-torus-link,
           ex-the-hecke-trace-skein-calculation-for-a-three-crossing-braid,
           cex-an-unnormalized-hecke-trace-is-not-markov-invariant,
           ex-the-jones-specialization-of-a-two-strand-closure]
---

These four entries make the companion page's computations concrete and mark
one boundary of its normalization. The two-strand examples evaluate the Burau
determinant formula in the smallest cases: $\sigma_1^m$ has reduced Burau
image $(-t)^m$, giving the unknot, trefoil, mirror trefoil and Hopf-link values
$1$, $t^2-t+1$, $t^{-2}-t^{-1}+1$ and $1-t$, and $\sigma_1^3$ gives the
right-handed trefoil Jones value $-t^4+t^3+t$. The three-crossing example
computes the Ocneanu trace of $\sigma_1\sigma_2\sigma_1$, verifies the
HOMFLYPT skein relation on an explicit skein triple, identifies the closure as
the Hopf link, and checks the Jones value against the two-strand
representative of the same link. The counterexample shows that the raw trace,
and any normalization whose parameters fail $u\alpha z=1$ or $u^2=z_-/z$,
changes the value under at least one Markov stabilization and therefore is
not a link invariant.
