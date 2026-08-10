---
id: thm-linear-images-scale-jordan-content-by-absolute-determinant
kind: theorem
title: 'A linear endomorphism of $\mathbb R^n$ sends bounded Jordan sets to bounded Jordan sets and scales their content by the absolute determinant'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-determinant-of-a-square-matrix, thm-real-square-matrix-invertible-iff-determinant-nonzero, thm-determinant-under-elementary-row-operations, thm-invertible-matrices-factor-into-elementary-matrices, lem-euclidean-linear-maps-have-matrices-and-are-bounded, def-jordan-inner-and-outer-content, thm-jordan-boundary-criterion, cor-cavalieri-principle-for-jordan-content, lem-finite-jordan-cover-sum-bounds]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, §6.1"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Statement

Let $T:\mathbb R^n\to\mathbb R^n$ be linear, with standard matrix $A$. For every bounded Jordan set $E$, the image $T(E)$ is a bounded Jordan set and
$$\operatorname{cont}(T(E))=|\det A|\operatorname{cont}(E).$$
In particular, a singular linear image has content zero.

## Facts & Assumptions

**Given:** A linear endomorphism $T$ with matrix $A$ and a bounded Jordan set $E$.

[L1] A real square matrix is invertible exactly when its determinant is nonzero ([[thm-real-square-matrix-invertible-iff-determinant-nonzero]]), and every invertible matrix is a product of elementary matrices ([[thm-invertible-matrices-factor-into-elementary-matrices]]).

[L2] Row swaps, row scalings, and row additions have the corresponding determinant effects ([[thm-determinant-under-elementary-row-operations]]).

[L3] Cavalieri identifies content with the integral of sectional contents ([[cor-cavalieri-principle-for-jordan-content]]).

[L4] Jordan inner and outer content approximate a Jordan set by finite rectangular figures ([[def-jordan-inner-and-outer-content]]).

## Proof

**Proof technique:** constructive.

1.1 Suppose first that $A$ is invertible. By [L1], construct it as a product of elementary matrices. A coordinate permutation merely permutes the edge lengths of a rectangle; a scaling of one coordinate by $c\ne0$ multiplies its content by $|c|$; and adding $c$ times one coordinate to another translates every section parallel to the changed coordinate, so [L3] shows that a shear preserves content. The factors are exactly the absolute determinant factors listed by [L2]. [L1, L2, L3, construct]

2.1 These calculations apply first to rectangles and then to finite rectangular figures. Given inner and outer figures $P\subseteq E\subseteq Q$, injectivity gives $T(P)\subseteq T(E)\subseteq T(Q)$, and step 1.1 scales both bounding contents by $|\det A|$. Letting the gap $\operatorname{cont}(Q)-\operatorname{cont}(P)$ tend to zero by [L4] proves both Jordan measurability of $T(E)$ and the formula. Boundedness follows from boundedness of linear maps. [L4, step 1.1]

3.1 If $A$ is singular, row reduction and [L1] place its range, after an invertible linear change of coordinates, in a coordinate hyperplane. A bounded part of that hyperplane fits in slabs of arbitrarily small thickness and hence has content zero. Applying the already proved invertible case to undo the coordinate change shows that $T(E)$ is null and Jordan; [L1] gives $\det A=0$, so the same formula holds. [L1, step 2.1, discharge-construct: invertible and singular constructions] ∎
