---
id: def-the-additive-category-of-matrices-over-a-ring
kind: definition
title: "The matrix category over a ring"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ring]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Gabriele Lobbia, Wojciech Rozowski, Ralph Sarkis, and Fabio Zanasi, Quantitative Monoidal Algebra, Definition 25"
      url: "https://arxiv.org/pdf/2410.09229"
pipeline_run: frontier-20
---

## Definition

For a ring $R$ ([[def-ring]]), the **matrix category** $\mathbf{Mat}_R$ has
natural numbers as objects. A morphism $n\to m$ is an $m\times n$ matrix with
entries in $R$. If $A:n\to m$ and $B:m\to p$, their composite is the
$p\times n$ matrix
$$ (BA)_{ik}:=\sum_{j=1}^{m}b_{ij}a_{jk}. $$
The identity on $n$ is the matrix $I_n$ with diagonal entries $1_R$ and
off-diagonal entries $0_R$. These finite sums are defined in the additive
abelian group of [[def-ring]]; associativity and the identity laws follow by
finite reindexing together with associativity and distributivity in $R$.

The zero object is $0$, since there is exactly one $m\times0$ and one
$0\times m$ matrix for each $m$.
