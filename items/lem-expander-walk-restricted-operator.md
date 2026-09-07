---
id: lem-expander-walk-restricted-operator
kind: lemma
title: "Expander walk restricted operator"
status: draft
origin: pipeline
deps: [lem-expander-walk-contraction]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; §3.2 Lemmas3.7–3.8, pp28–29; sharpened constant from the same projection proof."
      url: "https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf"
---

## Statement

Let $S$ have density $\beta=|S|/n$ in a finite regular graph and let $P_S$ project onto functions supported in $S$. Then
$$\|P_SMP_S\|\le\alpha+(1-\alpha)\beta.$$
For a stationary length-$t$ walk, $t\ge0$, its confinement probability is $n^{-1}\langle\mathbf1_S,(P_SMP_S)^t\mathbf1_S\rangle_0$, where the inner product is unnormalized.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] A walk that at each step chooses one of the $d$ ports uniformly has transition matrix $M$ and stationary uniform law $u=\mathbf1/n$. For any initial probability vector $p$ and integer $t\ge0$, using the ordinary Euclidean norm, $$\|M^tp-u\|_2\le\alpha^t\|p-u\|_2,\qquad \operatorname{TV}(M^tp,u)\le\frac{\sqrt n}{2}\alpha^t.$$ For $t=0$ the factor $\alpha^0$ is interpreted as one. For $t\ge1$, the adjacency-slot power has nontrivial norm $\alpha^t$. Here total variation means half the $\ell^1$ distance. ([[lem-expander-walk-contraction]]).


## Proof

1.1 For $f$ supported in $S$, let $Jf$ be its constant projection. Finite-sum Cauchy–Schwarz gives $\|Jf\|^2\le\beta\|f\|^2$. Write $f=Jf+f_0$ with orthogonal parts. Since $M$ fixes the constant part and contracts the other by $\alpha$, the Rayleigh form is at most $\|Jf\|^2+\alpha\|f_0\|^2\le[\alpha+(1-\alpha)\beta]\|f\|^2$ and at least $-\alpha\|f\|^2$. The supported symmetric compression has an orthonormal eigenbasis, so its absolute norm has the asserted bound; outside that space it is zero. [F1, algebra]

2.1 Expand the matrix product: each factor $P_S$ deletes precisely the paths with a vertex outside $S$, and each $M$ factor supplies its step probability. Summing endpoints with the factor $1/n$ gives uniform initial sampling. For $t=0$ the expression is $|S|/n$; if $S$ is empty it is zero and if $S=V$ it is one. These statements also cover $n=1$. [F1, step 1.1] ∎
