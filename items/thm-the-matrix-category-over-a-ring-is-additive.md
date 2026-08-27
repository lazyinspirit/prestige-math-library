---
id: thm-the-matrix-category-over-a-ring-is-additive
kind: theorem
title: "The matrix category over a ring is additive"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-additive-category, def-the-additive-category-of-matrices-over-a-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gabriele Lobbia, Wojciech Rozowski, Ralph Sarkis, and Fabio Zanasi, Quantitative Monoidal Algebra, Proposition 26"
      url: "https://arxiv.org/pdf/2410.09229"
pipeline_run: frontier-20
---

## Statement

For every ring $R$, the matrix category $\mathbf{Mat}_R$ is additive.

## Facts & Assumptions

**Given:** A ring $R$ and its matrix category $\mathbf{Mat}_R$.

[L1] An additive category is a preadditive category with finite biproducts
([[def-additive-category]]).

[L2] In $\mathbf{Mat}_R$, objects are natural numbers and morphisms $n\to m$ are
$m\times n$ matrices, with composition by matrix multiplication and identities
$I_n$ ([[def-the-additive-category-of-matrices-over-a-ring]]).

## Proof

**Proof technique:** direct.

1.1 For fixed objects $n,m$, the hom-set $\mathbf{Mat}_R(n,m)$ is the set of $m\times n$ matrices. Entrywise addition makes it an abelian group because $R$ is an abelian group under addition, and matrix multiplication is bilinear with respect to entrywise addition. So $\mathbf{Mat}_R$ is preadditive. [L2]

1.2 The object $0$ is a zero object by [L2]. For $m,n$, the object $m+n$ carries the usual block projections and injections. Given matrices into or out of $m+n$, the product and coproduct universal properties are exactly the familiar pairing and copairing of block columns and block rows. Thus $m+n$ is a biproduct of $m$ and $n$, and iterating gives all finite biproducts. [L2, construct]

2.1 Hence $\mathbf{Mat}_R$ is preadditive and has all finite biproducts, so it is additive by [L1]. [L1, step 1.1, step 1.2] ∎
