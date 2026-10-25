---
id: exp-aqft-cms-boosted-susy-search-2025
kind: experiment
title: CMS search for supersymmetry with boosted hadronic and leptonic objects
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
dependency_level: 0
deps:
  - def-cm-measurement-model
  - def-cm-likelihood-function
  - def-cm-statistical-test-and-size
  - def-cm-confidence-set-and-coverage
dependency_roles:
  def-cm-measurement-model: operational-prerequisite
  def-cm-likelihood-function: formulation-prerequisite
  def-cm-statistical-test-and-size: formulation-prerequisite
  def-cm-confidence-set-and-coverage: formulation-prerequisite
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: Report of CMS-PAS-SUS-23-014, a Run-2 search for simplified supersymmetry models with boosted hadronic or leptonic objects. Its observed limits are conditional on the listed production and decay topologies and do not exclude supersymmetry as a framework.
empirical_result:
  observation: >-
    CMS reports no significant deviation from Standard Model expectations and
    model-specific 95% confidence-level cross-section limits. Representative
    observed mass reaches include gluinos up to 2.25 TeV (T5ttcc), 2.35 TeV
    (T5qqqqWH), and 2.30 TeV (T5bbbbZH); top squarks up to 1.45 TeV (T6ttZH);
    electroweakinos up to 1.05 TeV (TChiWZ) or 0.94 TeV (TChiWW); and the stated
    R-parity-violating bottom-squark and gluino reaches of 0.97 TeV (R2bbqqlv)
    and 1.82 TeV (R5ttbl).
  uncertainty: >-
    The signal-region fit includes normalization and shape information and
    source-correlated nuisance parameters. Correction-factor background
    uncertainties range from 10–50%; boosted-object tagging uncertainties
    range from 5–15%, Higgs-tag uncertainties from 10–20% in the stated Higgs
    modes, and theory uncertainties from 5–30% depending on process. The CLs
    limits use the asymptotic approximation.
  conditions: >-
    CMS 138 fb^-1 of pp collisions at 13 TeV collected in 2016–2018, with
    zero-lepton, isolated-lepton, or nonisolated-lepton channels selected by
    boosted-object categories and the MR and R^2 razor variables. Background
    correction factors are derived from control regions, applied to simulation,
    and checked in validation regions. Interpretations use the specific
    R-parity-conserving and R-parity-violating simplified models in the PAS.
  source_url: https://cms-results.web.cern.ch/cms-results/public-results/preliminary-results/SUS-23-014/index.html
sources:
  references:
    - title: CMS Collaboration, CMS-PAS-SUS-23-014, “Search for supersymmetry in hadronic and leptonic final states with highly Lorentz-boosted objects at √s = 13 TeV”
      url: https://cms-results.web.cern.ch/cms-results/public-results/preliminary-results/SUS-23-014/index.html
      locator: Official result page, abstract, summary, model figures, and result tables.
    - title: Full 31-page CMS Physics Analysis Summary CMS-PAS-SUS-23-014
      url: https://inspirehep.net/files/be754b4c35f11643a9b6f4cabf36deaa
      locator: "§§2–5 (razor variables, detector, data, and reconstruction); §§6–8 (selections, backgrounds, and systematic uncertainties); §§9–10 and Figs. 7–8 (likelihood and model limits); §11 summary."
verification:
  precheck: pending
---

## Setup

CMS-PAS-SUS-23-014 reports a search using proton-proton collisions at $\sqrt{s}=13$ TeV from 2016–2018, with integrated luminosities 36.3, 41.5, and 59.8 fb$^{-1}$ in the three years, totaling 138 fb$^{-1}$. CMS is a general-purpose detector with a superconducting solenoid; a silicon tracker and electromagnetic and hadronic calorimeters are inside the magnet, and muon detectors are outside it. A two-level trigger system selects events for storage. The search targets highly boosted top quarks, W, Z, or Higgs bosons reconstructed from hadronic decay products, or boosted leptonic jets. It uses zero-lepton, one-isolated-lepton, and one-nonisolated-lepton channels. A boosted object is one whose large momentum makes its decay products collimated in the detector. The analysis interprets data in specified simplified supersymmetry models with pair-produced gluinos, top squarks, bottom squarks, or electroweakinos, including both R-parity-conserving and R-parity-violating decay chains.

## Setup references

[Official CMS result page, abstract and summary](https://cms-results.web.cern.ch/cms-results/public-results/preliminary-results/SUS-23-014/index.html).

[CMS full PAS, §§1, 3–4: search models, detector, and data sample](https://inspirehep.net/files/be754b4c35f11643a9b6f4cabf36deaa).

Operational measurement-model and calibration language: [[def-cm-measurement-model]].

## Procedure

The analysis reconstructs particles with the CMS particle-flow method and forms anti-$k_T$ jets with radius parameter $R=0.4$. For each event it forms two “megajets” from the selected final-state objects and calculates the source-defined razor variables $M_R$ and $R^2$ from those megajets and the missing transverse momentum. These variables are used with lepton count, jet count, b-tagged-jet count, and boosted-object tags to define exclusive signal regions. For each dominant background, data-over-simulation correction factors are obtained from background-enriched control regions using simultaneous fits. The factors are applied to simulated background events in signal regions, and validation regions with similar but distinct kinematics check the modeling. “Control region” means an event selection used to constrain a background estimate; “validation region” is a separate selection used to test that estimate.

In the signal regions CMS performs a binned maximum-likelihood fit to templates of the signal and backgrounds, using both event-count normalization and the binned shape information. Systematic uncertainties are nuisance parameters with probability constraints; correlations across processes, regions, and data-taking years are propagated. Signal cross-section upper limits use the collaboration's asymptotic CL$_s$ procedure, with $CL_s=CL_{s+b}/CL_b$; a tested signal point is excluded at the reported 95% confidence level when $CL_s<0.05$. Expected limits are computed from the background-only test-statistic distribution. This is the PAS's reported inference procedure, not an independent fit or likelihood reconstruction.

## Procedure references

[CMS full PAS, §§2, 5–10: razor variables, object selection, background estimate, fit, and CL$_s$ procedure](https://inspirehep.net/files/be754b4c35f11643a9b6f4cabf36deaa).

Likelihoods for observed data: [[def-cm-likelihood-function]].

Statistical tests and their rejection regions: [[def-cm-statistical-test-and-size]].

Confidence sets and coverage levels: [[def-cm-confidence-set-and-coverage]].

## Observations

The collaboration reports that data are consistent with Standard Model expectations and that no significant deviations were observed. It reports the following observed mass reaches in the stated simplified models: gluino masses up to 2.25 TeV in T5ttcc, 2.35 TeV in T5qqqqWH, and 2.30 TeV in T5bbbbZH; top-squark masses up to 1.45 TeV in T6ttZH; nearly mass-degenerate chargino/neutralino masses up to 1.05 TeV in TChiWZ and 0.94 TeV in TChiWW; bottom-squark masses up to 0.97 TeV in R2bbqqlv; and gluino masses up to 1.82 TeV in R5ttbl. These values are 95% confidence-level limits as reported by CMS, and depend on each model's decay topology and other assumptions.

## Observations references

[Official CMS result page, Figures 7–8 and summary](https://cms-results.web.cern.ch/cms-results/public-results/preliminary-results/SUS-23-014/index.html).

[CMS full PAS, §10 and §11: observed model limits and summary](https://inspirehep.net/files/be754b4c35f11643a9b6f4cabf36deaa).

## Uncertainty

The PAS reports correction-factor uncertainties of 10–50% for backgrounds, with a comparable effect from the $Z\to\nu\bar\nu$+jets estimate. Jet-energy, jet-resolution, trigger, prefiring, and pileup uncertainties each contribute at the percent level or below; lepton scale-factor effects are at the few-percent level; b-tagging effects are about 5%; boosted-object tagging and mistagging effects are 5–15%; Higgs-tagging effects are 10–20% in Higgs final states; and theory uncertainties vary from 5–30% by process. These reported ranges are inputs to the collaboration's fit, not a reanalysis. The likelihood retains correlations for sources shared across bins and the relevant processes and years.

## Uncertainty references

[CMS full PAS, §8 and the uncertainty discussion in §9](https://inspirehep.net/files/be754b4c35f11643a9b6f4cabf36deaa).

Likelihood formulation: [[def-cm-likelihood-function]].

## Interpretation

The listed mass reaches apply to the PAS's named signal models, production modes, branching patterns, mass planes, and event selections. They are not a framework-wide exclusion of supersymmetry and do not establish a supersymmetry-breaking vacuum. The collaboration reports a CL$_s$ exclusion procedure; a 95% confidence-level limit is not a posterior probability that a model is true or false. No collision events, detector corrections, nuisance correlations, or limits are independently reconstructed here.

## Interpretation references

Confidence-set and coverage terminology: [[def-cm-confidence-set-and-coverage]].

Supersymmetry-breaking and collider-inference scope: [[qftx-susy-breaking-and-phenomenology]].
