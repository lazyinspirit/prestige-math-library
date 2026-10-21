---
id: thm-pinn-linear-parabolic-consistency
kind: theorem
title: "Parabolic PINN minimizers converge to the initial-boundary solution"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-shin-zero-data-parabolic-classical-energy-identification
  - def-shin-parabolic-operator-and-boundary
  - lem-shin-parabolic-residual-stability
  - lem-shin-parabolic-energy-estimate
  - thm-shin-parabolic-initial-boundary-existence-and-residual-stability
  - thm-pinn-regularized-loss-consistency
  - cex-pinn-regularization-thresholds-need-balanced-sample-counts
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
      locator: "Theorems 3.6 and 3.7, Assumption 3.4, Appendices F–G"
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $U\subset\mathbb R^d$ be nonempty, bounded and open with an exterior ball at every spatial boundary point, $T>0$, and $Q=U\times(0,T)$. Use the full parabolic coefficient/data hypotheses of the variable-coefficient existence theorem: differentiability of $a_{ij},b_i$, symmetry and uniform ellipticity, the source weighted parabolic Hölder coefficient bounds, bounded locally parabolic Hölder expanded drift and potential, bounded locally parabolic Hölder forcing, compatible Hölder initial and lateral data, and one-sided local Hölder control at interior points of the final face. Use
$$L_t[u]=\sum_{i,j}D_i(a_{ij}D_j u)+\sum_iD_i(b_i u)+\sum_i c_iD_i u+du,$$
$$\widetilde b_i=\sum_jD_j a_{ij}+b_i+c_i,\qquad\widetilde c=\sum_iD_i b_i+d\le0.$$
Retain the source pointwise bounds with constants $\lambda_0,\Lambda,v$ and its auxiliary $\theta>0$ condition $\theta^2a_{11}+\theta\widetilde b_1\ge1$; the direct parabolic time barrier also works without that auxiliary condition. Boundedness is part of the source's order-zero Hölder norm, not a consequence of its weighted $\delta^2f$ bound alone.

Use the corrected small-scale sampling, data/trial-class, exact-zero-witness and exact regularization assumptions of the regularized PINN theorem in the ambient dimension $D=d+1$, with residual $-h_t+L_t[h]$, target $f$, and restriction to the initial-lateral boundary $\Gamma_T$ with target $\psi$ combining the compatible data. Require $H_m\subset C^{2,1}(Q)\cap C(\bar U\times[0,T])$. The Euclidean Hölder assumptions in this sampling interface are retained in addition to the parabolic PDE regularity assumptions. There is one classical solution $u^*\in C^{2,1}(Q)\cap C(\bar U\times[0,T])$, locally parabolic Hölder in its displayed derivatives, to $-u_t^*+L_t[u^*]=f$ and the prescribed data.

Every sequence of global empirical regularized minimizers converges to $u^*$ in $C^0(Q)$ almost surely as both counts tend to infinity. For $m_r=O(m_b^{(d+1)/d})$, the occupancy-event squared uniform solution error is $O(m_r^{-\alpha/(d+1)})$, with the probability and constants of the regularized-loss theorem at dimension $D=d+1$. If all minimizers satisfy both initial and lateral data exactly and the displayed divergence expansion agrees distributionally with the classical operator (in particular if $a,b$ are spatially $C^1$ locally), then their errors belong to $L^2(0,T;H^1_0(U))$ and tend to zero in $L^2(0,T;H^1(U))$ almost surely. The energy conclusion uses the actual bounded divergence coefficients and their source $v$ bound. No closed-cylinder $C^{2,1}$ regularity of $u^*$ or convergence of an optimizer is asserted.

## Statement references

[[thm-shin-parabolic-initial-boundary-existence-and-residual-stability]]

[[thm-pinn-regularized-loss-consistency]]

[[lem-shin-zero-data-parabolic-classical-energy-identification]]

[Shin et al., Theorems 3.6–3.7 and Appendices F–G](https://arxiv.org/pdf/2004.01806)

## Facts & Assumptions

**Given:** The parabolic problem, full sampling and exact regularizer hypotheses, global minimizers and choice assumptions in the Statement.

[F1] The local variable-coefficient construction gives the unique classical solution with continuous initial/lateral/final boundary attainment and the residual stability estimate ([[thm-shin-parabolic-initial-boundary-existence-and-residual-stability]], [[lem-shin-parabolic-residual-stability]], [[def-shin-parabolic-operator-and-boundary]]).

[F2] The populated-cell theorem gives uniform convergence of the PDE and prescribed-data residuals almost surely, together with its count-dependent occupancy-event rate; weight comparability is not a premise ([[thm-pinn-regularized-loss-consistency]]).

[F3] A zero-data locally classical continuous error for the weak-compatible divergence operator has finite variational energy and zero $L^2$ initial trace ([[lem-shin-zero-data-parabolic-classical-energy-identification]]).

[F4] The variational zero-spatial-trace energy estimate applies in that class ([[lem-shin-parabolic-energy-estimate]]).

[A1] The existence and compactness suppliers carry AC and CC; the Sobolev energy-space convention carries CC ([[def-axiom-of-choice]], [[def-countable-choice]]).

## Proof

1.1 Apply [F1] under the full stated PDE hypotheses to obtain $u^*$. For $e_m=h_m-u^*$ the equation is $P[e_m]=-r_m$ with $r_m=f+(h_m)_t-L_t[h_m]$, and its boundary values are $h_m-\psi$. The residual stability estimate gives $\|e_m\|_{\infty;Q}\le C_P(\|r_m\|_{\infty;Q}+\|h_m-\psi\|_{\infty;\Gamma_T})$. By [F2] both terms tend to zero almost surely. Squaring this estimate transfers the occupied-cell error bound and its event probability to the solution error. With $D=d+1$, the count specialization in [F2] is exactly the one displayed here. [given, A1, F1, F2, algebra]

2.1 Under exact initial and lateral data the errors have zero classical prescribed values and bounded globally Hölder residuals. Under the explicit weak-compatible divergence hypothesis, [F3] identifies each with the zero-initial variational Dirichlet solution, so $e_m\in L^2(0,T;H^1_0(U))$ with the required time derivative in the dual space. There is no inference from continuous zero trace alone. Since $Q$ has finite volume, [F2] implies $\|r_m\|_{L^2(Q)}\to0$. Apply [F4] with $e_m(0)=0$ to get both $\sup_t\|e_m(t)\|_2\to0$ and $\|\nabla e_m\|_{L^2(Q)}\to0$. Their sum implies the asserted $L^2(0,T;H^1(U))$ convergence. [given, F2, F3, F4, step 1.1, algebra] ∎

## Remarks

The source's pointwise word “differentiable” is retained for its classical problem. Its integration-by-parts energy argument additionally uses the weak divergence identity; this requirement is explicit here, with local spatial $C^1$ as a sufficient interpretation. Merely continuous zero boundary data do not prove energy membership. The new energy-identification helper supplies that separate step once the divergence equation has its intended weak meaning. The source's unusual weighted $C_{2+\alpha}$ convention is preserved in the definition; this theorem does not claim that the limiting continuous-data solution has the printed weighted global trial norm.
