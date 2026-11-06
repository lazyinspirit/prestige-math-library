---
id: exp-r5-bicep-planck-tensor-upper-limit
kind: experiment
title: "Planck PR4 and BICEP/Keck 2018 tensor-to-scalar upper limit"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 2
deps:
  - def-r5-inflation-cmb-observables
dependency_roles:
  def-r5-inflation-cmb-observables: formulation-prerequisite
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "Planck PR4 and BICEP/Keck 2018 likelihood constraints on a specified primordial tensor spectrum in flat Lambda-CDM+r. This is not a direct string-theory measurement or a tensor detection."
empirical_result:
  observation: >-
    Tristram et al. report r<0.034 at 95% confidence for Planck PR4 plus
    BICEP/Keck 2018. Adding BAO and CMB lensing gives the tighter reported
    bound r<0.032 at 95% confidence. The combined posterior is reported as
    consistent with r=0; no primordial tensor detection is claimed.
  uncertainty: >-
    The reported upper limits use the article's Lambda-CDM+r parameterization,
    likelihoods and chain-based posterior analysis. The article labels the
    bound 95% CL but does not state the prior on r or define a frequentist
    coverage calculation; this record preserves the reported label without
    inferring calibrated coverage or a posterior probability that a model is
    true. The Planck low-multipole polarization likelihood marginalizes over
    covariance-estimation uncertainty from 400 PR4 simulations; the source
    estimates the finite-simulation covariance uncertainty at about 5%.
    This record does not rerun the likelihood chains or reconstruct map-level
    covariance.
  conditions: >-
    Flat Lambda-CDM+r with six scalar cosmological parameters plus r; scalar
    and tensor spectra are power laws without running, tensor tilt follows
    the single-field slow-roll consistency relation, and r is evaluated at
    k*=0.05 Mpc^-1. BICEP2/Keck Array/BICEP3 observations through the 2018
    season use 95, 150 and 220 GHz channels over about 400 square degrees;
    the likelihood also uses WMAP 23/33 GHz and Planck PR4 30, 44, 143, 217
    and 353 GHz maps. The paper's Planck low-multipole analysis covers 50% of
    the sky, and its high-multipole TT/TE/EE data use 100, 143 and 217 GHz
    detector-set maps. BAO and CMB lensing enter the tighter combination.
  source_url: https://arxiv.org/pdf/2112.07961v2
empirical_premises: []
sources:
  references:
    - title: "M. Tristram et al., Improved limits on the tensor-to-scalar ratio using BICEP and Planck, arXiv:2112.07961v2"
      url: "https://arxiv.org/pdf/2112.07961v2"
      locator: "Complete 7-page article; §II model and pivot, §§III–VI likelihoods and results, especially §VI Eq. (7), conclusion, and Appendix statistical discussion (400 PR4 simulations, covariance uncertainty and robustness checks)."
    - title: "M. Cicoli et al., String Cosmology: from the Early Universe to Today, arXiv:2303.04819v2"
      url: "https://arxiv.org/pdf/2303.04819v2"
      locator: "§§2.3.2–2.3.3 and §2.4.2, PDF pp. 15–25; primordial perturbation spectra and pivot observables. The linked definition item fixes the local spectrum and polarization convention."
    - title: "Planck Collaboration, Planck intermediate results LVII: Joint Planck LFI and HFI data processing, arXiv:2007.04997v1"
      url: "https://arxiv.org/pdf/2007.04997v1"
      locator: "Selected calibration passages only: §2.4.3 (orbital dipole), §4.3 (large-scale polarization transfer function), and §6.1 with Table 7 (gain recovery and bias in simulations); not a full NPIPE pipeline audit."
    - title: "BICEP2 Collaboration, BICEP2 II: Experiment and three-year data set, arXiv:1403.4302v3"
      url: "https://arxiv.org/pdf/1403.4302v3"
      locator: "§13.3, gain calibration: relative elevation-nod gains and absolute calibration using external CMB temperature cross-spectra; selected section only."
    - title: "BICEP/Keck Collaboration, BICEP/Keck XV: The BICEP3 CMB polarimeter and the first three-year data set, arXiv:2110.00482v1"
      url: "https://arxiv.org/html/2110.00482v1"
      locator: "§VIII.9, polarization response; §IX.3, detector calibrations, Eq. (14); selected sections only."
    - title: "BICEP/Keck Collaboration, BICEP/Keck XIII: Improved constraints on primordial gravitational waves using observations through 2018, arXiv:2110.00483v1"
      url: "https://arxiv.org/html/2110.00483v1"
      locator: "Appendix F, especially F.3: Fourier-transform-spectrometer bandpasses and conservative band-centre sensitivity tests; selected sections only."
verification:
  precheck: pass
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this experiment in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---
## Setup

The reported parameter is the source-defined tensor-to-scalar amplitude ratio $r:=A_t/A_s$: $A_t$ and $A_s$ are the tensor and scalar primordial power-law amplitudes used by the article's CAMB/Cobaya model at its pivot. The local spectrum convention in Primordial scalar and tensor observables for inflation models defines a ratio $\mathcal P_t/\mathcal P_\zeta$ with both tensor polarizations included. Identifying that local ratio with the article's $r$ additionally requires matching its scalar curvature variable and tensor-polarization normalization; §II of the cited article does not state that variable map. The upper limits recorded here therefore remain limits on the article's $A_t/A_s$, without asserting that additional identification. Tristram et al. analyze a flat
$\Lambda$CDM+$r$ model with the six base scalar parameters and $r$.
Scalar and tensor primordial spectra are power laws with no running; the
tensor spectral index is fixed by the single-field slow-roll consistency
relation. They evaluate $r$ at $k_*=0.05\,\mathrm{Mpc}^{-1}$.
This is the paper's conventional comoving inverse-megaparsec pivot; its numerical value is retained in that source coordinate convention.

The analyzed BICEP/Keck likelihood is formed from BICEP2, Keck Array and
BICEP3 observations through the 2018 season. The paper describes joint BB
auto- and cross-spectra at 95, 150 and 220 GHz, together with WMAP 23/33 GHz
and Planck PR4 30, 44, 143, 217 and 353 GHz maps over an effective area of
about 400 square degrees (about 1% of the sky), selected for low foreground
emission. Its data model includes Galactic dust and synchrotron emission and
their correlations. The Planck low-multipole likelihood uses component-
separated maps over 50% of the sky. The analysis neglects cross-correlations
between the BICEP/Keck and Planck data sets, citing their different sky
coverage; this is an assumption of the reported likelihood combination, not
a reanalysis performed here.

## Setup references

[[def-r5-inflation-cmb-observables]]

[Tristram et al., §§II–IV](https://arxiv.org/pdf/2112.07961v2)

## Procedure

The analysis combines publicly available likelihoods using the CAMB
Boltzmann solver and Cobaya Markov-chain Monte Carlo sampling. It uses the
BICEP/Keck likelihood through the 2018 observing season, Planck PR4
low-multipole polarization and high-multipole TT, TE and EE data, then
considers BAO and CMB lensing as additional data. The Planck low-multipole
polarization likelihood uses cross-spectra and marginalizes over uncertainty
in the covariance estimated from 400 PR4 simulations. The high-multipole
Planck spectra use the 100, 143 and 217 GHz detector-set maps. The source
models foreground residuals and retains covariance terms rather than setting
all off-diagonal entries to zero.

Calibration here means estimating the multiplicative response that converts a
detector reading to a temperature fluctuation in thermodynamic CMB kelvin.
For the PR4 maps, NPIPE fits the seasonal CMB temperature-dipole template
produced by the spacecraft's motion around the Sun, including corrections for
response outside the main beam. Section 6.1 tests gain recovery by regressing
the injected dipole against simulated maps after subtraction of the input CMB
and foregrounds and masking the more contaminated half of the sky. Table 7
reports frequency-dependent gain scatter and bias. Its calibration also filters
some large-scale polarization; §4.3 measures that response using simulations.
The low-multipole likelihood described by Tristram et al. propagates the
instrumental effects represented in its PR4 simulations, rather than treating
these maps as free of calibration error.

BICEP2 §13.3 and BICEP3 §IX.3 describe relative gains from small telescope
elevation changes: the changing atmospheric signal supplies a common response
for comparing detectors. Absolute gains use cross-spectra of the instrument's
temperature map with externally calibrated CMB maps, with matching beam and
filter processing. The BICEP3 gain is averaged over the first five analysis
bandpower bins. Its §VIII.9 measures detector polarization response with a
rotating polarized source and removes a global angle offset by minimizing
EB and TB correlations. The BK18 Appendix F.3 measures BICEP3 and Keck
frequency responses with a Fourier-transform spectrometer; a bandpass is this
response as a function of frequency, and a band-centre error shifts its
assumed frequency scale. These are reported calibration methods and checks;
this item does not reconstruct maps, calibration fits, likelihood code or chains.

## Procedure references

[Tristram et al., §§III–VI and Appendix](https://arxiv.org/pdf/2112.07961v2)

[Planck Collaboration, NPIPE §§2.4.3, 4.3 and 6.1, Table 7](https://arxiv.org/pdf/2007.04997v1)

[BICEP2 Collaboration, §13.3](https://arxiv.org/pdf/1403.4302v3)

[BICEP/Keck XV, §§VIII.9 and IX.3](https://arxiv.org/html/2110.00482v1)

[BICEP/Keck XIII, Appendix F.3](https://arxiv.org/html/2110.00483v1)

## Observations

For Planck PR4 plus BICEP/Keck 2018, the authors report
$r<0.034$ at 95% confidence. Adding BAO and CMB lensing tightens their
reported upper limit to
$$
r<0.032\qquad(95\%\ \text{confidence}).
$$
They report the combined results as consistent with $r=0$. These are
likelihood- and model-dependent upper limits, not a detection of primordial
tensors.

## Observations references

[Tristram et al., Eq. (7), §VI and conclusion](https://arxiv.org/pdf/2112.07961v2)

## Uncertainty

The upper bound inherits the selected likelihood combination, flat
$\Lambda$CDM+$r$ parameterization, fixed tensor-tilt consistency relation,
no-running spectral assumption and chain-based posterior analysis. The
article labels the reported bound a 95% confidence limit, but does not state
the prior on $r$ or define a frequentist coverage calculation for that bound.
It is therefore retained here as the source-reported limit, without inferring
calibrated frequentist coverage or a posterior probability that a model is
true. The Planck low-$\ell$ polarization likelihood accounts for uncertainty
in the estimated covariance using 400 PR4 simulations; the paper estimates the
finite-simulation uncertainty in that covariance at about 5% and marginalizes
over it. No raw sky maps, full
likelihood reconstruction or independent covariance analysis is included
here; no precision beyond the reported limit is inferred.

Calibration uncertainties remain conditional on the instrument models and
simulation inputs. NPIPE's Table 7 gives gain recovery, not an uncertainty on
$r$; its §4.3 also cautions that its simulations have insufficient CMB B-mode
signal to measure a B-mode transfer function. BICEP3's polarization-angle and
cross-polar response calibration has its own systematic limitations. BK18
Appendix F.3 tests conservative band-centre shifts of $\pm2\%$ in simulations
and separately marginalizes over per-band fractional shifts with Gaussian
mean zero and standard deviation $0.02$. Those tests concern the BK18
baseline analysis; they are not a newly computed error budget for the
Tristram PR4 combination. This record neither adds their errors in quadrature
to the reported limit nor asserts that every calibration uncertainty was
independently audited.

## Uncertainty references

[Tristram et al., §§III–VI and Appendix](https://arxiv.org/pdf/2112.07961v2)

[Planck Collaboration, NPIPE §§4.3 and 6.1, Table 7](https://arxiv.org/pdf/2007.04997v1)

[BICEP/Keck XV, §VIII.9](https://arxiv.org/html/2110.00482v1)

[BICEP/Keck XIII, Appendix F.3](https://arxiv.org/html/2110.00483v1)

## Interpretation

This analysis constrains $r$ for the stated primordial-spectrum convention
and data/model combination. It neither proves an inflationary model nor
measures string theory directly. A 95% confidence upper bound is not the
probability that a model is true, and the reported compatibility with $r=0$
does not establish that the tensor spectrum vanishes.

## Interpretation references

[[def-r5-inflation-cmb-observables]]

[Tristram et al., §VI and conclusion](https://arxiv.org/pdf/2112.07961v2)
