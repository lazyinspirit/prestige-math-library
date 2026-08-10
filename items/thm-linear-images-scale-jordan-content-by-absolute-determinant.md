---
id: thm-linear-images-scale-jordan-content-by-absolute-determinant
kind: theorem
title: 'A linear endomorphism of $\mathbb R^n$ sends bounded Jordan sets to bounded Jordan sets and scales their content by the absolute determinant'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-determinant-of-a-square-matrix, thm-real-square-matrix-invertible-iff-determinant-nonzero, thm-determinant-under-elementary-row-operations, thm-invertible-matrices-factor-into-elementary-matrices, thm-gaussian-elimination-produces-row-echelon-form, thm-invertible-matrix-theorem, cor-a-row-reduction-is-a-product-of-elementary-matrices, cor-elementary-matrices-are-invertible, lem-euclidean-linear-maps-have-matrices-and-are-bounded, def-jordan-inner-and-outer-content, thm-jordan-boundary-criterion, thm-lipschitz-images-of-null-sets-in-rn-are-null, cor-cavalieri-principle-for-jordan-content]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, Lemmas 5.5.2--5.5.4"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$ and let $T:\mathbb R^n\to\mathbb R^n$ be linear, with standard matrix $A$. For every bounded Jordan set $E$, the image $T(E)$ is a bounded Jordan set and
$$\operatorname{cont}(T(E))=|\det A|\operatorname{cont}(E).$$
In particular, a singular linear image has content zero.

## Facts & Assumptions

**Given:** A linear endomorphism $T$ with matrix $A$ and a bounded Jordan set $E$.

[L1] For every $n\ge1$ and $A\in M_n(\mathbb R)$, the matrix $A$ is invertible if and only if $\det(A)\ne0$ ([[thm-real-square-matrix-invertible-iff-determinant-nonzero]]); every invertible $A\in M_n(\mathbb R)$ is a finite product of elementary matrices, with the identity represented by the empty product ([[thm-invertible-matrices-factor-into-elementary-matrices]]).

[L2] For $n\ge1$ and $A\in M_n(R)$ over a commutative ring, interchanging two rows changes $\det(A)$ to $-\det(A)$, multiplying one row by $c\in R$ changes it to $c\det(A)$, and adding $c$ times one row to a distinct row leaves it equal to $\det(A)$ ([[thm-determinant-under-elementary-row-operations]]).

[L3] Cavalieri identifies content with the integral of sectional contents ([[cor-cavalieri-principle-for-jordan-content]]).

[L4] Lipschitz self-maps of Euclidean space preserve null sets ([[thm-lipschitz-images-of-null-sets-in-rn-are-null]]), and a bounded set is Jordan measurable exactly when its boundary is null ([[thm-jordan-boundary-criterion]]).

[L5] Every Euclidean linear map is bounded and continuous ([[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]).

[L6] Every finite matrix over a field is row equivalent, by Gaussian elimination, to a matrix in row echelon form ([[thm-gaussian-elimination-produces-row-echelon-form]]). For $A\in M_n(F)$, the matrix $A$ is invertible if and only if it has a pivot in every row and every column ([[thm-invertible-matrix-theorem]]).

[L7] If $r$ elementary row operations transform $A$ into $B$, and $E_1,\ldots,E_r$ are their elementary matrices in execution order, then $B=E_r\cdots E_1A$; for $r=0$ the empty product is the identity and $B=A$ ([[cor-a-row-reduction-is-a-product-of-elementary-matrices]]). Every elementary matrix $E\in M_n(F)$ is invertible, with inverse the elementary matrix of the inverse row operation ([[cor-elementary-matrices-are-invertible]]).

[L8] Jordan inner and outer content approximate a Jordan set by finite rectangular figures ([[def-jordan-inner-and-outer-content]]).

## Proof

**Proof technique:** constructive.

1.1 Suppose first that $A$ is invertible. For every elementary matrix $E_0$, both $E_0$ and $E_0^{-1}$ are Lipschitz by [L5], so $\partial(E_0F)=E_0(\partial F)$ for every bounded set $F$. Thus [L4] makes $E_0F$ Jordan whenever $F$ is Jordan. Coordinate permutations and nonzero coordinate scalings send rectangular figures to rectangular figures, with content factor $1$ and $|c|$ respectively; applying this to arbitrarily close inner and outer figures from [L8] proves those factors for every bounded Jordan $F$. Adding $c$ times one coordinate to another translates every section parallel to the changed coordinate, so [L3] shows that a shear preserves content. These are exactly the absolute determinant factors listed by [L2]. [L2, L3, L4, L5, L8, construct]

2.1 By [L1], write $A$ as a finite product of elementary matrices. Apply step 1.1 successively to $E$: every intermediate image is bounded Jordan, and its content is multiplied by the corresponding absolute determinant factor. The row-operation laws [L2], applied successively from the identity, identify the product of those factors with $|\det A|$. Boundedness follows from [L5]. [L1, L2, L5, step 1.1]

3.1 If $A$ is singular, [L6] reduces it to an echelon matrix with a zero row; [L7] realizes this as an invertible change of codomain coordinates. The transformed range lies in a coordinate hyperplane, whose bounded part fits in slabs of arbitrarily small thickness and therefore has content zero and is Jordan. Applying the invertible case to undo the coordinate change shows that $T(E)$ has content zero and is Jordan; the real criterion in [L1] gives $\det A=0$, so the same formula holds. [L1, L6, L7, step 2.1, discharge-construct: invertible and singular constructions] ∎
