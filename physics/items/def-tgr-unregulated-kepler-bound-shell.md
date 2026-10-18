---
id: def-tgr-unregulated-kepler-bound-shell
kind: definition
title: "Unregulated relative Kepler bound-energy phase model"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-countable-choice
  - def-tgr-gravitating-phase-reference
  - lem-tgr-three-dimensional-radial-integration
dependency_roles:
  def-countable-choice: mathematical-premise
  def-tgr-gravitating-phase-reference: mathematical-premise
  lem-tgr-three-dimensional-radial-integration: mathematical-premise
justified_by:
  - lem-tgr-unregulated-kepler-volume-density
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, §2(i)"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
    - title: "David Tong, Statistical Physics, §§1.2–1.3"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
---

## Definition

Take reduced mass $\mu>0$ kg, coupling $A>0$ J m, relative phase domain $(\mathbb R^3\setminus\{0\})\times\mathbb R^3$, and reference measure $d^3q\,d^3p/h_*^3$ with $h_*$ from [[def-tgr-gravitating-phase-reference]]. Define the relative Kepler Hamiltonian $h(q,p)=\|p\|^2/(2\mu)-A/\|q\|$.

For an energy $E<0$, define the bound-energy phase volume $\Omega(E)=h_*^{-3}\int\mathbf1_{\{h(q,p)\le E\}}\,d^3q\,d^3p$ and, when it exists, its density of states $\omega(E)=d\Omega/dE$. On an interval where $0<\Omega(E),\omega(E)<\infty$, define the Gibbs-volume entropy $S_V(E)=k_B\log\Omega(E)$ and the fixed-resolution surface entropy $S_S(E)=k_B\log(\omega(E)\Delta E)$ for a declared energy width $\Delta E>0$ J. For either convention define temperature by $T^{-1}=dS/dE$ and heat capacity by $C=dE/dT$ wherever these derivatives exist. The two entropy conventions are distinct finite-system definitions.
