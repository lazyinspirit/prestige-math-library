---
id: def-nrqmx-finite-channel-families
kind: definition
title: Finite channel families, semigroups, and CP-divisibility
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-qsm-dt-channel-definition
dependency_roles:
  def-qsm-dt-channel-definition: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Lin Lin and Nathan Wiebe, Quantum Algorithms for Scientific Computation, Chapter 21, §21.1"
      url: "https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf"
      locator: "Equations (21.3)–(21.5), printed pp. 307–308: the norm-continuous channel-semigroup convention, cited as a contrast; this local definition retains the algebraic semigroup and CP-divisibility properties without adding continuity."
    - title: "Ángel Rivas, Susana F. Huelga, and Martin B. Plenio, Quantum Non-Markovianity: Characterization, Quantification and Detection, §3.2"
      url: "https://arxiv.org/pdf/1405.0303"
      locator: "Definition 3.2 and equation (29), printed pp. 10–11: completely positive divisible quantum evolution."
---

## Definition

Let $d\geq1$ and let $\Phi_t:M_d(\mathbb C)\to M_d(\mathbb C)$ be a family of finite quantum channels indexed by $t\geq0$, where “finite quantum channel” has the meaning in [[def-qsm-dt-channel-definition]]. The family obeys the **semigroup law** when $\Phi_0=\operatorname{id}_{M_d(\mathbb C)}$ and $\Phi_{t+s}=\Phi_t\circ\Phi_s$ for every $s,t\geq0$.

The family is **CP-divisible** when for every $0\leq s\leq t$ there exists a finite quantum channel $V_{t,s}:M_d(\mathbb C)\to M_d(\mathbb C)$ such that $\Phi_t=V_{t,s}\circ\Phi_s$. CP-divisibility is this specified factorization property; the definition does not assert that it is a universal meaning of “Markovian”.

## Definition references

[[def-qsm-dt-channel-definition]]

## Remarks

The source literature distinguishes divisibility and time-homogeneous semigroup conditions and discusses several meanings of quantum Markovianity. This item fixes only the map properties used on this page.
