---
id: pthm-emg-matter-symmetry-charges
kind: physics-theorem
title: "Selected total-stress/Killing charges"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 7
proof_strategy: direct
deps:
  - post-emg-transported-charged-dust
  - post-emg-covariant-maxwell
  - pthm-emg-dust-mass-force-reduction
  - thm-emg-charged-symmetry-current
  - lem-emg-maxwell-stress-divergence
  - def-rpm-charge-spin-model
  - post-rpm-external-charge-action
  - pthm-rpm-external-charge-action-equivalence
  - def-countable-choice
dependency_roles:
  post-emg-transported-charged-dust: physical-assumption
  post-emg-covariant-maxwell: physical-assumption
  pthm-emg-dust-mass-force-reduction: physical-result
  thm-emg-charged-symmetry-current: mathematical-premise
  lem-emg-maxwell-stress-divergence: mathematical-premise
  def-rpm-charge-spin-model: formulation-prerequisite
  post-rpm-external-charge-action: physical-assumption
  pthm-rpm-external-charge-action-equivalence: physical-result
  def-countable-choice: mathematical-premise
physical_scope: "Conditional total-stress conservation and finite-domain Killing flux for the selected smooth charged-dust Einstein–Maxwell branch, plus the local gauge-compensated first integral for a separate prescribed-field charged test body. Finite-chain side flux and local-potential conditions are retained; no gravitational-field energy, global charge, self-field, or global trajectory claim is made. The probe branch carries ACω through the published RPM action-equivalence result."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete 238-page lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Ch. 5, equations (5.39)–(5.43), PDF pp. 146–149 (printed pp. 139–142), Killing fields and stress-current conservation; Ch. 4, equations (4.69)–(4.72), PDF pp. 123–125, electromagnetic stress."
    - title: "David Tong, General Relativity, complete author-hosted 290-page lecture notes"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§§4.5.5 and 4.5.3, PDF pp. 194–196 and 190–193 (printed pp. 187–189 and 183–186), finite-region flux, Killing current, matter and electromagnetic stress. The exact finite-chain and charged identities are supplied by the stated local mathematical results."
verification:
  precheck: pass
---

## Statement

Let $\Omega_+$ be a smooth positive-density region of the selected charged-dust model, and require $F,j,T_m$ to satisfy the smoothness hypotheses of the Maxwell-stress and Killing-current suppliers. Assume the dust fields satisfy the model equations and the conditional matter-exchange identity of [[pthm-emg-dust-mass-force-reduction]], and assume the smooth Maxwell equations of [[post-emg-covariant-maxwell]]. Define $T_{\mathrm{tot}}^{ab}:=T_m^{ab}+T_{\mathrm{EM}}^{ab}$. Let $\xi$ be a smooth Killing field on $\Omega_+$, meaning $\mathcal L_\xi g=0$, and set $J_\xi^a:=T_{\mathrm{tot}}^{ab}\xi_b$. For any finite smooth singular $4$-chain $C$ in $\Omega_+$ with boundary $\partial C=\Sigma_2-\Sigma_1+B$, define $\mathcal Q_\xi(\Sigma):=\int_\Sigma\iota_{J_\xi}\mathrm{vol}_g$. Then

$$\nabla_aT_{\mathrm{tot}}^{ab}=0,\qquad \nabla_aJ_\xi^a=0,\qquad \mathcal Q_\xi(\Sigma_2)-\mathcal Q_\xi(\Sigma_1)=-\mathcal Q_\xi(B).$$

The two slice charges are equal only when the side flux $\mathcal Q_\xi(B)$ vanishes. This is a matter-plus-electromagnetic stress current, not a local gravitational-energy tensor; no asymptotic or universal global energy is asserted.

There is also the following separate test-body clause. Assume $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure. On a local potential domain $V\subseteq\Omega_+$, let $A$ be a supplied smooth one-form with $F=dA$ and let $\chi$ be a smooth scalar such that $\mathcal L_\xi A=d\chi$. Let $z:[a,b]\to V$ be a finite $C^2$ future-timelike curve segment, parameterized by proper time $\tau$, with fixed-endpoint variations as in [[post-rpm-external-charge-action]]. If the segment is stationary for that adopted action, then [[pthm-rpm-external-charge-action-equivalence]] gives $m\nabla_UU=qF^\sharp(U)$ for its constant $m>0$, $q\in\mathbb R$, and $U=dz/d\tau$. Consequently

$$C_\xi:=m\,g(U,\xi)+q\bigl(A(\xi)-\chi\bigr)$$

is constant along the segment and is invariant under $A\mapsto A+d\lambda$, $\chi\mapsto\chi+\mathcal L_\xi\lambda$. This conditional test-body identity uses no self-field, global potential, trajectory-existence, or Einstein-solution claim.

## Facts & Assumptions

**Given:** The smooth Einstein–Maxwell dust branch, positive-density domain, Killing field, finite-chain boundary and side-flux hypotheses in the first clause; and, separately, the local potential, symmetry compensator, finite fixed-endpoint test-body segment and $\mathrm{AC}_\omega$ hypothesis in the second clause.

[A1] [[post-emg-transported-charged-dust]]: the selected branch adopts $T_m^{ab}=\rho U^aU^b$, $j^a=\sigma U^a$, smooth Maxwell fields, and the undivided dust equations on a positive-density region.

[A2] [[post-emg-covariant-maxwell]]: on the smooth oriented Lorentzian domain the adopted field law is $dF=0$ and $\nabla_aF^{ab}=-\mu_0j^b$ with the selected SI sign.

[L1] [[pthm-emg-dust-mass-force-reduction]]: on $\rho>0$, the adopted dust equations give the exact matter-exchange identity $\nabla_aT_m^{ab}=F^b{}_cj^c$.

[F1] [[lem-emg-maxwell-stress-divergence]]: for smooth $F,j$, $\mu_0>0$, $dF=0$, and $\nabla_aF^{ab}=-\mu_0j^b$, the electromagnetic tensor obeys $\nabla_aT_{\mathrm{EM}}^{ab}=-F^{bc}j_c$. Its current proof and mathematical dependencies remain draft material, so this use is conditional.

[F2] [[thm-emg-charged-symmetry-current]]: under the smooth Maxwell equations and matter exchange, a symmetric total stress gives a divergence-free Killing current, the finite-chain side-flux balance, and, for a local potential and Lorentz-force test curve with $\mathcal L_\xi A=d\chi$, the stated gauge-compensated constant.

[F3] [[def-rpm-charge-spin-model]]: the test body has constant $m>0$, constant charge $q$, a $C^2$ future-timelike worldline parameterized by proper time, and a prescribed field with a local potential where used.

[A3] [[post-rpm-external-charge-action]]: on a finite local-potential segment, the adopted model trajectories are stationary points of the displayed fixed-endpoint external-field action.

[F4] [[pthm-rpm-external-charge-action-equivalence]]: under that postulate, the charged-body definitions, finite-variation hypotheses and $\mathrm{AC}_\omega$, stationarity is equivalent to $m\nabla_UU=qF^\sharp(U)$. This published supplier is used only at its stated finite-segment interface.

[A4] [[def-countable-choice]]: assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure; the test-body clause uses it through [F4].

## Proof

1.1 By [A1], [A2] and the local result [L1], the dust model gives $\nabla_aT_m^{ab}=F^b{}_cj^c$ on $\Omega_+$. The adopted Maxwell equations in [A1] match the smoothness and source-sign hypotheses of [F1], which gives $\nabla_aT_{\mathrm{EM}}^{ab}=-F^{bc}j_c$. Raising/lowering with $g$ identifies these force-density terms with opposite signs, so adding the two identities yields $\nabla_aT_{\mathrm{tot}}^{ab}=0$. [A1, A2, L1, F1, algebra]

1.2 Under [A3], the finite proper-time segment and charged-body quantities satisfy [F3] and [A3]; therefore [F4] supplies the Lorentz-force equation required by [F2]. No new trajectory is constructed. [A3, F2, F3, F4, A4, given]

2.1 The total stress is symmetric as the sum of symmetric matter and electromagnetic tensors. The Killing-field and finite-chain hypotheses in the first clause match [F2], so its current conclusion gives $\nabla_aJ_\xi^a=0$ and its boundary formula gives $\mathcal Q_\xi(\Sigma_2)-\mathcal Q_\xi(\Sigma_1)=-\mathcal Q_\xi(B)$. Equality follows only when the specified side flux is zero. [F2, step 1.1, given]

3.1 Apply the local test-body clause of [F2] to the equation from step 1.2 and the supplied $F=dA$, $\mathcal L_\xi A=d\chi$. It gives constancy and gauge invariance of $C_\xi$ on the segment. The result remains conditional on the local potential, symmetry and finite-segment hypotheses. [F2, step 1.2, given] ∎

