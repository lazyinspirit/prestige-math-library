---
id: thm-complex-coordinate-map-preserves-real-scalar-multiplication
kind: theorem
title: The complex coordinate map preserves real scalar multiplication
status: draft
origin: pipeline
pipeline_run: quantum-prerequisites-4-2026-10-15
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-complex-numbers-and-arithmetic
  - thm-complex-numbers-are-the-real-coordinate-plane
justified_by: []
aliases: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: J. Lebl, Guide to Cultivating Complex Analysis, Section 1.1.1
      url: https://www.jirka.org/ca/ca.pdf
    - title: E. Stein and R. Shakarchi, Complex Analysis, Princeton Lectures in Analysis II, Chapter 1, Section 1.1
      url: https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf
---

## Statement

Let $\Phi:\mathbb C\to\mathbb R^2$ be the coordinate bijection
$\Phi(a+bi)=(a,b)$. Here a map is **real-linear** when it preserves addition and
multiplication by real scalars embedded in $\mathbb C$ via
[[def-complex-numbers-and-arithmetic]]. Then $\Phi$ is real-linear: for all
$z,w\in\mathbb C$ and $r\in\mathbb R$,

$$\Phi(z+w)=\Phi(z)+\Phi(w),\qquad \Phi(rz)=r\Phi(z).$$

## Facts & Assumptions

**Given:** The complex field and the coordinate map $\Phi$.

[F1] [[thm-complex-numbers-are-the-real-coordinate-plane]]: Each complex number has a unique form $a+bi$; $\Phi$ is bijective and preserves addition, and $\Phi((a+bi)(u+vi))=(au-bv,av+bu)$.

[F2] [[def-complex-numbers-and-arithmetic]]: The canonical real embedding is the constant-class map; the imaginary unit is the class of $x$, so an embedded real $r$ has coordinate form $r+0i$.

## Proof

1.1 Write $z=a+bi$. The embedded scalar has coordinates $(r,0)$ by [F2], so the coordinate multiplication formula in [F1] gives $\Phi(rz)=(ra,rb)=r(a,b)=r\Phi(z)$ for every $r$, including $r=0$. [given, F1, F2, algebra]

2.1 Additivity and bijectivity are [F1]; step 1.1 supplies real homogeneity. These are exactly the stated real-linearity conditions, so $\Phi$ is a real-linear bijection. [F1, step 1.1] ∎
