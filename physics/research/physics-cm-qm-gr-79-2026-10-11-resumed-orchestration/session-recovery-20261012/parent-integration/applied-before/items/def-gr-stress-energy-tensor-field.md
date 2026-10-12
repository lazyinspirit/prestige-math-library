---
id: def-gr-stress-energy-tensor-field
kind: definition
title: "Stress-energy tensor field of a model"
status: draft
origin: session
domain: physics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-gr-si-unit-and-coordinate-conventions, prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure, lem-timelike-cone-has-two-convex-components]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
physical_scope: "The tensor slot for the matter content of a classical smooth gravitational model: a smooth symmetric covariant 2-tensor field on the model's matter domain, with the framework's unit reading. The item defines the object and its units only; which field configuration realizes it, and whether it satisfies any positivity or conservation identity, is a separate matter assumption."
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), postulate 3 and the energy-momentum tensor examples, PDF p. 68 and printed p. 61 (PDF p. 62)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), 'the energy-momentum tensor again', printed pp. 116-118 (PDF pp. 123-125)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5 on the energy-momentum tensor of matter, printed pp. 189-193 (PDF pp. 196-200)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold and let
$U\subseteq M$ be a nonempty open subset, the **matter domain** of the model,
carrying the restricted smooth structure of
[[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]].

A **stress-energy tensor field** on $U$ for the model is a smooth symmetric
covariant $2$-tensor field $T$ on $U$ in the sense of
[[def-gr-smooth-covariant-two-tensor-field]]: at every $p\in U$, $T_p$ is a
symmetric bilinear form $T_p:T_pM\times T_pM\to\mathbb R$ varying smoothly with
$p$, with component functions $T_{ab}=T(\partial_a,\partial_b)$ in every smooth
chart of $U$. No nondegeneracy of $T_p$ is required or implied; in particular
$T_p$ may have radical, as it does for a dust model whose stress-energy form
vanishes on a hyperplane.

**Unit and observer reading.** At a point choose a $g_p$-orthonormal ordered
basis $(e_0,e_1,e_2,e_3)$ with $e_0$ future-directed, meaning
$g(e_0,N)<0$, and $g(e_A,e_B)=\operatorname{diag}(-1,1,1,1)_{AB}$.
Such a basis is obtained from an orthonormal basis by reversing its timelike
member if necessary. Write $T_{AB}=T(e_A,e_B)$ and $n=e_0$.
Every $T_{AB}$ has the energy-density reading
$\mathrm J\,\mathrm m^{-3}$ of [[def-gr-si-unit-and-coordinate-conventions]].
The energy density for this observer is $\rho_n=T_{00}$; the spatial component
$\phi^i=-T_{0i}=T^{0i}$ gives the SI energy-flux component
$q_n^i=c\phi^i$ in $\mathrm W\,\mathrm m^{-2}$ and the SI momentum-density
component $(p_n)_i=\phi^i/c$ in
$\mathrm{kg}\,\mathrm m^{-2}\mathrm s^{-1}$. The stress is $T_{ij}$ in
$\mathrm{Pa}=\mathrm J\,\mathrm m^{-3}$, $i,j=1,2,3$.
Thus the off-diagonal tensor entries themselves have energy-density units;
their flux and momentum readings require the stated sign and $c$ factors.
These names and readings interpret a prescribed tensor and a prescribed
future observer, and assert no actual measurement. Different future
orthonormal frames generally give different components, related by the
corresponding Lorentz change of basis.

**Relation to the matter model.** This item defines the slot that a matter
model fills. The identity of $T$ for a given model — its expression in terms of
the model's fields and its equation of motion — comes from that model and is
not part of this definition; for a model derived from an action, $T$ is the
Hilbert stress-energy tensor of that action, while a model that prescribes $T$
by hand is a separate source model subject to the consistency conditions of the
adopted gravitational field law. Nothing here asserts that a prescribed smooth
symmetric $T$ is realized by any matter model, that $T$ is conserved, or that
$T$ satisfies any positivity condition; conservation and the energy conditions
are separate statements, the latter defined separately in this framework.

**Scope limitations.** The definition is confined to the smooth branch: a
matter distribution whose density fails to be smooth across a surface, a
distributional point source, or a source supported on a hypersurface is not a
stress-energy tensor field of this definition, and such configurations require
additional distributional or junction mathematics not supplied here. The
matter domain $U$ is an idealization of the region occupied by matter; the
model may also include matter sources described on all of $M$ or on a union of
several such domains.
