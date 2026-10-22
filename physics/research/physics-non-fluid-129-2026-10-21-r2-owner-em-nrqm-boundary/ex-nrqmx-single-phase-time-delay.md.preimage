---
id: ex-nrqmx-single-phase-time-delay
kind: example
domain: mathematics
library: mathematics
title: Elastic phase derivative
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
deps:
  - thm-nrqmx-finite-channel-wigner-smith
dependency_roles:
  thm-nrqmx-finite-channel-wigner-smith: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Christophe Texier, Wigner Time Delay and Related Concepts: Application to Transport in Coherent Conductors, §2.2.1"
      url: "https://arxiv.org/pdf/1507.00075"
      locator: "PDF p.3, equations (11)–(12): one-channel Wigner delay as the derivative of the scattering phase."
---

## Example

Let $I$ be an open energy interval and let $\delta:I\to\mathbb R$ be $C^1$. The one-channel unitary matrix $S(E)=e^{2i\delta(E)}\in U(1)$ has Wigner–Smith matrix $Q(E)=2\hbar\,\delta'(E)$, which is real and has units of seconds when $E$ is measured in joules and $\hbar$ in joule-seconds. This algebraic quantity is not, without further model assumptions, an operational arrival-time measurement.

## Example references

[[thm-nrqmx-finite-channel-wigner-smith]]

## Facts & Assumptions

**Given:** $E\in I$, $\delta\in C^1(I;\mathbb R)$, $S(E)=e^{2i\delta(E)}$, and $\hbar>0$.

[F1] For a $C^1$ unitary channel matrix, $Q=-i\hbar S^*S'$ ([[thm-nrqmx-finite-channel-wigner-smith]]).

## Verification

**Given:** [F1] and the interval, differentiable phase, unitary matrix, and $\hbar>0$ in the Example.

1.1 Since $\delta(E)$ is real, $S(E)^*S(E)=e^{-2i\delta(E)}e^{2i\delta(E)}=1$; thus this is a one-channel unitary matrix on all of $I$. Differentiation gives $S'(E)=2i\delta'(E)e^{2i\delta(E)}$. [given, algebra]

2.1 Substitution into [F1] gives $Q(E)=-i\hbar e^{-2i\delta(E)}2i\delta'(E)e^{2i\delta(E)}=2\hbar\delta'(E)$, which is real. Since $\delta$ is dimensionless and $d\delta/dE$ has units $\mathrm J^{-1}$, $Q$ has units $\mathrm s$. No pointwise value of $Q$ is interpreted as a measured time. [given, F1, step 1.1, algebra] ∎
