---
id: cex-qa-26-hhl-classical-vector-output
kind: counterexample
title: "State preparation does not print all coordinates"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps:
  - def-qa-26-qlsp-task
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the family and output-counting argument are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Aram W. Harrow, Avinatan Hassidim, and Seth Lloyd, Quantum algorithm for linear systems of equations"
      url: https://arxiv.org/pdf/0811.3171
      locator: "Appendix A, especially §§A1–A3, PDF pp. 5–11; Hermitian embedding §A4, PDF pp. 11–12."
    - title: "Andrew M. Childs, Robin Kothari, and Rolando D. Somma, Quantum algorithm for systems of linear equations with exponentially improved dependence on precision"
      url: https://arxiv.org/pdf/1511.02306
      locator: "QLSP oracle model and Theorem 2, PDF pp. 2–5; used to compare, not to replace a local sparse-simulation proof."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Complete 191-page notes; phase estimation §4.3, printed p. 19; amplitude amplification §19.3; Hamiltonian simulation chapters 27 and 29."
---

## Statement refuted

A polylogarithmic-time QLSP state-output procedure necessarily returns a full classical description of its $N$-coordinate solution vector in polylogarithmic time.

## Facts & Assumptions

**Given:** The state-output task in [[def-qa-26-qlsp-task]] and the family below.

[F1] [[def-qa-26-qlsp-task]]: the requested output is a quantum state; no classical coordinate list is promised.

## Counterexample

For any integer $N\ge2$ and bit string $x\in\{0,1\}^N$, set $a=1+x_1$, $c_j=1+3x_j$ for $2\le j\le N$, and
$$b_x=\frac{a e_1+\sum_{j=2}^N c_j e_j}{\sqrt{a^2+\sum_{j=2}^N c_j^2}}.$$
Take $A=I_N$. Then $A^+b_x=b_x$, and the first coordinate of every normalized solution is positive. The coordinate ratios $(b_x)_j/(b_x)_1=c_j/a$ lie in $\{1,4,1/2,2\}$ and determine all $N$ bits even when outputs are identified up to global phase.

1.1 For each $x$, the ratios $(b_x)_j/(b_x)_1=c_j/a$ are $1$ or $4$ when $a=1$, and $1/2$ or $2$ when $a=2$. Since $N\ge2$, at least one ratio determines $a$; each ratio then determines its corresponding $c_j$. Thus the $2^N$ inputs give $2^N$ distinct solution rays, with no ambiguity from a global phase. [given, F1, algebra]

2.1 Let $z$ be a classical coordinate output for one of these rays, phase-fixed so that its first coordinate is positive real. If $|z_j-(b_x)_j|<\delta:=1/(100\sqrt N)$ for every $j$, then $(b_x)_1\ge1/(4\sqrt N)$ because $a\ge1$ and $\|a e_1+\sum_{j\ge2}c_je_j\|\le4\sqrt N$. Hence $|z_1|\ge6/(25\sqrt N)$. For each $j\ge2$, $$\left|\frac{z_j}{z_1}-\frac{(b_x)_j}{(b_x)_1}\right|\le\frac{\delta}{|z_1|}\left(1+\frac{(b_x)_j}{(b_x)_1}\right)\le\frac5{24}<\frac14.$$ The four candidate ratios have pairwise separation at least $1/2$, so nearest-ratio decoding recovers $a$ and every $c_j$, hence all $N$ bits. Any unambiguous classical output code for all these rays therefore needs at least $2^N$ codewords and at least $N$ bits. This output-length requirement is independent of the ability to prepare or measure the corresponding quantum state. [given, step 1.1, algebra] ∎
