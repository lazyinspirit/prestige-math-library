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
physical_scope: Source-reported CMS global dimension-six SMEFT fit combining seven CMS measurement sets and electroweak precision inputs, with the source's topU3l flavor restriction and CP-violating variants excluded. Its 64 studied coefficients are a subset of the resulting 129-operator model; the simultaneous linear fit retains 43 directions and fixes 21 insufficiently constrained directions to zero. This item does not reanalyse the component datasets or claim that the fit tension is evidence for new physics.
empirical_result:
  observation: >-
    CMS reports a 2.5% Standard Model compatibility p-value for its
    43-direction fit, rising to 27% when the inclusive-jet input is removed.
    The collaboration attributes the main tension to inclusive-jet data and
    notes PDF sensitivity. The global test statistic and null calibration for
    these values are not reconstructed here; they are not inferred from the
    coefficient-interval calibration.
  uncertainty: >-
    The fit uses available experimental likelihoods and simplified likelihoods
    for other inputs. Its simplified Gaussian term sets cross-measurement
    covariances to zero while retaining within-measurement correlations;
    available experimental terms use constrained nuisance parameters.
    The source reports pseudoexperiment coverage studies with
    some slight under- or over-coverage; raw events and full component
    likelihoods are not independently reconstructed here. Those studies
    concern coefficient-interval coverage and do not reconstruct the null
    calibration of the separate Standard Model compatibility p-values.
  conditions: >-
    Seven CMS measurement sets at 13 TeV with 36.3 or 138 fb^-1, supplemented
    by electroweak precision observables; 64 individual dimension-six
    coefficients selected from the source's 129-operator topU3l model with
    CP-violating variants excluded, and a 43-direction principal-component
    fit with 21 insufficiently constrained directions fixed to zero. The main
    simultaneous constraints are linear in dimension-six coefficients.
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

The CMS collaboration combines seven CMS measurement sets with proton-proton collision data at $13\ {\rm TeV}$, using input-specific integrated luminosities of $36.3$ or $138\ {\rm fb}^{-1}$, and supplements them with electroweak precision observables. Integrated luminosity denotes the calibrated exposure of a dataset.

The analysis restricts the supplied three-family SMEFT coefficient convention to the source's “topU3l” flavor model, labelled by $U(3)_\ell\times U(3)_e\times U(2)_q\times U(2)_u\times U(2)_d$. Here $U(n)=\{V\in\mathbb C^{n\times n}:V^\dagger V=I_n\}$; the first two factors rotate the three lepton families of $\ell_L,e_R$, and each quark factor rotates the first two families of its named field, with the third family separate. The source's coefficient restrictions, rather than unrestricted three-family tensors, are used. CMS excludes the variants violating charge conjugation followed by spatial parity (CP), leaving its 129-operator model; the 64 coefficients studied are the subset listed in its Table 1. These are additional analysis assumptions, not restrictions imposed by the general Warsaw supplier.

For the simultaneous linear fit, the source uses orthogonal linear combinations $\mathbf e=R\mathbf c$, where $\mathbf c\in\mathbb R^{64}$ is its coefficient vector and $R\in\mathbb R^{64\times64}$, $RR^T=I_{64}$, is the source's principal-component rotation from the likelihood Hessian. It retains 43 directions under its finite sensitivity cutoff and fixes the remaining 21 insufficiently constrained directions to zero. This does not assert identically zero sensitivity to those 21 directions.

## Setup references

[[post-aqft-smeft-model|Adopted SMEFT field content and operator-expansion conventions]]

[[def-aqft-warsaw-basis-contract|Warsaw-basis operator and coefficient conventions]]

[CMS global SMEFT fit, full article](https://arxiv.org/pdf/2504.02958v2)

## Procedure

CMS uses the hybrid likelihood $L=L_{\rm expt}L_{\rm simpl}$ of its equations (11)–(13). In the experimental term, reconstruction-bin counts $n_i\in\mathbb N_0$, for a finite bin index set $I$, are conditionally independent at fixed coefficients $\mathbf c$ and nuisance vector $\boldsymbol\nu$. Their nonnegative expected counts are $e_i(\mathbf c,\boldsymbol\nu)$, and
$$L_{\rm expt}=\prod_{i\in I}\operatorname{Pois}(n_i;e_i)\prod_{k\in K}p_k(y_k;\nu_k),\qquad \operatorname{Pois}(n;e)=e^{-e}e^n/n!,$$
with $0^0=1$. Here $K$ is finite and $p_k$ are the source's auxiliary-observation densities constraining nuisance coordinates $\nu_k$; $y_k$ are their observed values. Typically $e_i=\sum_j\mu'_j(\mathbf c)s_i^j(\boldsymbol\nu)+b_i(\boldsymbol\nu)$, with finite signal-process/bin index $j$, signal and background expected counts $s_i^j,b_i$, and dimensionless cross-section ratios $\mu'_j$ relative to the Standard Model. For the source's $t(t)X$ input, yields are parameterized directly in the coefficients. Counts and their expectations are dimensionless.

For the remaining measurements, let $\widehat{\boldsymbol\mu}\in\mathbb R^m$ be the measured cross-section or pseudo-observable ratios to Standard Model predictions, and let $\boldsymbol\mu(\mathbf c)\in\mathbb R^m$ be their predicted ratios. The simplified term is the multivariate Gaussian density
$$L_{\rm simpl}=\frac{\exp[-\tfrac12(\widehat{\boldsymbol\mu}-\boldsymbol\mu(\mathbf c))^TV^{-1}(\widehat{\boldsymbol\mu}-\boldsymbol\mu(\mathbf c))]}{(2\pi)^{m/2}\sqrt{\det V}},\qquad V=V_{\rm ex}+V_{\rm th}.$$
The fixed covariance $V\in\mathbb R^{m\times m}$ is symmetric positive definite for this density, with experimental and theory contributions. It is block diagonal by input measurement: cross-measurement entries vanish, while within-measurement correlations are retained. This term has no explicit nuisance parameters. These are adopted sampling and uncertainty assumptions, not consequences of generic likelihood definitions. The product uses the source's statistically independent event selections and its auxiliary-factor model; it does not impose zero cross-measurement nuisance correlations on $L_{\rm expt}$.

The fit profiles nuisance parameters, meaning it maximizes over them at each fixed Wilson-coefficient value. CMS reports constraints from linear-only dimension-six predictions as its main results and presents linear-plus-quadratic results separately. For coefficient intervals, the paper states a profile-likelihood-ratio statistic and an asymptotic interval procedure, with pseudoexperiment coverage studies for selected fits. The results section separately reports the 2.5% and 27% Standard Model compatibility p-values for the 43-direction fit and the fit without inclusive-jet input, respectively, but does not identify a global test statistic or its null calibration there. This record does not reconstruct that calibration or infer it from the coefficient-interval procedure.

## Procedure references

[[def-cm-likelihood-function|Likelihood functions for observed data]]

[[def-aqft-profile-likelihood-ratio|Profile likelihood ratios with nuisance parameters]]

[[def-aqft-calibrated-pvalue|P-values under an explicit null calibration]]

[CMS global SMEFT fit, §6 equations (11)–(13), printed p.21, likelihood and nuisance treatment](https://arxiv.org/pdf/2504.02958v2)

## Observations

For its 43-direction fit, CMS reports a Standard Model compatibility $p$-value of $2.5\%$. The reported value rises to $27\%$ when the inclusive-jet input is removed. The paper identifies inclusive-jet data as the main source of the tension and notes sensitivity to parton-distribution-function choices. The global test statistic and its null calibration are not reconstructed here, and the values are not assigned the coefficient-interval calibration. This is a fit-specific source-reported statistical result, not evidence that new physics or a particular operator has been observed and not the probability that the Standard Model is false.

## Observations references

[[def-aqft-calibrated-pvalue|Null-calibrated tail probability and its interpretation]]

[CMS global SMEFT fit, compatibility results and inclusive-jet discussion](https://arxiv.org/pdf/2504.02958v2)

[Wasserman, statistical interpretation of p-values, full textbook §10.2](https://sites.santafe.edu/~aaronc/shared/Wasserman_AllOfStatistics_BOOK.pdf)

## Uncertainty

Experimental likelihood and nuisance-correlation details vary by input. The simplified term's zero cross-measurement covariances are an approximation; its retained correlations do not supply the omitted ones. The paper tests likelihood coverage with pseudoexperiments and reports slight under- or over-coverage in some tested cases; its confidence regions should not be described as exact nominal coverage for every direction. This record does not recover raw events, fit all component analyses anew, or perform a simultaneous PDF and SMEFT fit.

## Uncertainty references

[[def-cm-confidence-set-and-coverage|Confidence sets and their coverage property]]

[CMS global SMEFT fit, uncertainty model and pseudoexperiment coverage study](https://arxiv.org/pdf/2504.02958v2)

## Interpretation

The main simultaneous coefficient constraints are linear in the dimension-six coefficients and conditional on the stated topU3l restriction, excluded CP-violating variants and fixed directions. The separately reported quadratic terms include squares of dimension-six amplitudes, but by themselves do not include the dimension-eight interference terms also contributing at order $\Lambda^{-4}$; they are not a complete prediction through that order. The $2.5\%$ compatibility result is driven mainly by one selected input and depends on the chosen PDF and likelihood treatment. It does not establish new physics or exclude the Standard Model as a model.

## Interpretation references

[[aqft-eft-experimental-inference|Page-level scope and prerequisite interface]]

[CMS global SMEFT fit, truncation and interpretation qualifications](https://arxiv.org/pdf/2504.02958v2)
