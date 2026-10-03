---
id: ex-a-fork-noodle-pairing-computation
kind: example
title: A fork-noodle pairing computation
status: draft
origin: pipeline
deps: [def-forks-noodles-and-their-lkb-intersection-pairing, def-lexicographic-order-on-fork-noodle-deck-monomials]
justified_by: []
aliases: []
dependency_level: 6
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bigelow, Braid groups are linear, J. Amer. Math. Soc. 14 (2001) 471-486"
      url: "https://web.math.ucsb.edu/~bigelow/publications/03.pdf"
      locator: "Section 2.1, printed pp. 475-476: explicit computation of the pairing from the intersections z_i, z'_j, the monomials m_{i,j} and the signs epsilon_{i,j}"
    - title: "Bigelow, The Lawrence-Krammer representation, arXiv:math/0204057v1"
      url: "https://arxiv.org/pdf/math/0204057"
      locator: "Section 2.1, printed p. 5: the arcs delta_{i,j} and phi-values"
verification:
  precheck: n/a
---
## Example

This example computes the LKB pairing of
[[def-forks-noodles-and-their-lkb-intersection-pairing]] for an explicit
noodle and fork, listing every intersection point, sign and deck monomial and
assembling the Laurent polynomial. It uses the conventions of
[[def-lexicographic-order-on-fork-noodle-deck-monomials]].

Work with $n=3$ punctures $p_1<p_2<p_3$ on the real axis of the standard disk,
and take the following pair.

* The noodle $N$ is a lasso around $p_3$, crossing the real axis once in
  $(p_2,p_3)$ and once to the right of $p_3$, and bounding together with the
  boundary arc between its endpoints a disk $B$ with $B\cap P=\{p_3\}$.
* The tine $T(F)$ runs from $p_1$ to $p_2$, crossing $N$ at $z_1$ with
  negative sign, winding once around $p_3$ in the region $B$, crossing $N$
  again at $z_2$ with positive sign, and continuing to $p_2$.
* The parallel tine $T(F')$ meets $N$ at parallel points $z'_1,z'_2$ chosen so
  that along $N$ starting from $d_1$ the four points occur in the order
  $z'_1,z_1,z_2,z'_2$.

The aim is to compute $\langle N,F\rangle$ and to display the cancellations
among the unsummed terms.

## Verification

**Given:** the noodle $N$, the fork $F$ and its parallel copy $F'$ displayed
above, with the arcs $\alpha_1,\alpha_2$ (handles), $\beta_1,\beta_2$ (tine
pieces) and $\gamma_1,\gamma_2$ (noodle pieces) of the definition of
$\delta_{i,j}$.

1.1 The labelled intersections and signs. Put $l=2$, so that the tine meets $N$ at $z_1,z_2$ and the parallel tine at $z'_1,z'_2$. The crossing at $z_1$ is negative and the crossing at $z_2$ is positive, so $(-1)^{b_{1,1}}=-1$ and $(-1)^{b_{2,2}}=+1$. Along $N$ the point $z'_1$ comes before $z_2$, hence $(-1)^{b_{2,1}}=-1$, and $z_1$ comes before $z'_2$, hence $(-1)^{b_{1,2}}=+1$. The sign formula $\epsilon_{i,j}=-(-1)^{b_{i,i}+b_{j,j}+b_{i,j}}$ gives the table $$\epsilon_{1,1}=+1,\qquad \epsilon_{1,2}=+1,\qquad \epsilon_{2,1}=-1,\qquad \epsilon_{2,2}=-1.$$ [given, algebra]

2.1 The monomials. Let $A_0$ denote the sum of the winding numbers of the loop formed by $N$ from $d_1$ to $d_2$ and back to $d_1$ along $\partial D$. The arcs $\xi_i$ formed by the handle, the tine piece to $z_i$ and the return along $N$ have winding sums $a_1=0$ and $a_2=1$: the first excursion bounds no puncture, while the second differs from the first by the excursion around $p_3$. Lemma 2.1 of Bigelow 2001 gives $a_{i,j}=a_i+a_j+A_0$, so $$a_{1,1}=A_0,\qquad a_{1,2}=a_{2,1}=A_0+1,\qquad a_{2,2}=A_0+2.$$ The mutual winding numbers in this tight position are $b_{1,1}=1$ (negative crossing), $b_{2,2}=0$ (positive crossing), $b_{2,1}=1$ and $b_{1,2}=0$. Hence $$m_{1,1}=q^{A_0}t,\qquad m_{2,1}=q^{A_0+1}t,\qquad m_{1,2}=q^{A_0+1},\qquad m_{2,2}=q^{A_0+2}.$$ [step 1.1, algebra]

3.1 Assembling $\langle N,F\rangle=\sum_{i,j=1}^{2}\epsilon_{i,j}m_{i,j}$ gives $$\langle N,F\rangle=q^{A_0}t-q^{A_0+1}t+q^{A_0+1}-q^{A_0+2} =q^{A_0}\bigl(t+q-qt-q^2\bigr)=q^{A_0}(q+t)(1-q),$$ a nonzero element of $\Lambda=\mathbb Z[q^{\pm1}, t^{\pm1}]$. The geometrically distinct terms do not cancel: the four monomials $q^{A_0}t,q^{A_0+1}t,q^{A_0+1},q^{A_0+2}$ are pairwise distinct, and the final factorization shows how the polynomial is collected. Note also $\sum_{i,j}\epsilon_{i,j}=0$, so the total algebraic intersection number of the projected surfaces vanishes although the pairing does not: the table of signs and monomials, not the ordinary intersection number, carries the information. [step 1.1, step 2.1, algebra] ∎
