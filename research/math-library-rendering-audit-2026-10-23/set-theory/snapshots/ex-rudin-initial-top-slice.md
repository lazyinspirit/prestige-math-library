---
id: ex-rudin-initial-top-slice
kind: example
title: A concrete Rudin slice
status: published
origin: pipeline
deps: [def-rudin-ordinal-box-space, def-axiom-of-choice, thm-regularity-of-the-alephs, lem-rudin-neighborhoods-of-initial-top-slices-contain-tails]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Hart, Set-Theoretic Methods in General Topology, Chapter 6 section 3, initial-top slices, printed p. 37; explicit point calculated here"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop.pdf
---

## Example

Assume AC. Take $B=\{2,3,4,\ldots\}$ and a natural number $k$. Define

$$h_k(n)=\begin{cases}\aleph_n&2\le n\le k,\\\omega_1&n>k.\end{cases}$$

Then $h_k\in X_R(B)$ and lies in the initial-top slice $F_k$. For every $l>k$ with $l\ge2$, it does not lie in $F_l$. For instance $h_3=(\omega_2,\omega_3,\omega_1,\omega_1,\ldots)$ belongs to $F_3\setminus F_4$.

## Facts & Assumptions

**Given:** The displayed function and $k<\omega$.

[F1] Rudin points require uncountable coordinate cofinalities bounded strictly by some finite aleph ([[def-rudin-ordinal-box-space]]).

[F2] Under AC $\operatorname{cf}(\aleph_n)=\aleph_n$ for positive finite $n$ ([[thm-regularity-of-the-alephs]]).

[F3] $F_j$ imposes $h(n)=\aleph_n$ on coordinates $n\le j$ ([[lem-rudin-neighborhoods-of-initial-top-slices-contain-tails]]).

[A1] AC is assumed for F2 and the Rudin setting ([[def-axiom-of-choice]]).

## Verification

1.1 All coordinates of $h_k$ are in $[0,\aleph_n]$: the prefix equals its tops and the tail has $\omega_1<\aleph_n$ since $n\ge2$. By F2 and A1 their cofinalities are respectively $\aleph_n$ and $\aleph_1$. Set $m=\max(k,1)+1$. These cofinalities are above $\omega$ and strictly below $\aleph_m$, including for $k=0,1$ when the prefix is empty and $m=2$. F1 therefore gives $h_k\in X_R(B)$. [F1, F2, A1]

2.1 For every $n\le k$ in $B$ the defining value is $\aleph_n$, so F3 gives $h_k\in F_k$. If $l>k$ and $l\in B$, its $l$-th coordinate is $\omega_1<\aleph_l$, violating the equality required for $F_l$. At $k=3$, the first two coordinates are $\omega_2,\omega_3$, and the next is $\omega_1<\omega_4$, giving the asserted concrete instance. QED. [step 1.1, F3]
