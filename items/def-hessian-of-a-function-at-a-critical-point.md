---
id: def-hessian-of-a-function-at-a-critical-point
kind: definition
title: "The intrinsic Hessian of a smooth function at a critical point"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-critical-point-and-critical-value-of-a-smooth-function]
justified_by: [lem-coordinate-change-congruence-for-the-critical-hessian]
aliases: []
landmark: false
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
---

## Definition

Let $f:M\to \mathbb R$ be smooth, and let $p\in M$ be a critical point of $f$
([[def-critical-point-and-critical-value-of-a-smooth-function]]).

Choose a smooth chart $x=(x^1,\dots,x^n)$ around $p$, write
$a:=x(p)$, and let $g:=f\circ x^{-1}$. The matrix

$$H_x(f,p):=\left(\frac{\partial^2 g}{\partial x^i\partial x^j}(a)\right)_{1\le i,j\le n}$$

is symmetric, and it defines a bilinear form on $T_pM$ by

$$\operatorname{Hess}_p(f)\!\left(\sum_i u^i\frac{\partial}{\partial x^i}\Big|_p,\sum_j v^j\frac{\partial}{\partial x^j}\Big|_p\right):=\sum_{i,j}u^iv^j\frac{\partial^2 g}{\partial x^i\partial x^j}(a).$$

By [[lem-coordinate-change-congruence-for-the-critical-hessian]], this bilinear
form is independent of the chosen chart. It is the **Hessian of $f$ at $p$**.
