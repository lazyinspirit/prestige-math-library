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
    - title: "A. Leibman, Multidimensional Real Analysis, Lemma 5.5.2"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Example

Fix $i\ne j$ and $c\in\mathbb R$. The coordinate shear
$$S(x_1,\ldots,x_n)=(x_1,\ldots,x_j+cx_i,\ldots,x_n)$$
preserves the Jordan content of every bounded Jordan set.

## Facts & Assumptions

**Given:** The displayed shear $S$ and bounded Jordan set $E$.

[L1] For a bounded Jordan set whose sections are Jordan measurable outside a content-zero set of parameters, the completed sectional-content function is integrable and its integral is the content of the set ([[cor-cavalieri-principle-for-jordan-content]]).

[L2] Linear images scale Jordan content by the absolute determinant ([[thm-linear-images-scale-jordan-content-by-absolute-determinant]]).

## Verification

**Proof technique:** direct.

1.1 The shear matrix is the identity with one off-diagonal entry $c$, so its determinant is $1$. By [L2] the linear image $S(E)$ is Jordan measurable and $\operatorname{cont}(S(E))=|1|\operatorname{cont}(E)=\operatorname{cont}(E)$. [L2, given]

2.1 Sections show the same thing wherever [L1] applies. Hold all coordinates except $x_j$ fixed: the corresponding section of $S(E)$ is the section of $E$ translated by $cx_i$, so its one-dimensional content is unchanged, and for a set whose sections are Jordan outside a content-zero parameter set [L1] integrates these equal values to the same total. This is a second reading of the result and not a second proof of it: a bounded Jordan set need not have Jordan sections outside a content-zero parameter set, so [L1] is not available for an arbitrary $E$ and step 1.1 carries the statement. [L1, step 1.1] ∎
