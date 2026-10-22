---
id: post-emx-abraham-lorentz-model
kind: postulate
title: "The nonrelativistic Abraham–Lorentz equation as a restricted effective model"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 0
deps:
  - def-em-lab-geometry
  - def-em-si-conventions
  - def-em-sources
  - post-em-lorentz-coupling
  - rem-em-radiation-reaction-limits
dependency_roles:
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  post-em-lorentz-coupling: formulation-prerequisite
  rem-em-radiation-reaction-limits: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "An additional restricted nonrelativistic effective model for a point particle represented by one trajectory in a named laboratory chart, driven by a prescribed external force. The equation is adopted rather than derived from the Maxwell self-field or the external Lorentz-coupling postulate. Its physical interpretation is limited to intervals and force profiles explicitly declared to be low-speed and slowly varying; this item sets no universal empirical cutoff and reports no experiment."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Fritz Rohrlich, The Dynamics of a Charged Particle, arXiv:0804.4614 (complete 11-page full-text paper)"
      url: "https://arxiv.org/pdf/0804.4614"
      locator: "Sections 1–2, PDF pp. 2–6: the finite-size/slow-force restriction, the nonrelativistic third-order equation, and its first-order reduction. The Gaussian-unit coefficient is converted to the stated SI convention; the paper's broader 'physically correct' conclusions are not adopted."
    - title: "Jack Vanderlinde, Classical Electromagnetic Theory, Fundamental Theories of Physics, Springer (2004), complete 426-page book PDF"
      url: "https://eva.fcien.udelar.edu.uy/pluginfile.php/220397/mod_page/content/2/Classical%20Electromagnetic%20Theory%20%28Fundamental%20Theories%20of%20Physics%29%20-%20Jack%20Vanderlinde%20%282004%29.pdf"
      locator: "Chapter 12, §§12.2–12.4, printed pp. 333–339 (PDF pp. 340–346): the energy-balance and rigid-sphere routes to the Abraham–Lorentz coefficient, the mass-renormalized effective equation, and the runaway/future-boundary branches. The text explicitly notes that its rigid extended sphere is inconsistent with special relativity; its derivation is not used as the proof of the postulate."
---

## Postulate

Work in one named laboratory chart with spatial coordinate space $\mathbb R^3$ and time coordinate $t\in\mathbb R$. Let $q\in\mathbb R\setminus\{0\}$ be the framework charge parameter, let $m>0$ be an externally supplied mass parameter, and take the SI constants $c>0$ and $\varepsilon_0>0$ of the electromagnetic framework. Define the positive time constant

$$\tau:=\frac{q^2}{6\pi\varepsilon_0mc^3}>0.$$

The units are $[q]=\mathrm C$, $[m]=\mathrm{kg}$, $[c]=\mathrm{m\,s^{-1}}$, and $[\varepsilon_0]=\mathrm{F\,m^{-1}}$, so $[\tau]=\mathrm s$. A prescribed external force is a continuous map $f:\mathbb R\to\mathbb R^3$ with units $\mathrm N$. A particle trajectory in this model is a map $x:\mathbb R\to\mathbb R^3$ with three continuous time derivatives; its velocity and acceleration are $v(t):=\dot x(t)$ and $a(t):=\ddot x(t)$, with units $\mathrm{m\,s^{-1}}$ and $\mathrm{m\,s^{-2}}$. The term point particle means that the model assigns one position $x(t)$ and no spatial extent.

Adopt, as an additional effective model postulate, the equation

$$m\bigl(a(t)-\tau\dot a(t)\bigr)=f(t)\qquad(t\in\mathbb R).$$

Both $ma$ and $m\tau\dot a$ have units of force. The dot on $a$ means differentiation with respect to the laboratory time. This equation is not obtained by evaluating the particle's singular Maxwell self-field in the adopted Lorentz force law. The previously developed prescribed-source radiation model does not define that self-interaction; this postulate introduces a separate effective equation.

For physical use on a compact interval $I\subset\mathbb R$, assume $f$ is continuously differentiable there, choose dimensionless tolerances $\eta,\delta\in(0,1)$ and a positive force scale $F_*$ with units $\mathrm N$, and state the chosen values. In this item, low-speed at tolerance $\eta$ means $\sup_{t\in I}|v(t)|\le\eta c$, and slowly varying relative to $\tau$ at tolerance $\delta$ means $\tau\sup_{t\in I}|\dot f(t)|\le\delta F_*$. These are explicit regime conventions for an application, not universal empirical thresholds. The ODE is an exact adopted equation on its mathematical domain; its physical interpretation is restricted to applications that state their regime and tolerances.

## Postulate references

[[def-em-lab-geometry]]

[[def-em-si-conventions]]

[[def-em-sources]]

[[post-em-lorentz-coupling]]

[[rem-em-radiation-reaction-limits]]
