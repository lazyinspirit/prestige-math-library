---
id: def-qa-33-qma-promise-class
kind: definition
title: QMA promise class with a verifier effect on witnesses
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - def-promise-problem
  - def-qa-33-witness-verifier-interface
  - lem-qa-33-witness-acceptance-effect
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John Watrous, Quantum Computational Complexity"
      url: https://arxiv.org/pdf/0804.3401
      locator: §V.1, QMA verifier definition, PDF pp. 18–19
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: Chapter 14, §14.1, PDF pp. 115–116
---

## Definition

Let $\Pi=(Y,N)$ be a promise problem, $0\le s(n)<c(n)\le1$ efficiently encoded rational thresholds, and $w(n),a(n)$ polynomially bounded witness and zero-initialized workspace lengths. Require $c(n)-s(n)\ge1/p(n)$ for some polynomially bounded positive $p$. Then $\Pi\in\mathrm{QMA}(c,s)$ if there is a full-list uniform verifier interface as in [[def-qa-33-witness-verifier-interface]] such that every $x\in Y$ has a witness density operator $\rho$ with $\operatorname{Tr}(E_x\rho)\ge c(|x|)$, and every $x\in N$ and every witness density operator satisfy $\operatorname{Tr}(E_x\rho)\le s(|x|)$. Behavior outside $Y\cup N$ is unrestricted. The standard bounded-error class uses $c=2/3$ and $s=1/3$. The effect and probability are well-defined by [[lem-qa-33-witness-acceptance-effect]].
