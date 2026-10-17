---
id: thm-full-memory-bfgs-local-superlinear-convergence
kind: theorem
title: "Full-memory Bfgs is locally superlinear when the Hessian is Lipschitz"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - thm-full-memory-bfgs-global-linear-convergence
  - lem-full-memory-bfgs-dennis-more-condition
  - alg-full-memory-bfgs-with-curvature-safeguards
  - lem-bfgs-hessian-bounds-control-gradient-and-taylor-remainder
  - cor-second-order-taylor-expansion-with-the-hessian
  - thm-clairaut-schwarz-mixed-partials
  - alg-bracketing-zoom-strong-wolfe-search
  - def-wolfe-and-strong-wolfe-conditions
  - def-hessian-and-euclidean-critical-point
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
axiom_use: "None beyond classical real analysis and finite-dimensional linear algebra supplied by the listed dependencies; no choice principle is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 6 §6.4, Assumption 6.2, Theorem 6.6 and complete proof of the Dennis–Moré condition, printed pp. 156–160 / PDF pp. 174–178."
    - title: "Manuel Carreira-Perpiñán, Lecture Notes on Numerical Optimization"
      url: "https://faculty.ucmerced.edu/mcarreira-perpinan/teaching/EECS260/lecture-notes.pdf"
      locator: "§6, BFGS local superlinear convergence boundary, printed p. 22 / PDF p. 23."
---

## Statement

Assume the hypotheses of [[thm-full-memory-bfgs-global-linear-convergence]] and consider an infinite, nonstationary exact-undamped BFGS run with successful strong Wolfe searches. Under these same hypotheses, [[lem-full-memory-bfgs-dennis-more-condition]] proves the Dennis–Moré condition used below. Suppose the Hessian is $L_G$-Lipschitz on a neighborhood of its minimizer $x_*$:
$$ \|\nabla^2 f(u)-\nabla^2 f(v)\|_2\le L_G\|u-v\|_2. $$
Then the BFGS matrices satisfy the Dennis–Moré condition
$$ \frac{\|(B_k-G_*)s_k\|_2}{\|s_k\|_2}\longrightarrow0,\qquad G_*:=\nabla^2 f(x_*), $$
and the line search eventually accepts its initial unit trial. Consequently,
$$ \frac{\|x_{k+1}-x_*\|_2}{\|x_k-x_*\|_2}\longrightarrow0. $$
Here a sequence is superlinear when this last error ratio tends to zero. The conclusion concerns the exact undamped branch; Powell-damped and rounded-direction variants are not covered by this theorem.

## Facts & Assumptions

**Given:** The global BFGS hypotheses, the exact-undamped run, and the local Hessian-Lipschitz bound in the Statement.

[F1] [[thm-full-memory-bfgs-global-linear-convergence]]: the iterates converge to $x_*$, the Hessian bounds hold on $L_0$, and the initial inverse matrix is SPD.

[F2] [[lem-full-memory-bfgs-dennis-more-condition]]: $\|(B_k-G_*)s_k\|_2/\|s_k\|_2\to0$; since $s_k=\alpha_kp_k$ with $\alpha_k>0$, the same holds with $p_k$.

[F3] [[alg-full-memory-bfgs-with-curvature-safeguards]]: in exact mode $p_k=-H_kg_k$, $B_k=H_k^{-1}$, and hence $B_kp_k=-g_k$.

[F4] [[lem-bfgs-hessian-bounds-control-gradient-and-taylor-remainder]]: on a convex local neighborhood with Hessian bounds and Lipschitz Hessian, $\|g(x_*+z)-g_*-G_*z\|_2\le L_G\|z\|_2^2$ and $\|g(x_*+z)-g_*\|_2\le\Lambda\|z\|_2$.

[F5] [[cor-second-order-taylor-expansion-with-the-hessian]]: $f(x_*+z)=f(x_*)+g_*^Tz+\tfrac12z^TG_*z+o(\|z\|_2^2)$ for a $C^2$ scalar field.

[F6] [[alg-bracketing-zoom-strong-wolfe-search]]: the first expansion trial is $\alpha=1$ and is returned if both strong Wolfe checks pass.

[F7] [[def-wolfe-and-strong-wolfe-conditions]]: strong Wolfe requires Armijo and $|g_{k+1}^Tp_k|\le c_2|g_k^Tp_k|$.

[F8] [[def-hessian-and-euclidean-critical-point]] and [[def-jacobian-matrix-and-gradient]]: $G(x)$ is the Hessian and $g(x)=\nabla f(x)$.

[F9] [[def-euclidean-inner-product]] and [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|u^Tv|\le\|u\|_2\|v\|_2$.

[F10] [[thm-clairaut-schwarz-mixed-partials]]: under the $C^2$ hypothesis, the mixed second partials commute, so the Hessian quadratic form in [F5] uses the Hessian convention $G_*=\nabla^2f(x_*)$ of [F8].

## Proof


**Given:** The hypotheses and notation in the Statement. Put $e_k:=x_k-x_*$, $G_*:=G(x_*)$, and $g_k:=\nabla f(x_k)$.

1.1 The global minimizer $x_*$ is interior to $\mathbb R^n$, so each coordinate restriction has a minimum at $x_*$ and $g_*:=\nabla f(x_*)=0$. By [F1], $e_k\to0$ and the eigenvalues of $G_*$ lie in $[\mu,\Lambda]$. [given, F1, F8, algebra]

1.2 The Dennis–Moré condition [F2] and $s_k=\alpha_kp_k$, $\alpha_k>0$, give $\|(B_k-G_*)p_k\|_2=o(\|p_k\|_2)$. [given, F2, F3, algebra]

2.1 For all sufficiently large $k$, [F4] gives $g_k=G_*e_k+r_k$ with $\|r_k\|_2\le L_G\|e_k\|_2^2$. By [F3], $B_kp_k=-g_k$, so $$ G_*p_k=-g_k+(G_*-B_k)p_k. $$ The smallest eigenvalue of $G_*$ is at least $\mu$, hence $\mu\|p_k\|_2\le\|G_*p_k\|_2\le\Lambda\|e_k\|_2+o(\|p_k\|_2)$, using [F9]. For sufficiently large $k$, the $o(\|p_k\|_2)$ term is at most $\mu\|p_k\|_2/2$, so $\mu\|p_k\|_2/2\le\Lambda\|e_k\|_2$ and $\|p_k\|_2\le2\Lambda\|e_k\|_2/\mu$. Substitution into $G_*(e_k+p_k)=(G_*-B_k)p_k-r_k$ gives $G_*(e_k+p_k)=o(\|e_k\|_2)$; the same eigenvalue lower bound yields $e_k+p_k=o(\|e_k\|_2)$. [given, F1, F2, F3, F4, F8, F9, step 1.2, algebra]

3.1 For sufficiently large $k$, $e_k$ and $e_k+p_k$ lie in the local neighborhood. Apply [F4] and [F5] to $z=e_k$ and $z=e_k+p_k$, using [F10] to identify the Hessian convention. Since $e_k+p_k=o(\|e_k\|_2)$, these expansions give $$ g_k^Tp_k=-e_k^TG_*e_k+o(\|e_k\|_2^2),\quad f(x_k+p_k)-f(x_k)=-\tfrac12e_k^TG_*e_k+o(\|e_k\|_2^2),\quad g(x_k+p_k)=o(\|e_k\|_2). $$ Because $G_*\succeq\mu I$ and $c_1<1/2$, $$ f(x_k+p_k)-f(x_k)-c_1g_k^Tp_k=-(1/2-c_1)e_k^TG_*e_k+o(\|e_k\|_2^2)<0 $$ for all sufficiently large $k$, so Armijo holds. Also $p_k=O(\|e_k\|_2)$ by step 2.1; [F9] gives $|g(x_k+p_k)^Tp_k|=o(\|e_k\|_2^2)$, while $|g_k^Tp_k|\ge(\mu/2)\|e_k\|_2^2$ eventually. Thus the strong curvature condition holds. The search first tries $\alpha=1$ by [F6], and the two checks are exactly [F7], so the unit step is accepted. [given, F1, F4, F5, F6, F7, F9, F10, step 2.1, algebra]

4.1 Eventually $x_{k+1}=x_k+p_k$, so $e_{k+1}=e_k+p_k=o(\|e_k\|_2)$ by step 2.1. This is the claimed superlinear error ratio. [step 2.1, step 3.1] ∎

