---
id: cex-qa-34-tang-without-sampling-access
kind: counterexample
title: Entry queries alone do not provide Tang's sampling access
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - def-qa-34-l2-sample-query-access
  - def-qa-34-end-to-end-error-contract
  - thm-qa-34-tang-recommendation-sampler
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Ewin Tang, A quantum-inspired classical algorithm for recommendation systems, version 3
      url: https://arxiv.org/pdf/1807.04271v3
---

## Statement refuted

Entry queries to a matrix alone imply Tang's polylogarithmic-in-dimension recommendation sampling cost.

## Facts & Assumptions

**Given:** An integer $n\ge2$, an unknown index $j\in[n]$, the one-row matrix $A^{(j)}=(e_j)^T$, and a randomized sampler required to output from the row's squared-entry distribution within total variation $1/3$. Here $e_j$ is the $j$th standard basis vector; an entry query costs one operation and returns $1$ at $j$ and $0$ elsewhere.

[F1] [[def-qa-34-l2-sample-query-access]]: the row sampler must output from $D_{A^{(j)}_{1,*}}$; entry queries alone are a different interface.

[F2] [[thm-qa-34-tang-recommendation-sampler]]: Tang's theorem assumes the stated row/column ℓ2 sample/query access and does not grant that access from entry queries.

[F3] [[def-qa-34-end-to-end-error-contract]]: total variation distance from a point mass at $j$ is one minus the probability assigned to $j$.

## Counterexample

1.1 The squared-entry law of $A^{(j)}$ is the point mass at $j$. By [F3], error at most $1/3$ requires output $j$ with probability at least $2/3$. [given, F1, F3, algebra]

1.2 Fix the algorithm's internal randomness and suppose it makes at most $t<n$ distinct entry queries. If the queried set contains $j$, it can identify $j$; averaged over a uniformly chosen hidden $j$, this event has probability at most $t/n$. If the queried set does not contain $j$, all observed answers are zero and the fixed execution can output at most one of the $n-t$ unqueried indices, so its conditional chance to guess correctly is at most $1/(n-t)$. Thus average success is at most $t/n+(1-t/n)/(n-t)=(t+1)/n$. Averaging over internal randomness preserves this bound. [given, algebra, choose]

2.1 To achieve success at least $2/3$ for every hidden $j$, the average success must be at least $2/3$, so $(t+1)/n\ge2/3$ and $t\ge2n/3-1=\Omega(n)$. Hence the entry-query interface cannot supply the claimed sublinear sampling cost; any preprocessing that builds a sampler must also be charged. The condition of [F2] is therefore essential. [step 1.1, step 1.2, F2, algebra] ∎
