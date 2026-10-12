---
id: rem-nrqm-interference-scope-and-deferred-content
aliases: [nrqm-interference-scope-and-deferred-content]
kind: remark
domain: physics
title: "What the two-path detection page establishes, assumes and defers"
status: draft
origin: session
dependency_level: 13
deps: [def-nrqm-interference-two-path-preparation-and-detection-model, def-nrqm-interference-recorded-detector-and-sampling-model, pthm-nrqm-interference-coherent-and-mixture-detection-laws, pthm-nrqm-interference-recorded-bin-laws-loss-and-conditioning, pthm-nrqm-interference-continuity-and-local-probability-balance, texp-nrqm-interference-finite-sample-fringe-failure]
dependency_roles:
  def-nrqm-interference-two-path-preparation-and-detection-model: formulation-prerequisite
  def-nrqm-interference-recorded-detector-and-sampling-model: formulation-prerequisite
  pthm-nrqm-interference-coherent-and-mixture-detection-laws: physical-result
  pthm-nrqm-interference-recorded-bin-laws-loss-and-conditioning: physical-result
  pthm-nrqm-interference-continuity-and-local-probability-balance: physical-result
  texp-nrqm-interference-finite-sample-fringe-failure: physical-result
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Scope of the two-path preparation and detection page: the declared preparation and detector models, the coherent and which-path detection laws, the recorded-bin, loss and conditioning laws, the smooth-regime continuity equation and the finite-sampling thought experiment that the page establishes, and the items it does not establish or defers. The remark asserts no experiment, records no counts or uncertainties, and makes no claim about nature."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.2 printed pages 5-6 and Section 1.4 printed page 15 (PDF page 23): two-path amplitudes and the interference law"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 1.3, printed pages 14-18 (PDF pages 17-21): the two-slit probability density and detection records"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: n/a
---

## Scope of the page

**What is established.** The page declares the two-path preparation model
[[def-nrqm-interference-two-path-preparation-and-detection-model]] with its
path components, coherent and which-path preparations and ideal detection bins,
and the recorded detector and sampling model
[[def-nrqm-interference-recorded-detector-and-sampling-model]] with its bounded
effects, no-record channel, loss conditioning and declared independent trials.
[[pthm-nrqm-interference-coherent-and-mixture-detection-laws]] derives the
normalized coherent bin law with its amplitude cross term, the which-path bin
law, and the criterion under which the two declared laws coincide on every bin.
[[pthm-nrqm-interference-recorded-bin-laws-loss-and-conditioning]] derives the
recorded-bin laws, the no-record mass and conditioned law, the reduction of
indicator weights to ideal bins, and a sufficient condition for the recorded
laws to coincide. [[pthm-nrqm-interference-continuity-and-local-probability-balance]]
derives the continuity equation and the local probability balance of the
model's smooth solutions and the norm conservation of the model's flow.
[[texp-nrqm-interference-finite-sample-fringe-failure]] shows that, within the
declared independent-trials model, a declared fringe criterion that rejects a
positive-probability outcome sequence fails with positive probability, and
that no criterion distinguishes two recorded laws that coincide.

**Adopted rather than derived.** The path components, the relative phase, the
preparation weight, the recorded weights and the independence of trials are
declarations of the preparation and apparatus models in the sense of P7; the
identification of a concrete arrangement with these declarations is a tested
identification with uncertainty and can fail. The appearance of an
interference pattern is not derived for any laboratory apparatus, and no
count, efficiency, resolution, background or calibration value appears on this
page.

**Not claimed.** The page does not assert which-path ontology, does not assign
a trajectory to the particle between preparation and detection, and does not
claim that the coherent preparation is the only admissible model of any
apparatus. It makes no claim that a lower-dimensional screen is a spatial
region of the model: a marginal, coarse-graining or flux reduction of a state
to a screen coordinate or surface is a separate detection model. It also makes
none of the following claims: that the flow of an arbitrary $L^{2}$ initial
vector has a $C^{2}$ representative; that a recorded screen rate equals the
surface flux; or that agreement of a finite dataset with a declared law
establishes the framework.

**Deferred content and destinations.** Visibility loss by path marking and
entanglement is not established here: the reusable marker-overlap physical
result is homed on the entanglement page
`qm-composites-entanglement-and-reduced-states`, and this page neither states
nor consumes it. Photon polarization and optical interference are out of scope
and belong to the photon and radiation page; the electron double-slit report is
reported on the companion examples page, not here. Comparative classical field
models and quantum-versus-classical model selection are likewise separate
models.

**Evidence status.** The page contains no experiment and no measured value;
the bounded, conditional statements above are consequences of the cited
postulates, declarations and mathematics. The companion examples page reports
one source-backed electron double-slit experiment with its disclosed
limitations, and that report tests the combined model and apparatus
assumptions rather than proving them.
