---
id: lem-emg-coupled-reduced-einstein-evolution
kind: lemma
title: "Coupled reduced Einstein–Maxwell local evolution"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - def-countable-choice
  - def-emg-electrovacuum-cauchy-system
  - def-emg-periodic-high-sobolev-state
  - thm-emg-symmetric-hyperbolic-research-supplier
  - lem-emg-fieldstrength-positive-symmetric-reduction
  - lem-emg-fixed-smooth-background-harmonic-data
  - lem-gr-reduced-einstein-principal-part
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-electrovacuum-cauchy-system: mathematical-premise
  def-emg-periodic-high-sobolev-state: mathematical-premise
  thm-emg-symmetric-hyperbolic-research-supplier: mathematical-premise
  lem-emg-fieldstrength-positive-symmetric-reduction: mathematical-premise
  lem-emg-fixed-smooth-background-harmonic-data: mathematical-premise
  lem-gr-reduced-einstein-principal-part: mathematical-premise
sources:
  references:
    - title: "P. T. Chruściel, An introduction to the Cauchy problem for the Einstein equations, Roscoff lecture notes (2011), §1.6, printed pp. 23–25."
      url: "https://gravity.univie.ac.at/fileadmin/user_upload/i_gravity_physics/material/teaching/WS_2012/Roscoff.pdf"
    - title: "M. Alcubierre, J. C. Degollado and M. Salgado, The Einstein-Maxwell system in 3+1 form and initial data for multiple charged black holes, arXiv:0907.1151v2 (2009), §II and §II.A, printed pp. 3–8."
      url: "https://arxiv.org/pdf/0907.1151"
verification:
  precheck: pending
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $s\ge5$ be an integer and let $U=(g_{ab},p_{ab},q_{abi},e_i,b_i)$ be the finite-dimensional first-order state on the $2\pi$-periodic three-torus, with $p_{ab}=\bar\nabla_0g_{ab}$ and $q_{abi}=\bar\nabla_i g_{ab}$ for a fixed smooth background connection $\bar\nabla$. The component Sobolev spaces $H^s$ are those of [[def-emg-periodic-high-sobolev-state]]. Assume an open admissible state set $O$ on which $g$ is Lorentzian, $g^{00}<0$, the inverse spatial block $(g^{ij})$ is positive definite, the lapse is positive, and the chosen state variables and coefficients are smooth. Let $K\Subset\operatorname{int}K'\Subset O$ be compact sets and $R\ge0$. Assume the draft local symmetric-hyperbolic supplier [[thm-emg-symmetric-hyperbolic-research-supplier]] with its stated integer-$s$, coefficient, compact-state, choice and norm hypotheses. Then the harmonic-coordinate reduced Einstein equation with source $T_{ab}=\mu_0^{-1}(F_{ac}F_b{}^c-\tfrac14g_{ab}F_{cd}F^{cd})$, coupled to the six source-free Maxwell field-strength evolution equations, is a smooth quasilinear symmetric-hyperbolic system. For every initial state $U_0\in H^s$ taking values in $K$ and satisfying $\|U_0\|_{H^s}\le R$, its reduced system has a local solution with the regularity and compact-state bounds of [[thm-emg-symmetric-hyperbolic-research-supplier]]. No Einstein or Maxwell constraint is assumed in this reduced-system statement.

## Facts & Assumptions
**Given:** The fixed source-free Einstein–Maxwell equations, the positive symmetric Maxwell reduction, a smooth background connection, the admissible compact state sets, and the draft local solver interface.

[L1] Draft definition [[def-emg-electrovacuum-cauchy-system]] fixes the curvature/sign convention, $\kappa>0$, $\mu_0>0$, $\Lambda\in\mathbb R$, the trace-free Maxwell stress $T_{ab}=\mu_0^{-1}Q_{ab}(g,F)$, and the equations $G_{ab}+\Lambda g_{ab}=\kappa T_{ab}$, $dF=d\star_gF=0$. The item file is listed in batch 6; its status is draft and its verification precheck is pending; this use is conditional on the actual draft statement.

[L2] Draft periodic-state definition [[def-emg-periodic-high-sobolev-state]] uses $\mathbb T^3_{2\pi}=\mathbb R^3/(2\pi\mathbb Z)^3$ and the real componentwise Fourier norm $\|u\|_{H^s}^2=\sum_{k\in\mathbb Z^3}(1+|k|^2)^s|\widehat u(k)|^2$, under $\mathrm{AC}_\omega$. Its item file is listed in batch 6; its status is draft and its verification precheck is pending; this use remains conditional on that actual draft.

[L3] Draft result [[thm-emg-symmetric-hyperbolic-research-supplier]]: for $s\ge5$, smooth periodic symmetric matrices $A^\mu$ and smooth $B$ on an open finite-dimensional state set, a time matrix uniformly positive on compact admissible neighborhoods, and bounded $H^s$ initial data valued in $K\Subset\operatorname{int}K\prime$, there is a common $T>0$ and a solution on $(-T,T)$ with $L^\infty H^s\cap C H^{s-1}$, $\partial_sU\in L^\infty H^{s-1}$ and values in $K\prime$. Its proof applies the current GR existence, uniqueness/stability and smooth-persistence suppliers. The draft file is listed in batch-6 inventory and its precheck is pending; this conclusion remains conditional.

[F1] [[lem-emg-fieldstrength-positive-symmetric-reduction]] gives the six-dimensional Maxwell principal block $S(\xi)$, which is symmetric, has norm $|\xi|$, and has positive time matrix $\alpha^{-1}I_6$.

[L4] [[lem-gr-reduced-einstein-principal-part]] gives the reduced metric wave block with time matrix $\operatorname{diag}(I,-g^{00}I,g^{ij}I)$ and states that a smooth algebraic stress map of additional first-order matter variables introduces no metric principal-derivative coupling.

[L5] Draft initial-data interface [[lem-emg-fixed-smooth-background-harmonic-data]] uses a fixed smooth positive reference $\gamma$ and sets $g_{ij}=h_{ij}$, $g_{00}=-1$, $g_{0i}=0$, $\partial_0g_{ij}=2K_{ij}$, $\partial_0g_{00}=-2\operatorname{tr}_hK$, and $\partial_0g_{0i}=h_{ij}h^{k\ell}(\Gamma(h)^j{}_{k\ell}-\Gamma(\gamma)^j{}_{k\ell})$. Its actual proof gives the required $H=0$ and $H^s$ regularity. The item file is listed in batch 6 and its precheck is pending; this use remains conditional.

## Proof

1.1 In the admissible open state set, $g^{00}<0$ and $(g^{ij})>0$ make the metric time matrix in [L4] positive definite. On a compact $K'$, its least eigenvalue is bounded below by a positive constant. The lapse condition gives the Maxwell time matrix $\alpha^{-1}I_6>0$, also uniformly on $K'$. Therefore the combined time matrix is the block sum of these two positive matrices. [given, L4, F1, algebra]

1.2 For a spatial covector $\xi$, the metric wave spatial matrices are symmetric by [L4], while the Maxwell spatial matrices are symmetric by [F1]; the shift contributes a scalar identity block and preserves symmetry. The Einstein stress $Q(g,F)$ is algebraic in $(g,g^{-1},F)$, so its components contain no derivatives of $U$. The Maxwell tetrad and Hodge coefficients depend smoothly on $(g,g^{-1})$, and their derivatives multiply only the state components; because $p,q$ are included in $U$, these are smooth zero-order terms. There are no off-diagonal derivative blocks between the metric and Maxwell equations. [given, L1, F1, L4, algebra]

2.1 Keep the arbitrary compact sets $K\Subset\operatorname{int}K'\Subset O$ and bound $R$ fixed as in the Statement. Steps 1.1–1.2 verify the coefficient hypotheses throughout $O$, so they hold on a neighborhood of this $K'$, independently of any particular initial jet. Choose a compact time slab containing zero in its interior and lying inside the smooth background's time domain. On its product with the torus and $K'$, smoothness bounds each coefficient derivative and compactness gives a uniform positive lower bound for the combined time matrix. Every $U_0$ in the Statement belongs to the bounded class of [L2]; thus [L3] applies to these same $K,K',R$ and gives a common local interval and the asserted bounds for every such $U_0$. The orthogonal harmonic jet in [L5] is included whenever it belongs to this bounded class, but no harmonic, derivative-compatibility, Einstein or Maxwell constraint is required for the reduced solver. [step 1.1, step 1.2, given, L2, L3, L5, construct] ∎
