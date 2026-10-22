---
id: ex-gr-fx09-2
kind: example
title: "Bootstrap closure and nonlinear stability boundaries — model 2"
status: published
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
  - thm-chain-rule
  - thm-ftc-second-part
  - thm-logarithm-derivative-and-integral
dependency_roles:
  def-gr-fx-bootstrap-continuation-contract: mathematical-premise
  thm-gr-fx-bootstrap-closure: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  def-real-power: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
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

Let $E:[0,T_{\max})\to[0,\infty)$ be continuous, let $E_0\ge0$, $C>0$ and $\epsilon>0$ be dimensionless, and suppose for every finite $t<T_{\max}$ that

$$E(t)\le E_0+C\epsilon\int_0^t(1+s)^{-1}E(s)\,ds.$$

Use the dimensionless thresholds $A,\epsilon,\eta$ in the cited continuation contract, with $2A\epsilon^2<\eta$. Gronwall gives the polynomial upper bound $E(t)\le E_0(1+t)^{C\epsilon}$. This inequality alone does not supply a uniform improvement: with $C\epsilon=1$, $E_0=1$ and $E(t)=1+t$, equality holds. Let $B=A\epsilon^2>1$ for the thresholds in the continuation contract below; then $2B<\eta$. On the finite slab $0\le t\le B$ this example has $E(0)<B$, $E(t)\le2B$, but $E(B)>B$. Thus the bootstrap implication from $2B$ to $B$ fails on that slab.

## Example references

[[def-gr-fx-bootstrap-continuation-contract]]

[[thm-gr-fx-bootstrap-closure]]

[[thm-gronwall-integral-inequality]]

[[def-real-power]]

[[thm-chain-rule]]

[[thm-ftc-second-part]]

[[thm-logarithm-derivative-and-integral]]

[Metivier, Chapter 3, §§3.3–3.5](https://www.math.u-bordeaux.fr/~gmetivie/NLO2008.pdf)

[Wang, §6.3](https://people.maths.ox.ac.uk/wangq1/Lecture_notes/nonlinear_wave_9.pdf)

[Klainerman and Szeftel, abstract and §1.2.1](https://arxiv.org/pdf/2104.11857)

[Jaramillo, Valiente Kroon and Gourgoulhon, §§1.2.1 and 2.2](https://arxiv.org/pdf/0712.2332)

## Facts & Assumptions

**Given:** The inequality in the Example on every compact interval; $E_0\ge0$; $C,\epsilon>0$; and dimensionless time $t\ge0$.

[F1] [[thm-gronwall-integral-inequality]]: if continuous $u,a,b$ on $[0,T]$ satisfy $u,b\ge0$ and $u(t)\le a(t)+\int_0^t b(s)u(s)\,ds$, then for nondecreasing $a$, $u(t)\le a(t)\exp(\int_0^t b)$.

[F2] [[thm-logarithm-derivative-and-integral]]: $\log'(x)=1/x$ for $x>0$ and $\log x=\int_1^xdu/u$.

[F3] [[def-real-power]]: for positive $x$, $x^\alpha=\exp(\alpha\log x)$.

[F4] [[thm-chain-rule]]: derivatives of compositions obey the chain rule.

[F5] [[thm-ftc-second-part]]: for differentiable $G$ on a compact interval with integrable derivative, $\int_a^bG'(s)\,ds=G(b)-G(a)$.

[F6] [[def-gr-fx-bootstrap-continuation-contract]]: the bootstrap input and strict output are $E\le2A\epsilon^2$ and $E\le A\epsilon^2$, respectively, with $2A\epsilon^2<\eta$.

[F7] [[thm-gr-fx-bootstrap-closure]]: the required contract implication must hold on every compact subinterval before the continuation conclusion applies.

## Verification

1.1 The case $t=0$ is immediate. For finite $t>0$, set $u=E$, $a(s)=E_0$ and $b(s)=C\epsilon(1+s)^{-1}$ on $[0,t]$. The given inequality holds there; $u$ is continuous and nonnegative, $a$ is a nonnegative constant and hence nondecreasing, and $b$ is continuous and nonnegative, so [F1] applies and gives $E(t)\le E_0\exp\!\left(C\epsilon\int_0^t(1+s)^{-1}\,ds\right)$. Since $1+s>0$, [F2] and [F4] give $G'(s)=(1+s)^{-1}$ for $G(s)=\log(1+s)$; this derivative is continuous. By [F5], $\int_0^t(1+s)^{-1}\,ds=G(t)-G(0)=\log(1+t)$. [given, F1, F2, F4, F5, algebra]

1.2 For the stated boundary example take $T_{\max}=\infty$, set $C\epsilon=1$, $E_0=1$ and $E(t)=1+t$. Then $C\epsilon(1+s)^{-1}E(s)=1$. The function $H(s)=s$ has continuous, hence integrable, derivative $1$, so [F5] gives $\int_0^t1\,ds=H(t)-H(0)=t$ for $t>0$; for $t=0$, both sides equal $1$. Thus $E_0+C\epsilon\int_0^t(1+s)^{-1}E(s)\,ds=1+t=E(t)$. [given, F5, algebra]

2.1 By [F3], $\exp(C\epsilon\log(1+t))=(1+t)^{C\epsilon}$, which proves the stated polynomial upper bound on every finite subinterval. [step 1.1, F3, algebra]

3.1 Put $T=B$. Because $B>1$, for $0\le t\le B$ we have $E(0)=1<B$ and $E(t)\le1+B\le2B$, but $E(B)=1+B>B$. Thus the contract's input condition holds on $[0,B]$ while its claimed improvement fails there; [F7] cannot be applied from this integral inequality alone. [given, F6, F7, step 1.2, algebra] ∎
