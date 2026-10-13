---
id: rem-gr-primary-report-research-queue
kind: remark
title: "Primary-report research queue for the gravitational framework: redshift, propagation delay, light deflection, perihelion advance, binary timing and interferometric strain"
status: published
origin: session
domain: physics
physical_scope: "Scope-and-queue record for the empirical layer of the classical gravitational framework, stated in the vocabulary of the experiment interface. It names six families of published primary reports to retrieve and read, together with the in-framework prediction content each comparison would still require, and it records that the primary-report and analysis layer (research label M20) is unsupplied and that no experiment item and no measured value occurs in this batch. It asserts no measurement, no dataset, no uncertainty value, no comparison result, no deviation, no empirical support for any postulate and no precision of any physical constant."
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-observation-and-analysis-architecture]
dependency_roles:
  def-gr-observation-and-analysis-architecture: formulation-prerequisite
sources:
  references:
    - title: "C. M. Will, The Confrontation between General Relativity and Experiment, Living Rev. Relativity 17 (2014) 4, arXiv:1403.7377v1: section 2.1.3 printed pp. 12-16 (gravitational redshift measurements comparing frequency standards at different locations), section 4.1.1 printed pp. 40-43 (deflection measurements by optical astrometry and by radio interferometry, with fitted deflection coefficients), section 4.1.2 printed pp. 43-44 (radar round-trip time-delay measurements, their ephemeris modelling and their least-squares analysis), section 4.2 printed pp. 45-46 (the perihelion advance of Mercury after subtraction of planetary perturbations and equinox precession), section 6.1 printed pp. 67-71 (binary pulsars analysed from pulse arrival times), section 7.1 printed pp. 77-78 (laser-interferometric observatories, strain sensitivity and pulsar timing arrays)"
      url: "https://arxiv.org/pdf/1403.7377"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 6 printed pp. 142-163 (gravitational waves and their sources), Ch. 7 printed pp. 164-200: the classic tests discussion on printed p. 181 (PDF p. 188), with the deflection and Shapiro time-delay narrative, and (7.56)-(7.62) on perihelion precession and the exact Schwarzschild frequency ratio, printed pp. 179-181 (PDF pp. 186-188)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 1.2.5 printed pp. 25-26 (the Pound-Rebka frequency-standard comparison as the first earthbound precision test), sections 5.2-5.3 printed pp. 209-230 (gravitational waves and their sources with the detector-response discussion)"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
verification:
  precheck: n/a
dependency_level: 17
---

## Statement

Scope-and-queue record for the empirical layer of the classical gravitational
framework, stated in the vocabulary of
[[def-gr-observation-and-analysis-architecture]].

(i) **Status of the empirical layer.** The source design of the experimental
interface reserves a definition of the observation and analysis architecture
(delivered by [[def-gr-observation-and-analysis-architecture]]) and this
primary-report research queue. No experiment item is authored in this batch and
no measured value is recorded anywhere in it. The research label M20 of the
source design, the primary-report and analysis layer, remains unsupplied:
before any experiment item can be authored on a destination, the actual primary
report must be retrieved and read in full, and the record must carry the
apparatus and preparation, the operational definitions of the measured
quantities, the calibration model, the sampling and error model, the treatment
of systematic effects, the measured values with their reported uncertainties,
and the source's own limitations. Secondary surveys and lecture notes describe
these report families and their analysis structure; they are not substitutes
for the primary reports and no number attributed to any of them is asserted
here.

(ii) **Report families.** The source design names six *primary-report search
destinations*, that is, families of published reports to retrieve and read in
full; no destination is evidence for any postulate. For each family the
in-framework model-side content that a comparison would consume is named by its
item, and the missing predictions are recorded as future obligations rather
than assumed.

1. *Redshift and clock comparisons.* Comparisons of identical frequency
   standards or clocks at rest at different locations in a gravitational field,
   and, as a separate subdestination, comparisons involving clocks transported
   along different worldlines (Will section 2.1.3; Carroll (7.61)-(7.62);
   Tong section 1.2.5). Model-side content available: the
   frequency-ratio and redshift readouts of
   [[def-gr-observation-and-analysis-architecture]] clause (b)1, realized for
   static observers by `pthm-gr-schwarzschild-stationary-redshift` and for
   comoving observers by `pthm-gr-flrw-cosmological-redshift`. These restricted
   theorems do not supply a prediction for transported clocks. Such a comparison
   must specify the transported and reference worldline segments of clause (a)
   and the events at which readings are compared. For clocks that separate and
   reunite, the comparison quantity is the difference, in seconds, between
   their proper-time increments over the two segments with common initial and
   final events, under the adopted ideal-clock rule. That accumulated-time
   comparison needs its own readout definition and trajectory-specific
   calculation; it is not a frequency-ratio readout of clause (b)1. A comparison
   by received signals instead uses clause (b)1 with the actual endpoint
   four-velocities and connecting null rays, together with a declared
   signal-transfer convention. Predictions for these transported-clock
   configurations must retain both metric and velocity dependence, including
   velocity-dependent clock rates; the two restricted redshift formulas cannot
   be substituted for them. These predictions remain future obligations.
   Every comparison also needs the apparatus, calibration, relevant line-shape
   modelling and statistical analysis of an actual report, as in (i).

2. *Light-propagation delay.* Measurements of the variation of round-trip
   travel times of signals passing near a massive body, analysed differentially
   against an ephemeris (Will section 4.1.2; Carroll printed p. 181). The
   interface readout is the radar readout of clause (b)2 of
   [[def-gr-observation-and-analysis-architecture]]. Model-side content: no
   in-framework prediction theorem for the round-trip delay exists in the
   library; a restricted prediction for a specified ray family and reflector
   worldline would have to be authored before any comparison.

3. *Light deflection.* Measurements of the change in angular separation of
   sources whose lines of sight pass near a massive body, by optical astrometry
   or radio interferometry, with a fitted deflection coefficient (Will section
   4.1.1; Carroll printed p. 181). The interface readout is the deflection
   readout of clause (b)3. Model-side content: no in-framework prediction
   theorem for the deflection angle of a specified ray exists; it is a future
   obligation.

4. *Perihelion advance.* Measurements of the residual precession of an
   almost-elliptical planetary orbit after the perturbations of the other
   bodies and the precession of the equinoxes have been modelled and removed,
   analysed over long astrometric baselines (Will section 4.2; Carroll
   (7.56)-(7.57)). The interface readout is the perihelion-advance readout of
   clause (b)4. Model-side content: the restricted Schwarzschild page supplies
   circular-orbit and photon-sphere predictions only
   (`pthm-gr-schwarzschild-circular-orbit-predictions`); a prediction of the
   advance of an eccentric orbit is a future obligation.

5. *Binary-system timing.* Analyses of pulse arrival-time series of
   relativistic binary pulsars, in which orbital and relativistic parameters
   are fitted to a timing model (Will section 6.1). The interface readout is
   the arrival-time readout of clause (b)5. Model-side content: the framework
   contains no binary dynamics, no gravitational-wave source model and no
   timing-model theorem; these are future obligations in a different module.

6. *Interferometric strain.* Measurements of strain by laser-interferometric
   observatories and proposals for pulsar timing arrays (Will section 7.1;
   Carroll Ch. 6; Tong sections 5.2-5.3). The interface readout is the strain
   readout of clause (b)6. Model-side content: the ideal two-body detector of
   `def-gr-linearized-wave-regime-and-detector-coupling` clause (c) and the
   response theorem `pthm-gr-plane-wave-tidal-detector-response`. What is still
   missing: a source model producing the waveform, the propagation of light in
   the instrument, readout and noise models, calibration, and a statistical
   analysis; without them no comparison is instantiable.

(iii) **Analysis obligations for every future comparison.** Each comparison
will require a declared comparison rule of clause (g) of
[[def-gr-observation-and-analysis-architecture]], an operational model whose
prediction map satisfies condition $(*)$, a data record with declared closed
bounds or separately defined source-reported estimates and scales, a declared
treatment of calibration and of the dominant systematic effects, and, for
reported data, the primary report's own sampling and error model. Agreement of
a prediction with a record tests the combined model, apparatus and analysis
assumptions; it is evidence, not a deductive proof of the model or of any
postulate.

(iv) **Qualifications any future comparison must carry.** The following are
part of the interface contract and must appear in any consuming item: (a) model
predictions are conditional on the adopted postulates and on the explicit
hypotheses of the prediction theorem; (b) observations are reported under the
source's conditions and limitations; (c) finite-sample agreement does not
establish a postulate or a model, and a finite hard-bound record does not by
itself determine a unique parameter; (d) a p-value would not be the probability
that a theory is false and a confidence level would not be a posterior
probability; (e) reported standard uncertainties are not hard bounds and carry
no coverage guarantee; (f) every conclusion inherits the calibration
dependence, systematic limitations and selection assumptions of the source.

(v) **Pointer.** The primary observations, when they are eventually recorded,
belong in experiment items with their own empirical contracts; the comparison
arithmetic belongs in a separate proved item. This remark is a queue and status
pointer only: it supplies no independent empirical conclusion and no certainty.
