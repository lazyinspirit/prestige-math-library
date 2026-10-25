---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-meshfree-particle-kernel-quadrature-error.json
  precheck: pass
id: thm-meshfree-particle-kernel-quadrature-error
kind: theorem
title: "Explicit cellwise error for kernel value and gradient quadrature"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-scaled-symmetric-compact-kernel-family, def-meshfree-cell-quadrature-and-fill-radius, lem-scaled-kernel-moments-and-derivative-bounds, lem-cellwise-particle-quadrature-oscillation-bound, thm-mean-value-inequality, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-cauchy-schwarz-and-the-euclidean-norm]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: "No choice principle is used."
sources:
  references:
    - title: "Volker Springel, Smoothed Particle Hydrodynamics in Astrophysics, Annual Review of Astronomy and Astrophysics 48 (2010), author full text"
      url: "https://arxiv.org/html/1109.2219"
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Numerical Methods for Partial Differential Equations, Lecture 25: Particle Methods (Spring 2009)"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/ff7d4237c8f958e646cca0702e4dd17b_MIT18_336S09_lec25.pdf"
---

## Statement

Assume the cell rule of [[def-meshfree-cell-quadrature-and-fill-radius]], $h\le\varepsilon\le1$, $x$ is interior, and $f\in C^1(\mathbb R^d)$ is bounded with bounded first derivative. Define

$$Q^0_{\varepsilon,h}f(x)=\sum_jV_jf(x_j)W_\varepsilon(x-x_j),\qquad Q^1_{\varepsilon,h}f(x)=\sum_jV_jf(x_j)\nabla W_\varepsilon(x-x_j).$$

Let $S_\varepsilon f(x)=\int f(y)W_\varepsilon(x-y)\,dy$ and $D_\varepsilon f(x)=\int f(y)\nabla W_\varepsilon(x-y)\,dy$. There is $C=C(d,R,C_L,W)$, independent of $\varepsilon,h,x$, such that

$$|Q^0_{\varepsilon,h}f(x)-S_\varepsilon f(x)|\le Ch\bigl(\|\nabla f\|_\infty+\varepsilon^{-1}\|f\|_\infty\bigr),$$

$$|Q^1_{\varepsilon,h}f(x)-D_\varepsilon f(x)|\le Ch\bigl(\varepsilon^{-1}\|\nabla f\|_\infty+\varepsilon^{-2}\|f\|_\infty\bigr).$$

## Facts & Assumptions

**Given:** An interior point, a cell rule with the fill-radius and local-volume bounds of [[def-meshfree-cell-quadrature-and-fill-radius]], a fixed admissible kernel, $\varepsilon,h$ with $h\le\varepsilon\le1$, and $f\in C^1$ with bounded $f$ and $\nabla f$.

[F1] [[def-scaled-symmetric-compact-kernel-family]]: $W$ is supported in the closed ball $\overline B(0,R)$, and $M_0,M_1,M_2$ bound $W$, $\nabla W$ and $D^2W$.

[F2] [[def-meshfree-cell-quadrature-and-fill-radius]]: $0<h<\infty$, cells meeting $B(x,r)$ have total volume at most $C_L(r+h)^d$, and an interior point satisfies $B(x,R\varepsilon+2h)\subset\Omega$. Hence $\operatorname{supp}(g_0),\operatorname{supp}(g_1)\subset\overline B(x,R\varepsilon)\subset B(x,R\varepsilon+2h)\subset\Omega$, so both integrands meet the cellwise lemma's support hypothesis and the full-space integrals equal the corresponding $\Omega$ integrals.

[F3] [[lem-scaled-kernel-moments-and-derivative-bounds]]: $\|W_\varepsilon\|_\infty=\varepsilon^{-d}M_0$, $\|\nabla W_\varepsilon\|_\infty=\varepsilon^{-d-1}M_1$, and $\|D^2W_\varepsilon\|_\infty=\varepsilon^{-d-2}M_2$.

[F4] [[lem-cellwise-particle-quadrature-oscillation-bound]]: cell quadrature error is bounded by $2h$ times the Lipschitz constant of the integrand times the total active cell volume.

[F5] [[thm-mean-value-inequality]]: a continuously differentiable function on a line segment with derivative norm at most $L$ changes by at most $L$ times the segment length.

[F6] [[thm-chain-rule-for-total-derivatives]] and [[thm-algebra-of-derivatives]]: after restriction to a line segment, the total chain rule differentiates each factor and the one-variable product rule differentiates each component product.

[F7] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: Euclidean inner products satisfy Cauchy-Schwarz.

## Proof

1.1 Put $g_0(y)=f(y)W_\varepsilon(x-y)$. On any segment $y(t)=y_0+t(y_1-y_0)$, [F6] gives the chain and product rules, and Cauchy-Schwarz [F7] gives $|(g_0\circ y)'(t)|\le(\varepsilon^{-d}M_0\|\nabla f\|_\infty+\varepsilon^{-d-1}M_1\|f\|_\infty)|y_1-y_0|$ by [F3]. Applying [F5] on that segment gives the same Lipschitz constant for $g_0$. Its support is contained in the closed ball $\overline B(x,R\varepsilon)$, hence in $B(x,(R+1)\varepsilon)$. By [F2], the total volume of cells meeting that support is at most $C_L((R+1)\varepsilon+h)^d\le C_L(R+2)^d\varepsilon^d$. Apply [F4] and cancel $\varepsilon^d$; the factor $2$ is absorbed into $C$. This gives the first inequality. [F1, F2, F3, F4, F5, F6, F7]

2.1 Put $g_1(y)=f(y)\nabla W_\varepsilon(x-y)$. On any segment $y(t)=y_0+t(y_1-y_0)$, [F6] gives componentwise chain and product rules, and Cauchy-Schwarz [F7] gives $\|(g_1\circ y)'(t)\|_2\le(\varepsilon^{-d-1}M_1\|\nabla f\|_\infty+\varepsilon^{-d-2}M_2\|f\|_\infty)|y_1-y_0|$ by [F3]. Applying the vector mean value inequality [F5] bounds its Lipschitz constant by this expression. Its support is contained in the same closed ball, so [F2] gives the active-volume bound from step 1.1. Apply [F4] to each vector component; taking the Euclidean norm costs at most a factor $\sqrt d$, and [F4] contributes a factor $2$; both are absorbed into $C$. Cancelling $\varepsilon^d$ proves the second inequality. [F1, F2, F3, F4, F5, F6, F7, step 1.1] ∎
