---
id: "prop-a-riemannian-product-is-complete-iff-each-factor-is-complete"
kind: "proposition"
title: "A Riemannian product is complete iff each factor is complete"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-countable-choice","rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow","thm-induction-principle","lem-finite-choice","prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure","thm-product-of-connected-spaces","prop-christoffel-formula-for-the-levi-civita-connection","prop-coordinate-geodesic-equation","thm-existence-uniqueness-and-smooth-dependence-of-geodesics","def-geodesically-complete-riemannian-manifold","thm-hopf-rinow"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Example 8.2.8, p.49
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "split the geodesic equation and apply Hopf--Rinow"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $r\in\mathbb N$, and for each $a<r$ let
$(M_a,g_a)$ be a nonempty connected boundaryless Riemannian manifold. Give
$$
P=\prod_{a<r}M_a
$$
the product smooth structure and product metric
$g=\sum_{a<r}\pi_a^*g_a$. For $r=0$, use the convention that $P$ is the
one-point zero-dimensional Riemannian manifold.

Then the following conditions are equivalent:

1. every $(M_a,d_{g_a})$ is a complete metric space;
2. every $(M_a,g_a)$ is geodesically complete;
3. $(P,d_g)$ is a complete metric space;
4. $(P,g)$ is geodesically complete.

Thus a finite Riemannian product is metrically, equivalently geodesically,
complete exactly when each factor is.

## Facts & Assumptions

**Given:** The finite family and product in the statement.

[A1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$, and [[rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow]] fixes the boundaryless convention for geodesic completeness and Hopf--Rinow.

[F1] [[thm-induction-principle]] permits finite iteration. [[lem-finite-choice]] gives a point in a natural-number-indexed product of nonempty factors without any choice axiom. Iterating [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]] gives its product smooth structure, and [[thm-product-of-connected-spaces]] makes the resulting product connected.

[F2] From the stated definition $g=\sum_{a<r}\pi_a^*g_a$, coordinate vectors in distinct factors have zero cross term, while vectors in factor $a$ pair by $g_a$. Thus in every product chart $$G=\operatorname{diag}(G_0,\ldots,G_{r-1});$$ its inverse has the inverse diagonal blocks. This is a direct evaluation of the supplied metric, not a dependency on an examples-page calculation.

[F3] [[prop-christoffel-formula-for-the-levi-civita-connection]] computes the Levi--Civita symbols from a metric matrix, and [[prop-coordinate-geodesic-equation]] characterizes geodesics by the resulting coordinate equations.

[F4] Under [A1], [[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]] supplies the unique maximal geodesic for each initial vector, and [[def-geodesically-complete-riemannian-manifold]] identifies geodesic completeness with all of those domains being $\mathbb R$.

[F5] Under [A1], [[thm-hopf-rinow]] says that a nonempty connected boundaryless Riemannian manifold is metrically complete if and only if it is geodesically complete.

## Proof

**Proof technique:** split the geodesic equation and apply Hopf--Rinow.

1.1 Suppose first that $r>0$. By [F1], finite choice gives a point of $P$, so $P$ is nonempty; [F1] also makes it connected. Repeated product charts take values in $\mathbb R^{n_0}\times\cdots\times\mathbb R^{n_{r-1}} =\mathbb R^{n_0+\cdots+n_{r-1}}$, so the factors' boundaryless local models make $P$ boundaryless. Thus [F5] applies both to $P$ and to every factor. [F1, F5, given]

1.2 Write a product coordinate as $x=(x_a^i)$. By [F2], entries of the $a$-th diagonal block are the coefficients of $g_a$ and depend only on $x_a$; all off-diagonal entries vanish, and the inverse matrix has the corresponding inverse diagonal blocks. Substitution in [F3] shows that a Christoffel symbol with all three indices in the $a$-th block is the corresponding symbol of $g_a$, while every symbol involving more than one block is zero. Indeed, in each term of the Christoffel formula either a metric entry is off-diagonal or a derivative is taken in a coordinate belonging to a different factor. [F2, F3]

1.3 If $r=0$, conditions 1 and 2 are vacuous. The product $P$ is the stipulated one-point manifold: its metric is the zero metric on a singleton and hence is complete, and its only initial tangent vector is zero, whose maximal geodesic is constant on $\mathbb R$ by [F4]. Thus conditions 3 and 4 hold as well. [F4, given]

2.1 Hence, for a smooth curve $\gamma=(\gamma_a):I\to P$, the coordinate geodesic equation in the $a$-th block is exactly the coordinate geodesic equation for $\gamma_a$ in $M_a$. Applying the two directions of [F3] on product-chart subintervals proves $$ \gamma\text{ is a geodesic in }P \quad\Longleftrightarrow\quad \gamma_a\text{ is a geodesic in }M_a\text{ for every }a<r, $$ with the same affine parameter. [F3, step 1.2]

3.1 Assume condition 2 and fix $(p,v)\in TP$, with components $(p_a,v_a)\in TM_a$. By [F4], each factor's maximal geodesic with this initial data is defined on $\mathbb R$. Their finite product $\gamma(t)=(\gamma_a(t))_{a<r}$ is smooth and is a product geodesic by step 2.1. It has initial data $(p,v)$; maximal-geodesic uniqueness in [F4] therefore forces the maximal product geodesic to have domain $\mathbb R$. Thus condition 4 holds. [F4, step 2.1]

3.2 Conversely assume condition 4, fix $a<r$ and $(p_a,v_a)\in TM_a$. By finite choice in [F1], select one basepoint $p_b\in M_b$ for each $b\ne a$, and form product initial data with $a$-component $v_a$ and all other velocity components zero. Its maximal product geodesic is global by condition 4. Step 2.1 makes its $a$-th projection a geodesic on $\mathbb R$ with initial data $(p_a,v_a)$, so uniqueness and maximality in [F4] make the factor's maximal geodesic global. Since $a$ and its initial data were arbitrary, condition 2 holds. [F1, F4, step 2.1]

4.1 By step 1.1 and [F5], condition 1 is equivalent to condition 2 factor by factor, and condition 3 is equivalent to condition 4 for $P$. Steps 3.1 and 3.2 give condition 2 if and only if condition 4. Combining these equivalences proves all four conditions equivalent when $r>0$. Applying [F5] separately to each supplied factor is universal reasoning and makes no simultaneous choice of geodesics or witnesses. [A1, F5, step 1.1, step 3.1, step 3.2]

5.1 The proof includes $r=1$, zero-dimensional factors, zero initial vectors and both infinite-time directions. Nonemptiness of every factor is essential: if one factor were empty, the product would be empty and hence complete vacuously even if another factor were incomplete. Parameter intervals have no finite endpoints after completeness because their domains are all of $\mathbb R$. The only non-ZF assumption is [A1], used exactly through [F4] and [F5]; the finitely many auxiliary basepoints in step 3.2 are supplied by the ZF theorem [F1]. [A1, F1, F4, F5, step 3.2, step 1.3] ∎

## Source locator

Datar, Example 8.2.8, p.49, defines the binary product metric and its tangent splitting. The finite block-symbol calculation, split geodesic equation and completeness equivalence are proved locally above.
