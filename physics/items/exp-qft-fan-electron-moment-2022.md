---
id: exp-qft-fan-electron-moment-2022
kind: experiment
title: Fan2022 reported electron magnetic-moment determination
status: published
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: physics
library: physics
dependency_level: 2
deps:
  - def-qft-example-observable-types
  - lem-qft-example-penning-frequency-invariant
dependency_roles:
  def-qft-example-observable-types: formulation-prerequisite
  lem-qft-example-penning-frequency-invariant: operational-prerequisite
physical_scope: >-
  The source-reported 2022 one-electron cryogenic Penning-trap determination,
  including alternating quantum-jump trials, fitted and corrected frequencies,
  eleven weighted field determinations, and cavity and broadening analysis.
  The raw trials, covariance matrix, and weights are not reconstructed here.
provenance:
  statement: literature-derived
  proof: not-applicable
empirical_result:
  observation: >-
    Authors report -mu/mu_B = g/2 = 1.00115965218059(13) as the weighted average
    of eleven corrected determinations at different magnetic fields.
  uncertainty: >-
    The authors state a 1 sigma uncertainty of 1.3e-13 in the dimensionless
    ratio. Their table lists statistical 0.29, cyclotron broadening 0.94,
    cavity correction 0.90, nuclear paramagnetism 0.12, anomaly power shift
    0.10, and magnetic-field drift 0.09, all in units of 1e-13; nearby-field
    cavity uncertainties are treated as correlated. Raw trial data, numerical
    covariance, and weights are not supplied here, and no Gaussian,
    independence, posterior, or coverage claim is added.
  conditions: >-
    One electron in a cylindrical silver-electrode Penning trap, nominally
    50 mK on a 4.2 K solenoid, in a magnetic field near 5.3 T. Alternating
    cyclotron and anomaly quantum-jump spectroscopy, axial-frequency
    detection, line-shape fitting, field-drift correction, and cavity-shift
    correction are those reported by the authors.
  source_url: https://arxiv.org/html/2209.13084
empirical_premises: []
sources:
  references:
    - title: X. Fan et al., Measurement of the Electron Magnetic Moment, Physical Review Letters 130, 071801 (2023), arXiv:2209.13084v2 (2022)
      url: https://arxiv.org/html/2209.13084
verification:
  sources_checked:
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    by: "Completed delegated workflow source/scope reviewers and adjudicators; owner accepted existing evidence"
---

## Setup

The primary report is X. Fan, T. G. Myers, B. A. D. Sukra, and
G. Gabrielse, “Measurement of the Electron Magnetic Moment,”
arXiv:2209.13084v2 (7 December 2022), published as
Physical Review Letters 130, 071801 (2023). It reports a one-electron
quantum cyclotron in a cylindrical silver-electrode Penning trap. A magnetic
field near $5.3\,\mathrm T$ and an electrostatic quadrupole potential confine
the electron; the source describes a nominal $50\,\mathrm{mK}$ trap on a
$4.2\,\mathrm K$ solenoid and a cavity cooled below $100\,\mathrm{mK}$.
The axial detection amplifier heats the axial motion to a source-reported
$T_z\approx0.5\,\mathrm K$; this is distinct from the nominal trap
temperature.

The source defines the magnetic moment ratio by
$-\mu/\mu_B=g/2$, with $\mu_B=e\hbar/(2m)$. Here $e>0$ is the elementary-charge
magnitude in coulombs, $\hbar$ is the reduced Planck constant in joule-seconds,
and $m>0$ is the electron rest mass in kilograms; accordingly $\mu_B$ has SI
unit $\mathrm{A\,m^2}$ (equivalently $\mathrm{J/T}$). The electron charge is
$-e$. This item denotes the reported dimensionless electron gyromagnetic
ratio as $g_s/2$, distinguishing it from the QFT coupling
$g_{\mathrm{em}}$ in [[def-qft-example-observable-types]]. The exact
finite-regulator, formal-coefficient, and source-reported estimate types are
those in [[def-qft-example-observable-types]].

The ideal linear model
[[lem-qft-example-penning-frequency-invariant]] gives a conditional
sum-of-squares identity for its complete stable mode spectrum. That lemma is
an ideal model supplier. The reported apparatus analysis additionally applies
relativistic-frequency and cavity corrections and is not reconstructed from
the ideal identity alone.

## Procedure

The authors infer $g/2$ from spin and cyclotron frequencies, using the
anomaly frequency $\nu_a=\nu_s-\nu_c$ and the ratio
$g/2=1+\nu_a/\nu_c$. The report gives trap-modified frequencies near
$\bar\nu_c=149\,\mathrm{GHz}$, $\bar\nu_a=173\,\mathrm{MHz}$, and
$\bar\nu_z=114\,\mathrm{MHz}$ at the stated field. It uses the
Brown–Gabrielse invariance relation to obtain the free cyclotron frequency,
then a corrected ratio involving fitted frequencies, the relativistic shift,
and an added cavity shift.

Cyclotron and anomaly quantum-jump trials are alternated. Each begins by
preparing the spin-up cyclotron ground state and applying one second of
magnetron sideband cooling. Cyclotron transitions are driven for five seconds
with excitation kept below 20 percent to limit saturation; anomaly transitions
are driven for 30 seconds. Axial-frequency shifts detect the spin and
cyclotron jumps. The authors fit measured line shapes to infer the relevant
frequencies and correct magnetic-field drift with a quadratic fit. Their
cyclotron line-shape fit includes Gaussian broadening to accommodate a
reported mismatch between the predicted and observed cyclotron line shape.

The cavity correction uses measured mode frequencies and quality factors.
The report describes three consistent measurement methods and a renormalized
calculation that subtracts ideal contributions for 72 modes and adds back
contributions using measured mode frequencies and quality factors. The leading
cavity-shift uncertainty is attributed to field modifications from cavity
imperfections and misalignment.

## Observations

The authors report the weighted average of eleven cavity-corrected
determinations:
$$-\frac{\mu}{\mu_B}=\frac{g}{2}=1.00115965218059(13).$$
They state that the parenthetical digits give a $1\sigma$ uncertainty of
$1.3\times10^{-13}$ in this dimensionless ratio. The reported consistency
across the eleven field settings is a source observation; this item does not
turn it into a proof of QED or of the apparatus model.

## Uncertainty

The paper's uncertainty table lists, in units of $10^{-13}$, statistical
$0.29$, cyclotron broadening $0.94$, cavity correction $0.90$, nuclear
paramagnetism $0.12$, anomaly power shift $0.10$, magnetic-field drift
$0.09$, and total $1.3$. The authors treat cavity uncertainties as correlated
for nearby field settings and do not recommend averaging this determination
with their 2008 result because correlations between similar methods are
difficult to determine. This record preserves the authors' stated $1\sigma$
uncertainty without treating it as a posterior probability or asserting
Gaussian, independent, or frequentist-coverage assumptions. The raw trial
record, full covariance matrix, and weights are not reconstructed here.

## Interpretation

This item records the source-reported estimate and its stated apparatus,
analysis, and uncertainty qualifications. The paper separately compares the
measurement with a Standard Model prediction that uses QED coefficients and
independent inputs; that calculation and comparison are outside this record.
The estimate is not an exact constant, and agreement with a theory is not a
deductive proof of that theory.

