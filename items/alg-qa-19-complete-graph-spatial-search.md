---
id: alg-qa-19-complete-graph-spatial-search
kind: algorithm
title: Complete-graph continuous-time search
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qa-19-continuous-time-walk
  - def-qa-19-graph-generator-conventions
  - def-qa-19-hamiltonian-access-cost-model
  - lem-qa-19-hadamard-uniform-state-preparation
  - def-qc-coherent-function-oracle
  - def-qc-projective-measurement
  - def-qc-circuit-cost-model
  - def-qc-dirac-notation-conversion
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 17 §17.1
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Chapter 17 §17.1, PDF pp.81–82 (printed p.74 on PDF p.82): finite graph-Hamiltonian evolution. The complete-graph search calculation below is local."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.1"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 9 §9.1, printed pp.71–72/PDF pp.83–84: finite Hermitian evolution and the separate cost of simulation. The complete-graph search calculation below is local."
---

## Definition

**Inputs:** An integer $N\ge2$, an integer $m\ge\lceil\log_2N\rceil$, an
injective label encoding $\mathsf{enc}:[N]\to\{0,1\}^m$, and the corresponding
$m$-qubit register. Its **active subspace** is
$S:=\operatorname{span}\{e_{\mathsf{enc}(x)}:x\in[N]\}$; bit strings outside the
image of $\mathsf{enc}$ are unused labels. The marked label $w\in[N]$ is available
through the declared oracle/access model, not as an inspected classical value.

On $S$, define the complete-graph adjacency by
$$A e_{\mathsf{enc}(x)}:=\sum_{y\in[N],\,y\ne x}e_{\mathsf{enc}(y)},$$
and extend $A$ by zero on $S^\perp$. Define
$P_wz:=\langle z,e_{\mathsf{enc}(w)}\rangle e_{\mathsf{enc}(w)}$ on the full register and
the self-adjoint generator $H:=-A/N-P_w$.

The input also supplies:

- a state-preparation circuit $A_s$ whose label-register output from the
  specified zero input is the pure state
  $e_s:=N^{-1/2}\sum_{x\in[N]}e_{\mathsf{enc}(x)}$; if its implementation uses
  workspace, the model states its initialization, final state, and separate
  query, gate, and description-bit costs;
- the total Boolean function $f_w:\{0,1\}^m\to\{0,1\}$ defined by
  $f_w(\mathsf{enc}(x))=1$ exactly when $x=w$ and $f_w(z)=0$ on every unused label,
  together with the full unitary XOR-oracle access and its cost from
  [[def-qc-coherent-function-oracle]]; and
- a Hamiltonian-access contract that supplies either the ideal $U_H(t)$ or a
  unitary simulator $V_{H,t,\rho}$ with a supplied certificate
  $\|V_{H,t,\rho}-U_H(t)\|_{\rm op}\le\rho$, including all query, gate,
  description-bit, precision, and classical-construction costs.

The function oracle does not itself supply the continuous-time operation
$U_H(t)$: any conversion from its marked predicate to evolution under $P_w$,
and any simulation of the adjacency term, must be separately declared and
charged under [[def-qa-19-hamiltonian-access-cost-model]].

**Procedure:** Prepare $e_s$, apply the supplied ideal evolution or simulator
for $t=\pi\sqrt N/2$, and measure the register in its computational basis
using [[def-qc-projective-measurement]]. Decode a measured string in the image
of $\mathsf{enc}$ to its label and return it; return `FAIL` on an unused string. If
$N=2^n$ and $\mathsf{enc}$ is the standard $n$-bit encoding, the supplied preparation
may be $A_s=H^{\otimes n}$ by
[[lem-qa-19-hadamard-uniform-state-preparation]]; charge $n$ gates when $H$
is primitive and the declared synthesis costs otherwise. For arbitrary $N$,
$A_s$ is a supplied, charged input. No query, gate, or runtime bound follows from
the finite matrix description alone.
