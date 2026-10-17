---
id: thm-lbfgs-fixed-memory-linear-convergence
kind: theorem
title: "Fixed-memory L-Bfgs converges linearly under uniform curvature and scale bounds"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-lbfgs-two-loop-with-curvature-filter
  - lem-lbfgs-curvature-bounds-imply-uniform-spectrum
  - def-wolfe-and-strong-wolfe-conditions
  - lem-lbfgs-two-loop-equals-stored-updates-and-cost
  - lem-wolfe-step-lower-bound-from-the-descent-angle
  - cor-uniform-descent-angle-implies-gradient-vanishing
  - def-hessian-and-euclidean-critical-point
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - lem-bfgs-hessian-bounds-control-gradient-and-taylor-remainder
proof_strategy: direct
axiom_use: "None beyond classical real analysis and finite-dimensional linear algebra supplied by the listed dependencies; no choice principle is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Dong C. Liu and Jorge Nocedal, On the limited memory BFGS method for large scale optimization"
      url: "https://people.sc.fsu.edu/~inavon/5420a/liu89limited.pdf"
      locator: "§6, Assumptions 6.1, Theorem 6.1 and its trace/determinant proof, printed pp. 521–524 / PDF pp. 22–24."
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 7 §7.2, two-loop algorithm and scaling, printed pp. 178–179 / PDF pp. 196–197."
---

## Statement

Let $n\ge1$, and let $f:\mathbb R^n\to\mathbb R$ have continuous second partial derivatives ($C^2$), let $x_0\in\mathbb R^n$, and set $L_0:=\{x:f(x)\le f(x_0)\}$. Assume $L_0$ is convex, contains a global minimizer $x_*$, and for every $x\in L_0$ the symmetric Hessian $G(x):=\nabla^2 f(x)$ satisfies $\mu\|v\|_2^2\le v^TG(x)v$ and $\|G(x)\|_2\le\Lambda$ for some $0<\mu\le\Lambda<\infty$. Fix $0<c_1<c_2<1/2$ for the line searches. Fix a memory length $m_{\rm mem}\ge1$ and run the exact-arithmetic limited-memory algorithm of [[alg-lbfgs-two-loop-with-curvature-filter]] with successful strong Wolfe searches. Suppose every stored pair satisfies, for constants $0<a\le b<\infty$ and $C>0$,
$$ a\|s_i\|_2^2\le s_i^Ty_i\le b\|s_i\|_2^2, \qquad \frac{\|y_i\|_2^2}{s_i^Ty_i}\le C, $$
and every base scale lies in $[\gamma_{\min},\gamma_{\max}]$ with $0<\gamma_{\min}\le\gamma_{\max}<\infty$. Let $\underline\lambda,\overline\lambda$ be the explicit constants from [[lem-lbfgs-curvature-bounds-imply-uniform-spectrum]], and set
$$ \kappa:=\frac{2\mu c_1(1-c_2)\underline\lambda^2} {\Lambda\overline\lambda^2}\in(0,1). $$
Then for every generated iterate
$$ f(x_k)-f(x_*)\le(1-\kappa)^k[f(x_0)-f(x_*)], \qquad \|x_k-x_*\|_2\le\sqrt{\frac{2[f(x_0)-f(x_*)]}{\mu}}\,(1-\kappa)^{k/2}. $$
In an infinite successful continuation, the gradient norms tend to zero and the iterates converge with the displayed geometric error bound; any finite-budget stop is only a prefix. The pair and scale bounds are hypotheses; positive curvature alone does not imply them.

## Facts & Assumptions

**Given:** The strong-convexity and level-set assumptions, the L-BFGS memory and scale bounds, and the successful exact-arithmetic iterations in the Statement.

[F1] [[alg-lbfgs-two-loop-with-curvature-filter]]: the search direction is $p_k=-H_kg_k$, pairs are stored only after the positive-curvature check, and the line search returns a strong Wolfe step or a failure status.

[F2] [[def-wolfe-and-strong-wolfe-conditions]]: every strong Wolfe step is a Wolfe step and satisfies the Armijo inequality.

[F3] [[lem-lbfgs-two-loop-equals-stored-updates-and-cost]]: the two-loop recursion computes $H_kg_k$ from at most $m_{\rm mem}$ sequential inverse BFGS updates.

[F4] [[lem-lbfgs-curvature-bounds-imply-uniform-spectrum]]: under the stated pair and scale bounds, $\underline\lambda I\preceq H_k\preceq\overline\lambda I$.

[F5] [[lem-wolfe-step-lower-bound-from-the-descent-angle]]: if $\nabla f$ is $\Lambda$-Lipschitz on an accepted step segment, a Wolfe step satisfies $\alpha_k\ge\frac{1-c_2}{\Lambda}\frac{\cos\theta_k\|g_k\|_2}{\|p_k\|_2}$.

[F6] [[cor-uniform-descent-angle-implies-gradient-vanishing]]: under the Zoutendijk hypotheses and Wolfe steps, a uniform positive lower bound on $\cos\theta_k$ implies $\|g_k\|_2\to0$.

[F7] [[def-hessian-and-euclidean-critical-point]] and [[def-jacobian-matrix-and-gradient]]: $G(x)$ is the Hessian and $g(x)=\nabla f(x)$ is the gradient.

[F8] [[def-euclidean-inner-product]] and [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean inner product and norm satisfy Cauchy–Schwarz.

[F9] [[lem-bfgs-hessian-bounds-control-gradient-and-taylor-remainder]]: the uniform Hessian bounds give gradient Lipschitzness, strong monotonicity, and quadratic Taylor estimates on $L_0$.

## Proof


**Given:** The hypotheses and notation in the Statement; write $g_k:=\nabla f(x_k)$, $r_k:=f(x_k)-f(x_*)$, and $p_k:=-H_kg_k$.

1.1 Since $x_*$ is a global minimizer in the open domain $\mathbb R^n$, each coordinate restriction $t\mapsto f(x_*+te_j)$ has a minimum at $0$, so its derivative there is zero and $\nabla f(x_*)=0$. For every $x\in L_0$, [F9] applied with $u=x$ and $v=x_*$ give $f(x)\ge f(x_*)+\frac{\mu}{2}\|x-x_*\|_2^2$. Points outside $L_0$ have value greater than $f(x_0)\ge f(x_*)$, so $x_*$ is the unique global minimizer. [given, F7, F9, algebra]

1.2 Suppose $x_k\in L_0$. By [F3] and [F4], the matrix represented by the two-loop recursion is SPD and has eigenvalues in $[\underline\lambda,\overline\lambda]$. If $g_k\ne0$, then $$ -g_k^Tp_k=g_k^TH_kg_k\ge\underline\lambda\|g_k\|_2^2>0, \qquad \|p_k\|_2=\|H_kg_k\|_2\le\overline\lambda\|g_k\|_2. $$ Thus $p_k$ is a strict descent direction. By the Euclidean inner-product convention in [F8], its descent-angle cosine satisfies $$ \cos\theta_k=\frac{-g_k^Tp_k}{\|g_k\|_2\|p_k\|_2} \ge\frac{\underline\lambda}{\overline\lambda}>0. $$ If $g_k=0$, then for every $x\in L_0$ [F9] applied with $u=x$ and $v=x_k$ gives $f(x)\ge f(x_k)+\frac{\mu}{2}\|x-x_k\|_2^2$, and points outside $L_0$ have value greater than $f(x_0)\ge f(x_k)$; hence $x_k=x_*$. Otherwise the accepted Armijo step puts $x_{k+1}$ in $L_0$. [given, F1, F2, F3, F4, F7, F8, F9, algebra]

2.1 Armijo decrease keeps every iterate in $L_0$, and convexity keeps each accepted step segment there. For $u,v\in L_0$, [F9] gives $\|\nabla f(u)-\nabla f(v)\|_2\le\Lambda\|u-v\|_2$. By [F2], every accepted strong Wolfe step is a Wolfe step, so the Wolfe hypothesis of [F6] holds. The uniform angle bound from step 1.2 then gives $\|g_k\|_2\to0$. [given, F1, F2, F6, F7, F9, step 1.2, algebra]

3.1 For a nonstationary step, [F5] and the bound $\|p_k\|_2\le\overline\lambda\|g_k\|_2$ give $$ \alpha_k\ge\frac{1-c_2}{\Lambda} \frac{\underline\lambda}{\overline\lambda} \frac{\|g_k\|_2}{\|p_k\|_2} \ge\frac{(1-c_2)\underline\lambda}{\Lambda\overline\lambda^2}. $$ Also $-g_k^Tp_k\ge\underline\lambda\|g_k\|_2^2$ by step 1.2. Using Armijo, $$ r_k-r_{k+1}\ge c_1\alpha_k(-g_k^Tp_k) \ge\frac{c_1(1-c_2)\underline\lambda^2} {\Lambda\overline\lambda^2}\|g_k\|_2^2. $$ [F1, F2, F4, F5, step 1.1, step 1.2, step 2.1, algebra]

4.1 For $e_k:=x_k-x_*$, [F9] applied with $u=x_*$ and $v=x_k$ gives $$ r_k\le g_k^Te_k-\frac\mu2\|e_k\|_2^2 \le\|g_k\|_2\|e_k\|_2-\frac\mu2\|e_k\|_2^2 \le\frac{\|g_k\|_2^2}{2\mu}, $$ where the last inequality is completion of the square. Combining with step 3.1 yields $r_{k+1}\le(1-\kappa)r_k$. The bounds $\mu\le\Lambda$, $\underline\lambda\le\overline\lambda$, and $2c_1(1-c_2)<1$ give $0<\kappa<1$. [given, F8, F9, step 3.1, algebra]

5.1 Iterating step 4.1 proves $r_k\le(1-\kappa)^kr_0$. The strong-convexity lower bound $r_k\ge\frac\mu2\|e_k\|_2^2$ gives the stated iterate bound, so $x_k\to x_*$. The gradient norms also tend to zero by step 2.1 (or by continuity of $\nabla f$ at $x_*$). [F6, step 1.2, step 2.1, step 4.1, algebra] ∎

