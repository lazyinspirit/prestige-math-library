---
id: prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism
kind: proposition
title: "Minimal realizations exist and are unique up to isomorphism"
status: published
origin: pipeline
deps: ["def-realization-of-a-generalized-cartan-matrix"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — Proposition 1.2.4, pp.11–12; independent row-image construction replaces a principal-minor assumption"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
proof_strategy: direct
---

## Statement

Every finite GCM has a minimal complex realization. Any two are isomorphic preserving all indexed roots and coroots. The dimension $2n-\operatorname{rank}A$ is the smallest possible dimension with both families independent.

## Facts & Assumptions

**Given:** A GCM of size $n$, rank $r$, and the row convention $\alpha_j(h_i)=a_{ij}$.

[F1] The indexed roots and coroots must each be independent. ([[def-realization-of-a-generalized-cartan-matrix]]).

## Proof

1.1 Let $V=\mathbb C^n$ have basis $v_i$, and define $p_0:V\to\mathbb C^n$ by $p_0(v_i)=(a_{i1},\ldots,a_{in})$. Choose a complement $C$ of $\operatorname{im}p_0$ by finite elimination. On $H=V\oplus C$ put $p(v,c)=p_0(v)+c$, $h_i=(v_i,0)$ and $\alpha_j=\operatorname{pr}_j p$. The map $p$ is onto, so its coordinate functionals are independent; the $h_i$ are independent and have the prescribed evaluations. Moreover $\dim H=n+(n-r)$. [given, F1]

2.1 In any realization with independent roots, $p:H\to\mathbb C^n$, $h\mapsto(\alpha_j(h))_j$, is onto. Its restriction to $V=\operatorname{span}(h_i)$ has rank $r$, so $\dim(H/V)\ge n-r$. This proves the lower bound. At equality, $\ker p\subset V$, because $\dim\ker p=n-r=\dim\ker(p|_V)$. [F1, step 1.1]

3.1 For two minimal realizations choose the same complement $C$ of the common row image in $\mathbb C^n$. Lift a basis of $C$ to each $H$ using surjectivity of $p$. The resulting linear sections $s:C\to H$ give $H=V\oplus s(C)$: an intersection vector has image both in $C$ and in the row image, hence zero; injectivity of $p$ on $s(C)$ then kills it. Dimensions give spanning. The map $h_i\mapsto h_i^\prime$, $s(c)\mapsto s^\prime(c)$ is invertible and commutes with $p$, so preserves every $\alpha_j$. All selections are finite Gaussian elimination. [step 1.1, step 2.1, F1] ∎

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), Proposition 1.2.4, pp.11–12; independent row-image construction replaces a principal-minor assumption.
