---
id: cex-tgr-point-box-collapse
kind: counterexample
title: "Finite box fails to cure point gravitational collapse"
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
dependency_level: 3
---

## Statement refuted

A finite enclosing box by itself guarantees a finite canonical partition function for a two-particle Newtonian point-attraction model.

## Facts & Assumptions

**Given:** A bounded box with nonempty interior, two equal masses $m>0$, $G>0$, $\beta>0$, and the point Hamiltonian
$$H=\frac{|p_1|^2+|p_2|^2}{2m}-\frac{Gm^2}{|q_1-q_2|}$$
off the collision diagonal.

[F1] For the stated two-body point-particle Hamiltonian in any bounded box with interior, the canonical partition integral is infinite for every $\beta>0$, even though the softened finite model is normalizable. ([[thm-tgr-gravity-collapse-nonextensivity]])

## Counterexample

1.1 The model in the Given clause satisfies the point-potential and positive-box hypotheses of [F1]; no short-distance cutoff is imposed. [given, F1]

2.1 By [F1], its position integral diverges at arbitrarily small separation and therefore its full canonical partition integral is $+\infty$. This contradicts the refuted universal finiteness claim, so a finite outer box alone does not cure point collapse. [F1, step 1.1] ∎
