---
id: prop-qftx-helicity-polarization-ward
kind: proposition
title: Reference-spinor changes are pure gauge
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-qftx-spinor-helicity
  - lem-qftx-spinor-factorization
dependency_roles:
  def-qftx-spinor-helicity: mathematical-premise
  lem-qftx-spinor-factorization: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Henriette Elvang and Yu-tin Huang, Scattering Amplitudes
      url: https://arxiv.org/pdf/1308.1697
      locator: §2.4 and the Schouten identity in §2.3, PDF pp. 16–18; massless-vector reference spinors, pure-momentum shifts and the conditional Ward contraction.
    - title: Ruth Britto, Freddy Cachazo, Bo Feng, and Edward Witten, Direct Proof of Tree-Level Recursion Relation in Yang-Mills Theory
      url: https://arxiv.org/pdf/hep-th/0501052
      locator: §3.1, PDF pp. 7–8; spinor-helicity polarization vectors with fixed reference spinors. The local proof establishes the reference difference directly.
---

## Statement

Let $p\ne0$ be a complex null momentum and choose its spinor factorization $\kappa(p)_{a\dot a}=\lambda_a\widetilde\lambda_{\dot a}$, which exists by the null-factorization result on this page. Raise spinor indices and define brackets as in the spinor-helicity definition. For an undotted reference spinor $r$ with $\langle\lambda r\rangle\ne0$ and a dotted reference spinor $\widetilde r$ with $[\widetilde\lambda\widetilde r]\ne0$, define polarization tensors

$$E_+^{a\dot a}(p;r)=\sqrt2\,\frac{r^a\widetilde\lambda^{\dot a}}{\langle\lambda r\rangle},\qquad E_-^{a\dot a}(p;\widetilde r)=\sqrt2\,\frac{\lambda^a\widetilde r^{\dot a}}{[\widetilde\lambda\widetilde r]}.$$

The reference spinors have the same inverse-square-root length units as $\lambda$ and $\widetilde\lambda$, so these polarization tensors are dimensionless.

Associate a vector $\varepsilon_\pm^\mu$ to each tensor by the inverse of the raised-index Pauli map $p\mapsto\epsilon^{ab}\epsilon^{\dot a\dot b}\kappa(p)_{b\dot b}$. A polarization change is called pure gauge here when its vector difference is a scalar multiple of $p^\mu$. For any two admissible references of the corresponding chirality, the polarization-vector difference is pure gauge. Therefore, for every complex current $J\in\mathbb C^4$ satisfying the explicitly defined conservation condition $h(p,J)=0$, the contraction $h(\varepsilon_\pm(p;r),J)$ is independent of the reference spinor. Current conservation is a separate hypothesis; no general QFT Ward identity is asserted.

## Statement references

[[def-qftx-spinor-helicity]]

[[lem-qftx-spinor-factorization]]

[Elvang and Huang, *Scattering Amplitudes*, §§2.3–2.4](https://arxiv.org/pdf/1308.1697)

[Britto, Cachazo, Feng, and Witten, *Direct Proof of Tree-Level Recursion Relation in Yang-Mills Theory*, §3.1](https://arxiv.org/pdf/hep-th/0501052)

## Facts & Assumptions

**Given:** $p\ne0$ is complex null, $\kappa(p)=\lambda\widetilde\lambda$, all reference denominators used below are nonzero, and $h(p,J)=0$.

[F1] [[def-qftx-spinor-helicity]]: a spinor factorization has entries $\kappa(p)_{a\dot a}=\lambda_a\widetilde\lambda_{\dot a}$.

[F2] [[def-qftx-spinor-helicity]]: $h(p,q)=p^0q^0-p^1q^1-p^2q^2-p^3q^3$.

[F3] [[def-qftx-spinor-helicity]]: indices are raised by the alternating tensors, and $\langle\lambda r\rangle=\epsilon^{ab}\lambda_a r_b$, $[\widetilde\lambda\widetilde r]=\epsilon^{\dot a\dot b}\widetilde\lambda_{\dot a}\widetilde r_{\dot b}$.

[F4] [[lem-qftx-spinor-factorization]]: every nonzero null $p$ has a nonzero spinor factorization.

[F5] [[def-qftx-spinor-helicity]]: the explicit inverse formula for $\kappa$ makes it a linear isomorphism.

[A1] The two undotted references $r,s$ and the two dotted references $\widetilde r,\widetilde s$ have nonzero denominators with the fixed momentum spinors.

[A2] The current obeys the exact complex-bilinear conservation condition $h(p,J)=0$.

## Proof

1.1 The factorization exists by [F4]. For undotted references, put $w^a=r^a/\langle\lambda r\rangle-s^a/\langle\lambda s\rangle$. Then $\lambda_aw^a=1-1=0$ by [F3]. The nonzero covector $\lambda_a$ has a one-dimensional kernel. Since the alternating tensor is invertible, $\lambda^a$ is nonzero and lies in that kernel; hence $w^a=c\lambda^a$ for some $c\in\mathbb C$. Substitution in the displayed polarization formula gives $E_+(p;r)-E_+(p;s)=\sqrt2c\lambda^a\widetilde\lambda^{\dot a}$, which is a scalar multiple of the momentum tensor. [given, F1, F3, F4, A1, algebra]

1.2 For dotted references, put $\widetilde w^{\dot a}=\widetilde r^{\dot a}/[\widetilde\lambda\widetilde r]-\widetilde s^{\dot a}/[\widetilde\lambda\widetilde s]$. Then $\widetilde\lambda_{\dot a}\widetilde w^{\dot a}=1-1=0$ by [F3]. The kernel is spanned by $\widetilde\lambda^{\dot a}$ because the dotted alternating tensor is invertible, so $\widetilde w^{\dot a}=d\widetilde\lambda^{\dot a}$ and $E_-(p;\widetilde r)-E_-(p;\widetilde s)=\sqrt2d\lambda^a\widetilde\lambda^{\dot a}$, again proportional to $p$. [given, F1, F3, F4, A1, algebra]

2.1 The explicit inverse formula in [F5] makes $\kappa$ a linear isomorphism, and each alternating tensor has determinant one, so the raised-index Pauli map is also an isomorphism. Each tensor identity therefore gives the same proportionality for the associated four-vectors. Pairing either difference with $J$ gives a scalar multiple of $h(p,J)=0$ under [F2, A2]. Thus both polarization contractions are reference independent. [F2, F5, A2, step 1.1, step 1.2, algebra] ∎

## Remarks

This proposition proves reference independence only after the current-conservation condition is supplied. It does not prove that every model-specific tree current satisfies that condition.
