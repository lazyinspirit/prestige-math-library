---
id: rem-gr-schwarzschild-horizon-and-singularity
kind: remark
title: "Horizon versus singularity in the Schwarzschild model: a chart breakdown, a smooth null surface and a curvature obstruction"
status: draft
origin: session
domain: physics
dependency_level: 17
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-schwarzschild-exterior-model, lem-gr-schwarzschild-curvature-and-kretschmann-scalar, lem-gr-schwarzschild-extension-chart, def-gr-kruskal-model-data, lem-gr-kruskal-model-properties, lem-gr-kruskal-causal-escape-and-trapping, def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-gr-curvature-tensor-and-derived-tensors, pthm-gr-schwarzschild-vacuum-model]
dependency_roles:
  def-gr-schwarzschild-exterior-model: mathematical-premise
  lem-gr-schwarzschild-curvature-and-kretschmann-scalar: mathematical-premise
  lem-gr-schwarzschild-extension-chart: mathematical-premise
  def-gr-kruskal-model-data: mathematical-premise
  lem-gr-kruskal-model-properties: mathematical-premise
  lem-gr-kruskal-causal-escape-and-trapping: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  pthm-gr-schwarzschild-vacuum-model: physical-result
physical_scope: "Scope note for the spherical vacuum model page: it distinguishes the coordinate breakdown of the Schwarzschild chart at r = s from the curvature obstruction at r = 0 in the smooth model, records that the advanced-extension horizon is a smooth null hypersurface, that the Kruskal level r = s is the union of two smooth null hypersurfaces intersecting transversely at the bifurcation sphere (their union is not smooth there), and that the right-exterior future escape boundary is U = 0 with the stated one-way property, and states what is not claimed (maximality, geodesic completeness, singularity theorems, collapse and any observation). It asserts no physical fact about nature beyond the model-conditional statements of the cited items and reports no measurement."
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 6.1.2-6.1.4: the coordinate breakdown at r = 2GM, the null character of the horizon, the Kruskal extension and the statement that r = 0 is a genuine singularity while r = 2GM is not, printed pp. 236-249 (PDF pp. 243-256)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7 (7.74)-(7.85) and the singularity criterion: the Kruskal diagram, the event horizon as a null surface, the singularity at r = 0 diagnosed by curvature invariants, printed pp. 186-192 (PDF pp. 193-199)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: event horizons and trapped sets in the smooth Lorentzian setting, sections 4.1-4.2 printed pp. 106-118"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
---

## What the Schwarzschild chart does at $r=s$

The exterior datum of [[def-gr-schwarzschild-exterior-model]] is defined on the
open domain $r>s$ only. At every point of this domain a product-chart frame
remains a basis. The component $g_{11}=f(r)^{-1}=(1-s/r)^{-1}$ diverges as
$r\downarrow s$, and the chart contains no point with $r=s$, so there is no
frame limit there in this chart. This is a statement about one component, not
an invariant: the metric tensor is smooth and nondegenerate on $r>s$ and has
the separate regular extension of [[lem-gr-schwarzschild-extension-chart]].

## The advanced horizon and the two Kruskal null hypersurfaces

[[lem-gr-schwarzschild-extension-chart]] constructs on
$M_{\mathrm{ext}}=\mathbb R\times(0,\infty)\times S^2$ a smooth nondegenerate
Lorentzian metric $g_{\mathrm{ext}}$ whose restriction to $r>s$ is the exterior
datum; the level set $r=s$ is a smooth null hypersurface with generator
direction $\partial_v$, and the Ricci tensor and Kretschmann scalar of
$g_{\mathrm{ext}}$ extend smoothly across it. In the Kruskal model
([[def-gr-kruskal-model-data]], [[lem-gr-kruskal-model-properties]]) the full level set $\{r=s\}$ is $\{UV=0\}=\{U=0\}\cup\{V=0\}$.
Each axis times $S^2$ is a smooth hypersurface: $dU$ and $dV$ never vanish,
and the inverse base matrix has $g^{UU}=g^{VV}=0$, so each has null normal
covector. They intersect transversely at the **bifurcation sphere**
$\{U=V=0\}\times S^2$. Their tangent spaces there together span the full
four-dimensional tangent space, so their union cannot be a smooth
three-dimensional hypersurface at that sphere. The function $r$ and metric
remain smooth there; the curvature invariant is $12/s^4$ on both axes.
For future escape to the right exterior, the boundary is specifically
$\{U=0\}$, while $\{V=0\}$ is the past escape boundary. The one-way
character in the model is the exact statement of
[[lem-gr-kruskal-causal-escape-and-trapping]] clause (d): no future-directed
causal curve issued at a point with $U\ge0$ reaches the quadrant
$\{U<0,V>0\}$ with $r\to+\infty$, while every point with $U<0$ admits such a
curve along the future radial null geodesic at constant $U$. This is a causal
property of the smooth model; it is not a divergence of the metric at the
surface, and the model's time orientation is part of the datum.

## The obstruction at $r=0$ is curvature, not coordinates

The Kretschmann scalar of the exterior datum is
$K=R_{abcd}R^{abcd}=12s^2/r^6=\frac{48G_N^2m_*^2}{c^4r^6}$
([[lem-gr-schwarzschild-curvature-and-kretschmann-scalar]] clause (c)): on
$r>s$ it takes values in $(0,12/s^4)$ and has the finite boundary value
$12/s^4$ as $r\downarrow s$; on the smooth extension of
[[lem-gr-schwarzschild-extension-chart]], whose domain has $r>0$ and on which
the same expression $12s^2/r^6$ is the Kretschmann scalar, it grows without
bound as $r\downarrow0$. In the Kruskal model it is smooth on
$\mathcal K$ and grows without bound as $UV\to1$, that is, as $r\downarrow0$
([[lem-gr-kruskal-model-properties]] clause (d)). The value $r=0$ is not
attained on $\mathcal K$; the set $\{UV=1\}$ is not part of the model. The
invariant is a scalar built from the metric, so it is chart-independent, and
the following argument shows that $r=0$ cannot be appended as a regular
$C^2$ metric boundary point: if a $C^2$ Lorentzian metric on a manifold
containing $\mathcal K$ together with a boundary point $q$ approached with
$r\to0$ restricted to $g_{\mathcal K}$ on $\mathcal K$, then its curvature
tensor would be continuous near $q$ and its Kretschmann scalar bounded there,
contradicting the unboundedness of the same invariant along sequences in
$\mathcal K$. The distinction between the two values of $r$ is therefore a
statement about the smooth curvature of the model, not about the chosen
coordinates.

## What is not claimed

- **No singularity theorem and no collapse.** Nothing above proves that any
  solution of the field law develops the region $0<r<s$, that it is realized
  by collapsing matter, or that any observed object is described by the model;
  the interior region and the second exterior region of the Kruskal model are
  geometric regions of that model only.
- **No maximality or completeness.** The extension of
  [[lem-gr-schwarzschild-extension-chart]] is not claimed maximal, and no
  geodesic completeness or incompleteness statement for $\mathcal K$ is made
  here; the maximal-development and boundary theorems are deferred to their
  own modules of the track.
- **No asymptotic or global mass.** The parameter $m_*$ is the model's
  parameter ([[pthm-gr-schwarzschild-vacuum-model]] clause (c)); no ADM-type
  mass at infinity and no boundary-asymptotic comparison is asserted on this
  page.
- **No observation.** The words horizon and singularity here refer to
  properties of the model; whether the model applies to any observed system is
  an empirical question belonging to experiment items and to the
  experimental-interface page, with apparatus, calibration, sampling and
  uncertainty qualifications.
