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
  - def-sr-total-four-momentum-and-invariant-mass
dependency_roles:
  def-cm-measurement-model: operational-prerequisite
  def-cm-likelihood-function: formulation-prerequisite
  def-cm-statistical-test-and-size: formulation-prerequisite
  def-aqft-profile-likelihood-ratio: formulation-prerequisite
  post-aqft-smeft-model: formulation-prerequisite
  def-aqft-warsaw-basis-contract: formulation-prerequisite
  def-sr-total-four-momentum-and-invariant-mass: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: Source-reported preliminary CMS PAS SMP-25-002 detector-level 13
  TeV Run-2 combination of ten measurements and six CP-even bosonic
  dimension-six coefficients, including its reported selections, controls,
  nuisance model and conditional intervals. Wilks calibration, source-internal
  reference/bin-edge ambiguities and absent raw likelihood/calibration data
  remain explicit; no independent experimental validation is asserted.
empirical_result:
  observation: CMS PAS SMP-25-002 reports no significant deviation from the
    Standard Model and compatibility of each coefficient with zero within one
    standard deviation. Its Table4 single-coefficient linear-plus-quadratic
    observed and SM-expected intervals are transcribed in TeV^-2 with all other
    coefficients fixed to zero; these are not simultaneous six-coefficient
    intervals.
  uncertainty: Source-reported 562-nuisance model,
    luminosity/object/jet/pileup/theory/control-background uncertainties and
    correlation scheme; thresholds q<1,4 and q<2.3,6.18 assume Wilks. No
    independent coverage calibration, likelihood reproduction or raw calibration
    audit; rounded95% labels versus95.4% convention, VBF-W reference energy and
    final WW bin-edge ambiguity are retained.
  conditions: Preliminary CMS2016–2018 pp data at13TeV and reported138fb^-1; ten
    VBS/VBF/diboson/triboson inputs,163signal/control
    regions,912bins,3.39million observed events. Bosonic dimension-six signal
    reweighting, coefficient-independent SM backgrounds, source-specified
    detector/selection/nuisance model and individual/two-coefficient/profiled
    fit scenarios.
  source_url: https://inspirehep.net/files/e9aa001bdef81c4b728fdafbdc261122
sources:
  references:
    - title: CMS Collaboration, CMS PAS SMP-25-002, Constraints on Effective Field
        Theory operators from multiboson production measurements at sqrt(s) = 13
        TeV (30 July 2026)
      url: https://inspirehep.net/files/e9aa001bdef81c4b728fdafbdc261122
      locator: Complete 32-page PAS; §§1–9, Tables 1–5, Appendix A–F text/captions.
        Table4 on printed p.13/PDF p.15 and Wilks thresholds on printed p.8/PDF
        p.10 visually verified; original input-analysis/calibration papers and
        numerical plot digitization excluded.
    - title: M. Cacciari, G. P. Salam and G. Soyez, The anti-kt jet clustering
        algorithm
      url: https://arxiv.org/pdf/0802.1189
      locator: "§1, equations (1a)–(1b), printed pp. 2–3: generalized sequential
        recombination distances, inclusive steps, and p=-1. Only the cover and
        algorithm-definition section were read; no later jet-property proof is
        invoked."
    - title: M. Cacciari, G. P. Salam and G. Soyez, FastJet user manual (version
        3.0.1)
      url: https://arxiv.org/pdf/1111.6097
      locator: "§2 printed pp. 5–6: rapidity and recombination context; §3.2 printed
        pp. 12–13 and opening of §3.4 printed p. 15: E-scheme four-vector
        sum/default. Only these definition passages were read, not a CMS
        configuration or calibration audit."
verification:
  precheck: pending
  sources_checked:
    date: 2026-10-23
    by: /root/rg_contract_repair
    scope: "Actual32-page full-PAS source recovery and class-specific reporting
      review; Table4 and Wilks page visually verified. No raw-data, original
      component-paper or empirical truth attestation. Definition pass: exact
      published invariant-mass supplier read; PAS Zeppenfeld formula visually
      checked; anti-kt §1 and FastJet rapidity/E-scheme definition passages
      read. No additional component-analysis or calibration audit."
---

## Setup

CMS PAS SMP-25-002, dated 30 July 2026, reports a preliminary detector-level combination of ten electroweak multiboson measurements using CMS proton-proton data from 2016–2018 at $\sqrt{s}=13\ {\rm TeV}$ and reported integrated luminosity $138\ {\rm fb}^{-1}$. 

**Operational notation.** Use natural units $c=1$ and laboratory four-vector coordinates $P=(E,p_x,p_y,p_z)$, with the beam as the $z$ axis. The center-of-mass energy $\sqrt{s}$ is the invariant energy of the incoming proton pair. Write $\mathbf p_T=(p_x,p_y)$ and $p_T=\sqrt{p_x^2+p_y^2}$. For a nonzero three-momentum with polar angle $0<\theta<\pi$ to the beam, pseudorapidity is $\eta=-\log\tan(\theta/2)$; azimuth $\phi$ is the direction of $\mathbf p_T$ modulo $2\pi$ when $p_T>0$. The separation $\Delta\phi$ is the smaller azimuthal angle in $[0,\pi]$, and, with $\Delta\eta=\eta_i-\eta_j$, $\Delta R_\eta=\sqrt{(\Delta\eta)^2+(\Delta\phi)^2}$. For a source-selected finite set of reconstructed four-vectors whose sum is nonzero future causal (total energy $E_\Sigma>0$ and $E_\Sigma^2\ge|\mathbf p_\Sigma|^2$, where $E_\Sigma=\sum E$ and $\mathbf p_\Sigma=\sum\mathbf p$), its invariant mass is $m=\sqrt{(\sum E)^2-|\sum\mathbf p|^2}$, with zero mass for a null sum, as in the supplied total-four-momentum definition. The labels $m_{jj}$ and $m_{\ell\ell}$ apply this definition to the selected jet or lepton pair. Candidate masses such as $m_{WV}$ use the source's chosen reconstructed candidates; no unreported neutrino-reconstruction prescription is supplied here. Integrated luminosity is the reported collision exposure in inverse-area units $\mathrm{fb}^{-1}$.

**Channel and reconstruction labels.** SM means Standard Model, SMEFT Standard Model effective field theory, EW electroweak, QCD quantum chromodynamics, MC Monte Carlo simulation, and LO leading perturbative order. Parton distribution functions (PDFs) and the strong coupling $\alpha_s$ are the source-specified theory inputs for incoming-hadron constituents and strong-interaction strength in its factorization scheme; no unreported numerical functions are supplied. VBS means vector-boson scattering and VBF vector-boson fusion: here these name the source's EW two-boson or single-boson-plus-tagging-jet event categories, not a claimed gauge-invariant separation of an amplitude. $W$ and $Z$ are the charged and neutral weak bosons, $V$ denotes either, $\ell$ denotes an electron or muon unless a tau is stated, and $j$ denotes a reconstructed jet. The notation $jj$ denotes the source-selected pair of tagging jets, whose event-selection role is distinct from b tagging. A $\tau_h$ is a reconstructed candidate for the visible hadronic products of a tau decay, not a directly measured complete tau four-momentum. “Same/opposite sign” refers to reconstructed electric charge, and lepton “flavour” here distinguishes the named lepton species.

The missing transverse momentum vector $\mathbf p_T^{\mathrm{miss}}$ is the source's negative transverse-momentum sum over its chosen reconstructed particles, with its source-specified weighting and calibration corrections; $p_T^{\mathrm{miss}}=|\mathbf p_T^{\mathrm{miss}}|$. Appendix A identifies PUPPI, pileup-per-particle identification, as part of that reconstruction. Pileup means additional proton-proton interactions in the same or nearby bunch crossings. The exact PUPPI weights and correction map are source inputs not provided by this PAS and are not reconstructed here. Particle-flow reconstruction likewise names the source's map from tracker, calorimeter and muon information to identified particle candidates, not an independently reproduced detector-response model.

A b tag is the source's Boolean jet-selection decision intended to identify jets containing b-hadron decay products; its efficiency and misidentification are empirical calibration quantities, not proof of a jet's origin. DNN and BDT mean deep neural network and boosted decision tree. Operationally their scores are fixed source-supplied functions $s:\mathcal X\to\mathbb R$ of the source's reconstructed feature vectors. A working point is a specified cut on such a score. The DeepJet medium b-tag decision, DNN/BDT scores, features, trained weights and calibration maps remain source-labelled inputs; reported thresholds are retained without treating scores as probabilities or inventing the missing functions. A control region is a selected event subset used to constrain background predictions; a signal region is the selected subset used for the reported coefficient fit. “Nonprompt” leptons denote source-classified candidates not originating in the targeted prompt electroweak decay; charge misidentification denotes an incorrect reconstructed charge. Leading/subleading refers to decreasing $p_T$ within the selected collection.

Its ten inputs are VBS same-sign $WW$ with electrons/muons and with a hadronic $\tau$, opposite-sign $WW$, $WZ$, semileptonic $WV$ and $ZV$; VBF $Wjj$ and $Zjj$; opposite-sign diboson $WW$; and triboson $VVV$ without photons. The common fit varies the six CP-even bosonic Warsaw coefficients associated with $O_W,O_{HW},O_{HWB},O_{H\square},O_{HB},O_{HD}$. Only the source's specified bosonic SMEFT signal model is tested; other operators are not simultaneously constrained.

The apparatus includes the 3.8 T solenoid, silicon tracker, electromagnetic and hadron calorimeters, forward calorimeters and muon chambers. The report describes hardware and high-level triggering, full GEANT4 detector simulation and particle-flow reconstruction. Its statistical combination assumes nonoverlapping input phase spaces and conditional count independence in its likelihood model, while shared nuisance parameters encode correlated systematic effects. The PAS reports 163 signal/control regions, 912 bins and 3.39 million observed events, with 562 independent nuisance parameters. These are collaboration-reported combination totals, not independently recounted events.

## Setup references

[[post-aqft-smeft-model|Adopted SMEFT field content and expansion conventions]]

[[def-aqft-warsaw-basis-contract|Warsaw operator and coefficient conventions]]

[[def-sr-total-four-momentum-and-invariant-mass|Finite total four-momentum and future-causal invariant-mass convention]]

[CMS PAS SMP-25-002, cover, §§1–3 and 7, Tables 1–3; PDF pp. 1, 3–7 and 11–13](https://inspirehep.net/files/e9aa001bdef81c4b728fdafbdc261122)

## Procedure

**Signal model and controls.** The report uses MADGRAPH5_aMC@NLO v2.6.5 and SMEFTSIM at leading order for SMEFT electroweak signals. Per-event weights at the SM point, individual coefficients $\pm1$ and coefficient-pair points reconstruct linear interference, squared dimension-six and mixed quadratic terms. CMS reports per-analysis closure checks against directly generated components. PYTHIA with the CP5 tune, NNPDF3.1 distributions, pileup matched to data and GEANT4 propagate predictions to detector level. Backgrounds are SM-only in this interpretation. Nonprompt leptons, electron charge misidentification and some vector-boson-plus-jets contributions use data control regions; irreducible backgrounds generally use simulation. The PAS gives analysis-dependent generator choices, rather than one universal background generator.

**Jet-clustering definition and source-specific variables.** For the referenced inclusive anti-$k_T$ algorithm, take a finite list of particle/pseudojet four-vectors (a pseudojet is a temporary merged object) with positive transverse momentum and finite rapidity $y=\tfrac12\log[(E+p_z)/(E-p_z)]$, where $E>|p_z|$. Use $\Delta R_{y,ij}^2=(y_i-y_j)^2+(\Delta\phi_{ij})^2$, not pseudorapidity separation for a massive pseudojet. With radius $R>0$, form $d_{ij}=\min(p_{T,i}^{-2},p_{T,j}^{-2})\Delta R_{y,ij}^2/R^2$ and $d_{iB}=p_{T,i}^{-2}$. Repeatedly select the smallest distance: for a pair, replace it by a recombined pseudojet; for a beam distance, declare that pseudojet a final inclusive jet and remove it. Recalculate distances and continue until the list is empty. In the E-scheme specified as FastJet's default, pair recombination is the four-vector sum $P_{ij}=P_i+P_j$. This prescription is understood on admissible inputs/intermediate pseudojets with a fixed implementation tie rule; zero-transverse-momentum, beam-collinear and exact-tie policies are not independently specified by the PAS. Cacciari–Salam–Soyez §1 supplies the anti-$k_T$ distances and clustering steps; the FastJet manual supplies the E-scheme merge. The PAS states $R=0.4$ but does not re-specify that software's complete recombination configuration or calibrations, so this defines the referenced standard procedure without claiming an audit of the CMS implementation.

For the dilepton Zeppenfeld variable, the actual displayed definition in PAS §7, printed p. 9, is $Z_\ell=\eta_\ell-\tfrac12(\eta_{j_1}+\eta_{j_2})$ and $Z_{\ell\ell}=\tfrac12|Z_{\ell_1}+Z_{\ell_2}|$. This was visually checked; no alternative normalization by jet separation is substituted. By contrast, $m_T^{WZ}$, $m_T^{WW}$ and $m_T^{W_2}$ remain the PAS-labelled transverse-mass discriminant/selection inputs; Appendix A associates the last with the subleading lepton. Their exact pointwise variants are not specified in the inspected PAS text and are not inferred from the labels. Formally they are fixed source-input functions of its reconstructed event variables with energy units; this account preserves their reported cuts without evaluating an invented formula.

**Selections and fitted observables.** Table 3 and Appendices A–C state the following combination-level inputs:

| Input | Reported selection/category and fitted observable |
|---|---|
| VBS opposite-sign $WW$ | Opposite-charge, opposite-flavour leptons with tagging jets; dijet mass, with the 2017–2018 sample split at dilepton Zeppenfeld variable 1 and a separate 2016 category |
| VBS same-sign $WW(e,\mu)$ and $WZ$ | Same-sign dileptons or three leptons with an opposite-sign same-flavour pair, plus VBS tagging jets; flattened $(m_{jj},m_{\ell\ell})$ or $(m_T^{WZ},m_{jj})$ bins; extra-lepton/b-jet vetoes suppress top and diboson backgrounds |
| VBS same-sign $WW(\tau_h)$ | Lepton/hadronic-$\tau$ final state; SMEFT DNN score in five bins with edges $0,0.264,0.405,0.517,0.608,1$ |
| VBF $W$ and $Z$ | One isolated lepton with missing transverse momentum or opposite-charge same-flavour dileptons, respectively, with separated tagging jets; $\Delta\phi_{jj}$, with DNN selection above 0.5 for $W$ and DNN-score windows for $Z$; $W$+jets/top control regions constrain backgrounds |
| VBS $WV$ and $ZV$ | Leptonic plus hadronic vector-boson decay topologies; $m_{WV}$ in DNN-score categories and $m_{ZV}$ in b-tag/b-veto categories |
| Triboson $VVV$ | Lepton/$\tau_h$/large-radius vector-jet multiplicities, with charge/flavour/$Z$-mass subdivisions; generally scalar transverse-momentum sums, with BDT/kinematic categories for hadronic-$\tau$ channels and additional channel-dependent mass discriminants |
| Diboson $WW$ | Opposite-charge $e\mu$, 0- and 1-jet categories; dilepton mass, with top-enriched control data and a data-driven nonprompt-lepton estimate |

Appendix A explicitly requires leading/subleading diboson leptons above 25/20 GeV, vetoes extra loose leptons above 10 GeV, and uses missing transverse momentum above 20 GeV, $p_T^{\ell\ell}>30$ GeV and $m_{\ell\ell}>20$ GeV. It describes anti-$k_T$ jets with radius 0.4, $p_T>30$ GeV and $|\eta|<4.7$, and a signal-region b-jet veto together with transverse-mass requirements $m_T^{WW}>60$ GeV and $m_T^{W_2}>30$ GeV. A top-enriched control region requires a b-tagged jet, $m_{\ell\ell}>50$ GeV and $m_T^{W_2}>30$ GeV. The report also describes tighter multivariate lepton identification in the VBS reinterpretations. Cuts and calibration constants not actually supplied by this PAS are not filled in from presumed standard CMS practice; Table 3 refers full original selection definitions to the input-analysis papers.

**Likelihood and test calibration.** For bin counts $n_k$, the reported model is a product of Poisson terms with means $\mu_k(\mathbf c,\theta)=N_k(\mathbf c,\theta)+b_k(\theta)$ and auxiliary-data constraint likelihoods $\pi_j(\widetilde\theta_j\mid\theta_j)$. The signal includes SM, linear, quadratic and pairwise mixed coefficient contributions; backgrounds are coefficient-independent. The count model is interpreted only where all Poisson means are finite and nonnegative; no unreported fit parameter range is reconstructed. The auxiliary constraints are not posterior probabilities for nuisance parameters. CMS uses COMBINE/RooFit/RooStats to profile nuisances in $q(\mathbf c)=-2\log[L(\mathbf c,\widehat{\widehat\theta})/L(\widehat{\mathbf c},\widehat\theta)]$. Individual fits fix the other five coefficients to zero; two-coefficient scans fix the other four; fully profiled scans float all other coefficients and nuisances.

Section 5 assumes Wilks' theorem and uses $q<1,4$ for one-dimensional 68.3%, 95.4% intervals, and $q<2.3,6.18$ for two-dimensional regions. The table/figure labels abbreviate these as 68%/95%. The PAS supplies no independent toy-Monte-Carlo coverage calibration of those thresholds. Its claims of fit stability and reweighting closure do not establish finite-sample coverage or EFT validity.

## Procedure references

[[def-cm-likelihood-function|Likelihood functions for observed data]]

[[def-cm-statistical-test-and-size|Tests and their sampling-model size]]

[[def-aqft-profile-likelihood-ratio|Profile likelihood ratios and nuisance parameters]]

[CMS PAS SMP-25-002, §§4–7, equations (2)–(7), Table 3, Appendices A–D; printed pp. 6–11 and 21–27](https://inspirehep.net/files/e9aa001bdef81c4b728fdafbdc261122)

[Cacciari, Salam and Soyez, The anti-kt jet clustering algorithm, §1, equations (1a)–(1b), printed pp. 2–3](https://arxiv.org/pdf/0802.1189)

[Cacciari, Salam and Soyez, FastJet user manual, §2 and §§3.2/3.4, printed pp. 5–6, 12–13 and 15](https://arxiv.org/pdf/1111.6097)

## Observations

The PAS reports no significant deviation from the Standard Model and says every fitted coefficient is compatible with zero within one standard deviation. The following are its Table 4 single-coefficient **linear-plus-quadratic** intervals, with all other coefficients fixed to zero. They are conditional intervals for the tabulated coefficient combinations in $\mathrm{TeV}^{-2}$, not simultaneous six-parameter bounds. In the dimensionless-coefficient convention of the supplied Warsaw contract, these units correspond to coefficient divided by the EFT scale squared; no particular new-physics scale is inferred. “Expected” denotes the source's SM-only expectation; “observed” uses its data. Column labels retain the PAS's rounded confidence-level labels and the threshold convention stated above.

| Coefficient | Expected 68% | Observed 68% | Expected 95% | Observed 95% |
|---|---|---|---|---|
| $c_W$ | $[-0.06,0.05]$ | $[-0.04,0.04]$ | $[-0.09,0.09]$ | $[-0.07,0.07]$ |
| $c_{HW}$ | $[-0.88,0.85]$ | $[-0.58,0.48]$ | $[-1.31,1.28]$ | $[-0.99,0.90]$ |
| $c_{HWB}$ | $[-0.72,0.77]$ | $[-0.95,0.07]$ | $[-1.35,1.49]$ | $[-1.42,0.58]$ |
| $c_{HD}$ | $[-1.85,1.96]$ | $[-3.47,0.52]$ | $[-3.40,3.71]$ | $[-4.93,2.95]$ |
| $c_{H\square}$ | $[-5.57,5.68]$ | $[-4.01,4.00]$ | $[-8.54,8.59]$ | $[-6.99,6.96]$ |
| $c_{HB}$ | $[-3.10,3.10]$ | $[-1.49,1.48]$ | $[-4.74,4.75]$ | $[-2.78,2.77]$ |

The report also presents two-coefficient contours, linear-only comparisons and fully profiled observed scans. Those graphical results are not numerically digitized here; the single-coefficient table is not substituted for them. Section 8 presents only observed fully profiled results, not an expected fully profiled interval table. No $p$-value, discovery significance, raw-event count by unreported category or independent fit reproduction is inferred. The nominal confidence labels are sampling-model statements under the assumed calibration, not posterior probabilities that the SMEFT is true.

## Observations references

[CMS PAS SMP-25-002, §8, Table 4 and Figures 2–4, 8–10; printed pp. 12–15 and 28–30; Table 4 visually checked on PDF p. 15](https://inspirehep.net/files/e9aa001bdef81c4b728fdafbdc261122)

## Uncertainty

The PAS quotes luminosity uncertainties 1.2%, 2.3%, 2.5% for 2016, 2017, 2018, and 1.6% overall. It includes data-derived trigger and object-efficiency corrections; electron/muon momentum-scale and resolution, hadronic-$\tau$ identification/energy, jet energy/mass scale and resolution, b-tagging, nonprompt and charge-misidentification uncertainties. Jet momenta are varied by their one-standard-deviation uncertainties; pileup is varied through a 4.6% inelastic-cross-section uncertainty. Renormalization/factorization scales vary by factors of two excluding opposite extreme combinations; PDF/$\alpha_s$ and initial/final-state radiation variations describe further theory systematics. These are source-reported procedures and numbers, not independently checked calibration performance.

Section 7 says approximately 30% of the 562 nuisances are shared between at least two regions, while 70% affect a single region. Shared detector calibrations and theory sources are correlated where the same calibration/process applies. Luminosity has year-uncorrelated, 2017–2018-correlated and all-years-correlated components; region-specific data-driven backgrounds are uncorrelated. Monte Carlo statistical uncertainties are independent per bin and region. Nuisances acting on the SM signal act coherently on its SMEFT interference/quadratic templates; separate binwise MC statistical parameters are not assigned independently to those algebraically reweighted pieces. Some background normalizations float and are constrained by control data. The diboson appendix adds LO-normalization and $p_T^{WW}$-shape modeling uncertainties, uncorrelated between its 0-/1-jet regions and described as dominant there.

The PDF does not publish the full machine-readable likelihood, all nuisance constraint families, numerical correlation matrix or calibration constants. Its original analysis/calibration references were not independently read in this recovery. Two internal source ambiguities are retained: Table 2 cites an 8 TeV VBF-$W$ paper in reference [18] despite the combination's stated 13 TeV Run-2 dataset; Table 3 prints 1250 GeV as the diboson final bin edge whereas Appendix A gives infinity. No choice between those implementations is invented here. Section 5's 95.4% convention versus rounded 95% result labels is also explicit.

## Uncertainty references

[CMS PAS SMP-25-002, §§5–7, Table 3, Appendix A and reference [18]; printed pp. 8–11, 17 and 21–22](https://inspirehep.net/files/e9aa001bdef81c4b728fdafbdc261122)

## Interpretation

These are preliminary, source-reported conditional constraints in the six-direction bosonic SMEFT model with the stated detector, control-sample, nuisance and Wilks assumptions. The analysis keeps dimension-six squared/mixed terms; it is not a complete treatment of every contribution at inverse fourth power of the new-physics scale, and its bounds do not by themselves establish a general EFT validity range or a model-independent scale exclusion. The report omits SMEFT-induced propagator-width corrections and states their effect is negligible for its chosen bosonic setup; that assertion is not promoted to a general theorem. It does not test all Warsaw coefficients, prove the SMEFT empirically true, or constrain supersymmetry-breaking mechanisms.

The full 32-page primary PAS was recovered through the INSPIRE full-text mirror linked to the same CDS record and read for this account. The main text, Tables 1–5 and Appendix A–F text/captions were inspected; Table 4 and the Wilks-threshold page were visually checked. Plot curves were not digitized, raw data/auxiliary likelihood/calibration files were not examined, and original component-analysis articles were not claimed read. The earlier CDS failures remain recorded. Full-report retrieval resolves that access gap, while the stated source ambiguities and independent-reproduction limits remain.

## Interpretation references

[[aqft-eft-experimental-inference|Page-level inference scope and prerequisite interface]]

[CMS PAS SMP-25-002, §§1, 5, 8–9 and appendices; full report, not an abstract-page substitute](https://inspirehep.net/files/e9aa001bdef81c4b728fdafbdc261122)
