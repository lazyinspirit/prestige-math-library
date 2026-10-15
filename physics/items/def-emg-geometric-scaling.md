---
id: def-emg-geometric-scaling
kind: definition
title: "SI and geometrized Einstein–Maxwell parameters"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-countable-choice
  - def-emg-lorentzian-forms
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "BIPM, The International System of Units (SI Brochure), 9th edition, version 4.01, §2.3 and the ampere definition, printed pp. 124 and 129"
      url: "https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf"
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §4, author-hosted full-text HTML, Einstein–Maxwell normalization and stress conventions"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html"
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, §§4.3–4.5 and 7.2, Maxwell forms, Einstein equations and electromagnetic stress"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Definition

Use the smooth oriented, time-oriented Lorentzian four-manifold, metric signature $(-,+,+,+)$, and arbitrary smooth real two-form $F$ of [[def-emg-lorentzian-forms]]. In a chart using the coordinate convention $x^0=ct$ with all four coordinates assigned metres, assign the SI component unit tesla to $F_{ab}$; the two-form $F=\frac12F_{ab}\,dx^a\wedge dx^b$ then has unit weber.

For this conversion dictionary, take $c>0$, $G>0$, and $\mu_0>0$ as numerical input parameters, with SI dimensions

$$[c]=\mathrm{m\,s^{-1}},\qquad [G]=\mathrm{m^3\,kg^{-1}\,s^{-2}},\qquad [\mu_0]=\mathrm{kg\,m\,C^{-2}}.$$

Define the derived parameters

$$\varepsilon_0:=\frac{1}{\mu_0c^2},\qquad \kappa:=\frac{8\pi G}{c^4},\qquad \alpha:=\sqrt{\frac{\kappa}{2\mu_0}},\qquad \mathcal F:=\alpha F.$$

Thus $\varepsilon_0$ has unit $\mathrm{C^2\,s^2\,kg^{-1}\,m^{-3}}$, $\kappa$ has unit $\mathrm{m\,J^{-1}}$, $\alpha$ has unit $\mathrm{C\,s\,kg^{-1}\,m^{-1}}$, and the components $\mathcal F_{ab}$ have unit $\mathrm{m^{-1}}$. In modern SI, $c$ is fixed exactly by the definition of the metre; $\mu_0$ is not fixed exactly and its numerical value is determined experimentally. Here the equations use only the positive symbolic parameters above, not a selected numerical value.

For a physical mass $M_{\!p}>0$ in kilograms, signed charge $Q_e$ in coulombs, and angular momentum $J_{\mathrm{ang}}$ in $\mathrm{kg\,m^2\,s^{-1}}$, define the geometric length parameters

$$m_{\mathrm{geo}}:=\frac{GM_{\!p}}{c^2},\qquad q_{\mathrm{geo}}:=\sqrt{\frac{G}{4\pi\varepsilon_0c^4}}\,Q_e,\qquad a_{\mathrm{geo}}:=\frac{J_{\mathrm{ang}}}{M_{\!p}c}.$$

For a supplied magnetic-flux parameter $\Phi_B$ in webers, also define $p_{\mathrm{geo}}:=\alpha\Phi_B/(4\pi)$ in metres. This is only a conversion of an already specified flux value; it asserts neither a global potential nor a magnetic source. The inverse parameter maps are $M_{\!p}=c^2m_{\mathrm{geo}}/G$, $Q_e=\sqrt{4\pi\varepsilon_0c^4/G}\,q_{\mathrm{geo}}$, $J_{\mathrm{ang}}=M_{\!p}c\,a_{\mathrm{geo}}$, and $\Phi_B=4\pi p_{\mathrm{geo}}/\alpha$.

The mass, charge, angular momentum and flux are inputs to this dictionary; their primitive or derived status in any physical model is framework-specific. No field equation, Maxwell postulate, matter law, or empirical value is part of this definition.

## Remarks

The Lorentzian geometry supplier records the inherited tangent-bundle background under Countable Choice $\mathrm{AC}_\omega$; this dictionary uses no further choice and does not assume the full Axiom of Choice.
