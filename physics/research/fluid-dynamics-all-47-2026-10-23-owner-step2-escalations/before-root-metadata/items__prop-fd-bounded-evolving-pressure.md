---
id: prop-fd-bounded-evolving-pressure
kind: proposition
title: Rectangular evolving distributional pressure
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
deps: [thm-fd-bounded-global-weak-existence, lem-fd-rectangular-test-divergence-inverse, def-distribution, def-distributional-derivative, def-axiom-of-choice]
dependency_roles:
  thm-fd-bounded-global-weak-existence: mathematical-premise
  lem-fd-rectangular-test-divergence-inverse: mathematical-premise
  def-distribution: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "L. C. Berselli and S. Spirito, On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "Lemma 2, §3, printed pp. 6–7; the authors defer bounded-domain pressure recovery to other operator theory."
---

## Statement

Assume the Axiom of Choice. Let $a_i<b_i$ for $i=1,2,3$ and let
$\Omega=\prod_{i=1}^3(a_i,b_i)\subset\mathbb R^3$ be the resulting finite open
rectangle, let $\nu>0$ and $u_0\in H$ for the bounded closure spaces on this
page, and let $u$ be a global weak velocity supplied for these data by the
bounded no-slip weak existence theorem on this page. Assume the rectangular divergence-inverse
result: there is a continuous linear map
$R:D_0(\Omega)\to C_c^\infty(\Omega;\mathbb R^3)$, where
$D_0(\Omega)=\{h\in C_c^\infty(\Omega):\int_\Omega h=0\}$, such that
$\operatorname{div}Rh=h$. For each compact $K\subset\Omega$ there is a compact
$K'\subset\Omega$ containing the support of $Rh$ whenever $h$ is supported in
$K$, and on each fixed-support test space $R$ is continuous for all seminorms
$\sup|\partial^\alpha h|$. Then there is a spacetime distribution $\pi$ with
$$\partial_tu+\operatorname{div}(u\otimes u)+\nabla\pi=\nu\Delta u$$
on $(0,\infty)\times\Omega$. Its normalization may be fixed by any
$\theta\in C_c^\infty(\Omega)$ with $\int_\Omega\theta=1$ through
$\langle\pi,a(t)\theta(x)\rangle=0$ for every compactly supported smooth
temporal test $a$. Pressure is unique under this normalization. This is a
conditional distributional statement and gives no $L^2$ pressure estimate,
corner regularity, or pointwise boundary traction. Here
$(u\otimes u):\nabla\psi=\sum_{i,j}u_i u_j\partial_j\psi_i$.

## Statement references

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions*, Lemma 2, §3, pp. 6–7](https://www.mdpi.com/2311-5521/6/1/42/pdf).


## Facts & Assumptions

**Given:** The Axiom of Choice, a finite rectangular box $\Omega$, $\nu>0$, $u_0\in H$, the corresponding weak velocity and solenoidal variational identity in [[thm-fd-bounded-global-weak-existence]], a test $\theta$ of integral one, and the exact conditional supplier interface below.

[F1] [[thm-fd-bounded-global-weak-existence]]: under AC, bounded open $\Omega$, $\nu>0$, and $u_0\in H$, the theorem supplies $u\in L^\infty_{\rm loc}L^2\cap L^2_{\rm loc}H_0^1$, with $u\otimes u\in L^1_{\rm loc}$, and the residual $T=-\partial_tu-\operatorname{div}(u\otimes u)+\nu\Delta u$ annihilates every compact smooth spacetime vector test with zero spatial divergence.

[F2] [[lem-fd-rectangular-test-divergence-inverse]]: the current carrier states that for every finite nonempty rectangle in dimension $d\ge1$, $D_0(\Omega)$ has a continuous linear right inverse $R$ into compactly supported smooth vector tests, with $\operatorname{div}Rh=h$, a compact output-support set for each compact input-support set, and continuity on fixed-support test spaces for all seminorms. Its hypotheses match this three-dimensional rectangle. The argument below uses exactly this proved interface; its compact-support and seminorm conditions remain binding.

[F3] [[def-distribution]] and [[def-distributional-derivative]]: locally integrable fields define distributions, and derivatives act by minus the derivative on the test.

## Proof

1.1 The residual $T$ is a spacetime distribution: $u\in L^2_{\rm loc}$, $u\otimes u\in L^1_{\rm loc}$, and the second derivatives in $\Delta u$ act continuously on smooth tests by transferring derivatives. For a scalar test $\phi(t,x)$ put $\phi_0=\phi-\theta(x)\int_\Omega\phi(t,y)dy$ and define
$$\langle\pi,\phi\rangle=-\langle T,R_x\phi_0\rangle.$$
The map $R$ is applied at each time. Its fixed support and seminorm bounds in [F2] ensure $R_x\phi_0$ is a smooth spacetime test with the same compact temporal support; the fixed-interval formulas for $R$ commute with time derivatives by differentiation under the integral. Thus the displayed functional is continuous on test functions and is a distribution. [given, F1, F2, F3]

2.1 For a compact smooth vector test $\psi$, $h=\operatorname{div}_x\psi$ has spatial integral zero by coordinate integration, so $h\in D_0(\Omega)$ and $\psi-Rh$ is compactly supported, smooth, and divergence free. By [F1], $\langle T,\psi-Rh\rangle=0$. Moreover,
$$\langle\nabla_x\pi,\psi\rangle=-\langle\pi,h\rangle=\langle T,Rh\rangle=\langle T,\psi\rangle.$$
Substituting the definition of $T$ proves the full distributional momentum equation. The normalization holds because $(a\theta)_0=0$. [given, F1, F2, F3, step 1.1]

3.1 If $\pi_1,\pi_2$ have the same gradient, their difference $q$ annihilates every $h\in D_0$ since $h=\operatorname{div}Rh$ and $\langle q,h\rangle=-\langle\nabla q,Rh\rangle=0$. For an arbitrary scalar test $\phi$, $\phi-\theta\int_\Omega\phi$ lies in $D_0$, so $\langle q,\phi\rangle=\langle q,\theta\rangle\int_\Omega\phi$. Thus $q$ is a spatially constant distribution in time; the normalization forces $\langle q,a\theta\rangle=0$ for every temporal test $a$, so $q=0$. This proves uniqueness conditional on [F2]. [given, F2, step 2.1] ∎

