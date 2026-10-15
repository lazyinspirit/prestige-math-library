---
id: thm-emg-conformal-einstein-transformation
kind: theorem
title: "Conformal Einstein tensor transformation"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-countable-choice
  - def-emg-lorentzian-forms
  - def-gr-curvature-tensor-and-derived-tensors
  - def-gr-metric-selected-connection
  - def-gr-smooth-lorentzian-objects
  - lem-emg-lorentz-hodge-calculus
  - thm-chain-rule-for-total-derivatives
  - thm-gr-curvature-tensoriality-and-coordinate-formula
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - thm-real-power-continuity-and-derivatives
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §4, author-hosted full-text HTML, conformal metric and Einstein equations"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html"
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, §§3.3–3.5 and 7.2, curvature contractions, conformal compactification and Einstein–Maxwell equations"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Statement

Let $(M,g,N,o)$ be the smooth oriented, time-oriented Lorentzian four-manifold of [[def-emg-lorentzian-forms]], with the curvature convention and tensors of [[def-gr-curvature-tensor-and-derived-tensors]]. Let $\Omega:M\to(0,\infty)$ be smooth and dimensionless, and put $\widetilde g=\Omega^2g$ with the same orientation. Use the metric-selected connection and its tensor derivative of [[def-gr-metric-selected-connection]] and [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]. Define the smooth one-form and its contractions by

$$u:=\Omega^{-1}d\Omega,\qquad H_{ab}:=(\nabla_a u)_b,\qquad \theta:=g^{ab}H_{ab},\qquad s:=g^{ab}u_au_b.$$

Then $H_{ab}=H_{ba}$ and

$$\widetilde{\operatorname{Ric}}_{ab}=\operatorname{Ric}_{ab}-2H_{ab}-g_{ab}\theta+2u_au_b-2g_{ab}s,$$

$$\widetilde S=\Omega^{-2}(S-6\theta-6s),$$

$$\widetilde G_{ab}=G_{ab}-2H_{ab}+2u_au_b+2g_{ab}\theta+g_{ab}s.$$

All curvature conventions are those stated in [[def-gr-curvature-tensor-and-derived-tensors]]. These are mathematical transformation identities, not an assertion that the Einstein equation is conformally invariant.

## Facts & Assumptions

**Given:** A smooth oriented Lorentzian four-manifold, smooth positive $\Omega$, and the metric-selected connections of $g$ and $\widetilde g$. The inherited geometric setup carries $\mathrm{AC}_\omega$ as in [A1].

[F1] The geometry is smooth, oriented and time-oriented, with nondegenerate Lorentz metric of signature $(-,+,+,+)$; its smooth real forms and metric volume form have the definitions of [[def-emg-lorentzian-forms]].

[F2] Curvature is $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$, with $R^a{}_{bcd}$, $\operatorname{Ric}_{bd}=g^{ac}R_{abcd}$, $S=g^{bd}\operatorname{Ric}_{bd}$, and $G_{ab}=\operatorname{Ric}_{ab}-\tfrac12 Sg_{ab}$. ([[def-gr-curvature-tensor-and-derived-tensors]])

[F3] For either smooth Lorentz metric $h=g$ or $h=\widetilde g$, the metric-selected connection is affine and torsion-free and has Christoffel formula $\Gamma[h]^a{}_{bc}=\tfrac12h^{ad}(\partial_bh_{dc}+\partial_ch_{bd}-\partial_dh_{bc})$. ([[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]])

[F4] For a type $(1,2)$ tensor $C$, the tensor derivative has components $(\nabla_{\partial_c}C)^a{}_{db}=\partial_cC^a{}_{db}+\Gamma^a{}_{ec}C^e{}_{db}-\Gamma^e{}_{dc}C^a{}_{eb}-\Gamma^e{}_{bc}C^a{}_{de}$; it commutes with contractions and annihilates $g$ and $g^{-1}$. ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]])

[F5] The exterior derivative sends a smooth $k$-form to a smooth $(k+1)$-form, has coordinate formula $(d\beta)_{a_0\ldots a_k}=(k+1)\partial_{[a_0}\beta_{a_1\ldots a_k]}$, and obeys $d^2=0$ and the graded product rule. ([[lem-emg-lorentz-hodge-calculus]])

[F6] For $x>0$ and $\alpha\in\mathbb R$, $(x^\alpha)'=\alpha x^{\alpha-1}$; the chain rule holds for total derivatives. ([[thm-real-power-continuity-and-derivatives]], [[thm-chain-rule-for-total-derivatives]])

[F7] In smooth manifold charts, finite sums, products and compositions of smooth maps are smooth. ([[def-gr-smooth-lorentzian-objects]])

[F8] For either metric-selected connection, with the curvature convention of [F2], the coordinate curvature formula is $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb}$, with summation over $e$. ([[thm-gr-curvature-tensoriality-and-coordinate-formula]])

[A1] The inherited choice assumption is Countable Choice $\mathrm{AC}_\omega$, not full Choice. ([[def-countable-choice]])

## Proof

1.1 In a chart, $\partial_a\widetilde g_{bc}=\Omega^2(\partial_ag_{bc}+2u_ag_{bc})$ and $\widetilde g^{ad}=\Omega^{-2}g^{ad}$. Substituting these into [F3] cancels the common $\Omega^2$ and gives $\widetilde\Gamma^a{}_{bc}-\Gamma^a{}_{bc}=C^a{}_{bc}:=\delta^a_bu_c+\delta^a_cu_b-g_{bc}u^a$, where $u^a=g^{ab}u_b$. Iterating the derivative formula in [F6] gives $D^m(r^{-1})=(-1)^m m!r^{-m-1}$ for every integer $m\ge0$ and $r>0$; all these derivatives are continuous, so $r\mapsto r^{-1}$ is smooth on $(0,\infty)$. Its composition with $\Omega$ is smooth by [F7], and $d\Omega$ is a smooth one-form by [F5], so $u$ and the displayed components $C^a{}_{bc}$ are smooth. Finally, define $A(X,Y):=\widetilde\nabla_XY-\nabla_XY$ for smooth local vector fields. The affine-connection rules in [F3] give $A(fX,Y)=fA(X,Y)$ and $A(X,fY)=fA(X,Y)$ for every smooth function $f$, while its components are the smooth differences $C^a{}_{bc}$; hence $A$ is a smooth tensor of type $(1,2)$ with those components. [given, F1, F3, F5, F6, F7, A1, algebra]

2.1 By [F5], $0=d(1)=d(\Omega^{-1}\Omega)=\Omega^{-1}d\Omega+\Omega\,d(\Omega^{-1})$, so $d(\Omega^{-1})=-\Omega^{-2}d\Omega$. Therefore $du=d(\Omega^{-1})\wedge d\Omega+\Omega^{-1}d^2\Omega=-\Omega^{-2}d\Omega\wedge d\Omega=0$. Torsion freedom in [F3] gives $(du)_{ab}=\nabla_a u_b-\nabla_bu_a$, hence $H_{ab}=H_{ba}$. [F3, F5, step 1.1, algebra]

2.2 Apply the coordinate curvature formula [F8] to $g$ and $\widetilde g$ and subtract, using $\widetilde\Gamma=\Gamma+C$ from step 1.1. Since $C$ is a tensor, [F4] gives $(\nabla_cC)^a{}_{db}-(\nabla_dC)^a{}_{cb}=\partial_cC^a{}_{db}-\partial_dC^a{}_{cb}+\Gamma^a{}_{ce}C^e{}_{db}-\Gamma^a{}_{de}C^e{}_{cb}+\Gamma^e{}_{db}C^a{}_{ce}-\Gamma^e{}_{cb}C^a{}_{de}$; the two covariant-derivative terms acting on the lower curvature-direction slots $d,c$ cancel because $\Gamma^e{}_{cd}=\Gamma^e{}_{dc}$, while the lower $b$-slot contributions are the last two displayed terms. These are exactly the partial-derivative and mixed $\Gamma C$ terms in the subtraction, and the remaining terms are $C^a{}_{ce}C^e{}_{db}-C^a{}_{de}C^e{}_{cb}$. Therefore $\widetilde R^a{}_{bcd}-R^a{}_{bcd}=\nabla_cC^a{}_{db}-\nabla_dC^a{}_{cb}+C^a{}_{ce}C^e{}_{db}-C^a{}_{de}C^e{}_{cb}$. [F2, F4, F8, step 1.1, algebra]

3.1 Contracting $a$ with $c$ as in [F2], the derivative terms are $\nabla_aC^a{}_{db}-\nabla_dC^a{}_{ab}$. The definition of $C$ gives $C^a{}_{ab}=4u_b$ and, using $\nabla g=0$ from [F4], $\nabla_aC^a{}_{db}=H_{db}+H_{bd}-g_{db}\theta=2H_{bd}-g_{db}\theta$ by step 2.1. Thus their difference is $-2H_{bd}-g_{bd}\theta$. [F2, F4, step 2.1, step 2.2, algebra]

4.1 The first quadratic contraction is $C^a{}_{ae}C^e{}_{db}=4u_e(\delta^e_du_b+\delta^e_bu_d-g_{db}u^e)=8u_bu_d-4g_{bd}s$. Expanding the second contraction into its nine terms gives $C^a{}_{de}C^e{}_{ab}=u_du_b+u_du_b-g_{db}s+4u_du_b+u_du_b-u_du_b-u_du_b-g_{db}s+u_du_b=6u_bu_d-2g_{bd}s$. Their difference is $2u_bu_d-2g_{bd}s$. Combining this with step 3.1 proves the Ricci transformation in the Statement. [step 1.1, step 2.2, step 3.1, algebra]

5.1 Contracting the Ricci transformation with $\widetilde g^{ab}=\Omega^{-2}g^{ab}$ gives $\widetilde S=\Omega^{-2}(S-2\theta-4\theta+2s-8s)=\Omega^{-2}(S-6\theta-6s)$. [F2, step 4.1, algebra]

6.1 By definition, $\widetilde G_{ab}=\widetilde{\operatorname{Ric}}_{ab}-\tfrac12\widetilde S\,\widetilde g_{ab}$. Substituting the Ricci formula from step 4.1 and $\widetilde S\,\widetilde g_{ab}=(S-6\theta-6s)g_{ab}$ from step 5.1 cancels the scalar-curvature terms and leaves $G_{ab}-2H_{ab}+2u_au_b+2g_{ab}\theta+g_{ab}s$. This is the claimed Einstein-tensor formula. [F2, step 4.1, step 5.1, algebra] ∎

## Remarks

The curvature sign and Ricci contraction were taken from the inspected Lorentzian supplier [[def-gr-curvature-tensor-and-derived-tensors]]. The conformal identities above were derived with that convention; no Riemannian curvature formula or sign convention is imported.
