---
id: alg-qa-16-controlled-consistency-reflection
kind: algorithm
title: Controlled input-consistency reflection from a bit query
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - def-qa-16-boolean-query-domain
  - def-qa-standard-bit-query
  - def-qc-clean-and-dirty-ancillas
  - def-qc-dirac-notation-conversion
  - def-qc-reflection
  - def-qa-quantum-query-algorithm
  - thm-qc-reflection-unitary-involution
  - def-qc-register-and-computational-basis
justified_by:
  - thm-qa-16-controlled-consistency-reflection-correct
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: None; all spaces, matrices, decompositions and optimization variables are finite-dimensional.
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition

**Inputs.** A Boolean query problem with $N\ge1$, promised input $x\in D$ accessed by its standard XOR oracle, a finite work space $K$, a one-bit control $c$, and a data register with orthogonal decomposition
$$\mathcal H=\operatorname{span}\{|start\rangle\}\oplus(\mathbb C^N\otimes K\otimes\mathbb C^2),$$
where the address basis is $|i\rangle=e_{i-1}$ for $i\in[N]$ and $|start\rangle$ is a specified unit vector orthogonal to the query summand,
and one clean scratch bit $u=0$. Fix a known address $i_0\in[N]$. Define the consistency sum
$$\Pi_x=|start\rangle\langle start|+\sum_{i=1}^N|i\rangle\langle i|\otimes I_K\otimes|x_i\rangle\langle x_i|.$$

**Output.** A gate list for the controlled plus-on-range reflection $2\Pi_x-I$ on the data register, returning the scratch bit to zero.

**Instructions.** In query mode route address $i$ to the oracle and use $u$ as its target. In start mode route the oracle address to the fixed $i_0$ and apply a Hadamard to $u$, so its query target is $|+\rangle$. Make one unconditional standard XOR oracle call. Apply phase $-1$ exactly when $c=1$, the mode is query, and the response bit $z$ differs from $u$; disable this phase on start and when $c=0$. Make a second unconditional XOR call with the same address routing. In start mode apply the Hadamard to $u$ again. Return the data and control registers and the scratch. No controlled unknown-oracle call is invoked.
