---
id: thm-reference-simplex-trace-and-gauss-green
kind: theorem
title: Sobolev face traces and Gauss–Green on a reference simplex
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [lem-affine-simplex-gauss-green-formula, lem-smooth-density-on-reference-simplex, def-sobolev-space-wkp-and-its-norm, thm-riesz-fischer-completeness-of-l-p, thm-holder-inequality-for-integrals, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 14
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap14.pdf
      locator: "§14.1, printed pp. 156–157: simplex integration by parts and face fluxes."
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 15
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap15.pdf
      locator: "§15.1, printed pp. 165–167: trace estimates on a reference simplex."
verification: {}
---

## Statement

Assume Countable Choice. Let $1<p<\infty$ and $p'=p/(p-1)$. For each facet $F$ of
$\widehat S_d$, restriction of smooth functions extends uniquely to a
bounded linear trace map
$$\gamma_F:W^{1,p}(\widehat S_d;\mathbb R)\to L^p(F;\mathbb R).$$
For real-valued $u\in W^{1,p}(\widehat S_d)$ and
$G\in W^{1,p'}(\widehat S_d;\mathbb R^d)$, the facet traces satisfy
$$\int_{\widehat S_d}u\,\operatorname{div}G+\nabla u\cdot G\,dx =\sum_{F\subset\partial\widehat S_d}\int_F\gamma_Fu\,\gamma_FG\cdot\widehat n_F\,dS.$$
Here $\gamma_FG$ is the componentwise trace and $\widehat n_F$ is the
outward unit normal. The bounded C1-domain trace and Green theorems are not
used for the simplex.

## Facts & Assumptions

**Given:** Countable Choice, the reference simplex, $1<p<\infty$, and the Sobolev spaces specified in [[def-sobolev-space-wkp-and-its-norm]].

[F1] Smooth functions on a neighbourhood of the closed simplex are dense in $W^{1,q}(\widehat S_d)$ for every finite $q$. ([[lem-smooth-density-on-reference-simplex]])

[F2] For $C^1$ vector fields on a nondegenerate affine simplex, the divergence integral equals the sum of outward facet fluxes. ([[lem-affine-simplex-gauss-green-formula]])

[F3] The spaces $L^p(F)$ are complete for finite $p$, and Holder's inequality gives $\|fg\|_{L^1(F)}\le\|f\|_{L^p(F)}\|g\|_{L^{p'}(F)}$. ([[thm-riesz-fischer-completeness-of-l-p]], [[thm-holder-inequality-for-integrals]])

[F4] The smooth-density supplier [F1] assumes Countable Choice. ([[def-countable-choice]])

## Proof

1.1 Fix a facet $F$ opposite the vertex $z_F$, let $H_F>0$ be the altitude from $z_F$ to $F$, and put $X(x)=x-z_F$. On $F$, $X\cdot\widehat n_F=H_F$; on every other facet, which contains $z_F$, $X$ is tangent, so its normal component is zero. For a smooth scalar $u$, apply [F2] to $|u|^pX$. Since $p>1$, $|u|^p$ is continuously differentiable, and $|X|\le\operatorname{diam}(\widehat S_d)$; hence $$H_F\int_F|u|^p\,dS\le d\int_{\widehat S_d}|u|^p\,dx +p\operatorname{diam}(\widehat S_d)\int_{\widehat S_d}|u|^{p-1}|\nabla u|\,dx.$$ Holder bounds the last integral by $\|u\|_p^{p-1}\|\nabla u\|_p$. For $a=\|u\|_p$ and $b=\|\nabla u\|_p$, if $b\le a$ then $a^{p-1}b\le a^p$, while if $a\le b$ then $a^{p-1}b\le b^p$. Thus the product is at most $a^p+b^p$. Since $H_F>0$, the resulting inequality gives $\|u\|_{L^p(F)}\le C_{F,p}\|u\|_{W^{1,p}(\widehat S_d)}$. [F2, F3, given, algebra]

2.1 Let $(u_j)$ be a smooth sequence converging to $u$ in $W^{1,p}(\widehat S_d)$, which exists by [F1]. Applying the estimate of step 1.1 to $u_j-u_i$ shows $(u_j|_F)$ is Cauchy in the complete space $L^p(F)$; define $\gamma_Fu$ to be its limit. The same estimate shows the limit is independent of the chosen smooth approximating sequence and $\|\gamma_Fu\|_{L^p(F)}\le C\|u\|_{W^{1,p}}$. Linearity follows by taking approximating sequences for sums and scalar multiples. [F1, F3, step 1.1]

3.1 For smooth $u,G$, apply [F2] to the vector field $uG$. Its divergence is $\nabla u\cdot G+u\operatorname{div}G$, so the displayed Green identity holds with ordinary restrictions. Choose smooth approximations $u_j\to u$ in $W^{1,p}$ and $G_j\to G$ componentwise in $W^{1,p'}$ by [F1]. By step 2.1 their facet traces converge in $L^p$ and $L^{p'}$; Holder [F3] makes the boundary products converge in $L^1(F)$. The volume products converge in $L^1$ by Holder and convergence of both Sobolev norms. Passing to the limit in the smooth identity proves the formula for $u,G$. [F1, F2, F3, F4, step 2.1] ∎
