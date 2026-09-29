---
id: lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero
kind: lemma
title: Complex Specht modules have nondegenerate Hermitian self-pairing
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-invariant-inner-product-on-a-tabloid-module, def-column-antisymmetrizer-polytabloid-and-specht-module, def-young-subgroup-tabloid-and-permutation-module, def-orthogonality-and-orthogonal-complement]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups, Chapter 9, Definition 9.1, Remark 9.2 and Lemma 9.3, printed pp. 31-32; her form is bilinear, and the local form is Hermitian"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
    - title: "David A. Craven, Groups, Geometries and Representation Theory, Section 2.1, Corollary 2.4 and its characteristic-zero conclusion, printed p. 20; the local proof uses Hermitian positivity"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

For every $\lambda\vdash n$, $S^\lambda$ is nonzero and
$S^\lambda\cap(S^\lambda)^\perp=\{0\}$ for the positive definite
invariant Hermitian tabloid product.

## Facts & Assumptions

**Given:** $n\ge0$ and $\lambda\vdash n$.

[F1] The tabloid-basis Hermitian product is positive definite:
$\langle x,x\rangle=\sum_T|a_T|^2>0$ whenever
$x=\sum_Ta_TT\ne0$
([[def-invariant-inner-product-on-a-tabloid-module]]).

[F2] $S^\lambda$ is the complex span of the polytabloids $e_s$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F3] For every tableau $t$, the coefficient of $\{t\}$ in $e_t$ is $1$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F4] For every partition, the canonical row-filled $\lambda$-tableau exists
([[def-young-subgroup-tabloid-and-permutation-module]]).

[F5] The orthogonal complement is defined by vanishing of the inner product
against every vector of the subspace
([[def-orthogonality-and-orthogonal-complement]]).

## Proof

**Proof technique:** direct.

1.1 If $\lambda=\varnothing$, take its empty tableau; otherwise take the canonical row-filled tableau $t_0$ from [F4]. By [F2], $e_{t_0}\in S^\lambda$, and by [F3] its coefficient at $\{t_0\}$ is $1$. Thus $e_{t_0}\ne0$ and $S^\lambda\ne0$. [given, F2, F3, F4, algebra]

2.1 Let $v\in S^\lambda\cap(S^\lambda)^\perp$. By [F5], $\langle v,w\rangle=0$ for every $w\in S^\lambda$; taking $w=v$ gives $\langle v,v\rangle=0$. Positive definiteness [F1] implies $v=0$. The zero vector belongs to both spaces by [F2] and [F5], so $S^\lambda\cap(S^\lambda)^\perp=\{0\}$. [given, F1, F2, F5, algebra] ∎
