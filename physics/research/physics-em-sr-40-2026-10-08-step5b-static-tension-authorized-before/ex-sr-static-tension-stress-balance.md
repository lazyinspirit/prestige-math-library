---
id: ex-sr-static-tension-stress-balance
kind: example
title: "A static uniaxial stress: tension must be constant along the stressed direction"
status: draft
origin: pipeline
domain: mathematics
deps: [def-sr-stress-energy-tensor-and-force-density, def-inertial-frame-and-inertial-chart, def-directional-and-partial-derivatives, def-lorentz-form-and-inertia, def-sr-affine-minkowski-model, cor-zero-derivative-implies-constant]
dependency_roles:
  def-sr-stress-energy-tensor-and-force-density: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Chapter 9 pp. 179-197: 9.1 pp. 179-182 (current vector, flux, charge conservation), 9.2 pp. 183-191 (stress-energy tensor, conservation and flux, symmetry, dust, rank-2 transformation law, pressure, perfect fluid, worked examples, energy conditions), 9.3 pp. 192-197 (Gauss's theorem, integral conservation laws, the energy-momentum vector, angular momentum); the printed 9.2.8 dominant energy condition p. 191 has the defective |P| > rho and is not used"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
---

## Example

In an inertial chart $x$ of the affine Minkowski model with orthonormal basis $(e_0,e_1,e_2,e_3)$ ([[def-inertial-frame-and-inertial-chart]]), let $J\subseteq\mathbb R$ be an interval (the range of the coordinate $x^1$) and let $\rho,P:J\to\mathbb R$ be $C^1$. Define the symmetric type-$(2,0)$ field $$T^{ab}(x):=\rho(x^1)\,e_0^ae_0^b+P(x^1)\,e_1^ae_1^b$$ on an open set $\Omega$ whose $x^1$-coordinates fill $J$ (a static uniaxial stress field along the $e_1$ direction, with $P<0$ representing tension). This is a $C^1$ symmetric stress-energy field in the sense of [[def-sr-stress-energy-tensor-and-force-density]].

## Facts & Assumptions

**Given:** The inertial chart $x$ with coordinate partials $\partial_a$ ([[def-directional-and-partial-derivatives]]), the interval $J$, the $C^1$ functions $\rho,P$, and the field $T$ above; in these components $e_0^a=\delta^a_0$ and $e_1^a=\delta^a_1$.

[F1] Force density and conservation terminology: for a $C^1$ symmetric type-$(2,0)$ field $T$, the four-force density is the field with components $f^b=\partial_aT^{ab}$, and $T$ is locally conserved on $\Omega$ exactly when $f=0$ there. ([[def-sr-stress-energy-tensor-and-force-density]])

[F2] If $I\subseteq\mathbb R$ is an interval and $g:I\to\mathbb R$ is continuous on $I$ and differentiable at every interior point with $g'=0$ there, then $g$ is constant on $I$. ([[cor-zero-derivative-implies-constant]])

[F3] Constant functions have zero partial derivatives, and the coordinate partial derivatives are the derivatives of the corresponding one-variable restrictions. ([[def-directional-and-partial-derivatives]])

## Verification

**Proof technique:** direct.

1.1 Components of the force density. The components of $T$ are $T^{00}=\rho(x^1)$, $T^{11}=P(x^1)$ and $T^{ab}=0$ for all other pairs; these are $C^1$ in $x$, so the force density exists and has components $f^0=\partial_0T^{00}+\partial_1T^{10}=\partial_0\rho(x^1)=0$, $f^1=\partial_0T^{01}+\partial_1T^{11}=P'(x^1)$, and $f^2=f^3=0$, because the omitted terms involve the zero components and $\rho,P$ do not depend on $x^0$. [F1, F3, given]

2.1 Conservation is equivalent to constancy of $P$. By construction the set of values $x^1(p)$, $p\in\Omega$, is exactly the interval $J$ on which $\rho,P$ are defined. By step 1.1 and [F1], $T$ is conserved on $\Omega$ if and only if $P'=0$ at every interior point of $J$; by [F2] this holds if and only if $P$ is constant on $J$. The energy density $\rho$ is subject to no such condition: $\rho'$ never enters the divergence, because the only term containing $\rho$ is $T^{00}$, whose first index is contracted with $\partial_0$ and which is independent of $x^0$. [F2, step 1.1]

3.1 Consequently, a static uniaxial stress in equilibrium has uniform stress $P$ along the stressed direction, while its energy density may vary; when $P<0$ (tension) the tension must be constant. This is a component computation for the stated field; it asserts no material model, no equation of state and no force law. [step 2.1] ∎
