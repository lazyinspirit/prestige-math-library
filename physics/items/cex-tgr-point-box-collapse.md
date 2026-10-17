---
id: cex-tgr-point-box-collapse
kind: counterexample
title: "Finite box fails to cure point gravitational collapse"
status: published
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

**Given:** In SI units, let $B=\prod_{j=1}^3(a_j,b_j)\subset\mathbb R^3$ with finite $a_j<b_j$ in metres. Let $q_i\in B$ be positions, $p_i\in\mathbb R^3$ momenta in $\mathrm{kg\,m\,s^{-1}}$, $m>0$ a mass in $\mathrm{kg}$, $G>0$ in $\mathrm{m^3\,kg^{-1}\,s^{-2}}$, $\beta>0$ in $\mathrm{J^{-1}}$, and $h_*>0$ a fixed action reference in $\mathrm{J\,s}$. On $\Gamma=\{(q_1,q_2,p_1,p_2)\in B^2\times\mathbb R^6:q_1\ne q_2\}$, define the point Hamiltonian in joules by
$$H=\frac{|p_1|^2+|p_2|^2}{2m}-\frac{Gm^2}{|q_1-q_2|}$$
and its dimensionless canonical partition integral by $Z_2(\beta)=\int_\Gamma e^{-\beta H}\,d^3q_1\,d^3q_2\,d^3p_1\,d^3p_2/(2!h_*^6)$, using product Lebesgue measure. The collision diagonal is excluded, with no positive minimum separation imposed.

[F1] For two equal positive masses and the stated point Hamiltonian in a bounded three-dimensional box with nonempty interior, the canonical partition integral with the dimensionless phase reference is infinite for every $\beta>0$. ([[thm-tgr-gravity-collapse-nonextensivity]], clause 1)

## Counterexample

1.1 The box $B\subset\mathbb R^3$ is bounded and has nonempty interior since each $b_j-a_j>0$. The phase variables, two equal positive masses, point Hamiltonian and reference measure are exactly those of [F1]; no short-distance cutoff is imposed. [given, F1]

2.1 By [F1], $Z_2(\beta)=+\infty$ for this finite box and every $\beta>0$. This contradicts the refuted universal finiteness claim, so a finite outer box alone does not cure point collapse. [F1, step 1.1] ∎
