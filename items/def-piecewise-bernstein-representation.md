---
id: def-piecewise-bernstein-representation
kind: definition
title: Piecewise Bernstein representation
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-binomial-coefficient, def-canonical-natural, def-finite-sum, def-integer-power]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Rida T. Farouki, The Bernstein polynomial basis: a centennial retrospective, Computer Aided Geometric Design 29 (2012), pp. 379–419"
      url: https://faculty.engineering.ucdavis.edu/farouki/wp-content/uploads/sites/51/2021/07/Bernstein-polynomial-basis.pdf
---

## Definition

Let $s\ge1$ be an integer and let $a=x_0<\cdots<x_s=b$ be a finite partition, and on each cell $[x_i,x_{i+1}]$ choose an integer degree $n_i\ge0$ and real controls $c_{i,0},\ldots,c_{i,n_i}$. For $t=(x-x_i)/(x_{i+1}-x_i)\in[0,1]$, define the Bernstein basis polynomial
$$B_{k,n_i}(t)=\iota\binom{n_i}{k}t^k(1-t)^{n_i-k},\qquad 0\le k\le n_i,$$
where $\binom{n_i}{k}$ is the natural binomial coefficient from [[def-binomial-coefficient]], $\iota$ is the canonical embedding of [[def-canonical-natural]] into $\mathbb R$, and finite sums use [[def-finite-sum]]. The cell polynomial is $p_i(x)=\sum_{k=0}^{n_i}c_{i,k}B_{k,n_i}(t)$. These cell polynomials form a piecewise Bernstein representation. To require continuity at a shared node, impose the additional endpoint-control condition $c_{i,n_i}=c_{i+1,0}$; continuity is not part of the representation unless that condition is imposed.

For degree two this formula reads $p_i(x)=c_{i,0}(1-t)^2+\iota\binom21\,c_{i,1}t(1-t)+c_{i,2}t^2$.
