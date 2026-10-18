---
id: thm-phase-field-sav-modified-energy-law
kind: theorem
title: The SAV step is uniquely solvable and dissipates a modified energy
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - alg-phase-field-sav-cahn-hilliard-step
  - lem-phase-field-neumann-laplacian-kernel-and-gauge
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Jie Shen, Jie Xu, and Jiang Yang, The scalar auxiliary variable (SAV) approach for gradient flows, Journal of Computational Physics 353 (2018), 407–416
      url: https://www.math.purdue.edu/~shen7/pub/SXY17.pdf
      locator: "§3, equation (3.2), printed p. 410 / PDF p. 4, for the continuous SAV modified-energy dissipation law; §4, equations (4.2)–(4.5) and Theorem 4.1, printed pp. 411–412 / PDF pp. 5–6, for a general H^{-1} SAV flow and its Crank–Nicolson discrete energy law. The local proof below supplies the backward-Euler Cahn–Hilliard identity."
    - title: Jie Shen and Xiaofeng Yang, Numerical approximations of Allen-Cahn and Cahn-Hilliard equations, Discrete and Continuous Dynamical Systems A 28 (2010), 1669–1691
      url: https://www.math.purdue.edu/~shen7/pub/ac_ch.pdf
      locator: "§3.1, mixed formulation (3.1), printed p. 1681 / PDF p. 13: the mixed no-flux Cahn–Hilliard equations and gradient-energy pairing."
verification:
  precheck: pass
---

## Statement

Under the finite-dimensional hypotheses of [[alg-phase-field-sav-cahn-hilliard-step]], the displayed SAV linear system has a unique solution at every step. Every solution conserves the discrete mean and obeys
$$\widetilde E_h(u^{n+1},r^{n+1})+\frac\kappa2\langle A_h\delta u,\delta u\rangle_h+(\delta r)^2+M\tau\langle A_h\mu^{n+1},\mu^{n+1}\rangle_h=\widetilde E_h(u^n,r^n),$$
where $\delta u=u^{n+1}-u^n$, $\delta r=r^{n+1}-r^n$, and
$$\widetilde E_h(u,r)=\frac\kappa2\langle A_hu,u\rangle_h+r^2.$$
Thus $\widetilde E_h$ is nonincreasing. This conclusion is about the modified energy; it does not assert monotonicity of the original physical energy $\mathcal E_h(u)=\frac\kappa2\langle A_hu,u\rangle_h+E_{1,h}(u)$.

## Facts & Assumptions

**Given:** A finite-dimensional no-flux realization, $M,\tau,\kappa,C_0>0$, a previous pair $(u^n,r^n)$, and the SAV equations.

[F1] [[alg-phase-field-sav-cahn-hilliard-step]]: $\alpha_n>0$ is fixed by $(u^n)$, $g_{1,h}(u^n)$ is fixed, and the three displayed equations are linear in $(u^{n+1},r^{n+1},\mu^{n+1})$.

[F2] [[lem-phase-field-neumann-laplacian-kernel-and-gauge]]: $A_h$ is self-adjoint and nonnegative, annihilates constants, and its quadratic form vanishes only on constants.

## Proof

1.1 Subtract two candidate solutions with the same old data. Their difference $(v,s,\nu)$ satisfies the same linear system with old data zero and the same fixed $\alpha_n,g_{1,h}(u^n)$. Pair $v=-M\tau A_h\nu$ with $\nu$, pair $\nu=\kappa A_hv+\alpha_ns g_{1,h}(u^n)$ with $v$, and use $s=\frac{\alpha_n}{2}\langle g_{1,h}(u^n),v\rangle_h$. This gives $\kappa\langle A_hv,v\rangle_h+2s^2+M\tau\langle A_h\nu,\nu\rangle_h=0$. All terms are nonnegative by [F2], so $v$ is constant. The first equation makes $v$ mean zero, hence $v=0$; the third then gives $s=0$, and the second gives $\nu=0$. Thus the square finite-dimensional linear system has trivial kernel and is invertible. [F1, F2, given, algebra]

2.1 For an actual step, pairing the first SAV equation with $\mathbf1$ and using $A_h\mathbf1=0$ proves $\langle u^{n+1},\mathbf1\rangle_h=\langle u^n,\mathbf1\rangle_h$. Pairing that equation with $\mu^{n+1}$ gives $\langle\mu^{n+1},\delta u\rangle_h=-M\tau\langle A_h\mu^{n+1},\mu^{n+1}\rangle_h$. Pairing the second equation with $\delta u$ and using the third gives $$\langle\mu^{n+1},\delta u\rangle_h=\frac\kappa2\big(\langle A_hu^{n+1},u^{n+1}\rangle_h-\langle A_hu^n,u^n\rangle_h+\langle A_h\delta u,\delta u\rangle_h\big)+2r^{n+1}\delta r.$$ Since $2r^{n+1}\delta r=(r^{n+1})^2-(r^n)^2+(\delta r)^2$, equating the two expressions proves the stated modified-energy identity. [F1, F2, given, algebra] ∎

