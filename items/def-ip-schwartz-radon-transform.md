---
id: def-ip-schwartz-radon-transform
kind: definition
title: Radon transform on Schwartz functions
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-2d-radon-transform
  - def-schwartz-space-and-its-seminorms
  - def-countable-choice
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
justified_by:
  - lem-ip-schwartz-radon-well-defined
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis, §2.1"
      url: "https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf"
      locator: "§2.1, pp. 4–5: Radon transform definition and Fourier convention."
    - title: "Venkataswaran P. Krishnan and Eric Todd Quinto, Microlocal Analysis in Tomography"
      url: "https://math.tifrbng.res.in/~vkrishnan/Papers/Microlocal_Analysis_Tomography.pdf"
      locator: "§1.3.2, pp. 12–13: line parameterization and Fourier-slice theorem."
verification:
  precheck: n/a
---

## Definition

For $f\in\mathcal S(\mathbb R^2)$, $\theta=(\theta_1,\theta_2)\in S^1$, $s\in\mathbb R$, and $\theta^\perp=(-\theta_2,\theta_1)$, define $R_{\mathcal S}f(\theta,s)=\int_{\mathbb R}f(s\theta+t\theta^\perp)\,dt$, where the absolutely convergent integral is with respect to one-dimensional Lebesgue measure. Here $\mathcal S(\mathbb R^2)$ is the space of smooth complex functions for which every seminorm $\sup_{x\in\mathbb R^2}|x^\alpha\partial^\beta f(x)|$, for multi-indices $\alpha,\beta$, is finite. The parameter $\theta$ is the unit normal to the line, so $(\theta,s)$ and $(-\theta,-s)$ represent the same unoriented line. Under the Axiom of Countable Choice, the Lebesgue integral in this definition agrees on compactly supported smooth inputs with the compact-support Riemann line integral, so the normalization is the same.

## Definition references

[[def-ip-2d-radon-transform|Compactly supported smooth domain, line normal, and normalization; current body inspected]]

[[def-schwartz-space-and-its-seminorms|Schwartz space and its seminorms]]

[[def-countable-choice|Countable Choice for the Lebesgue/Riemann integral agreement]]

[[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral|Agreement of bounded Riemann and Lebesgue integrals under Countable Choice]]

[Mikko Salo, On geometric inverse problems and microlocal analysis, §2.1](https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf)

[Venkataswaran P. Krishnan and Eric Todd Quinto, Microlocal Analysis in Tomography, §1.3.2](https://math.tifrbng.res.in/~vkrishnan/Papers/Microlocal_Analysis_Tomography.pdf)
