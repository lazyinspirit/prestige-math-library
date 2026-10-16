---
id: alg-qa-16-dual-adversary-reflection-evaluator
kind: algorithm
title: Bounded-error evaluation from a dual adversary certificate
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 24
deps:
  - thm-qa-16-dual-vector-characterization
  - def-qc-controlled-unitary-access
  - def-qc-reflection
  - thm-qa-phase-estimation-access-cost
  - thm-qc-standalone-global-phase-invariance
  - thm-qc-controlled-global-phase-is-relative-phase
  - def-qc-dirac-notation-conversion
  - def-qa-16-boolean-query-domain
  - alg-qa-16-controlled-consistency-reflection
  - thm-qa-16-controlled-consistency-reflection-correct
  - alg-qa-quantum-phase-estimation
  - def-qa-quantum-query-algorithm
  - lem-qa-16-nonconstant-adversary-at-least-one
  - thm-qc-reflection-unitary-involution
justified_by:
  - thm-qa-16-dual-evaluator-success
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

**Inputs.** A finite nonconstant Boolean function $f:D\to\{0,1\}$ on $N\ge1$ input bits and a supplied finite dual-vector certificate $\{v_{x,i}\}$ in a finite-dimensional complex inner-product space $V$, meaning that for every distinct $x,y\in D$,
$$\sum_{i:x_i\ne y_i}\langle v_{x,i}|v_{y,i}\rangle_D=\mathbf1[f(x)\ne f(y)].$$
Its class costs $C_b:=\max_{x:f(x)=b}\sum_i\|v_{x,i}\|^2$ satisfy $C_0,C_1\le A$ for a supplied bound $A\ge1$. The declared standard XOR input oracle is available. The input-independent controlled witness-span reflection specified below is a nonoracle operation in this query model; no efficient gate implementation for it is assumed.

**Output.** A Boolean estimate of $f(x)$ for the promised input $x\in D$.

**Instructions.** Use the finite work space
$$\mathcal H=\operatorname{span}\{|start\rangle\}\oplus(\mathbb C^N\otimes V\otimes\mathbb C^2).$$
Here the address basis is $|i\rangle=e_{i-1}$ for $i\in[N]$, and $|start\rangle$ is a specified unit vector orthogonal to the query summand.
The witness family is classical instance data used to specify a subspace, not an input-dependent state preparation. Define
$$\nu_x=1+\frac1{2A}\sum_i\|v_{x,i}\|^2,\qquad |\psi_x\rangle=\nu_x^{-1/2}\left(|start\rangle+\frac1{\sqrt{2A}}\sum_i|i\rangle|v_{x,i}\rangle|x_i\rangle\right).$$
Let $\Delta$ project onto the span of all $|\psi_y\rangle$ with $f(y)=1$, and let
$$\Pi_x=|start\rangle\langle start|+\sum_{i=1}^N|i\rangle\langle i|\otimes I_V\otimes|x_i\rangle\langle x_i|$$
project onto $|start\rangle$ plus query states whose response is $x_i$. Form the exact ordered product
$$U_x=(2\Pi_x-I)(2\Delta-I).$$

Choose $M=2^m$ as the least power of two satisfying $M\ge512A$. Initialize the data register to $|start\rangle$ and apply the coherent QPE gate list followed by its projective readout on $U_x$. Implement controlled $U_x$ in chronological order by controlled $(2\Delta-I)$, then controlled $(2\Pi_x-I)$, retaining both plus-on-range signs. Repeat that complete controlled circuit $2^j$ times for the required power $U_x^{2^j}$ at each $j=0,\ldots,m-1$. Each controlled input-dependent reflection is the two-unconditional-query consistency-reflection circuit of [[alg-qa-16-controlled-consistency-reflection]]. For the measured phase label $y$, return $1$ exactly when $y=0$ and return $0$ otherwise. No gate-complexity bound is asserted for the input-independent reflection about the full witness span or the remaining nonoracle gates.
