---
id: exp-aqft-cms-boosted-susy-search-2025
kind: experiment
title: CMS search for supersymmetry with boosted hadronic and leptonic objects
status: "published"
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
    and 1.82 TeV (R5ttbl). Figures 7–8 also show expected 95% confidence-level
    cross-section limits and mass contours, with expected-fluctuation bands;
    expected mass reaches are not numerically digitized in this report.
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
    boosted-object categories and the MR and R^2 razor variables. Signal models
    use the decay chains and mass relations plotted in Figures 1–2 and 7–8,
    including stable neutralino LSPs for R-parity-conserving models and unstable
    R-parity-violating neutralinos or top squarks. Background correction factors
    are derived from control regions, applied to simulation, and checked in
    validation regions.
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Setup

CMS-PAS-SUS-23-014 reports a search using proton-proton collisions at $\sqrt{s}=13$ TeV from 2016–2018, with integrated luminosities 36.3, 41.5, and 59.8 fb$^{-1}$ in the three years, totaling 138 fb$^{-1}$. CMS is a general-purpose detector with a 3.8 T superconducting solenoid, silicon tracker, electromagnetic and hadronic calorimeters inside the magnet, and muon detectors outside it. A two-level trigger system selects events for storage. A boosted object here is a high-momentum top quark, W, Z, or Higgs boson whose decay products are sufficiently collimated to be reconstructed as one large-radius jet, or a high-momentum leptonic system reconstructed as a jet containing a nonisolated lepton. The search uses zero-isolated-lepton, one-isolated-lepton, and leptonic-jet channels.

For the R-parity-conserving (RPC) benchmarks, the lightest neutralino $\tilde\chi^0_1$ is assumed stable and is the lightest supersymmetric particle (LSP); missing momentum can therefore include the two invisible neutralinos from pair production. The exact topologies and plotted mass parameterizations are:

- **T5ttcc:** pair-produced gluinos decay through $\tilde g\to t\tilde t_1^*$ and $\tilde t_1^*\to\bar c\tilde\chi^0_1$ (and charge conjugates); the stop mass is fixed at $m_{\tilde t_1}=m_{\tilde\chi^0_1}+20$ GeV.
- **T5qqqqWH:** pair-produced gluinos decay through $qq\tilde\chi^0_2$ and $qq'\tilde\chi^\pm_1$, followed by $\tilde\chi^0_2\to H\tilde\chi^0_1$ and $\tilde\chi^\pm_1\to W^\pm\tilde\chi^0_1$; the intermediate masses use $m_{\tilde\chi^0_2}=m_{\tilde\chi^\pm_1}=m_{\tilde g}-50$ GeV.
- **T5bbbbZH:** pair-produced gluinos decay through $b\bar b\tilde\chi^0_2$, followed by $\tilde\chi^0_2\to Z\tilde\chi^0_1$ or $H\tilde\chi^0_1$ with branching fractions $0.5$ and $0.5$; $m_{\tilde\chi^0_2}=m_{\tilde g}-50$ GeV.
- **T6ttZH:** pair-produced top squarks decay through $\tilde t_1\to t\tilde\chi^0_2$, followed by $\tilde\chi^0_2\to Z\tilde\chi^0_1$ or $H\tilde\chi^0_1$ with branching fractions $0.5$ and $0.5$; $m_{\tilde\chi^0_2}=(m_{\tilde t_1}+m_{\tilde\chi^0_1})/2$.
- **TChiWZ:** $\tilde\chi^\pm_1\tilde\chi^0_2$ production with $m_{\tilde\chi^\pm_1}=m_{\tilde\chi^0_2}$, followed by $\tilde\chi^\pm_1\to W^\pm\tilde\chi^0_1$ and $\tilde\chi^0_2\to Z\tilde\chi^0_1$.
- **TChiWW:** $\tilde\chi^+_1\tilde\chi^-_1$ production, with each chargino decaying to $W^\pm\tilde\chi^0_1$.

In Figure 7 the RPC contours are plotted against the parent-sparticle mass and $m_{\tilde\chi^0_1}$; for TChiWZ the parent-mass coordinate satisfies $m_{\tilde\chi^\pm_1}=m_{\tilde\chi^0_2}$, and for TChiWW it is $m_{\tilde\chi^\pm_1}$.

A branching fraction is the assumed fraction of a parent particle's decays that use a specified mode; the displayed 0.5/0.5 values encode equal fractions. The PAS diagrams do not state additional branching fractions for the T5qqqqWH or electroweakino benchmarks, so none is added here. A production cross section is the model's rate parameter with area units; multiplied by integrated luminosity it predicts produced pairs before detector acceptance and selection efficiency.

For the R-parity-violating (RPV) benchmarks, the LSP is unstable and its decay products are visible; missing transverse momentum is then attributed mainly to neutrinos. In **R2bbqqlv**, pair-produced bottom squarks decay to $b\tilde\chi^0_1$, and the neutralino decays through an RPV $\lambda'$ interaction to two quarks and a charged lepton $qq\ell$ or neutrino $qq\nu$; the mass plane is $(m_{\tilde b_1},m_{\tilde\chi^0_1})$. The PAS labels both final states but does not state an additional branching-fraction ratio. In **R5ttbl**, pair-produced gluinos decay to $t\tilde t_1^*$, followed by $\tilde t_1^*\to\bar b\ell$ (and charge conjugates); the mass plane is $(m_{\tilde g},m_{\tilde t_1})$. These are benchmark assumptions, not a parameterization of all supersymmetric models.

## Setup references

[Official CMS result page, abstract and summary](https://cms-results.web.cern.ch/cms-results/public-results/preliminary-results/SUS-23-014/index.html).

[CMS full PAS, §1, §§3–4, and Figs. 1–2, 7–8: benchmark decay chains and mass assumptions](https://inspirehep.net/files/be754b4c35f11643a9b6f4cabf36deaa).

Operational measurement-model and calibration language: [[def-cm-measurement-model]].

## Procedure

CMS reconstructs individual particles with particle flow (PF), which combines tracker, calorimeter, and muon-system measurements into a particle-level event description. Charged-hadron energies combine tracker momenta and calorimeter deposits; electron momenta combine tracker and electromagnetic-calorimeter measurements; muon momenta are measured from track curvature. The primary vertex is the reconstructed vertex associated with the hardest scattering. Pile-up means additional $pp$ interactions in the same or nearby bunch crossings. In beam-axis coordinates, $p_{\mathrm T}$ is transverse momentum, $\eta=-\ln\tan(\theta/2)$ is pseudorapidity, $\phi$ is azimuth, and $\Delta R=\sqrt{(\Delta\eta)^2+(\Delta\phi)^2}$ is angular distance in the $\eta$–$\phi$ plane.

Small-radius AK4 jets are anti-$k_{\mathrm T}$ jets with radius $R=0.4$ built from PF particles; their four-momentum is the vector sum of their constituents. Pile-up tracks are removed and an offset correction applied; simulation-derived jet corrections bring the mean reconstructed energy to particle level, and residual data/simulation differences are corrected using momentum balance in dijet, photon+jet, $Z$+jet, and multijet events. Missing transverse momentum is $\vec p_{\mathrm T}^{\,\mathrm{miss}}=-\sum_i\vec p_{\mathrm T,i}$ over reconstructed PF objects, corrected for jet-energy changes, with PUPPI (pile-up per particle identification) weights used to reduce pile-up dependence. The b-tagging classifier is DeepJet; the medium selection working point has about 70% $b$-jet efficiency and 1% gluon/light-flavour misidentification, while the looser veto point has about 85% efficiency and 10% misidentification.

Large-radius AK8 jets use anti-$k_{\mathrm T}$ with $R=0.8$. Their groomed mass is calculated with soft drop, which removes soft wide-angle radiation and reduces contamination from pile-up. ParticleNet is a deep neural-network tagger trained to distinguish hadronic W, Z, Higgs, and top decays from QCD jets; the soft-drop mass windows are 50–220 GeV for W/top, 70–105 GeV for Z, and 90–140 GeV for Higgs, with object-dependent jet thresholds between 200 and 300 GeV. A leptonic jet is an AK8 jet with $p_{\mathrm T}>300$ GeV, soft-drop mass above 50 GeV, and a nonisolated lepton within $\Delta R<0.8$; it is selected by this geometric and kinematic association, not by a separate neural-network tagger. If an AK8 jet satisfies several tag definitions, the analysis assigns one label using the priority leptonic jet, Higgs, top, then W/Z. Electron and muon identification and isolation scale factors, jet-energy/resolution corrections, and b-tag and boosted-object scale factors are applied to simulation. The b-tag and boosted-tag scale factors account for data/full-simulation and full/fast-simulation differences; their uncertainties are propagated as event weights or shape variations as appropriate.

The event trigger combines thresholds on $H_{\mathrm T}$ (the scalar sum of selected jet transverse momenta, with trigger thresholds between 900 and 1050 GeV), AK8-jet $p_{\mathrm T}$ (trigger threshold above 450 GeV), and missing transverse momentum (trigger thresholds 75–100 GeV). Its efficiency is not uniform over the selected phase space: CMS measures a two-dimensional efficiency map in $(p_{\mathrm T}^{\mathrm{miss}},H_{\mathrm T})$ from orthogonal single-electron or single-muon trigger samples and applies it as an event weight to simulated events. The preselection requires a good primary vertex, at least one AK8 jet, at least two AK4 jets, $M_R>800$ GeV, and $R^2>0.08$. A signal region (SR) is a selected event category chosen to enhance a signal hypothesis; it is defined here by exclusive hadronic, isolated-lepton, or leptonic-jet channels and by lepton and isolated-track counts, tagged-object multiplicities, jet and b-tag counts, and kinematic requirements. In the hadronic category, $\Delta\phi_R$ is the azimuthal separation of the two megajets and is required below 2.8; in the one-isolated-lepton category the transverse mass with missing momentum is required above 120 GeV; in the leptonic-jet category it is above 140 GeV and the azimuthal separation between the leading AK8 jet and the reconstructed lepton-plus-missing-momentum W candidate exceeds 0.8. Here $m_{\mathrm T}=\sqrt{2p_{\mathrm T}^{\ell}p_{\mathrm T}^{\mathrm{miss}}(1-\cos\Delta\phi(\ell,\vec p_{\mathrm T}^{\,\mathrm{miss}}))}$.

For each event CMS combines selected jets, and the channel-dependent selected leptons or photons, into two megajets by choosing the partition that minimizes the sum of their invariant masses. Let $p^{j_1}$ and $p^{j_2}$ be the resulting four-momenta, and let their transverse vectors be $\vec p_{\mathrm T}^{\,j_1}$ and $\vec p_{\mathrm T}^{\,j_2}$. The razor variables are

$$M_R=\sqrt{\left(|\vec p^{\,j_1}|+|\vec p^{\,j_2}|\right)^2-\left(p_z^{j_1}+p_z^{j_2}\right)^2},\qquad M_{\mathrm T}^R=\sqrt{\frac{p_{\mathrm T}^{\mathrm{miss}}\left(p_{\mathrm T}^{j_1}+p_{\mathrm T}^{j_2}\right)-\vec p_{\mathrm T}^{\,\mathrm{miss}}\cdot\left(\vec p_{\mathrm T}^{\,j_1}+\vec p_{\mathrm T}^{\,j_2}\right)}{2}},\qquad R^2=\left(\frac{M_{\mathrm T}^R}{M_R}\right)^2.$$

Thus $M_R$ and $M_{\mathrm T}^R$ have energy units and $R^2$ is dimensionless. These variables are calculated from reconstructed objects, not generator-level invisible momenta. The signal regions are binned in $(M_R-800\,\mathrm{GeV})(R^2-0.08)$ and also categorized by lepton multiplicity, jet multiplicity, b-tagged-jet multiplicity, and boosted-object tags.

The dominant backgrounds are top-quark, W+jets, QCD multijet, and $Z\to\nu\bar\nu$+jets processes. A control region (CR) is a selection made kinematically similar to a signal region but enriched in a particular background; a validation region (VR) is a separate selection used to check the background transfer after correction factors have been applied. For QCD, top, and W+jets, CMS obtains data/MC correction factors from simultaneous binned likelihood fits to mutually exclusive QCD-enriched Q1/Q2, top-enriched T1/T2, and W-enriched W1/W2 control regions. Each fit includes Poisson terms for data and simulated yields and correlations between fitted processes. To reduce sparse-bin effects, factors are applied sequentially: first versus $M_R\times R^2$, then versus AK4-jet multiplicity; these are determined separately for events with exactly one or at least two mass-tagged AK8 jets (soft-drop mass above 50 GeV). The factors multiply the corresponding simulated background yields in the signal regions.

There is no direct control selection for $Z\to\nu\bar\nu$+jets. Its central correction uses a photon-enriched CR, where the photon transverse-momentum vector is added to $\vec p_{\mathrm T}^{\,\mathrm{miss}}$ and overlapping photon-like jets are removed, plus a data/MC double ratio from a Drell–Yan dilepton CR and the same photon CR. Single-lepton W+jets-enriched CRs provide an independent cross-check; the difference from the photon/dilepton estimate is included as a systematic uncertainty. In the nonisolated-lepton channel, top and W+jets factors come from CRs that invert the $m_{\mathrm T}$ and lepton-to-jet azimuthal requirements, while the multijet factor is reused from the hadronic estimate; small backgrounds are taken from simulation. VRs are orthogonal to SRs: they include tagged W/Z/H/top objects in CR-like selections, alternative kinematics formed by reversing a CR requirement, and regions that invert the leptonic-jet $m_{\mathrm T}$ or azimuthal cuts. CMS reports data/prediction agreement within the total systematic-uncertainty bands in these validation regions.

In each signal region CMS fits binned signal and background templates using both yields and the $(M_R-800)(R^2-0.08)$ shape. In the profile-likelihood fit, a signal-strength parameter multiplies the predicted signal yields, and nuisance parameters represent uncertain detector, background, and theory inputs constrained by auxiliary information. At each tested signal strength the likelihood is maximized over the nuisance parameters; the specified correlations across processes, regions, and data-taking years are retained. The collaboration's asymptotic $CL_s$ method defines $CL_s=CL_{s+b}/CL_b$ from the signal-plus-background and background-only test-statistic tail probabilities and reports exclusion when $CL_s<0.05$. Expected limits use the background-only test-statistic distribution, with one- and two-standard-deviation expected-fluctuation bands. The item records the PAS procedure and does not independently reconstruct events, corrections, nuisance correlations, or the likelihood.

## Procedure references

[CMS full PAS, §§2, 5–10: razor variables, object selection, background estimate, fit, and CL$_s$ procedure](https://inspirehep.net/files/be754b4c35f11643a9b6f4cabf36deaa).

Likelihoods for observed data: [[def-cm-likelihood-function]].

Statistical tests and their rejection regions: [[def-cm-statistical-test-and-size]].

Confidence sets and coverage levels: [[def-cm-confidence-set-and-coverage]].

## Observations

The collaboration reports that data are consistent with Standard Model expectations and that no significant deviations were observed. Its observed 95% confidence-level mass reaches are: gluino masses up to 2.25 TeV in T5ttcc, 2.35 TeV in T5qqqqWH, and 2.30 TeV in T5bbbbZH; top-squark masses up to 1.45 TeV in T6ttZH; nearly mass-degenerate chargino/neutralino masses up to 1.05 TeV in TChiWZ and 0.94 TeV in TChiWW; bottom-squark masses up to 0.97 TeV in R2bbqqlv; and gluino masses up to 1.82 TeV in R5ttbl. Figures 7–8 also show observed and expected 95% confidence-level upper limits on production cross sections and their corresponding mass-contour boundaries, with expected-fluctuation bands. The expected contours use the background-only test-statistic distribution; the PAS does not tabulate numerical expected mass reaches and this report does not digitize them. The reported limits depend on each model's plotted decay and mass assumptions.

## Observations references

[Official CMS result page, Figures 7–8 and summary](https://cms-results.web.cern.ch/cms-results/public-results/preliminary-results/SUS-23-014/index.html).

[CMS full PAS, §10 and §11: observed model limits and summary](https://inspirehep.net/files/be754b4c35f11643a9b6f4cabf36deaa).

## Uncertainty

The PAS reports correction-factor uncertainties of 10–50% for backgrounds, with a comparable effect from the $Z\to\nu\bar\nu$+jets estimate. Jet-energy-scale, jet-energy-resolution, trigger, L1-prefiring, and pile-up uncertainties each contribute at the percent level or below; lepton scale-factor effects are at the few-percent level; b-tagging effects are about 5%; boosted-object tagging and mistagging effects are 5–15%; Higgs-tagging effects are 10–20% in Higgs final states; and theory uncertainties vary from 5–30% by process. Jet-energy and resolution variations are propagated to missing momentum; boosted jet mass-scale and resolution uncertainties are treated as shape variations. These reported ranges are inputs to the collaboration's fit, not a reanalysis. The likelihood retains correlations for sources shared across bins and the relevant processes and years.

## Uncertainty references

[CMS full PAS, §8 and the uncertainty discussion in §9](https://inspirehep.net/files/be754b4c35f11643a9b6f4cabf36deaa).

Likelihood formulation: [[def-cm-likelihood-function]].

## Interpretation

The observed and expected limits apply only to the PAS's named signal models, production modes, branching fractions, intermediate-mass relations, mass planes, and event selections. They are not a framework-wide exclusion of supersymmetry and do not establish a supersymmetry-breaking vacuum. The reported 95% confidence level labels the collaboration's asymptotic frequentist $CL_s$ procedure; it is not a posterior probability that a model is true or false, nor a general exact-coverage theorem. No collision events, detector corrections, nuisance correlations, or limits are independently reconstructed here.

## Interpretation references

Confidence-set and coverage terminology: [[def-cm-confidence-set-and-coverage]].

Supersymmetry-breaking and collider-inference scope: [[qftx-susy-breaking-and-phenomenology]].
