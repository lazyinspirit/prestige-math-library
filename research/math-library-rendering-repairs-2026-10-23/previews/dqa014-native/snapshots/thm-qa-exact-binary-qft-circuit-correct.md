---
id: thm-qa-exact-binary-qft-circuit-correct
kind: theorem
title: Exact binary QFT circuit correctness
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps: [alg-qa-exact-binary-qft-circuit, lem-qa-binary-qft-product-factorization, def-qa-cyclic-quantum-fourier-transform, def-qa-qft-gate-cost-model, def-qc-dirac-notation-conversion, def-qc-tensor-register-and-permutation, def-qc-inverse-unitary-access, def-qc-circuit-denotational-semantics, lem-qc-local-gate-wire-embedding]
axiom_use: "No choice axiom is used; the proof checks a specified finite basis and extends linearly."
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6)"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---

## Statement

For every $n\ge0$, the exact binary circuit of [[alg-qa-exact-binary-qft-circuit]] implements [[def-qa-cyclic-quantum-fourier-transform]] at $N=2^n$: it maps each computational basis vector $|x\rangle$, $0\le x<2^n$, to

$$2^{-n/2}\sum_{y=0}^{2^n-1}e^{2\pi ixy/2^n}|y\rangle,$$

with the declared output register order. Hence its denotation is $\operatorname{QFT}_{2^n}$ on every state. Reversing the gate list and replacing every gate by its adjoint gives the negative-sign inverse QFT with the same ideal gate count.

## Facts & Assumptions

**Given:** An integer $n\ge0$, an $n$-wire ordered computational register, and the exact circuit of [[alg-qa-exact-binary-qft-circuit]].

[F1] On a basis input $x=\sum_i x_i2^i$, the QFT output factors as $R_0\otimes\cdots\otimes R_{n-1}$ in the ordered output wires; before the final reversal it is $R_{n-1}\otimes\cdots\otimes R_0$ ([[lem-qa-binary-qft-product-factorization]]).

[F2] $H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ and $\mathrm{CP}_s=\operatorname{diag}(1,1,1,e^{2\pi i/2^s})$ in control-first basis order; the ideal model also counts $\mathrm{CP}_s^\dagger=\operatorname{diag}(1,1,1,e^{-2\pi i/2^s})$ as one gate ([[def-qa-qft-gate-cost-model]]).

[F3] Ordered tensor factors retain the displayed wire order, and the final wire permutation reverses the corresponding product-basis factors ([[def-qc-tensor-register-and-permutation]]).

[F4] A ket denotes its vector and standard coordinate kets are the corresponding coordinate vectors ([[def-qc-dirac-notation-conversion]]).

[F5] Inverse access to a chronological unitary list reverses the order and replaces each gate by its adjoint ([[def-qc-inverse-unitary-access]]).

[F6] A unitary on a specified ordered tuple of wires has a unique unitary global embedding that acts as that unitary on those wires and as the identity on the others ([[lem-qc-local-gate-wire-embedding]]).

[L1] The positive-sign QFT is the inverse of the negative-sign unitary DFT, so its inverse uses the negative-sign convention ([[def-qa-cyclic-quantum-fourier-transform]]).

[A1] [[def-qc-circuit-denotational-semantics]] identifies the chronological gate list with the right-to-left product of its embedded gate operators.

## Proof

**Proof technique:** direct.

**Given:** The basis input and circuit above.

1.1 If $n=0$, the exact algorithm has no gates, so [A1] gives the identity on the one-dimensional register; by [F1], $\operatorname{QFT}_1$ is also the identity. Thus the claimed basis action holds in this case. Now suppose $n\ge1$ and fix a basis input $|x_{n-1}\cdots x_0\rangle$. In the descending loop, before the step targeting $q_j$, every lower wire $q_i$ with $i<j$ is still in its original basis state $|x_i\rangle$: earlier gates targeted only higher wires, and the lower wires occur only as controls, which the diagonal controlled-phase matrix in [F2] leaves unchanged. The local embedding action [F6] therefore leaves those control bits unchanged. The Hadamard on $q_j$ contributes relative phase $(-1)^{x_j}=e^{2\pi i x_j/2}$, while the controlled phases from lower controls contribute $e^{2\pi i\sum_{i<j}x_i2^{-(j-i+1)}}$. Thus target $q_j$ has state $R_j$. The state before the final swaps is $R_{n-1}\otimes\cdots\otimes R_0$. The tensor order and coordinate-ket convention are [F3] and [F4]; interpreting this finite gate trace as the circuit's operator product requires [A1]. [given, F1, F2, F3, F4, F6, A1, algebra]

2.1 For $n\ge1$, the final swaps reverse those ordered factors by [F3], producing $R_0\otimes\cdots\otimes R_{n-1}$; [F1] identifies this with the positive-sign Fourier output on $|x\rangle$. Together with the $n=0$ case established in step 1.1, the circuit agrees with $\operatorname{QFT}_{2^n}$ on every basis vector. [given, F1, F3, A1, step 1.1, algebra]

3.1 Both the circuit denotation and $\operatorname{QFT}_{2^n}$ are linear operators by [A1], so equality on the standard basis [F4] implies equality on every finite linear combination of basis vectors. Reversing the gate sequence and taking adjoints is its inverse by [F5]; the reverse list has the same number of gates, and each adjoint is still a Hadamard, controlled phase of opposite angle, or SWAP. The adjoint controlled phases have unit ideal cost by [F2], so the inverse QFT has the same ideal gate count and uses the negative-sign convention by [L1]. [given, F2, F4, F5, L1, A1, step 2.1] ∎

## Remarks

For $n=3$, the following circuit reads from left to right on the fixed wire order $q_2,q_1,q_0$ (top to bottom). A filled control joined to $P_s=\mathrm{diag}(1,e^{2\pi i/2^s})$ denotes $\mathrm{CP}_s$, with the box on the target wire. The paired crosses denote the final SWAP of $q_0$ and $q_2$.

```tikz
\begin{tikzpicture}[x=1.15cm,y=1.2cm,scale=1.5,transform shape,line width=0.7pt]
\node[left] at (-0.55,2) {$|x_2\rangle$};
\node[left] at (-0.55,1) {$|x_1\rangle$};
\node[left] at (-0.55,0) {$|x_0\rangle$};
\node[right] at (8.9,2) {$R_0$};
\node[right] at (8.9,1) {$R_1$};
\node[right] at (8.9,0) {$R_2$};
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

Here $R_j=2^{-1/2}(|0\rangle+e^{2\pi i\phi_j}|1\rangle)$, with $\phi_0=x_0/2$, $\phi_1=x_1/2+x_0/4$, and $\phi_2=x_2/2+x_1/4+x_0/8$. The first block applies $\mathrm{CP}_3$ from $q_0$ before $\mathrm{CP}_2$ from $q_1$, following the algorithm's ascending control loop. Immediately before the SWAP, the factors are $R_2\otimes R_1\otimes R_0$; the displayed outputs are $R_0\otimes R_1\otimes R_2$ on the same ordered wires. For $x=4x_2+2x_1+x_0$, this is $2^{-3/2}\sum_{y=0}^{7}e^{2\pi ixy/8}|y\rangle$, with the positive sign and output order in the Statement. The figure illustrates steps 1.1–2.1; the rigorous proof is independent of it.
