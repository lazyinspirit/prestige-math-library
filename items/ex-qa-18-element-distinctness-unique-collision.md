---
id: ex-qa-18-element-distinctness-unique-collision
kind: example
title: "Unique-collision element-distinctness parameters"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - thm-qa-18-element-distinctness-query-cost
  - def-qa-18-element-distinctness-johnson-walk
justified_by: []
proof_strategy: direct
axiom_use: "None; the example uses a finite inclusion count and the stated query theorem."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Andris Ambainis, Quantum walk algorithm for element distinctness, Theorems 4–5 and §§3–4"
      url: "https://arxiv.org/pdf/quant-ph/0311001"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 20, §§20.1–20.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---
## Example

Suppose exactly one pair of distinct indices has equal values. Compute its marked fraction for $N=8,r=4$, and verify the balanced setup/update expression for $r$ of order $N^{2/3}$.

## Facts & Assumptions

**Given:** The Johnson-walk state and cost conventions of [[def-qa-18-element-distinctness-johnson-walk]] and the query bound of [[thm-qa-18-element-distinctness-query-cost]].

[F1] [[def-qa-18-element-distinctness-johnson-walk]]: a state is an $r$-subset, and its marked condition is the presence of a colliding pair; setup and update query costs are $r$ and $2$.

[F2] [[thm-qa-18-element-distinctness-query-cost]]: a fixed pair is included with probability $r(r-1)/[N(N-1)]$, and the one-outer-trial query bound is $2r+O(N/\sqrt r)$.

## Proof


1.1 For $N=8,r=4$, the state space has $\binom84=70$ subsets. Exactly $\binom62=15$ contain the unique colliding pair, so $\varepsilon=15/70=3/14$, equal to $r(r-1)/[N(N-1)]=12/56$. The stationary mass is positive, and [F1] gives four setup value queries, two value queries per update, and no extra value query for the stored-value check. [F1, F2, algebra]

2.1 More generally, for $r=\Theta(N^{2/3})$ with $r\le N/2$, [F2] charges at most two fresh setups, with leading term $2r=\Theta(N^{2/3})$ and update/search term $N/\sqrt r=\Theta(N^{2/3})$. Thus both terms are of the same asymptotic order and the theorem's total is $O(N^{2/3})$. For $N=8$, the clamp in the theorem selects $r=4$; its expression is $8+O(8/2)=8+O(4)$, consistent with this scaling. [F1, F2, step 1.1, algebra] ∎

