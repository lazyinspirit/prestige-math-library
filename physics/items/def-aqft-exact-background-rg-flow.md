---
id: def-aqft-exact-background-rg-flow
kind: definition
title: "Exact background-coupled RG comparison"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-anomaly-matching-and-frontier
dependency_level: 3
deps:
  - def-aqft-model-and-scale-data
  - def-aqft-wilsonian-action
dependency_roles:
  def-aqft-model-and-scale-data: formulation-prerequisite
  def-aqft-wilsonian-action: formulation-prerequisite
physical_scope: "Finite-regulator background-coupled Wilsonian comparisons on a fixed closed Euclidean spacetime; no continuum, infinite-volume, empirical, or RG-existence claim is made."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Gauge Theory, full lecture notes"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf"
      locator: "§2.4, printed pp. 61–73, for the RG scale in Yang–Mills; §3.5, printed pp. 176–178, for background coupling and anomaly matching."
    - title: "Jeffrey A. Harvey, TASI 2003 Lectures on Anomalies"
      url: "https://arxiv.org/pdf/hep-th/0509097"
      locator: "§2.3, 't Hooft matching conditions, for the background-gauging/spectator argument and its unbroken-symmetry qualification."
verification:
  precheck: pending
---

## Definition

Use natural units $c=\hbar=1$. Fix an integer $d\geq1$, a compact smooth oriented Euclidean $d$-manifold $M$ with no boundary, its tangential structure (including a spin structure when the fields require one), and the model's boundary conditions. Let $\Gamma=(X,E_\Gamma)$ be the chosen finite regulator graph, with finite vertex set $X$. Fix a compact internal symmetry group $G$ with its actual global form and its action on every retained and integrated field multiplet. The symmetry is global, not a dynamical gauge redundancy. A **background groupoid** $\mathscr B$ is a category in which every arrow is invertible; its objects are the admitted nondynamical $G$-background data and its arrows are exactly the permitted background gauge transformations, including large transformations when the model admits them. The background data, local parameter charts on its object space, groupoid objects and arrows are part of the model input.

At each positive Wilsonian scale $\mu$ in a fixed interval $0<\mu_{\mathrm{IR}}<\mu_{\mathrm{UV}}$, specify a finite-dimensional field configuration space $\Phi_\mu$ as a standard Borel space equipped with a model-chosen Polish topology $\tau_\mu$ that generates its standard Borel $\sigma$-algebra, and with a positive normalized Borel probability measure $\nu_\mu$ on $\Phi_\mu$. Its finite retained coordinate set is denoted $L_\mu$; on each sector component the continuous field coordinates are $\mathbb R^{L_\mu}$ with their Euclidean topology, and any topology and measurable structure on admitted sector labels are part of the model data. The chosen topology $\tau_\mu$ is used whenever a low-field open set or continuity in low fields is specified. For every background object $b\in\operatorname{Ob}(\mathscr B)$, the dimensionless action is a map $S_\mu(-;b):\Phi_\mu\to\mathbb C$ that is Borel measurable, and $e^{-S_\mu(-;b)}\in L^1(\Phi_\mu,\nu_\mu)$. On each stated smooth local parameter chart of backgrounds, require $b\mapsto Z_\mu[b]$ below to be continuous in the chart topology. Define the finite partition functional by

$$
Z_\mu[b]=\int_{\Phi_\mu}e^{-S_\mu(\phi;b)}\,d\nu_\mu(\phi)\in\mathbb C.
$$

Require $Z_\mu[b]\ne0$ on every background patch where the effective functional is used. On each such patch choose a continuous branch $\operatorname{Log}_\mu$ and set $W_\mu[b]=-\operatorname{Log}_\mu Z_\mu[b]$; retain the transition phases when branches change on overlaps. If the action is real-valued, the integral is positive and this is the usual real-action case. For a complex action, the integral and logarithm are the explicitly specified complex-weight extension of the finite-regulator Wilsonian integral; the supplier definition for real Borel actions alone does not establish its integrability or nonvanishing. All field representations, regulator data, measures, normalizations, actions, scale-dependent coordinate splits and background boundary conditions are fixed model inputs.

More precisely, a **finite-regulator Wilsonian high/low integration** is specified at each step of a finite scale chain $\mu_0=\mu_{\mathrm{UV}}>\mu_1>\cdots>\mu_n=\mu_{\mathrm{IR}}$ (a single step is allowed). At step $j$, the retained coordinate set at scale $\mu_j$ is split as $L_{\mu_j}=L_{\mu_{j+1}}\sqcup H_j$. On each sector component, the associated Borel product identification is $\Phi_{\mu_j}\cong\Phi_{\mu_{j+1}}\times\mathbb R^{H_j}$, and the scale measures factor as $\nu_{\mu_j}=\nu_{\mu_{j+1}}\otimes\nu_{H,j}$, where $\nu_{H,j}$ is a normalized Borel probability measure on $\mathbb R^{H_j}$. Use the Wilsonian matching-scale label $\mu_W=\mu_{j+1}$. The finite-regulator model-data supplier specifies retained and integrated spaces $\mathbb R^X$ and a real Borel ultraviolet action; its Wilsonian-action supplier defines the corresponding high-coordinate integral where it is finite and positive. Arbitrary finite coordinate sets $L_{\mu_{j+1}}$ and $H_j$, admitted sector labels, and complex actions here are additional supplied model data extending that real-action setting. When the optional Gaussian submodel is selected, its $\mathbb R^X$ field spaces and its $M>0$, $E\geq0$, $\Lambda>0$, $A$, and $J$ satisfy the supplier's stated spectral, range, and cutoff conditions. For each retained configuration $\ell\in\Phi_{\mu_{j+1}}$ and background $b$, require $h\mapsto e^{-S_{\mu_j}(\ell,h;b)}$ to be absolutely integrable with respect to $\nu_{H,j}$. On every open patch in the product of the declared topology on $\Phi_{\mu_{j+1}}$ and a background-chart topology where the high integral is used, require it to vary continuously and remain nonzero, and choose a continuous logarithm branch. Then the complex Wilsonian action is the locally branched function

$$
S_{\mu_{j+1}}(\ell;b)=-\operatorname{Log}\!\left(\int_{\mathbb R^{H_j}}e^{-S_{\mu_j}(\ell,h;b)}\,d\nu_{H,j}(h)\right)-c_j[b],
$$

where $c_j[b]$ is the declared dimensionless local background counterterm assigned to that step (zero is allowed). For real actions and $c_j=0$, with the real logarithm and field data in the suppliers' domain, this agrees with the supplied Wilsonian-action definition. For the additional field spaces or complex actions it is the extension defined here, with the absolute-integrability, continuity, and nonzero-branch conditions above. Scale measures are compatible products of the low-coordinate measures and these high-coordinate measures, so the full partition at each scale is the corresponding iterated finite integral. Every retained field and every retained topological sector is included at $\mu_{\mathrm{IR}}$.

With these product measures, the displayed action gives $Z_{\mu_{j+1}}[b]=e^{c_j[b]}Z_{\mu_j}[b]$ on the selected common branch and hence $W_{\mu_j}[b]-W_{\mu_{j+1}}[b]=c_j[b]$. Choose the logarithm branches compatibly along the chain; any transitions between local background patches retain their transition phases.

For each background-groupoid arrow, the model supplies the Borel identifications of the field spaces and the induced pullbacks on local partition branches. Each high-coordinate integration must intertwine those pullbacks, including their branch-transition phases; this is equivariance of the integration map and does not assert that each local scalar partition branch is gauge invariant. An **exact background-coupled RG comparison** is such a finite sequence of integrations for which the sum $C[b]=\sum_{j=0}^{n-1}c_j[b]$ is a single-valued admissible dimensionless local background functional and

$$
W_{\mu_{\mathrm{UV}}}[b]-W_{\mu_{\mathrm{IR}}}[b]=C[b]
$$

on each common local branch and compatibly on overlaps. Here local means an integral or finite-regulator sum of densities depending on background data and finitely many derivatives or neighboring cochains; the allowed counterterm space is fixed as part of the model. This definition records a finite-regulator flow interface and its locality hypothesis. It does not assert that such a flow exists for an arbitrary continuum QFT or that any continuum limit exists.

## Definition references

[[def-aqft-model-and-scale-data]]

[[def-aqft-wilsonian-action]]

[Tong, *Gauge Theory*, §§2.4 and 3.5](https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf)

[Harvey, *TASI 2003 Lectures on Anomalies*, §2.3](https://arxiv.org/pdf/hep-th/0509097)
