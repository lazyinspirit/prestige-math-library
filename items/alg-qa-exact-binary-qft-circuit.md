---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/alg-qa-exact-binary-qft-circuit.json
  precheck: n/a
id: alg-qa-exact-binary-qft-circuit
kind: algorithm
title: Exact binary QFT circuit
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps: [def-qa-cyclic-quantum-fourier-transform, def-qa-qft-gate-cost-model, lem-qa-binary-qft-product-factorization, def-qc-ordered-bitstring-encoding, def-qc-tensor-register-and-permutation, def-qc-circuit-syntax-and-register-order, def-qc-circuit-denotational-semantics]
axiom_use: "No choice axiom is used; the chronological gate list is finite and explicit."
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6)"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---

## Definition

Input: an $n$-qubit register with ordered wires $q_{n-1},\ldots,q_0$, $n\ge0$. The input integer is encoded by $x=\sum_{j=0}^{n-1}x_j2^j$ in the computational basis, as specified by [[def-qc-ordered-bitstring-encoding]].

Output: the following finite gate list, defining a unitary by the circuit semantics of [[def-qc-circuit-denotational-semantics]] on the ordered-register syntax of [[def-qc-circuit-syntax-and-register-order]], and using no ancillas.

1. For $j=n-1,n-2,\ldots,0$, complete the following block before proceeding to the next $j$: apply $H$ to target $q_j$; then, for $i=0,1,\ldots,j-1$ in that order, apply $\mathrm{CP}_{j-i+1}$ to the pair $(q_i,q_j)$, with $q_i$ as control and $q_j$ as target. Here $\mathrm{CP}_s$ is the ideal controlled phase defined in [[def-qa-qft-gate-cost-model]].
2. After completing every block in the descending $j$ loop, for $j=0,1,\ldots,\lfloor n/2\rfloor-1$, swap $q_j$ with $q_{n-1-j}$.

The chronological order is exactly the order listed. If $n=0$, all loops are empty and the output is the empty circuit, i.e. the identity on the one-dimensional register.

## Remarks

For $n=3$, the circuit below reads from left to right, with wires ordered $q_2,q_1,q_0$ from top to bottom. A filled control joined to a box $P_s$ denotes $\mathrm{CP}_s$, where $P_s=\mathrm{diag}(1,e^{2\pi i/2^s})$ acts on the target. The two crosses joined at the right denote the final SWAP of $q_0$ and $q_2$; the middle wire is unchanged by that SWAP.

```tikz
\begin{tikzpicture}[x=1.15cm,y=1.2cm,scale=1.5,transform shape,line width=0.7pt]
\draw (0,2) -- (0.65,2);
\draw (1.15,2) -- (1.85,2);
\draw (2.35,2) -- (3.05,2);
\draw (3.55,2) -- (8.9,2);
\draw (0,1) -- (4.25,1);
\draw (4.75,1) -- (5.45,1);
\draw (5.95,1) -- (8.9,1);
\draw (0,0) -- (6.65,0);
\draw (7.15,0) -- (8.9,0);
\node[left] at (0,2) {$q_2$};
\node[left] at (0,1) {$q_1$};
\node[left] at (0,0) {$q_0$};
\draw (0.65,1.76) rectangle (1.15,2.24);
\node at (0.9,2) {$H$};
\draw (1.85,1.76) rectangle (2.35,2.24);
\node at (2.1,2) {$P_3$};
\draw (2.1,0) -- (2.1,1.76);
\fill (2.1,0) circle (2pt);
\draw (3.05,1.76) rectangle (3.55,2.24);
\node at (3.3,2) {$P_2$};
\draw (3.3,1) -- (3.3,1.76);
\fill (3.3,1) circle (2pt);
\draw (4.25,0.76) rectangle (4.75,1.24);
\node at (4.5,1) {$H$};
\draw (5.45,0.76) rectangle (5.95,1.24);
\node at (5.7,1) {$P_2$};
\draw (5.7,0) -- (5.7,0.76);
\fill (5.7,0) circle (2pt);
\draw (6.65,-0.24) rectangle (7.15,0.24);
\node at (6.9,0) {$H$};
\draw (8.1,0) -- (8.1,2);
\draw (7.98,1.88) -- (8.22,2.12);
\draw (7.98,2.12) -- (8.22,1.88);
\draw (7.98,-0.12) -- (8.22,0.12);
\draw (7.98,0.12) -- (8.22,-0.12);
\end{tikzpicture}
```

The first block therefore uses $\mathrm{CP}_3$ from $q_0$ before $\mathrm{CP}_2$ from $q_1$, exactly as in the ascending $i$ loop. Before the SWAP, a basis input has factors $R_2\otimes R_1\otimes R_0$ in the displayed wire order, with $R_j$ as defined in the binary product-factorization lemma; afterward the factors are $R_0\otimes R_1\otimes R_2$. The diagram illustrates the gate list only; the definition and the correctness proof do not depend on it. For $n=0$ the gate list remains empty.
