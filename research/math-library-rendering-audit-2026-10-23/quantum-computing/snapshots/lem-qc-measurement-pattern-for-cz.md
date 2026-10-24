---
id: lem-qc-measurement-pattern-for-cz
kind: lemma
title: "Four-branch open-graph pattern for CZ"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-adaptive-measurement-pattern, lem-qc-one-bit-teleportation, lem-qc-j-basis-and-phase-identities, def-qc-controlled-phase-rotation]
justified_by: []
dependency_level: 10
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415, §20.6, p. 180"
      url: https://arxiv.org/pdf/1907.09415
    - title: "Robert Raussendorf, Daniel E. Browne, and Hans J. Briegel, Measurement-based quantum computation on cluster states, CNOT correlation proof, pp. 20–21"
      url: https://arxiv.org/pdf/quant-ph/0301052
---

## Statement

Take vertices $1,2$ as inputs and $3,4$ as outputs, with edges
$\{1,2\},\{1,3\},\{2,4\}$. Prepare
$CZ_{12}CZ_{13}CZ_{24}(|\psi\rangle_{12}|+\rangle_3|+\rangle_4)$ and measure
vertices $1,2$ in the $J(0)=H$ basis. For outcomes $b_1,b_2\in\{0,1\}$,
the branch operator from the two input wires to the two output wires is

$$K_{b_1b_2}=\frac12(X^{b_1}H\otimes X^{b_2}H)CZ.$$

Each of the four branches has probability $1/4$ for every normalized input,
and the terminal correction $(HX^{b_1}\otimes HX^{b_2})$ yields the corrected
branch $\frac12 CZ|\psi\rangle$.

## Facts & Assumptions

**Given:** The ordered wire convention, the open-graph pattern definition,
the one-bit branch identity, and the controlled-phase gate $CZ$.

[F1] One-bit teleportation has branch operator $2^{-1/2}X^bJ(\alpha)$ for each outcome ([[lem-qc-one-bit-teleportation]]).

[F2] The graph pattern branch map applies the graph-edge unitary before the ordered measurement bras and preserves the stated input/output order ([[def-qc-adaptive-measurement-pattern]]).

[F3] $J(0)=H$ by [[lem-qc-j-basis-and-phase-identities]], and $CZ=\operatorname{diag}(1,1,1,-1)$ by [[def-qc-controlled-phase-rotation]].

## Proof


1.1 The vertical edge $\{1,2\}$ applies $CZ$ to the arbitrary two-qubit input before the two horizontal teleportation branches; the horizontal edges $\{1,3\}$ and $\{2,4\}$ implement the one-bit identity independently on the two wires. Thus [F1]–[F3] give the branch operator $K_{b_1b_2}=\frac12(X^{b_1}H\otimes X^{b_2}H)CZ$. [F1, F2, F3, algebra]

2.1 In the declared wire order, the four branch operators are $K_{00}=\frac12(H\otimes H)CZ$, $K_{01}=\frac12(H\otimes XH)CZ$, $K_{10}=\frac12(XH\otimes H)CZ$, and $K_{11}=\frac12(XH\otimes XH)CZ$. Each factor after $1/2$ is unitary, so $K_{b_1b_2}^\dagger K_{b_1b_2}=I/4$ and every normalized input has probability $1/4$. [step 1.1, algebra]

3.1 Since $(X^bH)^\dagger=HX^b$, applying $HX^{b_1}\otimes HX^{b_2}$ to the branch cancels both local factors and leaves $\frac12 CZ|\psi\rangle$. All four branches have the same corrected normalized output $CZ|\psi\rangle$. [step 2.1, F3, algebra] ∎

