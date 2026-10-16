---
id: def-qa-normalized-finite-abelian-fourier-transform
kind: definition
title: Normalized Fourier transform on a finite abelian group
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qa-finite-abelian-character-dual, thm-qa-finite-abelian-dual-has-same-cardinality, def-function-space, def-finite-sum-in-a-commutative-monoid, def-rational-power, lem-rational-power-well-defined, def-order-in-a-group, def-canonical-natural, lem-of-naturals-positive]
dependency_level: 3
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Definition

Let $G$ be a finite abelian group and $\widehat G$ its character dual ([[def-qa-finite-abelian-character-dual]]), which is finite with $|\widehat G|=|G|$ ([[thm-qa-finite-abelian-dual-has-same-cardinality]]). Put $N:=|G|$ and $N_{\mathbb R}:=\iota_{\mathbb R}(N)$ its canonical real image ([[def-order-in-a-group]], [[def-canonical-natural]]). Since $G$ contains its identity, $N\ge1$, and hence $N_{\mathbb R}>0$ ([[lem-of-naturals-positive]]). Its rational power $N_{\mathbb R}^{-1/2}$ is therefore well defined ([[def-rational-power]], [[lem-rational-power-well-defined]]).

For $f\in\mathbb C^G$, define $F_Gf\in\mathbb C^{\widehat G}$ by
$$ (F_Gf)(\chi):=N_{\mathbb R}^{-1/2}\sum_{x\in G}f(x)\overline{\chi(x)},\qquad \chi\in\widehat G. $$
Here $\mathbb C^X$ is the space of all functions $X\to\mathbb C$ ([[def-function-space]]) and the sum is the finite sum in $\mathbb C$ ([[def-finite-sum-in-a-commutative-monoid]]). This fixes the negative-character sign and uses the same factor $N_{\mathbb R}^{-1/2}$ in both directions. Unitarity is proved separately; it is not part of this definition.
