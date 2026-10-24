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

Use natural units $c=\hbar=1$. Fix an integer $d\geq1$, a compact smooth oriented Euclidean $d$-manifold $M$ with no boundary, its tangential structure (including a spin structure when the fields require one), and the model's boundary conditions. Let $\Gamma$ be its chosen finite regulator graph. Fix a compact internal symmetry group $G$ with its actual global form and its action on every retained and integrated field multiplet. The symmetry is global, not a dynamical gauge redundancy. A **background groupoid** $\mathscr B$ is a category in which every arrow is invertible; its objects are the admitted nondynamical $G$-background data and its arrows are exactly the permitted background gauge transformations, including large transformations when the model admits them. The background data, groupoid objects and arrows are part of the model input.

At each positive Wilsonian scale $\mu$ in a fixed interval $0<\mu_{\mathrm{IR}}<\mu_{\mathrm{UV}}$, a regulated model supplies its actual finite-dimensional field configuration space $\Phi_\mu$, Borel measure $\nu_\mu$, dimensionless action $S_\mu(\phi;b)$ for $\phi\in\Phi_\mu$ and $b\in\mathscr B$, and finite nonzero background partition functional

$$
Z_\mu[b]=\int_{\Phi_\mu}e^{-S_\mu(\phi;b)}\,d\nu_\mu(\phi).
$$

All field representations, the regulator, measure normalizations, and background boundary conditions are fixed data. The local effective functional is $W_\mu[b]=-\log Z_\mu[b]$ on each common nonzero background patch; its transition phases on overlaps are retained.

An **exact background-coupled RG comparison** from $\mu_{\mathrm{UV}}$ to $\mu_{\mathrm{IR}}$ consists of exact Wilsonian high-coordinate integrations as in the supplied finite-regulator Wilsonian-action definition, equivariant under every arrow of $\mathscr B$, with all surviving low-energy fields and topological sectors included at the infrared endpoint. It also specifies one single-valued, admissible, dimensionless local background counterterm $C[b]$ for which

$$
W_{\mu_{\mathrm{UV}}}[b]-W_{\mu_{\mathrm{IR}}}[b]=C[b]
$$

in each common local branch and compatibly on overlaps. Here local means an integral or finite-regulator sum of densities depending on background data and finitely many derivatives or neighboring cochains; the allowed counterterm space is fixed as part of the model. This definition records a finite-regulator flow interface and its locality hypothesis. It does not assert that such a flow exists for an arbitrary continuum QFT or that any continuum limit exists.

## Definition references

[[def-aqft-model-and-scale-data]]

[[def-aqft-wilsonian-action]]

[Tong, *Gauge Theory*, §§2.4 and 3.5](https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf)

[Harvey, *TASI 2003 Lectures on Anomalies*, §2.3](https://arxiv.org/pdf/hep-th/0509097)
