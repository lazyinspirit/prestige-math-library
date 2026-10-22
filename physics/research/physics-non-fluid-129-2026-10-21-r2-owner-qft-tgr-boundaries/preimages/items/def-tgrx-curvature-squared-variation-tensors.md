---
id: def-tgrx-curvature-squared-variation-tensors
kind: definition
title: Curvature-squared counterterm variation tensors
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 1
deps:
  - def-gr-curvature-tensor-and-derived-tensors
  - def-gr-fx-covariant-field-variations
dependency_roles:
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-fx-covariant-field-variations: mathematical-premise
physical_scope: "Definitions of the two local curvature-squared tensor inputs used by the assigned effective semiclassical model. They specify a metric-variation convention and assert no field equation or solution."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "L. H. Ford, Quantum Field Theory in Curved Spacetime, complete lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9707062"
      locator: "Complete 44-page PDF retrieved; §3, PDF pp. 19–21, equations (3.7)–(3.10), for the metric variations of R-squared and Ricci-squared counterterms. Ford's signature and curvature convention differ; this Definition fixes its own sign through the displayed inverse-metric variation identity."
    - title: "Stefan Hollands and Robert M. Wald, Quantum fields in curved spacetime, complete review"
      url: "https://arxiv.org/pdf/1401.2026"
      locator: "Complete 77-page review retrieved; §3.1, PDF pp. 38–45, for local curvature ambiguities in locally covariant stress observables."
verification:
  precheck: n/a
---

## Definition

Let $(M,g)$ be a smooth Lorentzian four-manifold of signature $(-,+,+,+)$.
Use its unique torsion-free, metric-compatible connection $\nabla$ and the curvature convention
$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$. Define
$R^a{}_{bcd}$ in each chart by
$R(\partial_c,\partial_d)\partial_b=R^a{}_{bcd}\partial_a$, and sum
repeated indices; $g^{ab}$ denotes the inverse matrix to $g_{ab}$. Then set
$R_{abcd}=g_{ae}R^e{}_{bcd}$,
$\operatorname{Ric}_{bd}=g^{ac}R_{abcd}$,
$S=g^{bd}\operatorname{Ric}_{bd}$, and
$G_{ab}=\operatorname{Ric}_{ab}-\tfrac12Sg_{ab}$ using this convention.
In a chart whose coordinates have units of length, use the positive metric volume density
$$d\mathrm{vol}_g=|\det(g_{ab})|^{1/2}|dx^0\,dx^1\,dx^2\,dx^3|.$$

A **compactly supported inverse-metric variation** is a smooth family of
smooth Lorentzian metrics $g_\epsilon$ for $\epsilon$ in an open interval
about $0$, with $g_0=g$, for which
$h^{ab}:=\left.\partial_\epsilon g_\epsilon^{ab}\right|_{\epsilon=0}$ is a
compactly supported smooth symmetric contravariant two-tensor. Every such
$h^{ab}$ is admissible for a sufficiently small parameter interval because
Lorentzian signature is open and $h^{ab}$ has compact support. Define the
first variations $\delta I_{R^2}[g;h]$ and
$\delta I_{\operatorname{Ric}^2}[g;h]$ by
differentiating, at $\epsilon=0$, the differences of the respective
curvature-squared integrals for $g_\epsilon$ and $g$. These differences have
compact support, so their integrals are finite.

For a particular model instance, supply smooth symmetric covariant
two-tensors $H^{(R^2)}_{ab}$ and $H^{(\operatorname{Ric}^2)}_{ab}$ that
satisfy, for every compactly supported inverse-metric variation,
$$\delta I_{R^2}[g;h]=\left.\frac{d}{d\epsilon}\right|_{\epsilon=0}\left(\int_M S[g_\epsilon]^2\,d\mathrm{vol}_{g_\epsilon}-\int_M S[g]^2\,d\mathrm{vol}_g\right)=\int_M H^{(R^2)}_{ab}h^{ab}\,d\mathrm{vol}_g,$$
$$\delta I_{\operatorname{Ric}^2}[g;h]=\left.\frac{d}{d\epsilon}\right|_{\epsilon=0}\left(\int_M \operatorname{Ric}_{cd}[g_\epsilon]\operatorname{Ric}^{cd}[g_\epsilon]\,d\mathrm{vol}_{g_\epsilon}-\int_M \operatorname{Ric}_{cd}[g]\operatorname{Ric}^{cd}[g]\,d\mathrm{vol}_g\right)=\int_M H^{(\operatorname{Ric}^2)}_{ab}h^{ab}\,d\mathrm{vol}_g.$$
The displayed positive signs, inverse-metric variation, and curvature
convention fix the counterterm sign and normalization. In length
coordinates both tensors have units $\mathrm{m^{-4}}$. This Definition
specifies the selected tensors as model inputs and does not assert their
existence for every possible background or any solution of a gravitational
field equation.

## Definition references

[[def-gr-curvature-tensor-and-derived-tensors]]

[[def-gr-fx-covariant-field-variations]]

