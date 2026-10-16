---
id: def-qa-32-promise-bpp
kind: definition
title: PromiseBPP
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: quantum-complexity-classes-and-oracle-separations
dependency_level: 0
deps:
  - def-promise-problem
  - def-probabilistic-polynomial-time-machine-interface
  - def-rp-corp-zpp-bpp-and-pp-classes
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
    - title: "John Watrous, Quantum Computational Complexity, Section IV.1"
      url: "https://arxiv.org/pdf/0804.3401"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 13, Section 13.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition

Let $\Pi=(Y,N)$ be a promise problem, so $Y,N\subseteq\{0,1\}^*$ are disjoint ([[def-promise-problem]]). We say $\Pi$ belongs to $\mathrm{PromiseBPP}$ if there are one fixed probabilistic Turing machine $M$ and one positive integer polynomial $p$ such that every random branch halts within $p(|x|)$ transitions and

$$ \Pr[M(x)\text{ accepts}]\ge \frac23\quad(x\in Y),\qquad \Pr[M(x)\text{ accepts}]\le \frac13\quad(x\in N). $$

The probability is over the uniform finite tape $\{0,1\}^{p(|x|)}$ of independent fair bits; after the machine halts, unused suffix bits are ignored, as in [[def-probabilistic-polynomial-time-machine-interface]]. The pair has no correctness requirement outside $Y\cup N$. For total promise pairs this is the ordinary BPP acceptance convention of [[def-rp-corp-zpp-bpp-and-pp-classes]].
