---
id: exp-aqft-atlas-compressed-higgsino-search-2026
kind: experiment
title: ATLAS search for compressed higgsinos with low-momentum tracks
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
physical_scope: ATLAS Run-2 searches for electroweak higgsino-like states with compressed mass splittings, interpreted in the collaboration's stated simplified model. The reported selections, compatibility statements, and 95% confidence-level limits do not establish a supersymmetry-breaking vacuum or constrain spectra outside that model.
empirical_result:
  observation: >-
    The collaboration reports no significant excess in either the displaced-track
    or one-lepton-plus-one-track search. The observed displaced-track limit reaches
    about 200 GeV in chargino mass at a 0.6 GeV splitting; the one-lepton-plus-one-track
    limit reaches 130 GeV at a 2 GeV splitting. Combined, the searches exclude
    chargino masses below 126 GeV at 95% confidence level over the reported
    0.3–2 GeV splitting range. Figure 15 also gives observed and expected 95%
    confidence-level exclusion contours for both channels. The expected contours
    are displayed graphically and are not numerically digitized in this report.
  uncertainty: >-
    The integrated luminosity uncertainty is 0.83%. Systematic uncertainties
    enter the profile likelihood as Gaussian-constrained nuisance parameters,
    with the correlations stated by the collaboration. Finite simulation samples
    and control-region data also contribute statistical uncertainty; no common
    constraint distribution for these statistical contributions is asserted here.
    The exclusion uses the asymptotic CLs procedure.
  conditions: >-
    ATLAS 140 fb^-1 of proton-proton collisions at 13 TeV collected in 2015–2018;
    a stable lightest neutralino in the R-parity-conserving simplified higgsino
    model; the displaced-track search covers chargino-neutralino splittings near
    0.3–1 GeV, and the one-lepton-plus-one-track classifier is evaluated at
    neutralino-2 to neutralino-1 splittings of 1, 1.5, 2, 3, 4, and 5 GeV.
    The model fixes the neutralino-2 to neutralino-1 splitting at twice the
    chargino-1 to neutralino-1 splitting used on the exclusion plane.
  source_url: https://arxiv.org/pdf/2511.20042v2
sources:
  references:
    - title: ATLAS Collaboration, “Search for higgsinos in compressed mass spectra using low-momentum tracks in pp collisions at √s = 13 TeV with the ATLAS detector”
      url: https://arxiv.org/pdf/2511.20042v2
      locator: "Abstract; §§2–3 (analysis strategy and detector); §§4–8 (data, reconstruction, selections, background estimates, and uncertainties); §9 and Fig. 15 (statistical interpretation and observed limits); §10 (conclusion)."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Setup

ATLAS searched for direct electroweak pair production of higgsino-like states in $140\,\mathrm{fb}^{-1}$ of $pp$ collisions at $\sqrt{s}=13$ TeV recorded from 2015 through 2018. A higgsino is the fermionic superpartner of a Higgs field. The simplified model is R-parity conserving and takes the lightest neutralino $\tilde\chi^0_1$ to be stable and the lightest supersymmetric particle (LSP); the lightest chargino $\tilde\chi^\pm_1$ and next neutralino $\tilde\chi^0_2$ are nearby in mass. Define the chargino splitting $\delta_\pm=m(\tilde\chi^\pm_1)-m(\tilde\chi^0_1)$ and neutralino splitting $\delta_0=m(\tilde\chi^0_2)-m(\tilde\chi^0_1)$. The benchmark fixes $\delta_0=2\delta_\pm$, or equivalently places $m(\tilde\chi^\pm_1)$ halfway between the neutralino masses. “Compressed” here means these mass differences are small relative to the sparticle masses.

The displaced-track search targets $\delta_\pm\approx0.3$–$1$ GeV, for which the model predicts $\tilde\chi^\pm_1\to\tilde\chi^0_1\pi^\pm$ with a chargino mean proper decay length $c\tau$ of order $0.1$–$10$ mm; the charged pion can therefore be reconstructed as a low-momentum track with nonzero transverse impact parameter. The one-lepton-plus-one-track (1$\ell$1T) search targets the prompt decay $\tilde\chi^0_2\to\tilde\chi^0_1 Z^*\to\tilde\chi^0_1\ell^+\ell^-$, with $\ell=e$ or $\mu$. Its parameterised neural network uses $\theta=\delta_0$ and is evaluated at $1$, $1.5$, $2$, $3$, $4$, and $5$ GeV; plotted limits are expressed against $\delta_\pm$ using $\delta_0=2\delta_\pm$. For 1$\ell$1T, ATLAS simulates $\tilde\chi^0_2\tilde\chi^\pm_1$ and $\tilde\chi^0_2\tilde\chi^0_1$ production; the displaced-track samples additionally include $\tilde\chi^0_1\tilde\chi^\pm_1$ and $\tilde\chi^+_1\tilde\chi^-_1$. Identical-neutralino pair modes are omitted because their cross sections are negligible in the higgsino-like limit.

The apparatus used an inner tracking detector, solenoid, electromagnetic and hadronic calorimeters, and muon spectrometer. Events were recorded with missing-transverse-momentum triggers, supplemented by single-electron or single-muon triggers in background-control samples. In beam-axis coordinates, $p_{\mathrm T}$ is momentum transverse to the beam, $\alpha_{\mathrm{pol}}$ is the polar angle, $\phi$ the azimuth, and pseudorapidity is $\eta=-\ln\tan(\alpha_{\mathrm{pol}}/2)$; the angular distance used for object matching is $\Delta R=\sqrt{(\Delta\eta)^2+(\Delta\phi)^2}$. Here $\vec p_{\mathrm T}^{\,\mathrm{miss}}$ is the negative vector sum of the transverse momenta of the preselected electrons, muons, jets, and photons plus a soft term formed from primary-vertex tracks not associated with those objects; $E_{\mathrm T}^{\mathrm{miss}}=|\vec p_{\mathrm T}^{\,\mathrm{miss}}|$. The soft term is chosen to reduce pile-up dependence, and the object terms use the calibrated lepton and jet momenta. An ISR jet is a reconstructed jet from initial-state QCD radiation that recoils against the produced higgsino system. ATLAS does not identify a jet's ISR origin event by event: the search selects the recoil topology using high $E_{\mathrm T}^{\mathrm{miss}}$ and a high-$p_{\mathrm T}$ leading jet.

## Setup references

[ATLAS full paper, §§1–4: model, data sample, detector, triggers, and definitions](https://arxiv.org/pdf/2511.20042v2).

Operational measurement model and calibration language: [[def-cm-measurement-model]].

## Procedure

Charged-particle tracks are built from inner-detector hits, with track kinematics defined at the perigee (the point of closest approach to the beam line); tracks down to $p_{\mathrm T}=0.5$ GeV are reconstructed. The primary vertex is the reconstructed interaction vertex with the largest sum of squared associated-track transverse momenta. Electrons and muons are selected with channel-specific identification and isolation criteria. Small-radius jets are anti-$k_{\mathrm T}$ jets with radius parameter $R=0.4$ formed from particle-flow objects. Preselected jets have calibrated $p_{\mathrm T}>20$ GeV and $|\eta|<4.5$; tight analysis jets satisfy $|\eta|<2.8$. To suppress pile-up, jets with $p_{\mathrm T}<60$ GeV and $|\eta|<2.5$ pass the tight jet-vertex-tagger requirement. A $b$-tagged jet is a preselected jet with $p_{\mathrm T}>20$ GeV and $|\eta|<2.5$ classified by the DL1r algorithm as likely to contain a $b$-hadron decay; its working point has 85% efficiency for simulated $t\bar t$ jets. Simulation is reweighted with electron, muon, $b$-tag, and trigger efficiency scale factors, where a scale factor is the data-measured efficiency divided by its simulated value. For a track impact parameter $d_0$, its significance is $S(d_0)=|d_0|/\sigma(d_0)$, where $\sigma(d_0)$ is its estimated resolution; a secondary vertex is a reconstructed decay vertex displaced from the primary interaction vertex. The missing-momentum trigger is above 95% efficient for offline-calibrated $E_{\mathrm T}^{\mathrm{miss}}>200$ GeV.

For 1$\ell$1T, tracks with $p_{\mathrm T}>0.5$ GeV and $|\eta|<2.5$ are preselected for electron identification; the muon-track candidates use $1\le p_{\mathrm T}\le5$ GeV and $|\eta|<1.6$. Separate neural-network taggers identify low-momentum electron tracks and muon tracks from the tracker and calorimeter information. ATLAS uses tag-and-probe calibration, in which one identified object tags an event and a paired object probes the identification efficiency, for electron tracks in a sample of $Z\to e^+e^-\gamma$ events, using $\Delta R$ between the candidate and photon to separate real low-momentum electrons from misidentified tracks, and calibrates muon-track identification with $J/\psi\to\mu^+\mu^-$ events, fitting the dimuon mass with Crystal Ball and quadratic components. In each case the efficiency scale factor is the measured data efficiency divided by the simulated efficiency; the paper applies these factors to signal simulation and minor simulated backgrounds in this channel.

The recoil and selection procedure uses the calibrated $\vec p_{\mathrm T}^{\,\mathrm{miss}}$ defined above. Because the two invisible LSPs can have nearly cancelling transverse momenta when the higgsino pair is produced without recoil, the selected high-$E_{\mathrm T}^{\mathrm{miss}}$ event topology requires a hard jet from initial-state radiation. The displaced-track channel requires $E_{\mathrm T}^{\mathrm{miss}}>275$ GeV, a central leading jet with $p_{\mathrm T}>250$ GeV and $|\eta|<2.4$, one to four jets with $p_{\mathrm T}>30$ GeV, $\min_j\Delta\phi(\vec p_{\mathrm T}^{\,\mathrm{miss}},\vec p_{\mathrm T,j})>0.4$, no preselected lepton in the signal region, and at least one track. Here $\Delta\phi$ is the azimuthal angle between the indicated transverse vectors. Candidate tracks have $p_{\mathrm T}<5$ GeV and a displaced transverse impact parameter $d_0$, the shortest transverse-plane distance from the track to the beam line. An event-level classifier uses global event kinematics; a track-level classifier uses each track's kinematics, impact-parameter significance, isolation, and secondary-vertex information. The track with the highest track score is retained. Four mutually exclusive signal regions are defined by thresholds on the event and track scores.

The 1$\ell$1T channel requires $E_{\mathrm T}^{\mathrm{miss}}>200$ GeV, at least one jet with $p_{\mathrm T}>100$ GeV, no $b$-tagged jet with $p_{\mathrm T}>20$ GeV, exactly one tight electron or muon with $4.5\le p_{\mathrm T}<10$ GeV or $3\le p_{\mathrm T}<10$ GeV, respectively, and at least one additional low-momentum track. The track and lepton are selected as an opposite-charge pair consistent with $Z^*$ decay. A parameterised neural network (pNN) maps the event's 16 kinematic inputs and the chosen value $\theta=\delta_0$ to a signal-like score between zero and one; a second low-$p_{\mathrm T}$ lepton-track score rejects hadrons and fake tracks. Signal-region requirements include pNN score above $0.95$, missing-momentum-to-$Z^*$ azimuthal separation below $1.0$, and lepton-track identification-score thresholds above $0.8$ for electrons or $0.6$ for muons.

The displaced-track background model treats $Z\to\nu\bar\nu$+jets and $W\to\tau\nu$+jets as leading sources, with diboson and $W\to\ell\nu$+jets also included. Simulation indicates that about 40% of the selected candidate tracks in these signal regions arise from pile-up. A control region (CR) is an event selection used to constrain a background estimate; the CRs are defined to enrich a background while retaining kinematic similarity to the signal region (SR). Mutually orthogonal CR-DT-1$\ell$, CR-DT-2$\ell$, and CR-DT-1$e$1$\mu$ samples use single-lepton triggers and missing momentum with the selected leptons treated as invisible; their lepton multiplicity separates $W$, $Z$, and diboson components. A low-missing-momentum CR supplies a track reweighting correction. The $Z\to\ell^+\ell^-$ control sample constrains the $Z\to\nu\bar\nu$ normalisation under the stated transfer assumption. A simultaneous fit to the CR kinematic distributions determines event normalisation factors and track-level reweighting factors. A validation region (VR) is a separate selection used to check these corrections without using it to set the background normalisations for the target SR. The DT event VR has high event-classifier score but vetoes high track score; the DT track VR has high track score but low event score and moderate $E_{\mathrm T}^{\mathrm{miss}}$ of 325–500 GeV; the DT-muon VR adds a tight muon and missing momentum with the muon treated as invisible; and the DT-$\tau$ VR raises the track threshold to 8 GeV to test $W\to\tau\nu$ modelling.

For 1$\ell$1T, the dominant background is $W$+jets with a genuine selected lepton and a fake low-$p_{\mathrm T}$ lepton-track; smaller prompt-track backgrounds are estimated from simulation. A fake track is one that passes the candidate selection but is not a prompt lepton from the signal decay. The high-score signal-like ($\alpha$) region requires pNN score $>0.95$ and $\Delta\phi(\vec p_{\mathrm T}^{\,\mathrm{miss}},Z^*)<1.0$; the low-score ($\gamma$) region has pNN score $<0.4$. In each lepton channel and track-$p_{\mathrm T}$ bin, ATLAS subtracts simulated prompt-track yields from the low-pNN pass-ID and fail-ID control regions and defines a transfer factor as the remaining pass-track-ID yield divided by the fail-track-ID yield. These transfer factors are measured separately in track-$p_{\mathrm T}$ bins: $[0.5,1.0)$, $[1.0,1.5)$, $[1.5,2.0)$, $[2.0,3.0)$, and $[3.0,5.0]$ GeV for electrons, and $[1.0,1.5)$, $[1.5,2.0)$, $[2.0,3.0)$, and $[3.0,5.0]$ GeV for muons. They are applied to the fail-ID yield in the $\alpha$ region. A VR with same-sign lepton-track pairs, a different-flavour VR, and a high-$\Delta\phi$ VR test the estimate in related but distinct selections. These are analysis procedures; they do not derive the observed collision data.

For background comparisons and limits, ATLAS uses a profile likelihood. A signal-strength parameter scales the predicted signal yield; at each tested value, the likelihood for the observed region counts is maximised over nuisance parameters. The systematic sources have Gaussian-distributed constraints with the correlations specified by the collaboration; statistical contributions from finite simulation samples and control-region data are also included, without asserting a common constraint distribution for them. For a parametric family with densities $p_{\vartheta}$ with respect to a fixed dominating measure $\nu$, the likelihood at observed data $s$ is $L_s(\vartheta)=p_{\vartheta}(s)$ viewed as a function of $\vartheta$; it is not a probability distribution on parameter values. The asymptotic $CL_s$ test uses the ratio of the signal-plus-background and background-only test-statistic tail probabilities; signal hypotheses with $CL_s<0.05$ are reported as excluded at 95% confidence level. The item records the published procedure but does not reconstruct the event likelihood, efficiency maps, nuisance covariance, or limits. “Observed” results use the collision data; “expected” limits are the background-only sensitivity.

## Procedure references

[ATLAS full paper, §§5–9, especially §§6–8 and the statistical interpretation in §9](https://arxiv.org/pdf/2511.20042v2).

Likelihoods for observed data: [[def-cm-likelihood-function]].

Statistical tests and their rejection regions: [[def-cm-statistical-test-and-size]].

Confidence sets and the meaning of coverage levels: [[def-cm-confidence-set-and-coverage]].

## Observations

The collaboration reports no significant excess over the Standard Model prediction in either search; validation-region observed/predicted differences are below $2\sigma$, and all fitted signal-region deviations are below $2\sigma$, with the largest displaced-track deficit $-1.3\sigma$ and the largest 1$\ell$1T excess $+1.5\sigma$. The observed displaced-track contour reaches approximately $m(\tilde\chi^\pm_1)=200$ GeV at $\delta_\pm=0.6$ GeV, while the observed 1$\ell$1T contour reaches approximately $130$ GeV at $\delta_\pm=2$ GeV. The combined observed result excludes chargino masses below $126$ GeV at 95% confidence level for $\delta_\pm$ from $0.3$ to $2$ GeV in the stated simplified model. Figure 15 also shows expected 95% confidence-level contours. The displaced-track observed contour extends beyond its expected contour where the reported counts fluctuate low; the 1$\ell$1T observed contour is close to expected after a small deficit and excess largely cancel. For 1$\ell$1T, the expected envelope selects the best expected $CL_s$ among the six $\theta$ configurations at each signal mass and is driven mainly by the muon channel. The expected mass contour is reported graphically and is not numerically digitized here. These are collaboration-reported statistical inferences conditional on the data, likelihood, detector model, selections, and simplified higgsino assumptions.

## Observations references

[ATLAS full paper, §9, Fig. 15, and §10](https://arxiv.org/pdf/2511.20042v2).

Confidence-set coverage terminology: [[def-cm-confidence-set-and-coverage]].

## Uncertainty

The reported integrated-luminosity uncertainty is 0.83%. Systematic uncertainties in detector response, background modelling, and signal modelling enter the likelihood as Gaussian-constrained nuisance parameters with the collaboration's correlations. Statistical uncertainties from finite simulation samples and control-region data are also included; this account does not assign a common constraint distribution to them. Jet energy scale and resolution uncertainties are evaluated versus jet $p_{\mathrm T}$ and $\eta$ using data/MC balance studies in dijet and $Z/\gamma$+jets events. Missing-momentum uncertainty propagates object energy/momentum variations and the scale and resolution of the soft term; additional sources include pile-up modelling, tracking efficiency, track impact-parameter resolution, lepton identification/isolation, and low-$p_{\mathrm T}$ lepton-track calibration. The displaced-track background normalisation and track-reweighting factors are fitted with their control-region statistical uncertainties; the 1$\ell$1T fake-track transfer factors carry control-region statistical and non-closure uncertainties. The paper reports fitted deviations below $2\sigma$. This account does not recompute counts, efficiencies, nuisance correlations, or any confidence limits.

## Uncertainty references

[ATLAS full paper, §8 (systematic uncertainties), §9 (fits and signal-region comparisons), and Table 14](https://arxiv.org/pdf/2511.20042v2).

Likelihood and nuisance-parameter framework: [[def-cm-likelihood-function]].

## Interpretation

The reported limits constrain only the electroweak higgsino-like simplified spectra, stable-neutralino and decay assumptions, the relation $\delta_0=2\delta_\pm$, production modes, selections, detector response, background model, and likelihood used by ATLAS. They do not establish or rule out supersymmetry as a framework, establish supersymmetry breaking, or constrain spectra and decay patterns outside those assumptions. The reported 95% confidence level labels the collaboration's frequentist $CL_s$ exclusion procedure; it is not a posterior probability that a model is true or false, nor a general exact-coverage theorem.

## Interpretation references

The 95% confidence-set convention: [[def-cm-confidence-set-and-coverage]].

Supersymmetry-breaking and collider-inference scope: [[qftx-susy-breaking-and-phenomenology]].
