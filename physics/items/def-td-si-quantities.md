---
id: def-td-si-quantities
kind: definition
title: SI quantities and unit conventions
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: SI types and units used by the nonrelativistic macroscopic thermodynamic framework; this item does not define a thermometer calibration or an equation of state.
deps: []
dependency_roles: {}
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: BIPM, The International System of Units, 9th edition, version 4.01, §§2.3.1–2.3.2 and Table 4
      url: https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf
dependency_level: 0
---

## Definition

This framework uses the modern International System of Units (SI). A scalar quantity has a real numerical value with the stated unit; a vector quantity has a value in the stated real coordinate space with the stated component unit. The numerical coordinates used elsewhere on this page are divided by their displayed SI units before they are placed in a Euclidean coordinate space.

The model's energy coordinate $U$ and its process-transfer values $Q$ and $W_{\mathrm{on}}$ are scalar energies measured in joules (J). Volume $V$ is a scalar measured in cubic metres (m³); amount of substance $n_j$ for species $j$ is a scalar measured in moles (mol); and a particle count $N_j$, when separately used in a microscopic model, is dimensionless. Time $t$ is measured in seconds (s), mass $M$ in kilograms (kg), and a translational velocity $\mathbf v_{\mathrm{cm}}$ is a vector in $\mathbb R^3$ with components measured in metres per second (m/s). The physical meanings of $U,Q,W_{\mathrm{on}}$ are fixed by the state and process definitions, not by their units alone.

The relevant exact SI relations are

$$1\,\mathrm J=1\,\mathrm{kg\,m^2\,s^{-2}},\qquad 1\,\mathrm N=1\,\mathrm{kg\,m\,s^{-2}},\qquad 1\,\mathrm{Pa}=1\,\mathrm{J\,m^{-3}}.$$

The kelvin (K) is the SI unit of thermodynamic temperature. The Boltzmann constant has the exact defining value $k_{\mathrm B}=1.380649\times10^{-23}\,\mathrm{J\,K^{-1}}$. The mole is the SI unit of amount of substance; the Avogadro constant has the exact defining value $N_{\mathrm A}=6.02214076\times10^{23}\,\mathrm{mol^{-1}}$. When a model uses particle counts, $n_j=N_j/N_{\mathrm A}$. The molar gas constant is derived as $R=N_{\mathrm A}k_{\mathrm B}=8.31446261815324\,\mathrm{J\,mol^{-1}\,K^{-1}}$. This framework does not set $k_{\mathrm B}=1$. These SI definitions do not themselves introduce a thermodynamic temperature state function or entropy function.

Within the macroscopic framework, $(U,V,n_j)$ are adopted state coordinates. A quantity's status as primitive in this model is separate from whether its SI unit is a base or derived unit.
