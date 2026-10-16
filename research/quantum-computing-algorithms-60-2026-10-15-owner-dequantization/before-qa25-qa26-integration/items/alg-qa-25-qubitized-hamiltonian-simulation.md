---
id: alg-qa-25-qubitized-hamiltonian-simulation
kind: algorithm
title: Qubitized Hamiltonian simulator
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-25-qubitization-access-model
  - def-qa-25-hamiltonian-simulation-polynomial
  - thm-qa-25-qubitization-signal-sequence
  - alg-qa-24-qsvt
  - alg-qa-23-qsp-phase-synthesis
justified_by: []
axiom_use: "None; all registers and circuits are finite-dimensional."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, §5.1"
      url: "https://arxiv.org/pdf/1806.01838"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §§29.3–29.4"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.4.1"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition

**Inputs.** A finite Hermitian $H$, $\alpha>0$, an exact $(\alpha,a,0)$ block encoding $U$ with $J^*UJ=H/\alpha$, a rational time $t$, rational $0<\epsilon\le1$, and separately declared access and cost for $U,U^*,$ controlled-$U$, controlled-$U^*$, both projector-phase circuits, coefficient preparation, SELECT, OAA reflections, phase synthesis, data access, and classical arithmetic. The input description also supplies terminating certified comparisons and rational-interval evaluations for the scalar arithmetic below. A bounded block-error input is a separate variant with a certified block-error budget; it is not silently treated as exact.

**Output.** Return the finite circuit list and error certificate for a unitary dilation $V_{\rm impl}$. Its success claim is on the clean-input isometry $J_{\rm clean}|\psi\rangle=|0_{\rm work}\rangle|\psi\rangle$; auxiliary output registers are approximate and are not measured to clean an unknown system input. On a failed polynomial or phase certificate, return the phase routine's declared failure status and do not report a simulator.

**Generation and execution.** Set $\tau=\alpha t$ and $\rho=\epsilon^2/10000$. For $t=0$, return the identity circuit and zero query count. Otherwise:

1. Starting at $d=\max(1,\lceil|\tau|\rceil)$, increase $d$ until $u=|\tau|/(2(d+2))<1$ and
   $$\frac{2(|\tau|/2)^{d+1}}{(d+1)!(1-u)}\le\rho/8.$$
   Evaluate each strict comparison by the certified interval routine named in OP0 of the binding operational appendix; an undecided equality is not rounded toward success.
2. For each $k=0,\ldots,d$, compute $J_k(\tau)$ from the series in [[def-qa-25-hamiltonian-simulation-polynomial]]. Stop its alternating-series evaluation only after its ratio $\tau^2/[4(j+1)(j+k+1)]$ is below $1$ and its geometric remainder is at most $\rho/(32(d+1))$. Store a rational coefficient and its error interval. Form $T_0=1,T_1=x,T_{k+1}=2xT_k-T_{k-1}$. Set
   $$E=J_0+2\sum_{1\le 2r\le d}(-1)^rJ_{2r}T_{2r},\qquad O=2\sum_{1\le 2r+1\le d}(-1)^rJ_{2r+1}T_{2r+1}.$$
   Thus $Q:=E-iO$ is the rounded Jacobi–Anger truncation and its certified scalar error is $\|Q-f_\tau\|_{[-1,1]}\le\rho$; the sign $(-i)^k$ is literal.
3. Require a certified combined polynomial error at most $\rho$. Then $|E(x)|,|O(x)|\le1+\rho$ on $[-1,1]$. Put $B=1+2\rho$, $p_E=E/B$, and $p_O=O/B$. Call [[alg-qa-23-qsp-phase-synthesis]] separately on these two real targets with their actual degree and parity, retaining its complementary-polynomial certificate, phase list, precision, and every explicit failure branch. Execute each real QSVT extraction using [[alg-qa-24-qsvt]] and the exact signal access of [[def-qa-25-qubitization-access-model]]. If an extraction fails certification, return that failure.
4. Pad both extraction workspaces to the same ordered register space. Prepare a clean coefficient qubit in $|+\rangle$. SELECT applies the $p_E(H/\alpha)$ block in branch $0$ and $-i$ times the $p_O(H/\alpha)$ block in branch $1$. Unprepare the coefficient qubit. The resulting clean block before amplification is $M/2$, where $M=p_E(H/\alpha)-i p_O(H/\alpha)=Q(H/\alpha)/B$. Since $B=1+2\rho$, the scalar error bound gives
$$\|M-e^{-itH}\|_{\rm op}\le\frac{\rho}{B}+\frac{B-1}{B}=\frac{3\rho}{1+2\rho}<3\rho;$$
here $f_\tau(H/\alpha)=e^{-itH}$ by finite spectral calculus and $|f_\tau(x)|=1$. The factor $-i$ is a relative phase under any outer control and is not discarded.
5. Apply the explicit phase-corrected oblivious-amplitude-amplification unitary $C=-WRW^*RW$, where $R=I-2\Pi_{\rm zero}$ and $W$ is the complete even/odd block-combination circuit. Retain its work registers. Allocate total phase, gate, and block implementation error at most $\epsilon/4$ after amplification. A controlled simulator controls every whole block and the known correction, using the separately supplied controlled access.

The arithmetic, coefficient series, two phase-generation calls, controlled QSVT sequences, coefficient register, SELECT, and OAA list are finite outputs; their gate, query, precision, workspace, description-bit, and classical computation costs are separate coordinates. The phase-generation call is the finite procedure of [[alg-qa-23-qsp-phase-synthesis]], not a free source routine. A sparse input uses its actually supplied block-encoding circuit and its exact row-location, value, precision, and state-preparation costs; standard XOR sparse access alone does not imply an in-place reversible location permutation.
