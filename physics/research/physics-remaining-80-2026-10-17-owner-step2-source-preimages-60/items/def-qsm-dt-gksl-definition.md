---
id: def-qsm-dt-gksl-definition
kind: definition
title: Finite GKSL generators and units
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-qsm-dt-channel-definition
dependency_roles:
  def-qsm-dt-channel-definition: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Lin Lin and Nathan Wiebe, Quantum Algorithms for Scientific Computation, Chapter 21, §21.1
      url: https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf
    - title: John Watrous, The Theory of Quantum Information, Chapter 2, §§2.2.1–2.2.3
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
---

## Definition

Fix a finite dimension $d\geq1$, a positive constant $\hbar$ in joule-seconds, a Hermitian matrix $H\in M_d(\mathbb C)$ in joules, and a finite family $L_1,\ldots,L_m\in M_d(\mathbb C)$ with units ${\rm s}^{-1/2}$, where $m\geq0$. On dimensionless matrices $X\in M_d(\mathbb C)$, define the **finite Gorini–Kossakowski–Sudarshan–Lindblad (GKSL) generator**

$$\mathcal L(X)=-\frac{i}{\hbar}[H,X]+\sum_{a=1}^{m}\left(L_aXL_a^*-\frac12\{L_a^*L_a,X\}\right),$$

where $[A,B]=AB-BA$, $\{A,B\}=AB+BA$, and $A^*$ is the conjugate transpose. Each summand has units ${\rm s}^{-1}$ times the units of $X$. An empty sum when $m=0$ is zero. The resulting $\mathcal L$ is a linear map on the matrix space used in the finite-channel definition [[def-qsm-dt-channel-definition]].

For a compact time interval $I\subset\mathbb R$ whose coordinate is time in seconds, continuous functions $H:I\to M_d(\mathbb C)$ and $L_a:I\to M_d(\mathbb C)$ with $H(t)=H(t)^*$ define the corresponding **continuous finite GKSL family** $\mathcal L_t$ by the same formula at each $t$. A propagator for this family means a family of linear maps $\Lambda(t,s)$, $s\leq t$ in $I$, satisfying $\partial_t\Lambda(t,s)=\mathcal L_t\circ\Lambda(t,s)$ and $\Lambda(s,s)=\operatorname{id}$. This definition alone asserts neither existence nor uniqueness.

These are finite-dimensional mathematical definitions. They do not assert that a physical system follows this generator or that a microscopic bath has a Markovian limit.
