---
id: def-gts-rational-capped-hamiltonian-floer-module
kind: definition
title: Rational capped Hamiltonian Floer modules and their graded submodules
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-gts-hamiltonian-orbit-cappings-and-recap-group
  - lem-gts-hamiltonian-action-and-conley-zehnder-recap-shifts
  - def-gts-universal-novikov-completion
  - lem-gts-novikov-completion-is-filtered-ring
dependency_roles:
  def-gts-hamiltonian-orbit-cappings-and-recap-group: mathematical-premise
  lem-gts-hamiltonian-action-and-conley-zehnder-recap-shifts: mathematical-premise
  def-gts-universal-novikov-completion: mathematical-premise
  lem-gts-novikov-completion-is-filtered-ring: mathematical-premise
justified_by:
  - lem-gts-filtered-finite-matrix-completion-extension
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: John Pardon, An algebraic approach to virtual fundamental cycles on moduli spaces of pseudo-holomorphic curves
      url: https://arxiv.org/pdf/1309.2370v6
      locator: Definitions 7.7.2 and 10.1.1, footnote 35, and Definition 10.4.1; the full energy completion below is a local extension of the source graded completion
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $(M,\omega)$ be a closed smooth symplectic manifold with a chosen compatible almost-complex structure $J_*$. Fix a smooth one-periodic Hamiltonian $H$ with $\iota_{X_{H_t}}\omega=-dH_t$, together with its smooth evolution through time one. Assume every fixed point of its time-one map is nondegenerate: $D\Phi_H^1(z)-I$ is invertible at every fixed point $z$. This assumption concerns all one-periodic orbits, including noncontractible ones. The contractible one-periodic orbits in a component $M_\alpha$ form the set $S_\alpha(H)$.

Set
$$\Gamma_\alpha=\pi_2(M_\alpha)/(\ker\omega_\alpha\cap\ker c_1(TM_\alpha,J_*)),\qquad \nu_\alpha([A])=\omega(A),\qquad \delta_\alpha([A])=-2c_1(A).$$
Choose one cap $w_x$ for each $x\in S_\alpha(H)$. Use the cap and transition-loop convention of [[lem-gts-hamiltonian-action-and-conley-zehnder-recap-shifts]], in which $\mathcal A_H([x,w_x\#A])=\mathcal A_H([x,w_x])-\omega(A)$ and $\mu_{\mathrm{CZ}}(x,w_x\#A)=\mu_{\mathrm{CZ}}(x,w_x)-2c_1(A)$. Write $a_x=-\mathcal A_H([x,w_x])$ and $g_x=\mu_{\mathrm{CZ}}(x,w_x)$.

For $k=\mathbb Q$, or more generally a specified field $k$ of characteristic zero, let $\Lambda_{\nu_\alpha,k}$ be the full energy completion: the coefficient support is finite below each real value of $\nu_\alpha$. Its graded subring is
$$\Lambda^{\mathrm{gr}}_{\nu_\alpha,k}=\left\{b=\sum_A b_Aq^A\in\Lambda_{\nu_\alpha,k}:\#\{\delta_\alpha(A):b_A\ne0\}<\infty\right\}.$$
Define the full and graded capped modules componentwise by
$$\widehat C_k(H;\alpha)=\bigoplus_{x\in S_\alpha(H)}\Lambda_{\nu_\alpha,k}\langle x\rangle,\qquad C_k^{\mathrm{gr}}(H;\alpha)=\bigoplus_{x\in S_\alpha(H)}\Lambda^{\mathrm{gr}}_{\nu_\alpha,k}\langle x\rangle.$$
Take the direct sum over components for $\widehat C_k(H)$ and $C_k^{\mathrm{gr}}(H)$. The orbit sets and the component set are finite under the hypotheses; their finiteness and the completion properties are proved by the finite-matrix completion-extension lemma.

Identify $q^Ax$ with the capped generator $[x,w_x\#A]$. Its degree and positive energy weight are
$$|q^Ax|=g_x+\delta_\alpha(A),\qquad a_H(q^Ax)=a_x+\nu_\alpha(A)=-\mathcal A_H([x,w_x\#A]).$$
For $c=\sum_x b_xx$ put $v_H(c)=\min_x(v(b_x)+a_x)$, with $v_H(0)=+\infty$, and let $F^R\widehat C_k(H)=\{c:v_H(c)\ge R\}$ denote the energy filtration. A change of reference cap $w_x'=w_x\#B_x$ relabels the same generator by $q^{A-B_x}x$. It changes $a_x$ to $a_x+\nu_\alpha(B_x)$ and $g_x$ to $g_x+\delta_\alpha(B_x)$, so the total weight and degree of the capped generator are unchanged.

The graded module is an algebraic direct sum of integer-degree pieces. The full module admits infinite energy-convergent sums of different integer degrees and is interpreted as a completed graded module, or as a parity-graded module; it need not be an algebraic direct sum of its integer-degree pieces. All deck degrees are even. No differential or virtual geometric construction is asserted by this definition. The rational and characteristic-zero modules are parallel coefficient choices; this definition does not convert the separate $\mathbb F_2$ capped module into them or supply a differential over $\mathbb F_2$.

## Definition references

[[def-gts-hamiltonian-orbit-cappings-and-recap-group]]

[[lem-gts-hamiltonian-action-and-conley-zehnder-recap-shifts]]

[[def-gts-universal-novikov-completion]]

[[lem-gts-novikov-completion-is-filtered-ring]]

## Source convention

Pardon Definition 7.7.2 imposes finite grading support in addition to energy finiteness. The ring $\Lambda^{\mathrm{gr}}$ uses precisely those two restrictions. The larger full energy completion and its extension of finite matrices are distinguished from that source category. Footnote 35 permits the reduced recapping group used here. The energy character is $\nu_\alpha=\omega$, and the integer grading character is the local transition-loop index shift $\delta_\alpha=-2c_1$ specified above; sign reversal does not change the reduced quotient group. Any comparison with an external capping convention must identify the deck class explicitly. The weight used for energy completion is the negative of the capped action in the library's Hamiltonian convention; it is not the capped action itself. A virtual geometric package must supply the dimension convention $\operatorname{vdim}\mathcal M(\sigma,p,q)=|q|-|p|+\dim\sigma-1$, so its operators have cohomological degrees $1-\dim\sigma$. No Fredholm index comparison is inferred solely from a coefficient definition.
