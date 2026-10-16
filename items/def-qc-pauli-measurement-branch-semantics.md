---
id: def-qc-pauli-measurement-branch-semantics
kind: definition
title: Pauli measurement branch semantics
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-qc-projective-measurement
  - def-qc-povm-and-outcome-law
  - def-qc-instrument-and-conditional-state
  - def-qc-density-operator
  - def-qc-phase-aware-n-qubit-pauli-group
  - def-qc-pauli-group-on-zero-qubits
  - def-qc-pauli-matrices
  - thm-qc-hermitian-pauli-phase-criterion
  - def-matrix-space
  - def-matrix-product-and-identity-matrix
  - def-trace-of-a-square-matrix
justified_by:
  - lem-qc-pauli-measurement-projectors
  - lem-qc-pauli-measurement-positive-branch-is-density
  - lem-qc-pauli-measurement-defines-an-instrument
dependency_level: 8
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §20.2"
      url: https://arxiv.org/pdf/1907.09415
    - title: John Watrous, Understanding Quantum Information and Computation, Lesson 14
      url: https://jhwatrous.github.io/UQIC.pdf
---

## Definition

Let $H_n=(\mathbb C^2)^{\otimes n}$ be an ordered $n$-qubit register, let
$\rho\in M_{2^n}(\mathbb C)$ be a density operator, and let $M\in M_{2^n}(\mathbb C)$
be a Hermitian Pauli observable with $M^2=I$. For $b\in\{0,1\}$ define

$$P_b:=\frac{I+(-1)^bM}{2},\qquad p_b:=\operatorname{Tr}(\rho P_b),\qquad \mathcal I_b(\rho):=P_b\rho P_b.$$

The outcome $b$ has probability $p_b$. Its conditional density operator is
$\rho_b:=\mathcal I_b(\rho)/p_b$ when $p_b>0$; it is $\bot$ (no assigned
conditional density operator) when $p_b=0$.
The branch map $\mathcal I_b$ is the projective measurement instrument for the
$(-1)^b$ eigenspace of $M$. A non-Hermitian phase-aware Pauli is outside this
definition. For $n\ge1$, Hermiticity of $P(k,x,z)=i^kX^xZ^z$ means
$k\equiv x\cdot z\pmod2$; in particular $Y=iXZ$ is admitted. For $n=0$,
the admitted observables are $I_{H_0}$ and $-I_{H_0}$.

The hypotheses and meanings of density operator, Pauli observable, projective
measurement, POVM outcome law, and instrument are the cited suppliers. The
local projector calculation is [[lem-qc-pauli-measurement-projectors]].

## Sources

Ronald de Wolf, *Quantum Computing: Lecture Notes*, §20.2, PDF pp. 186–188,
defines the two Pauli eigenspace projectors and their outcome probabilities:
https://arxiv.org/pdf/1907.09415.

John Watrous, *Understanding Quantum Information and Computation*, Lesson 14,
§14.1, printed pp. 405–407 (PDF pp. 411–413), treats a Hermitian Pauli tensor
as a two-outcome observable:
https://jhwatrous.github.io/UQIC.pdf.
