---
id: thm-emg-charged-dust-projection
kind: theorem
title: Charged dust balance equivalence and advected charge ratio
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
proof_strategy: direct
deps:
  - def-emg-matter-formal-systems
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-product-connection-on-tensor-and-hom-bundles
  - thm-real-power-continuity-and-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-algebra-of-derivatives
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
dependency_roles:
  def-emg-matter-formal-systems: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-product-connection-on-tensor-and-hom-bundles: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
forward_refs: [ex-emgmath-ml-b01]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), §1.4.1, equations (1.104)–(1.106), PDF pp. 34–35 (printed pp. 28–29)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Dust current and stress tensor in the rest frame and their covariant form; the present charged exchange and ratio statements are derived locally."
    - title: "David Tong, General Relativity, full author-hosted lecture notes, 2019, §§4.5.3–4.5.4, equations (4.52)–(4.55), PDF pp. 190–194 (printed pp. 183–187)"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Sourced Maxwell stress and perfect-fluid balance conventions; the charged-dust equivalence is a local deduction here."
    - title: "Reinhard Meinel and Moritz Hütten, On the black hole limit of electrically counterpoised dust configurations, arXiv:1105.3807v3 (2011), §2, equations (1)–(7), PDF pp. 2–3"
      url: "https://arxiv.org/pdf/1105.3807"
      locator: "A selected smooth charged-dust Einstein–Maxwell system with current parallel to the dust velocity; their fixed charge-to-mass choice and Gaussian normalization are not assumed here."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $\Omega$ be an open subset of the oriented, time-oriented Lorentzian domain of [[def-emg-matter-formal-systems]]. Let $\rho,\sigma\in C^1(\Omega,\mathbb R)$ with $\rho>0$, and let $U\in C^2(\Omega,T\Omega)$ be future timelike with $g(U,U)=-c^2$. Set $T_m^{ab}=\rho U^aU^b$, $j^a=\sigma U^a$, and $a^b=U^a\nabla_aU^b$. Assume the formal matter-exchange equation $\nabla_aT_m^{ab}=F^b{}_cj^c$. Then this equation is equivalent on $\Omega$ to

$$\nabla_a(\rho U^a)=0,\qquad \rho a^b=\sigma F^b{}_cU^c.$$

On $\Omega$, define $\alpha=\sigma/\rho$. Under the continuity equation, charge-current conservation $\nabla_aj^a=0$ is equivalent to $U^a\nabla_a\alpha=0$. Thus the equation constrains the derivative of $\alpha$ along the dust flow; it does not impose spatial constancy of $\alpha$. The claim is a pointwise conditional identity and supplies no coupled-field existence theorem or Maxwell equation.

## Facts & Assumptions

**Given:** $\Omega,\rho,\sigma,U,F$ with the regularity and sign conditions in the Statement, together with the formal exchange equation.

[F1] [[def-emg-matter-formal-systems]]: $T_m^{ab}=\rho U^aU^b$, $j^a=\sigma U^a$, $g(U,U)=-c^2$, and the exchange equation is $\nabla_aT_m^{ab}=F^b{}_cj^c$.

[F2] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]: $\nabla$ is the metric-compatible torsion-free connection; its induced tensor derivative commutes with contractions and annihilates $g$ and $g^{-1}$.

[F3] [[def-product-connection-on-tensor-and-hom-bundles]]: the induced tensor connection obeys the Leibniz rule on tensor products and on scalar multiples of tensor fields.

[F4] [[thm-real-power-continuity-and-derivatives]]: $s\mapsto s^{-1}$ is $C^1$ on $(0,\infty)$ with derivative $-s^{-2}$.

[F5] [[thm-chain-rule-for-total-derivatives]] and [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]: compositions of $C^1$ coordinate maps are $C^1$, and their total derivatives obey the chain rule.

[F6] [[thm-algebra-of-derivatives]]: products of differentiable real functions obey the product rule.

[A1] $\rho>0$ on $\Omega$. This is the exact domain on which division by $\rho$ in the equivalence and the definition of $\alpha$ are permitted.

## Proof

1.1 The product rule gives $\nabla_aT_m^{ab}=U^b\nabla_a(\rho U^a)+\rho a^b$. Differentiating $g(U,U)=-c^2$ along $U$ and using metric compatibility gives $U_ba^b=\tfrac12U^a\nabla_a(g(U,U))=0$. Antisymmetry of $F$ gives $U_bF^b{}_cU^c=0$. [F1, F2, F3, A1, algebra]

2.1 Contract the exchange equation with $U_b$. By step 1.1, its left side is $-c^2\nabla_a(\rho U^a)$ and its right side is $\sigma U_bF^b{}_cU^c=0$. Since $c>0$, continuity follows. Substituting it into the uncontracted equation from step 1.1 leaves $\rho a^b=\sigma F^b{}_cU^c$. [F1, step 1.1, algebra]

2.2 Conversely, substituting continuity and the force equation into $U^b\nabla_a(\rho U^a)+\rho a^b$ gives $\sigma F^b{}_cU^c=F^b{}_cj^c$, recovering the exchange equation. This proves the equivalence without dividing at zero density. [F1, step 1.1, algebra]

3.1 Because $\rho>0$, the scalar function $s\mapsto s^{-1}$ from [F4] composes with the coordinate representation of $\rho$ to a $C^1$ function by [F5]. Differentiating $\rho(1/\rho)=1$ with the product rule in [F6] gives $\partial_a(1/\rho)=-(\partial_a\rho)/\rho^2$, so $\alpha=\sigma/\rho$ is a well-defined $C^1$ scalar field. Since $\sigma=\rho\alpha$, the product rule gives $\nabla_a j^a=\rho U^a\nabla_a\alpha+\alpha\nabla_a(\rho U^a)$. Under continuity this is $\rho U^a\nabla_a\alpha$; by [A1] it vanishes exactly when $U^a\nabla_a\alpha=0$. This condition is directional along $U$ and contains no transverse derivative. [F1, F3, F4, F5, F6, A1, algebra] ∎
## Remarks

- The hypotheses do not impose a constant charge-to-mass ratio. Example [[ex-emgmath-ml-b01]] gives an explicit nonconstant ratio satisfying this matter identity while failing sourced Maxwell closure.
- On $\rho=0$, the proof makes no division and does not infer a dust velocity or force law from the exchange equation.
