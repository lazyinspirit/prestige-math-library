---
id: def-qa-task-and-promise-domain
kind: definition
title: "QA task and promise domain"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps: [def-promise-problem]
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
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---

## Definition

A **decision task** is a root promise pair $(Y,N)$ of disjoint subsets of $\{0,1\}^*$, as in [[def-promise-problem]]: its promise domain is $Y\cup N$, and the required output is yes on $Y$ and no on $N$. No correctness condition is imposed outside that promise.

A **search task** is a pair $(D,R)$ where $D\subseteq\{0,1\}^*$ is the promise domain and $R\subseteq\{0,1\}^*\times\{0,1\}^*$ is a witness relation. On each $z\in D$, a correct solver must output a binary string $w$ with $(z,w)\in R$. It has no output obligation for $z\notin D$. Unlike a decision task, a search task need not divide its promise into yes and no sets.

For either task, an input encoding and input-length convention are specified separately; correctness is required only for encoded inputs in the declared promise.
