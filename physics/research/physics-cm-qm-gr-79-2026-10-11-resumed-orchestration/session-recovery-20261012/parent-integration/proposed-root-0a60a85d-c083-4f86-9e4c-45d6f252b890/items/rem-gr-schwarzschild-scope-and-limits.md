---
id: rem-gr-schwarzschild-scope-and-limits
kind: remark
title: "Scope and status of the spherical vacuum model page"
status: draft
origin: session
domain: physics
dependency_level: 18
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-schwarzschild-exterior-model, pthm-gr-schwarzschild-vacuum-model, pthm-gr-schwarzschild-stationary-redshift, pthm-gr-schwarzschild-circular-orbit-predictions, rem-gr-schwarzschild-horizon-and-singularity, lem-gr-schwarzschild-ricci-and-einstein-tensors, thm-gr-local-birkhoff-warped-product, def-gr-si-unit-and-coordinate-conventions, post-gr-ideal-clocks-and-free-fall, post-gr-einstein-field-law]
dependency_roles:
  def-gr-schwarzschild-exterior-model: mathematical-premise
  pthm-gr-schwarzschild-vacuum-model: physical-result
  pthm-gr-schwarzschild-stationary-redshift: physical-result
  pthm-gr-schwarzschild-circular-orbit-predictions: physical-result
  rem-gr-schwarzschild-horizon-and-singularity: formulation-prerequisite
  lem-gr-schwarzschild-ricci-and-einstein-tensors: mathematical-premise
  thm-gr-local-birkhoff-warped-product: mathematical-premise
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  post-gr-ideal-clocks-and-free-fall: physical-assumption
  post-gr-einstein-field-law: physical-assumption
physical_scope: "Scope and status note for the spherical vacuum model page: it records that the page's items are conditional results of the adopted smooth classical model, that no observation or measured value is asserted on the page, that the empirical interpretation of any redshift, orbit or horizon statement requires separate apparatus and analysis models, and that maximality, global mass, collapse and non-vacuum interior topics are deferred. It asserts no physical fact about nature and reports no measurement."
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7: the Schwarzschild solution and its interpretation as the exterior of a spherical source, with the weak-field and strong-field caveats, printed pp. 164-198 (PDF pp. 171-205)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 6.1: the Schwarzschild black hole, its parameters and the model caveats of the chapter, printed pp. 232-256 (PDF pp. 239-263)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
---

## What the page defines and proves

- **The model.** [[def-gr-schwarzschild-exterior-model]] fixes the datum: the
  manifold $\mathbb R\times(s,\infty)\times S^2$, the smooth metric with
  components $-f,f^{-1},r^2,r^2\sin^2\vartheta$ in product charts, the time
  orientation $\partial_0$ and the parameters $c,G_N,m_*>0$ with
  $s=2G_Nm_*/c^2$. The components carry the unit readings of
  [[def-gr-si-unit-and-coordinate-conventions]]; no numerical value of any
  constant is asserted.
- **The vacuum calculation.** [[lem-gr-schwarzschild-ricci-and-einstein-tensors]]
  computes the Christoffel symbols, the curvature, the vanishing Ricci and
  Einstein tensors and the nonvanishing curvature of the datum, and
  [[pthm-gr-schwarzschild-vacuum-model]] reads the result as a model of the
  framework's field law with $T=0$ and $\Lambda=0$, together with the model's
  static clock readings and the reading of the mass parameter.
- **Local uniqueness.** [[thm-gr-local-birkhoff-warped-product]] shows that a
  vacuum warped product with spherical orbits is locally of this form with an
  extra local Killing field, under the explicit hypotheses of that theorem;
  the conclusion is local and does not assert that every vacuum solution or
  every spherical vacuum region is an exterior region with positive mass.
- **Restricted predictions.** [[pthm-gr-schwarzschild-stationary-redshift]]
  and [[pthm-gr-schwarzschild-circular-orbit-predictions]] are conditional
  model predictions for ideal clocks, test bodies and light rays, using the
  adopted coupling rules of [[post-gr-ideal-clocks-and-free-fall]]; they are
  not measurements and involve no apparatus model. The horizon and singularity
  distinctions are recorded in [[rem-gr-schwarzschild-horizon-and-singularity]].

## What is not asserted

- **No observation and no empirical comparison.** The page contains no
  experiment item, no reported observation, no calibration or uncertainty
  record and no statistical inference. A comparison of the redshift ratio, an
  orbital frequency or a horizon statement with data would test the model
  together with an apparatus, preparation and analysis model and would be
  evidence about the combination, not a proof of the model
  ([[post-gr-einstein-field-law]] and the postulates fix only the model side).
- **No numerical values.** Neither $G_N$, $c$, $m_*$ nor any derived number is
  evaluated; the statements are identities in the parameters.
- **Deferred topics.** Maximality and global structure of the Kruskal model,
  causal-boundary and maximal-development theorems, boundary-asymptotic mass,
  rotating and charged models, collapse and singularity theorems, and the
  empirical interface are separate modules of the track; nothing on this page
  supplies or presupposes them. Where an item uses the extension or Kruskal
  models it says so explicitly, and where it uses the weak-field reading of
  the mass parameter it carries the comparison warning of the isotropic
  coordinate lemma.
