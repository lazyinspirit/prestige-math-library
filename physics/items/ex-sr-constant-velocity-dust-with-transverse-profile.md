---
id: ex-sr-constant-velocity-dust-with-transverse-profile
kind: example
title: "A dust solution with constant velocity and transverse density profile"
status: published
origin: pipeline
domain: mathematics
deps: [lem-sr-dust-conservation-equivalence, thm-sr-stress-balance-and-finite-flux, def-sr-stress-energy-tensor-and-force-density, def-directional-and-partial-derivatives, def-rational-power, thm-real-power-continuity-and-derivatives, def-inertial-frame-and-inertial-chart, def-lorentz-form-and-inertia, def-sr-affine-minkowski-model]
dependency_roles:
  lem-sr-dust-conservation-equivalence: mathematical-premise
  thm-sr-stress-balance-and-finite-flux: mathematical-premise
  def-sr-stress-energy-tensor-and-force-density: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-rational-power: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
---

## Example

Let $|\beta|<1$ and $\gamma=(1-\beta^2)^{-1/2}$. Fix an inertial chart $x:A\to\mathbb R^4$ and a positive $C^1$ map $\rho_0:\mathbb R^2\to(0,\infty)$. Let $n:A\to V$ be the constant field with components $n^0=\gamma$, $n^1=\gamma\beta$, $n^2=n^3=0$, and define $\rho:A\to(0,\infty)$ by $\rho(p)=\rho_0(x^2(p),x^3(p))$. Then $(\rho,n)$ satisfies the dust equations and $T^{ab}=\rho\,n^an^b$ is a conserved dust stress-energy field whose slice integrals over finite boxes are constant, even though its $x^1$-face flux need not vanish.

## Facts & Assumptions

**Given:** The affine Minkowski model with inertial chart $x$ and constant $\eta=\operatorname{diag}(-1,1,1,1)$ ([[def-sr-affine-minkowski-model]], [[def-lorentz-form-and-inertia]], [[def-inertial-frame-and-inertial-chart]]); $|\beta|<1$, $\gamma=(1-\beta^2)^{-1/2}>0$ ([[def-rational-power]], [[thm-real-power-continuity-and-derivatives]]); the constant field $n=(\gamma,\gamma\beta,0,0)$ and the positive $C^1$ map $\rho_0:\mathbb R^2\to(0,\infty)$ and its pullback $\rho(p)=\rho_0(x^2(p),x^3(p))$; $T=\rho\,n\otimes n$.

[F1] Dust equivalence: for a $C^1$ future unit timelike field $n$ and $C^1$ $\rho>0$, the field $T^{ab}=\rho\,n^an^b$ is conserved, $\partial_aT^{ab}=0$, if and only if $\partial_a(\rho n^a)=0$ and $n^a\partial_an^b=0$; under conservation every integral curve of $n$ is an affine straight line. If only $\rho\ge0$ is assumed, the inertial-flow conclusion is asserted on $\{\rho>0\}$. ([[lem-sr-dust-conservation-equivalence]])

[F2] Slice balance: $Q^b(s_2)-Q^b(s_1)=\int_{[s_1,s_2]\times\bar K}f^b\,d^4x-\sum_{i=1}^3\big(\int_{[s_1,s_2]\times\bar K_i^+}T^{ib}-\int_{[s_1,s_2]\times\bar K_i^-}T^{ib}\big)$ for finite boxes. ([[thm-sr-stress-balance-and-finite-flux]]\,(b), [[def-sr-stress-energy-tensor-and-force-density]])

[F3] A constant field has vanishing partial derivatives, since each coordinate partial derivative is the derivative of a constant one-variable restriction. ([[def-directional-and-partial-derivatives]])

## Verification

**Proof technique:** direct.

1.1 $(n,\rho)$ satisfies the dust equations. By the definitions of $\gamma$ and the Minkowski metric, $\eta(n,n)=-(n^0)^2+(n^1)^2=-\gamma^2(1-\beta^2)=-1$, and $n^0=\gamma>0$ in the chart's time orientation, so $n$ is a future unit timelike constant field; by [F3] $\partial_an^b=0$ and hence $n^a\partial_an^b=0$. The profile depends only on $x^2,x^3$, so $n^a\partial_a\rho=\gamma(\partial_0\rho+\beta\partial_1\rho)=0$; and $\partial_an^a=0$, so $\partial_a(\rho n^a)=n^a\partial_a\rho+\rho\,\partial_an^a=0$. By [F1] the field $T^{ab}=\rho\,n^an^b$ is conserved. [F1, F3, given]

1.2 Nonnegative variant and support. If $\rho_0\ge0$ is allowed to vanish, the same equations $\partial_a(\rho n^a)=0$ and $n^a\partial_an^b=0$ hold, and [F1] gives conservation, with the inertial-flow statement on $\{\rho_0>0\}$; a compactly supported nonnegative transverse profile gives the same exact solution and the same finite-box constancy. The profile is independent of $x^1$, so a nonzero profile is not compactly supported in all three spatial variables; the flow lines are $x^1=\beta x^0+\text{const}$, $x^2,x^3$ constant. [F1, given]

2.1 Finite slice integrals are constant. Let $\bar K=[c_1,d_1]\times[c_2,d_2]\times[c_3,d_3]$ with $c_i<d_i$ and $Q^b(s)=\int_{\bar K}T^{0b}(s,x)\,d^3x$. Since $T^{0b}=\rho\,n^0n^b=\gamma n^b\rho_0(x^2,x^3)$ is independent of $x^0$, each $Q^b(s)$ is constant in $s$. The same conclusion follows from [F2]: the force density vanishes by step 1.1, the transverse face terms vanish because $T^{2b}=T^{3b}=0$, and the two $x^1$-faces carry the same pointwise integrand $T^{1b}=\rho_0\gamma\beta n^b$ and enter with opposite signs, so their contributions cancel although the individual face flux need not vanish. [F2, step 1.1]

3.1 The example exhibits a family of exact conserved dust solutions of the stated form with transverse profile and finite-box constancy of the slice integrals; it asserts no interaction, no dynamics of the profile beyond the displayed equations and no measurement. [step 1.1, step 2.1, step 1.2] ∎
