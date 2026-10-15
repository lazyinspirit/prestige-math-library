---
id: def-rpm-h-first-class-constraint-family
kind: definition
title: "First-class closure for a regular constraint family"
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: physics
physical_scope: null
dependency_level: 2
deps: ["def-rpm-h-regular-constraint-system", "thm-rpm-h-canonical-poisson-and-flow"]
dependency_roles: {"def-rpm-h-regular-constraint-system": "mathematical-premise", "thm-rpm-h-canonical-poisson-and-flow": "mathematical-premise"}
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Andrew Hanson, Tullio Regge and Claudio Teitelboim, Constrained Hamiltonian Systems, Part 1 (1976)"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0e1d11ee-2741-4da4-83ed-b7cabc0cd7d6/download"
      locator: "35-page Part 1 PDF inspected; Chapter I, printed pp. 7–11, especially the weak-equality and first-class criterion on pp. 9–10."
    - title: "Ghanashyam Date, Lectures on Constrained Systems, arXiv:1010.2062 (2010)"
      url: "https://arxiv.org/pdf/1010.2062"
      locator: "28-page PDF inspected; §3, PDF pp. 13–14, Eq. (3.9), and §4, PDF p. 20, Eq. (4.22), for weak equality and first-class bracket closure."
landmark: false
---

## Definition

Let $(P,\omega)$ be a smooth symplectic manifold with its induced Poisson bracket, and let $\chi_1,\ldots,\chi_r$ be a regular constraint family on a common zero surface $N=\{z:\chi_a(z)=0\}$ as defined by [[def-rpm-h-regular-constraint-system]]. The family is **first-class on $N$** when

$$\{\chi_a,\chi_b\}(z)=0\qquad\text{for every }z\in N\text{ and all }a,b.$$

Equivalently, each pairwise bracket is weakly zero in the notation $F\approx0$ of [[def-rpm-h-regular-constraint-system]]. The Poisson bracket convention is that of [[thm-rpm-h-canonical-poisson-and-flow]]. This definition is a pointwise closure condition on the stated regular surface; it does not assert multiplier-algorithm termination or global quotient regularity.
