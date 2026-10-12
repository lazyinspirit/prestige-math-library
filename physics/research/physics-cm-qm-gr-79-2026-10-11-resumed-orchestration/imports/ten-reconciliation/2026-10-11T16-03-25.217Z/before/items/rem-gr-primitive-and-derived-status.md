---
id: rem-gr-primitive-and-derived-status
kind: remark
title: "Primitive, adopted and derived status of the objects of the framework page"
status: draft
origin: session
domain: physics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-lorentzian-objects, def-gr-inverse-metric-and-musical-isomorphisms, lem-gr-inverse-metric-is-smooth, lem-gr-future-causal-classification-by-a-timelike-field, lem-gr-timelike-fields-define-equal-or-opposite-future-cones, def-gr-metric-selected-connection, lem-gr-connection-conditions-in-chart-components, def-gr-si-unit-and-coordinate-conventions, def-gr-stress-energy-tensor-field, def-gr-energy-conditions, post-gr-spacetime-and-classical-domain, post-gr-field-and-matter-assumptions]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  lem-gr-inverse-metric-is-smooth: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
  lem-gr-timelike-fields-define-equal-or-opposite-future-cones: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  lem-gr-connection-conditions-in-chart-components: mathematical-premise
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-gr-stress-energy-tensor-field: formulation-prerequisite
  def-gr-energy-conditions: formulation-prerequisite
  post-gr-spacetime-and-classical-domain: physical-assumption
  post-gr-field-and-matter-assumptions: physical-assumption
physical_scope: "Status audit of the framework-and-geometry page: which objects are primitive model data, which statements are adopted postulates, which are constructed, and which are explicitly not claimed here. Bookkeeping only; it asserts no physical law, no empirical claim and no mathematical result beyond the items it cites."
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 6.4 postulates and the Levi-Civita connection, PDF pp. 67-68"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), 'the metric again' and 'structures on manifolds': metric and connection as distinct structures, printed pp. 47-48 and 60-61 (PDF pp. 54-55 and 67-68)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: n/a
---

## Status audit

This remark records the status of the notions introduced on the
framework-and-geometry page. It is bookkeeping: it asserts no physical law and
no empirical claim, and every mathematical statement it repeats is proved in
the item cited.

**Primitive mathematical structure of a model.** The triple $(M,g,N)$ of
[[def-gr-smooth-lorentzian-objects]]: the smooth boundaryless four-manifold
$M$ with its smooth structure, the Lorentzian metric $g$ of signature
$(-,+,+,+)$, and the time orientation $N$, a smooth nowhere-zero timelike
vector field. These are the primitive geometric data; the definition names no
equation that $g$ must satisfy.

**Adopted physical assumptions on this page.** The reading of $(M,g,N)$ as the
spacetime of a classical continuum model, with the stated smooth-branch and
four-dimensional restrictions, is the postulate
[[post-gr-spacetime-and-classical-domain]]; the statement that a model's
nongravitational matter content, its equations and its stress-energy tensor are
model input, together with the optional adoption of energy conditions, is the
postulate [[post-gr-field-and-matter-assumptions]]. The unit and coordinate
conventions of [[def-gr-si-unit-and-coordinate-conventions]] are part of the
formulation; they fix dimensions and contain no measured value. The
stress-energy slot [[def-gr-stress-energy-tensor-field]] and the energy-condition
inequalities [[def-gr-energy-conditions]] are formulation-level definitions
available to a model; a model that uses an energy condition adopts it as an
extra assumption.

**Derived (constructed, not adopted) on this page.** The inverse metric, the
musical isomorphisms $\flat_p,\sharp_p$, the raised and lowered component
conventions and the metric trace
([[def-gr-inverse-metric-and-musical-isomorphisms]]), with the smoothness and
transformation law of the inverse-metric components
([[lem-gr-inverse-metric-is-smooth]]); the pointwise causal classification of
tangent vectors; the future/past classification of nonzero causal vectors by
$N$, the identification of the future closed null cone with
$\operatorname{cl}(C_p^+)\setminus\{0\}$, and the fact that a nonzero causal
vector has nonzero pairing with any timelike vector
([[lem-gr-future-causal-classification-by-a-timelike-field]]); the agreement or
opposition of two time orientations on connected sets
([[lem-gr-timelike-fields-define-equal-or-opposite-future-cones]]); the
component form of torsion freedom and metric compatibility
([[lem-gr-connection-conditions-in-chart-components]]). These are mathematical
constructions and theorems from the primitive structure; they carry no
empirical content.

**Named but not constructed on this page.** The metric-selected connection
class of [[def-gr-metric-selected-connection]] is defined by its two
conditions. This page neither asserts that a metric-selected connection exists
for a given $g$ nor that it is unique; the selection theorem is proved where
the connection of the model is constructed, and this page does not use that
conclusion. In particular no geodesic, proper-time or curvature construction
rests on the present page.

**Explicitly not claimed on this page.** No field law, no matter branch or
matter equation, no conservation identity for $T$, no field-equation
consistency condition, no clock, test-body or light-ray coupling, no
differentiable-structure result about worldlines, and no empirical statement.
Those are adopted or proved on later pages of the framework, each with its own
hypotheses.

**Time-orientation caveat.** Existence of the smooth timelike field $N$ is
adopted as part of the model data. It is an additional global condition: this
page does not prove that every smooth Lorentzian four-manifold carries a smooth
nowhere-zero timelike vector field, and the framework restricts to models for
which one is specified. Where a physical or mathematical development needs
time orientability, it states that hypothesis explicitly.
