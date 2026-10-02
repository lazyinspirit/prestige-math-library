---
id: def-gap-problem-and-gap-preserving-reduction
kind: definition
title: "Gap promise problems and gap-preserving reductions"
status: draft
origin: pipeline
deps:
  - def-optimization-problem-and-approximation-ratio
  - def-polynomial-time-many-one-reduction
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, author-hosted draft, §18.2.4–18.2.5, printed pp. 358–361"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Williamson and Shmoys, The Design of Approximation Algorithms, §16.2, printed pp. 413–414"
      url: "https://designofapproxalgs.com/book.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Fix a maximization problem in the finite-instance model of
[[def-optimization-problem-and-approximation-ratio]] and a **scale** function
$M$ that assigns to every instance $x$ a positive rational $M(x)$, thought of
as the count of the objects being optimized; for max-3SAT below the domain
consists of formulas with at least one clause, $M(x)$ is the number of clauses,
and the objective is the maximum number of simultaneously satisfied clauses.

For rationals with $0\le s<c$, the **gap problem** $\operatorname{Gap}(c,s)$ is
the promise problem whose yes side consists of the instances $x$ with
$\operatorname{OPT}(x)\ge c\,M(x)$ and whose no side consists of the instances
with $\operatorname{OPT}(x)\le s\,M(x)$. Instances with
$s\,M(x)<\operatorname{OPT}(x)<c\,M(x)$ lie outside the promise. Since
$M(x)>0$ and the objective is nonnegative, both conditions are value
inequalities and no quotient by $\operatorname{OPT}(x)$ is formed; in
particular the case $\operatorname{OPT}(x)=0$ is covered by the no side
whenever $s\ge 0$.

A **gap-preserving reduction** from a source promise problem to a target
promise problem is a total function computable by a deterministic polynomial-time
algorithm such that every source instance is carried into the target promise,
every source yes instance is carried into a target yes instance, and every
source no instance is carried into a target no instance. When the source is a
language $L$, the same definition applies with yes side $L$ and no side its
complement, in the sense of [[def-polynomial-time-many-one-reduction]]; the
target is then read as the indication that the constructed target instance
satisfies the required side of its gap. Compositions of gap-preserving
reductions are again gap-preserving reductions, the intermediate instance
always lying in the target promise by construction.

The two gap reductions on this page use these fixed conventions. For max-3SAT
the gap domain consists of formulas with $m\ge1$ clauses, the scale is $m$,
and the optimum is the maximum number of simultaneously satisfiable clauses.
For maximum independent set the clause-literal reduction uses the number $m$
of clause clusters as its positive scale. The PCP reduction constructs a
formula with at least one clause on every input, so its composition with the
clause-literal reduction stays in these domains. The latter construction also
preserves optimum values for the empty formula and its empty graph, but these
zero-clause instances are outside the positive-scale gap domains.
