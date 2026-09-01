---
id: def-polynomial-time-many-one-reduction
kind: definition
title: "Polynomial-time many-one reductions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-p
  - def-worst-case-time-and-space-complexity
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

Let $A\subseteq\Sigma^*$ and $B\subseteq\Gamma^*$ be languages over finite
alphabets. A **polynomial-time many-one reduction** from $A$ to $B$ is a total
function
$$ f:\Sigma^*\to\Gamma^* $$
such that:

- $f$ is computable by a deterministic Turing machine in polynomial time, and
- for every $x\in\Sigma^*$,
  $$ x\in A\iff f(x)\in B. $$

When such an $f$ exists, write
$$ A\le_p B. $$

## Remarks

- "Many-one" means that the source instance is transformed once into a single
  target instance.

- This is not the same notion as an oracle or Turing reduction, where later
  queries may depend on earlier answers.
