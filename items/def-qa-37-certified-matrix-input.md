---
id: def-qa-37-certified-matrix-input
kind: definition
title: "Certified fixed-dimensional special-unitary input"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-qc-effective-unitary-matrix-input
justified_by: []
axiom_use: "None; the definition uses fixed finite-dimensional matrix data."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Christopher M. Dawson and Michael A. Nielsen, The Solovay–Kitaev Algorithm"
      url: https://arxiv.org/pdf/quant-ph/0505030
      locator: "§4, exact-real arithmetic caveat, PDF pp. 6–10."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 2 §2.2, PDF pp. 26–29."
---

## Definition

Fix $d\in\{2,5,8\}$ and put
$$SU(d)=\{T\in M_d(\mathbb C):T^*T=I_d,\ \det T=1\}.$$
A **certified $SU(d)$ matrix input** is an exact target $T\in SU(d)$ together
with a deterministic Cauchy-name procedure which, on unary input $1^b$ for
$b\ge1$, returns a rational complex matrix $Q_b$ such that each real and
imaginary coordinate of each entry differs from the corresponding coordinate
of $T$ by at most $2^{-b}$. The interface also specifies a worst-case bit-time
bound $t(b)$ for the query. A **polynomial-time name** has
$t(b)\le(b+1)^c$ for some fixed integer $c\ge1$. The target is the matrix
specified by the entire Cauchy name; if two targets satisfy these bounds for the same sequence $(Q_b)_{b\ge1}$,
every coordinate difference is at most $2^{1-b}$ for all $b$, hence is zero.
No individual $Q_b$ is required to be unitary or special unitary. A requested tolerance is a positive binary
rational and its numerator/denominator encoding length is recorded
separately. For $d=2$ this specializes the unary-name convention of
[[def-qc-effective-unitary-matrix-input]]. For $d=5,8$ it is the same
entrywise interface in the fixed block dimensions; no dimension is input to
an algorithm as an unbounded parameter.
