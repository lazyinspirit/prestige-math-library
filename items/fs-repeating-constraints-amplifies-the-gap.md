---
id: fs-repeating-constraints-amplifies-the-gap
kind: false-statement
title: "Repeating constraints amplifies the gap"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-constraint-graph-and-labeling-value, def-gap-preserving-csp-reduction]
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
    - title: "Irit Dinur, The PCP theorem by gap amplification, §1.5 and the weight normalisation of constraints, printed pp. 4-6."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.5, printed pp. 370-375."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Duplicating every constraint of a CSP instance the same number of times strictly increases its unsatisfaction fraction.

## Facts & Assumptions

**Given:** the value conventions of [[def-constraint-graph-and-labeling-value]] and a nonzero number of repetitions $r\ge1$.

[F1] A constraint system consists of a finite list of constraints; for a labeling $\sigma$ the value $\operatorname{val}_\sigma(G)$ is the fraction of listed constraints satisfied, so duplicated constraints count with multiplicity, and $\operatorname{UNSAT}_\sigma(G)=1-\operatorname{val}_\sigma(G)$ with $\operatorname{UNSAT}(G)=\min_\sigma\operatorname{UNSAT}_\sigma(G)$ ([[def-constraint-graph-and-labeling-value]]).

[F2] Gap-preserving reductions are compared through unsatisfaction fractions, so any operation that preserves the fraction of violated constraints for every labeling preserves $\operatorname{UNSAT}$ of the system ([[def-gap-preserving-csp-reduction]]).

## Refutation

**Proof technique:** direct.

1.1 Let $G$ have $M$ constraints and let $G^{(r)}$ be the system obtained by listing every constraint of $G$ exactly $r$ times, $r\ge1$. If $M=0$, both lists are empty and the value convention of [F1] gives unsatisfaction zero for every labeling in both systems. If $M>0$, fix a labeling $\sigma$ and let $v$ be the number of constraints of $G$ violated by $\sigma$: the list $G^{(r)}$ has $rM$ constraints and exactly $rv$ of them are violated, so $\operatorname{UNSAT}_\sigma(G^{(r)})=rv/(rM)=v/M=\operatorname{UNSAT}_\sigma(G)$; taking the minimum over labelings gives $\operatorname{UNSAT}(G^{(r)})=\operatorname{UNSAT}(G)$, never a strict increase. [F1, F2, algebra]

1.2 The failure is nonvacuous. Take the alphabet $\Sigma:=\{0,1\}$, the one-vertex constraint graph $V:=\{x_1\}$ with the two loops of [[def-constraint-graph-and-labeling-value]]: the loop carrying the relation $R_1:=\{(0,0),(1,1)\}$, which every labeling of $x_1$ satisfies, and the loop carrying the empty relation $R_2:=\varnothing$, which every labeling violates. Then $G$ has $M=2$ constraints, every labeling violates exactly one of them, and $\operatorname{UNSAT}(G)=1/2$; after repeating each constraint $r$ times every labeling violates exactly $r$ of the $2r$ listed constraints, so $\operatorname{UNSAT}(G^{(r)})=1/2$ for every $r\ge1$. [F1, algebra]

2.1 So the false statement fails at the witness of step 1.2 for every $r\ge1$, and by step 1.1 no instance whatsoever has its unsatisfaction fraction changed by an equal repetition of its constraints. What an amplification step needs instead is a change of the *variables and constraints*, not a reweighting of the existing list: the powering of [[def-constraint-graph-powering]] and the comparison families of the assignment-tester construction are of this genuinely different kind. [step 1.1, step 1.2, F1] ∎
