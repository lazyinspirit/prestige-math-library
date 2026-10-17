---
id: def-tgr-softened-gravity-finite-phase
kind: definition
title: "Finite softened gravitational Hamiltonian and domain"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps: 
  - def-tgr-gravitating-phase-reference
dependency_roles:
  def-tgr-gravitating-phase-reference: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, Foundations of Physics 33 (2003), author manuscript"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
    - title: "Pierre-Henri Chavanis, Statistical mechanics of self-gravitating systems in general relativity: II. The classical Boltzmann gas"
      url: "https://arxiv.org/pdf/1908.10817"
dependency_level: 1
---

## Definition

Use the phase space and dimensionless reference measure of [[def-tgr-gravitating-phase-reference]]. Fix an integer $N\ge1$, a bounded Lebesgue measurable $B\subseteq\mathbb R^3$ with positive finite volume, a common mass $m>0$, a gravitational coupling $G>0$, and a softening length $a>0$. On $\Gamma_N=B^N\times\mathbb R^{3N}$ define
$$H_{N,a}(q,p)=\sum_{i=1}^N\frac{|p_i|^2}{2m}+U_a(q),\qquad U_a(q)=-\sum_{1\le i<j\le N}\frac{Gm^2}{\sqrt{|q_i-q_j|^2+a^2}}.$$
The positions and momenta are mathematical phase variables; the softening is a fixed regulator parameter. The Hamiltonian is measurable and its potential is bounded because each pair denominator is at least $a$. A point-particle model is a different Hamiltonian and is not included at $a=0$.
