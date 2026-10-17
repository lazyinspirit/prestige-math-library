---
id: lem-admm-exact-subproblem-optimality-relations
kind: lemma
title: "Optimality relations for exact two-block ADMM subproblems"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
axiom_base: "No additional axiom; finite-dimensional real definitions and exact algebra only."
deps:
  - alg-two-block-admm-scaled
  - def-extended-real-epsilon-subdifferential
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Stephen Boyd, Neal Parikh, Eric Chu, Borja Peleato, and Jonathan Eckstein, Distributed Optimization and Statistical Learning via the Alternating Direction Method of Multipliers, §3.1"
      url: "https://stanford.edu/~boyd/papers/pdf/admm_distr_stats.pdf"
    - title: "Jonathan Eckstein and Dimitri P. Bertsekas, On the Douglas–Rachford splitting method and the proximal point algorithm for maximal monotone operators, §4"
      url: "https://web.mit.edu/dimitrib/www/Eckstein_Bertsekas_D-R.pdf"
---

## Statement

For any exact two-block ADMM sweep from
[[alg-two-block-admm-scaled]], put
$\Delta z^{k+1}=z^{k+1}-z^k$ and $y^{k+1}=\rho u^{k+1}$. Then
$$-K^*(y^{k+1}-\rho L\Delta z^{k+1})\in\partial f(x^{k+1}),\qquad -L^*y^{k+1}\in\partial g(z^{k+1}).$$

## Facts & Assumptions

**Given:** Proper convex $f,g$, linear $K,L$, $\rho>0$, and an exact attained sweep.

[A1] The algorithm's proper closed convex objectives and linear maps are in force, and both subproblem minimizers are attained exactly.


[F1] [[alg-two-block-admm-scaled]]: the exact $x$ and $z$ subproblems and update $y^{k+1}=y^k+\rho r^{k+1}$ are as displayed there.

[F2] [[def-extended-real-epsilon-subdifferential]]: for a proper convex extended-real function and a finite-valued point $x$, $a\in\partial f(x)$ iff $f(v)\ge f(x)+\langle a,v-x\rangle$ for every $v$; the same convention applies to $g$.

[F3] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $\langle Kx,y\rangle=\langle x,K^*y\rangle$ and similarly for $L$.

## Proof


1.1 Write the $x$-subproblem objective as $f(x)+Q(x)$, where $\nabla Q(x^{k+1})=\rho K^*(Kx^{k+1}+Lz^k-c+u^k)$ by [F3]. For any $v\in\operatorname{dom}f$ and $0<t<1$, convexity bounds $f(x^{k+1}+t(v-x^{k+1}))$ above by $(1-t)f(x^{k+1})+tf(v)$. Minimality and differentiability of $Q$, after dividing the resulting nonnegative objective difference by $t$ and letting $t\downarrow0$, give $f(v)\ge f(x^{k+1})-\langle\nabla Q(x^{k+1}),v-x^{k+1}\rangle$. For $v\notin\operatorname{dom}f$ this inequality is automatic, so $-\nabla Q(x^{k+1})\in\partial f(x^{k+1})$ by [F2]. [A1, F1, F2, F3, given, algebra]

2.1 Since $Kx^{k+1}+Lz^k-c=r^{k+1}-L\Delta z^{k+1}$ and $y^{k+1}=\rho(u^k+r^{k+1})$, the gradient in step 1.1 equals $K^*(y^{k+1}-\rho L\Delta z^{k+1})$. This proves the first inclusion. Applying the same segment argument to the $z$-subproblem gives $-\rho L^*(Kx^{k+1}+Lz^{k+1}-c+u^k)\in\partial g(z^{k+1})$; the bracket times $\rho$ is $y^{k+1}$, proving the second inclusion. [A1, F1, F2, F3, step 1.1, algebra] ∎
