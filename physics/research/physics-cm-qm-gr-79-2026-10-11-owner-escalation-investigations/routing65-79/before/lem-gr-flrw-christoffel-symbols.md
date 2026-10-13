---
id: lem-gr-flrw-christoffel-symbols
kind: lemma
title: "Christoffel symbols of the FLRW metric in product charts"
status: draft
origin: session
domain: mathematics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-flrw-model-data, def-gr-flrw-spatial-model, lem-gr-flrw-metric-and-comoving-data, def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-christoffel-symbols-of-an-affine-connection, lem-gr-connection-conditions-in-chart-components, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-tensor-fields-and-components, prop-christoffel-formula-for-the-levi-civita-connection, def-riemannian-metric-and-riemannian-manifold, def-derivative, def-directional-and-partial-derivatives, def-countable-choice]
dependency_roles:
  def-gr-flrw-model-data: mathematical-premise
  def-gr-flrw-spatial-model: mathematical-premise
  lem-gr-flrw-metric-and-comoving-data: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  lem-gr-connection-conditions-in-chart-components: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  prop-christoffel-formula-for-the-levi-civita-connection: mathematical-premise
  def-riemannian-metric-and-riemannian-manifold: mathematical-premise
  def-derivative: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.6.1: the non-vanishing Christoffel symbols of the FRW metric, Gamma^0_ij = a a-dot gamma_ij and Gamma^i_0j = (a-dot/a) delta^i_j, printed pp. 199-201 (PDF pp. 206-208)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 8: the connection and curvature calculation for the metric (8.7), printed pp. 220-223 (PDF pp. 227-230)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3 (3.21)-(3.23): the Christoffel formula in a chart, printed pp. 59-61 (PDF pp. 66-68)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

Let $(I,\Sigma,\gamma,k,a)$ be an FLRW model datum with conversion constant
$c>0$, with spacetime $M=I\times\Sigma$, metric $g$ and comoving congruence
$n=c^{-1}\partial_t$ ([[def-gr-flrw-model-data]]), and let $\nabla$ be the
metric-selected connection of $g$
([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]). Let
$(x^0,x^1,x^2,x^3)$ be a product chart with $x^0=t$, where $(x^1,x^2,x^3)$ is
a smooth chart of $\Sigma$, and let ${}^{(3)}\Gamma^i{}_{jk}$ be the Christoffel symbols of
the Riemannian metric $\gamma$ in that three-dimensional chart
([[prop-christoffel-formula-for-the-levi-civita-connection]]). Write
$\dot a$ for the derivative of the scale factor and $H=\dot a/a$ for the
Hubble parameter. Then in the product chart the Christoffel symbols
$\Gamma^a{}_{bc}$ of $\nabla$
([[def-christoffel-symbols-of-an-affine-connection]]) are:

**(a)** $\Gamma^0{}_{00}=\Gamma^0{}_{0i}=\Gamma^0{}_{i0}=0$ and
$\Gamma^i{}_{00}=0$ for $i=1,2,3$;

**(b)** $\Gamma^0{}_{ij}=\Gamma^0{}_{ji}=\dfrac{a\dot a}{c^2}\,\gamma_{ij}$
for $i,j\in\{1,2,3\}$;

**(c)** $\Gamma^i{}_{0j}=\Gamma^i{}_{j0}=H\,\delta^i{}_j$ for
$i,j\in\{1,2,3\}$;

**(d)** $\Gamma^i{}_{jk}={}^{(3)}\Gamma^i{}_{jk}$ for
$i,j,k\in\{1,2,3\}$.

All components not listed vanish; equivalently, the only potentially nonzero
Christoffel-symbol families are those in (b)-(d).

## Facts & Assumptions

**Given:** An FLRW model datum with $c>0$, its spacetime $M=I\times\Sigma$ with the metric $g$ of [[def-gr-flrw-model-data]], the metric-selected connection $\nabla$ of $g$, and a product chart $(x^0,x^1,x^2,x^3)$ with $x^0=t$ and $(x^1,x^2,x^3)$ a chart of $\Sigma$.

[L1] In the product chart the components of $g$ are $g_{00}=-c^2$, $g_{0i}=g_{i0}=0$ and $g_{ij}=a(t)^2\gamma_{ij}$, with $\gamma_{ij}$ the components of the $\Sigma$-chart and $a$ smooth and strictly positive ([[def-gr-flrw-model-data]]); the field $g$ is a smooth Lorentzian metric on $M$, so its metric-selected connection $\nabla$ is the unique torsion-free $g$-compatible affine connection ([[lem-gr-flrw-metric-and-comoving-data]], [[def-gr-smooth-lorentzian-objects]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[def-gr-metric-selected-connection]]).

[L2] Because $g$ is nondegenerate, the inverse-metric components $g^{ab}$ are characterized by $\sum_bg^{ab}g_{bc}=\delta^a{}_c$ and are smooth; in the product chart $g^{00}=-c^{-2}$, $g^{0i}=g^{i0}=0$ and $g^{ij}=a(t)^{-2}\gamma^{ij}$, where $(\gamma^{ij})$ is the inverse of the positive-definite matrix $(\gamma_{ij})$ ([[def-gr-inverse-metric-and-musical-isomorphisms]], [[def-riemannian-metric-and-riemannian-manifold]]).

[L3] In every smooth chart the Christoffel symbols of the metric-selected connection are $\Gamma^a{}_{bc}=\tfrac12\sum_dg^{ad}\bigl(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc}\bigr)$, and they are symmetric in the lower pair, $\Gamma^a{}_{bc}=\Gamma^a{}_{cb}$ ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] clause (a), [[def-christoffel-symbols-of-an-affine-connection]], [[lem-gr-connection-conditions-in-chart-components]]).

[L4] In the three-dimensional chart of $\Sigma$, the Levi-Civita symbols of $\gamma$ are ${}^{(3)}\Gamma^i{}_{jk}=\tfrac12\sum_l\gamma^{il}(\partial_j\gamma_{kl}+\partial_k\gamma_{jl}-\partial_l\gamma_{jk})$ ([[prop-christoffel-formula-for-the-levi-civita-connection]]). In the product chart, functions of $x$ alone are independent of $t$ and $\partial_i a=0$ for $i=1,2,3$, while $\partial_0a=\dot a$ is the derivative of the real function $a$ of one variable; these are the partial-derivative and derivative conventions of [[def-directional-and-partial-derivatives]] and [[def-derivative]].

## Proof

**Proof technique:** direct substitution in the Christoffel formula, organized by the index families.

1.1 (Metric and inverse components.) In the product chart [L1] gives $g_{00}=-c^2$, $g_{0i}=0$, $g_{ij}=a(t)^2\gamma_{ij}$. Solving $\sum_bg^{ab}g_{bc}=\delta^a{}_c$ block by block: the $1\times1$ block gives $g^{00}=-c^{-2}$; the vanishing off-diagonal block gives $g^{0i}=0$; and the spatial block gives $g^{ij}=a(t)^{-2}\gamma^{ij}$, since $(a^2\gamma_{ij})^{-1}=a^{-2}(\gamma_{ij})^{-1}$ and $\gamma^{ij}$ is the inverse of the positive-definite matrix $\gamma_{ij}$ by [L2]. [L1, L2, algebra]

2.1 (The family $\Gamma^0{}_{\cdot\cdot}$ and $\Gamma^i{}_{00}$.) For $a=i$ and $b=c=0$, every differentiated metric component in [L3] vanishes: $\partial_0g_{d0}=\partial_0g_{0d}=0$ and $\partial_dg_{00}=0$, so $\Gamma^i{}_{00}=0$. For $a=0$ and $(b,c)=(0,0),(0,j),(j,0)$, the coefficients $g^{0i}$ vanish and the remaining derivatives are of the constant component $g_{00}=-c^2$ or the zero components $g_{0j}=g_{j0}=0$; hence $\Gamma^0{}_{00}=\Gamma^0{}_{0j}=\Gamma^0{}_{j0}=0$. This is claim (a). [L3, step 1.1, algebra]

2.2 (The family $\Gamma^0{}_{ij}$.) Substituting $a=0$, $b=i$, $c=j$ in [L3]: the terms $\partial_ig_{0j}=0$ and $\partial_jg_{0i}=0$ vanish because $g_{0i}=g_{0j}=0$, leaving $\Gamma^0{}_{ij}=\tfrac12g^{00}(-\partial_0g_{ij})=\tfrac12(-c^{-2})\bigl(-\partial_0(a(t)^2\gamma_{ij})\bigr)=\tfrac12c^{-2}\cdot2a\dot a\gamma_{ij}=\dfrac{a\dot a}{c^2}\gamma_{ij}$, where $\partial_0\gamma_{ij}=0$ because $\gamma_{ij}$ is a function of $x$ alone and $\partial_0(a^2)=2a\dot a$ by [L4]. Symmetry in the lower pair gives $\Gamma^0{}_{ji}=\Gamma^0{}_{ij}$. This is claim (b). [L3, L4, step 1.1, algebra]

2.3 (The family $\Gamma^i{}_{0j}$.) Substituting $a=i$, $b=0$, $c=j$ in [L3]: $\partial_0g_{jd}=\partial_0(a^2\gamma_{jd})=2a\dot a\gamma_{jd}$; $\partial_jg_{0d}=0$ because $g_{0d}=0$; and $\partial_dg_{0j}=0$. Hence $\Gamma^i{}_{0j}=\tfrac12\sum_da^{-2}\gamma^{id}\cdot2a\dot a\gamma_{jd}=a^{-1}\dot a\sum_d\gamma^{id}\gamma_{jd}=\dfrac{\dot a}{a}\delta^i{}_j=H\delta^i{}_j$, using $\sum_d\gamma^{id}\gamma_{jd}=\delta^i{}_j$ by [L2] and the definition $H=\dot a/a$. Symmetry gives $\Gamma^i{}_{j0}=H\delta^i{}_j$. This is claim (c). [L2, L3, L4, step 1.1, algebra]

2.4 (The family $\Gamma^i{}_{jk}$.) Substituting $a=i$, $b=j$, $c=k$ in [L3]: $\partial_jg_{kd}=a^2\partial_j\gamma_{kd}$, $\partial_kg_{jd}=a^2\partial_k\gamma_{jd}$ and $\partial_dg_{jk}=a^2\partial_d\gamma_{jk}$ for spatial $d$, while for $d=0$ the combination $\partial_jg_{k0}+\partial_kg_{j0}-\partial_0g_{jk}$ has vanishing first two terms and its $g^{i0}=0$ coefficient annihilates the remaining term; hence $\Gamma^i{}_{jk}=\tfrac12\sum_la^{-2}\gamma^{il}a^2(\partial_j\gamma_{kl}+\partial_k\gamma_{jl}-\partial_l\gamma_{jk})={}^{(3)}\Gamma^i{}_{jk}$ by [L4]. This is claim (d). [L2, L3, L4, step 1.1, algebra]

3.1 (Conclusion and identification.) The index triples $(a,b,c)$ with $a,b,c\in\{0,1,2,3\}$ fall into the families (a)-(d) treated in steps 2.1-2.4: index $a=0$ splits into $(0,0,0)$, $(0,0,i)$, $(0,i,0)$, $(0,i,j)$ and index $a=i$ splits into $(i,0,0)$, $(i,0,j)$, $(i,j,k)$, with the symmetry $\Gamma^a{}_{bc}=\Gamma^a{}_{cb}$ of [L3] covering the transposed triples. Each family was computed from the same connection $\nabla$, namely the unique metric-selected connection of the smooth Lorentzian metric $g$ supplied by [L1]; the displays (b)-(d) therefore list all potentially nonzero symbol families, and the proof is complete. [L3, step 2.1, step 2.2, step 2.3, step 2.4] ∎

## Remarks

- **Independence of the spatial chart.** Claim (d) says that the spatial symbols of the spacetime connection are exactly the Christoffel symbols of the three-dimensional metric $\gamma$ in the chosen spatial chart, with no explicit dependence on $a$; this is why the spatial part of the connection is the Levi-Civita connection of $\gamma$ (compare [[prop-christoffel-formula-for-the-levi-civita-connection]]).

- **Normalization check.** With $x^0=ct$ in place of $t$ as the time coordinate, the components of the same connection carry factors of $c$ from the coordinate change $x^0=ct$; the displays above are stated in the time coordinate $t$ in seconds and are not to be mixed with the length-coordinate convention for components. The invariant statements in which these symbols are used on this page are the curvature components of the next lemma, which are chart-independent geometric objects.
