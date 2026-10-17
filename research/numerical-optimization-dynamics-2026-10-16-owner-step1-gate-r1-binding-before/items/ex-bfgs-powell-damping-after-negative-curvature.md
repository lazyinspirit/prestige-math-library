---
id: ex-bfgs-powell-damping-after-negative-curvature
kind: example
title: "Powell damping repairs a negative-curvature trial pair"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-bfgs-curvature-pair-and-update-formulas
  - lem-powell-damping-gives-positive-curvature
  - lem-bfgs-updates-preserve-secant-symmetry-and-spd
  - alg-full-memory-bfgs-with-curvature-safeguards
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
      locator: "Chapter 18 §18.3, Procedure 18.2, equations (18.15)–(18.17), printed pp. 537–538 / PDF pp. 555–556."
    - title: "Manuel Carreira-Perpiñán, Lecture Notes on Numerical Optimization"
      url: "https://faculty.ucmerced.edu/mcarreira-perpinan/teaching/EECS260/lecture-notes.pdf"
      locator: "§6, BFGS curvature and positive-definiteness discussion, printed pp. 21–22 / PDF pp. 22–23."
---

## Example

Consider the nonconvex function $f(x_1,x_2)=-\tfrac12x_1^2+\tfrac12x_2^2$ at $x=(1,0)^T$. The gradient is $g=(-1,0)^T$. The trial direction $p=(1,0)^T$ and trial step $\alpha=1$ give $s=(1,0)^T$ and $y=(-1,0)^T$. Use $B=H=I$ to compare the raw and Powell-damped updates.

## Facts & Assumptions

**Given:** The function, point, trial direction and step, and initial matrices in the Example.

[F1] [[def-bfgs-curvature-pair-and-update-formulas]]: an undamped BFGS update requires $s^Ty>0$; Powell damping uses $c=s^TBs$ and, if $s^Ty<0.2c$, forms $\widetilde y=\theta y+(1-\theta)Bs$ with $\theta=0.8c/(c-s^Ty)$.

[F2] [[lem-powell-damping-gives-positive-curvature]]: this damping rule gives $s^T\widetilde y=0.2c>0$ in the damped branch.

[F3] [[lem-bfgs-updates-preserve-secant-symmetry-and-spd]]: for SPD $B$ and positive damped curvature, the BFGS Hessian update remains SPD and satisfies $B^+s=\widetilde y$.

[F4] [[alg-full-memory-bfgs-with-curvature-safeguards]]: the normal search branch requires a strong Wolfe step and reports line-search failure if its finite search does not return one.

## Verification


**Given:** The function, point, trial direction and step, and initial matrices in the Example.

[F1] [[def-bfgs-curvature-pair-and-update-formulas]]: an undamped BFGS update requires $s^Ty>0$; Powell damping uses $c=s^TBs$ and, if $s^Ty<0.2c$, forms $\widetilde y=\theta y+(1-\theta)Bs$ with $\theta=0.8c/(c-s^Ty)$.

[F2] [[lem-powell-damping-gives-positive-curvature]]: this damping rule gives $s^T\widetilde y=0.2c>0$ in the damped branch.

[F3] [[lem-bfgs-updates-preserve-secant-symmetry-and-spd]]: for SPD $B$ and positive damped curvature, the BFGS Hessian update remains SPD and satisfies $B^+s=\widetilde y$.

[F4] [[alg-full-memory-bfgs-with-curvature-safeguards]]: the normal search branch requires a strong Wolfe step and reports line-search failure if its finite search does not return one.



1.1 Here $g^Tp=-1<0$, and $f(x+p)-f(x)=-3/2$. The Armijo inequality holds for $c_1=10^{-4}$, but the directional derivatives are $\phi'(0)=-1$ and $\phi'(1)=-2$. For $c_2=2/5$, the Wolfe curvature test would require $-2\ge-2/5$, which is false; the strong curvature test fails as well. Thus this is a nonconvex trial pair, not a step accepted by the strong-Wolfe search of [F4]. [given, F4, algebra]

1.2 The raw pair has $s^Ty=-1$, so its BFGS curvature denominator is negative. Direct substitution into the formal Hessian-update expression gives $I-ss^T+yy^T/(-1)=\operatorname{diag}(-1,1)$, whose quadratic form at $e_1=(1,0)^T$ is $-1$; it is not SPD. [given, F1, algebra]

1.3 Here $c=s^TBs=1$ and $s^Ty=-1<0.2c$, so $\theta=0.8/(1-(-1))=0.4$ and $\widetilde y=0.4(-1,0)^T+0.6(1,0)^T=(0.2,0)^T$. Therefore $s^T\widetilde y=0.2>0$, as also follows from [F2]. [given, F1, F2, algebra]

2.1 The damped update is $$ B^+=I-ss^T+\frac{\widetilde y\widetilde y^T}{s^T\widetilde y} =\operatorname{diag}(0.2,1). $$ It is SPD and $B^+s=(0.2,0)^T=\widetilde y$, in agreement with [F3]. The example shows the algebraic role of damping; because the trial fails Wolfe, the normal line-search algorithm rejects it rather than treating it as a successful BFGS iteration. [given, F1, F3, step 1.3, algebra] ∎

