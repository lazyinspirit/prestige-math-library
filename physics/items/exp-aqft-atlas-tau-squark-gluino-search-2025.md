---
id: exp-aqft-atlas-tau-squark-gluino-search-2025
kind: experiment
title: ATLAS tau, jets, and missing-momentum squark and gluino search
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
dependency_level: 2
deps:
  - def-cm-measurement-model
  - def-cm-likelihood-function
  - def-cm-statistical-test-and-size
  - def-cm-confidence-set-and-coverage
  - def-aqft-profile-likelihood-ratio
  - def-aqft-calibrated-pvalue
  - def-aqft-cls-exclusion-ratio
dependency_roles:
  def-cm-measurement-model: operational-prerequisite
  def-cm-likelihood-function: formulation-prerequisite
  def-cm-statistical-test-and-size: formulation-prerequisite
  def-cm-confidence-set-and-coverage: formulation-prerequisite
  def-aqft-profile-likelihood-ratio: formulation-prerequisite
  def-aqft-calibrated-pvalue: formulation-prerequisite
  def-aqft-cls-exclusion-ratio: formulation-prerequisite
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: ATLAS search for R-parity-conserving simplified squark and gluino models in tau, jets, and missing-transverse-momentum final states. The reported contours and local compatibility value apply only to the source's stated spectra, branching fractions, and analysis.
empirical_result:
  observation: >-
    The paper reports no significant overall deviation and a local p-value of
    0.00058 (3.2 standard deviations) at its GG(1300,1200) benchmark. Its
    observed 95% CLs machine-learning contours reach gluino masses up to
    2.25 TeV and lightest-neutralino masses up to 1.35 TeV for gluino models;
    for squark models the machine-learning lightest-neutralino reach is
    0.85 TeV. The cut-and-count contours reach gluino masses up to 2.3 TeV
    and squark masses up to 1.7 TeV for models with a 0.1 TeV
    lightest-neutralino. These values are model- and strategy-specific.
  uncertainty: >-
    The analysis profiles source-correlated experimental and background
    nuisance parameters in a binned likelihood, validates its asymptotic
    approximation against simulation, and reports integrated-luminosity
    uncertainties of 0.83% for 13 TeV data and 2.0% for 13.6 TeV data.
    Theory cross-section uncertainty is shown as a variation of contours
    rather than profiled as an experimental nuisance in the fit.
  conditions: >-
    ATLAS 140 fb^-1 at 13 TeV (2015–2018) plus 51.8 fb^-1 at 13.6 TeV
    (2022–2023), three orthogonal hadronic-tau/lepton channels, and the
    collaboration's R-parity-conserving simplified spectra with its stated
    intermediate-mass, branching-fraction, and narrow-width assumptions.
  source_url: https://arxiv.org/html/2507.00296v2
sources:
  references:
    - title: ATLAS Collaboration, “Search for squarks and gluinos in pp collisions at √s = 13 TeV and 13.6 TeV in events with τ-leptons, jets and missing transverse momentum using the ATLAS detector”
      url: https://arxiv.org/html/2507.00296v2
      locator: Sections 2–4 (simplified models, data, reconstruction, trigger and selections), 7–8 (backgrounds, statistical model and nuisance correlations), and 9 (local fit, CLs contours, and conclusions).
    - title: "Larry Wasserman, All of Statistics: A Concise Course in Statistical Inference"
      url: https://sites.santafe.edu/~aaronc/shared/Wasserman_AllOfStatistics_BOOK.pdf
      locator: Chapter 10 §10.2, the null-tail p-value definition and distinction from the probability of a null hypothesis.
verification:
  precheck: pending
---

## Setup

ATLAS searches for pair-produced gluinos or first- and second-generation left-handed squarks in final states with hadronically decaying tau leptons, jets, and missing transverse momentum. The dataset combines $140\ {\rm fb}^{-1}$ of $13\ {\rm TeV}$ proton-proton data from 2015–2018 with $51.8\ {\rm fb}^{-1}$ at $13.6\ {\rm TeV}$ from 2022–2023. The three orthogonal channels require (1) exactly one hadronically decaying tau and no electron or muon, (2) exactly one hadronic tau and at least one electron or muon, or (3) at least two hadronic taus. Events are selected using missing-transverse-momentum triggers with thresholds between 70 and 115 GeV; their reported efficiencies are typically 80–90% and about 40% in the most compressed signal region.

The interpretation adopts $R$-parity-conserving simplified models, where $R=(-1)^{3(B-L)+2s}$ is a conserved $Z_2$ quantum number, $B$ and $L$ denote baryon and lepton number, $s$ denotes spin, Standard Model particles are even, and their superpartners are odd. The gluino may decay through a virtual squark; squark decays proceed through the lightest chargino or next-to-lightest neutralino. The tau-slepton and tau-sneutrino are co-next-to-lightest supersymmetric particles. The lightest neutralino is assumed bino-like, meaning predominantly the superpartner of the hypercharge gauge boson, and the lightest chargino and next-to-lightest neutralino are wino-like, meaning predominantly superpartners of weak gauge bosons. The source fixes
$$m(\tilde\chi_1^\pm)=m(\tilde\chi_2^0)=\frac{m(\tilde g\text{ or }\tilde q)+m(\tilde\chi_1^0)}{2},\qquad m(\tilde\tau)=m(\tilde\nu_\tau)=\frac{m(\tilde\chi_1^\pm)+m(\tilde\chi_1^0)}{2}.$$
The chargino and next-to-lightest-neutralino branching fractions to tau-slepton or tau-sneutrino modes are set to $50\%$, other supersymmetric couplings are set to zero, and the narrow-width approximation treats intermediate resonances as on-shell because their widths are assumed small relative to their masses. These choices define the reported simplified-model contours.

## Setup references

[[def-cm-measurement-model|Measurement, operational observable, and calibration model]]

[ATLAS tau search, model and dataset sections](https://arxiv.org/html/2507.00296v2)

## Procedure

The reported observables include missing transverse momentum, defined as the magnitude of the negative vector sum of reconstructed electrons, muons, hadronic taus, jets, and a track-based soft term, along with channel-specific kinematic variables. Jets are reconstructed with the anti-$k_t$ algorithm at radius $R=0.4$ and calibrated using simulation and in-situ measurements. Hadronic tau candidates are seeded by anti-$k_t$ jets, calibrated with a dedicated visible-tau energy-scale procedure, and selected with one or three tracks and a medium identification working point. Light leptons and jets have source-defined identification, overlap-removal, and kinematic selections. The analysis estimates jets misidentified as tau leptons with a data-driven fake-factor method and uses both cut-and-count and machine-learning strategies.

For each strategy the collaboration fits selected binned data with a likelihood containing Poisson event-count terms and constrained systematic and background nuisance parameters; source-stated correlations are retained. The statistic is a profile likelihood ratio, formed by maximizing over nuisance parameters at fixed signal-model parameters and comparing with the unrestricted fit. ATLAS uses the asymptotic approximation after validating it against simulated ensembles. It excludes a tested signal point when the source-defined $CL_s$ ratio falls below $0.05$; $CL_s$ is the signal-plus-background tail probability divided by the corresponding background tail probability under the same source-defined test ordering, not a posterior probability or exact coverage statement.

## Procedure references

[[def-cm-likelihood-function|Likelihood functions for observed data]]

[[def-aqft-profile-likelihood-ratio|Profile likelihood ratios with nuisance parameters]]

[[def-aqft-cls-exclusion-ratio|Source-defined CLs exclusion ratio and its limits]]

[ATLAS tau search, reconstruction, statistical model, and asymptotic validation](https://arxiv.org/html/2507.00296v2)

## Observations

The collaboration reports no statistically significant overall deviation from the background-only expectation. Its most compatible machine-learning benchmark, labelled GG(1300,1200), has a local $p$-value $0.00058$, quoted as $3.2$ standard deviations; this is a local value at the tested benchmark, not an overall search significance. The observed $95\%$ $CL_s$ machine-learning contours reach gluino masses up to $2.25\ {\rm TeV}$ and lightest-neutralino masses up to $1.35\ {\rm TeV}$ for gluino models; for squark models, the machine-learning lightest-neutralino reach is $0.85\ {\rm TeV}$. The cut-and-count contours reach gluino masses up to $2.3\ {\rm TeV}$ and squark masses up to $1.7\ {\rm TeV}$ for models with a $0.1\ {\rm TeV}$ lightest-neutralino.

## Observations references

[[def-aqft-calibrated-pvalue|Null-calibrated tail probability and its interpretation]]

[[def-aqft-cls-exclusion-ratio|CLs ratio used for the reported exclusions]]

[ATLAS tau search, fit results and observed exclusion contours](https://arxiv.org/html/2507.00296v2)

[Wasserman, statistical interpretation of p-values, full textbook §10.2](https://sites.santafe.edu/~aaronc/shared/Wasserman_AllOfStatistics_BOOK.pdf)

## Uncertainty

The fit includes the collaboration's statistical, detector, background, and theoretical nuisance constraints with source-reported correlations. The reported integrated-luminosity uncertainties are $0.83\%$ for the 13 TeV sample and $2.0\%$ for the 13.6 TeV sample. The theory cross-section uncertainty is displayed as a contour variation rather than profiled as an experimental nuisance. The observed contour uses an asymptotic approximation checked against simulated ensembles. This record does not reprocess collision events or independently reconstruct the likelihood, object calibrations, or nuisance covariance.

## Uncertainty references

[[def-cm-confidence-set-and-coverage|Confidence sets and their coverage property]]

[ATLAS tau search, systematic uncertainties and validation](https://arxiv.org/html/2507.00296v2)

## Interpretation

The local excess, $CL_s$ exclusions, and mass reaches are conditional on the three selected channels, the two analysis strategies, and the particular $R$-parity-conserving simplified spectra, midpoint mass relations, branching fractions, and narrow-width assumptions stated above. They do not rule out supersymmetry as a framework, establish a supersymmetry-breaking vacuum, or constrain spectra and decay patterns outside those parameterizations.

## Interpretation references

[[qftx-susy-breaking-and-phenomenology|Supersymmetry-breaking and source-qualified collider interpretation]]

[ATLAS tau search, simplified-model interpretation and conclusion](https://arxiv.org/html/2507.00296v2)
