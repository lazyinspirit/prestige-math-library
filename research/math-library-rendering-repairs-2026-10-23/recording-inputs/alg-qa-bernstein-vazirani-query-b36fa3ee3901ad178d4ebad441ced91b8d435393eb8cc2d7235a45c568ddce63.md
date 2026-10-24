---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/alg-qa-bernstein-vazirani-query.json
  precheck: n/a
id: alg-qa-bernstein-vazirani-query
kind: algorithm
title: One-query Bernstein–Vazirani algorithm
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - def-qa-bernstein-vazirani-promise
  - def-qa-finite-branch-output-law
  - def-qa-nonoracle-gate-cost
  - def-qa-quantum-query-algorithm
  - def-qa-standard-bit-query
  - def-qc-coherent-function-oracle
  - def-qc-dirac-notation-conversion
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-ordered-bitstring-encoding
  - def-qc-register-and-computational-basis
  - def-qc-tensor-map
  - def-qc-tensor-register-and-permutation
  - lem-qa-hadamard-f2-kernel
  - thm-qa-bit-query-to-phase-query
  - thm-qc-computational-basis-orthonormal
justified_by: []
axiom_use: None; all arguments use finite sums, finite sets, and explicit finite-dimensional registers.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6 (2026-08-27)"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 2 §2.4, PDF pp.29-33: complete DJ and BV promises, amplitudes, query bounds."
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms (updated November 2020)"
      url: https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf
      locator: "§6.1, PDF pp.7-11 (printed pp.1-5): independent direct Deutsch, DJ and BV derivations and classical comparisons."
---

## Definition

**Input.** An integer $n\ge1$ and an oracle $f_a(x)=a\cdot x$ satisfying the no-offset Bernstein–Vazirani promise of [[def-qa-bernstein-vazirani-promise]], on an ordered $n$-qubit address register $A$ and one target qubit $T$ initialized to $|0^n\rangle_A|0\rangle_T$.

**Output.** The measured $n$-bit address, interpreted as the secret $a$.

**Gate model.** The declared nonoracle gate alphabet permits exact callable $H$ and $X$ gates, each occurrence charged as one nonoracle gate under [[def-qa-nonoracle-gate-cost]]. The supplied standard bit query is charged separately as one oracle call.

**Procedure.** Apply $H^{\otimes n}$ to $A$. Apply $X$ and then $H$ to $T$. Invoke the standard XOR oracle $U_{f_a}$ once on $(A,T)$. Apply $H^{\otimes n}$ to $A$, measure $A$ in its ordered computational basis, and output the measured string. There are no intermediate measurements, loops, or failure branches.

The terminal measurement is specified by [[def-qa-finite-branch-output-law]] and is separate from the declared one-qubit gate resource. No circuit-uniformity or classical bit-time bound is asserted.

The standard XOR query and quantum-query algorithm conventions are those of [[def-qa-standard-bit-query]] and [[def-qa-quantum-query-algorithm]]. The phase action used by the procedure is verified by [[thm-qa-bit-query-to-phase-query]].

## Remarks

Read the circuit from left to right. The upper wire is a bundle of $n$ ordered address qubits; each $H^{\otimes n}$ box denotes one $H$ on each address qubit. The lower wire is the single target qubit. The single oracle box acts on the ordered pair $(A,T)$ by $|x\rangle|y\rangle\mapsto|x\rangle|y\oplus f_a(x)\rangle$. Only the address is measured, in its computational basis; the target remains unmeasured.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
\draw (0,1.6) -- (1.1,1.6);
\draw (1.9,1.6) -- (4.0,1.6);
\draw (5.1,1.6) -- (5.7,1.6);
\draw (6.5,1.6) -- (7.0,1.6);
\draw[->] (8.0,1.66) -- (8.8,1.66);
\draw (8.0,1.54) -- (8.8,1.54);
\draw (0,0) -- (0.6,0);
\draw (1.2,0) -- (1.6,0);
\draw (2.2,0) -- (4.0,0);
\draw (5.1,0) -- (8.0,0);
\draw (0.35,1.46) -- (0.55,1.74);
\node[above] at (0.45,1.82) {$n$};
\node[left] at (0,1.6) {$A:\ |0^n\rangle$};
\node[left] at (0,0) {$T:\ |0\rangle$};
\draw (1.1,1.25) rectangle (1.9,1.95);
\node at (1.5,1.6) {$H^{\otimes n}$};
\draw (0.6,-0.3) rectangle (1.2,0.3);
\node at (0.9,0) {$X$};
\draw (1.6,-0.3) rectangle (2.2,0.3);
\node at (1.9,0) {$H$};
\node[below] at (3.0,-0.12) {$|-\rangle$};
\draw (4.0,-0.4) rectangle (5.1,2.0);
\node at (4.55,0.8) {$U_{f_a}$};
\node[above] at (4.55,2.12) {$1\ \mathrm{query}$};
\draw (5.7,1.25) rectangle (6.5,1.95);
\node at (6.1,1.6) {$H^{\otimes n}$};
\draw (7.0,1.25) rectangle (8.0,1.95);
\node at (7.5,1.6) {$M_Z$};
\node[right] at (8.8,1.6) {$a$};
\node[right] at (8.0,0) {$|-\rangle$};
\end{tikzpicture}
```

Here $|-\rangle=(|0\rangle-|1\rangle)/\sqrt2=HX|0\rangle$, and $M_Z$ denotes the terminal computational-basis measurement of all $n$ address qubits. The double output line carries the measured classical string. The figure illustrates the stated procedure; its phase action is supplied by the linked phase-query result, independently of the picture.
