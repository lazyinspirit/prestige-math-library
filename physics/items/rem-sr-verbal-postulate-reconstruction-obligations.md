---
id: rem-sr-verbal-postulate-reconstruction-obligations
kind: remark
title: Verbal-postulate reconstruction obligations not discharged by this framework
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: physics
dependency_level: 5
physical_scope: >-
  Scope remark for the flat classical special-relativity framework: it states
  which of the framework's geometric assumptions are adopted and which
  reconstruction obligations from verbal postulates remain open. It asserts no
  physical law, no empirical claim, and no derived geometry.
deps: [def-sr-affine-minkowski-model, def-inertial-frame-and-inertial-chart,
       post-sr-inertial-covariance]
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  post-sr-inertial-covariance: physical-assumption
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), Section 1.4 'The Lorentz transformation' pp. 30-32 including Examples 11-14, Sections 2.3-2.4 'Additional postulates'/'Other axiomatizations' pp. 46-49, and Section 8.3 'Boosts and rotations' pp. 174-176; signature (+---) converted to (-+++) with x^0 = ct restored"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 'Special relativity and flat spacetime' pp. 3-7 (PDF pp. 10-14), equations (1.3)-(1.21)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## What is adopted and what this remark is not

This framework adopts the oriented time-oriented affine Minkowski space
([[def-sr-affine-minkowski-model]]), its inertial frames and inertial charts
([[def-inertial-frame-and-inertial-chart]]), and the assertion that inertial
changes of description are governed by that geometry
([[post-sr-inertial-covariance]]). The transformation law derived on this page
is a conditional consequence of that adoption. This remark records the
epistemic status of the starting point; it makes no further physical or
mathematical claim.

## Obligations a reconstruction from verbal postulates would still owe

In particular, the page does **not** claim to derive the model from the verbal
postulates customarily used to motivate special relativity: Einstein's
principle of relativity for mechanics and electrodynamics together with the
constancy of the speed of light in vacuum (as paraphrased in Crowell,
Section 2.4.1), nor from Crowell's postulates P1-P6 (causality, flatness,
homogeneity/isotropy, inertial-frame existence/equivalence, and relativity of time) (Sections
2.1-2.4). A reconstruction from such verbal statements would still owe, at
least, the following open steps.

1. A precise formal statement of homogeneity and isotropy of spacetime as
   symmetry assumptions, including the class of allowed coordinate changes.
2. An existence and modelling assumption that inertial frames exist, and that
   frames in uniform relative motion are related by transformations of
   constant velocity.
3. An operational definition of simultaneity and of the light-signal
   comparison, together with the assumptions needed to turn the light
   postulate into a statement about the quadratic interval.
4. A proof that the admissible coordinate changes form an affine group
   preserving a quadratic form of Lorentzian signature, with the conversion
   constant fixed.
5. A decision about global topology, since flatness alone does not exclude
   quotient spacetimes such as cylinders that admit no global inertial chart.

None of these steps is carried out here, cited as proved, or used as a logical
premise. The framework's adoption of the geometry is a modelling assumption,
and the obligations above are recorded as open work, not as established
mathematical facts. In particular, no item on this page or on its companion
page may treat this remark as a premise establishing the geometry, and no
claim is made that the verbal postulate systems are logically equivalent to
the affine model.
