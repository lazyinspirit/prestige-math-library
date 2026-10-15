---
id: def-qft-x03-photon-count-pvm
kind: definition
title: Bosonic Fock number operator and counting PVM
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: physics
physical_scope: null
dependency_level: 1
deps:
  - def-qft-fock-and-test-spaces
  - def-projection-valued-measure
  - def-unbounded-linear-operator-domain-and-graph
dependency_roles:
  def-qft-fock-and-test-spaces: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-unbounded-linear-operator-domain-and-graph: mathematical-premise
justified_by:
  - thm-qft-x03-photon-count-pvm
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Mark Srednicki, Quantum Field Theory, author-hosted 2006 prepublication book draft, §55 “Electrodynamics in Coulomb Gauge,” printed pp. 335–338
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
---

## Definition

Let $H$ be a complex Hilbert space and let
$$\mathcal F_s(H)=\bigoplus_{n=0}^{\infty}H_s^{(n)}$$
be its bosonic Fock Hilbert space under
[[def-qft-fock-and-test-spaces]]. A vector is a square-summable sequence
$\Psi=(\Psi_n)_{n\ge0}$ with $\Psi_n\in H_s^{(n)}$.

Define the number operator $N$ by
$$D(N)=\left\{\Psi\in\mathcal F_s(H): \sum_{n=0}^{\infty}n^2\|\Psi_n\|^2<\infty\right\},\qquad (N\Psi)_n=n\Psi_n.$$

For every Borel set $B\subseteq\mathbb R$, define the sector projection
$$E_N(B)\Psi=\bigl(\mathbf1_B(n)\Psi_n\bigr)_{n\ge0},\qquad P_n:=E_N(\{n\}).$$
The definitions specify a candidate number observable and its candidate
spectral projections. They assign no physical probability; well-definedness,
self-adjointness, and the projection-valued-measure property are established
by [[thm-qft-x03-photon-count-pvm]].
