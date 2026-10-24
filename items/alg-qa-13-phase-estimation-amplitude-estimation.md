---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/alg-qa-13-phase-estimation-amplitude-estimation.json
  precheck: n/a
id: alg-qa-13-phase-estimation-amplitude-estimation
kind: algorithm
title: "QFT-based amplitude estimation"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - def-qa-13-amplitude-estimation-task
  - lem-qa-13-grover-eigenphase-relation
  - def-qa-eigenphase-estimation-model
  - alg-qa-quantum-phase-estimation
  - thm-qa-phase-estimation-access-cost
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - thm-qc-standalone-global-phase-invariance
  - thm-qc-controlled-global-phase-is-relative-phase
  - thm-qc-reflection-unitary-involution
  - def-qa-classical-bit-cost
  - lem-qa-13-real-cyclotomic-comparison
justified_by:
  - thm-qa-13-amplitude-estimation-guarantee
axiom_use: "No choice axiom is used; all constructions and measurement schedules are finite, and the analytic estimates use the stated real-analysis suppliers."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Brassard, Høyer, Mosca, and Tapp, Quantum Amplitude Amplification and Estimation, complete article, §§4–5, Theorems 11–18"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, complete lecture notes, §§19.1–19.3"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, complete 239-page notes, §7.3"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Definition

**Input.** An instance from [[def-qa-13-amplitude-estimation-task]], an integer $m\ge2$, $M=2^m$, and either the declared controlled-power access mode or repeated controlled-$Q$ access.

**Instructions.** Prepare $\psi=A|0\rangle$, run the $M$-label QPE circuit on $Q$ using controlled powers $Q^{2^j}$, $j=0,\ldots,m-1$, and measure its phase register to obtain $y\in\{0,\ldots,M-1\}$. Output the exact cyclotomic value
$$\widetilde a=\sin^2(\pi y/M)=\frac{2-\zeta_M^y-\zeta_M^{-y}}4,\qquad \zeta_M=e^{2\pi i/M},$$
with the real embedding specified by this root. A decimal approximation is postprocessing and is charged separately. The leading minus in $Q$ is retained: on a controlled call it is the control phase $C(-I)$, not a discarded standalone global phase.

## Remarks

The two-register schematic below separates the quantum circuit from classical output processing. The upper wire is the entire $m$-qubit phase register, and each dot denotes control by its indicated bit: $q_{m-1}$ for $Q$ and $q_0$ for $Q^{2^{m-1}}$. The omitted intermediate controlled powers use $q_{m-1-j}$ for $Q^{2^j}$, as in [[alg-qa-quantum-phase-estimation]]. Here $F_M^{-1}$ is the inverse positive-sign QFT, and the measurement is in the computational basis.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
\draw (0,1.7) -- (10.7,1.7);
\draw (0,0) -- (10.7,0);
\node[left] at (0,1.7) {$|0^m\rangle$};
\node[left] at (0,0) {$|0\rangle$};
\draw[fill=white] (0.55,1.3) rectangle (1.85,2.1);
\node at (1.2,1.7) {$H_{\rm Had}^{\otimes m}$};
\draw[fill=white] (0.8,-0.4) rectangle (1.6,0.4);
\node at (1.2,0) {$A$};
\node[below] at (2.3,0) {$\psi$};
\draw (3.3,1.7) -- (3.3,0.4);
\fill (3.3,1.7) circle (0.055);
\node[above] at (3.3,1.85) {$q_{m-1}$};
\draw[fill=white] (2.9,-0.4) rectangle (3.7,0.4);
\node at (3.3,0) {$Q$};
\node at (4.7,0.8) {$\cdots$};
\draw (6.1,1.7) -- (6.1,0.4);
\fill (6.1,1.7) circle (0.055);
\node[above] at (6.1,1.85) {$q_0$};
\draw[fill=white] (5.35,-0.4) rectangle (6.85,0.4);
\node at (6.1,0) {$Q^{2^{m-1}}$};
\draw[fill=white] (7.4,1.3) rectangle (8.6,2.1);
\node at (8,1.7) {$F_M^{-1}$};
\draw[fill=white] (9.1,1.3) rectangle (10.1,2.1);
\node at (9.6,1.7) {$\mathrm{meas.}$};
\node[right] at (10.7,1.7) {$y$};
\end{tikzpicture}
```

The controlled-power portion acts on $(\mathbb C^2)^{\otimes m}\otimes H$ as $|x\rangle\otimes v\mapsto|x\rangle\otimes Q^xv$, since $x=\sum_{j=0}^{m-1}b_{m-1-j}2^j$. Every gate uses the full $Q=-AS_0A^*S_{\rm good}$, including its leading minus and the associated control phase. After measuring $y$, classical postprocessing outputs $\widetilde a=\sin^2(\pi y/M)=(2-\zeta_M^y-\zeta_M^{-y})/4$; decimal approximation remains a separately charged classical operation. The schematic supplies no accuracy claim and does not replace the algorithm's independent correctness argument.
