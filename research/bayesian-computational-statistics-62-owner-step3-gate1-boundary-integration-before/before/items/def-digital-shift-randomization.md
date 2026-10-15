---
id: def-digital-shift-randomization
kind: definition
title: "Digital shift randomization in base $b$"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-rqmc-point-set-and-estimator
  - def-lambda-t-net
  - lem-countable-iid-baseb-digits-from-one-uniform
  - def-nested-uniform-scramble
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §17.6"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
    - title: "Pierre L’Ecuyer and Christiane Lemieux, Recent Advances in Randomized Quasi-Monte Carlo Methods, §5.2"
      url: "https://www.math.uwaterloo.ca/~clemieux/papers/survey01.pdf"
---

## Definition

Fix an integer $b\ge2$, a dimension $d\ge1$, and points
$a_1,\ldots,a_n\in[0,1)^d$. Write each coordinate in its terminating
base-$b$ expansion when it has two expansions, and otherwise in its unique
expansion, $a_{i,j}=\sum_{k\ge1}a_{i,j,k}b^{-k}$. Fix a bijection
$q:\{1,\ldots,d\}\times\mathbb N_{>0}\to\mathbb N_{>0}$. From
the independent uniform permutations $\pi_q$ supplied by
[[lem-countable-iid-baseb-digits-from-one-uniform]], set
$S_{j,k}=\pi_{q(j,k)}(0)$. These are mutually independent uniform digits in
$\{0,\ldots,b-1\}$. A **digital shift** applies the same digit shifts to
every point:
$$x_{i,j,k}=(a_{i,j,k}+S_{j,k})\bmod b,\qquad \widetilde X_{i,j}=\sum_{k\ge1}x_{i,j,k}b^{-k},\qquad X_{i,j}=\begin{cases}\widetilde X_{i,j},&\widetilde X_{i,j}<1,\\0,&\widetilde X_{i,j}=1.\end{cases}$$
The value $0$ is the half-open representative when the digit series equals
$1$, so the output always lies in $[0,1)^d$. For each fixed input point and
coordinate this exceptional event is null, since it requires every shifted
digit to be $b-1$. The shift is global per coordinate and digit: when $n\ge2$,
the first shifted digits of any two points in one coordinate differ by their
fixed input-digit difference modulo $b$, so the point variables are
dependent. This operation differs from the prefix-dependent permutations in
[[def-nested-uniform-scramble]].
