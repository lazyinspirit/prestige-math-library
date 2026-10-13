---
id: post-gr-ideal-clocks-and-free-fall
kind: postulate
title: "Adopted clock, free-fall and light-ray assumptions of the classical gravitational framework"
status: draft
origin: session
domain: physics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [post-gr-spacetime-and-classical-domain, def-gr-si-unit-and-coordinate-conventions, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-timelike-worldline-and-proper-time, lem-gr-proper-time-reparametrization-and-four-velocity, def-geodesic-of-an-affine-connection, thm-gr-local-geodesics-and-exponential-map, def-causal-classification-of-lorentz-vectors]
dependency_roles:
  post-gr-spacetime-and-classical-domain: formulation-prerequisite
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-proper-time-reparametrization-and-four-velocity: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
physical_scope: "Adopted coupling assumptions of the classical smooth gravitational model: ideal clocks measure the proper time of their future timelike worldlines; ideal freely falling massive test bodies follow future timelike geodesics of the metric-selected connection; ideal light rays are future null geodesics in the geometric-optics approximation. The assumptions are stated in the test-field regime of the smooth four-dimensional model and exclude self-force and radiation back-reaction, finite-size and tidal couplings beyond the test-body idealization, non-geometric-optics propagation, dispersion and dissipation, matter with non-negligible gravitational self-field, distributional or lower-dimensional sources, and quantum effects. They are adopted assumptions of the framework, not derived or empirical results; empirical comparison belongs to fully specified models and reported observations."
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 3.3: the postulate that in GR free particles move on geodesics, timelike for massive particles and null for massless particles, and the remark that proper times along a geodesic differ by a constant, printed p. 38 (PDF p. 39); section 6.4: the test-body idealization and the geodesic postulate, printed pp. 57-58 (PDF pp. 58-59)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 'worldlines', 'proper time' and 'four-velocity' (1.97)-(1.99), printed pp. 25-27 (PDF pp. 32-34); Ch. 4 'the principle of equivalence' and 'physics in curved spacetime', printed pp. 97-106 (PDF pp. 104-113)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 1.1.1-1.1.2: the point-particle action, its geodesic equation (1.28)-(1.30), the affine parameter and the null case for light, printed pp. 24-30 (PDF pp. 31-37); section 3.3.2: the local-inertial-frame reading and its limitations, printed pp. 121-122 (PDF pp. 128-129)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: n/a
---

## Postulate

Adopt as physical assumptions of the classical gravitational framework, in
addition to [[post-gr-spacetime-and-classical-domain]] and the matter-content
assumptions of the framework, the following rules by which ideal clocks, test
bodies and light couple to the metric $g$ of
[[def-gr-smooth-lorentzian-objects]].

**(i) Ideal clocks.** An **ideal clock** is an idealized physical device
carried along a future timelike worldline ([[def-gr-timelike-worldline-and-proper-time]])
whose readings are assumed to reproduce the proper time of that worldline:
the difference of two readings taken at two events of the worldline is the
proper-time increment between those events as defined by the metric, and it is
independent of the construction of the clock. Two ideal clocks moving along
the same worldline differ only by an additive constant (their choice of zero);
different worldlines generally accrue different proper times between the same
pair of events. The physical constant $c$ and the unit of duration are those
of [[def-gr-si-unit-and-coordinate-conventions]].

**(ii) Free fall of massive test bodies.** A **test body** is an uncharged
idealized body whose internal structure is small compared with the scale over
which the geometry of the model varies and whose gravitational self-field is
negligible within the model. An **ideal freely falling massive test body** is
assumed to have a worldline that is a future timelike geodesic of the
metric-selected connection ([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]],
[[def-geodesic-of-an-affine-connection]]), traversed with physical
four-velocity $U=d\gamma/d\tau$ satisfying
$g_{\gamma(\tau)}(U,U)=-c^2$; proper time is an affine parameter of the
worldline ([[lem-gr-proper-time-reparametrization-and-four-velocity]]). The
worldline is determined by the event at which the body is released together
with its four-velocity there, by the uniqueness of the geodesic initial-value
problem ([[thm-gr-local-geodesics-and-exponential-map]]); no force, charge, or
rest mass of the body enters this rule.

**(iii) Light rays.** In the geometric-optics approximation an **ideal light
ray** propagating in the model is assumed to be a future null geodesic of the
metric-selected connection
([[def-causal-classification-of-lorentz-vectors]],
[[def-geodesic-of-an-affine-connection]]). A null worldline carries no proper
time and no four-velocity in the sense of
[[def-gr-timelike-worldline-and-proper-time]]; within the approximation the
propagation of an ideal ray is independent of its frequency, and only the
ray's direction in the tangent space is fixed, not a scale along it.

**(iv) Scope and exclusions.** The three rules are adopted in the test-field
regime of the smooth classical model: the clocks, bodies and rays do not
back-react on the geometry, and the geometry varies smoothly on the scales
relevant to them. Configurations requiring the body's own gravitational field,
radiation reaction, an electromagnetic or other self-force, finite-size or
tidal couplings beyond the test-body idealization, non-geometric-optics
propagation, dispersion or dissipation of light, or quantum effects are
outside these assumptions and require additional model content. The
assumptions do not assert that any real clock, body or light ray is exactly
ideal, nor do they attach measured readings to any model.

## Status, scope and limitations

- **Adopted, not derived.** Clauses (i)-(iii) are physical assumptions of the
framework. Nothing in the mathematical items on this page or its prerequisites
produces them: the geodesic initial-value theorem and the first-variation
lemma identify geodesics as the stationary curves of the length functional
([[lem-gr-first-variation-of-proper-time]]) and construct the exponential map,
but they do not assert that any physical body, clock or light ray follows
those curves. The equivalence principle and the structure of the
nonrelativistic limit motivate these rules; neither proves them.

- **Empirical content is downstream.** The framework's empirical
significance lies in predictions of fully specified models — a geometry, a
matter content and a field law — compared with reported observations under
their apparatus, calibration and uncertainty qualifications. Agreement of
such a comparison is evidence about the combined model and apparatus
assumptions, not a proof of clauses (i)-(iv), and a disagreement can expose an
auxiliary assumption, an apparatus effect or an analysis error rather than a
foundational postulate.

- **Relation to the flat model.** The corresponding assumptions of flat
special relativity are separate physical postulates with Minkowski scope; they
are not used here as suppliers of curved-spacetime content. The flat model
appears on this track only as a comparison and limiting case.
