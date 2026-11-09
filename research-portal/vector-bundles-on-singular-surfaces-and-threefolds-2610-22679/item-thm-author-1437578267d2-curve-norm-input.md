---
title: External norm-divisor identity for integral curves
status: draft
research_item: thm-author-1437578267d2-curve-norm-input
dependency_level: 0
---

PDF p. 13: Divisor presentation for supported degree six

## Prerequisites

None.

## Statement
Let $C,T$ be integral finite-type curves over a field and $p:C\to T$ proper and dominant. For $g\in k(C)^\times$, with $K=k(T)$ and $L=k(C)$,
$$p_*\operatorname{div}_C(g)=\operatorname{div}_T\operatorname{Nm}_{L/K}(g).$$
Here the norm is the determinant of multiplication by $g$ on the finite-dimensional $K$-vector space $L$; $p_*[y]=[\kappa(y):\kappa(p(y))][p(y)]$; and orders use differences of local quotient lengths. Neither curve need be normal or smooth, and $L/K$ need not be separable.

## Source contract
**Given:** The field, integral curves, proper dominant morphism and nonzero rational function in the Statement.

**Goal:** Record the established external identity with its singular-curve coefficient convention.

[F1] Stacks Project Lemma 42.18.1 proves the pushforward identity in its dimension-function setup, which includes finite-type curves over a field.

[F2] Stacks Project Lemma 10.121.8 and Definition 10.121.2 give the weighted local norm formula using quotient-length orders without normality.

## External input
Import [F1], with the coefficient convention of [F2]. This is an equality of zero-cycles before quotienting by rational equivalence. The cited proof is not claimed as a local reconstruction.
