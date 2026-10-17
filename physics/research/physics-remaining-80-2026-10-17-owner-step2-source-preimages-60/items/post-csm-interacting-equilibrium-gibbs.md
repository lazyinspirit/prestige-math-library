---
id: post-csm-interacting-equilibrium-gibbs
kind: postulate
title: "Interacting classical Gibbs equilibrium adoption"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps: ["def-csm-gibbs-physical-parameters", "post-csm-counting-and-physical-observables", "def-csm-lattice-gibbs-specification", "def-countable-choice"]
justified_by: []
dependency_roles: {"def-csm-gibbs-physical-parameters": "formulation-prerequisite", "post-csm-counting-and-physical-observables": "formulation-prerequisite", "def-csm-lattice-gibbs-specification": "formulation-prerequisite", "def-countable-choice": "formulation-prerequisite"}
physical_scope: "Adopted equilibrium interpretation for the chosen classical Hamiltonian, temperature and reference measure; no claim of equilibration or empirical accuracy."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction (complete author PDF, revised 2017)"
      url: "https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf"
      locator: "Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289; Appendix, PDF pp. 329–332."
    - title: "David Ruelle, Superstable Interactions in Classical Statistical Mechanics, Communications in Mathematical Physics 18 (1970), 127–159"
      url: "https://www.ihes.fr/~ruelle/PUBLICATIONS/%5B28%5D.pdf"
      locator: "Complete PDF, especially printed pp. 128–134 / PDF pp. 1–6."
---

## Postulate

For a chosen classical interacting Hamiltonian and positive inverse temperature $\beta$, let $\mathcal X_\Lambda$ be the state space inside each finite region $\Lambda$, let $\eta$ be an admissible exterior state, and declare a reference measure $m_\Lambda^\eta$ and finite conditional energy $H_\Lambda(\cdot\mid\eta)$ in joules. Define
$$Z_\Lambda^\eta:=\int_{\mathcal X_\Lambda}e^{-\beta H_\Lambda(x\mid\eta)}\,dm_\Lambda^\eta(x),\qquad \gamma_\Lambda(B\mid\eta):=(Z_\Lambda^\eta)^{-1}\int_Be^{-\beta H_\Lambda(x\mid\eta)}\,dm_\Lambda^\eta(x),$$
and adopt these conditional laws when $0<Z_\Lambda^\eta<\infty$ for every finite $\Lambda$ and admissible $\eta$. In the finite-alphabet lattice setting these are the kernels of [[def-csm-lattice-gibbs-specification]], with the product-measure and Countable Choice conventions of [[def-countable-choice]]. An infinite-volume equilibrium state in this adopted model means a probability measure satisfying all the model's finite-region conditional identities (the DLR condition). This is a model postulate: normalization, stationarity of a Hamiltonian flow, or a finite-volume calculation does not prove equilibration or establish that the model describes nature.

When particle-number sectors are present, use the current draft postulate [[post-csm-counting-and-physical-observables]] with its exact interface: for $N_a$ operationally indistinguishable particles of species $a$, total $N=\sum_aN_a$, and dimension $d$, the reference measure is $m_N^{\mathrm{phys}}=(\prod_aN_a!\,a_0^{dN})^{-1}dq\,dp$ in canonical coordinates read with their declared physical SI units, with $a_0>0$ the locally prescribed primitive action reference in joule-seconds. The phase-volume element has action dimension $(\mathrm{J\,s})^{dN}$, so the displayed reference is dimensionless. If using the thermal-wavelength convention of [[def-csm-gibbs-physical-parameters]], set $h_{\rm ref}=a_0$; omit the factorial for operationally distinguishable labels. The item exists as a draft postulate, and its phase-space and observable definition suppliers are drafts; this clause is conditional on that adopted interface, not a proved result. These choices affect entropy offsets and particle-exchange weights. No empirical parameter, measured transition temperature, or uncertainty is asserted here.
