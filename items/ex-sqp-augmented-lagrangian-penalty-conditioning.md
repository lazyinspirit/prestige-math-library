---
id: ex-sqp-augmented-lagrangian-penalty-conditioning
kind: example
title: "A quadratic equality model shows the AL conditioning tradeoff"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-sqp-augmented-lagrangian-equality-and-inequality
  - alg-sqp-augmented-lagrangian-multiplier-method
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Dimitri P. Bertsekas, Constrained Optimization and Lagrange Multiplier Methods"
      url: https://www.mit.edu/~dimitrib/Constrained-Opt.pdf
      locator: "Chapter 2 §2.2.4–2.2.5, printed pp. 115–121, local multiplier convergence and penalty comparison."
---

## Example

For $f(x,y)=\tfrac12(x^2+y^2)$ subject to $h(x,y)=y=0$, the equality
augmented Lagrangian with penalty $\rho>0$ and multiplier $\nu$ has Hessian
$\operatorname{diag}(1,1+\rho)$. Its exact inner minimizer is
$(0,-\nu/(1+\rho))$, and the multiplier update sends
$\nu$ to $\nu/(1+\rho)$. Thus increasing $\rho$ improves the exact
multiplier contraction factor while worsening the inner Hessian condition
number to $1+\rho$.

## Facts & Assumptions

**Given:** The equality augmented-Lagrangian formula and multiplier update,
with fixed $\rho>0$.

[F1] [[def-sqp-augmented-lagrangian-equality-and-inequality]] defines
$\mathcal L^E_\rho=f+\nu h+\tfrac\rho2h^2$ and
$\nu^+=\nu+\rho h(x^+)$.

[F2] [[alg-sqp-augmented-lagrangian-multiplier-method]] applies that
update after an inner minimization.

[A1] An exact inner routine computes this closed-form minimizer and returns
success within its finite inner cap $M\ge1$; arithmetic is exact and
$\rho>0$.

## Verification

1.1 Substitution into [F1] gives $$\mathcal L^E_\rho(x,y;\nu)=\tfrac12x^2+ \tfrac12(1+\rho)y^2+\nu y.$$ Its Hessian is diagonal with eigenvalues $1$ and $1+\rho$, so the Euclidean spectral condition number is $1+\rho$. [given, A1, F1, algebra]

2.1 The gradient equations are $x=0$ and $(1+\rho)y+\nu=0$; the unique inner minimizer is $(0,-\nu/(1+\rho))$. Its constraint value is $-\nu/(1+\rho)$, so [F1] gives $\nu^+=\nu-\rho\nu/(1+\rho)=\nu/(1+\rho)$. Its absolute contraction factor is $1/(1+\rho)$, which decreases as $\rho$ increases while the condition number in step 1.1 increases. [A1, F1, F2, step 1.1, algebra] ∎
