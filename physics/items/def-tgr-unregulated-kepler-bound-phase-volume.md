---
id: def-tgr-unregulated-kepler-bound-phase-volume
kind: definition
title: "Unregulated bound Kepler phase-volume model"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-tgr-gravitating-phase-reference
  - def-countable-choice
justified_by:
  - thm-tgr-unregulated-kepler-volume-scaling
dependency_roles:
  def-tgr-gravitating-phase-reference: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Statistical Physics, §§1.3.2–1.3.3 and §§2.1–2.2, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Pierre-Henri Chavanis, Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas, §§III.A–E"
      url: "https://arxiv.org/pdf/1908.10806"
---

## Definition

Let $\mu,A,h_*>0$ and define the relative point-Kepler phase space $\Gamma_0=(\mathbb R^3\setminus\{0\})\times\mathbb R^3$ with $h(q,p)=|p|^2/(2\mu)-A/|q|$. Use the dimensionless measure $d\nu=dq\,dp/h_*^3$, the one-particle case of [[def-tgr-gravitating-phase-reference]]. For each bound energy $E<0$, define the sublevel phase volume
$$
\Omega_0(E)=\nu\{(q,p)\in\Gamma_0:h(q,p)\le E\}.
$$
The theorem [[thm-tgr-unregulated-kepler-volume-scaling]] proves that this volume is finite, positive, differentiable, and has positive derivative for every $E<0$. The definition does not claim that the point-particle canonical partition integral is finite.

