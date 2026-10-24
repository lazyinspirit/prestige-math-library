---
id: exp-aqft-atlas-global-smeft-fit-2026
kind: experiment
title: ATLAS global dimension-six SMEFT fit
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
  def-aqft-calibrated-pvalue: inference-prerequisite
  post-aqft-smeft-model: physical-assumption
  def-aqft-warsaw-basis-contract: formulation-prerequisite
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: Source-reported ATLAS Run 2 and LEP/SLD input measurements combined in the collaboration's 48-direction dimension-six SMEFT analysis. This record does not reprocess events, reconstruct component likelihoods, or audit every detector calibration.
empirical_result:
  observation: >-
    The collaboration reports no statistically significant overall deviation
    from the Standard Model in its global fit and quotes a 99% compatibility
    p-value for its specified test. It separately reports an electroweak
    direction pulled by the known A_FB^b and A_FB^c discrepancies. The quoted
    value is conditional on the collaboration's fit and calibration.
  uncertainty: >-
    Input statistical, experimental-systematic, and theory uncertainties and
    their reported correlations enter the fit. The source's event-overlap
    treatment and input-specific uncertainty models are retained; raw events
    and component likelihoods are not independently reanalysed here.
  conditions: >-
    ATLAS Run 2 proton-proton inputs at 13 TeV with input-specific integrated
    luminosities spanning about 36 to 140 fb^-1, together with LEP, SLD, and
    ATLAS electroweak precision inputs; a source-defined 48-direction
    dimension-six SMEFT parameterization and profile-likelihood analysis.
  source_url: https://arxiv.org/pdf/2604.21670v2
sources:
  references:
    - title: ATLAS Collaboration, “Effective field theory interpretation of ATLAS measurements involving the Higgs boson, electroweak bosons and the top quark”
      url: https://arxiv.org/pdf/2604.21670v2
      locator: Sections 2.5–2.7 (inputs and event overlaps), 3.1–3.2 (48-coefficient dimension-six parameterization and truncation), 4 (likelihood and nuisance treatment), and 5.3–5.4 (results and electroweak-pull qualification).
    - title: "Larry Wasserman, All of Statistics: A Concise Course in Statistical Inference"
      url: https://sites.santafe.edu/~aaronc/shared/Wasserman_AllOfStatistics_BOOK.pdf
      locator: Chapter 10 §10.2, the null-tail p-value definition and distinction from the probability of a null hypothesis.
verification:
  precheck: pending
---

## Setup

The ATLAS collaboration combines previously measured Higgs and simplified-template-cross-section observables, di-Higgs, diboson, vector-boson-fusion $Zjj$, high-mass Drell–Yan, top-quark distributions, and electroweak precision inputs. The proton-proton LHC inputs use 13 TeV Run 2 data and input-specific integrated luminosities spanning about $36$–$140\ {\rm fb}^{-1}$; the combined electroweak precision inputs also include LEP and SLD data. Integrated luminosity is the calibrated exposure assigned to a data sample, not a count of selected events. The input measurements retain their own observable definitions and selections.

The fit uses the Standard Model effective field theory (SMEFT): the Standard Model field content is supplemented by higher-dimension gauge-invariant operators. It fits 48 dimension-six Warsaw-basis coefficients or coefficient combinations. The reference normalization $\Lambda=1\ {\rm TeV}$ fixes how the reported coefficients are quoted; it is not a measured new-particle mass.

## Setup references

[[post-aqft-smeft-model|Adopted SMEFT field content and operator-expansion conventions]]

[[def-aqft-warsaw-basis-contract|Warsaw-basis operator and coefficient conventions]]

[ATLAS global SMEFT fit, full article](https://arxiv.org/pdf/2604.21670v2)

## Procedure

The collaboration constructs a joint likelihood from the input analyses, using Poisson terms for event-count inputs and Gaussian terms for measurement inputs where specified. It checks overlaps among event-based inputs using event identifiers, bootstrap studies, and selections; identified overlaps are removed or handled as stated in the article. Experimental and theoretical nuisance parameters encode systematic and theory uncertainties and are profiled subject to the source's constraints and correlation scheme. Profiling means maximizing the likelihood over nuisance parameters at each fixed coefficient value; the resulting profile-likelihood ratio compares that constrained maximum with the unrestricted maximum. The collaboration uses its stated one-dimensional likelihood-ratio calibration after checking the applicability of the asymptotic approximation. These are the reported analysis choices, not a reconstruction of the component likelihoods.

## Procedure references

[[def-cm-likelihood-function|Likelihoods as functions of parameters for observed data]]

[[def-aqft-profile-likelihood-ratio|Profile likelihood ratios with nuisance parameters]]

[[def-aqft-calibrated-pvalue|P-values under an explicit null calibration]]

[ATLAS global SMEFT fit, overlap, likelihood, and calibration sections](https://arxiv.org/pdf/2604.21670v2)

## Observations

The collaboration reports no statistically significant overall deviation from the Standard Model and quotes a $99\%$ compatibility $p$-value for its specified goodness-of-fit test. It also identifies an electroweak-precision coefficient direction, denoted $c^{[19]}_{HVV,Vff}$ in the article, as pulled by the known tension between the measured $A_{\rm FB}^{b,c}$ asymmetries and the Standard Model prediction. The overall fit statement therefore does not mean that every coefficient is individually within two standard deviations. A $p$-value is a tail probability under the stated null calibration, not the probability that the Standard Model is true.

## Observations references

[[def-aqft-calibrated-pvalue|Null-calibrated tail probability and its interpretation]]

[ATLAS global SMEFT fit, results and electroweak-pull discussion](https://arxiv.org/pdf/2604.21670v2)

[Wasserman, statistical interpretation of p-values, full textbook §10.2](https://sites.santafe.edu/~aaronc/shared/Wasserman_AllOfStatistics_BOOK.pdf)

## Uncertainty

The reported likelihood carries statistical, detector, theory, and other systematic uncertainties with the correlations adopted for the input measurements. The article describes checks and special handling for shared-event inputs. This item does not recreate the raw-event record, rerun detector reconstruction, validate every input calibration, or independently estimate a covariance matrix. The reported $p$-value and intervals inherit those source-level assumptions.

## Uncertainty references

[ATLAS global SMEFT fit, systematic uncertainties and correlation treatment](https://arxiv.org/pdf/2604.21670v2)

## Interpretation

The result is a source-defined constraint on the selected 48 coefficient directions and data inputs. The reported parameterization retains linear and quadratic dimension-six contributions while omitting dimension-eight interference terms at order $\Lambda^{-4}$; its quadratic fit is therefore not a complete expansion to that order. The fit neither proves the SMEFT model nor establishes or excludes new physics in general. Its statistical conclusions remain conditional on the chosen observables, input likelihoods, nuisance model, coefficient truncation, and stated asymptotic calibration.

## Interpretation references

[[aqft-eft-experimental-inference|Page-level scope and prerequisite interface]]

[ATLAS global SMEFT fit, coefficient truncation and result qualifications](https://arxiv.org/pdf/2604.21670v2)
