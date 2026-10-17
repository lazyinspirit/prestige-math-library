---
id: lem-midpoint-bvp-discrete-linearized-inverse
kind: lemma
title: "Uniform inverse bound for the sampled midpoint linearized BVP"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-midpoint-collocation-residual-for-bvps
  - def-linearized-two-point-bvp-operator-and-conditioning
  - thm-picard-lindelof-local-existence-and-uniqueness
  - thm-existence-and-uniqueness-of-a-maximal-ode-solution
  - thm-gronwall-integral-inequality
  - thm-chain-rule-for-total-derivatives
  - thm-euclidean-space-complete
  - prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation
  - thm-norm-inequality-for-the-vector-valued-integral
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "T. A. Driscoll and R. J. Braun, Fundamentals of Numerical Computation, Chapter10: Nonlinearity and boundary conditions"
      url: "https://fncbook.com/nonlinear/"
      locator: "§10.5, nonlinear collocation residual and boundary rows, equations(10.5.1)–(10.5.4), and the Newton/quasi-Newton solution setting. This supplies discretization context only; its scheme is not the normalized implicit-midpoint scheme. The mesh-uniform midpoint Jacobian inverse bound is proved locally below, not imported from Gaussian collocation."
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, author-source revision2025.01.27, Chapter10, Collocation for linear problems"
      url: "https://raw.githubusercontent.com/fncbook/fnc/a280ed1a013393ee0a184dcbaa866522f35a3516/chapter10/linear.md"
      locator: "§10.4, Collocation and Accuracy and stability: exact endpoint rows, residual-to-error identity e=A^{-1}tau, and the explicitly stated need for a mesh-uniform inverse bound. The source omits the stability proof. The present normalized implicit-midpoint inverse proof is supplied locally using transfer convergence and the continuous boundary Schur complement; no Gaussian-collocation theorem is transferred."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Here $C^k$ means each coordinate has continuous total derivatives through order $k$. Let $f,B$ be $C^2$ near an exact solution $y^*\in C^3([a,b],\mathbb R^d)$ of a square BVP, and suppose the continuous linearized operator $\mathcal L$ in [[def-linearized-two-point-bvp-operator-and-conditioning]] is boundedly invertible. For uniform meshes with $h=(b-a)/N$, let $Y_i^*=y^*(t_i)$ and let $J_h=DG_h(Y^*)$ be the Jacobian of the normalized midpoint residual. There are $h_0>0$ and $C<\infty$ such that for every mesh width $0<h\le h_0$, $J_h$ is invertible and

$$\|J_h^{-1}\|_{\infty\to\infty}\le C,$$

where both finite-dimensional norms are the maximum of the Euclidean block norms. The bound is independent of $h$; this is a local linear inverse result, not a nonlinear convergence theorem.

## Facts & Assumptions

**Given:** The square BVP, $C^2$ data near $y^*$, $y^*\in C^3$, uniform meshes, and bounded invertibility of the continuous operator $\mathcal L$.

[F1] [[def-midpoint-collocation-residual-for-bvps]]: $G_h$ has normalized interior midpoint rows and the boundary row $B(Y_0,Y_N)$; differentiating its rows gives the stated midpoint Jacobian blocks.

[F2] [[def-linearized-two-point-bvp-operator-and-conditioning]]: $\mathcal L v=(v'-A v,B_1v(a)+B_2v(b))$, and bounded invertibility implies in particular that its kernel is zero.

[F3] [[thm-picard-lindelof-local-existence-and-uniqueness]]: a continuous coefficient matrix defines unique local solutions of the linear IVP $X'=A(t)X$.

[F4] [[thm-gronwall-integral-inequality]]: a bound $u(t)\le C+M\int_a^t u$ implies $u(t)\le Ce^{M(t-a)}$.

[F5] [[thm-chain-rule-for-total-derivatives]]: differentiating a composition gives the product of its total derivatives.

[F6] [[thm-euclidean-space-complete]]: finite-dimensional Euclidean spaces, hence also with an equivalent maximum norm, are complete.

[F7] [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]: a Picard–Lindelöf IVP has a maximal solution and every other solution through the same data is its restriction.

[F8] [[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]: a solution of a continuous finite-dimensional IVP on an interval satisfies its Volterra integral equation, including on closed subintervals. Apply this to each column of the fundamental matrix.

[F9] [[thm-norm-inequality-for-the-vector-valued-integral]]: the Euclidean norm of a vector-valued integral over an increasing interval is at most the integral of its norm. Applying this to a continuous matrix integrand acting on each unit vector gives the corresponding operator-norm bound.

## Proof

1.1 Write $A(t)=D_yf(t,y^*(t))$ and let $X(t)$ solve $X'=A(t)X$, $X(a)=I_d$. Since $A$ is continuous and bounded on $[a,b]$, extend it continuously by its endpoint values to an open interval containing $[a,b]$. Local existence follows from [F3], and the integral equation [F8] gives the Gronwall bound for the maximal solution from [F7]; if it stopped at or before $b$, boundedness of $X'=AX$ would give a finite endpoint limit from which local existence extends it, a contradiction. Thus $X$ exists on $[a,b]$. Define $Q=B_1+B_2X(b)$. If $Qc=0$, then $v(t)=X(t)c$ satisfies $\mathcal Lv=(0,0)$; [F2] forces $v=0$, and $v(a)=c$ then gives $c=0$. The square matrix $Q$ is therefore invertible. [given, F2, F3, F4, F7, F8]

1.2 For each mesh let $C_i^h=D_yf(t_i+h/2,(Y_i^*+Y_{i+1}^*)/2)$. Uniform continuity of $y^*$ and $D_yf$ on a compact neighborhood implies $\max_i\|C_i^h-A(t_i+h/2)\|_{\rm op}\to0$. Also $\sup_{h,i}\|C_i^h\|_{\rm op}<\infty$. Applying the chain rule [F5] to the rows in [F1], the interior equation $J_h z=(r_0,\ldots,r_{N-1},q)$ is $(I-hC_i^h/2)z_{i+1}=(I+hC_i^h/2)z_i+h r_i$. For small $h$, $I-hC_i^h/2$ is invertible by its convergent geometric series; its inverse norm is at most $2$, and the induced transition matrices $M_i^h=(I-hC_i^h/2)^{-1}(I+hC_i^h/2)$ satisfy $\|M_i^h\|\le1+C_0h$ for a constant independent of $i,h$. [F1, F5, F6, given]

2.1 Let $M_h=M_{N-1}^h\cdots M_0^h$, the discrete homogeneous transfer from $z_0$ to $z_N$. By [F8] on each column, the exact fundamental matrix $X$ satisfies $X(t_{i+1})-X(t_i)=\int_{t_i}^{t_{i+1}}A(t)X(t)dt$. The integrand is uniformly continuous, so its average over each cell differs from its midpoint value by a quantity tending uniformly to zero as $h\to0$. Explicitly, put $m_i=t_i+h/2$, $H(t)=A(t)X(t)$ and $\omega_G(\rho)=\sup_{|s-t|\le\rho}\|G(s)-G(t)\|_{\rm op}$ for $s,t\in[a,b]$ and $G=H,X$. Write $S_X=\sup_t\|X(t)\|_{\rm op}$, $S_A=\sup_t\|A(t)\|_{\rm op}$, and $\delta_h=\max_i\|C_i^h-A(m_i)\|_{\rm op}\to0$ by step 1.2. By [F9], $\|h^{-1}\int_{t_i}^{t_{i+1}}H(t)dt-H(m_i)\|_{\rm op}\le\omega_H(h/2)$. Define the normalized midpoint defect by $\eta_i^h=(X(t_{i+1})-X(t_i))/h-C_i^h(X(t_i)+X(t_{i+1}))/2$. Adding and subtracting $H(m_i)$ and $A(m_i)(X(t_i)+X(t_{i+1}))/2$ therefore gives $\max_i\|\eta_i^h\|_{\rm op}\le\omega_H(h/2)+\delta_h S_X+S_A\omega_X(h/2)\to0$, since $H$ and $X$ are uniformly continuous on $[a,b]$. The transition bound in step 1.2 propagates the increment defects $h\eta_i^h$ with total bound at most $C_1(b-a)\max_i\|\eta_i^h\|$; hence $M_h\to X(b)$. [F3, F4, F7, F8, F9, step 1.2, algebra]

3.1 Put $Q_h=B_1+B_2M_h$. By step 2.1, $Q_h\to Q$. Since $Q$ is invertible, determinant continuity makes $Q_h$ invertible for all sufficiently small $h$, and the adjugate formula gives a uniform bound on $\|Q_h^{-1}\|$. For arbitrary forcing blocks $r_i$, the recurrence in step 1.2 and its transition bound give $z_N=M_hz_0+w_h$ and $\max_i\|z_i\|_2\le C_2(\|z_0\|_2+\max_i\|r_i\|_2)$, with $\|w_h\|_2\le C_2\max_i\|r_i\|_2$. The boundary row $B_1z_0+B_2z_N=q$ becomes $Q_hz_0=q-B_2w_h$, so $z_0$ and then every $z_i$ are bounded by $C_3\max(\max_i\|r_i\|_2,\|q\|_2)$ uniformly in $h$. [F1, step 1.2, step 2.1, algebra]

4.1 For every right-hand side $(r_0,\ldots,r_{N-1},q)$, step 3.1 constructs a unique solution of the square linear system $J_hz=(r_0,\ldots,r_{N-1},q)$ and gives the asserted uniform operator bound. Therefore $J_h$ is onto and one-to-one, hence invertible, with the stated estimate. [given, step 3.1, algebra] ∎
