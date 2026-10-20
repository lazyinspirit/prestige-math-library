---
id: thm-pinn-linear-elliptic-consistency
kind: theorem
title: "Elliptic PINN minimizers converge to the Dirichlet solution"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-shin-elliptic-divergence-form-operator
  - lem-shin-elliptic-residual-stability
  - lem-shin-elliptic-energy-estimate
  - thm-shin-elliptic-dirichlet-existence-and-residual-stability
  - thm-pinn-regularized-loss-consistency
  - cex-pinn-regularization-thresholds-need-balanced-sample-counts
  - cex-shin-elliptic-corner-regularity-on-exterior-sphere-domain
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
      locator: "Theorem 3.3, Appendix D, Theorem D.1 and Lemma D.2; Appendix E"
---

## Statement

Assume the sampling, trial-class, exact-zero-witness, and regularization hypotheses of the preceding regularized PINN theorem. Let $U\subset\mathbb R^d$ be bounded Lipschitz with an exterior sphere at each boundary point. For $0<\alpha<1$, let $a_{ij}=a_{ji}\in C^{1,\alpha}(U)$ be uniformly elliptic with minimum eigenvalue at least $\lambda_0>0$, let $b_i\in C^{1,\alpha}(U)$ and $c_i,d\in C^\alpha(U)$, and set
$$\widetilde b_j=\sum_iD_i a_{ij}+b_j+c_j,\qquad \widetilde c=\sum_iD_i b_i+d\le0.$$
Assume the source coefficient bounds $\sum_{i,j}|a_{ij}(x)|^2\le\Lambda$ and $\lambda_0^{-2}(\|b(x)\|^2+\|c(x)\|^2)+\lambda_0^{-1}|d(x)|\le v^2$, and let $f\in C^{0,\alpha}(U)$ and $g\in C^{0,\alpha}(\partial U)$. The source asserts that there is a unique solution $u^*\in C^{2,\alpha}(U)\cap C^0(\bar U)$ to $L[u^*]=f$ with $u^*=g$ on $\partial U$, and that every sequence of global minimizers of the prescribed Hölder-regularized empirical objective converges to $u^*$ in $C^0(U)$ almost surely. If each minimizer also satisfies the boundary data exactly, the source further asserts strong convergence in $H^1(U)$.

## Statement references
[Shin et al., elliptic PINN consistency theorem and Appendices D–E](https://arxiv.org/pdf/2004.01806)

## Facts & Assumptions

**Given:** The PDE, coefficient, sampling, trial-class, regularization, exact-witness, and global-minimizer assumptions in the Statement.

[A1] Unresolved upstream claim: the regularized-loss supplier asserts uniform convergence of the PDE residual and boundary residual, but its boundary compactness proof uses a threshold-comparability implication refuted by the recorded counterexample ([[thm-pinn-regularized-loss-consistency]], [[cex-pinn-regularization-thresholds-need-balanced-sample-counts]]).

[A2] Unresolved PDE interface: the source existence assertion is refuted for the library's global $C^{2,\alpha}(U)$ norm on exterior-sphere Lipschitz domains ([[thm-shin-elliptic-dirichlet-existence-and-residual-stability]], [[cex-shin-elliptic-corner-regularity-on-exterior-sphere-domain]]).

[F1] Conditional on a unique solution and its residual/boundary stability estimate, uniform convergence of the two residuals implies $C^0$ convergence to that solution ([[lem-shin-elliptic-residual-stability]]).

[F2] Under the source coefficient bound and zero Sobolev trace, the elliptic error satisfies the local $H^1$ energy estimate ([[lem-shin-elliptic-energy-estimate]]).

## Proof

**Proof strategy:** combine residual convergence with the elliptic stability estimate, then use the energy estimate for exact boundary fit.

1.1 Conditional on [A1] and [A2], the residual and boundary errors tend to zero uniformly almost surely, and the PDE stability estimate in [F1] gives $\|h_m-u^*\|_{C^0(U)}\to0$. [A1, A2, F1, algebra]

1.2 If $h_m$ also satisfies the exact boundary data and the error $e_m=u^*-h_m$ belongs to $H^1_0(U)$, then $L[e_m]=f-L[h_m]$. The right side tends to zero in $L^2(U)$ because it tends to zero uniformly and $U$ has finite measure; step 1.1 gives $\|e_m\|_{L^2(U)}\to0$. Applying [F2] yields $\|e_m\|_{H^1(U)}\to0$. [A1, A2, F2, step 1.1, algebra]

## Unresolved proof obligation

This is the conditional consequence of the planned interfaces, but neither [A1] nor [A2] is currently a proved supplier. The elliptic existence interface is false in the stated global Hölder class, and the regularized-loss source proof has the threshold-comparability gap. For the $H^1$ branch, the exact-boundary-to-$H^1_0$ trace implication on the full Lipschitz domain also needs an inspected supplier or local proof. The full source theorem is retained and escalated.
