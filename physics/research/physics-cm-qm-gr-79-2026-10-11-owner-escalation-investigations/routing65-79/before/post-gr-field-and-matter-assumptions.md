---
id: post-gr-field-and-matter-assumptions
kind: postulate
title: "Adopted matter-content assumptions: fields, equations, stress-energy and energy conditions"
status: draft
origin: session
domain: physics
dependency_level: 8
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [post-gr-spacetime-and-classical-domain, def-gr-stress-energy-tensor-field, def-gr-energy-conditions, def-gr-smooth-lorentzian-objects]
dependency_roles:
  post-gr-spacetime-and-classical-domain: formulation-prerequisite
  def-gr-stress-energy-tensor-field: formulation-prerequisite
  def-gr-energy-conditions: formulation-prerequisite
  def-gr-smooth-lorentzian-objects: mathematical-premise
physical_scope: "Matter-content assumptions of a classical smooth gravitational model: the nongravitational fields and their explicit equations and couplings are model input; matter is represented by smooth fields whose stress-energy tensor occupies the slot of the stress-energy definition; consistency with the adopted field law and optional energy conditions. Excludes quantum matter, distributional or lower-dimensional sources in the smooth branch, unmodeled self-force, finite-size and tidal corrections, dispersion and dissipation, and any claim that a particular matter model describes nature."
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 6.4, postulate 3 (energy, momentum and stresses of matter described by a symmetric conserved tensor), PDF p. 68"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), 'the energy-momentum tensor again' and the Weak Energy Condition, printed pp. 116-117 (PDF pp. 123-124)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 4.5 and 4.5.7, printed pp. 189-198 (PDF pp. 196-205)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: n/a
---

## Postulate

Adopt as physical assumptions of the classical gravitational framework, in
addition to [[post-gr-spacetime-and-classical-domain]], the following statements
about the matter content of a model.

**(i) Matter content is model input.** A model of the framework specifies its
nongravitational fields or matter and their explicit equations of motion and
couplings. The geometric data $(M,g,N)$ of
[[def-gr-smooth-lorentzian-objects]] and covariance of the model's equations
under relabelling of events do not select those fields, equations or couplings.
Here covariance means that, on overlapping smooth charts, the component
transformations specified for the model's fields carry solutions of the
equations in one chart to solutions of the same equations in the other.
Different matter specifications over the same geometry are different models of
the framework, and no dynamical selection principle is asserted.

**(ii) Smooth matter and its stress-energy tensor.** The matter of a model on
its matter domain is represented by smooth fields on an open domain
$U\subseteq M$, and the model's stress-energy tensor is the smooth symmetric
covariant $2$-tensor field $T$ on $U$ of
[[def-gr-stress-energy-tensor-field]], with the unit reading recorded there.
The relation of $T$ to the matter fields is part of the model: a model derived
from an action defines $T$ as the Hilbert stress-energy tensor of that action,
while a model that prescribes $T$ directly is a separate source model.

**(iii) Consistency with the field law.** Where a model prescribes $T$
independently of matter fields, the prescription is admissible only if it meets
the consistency conditions imposed by the gravitational field law adopted for
the model, stated where that law is stated. If a model specifies a real-valued
action functional on its admissible metric and matter configurations, the
action, its dependence on those fields, its stated symmetries, and the matter
equations obtained from it are part of the model. Any conservation identity
used for $T$ when those equations hold must be established from that model's
action, symmetries, equations, and regularity hypotheses; it is not assumed
for an arbitrary action or arbitrary smooth symmetric $T$.

**(iv) Energy conditions are optional additional assumptions.** A model may
adopt any of the pointwise inequalities of [[def-gr-energy-conditions]] as
further assumptions on its stress-energy tensor. The general framework
postulates impose none automatically. A particular matter model may imply one
or more of them; any such implication must be established from that model's
equations and hypotheses. Each model records which conditions, if any, it
adopts, and a model that adopts none is not thereby excluded.

**(v) Scope and exclusions.** Idealizations such as unmodeled self-force,
finite-size and tidal corrections, dispersion, dissipation, and quantum effects
are outside the framework unless the model's explicit equations include them;
matter concentrated in a distributional or lower-dimensional source, and
matter configurations whose fields fail to be smooth on the model domain, are
outside the stated smooth branch and require additional mathematics. The
adoption of a matter model is not a claim that it describes nature.

## Status, scope and limitations

- **Adopted, not deduced.** Clauses (i)-(v) are model assumptions. They
  constrain what counts as a model of the framework; they imply no theorem
  about matter and no measured property of any substance. Clause (iii)
  leaves any conservation equation to the item stating the field law; that
  item must define the derivative used and state the matter equations and
  regularity hypotheses under which the equation is asserted.

- **Line of responsibility.** The geometric objects, the inverse metric, the
  causal classification and the metric-selected connection class are supplied
  by the mathematical items of this page; the framework postulates adopt them
  physically. Empirical comparisons involving matter require a fully specified
  model and reported observations with apparatus, calibration, sampling and
  uncertainty qualifications, and would test the combined model rather than
  these assumptions individually.
