---
id: cex-repeating-constraints-amplifies-the-gap
kind: counterexample
title: "Duplicating constraints does not change UNSAT"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [fs-repeating-constraints-amplifies-the-gap, def-constraint-graph-and-labeling-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification, §1.5 and Definition 1.1, printed pp. 3-4."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.5, printed p. 371."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement refuted

Duplicating every constraint of a CSP instance the same number of times strictly increases its unsatisfaction fraction ([[fs-repeating-constraints-amplifies-the-gap]]).

## Facts & Assumptions

**Given:** the alphabet $\Sigma:=\{0,1\}$ and the constraint graph $G$ on the single variable $x_1$ whose two edges are loops, the first carrying the relation $R_1:=\{(0,0),(1,1)\}$ and the second the empty relation $R_2:=\varnothing$.

[F1] A loop is a constraint on a repeated variable, it is satisfied by a labeling $\sigma$ exactly when $(\sigma(x_1),\sigma(x_1))\in R$, and the value of a system is the fraction of listed constraints that are satisfied, duplicated constraints counting with multiplicity ([[def-constraint-graph-and-labeling-value]]).

[F2] The unsatisfaction fraction of a system is the minimum over labelings of the fraction of the listed constraints that the labeling violates; a system all of whose constraints are unsatisfiable by every labeling has $\operatorname{UNSAT}=1$, and a system all of whose constraints are universally satisfied has $\operatorname{UNSAT}=0$ ([[fs-repeating-constraints-amplifies-the-gap]], [[def-constraint-graph-and-labeling-value]]).

## Counterexample

**Proof technique:** direct.

1.1 The first loop carries $R_1$, and $(0,0),(1,1)\in R_1$, so every labeling of $x_1$ satisfies it; the second loop carries $R_2=\varnothing$, so no labeling satisfies it. Hence the two-constraint list $G$ has $\operatorname{UNSAT}_\sigma(G)=1/2$ for every labeling $\sigma$, and therefore $\operatorname{UNSAT}(G)=1/2$. [F1, F2, algebra]

1.2 For $r\ge1$ let $G^{(r)}$ list each of the two loops $r$ times. Every labeling satisfies exactly the $r$ copies of the first loop and violates exactly the $r$ copies of the second, so $\operatorname{UNSAT}_\sigma(G^{(r)})=r/(2r)=1/2$ for every $\sigma$, and the list has $2r$ constraints. [F1, algebra]

2.1 Thus $\operatorname{UNSAT}(G^{(r)})=1/2=\operatorname{UNSAT}(G)$ for every $r\ge1$: the repetition changes neither the value nor the unsatisfaction fraction, and in particular it never strictly increases it, so the statement refuted above fails at this witness. [step 1.1, step 1.2, F2] ∎
