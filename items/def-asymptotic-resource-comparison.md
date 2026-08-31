---
id: def-asymptotic-resource-comparison
kind: definition
title: "Asymptotic comparison of resource bounds"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-worst-case-time-and-space-complexity]
justified_by: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 19: Time-bounded computations"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.19.pdf"
    - title: "Eric Blais, Models of Computation, 7. Time Complexity"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/time"
---

## Definition

Let $f,g:\mathbb N\to[0,\infty)$. We say that **$f$ is asymptotically bounded by
$g$**, and write
$$ f(n)=O(g(n)), $$
when there exist constants $c>0$ and $n_0\in\mathbb N$ such that
$$ f(n)\le c\,g(n)\qquad(n\ge n_0). $$

We say that two bounds are **of the same asymptotic order** when each is
$O$-bounded by the other. Fix further bounds
$t,s:\mathbb N\to[0,\infty)$.

If $M$ is a machine in the sense of [[def-worst-case-time-and-space-complexity]]
and halts on every input, then its worst-case resource functions are defined at
every input length, and:

- $M$ has **time complexity $O(t(n))$** when
  $\operatorname{Time}_M(n)=O(t(n))$;
- $M$ has **space complexity $O(s(n))$** when
  $\operatorname{Space}_M(n)=O(s(n))$.

## Remarks

- These comparisons forget constant factors and finite prefixes.

- Later invariance statements are about preservation of classes under this
  asymptotic relation, not equality of exact running times.
