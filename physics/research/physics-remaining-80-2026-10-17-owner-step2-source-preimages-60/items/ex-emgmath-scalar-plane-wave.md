---
id: ex-emgmath-scalar-plane-wave
kind: example
title: "Exact background scalar plane wave and derived current"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 6
proof_strategy: direct
deps:
  - def-emg-charged-scalar-functional
  - lem-emg-charged-scalar-variation
  - lem-emg-maxwell-current-forms
  - def-countable-choice
  - def-emg-finite-real-supremum-domain
  - def-emg-real-metric-axiom-convention
  - lem-emg-metric-axioms-imply-nonnegativity
  - def-emg-explicit-power-regimes
  - lem-emg-sequence-limit-criterion-with-choice
  - def-emg-boundaryless-completeness-domain
  - def-emg-set-size-and-class-schema
dependency_roles:
  def-emg-charged-scalar-functional: mathematical-premise
  lem-emg-charged-scalar-variation: mathematical-premise
  lem-emg-maxwell-current-forms: mathematical-premise
  def-countable-choice: mathematical-premise
  def-emg-finite-real-supremum-domain: mathematical-premise
  def-emg-real-metric-axiom-convention: mathematical-premise
  lem-emg-metric-axioms-imply-nonnegativity: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  lem-emg-sequence-limit-criterion-with-choice: mathematical-premise
  def-emg-boundaryless-completeness-domain: mathematical-premise
  def-emg-set-size-and-class-schema: mathematical-premise
sources:
  references:
    - title: "David Tong, Gauge Theory, lecture notes, §2.5.2, PDF pp. 89–91 (printed pp. 78–80)"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf"
      locator: "§2.5.2 supplies a classical complex-scalar gauge-covariant derivative; the flat background plane wave and sourced-current obstruction are calculated here."
    - title: "David Tong, General Relativity, 2019 lecture notes, §4.5.3, PDF p. 193 (printed p. 186)"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§4.5.3 gives scalar-field variational context; this example directly substitutes the specified flat plane wave."
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Example

On $\mathbb R^4$ with $x^0=ct$, Minkowski metric $\eta=\operatorname{diag}(-1,1,1,1)$, and trivial bundle, set $A=0$, $V(u)=m_s^2u$ with $m_s>0$ in $\mathrm m^{-1}$, and

$$\varphi(t,\mathbf x)=C\exp(-i\omega t+i\mathbf k\cdot\mathbf x),$$

where $C\ne0$ is dimensionless, $\mathbf k\in\mathbb R^3$ has units $\mathrm m^{-1}$, and $\omega:=c\sqrt{|\mathbf k|^2+m_s^2}>0$ has units $\mathrm s^{-1}$. For the scalar action of [[def-emg-charged-scalar-functional]], this is an exact solution of the local background scalar equation, equivalently stationary under compactly supported scalar variations. The infinite-volume action value need not be finite; only the local equation and compactly supported variations are used. If the coupling $\lambda\ne0$, the same configuration has a nonzero derived current although $F=dA=0$, so it fails the sourced Maxwell equation of [[lem-emg-maxwell-current-forms]]. It is therefore a background scalar solution, not a solution of the coupled scalar–Maxwell system. No relation to $\hbar$ or empirical data is used.

## Facts & Assumptions

**Given:** The flat metric and trivial connection above, the scalar model of [[def-emg-charged-scalar-functional]], the scalar Euler–Lagrange equation and current formula of [[lem-emg-charged-scalar-variation]], and the planned sourced Maxwell sign convention of [[lem-emg-maxwell-current-forms]].

[F1] For this model, $E_\varphi=D_aD^a\varphi-V'(|\varphi|^2)\varphi$ and $j^a=K_\varphi\lambda\operatorname{Im}(\overline\varphi D^a\varphi)$. ([[lem-emg-charged-scalar-variation]])

[F2] The sourced Maxwell equation is $\partial_aF^{ab}=-\mu_0j^b$ in this inertial chart, with $\mu_0>0$. ([[lem-emg-maxwell-current-forms]])

[A1] The constants satisfy $c>0$, $K_\varphi>0$, $m_s>0$, $C\ne0$, and $\omega=c\sqrt{|\mathbf k|^2+m_s^2}$. The example is a mathematical background-field calculation.

[A2] The in-run geometric supplier chain carries the $\mathrm{AC}_\omega$ convention stated in [[def-countable-choice]]; this calculation makes no further choice.

## Verification

1.1 Since $A=0$, $D_a=\partial_a$ and $D_aD^a=-c^{-2}\partial_t^2+\Delta$. The plane wave has $\partial_t^2\varphi=-\omega^2\varphi$ and $\Delta\varphi=-|\mathbf k|^2\varphi$, so $E_\varphi=(\omega^2/c^2-|\mathbf k|^2-m_s^2)\varphi=0$ by [A1]. [A1, A2, F1, algebra]

1.2 The current formula [F1] gives $j^0=K_\varphi\lambda(\omega/c)|C|^2$ and $j^i=K_\varphi\lambda k_i|C|^2$. Thus $j=0$ when $\lambda=0$, while for $\lambda\ne0$ its temporal component is nonzero because $K_\varphi,\omega,|C|^2$ are positive. [A1, F1, algebra]

2.1 In either case $F=dA=0$ and hence $\partial_aF^{a0}=0$. If $\lambda\ne0$, [F2] would require $0=-\mu_0j^0$ although $\mu_0j^0\ne0$ by step 1.2. Therefore the background scalar solution with nonzero coupling does not solve the sourced Maxwell equation; when $\lambda=0$, this particular current obstruction is absent. [A1, F2, step 1.2, algebra] ∎

## Remarks

- The M02/M03 suppliers are current draft carriers used only at their inspected statements. The seven typed foundational replacement carriers in the dependency closure are now authored on emg-mg02; no independent acceptance is asserted: [[def-emg-finite-real-supremum-domain]], [[def-emg-real-metric-axiom-convention]], [[lem-emg-metric-axioms-imply-nonnegativity]], [[def-emg-explicit-power-regimes]], [[lem-emg-sequence-limit-criterion-with-choice]], [[def-emg-boundaryless-completeness-domain]], and [[def-emg-set-size-and-class-schema]].

