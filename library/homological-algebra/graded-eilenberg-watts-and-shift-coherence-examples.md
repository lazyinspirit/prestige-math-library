---
page: graded-eilenberg-watts-and-shift-coherence-examples
title: "Graded Eilenberg–Watts and Shift Coherence — Examples"
status: published
items: []
examples:
  - cex-degree-zero-projection-is-exact-cocontinuous-but-not-graded-tensor
  - ex-internal-shift-as-a-graded-eilenberg-watts-kernel
  - cex-unrestricted-graded-natural-transformations-are-not-determined-by-the-regular-module
---

These witnesses test the two coherence restrictions of the graded Eilenberg–Watts theorem. The
first takes the degree-zero projection on graded $k$-vector spaces: it is $k$-linear, exact and
coproduct preserving with $F(k)=k$, yet $F(k\{1\})=0$ while $T_k(k\{1\})\cong k\{1\}$, so it is not
a graded tensor functor and admits no coherent shift comparisons at all — the object-level
hypothesis is load-bearing. The second identifies the internal shift with the tensor functor of the
shifted regular bimodule, $T_{A\{r\}}\cong\{r\}$, so the kernel attached to the shift is $A\{r\}$
and the classical comparison is the canonical one, while the homological shift $[1]$ of the
bounded-complex page remains a different functor. The third uses the scalar family $\lambda_1=1$ and $\lambda_d=0$ for $d\ne1$ on the
identity functor of $\operatorname{GrMod}_0(k)$: it defines a nonzero natural transformation with
zero component at the regular module and fails the equivariance square, so the restriction on
2-cells is likewise not vacuous.
