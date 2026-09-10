---
id: thm-stone-space-recovered-from-its-clopens
kind: theorem
title: A Stone space is recovered from its clopens
status: draft
origin: pipeline
deps: [def-stone-ultrafilter-space-and-clopens, lem-generated-boolean-filter-and-ultrafilter-tests, thm-compact-iff-fip]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Tressl, Stone Duality for Boolean Algebras, 3.1.6, pp. 11–12"
      url: https://personalpages.manchester.ac.uk/staff/Marcus.Tressl/papers/StoneDualityBooleanAlgebras.pdf
---

## Statement

ZF proves that for every Stone space $X$, the map $\eta_X:X\to\operatorname{Ult}(\operatorname{Clop}(X))$ given by $\eta_X(x)=\{C\in\operatorname{Clop}(X):x\in C\}$ is a homeomorphism. BPI is not assumed.

## Facts & Assumptions

[F1] [[def-stone-ultrafilter-space-and-clopens]] defines Stone spaces and the basic sets $[C]$.

[F2] [[lem-generated-boolean-filter-and-ultrafilter-tests]] gives the complementary-pair criterion for ultrafilters.

[F3] [[thm-compact-iff-fip]] gives a common point for every family of closed subsets of a compact space with FIP, in ZF.

## Proof

**Given:** A compact Hausdorff space $X$ with a clopen basis.

1.1 For $x\in X$, the clopens containing $x$ include $X$, exclude $\varnothing$, are upward and intersection closed, and decide each pair $C,X\setminus C$. By F2 this is an ultrafilter, so $\eta_X$ is defined. If $x\ne y$, Hausdorffness gives an open neighborhood of $x$ avoiding $y$, and the clopen basis gives a clopen $C$ containing $x$ but not $y$. Thus $\eta_X(x)\ne\eta_X(y)$. [F1, F2, algebra]

2.1 Let $U$ be an ultrafilter of clopens. Its finite intersections are members of $U$ and are nonempty, so its closed sets have FIP, including the empty intersection $X$. F3 supplies $x\in\bigcap U$. If a clopen $C$ containing $x$ were absent from $U$, F2 would put $X\setminus C$ in $U$, contrary to the choice of $x$. Hence $U=\eta_X(x)$. This point is unique by step 1.1. [F1, F2, F3, step 1.1, algebra]

3.1 For each clopen $C$, the definitions give $\eta_X^{-1}([C])=C$. Thus $\eta_X$ is continuous on the basic opens, hence on their unions. Surjectivity in step 2.1 gives $\eta_X[C]=[C]$ as well. Every open set of $X$ is a union of clopens, so its image is a union of basic open sets; the inverse of the bijection is continuous. If $X=\varnothing$, its clopen algebra is trivial, its ultrafilter space is empty, and the empty map is the asserted homeomorphism. The inverse is defined by the unique common point, without choice. QED. [F1, step 1.1, step 2.1, algebra]
