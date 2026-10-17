---
id: def-emg-xs-si-parameters
kind: definition
title: SI and geometric solution parameter identifications
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 1
deps:
  - def-emg-geometry-units
  - def-emg-xs-geometric-electrovac
  - def-countable-choice
dependency_roles:
  def-emg-geometry-units: formulation-prerequisite
  def-emg-xs-geometric-electrovac: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "A model-local map from SI mass, angular-momentum, electric-charge, and magnetic-flux inputs to the length parameters in the selected four-dimensional, zero-cosmological-constant Einstein–Maxwell solution families. It fixes no global ADM or Komar identification, magnetic-charge convention, charge quantization, empirical value, observed black-hole claim, or field law."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2, complete 30-page full text"
      url: "https://arxiv.org/pdf/1410.6626"
      locator: "Section 2.1, equation (2.1) and the definitions of r_S and r_Q^2 on printed p. 4 (PDF p. 5): r_S=2GM/c^2 and r_Q^2=kGQ^2/c^4, where k is Coulomb's constant; the source then states its natural-unit convention."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, complete 238-page arXiv version"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Chapter 7, equations (7.110)-(7.116) and the charge substitution on printed pp. 202-209 (PDF pp. 208-215): RN/KN metric parameters, electric/magnetic charge roles, and rotation parameter; source charge normalization is not imported."
    - title: "BIPM, The International System of Units (SI), 9th edition, version 4.01 (2026 update), complete 214-page brochure"
      url: "https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf"
      locator: "Section 2.2 and Section 2.3.1, printed pp. 124-129 (PDF pp. 124-129): exact SI value of c, exact epsilon_0 mu_0=1/c^2 relation, and experimentally determined status of mu_0."
    - title: "David Tong, Electromagnetism, University of Cambridge Mathematical Tripos lecture notes, complete 236-page author-hosted PDF"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Sections 1.1-1.2, printed pp. 1-8 (PDF pp. 7-16): SI charge, Gauss flux, and Coulomb field; Sections 5.3-5.4, printed pp. 113-121 (PDF pp. 122-130): field tensor and SI covariant conventions."
---

## Definition

Use the SI quantities, coordinate convention, and primitive/derived distinction of [[def-emg-geometry-units]], and the zero-cosmological-constant geometric electrovac flux normalization of [[def-emg-xs-geometric-electrovac]]. This definition is the model-local parameter map for the RN and KN ansatz families; it is not a claim that nature contains an object with these parameters.

Take $G_N>0$, $c>0$, and $\mu_0>0$ as the gravitational and electromagnetic constants used by this coupled model, with $\varepsilon_0=(\mu_0c^2)^{-1}$. Let $m_*>0$ be a selected SI mass parameter in kg, $J\in\mathbb R$ a selected angular-momentum parameter in kg m$^2$ s$^{-1}$, $Q_e\in\mathbb R$ a selected electric charge parameter in C, and $\Phi_B\in\mathbb R$ a selected magnetic flux in Wb through an oriented sphere. These are the chosen SI inputs of this parametrization; this role is local to the solution families and is not a universal ontology for mass, angular momentum, or charge.

For the geometric flux integrals below, retain the $\mathrm{AC}_\omega$ convention explicitly stated by [[def-emg-xs-geometric-electrovac]] and defined by [[def-countable-choice]]. No arbitrary-index choice principle or magnetic-charge quantization is added.

Set

$$\alpha:=\sqrt{\frac{4\pi G_N}{\mu_0c^4}},\qquad \mathcal F:=\alpha F,$$

where $F$ is the SI electromagnetic two-form of [[def-emg-geometry-units]] and $\mathcal F$ is its geometric normalization. In length coordinates $F_{ab}$ has unit T, $\mathcal F_{ab}$ has unit m$^{-1}$, and $\alpha$ has unit T$^{-1}$m$^{-1}$. For an oriented sphere $S$, write the geometric flux parameters as

$$q_e:=\frac{1}{4\pi}\int_S\star_g\mathcal F,\qquad q_m:=\frac{1}{4\pi}\int_S\mathcal F.$$

The SI electric-flux convention is $Q_e=\varepsilon_0c\int_S\star_gF$, and the magnetic quantity used here is the flux $\Phi_B=\int_S F$. Thus

$$q_e=\frac{\alpha}{4\pi\varepsilon_0c}Q_e=\sqrt{\frac{G_N}{4\pi\varepsilon_0c^4}}\,Q_e,\qquad q_m=\frac{\alpha}{4\pi}\Phi_B.$$

The second equality in the electric formula uses the exact SI relation $\varepsilon_0\mu_0c^2=1$. Both $q_e$ and $q_m$ have units of length; $q_m$ is a flux parameter and is not assigned a universal SI magnetic-charge convention. If one separately chooses the convention $Q_m:=\Phi_B/\mu_0$ with unit A m, then the same definition reads $q_m=\sqrt{G_N\mu_0/(4\pi c^4)}\,Q_m$; this optional relabeling adds no new physical assumption or quantization rule.

For the metric parameters, set

$$M:=\frac{G_Nm_*}{c^2},\qquad a:=\frac{J}{m_*c},\qquad Q_{\mathrm{geom}}^2:=q_e^2+q_m^2.$$

Here $M$, $a$, $q_e$, and $q_m$ are derived length parameters, while $m_*$, $J$, $Q_e$, $\Phi_B$, $G_N$, $c$, and $\mu_0$ are the selected inputs of this map. The dimensionless metric coefficients use $M/r$, $a/r$, and $Q_{\mathrm{geom}}^2/r^2$. Horizon radii, areas, angular velocities, and surface gravities are further derived quantities of a specified solution, not additional primitive inputs.

These parameter identifications do not establish that $M$ equals an ADM or Komar mass, or that $J$ equals an ADM or Komar angular momentum; such identifications need their own global hypotheses and proofs. They supply no empirical values for $G_N$ or $\mu_0$, no measured black-hole parameters, no global potential in a nonzero magnetic-flux sector, and no claim of charge quantization. The source treatments use differing signatures, charge normalizations, and natural or Gaussian unit conventions; the SI formulas above are fixed by the stated local conventions and are not copied without conversion.
