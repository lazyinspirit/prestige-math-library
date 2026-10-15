---
id: lem-least-feasible-sample-size-exists
kind: lemma
title: "A nonempty set of positive integers has a least member"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-natural-numbers
  - thm-well-ordering-principle
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 7, §7.1, printed pp. 149–150"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Let $S\subseteq\mathbb N_{\ge1}$ be nonempty. Then there is a unique $n_*\in S$ such that $n_*\le n$ for every $n\in S$.

## Facts & Assumptions

**Given:** A nonempty set $S\subseteq\mathbb N_{\ge1}$.

[F1] The positive integers are a subset of $\mathbb N$. [[def-natural-numbers]]

[F2] Every nonempty subset of $\mathbb N$ has a least element. [[thm-well-ordering-principle]]

## Proof

1.1 By [F1], $S\subseteq\mathbb N$; by the Given, $S$ is nonempty. [given, F1]

2.1 Apply [F2] to obtain a least member $n_*\in S$. If $n'_*$ were another least member, then $n_*\le n'_*$ and $n'_*\le n_*$, hence $n_*=n'_*$ by antisymmetry. [step 1.1, F2, algebra] ∎