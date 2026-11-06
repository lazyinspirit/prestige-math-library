---
id: exp-r5-desi-dr2-bao-cosmology-inference
kind: experiment
title: "DESI DR2 BAO measurements and qualified dark-energy inference"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 0
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this experiment in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
physical_scope: "Source-reported DESI DR2 baryon-acoustic-oscillation measurements and specified cosmological data/model comparisons. The results are not direct measurements of string theory."
empirical_result:
  observation: >-
    DESI Collaboration reports BAO measurements from more than 14 million
    galaxies and quasars over three years, combined for inference with its
    companion Lyman-alpha forest BAO results. In the paper's flat Lambda-CDM
    comparison, DESI DR2 BAO parameters are reported in 2.3 sigma tension with
    CMB-derived parameters, reduced to 2.0 sigma when CMB lensing is excluded.
    For w(a)=w0+wa(1-a), the paper reports a 3.1 sigma
    preference over Lambda-CDM for DESI+CMB and 2.8, 3.8 and 4.2 sigma after
    adding Pantheon+, Union3 and DESY5 supernova samples, respectively.
  uncertainty: >-
    For the separate flat Lambda-CDM BAO-CMB comparison, the paper combines
    the two-parameter estimates using their summed posterior covariance and
    includes no cross-covariance term (zero cross-covariance is assumed for
    this discrepancy statistic); it reports a probability-to-exceed and
    2.3 sigma with CMB lensing and 2.0 sigma without it. The distinct 3.1 sigma
    evolving-dark-energy comparison uses the best-fit Delta-chi-square statistic
    mapped with Wilks' theorem to two degrees of freedom, assuming the null
    model and correctly estimated Gaussian errors. The analysis also reports
    DIC comparisons. The significance changes with the CMB likelihood and data
    combination: it falls to 2.7 sigma without CMB lensing and 2.4 sigma when
    only early-Universe CMB priors are used. Dark-energy parameter priors and
    supernova samples are source-selected. The BAO systematic-error budget
    increases total alpha_iso uncertainty by 1--9% and alpha_AP uncertainty
    by 0.1--2%; statistical finite-volume and sampling-density errors dominate.
    The spectra reduction also corrected a co-addition error, with about 0.1%
    of redshifts changing significantly between Kibo and Loa. No raw-data or
    likelihood reanalysis is performed here.
  conditions: >-
    DESI Data Release 2 spectra from the Mayall telescope over the first three
    years of operation, with BGS/LRG/ELG/QSO tracers, stated redshift bins and
    catalog completeness, and the companion Lyman-alpha forest BAO analysis;
    model comparisons use stated CMB
    likelihoods and, in separate combinations, Pantheon+, Union3 or DESY5
    supernova samples. The dynamical-dark-energy extension uses
    w(a)=w0+wa(1-a) in a flat cosmology.
  source_url: https://arxiv.org/pdf/2503.14738v3
sources:
  references:
    - title: "DESI Collaboration, DESI DR2 Results II: Measurements of baryon acoustic oscillations and cosmological constraints, arXiv:2503.14738v3"
      url: "https://arxiv.org/pdf/2503.14738v3"
      locator: "Complete 41-page article; §II (Mayall/DESI apparatus, calibration configuration, DR2 reduction and tracer samples), §III (catalog preparation, blinding, reconstruction, BAO fitting and systematics), §V (Cobaya MCMC), §VI Eq. (18), §VII Eq. (22) and Table 6, and conclusion."
    - title: "S. D. Landy and A. S. Szalay, Bias and variance of angular correlation functions, Astrophysical Journal 412(1), 64–71 (1993)"
      url: "https://doi.org/10.1086/172900"
      locator: "Abstract; the recommended correlation estimator (DD−2DR+RR)/RR and its data–data, data–random, and random–random pair-count inputs."
    - title: "D. J. Spiegelhalter, N. G. Best, B. P. Carlin, and A. van der Linde, Bayesian measures of model complexity and fit, Journal of the Royal Statistical Society: Series B 64(4), 583–639 (2002)"
      url: "https://doi.org/10.1111/1467-9868.00353"
      locator: "§7.3, Eqs. (36)–(37), pp. 603–604; DIC as posterior mean deviance plus the effective-parameter penalty."
    - title: "DESI Collaboration, DESI DR2 Results I: Baryon Acoustic Oscillations from the Lyman Alpha Forest, arXiv:2503.14739v2"
      url: "https://arxiv.org/html/2503.14739v2"
      locator: "§II.4, Eqs. (1)–(2): transmitted-flux contrast, mean transmission times unabsorbed continuum, and fitted expected-flux product; selected passage read, not a data or likelihood replay."
    - title: "N. Padmanabhan et al., A 2% Distance to z=0.35 by Reconstructing Baryon Acoustic Oscillations — I: Methods and Application to the Sloan Digital Sky Survey, arXiv:1202.0090v1"
      url: "https://arxiv.org/html/1202.0090"
      locator: "§2.2, steps 7–9 and Eq. (1): displaced data D, shifted selection points S and unshifted random normalization R; §2.2 read through Eq. (2). Its SDSS-specific weights and displacement settings are not substituted for DESI settings."
---
## Setup

The source reports baryon acoustic oscillation (BAO) distance measurements from
more than 14 million DESI Data Release 2 galaxies and quasars observed over
three years, together with the companion Lyman-$\alpha$ forest BAO results.
DESI is the Dark Energy Spectroscopic Instrument on the 4-m Nicholas U. Mayall
Telescope at Kitt Peak. Its robotic focal plane assigns 5000 fibers across a
7-square-degree field; ten spectrographs record target, calibration-star and
sky spectra from 360 to 980 nm. The paper analyzes main-survey observations
from 14 May 2021 through 9 April 2024. It reports wavelength and flux
calibration from this setup; this item does not independently reprocess or
recalibrate those spectra.

The paper's Table 2 reports 1,188,526 bright-galaxy-sample (BGS) entries in
$0.1<z<0.4$, 4,468,483 luminous-red-galaxy (LRG) entries in $0.4<z<1.1$,
6,534,844 emission-line-galaxy (ELG) entries in $0.8<z<1.6$, and 2,062,839
quasar (QSO) entries in $0.8<z<3.5$. Their assignment completeness and
redshift-success fractions are, respectively, BGS $75.5\%$ and $98.8\%$,
LRG $82.6\%$ and $99.0\%$, ELG $53.7\%$ and $73.9\%$, and QSO $93.6\%$
and $68.0\%$. The paper states that the success rates and completeness are
computed without additional redshift cuts; the sample ranges and footprints
also differ by tracer. Table 3 gives the BAO fitting bins: BGS $0.1<z<0.4$,
LRG1 $0.4<z<0.6$, LRG2 $0.6<z<0.8$, the baseline combined LRG3+ELG1 sample
$0.8<z<1.1$, ELG2 $1.1<z<1.6$, and QSO $0.8<z<2.1$. In the overlapping
$0.8<z<1.1$ interval, the baseline fit combines LRG3 and ELG1; Table 3 also
reports their separate counts. The companion
Lyman-$\alpha$ analysis uses forest spectra of quasars above $z=2.09$ and
quasar positions above $z=1.77$ for the cross-correlation; its forest BAO
sample covers $1.8<z<4.2$. These are selected catalog entries, not a single
complete sample with uniform redshift coverage.
For this item, a spatially flat homogeneous and isotropic FLRW background means
the spacetime $I\times\mathbb R^3$ with metric
$$ds^2=-c^2dt^2+a(t)^2\delta_{ij}dx^i dx^j,$$
where $I$ is an open interval measured in seconds, $t\in I$, $\mathbf x\in\mathbb R^3$
has coordinates in metres, $a:I\to(0,\infty)$ is a smooth dimensionless
scale factor, and $c$ is the speed of light in metres per second. A comoving
observer is the worldline $t\mapsto(t,\mathbf x_0)$ for fixed $\mathbf x_0$;
the metric makes $t$ its proper-time parameter. The fitted branch is expanding
over the sampled redshift range: $\dot a>0$. Normalize $a(t_0)=1$ today,
define redshift by $1+z=a(t_0)/a(t)$, and set $H(t)=\dot a(t)/a(t)$ and
$H(z)=H(t(z))$, with $H$ in inverse seconds. For nonnegative redshifts in the
fit, define the transverse comoving and radial Hubble distances by
$$D_M(z)=c\int_0^z\frac{dz'}{H(z')},\qquad D_H(z)=\frac{c}{H(z)},$$
and the comoving sound horizon at baryon-drag redshift $z_d$ by
$$r_d=\int_{z_d}^{\infty}\frac{c_s(z)}{H(z)}\,dz,$$
where $z_d$ is the redshift at which baryons cease to be efficiently dragged
by photons in the adopted early-time model, and $c_s(z)$ is the propagation
speed, in metres per second, of its coupled baryon-photon acoustic mode.
Require $H(z)>0$ over the integration ranges and finite $r_d$ in each fit.
The isotropic BAO distance is $D_V(z)=[zD_H(z)D_M(z)^2]^{1/3}$. Here
$D_M,D_H,D_V,r_d$ have units of length, and the reported ratios
$D_M/r_d$, $D_H/r_d$, and $D_V/r_d$ are dimensionless. For the model-level
galaxy/quasar correlation, let $\Xi$ be a set of tracer realizations, let
$\mathcal A$ be a sigma-algebra on $\Xi$, and let $\mathbb P$ be a countably
additive probability measure on $\mathcal A$ with $\mathbb P(\Xi)=1$. For
tracer $t$, let $\Omega_t\subseteq\mathbb R^3$ be the measurable comoving
survey window selected by its sky mask and redshift range. A model
number-density field is a jointly measurable map
$n_t:\Xi\times\Omega_t\to[0,\infty)$ on the product of $\mathcal A$ and the
Borel sigma-algebra of $\Omega_t$, with finite second moments at the pairs
used. Its mean intensity is
$\bar n_t(\mathbf x):=\mathbb E_{\mathbb P}[n_t(\cdot,\mathbf x)]$, assumed
finite and strictly positive on $\Omega_t$; both fields have units of number
per comoving volume. Define the dimensionless model overdensity
$\delta_t(\omega,\mathbf x):=n_t(\omega,\mathbf x)/\bar n_t(\mathbf x)-1$.
The redshift-space model two-point function is
$\xi_t(\mathbf x,\mathbf r):=\mathbb E_{\mathbb P}[\delta_t(\cdot,\mathbf x)
\delta_t(\cdot,\mathbf x+\mathbf r)]$ whenever both positions lie in
$\Omega_t$. The observed catalogs are finite and discrete, not smooth density
functions; this equation defines a model correlation and assumes no smoothness
of catalog data. For a forest sightline $q$ and selected spectral pixel $\lambda$,
the dimensionless transmitted-flux contrast is
$$\delta_q(\lambda)=\frac{f_{\alpha,q}(\lambda)}{\overline F(\lambda)C_q(\lambda)}-1,$$
where $f_{\alpha,q}$ is the measured spectral flux density,
$\overline F(\lambda)>0$ is the dimensionless mean transmission, and
$C_q(\lambda)>0$ is the unabsorbed quasar continuum in the same flux-density
units as $f_{\alpha,q}$. On the retained pixels, the fitted expected flux is
the product $\overline F(\lambda)C_q(\lambda)$; the continuum alone is not
the denominator. The source's
BAO feature is the acoustic-scale excess in its binned redshift-space galaxy/
quasar and forest correlations, fit against the paper's templates. The ratios
are inferred fit parameters relative to the model sound horizon, not direct
measurements of absolute distances. Distances are reported in Mpc, with factors
of $c$ and $H$ converted consistently.

The baseline flat $\Lambda$CDM comparison is the paper's spatially flat
Friedmann–Lemaître–Robertson–Walker cosmology in general relativity with a
cosmological-constant component whose pressure equals minus its energy density,
pressureless cold dark matter and baryons at late times, photons, and the
standard baseline neutrino sector ($N_{\rm eff}=3.044$ and fixed
$\sum m_\nu=0.06\,\mathrm{eV}$ in the source's baseline model). Here
$N_{\rm eff}$ is its effective relativistic-species parameter and
$\sum m_\nu$ is the total neutrino rest mass; both are fixed inputs in this
analysis, not fitted parameters. Their homogeneous components use
perfect-fluid stress tensors
$T^\mu{}_{\nu}=\operatorname{diag}(-\rho,p,p,p)$ in the stated comoving frame;
pressureless matter has $p=0$ and the cosmological-constant component has
$p_\Lambda=-\rho_\Lambda$. Their densities and the likelihoods are inputs to
the fit, not results of this item. The
cosmological interpretation combines the BAO estimates with stated
cosmic-microwave-background (CMB) likelihoods and, in separate fits, Type Ia
supernova samples.

The dynamical-dark-energy extension replaces the cosmological-constant
equation of state with that of a homogeneous effective component,
$$w(a)=w_0+w_a(1-a),$$
where $w(a)=p_{\rm de}(a)/\rho_{\rm de}(a)$, with $p_{\rm de}$ and
$\rho_{\rm de}$ the model pressure and energy density. Since $a(t_0)=1$,
$w_0$ is the present equation-of-state parameter; $w_a$ controls its linear
dependence on $1-a$. The fits remain spatially flat. The authors use broad
uniform priors $w_0\in[-3,1]$, $w_a\in[-3,2]$, and impose
$w_0+w_a<0$ to enforce early matter domination. These choices are part of
the reported analysis.

## Setup references

[DESI Collaboration, abstract, §§II and VII](https://arxiv.org/pdf/2503.14738v3)

[DESI DR2 Results I, §II.4, Eqs. (1)–(2)](https://arxiv.org/html/2503.14739v2)

## Procedure

The spectra are reduced and redshifts estimated through the DESI pipelines.
The paper reports an original homogeneous reduction (Kibo) and a corrected
rerun (Loa) after a co-addition error between separate exposures was found;
about 0.1% of redshifts changed significantly between them, and both catalog
versions are released. The analysis constructs large-scale-structure catalogs,
blinds the BAO peak position until analysis choices are fixed, and applies
IterativeFFT density-field reconstruction to galaxy/quasar catalogs. It then
estimates the binned redshift-space two-point correlation with the
post-reconstruction Landy–Szalay estimator
$$\hat\xi_{\rm rec}=(DD-2DS+SS)/RR,$$
where $D$ is the displaced data catalog, $S$ is the shifted random catalog,
and $R$ is an unshifted random catalog sampling the source-defined survey
selection function. Here $DD$, $DS$, $SS$, and $RR$ are the respective
source-normalized weighted pair counts in a bin, with $RR>0$. The numerator
uses displaced data and shifted randoms; its normalization uses unshifted
randoms. The estimator retains the source's reconstruction convention, pair
weights and normalizations.
The bin coordinates are $s$, the redshift-space pair separation, and
$\mu=\cos\theta$, where $\theta$ is the angle between the pair and the line
of sight; the source decomposes the binned correlation into Legendre
multipoles, focusing on the monopole and quadrupole. These are estimates from
finite catalogs, not pointwise evaluations of the model fields. For the
Lyman-$\alpha$ forest, the companion source's picca analysis fits the
expected-flux product $\overline F C_q$ using a universal rest-frame template
and two diversity parameters per quasar. It forms four correlations: region A
($1040$–$1205\,\text{\AA}$) with A, A with region B ($920$–$1020\,\text{\AA}$),
and each region with quasars. The analysis uses line-of-sight and transverse
comoving separations and fits these correlations with the source's stated
covariance. For a fixed fiducial
cosmology, whose distances and sound horizon carry the superscript $\mathrm{fid}$,
define the dimensionless template dilations at positive fitted redshift by
$$\alpha_\parallel(z)=\frac{D_H(z)r_d^{\mathrm{fid}}}{D_H^{\mathrm{fid}}(z)r_d},\qquad \alpha_\perp(z)=\frac{D_M(z)r_d^{\mathrm{fid}}}{D_M^{\mathrm{fid}}(z)r_d},\qquad \alpha_{\rm iso}=(\alpha_\parallel\alpha_\perp^2)^{1/3},\qquad \alpha_{\rm AP}=\alpha_\parallel/\alpha_\perp.$$
The fit marginalizes over broadband and tracer nuisance parameters and includes
tracer-specific systematic-error budgets. The companion Lyman-$\alpha$ analysis fits forest
auto-correlations and forest--quasar cross-correlations. Cosmological
posteriors are sampled with Cobaya using Metropolis--Hastings Markov-chain
Monte Carlo, with theoretical predictions from CAMB and the stated likelihoods.
The source's convergence criterion is $R-1<0.01$ for the Gelman--Rubin
statistic or effective sample size at least $10^3$, whichever requires longer
chains.
This item records the source's published analysis and does not rerun the
pipeline, chains or likelihoods.

The paper fits the resulting distance-redshift constraints under flat
$\Lambda$CDM and $w_0w_a$CDM. It compares best-fit likelihoods using
$\Delta\chi^2_{\rm MAP}$, and also reports the Deviance Information
Criterion (DIC).

Under the Spiegelhalter et al. convention, for observed data $y$, parameter
vector $\theta$, the article's likelihood $L(y\mid\theta)$ and posterior
$p(\theta\mid y)$ under its stated prior,
define the deviance $d(\theta):=-2\log L(y\mid\theta)$,
$\bar d:=\mathbb E_{\theta\mid y}[d(\theta)]$,
$\bar\theta:=\mathbb E_{\theta\mid y}[\theta]$,
$p_D:=\bar d-d(\bar\theta)$, and $\mathrm{DIC}:=\bar d+p_D$.
The DESI paper reports DIC differences; this item does not reproduce or rely
on those values.

For the reported $3.1\sigma$ DESI+CMB comparison, the paper has
$\Delta\chi^2_{\rm MAP}=-12.5$. It maps this improvement to a
two-degree-of-freedom $\chi^2$ tail using Wilks' theorem, under the stated
assumptions that $\Lambda$CDM is the null model and errors are Gaussian and
correctly estimated. The quoted one-dimensional Gaussian-equivalent
significance is therefore conditional on that calibration; it is not a
probability that either cosmological model is true.

Separately, for its flat-$\Lambda$CDM BAO–CMB consistency comparison, set
$H_0:=H(z=0)$, let $\Omega_m$ be the present matter energy density divided by
the critical energy density $\rho_{\rm crit}:=3H_0^2c^2/(8\pi G)$, where
$c$ is the fixed SI speed-of-light constant and $G$ is the positive Newton
gravitational coupling in the Einstein equations; neither is estimated by
this analysis. Define
$h:=H_0/(100\,\mathrm{km\,s^{-1}\,Mpc^{-1}})$. In this expression
$\rho_{\rm crit}$ and the matter density have units of energy per volume,
$H_0$ has units of inverse time, $G$ has units of $\mathrm{m^3\,kg^{-1}\,s^{-2}}$,
and $h,\Omega_m$ are dimensionless. The paper forms
$$\chi^2_{\rm rel}=(p_{\rm BAO}-p_{\rm CMB})^T \bigl(C_{\rm BAO}+C_{\rm CMB}\bigr)^{-1} (p_{\rm BAO}-p_{\rm CMB}),\qquad p=(\Omega_m,h r_d),$$
where $C_{\rm BAO}$ and $C_{\rm CMB}$ are the corresponding two-parameter
posterior covariance matrices. The stated sum uses no cross-covariance term,
so the discrepancy calculation treats the BAO and CMB parameter estimates as
independent for this comparison. It converts this statistic to a
probability-to-exceed (the calibrated tail probability) and reports the
equivalent Gaussian significance as
$2.3\sigma$ with CMB lensing and $2.0\sigma$ when CMB lensing is excluded.
This is a separate covariance-based discrepancy calculation, not the
Wilks-calibrated $\Delta\chi^2_{\rm MAP}$ comparison above.

## Procedure references

[DESI Collaboration, §§III.1–III.2 for the galaxy/quasar and forest correlation analyses, §VI Eq. (18) for the BAO–CMB covariance comparison, and §VII Eq. (22) for the Wilks-calibrated model comparison](https://arxiv.org/pdf/2503.14738v3)

[Padmanabhan et al., §2.2, steps 7–9 and Eq. (1), for the reconstructed estimator](https://arxiv.org/html/1202.0090)

[DESI DR2 Results I, §II.4, Eq. (2), for the fitted expected-flux product](https://arxiv.org/html/2503.14739v2)

[Landy and Szalay, abstract and unreconstructed estimator](https://doi.org/10.1086/172900)

[Spiegelhalter et al., §7.3, Eqs. (36)–(37)](https://doi.org/10.1111/1467-9868.00353)

## Observations

In the flat $\Lambda$CDM fit, the DESI DR2 BAO parameters are reported in
$2.3\sigma$ tension with CMB-derived parameters ($2.0\sigma$ without CMB
lensing). The paper also states that
flat $\Lambda$CDM gives a good fit to the DESI BAO data themselves.

For the $w_0w_a$CDM extension, the authors report a $3.1\sigma$
preference over $\Lambda$CDM for DESI+CMB. Adding Type Ia supernova
samples gives $2.8\sigma$ with Pantheon+, $3.8\sigma$ with Union3, and
$4.2\sigma$ with DESY5. These are different dataset combinations and are
reported model-comparison results, not direct measurements of a fundamental
dark-energy law.

## Observations references

[DESI Collaboration, abstract, §VII and conclusion](https://arxiv.org/pdf/2503.14738v3)

## Uncertainty

The source's tracer table reports assignment completeness and redshift success
rates. Its BAO systematic-error budget increases the total uncertainty in
$\alpha_{\rm iso}$ by 1--9% and in $\alpha_{\rm AP}$ by 0.1--2%, while
stating that statistical errors from finite survey volume and sampling density
dominate. The paper identifies the $\Delta\chi^2_{\rm MAP}$-to-significance mapping
as a Wilks/Gaussian approximation with two additional degrees of freedom.
The reported result depends on the cosmological models, CMB likelihood,
supernova sample and adopted priors. The authors report that the DESI+CMB
preference falls from $3.1\sigma$ to $2.7\sigma$ without CMB lensing and
to $2.4\sigma$ when only an early-Universe CMB prior is imposed. The
supernova combinations span $2.8$–$4.2\sigma$; this spread is retained
rather than summarized as a single significance. The analysis is recorded
from the publication and is not independently rerun here.

## Uncertainty references

[DESI Collaboration, §VII and robustness discussion](https://arxiv.org/pdf/2503.14738v3)

## Interpretation

The observations support the stated cosmological distance constraints and
conditional model comparisons. They do not prove that dark energy evolves,
exclude $\Lambda$CDM, or establish a string-theory prediction. The
significances are statistical inferences for the specified data combinations,
model parameterizations and calibrations; they are not probabilities that a
theory is true.

## Interpretation references

[DESI Collaboration, abstract, §VII and conclusion](https://arxiv.org/pdf/2503.14738v3)
