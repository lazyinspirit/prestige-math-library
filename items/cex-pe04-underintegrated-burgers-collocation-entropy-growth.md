---
id: cex-pe04-underintegrated-burgers-collocation-entropy-growth
kind: counterexample
title: Underintegrated Burgers collocation can increase quadratic entropy
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-pe04-diagonal-norm-sbp-element-data
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement refuted

The SBP matrix identity alone guarantees that a naively collocated strong-form discretization of a nonlinear conservation law cannot increase its discrete quadratic entropy.

## Witness Data

Use one reference interval $[-1,1]$ with three Legendre–Gauss–Lobatto nodes $(-1,0,1)$, weights $H=\operatorname{diag}(1/3,4/3,1/3)$, derivative matrix
$$D=\begin{pmatrix}-3/2&2&-1/2\\-1/2&0&1/2\\1/2&-2&3/2\end{pmatrix},$$
and boundary matrix $B=\operatorname{diag}(-1,0,1)$. For periodic Burgers flux $f(u)=u^2/2$, define the naive collocated strong form
$$\dot U+D f(U)+H^{-1}B\bigl(\widehat f_{\partial}-f(U_{\partial})\bigr)=0,$$
where $\widehat f_{\partial}=(f(U_0)+f(U_2))/2$ is used at both periodic endpoints. Take $U=(-3,-1,-2)^T$.

## Facts & Assumptions

**Given:** The three-node nodal vector, positive diagonal quadrature norm, exact SBP identity, pointwise Burgers flux, central periodic boundary flux, and quadratic entropy $E(U)=\frac12U^THU$.

[F1] [[def-pe04-diagonal-norm-sbp-element-data]]: SBP data satisfy $D\mathbf1=0$ and $HD+D^TH=B$ with positive diagonal $H$.

## Verification

1.1 Direct multiplication gives $D\mathbf1=0$ and $HD+D^TH=\operatorname{diag}(-1,0,1)=B$, so the derivative and norm satisfy the stated SBP identity. The three-point Gauss–Lobatto rule is exact through degree three, while both the quadratic entropy integrand $u_h^2$ and cubic entropy flux $u_h^3$ exceed that degree for a quadratic polynomial; the pointwise collocation therefore underintegrates these nonlinear products. [given, F1, algebra]

2.1 At the chosen state, $f(U)=(9/2,1/2,2)^T$ and $\widehat f_{\partial}=13/4$. Hence $Df(U)=(-27/4,-5/4,17/4)^T$ and $H^{-1}B(\widehat f_{\partial}-f(U_{\partial}))=(15/4,0,15/4)^T$. The semidiscrete residual is therefore $(-3,-5/4,8)^T$, so $\dot U=(3,5/4,-8)^T$. [given, step 1.1, algebra]

3.1 The discrete entropy rate is $\dot E=U^TH\dot U=(-3)(1/3)(3)+(-1)(4/3)(5/4)+(-2)(1/3)(-8)=2/3>0$. This exact periodic state contradicts the asserted universal nonincrease, despite the SBP identity; it does not contradict the entropy-stable flux-differencing theorem, which uses a different volume flux. [given, step 2.1, algebra] ∎
