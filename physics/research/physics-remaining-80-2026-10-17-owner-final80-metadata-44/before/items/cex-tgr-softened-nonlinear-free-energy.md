---
id: cex-tgr-softened-nonlinear-free-energy
kind: counterexample
title: "Softened fixed-density gravity free energy is not extensive"
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

A fixed positive softening length alone guarantees a finite extensive free-energy density for every sequence of unscaled self-gravitating boxes whose volume is proportional to particle number.

## Facts & Assumptions

**Given:** The softened Newtonian pair potential with fixed $a>0$ and the growing-box hypotheses in the theorem below.

[F1] For boxes containing a fixed positive-volume cube, the softened unscaled model has $\log Z_N/N\to+\infty$ along the concentration sequence, so its free energy per particle tends to $-\infty$. ([[thm-tgr-gravity-collapse-nonextensivity]])

## Counterexample

1.1 Choose any fixed softened length $a>0$ and a box sequence containing the same interior cube $C$ while its outer volume grows proportionally to $N$. These are the hypotheses of the softened concentration clause in [F1]. [given, F1, construct]

2.1 That clause gives $\log Z_N/N\ge\beta c(N-1)-\log N+K_\beta\to+\infty$, hence $-\beta^{-1}\log Z_N/N\to-\infty$. The asserted finite extensive free-energy density therefore fails in this explicit model family. [F1, step 1.1, algebra] ∎
