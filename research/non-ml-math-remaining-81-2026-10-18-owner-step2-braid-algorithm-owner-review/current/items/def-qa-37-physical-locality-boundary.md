---
id: def-qa-37-physical-locality-boundary
kind: definition
title: "Physical realization boundary for braid compilation"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 12
deps:
  - def-qa-37-finite-adiabatic-braid-input
  - def-qc-tqc-physical-braid-interface
  - lem-qa-37-total-error-budget
justified_by: []
axiom_use: "None; this is a scope/interface definition."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: "§§9.14–9.17, mathematical model conventions, PDF pp. 53–62."
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: "§IV.C, physical realization limitations, PDF pp. 58–63."
    - title: "Sabine Jansen, Mary-Beth Ruskai, and Ruedi Seiler, Bounds for the adiabatic approximation with applications to quantum computation"
      url: https://arxiv.org/pdf/quant-ph/0603175
      locator: "Theorem 3, finite-dimensional projector estimate only, PDF pp. 8–12."
---

## Definition

A **physical realization record** for a mathematical braid-compilation
instance contains, in addition to its finite fusion input and braid word, all
of: a specified physical state space and low-energy-sector identification; a
$C^2$ Hermitian path and constant-rank uniformly gapped projection; an
initial preparation isometry and its cost; a slow-time schedule; an endpoint
frame; a separately justified identification of band transport with the
logical-frame Fibonacci $F/R$ target of
[[def-qa-37-finite-adiabatic-braid-input]], including its phase; and a
locality model for exchanges. A local-Hamiltonian model specifies a finite
lattice $\Lambda$ with its metric, an interaction range $R$, and a uniform
per-site interaction bound $J$ for a decomposition
$H(s)=\sum_{X\subseteq\Lambda}h_X(s)$: every $h_X(s)$ is Hermitian and
supported on $X$, $\operatorname{diam}(X)\le R$, and
$$\sup_{s\in[0,1],\,x\in\Lambda}\sum_{X\ni x}\|h_X(s)\|\le J.$$
The record separately states the local-indistinguishability and stability
criteria, including their region scales, norms, tolerances, and the evidence
used to establish them. It also supplies explicit preparation, excitation,
measurement, and control-error terms.
The first spectral-path clauses are the finite interface in
[[def-qc-tqc-physical-braid-interface]] and
[[def-qa-37-finite-adiabatic-braid-input]]. The error ledger is
[[lem-qa-37-total-error-budget]]. A successful SK compilation, projective
density theorem, or JRS leakage estimate supplies none of the material,
locality, preparation, or band-holonomy evidence by itself; those are
independent record fields, not consequences of the mathematical compiler.
Only terms appearing as hypotheses in the stated error ledger contribute to
its measured-output bound; a separately recorded preparation, excitation, or
control error requires an additional bound before it can be included in a
total physical error claim.
