---
id: ex-v-and-w-cycle-costs-in-two-dimensions
kind: example
title: "V- and W-cycle work under two-dimensional four-to-one coarsening"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [alg-finite-galerkin-v-cycle,
       thm-galerkin-v-cycle-work-recurrence-master-regimes]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Susanne C. Brenner and L. Ridgway Scott, The Mathematical Theory of Finite Element Methods, 3rd ed., Chapter 6"
      url: "https://webs.um.es/eliseo/um/uploads/Main/Brenner_Scott_The_Mathematical_Theory_Of_Finite_Element%20Methods_2008.pdf"
    - title: "Numerical Methods II, University of Heidelberg lecture notes, Chapter 10"
      url: "https://conan.iwr.uni-heidelberg.de/data/teaching/finiteelements_ws2021/num2_updated.pdf"
---

## Example

Assume a two-dimensional hierarchy with $N=4^L$ unknowns on its finest level,
constant $c>0$ work per unknown at each level, bounded base solve, and the
finite Galerkin cycle of [[alg-finite-galerkin-v-cycle]]. The V-cycle has one
coarse call; the W-cycle has two. Both have $\Theta(N)$ arithmetic work under
these hypotheses, with different geometric sums.

## Facts & Assumptions

**Given:** $N=4^L$ with integer $L\ge1$, per-level work $cN_j$, a bounded coarsest solve, and the V/W call counts $\gamma=1,2$.

[F1] [[thm-galerkin-v-cycle-work-recurrence-master-regimes]]: for $q=2^d=4$, work is $\Theta(N)$ when $\gamma<4$.

## Verification
1.1 For the V-cycle, $T_V(N)=cN+T_V(N/4)$. Repeated substitution gives $$T_V(N)=cN\sum_{r=0}^{L-1}4^{-r}+T_V(1).$$ The sum lies between $1$ and $4/3$, and $T_V(1)=\Theta(1)$, so $T_V(N)=\Theta(N)$. This is also the $\gamma=1<4$ case of [F1]. [given, F1, algebra]

2.1 For the W-cycle, $T_W(N)=cN+2T_W(N/4)$, so $$T_W(N)=cN\sum_{r=0}^{L-1}2^{-r}+2^LT_W(1).$$ The sum lies between $1$ and $2$, while $2^L=\sqrt N$; consequently both terms are $O(N)$ and the first is a positive $cN$ lower bound. Hence $T_W(N)=\Theta(N)$, agreeing with [F1] because $\gamma=2<4$. [given, F1, algebra] ∎
