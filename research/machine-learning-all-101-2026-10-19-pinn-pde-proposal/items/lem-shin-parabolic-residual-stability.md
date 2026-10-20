---
id: lem-shin-parabolic-residual-stability
kind: lemma
title: "Variable-coefficient parabolic residual and boundary stability"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-shin-parabolic-operator-and-boundary, def-parabolic-cylinder-and-parabolic-boundary]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "Appendix F, Lemma F.2 and proof F.3"
    - title: "John K. Hunter, Notes on Partial Differential Equations"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§6.2, variable-coefficient parabolic maximum principle and energy setup"
---

## Statement

Let $U\subset\mathbb R^d$ be bounded, $T>0$, and
$$P[w]=-w_t+\sum_{i,j=1}^d a_{ij}(x,t)D_iD_jw+\sum_{j=1}^d\widetilde b_j(x,t)D_jw+\widetilde c(x,t)w$$
on $Q=U\times(0,T)$. Suppose $a(x,t)$ is symmetric, $\xi^Ta(x,t)\xi\ge\lambda_0|\xi|^2$ with $\lambda_0>0$, $\widetilde b,\widetilde c$ are bounded and continuous, and $\widetilde c\le0$. There is $C_P<\infty$, depending only on $U,T,\lambda_0$ and the coefficient bounds, such that every $w\in C^{2,1}(Q)\cap C^0(\bar U\times[0,T])$ with $P[w]\in C^0(Q)$ satisfies
$$\|w\|_{C^0(Q)}\le C_P\left(\|P[w]\|_{C^0(Q)}+\|w\|_{C^0(\Gamma_T)}\right),$$
where $\Gamma_T=(\bar U\times\{0\})\cup(\partial U\times[0,T])$ excludes the final-time face.

## Statement references
[Shin et al., Appendix F, Lemma F.2: parabolic residual stability estimate](https://arxiv.org/pdf/2004.01806)

[Shin et al., Appendix F, proof of Lemma F.2](https://arxiv.org/pdf/2004.01806)

## Facts & Assumptions

**Given:** The bounded cylinder, uniformly elliptic coefficient matrix, bounded drift and zero-order coefficients with $\widetilde c\le0$, and the regularity and data of $w$ in the Statement.

[F1] The parabolic operator has the sign convention $P=-\partial_t+L_t$ and its prescribed boundary is initial plus lateral data ([[def-shin-parabolic-operator-and-boundary]]).

[F2] On the final-time face the time derivative is the left derivative; at a final-time maximum it is nonnegative ([[def-parabolic-cylinder-and-parabolic-boundary]]).

## Proof

**Proof strategy:** use a spatial exponential barrier and the weak parabolic maximum principle.

1.1 Choose $a_1<b_1$ with $a_1\le x_1\le b_1$ on $\bar U$. Let $B=\|\widetilde b_1\|_\infty$, $C_0=\|\widetilde c\|_\infty$, and choose $\kappa>0$ so that $\kappa^2\lambda_0-\kappa B-C_0\ge1$. For $\psi(x,t)=e^{\kappa x_1}$, [F1] gives $P[\psi]=e^{\kappa x_1}(\kappa^2a_{11}+\kappa\widetilde b_1+\widetilde c)\ge\eta:=e^{\kappa a_1}>0$. Choose $M>e^{\kappa b_1}$ and put $\Phi=M-\psi$. Then $\Phi>0$ and $P[\Phi]=M\widetilde c-P[\psi]\le-\eta$. [given, F1, algebra, choose]

2.1 Let $R=\|P[w]\|_\infty$, $Q_0=\|w\|_{C^0(\Gamma_T)}$, and $z=w-Q_0-(R/\eta)\Phi$. On $\Gamma_T$, $z\le0$, and in $Q$, $$P[z]=P[w]-Q_0\widetilde c-(R/\eta)P[\Phi]\ge-R+R=0.$$ [given, step 1.1, algebra]

3.1 Fix any $0<\tau<T$ and work on $\bar U\times[0,\tau]$, where the time derivatives at spatial interior points at $t=\tau$ exist because $\tau<T$. Suppose $z>0$ somewhere on this stopped cylinder. Since $z\le0$ on $\Gamma_T$, a positive maximum occurs at a spatial interior point and at a time in $(0,\tau]$. For sufficiently small $\delta>0$, $z+\delta\psi$ still has a positive maximum away from $\Gamma_T$. At this maximum, the spatial gradient is zero and the spatial Hessian is negative semidefinite; the time derivative is zero for $t<\tau$ and nonnegative from the left if $t=\tau$. Thus [F2] and $\widetilde c\le0$ imply $P[z+\delta\psi]\le0$, while step 2.1 and step 1.1 give $P[z+\delta\psi]>0$. This contradiction shows $z\le0$ on every stopped cylinder; let $\tau\uparrow T$ and use continuity at the final face. Hence $w\le Q_0+(R/\eta)\|\Phi\|_\infty$. [step 1.1, step 2.1, F2, contradiction]

4.1 Apply the same argument to $-w$, for which $P[-w]=-P[w]$ and the boundary norm is still $Q_0$. Combining the upper and lower bounds gives the asserted estimate with $C_P=\max\{1,\|\Phi\|_\infty/\eta\}$. [step 3.1, algebra] ∎

