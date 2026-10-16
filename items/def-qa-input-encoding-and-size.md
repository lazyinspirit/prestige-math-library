---
id: def-qa-input-encoding-and-size
kind: definition
title: "Input encoding and size for algorithmic tasks"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps: [def-qa-task-and-promise-domain]
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

An input encoding is an injective map $\operatorname{enc}$ from the declared instance set into $\{0,1\}^*$. The input size of an instance $z$ is $n:=|\operatorname{enc}(z)|$. If task instances are already binary strings, the default encoding is the identity. The encoding is part of the task specification, and any length or padding convention must be stated.

For a task family, let $P_n$ denote the encoded instances of length $n$ that lie in its promise domain, with the decision sides or search relation inherited from [[def-qa-task-and-promise-domain]]. A statement indexed by input length $n$ concerns only $P_n$.
