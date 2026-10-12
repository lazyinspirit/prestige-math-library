---
id: post-gr-spacetime-and-classical-domain
kind: postulate
title: "Adopted spacetime model and classical domain of the gravitational framework"
status: draft
origin: session
domain: physics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-lorentzian-objects, def-smooth-manifold, def-gr-si-unit-and-coordinate-conventions]
dependency_roles:
  def-gr-smooth-lorentzian-objects: formulation-prerequisite
  def-smooth-manifold: mathematical-premise
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
physical_scope: "Adoption of the smooth time-oriented Lorentzian four-manifold of the framework as the spacetime of a classical model, with the framework's classical continuum domain and its smooth-branch and four-dimensional restrictions. Excludes quantum-gravity and quantum-field regimes, weak-regularity or singular regions, distributional sources, boundaries, and dimensions other than four. Adoption is a model assumption, not a derived or empirical result."
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 6.4 'Postulates of General Relativity', postulate 1 (spacetime is a 4d Lorentzian manifold), PDF p. 68"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4 'physics in curved spacetime', printed pp. 97-99 (PDF pp. 104-106)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 3.1.2-3.1.3 and 4.1 on Lorentzian manifolds and the matter-geometry relation, printed pp. 93-96 and 149-153 (PDF pp. 100-103 and 156-160)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: n/a
---

## Postulate

Adopt as physical assumptions of the classical gravitational framework the
following statements.

**(i) Spacetime model.** The spacetime of a model of the framework is a
time-oriented smooth Lorentzian four-manifold $(M,g,N)$ as in
[[def-gr-smooth-lorentzian-objects]]: a smooth four-manifold $M$ without
boundary, a Lorentzian metric $g$ of signature $(-,+,+,+)$ on $M$
([[def-smooth-manifold]]), and a time orientation $N$. Its points represent
idealized physical events; the vector $N$ fixes which causal directions are
future-directed; and the causal classification of tangent vectors along any
worldline is the classification of the Lorentz vector spaces $(T_pM,g_p)$
together with the future/past convention of the time orientation. The metric
$g$ is the gravitational field of the model: it is the object that the field
law of the framework constrains, and its curvature is the model's
representation of gravity. The rules by which ideal clocks, test bodies and
light rays couple to $g$ are adopted separately as physical assumptions of the
framework.

**(ii) Classical domain.** Geometry and matter are treated as classical
continuum fields: the model describes macroscopic configurations of matter and
a classical metric, with no quantum description of either. The framework makes
no claim that a real spacetime is exactly such a manifold, that matter is
exactly a classical continuum, or that the smooth description applies to
arbitrarily small scales or arbitrarily strong fields; those are domain
limitations of the model family, not consequences of it.

**(iii) Unity of the model.** A model of the framework is specified by its
geometry $(M,g,N)$ together with its matter content and the field law adopted
for it; the geometry alone selects no matter configuration and no dynamics
(the matter assumptions are
adopted separately, in the companion postulate on matter content). Physical
parameters enter through
the unit conventions of [[def-gr-si-unit-and-coordinate-conventions]]; no
numerical value of a constant is asserted here.

**(iv) Smooth-branch restriction.** The fields of a model are defined on an
open domain of $M$; the metric is $C^\infty$ on all of $M$ and $M$ has no
boundary. Configurations in which a field fails to be smooth on a nonempty open
set, in which matter is concentrated on a lower-dimensional set in a way that
produces a distributional stress-energy tensor, or in which $M$ carries a
boundary, are outside the stated smooth domain of the framework and require
mathematics not supplied by these postulates.

**(v) Status.** These are adopted assumptions. They are not derived from the
mathematics of manifolds, from any symmetry principle, or from experiment; the
equivalence principle and covariance arguments motivate but do not prove them.
Testing the framework means comparing predictions computed from a fully
specified model — geometry, matter content and field law — with observations,
and agreement is evidence about the model, not a proof of these postulates.

## Status, scope and limitations

- **Adopted, not deduced.** Clause (i) adopts the geometric arena; clauses
  (ii)-(iv) delimit its intended regime. Nothing in this item selects the
  metric of any model, asserts that a candidate metric satisfies any field
  equation, or asserts that any observed spacetime is of this form.

- **Empirical content is downstream.** Empirical significance lies in the
  predictions of specified models and in their comparison with reported
  observations; those comparisons carry their own apparatus, calibration,
  sampling and uncertainty qualifications and are recorded where the framework
  treats them. This postulate itself makes no quantitative empirical claim.

- **No scope creep.** The absence of a boundary, the dimension four, and the
  global time orientation are part of the adopted model, not conclusions. Where
  later items treat initial value problems, asymptotics or maximal extensions,
  they state their additional hypotheses explicitly.
