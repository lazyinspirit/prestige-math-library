---
id: prop-trace-is-linear
kind: proposition
title: 'Trace is a linear functional on $M_n(F)$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-trace-of-a-square-matrix, def-matrix-space,
       def-finite-sum-in-a-commutative-monoid]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., §8D'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

For every natural $n$, the map
$\operatorname{tr}:M_n(F)\to F$ is linear:

$$\operatorname{tr}(A+B)=\operatorname{tr}(A)+\operatorname{tr}(B),\qquad \operatorname{tr}(\lambda A)=\lambda\operatorname{tr}(A).$$

## Facts & Assumptions

**Given:** Matrices $A,B\in M_n(F)$ and a scalar $\lambda\in F$.

[L1] The trace is the finite sum of the diagonal entries ([[def-trace-of-a-square-matrix]]).

## Proof

**Proof technique:** direct.

1.1 Entrywise addition and the finite-sum law give $\operatorname{tr}(A+B)=\sum_{i<n}(a_{ii}+b_{ii})=\sum_{i<n}a_{ii}+\sum_{i<n}b_{ii}=\operatorname{tr}(A)+\operatorname{tr}(B)$. [given, L1]

2.1 Likewise, $\operatorname{tr}(\lambda A)=\sum_{i<n}\lambda a_{ii}=\lambda\sum_{i<n}a_{ii}=\lambda\operatorname{tr}(A)$. [step 1.1, L1]

3.1 If $n=0$, every displayed sum is empty and has value $0$, so trace is the zero linear functional on the zero matrix space. [step 2.1, L1] ∎
