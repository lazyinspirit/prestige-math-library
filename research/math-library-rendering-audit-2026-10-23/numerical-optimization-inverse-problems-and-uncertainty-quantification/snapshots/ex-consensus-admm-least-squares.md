---
id: ex-consensus-admm-least-squares
kind: example
title: "Two-agent consensus least squares with exact ADMM iterates"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
axiom_base: "No additional axiom; exact scalar real algebra."
deps:
  - alg-two-block-admm-scaled
  - def-saddle-point-for-convex-concave-lagrangian
  - def-convex-program-duality-and-slater-condition
  - thm-lagrangian-weak-duality
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Stephen Boyd, Neal Parikh, Eric Chu, Borja Peleato, and Jonathan Eckstein, Distributed Optimization and Statistical Learning via the Alternating Direction Method of Multipliers, §3"
      url: "https://stanford.edu/~boyd/papers/pdf/admm_distr_stats.pdf"
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization, Chapter 5"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
---

## Statement

Take $f(x)=\tfrac12(x-1)^2$, $g(z)=\tfrac12(z+1)^2$, constraint $x-z=0$,
$\rho=1$, and scaled initial values $z^0=u^0=0$. The primal optimizer is
$x_*=z_*=0$ with value $p_*=1$; $y_*=1$ is a saddle and dual optimizer. The
first two exact scaled ADMM sweeps are
$$(x^1,z^1,u^1)=\left(\tfrac12,-\tfrac14,\tfrac34\right),\qquad (x^2,z^2,u^2)=\left(0,-\tfrac18,\tfrac78\right).$$

## Facts & Assumptions

**Given:** The scalar functions, equality constraint, penalty and initial state in the Statement.

[A1] The scalar functions, equality constraint, penalty, and initial state are exactly those in the Statement; the equality row $(1,-1)$ is nonzero and hence has full row rank.


[F1] [[alg-two-block-admm-scaled]]: $x^{k+1}$ minimizes $f(x)+\frac12(x-z^k+u^k)^2$, $z^{k+1}$ minimizes $g(z)+\frac12(x^{k+1}-z+u^k)^2$, and $u^{k+1}=u^k+x^{k+1}-z^{k+1}$.

[F2] [[def-saddle-point-for-convex-concave-lagrangian]]: saddle means $\mathcal L((x_*,z_*),y)\le\mathcal L((x_*,z_*),y_*)\le\mathcal L((x,z),y_*)$ for all arguments.

[F3] [[def-convex-program-duality-and-slater-condition]]: the dual function is the infimum of the Lagrangian and the dual value is its supremum over multipliers.

[F4] [[thm-lagrangian-weak-duality]]: every dual value is at most every feasible primal objective value.

## Proof


1.1 On the feasible set $z=x$, the objective is $$f(x)+g(x)=\tfrac12(x-1)^2+\tfrac12(x+1)^2=x^2+1,$$ which is uniquely minimized at $x=z=0$ with value $1$. For $y_*=1$, $$\mathcal L((x,z),1)=f(x)+g(z)+x-z=1+\tfrac12x^2+\tfrac12z^2\ge1,$$ with equality at $(0,0)$; feasibility makes $\mathcal L((0,0),y)=1$ for every $y$. These are exactly the saddle inequalities [F2]. [A1, given, F2, algebra]

1.2 Differentiating the first strictly convex quadratic in [F1] gives $2x^{k+1}=1+z^k-u^k$. At $k=0$ this yields $x^1=1/2$. Differentiating the second gives $2z^{k+1}=x^{k+1}+u^k-1$, hence $z^1=-1/4$ and then $u^1=u^0+x^1-z^1=3/4$. [A1, F1, given, algebra]

2.1 The equality matrix is $A=(1,-1)$, whose single row is linearly independent, so the dual definition [F3] applies. Its dual function is $$d(y)=\inf_x\{\tfrac12(x-1)^2+yx\}+\inf_z\{\tfrac12(z+1)^2-yz\}=(y-\tfrac12y^2)+(y-\tfrac12y^2)=1-(y-1)^2.$$ Thus its maximum is $1$ at $y=1$, consistent with weak duality [F4] and the saddle value. [A1, F3, F4, step 1.1, algebra]

3.1 The same two equations give $x^2=(1-1/4-3/4)/2=0$, $z^2=(0+3/4-1)/2=-1/8$, and $u^2=3/4+0-(-1/8)=7/8$. Each subproblem is a strictly convex quadratic, so both minimizers in each of these sweeps are attained and unique. The recurrence values are exact rationals. [A1, F1, step 1.2, algebra] ∎
