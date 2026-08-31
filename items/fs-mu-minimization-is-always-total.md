---
id: fs-mu-minimization-is-always-total
kind: false-statement
title: "FALSE: applying mu-minimization to a computable search predicate always yields a total function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-mu-minimization-and-partial-recursive-function]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Jeremy Avigad and Richard Zach, Recursive Functions"
      url: "https://builds.openlogicproject.org/content/computability/recursive-functions/recursive-functions.pdf"
    - title: "Klaus Sutner, Other Models"
      url: "https://www.cs.cmu.edu/~cdm/resources/20-models.pdf"
---

## Statement

**False claim:** if $g:\mathbb N^2\to\mathbb N$ is computable, then the
minimization $x\mapsto\mu y\,g(x,y)$ is always total.

## Facts & Assumptions

**Given:** The false claim above.

[A1] If $g:\mathbb N^2\to\mathbb N$ is computable, then $x\mapsto\mu y\,g(x,y)$ is total.

[L1] Unbounded minimization is defined only when some searched value $y$ makes the total function $g(x,y)$ equal to $0$, by [[def-mu-minimization-and-partial-recursive-function]].

## Refutation

**Proof technique:** direct.

1.1 Take the total computable function $g(x,y)=1$ for all $x,y\in\mathbb N$. For this $g$, there is no $y$ with $g(x,y)=0$ for any input $x$. [given]

2.1 By [L1], the minimization $\mu y\,g(x,y)$ is therefore undefined for every $x$. In particular it is not total, contradicting [A1]. [A1, L1, step 1.1] ∎
