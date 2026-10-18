---
id: "ex-na-least-squares-poisson-residual-certificate"
kind: "example"
title: "An exact polynomial Poisson solution has a zero residual certificate"
status: "draft"
origin: "session"
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 5
deps: ["def-na-least-squares-poisson-first-order", "thm-zero-boundary-piecewise-polynomials-in-w10p", "def-countable-choice", "def-wkp-zero-as-a-sobolev-closure", "def-na-hdiv-space"]
justified_by: []
aliases: []
proof_strategy: direct
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Peter Bochev and Max Gunzburger, Least-squares finite element methods", "url": "https://people.sc.fsu.edu/~mgunzburger/files_papers/gunzburger-ls-icm.pdf", "locator": "Complete 26-page article; §§2.2.1 and 4.1–4.2."}, {"title": "J. Bond et al., A First-Order System Least-Squares Finite Element Method for the Poisson-Boltzmann Equation", "url": "https://lukeo.cs.illinois.edu/files/2010_BoChCyOl_lspbe.pdf", "locator": "Complete 11-page article; Theorem 1 and proof; comparative weighted model."}]}
---

## Statement

Assume Countable Choice. On $\Omega=(0,1)^2$ with its two-triangle diagonal mesh, let $u=x(1-x)y(1-y)$, $\sigma=-\nabla u$, and $f=-\Delta u$. Then $u\in H^1_0(\Omega)$, $\sigma\in H(div;\Omega)$, $\sigma+\nabla u=0$, and $div\sigma-f=0$, so the continuous least-squares residual is zero.

## Facts & Assumptions

**Given:** The square domain and the polynomial fields in the Statement.

[F1] The first-order Poisson residual and boundary convention. ([[def-na-least-squares-poisson-first-order]])

[A1] Countable Choice is declared by the zero-boundary polynomial density supplier. ([[def-countable-choice]])

[F2] A conforming piecewise polynomial with zero boundary traces on a finite matching mesh belongs to $H^1_0$. ([[thm-zero-boundary-piecewise-polynomials-in-w10p]])

[F3] $H^1_0$ is the $H^1$ closure of compactly supported smooth functions. ([[def-wkp-zero-as-a-sobolev-closure]])

[F4] H(div) consists of L2 vector fields with L2 distributional divergence. ([[def-na-hdiv-space]])

## Proof

1.1 The factor $x(1-x)y(1-y)$ vanishes on all four edges. Differentiating gives $\Delta u=-2x(1-x)-2y(1-y)$, so $f=2x(1-x)+2y(1-y)$ is polynomial and [F2] gives $u\in H^1_0$. For every $v\in C_c^\infty(\Omega)$, integration by parts gives $(\nabla u,\nabla v)=(f,v)$; both sides are continuous in the H1 norm, so [F3] extends the identity to every $v\in H^1_0$. Thus $u$ is the weak Dirichlet solution. Also $\sigma=-\nabla u$ and $\operatorname{div}\sigma=f$ are polynomials in $L^2$, so [F4] gives $\sigma\in H(\operatorname{div};\Omega)$. [A1, F1, F2, F3, F4, given, algebra]

2.1 By definition $\sigma+\nabla u=0$ and $div\sigma=-\Delta u=f$, so both components in [F1] vanish pointwise. The objective is nonnegative and therefore this exact zero residual is a global least-squares minimum. [F1, step 1.1, algebra] ∎
