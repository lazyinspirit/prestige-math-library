---
id: thm-pinn-linear-parabolic-consistency
kind: theorem
title: "Parabolic PINN minimizers converge to the initial-boundary solution"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-shin-parabolic-operator-and-boundary
  - lem-shin-parabolic-residual-stability
  - lem-shin-parabolic-energy-estimate
  - thm-shin-parabolic-initial-boundary-existence-and-residual-stability
  - thm-pinn-regularized-loss-consistency
  - cex-pinn-regularization-thresholds-need-balanced-sample-counts
provenance:
  statement: literature-derived
  proof: incomplete
proof_strategy: direct
verification:
  precheck: blocked
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "Theorems 3.6 and 3.7, Assumption 3.4, Appendices F–G"
---

## Statement

Assume all sampling, trial-class, exact-zero-witness, and regularization hypotheses of the preceding regularized PINN theorem. Let $U\subset\mathbb R^d$ be bounded, $T>0$, $Q=U\times(0,T)$, and suppose the time-dependent coefficients satisfy the full parabolic assumptions stated in the parabolic PDE interface: differentiability of $a_{ij},b_i$, uniform ellipticity with constant $\lambda_0$, parabolic Hölder regularity and the source bounds on $|a_{ij}|_\alpha$, $|\delta\widetilde b_i|_\alpha$, $|\delta^2\widetilde c|_\alpha$, $|\delta^2f|_\alpha<\infty$, Hölder initial and lateral data with $g(x)=\varphi(x,0)$ on $\partial U$, an exterior tangent ball at every spatial boundary point, some $\theta>0$ with $\theta^2a_{11}+\theta\widetilde b_1\ge1$, and the source coefficient bounds with constants $\Lambda,v$. Assume $\widetilde c\le0$, $m_r=O(m_b^{(d+1)/d})$, and use the exact regularization thresholds of the PINN objective algorithm. For global minimizers $h_m$ of that objective, the source asserts that the problem $-u_t^*+L_t[u^*]=f$ with initial datum $g$ and lateral datum $\varphi$ has a unique classical solution and that $h_m\to u^*$ almost surely in $C^0(Q)$. If every minimizer satisfies both initial and lateral data exactly, the source further asserts strong convergence in $L^2(0,T;H^1(U))$.

## Statement references
[Shin et al., parabolic PINN convergence and energy theorems, Assumption 3.4 and Appendices F–G](https://arxiv.org/pdf/2004.01806)

## Facts & Assumptions

**Given:** The parabolic operator and compatible data, full source coefficient and sampling assumptions, exact regularization thresholds, and global minimizers in the Statement.

[A1] Unresolved upstream claim: the regularized-loss supplier asserts uniform residual convergence, but its boundary compactness proof lacks a consequence of the stated threshold assumptions ([[thm-pinn-regularized-loss-consistency]], [[cex-pinn-regularization-thresholds-need-balanced-sample-counts]]).

[A2] Unresolved PDE interface: the source's variable-coefficient parabolic existence theorem is stated by citation and has not been proved locally ([[thm-shin-parabolic-initial-boundary-existence-and-residual-stability]]).

[F1] Conditional on a unique classical solution and the residual/boundary stability inequality, uniform residual and data convergence implies uniform convergence to that solution ([[lem-shin-parabolic-residual-stability]]).

[F2] If the error has zero initial and lateral trace, the local energy estimate converts residual convergence into strong $L^2(0,T;H^1(U))$ convergence ([[lem-shin-parabolic-energy-estimate]]).

## Proof

**Proof strategy:** combine the source minimizer residual limit with parabolic residual stability, then apply the zero-trace energy estimate.

1.1 Conditional on [A1] and [A2], the source residual limits give $\|f+(h_m)_t-L_t[h_m]\|_{C^0(Q)}\to0$ and $\|h_m-\psi\|_{C^0(\Gamma_T)}\to0$ almost surely. Applying [F1] gives $\|h_m-u^*\|_{C^0(Q)}\to0$. [A1, A2, F1, algebra]

1.2 If the initial and lateral data are satisfied exactly, $e_m=u^*-h_m$ vanishes on $\Gamma_T$ and $-\partial_t e_m+L_t[e_m]=f+(h_m)_t-L_t[h_m]$. The right side tends to zero in $L^2(Q)$ because it tends to zero uniformly and $Q$ has finite measure; step 1.1 gives $\|e_m\|_{L^2(Q)}\to0$. Applying [F2] yields $\|e_m\|_{L^2(0,T;H^1(U))}\to0$. [A1, A2, F2, step 1.1, algebra]

## Unresolved proof obligation

The variable-coefficient parabolic existence and stability interface is not supplied by the heat-only maximum-principle theorem, and the regularized-loss residual limit remains escalated. To instantiate the energy conclusion, the exact-zero initial/lateral trace must also place each error in the spatial $H^1_0(U)$ class at almost every time; that trace identification has not been locally proved for the full Lipschitz-domain scope. The exact source claim is retained and escalated.
