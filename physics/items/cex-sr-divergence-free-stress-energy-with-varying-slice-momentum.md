---
id: cex-sr-divergence-free-stress-energy-with-varying-slice-momentum
kind: counterexample
title: "Divergence-free stress-energy with a nonconserved slice integral"
status: published
origin: pipeline
domain: mathematics
deps: [thm-sr-stress-balance-and-finite-flux, def-sr-stress-energy-tensor-and-force-density, def-inertial-frame-and-inertial-chart, def-directional-and-partial-derivatives, def-lorentz-form-and-inertia, def-sr-affine-minkowski-model]
dependency_roles:
  thm-sr-stress-balance-and-finite-flux: mathematical-premise
  def-sr-stress-energy-tensor-and-force-density: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
---

## Statement refuted

If a $C^1$ symmetric type-$(2,0)$ field $T$ is locally conserved, $\partial_aT^{ab}=0$, on a chart domain, then every finite axis-parallel slice integral $Q^b(s)=\int_KT^{0b}(s,x)\,d^3x$ of it is independent of the slice parameter $s$; no separate side-flux hypothesis is needed.

## Facts & Assumptions

**Given:** An inertial chart $x$ on all of affine Minkowski space with constant metric $\eta=\operatorname{diag}(-1,1,1,1)$ ([[def-sr-affine-minkowski-model]], [[def-lorentz-form-and-inertia]], [[def-inertial-frame-and-inertial-chart]]) and coordinate partial derivatives $\partial_a$ ([[def-directional-and-partial-derivatives]]). A field is balanced when its force density $f^b=\partial_aT^{ab}$ vanishes ([[def-sr-stress-energy-tensor-and-force-density]]).

[F1] Slice balance: for $C^1$ $T$, $c_0\le s_1<s_2\le d_0$ and a finite axis-parallel box $[s_1,s_2]\times K$, $$Q^b(s_2)-Q^b(s_1)=\int_{[s_1,s_2]\times K}f^b\,d^4x-\sum_{i=1}^{3}\Big(\int_{[s_1,s_2]\times K_i^+}T^{ib}\,d^3x-\int_{[s_1,s_2]\times K_i^-}T^{ib}\,d^3x\Big),$$ with $f^b=\partial_aT^{ab}$ and $K_i^\pm$ the faces $x^i=d_i$, $x^i=c_i$ of $K$. ([[thm-sr-stress-balance-and-finite-flux]]\,(b))

[F2] Coordinate partial derivatives of the coordinate functions: $\partial_0x^0=1$, $\partial_1x^1=1$, $\partial_0x^1=\partial_1x^0=0$, as one-variable derivatives of the coordinate restrictions. ([[def-directional-and-partial-derivatives]])

## Counterexample

**Proof technique:** direct.

1.1 The field. Define the smooth symmetric field by $T^{00}=x^0$, $T^{01}=T^{10}=-x^1$, $T^{11}=x^0$, all other components zero. By [F2] its force density has components $f^0=\partial_0x^0+\partial_1(-x^1)=1-1=0$, $f^1=\partial_0(-x^1)+\partial_1x^0=0$ and $f^2=f^3=0$; hence $\partial_aT^{ab}=0$ on all of affine Minkowski space and $T$ is locally conserved. [F2, given]

2.1 The slice integral is not conserved. Let $L>0$, $c_2<d_2$, $c_3<d_3$, put $A=(d_2-c_2)(d_3-c_3)>0$ and $K=[0,L]\times[c_2,d_2]\times[c_3,d_3]$, and let $Q^0(s)=\int_KT^{00}(s,x)\,d^3x=A\int_0^Lx^0(s)\,dx^1=ALs$. For $s_1<s_2$, [F1] applied to the sub-box with $f=0$ gives $Q^0(s_2)-Q^0(s_1)=-\big(\int_{[s_1,s_2]\times K_1^+}T^{10}-\int_{[s_1,s_2]\times K_1^-}T^{10}\big)-0$, and $T^{10}=-x^1$ takes the constant values $-L$ on $K_1^+=\{x^1=L\}$ and $0$ on $K_1^-=\{x^1=0\}$, so the side-flux difference equals $-A(s_2-s_1)\cdot(L-0)=-AL(s_2-s_1)$ and $Q^0(s_2)-Q^0(s_1)=AL(s_2-s_1)\ne0$ whenever $s_1<s_2$; the transverse fluxes vanish because $T^{2b}=T^{3b}=0$. For example $A=6$, $L=2$ and $s_2-s_1=3$ give the value $36$. [F1, step 1.1, given]

3.1 Thus zero local divergence alone does not conserve a finite slice integral: this field has $f=0$ everywhere yet its slice integral $Q^0$ varies linearly with the slice parameter, so the side-flux (isolation) hypothesis in the finite-flux conservation statement cannot be dropped. The prescribed tensor is not claimed to arise from any matter model of this page and no choice principle is used. [step 1.1, step 2.1] ∎
