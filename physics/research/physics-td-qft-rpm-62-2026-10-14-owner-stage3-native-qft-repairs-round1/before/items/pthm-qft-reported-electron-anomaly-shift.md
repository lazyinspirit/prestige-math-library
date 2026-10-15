---
id: pthm-qft-reported-electron-anomaly-shift
kind: physics-theorem
title: Qualified reported anomaly by exact affine subtraction
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: physics
library: physics
dependency_level: 3
deps:
  - exp-qft-fan-electron-moment-2022
dependency_roles:
  exp-qft-fan-electron-moment-2022: empirical-premise
physical_scope: >-
  Exact affine derivation from the 2022 reported one-electron Penning-trap
  estimate. The anomaly inherits the source's apparatus, correction, 11-field
  weighting, stated 1 sigma uncertainty, correlation caveat, and omitted-data
  limitations; no theory comparison or new statistical inference is made.
empirical_premises:
  - experiment: exp-qft-fan-electron-moment-2022
    conditions: >-
      Reported 2022 one-electron cryogenic Penning-trap determination using
      alternating quantum-jump spectroscopy, fitted and corrected frequencies,
      eleven weighted field determinations, and cavity/broadening analysis;
      raw trials, covariance matrix, and weights are not reconstructed here.
    uncertainty: >-
      Authors state a 1 sigma uncertainty of 1.3e-13 in the dimensionless
      ratio; nearby-field cavity uncertainties are correlated. No Gaussian,
      independent, posterior, or coverage interpretation is added.
    use: >-
      Subtract the exact reference value 1 from the source-reported ratio.
      The affine shift preserves the reported deviation and stated uncertainty;
      no theory comparison is inferred.
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: X. Fan et al., Measurement of the Electron Magnetic Moment, Physical Review Letters 130, 071801 (2023), arXiv:2209.13084v2 (2022)
      url: https://arxiv.org/html/2209.13084
---

## Statement

Let the source-reported dimensionless ratio be denoted
$\widehat{g_s/2}:=-\widehat\mu/\mu_B$, where $\mu_B=e\hbar/(2m)$ is the
Bohr magneton, with $e>0$ the elementary-charge magnitude in coulombs,
$\hbar$ the reduced Planck constant in joule-seconds, and $m>0$ the electron
rest mass in kilograms, as specified in
[[exp-qft-fan-electron-moment-2022]]. The hat marks an empirical estimate,
not an exact constant.
Define the derived dimensionless anomaly estimate
$\widehat a_e:=\widehat{g_s/2}-1$. Under the empirical premise from
[[exp-qft-fan-electron-moment-2022]], whose reported central value is
$\widehat{g_s/2}=1.00115965218059$, exact subtraction gives
$$\widehat a_e=0.00115965218059.$$
The source-stated $1\sigma$ uncertainty remains $1.3\times10^{-13}$, and all
apparatus, correction, weighting, correlation, and source-data qualifications
of the experiment remain in force. This is only an affine transformation of a
reported estimate; it supplies no comparison with a theoretical prediction.

## Facts & Assumptions

**Given:** The empirical premise and its reported qualifications in [[exp-qft-fan-electron-moment-2022]].

[F1] [[exp-qft-fan-electron-moment-2022]]: the authors report $-\mu/\mu_B=g/2=1.00115965218059(13)$ as the weighted average of eleven corrected field determinations; they state a $1\sigma$ uncertainty of $1.3\times10^{-13}$ and note correlated nearby-field cavity uncertainties. The report's raw trials, covariance matrix, and weights are not reconstructed here.

[A1] The reference value $1$ in $\widehat a_e=\widehat{g_s/2}-1$ is exact and dimensionless.

## Proof

**Given:** [F1], [A1], and the definition of $\widehat a_e$ in the Statement.

1.1 Subtracting the exact reference gives $\widehat a_e=1.00115965218059-1=0.00115965218059$. [given, F1, A1, algebra]

2.1 If the reported ratio is shifted from its central value by any deviation $\delta$, subtracting the same exact $1$ leaves that deviation unchanged. Therefore the source-stated $1\sigma$ uncertainty remains $1.3\times10^{-13}$, with the same measurement conditions, correction, weighting, correlation caveat, and omitted raw-data limitations from [F1]. No sampling distribution or theory comparison is introduced. [F1, step 1.1, algebra] ∎
