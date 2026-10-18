---
id: thm-phase-field-convex-splitting-ac-ch-time-error
kind: theorem
title: First-order time error under smooth fixed-mesh solutions
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - def-phase-field-gradient-flow-and-double-well
  - def-phase-field-discrete-realizations
  - alg-phase-field-convex-splitting-backward-euler
  - thm-phase-field-convex-splitting-step-existence-and-energy
  - lem-phase-field-neumann-laplacian-kernel-and-gauge
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Jie Shen and Xiaofeng Yang, Numerical approximations of Allen-Cahn and Cahn-Hilliard equations, Discrete and Continuous Dynamical Systems A 28 (2010), 1669–1691
      url: https://www.math.purdue.edu/~shen7/pub/ac_ch.pdf
      locator: "§§2.1–2.2 and 3.1–3.2, printed pp. 1672–1688 / PDF pp. 3–19: stability arguments and error estimates under explicit smoothness, truncation, and epsilon-dependent constants. The local theorem below proves the selected backward-Euler split in a fixed finite-dimensional space."
    - title: Jie Shen, Jie Xu, and Jiang Yang, The scalar auxiliary variable (SAV) approach for gradient flows, Journal of Computational Physics 353 (2018), 407–416
      url: https://www.math.purdue.edu/~shen7/pub/SXY17.pdf
      locator: "§2.1, equations (2.1)–(2.2), PDF pp. 2–3: first-order convex splitting, used only as a comparison of the same implicit/explicit split."
verification:
  precheck: pending
---

## Statement

Fix one finite-dimensional realization in [[def-phase-field-discrete-realizations]] and $T>0$. Let $G_{c,h}(u)=\kappa A_hu+\nabla_hP_{c,h}(u)$ and $G_{e,h}(u)=\nabla_hP_{e,h}(u)$. The exact semidiscrete Allen–Cahn trajectory is the solution of $y'=-M(G_{c,h}(y)-G_{e,h}(y))$; the exact semidiscrete Cahn–Hilliard trajectory is the fixed-mean solution of $y'=-MA_h(G_{c,h}(y)-G_{e,h}(y))$. Assume the applicable exact trajectory is $C^2$ on $[0,T]$ and remains in a compact set. Let the numerical solution start from $u^0=y(0)$ and use the convex-splitting step. Then there are constants $C_{h,\varepsilon,T}$ and $\tau_0>0$ such that, for $0<\tau\le\tau_0$:

- for Allen–Cahn, $\max_{n\tau\le T}\|u^n-y(t_n)\|_h\le C_{h,\varepsilon,T}\tau$;
- for Cahn–Hilliard, with $y$ and $u^n$ having the same mean and $\|z\|_{-1,h}^2=\langle A_h^\dagger z,z\rangle_h$ on mean-zero vectors, $\max_{n\tau\le T}\|u^n-y(t_n)\|_{-1,h}\le C_{h,\varepsilon,T}\tau$.

The constants may depend on the spatial realization, $\varepsilon$, the smooth solution, and $T$. This is a fixed-mesh time estimate; it is not a uniform spatial error bound.

## Facts & Assumptions

**Given:** A fixed finite-dimensional realization, the convex energy split, the exact semidiscrete solution, its stated smoothness and compact range, the exact initial value, and a step size $0<\tau\le\tau_0$.

[F1] [[alg-phase-field-convex-splitting-backward-euler]]: the AC update is $\delta u/\tau=-M(G_{c,h}(u^{n+1})-G_{e,h}(u^n))$, and the CH update is $\delta u/\tau=-MA_h(G_{c,h}(u^{n+1})-G_{e,h}(u^n))$.

[F2] [[thm-phase-field-convex-splitting-step-existence-and-energy]]: each step exists uniquely, the physical discrete energy is nonincreasing, and the convex implicit term has the monotonicity used in its proof.

[F3] [[lem-phase-field-neumann-laplacian-kernel-and-gauge]]: $A_h$ is self-adjoint, nonnegative, and invertible on mean-zero vectors, so $\|\cdot\|_{-1,h}$ is a norm there and $A_h^\dagger$ is available.

[F4] [[def-phase-field-gradient-flow-and-double-well]] and [[def-phase-field-discrete-realizations]]: the scalar split is $F_c(s)=s^4/(4\varepsilon^2)+s^2/(2\varepsilon^2)$, $F_e(s)=s^2/\varepsilon^2-1/(4\varepsilon^2)$, so $\nabla_hP_{e,h}(u)=2u/\varepsilon^2$ is globally Lipschitz and $P_{c,h}$ is convex.

[A1] The relevant exact semidiscrete trajectory is $C^2$ and its image lies in a compact set on which $G_{c,h}$ has bounded derivative.

## Proof

1.1 Substitute the exact trajectory into the backward-Euler split. For Allen–Cahn define $R_n^{AC}:=y(t_{n+1})-y(t_n)+M\tau(G_{c,h}(y(t_{n+1}))-G_{e,h}(y(t_n)))$. For Cahn–Hilliard define $R_n^{CH}:=y(t_{n+1})-y(t_n)+M\tau A_h(G_{c,h}(y(t_{n+1}))-G_{e,h}(y(t_n)))$. The exact integral equations express these residuals as $M$ times the quadrature difference $\tau G_{c,h}(y(t_{n+1}))-\int_{t_n}^{t_{n+1}}G_{c,h}(y(s))ds+\int_{t_n}^{t_{n+1}}G_{e,h}(y(s))ds-\tau G_{e,h}(y(t_n))$, with an additional $A_h$ in the Cahn–Hilliard branch. The bounded derivatives on the compact exact trajectory and $\|y(t)-y(s)\|\le C|t-s|$ imply $\|R_n^{AC}\|_h\le C\tau^2$ and $\|R_n^{CH}\|_{-1,h}\le C\tau^2$; in the latter case $R_n^{CH}$ lies in the mean-zero range of $A_h$ by [F3]. [A1, F1, F3, given, algebra]

1.2 Convexity of $P_{c,h}$ and nonnegativity of $A_h$ make $G_{c,h}$ monotone. By [F4], $G_{e,h}$ is globally Lipschitz with constant $L_e=2/\varepsilon^2$. In the quartic realizations, the lower bound $F_\varepsilon(s)\ge s^4/(8\varepsilon^2)-1/(4\varepsilon^2)$ and the energy inequality in [F2] also bound every numerical state on the fixed finite-dimensional space. [F2, F4, step 1.1, algebra]

2.1 In the Allen–Cahn branch put $e_n=u^n-y(t_n)$. Subtract the exact residual equation from the numerical recurrence and pair with $e_{n+1}$. The identity $2\langle e_{n+1}-e_n,e_{n+1}\rangle_h=\|e_{n+1}\|_h^2-\|e_n\|_h^2+\|e_{n+1}-e_n\|_h^2$ and monotonicity from step 1.2 leave only the explicit term and residual on the right. Cauchy–Schwarz and Young give $M\tau L_e\|e_n\|_h\|e_{n+1}\|_h\le\frac{M\tau L_e}{2}(\|e_n\|_h^2+\|e_{n+1}\|_h^2)$ and $\|R_n^{AC}\|_h\|e_{n+1}\|_h\le\frac\tau8\|e_{n+1}\|_h^2+2\tau^{-1}\|R_n^{AC}\|_h^2$. For $\tau$ small enough that $M\tau L_e\le1/8$ and $\tau\le1$, step 1.1 then gives $\|e_{n+1}\|_h^2\le(1+C\tau)\|e_n\|_h^2+C\tau^3$. [F1, F4, step 1.1, step 1.2, algebra]

2.2 In the Cahn–Hilliard branch both errors have mean zero. Pair the original difference equation with $A_h^\dagger e_{n+1}$. Self-adjointness and $A_hA_h^\dagger e_{n+1}=e_{n+1}$ give $2\langle e_{n+1}-e_n,A_h^\dagger e_{n+1}\rangle_h=\|e_{n+1}\|_{-1,h}^2-\|e_n\|_{-1,h}^2+\|e_{n+1}-e_n\|_{-1,h}^2$. The implicit term becomes $M\tau\langle G_{c,h}(u^{n+1})-G_{c,h}(y_{n+1}),e_{n+1}\rangle_h\ge M\tau\kappa\|e_{n+1}\|_{1,h}^2$, because $G_{c,h}$ is the sum of $\kappa A_h$ and the gradient of a convex functional. The explicit term obeys $|\langle G_{e,h}(u^n)-G_{e,h}(y_n),e_{n+1}\rangle_h|\le L_e\|e_n\|_{-1,h}\|e_{n+1}\|_{1,h}$, where $\|v\|_{1,h}^2=\langle A_hv,v\rangle_h$; this is Cauchy–Schwarz after $A_h^{-1/2}$ and $A_h^{1/2}$ on the mean-zero space. Young's inequality absorbs half of the positive $M\tau\kappa\|e_{n+1}\|_{1,h}^2$ term and leaves $C\tau\|e_n\|_{-1,h}^2$. The residual from step 1.1 satisfies $|\langle R_n^{CH},A_h^\dagger e_{n+1}\rangle_h|=|\langle R_n^{CH},e_{n+1}\rangle_{-1,h}|\le C\tau^2\|e_{n+1}\|_{-1,h}\le\frac\tau8\|e_{n+1}\|_{-1,h}^2+C'\tau^3$. Hence, for small $\tau$, $\|e_{n+1}\|_{-1,h}^2\le(1+C\tau)\|e_n\|_{-1,h}^2+C\tau^3$. [F1, F3, F4, step 1.1, step 1.2, algebra]

3.1 In either recurrence, $e_0=0$. Iterating $z_{n+1}\le(1+C\tau)z_n+C\tau^3$ for $n\tau\le T$ gives $z_n\le C\tau^3\sum_{j=0}^{n-1}(1+C\tau)^j\le C_T\tau^2$, since $(1+C\tau)^n\le e^{CT}$. Taking square roots gives the two asserted $O(\tau)$ bounds. The constants include the fixed-mesh operator norms and the potential's $\varepsilon$-dependent derivatives. [step 2.1, step 2.2, algebra] ∎

