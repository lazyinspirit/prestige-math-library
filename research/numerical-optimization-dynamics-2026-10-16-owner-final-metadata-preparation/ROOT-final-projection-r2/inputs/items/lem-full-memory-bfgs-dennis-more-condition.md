---
id: lem-full-memory-bfgs-dennis-more-condition
kind: lemma
title: "Locally Lipschitz Hessians give the BFGS Dennis–Moré condition"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - thm-full-memory-bfgs-global-linear-convergence
  - alg-full-memory-bfgs-with-curvature-safeguards
  - def-bfgs-curvature-pair-and-update-formulas
  - lem-bfgs-trace-determinant-potential-identities
  - lem-bfgs-updates-preserve-secant-symmetry-and-spd
  - def-wolfe-and-strong-wolfe-conditions
  - lem-wolfe-steps-give-positive-bfgs-curvature
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-of-square-roots
  - def-hessian-and-euclidean-critical-point
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - lem-bfgs-hessian-bounds-control-gradient-and-taylor-remainder
  - thm-logarithm-derivative-and-integral
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
      locator: "Chapter 6 §6.4, Assumption 6.2, Theorem 6.6 and complete Dennis–Moré proof, printed pp. 156–160 / PDF pp. 174–178."
    - title: "Manuel Carreira-Perpiñán, Lecture Notes on Numerical Optimization"
      url: "https://faculty.ucmerced.edu/mcarreira-perpinan/teaching/EECS260/lecture-notes.pdf"
      locator: "§6, local BFGS convergence assumptions and Dennis–Moré condition, printed p. 22 / PDF p. 23."
---

## Statement

Assume the hypotheses of [[thm-full-memory-bfgs-global-linear-convergence]] and consider an infinite, nonstationary exact-undamped BFGS run with successful strong Wolfe searches. Suppose $G(x)=\nabla^2 f(x)$ is $L_G$-Lipschitz in operator norm on a neighborhood of $x_*$. With $B_k:=H_k^{-1}$ and $s_k:=x_{k+1}-x_k$, the iterates satisfy
$$ \frac{\|(B_k-G_*)s_k\|_2}{\|s_k\|_2}\longrightarrow0,\qquad G_*:=G(x_*). $$
Since $s_k=\alpha_kp_k$ with $\alpha_k>0$, the same limit holds with $p_k$ in place of $s_k$. This is the Dennis–Moré condition used by the local full-memory superlinear convergence result.

## Facts & Assumptions

**Given:** The global BFGS hypotheses, successful exact-undamped steps, and the local Hessian-Lipschitz bound in the Statement.

[F1] [[thm-full-memory-bfgs-global-linear-convergence]]: $f(x_k)-f(x_*)\le r_0q^k$ for some $r_0\ge0$, $0<q<1$, and $H_0$ is SPD.

[F2] [[alg-full-memory-bfgs-with-curvature-safeguards]]: in exact-undamped mode $p_k=-H_kg_k$, $B_k=H_k^{-1}$, $s_k=\alpha_kp_k$, $y_k=g_{k+1}-g_k$, and the undamped BFGS update is applied after a successful strong Wolfe step.

[F3] [[def-bfgs-curvature-pair-and-update-formulas]]: $B^+=B-Bss^TB/(s^TBs)+yy^T/(s^Ty)$ for $s^Ty>0$.

[F4] [[lem-bfgs-trace-determinant-potential-identities]]: the BFGS update satisfies the trace/determinant potential inequality, $\psi(B)\ge n$, and $h(t)=1-t+\log t\le0$ with equality only at $t=1$; its curvature angle lies in $(0,1]$.

[F5] [[lem-bfgs-updates-preserve-secant-symmetry-and-spd]]: a positive-curvature update preserves SPD and reciprocity.

[F6] [[def-wolfe-and-strong-wolfe-conditions]]: every strong Wolfe step is a Wolfe step.

[F7] [[lem-wolfe-steps-give-positive-bfgs-curvature]]: a Wolfe step along a strict descent direction gives $s_k^Ty_k>0$.

[F8] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a real symmetric matrix has an orthonormal eigenbasis.

[F9] [[thm-of-square-roots]]: every positive real number has a unique positive square root.

[F10] [[def-hessian-and-euclidean-critical-point]] and [[def-jacobian-matrix-and-gradient]]: $G(x)=\nabla^2f(x)$ and $g(x)=\nabla f(x)$.

[F11] [[def-euclidean-inner-product]] and [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $u^Tv$ is the Euclidean inner product and $|u^Tv|\le\|u\|_2\|v\|_2$.

[F12] [[lem-bfgs-hessian-bounds-control-gradient-and-taylor-remainder]]: on a convex set with the stated Hessian bounds, the gradient is Lipschitz; when the Hessian is Lipschitz near $x_*$, $\|g(u)-g(v)-G_*(u-v)\|_2\le L_G\max(\|u-x_*\|_2,\|v-x_*\|_2)\|u-v\|_2$.

[F13] [[thm-logarithm-derivative-and-integral]]: $\log'(x)=1/x$ for $x>0$.

## Proof


**Given:** The hypotheses and notation in the Statement. Write $e_k:=x_k-x_*$, $g_k:=\nabla f(x_k)$, and $B_k:=H_k^{-1}$.

1.1 The global theorem gives $r_k:=f(x_k)-f(x_*)\le r_0q^k$. Its strong-convexity lower bound gives $\|e_k\|_2\le\sqrt{2r_0/\mu}\,q^{k/2}$, so $\sum_k\|e_k\|_2<\infty$. Also $g_*:=\nabla f(x_*)=0$ because each coordinate restriction has a minimum at $x_*$ in the open domain. [given, F1, F10, algebra]

1.2 The initial pair is SPD. At a nonstationary iterate, $p_k=-H_kg_k$ is a strict descent direction. The accepted strong Wolfe step is Wolfe by [F6], so [F7] gives $s_k^Ty_k>0$; [F5] preserves SPD and reciprocity. Induction proves every $B_k,H_k$ is SPD. [given, F1, F2, F5, F6, F7, algebra, induction]

2.1 Choose a closed ball $W$ about $x_*$ contained in the Hessian-Lipschitz neighborhood, and set $K:=L_0\cap W$. Both sets are convex and $x_*\in K$. By step 1.1, for all sufficiently large $k$, the accepted segment lies in $K$. Define $\varepsilon_k:=\max\{\|e_k\|_2,\|e_{k+1}\|_2\}$, $s_k:=x_{k+1}-x_k$, and $y_k:=g_{k+1}-g_k$. Applying [F12] on the segment gives $$ \|y_k-G_*s_k\|_2\le L_G\varepsilon_k\|s_k\|_2, $$ and $\sum_k\varepsilon_k<\infty$. [given, F1, F2, F10, F12, step 1.1, step 1.2, algebra]

3.1 By [F8], choose an orthonormal eigenbasis of $G_*$ with eigenvalues $\lambda_i$. The lower Hessian bound and the operator-norm bound give $\mu\le\lambda_i\le\Lambda$. Define $G_*^{1/2}$ and $G_*^{-1/2}$ in that basis using diagonal entries $\sqrt{\lambda_i}$ and $1/\sqrt{\lambda_i}$, respectively; [F9] supplies the positive roots. Then $(G_*^{1/2})^2=G_*$ and $G_*^{1/2}G_*^{-1/2}=I$. Set $$ \widetilde s_k:=G_*^{1/2}s_k,\quad \widetilde y_k:=G_*^{-1/2}y_k,\quad \widetilde B_k:=G_*^{-1/2}B_kG_*^{-1/2}. $$ The update for $\widetilde B_k$ has the same BFGS form with pair $(\widetilde s_k,\widetilde y_k)$: $\widetilde B_k\widetilde s_k=G_*^{-1/2}B_ks_k$, $\widetilde s_k^T\widetilde B_k\widetilde s_k=s_k^TB_ks_k$, and $\widetilde s_k^T\widetilde y_k=s_k^Ty_k$. Substitution in [F3] gives $\widetilde B_{k+1}=G_*^{-1/2}B_{k+1}G_*^{-1/2}$. By step 2.1, $\widetilde y_k-\widetilde s_k=G_*^{-1/2}(y_k-G_*s_k)$. Since $\|G_*^{-1/2}\|_2=1/\sqrt\mu$ and $\|\widetilde s_k\|_2\ge\sqrt\mu\|s_k\|_2$, $$ \|\widetilde y_k-\widetilde s_k\|_2\le L_G\|G_*^{-1/2}\|_2^2\varepsilon_k\|\widetilde s_k\|_2. $$ Put $\delta_k:=L_G\|G_*^{-1/2}\|_2^2\varepsilon_k$; then $\sum_k\delta_k<\infty$, so eventually $\delta_k\le1/2$. Congruence preserves SPD, so $\widetilde B_k$ is SPD. [given, F1, F3, F8, F9, step 1.2, step 2.1, algebra]

4.1 For all sufficiently large $k$, the triangle inequality and [F11] give $$ (1-\delta_k)\|\widetilde s_k\|_2\le\|\widetilde y_k\|_2\le(1+\delta_k)\|\widetilde s_k\|_2,\qquad \widetilde m_k:=\frac{\widetilde y_k^T\widetilde s_k}{\|\widetilde s_k\|_2^2}\ge1-\delta_k. $$ Put $\widetilde M_k:=\|\widetilde y_k\|_2^2/(\widetilde y_k^T\widetilde s_k)$. Algebra gives $(1+\delta_k)^2/(1-\delta_k)\le1+7\delta_k$, since the difference after multiplication by $1-\delta_k>0$ is $4\delta_k(1-2\delta_k)\ge0$. Also, for $0\le t\le1/2$, $r(t):=\log(1-t)+2t$ has $r(0)=0$ and $r'(t)=(1-2t)/(1-t)\ge0$ by [F13]. Thus $\widetilde M_k\le1+7\delta_k$ and $\log\widetilde m_k\ge-2\delta_k$. [given, F11, F13, step 3.1, algebra]

5.1 Since $\widetilde B_k$ is SPD and $\widetilde s_k\ne0$, [F4] gives $0<\widetilde\eta_k\le1$ and $\widetilde q_k>0$, where $$ \widetilde\eta_k:=\frac{\widetilde s_k^T\widetilde B_k\widetilde s_k}{\|\widetilde s_k\|_2\|\widetilde B_k\widetilde s_k\|_2},\quad \widetilde q_k:=\frac{\widetilde s_k^T\widetilde B_k\widetilde s_k}{\|\widetilde s_k\|_2^2},\quad v_k:=\widetilde q_k/\widetilde\eta_k^2. $$ Applying the potential inequality [F4] to the transformed update and using step 4.1 gives $$ 0<\psi(\widetilde B_{k+1})\le\psi(\widetilde B_k)+9\delta_k+h(v_k)+\log\widetilde\eta_k^2, $$ since $\widetilde M_k-\log\widetilde m_k-1\le9\delta_k$. [given, F4, step 3.1, step 4.1, algebra]

6.1 Sum step 5.1 from a sufficiently large index $K$ to $N-1$ and rearrange: $$ \sum_{k=K}^{N-1}[-h(v_k)-\log\widetilde\eta_k^2]\le\psi(\widetilde B_K)-\psi(\widetilde B_N)+9\sum_{k=K}^{N-1}\delta_k\le\psi(\widetilde B_K)+9\sum_{k=K}^{\infty}\delta_k. $$ The right side is finite, and the summands are nonnegative by [F4], so both $h(v_k)\to0$ and $\widetilde\eta_k\to1$. For any $0<\epsilon<1$, strict increase of $h$ on $(0,1)$ and strict decrease on $(1,\infty)$, with equality only at $1$ by [F4], imply $h(v)\le h(1-\epsilon)<0$ when $v\le1-\epsilon$ and $h(v)\le h(1+\epsilon)<0$ when $v\ge1+\epsilon$. Therefore $v_k\to1$. [given, F4, step 5.1, algebra]

7.1 Let $w_k:=(\widetilde B_k-I)\widetilde s_k$. Expanding gives $$ \frac{\|w_k\|_2^2}{\|\widetilde s_k\|_2^2}=\frac{\widetilde q_k^2}{\widetilde\eta_k^2}-2\widetilde q_k+1=v_k\widetilde q_k-2\widetilde q_k+1. $$ By the definitions in step 5.1, $\widetilde q_k=v_k\widetilde\eta_k^2$; step 6.1 therefore makes the right side tend to zero. The definitions give $w_k=G_*^{-1/2}(B_k-G_*)s_k$, so $\|(B_k-G_*)s_k\|_2\le\sqrt\Lambda\|w_k\|_2$ and $\|\widetilde s_k\|_2\le\sqrt\Lambda\|s_k\|_2$. Hence $$ \frac{\|(B_k-G_*)s_k\|_2}{\|s_k\|_2}\le\Lambda\frac{\|w_k\|_2}{\|\widetilde s_k\|_2}\longrightarrow0. $$ Because $s_k=\alpha_kp_k$ with $\alpha_k>0$, the same limit holds with $p_k$ in place of $s_k$. [given, F8, step 5.1, step 6.1, algebra] ∎

