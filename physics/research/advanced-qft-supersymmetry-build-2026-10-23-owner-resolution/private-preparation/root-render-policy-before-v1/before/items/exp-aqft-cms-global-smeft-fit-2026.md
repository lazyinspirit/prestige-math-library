---
id: exp-aqft-cms-global-smeft-fit-2026
kind: experiment
title: CMS global dimension-six SMEFT fit
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
  - def-cm-confidence-set-and-coverage
  - def-aqft-profile-likelihood-ratio
  - def-aqft-calibrated-pvalue
  - post-aqft-smeft-model
  - def-aqft-warsaw-basis-contract
dependency_roles:
  def-cm-measurement-model: operational-prerequisite
  def-cm-likelihood-function: formulation-prerequisite
  def-cm-statistical-test-and-size: formulation-prerequisite
  def-cm-confidence-set-and-coverage: formulation-prerequisite
  def-aqft-profile-likelihood-ratio: formulation-prerequisite
  def-aqft-calibrated-pvalue: formulation-prerequisite
  post-aqft-smeft-model: formulation-prerequisite
  def-aqft-warsaw-basis-contract: formulation-prerequisite
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: Source-reported CMS global dimension-six SMEFT fit combining seven CMS measurement sets and electroweak precision inputs. This item does not reanalyse the component datasets or claim that the fit tension is evidence for new physics.
empirical_result:
  observation: >-
    CMS reports a 2.5% compatibility p-value for its 43-direction fit, rising
    to 27% when the inclusive-jet input is removed. The collaboration
    attributes the main tension to inclusive-jet data and notes PDF sensitivity.
    These are conditional fit-calibration results, not probabilities that the
    Standard Model is true or false.
  uncertainty: >-
    The fit uses available experimental likelihoods and simplified likelihoods
    for other inputs, with nuisance correlations according to source
    availability. The source reports pseudoexperiment coverage studies with
    some slight under- or over-coverage; raw events and full component
    likelihoods are not independently reconstructed here.
  conditions: >-
    Seven CMS measurement sets at 13 TeV with 36.3 or 138 fb^-1, supplemented
    by electroweak precision observables; 64 individual dimension-six
    coefficients and a 43-direction principal-component fit. The main
    constraints are linear in dimension-six coefficients.
  source_url: https://arxiv.org/pdf/2504.02958v2
sources:
  references:
    - title: CMS Collaboration, “Combined effective field theory interpretation of Higgs boson, electroweak vector boson, top quark, and multi-jet measurements”
      url: https://arxiv.org/pdf/2504.02958v2
      locator: Sections 1–3 (input measurements and parameterization), likelihood and systematic-correlation sections, results and compatibility tests, and appendix pseudoexperiment coverage study.
    - title: "Larry Wasserman, All of Statistics: A Concise Course in Statistical Inference"
      url: https://sites.santafe.edu/~aaronc/shared/Wasserman_AllOfStatistics_BOOK.pdf
      locator: Chapter 10 §10.2, the null-tail p-value definition and distinction from the probability of a null hypothesis.
verification:
  precheck: pending
---

## Setup

The CMS collaboration combines seven CMS measurement sets with proton-proton collision data at $13\ {\rm TeV}$, using input-specific integrated luminosities of $36.3$ or $138\ {\rm fb}^{-1}$, and supplements them with electroweak precision observables. Integrated luminosity denotes the calibrated exposure of a dataset. The fit treats 64 individual dimension-six Wilson coefficients and also uses principal-component directions; 21 directions with no sensitivity in the selected inputs are fixed to zero, leaving the reported 43-direction fit.

## Setup references

[[post-aqft-smeft-model|Adopted SMEFT field content and operator-expansion conventions]]

[[def-aqft-warsaw-basis-contract|Warsaw-basis operator and coefficient conventions]]

[CMS global SMEFT fit, full article](https://arxiv.org/pdf/2504.02958v2)

## Procedure

The analysis uses the experimental likelihood where an input measurement supplies one and a simplified likelihood for other inputs. Nuisance parameters represent modeled experimental and theory uncertainties; their correlations are included according to the available input information. The fit profiles nuisance parameters, meaning it maximizes over them at each fixed Wilson-coefficient value. CMS reports constraints from linear-only dimension-six predictions as its main results and presents linear-plus-quadratic results separately. Its compatibility test uses the collaboration's stated likelihood-ratio statistic and calibration; the resulting $p$-value is conditional on these choices.

## Procedure references

[[def-cm-likelihood-function|Likelihood functions for observed data]]

[[def-aqft-profile-likelihood-ratio|Profile likelihood ratios with nuisance parameters]]

[[def-aqft-calibrated-pvalue|P-values under an explicit null calibration]]

[CMS global SMEFT fit, likelihood and nuisance treatment](https://arxiv.org/pdf/2504.02958v2)

## Observations

For its 43-direction fit, CMS reports a Standard Model compatibility $p$-value of $2.5\%$. The reported value rises to $27\%$ when the inclusive-jet input is removed. The paper identifies inclusive-jet data as the main source of the tension and notes sensitivity to parton-distribution-function choices. This is a fit-specific departure from the collaboration's null calibration, not evidence that new physics or a particular operator has been observed and not the probability that the Standard Model is false.

## Observations references

[[def-aqft-calibrated-pvalue|Null-calibrated tail probability and its interpretation]]

[CMS global SMEFT fit, compatibility results and inclusive-jet discussion](https://arxiv.org/pdf/2504.02958v2)

[Wasserman, statistical interpretation of p-values, full textbook §10.2](https://sites.santafe.edu/~aaronc/shared/Wasserman_AllOfStatistics_BOOK.pdf)

## Uncertainty

Experimental likelihood and nuisance-correlation details vary by input. The paper tests likelihood coverage with pseudoexperiments and reports slight under- or over-coverage in some tested cases; its confidence regions should not be described as exact nominal coverage for every direction. This record does not recover raw events, fit all component analyses anew, or perform a simultaneous PDF and SMEFT fit.

## Uncertainty references

[[def-cm-confidence-set-and-coverage|Confidence sets and their coverage property]]

[CMS global SMEFT fit, uncertainty model and pseudoexperiment coverage study](https://arxiv.org/pdf/2504.02958v2)

## Interpretation

The main coefficient constraints are linear in the dimension-six coefficients. The separately reported quadratic terms include squares of dimension-six amplitudes, but by themselves do not include the dimension-eight interference terms also contributing at order $\Lambda^{-4}$; they are not a complete prediction through that order. The $2.5\%$ compatibility result is driven mainly by one selected input and depends on the chosen PDF and likelihood treatment. It does not establish new physics or exclude the Standard Model as a model.

## Interpretation references

[[aqft-eft-experimental-inference|Page-level scope and prerequisite interface]]

[CMS global SMEFT fit, truncation and interpretation qualifications](https://arxiv.org/pdf/2504.02958v2)
