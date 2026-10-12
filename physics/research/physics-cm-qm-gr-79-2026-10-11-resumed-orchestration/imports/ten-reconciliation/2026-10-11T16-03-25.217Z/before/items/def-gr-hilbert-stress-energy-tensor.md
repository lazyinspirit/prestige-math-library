---
id: def-gr-hilbert-stress-energy-tensor
kind: definition
title: "The Hilbert stress-energy tensor of a metric-dependent action"
status: draft
origin: session
domain: mathematics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-gr-metric-volume-form-and-current-flux, def-oriented-smooth-manifold-and-oriented-chart, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-tensor-fields-and-components, lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes: mathematical-premise
justified_by: [lem-gr-hilbert-tensor-uniqueness]
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: the definition T_{mu nu} = -(1/sqrt(-g)) delta S_M/delta g^{mu nu}, (4.70), printed p. 117 (PDF p. 124), and the variation (4.69) of the total action"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 9.3: the definition T^{ab} = (2/sqrt(-g)) delta S_matter/delta g_{ab}, (9.28)-(9.29), printed p. 116 (PDF p. 117)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5.2: T_{mu nu} = -(2/sqrt(-g)) delta S_M/delta g^{mu nu}, (4.46), printed p. 182 (PDF p. 189)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N)$ be an oriented time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]],
[[def-oriented-smooth-manifold-and-oriented-chart]]), let $c>0$ be a fixed
real constant, let $\mathcal X$ be a set, and let

$$S:\mathcal D\longrightarrow\mathbb R$$

be a real-valued functional defined on a subset $\mathcal D$ of the set of
pairs $(\tilde g,\varphi)$ with $\tilde g$ a smooth Lorentzian metric on $M$ of
signature $(-,+,+,+)$ and $\varphi\in\mathcal X$. Fix $(\tilde g,\varphi)\in
\mathcal D$; below we always take $\tilde g=g$. The elements $\varphi$ are the
model's matter configurations; nothing about their nature is assumed here.

**(a) Metric families.** A **smooth metric family at $g$ with compactly
supported variation** is a map $s\mapsto g_s$, $|s|<\varepsilon$ for some
$\varepsilon>0$, such that $(g_s,\varphi)\in\mathcal D$ for all $s$, such that
$g_s$ is a smooth Lorentzian metric of signature $(-,+,+,+)$ for every $s$,
such that $g_0=g$, and such that there is a compact subset $K\subseteq M$ with
$g_s=g$ outside $K$ for every $|s|<\varepsilon$. For such a family define

$$q^{ab}:=\frac{d}{ds}g_s^{ab}\Big|_{s=0},$$

the derivative at $s=0$ of the components of the inverse metric of $g_s$ in any
smooth chart; the family of functions $q^{ab}$ is a smooth symmetric
contravariant $2$-tensor field of compact support, well defined because the
components $g_s^{ab}$ depend smoothly on $s$
([[def-gr-inverse-metric-and-musical-isomorphisms]],
[[def-gr-tensor-fields-and-components]]).

**(b) Hilbert tensor.** A smooth symmetric covariant $2$-tensor field $T$ on
$M$ is a **Hilbert stress-energy tensor of $S$ at $(g,\varphi)$ with respect to
$c$** when, for **every** smooth metric family $s\mapsto g_s$ at $g$ with
compactly supported variation,

$$\frac{d}{ds}S(g_s,\varphi)\Big|_{s=0}=-\frac{1}{2c}\int_M T_{ab}\,q^{ab}\, \mathrm{vol}_g,$$

where $\mathrm{vol}_g$ is the metric volume form of
[[def-gr-metric-volume-form-and-current-flux]] and $\int_M\omega$ is the
integral of the compactly supported smooth top form $\omega:=T_{ab}q^{ab}
\mathrm{vol}_g$ over the oriented manifold $M$
([[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]]).
The right-hand side is defined because $q^{ab}$ has compact support, so
$\omega$ is compactly supported. If such a $T$ exists it is unique, by
[[lem-gr-hilbert-tensor-uniqueness]]; one then calls it **the** Hilbert
stress-energy tensor of $S$ at $(g,\varphi)$.

**(c) Conventions and scope.** The sign and the factor $1/(2c)$ are fixed
conventions of this library: they are the ones that turn the framework's
adopted Einstein-Hilbert normalization into the field equation displayed in the
framework's physical postulate. The condition is a property of the functional
$S$ at the point $(g,\varphi)$; it is not automatic, and this definition does
not assert that any functional has a Hilbert tensor. The definition uses the
orientation of $M$; if the orientation is reversed, $\mathrm{vol}_g$ changes
sign and $T$ is unchanged, because both sides change sign consistently.

## Remarks

- **Relation to the invariant-coordinate form.** In a chart, writing $\delta$
  generically for the derivative at $s=0$, the defining identity reads
  $\delta S=-\tfrac{1}{2c}\int T_{ab}\,\delta g^{ab}\,w\,d^4x$ with $w$ the
  metric density of [[def-gr-metric-volume-form-and-current-flux]]. The
  conventions used in the cited treatments differ by a factor $c$: their
  $T^{ab}=\pm\tfrac{2}{\sqrt{|g|}}\delta S/\delta g_{ab}$ corresponds, with
  $\delta g_{ab}=-g_{ac}g_{bd}\delta g^{cd}$, to the same tensor with the
  normalization restored; the SI-normalized form used here is the one carried
  by the framework's action postulate.

- **The matter configuration is held fixed.** The definition concerns the
  partial derivative of $S$ in the metric direction at fixed $\varphi$; the
  matter equations of motion are a separate condition on the same functional
  and are not part of this definition.
