---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/alg-qa-simon-one-sample.json
  precheck: n/a
id: alg-qa-simon-one-sample
kind: algorithm
title: "One Simon Fourier-sampling sample"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - def-qa-simon-promise
  - def-qa-standard-bit-query
  - lem-qa-hadamard-f2-kernel
  - def-qc-projective-measurement
  - def-qc-povm-and-outcome-law
  - def-qc-instrument-and-conditional-state
  - thm-qc-luders-instrument-of-a-povm-is-valid
  - thm-qc-instrument-outcome-law-normalizes
  - thm-qc-instrument-conditional-state-is-density
justified_by: []
axiom_use: "No Choice is used; the circuit and all registers are finite and explicitly ordered."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6, 2026)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 3 §§3.1-3.3, PDF pp.35-39: Simon promise, one-sample derivation, uniform s-perp law, rank growth, expected queries and classical lower-bound proof."
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms (updated November 2020)"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
      locator: "§6.1, PDF pp.11-13 and §6.5, PDF pp.27-33: independent Simon sample derivation and finite-abelian HSP context."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 6, PDF pp.33-37: Simon as a finite-abelian hidden-subgroup instance and Fourier sampling context."
---
## Definition

**Input:** Integers $n\ge1$, $m\ge n-1$, and ordinary access through the [[def-qa-standard-bit-query]] to a total function satisfying [[def-qa-simon-promise]]. Prepare an ordered $n$-qubit address register and $m$-qubit target register, both in their zero computational-basis states.

**Instructions:**

1. Apply the exact one-qubit Hadamard gate to every address wire, producing $H^{\otimes n}|0^n\rangle$, and leave the target at $|0^m\rangle$.
2. Apply the standard bit-flip oracle $U_f|x\rangle|z\rangle=|x\rangle|z\oplus f(x)\rangle$ once. Measure the target with the computational-basis projective measurement [[def-qc-projective-measurement]], viewed as the finite POVM [[def-qc-povm-and-outcome-law]]. Use the Lüders branch maps $\mathcal I_v(X)=P_vXP_v$, where $P_v=I_{\rm address}\otimes|v\rangle\langle v|$, under the instrument and conditional-state interface [[def-qc-instrument-and-conditional-state]]. Theorem [[thm-qc-luders-instrument-of-a-povm-is-valid]] supplies a valid instrument; its outcome weights and positive-branch states are covered by [[thm-qc-instrument-outcome-law-normalizes]] and [[thm-qc-instrument-conditional-state-is-density]]. Discard the reported value and target register. The POVM effects are these same $P_v$.
3. Apply $H^{\otimes n}$ to the address register and measure it in the computational basis. Return the observed $n$-bit string $y$ as one sample row.

Every branch uses exactly one oracle query and $2n$ Hadamard gates. It makes one finite instrument measurement on the target and one terminal projective measurement on the address. The intermediate target outcome is not used by classical postprocessing. There is no failure branch, controlled-oracle call, or inverse-oracle call. This procedure's sample law is proved separately in [[thm-qa-simon-hadamard-sampling-law]].


## Remarks

The following register-level circuit reads from left to right. Each line represents an entire ordered register, of width $n$ or $m$, rather than one qubit. The box $M_Z$ denotes computational-basis measurement; the target measurement uses exactly the Lüders instrument specified above. Its outcome $v$ and the target register are discarded, with no feed-forward to the address. If $m=0$, the target is the one-dimensional empty register and its measurement has the sole empty-word outcome.

```tikz
\begin{tikzpicture}[x=0.85cm,y=1cm]
\node[anchor=east] at (0,0) {$|0^n\rangle$};
\node[anchor=east] at (0,-1.5) {$|0^m\rangle$};
\draw (0,0) -- (1,0);
\draw (0,-1.5) -- (3,-1.5);
\draw (1,-0.35) rectangle (2,0.35);
\node at (1.5,0) {$H^{\otimes n}$};
\draw (2,0) -- (3,0);
\draw (3,-1.85) rectangle (4,0.35);
\node at (3.5,-0.75) {$U_f$};
\draw (4,0) -- (7,0);
\draw (4,-1.5) -- (5,-1.5);
\draw (5,-1.85) rectangle (6,-1.15);
\node at (5.5,-1.5) {$M_Z$};
\draw[->] (6,-1.5) -- (7,-1.5);
\node[anchor=west] at (7,-1.5) {$v$: discard};
\draw (7,-0.35) rectangle (8,0.35);
\node at (7.5,0) {$H^{\otimes n}$};
\draw (8,0) -- (9,0);
\draw (9,-0.35) rectangle (10,0.35);
\node at (9.5,0) {$M_Z$};
\draw[->] (10,0) -- (11,0);
\node[anchor=west] at (11,0) {$y$};
\end{tikzpicture}
```

The single $U_f$ box acts jointly on the two registers by $|x\rangle|z\rangle\mapsto|x\rangle|z\oplus f(x)\rangle$. The two address boxes each stand for $n$ Hadamard gates, so the picture has one query and $2n$ Hadamard gates. This illustration adds no sampling-law assertion; the separate sampling-law proof remains independent of the picture.
