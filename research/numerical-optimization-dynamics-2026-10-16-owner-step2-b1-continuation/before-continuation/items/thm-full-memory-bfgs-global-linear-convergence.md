---
id: thm-full-memory-bfgs-global-linear-convergence
kind: theorem
title: "Full-memory Bfgs converges globally and linearly on a uniformly strongly convex level set"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - lem-bfgs-trace-determinant-potential-identities
  - alg-full-memory-bfgs-with-curvature-safeguards
  - lem-bfgs-updates-preserve-secant-symmetry-and-spd
  - lem-wolfe-steps-give-positive-bfgs-curvature
  - thm-zoutendijk-summability-for-wolfe-steps
  - lem-wolfe-step-lower-bound-from-the-descent-angle
  - def-hessian-and-euclidean-critical-point
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-wolfe-and-strong-wolfe-conditions
  - lem-bfgs-hessian-bounds-control-gradient-and-taylor-remainder
  - thm-derivative-of-exponential
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
      locator: "Chapter 6 §6.4, Assumption 6.1 and Theorem 6.5 with its full trace/determinant proof, printed pp. 153–156 / PDF pp. 171–174."
    - title: "Manuel Carreira-Perpiñán, Lecture Notes on Numerical Optimization"
      url: "https://faculty.ucmerced.edu/mcarreira-perpinan/teaching/EECS260/lecture-notes.pdf"
      locator: "§6, BFGS global convergence boundary and hypotheses, printed p. 22 / PDF p. 23."
---

## Statement

Let $n\ge1$, and let $f:\mathbb R^n\to\mathbb R$ have continuous second partial derivatives ($C^2$), let $x_0\in\mathbb R^n$, and set $L_0:=\{x:f(x)\le f(x_0)\}$. Assume $L_0$ is convex, contains a global minimizer $x_*$, and for every $x\in L_0$ the Hessian $G(x):=\nabla^2 f(x)$ is symmetric and satisfies, for constants $0<\mu\le\Lambda<\infty$,
$$ \mu\|v\|_2^2\le v^TG(x)v,\qquad \|G(x)\|_2\le\Lambda \quad(v\in\mathbb R^n), $$
where $\|A\|_2:=\sup_{\|v\|_2=1}\|Av\|_2$ is the Euclidean operator norm. Fix $0<c_1<c_2<1/2$ for the line searches. Write $\psi(B):=\operatorname{tr}(B)-\log\det(B)$ as in [[lem-bfgs-trace-determinant-potential-identities]], with $\operatorname{tr}(B)$ the sum of diagonal entries. Consider the exact, undamped branch of [[alg-full-memory-bfgs-with-curvature-safeguards]] with any SPD initial $H_0$, and suppose every nonstationary line search succeeds. For every generated iterate,
$$ f(x_k)-f(x_*)\le \exp(-\tau\delta k)\,[f(x_0)-f(x_*)], $$
where
$$ C_0:=\max\{1,\Lambda^2/\mu-\log\mu-1\},\qquad \delta:=\exp[-C_0-\psi(B_0)],\qquad \tau:=\frac{2\mu c_1(1-c_2)}{\Lambda}, \quad B_0:=H_0^{-1}. $$
For an infinite successful continuation, $x_k\to x_*$ with an R-linear error bound, meaning $\|x_k-x_*\|_2\le Cq^k$ for some $C>0$ and $0<q<1$. A stationary termination is at $x_*$. A finite iteration-budget stop or line-search failure gives only a finite prefix.

## Facts & Assumptions

**Given:** $f,x_0,L_0,x_*,\mu,\Lambda,H_0$ and the exact undamped iteration in the Statement.

[F1] [[alg-full-memory-bfgs-with-curvature-safeguards]]: in exact direction mode the method uses $p_k=-H_kg_k$, seeks a strong Wolfe step, and then forms $s_k=\alpha_kp_k$, $y_k=g_{k+1}-g_k$ and the undamped BFGS update.

[F2] [[lem-bfgs-updates-preserve-secant-symmetry-and-spd]]: if $B_k=H_k^{-1}$ is SPD and $s_k^Ty_k>0$, the updated matrices remain SPD and reciprocal.

[F3] [[lem-wolfe-steps-give-positive-bfgs-curvature]]: a Wolfe step along a strict descent direction gives $s_k^Ty_k>0$.

[F4] [[lem-bfgs-trace-determinant-potential-identities]]: with $m_k=s_k^Ty_k/\|s_k\|_2^2$, $M_k=\|y_k\|_2^2/(s_k^Ty_k)$, $q_k=s_k^TB_ks_k/\|s_k\|_2^2$, and $\eta_k=s_k^TB_ks_k/(\|s_k\|_2\|B_ks_k\|_2)$,
$$ \psi(B_{k+1})\le\psi(B_k)+(M_k-\log m_k-1)+h(q_k/\eta_k^2)+\log\eta_k^2,\quad \psi(B_k)\ge n,\quad h(t):=1-t+\log t\le0. $$

[F5] [[thm-zoutendijk-summability-for-wolfe-steps]]: if the gradient is Lipschitz on a set containing every accepted-step segment, the objective is bounded below on the initial sublevel, and every accepted step is a Wolfe step, then $\sum_k\cos^2\theta_k\|\nabla f(x_k)\|_2^2<\infty$.

[F6] [[lem-wolfe-step-lower-bound-from-the-descent-angle]]: on a segment with gradient Lipschitz constant $\Lambda$, a Wolfe step satisfies $\alpha_k\ge\frac{1-c_2}{\Lambda}\frac{\cos\theta_k\|g_k\|_2}{\|p_k\|_2}$.

[F7] [[def-hessian-and-euclidean-critical-point]] and [[def-jacobian-matrix-and-gradient]]: $G(x)$ is the Hessian and $g(x)=\nabla f(x)$ is the gradient.

[F8] [[def-euclidean-inner-product]] and [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $u^Tv$ is the Euclidean inner product and $|u^Tv|\le\|u\|_2\|v\|_2$.

[F9] [[def-wolfe-and-strong-wolfe-conditions]]: every strong Wolfe step satisfies the Wolfe Armijo and curvature conditions.

[F10] [[lem-bfgs-hessian-bounds-control-gradient-and-taylor-remainder]]: on the convex set $L_0$, the Hessian assumptions give gradient Lipschitzness, strong monotonicity of the gradient, and the two-sided quadratic Taylor bounds.

[F11] [[thm-derivative-of-exponential]]: $(e^t)'=e^t$ for real $t$.

## Proof


**Given:** The hypotheses and notation in the Statement; set $g_k:=\nabla f(x_k)$ and $r_k:=f(x_k)-f(x_*)$.

1.1 Since $x_*$ is a global minimizer in the open domain $\mathbb R^n$, the one-variable restriction $t\mapsto f(x_*+te_j)$ has a minimum at $t=0$ for every standard basis vector $e_j$, so each partial derivative there is zero and $g_*:=\nabla f(x_*)=0$. For $x\in L_0$, [F10] gives the quadratic lower bound $$ f(x)-f(x_*)\ge g_*^T(x-x_*)+\frac{\mu}{2}\|x-x_*\|_2^2 =\frac{\mu}{2}\|x-x_*\|_2^2. $$ Thus no other point of $L_0$ minimizes $f$, so $x_*$ is unique. [given, F7, F8, F10, algebra]

1.2 Initially $H_0$ is SPD. If $g_k\ne0$ and $H_k$ is SPD, then $p_k=-H_kg_k$ is nonzero and $g_k^Tp_k=-g_k^TH_kg_k<0$. The strong Wolfe step in [F1] is a Wolfe step by [F9], and [F3] gives $s_k^Ty_k>0$; [F2] therefore preserves the SPD inverse pair. Its Armijo inequality gives $f(x_{k+1})\le f(x_k)$, hence induction keeps every iterate in $L_0$. If $g_k=0$, then for any $x\in L_0$ the segment from $x_k$ to $x$ lies in $L_0$ and [F10] gives $f(x)\ge f(x_k)+g_k^T(x-x_k)+\frac{\mu}{2}\|x-x_k\|_2^2=f(x_k)+\frac{\mu}{2}\|x-x_k\|_2^2$. Thus $x_k$ is the unique minimizer on $L_0$. Every point outside $L_0$ has value greater than $f(x_0)\ge f(x_k)$, so $x_k=x_*$. [given, F1, F2, F3, F9, F10, algebra, induction]

1.3 At each nonstationary step define $$ \eta_k:=-\frac{g_k^Tp_k}{\|g_k\|_2\|p_k\|_2}\in(0,1], \qquad B_k:=H_k^{-1}. $$ Since $B_kp_k=-g_k$ and $s_k=\alpha_kp_k$, one has $B_ks_k=-\alpha_kg_k$ and therefore $$ \eta_k=\frac{s_k^TB_ks_k}{\|s_k\|_2\|B_ks_k\|_2}. $$ The value is at most $1$ by [F8]. [given, F1, F2, F8, algebra]

2.1 The function is bounded below on $L_0$ by $f(x_*)$. Each accepted step segment lies in $L_0$ because its endpoints are in this convex set by step 1.2. Its gradient is $\Lambda$-Lipschitz by [F10], so the segment and lower-bound hypotheses of [F5] hold for the accepted Wolfe steps. [given, F5, F7, F10, step 1.2, algebra]

2.2 Apply [F10] to $u=x_{k+1}$ and $v=x_k$. Its strong-monotonicity bound gives $s_k^Ty_k\ge\mu\|s_k\|_2^2$, and its gradient-Lipschitz bound gives $\|y_k\|_2\le\Lambda\|s_k\|_2$. Hence $m_k\ge\mu$ and $M_k\le\Lambda^2/\mu$. With $C_0$ as in the Statement, [F4] gives $$ \psi(B_{k+1})\le\psi(B_k)+C_0+\log\eta_k^2, $$ after dropping the nonpositive term $h(q_k/\eta_k^2)$. [given, F4, F7, F10, step 1.2, algebra]

3.1 Summing step 2.2 for $k=0,\ldots,N-1$ and using $\psi(B_N)>0$ yields $$ \sum_{k=0}^{N-1}-\log\eta_k^2\le\psi(B_0)+C_0N. $$ Put $c_k:=\eta_k^2>0$ and $\bar c_N:=N^{-1}\sum_{k<N}c_k$. For $u>0$, [F4] gives $\log u\le u-1$ because $h(u)=1-u+\log u\le0$. Apply this to $u=c_k/\bar c_N$ and sum to obtain $N^{-1}\sum_{k<N}\log c_k\le\log\bar c_N$. Therefore $$ \bar c_N\ge\exp\!\left(-C_0-\frac{\psi(B_0)}N\right)\ge\delta. $$ In particular, infinitely many indices satisfy $\eta_k^2\ge\delta/2$; otherwise the prefix averages would eventually be less than $\delta$. [F4, step 2.2, algebra, choose]

3.2 By [F6] and the Armijo inequality, $$ r_k-r_{k+1}\ge c_1\alpha_k(-g_k^Tp_k) \ge\frac{c_1(1-c_2)}{\Lambda}\eta_k^2\|g_k\|_2^2. $$ For $e_k:=x_k-x_*$, [F10] applied with $u=x_*$ and $v=x_k$ gives $$ r_k\le g_k^Te_k-\frac{\mu}{2}\|e_k\|_2^2 \le\|g_k\|_2\|e_k\|_2-\frac{\mu}{2}\|e_k\|_2^2 \le\frac{\|g_k\|_2^2}{2\mu}, $$ where the last inequality is completion of the square in $\|e_k\|_2$. Set $\tau=2\mu c_1(1-c_2)/\Lambda$. Since $\mu\le\Lambda$ and $0<c_1<c_2<1/2$, $0<\tau<1$. The decrease inequality therefore yields $r_{k+1}\le(1-\tau\eta_k^2)r_k$. [given, F1, F6, F7, F8, F9, F10, step 1.1, step 2.1, algebra]

4.1 By [F5], the nonnegative summands $\eta_k^2\|g_k\|_2^2$ tend to zero. Along the infinite subsequence from step 3.1, $\eta_k^2\ge\delta/2$, so $\|g_k\|_2\to0$ on that subsequence. For any $x\in L_0$, [F10] gives $(\nabla f(x)-g_*)^T(x-x_*)\ge\mu\|x-x_*\|_2^2$. By [F8], $\|x-x_*\|_2\le\|\nabla f(x)\|_2/\mu$. Thus the subsequence converges to $x_*$ and its function values converge to $f(x_*)$. The full sequence $f(x_k)$ is nonincreasing by step 1.2 and bounded below by $f(x_*)$, so it converges to $f(x_*)$. Step 1.1 then gives $x_k\to x_*$. [given, F5, F7, F8, F10, step 1.1, step 1.2, step 3.1, algebra]

4.2 For $u\ge0$, $1-u\le e^{-u}$ because the function $e^{-u}-(1-u)$ is zero at $u=0$ and, by [F11], has derivative $1-e^{-u}\ge0$. Iterating step 3.2 and using $\sum_{j<k}\eta_j^2\ge\delta k$ from step 3.1 gives $$ r_k\le r_0\prod_{j<k}(1-\tau\eta_j^2) \le r_0\exp\!\left(-\tau\sum_{j<k}\eta_j^2\right) \le r_0e^{-\tau\delta k}. $$ This is the claimed objective-gap bound. [F11, step 3.1, step 3.2, algebra]

5.1 Finally, step 1.1 gives $\|x_k-x_*\|_2\le\sqrt{2r_k/\mu}\le\sqrt{2r_0/\mu}\,e^{-\tau\delta k/2}$. Thus the iterates have an R-linear error bound. [step 1.1, step 4.2, algebra] ∎

