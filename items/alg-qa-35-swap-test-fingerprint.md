---
id: alg-qa-35-swap-test-fingerprint
kind: algorithm
title: "Simultaneous-message equality by quantum fingerprints"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps: ["def-qa-35-code-fingerprint-state", "def-qa-35-equality-promise", "def-qa-35-swap-test-effect", "thm-qa-35-swap-test-measurement-effect", "def-qc-toffoli-and-fredkin", "def-qc-register-and-computational-basis", "def-qa-35-finite-communication-protocol", "def-qc-circuit-cost-model", "thm-qa-35-code-fingerprint-state-properties"]
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all distributions, sums, bases, and selection sets are finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
sources:
  references:
    - title: "Harry Buhrman, Richard Cleve, John Watrous, Ronald de Wolf, Quantum Fingerprinting"
      url: https://arxiv.org/pdf/quant-ph/0102001
      locator: "Complete 8-page paper, especially §2, PDF pp.2–4, code fingerprints and swap-test analysis."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 16 §§16.1 and 16.6, PDF pp.147–153; private/public-coin SMP and equality lower-bound context (§16.1), quantum fingerprint construction and SWAP-test analysis (§16.6)."
---

## Definition

**Inputs:** Integers $n\ge1$, $N\ge1$, and $r\ge1$; a fixed binary code map $E:\{0,1\}^n\to\{0,1\}^N$ known to both senders and the referee; and inputs $x,y\in\{0,1\}^n$. The parties use no shared randomness or shared entanglement. State preparation and local computation are permitted and are not included in the communicated-qubit count.

**Output:** A bit $b\in\{0,1\}$, where $b=1$ means the referee declares $x=y$ and $b=0$ means the referee declares $x\ne y$.

Set $m=\lceil\log_2N\rceil$ and $L=m+1$. Alice prepares $r$ copies of the fingerprint state $|h_x\rangle$ and sends the $r$ registers, each with $L$ qubits, to the referee. Bob prepares and sends $r$ copies of $|h_y\rangle$ in the same way. The referee groups the received registers as pairs $(A_j,B_j)$ in increasing order $j=1,\ldots,r$. For each pair, the referee appends a fresh control qubit $|0\rangle$, applies the Hadamard gate $H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$, then applies one Fredkin gate to each of the $L$ corresponding pairs of message wires, using this fresh control qubit as the gate's control. The referee applies $H$ again and measures the control in the computational basis. If any test returns $1$, stop the loop and output $b=0$. If all $r$ tests return $0$, output $b=1$. Thus each sender transmits exactly $rL$ qubits, and the referee uses at most $rL$ Fredkin gates and $2r$ Hadamard gates.
