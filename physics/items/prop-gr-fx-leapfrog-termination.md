---
id: prop-gr-fx-leapfrog-termination
kind: proposition
title: "Termination and operation count of the periodic wave benchmark"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - alg-gr-fx-periodic-wave-leapfrog
dependency_roles:
  alg-gr-fx-periodic-wave-leapfrog: mathematical-premise
physical_scope: "A finite exact-arithmetic property of the one-dimensional scalar benchmark; it asserts no numerical-relativity solver performance or physical observation."
sources:
  references:
    - title: "Gilbert Strang, Mathematical Methods for Engineers II, MIT OpenCourseWare 18.086, Spring 2006, §5.3, complete 11-page lecture note"
      url: "https://ocw.mit.edu/courses/18-086-mathematical-methods-for-engineers-ii-spring-2006/8eaa23367474c809cc0816f24fdacc7f_am53.pdf"
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, unpublished text (1996), Chapter 3, complete 37-page author PDF"
      url: "https://people.maths.ox.ac.uk/trefethen/3all.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

For every admissible integer $N\ge3$, time-step count $n_{\max}\ge1$, real
step $k>0$, and pair of real periodic input arrays, the algorithm terminates
after exactly $n_{\max}-1$ update passes and outputs all levels through
$u^{n_{\max}}$. In the unit-cost exact-real-arithmetic model, where each scalar
arithmetic operation and each array read or write has bounded cost independent
of $N$ and $n_{\max}$, its operation count is $O(Nn_{\max})$.

## Statement references

[[alg-gr-fx-periodic-wave-leapfrog]]

## Facts & Assumptions

**Given:** The finite periodic scalar-wave algorithm with integer inputs
$N\ge3$ and $n_{\max}\ge1$.

[F1] [[alg-gr-fx-periodic-wave-leapfrog]]: one initialization computes $u^1$
by one finite grid pass; the update loop runs through the fixed integer range
$1,\ldots,n_{\max}-1$, and each pass updates exactly $N$ grid entries.

## Proof

**Proof technique:** direct.

1.1 The initialization uses a finite formula at each of the $N$ sites. The
outer index takes each of the finitely many values $1$ through $n_{\max}-1$
and has no data-dependent branch, so the procedure makes exactly
$n_{\max}-1$ update passes. Each pass writes the next $N$-tuple, giving the
output levels $u^0,u^1,\ldots,u^{n_{\max}}$. [given, F1, algebra]

2.1 The initialization costs at most $C_0N$ scalar and array operations for a
fixed constant $C_0$. Each update pass costs at most $C_1N$ such operations
for a fixed $C_1$, because every site uses the same fixed stencil. Thus the
total is at most $C_0N+C_1N(n_{\max}-1)\le(C_0+C_1)Nn_{\max}$, proving the
claimed bound. [given, F1, step 1.1, algebra] ∎
