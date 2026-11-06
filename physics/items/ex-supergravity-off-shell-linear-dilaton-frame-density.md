---
id: ex-supergravity-off-shell-linear-dilaton-frame-density
kind: example
title: Off-Shell Linear-Dilaton Frame-Density Check
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: physics
library: physics
deps:
  - def-supergravity-conventions-and-normalizations
  - post-ten-dimensional-ns-ns-supergravity-action
  - pthm-ten-dimensional-ns-ns-field-equations
  - lem-supergravity-weyl-scalar-curvature-rescaling
  - pthm-string-einstein-frame-ns-action-calculation
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-ten-dimensional-ns-ns-supergravity-action: physical-assumption
  pthm-ten-dimensional-ns-ns-field-equations: physical-result
  lem-supergravity-weyl-scalar-curvature-rescaling: mathematical-premise
  pthm-string-einstein-frame-ns-action-calculation: physical-result
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "A local off-shell algebraic check of the NS–NS action density in two frames for a smooth linear dilaton on flat string-frame spacetime. It is not a solution, a background-existence claim, an integrated-action claim, or empirical evidence."
sources:
  references:
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation, arXiv:1607.00327v3"
      url: "https://arxiv.org/pdf/1607.00327v3"
      locator: "§6.1, Theorem 6.2, and §6.3, Lemma 6.10; source-free NS–NS action, equations, and frame conventions."
    - title: "Colin Sterckx, Modave Lecture notes: Introduction to Exceptional Field Theory, arXiv:2410.19600v1"
      url: "https://arxiv.org/pdf/2410.19600v1"
      locator: "§3.2.1, equations (3.7)–(3.13), printed pp. 28–29; independent action and frame formulas checked in this example."
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

On $U=\mathbb R^{1,9}$ with coordinates $x^M$ of length dimension, let $G_s=\eta=\operatorname{diag}(-1,1,\ldots,1)$, let $B_2=0$, and let $\Phi(x)=\lambda x^1$ for a fixed nonzero constant $\lambda$ of dimension length$^{-1}$. These smooth fields are an off-shell configuration of the adopted local NS–NS model. The string-frame and Einstein-frame Lagrangian densities, each including the common factor $(2\kappa_0^2)^{-1}$ and expressed relative to $d^{10}x$, agree pointwise and equal
$
\frac{1}{2\kappa_0^2}\,4\lambda^2e^{-2\Phi}.
$
The configuration is not stationary because its string-frame dilaton Euler coefficient is $D=-4\lambda^2\ne0$. No integrated action is asserted.

## Facts & Assumptions

**Given:** The flat string-frame metric, linear dilaton, vanishing two-form, and nonzero constant $\lambda$ of the Statement.

[F1] Coordinates have length dimension, metric components and $\Phi$ are dimensionless, and the curvature and wave-operator conventions are fixed as in the convention item ([[def-supergravity-conventions-and-normalizations]]).

[A1] The adopted string-frame density is $(2\kappa_0^2)^{-1}\sqrt{-G_s}e^{-2\Phi}(R_s+4|d\Phi|_{G_s}^2-\tfrac1{12}H_s^2)$ ([[post-ten-dimensional-ns-ns-supergravity-action]]).

[F2] For $G_E=e^{-\Phi/2}G_s$ in ten dimensions, the Einstein-frame density inside $(2\kappa_0^2)^{-1}\sqrt{-G_E}$ is $R_E-\tfrac12|d\Phi|_{G_E}^2-\tfrac1{12}e^{-\Phi}H_E^2-\tfrac92\Box_E\Phi$ ([[pthm-string-einstein-frame-ns-action-calculation]]).

[F3] The scalar-curvature transformation under $\widetilde g=e^{2\sigma}g$ is the general $n$-dimensional identity of [[lem-supergravity-weyl-scalar-curvature-rescaling]].

[F4] A stationary configuration of the adopted action satisfies $D=R+4\Box\Phi-4|d\Phi|^2-\tfrac1{12}H^2=0$ ([[pthm-ten-dimensional-ns-ns-field-equations]]).

## Proof

**Proof technique:** direct; evaluate each invariant and density in the string frame, then use the conformal formula and the Einstein-frame action for the same fields.

1.1 In the string frame $R_s=0$, $H=0$, $|d\Phi|_{G_s}^2=\lambda^2$, and $\sqrt{-G_s}=1$, because $\eta$ is constant, $G_s^{11}=1$, and $\partial_1\Phi=\lambda$ is the only nonzero derivative. Hence [A1] gives the string-frame density $(2\kappa_0^2)^{-1}4\lambda^2e^{-2\Phi}$. Its dimension is length$^{-10}$: $\kappa_0^2$ has dimension length$^{8}$ and $\lambda^2$ has dimension length$^{-2}$, as required for a density relative to $d^{10}x$. [given, F1, A1, algebra]

2.1 Set $G_E=e^{-\Phi/2}\eta=e^{2\sigma}\eta$ with $\sigma=-\Phi/4$. Since $R_\eta=0$, $\Box_\eta\sigma=0$, and $|d\sigma|_\eta^2=\lambda^2/16$, [F3] at $n=10$ gives $R_E=e^{\Phi/2}[-72\lambda^2/16]=-\tfrac92\lambda^2e^{\Phi/2}$. The inverse metric and determinant scale as $G_E^{11}=e^{\Phi/2}$ and $\sqrt{-G_E}=e^{-5\Phi/2}$. [F1, F3, step 1.1, algebra]

3.1 Therefore $|d\Phi|_{G_E}^2=\lambda^2e^{\Phi/2}$. By [F2], $\Box_E\Phi=(\sqrt{-G_E})^{-1}\partial_M(\sqrt{-G_E}G_E^{MN}\partial_N\Phi)$. Only $M=N=1$ contributes; $\sqrt{-G_E}G_E^{11}\partial_1\Phi=e^{-2\Phi}\lambda$, whose $x^1$-derivative is $-2\lambda^2e^{-2\Phi}$. Dividing by $e^{-5\Phi/2}$ gives $\Box_E\Phi=-2\lambda^2e^{\Phi/2}$. [step 2.1, F2, algebra]

4.1 With $H=0$, substituting the three quantities into [F2] gives $R_E-\frac12|d\Phi|_{G_E}^2-\frac92\Box_E\Phi=(-\frac92-\frac12+9)\lambda^2e^{\Phi/2}=4\lambda^2e^{\Phi/2}$. Multiplying by $\sqrt{-G_E}=e^{-5\Phi/2}$ and $(2\kappa_0^2)^{-1}$ gives the Einstein-frame density $(2\kappa_0^2)^{-1}4\lambda^2e^{-2\Phi}$, exactly the string-frame value in step 1.1. The divergence term is included in this comparison. [F2, step 1.1, step 2.1, step 3.1, algebra]

5.1 In the string frame $R_s=0$, $\Box_s\Phi=0$, $H=0$, and $X_s=\lambda^2$, so $D=0+0-4\lambda^2-0=-4\lambda^2\ne0$. By [F4], the configuration fails the dilaton stationarity equation and is therefore off shell, as claimed. [given, F1, F4, step 1.1, algebra] ∎
