---
id: cex-tgr-hardcore-long-range-limit
kind: counterexample
title: "Hard-core packing still fails the unscaled extensive gravity limit"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - thm-tgr-gravity-collapse-nonextensivity
dependency_roles:
  thm-tgr-gravity-collapse-nonextensivity: mathematical-premise
justified_by: []
aliases: []
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, Foundations of Physics 33 (2003), author manuscript"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
    - title: "Pierre-Henri Chavanis, Statistical mechanics of self-gravitating systems in general relativity: II. The classical Boltzmann gas"
      url: "https://arxiv.org/pdf/1908.10817"
proof_strategy: direct
verification:
  precheck: pass
---

## Statement refuted

A fixed hard-core exclusion distance and boxes at fixed particle density guarantee an extensive free-energy density for unscaled Newtonian long-range attraction.

## Facts & Assumptions

**Given:** The unscaled point attraction $-Gm^2/r$, a positive hard-core separation, and boxes with side proportional to $N^{1/3}$.

[F1] For $N=n^3$, a cubic packing with fixed minimum separation still has interaction energy at most $-c_0N^{5/3}$ on positive-volume position sets, and its canonical free energy per particle tends to $-\infty$. ([[thm-tgr-gravity-collapse-nonextensivity]])

## Counterexample

1.1 Fix a grid spacing larger than the hard-core radius and take $N=n^3$ particles, one in each small cube around the cubic grid sites. The enclosing box has side proportional to $n=N^{1/3}$ and the product of the small cubes is an admissible positive-volume position set, matching [F1]. [given, F1, construct]

2.1 By [F1], the attraction on those configurations is at most $-c_0N^{5/3}$ and the Gaussian momentum integral contributes only an exponential factor of order $e^{O(N)}$; thus $\log Z_N/N\to+\infty$ and $F_N/N\to-\infty$. This contradicts the claimed extensive free-energy bound. [F1, step 1.1, algebra] ∎
