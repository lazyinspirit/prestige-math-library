---
id: fs-naive-distribution-to-cnf-is-always-polynomial
kind: false-statement
title: "FALSE: distributing an arbitrary formula into CNF always has polynomial size"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-boolean-formula-cnf-and-sat, lem-tseitin-transformation-is-linear-size-and-equisatisfiable]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Distributing an arbitrary Boolean formula into CNF always increases its size by
at most a polynomial factor.

## Facts & Assumptions

**Given:** The formula $\varphi_n:=\bigvee_{i=1}^n (a_i\land b_i)$.

[L1] The page's CNF and satisfiability language are the ones from [[def-boolean-formula-cnf-and-sat]].

[L2] The Tseitin transformation is kept precisely because it preserves satisfiability with only linear blowup, by [[lem-tseitin-transformation-is-linear-size-and-equisatisfiable]].

## Refutation

**Proof technique:** direct.

1.1 Fully distributing $\varphi_n$ into CNF chooses one literal from each conjunctive pair $(a_i\land b_i)$, so the resulting CNF has one clause for every function $\{1,\dots,n\}\to\{a_i,b_i\}$. That is $2^n$ distinct clauses. [L1, given, algebra]

2.1 Since the original formula has size $O(n)$ but the distributed CNF has $2^n$ clauses, the size blowup is exponential, not polynomial. Step 1.1 is exactly why [L2] keeps Tseitin variables available. Therefore the statement is false. [L2, step 1.1] ∎
