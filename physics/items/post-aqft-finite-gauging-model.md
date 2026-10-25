---
id: post-aqft-finite-gauging-model
kind: postulate
title: Adopted finite two-group gauging model
status: "published"
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - def-aqft-finite-two-group-state-sum
dependency_roles:
  def-aqft-finite-two-group-state-sum: formulation-prerequisite
physical_scope: The adopted finite three-dimensional vertex-spin regulator with G = Z/2 and trivial A, including its unit background response and relative state-sum convention; no continuum or empirical claim.
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: Gregory W. Moore and Vivek Saxena, TASI Lectures on Topological Field Theories and Differential Cohomology, §23.3
      url: https://arxiv.org/pdf/2510.07408
      locator: PDF pp. 97–100 / printed pp. 96–99; finite homotopy-model state spaces and automorphism-weighted amplitudes, with the local spin model adopted separately here.
    - title: Daniel S. Freed and Frank Quinn, Chern-Simons Theory with Finite Gauge Group, §2
      url: https://www.math.ru.nl/~mueger/TQFT/FQ.pdf
      locator: PDF pp. 8–11; finite gauge-groupoid normalization and sewing for their stated ordinary finite-group model.
    - title: Francesco Benini, Clay Córdova, and Po-Shen Hsin, On 2-Group Global Symmetries and Their Anomalies, §2.3
      url: https://arxiv.org/pdf/1803.09336
      locator: PDF pp. 18–20; finite simplicial two-group background and gauge conventions, specialized here to A = {0}.
---

## Postulate

Adopt as the finite physical model the three-dimensional vertex-spin regulator with $G=\mathbb Z/2$, trivial $1$-form group $A=\{0\}$, zero Postnikov cocycle, zero action, and the normalized uniform measure on spins. Its global $G$ symmetry flips every spin, its background response is the unit weight for every flat background, and its selected boundary state space and relative amplitudes are those specified by the model definition. The finite background gauging and sewing prescription is part of this adopted model. This postulate says nothing about a continuum limit, an empirical realization, or the truth of any more general quantum field theory.

## Postulate references

[[def-aqft-finite-two-group-state-sum|finite spin, background, measure, and boundary data]]

[Moore and Saxena, §23.3](https://arxiv.org/pdf/2510.07408)

[Freed and Quinn, §2](https://www.math.ru.nl/~mueger/TQFT/FQ.pdf)

[Benini, Córdova, and Hsin, §2.3](https://arxiv.org/pdf/1803.09336)

