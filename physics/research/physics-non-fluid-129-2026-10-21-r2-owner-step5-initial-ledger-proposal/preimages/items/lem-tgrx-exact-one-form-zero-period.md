---
id: lem-tgrx-exact-one-form-zero-period
kind: lemma
title: An exact one-form has zero period on every closed piecewise-C¹ curve
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-tgrx-period-of-one-form
  - def-closed-and-exact-differential-forms
  - thm-chain-rule-for-total-derivatives
  - thm-continuous-implies-integrable
  - thm-ftc-second-part
dependency_roles:
  def-tgrx-period-of-one-form: mathematical-premise
  def-closed-and-exact-differential-forms: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-ftc-second-part: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "David Tong, General Relativity, complete Cambridge Part III lecture notes, §§2.4.3–2.4.5"
      url: https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf
verification:
  precheck: pass
---

## Statement

On any smooth manifold $M$, if a smooth one-form $\omega$ is exact, so $\omega=d\phi$ for a globally defined smooth scalar $\phi:M\to\mathbb R$, then $\operatorname{Per}_\gamma(\omega)=0$ for every closed piecewise-$C^1$ curve $\gamma$ in $M$.

## Statement references

[[def-tgrx-period-of-one-form]]

[[def-closed-and-exact-differential-forms]]

[[thm-chain-rule-for-total-derivatives]]

[[thm-continuous-implies-integrable]]

[[thm-ftc-second-part]]

## Facts & Assumptions

**Given:** A smooth exact one-form $\omega=d\phi$ on a smooth manifold $M$ and a closed piecewise-$C^1$ curve $\gamma:[0,1]\to M$ with an admissible finite subdivision.

[F1] [[def-tgrx-period-of-one-form]]: on a smooth manifold, for a smooth one-form and a closed continuous piecewise-$C^1$ curve with finitely many chartwise pieces and one-sided endpoint derivatives, the period is the sum of the integrals of $\omega_{\gamma(t)}(\dot\gamma(t))$ over those pieces.

[F2] [[def-closed-and-exact-differential-forms]]: exactness means $\omega=d\phi$ for a globally defined smooth scalar $\phi$.

[F3] [[thm-chain-rule-for-total-derivatives]]: in local coordinates, the total derivative of a composition is the composition of the total derivatives.

[F4] [[thm-continuous-implies-integrable]]: each continuous derivative on a closed subinterval is integrable there.

[F5] [[thm-ftc-second-part]]: if $h$ is differentiable on a closed interval and $h'$ is integrable, then the integral of $h'$ equals the endpoint increment of $h$.

## Proof

1.1 Fix the finite subdivision from [F1]. On each chartwise $C^1$ piece choose a chart $\kappa:U\to V\subseteq\mathbb R^n$ containing its image, and put $x(t):=\kappa(\gamma(t))$ and $\widetilde\phi:=\phi\circ\kappa^{-1}$. By [F2] the coordinate coefficients of $\omega$ are $\partial_i\widetilde\phi$; applying [F3] to $\widetilde\phi\circ x$ gives $\frac{d}{dt}(\phi\circ\gamma)(t)=\omega_{\gamma(t)}(\dot\gamma(t))$ in the piece interior. The same formula holds with one-sided derivatives at the endpoints: the differentiability expansion of $\widetilde\phi$ composed with the one-sided expansion of $x$ gives $D\widetilde\phi(x(t))x'(t)$. These derivatives are continuous on the closed piece by [F1] and smoothness of $\phi$, so they are integrable by [F4]. [given, F1, F2, F3, F4, algebra]

2.1 Apply [F5] on each subdivision interval to $h=\phi\circ\gamma$. By [F1] the period is the sum of those integrals, so it equals the sum of the increments $\phi(\gamma(t_{j+1}))-\phi(\gamma(t_j))$. The internal endpoint terms cancel, and the remaining increment is $\phi(\gamma(1))-\phi(\gamma(0))=0$ because $\gamma$ is closed. Thus the period is zero. [given, F1, F5, step 1.1, algebra] ∎
