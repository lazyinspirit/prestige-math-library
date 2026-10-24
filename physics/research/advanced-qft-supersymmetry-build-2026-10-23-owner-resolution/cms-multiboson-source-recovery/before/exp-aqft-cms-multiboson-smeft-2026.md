---
id: exp-aqft-cms-multiboson-smeft-2026
kind: experiment
title: CMS multiboson dimension-six SMEFT combination
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
dependency_level: 6
deps:
  - def-cm-measurement-model
  - def-cm-likelihood-function
  - def-cm-statistical-test-and-size
  - def-aqft-profile-likelihood-ratio
  - post-aqft-smeft-model
  - def-aqft-warsaw-basis-contract
dependency_roles:
  def-cm-measurement-model: operational-prerequisite
  def-cm-likelihood-function: formulation-prerequisite
  def-cm-statistical-test-and-size: formulation-prerequisite
  def-aqft-profile-likelihood-ratio: formulation-prerequisite
  post-aqft-smeft-model: physical-assumption
  def-aqft-warsaw-basis-contract: formulation-prerequisite
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: Summary-limited account of the CMS Preliminary PAS SMP-25-002 public result page. The full PAS PDF and detailed calibrations, selections, nuisance correlations, and numeric coefficient intervals were not available for inspection.
empirical_result:
  observation: >-
    The official public result page reports no significant deviation from the
    Standard Model in a combined fit of six CP-even bosonic dimension-six
    coefficients across ten CMS multiboson measurements.
  uncertainty: >-
    The public page says systematic uncertainties are propagated consistently
    by detector-level event reweighting, but does not expose the complete
    component uncertainty and nuisance-correlation treatment. No numerical
    coefficient intervals or uncertainty precision are recorded here because
    the full PAS PDF was inaccessible.
  conditions: >-
    Preliminary combination of 2016–2018 CMS proton-proton data at 13 TeV,
    corresponding to 138 fb^-1; ten listed VBS, VBF, diboson, and triboson
    measurements; binned profile likelihood using detector-level event
    reweighting of leading-order Monte Carlo predictions.
  source_url: https://cms-results.web.cern.ch/cms-results/public-results/preliminary-results/SMP-25-002/
sources:
  references:
    - title: CMS Collaboration, CMS-PAS-SMP-25-002, “Constraints on Effective Field Theory operators from multiboson production measurements at 13 TeV”
      url: https://cms-results.web.cern.ch/cms-results/public-results/preliminary-results/SMP-25-002/
      locator: Official public result page, abstract, channel/operator list, and summary of detector-level reweighting and binned profile-likelihood fit; retrieved page does not expose the full PAS text.
verification:
  precheck: pending
---

## Setup

This preliminary CMS combination uses proton-proton collision data collected during 2016–2018 at $\sqrt{s}=13\ {\rm TeV}$, with integrated luminosity $138\ {\rm fb}^{-1}$. The public abstract lists ten input measurements: six vector-boson-scattering channels (same-sign $WW$ in fully leptonic and lepton-plus-hadronic-tau final states, opposite-sign $WW$, $WZ$, and two hadronic-vector-boson channels $WV$ and $ZV$); two vector-boson-fusion channels $Wjj$ and $Zjj$; inclusive $W^+W^-$ diboson production; and triboson $VVV$ production without photons. The reported test is within the Standard Model effective field theory (SMEFT), with six CP-even bosonic dimension-six Warsaw-basis operators $O_W$, $O_{HW}$, $O_{HWB}$, $O_{H\square}$, $O_{HB}$, and $O_{HD}$.

## Setup references

[[post-aqft-smeft-model|Adopted SMEFT field content and operator-expansion conventions]]

[[def-aqft-warsaw-basis-contract|Warsaw-basis operator and coefficient conventions]]

[CMS Preliminary PAS SMP-25-002, official public result page](https://cms-results.web.cern.ch/cms-results/public-results/preliminary-results/SMP-25-002/)

## Procedure

The public abstract says the collaboration reweights leading-order Monte Carlo event by event to propagate effective-field-theory contributions to detector level and extracts coefficient constraints with a binned profile-likelihood fit. It describes single-coefficient, two-coefficient, and fully profiled six-dimensional scenarios. The page says systematic uncertainties are propagated consistently. The full PAS is unavailable here, so this record cannot specify the component selections, calibration details, nuisance correlations, full test calibration, or fit construction beyond those summary statements.

## Procedure references

[[def-cm-likelihood-function|Likelihood functions for observed data]]

[[def-aqft-profile-likelihood-ratio|Profile likelihood ratios with nuisance parameters]]

[CMS Preliminary PAS SMP-25-002, official public result page](https://cms-results.web.cern.ch/cms-results/public-results/preliminary-results/SMP-25-002/)

## Observations

The official result page reports that the combination observes no significant deviation from the Standard Model. This is the page's qualitative result summary; this item records no coefficient interval, best-fit value, or significance number.

## Observations references

[CMS Preliminary PAS SMP-25-002, official public result page](https://cms-results.web.cern.ch/cms-results/public-results/preliminary-results/SMP-25-002/)

## Uncertainty

The public page reports event-by-event detector-level reweighting and consistent propagation of systematic uncertainties but does not provide enough accessible detail to reproduce or state the nuisance correlations, full detector calibration, uncertainty breakdown, or observed and expected intervals. The PAS PDF linked from the page and CDS was blocked by an anti-bot interstitial during this retrieval pass. Numeric coefficient limits were therefore not copied from search snippets or page figures.

## Uncertainty references

[CMS Preliminary PAS SMP-25-002, official public result page and linked PAS record](https://cms-results.web.cern.ch/cms-results/public-results/preliminary-results/SMP-25-002/)

## Interpretation

This is a source-limited account of a preliminary fit over the six named bosonic coefficients and ten stated inputs. Its reported qualitative compatibility statement is conditional on the collaboration's detector response, reweighting, input selections, nuisance model, and likelihood calibration. It does not establish the SMEFT as a model of nature or imply a framework-wide conclusion.

## Interpretation references

[[aqft-eft-experimental-inference|Page-level scope and prerequisite interface]]

[CMS Preliminary PAS SMP-25-002, official public result page](https://cms-results.web.cern.ch/cms-results/public-results/preliminary-results/SMP-25-002/)
