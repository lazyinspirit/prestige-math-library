---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/alg-qa-deutsch-query.json
  precheck: n/a
id: alg-qa-deutsch-query
kind: algorithm
title: One-query Deutsch algorithm
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - def-qa-deutsch-promise
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

**Input.** A one-bit total Boolean oracle $f$ satisfying the Deutsch promise of [[def-qa-deutsch-promise]], with an address qubit $A$ and target qubit $T$ initialized to $|0\rangle_A|0\rangle_T$.

**Output.** One classical bit: output $0$ for constant and $1$ for balanced.

**Gate model.** The declared nonoracle gate alphabet permits exact callable $H$ and $X$ gates, each occurrence charged as one nonoracle gate under [[def-qa-nonoracle-gate-cost]]. The supplied standard bit query is charged separately as one oracle call.

**Procedure.** Apply $X$ to $T$, then apply $H$ to $T$ and $H$ to $A$. Invoke the standard XOR oracle $U_f$ once on the ordered pair $(A,T)$. Apply $H$ to $A$, measure $A$ in its ordered computational basis, and output the measured bit. There are no intermediate measurements, loops, or failure branches.

The terminal measurement is specified by [[def-qa-finite-branch-output-law]] and is separate from the declared one-qubit gate resource. No circuit-uniformity or classical bit-time bound is asserted.

The standard bit query and its controlled-access conventions are those of [[def-qa-standard-bit-query]] and [[def-qa-quantum-query-algorithm]]. The one-query phase action used by this procedure is verified by [[thm-qa-bit-query-to-phase-query]].


## Remarks

The circuit below reads from left to right, with address $A$ above target $T$; the two-wire box is one invocation of $U_f$ on the ordered pair $(A,T)$. The box $M_Z$ is the terminal computational-basis measurement of $A$, whose classical output is $b$. The target is not measured.

```tikz
\begin{tikzpicture}[x=1.35cm,y=1.2cm]
\node[left] at (0,1) {$A:\ |0\rangle$};
\node[left] at (0,0) {$T:\ |0\rangle$};
\draw (0,1) -- (1.7,1);
\draw (0,0) -- (0.5,0);
\draw (1.1,0) -- (1.7,0);
\draw (0.5,-0.3) rectangle (1.1,0.3);
\node at (0.8,0) {$X$};
\draw (1.7,0.7) rectangle (2.3,1.3);
\node at (2,1) {$H$};
\draw (1.7,-0.3) rectangle (2.3,0.3);
\node at (2,0) {$H$};
\draw (2.3,1) -- (3,1);
\draw (2.3,0) -- (3,0);
\draw (3,-0.4) rectangle (4.1,1.4);
\node at (3.55,0.5) {$U_f$};
\draw (4.1,1) -- (4.8,1);
\draw (4.8,0.7) rectangle (5.4,1.3);
\node at (5.1,1) {$H$};
\draw (5.4,1) -- (6,1);
\draw (6,0.7) rectangle (6.8,1.3);
\node at (6.4,1) {$M_Z$};
\draw[->] (6.8,1) -- (7.5,1);
\node[right] at (7.5,1) {$b$};
\draw (4.1,0) -- (7.5,0);
\node[right] at (7.5,0) {$|-\rangle$};
\end{tikzpicture}
```

The preparation gives $HX|0\rangle_T=|-\rangle_T$. By the phase action already cited above, the target remains $|-\rangle_T$ through the query and the final address gate. The circuit only illustrates the stated procedure; its justification is independent of the picture.
