---
id: ex-finite-q-exact-deformation-on-the-four-torus
kind: example
title: "A nonzero Q-exact deformation on the four-torus"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-finite-dimensional-q-exact-localization-data
  - thm-finite-dimensional-q-exact-deformation-invariance
dependency_roles:
  def-finite-dimensional-q-exact-localization-data: mathematical-premise
  thm-finite-dimensional-q-exact-deformation-invariance: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  scraped: []
  references: []
verification:
  precheck: pass
---

## Example

Let $T^4=(\mathbb R/2\pi\mathbb Z)^4$ have global angular coordinates $x^1,\ldots,x^4$ and orientation $\omega=dx^1\wedge dx^2\wedge dx^3\wedge dx^4$. Use the graded algebra $\Omega^\bullet(T^4;\mathbb C)$ and integrate an inhomogeneous form by integrating its degree-four component over $T^4$. Let $Q=d$ be the exterior derivative, determined by $df=\sum_i(\partial_i f)\,dx^i$, $d(dx^i)=0$, and the graded Leibniz rule. Set $O=dx^1\wedge dx^2$, $S=dx^3\wedge dx^4$, and $V=\sin(x^3)\,dx^4$. For $t\in\mathbb R$, define $Z(t)=\int_{T^4}\bigl(Oe^{-S-tQV}\bigr)_{[4]}$. The degree-four density is $-\bigl(1+t\cos(x^3)\bigr)\omega$, which depends on $t$ at points where $\cos(x^3)\ne0$, but $Z(t)=-(2\pi)^4$ for every $t\in\mathbb R$.

## Facts & Assumptions

**Given:** $T^4=(\mathbb R/2\pi\mathbb Z)^4$, its oriented volume form $\omega$, the exterior derivative $Q=d$, and the forms $O,S,V$ specified in the Example.

[F1] [[def-finite-dimensional-q-exact-localization-data]]: the graded integral extracts the top-degree form and integrates it over the oriented cycle; an odd derivation is $Q$-invariant when the integral of every admissible $Q$-derivative vanishes.

[F2] [[thm-finite-dimensional-q-exact-deformation-invariance]]: if $QS=QO=0$, $(Q^2V)e^{-S-tQV}=0$, the $Q$-boundary contribution vanishes, and the integrand and parameter derivative have an integrable majorant on compact parameter intervals, then $I_\Gamma(Oe^{-S-tQV})$ is constant in $t$.

## Verification

1.1 For a smooth periodic three-form $\eta=\sum_{i=1}^4(-1)^{i-1}a_i(x)\,dx^1\wedge\cdots\widehat{dx^i}\cdots\wedge dx^4$, the degree-four coefficient of $d\eta$ is $\sum_i\partial_i a_i$. For each $i$, integrating $\partial_i a_i$ over $x^i\in[0,2\pi]$ gives $a_i|_{x^i=2\pi}-a_i|_{x^i=0}=0$ by periodicity; iterated integration over the other three coordinates therefore gives $\int_{T^4}(d\eta)_{[4]}=0$. Thus $I_\Gamma(QF)=0$ for every $F$. [given, F1]

2.1 Directly, $QO=QS=0$, $QV=dV=\cos(x^3)\,dx^3\wedge dx^4$, and $Q^2V=d(dV)=-\sin(x^3)\,dx^3\wedge dx^3\wedge dx^4=0$. For $t$ in any compact interval $K$, the coefficients of $Oe^{-S-tQV}$ and its $t$-derivative are bounded on the compact torus by $1+\sup_{t\in K}|t|$; this constant is integrable on $T^4$. Therefore [F2] applies. [given, F2, step 1.1, algebra]

3.1 Put $H_t=S+tQV=(1+t\cos(x^3))\,dx^3\wedge dx^4$. Since $H_t\wedge H_t=0$, $e^{-H_t}=1-H_t$. Multiplication by $O$ gives $\bigl(Oe^{-H_t}\bigr)_{[4]}=-\bigl(1+t\cos(x^3)\bigr)\omega$. [step 2.1, algebra]

4.1 The integral of $\cos(x^3)$ over $[0,2\pi]$ is zero, while each of the four coordinate intervals has length $2\pi$. Hence $Z(t)=-\int_{[0,2\pi]^4}(1+t\cos(x^3))\,d^4x=-(2\pi)^4$, independent of $t$; the pointwise $t$-dependent term integrates to zero by the same periodic boundary cancellation as in step 1.1. [step 3.1, algebra] ∎
