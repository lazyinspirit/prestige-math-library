---
id: post-tgr-local-material-thermodynamics
kind: postulate
title: "Restricted local equilibrium parcel with adopted material state function"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - def-tgr-framework-units
  - def-tgr-local-fluid-state
dependency_roles:
  def-tgr-framework-units: formulation-prerequisite
  def-tgr-local-fluid-state: mathematical-premise
justified_by: []
physical_scope: "Fixed-composition C2e(v,σ),positiveT,restenergy and operational meanings; no global-gravity additivity, microscopic derivation or universal EOS."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1 (2006), §§4.1–4.3"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "PDF pp. 13–17, especially §4.3 equations (4.10)–(4.14): rest-frame state variables, total energy including rest mass, and derivative definitions in the selected fluid model."
    - title: "Nicolas Borghini, Elements of Hydrodynamics, University of Bielefeld lecture notes (version 2015)"
      url: "https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics15/Hydrodynamics.pdf"
      locator: "Full 184-page PDF; §I.1.3 (PDF pp. 4–5) on local thermodynamic equilibrium as a model condition and §IX.2 (PDF pp. 137–138) on comoving relativistic variables."
---

## Postulate

For a selected fixed-composition, single-material branch, adopt a local-equilibrium description on an open state domain $D\subset(0,\infty)\times\mathbb R$ with a supplied function $e\in C^2(D,\mathbb R)$ and $T:=\partial_{\sigma_p}e>0$. Here $v$ is the rest volume per selected material marker, $\sigma_p$ is entropy per marker, and $e$ is energy per marker, including the rest-energy contribution; their types and SI units are those in [[def-tgr-local-fluid-state]] and [[def-tgr-framework-units]]. For a small comoving parcel with marker count $N_p$, proper volume $V$, and entropy $S$, this model assigns energy $E=N_p e(V/N_p,S/N_p)$. The physical interpretation of the marker as a particle count is part of this fixed-composition material model, not a consequence of the mathematical marker definition.

This is an adopted constitutive/local-equilibrium premise for the stated material and regime. It does not derive $e$ microscopically, assert a measured equation of state, impose a spacetime conservation equation, imply a universal gas law, or make the local parcel energy additive with the energy of an arbitrary self-gravitating region. Rest energy belongs in $e$; if a rest mass $m$ is specified, its contribution is $mc^2$, not $m$ in SI units. No entropy-maximization, quantum Gibbs representation, or global gravitating thermodynamic limit is assumed.
