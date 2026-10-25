---
id: def-optimization-problem-and-approximation-ratio
kind: definition
title: "Optimization problems and approximation ratios"
status: published
origin: pipeline
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Williamson and Shmoys, The Design of Approximation Algorithms, §§1.1, 1.6, 2.4, 5.1–5.2, 16.2, printed pp. 14–15, 24–26, 44–46, 107–109, 413–414"
      url: "https://designofapproxalgs.com/book.pdf"
    - title: "Ghaffari, Advanced Algorithms, Lecture 1: Approximation Algorithms I, §§1, 2.1, 2.2.2, PDF pp. 1–5"
      url: "https://people.csail.mit.edu/ghaffari/AA18/Notes/S_18_01.pdf"
verification:
  audited: 2026-10-02
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

A **finite-instance optimization problem** consists of the following data.

- A **problem domain** of explicitly encoded finite instances, each with a
  finite encoding length $|x|$.
- A **polynomial solution-length bound**: a polynomial $p$ such that every
  feasible solution $y$ of an instance $x$ satisfies $|y|\le p(|x|)$.
- A **feasible-solution relation** $R(x,y)$, recognizable in deterministic time
  polynomial in $|x|+|y|$.
- A **nonnegative rational objective** $\operatorname{val}(x,y)\in\mathbb Q$
  with $\operatorname{val}(x,y)\ge 0$, computable in deterministic time
  polynomial in $|x|+|y|$ for every feasible $y$.
- A **direction**, either minimization or maximization.

Every instance of the stated domain is assumed to have at least one feasible
solution. For an instance $x$, the feasible solutions lie in the finite set of
strings of length at most $p(|x|)$; hence the set of values
$\{\operatorname{val}(x,y):R(x,y)\}$ is a finite nonempty set of nonnegative
rationals, and its minimum or maximum, as selected by the direction,

$$\operatorname{OPT}(x):=\min\text{ or }\max\{\operatorname{val}(x,y):R(x,y)\},$$

is attained. The order of the quantifiers is fixed: $\operatorname{OPT}(x)$ is
defined for every domain instance, independently of any algorithm.

Let $\rho$ be rational. A polynomial-time algorithm is a
**$\rho$-approximation** for the problem when it runs in deterministic time
polynomial in $|x|$ and, on every domain instance $x$, outputs a feasible
solution $y$ whose value satisfies

$$ \operatorname{val}(x,y)\le\rho\operatorname{OPT}(x) \quad (\rho\ge 1,\ \text{minimization}), $$

$$ \operatorname{val}(x,y)\ge\rho\operatorname{OPT}(x) \quad (0<\rho\le 1,\ \text{maximization}). $$

These are inequalities between values, not quotients: they include the case
$\operatorname{OPT}(x)=0$, where the minimization inequality asks for a
feasible solution of value $0$ and the maximization inequality is automatic,
and neither guarantee is formed by dividing by $\operatorname{OPT}(x)$.
Suitable examples fixed later on this page are minimum vertex cover, weighted
set cover, max-cut, metric TSP, max-3SAT and maximum independent set, always
with explicitly encoded rational instance data.

For the **max-cut problem** used below, the instances are the finite simple
graphs, a feasible solution is a bipartition of the vertex set, the objective
is the number of edges whose endpoints lie in different parts, and
$\operatorname{OPT}_{\mathrm{MaxCut}}$ denotes the attained maximum over the
finitely many bipartitions. For a randomized algorithm, the $1/2$-guarantee is
read in the value form $\mathbb E[\text{value}]\ge\tfrac12\operatorname{OPT}_{\mathrm{MaxCut}}$
of the maximization inequality above.
