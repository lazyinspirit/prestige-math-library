---
id: thm-emg-charged-symmetry-current
kind: theorem
title: Killing exchange current and gauge-compensated charged first integral
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 6
proof_strategy: direct
deps:
  - def-emg-matter-formal-systems
  - lem-emg-maxwell-stress-divergence
  - thm-gr-density-divergence-and-finite-chain-flux
  - thm-gr-killing-and-on-shell-matter-identities
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-covariant-derivative-along-a-curve
  - def-emg-c2-curve-covariant-acceleration
  - lem-emg-c2-curve-covariant-acceleration-well-defined
  - def-lie-derivative-of-a-tensor-field
  - prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor
  - lem-emg-maxwell-action-variation
  - lem-emg-maxwell-current-forms
  - def-emg-finite-real-supremum-domain
  - def-emg-real-metric-axiom-convention
  - lem-emg-metric-axioms-imply-nonnegativity
  - def-emg-explicit-power-regimes
  - lem-emg-sequence-limit-criterion-with-choice
  - def-emg-boundaryless-completeness-domain
  - def-emg-set-size-and-class-schema
  - cor-zero-derivative-implies-constant
  - def-interval
  - def-gr-timelike-worldline-and-proper-time
  - thm-chain-rule-for-total-derivatives
  - thm-algebra-of-derivatives
dependency_roles:
  def-emg-matter-formal-systems: mathematical-premise
  lem-emg-maxwell-stress-divergence: mathematical-premise
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-emg-c2-curve-covariant-acceleration: mathematical-premise
  lem-emg-c2-curve-covariant-acceleration-well-defined: mathematical-premise
  def-lie-derivative-of-a-tensor-field: mathematical-premise
  prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor: mathematical-premise
  lem-emg-maxwell-action-variation: mathematical-premise
  lem-emg-maxwell-current-forms: mathematical-premise
  def-emg-finite-real-supremum-domain: mathematical-premise
  def-emg-real-metric-axiom-convention: mathematical-premise
  lem-emg-metric-axioms-imply-nonnegativity: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  lem-emg-sequence-limit-criterion-with-choice: mathematical-premise
  def-emg-boundaryless-completeness-domain: mathematical-premise
  def-emg-set-size-and-class-schema: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-interval: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 5, equations (5.41)–(5.43), PDF pp. 146–147 (printed pp. 140–141)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Killing equation and the uncharged geodesic first integral; the stress-current and charged gauge-compensated identities are derived locally under the stated hypotheses."
    - title: "David Tong, General Relativity, full author-hosted lecture notes, 2019, §4.5.5, PDF pp. 194–196 (printed pp. 187–189)"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Field current conservation, finite-region flux balance, and the side-flux condition; the precise chain hypotheses are supplied by the cited mathematical theorem."
verification:
  precheck: pending
---

## Statement

Let $\Omega$ be an oriented open subset of the time-oriented Lorentzian domain of [[def-emg-matter-formal-systems]]. Let $F$ and $j$ be smooth, let $T_m^{ab}$ be smooth and symmetric, and suppose

$$dF=0,\qquad \nabla_aF^{ab}=-\mu_0j^b,\qquad \nabla_aT_m^{ab}=F^b{}_cj^c.$$

Let $T_{\mathrm{EM}}$ be the tensor of [[def-emg-matter-formal-systems]] and assume the exact conditional identity of [[lem-emg-maxwell-stress-divergence]], $\nabla_aT_{\mathrm{EM}}^{ab}=-F^b{}_cj^c$, under its stated smoothness and source-sign hypotheses. For a smooth Killing field $\xi$ on $\Omega$, meaning $\mathcal L_\xi g=0$, define

$$J_\xi^a=(T_m^{ab}+T_{\mathrm{EM}}^{ab})\xi_b.$$

Then $\nabla_aJ_\xi^a=0$. If $C$ is a finite smooth singular $4$-chain in $\Omega$ with $\partial C=\Sigma_2-\Sigma_1+B$ for smooth singular $3$-chains, and $\mathcal Q_\xi(\Sigma)=\int_\Sigma\iota_{J_\xi}\mathrm{vol}_g$, then

$$\mathcal Q_\xi(\Sigma_2)-\mathcal Q_\xi(\Sigma_1)=-\mathcal Q_\xi(B).$$

In particular the two slice fluxes are equal when the side flux $\mathcal Q_\xi(B)$ vanishes.

There is also a local test-particle identity. Let $V\subseteq\Omega$ be open, let $A$ be a supplied smooth one-form on $V$ with $F=dA$, and let $\chi$ be a smooth scalar with $\mathcal L_\xi A=d\chi$. If $I\subseteq\mathbb R$ is any interval with nonempty interior ([[def-interval]]) and a $C^2$ curve $z:I\to V$ in the sense of clause (a) of [[def-gr-timelike-worldline-and-proper-time]] has velocity $U=dz/d\tau$ (one-sided at included endpoints), $g(U,U)=-c^2$, and satisfies $m\nabla_UU=qF^\sharp(U)$ with the C$^2$-curve covariant acceleration of [[def-emg-c2-curve-covariant-acceleration]], for constants $m>0,q\in\mathbb R$, where $F^\sharp(U)^a=F^a{}_bU^b$, then

$$C=m g(U,\xi)+q\bigl(A(\xi)-\chi\bigr)$$

is constant along the curve. This is a conditional mathematical identity for a supplied field and an existing curve; it constructs no particle trajectory, global potential, Einstein solution, or point-source self-field.

## Facts & Assumptions

**Given:** The fields, equations, chain, Killing field, local potential, scalar compensator and curve stated above.

[F1] [[def-emg-matter-formal-systems]]: $T_{\mathrm{EM}}^{ab}=\mu_0^{-1}(F^{ac}F^b{}_c-\tfrac14g^{ab}F_{cd}F^{cd})$; the matter exchange equation is $\nabla_aT_m^{ab}=F^b{}_cj^c$.

[F2] [[lem-emg-maxwell-stress-divergence]]: for a smooth real two-form $F$, smooth current $j$, $\mu_0>0$, $dF=0$ and $\nabla_aF^{ab}=-\mu_0j^b$, the exact conclusion is $\nabla_aT_{\mathrm{EM}}^{ab}=-F^{bc}j_c$. Its current draft proof is conditional on its listed dependencies and is not treated here as an accepted supplier.

[F3] [[thm-gr-killing-and-on-shell-matter-identities]]: $\mathcal L_\xi g=0$ is equivalent to $\nabla_a\xi_b+\nabla_b\xi_a=0$.

[F4] [[thm-gr-density-divergence-and-finite-chain-flux]]: for a finite smooth singular $4$-chain with boundary $\Sigma_2-\Sigma_1+B$, a divergence-free smooth current satisfies $\Phi(\Sigma_2)-\Phi(\Sigma_1)=-\Phi(B)$. Equal slice flux requires zero side flux.

[F5] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]: $\nabla$ is metric-compatible and its derivative on tensor fields obeys the product rule.

[F6] [[def-lie-derivative-of-a-tensor-field]] and [[prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor]]: for a smooth one-form, $(\mathcal L_\xi A)_b=\xi^a\partial_aA_b+A_a\partial_b\xi^a$ in any chart.

[F7] Clause (a) of [[def-gr-timelike-worldline-and-proper-time]] gives the stated curve chartwise $C^2$ regularity on the Lorentzian target: its coordinate derivatives through order two are continuous up to included endpoints and one-sided there. This is the local regularity defined by [[def-emg-c2-curve-covariant-acceleration]], so [[lem-emg-c2-curve-covariant-acceleration-well-defined]] makes $\nabla_UU$ a well-defined continuous vector field along the curve with components $\dot U^a+\Gamma^a{}_{bc}U^bU^c$.

[F8] [[cor-zero-derivative-implies-constant]] and [[def-interval]]: a real function continuous on an interval and differentiable with zero derivative at each interior point is constant on the interval.

[F9] [[thm-chain-rule-for-total-derivatives]] and [[thm-algebra-of-derivatives]]: coordinate compositions and products obey the chain and product rules along the $C^2$ curve.

## Proof

1.1 Add the exchange equation to the conditional Maxwell stress identity [F2]. The force-density terms cancel, giving $\nabla_a(T_m^{ab}+T_{\mathrm{EM}}^{ab})=0$. The sum is symmetric: $T_m$ is symmetric by hypothesis, and $T_{\mathrm{EM}}^{ab}=\mu_0^{-1}g_{cd}F^{ac}F^{bd}-\tfrac1{4\mu_0}g^{ab}F_{cd}F^{cd}$ is symmetric because $g_{cd}$ is symmetric. [F1, F2, algebra]

1.2 In a chart along $z$, differentiate $m g_{ab}(z)U^a\xi^b(z)$ by [F9]. Expanding gives $m[(\partial_cg_{ab})U^cU^a\xi^b+g_{ab}\dot U^a\xi^b+g_{ab}U^aU^c\partial_c\xi^b]$. Substitute metric compatibility $\partial_cg_{ab}=\Gamma^d{}_{ca}g_{db}+\Gamma^d{}_{cb}g_{ad}$ from [F5] and the coordinate expressions for the two covariant derivatives. The first connection term combines with $g_{ab}\dot U^a\xi^b$ into $m g(\nabla_UU,\xi)$; the second combines with $g_{ab}U^aU^c\partial_c\xi^b$ into $mU^aU^b\nabla_a\xi_b$. The latter is zero because $U^aU^b$ is symmetric and [F3] gives $\nabla_a\xi_b+\nabla_b\xi_a=0$. Substituting the curve equation into the first term yields $q\,\xi^aF_{ab}U^b$. [F3, F5, F7, F9, given, algebra]

1.3 In local coordinates, [F6] gives $(\mathcal L_\xi A)_b=\xi^a\partial_aA_b+A_a\partial_b\xi^a$. Since $F=dA$, $(\iota_\xi F)_b=\xi^a(\partial_aA_b-\partial_bA_a)$, and $\partial_b(A_a\xi^a)=\xi^a\partial_bA_a+A_a\partial_b\xi^a$. Adding the latter two expressions proves $\mathcal L_\xi A=\iota_\xi F+d(A(\xi))$. Since $\mathcal L_\xi A=d\chi$, it follows that $d(A(\xi)-\chi)=-\iota_\xi F$. [F6, given, algebra]

2.1 Apply the product rule to $J_\xi^a$. Its divergence is $(\nabla_a(T_m^{ab}+T_{\mathrm{EM}}^{ab}))\xi_b+(T_m^{ab}+T_{\mathrm{EM}}^{ab})\nabla_a\xi_b$. The first term vanishes by step 1.1; the second is one half the contraction of a symmetric tensor with $\nabla_a\xi_b+\nabla_b\xi_a$, which vanishes by [F3]. Thus $\nabla_aJ_\xi^a=0$. [F2, F3, F5, step 1.1, algebra]

3.1 Apply the finite-chain balance [F4] to $J_\xi$. Its divergence is zero by step 2.1, so $\Phi_{J_\xi}(\Sigma_2)-\Phi_{J_\xi}(\Sigma_1)=-\Phi_{J_\xi}(B)$. With $\mathcal Q_\xi=\Phi_{J_\xi}$ as defined in the Statement, this is the claimed balance; equality follows only under the stated zero-side-flux condition. [F4, step 2.1, given]

4.1 By the chain rule [F9], at every interior parameter value the derivative of $A(\xi)-\chi$ along $z$ is $U^b\nabla_b(A(\xi)-\chi)=-U^b\xi^aF_{ab}$ by step 1.3. After multiplying by $q$, this cancels the kinetic derivative in step 1.2, so $C$ is continuous on $I$ and has zero derivative at every interior point. Applying [F8] makes $C$ constant on the interval, including any included endpoints. Under $A\mapsto A+d\lambda$ and $\chi\mapsto\chi+\mathcal L_\xi\lambda$, the difference $A(\xi)-\chi$ is unchanged, since $(d\lambda)(\xi)=\mathcal L_\xi\lambda$. Hence the first integral is gauge invariant. [F8, F9, step 1.2, step 1.3, algebra] ∎
## Remarks

- The current $J_\xi$ is a Killing flux built from stress, not electric charge. The finite-chain formula includes a side flux and does not assert an asymptotic or universal global energy.
- If the symmetry parameter has length units in length coordinates, $\xi$ is dimensionless, $A(\xi)$ and $\chi$ have units $\mathrm{T\,m}$, and the test-particle constant has momentum units; multiplying the stationary time-translation constant by $-c$ gives energy units.
- The statement uses no Einstein equation, no matter action, no Maxwell source construction, and no existence theorem for the curve.
- The draft `lem-emg-maxwell-stress-divergence` carrier has a complete conditional proof at its exact interface: smooth $F,j$, $\mu_0>0$, $dF=0$, and $\nabla_aF^{ab}=-\mu_0j^b$ imply $\nabla_aT_{\mathrm{EM}}^{ab}=-F^{bc}j_c$. Its current Step 1 record is `ready`; the dated owner final-dispositions record resolves the earlier authoring-readiness hold at the current source binding. The declared action-variation, current-forms, and seven typed mathematical inputs are also current and ready at their inspected interfaces. This establishes authoring readiness only; no independent proof approval or publication is inferred. The stress-current deduction remains conditional on the stated model and supplier identity, while the local test-particle clause is proved separately.
