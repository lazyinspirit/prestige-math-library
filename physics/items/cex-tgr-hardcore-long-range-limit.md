---
id: cex-tgr-hardcore-long-range-limit
kind: counterexample
title: "Hard-core exclusion does not guarantee a finite unscaled-gravity limit"
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
dependency_level: 3
---

## Statement refuted

Fix $\beta>0$ and consider the fixed-density sequence indexed by $N=n^3$. Let $V_N$ be the box volume, $Z_N(\beta)$ the canonical partition function, and $F_N(\beta)=-\beta^{-1}\log Z_N(\beta)$. The per-particle free-energy density is $f_N=F_N/N$ (in joules), and the per-volume free-energy density is $g_N=F_N/V_N$ (in joules per cubic metre). Here a “finite extensive free-energy density” means that the chosen normalized sequence has a finite real thermodynamic-limit value as $n\to\infty$. The claim refuted is that a fixed hard-core exclusion distance and fixed particle density guarantee this for the unscaled Newtonian long-range attraction.

## Facts & Assumptions

**Given:** The unscaled point attraction $-Gm^2/r$, a positive hard-core separation, and boxes with side proportional to $N^{1/3}$.

[F1] For $N=n^3$, a cubic packing with fixed minimum separation still has interaction energy at most $-c_0N^{5/3}$ on positive-volume position sets, and its canonical free energy per particle tends to $-\infty$. ([[thm-tgr-gravity-collapse-nonextensivity]])

## Counterexample

1.1 Fix a grid spacing larger than the hard-core radius and take $N=n^3$ particles, one in each small cube around the cubic grid sites. The enclosing box has side proportional to $n=N^{1/3}$ and the product of the small cubes is an admissible positive-volume position set, matching [F1]. [given, F1, construct]

2.1 By [F1], $f_N=F_N/N=-\beta^{-1}\log Z_N/N\to-\infty$. Here $V_N=|B_n|=d^3N$, so $g_N=F_N/V_N=d^{-3}f_N\to-\infty$. Neither normalization has a finite real thermodynamic-limit value, contradicting the claimed guarantee. [F1, step 1.1, algebra] ∎
