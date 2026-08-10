---
id: ex-cavalieri-shear-preserves-jordan-content
kind: example
title: "A coordinate shear preserves Jordan content by translating every section"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [cor-cavalieri-principle-for-jordan-content, thm-linear-images-scale-jordan-content-by-absolute-determinant]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, §6.1"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Example

Fix $i\ne j$ and $c\in\mathbb R$. The coordinate shear
$$S(x_1,\ldots,x_n)=(x_1,\ldots,x_j+cx_i,\ldots,x_n)$$
preserves the Jordan content of every bounded Jordan set.

## Facts & Assumptions

**Given:** The displayed shear $S$ and bounded Jordan set $E$.

[L1] Cavalieri computes content by integrating sectional contents ([[cor-cavalieri-principle-for-jordan-content]]).

[L2] Linear images scale Jordan content by the absolute determinant ([[thm-linear-images-scale-jordan-content-by-absolute-determinant]]).

## Verification

**Proof technique:** direct.

1.1 By [L2], the linear image $S(E)$ is Jordan measurable. Hold all coordinates except $x_j$ fixed: the corresponding section of $S(E)$ is the section of $E$ translated by $cx_i$, so its one-dimensional content is unchanged. [L2, given]

2.1 Integrating these equal sectional contents with [L1] gives $\operatorname{cont}(S(E))=\operatorname{cont}(E)$. [L1, step 1.1]

3.1 The shear matrix is the identity with one off-diagonal entry $c$ and has determinant $1$. Thus [L2] independently gives the same factor $|1|=1$. [L2, step 2.1] ∎
