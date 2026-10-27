---
page: cyclotomic-klr-algebras-and-highest-weight-categorification-examples
title: "Cyclotomic KLR Algebras and Highest-Weight Categorification — Examples"
status: published
requires: [cyclotomic-klr-algebras-and-highest-weight-categorification]
items: []
examples: [       ex-cyclotomic-klr-quotients-in-ranks-zero-one-and-two,
       ex-self-dual-shift-normalization-for-a-cyclotomic-projective,
       cex-k-zero-categorification-alone-does-not-identify-a-global-basis,
       ex-the-categorical-sl-two-commutator-in-a-small-weight,
       ex-projective-simple-cartan-pairing-in-a-small-cyclotomic-block]
---

**Objective.** This companion page works the cyclotomic machinery of
[[cyclotomic-klr-algebras-and-highest-weight-categorification]] on the smallest
concrete blocks and at the exact boundaries of its normalizations. The items
use earlier computations on this companion page and the foundational page.
The explicit calculations use Laurent polynomials and nil-Hecke matrix units.

## What the examples show

- [[ex-cyclotomic-klr-quotients-in-ranks-zero-one-and-two]] computes the
  rank-zero, rank-one and rank-two blocks: $R^\Lambda(0)=k$,
  $R^\Lambda(\alpha_i)=k[x]/x^\lambda$ of graded dimension
  $\sum_{r=0}^{\lambda-1}q^{2d_i r}$ for $\lambda\ge1$ (the block is zero
  when $\lambda=0$), the vanishing
  $R^\Lambda(n\alpha_i)=0$ for $n>\lambda$, the rank-two decomposition
  $NH_2/(x_1^2)\cong P_{i,2}^{\oplus(q_i+q_i^{-1})}$ at $\lambda=2$,
  where $q_i=q^{d_i}$, and the
  inhomogeneous boundary $a_i(u)=u(u-1)$ giving $k\oplus k$ at root
  $\alpha_i$: the standard graded hypothesis is substantive.

- [[ex-self-dual-shift-normalization-for-a-cyclotomic-projective]] separates
  the two dualities on the rank-one regular module $B=k[x]/x^\lambda$:
  projective Hom duality centers $B$ at shift $0$ while finite vector duality
  centers it at $-(\lambda-1)$, and the general defect shift
  $D_\psi P\cong P^\#\{-2\operatorname{def}_\Lambda(\beta)\}$ does not
  redefine the lower-basis projective normalization.

- [[ex-the-categorical-sl-two-commutator-in-a-small-weight]] verifies the
  categorical commutator at $\Lambda=2\Lambda_1$, $\beta=0$: both the $K_0$ and
  the $G_0$ commutators equal $(q^2-q^{-2})/(q-q^{-1})$ at $K_i=q^2$, with the
  two identity summands of the $\langle h_i,\lambda\rangle=2$ case matching
  $k\oplus k\{2\}$.

- [[ex-projective-simple-cartan-pairing-in-a-small-cyclotomic-block]] computes
  the normalized cover/simple pairing $T(P_r,S_s)=\delta_{rs}$ in the
  $\lambda=2$ block, with the three normalized covers $k$, $k[x]/x^2$ and the
  shifted column $C\{-1\}$, and shows that the regular classes
  $[B_1]=(1+q^2)[S_1]$, $[B_2]=(q+q^{-1})[S_2]$ carry non-unit coefficients.

## What the counterexample shows

- [[cex-k-zero-categorification-alone-does-not-identify-a-global-basis]]
  shows that ordinary word-projective classes need not be lower global vectors
  under the vacuum-normalized integral isomorphism:
  in weight $2\alpha_i$ at $\Lambda=2\Lambda_1$ the word projective class is
  $(q+q^{-1})[P_{i,2}]$, the lower global vector is the divided power
  $F_i^{(2)}v$, and the scalar $q+q^{-1}$ is a nonunit. The integral
  divided-power class $[P_{i,2}]$ supplies the lower vector directly.
