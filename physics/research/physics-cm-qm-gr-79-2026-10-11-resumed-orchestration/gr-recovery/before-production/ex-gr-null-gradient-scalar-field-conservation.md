---
id: ex-gr-null-gradient-scalar-field-conservation
kind: example
title: "A scalar field with null gradient in flat space: equation of motion and conservation"
status: draft
origin: session
domain: mathematics
dependency_level: 12
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-scalar-field-matter-model, prop-gr-scalar-field-stress-energy-conservation, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-smooth-covariant-two-tensor-field, def-c-r-and-smooth-maps-between-smooth-manifolds, def-oriented-smooth-manifold-and-oriented-chart]
dependency_roles:
  def-gr-scalar-field-matter-model: mathematical-premise
  prop-gr-scalar-field-stress-energy-conservation: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 9.1 and 9.3: the wave equation for a free scalar field and its energy-momentum tensor (9.31)-(9.32), printed pp. 111-116 (PDF pp. 112-117)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 4.5.1 and 4.5.3: the free scalar field equation and its energy-momentum tensor (4.51), printed pp. 180-185 (PDF pp. 187-192)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Example

Let $M=\mathbb R^4$ carry the identity chart, the flat metric
$g=\operatorname{diag}(-1,1,1,1)$ and the chart orientation, with
metric-selected connection $\nabla$ ([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]],
[[def-oriented-smooth-manifold-and-oriented-chart]]). Let $f:\mathbb R\to\mathbb R$
be a smooth function, let

$$\varphi(x):=f(x^0+x^1),$$

and let $(\varphi,V,K)$ be the scalar-field matter model with $V\equiv0$ and
$K>0$ ([[def-gr-scalar-field-matter-model]]). Then:

1. $\partial^c\varphi\,\partial_c\varphi=0$: the gradient of $\varphi$ is null
   everywhere.
2. $\Box_g\varphi=\nabla^a\partial_a\varphi=0$: $\varphi$ satisfies the scalar
   equation of motion, and its stress-energy tensor is
   $T_{ab}=K\,\partial_a\varphi\,\partial_b\varphi$.
3. $\nabla^aT_{ab}=0$: the tensor is divergence-free, and $T(v,v)=K(\partial_a\varphi\,v^a)^2\ge0$
   for every $v\in T_pM$, with equality exactly on the hyperplane
   $\partial_a\varphi\,v^a=0$.

## Facts & Assumptions

**Given:** The flat Lorentzian four-manifold $(\mathbb R^4,g)$ with identity chart and $g=\operatorname{diag}(-1,1,1,1)$; the smooth function $\varphi=f(x^0+x^1)$; and the scalar-field matter model $(\varphi,V,K)$ with $V\equiv0$, $K>0$.

[L1] For the flat metric in the identity chart, the inverse-metric components are $\operatorname{diag}(-1,1,1,1)$ and $\Box_g\varphi=g^{ab}\partial_a\partial_b\varphi=-\partial_0^2\varphi+\partial_1^2\varphi+\partial_2^2\varphi+\partial_3^2\varphi$ ([[def-gr-inverse-metric-and-musical-isomorphisms]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[L2] The scalar-field model has equation of motion $\Box_g\varphi-V'(\varphi)=0$ and candidate tensor $T_{ab}=K[\partial_a\varphi\partial_b\varphi-g_{ab}(\tfrac12\partial^c\varphi\partial_c\varphi+V(\varphi))]$; it satisfies $\nabla^aT_{ab}=K(\Box_g\varphi-V'(\varphi))\partial_b\varphi$ ([[def-gr-scalar-field-matter-model]], [[prop-gr-scalar-field-stress-energy-conservation]] clause (c)).

[L3] For a smooth function of $u=x^0+x^1$, the chain rule gives $\partial_0\varphi=\partial_1\varphi=f'(u)$ and $\partial_2\varphi=\partial_3\varphi=0$ ([[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

## Verification

**Proof technique:** direct; apply the chain rule and evaluate the flat-space expressions.

1.1 (Null gradient.) By [L3], $\partial_a\varphi=(f'(u),f'(u),0,0)$ in the identity chart. By [L1], $\partial^a\varphi\partial_a\varphi=g^{ab}\partial_a\varphi\partial_b\varphi=-(f')^2+(f')^2+0+0=0$: the gradient is null wherever $f'$ is defined, including at its zeros. [L1, L3, algebra]

2.1 (Equation of motion.) Again by [L3], $\partial_0^2\varphi=f''(u)$ and $\partial_1^2\varphi=f''(u)$, while $\partial_2^2\varphi=\partial_3^2\varphi=0$; hence $\Box_g\varphi=-f''+f''=0$. Since $V\equiv0$, the scalar equation $\Box_g\varphi=V'(\varphi)=0$ holds. Using step 1.1 in the tensor formula of [L2], the metric bracket vanishes and $T_{ab}=K\partial_a\varphi\partial_b\varphi$. [step 1.1, L1, L2, L3, algebra]

3.1 (Conservation and positivity.) By the conservation identity of [L2] and step 2.1, $\nabla^aT_{ab}=K\cdot0\cdot\partial_b\varphi=0$. For any $v\in T_pM$, $T(v,v)=K\partial_a\varphi\partial_b\varphi\,v^av^b=K(\partial_a\varphi\,v^a)^2\ge0$ because $K>0$ and the square is nonnegative; equality holds exactly when the linear functional $\partial_a\varphi\,v^a$ vanishes, i.e. on the hyperplane $\{v:\partial_a\varphi\,v^a=0\}$, which contains the null gradient direction itself. This completes the verification. [step 2.1, L2, algebra] ∎

## Remarks

- **Reading.** The example is the flat-space plane-wave branch of the scalar model: the kinetic bracket vanishes identically on a null gradient, so the stress-energy tensor is a null-supported nonnegative rank-one form. It illustrates the conservation identity of the proposition without any physical claim about the model's realization.
