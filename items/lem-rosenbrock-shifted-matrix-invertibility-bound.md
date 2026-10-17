---
id: lem-rosenbrock-shifted-matrix-invertibility-bound
title: "A small shifted Jacobian has an explicit inverse bound"
kind: lemma
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-rank-nullity
  - def-invertible-euclidean-linear-map
  - def-induced-matrix-p-norm
  - thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "WIAS Berlin, Numerical Methods for Stiff Ordinary Differential Equations, §2.4 Rosenbrock Methods"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUMERIK_II_24_25/ode_2.pdf"
      locator: "§2.4, pp. 43–47: invertibility and boundedness of the shifted stage matrix"
    - title: "Daniel Kressner, Advanced Numerical Analysis, §3.5 Rosenbrock methods"
      url: "https://www.epfl.ch/labs/anchp/wp-content/uploads/2018/05/AdvancedNA2015.pdf"
      locator: "§3.5, printed pp. 42–44"
---

## Statement

Let $d\ge1$, $B\in\mathbb R^{d\times d}$, $h>0$, $\gamma>0$, and $0\le q<1$ satisfy $\|\gamma hB\|_2\le q$, where $\|\cdot\|_2$ is the matrix norm induced by the Euclidean vector $2$-norm, as in [[def-induced-matrix-p-norm]]. Then $A=I_d-\gamma hB$ is invertible and
$$\|A^{-1}\|_2\le \frac{1}{1-q}.$$
In particular, if $\|\gamma hB\|_2\le\tfrac12$, then $\|A^{-1}\|_2\le2$.

## Facts & Assumptions

**Given:** The finite-dimensional real vector space $\mathbb R^d$, its Euclidean norm, and the stated $B,h,\gamma,q$.

[F1] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean norm obeys the triangle inequality and is homogeneous.

[F2] [[thm-rank-nullity]]: for a linear map on a finite-dimensional vector space, dimension equals nullity plus rank.

[F3] [[def-invertible-euclidean-linear-map]]: a square Euclidean linear map is invertible when it has a two-sided linear inverse.

[F4] [[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]: $\|Bx\|_2\le\|B\|_2\|x\|_2$ and $\|BC\|_2\le\|B\|_2\|C\|_2$.

## Proof

**Given:** The data in the Statement.

1.1 For every $x\in\mathbb R^d$, [F4] gives $\|Bx\|_2\le\|B\|_2\|x\|_2$, and the triangle inequality in [F1] gives $\|Ax\|_2=\|x-\gamma hBx\|_2\ge\|x\|_2-\gamma h\|Bx\|_2\ge(1-q)\|x\|_2$. Since $1-q>0$, $Ax=0$ forces $x=0$, so $A$ is injective. [given, F1, F4, algebra]

2.1 The domain and codomain of $A$ both have dimension $d$. By [F2] and step 1.1, $\operatorname{rank}A=d$, so its image is all of $\mathbb R^d$. Thus $A$ is bijective and has the inverse of [F3]. [step 1.1, F2, F3, algebra]

3.1 For any $z\in\mathbb R^d$, let $x=A^{-1}z$. Step 1.1 yields $(1-q)\|A^{-1}z\|_2\le\|z\|_2$; taking the supremum over $\|z\|_2=1$ proves the inverse bound. Substitution of $q=1/2$ gives the final claim. [step 2.1, step 1.1, algebra] ∎
