---
id: def-gr-metric-volume-form-and-current-flux
kind: definition
title: "The metric volume form, current flux through 3-faces and finite-chain charges"
status: published
origin: session
domain: mathematics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-lorentzian-objects, def-oriented-smooth-manifold-and-oriented-chart, def-wedge-product-of-differential-forms, def-interior-product-of-a-form-by-a-vector-field, prop-local-coordinate-expression-for-a-differential-form, def-smooth-vector-field-as-a-tangent-bundle-section, def-integral-of-a-form-over-a-smooth-singular-simplex, def-lorentz-orthogonality-and-orthogonal-complement]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
  def-interior-product-of-a-form-by-a-vector-field: mathematical-premise
  prop-local-coordinate-expression-for-a-differential-form: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-integral-of-a-form-over-a-smooth-singular-simplex: mathematical-premise
  def-lorentz-orthogonality-and-orthogonal-complement: mathematical-premise
justified_by: [lem-gr-metric-volume-form-patching-and-face-normal]
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 2 'the metric again', printed pp. 49-51 (PDF pp. 56-58), and Ch. 2 'tensor densities' (2.44), printed pp. 52-54 (PDF pp. 59-61): sqrt|det g| as the volume n-form and the integration measure"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 8.6-8.7 'Integration on manifolds' and 'Submanifolds and Stokes' theorem': the volume element sqrt(-g) d^4x on an oriented Lorentzian manifold and its use with Stokes' theorem, printed pp. 108-110 (PDF pp. 109-111), and section 9.2 for the divergence-theorem use in variations, printed p. 115 (PDF p. 116)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5.5 with figures 40-41 on charge conservation in curved spacetime (the spacelike slices, the timelike boundary B and the flux across B), printed pp. 187-189 (PDF pp. 194-196)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]), let $M$ carry an orientation in the
sense of [[def-oriented-smooth-manifold-and-oriented-chart]] (so that its
charts that are oriented in that orientation have orientation-preserving
transition maps), and let $\nabla$ be its metric-selected connection. This item
fixes the metric volume form, the flux of a current through oriented $3$-faces
and finite-chain charges. The orientation of $M$ is an independent datum: it is
not determined by the metric and not by the time orientation.

**(a) Metric volume density and volume form.** Let $(U,x)$ be an oriented
chart, with metric components $g_{ab}=g(\partial_a,\partial_b)$
([[def-gr-smooth-lorentzian-objects]] clause (a)). Define the **metric volume
density**

$$w:=\sqrt{|\det(g_{ab})|}>0\qquad\text{on }U,$$

a strictly positive smooth function because $g_{ab}$ is smooth and
$g_p$ is nondegenerate. In the chart define the local $4$-form

$$\mathrm{vol}_{g,U}:=w\,dx^0\wedge dx^1\wedge dx^2\wedge dx^3,$$

with the exterior product of [[def-wedge-product-of-differential-forms]] and the
coordinate covector fields of
[[prop-local-coordinate-expression-for-a-differential-form]]. That these local
forms agree on chart overlaps and therefore define one smooth nowhere-vanishing
$4$-form $\mathrm{vol}_g$ on $M$ — the **metric volume form** — is proved in
[[lem-gr-metric-volume-form-patching-and-face-normal]] clause (a), together
with the reading statement of clause (b) there: in every oriented chart
$\mathrm{vol}_g=w\,dx^0\wedge\cdots\wedge dx^3$, and on every positively
oriented $g_p$-orthonormal basis $(e_0,e_1,e_2,e_3)$ of $T_pM$ one has
$\mathrm{vol}_{g,p}(e_0,e_1,e_2,e_3)=1$.

**(b) Current flux through oriented $3$-faces and chains.** Let $J$ be a
smooth vector field on $M$
([[def-smooth-vector-field-as-a-tangent-bundle-section]]). The **current
$3$-form** of $J$ is the contraction

$$\iota_J\mathrm{vol}_g,$$

the interior product of the $4$-form $\mathrm{vol}_g$ with $J$
([[def-interior-product-of-a-form-by-a-vector-field]]).

By a **smooth singular $k$-simplex** of $M$ — the convention of the library
definition `def-smooth-singular-simplex` (differential-geometry track),
restated here so this page is self-contained — we mean a map
$\sigma:\Delta^k\to M$ whose domain is the standard $k$-simplex
$$\Delta^k=\Bigl\{t\in\mathbb R^{k+1}:t_i\ge0,\ \textstyle\sum_it_i=1\Bigr\},$$
for which there exist an open set $O\subseteq A^k=\{t\in\mathbb R^{k+1}:\sum_it_i=1\}$
containing $\Delta^k$ and a smooth map $\bar\sigma:O\to M$ with
$\bar\sigma|_{\Delta^k}=\sigma$; the extension is not part of the simplex
data, and degenerate parametrizations are allowed. With the integration of
forms over such simplices
([[def-integral-of-a-form-over-a-smooth-singular-simplex]]), a **$3$-face** is
a smooth singular $3$-simplex $\sigma$, and the **flux of $J$ through
$\sigma$** is the real number

$$\Phi_J(\sigma):=\int_\sigma\iota_J\mathrm{vol}_g.$$

A **finite smooth singular $k$-chain** — the convention of the library
definition `def-smooth-singular-chain-and-cochain-complexes`, restated here —
is a finite formal real linear combination $\Sigma=\sum_i c_i\sigma_i$ of
smooth singular $k$-simplices. For such a $3$-chain the **flux of $J$ through
$\Sigma$** is defined additively,

$$\Phi_J(\Sigma):=\sum_i c_i\,\Phi_J(\sigma_i),$$

a definition independent of the written expression for $\Sigma$, because a
finite formal sum is evaluated by adding the finitely many coefficients and
inserting a zero coefficient changes nothing. $\Phi_J(\Sigma)$ is the **charge**
of the current $J$ assigned to $\Sigma$ when the model reads $J$ as a conserved
current; that reading belongs to the physical postulates and is not part of
this definition.

**(c) Non-null faces and their unit normals.** A $3$-dimensional linear subspace
$H\subseteq T_pM$ is **nondegenerate** for $g_p$ when the restriction of $g_p$
to $H$ is nondegenerate, equivalently when $H\cap H^\perp=\{0\}$ in the
orthogonality of [[def-lorentz-orthogonality-and-orthogonal-complement]]. A
smooth singular $3$-simplex $\sigma$ is **non-null at** a parameter point $t$
when the span of the three velocity vectors
$\sigma_*\partial_1|_t,\sigma_*\partial_2|_t,\sigma_*\partial_3|_t$ has
dimension $3$ and is nondegenerate at $\sigma(t)$, and **non-null** when this holds at every
parameter point. For a non-null face the **unit normal** $\nu$ at that point is
the unique vector of $T_{\sigma(t)}M$ with $\nu\in H^\perp$,
$g(\nu,\nu)\in\{-1,+1\}$ and $(\nu,\sigma_*\partial_1,\sigma_*\partial_2,
\sigma_*\partial_3)$ a positively oriented basis of $T_{\sigma(t)}M$; its
existence, uniqueness and its sign $\varepsilon:=g(\nu,\nu)$ are proved in
[[lem-gr-metric-volume-form-patching-and-face-normal]] clause (c), together
with the density identity of clause (c) used to read $\iota_J\mathrm{vol}_g$ on
such a face. Rank-deficient faces and rank-three faces with degenerate induced
metric are not assigned a unit normal; their flux is defined
by the $3$-form $\iota_J\mathrm{vol}_g$ itself, as in clause (b).
