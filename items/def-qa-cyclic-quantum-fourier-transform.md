---
id: def-qa-cyclic-quantum-fourier-transform
kind: definition
title: Positive-sign cyclic quantum Fourier transform
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps: [def-unitary-discrete-fourier-transform-on-z-mod-n, thm-finite-fourier-inversion, def-qc-dirac-notation-conversion]
axiom_use: "No choice axiom is used; the definition depends only on the finite DFT and inversion formulas."
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
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

## Definition

For an integer $N\ge1$, let $\mathcal F_N$ be the negative-sign, $N^{-1/2}$-normalized transform of [[def-unitary-discrete-fourier-transform-on-z-mod-n]]. Define the **cyclic quantum Fourier transform** by $\operatorname{QFT}_N:=\mathcal F_N^{-1}$. The inverse exists by [[thm-finite-fourier-inversion]], and its matrix on the standard basis indexed by $0,\ldots,N-1$ is

$$\operatorname{QFT}_N|x\rangle=N^{-1/2}\sum_{y=0}^{N-1}e^{2\pi ixy/N}|y\rangle,\qquad 0\le x<N.$$

Here the standard-basis ket convention is the one specified by [[def-qc-dirac-notation-conversion]]. Thus the transform has the positive sign and the same $N^{-1/2}$ normalization as the inverse Fourier formula. At $N=1$ it is the identity on the one-dimensional register. In the binary specialization $N=2^n$, the circuit page writes each index in its unique base-two expansion.
