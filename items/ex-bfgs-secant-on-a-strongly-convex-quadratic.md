---
id: ex-bfgs-secant-on-a-strongly-convex-quadratic
kind: example
title: "An exact Bfgs secant update on a two-variable quadratic"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-bfgs-curvature-pair-and-update-formulas
  - alg-full-memory-bfgs-with-curvature-safeguards
  - lem-bfgs-updates-preserve-secant-symmetry-and-spd
proof_strategy: direct
axiom_use: "None. This example uses finite exact-arithmetic calculations; no choice principle is used."
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 6 §6.1, BFGS update and quadratic secant discussion, printed pp. 137–142 / PDF pp. 155–160."
    - title: "Manuel Carreira-Perpiñán, Lecture Notes on Numerical Optimization"
      url: "https://faculty.ucmerced.edu/mcarreira-perpinan/teaching/EECS260/lecture-notes.pdf"
      locator: "§6, BFGS update and exact quadratic discussion, printed pp. 21–22 / PDF pp. 22–23."
---

## Example

Let $A=\begin{pmatrix}2&0\\0&3\end{pmatrix}$ and $f(x)=\tfrac12x^TAx$ on $\mathbb R^2$. Start at $x_0=(1,1)^T$ with $B_0=H_0=I$. The exact steepest-descent BFGS direction is $p_0=-\nabla f(x_0)=(-2,-3)^T$. Take the exact line-search step $\alpha_0=13/35$ and form the Hessian BFGS update.

## Facts & Assumptions

**Given:** The objective, start, initial matrices, direction, and step in the Example.

[F1] [[def-bfgs-curvature-pair-and-update-formulas]]: $s=\alpha p$, $y=g^+-g$, and $B^+=B-Bss^TB/(s^TBs)+yy^T/(s^Ty)$ when $s^Ty>0$.

[F2] [[alg-full-memory-bfgs-with-curvature-safeguards]]: an exact full-memory iteration uses $p=-Hg$ and accepts a positive strong Wolfe step before updating.

[F3] [[lem-bfgs-updates-preserve-secant-symmetry-and-spd]]: an SPD BFGS update with positive curvature satisfies $B^+s=y$ and remains SPD.

## Verification


**Given:** The objective, start, initial matrices, direction, and step in the Example.

[F1] [[def-bfgs-curvature-pair-and-update-formulas]]: $s=\alpha p$, $y=g^+-g$, and $B^+=B-Bss^TB/(s^TBs)+yy^T/(s^Ty)$ when $s^Ty>0$.

[F2] [[alg-full-memory-bfgs-with-curvature-safeguards]]: an exact full-memory iteration uses $p=-Hg$ and accepts a positive strong Wolfe step before updating.

[F3] [[lem-bfgs-updates-preserve-secant-symmetry-and-spd]]: an SPD BFGS update with positive curvature satisfies $B^+s=y$ and remains SPD.



1.1 The gradient is $\nabla f(x)=Ax$, so $g_0=(2,3)^T$ and the direction in [F2] is $p_0=-g_0=(-2,-3)^T$. Along this ray, $\phi'(t)=g_0^Tp_0+t\,p_0^TAp_0=-13+35t$, so the exact minimizer is $\alpha_0=13/35$. [given, F1, F2, algebra]

1.2 At this step $\phi'(\alpha_0)=0$, which satisfies the strong curvature test for $c_2=2/5$. The quadratic identity $\phi(\alpha)=\phi(0)+\alpha\phi'(0)+\tfrac12\alpha^2p_0^TAp_0$ gives $\phi(\alpha_0)-\phi(0)=-169/70\le -(10^{-4})(169/35)=10^{-4}\alpha_0\phi'(0)$, so the strong Wolfe Armijo test also holds. [given, F2, algebra]

1.3 The step and gradient change are $s_0=\alpha_0p_0$ and $y_0=As_0=\alpha_0(-4,-9)^T$. Hence $s_0^Ty_0=35\alpha_0^2>0$ and $s_0^TB_0s_0=13\alpha_0^2>0$. [given, F1, algebra]

2.1 Substitution in [F1] gives $$ B_1=I-\frac1{13}\begin{pmatrix}4&6\\6&9\end{pmatrix} +\frac1{35}\begin{pmatrix}16&36\\36&81\end{pmatrix} =\frac1{455}\begin{pmatrix}523&258\\258&1193\end{pmatrix}. $$ Multiplication yields $B_1s_0=\alpha_0(-4,-9)^T=y_0$. The positive curvature from step 1.3 and [F3] also imply $B_1$ is SPD. [given, F1, F3, step 1.3, algebra] ∎

## Remarks

This verifies one exact strong-Wolfe input to the BFGS recurrence. A finite-budget bracketing search may return a different acceptable step or a failure status; this example does not claim that the search returns exactly $13/35$.
