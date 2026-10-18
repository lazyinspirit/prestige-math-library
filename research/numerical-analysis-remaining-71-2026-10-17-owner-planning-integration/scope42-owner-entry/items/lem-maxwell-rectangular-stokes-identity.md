---
id: lem-maxwell-rectangular-stokes-identity
kind: lemma
title: Stokes identity on a rectangular Yee face
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [cor-vector-valued-ftc-and-lipschitz-bound, thm-continuous-on-a-rectangle-is-riemann-integrable, thm-riemann-fubini-on-product-rectangles]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John B. Schneider, Understanding the Finite-Difference Time-Domain Method
      url: https://eecs.wsu.edu/~schneidj/ufdtd/ufdtd.pdf
      locator: "Chapter 2 §2.7, printed pp. 19–21: Stokes’ theorem and its use for electromagnetic curl equations. The coordinate-rectangle identity is verified locally."
verification:
  precheck: pass
---

## Statement

Let $F=\{(x_0,y,z):y_0\le y\le y_1,\ z_0\le z\le z_1\}$ be an oriented rectangle with normal $e_x$, and let $E$ be a $C^1$ vector field near $F$. Orient $\partial F$ by the outward-normal-first convention. Then
$$\int_{\partial F}E\cdot t\,ds=\int_F(\operatorname{curl}E)\cdot e_x\,dS=\int_{y_0}^{y_1}\int_{z_0}^{z_1}(\partial_yE_z-\partial_zE_y)(x_0,y,z)\,dz\,dy.$$
The identities for normals $e_y$ and $e_z$ follow by cyclic permutation of coordinates. Reversing a face orientation reverses both integrals.

## Facts & Assumptions


**Given:** The rectangle and orientation above, a $C^1$ vector field $E$, and the one-dimensional fundamental theorem of calculus.

[F1] For a continuously differentiable scalar function on a closed interval, the integral of its derivative is its endpoint difference. ([[cor-vector-valued-ftc-and-lipschitz-bound]])

[F2] Every continuous real function on a closed nondegenerate rectangle is Riemann integrable. ([[thm-continuous-on-a-rectangle-is-riemann-integrable]])

[F3] For a Riemann-integrable function on a product of nondegenerate rectangles, the iterated Riemann integrals in either order equal the product integral. ([[thm-riemann-fubini-on-product-rectangles]])

## Proof

1.1 With the stated orientation, the four boundary contributions are $\int_{y_0}^{y_1}E_y(x_0,y,z_0)\,dy$, $\int_{z_0}^{z_1}E_z(x_0,y_1,z)\,dz$, $-\int_{y_0}^{y_1}E_y(x_0,y,z_1)\,dy$, and $-\int_{z_0}^{z_1}E_z(x_0,y_0,z)\,dz$. Apply [F1] to the two differences to rewrite their sum as $-\int_{y_0}^{y_1}\int_{z_0}^{z_1}\partial_zE_y\,dz\,dy+\int_{z_0}^{z_1}\int_{y_0}^{y_1}\partial_yE_z\,dy\,dz$. [F1, given, algebra]

2.1 The two integrands $\partial_yE_z$ and $\partial_zE_y$ are continuous on the compact rectangle, so each is Riemann integrable by [F2]. Riemann–Fubini [F3] identifies each double integral with either order of its iterated integral. Thus the $\partial_yE_z$ term in step 1.1 can be written in the same $dy$-then-$dz$ order as the other term. [F2, F3, step 1.1, algebra]

3.1 Combining the two terms from step 1.1 using the ordering justified in step 2.1 gives $\int_{y_0}^{y_1}\int_{z_0}^{z_1}(\partial_yE_z-\partial_zE_y)\,dz\,dy$, exactly the $x$-component of the curl flux. Cyclic relabeling gives the other coordinate faces; reversing the orientation changes the sign of every boundary and flux term. [step 1.1, step 2.1, algebra] ∎
