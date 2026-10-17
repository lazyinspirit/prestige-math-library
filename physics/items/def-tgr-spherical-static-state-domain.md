---
id: def-tgr-spherical-static-state-domain
kind: definition
title: "Smooth static spherical geometry and state domain"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps:
  - def-gr-smooth-lorentzian-objects
  - def-countable-choice
  - prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure
  - ex-the-round-metric-on-the-sphere-as-an-induced-metric
  - def-gr-smooth-covariant-two-tensor-field
  - def-gr-tensor-fields-and-components
  - def-gr-curvature-tensor-and-derived-tensors
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-countable-choice: mathematical-premise
  prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure: mathematical-premise
  ex-the-round-metric-on-the-sphere-as-an-induced-metric: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "P.-H. Chavanis, Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas, arXiv:1908.10806v1 (2019), Sec. III.A, Eqs. (97)–(105)"
      url: "https://arxiv.org/pdf/1908.10806"
    - title: "MIT 8.962, General Relativity, Spring 2020 Lecture Guide, Lectures 21–22, PDF pp. 7–9"
      url: "https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/743631236d2866f6ba129f06110d8b1a_MIT8_962S20_guide.pdf"
---

## Definition

Assume the countable-choice convention of [[def-countable-choice]] for the canonical smooth tangent- and tensor-bundle structures in [[def-gr-smooth-lorentzian-objects]]. Fix positive formal parameters $c>0$ and $G>0$ with SI dimensions $[c]=\mathrm m\,\mathrm s^{-1}$ and $[G]=\mathrm m^3\,\mathrm{kg}^{-1}\,\mathrm s^{-2}$. In this mathematical definition they are fixed parameters, not derived quantities, and no numerical or empirical value is asserted. Let $I_0\subseteq\mathbb R$ be a nonempty open interval for a length coordinate $x^0$, and define the corresponding time coordinate $t:=x^0/c\in I_0/c$, measured in seconds. Let $r$ be the coordinate on $(0,\infty)$, and let $(S^2,\gamma)$ be the unit round sphere with the induced smooth round metric of [[ex-the-round-metric-on-the-sphere-as-an-induced-metric]]. On the product smooth four-manifold $M=I_0\times(0,\infty)\times S^2$, using the canonical product smooth structure of [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]], define, for $\phi,b\in C^\infty((0,\infty),\mathbb R)$ with $b(r)>0$,
$$g=-e^{2\phi(r)}(dx^0)^2+b(r)^{-1}dr^2+r^2\gamma.$$
Set $N=\partial_{x^0}$ as time orientation. The signature convention is $(-,+,+,+)$, $x^0$ and $r$ are measured in metres, the line element has units $\mathrm m^2$, and $\phi$ and $b$ are dimensionless. The sphere at fixed $(x^0,r)$ has induced metric $r^2\gamma$. In spherical coordinates its area element is $r^2\sin\theta\,d\theta\,d\varphi$ by [[ex-the-round-metric-on-the-sphere-as-an-induced-metric]], so $\int_0^{2\pi}\int_0^\pi r^2\sin\theta\,d\theta\,d\varphi=4\pi r^2$; hence $r$ is the areal radius. The flow of $N$ is translation in $x^0$ and preserves $g$ because its coefficients are independent of $x^0$; here a Killing field means a vector field whose local flow preserves the metric. Moreover, $g(N,\cdot)=-e^{2\phi}dx^0$, so $N$ is normal to the hypersurfaces $x^0=\mathrm{constant}$. In this definition, the metric is static in the precise sense that it has a timelike Killing field normal to such hypersurfaces; $N$ is timelike because $g(N,N)=-e^{2\phi}<0$.

A **static isotropic diagonal source field** is a smooth tensor field of type $(1,1)$ in the sense of [[def-gr-tensor-fields-and-components]], defined globally using the product splitting $TM\cong TI_0\oplus T(0,\infty)\oplus TS^2$ by
$$T(v_0,v_r,v_S)=(-\epsilon(r)v_0,p(r)v_r,p(r)v_S).$$
In every standard spherical chart its mixed components are
$$T^a{}_b=\operatorname{diag}(-\epsilon(r),p(r),p(r),p(r)),$$
where $\epsilon,p\in C^\infty((0,\infty),\mathbb R)$ represent energy density and isotropic pressure, respectively, under the formal physical reading, with $[\epsilon]=[p]=\mathrm J\,\mathrm m^{-3}$. The associated covariant tensor has components $T_{ab}:=g_{ac}T^c{}_b$; it is smooth and symmetric because both component matrices are diagonal, as defined for covariant $2$-tensor fields in [[def-gr-smooth-covariant-two-tensor-field]]. Define the mass function $M:(0,\infty)\to\mathbb R$ by
$$M(r):=\frac{c^2r}{2G}\bigl(1-b(r)\bigr),$$
which has units $\mathrm{kg}$. No Einstein equation, equation of state, central regularity, physical applicability, or empirical claim is part of this definition. The Einstein tensor and component conventions used later are those of [[def-gr-curvature-tensor-and-derived-tensors]] and [[def-gr-tensor-fields-and-components]].

## Remarks

The coordinate domain excludes $r=0$; a regular center is a separate conclusion and is defined by the center regularity result and the local-existence theorem on this page. Countable Choice is inherited only through the stated canonical smooth-bundle suppliers; the coordinate formulas below add no stronger choice principle.

