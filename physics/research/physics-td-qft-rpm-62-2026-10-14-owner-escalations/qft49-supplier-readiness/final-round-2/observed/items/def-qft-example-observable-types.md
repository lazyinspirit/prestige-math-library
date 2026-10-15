---
id: def-qft-example-observable-types
kind: definition
domain: physics
library: physics
title: Example observable types and scoped meanings
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 1
deps:
  - def-qft-framework-units
  - def-qft-example-data
dependency_roles:
  def-qft-framework-units: formulation-prerequisite
  def-qft-example-data: mathematical-premise
physical_scope: >-
  Framework-local primitive/derived, unit, observable, formal-coefficient, and
  empirical-data distinctions for the finite regulated examples and specified
  formal calculations on this page. No general continuum observable, detector,
  scattering, or empirical-estimator construction is asserted.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, §0.1 “Units and Scales”
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S0.html
    - title: X. Fan et al., Measurement of the Electron Magnetic Moment, Physical Review Letters 130, 071801 (2023), arXiv:2209.13084v2 (2022)
      url: https://arxiv.org/html/2209.13084
---

## Definition

Use the framework-local unit and domain dictionary of
[[def-qft-framework-units]] and the energy, SI/natural-unit, and finite-matrix
conventions of [[def-qft-example-data]]. A physical quantity is always typed
relative to the selected QFT formulation and its declared model data; its name
or units alone do not identify it with a quantity in another formulation.

For the **exact finite-regulator class** used on this page, the state space is
the finite-dimensional Hilbert space $\mathcal H=\mathbb C^d$ for an integer
$d\ge1$. Model inputs include the selected Hermitian Hamiltonian matrices,
their time-dependent Hermitian interaction when present, a dimensionless
coupling parameter, an initial state, and an explicitly supplied finite
outcome measurement. A pure initial state is a vector $\psi\in\mathbb C^d$
with $\|\psi\|=1$; a mixed state is a matrix $\rho=\rho^*$ with
$\langle\rho v,v\rangle\ge0$ for every $v$ and $\operatorname{tr}\rho=1$.
An exact regulated observable on this finite space is a specified Hermitian
matrix $O=O^*$ with a declared physical unit. The matrix and state are model
data; the measurement procedure and any physical rule assigning outcomes are
additional data. This definition does not say that an operator symbol by
itself is a detector outcome or probability.

A **finite probability law** on the declared outcome set
$\{1,\ldots,m\}$, $m\ge1$, is a vector $(p_1,\ldots,p_m)$ with
$p_a\ge0$ and $\sum_{a=1}^m p_a=1$. It is a mathematical type. Assigning that
law to a particular preparation and measurement is a separate physical
postulate. A prediction derived from an actually constructed regulated model
is conditional on those inputs and the adopted rule.

A **formal coefficient record** is a sequence $(c_n)_{n\in\mathbb N}$ of
specified coefficients, sometimes displayed as the symbol
$\sum_{n\ge0}c_n\lambda^n$. Unless convergence and an evaluation map are
separately proved and adopted, the symbol records coefficients only: it is not
an evaluated function, exact probability, convergent perturbation series, or
error bound. A formal coefficient can be assigned a phenomenological meaning
only by a separate, model-specific physical adoption with its approximation
scope stated.

An **empirical estimate** is a source-reported number obtained by analyzing a
finite record of measurement outcomes under the stated preparation, apparatus,
calibration, sampling, and analysis conditions. Its reported uncertainty and
conditions travel with the estimate. It is not the exact model value, and it
does not prove the framework used to interpret it. The 2022 Fan et al. report
is an example of a source-reported electron magnetic-moment determination;
this definition supplies no numerical result, uncertainty reconstruction, or
new experimental claim.

Primitive and derived status is formulation-relative. In a selected regulated
model, the regulator, Hamiltonian data, coupling, initial state, and supplied
measurement are declared inputs; an evolution, amplitude, or probability law
is derived only when the construction and adopted rule establish it. In a
formal calculation, the specified masses, couplings, coefficient rules, and
subtraction prescription are inputs, while its listed coefficients are
derived within that formal calculation. An empirical estimate is a reported
data-analysis result, not a primitive model parameter or a theorem.

The following units are examples of types, not identifications of quantities:
a cross section $\sigma$ is area-valued with SI unit $\mathrm{m^2}$; a rate
$\Gamma$ is inverse-time-valued with unit $\mathrm{s^{-1}}$; an energy width
$\Gamma_E$ has unit joule. Only a separately stated convention may identify
$\Gamma_E=\hbar\Gamma$. The fine-structure parameter $\alpha$, a dimensionless
coupling $g$, and a gyromagnetic factor $g_s$ are dimensionless but have
different physical meanings. The name “width,” a common symbol, or matching
dimensions does not supply an exponential-decay law or an equality between
these parameters.

## Facts & Assumptions

**Given:** The QFT-local unit conventions of [[def-qft-framework-units]] and
the finite-matrix and SI dimensions of [[def-qft-example-data]].

[F1] [[def-qft-framework-units]]: primitive model data include the species,
regulator, couplings, state, and any constructed measurement; derived
Hamiltonians, correlations, and outcome probabilities require their stated
constructions and domains.

[F2] [[def-qft-example-data]]: finite-matrix examples act on $\mathbb C^d$
with the operator norm; energy matrices are joule-valued and $\hbar$ has unit
$\mathrm{J\,s}$.

## Proof

1.1 By [F2], $[\hbar]=\mathrm{J\,s}$; since $[\Gamma]=\mathrm{s^{-1}}$, the separately defined product $\Gamma_E=\hbar\Gamma$ has unit $(\mathrm{J\,s})(\mathrm{s^{-1}})=\mathrm J$. The stated dimensions $[\sigma]=\mathrm{m^2}$ and the dimensionless assignments are part of the Definition, not consequences of an observed value. [given, F2, algebra]

2.1 The exact-matrix, formal-coefficient, and empirical-estimate entries have different defining data: a matrix and constructed state, a coefficient sequence without an evaluation map, and a finite measurement record with source-reported conditions and uncertainty, respectively. [given, F1, F2, algebra] ∎
