---
id: def-gr-kruskal-model-data
kind: definition
title: "The Kruskal model datum: domain, implicit radial function, metric and time orientation"
status: published
origin: session
domain: mathematics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-schwarzschild-exterior-model, def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, def-euclidean-spheres-and-closed-balls, ex-the-round-metric-on-the-sphere-as-an-induced-metric, def-c-r-and-smooth-maps-between-smooth-manifolds, def-derivation-at-a-point-and-tangent-space, def-countable-choice, def-real-exponential-function-and-e]
dependency_roles:
  def-gr-schwarzschild-exterior-model: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure: mathematical-premise
  def-euclidean-spheres-and-closed-balls: mathematical-premise
  ex-the-round-metric-on-the-sphere-as-an-induced-metric: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-derivation-at-a-point-and-tangent-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
justified_by: [lem-gr-kruskal-model-properties]
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 6.1.4 (6.12)-(6.15): the Kruskal-Szekeres coordinates U = -exp(-u/4GM), V = exp(v/4GM), the implicit relation UV = -(r-2GM)exp(r/2GM)/2GM and the metric ds^2 = -32(GM)^3 exp(-r/2GM)/r dU dV + r^2 dOmega^2, printed pp. 245-247 (PDF pp. 252-254)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "P. K. Townsend, Black Holes, arXiv:gr-qc/9707012v1 (1997), section 2.3.2 (2.56)-(2.57): the Kruskal-Szekeres form ds^2 = -32M^3/r e^{-r/2M}dUdV + r^2 dOmega^2 with UV = -(r-2M)/2M e^{r/2M}, extended by analytic continuation, printed p. 21"
      url: "https://arxiv.org/pdf/gr-qc/9707012"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7 (7.74)-(7.81): the Kruskal-Szekeres coordinates u', v' with u'v' = (r/2GM - 1)e^{r/2GM}, the metric (7.77) ds^2 = -16G^3M^3/r e^{-r/2GM}(du'dv' + dv'du') + r^2 dOmega^2 and the implicit definition (7.81), printed pp. 186-187 (PDF pp. 193-194)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: n/a
---

## Definition

This item assumes the axiom of countable choice $\mathrm{AC}_\omega$ through
the tangent-bundle convention of [[def-gr-smooth-lorentzian-objects]]
clause (c); the product-smooth-structure supplier has no choice hypothesis
([[def-countable-choice]]); no further choice principle is used.

**(a) Parameters.** Let $c>0$, $G_N>0$ and $m_*>0$ be the constants and mass
parameter of the Schwarzschild exterior datum, and put
$s:=2G_Nm_*/c^2>0$ ([[def-gr-schwarzschild-exterior-model]] clause (a)). The
**Kruskal model datum of mass parameter $m_*$** is constructed from these
data as follows.

**(b) Domain and smooth structure.** Let
$\Omega:=\{(U,V)\in\mathbb R^2:UV<1\}$ and let
$\mathcal K:=\Omega\times S^2$, where $S^2\subset\mathbb R^3$ is the unit
Euclidean sphere, with the product smooth structure
([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]],
[[def-euclidean-spheres-and-closed-balls]]). It is a smooth four-manifold
without boundary. Write $U,V:\mathcal K\to\mathbb R$ for the first two
projections and $\iota:\mathcal K\to S^2$ for the third. A **Kruskal product
chart** uses any smooth chart on $S^2$. In a spherical-polar Kruskal chart the
angular coordinates satisfy $0<\vartheta<\pi$ and
$\gamma_{S^2}=\operatorname{diag}(1,\sin^2\vartheta)_{ij}$; these charts omit
the two poles, which are covered by ordinary sphere charts.

**(c) The radial function.** The datum carries a function
$r:\mathcal K\to(0,\infty)$, the **Kruskal radial function**, characterized by
the implicit relation

$$U\,V=-\Bigl(\frac{r}{s}-1\Bigr)e^{r/s}\qquad\text{at every point of }\mathcal K .$$

That for every $(U,V)\in\Omega$ there is exactly one $r(U,V)>0$ satisfying
this relation, and that $r$ is smooth, is not asserted here; it is proved in
[[lem-gr-kruskal-model-properties]] on this page, the justification record of
this definition. The value $r=0$ is not attained on $\mathcal K$, and
$r=s$ exactly on the axes $U=0$ or $V=0$.

**(d) The metric.** Define the metric globally by

$$g_{\mathcal K}=-\frac{2s^3}{r}e^{-r/s}(dU\otimes dV+dV\otimes dU)+r^2\,\iota^*\gamma_{S^2}.$$

In every spherical-polar Kruskal chart its component functions are

$$g_{UV}:=g_{VU}:=-\frac{2s^3}{r}e^{-r/s},\qquad g_{\vartheta\vartheta}:=r^2,\qquad g_{\varphi\varphi}:=r^2\sin^2\vartheta,\qquad g_{UU}:=g_{VV}:=g_{U\vartheta}:=g_{U\varphi}:=g_{V\vartheta}:=g_{V\varphi}:=0,$$

where $r$ is the function of clause (c) evaluated at the point. This global
expression defines a smooth symmetric covariant $2$-tensor field on
$\mathcal K$ once the smoothness of $r$ is established by
[[lem-gr-kruskal-model-properties]]. In another sphere chart the angular block
is $r^2(\gamma_{ij})$. That $g_{\mathcal K}$ is Lorentzian is proved, not
asserted, in the same lemma.

**(e) Time orientation.** Define the field
$N_{\mathcal K}:=\partial_U+\partial_V$ on $\mathcal K$. Its component
expression is the same in every Kruskal chart; that it is a smooth timelike
field and hence a time orientation of $g_{\mathcal K}$ is proved in
[[lem-gr-kruskal-model-properties]].

**(f) Scope.** The datum is a geometric object: the definition asserts
nothing about whether $g_{\mathcal K}$ satisfies any field equation, about
its causal structure, about the maximality of the extension it provides, or
about nature. The comparison with the exterior datum, the vacuum property and
the causal structure are the content of the two following items on this page.
The region $\{UV=1\}$, where the implicit relation of clause (c) has no
solution with $r>0$, is not part of $\mathcal K$ and is not appended to it by
this definition.

## Remarks

- **Four regions.** The set $\{UV\ne0\}$ has four connected components (the
  quadrants $U<0<V$, $U>0,V>0$, $U>0>V$ and $U<0,V<0$), separated by the
  null axes $U=0$ and $V=0$. On components with $UV<0$ the radial function
  exceeds $s$, while on components with $UV>0$ it is less than $s$; both
  facts follow from the implicit relation once clause (c) is justified. The
  causal and metric meaning of the four regions is the subject of the
  following items.
