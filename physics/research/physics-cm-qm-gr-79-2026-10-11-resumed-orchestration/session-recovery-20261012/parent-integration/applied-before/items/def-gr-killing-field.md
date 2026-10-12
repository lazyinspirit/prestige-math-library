---
id: def-gr-killing-field
kind: definition
title: "Killing fields of a Lorentzian metric"
status: draft
origin: session
domain: mathematics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-lorentzian-objects, def-lie-derivative-of-a-tensor-field, def-smooth-vector-field-as-a-tangent-bundle-section, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-lie-derivative-of-a-tensor-field: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 5 'More Geometry': isometries and Killing vectors, L_X g_{mu nu}=0 and the equivalent form nabla_mu X_nu + nabla_nu X_mu = 0, (5.39)-(5.42), printed pp. 140-142 (PDF pp. 147-149)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 5.3 'Lie derivative': Killing vectors defined by L_X g_{ab}=0 and the conservation of X_a V^a along geodesics, printed pp. 53-56 (PDF pp. 54-57)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
justified_by: [thm-gr-killing-and-on-shell-matter-identities]
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]) and let $\xi$ be a smooth vector field
on $M$ ([[def-smooth-vector-field-as-a-tangent-bundle-section]]). The **Lie
derivative of the metric along $\xi$**, written $\mathcal L_\xi g$, is the
smooth symmetric covariant $2$-tensor field obtained by the flow definition of
[[def-lie-derivative-of-a-tensor-field]] applied to $g$: for the local flow
$\Phi_t$ of $\xi$,

$$\mathcal L_\xi g:=\frac{d}{dt}\Big|_{t=0}\Phi_t^*g .$$

The field $\xi$ is a **Killing field** of $(M,g)$ (an **isometry generator**,
or a **Killing vector**) when

$$\mathcal L_\xi g=0 .$$

The equivalent local characterization

$$\mathcal L_\xi g=0\quad\Longleftrightarrow\quad\nabla_a\xi_b+\nabla_b\xi_a=0,$$

where $\nabla$ is the metric-selected connection of $g$
([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]) and
$\xi_b:=g_{bc}\xi^c$ is the lowered field, is proved in
[[thm-gr-killing-and-on-shell-matter-identities]] clause (a); the definition
itself asserts neither direction. Whether a given metric has Killing fields is
a property of that metric: neither existence nor uniqueness of a Killing field
is asserted here, and a general metric has none beyond the trivial field
$\xi=0$.

## Remarks

- **What is defined.** Only the object "Killing field of the pair $(g,\xi)$" is
  defined, through the Lie derivative of the metric. No conserved quantity,
  charge or physical interpretation is attached to a Killing field by this
  item; conservation along geodesics and the divergence-free current
  constructed from a conserved stress-energy tensor are separate results of
  [[thm-gr-killing-and-on-shell-matter-identities]].

- **No global isometry is asserted.** A Killing field generates a local flow
  of local isometries where it is defined; a global one-parameter group of
  isometries requires the flow of $\xi$ to be global, which is a separate
  hypothesis (for instance compact support of $\xi$).
