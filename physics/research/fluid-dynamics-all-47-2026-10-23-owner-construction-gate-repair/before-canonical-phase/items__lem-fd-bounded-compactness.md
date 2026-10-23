---
id: lem-fd-bounded-compactness
kind: lemma
title: No-slip compactness and bounded-mode tails
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps: [def-fd-bounded-solenoidal-spaces, lem-fd-bounded-solenoidal-basis, lem-zero-extension-from-w-one-p-zero, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-first-fundamental-theorem-of-calculus-for-l-one]
dependency_roles:
  def-fd-bounded-solenoidal-spaces: mathematical-premise
  lem-fd-bounded-solenoidal-basis: mathematical-premise
  lem-zero-extension-from-w-one-p-zero: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-first-fundamental-theorem-of-calculus-for-l-one: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "L. C. Berselli and S. Spirito, On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "§4, printed pp. 8–12; the local proof uses zero extension and mollification."
    - title: "Leonid Ryzhik, Math 256B Lecture Notes, version 2024"
      url: "https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf"
      locator: "§§5.3–5.4, printed pp. 43–48; the local bounded-domain proof is independent."
---

## Statement

Let $\Omega\subset\mathbb R^3$ be bounded and open, and let $H,V$ and
$(e_j)_{j\ge1}$ be as in the bounded closure-space and basis results on this
page. The inclusion $V\hookrightarrow H$ is compact. If $\Pi_K$ is the
$H$-orthogonal projection onto $\operatorname{span}(e_1,\ldots,e_K)$, then
there are numbers $\delta_K\downarrow0$ such that
$$\|(I-\Pi_K)a\|_H\le\delta_K\|a\|_V\qquad(a\in V).$$

## Statement references

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions*, §4, pp. 8–12](https://www.mdpi.com/2311-5521/6/1/42/pdf).

[Leonid Ryzhik, *Math 256B Lecture Notes*, §§5.3–5.4, pp. 43–48](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf).

## Facts & Assumptions

**Given:** A bounded open $\Omega\subset\mathbb R^3$, the spaces $H,V$ and basis $(e_j)$ above, and the zero-extension convention.

[F1] [[def-fd-bounded-solenoidal-spaces]]: $V$ is the closure of $D_\sigma$ in $H_0^1$ and its norm controls $\|\nabla a\|_2$.

[F2] [[lem-fd-bounded-solenoidal-basis]]: $H$ is complete, $(e_j)$ is an $H$-orthonormal basis, and its finite span is dense in $V$.

[F3] [[lem-zero-extension-from-w-one-p-zero]]: zero extension preserves the $L^2$ and gradient norms for $H_0^1$ fields.

[F4] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: integrals over space and the compact mollifier variable may be interchanged for the integrable functions below.

[F5] [[thm-first-fundamental-theorem-of-calculus-for-l-one]]: integration of the derivative of a smooth function along a coordinate line recovers its endpoint difference.

## Proof

1.1 For $w\in C_c^\infty(\mathbb R^3)$, [F5] and Cauchy–Schwarz in the segment parameter give
$$|w(x-h)-w(x)|^2\le |h|^2\int_0^1|\nabla w(x-sh)|^2ds.$$
Integrating in $x$, using translation invariance and [F4], yields
$\|w(\cdot-h)-w\|_2\le|h|\|\nabla w\|_2$. Density and the isometric zero extension [F3] extend this estimate to every $a\in V$. [given, F1, F3, F4, F5, algebra]

1.2 Fix a nonnegative $\eta\in C_c^\infty(\mathbb R^3)$ with integral one and set $\eta_\epsilon(x)=\epsilon^{-3}\eta(x/\epsilon)$. Jensen's inequality for the probability density $\eta_\epsilon$ and [F4] give
$$\|E_0a-\eta_\epsilon*E_0a\|_2^2\le\int\eta_\epsilon(h)\|E_0a(\cdot-h)-E_0a\|_2^2dh\le C_\eta^2\epsilon^2\|\nabla a\|_2^2.$$
For the $V$ unit ball this error is uniform and tends to zero with $\epsilon$. [given, F3, F4, step 1.1]

2.1 For fixed $\epsilon$, all mollified zero extensions have support in one compact box. Cauchy–Schwarz bounds their sup norms by $\|\eta_\epsilon\|_2\|a\|_2$ and their first derivatives by $\|\nabla\eta_\epsilon\|_2\|a\|_2$, uniformly on the $V$ unit ball. Cover the box by a finite grid fine enough that the derivative bound changes every value by less than a prescribed tolerance; quantize the bounded vector values at grid points in a finite lattice. The resulting finitely many piecewise-constant fields approximate every mollified field in sup norm, hence in $L^2$ on the finite box. Step 1.2 transfers these finite nets to finite $L^2$ nets for the original $V$ unit ball, with arbitrarily small error. Thus that ball is totally bounded in $H$; completeness of $H$ from [F2] makes its closure compact. [given, F2, step 1.2, algebra]

2.2 For every $a$ in that compact closure, $\Pi_Ka\to a$ in $H$ by the $H$-basis property in [F2]. Given $\epsilon>0$, take a finite $\epsilon$-net of the compact set and choose $K$ so that $\|(I-\Pi_K)b\|<\epsilon$ at each net point $b$. Since $I-\Pi_K$ is an orthogonal contraction, the triangle inequality gives $\sup_{\|a\|_V\le1}\|(I-\Pi_K)a\|\le2\epsilon$. These suprema decrease with $K$; taking them as $\delta_K$ proves $\delta_K\to0$ and, by homogeneity, the asserted estimate. [given, F2, step 2.1] ∎
