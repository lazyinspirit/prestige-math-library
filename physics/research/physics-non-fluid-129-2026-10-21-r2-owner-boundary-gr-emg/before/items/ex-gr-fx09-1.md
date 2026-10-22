---
id: ex-gr-fx09-1
kind: example
title: "Bootstrap closure and nonlinear stability boundaries — model 1"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 4
proof_strategy: direct
deps:
  - def-gr-fx-bootstrap-continuation-contract
  - thm-gr-fx-bootstrap-closure
  - thm-gronwall-integral-inequality
  - def-real-power
  - thm-real-power-continuity-and-derivatives
  - thm-chain-rule
  - thm-ftc-second-part
  - cor-exponential-reciprocal-and-positivity
dependency_roles:
  def-gr-fx-bootstrap-continuation-contract: mathematical-premise
  thm-gr-fx-bootstrap-closure: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  def-real-power: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "G. Métivier, The Mathematics of Nonlinear Optics (2009), Chapter 3, §§3.3–3.5, PDF pp. 23–29: symmetric-hyperbolic existence, stability, continuation and a bootstrap-continuation implication"
      url: "https://www.math.u-bordeaux.fr/~gmetivie/NLO2008.pdf"
    - title: "Qian Wang, Lectures on Nonlinear Wave Equations (2015), §6.3, proof of Theorem 22, PDF pp. 174–186: continuity method, decay estimates and continuation"
      url: "https://people.maths.ox.ac.uk/wangq1/Lecture_notes/nonlinear_wave_9.pdf"
    - title: "S. Klainerman and J. Szeftel, Kerr stability for small angular momentum, arXiv:2104.11857v1 (2021), abstract and §1.2.1, PDF pp. 2 and 22–24"
      url: "https://arxiv.org/pdf/2104.11857"
    - title: "J. L. Jaramillo, J. A. Valiente Kroon and E. Gourgoulhon, From Geometry to Numerics: interdisciplinary aspects in mathematical and numerical relativity, arXiv:0712.2332v2 (2008), §§1.2.1 and 2.2, PDF pp. 2–3 and 11–12"
      url: "https://arxiv.org/pdf/0712.2332"

---

## Example

Let $E:[0,T_{\max})\to[0,\infty)$ be continuous, let $E_0\ge0$, $C>0$, $\epsilon>0$ and $\delta>0$ be dimensionless, and suppose for every finite $t<T_{\max}$ that

$$E(t)\le E_0+C\epsilon\int_0^t(1+s)^{-1-\delta}E(s)\,ds.$$

Use the dimensionless thresholds $A,\epsilon,\eta$ in the cited continuation contract, with $2A\epsilon^2<\eta$. Then

$$E(t)\le E_0\exp\!\left(\frac{C\epsilon}{\delta}\left[1-(1+t)^{-\delta}\right]\right)\le E_0e^{C\epsilon/\delta}.$$

Use the positive dimensionless thresholds $A$, $\epsilon$ and $\eta$ of the continuation contract below, with $2A\epsilon^2<\eta$. If $E_0e^{C\epsilon/\delta}<A\epsilon^2$, this scalar estimate gives the strict improvement required by that contract. It supplies no Einstein decay estimate; an application must prove this integral inequality and its continuation margins separately.

## Example references

[[def-gr-fx-bootstrap-continuation-contract]]

[[thm-gr-fx-bootstrap-closure]]

[[thm-gronwall-integral-inequality]]

[[def-real-power]]

[[thm-real-power-continuity-and-derivatives]]

[[thm-chain-rule]]

[[thm-ftc-second-part]]

[[cor-exponential-reciprocal-and-positivity]]

[Metivier, Chapter 3, §§3.3–3.5](https://www.math.u-bordeaux.fr/~gmetivie/NLO2008.pdf)

[Wang, §6.3](https://people.maths.ox.ac.uk/wangq1/Lecture_notes/nonlinear_wave_9.pdf)

[Klainerman and Szeftel, abstract and §1.2.1](https://arxiv.org/pdf/2104.11857)

[Jaramillo, Valiente Kroon and Gourgoulhon, §§1.2.1 and 2.2](https://arxiv.org/pdf/0712.2332)

## Facts & Assumptions

**Given:** The inequality in the Example on every compact interval; $E_0\ge0$; $C,\epsilon,\delta>0$; and dimensionless time $t\ge0$.

[F1] [[thm-gronwall-integral-inequality]]: if continuous $u,a,b$ on $[0,T]$ satisfy $u,b\ge0$ and $u(t)\le a(t)+\int_0^t b(s)u(s)\,ds$, then for nondecreasing $a$, $u(t)\le a(t)\exp(\int_0^t b)$.

[F2] [[def-real-power]]: for a positive base $x$, $x^\alpha=\exp(\alpha\log x)$ for every real $\alpha$.

[F3] [[thm-real-power-continuity-and-derivatives]]: on $x>0$, $(x^\alpha)'=\alpha x^{\alpha-1}$.

[F4] [[thm-chain-rule]]: the derivative of a composition is the derivative of the outer function evaluated at the inner function times the derivative of the inner function.

[F5] [[thm-ftc-second-part]]: for differentiable $G$ on a compact interval with integrable derivative, $\int_a^bG'(s)\,ds=G(b)-G(a)$.

[F6] [[cor-exponential-reciprocal-and-positivity]]: $\exp(x)>0$ for every real $x$.

[F7] [[def-gr-fx-bootstrap-continuation-contract]]: a bootstrap application requires the separate condition $2A\epsilon^2<\eta$ and a named energy and margin list.

[F8] [[thm-gr-fx-bootstrap-closure]]: an improvement $E\le2A\epsilon^2\Rightarrow E\le A\epsilon^2$ on every compact subinterval, from $E(0)<A\epsilon^2$, closes the bound; the infinite-time conclusion also requires the continuation margins.

## Verification

1.1 On any finite $[0,T]$, set $u=E$, $a(t)=E_0$ and $b(t)=C\epsilon(1+t)^{-1-\delta}$. These functions satisfy [F1]'s continuity and nonnegativity hypotheses, and $a$ is nondecreasing. Therefore $E(t)\le E_0\exp\!\left(C\epsilon\int_0^t(1+s)^{-1-\delta}\,ds\right)$. [given, F1, algebra]

2.1 For $t=0$ the integral is zero. For $t>0$, the function $G(s)=-\delta^{-1}(1+s)^{-\delta}$ has derivative $G'(s)=(1+s)^{-1-\delta}$ by [F3] and [F4]; $G'$ is continuous on $[0,T]$. Applying [F5] gives $\int_0^t(1+s)^{-1-\delta}\,ds=\delta^{-1}[1-(1+t)^{-\delta}]$. By [F2] and [F6], $(1+t)^{-\delta}>0$, so the exponent is at most $C\epsilon/\delta$. This proves both displayed bounds. [step 1.1, F2, F3, F4, F5, F6, algebra]

3.1 If additionally $E_0e^{C\epsilon/\delta}<A\epsilon^2$, the bound in step 2.1 implies $E(t)<A\epsilon^2$ on every compact interval, hence in particular the contract's conditional improvement whenever its hypothesis $E\le2A\epsilon^2$ holds. With the separately supplied margins, [F8] then yields the conditional continuation conclusion; the scalar calculation itself proves no such margins. [given, F7, F8, step 2.1, algebra] ∎
