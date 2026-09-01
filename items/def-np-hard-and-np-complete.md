---
id: def-np-hard-and-np-complete
kind: definition
title: "NP-hard and NP-complete languages"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-np-by-verifiers
  - def-polynomial-time-many-one-reduction
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Stephen A. Cook, The Complexity of Theorem-Proving Procedures"
      url: "https://www.cs.toronto.edu/~sacook/homepage/1971.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

Let $C\subseteq\{0,1\}^*$ be a language.

- $C$ is **NP-hard** when for every language $L\in NP$ one has $L\le_p C$.
- $C$ is **NP-complete** when $C$ is NP-hard and $C\in NP$.

## Remarks

- NP-hardness is a lower-bound comparison class, not a membership class.

- NP-completeness depends on the chosen reduction notion; on this page that
  notion is many-one polynomial-time reducibility.
