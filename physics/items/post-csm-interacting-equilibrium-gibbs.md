---
id: post-csm-interacting-equilibrium-gibbs
kind: postulate
title: "Interacting classical Gibbs equilibrium adoption"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps: ["def-csm-gibbs-physical-parameters", "post-csm-counting-and-physical-observables", "def-csm-phase-space-reference", "def-csm-lattice-gibbs-specification", "lem-csm-lattice-specification-consistency", "lem-csm-lattice-product-and-measure-compactness", "def-countable-choice"]
justified_by: []
dependency_roles: {"def-csm-gibbs-physical-parameters": "formulation-prerequisite", "post-csm-counting-and-physical-observables": "formulation-prerequisite", "def-csm-phase-space-reference": "formulation-prerequisite", "def-csm-lattice-gibbs-specification": "formulation-prerequisite", "lem-csm-lattice-specification-consistency": "formulation-prerequisite", "lem-csm-lattice-product-and-measure-compactness": "formulation-prerequisite", "def-countable-choice": "formulation-prerequisite"}
physical_scope: "Adopted equilibrium interpretation for the chosen classical Hamiltonian, temperature and reference measure; no claim of equilibration or empirical accuracy."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction (complete author PDF, revised 2017)"
      url: "https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf"
      locator: "Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289; Chapter 6 §6.12, PDF pp. 329–332 (printed pp. 311–314)."
    - title: "David Ruelle, Superstable Interactions in Classical Statistical Mechanics, Communications in Mathematical Physics 18 (1970), 127–159"
      url: "https://www.ihes.fr/~ruelle/PUBLICATIONS/%5B28%5D.pdf"
      locator: "Complete PDF, especially printed pp. 128–134 / PDF pp. 1–6."
---

## Postulate

Fix a classical model with physical energy measured in joules and a positive inverse-temperature parameter $\beta=(k_BT)^{-1}$ in $\mathrm{J}^{-1}$. Its global configuration space is a measurable space $(\mathcal X,\mathscr F)$. For each finite region $\Lambda$, specify a local state measurable space $(\mathcal X_\Lambda,\mathscr F_\Lambda)$, an admissible exterior measurable space $(\mathcal E_\Lambda,\mathscr E_\Lambda)$, a measurable exterior restriction map $r_\Lambda:(\mathcal X,\mathscr F)\to(\mathcal E_\Lambda,\mathscr E_\Lambda)$, and a measurable concatenation map $c_\Lambda:\mathcal X_\Lambda\times\mathcal E_\Lambda\to\mathcal X$. Require $r_\Lambda(c_\Lambda(x,\eta))=\eta$ for every $x\in\mathcal X_\Lambda$ and $\eta\in\mathcal E_\Lambda$, and write $x\eta:=c_\Lambda(x,\eta)$. Specify a jointly measurable conditional energy $H_\Lambda:\mathcal X_\Lambda\times\mathcal E_\Lambda\to\mathbb R\cup\{+\infty\}$, where $+\infty$ marks a forbidden local state, and a measurable kernel $\eta\mapsto m_\Lambda^\eta$ of positive $\sigma$-finite reference measures on $(\mathcal X_\Lambda,\mathscr F_\Lambda)$; $\sigma$-finite means that $\mathcal X_\Lambda$ is a countable union of measurable sets of finite $m_\Lambda^\eta$-measure. The reference normalization and any units carried by its coordinates are part of the model data. For a thermodynamic partition function, choose the reference normalization so $Z_\Lambda^\eta$ is dimensionless. The product $\beta H_\Lambda$ is dimensionless.

For $\eta\in\mathcal E_\Lambda$, define
$$Z_\Lambda^\eta:=\int_{\mathcal X_\Lambda}e^{-\beta H_\Lambda(x\mid\eta)}\,dm_\Lambda^\eta(x),\qquad \gamma_\Lambda(C\mid\eta):=(Z_\Lambda^\eta)^{-1}\int_{\mathcal X_\Lambda}\mathbf1_C(x\eta)e^{-\beta H_\Lambda(x\mid\eta)}\,dm_\Lambda^\eta(x),\quad C\in\mathscr F,$$
with $e^{-\beta(+\infty)}:=0$. Adopt these conditional probability kernels only when $0<Z_\Lambda^\eta<\infty$ for every finite $\Lambda$ and admissible $\eta$, and when their dependence on $\eta$ is measurable. A probability measure $\mu$ on $(\mathcal X,\mathscr F)$ is a DLR state for this adopted model if, for every finite $\Lambda$ and every $C\in\mathscr F$,
$$\mu(C)=\int_{\mathcal X}\gamma_\Lambda(C\mid r_\Lambda(y))\,d\mu(y).$$
A specification is a family of these probability kernels that is **proper** when $\gamma_\Lambda(r_\Lambda^{-1}(D)\mid\eta)=\mathbf1_D(\eta)$ for every $D\in\mathscr E_\Lambda$ and $\eta\in\mathcal E_\Lambda$, and **consistent** when $\gamma_\Lambda\gamma_\Delta f=\gamma_\Lambda f$ for every bounded measurable $f:\mathcal X\to\mathbb R$ and finite $\Delta\subseteq\Lambda$. Here $\gamma_\Lambda(f\mid\eta):=\int_{\mathcal X}f(y)\,\gamma_\Lambda(dy\mid\eta)$, and composition is explicitly $(\gamma_\Lambda\gamma_\Delta f)(\eta):=\int_{\mathcal X}\gamma_\Delta(f\mid r_\Delta(y))\,\gamma_\Lambda(dy\mid\eta)$. These identities are required when a DLR specification is asserted; normalization alone does not imply them.

In the finite-alphabet lattice instance, let $A$ be finite and nonempty, $\mathcal X=A^{\mathbb Z^d}$ with the cylinder-generated Borel $\sigma$-algebra, $\mathcal X_\Lambda=A^\Lambda$ with its power-set $\sigma$-algebra, and $\mathcal E_\Lambda=A^{\Lambda^c}$. The restriction map is $r_\Lambda(\sigma)=\sigma|_{\Lambda^c}$ and concatenation is coordinatewise patching. For the finite-range interaction of [[def-csm-finite-range-lattice-interaction]], use counting measure on $A^\Lambda$ and the energy $E_\Lambda(\cdot\mid\eta)$ in joules; the resulting kernels are exactly those in [[def-csm-lattice-gibbs-specification]]. The consistency result [[lem-csm-lattice-specification-consistency]] supplies their properness and consistency. The cylinder-measure extension in [[lem-csm-lattice-product-and-measure-compactness]] uses the Countable Choice axiom [[def-countable-choice]] to construct an infinite-volume probability; no finite conditional sum spends that choice assumption.

When particle-number sectors are present, use the exact interface of [[post-csm-counting-and-physical-observables]]. For species counts $N_a$ with total $N=\sum_aN_a\ge1$ in $d$ spatial dimensions, the phase-space definition [[def-csm-phase-space-reference]] sets the labelled reference to $m_N=c_N\Lambda_N$ with arbitrary $c_N>0$. This postulate chooses $c_N=a_0^{-dN}$, where $a_0>0$ is a prescribed reference action in joule-seconds, and uses the species factor $1/\prod_aN_a!$ in the normalized quotient reference. Equivalently, the symmetric labelled integral uses $(\prod_aN_a!\,a_0^{dN})^{-1}dq\,dp$; the factorial is included once, and the phase-volume dimension $(\mathrm{J\,s})^{dN}$ makes this reference dimensionless. For the vacuum sector $N=0$, define the zero-fold phase space to be a singleton with unit Dirac reference measure (consistent with $0!=1$ and $a_0^0=1$); in a finite region with nonempty exterior, the local vacuum still has the energy $H_\Lambda(\varnothing\mid\eta)$ in its Gibbs weight. If the thermal-wavelength convention of [[def-csm-gibbs-physical-parameters]] is used, set $h_{\rm ref}=a_0$; omit the species factorial for operationally distinguishable labels. These are adopted reference and counting conventions, not consequences of Hamiltonian mechanics or evidence of equilibration. No empirical parameter, measured transition temperature, or uncertainty is asserted here.

This is a model postulate. Normalization, stationarity of a Hamiltonian flow, and finite-volume calculations do not prove equilibration or establish that the model describes nature.
