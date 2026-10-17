---
id: thm-validated-residual-tube-certificate-sound
kind: theorem
title: "A validated rational residual-tube certificate encloses an exact ODE solution"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - alg-validated-residual-tube-certificate-checker
  - cor-mean-value-theorem
  - def-euclidean-inner-product
  - def-validated-residual-tube-certificate
  - lem-maximal-ode-solution-extends-from-compact-tube
  - lem-rational-expression-derivative-recursion-correct
  - lem-of-square-monotone
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-existence-and-uniqueness-of-a-maximal-ode-solution
  - thm-ftc-first-part
  - thm-derivative-of-exponential
  - thm-heine-borel-rn
  - thm-outward-rounded-operations-are-isotone-and-dag-sound
  - thm-piecewise-c1-ode-residual-a-posteriori-error-bound
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Donald Estep, A Posteriori Error Bounds and Global Error Control for Approximation of Ordinary Differential Equations, SIAM Journal on Numerical Analysis 32 (1995)"
      url: "https://epubs.siam.org/doi/pdf/10.1137/0732001"
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter III"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
---

## Statement

If [[alg-validated-residual-tube-certificate-checker]] returns `certified` on a finite rational residual-tube certificate for the rational ODE field $f$ and initial value $y_0$, then the IVP has a unique exact solution $y$ on the entire interval $[a,T]$. On every panel,
$$\|y(t)-U_j(t)\|_2<R_j(t),\qquad y(t)\in X_j,$$
where $U_j$, $R_j$, and $X_j$ are the certified reconstruction, positive radius, and state box. The residual is evaluated from the stored polynomial $U_j$ itself, so any interpolation, stage, or storage error already present in those coefficients is included.

## Facts & Assumptions

**Given:** A finite rational certificate and a `certified` return from the checker in [[alg-validated-residual-tube-certificate-checker]].

[F1] [[def-validated-residual-tube-certificate]]: a certificate stores exact rational panels, polynomial reconstructions, boxes, radius functions, residual envelopes, and strict supersolution bounds.

[F2] [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: every finite interval DAG enclosure contains each exact value assigned to its nodes; nonfinite statuses assert no finite enclosure.

[F3] [[lem-rational-expression-derivative-recursion-correct]]: the rational field DAG is $C^1$ where its divisions are nonzero, its formal derivatives are correct, and it is locally Lipschitz there.

[F4] [[thm-piecewise-c1-ode-residual-a-posteriori-error-bound]]: for a piecewise-$C^1$ reconstruction, piecewise-continuous one-sided Lipschitz coefficient $\ell$, and residual bound $\rho$, the exact solution error is at most its integrating-factor residual bound.

[F5] [[lem-maximal-ode-solution-extends-from-compact-tube]]: a maximal solution cannot end at a finite right endpoint while its graph remains in a compact subset of the open ODE domain.


[F6] [[cor-mean-value-theorem]]: the scalar mean value theorem bounds increments from a derivative bound.

[F7] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean inner product obeys Cauchy–Schwarz.

[F8] [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]: a locally Lipschitz IVP has a unique maximal solution through its initial data.

[F9] [[thm-heine-borel-rn]]: a closed bounded box in finite-dimensional Euclidean space is compact.

[F10] [[thm-ftc-first-part]]: integrating a continuous derivative recovers the endpoint increment.

[F11] [[thm-derivative-of-exponential]]: the exponential is positive and its derivative is itself.

[F12] [[def-euclidean-inner-product]]: the Euclidean inner product is bilinear, and $\|w\|_2^2=\langle w,w\rangle$.

[F13] [[lem-of-square-monotone]]: for nonnegative $r,s$, $r^2\le s^2$ implies $r\le s$.

## Proof

1.1 A certified return means each interval operation was finite and every listed inclusion and strict inequality passed. By [F2], all exact rational-DAG values and their derivative-DAG values lie in the checked intervals. Thus on each panel $f$ is defined on $[t_j,t_{j+1}]\times X_j$. The residual interval tests bound each component's absolute value by its checked supremum, whose squared sum is at most $\rho_j^2$; [F12] and [F13] give $\|U'_j-f(t,U_j)\|_2\le\rho_j$. Define $\|A\|_F:=(\sum_{i,k}A_{ik}^2)^{1/2}$; the Jacobian interval tests bound this sum by $L_j^2$, so [F13] gives $\|D_yf\|_F\le L_j$. The checker also proves $U_j(t)+[-R_j(t),R_j(t)]^d\subseteq X_j$. Its exact initial squared comparison and [F12]–[F13] give $\|U_0(a)-y_0\|_2\le d_0<R_0(a)$. For each coordinate, $|U_0(a)_i-(y_0)_i|^2\le\sum_k|U_0(a)_k-(y_0)_k|^2=\|U_0(a)-y_0\|_2^2$, so [F13] places $y_0$ in $U_0(a)+[-R_0(a),R_0(a)]^d\subseteq X_0$. Hence $(a,y_0)$ lies in the checked open ODE domain. [F1, F2, F12, F13, given]

2.1 Fix $w=u-v$ and define $\phi(s)=\langle w,f(t,v+sw)\rangle$ for $0\le s\le1$. The segment stays in $X_j$ by convexity. By [F3] and bilinearity in [F12], $\phi'(s)=\langle w,D_yf(t,v+sw)w\rangle$. The bound in step 1.1 and rowwise Cauchy–Schwarz give $\|D_yf\,w\|_2\le\|D_yf\|_F\|w\|_2\le L_j\|w\|_2$, and [F7] then gives $|\phi\prime(s)|\le L_j\|w\|_2^2$. [F6] on $[0,1]$ yields $\phi(1)-\phi(0)=\langle u-v,f(t,u)-f(t,v)\rangle\le L_j\|u-v\|_2^2$. Thus the one-sided Lipschitz hypothesis in [F4] holds with $\ell=L_j$ whenever the exact and reconstructed states lie in the certified box. [F3, F4, F6, F7, F12, step 1.1, algebra]

3.1 Picard–Lindelöf applies locally by [F3], and [F8] gives a unique maximal solution through $(a,y_0)$. On any interval where it exists and lies in the checked panel boxes, apply [F4] panel by panel. Write $\delta_j(t):=R_j'(t)-L_jR_j(t)-\rho_j$, which is strictly positive by the checker. Integrating the scalar identity $R_j'=L_jR_j+\rho_j+\delta_j$ with the same integrating factor shows that the radius dominates the error bound strictly: the initial gap is positive because $d_0<R_0(a)$, and each panel adds the positive integral of $e^{\int_s^t L_j}\delta_j(s)$, using positivity of the exponential [F11] and the fundamental theorem [F10]. For $e=y-U_j$, each coordinate satisfies $|e_i|^2\le\sum_k|e_k|^2=\|e\|_2^2$, so [F13] gives $|e_i|\le\|e\|_2$; hence $\|e\|_2<R_j(t)$ implies $y(t)\in U_j(t)+[-R_j(t),R_j(t)]^d\subseteq X_j$. The comparison therefore applies up to any first exit and gives a strict radius bound there, ruling out that exit. At each panel endpoint the stored reconstructions and radii agree, so the strict inequality continues across the finite partition. [F1, F3, F4, F8, F10, F11, F13, step 1.1, step 2.1, algebra]

4.1 If the maximal solution ended before or at $T$, the no-first-exit conclusion in step 3.1 would keep its graph inside the finite union of the closed bounded boxes $[t_j,t_{j+1}]\times X_j$, which is compact by [F9] and lies in the rational field's open domain. All divisions stay away from zero there by step 1.1. This contradicts [F5], so the maximal solution reaches $T$. Applying the panelwise error estimate on the whole interval gives $\|y(t)-U_j(t)\|_2<R_j(t)$ and hence $y(t)\in X_j$ for every panel time. Uniqueness follows from local Lipschitz continuity in [F3] and the local uniqueness clause of Picard–Lindelöf. [F3, F5, F9, step 3.1, step 1.1] ∎
