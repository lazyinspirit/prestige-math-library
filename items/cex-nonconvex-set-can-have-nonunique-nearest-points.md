---
id: cex-nonconvex-set-can-have-nonunique-nearest-points
kind: counterexample
title: A closed nonconvex set can have two nearest points
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-euclidean-inner-product
  - def-metric-topology
  - def-metric-ball
  - lem-of-triangle-inequality
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
axiom_use: No choice axiom is used.
---

## Statement refuted

Every nonempty closed subset of $\mathbb R$ has a unique nearest point to every input point.

## Facts & Assumptions

**Given:** The false statement above.

[F1] [[def-euclidean-inner-product]]: on $\mathbb R$, the Euclidean distance between $x$ and $y$ is $|x-y|$.

[F2] [[def-metric-topology]] and [[def-metric-ball]]: a set is closed when its complement is open; an open ball of radius $r$ about $x$ is the set of points at distance less than $r$ from $x$.

[F3] [[lem-of-triangle-inequality]]: $|a-c|\ge |a-b|-|b-c|$.

## Counterexample

1.1 Let $C=\{-1,1\}\subset\mathbb R$. It is nonempty. If $y\notin C$, put $\delta=\min(|y-1|,|y+1|)>0$. For any $z$ with $|z-y|<\delta/2$, [F3] gives $|z-1|\ge|y-1|-|z-y|>\delta/2>0$ and $|z+1|>0$, so this ball misses $C$. Thus $\mathbb R\setminus C$ is open and $C$ is closed by [F2]. [F2, F3, given, choose]

2.1 For input $y=0$, both points of $C$ have distance $1$ by [F1], and these are all the points in $C$. Hence the nearest-point set is exactly $\{-1,1\}$, which is not a singleton. The claimed unique projection fails for this nonconvex closed set. [F1, step 1.1, given] ∎
