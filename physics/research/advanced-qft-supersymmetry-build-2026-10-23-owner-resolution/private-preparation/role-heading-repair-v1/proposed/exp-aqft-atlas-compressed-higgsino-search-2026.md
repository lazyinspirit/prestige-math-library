---
id: exp-aqft-atlas-compressed-higgsino-search-2026
kind: experiment
title: ATLAS search for compressed higgsinos with low-momentum tracks
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
physical_scope: ATLAS Run-2 searches for electroweak higgsino-like states with compressed mass splittings, interpreted in the collaboration's stated simplified model. The reported selections, compatibility statements, and 95% confidence-level limits do not establish a supersymmetry-breaking vacuum or constrain spectra outside that model.
empirical_result:
  observation: >-
    The collaboration reports no significant excess in either the displaced-track
    or one-lepton-plus-one-track search. The observed displaced-track limit reaches
    about 200 GeV in chargino mass at a 0.6 GeV splitting; the one-lepton-plus-one-track
    limit reaches 130 GeV at a 2 GeV splitting. Combined, the searches exclude
    chargino masses below 126 GeV at 95% confidence level over the reported
    0.3–2 GeV splitting range.
  uncertainty: >-
    The integrated luminosity uncertainty is 0.83%. Statistical, detector,
    background, and signal-model uncertainties enter a profile-likelihood fit
    as Gaussian-constrained nuisance parameters with the correlations stated
    by the collaboration. The exclusion uses the asymptotic CLs procedure.
  conditions: >-
    ATLAS 140 fb^-1 of proton-proton collisions at 13 TeV collected in 2015–2018;
    the displaced-track channel targets chargino-neutralino splittings about
    0.3–1 GeV, while the one-lepton-plus-one-track channel targets about 1–3 GeV.
    The simplified higgsino model assumes the neutralino-2 to neutralino-1 mass
    splitting is twice the chargino-1 to neutralino-1 splitting.
  source_url: https://arxiv.org/pdf/2511.20042v2
sources:
  references:
    - title: ATLAS Collaboration, “Search for higgsinos in compressed mass spectra using low-momentum tracks in pp collisions at √s = 13 TeV with the ATLAS detector”
      url: https://arxiv.org/pdf/2511.20042v2
      locator: "Abstract; §§2–3 (analysis strategy and detector); §§4–8 (data, reconstruction, selections, background estimates, and uncertainties); §9 and Fig. 15 (statistical interpretation and observed limits); §10 (conclusion)."
verification:
  precheck: pending
---

## Setup

ATLAS searched for electroweak production of higgsino-like states using 140 fb$^{-1}$ of $pp$ collisions at $\sqrt{s}=13$ TeV recorded from 2015 through 2018. A higgsino is the fermionic superpartner of a Higgs field. In the simplified signal model, the lightest neutralino $\tilde\chi^0_1$ is the lightest supersymmetric particle (LSP), and the chargino $\tilde\chi^\pm_1$ and next neutralino $\tilde\chi^0_2$ are nearby in mass. “Compressed” means their mass differences are small compared with their masses. The mass splitting is $\Delta m=m(\tilde\chi^\pm_1)-m(\tilde\chi^0_1)$; the model assumes $m(\tilde\chi^0_2)-m(\tilde\chi^0_1)=2\Delta m$. The ATLAS apparatus includes an inner tracking detector, solenoid, electromagnetic and hadronic calorimeters, and a muon spectrometer, with event selection initiated by missing-transverse-momentum triggers. Missing transverse momentum is the negative vector sum of reconstructed transverse momenta; its magnitude is denoted $E_T^{\rm miss}$. An initial-state-radiation (ISR) jet is a high-momentum jet emitted with the produced higgsino pair before their decays; its recoil helps make the invisible pair's missing transverse momentum triggerable.

## Setup references

[ATLAS full paper, §§1–4: model, data sample, detector, triggers, and definitions](https://arxiv.org/pdf/2511.20042v2).

Operational measurement model and calibration language: [[def-cm-measurement-model]].

## Procedure

Two non-overlapping strategies target different splittings. The displaced-track search targets $\Delta m$ about 0.3–1 GeV, where a chargino can travel roughly 0.1–10 mm before decaying to a low-momentum pion. It selects events with $E_T^{\rm miss}>275$ GeV, a central leading jet with $p_T>250$ GeV, one to four jets above 30 GeV, and azimuthal separation $\Delta\phi>0.4$ between each selected jet and the missing-momentum direction. Candidate charged tracks have $p_T<5$ GeV and a sizeable transverse impact parameter $d_0$, the shortest transverse-plane distance from the track to the beam line. Event-level and track-level neural-network scores define signal regions. The one-lepton-plus-one-track (1$\ell$1T) search targets $\Delta m$ about 1–3 GeV, with the simplified-model relation above. It requires $E_T^{\rm miss}>200$ GeV, a jet with $p_T>100$ GeV, no b-tagged jets, exactly one low-momentum electron or muon, and a second low-momentum track; the lepton threshold is 4.5–10 GeV for electrons or 3–10 GeV for muons, and track thresholds are channel-specific. Neural networks separate signal-like configurations. Background estimates combine simulation with control-region and data-driven estimates, followed by validation in separate regions.

For the reported comparisons, ATLAS fits data and Standard Model background predictions with a profile-likelihood method: nuisance parameters for systematic effects are constrained by Gaussian terms, and their reported correlations are retained. The collaboration uses the CL$_s$ hypothesis-testing procedure with its asymptotic approximation; a signal point is excluded when the reported CL$_s$ value is below 0.05. “Observed” limits use collision data, while “expected” limits use the background-only model. This item reports that procedure and does not reconstruct its likelihood or nuisance covariance.

## Procedure references

[ATLAS full paper, §§5–9, especially §§6–8 and the statistical interpretation in §9](https://arxiv.org/pdf/2511.20042v2).

Likelihoods for observed data: [[def-cm-likelihood-function]].

Statistical tests and their rejection regions: [[def-cm-statistical-test-and-size]].

Confidence sets and the meaning of coverage levels: [[def-cm-confidence-set-and-coverage]].

## Observations

The collaboration reports no significant excess over the Standard Model prediction in either search; all signal-region deviations are below 2 standard deviations. The observed displaced-track exclusion reaches about $m(\tilde\chi^\pm_1)=200$ GeV at $\Delta m=0.6$ GeV, and the one-lepton-plus-one-track exclusion reaches $m(\tilde\chi^\pm_1)=130$ GeV at $\Delta m=2$ GeV. Combining the searches, ATLAS reports exclusion of chargino masses below 126 GeV at 95% confidence level for $\Delta m$ from 0.3 to 2 GeV in the stated simplified higgsino model. These are collaboration-reported statistical inferences conditional on the analysis and model.

## Observations references

[ATLAS full paper, §9, Fig. 15, and §10](https://arxiv.org/pdf/2511.20042v2).

Confidence-set coverage terminology: [[def-cm-confidence-set-and-coverage]].

## Uncertainty

The reported integrated-luminosity uncertainty is 0.83%. The fit includes statistical, detector, background-estimation, and signal-model uncertainties as Gaussian-constrained nuisance parameters and retains the collaboration's correlations. The paper reports signal-region pulls below 2 standard deviations, with the largest listed deviations being −1.3 and +1.5 standard deviations in separate regions. This summary does not recompute those pulls, efficiencies, systematic variations, or the asymptotic CL$_s$ limits.

## Uncertainty references

[ATLAS full paper, §8 (systematic uncertainties), §9 (fits and signal-region comparisons), and Table 14](https://arxiv.org/pdf/2511.20042v2).

Likelihood and nuisance-parameter framework: [[def-cm-likelihood-function]].

## Interpretation

The 95% confidence-level limits constrain only the electroweak higgsino-like simplified spectra, decay assumptions, mass-splitting relation, selections, detector model, and likelihood used by ATLAS. They do not establish or rule out supersymmetry as a framework, establish supersymmetry breaking, or constrain other spectra and decay patterns. The analysis reports a frequentist exclusion procedure, not a posterior probability that a model is true or false.

## Interpretation references

The 95% confidence-set convention: [[def-cm-confidence-set-and-coverage]].

Supersymmetry-breaking and collider-inference scope: [[qftx-susy-breaking-and-phenomenology]].
