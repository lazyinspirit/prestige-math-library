---
id: thm-finite-graph-ramsey-binomial-bound
kind: theorem
title: "Finite graph Ramsey theorem: $\\binom{s+t-2}{s-1}\\to(s,t)^2$ for all positive $s,t$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-two-colour-ramsey-arrow-recursion, def-ramsey-colouring-and-arrow-notation, def-binomial-coefficient, thm-pascals-rule, thm-induction-principle, def-nat-order]
justified_by: []
aliases: []
landmark: true
short: "Finite Ramsey theorem"
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Fox et al., Graph Ramsey Theory, Section 2.1"
      url: "https://math.mit.edu/~fox/paper-graphramsey.pdf"
    - title: "R. Diestel, Graph Theory, 6th ed., Theorem 9.1.1"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch9.pdf"
pipeline_run: null
---

## Statement

For all positive natural numbers $s,t$,

$$\binom{s+t-2}{s-1}\to(s,t)^2.$$

The arrow notation is [[def-ramsey-colouring-and-arrow-notation]], binomial coefficients are those of [[def-binomial-coefficient]], and the induction is over the natural order of [[def-nat-order]] using [[thm-induction-principle]].

## Facts & Assumptions

**Given:** Positive natural numbers $s,t$.

[L1] If $m\to(s-1,t)^2$ and $n\to(s,t-1)^2$, then $m+n\to(s,t)^2$ for $s,t\ge2$ ([[lem-two-colour-ramsey-arrow-recursion]]).

[L2] Pascal's rule. $\displaystyle\binom{n+1}{k+1} = \binom{n}{k} + \binom{n}{k+1}$ ([[thm-pascals-rule]]).



## Proof

**Proof technique:** induction.

1.1 If $s=1$ or $t=1$, every nonempty vertex set contains the required one-vertex set in the corresponding colour convention, and the displayed binomial coefficient is $1$. [base]

1.2 Assume $s,t\ge2$ and that the formula holds whenever the sum of the two positive parameters is smaller than $s+t$. Then $\binom{s+t-3}{s-2}\to(s-1,t)^2$ and $\binom{s+t-3}{s-1}\to(s,t-1)^2$ by the induction hypothesis. [ih]

2.1 Apply [L1] to the two witnesses in step 1.2 and use [L2] to identify their sum as $\binom{s+t-2}{s-1}$. This gives the displayed arrow for $(s,t)$. [step 1.2, L1, L2]

3.1 The base faces and the induction step cover all positive $s,t$, so the explicit binomial witness works universally. [step 1.1, step 2.1, discharge-induction] ∎
