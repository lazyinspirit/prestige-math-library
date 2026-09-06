---
id: thm-multihomogeneous-map-to-projective-space
kind: theorem
title: Fixed-multidegree forms define maps from products to projective space
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-product-varieties-universal-property, cor-projective-variety-product-exists, thm-affine-variety-product-coordinate-ring, def-morphism-to-projective-space-homogeneous-coordinates]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, §6i homogeneous maps and the Segre map
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
verification:
  precheck: pass
---

## Statement

Let $F_0,\ldots,F_N$ be bihomogeneous forms of the same bidegree $(a,b)$ on $\mathbf P^m\times\mathbf P^n$, with no common zero there. They define a morphism to $\mathbf P^N$ by $([x],[y])\mapsto[F_0(x,y):\cdots:F_N(x,y)]$.

## Facts & Assumptions

**Given:** Nonnegative integers $m,n,N,a,b$, the page's algebraically closed field $k$, and forms $F_0,\ldots,F_N$ of bidegree $(a,b)$ with no common zero.

## Proof

1.1 Replacing $(x,y)$ by $(\lambda x,\mu y)$ multiplies every $F_i$ by $\lambda^a\mu^b$, a common nonzero scalar. Thus the projective point is well defined. [given, algebra]

2.1 Use the closed Segre model of the product from `cor-projective-variety-product-exists`, with coordinates $z_{ij}=x_i y_j$. On its chart $z_{pq}\ne0$, both $x_p$ and $y_q$ are nonzero. Put $d=\max(a,b)$ and form $H_i=x_p^{d-a}y_q^{d-b}F_i$ for every $i$. These have common bidegree $(d,d)$. Each of their monomials has $d$ factors among the $x$-variables and $d$ among the $y$-variables; pair those factors to write it as a product of $d$ coordinates $z_{ij}$. Thus each $H_i$ is the restriction of a homogeneous degree-$d$ polynomial $G_i$ in the Segre ambient coordinates. On this chart the common multiplier $x_p^{d-a}y_q^{d-b}$ is nonzero, so the $G_i$ have no common zero and $[G_0:\cdots:G_N]=[F_0:\cdots:F_N]$. [step 1.1, algebra, construct]

3.1 The charts $z_{pq}\ne0$ cover the constructed projective variety. On each chart step 2.1 supplies an actual tuple of homogeneous polynomials in its ambient projective coordinates, of one common degree and with no common zero there. On overlaps the tuples give the same point by step 1.1, so they satisfy the cross-multiplication compatibility of `def-morphism-to-projective-space-homogeneous-coordinates`. That definition now applies directly and proves the morphism assertion. It includes $a=0$ or $b=0$; when both are zero, the nonzero constant tuple gives a constant morphism, and factors $\mathbf P^0$ cause no change. [step 1.1, step 2.1] ∎
