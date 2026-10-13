---
id: rem-sr-primitive-and-derived-status
kind: remark
title: "Primitive and derived notions of the spacetime-primitives page"
status: published
origin: session
domain: physics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sr-affine-minkowski-model, def-inertial-frame-and-inertial-chart, def-oriented-minkowski-volume-form, def-spatial-euclidean-structure-of-an-inertial-frame, def-sr-si-units-and-coordinate-conventions, post-sr-inertial-covariance, post-sr-ideal-clocks-and-light]
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-oriented-minkowski-volume-form: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  post-sr-inertial-covariance: physical-assumption
  post-sr-ideal-clocks-and-light: physical-assumption
physical_scope: "Bookkeeping remark for the spacetime-primitives page of the flat classical special-relativity framework: it classifies the page's notions as adopted or derived and asserts no physical law and no empirical claim."
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 pp. 2-7 (PDF pp. 9-14)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 2.1-2.2 pp. 25-28 (PDF pp. 26-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: n/a
---

## Status audit

This remark records the primitive and derived status of the notions introduced
on the spacetime-primitives page, as required before the page's derived claims.
It is bookkeeping: it asserts no physical law and no empirical claim.

**Primitive mathematical structure of the model.** The quadruple
$(A,V,\eta,C^+)$ of [[def-sr-affine-minkowski-model]]: the affine space $A$ with
its action of $V$ and the displacement $q-p$, the Lorentz form $\eta$ of
signature $(-,+,+,+)$, the orientation of $V$ fixed as a positive ray of
$\Lambda^4V$, and the time-orientation component $C^+$ of the timelike set.

**Primitive physical interpretation and parameters adopted on this page.** The
physical event interpretation together with the covariance assumption
([[post-sr-inertial-covariance]]); the ideal-clock and ideal-vacuum-light
interpretation ([[post-sr-ideal-clocks-and-light]]); and the conversion
constant $c$, whose SI numerical value is exact by unit definition and whose
physical interpretation as the vacuum ray speed is adopted, as recorded in
[[def-sr-si-units-and-coordinate-conventions]]. These are adopted assumptions
of the framework, not deductions.

**Derived (constructed, not adopted) on this page.** Displacements and
intervals; the causal classification of displacements; inertial frames and
their inertial charts ([[def-inertial-frame-and-inertial-chart]]); the smooth
structure of $A$ making it a smooth $4$-manifold and the canonical identification
$T_pA\cong V$; the oriented volume form and its components
([[def-oriented-minkowski-volume-form]]); and the spatial Euclidean structure
and vector product of a named inertial frame
([[def-spatial-euclidean-structure-of-an-inertial-frame]]). These are
mathematical constructions from the primitive structure, with the stated
frame-dependence where it occurs.

**Reserved for later development.** The general proper-time parametrization
theory, physical particle momentum and energy, charge, and force or matter
laws. The units item gives explicit kinematic definitions only for bookkeeping;
it supplies no dynamics or empirical particle identification. Later pages introduce their own adopted
premises and must repeat this status audit for them; a definition on a later
page is not made primitive by this page's conventions.

**Mathematical versus empirical status.** The mathematical statements of this
page concern only the stipulated geometry. They do not assert that the model
describes nature; the physical interpretation enters through the two adopted
postulates, whose empirical support would be evidence about the specified model
rather than a proof.
