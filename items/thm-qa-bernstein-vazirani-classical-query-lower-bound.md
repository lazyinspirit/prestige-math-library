---
id: thm-qa-bernstein-vazirani-classical-query-lower-bound
kind: theorem
title: Classical Bernstein–Vazirani needs n queries for bounded error
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - def-finite-cardinality
  - def-finite-probability-space-and-event
  - def-qa-bernstein-vazirani-promise
  - def-qa-binary-dot-product
  - def-qa-classical-query-algorithm
justified_by: []
axiom_use: None; all arguments use finite sums, finite sets, and explicit finite-dimensional registers.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6 (2026-08-27)"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 2 §2.4, PDF pp.29-33: complete DJ and BV promises, amplitudes, query bounds."
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms (updated November 2020)"
      url: https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf
      locator: "§6.1, PDF pp.7-11 (printed pp.1-5): independent direct Deutsch, DJ and BV derivations and classical comparisons."
---

## Statement

For the no-offset Bernstein–Vazirani promise on $n\ge1$ bits, every randomized classical algorithm with worst-case success at least $2/3$ needs at least $n$ queries. Querying the $n$ standard basis addresses recovers the secret exactly, so the bounded-error and exact classical query complexities are both $n$.

## Facts & Assumptions

**Given:** A uniformly sampled secret $a\in\{0,1\}^n$ and a classical algorithm making at most $q$ queries to $f_a(x)=a\cdot x$.

[F1] [[def-qa-bernstein-vazirani-promise]]: $f_a(x)=a\cdot x$ is total and the required output is the unique secret $a$.

[F2] [[def-qa-binary-dot-product]]: the reply is the parity of the coordinate products $a_ix_i$.

[F3] [[def-qa-classical-query-algorithm]]: an adaptive query chooses its next address from the random tape and earlier replies; the worst-case query bound applies to each tape and promised input.

[F4] [[def-finite-probability-space-and-event]] and [[def-finite-cardinality]]: the uniform secret law averages success over the finite set of $2^n$ possible secrets.

## Proof

1.1 Fix a random tape. The algorithm is a deterministic adaptive binary decision tree of depth at most $q$, since each query reply is one bit by [F2]. A binary tree of depth at most $q$ has at most $2^q$ leaves: this holds at depth zero, and at each added level every prior leaf creates at most two children. Each leaf outputs one candidate secret, so at most one of the $2^n$ secrets reaching that leaf can be correctly recovered. Hence success averaged uniformly over secrets is at most $2^q/2^n=2^{q-n}$. [given, F2, F3, F4, algebra]

2.1 For fixed $n$ and $q$, there are finitely many deterministic depth-at-most-$q$ decision trees on the finite address set, with output labels in $\{0,1\}^n$. The random-tape algorithm induces weights on this finite strategy set by grouping tapes according to their tree. Averaging step 1.1 over this finite distribution leaves average success at most $2^{q-n}$. If worst-case success is at least $2/3$ on every secret, its average under the uniform secret law is at least $2/3$. For $q\le n-1$, the upper bound is at most $1/2<2/3$, a contradiction; therefore $q\ge n$. [F3, F4, step 1.1, algebra]

3.1 For each coordinate $i<n$, query $e_i$, the string with one at $i$ and zeros elsewhere. By [F2], the reply is $f_a(e_i)=a_i$. These $n$ replies give the entire secret, so $n$ queries suffice exactly. [F1, F2, F3, construct] ∎
