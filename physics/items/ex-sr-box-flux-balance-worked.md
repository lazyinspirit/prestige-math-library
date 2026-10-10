---
id: ex-sr-box-flux-balance-worked
kind: example
title: "The box balance identity checked on an explicit stress-energy field"
status: draft
origin: pipeline
domain: mathematics
deps: [thm-sr-stress-balance-and-finite-flux, def-sr-stress-energy-tensor-and-force-density, def-inertial-frame-and-inertial-chart, def-directional-and-partial-derivatives, def-lorentz-form-and-inertia, def-sr-affine-minkowski-model, thm-riemann-fubini-on-product-rectangles, def-multidimensional-darboux-integral]
dependency_roles:
  thm-sr-stress-balance-and-finite-flux: mathematical-premise
  def-sr-stress-energy-tensor-and-force-density: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  def-multidimensional-darboux-integral: mathematical-premise
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

In an inertial chart $x$ on affine Minkowski space ([[def-inertial-frame-and-inertial-chart]], [[def-sr-affine-minkowski-model]]) define the smooth symmetric type-$(2,0)$ field by $T^{00}=x^0$, $T^{01}=T^{10}=x^1$, $T^{11}=x^0$, with every other component zero. This example computes its force density and checks the finite-box balance identity of [[thm-sr-stress-balance-and-finite-flux]] on an explicit box with a nonzero net side flux.

## Facts & Assumptions

**Given:** The inertial chart with constant metric $\eta=\operatorname{diag}(-1,1,1,1)$ ([[def-lorentz-form-and-inertia]]), the coordinate partial derivatives $\partial_a$ ([[def-directional-and-partial-derivatives]]), the field $T$ above, and real numbers $t_1<t_2$, $x_1<x_2$, $c_2<d_2$, $c_3<d_3$; set $A:=(d_2-c_2)(d_3-c_3)>0$ and $B:=[t_1,t_2]\times[x_1,x_2]\times[c_2,d_2]\times[c_3,d_3]$.

[F1] The box identity of the finite-flux theorem: for a $C^1$ symmetric field $T$ on a neighbourhood of $B$, $\int_Bf^b\,d^4x=\sum_a(\int_{F_a^+}T^{ab}\,d^3x-\int_{F_a^-}T^{ab}\,d^3x)$ with $f^b=\partial_aT^{ab}$ and $F_a^\pm$ the faces $x^a=d_a,c_a$ of $B$. ([[thm-sr-stress-balance-and-finite-flux]]\,(a), [[def-sr-stress-energy-tensor-and-force-density]])

[F2] Coordinate derivatives: $\partial_0x^0=1$, $\partial_1x^1=1$, $\partial_0x^1=\partial_1x^0=0$, and partial derivatives of a function of one coordinate vanish in the other coordinates, as one-variable derivatives of the coordinate restrictions. ([[def-directional-and-partial-derivatives]])

[F3] Riemann integrals of functions of a single coordinate over a box factor as the product of the one-dimensional integral and the transverse volume; constant integrals equal the constant times the volume. ([[thm-riemann-fubini-on-product-rectangles]], [[def-multidimensional-darboux-integral]])

## Verification

**Proof technique:** direct.

1.1 Force density. By [F2], $f^0=\partial_0T^{00}+\partial_1T^{10}=1+1=2$, $f^1=\partial_0T^{01}+\partial_1T^{11}=0+0=0$ and $f^2=f^3=0$; hence $\int_Bf^0\,d^4x=2\operatorname{vol}(B)=2A(t_2-t_1)(x_2-x_1)$ by [F3], and the $b=1,2,3$ bulk integrals vanish. [F2, F3, given]

2.1 The $b=0$ identity. The temporal faces contribute $\int_{F_0^+}T^{00}-\int_{F_0^-}T^{00}=A\int_{x_1}^{x_2}x^0\Big|_{t_2}dx^1-A\int_{x_1}^{x_2}x^0\Big|_{t_1}dx^1=A(t_2-t_1)(x_2-x_1)$; the faces with $a=1$ contribute $\int_{F_1^+}T^{10}-\int_{F_1^-}T^{10}=A\int_{t_1}^{t_2}x^1\Big|_{x_2}dx^0-A\int_{t_1}^{t_2}x^1\Big|_{x_1}dx^0=A(t_2-t_1)(x_2-x_1)$; the transverse faces vanish because $T^{2b}=T^{3b}=0$. The sum of face differences is $2A(t_2-t_1)(x_2-x_1)$, equal to the bulk integral of step 1.1, verifying [F1] for $b=0$. [F1, F3, step 1.1]

2.2 The $b=1$ identity and the remaining components. For $b=1$, the temporal faces contribute $\pm A\int_{x_1}^{x_2}x^1\,dx^1$ with opposite signs, which cancel, and the faces with $a=1$ contribute $\pm A\int_{t_1}^{t_2}x^0\,dx^0$, which also cancel; the transverse faces vanish. Both sides of [F1] vanish, and the same is immediate for $b=2,3$ because all relevant components are zero. [F1, step 1.1]

3.1 Numerical specialization: for transverse area $A=6$, temporal length $t_2-t_1=2$ and axis-one length $x_2-x_1=3$, the bulk integral is $2\cdot6\cdot2\cdot3=72$ and the two nonzero face differences are each $6\cdot2\cdot3=36$, whose sum is $72$. The example verifies the finite-box identity on a field with nonzero force density and nonzero net side flux; it asserts no matter model, no dynamics and no empirical fact. [step 1.1, step 2.1, step 2.2] ∎
