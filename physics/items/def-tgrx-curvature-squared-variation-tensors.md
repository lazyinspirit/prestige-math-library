---
id: def-tgrx-curvature-squared-variation-tensors
kind: definition
title: Curvature-squared counterterm variation tensors
status: published
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
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
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
Lorentzian signature is open and $h^{ab}$ has compact support. For a smooth metric $q$, write the curvature-squared densities as
$\mathcal L_{R^2}(q):=S[q]^2\,d\mathrm{vol}_q$ and
$\mathcal L_{\operatorname{Ric}^2}(q):=\operatorname{Ric}_{cd}[q]\operatorname{Ric}^{cd}[q]\,d\mathrm{vol}_q$.
Define the first variations by integrating their pointwise density derivatives
at $\epsilon=0$, not by subtracting possibly infinite total actions:
$$\delta I_{R^2}[g;h]:=\int_M\left.\partial_\epsilon\mathcal L_{R^2}(g_\epsilon)\right|_0,\qquad \delta I_{\operatorname{Ric}^2}[g;h]:=\int_M\left.\partial_\epsilon\mathcal L_{\operatorname{Ric}^2}(g_\epsilon)\right|_0.$$
These derivatives are smooth compactly supported densities determined only by
$g$ and $h$, even if $g_\epsilon-g$ is not compactly supported for nonzero
$\epsilon$. Indeed, in a chart each density coefficient is a smooth function
of the inverse metric and its coordinate derivatives through order two on
the open set of nondegenerate metrics. The parameter chain rule therefore
makes its derivative at zero a finite linear combination, with smooth
background coefficients, of $h^{ab}$ and its coordinate derivatives through
order two. Every such term vanishes outside $\operatorname{supp}h$.
Smooth joint dependence allows the parameter and coordinate derivatives to
commute, so no higher-order parameter terms of the family enter. This proves
both compact support and independence of the chosen family with the same
first inverse-metric derivative; integration of these compact densities is
finite. In particular $h=0$ gives zero first variations. No finiteness of the
actions at nonzero parameter, or compact support of their differences, is
assumed or concluded.

For a particular model instance, supply smooth symmetric covariant
two-tensors $H^{(R^2)}_{ab}$ and $H^{(\operatorname{Ric}^2)}_{ab}$ that
satisfy, for every compactly supported inverse-metric variation,
$$\delta I_{R^2}[g;h]=\int_M\left.\partial_\epsilon\mathcal L_{R^2}(g_\epsilon)\right|_0=\int_M H^{(R^2)}_{ab}h^{ab}\,d\mathrm{vol}_g,$$
$$\delta I_{\operatorname{Ric}^2}[g;h]=\int_M\left.\partial_\epsilon\mathcal L_{\operatorname{Ric}^2}(g_\epsilon)\right|_0=\int_M H^{(\operatorname{Ric}^2)}_{ab}h^{ab}\,d\mathrm{vol}_g.$$
The displayed positive signs, inverse-metric variation, and curvature
convention fix the counterterm sign and normalization. In length
coordinates both tensors have units $\mathrm{m^{-4}}$. This Definition
specifies the selected tensors as model inputs and does not assert their
existence for every possible background or any solution of a gravitational
field equation.

## Definition references

[[def-gr-curvature-tensor-and-derived-tensors]]

[[def-gr-fx-covariant-field-variations]]

## Scope justification

The time orientation in [[def-gr-curvature-tensor-and-derived-tensors]]
can be supplied locally; no global time-orientability assumption is needed
here. At each point choose a timelike tangent vector and extend its chart
components constantly near that point. Smoothness of $g$ makes this vector
field timelike on a sufficiently small open neighborhood, where its cone
selects a time orientation. Apply the supplier on each such neighborhood.
Its unique torsion-free, metric-compatible connections agree on overlaps:
each restricted connection satisfies those same two conditions for the
restricted metric, regardless of which timelike cone was selected. They
therefore define one global smooth connection. The displayed curvature
operator, lowering and contractions then agree on overlaps as well, since
they use only that connection and $g$, not the local cone selections.
Thus the supplier's smooth tensor definitions apply to every background in
this Definition, including backgrounds with no global time orientation.
This local argument makes no simultaneous choice of a cone at every point.
