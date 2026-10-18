---
id: def-it-point-density-cumulative-map
kind: definition
title: Cumulative coordinate of a point density on a compact interval
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - cor-primitives-of-a-continuous-function
justified_by: []
aliases: []
axiom_use: No choice principle is used.
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Robert M. Gray, Source Coding Theory, first edition
      url: https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf
      locator: Chapter 5, §§5.1–5.2, printed pp. 115–120, compact source intervals and companding coordinates.
    - title: Robert M. Gray and David L. Neuhoff, Quantization, IEEE Transactions on Information Theory 44(6) (1998)
      url: https://www.csd.uoc.gr/~hy438/lectures/Quantization.pdf
      locator: §II and §IV-A, printed pp. 2328–2329 and 2344–2346, compressor maps and point densities.
---

## Definition

Let $a<b$ and let $g:[a,b]\to(0,\infty)$ be a continuously differentiable function with $\int_a^b g(t)\,dt=1$. Its cumulative point-density coordinate is

$$G_g(x):=\int_a^x g(t)\,dt,\qquad x\in[a,b].$$

The integrals here are the ordinary Riemann integrals of continuous functions. The supplier [[cor-primitives-of-a-continuous-function]] guarantees that they are defined and that $G_g$ is a primitive of $g$.
