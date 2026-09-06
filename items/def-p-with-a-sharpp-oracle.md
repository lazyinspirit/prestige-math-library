---
id: def-p-with-a-sharpp-oracle
kind: definition
title: "Polynomial time with a Sharp-P oracle"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-p, def-sharpp-and-gap-p-functions, thm-number-sat-is-sharpp-complete]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Definition

$\mathrm{P}^{\#\mathrm P}$ is deterministic polynomial time with oracle
access to the fixed $\#\mathrm P$-complete function $\mathrm{NumberSAT}$ of
[[thm-number-sat-is-sharpp-complete]]. The machine may make polynomially many
adaptive queries of polynomial length, each answered by the binary expansion
of the integer value rather than by a membership bit. Equivalently, one may
use any fixed $\#\mathrm P$ function complete under polynomial-time
parsimonious reductions; completeness makes the resulting class independent
of that choice.
