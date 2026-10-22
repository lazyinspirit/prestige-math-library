---
id: prop-emg-fx-gauge-linearized-solutions
kind: proposition
title: Pure-gauge and exact-family perturbations solve the linearized electrovacuum system
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
proof_strategy: direct
deps:
  - def-countable-choice
  - def-emg-fx-linearized-electrovac
  - def-exterior-derivative-by-the-invariant-vector-field-formula
  - def-gr-curvature-tensor-and-derived-tensors
  - def-gr-metric-selected-connection
  - def-pullback-of-a-differential-form
  - thm-local-coordinate-formula-for-the-exterior-derivative
  - lem-emg-fx-linearized-hodge
  - prop-coordinate-formula-for-the-lie-bracket
  - thm-emg-xs-kn-verification
  - thm-emg-xs-rn-verification
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-fx-linearized-electrovac: mathematical-premise
  def-exterior-derivative-by-the-invariant-vector-field-formula: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-pullback-of-a-differential-form: mathematical-premise
  thm-local-coordinate-formula-for-the-exterior-derivative: mathematical-premise
  lem-emg-fx-linearized-hodge: mathematical-premise
  prop-coordinate-formula-for-the-lie-bracket: mathematical-premise
  thm-emg-xs-kn-verification: mathematical-premise
  thm-emg-xs-rn-verification: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Elena Giorgi, The linear stability of Reissner–Nordström spacetime for small charge, arXiv:1904.04926v2 (2020), Sections 6.1–6.2"
      url: "https://arxiv.org/pdf/1904.04926"
      locator: "PDF pp. 43–55: pure-gauge perturbations and the six-parameter linearized Kerr–Newman family. The proof here uses diffeomorphism naturality and exact-family differentiation, not Giorgi's decay theorem."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 6, equations (6.10)–(6.14)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "PDF pp. 151–153 (printed pp. 144–146): background-spacetime perturbations, infinitesimal coordinate gauge transformations and invariance of linearized curvature in the flat-background case."
verification:
  precheck: pending
---

## Statement

Let $(g,\mathcal F)$ be a smooth exact geometric electrovacuum background on an open domain $U$ as in [[def-emg-fx-linearized-electrovac]]. If $X$ is a smooth vector field with local flow $\Phi_\epsilon$, then the pure-gauge perturbation $(\dot\Phi_0^*g,\dot\Phi_0^*\mathcal F)$ solves the linearized electrovacuum system on every common flow domain. More generally, the derivative at any parameter value of a smooth one-parameter family of exact backgrounds on a common domain solves the same linearized system. In particular, the fixed-domain Reissner–Nordström and Kerr–Newman parameter families provide such stationary parameter modes on their stated exterior domains. These conclusions classify neither the kernel of the linearized operator nor its integrable elements.

## Statement references

[[def-emg-fx-linearized-electrovac]]

[[thm-emg-xs-rn-verification]]

[[thm-emg-xs-kn-verification]]

## Facts & Assumptions

**Given:** A smooth exact geometric electrovacuum $(g,\mathcal F)$ on $U$, the fixed curvature and Hodge conventions, and either a local orientation-preserving flow or a smooth exact solution family on a common domain.

[F1] [[def-emg-fx-linearized-electrovac]]: the exact residuals are $E(g,\mathcal F)=\operatorname{Ric}[g]-\Lambda g-2Q(g,\mathcal F)$, $d\mathcal F$, and $d(\star_g\mathcal F)$; their derivatives define the linearized system.

[F2] [[def-pullback-of-a-differential-form]]: a smooth map pulls back an alternating covariant tensor by applying its differential to every argument.

[F3] [[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[def-gr-curvature-tensor-and-derived-tensors]], and [[prop-coordinate-formula-for-the-lie-bracket]]: the metric-selected connection is the unique torsion-free metric-compatible connection, the coordinate Lie bracket is the derivative commutator, and curvature and Ricci are defined by that connection and metric contractions.

[F4] [[def-exterior-derivative-by-the-invariant-vector-field-formula]] and [[thm-local-coordinate-formula-for-the-exterior-derivative]]: the exterior derivative is given by the alternating vector-field formula and, in a chart, by alternating coordinate derivatives of the form coefficients.

[F5] [[lem-emg-fx-linearized-hodge]]: the Hodge variation is $\delta(\star\mathcal F)=\star_g(f+\tfrac12(\operatorname{tr}_g h)\mathcal F-h^\sharp\!\cdot\mathcal F)$.

[F6] [[thm-emg-xs-rn-verification]] verifies the exact geometric RN family for all real mass and charge parameters on every admitted domain; [[thm-emg-xs-kn-verification]] verifies the exact KN family on every admitted pole-free component and its stated full-sphere exterior.

[A1] The geometric suppliers carry $\mathrm{AC}_\omega$ as background. No full Axiom of Choice or parameter-selection principle is used here. ([[def-countable-choice]])

## Proof


1.1 Let $\Phi_\epsilon:V\to W$ be an orientation-preserving local flow map. Define its pulled-back connection by $(\Phi_\epsilon^*\nabla)_XY:=\Phi_{\epsilon*}^{-1}(\nabla_{\Phi_{\epsilon*}X}\Phi_{\epsilon*}Y)$. The coordinate Lie-bracket identity in [F3] and the chain rule give $[\Phi_{\epsilon*}X,\Phi_{\epsilon*}Y]=\Phi_{\epsilon*}[X,Y]$, so this connection is torsion-free. For vector fields $X,Y,Z$, differentiating $(\Phi_\epsilon^*g)(Y,Z)=g(\Phi_{\epsilon*}Y,\Phi_{\epsilon*}Z)\circ\Phi_\epsilon$ and using $\nabla g=0$ shows it is compatible with $\Phi_\epsilon^*g$. Uniqueness in [F3] identifies it with $\nabla^{\Phi_\epsilon^*g}$. Applying this definition twice in the curvature formula and using the same bracket identity gives $R[\Phi_\epsilon^*g](X,Y)Z=\Phi_{\epsilon*}^{-1}(R[g](\Phi_{\epsilon*}X,\Phi_{\epsilon*}Y)\Phi_{\epsilon*}Z)$; the trace defining Ricci is unchanged under conjugation by $D\Phi_\epsilon$, hence $\operatorname{Ric}[\Phi_\epsilon^*g]=\Phi_\epsilon^*\operatorname{Ric}[g]$. The formula for $Q$ uses only tensor products, the metric inverse and contractions; $(\Phi_\epsilon^*g)^{-1}(\Phi_\epsilon^*\alpha,\Phi_\epsilon^*\beta)=\Phi_\epsilon^*(g^{-1}(\alpha,\beta))$ by the inverse linear map, so $Q(\Phi_\epsilon^*g,\Phi_\epsilon^*\mathcal F)=\Phi_\epsilon^*Q(g,\mathcal F)$. In the defining Hodge identity, pullback commutes with alternating tensor evaluation and the inverse-metric pairing; it also carries $\mathrm{vol}_g$ to $\mathrm{vol}_{\Phi_\epsilon^*g}$ because the flow preserves orientation and the volume density transforms by the Jacobian determinant. Uniqueness of the Hodge map therefore gives $\star_{\Phi_\epsilon^*g}\Phi_\epsilon^*\mathcal F=\Phi_\epsilon^*(\star_g\mathcal F)$. Finally, write a $k$-form as $\omega=\sum_I\omega_I dx^I$. By [F4], $d\omega=\sum_I d\omega_I\wedge dx^I$. The chain rule gives the terms where a derivative hits $\omega_I$; terms where it hits a coordinate derivative of $\Phi_\epsilon$ cancel in pairs because second partial derivatives commute while the exterior product is alternating. Hence $d\Phi_\epsilon^*\omega=\Phi_\epsilon^*d\omega$. Thus every exact residual of the pulled-back pair is the pullback of the corresponding zero residual. [A1, F1, F2, F3, F4, algebra]

1.2 For a smooth exact family $(g_\lambda,\mathcal F_\lambda)$ on a common open set, each of its three residuals in [F1] is identically zero as a smooth function of $(\lambda,x)$. Differentiating in $\lambda$ commutes with the finite coordinate derivatives and contractions in those residuals, so their derivatives at any $\lambda_0$ are exactly the linearized residuals of $(\partial_\lambda g,\partial_\lambda\mathcal F)|_{\lambda_0}$ and vanish. [F1, algebra]

2.1 Differentiating the residual identities of step 1.1 at $\epsilon=0$ gives zero linearized metric and Maxwell residuals; in the Hodge residual the varied tensor is the explicit $\delta(\star\mathcal F)$ of [F5]. By the definition of the Lie derivative through the local flow, the derivatives of the pulled-back fields are precisely $(\dot\Phi_0^*g,\dot\Phi_0^*\mathcal F)$, so this is the asserted pure-gauge solution. [F1, F5, step 1.1, algebra]

3.1 The exact RN family of [F6] and the exact KN family of [F6] are smooth in their displayed parameters on any fixed exterior domain satisfying the relevant strict chart inequalities. Restricting the parameter interval if necessary preserves those inequalities on the common domain. Step 1.2 therefore applies to each such parameter derivative, with no inference that an arbitrary linearized solution lies on one of these families. [F6, step 1.2, algebra] ∎
## Remarks

The map-level naturality used in step 1.1 is recorded by the following commutative square. It is a summary of the tensor, connection, Hodge and exterior-derivative calculations in that step; the proof above does not rely on the diagram.

~~~tikzcd
\begin{tikzcd}
(g,\mathcal F) \arrow[r,"\Phi_\epsilon^*"] \arrow[d,"(E,d\mathcal F,d\star_g\mathcal F)"'] &
(\Phi_\epsilon^*g,\Phi_\epsilon^*\mathcal F) \arrow[d,"(E,d\mathcal F,d\star_g\mathcal F)"] \\
(0,0,0) \arrow[r,"\Phi_\epsilon^*"'] & (0,0,0)
\end{tikzcd}
~~~

