---
id: def-nested-uniform-scramble
kind: definition
title: "Nested uniform scrambling of a finite point set"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-rqmc-point-set-and-estimator
  - def-lambda-t-net
  - lem-countable-iid-baseb-digits-from-one-uniform
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §17.5"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
    - title: "Pierre L’Ecuyer and Christiane Lemieux, Recent Advances in Randomized Quasi-Monte Carlo Methods, §5.3"
      url: "https://www.math.uwaterloo.ca/~clemieux/papers/survey01.pdf"
---

## Definition

Fix a base $b\ge2$ and points $a_1,\ldots,a_n\in[0,1)^d$. Write each
coordinate in its terminating base-$b$ expansion when it has two expansions,
and otherwise in its unique expansion:
$$a_{i,j}=\sum_{k\ge1}a_{i,j,k}b^{-k},\qquad a_{i,j,k}\in\{0,\ldots,b-1\}.$$
Enumerate the countable pairs $(j,w)$ by increasing word length, then
coordinate, then lexicographic word order. For every such pair use a uniform
random permutation $\pi_{j,w}$ of $\{0,\ldots,b-1\}$, mutually independent
over all pairs; [[lem-countable-iid-baseb-digits-from-one-uniform]] supplies
this array. Define
$$x_{i,j,k}=\pi_{j,(a_{i,j,1},\ldots,a_{i,j,k-1})}(a_{i,j,k}),\qquad X_{i,j}=\sum_{k\ge1}x_{i,j,k}b^{-k}.$$
The same permutations are used for all points in a coordinate; different
coordinates use independent permutation families. The resulting random point
array is the **nested uniform scramble** of the input array. Null events on
which an output expansion is eventually all $b-1$ do not alter its law; choose
the usual half-open representative there.
