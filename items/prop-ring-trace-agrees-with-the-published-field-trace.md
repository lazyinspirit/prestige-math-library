---
id: prop-ring-trace-agrees-with-the-published-field-trace
kind: proposition
title: "For matrices over a field, the commutative-ring trace agrees with the published matrix trace"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-trace-of-a-square-matrix-over-a-commutative-ring, def-trace-of-a-square-matrix]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Definition 8.47"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

Let $K$ be a field, let $p\in\mathbb N$, and let $A\in M_p(K)$. Then the commutative-ring trace $\operatorname{tr}_K(A)$ equals the published field-matrix trace $\operatorname{tr}(A)$. This includes $p=0$.

## Facts & Assumptions

**Given:** A field $K$, a size $p\in\mathbb N$, and a matrix $A=(a_{ij})\in M_p(K)$.

[L1] The commutative-ring trace is $\operatorname{tr}_K(A)=\sum_{i<p}a_{ii}$, with empty sum zero when $p=0$ ([[def-trace-of-a-square-matrix-over-a-commutative-ring]]).

[L2] The published field trace is $\operatorname{tr}(A)=\sum_{i<p}a_{ii}$, with empty sum zero when $p=0$ ([[def-trace-of-a-square-matrix]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the commutative-ring trace of $A$ is the finite diagonal sum $\sum_{i<p}A_{ii}$. [given, L1]

1.2 By [L2], the published field trace of $A$ is the same finite diagonal sum. [given, L2]

2.1 Comparing steps 1.1 and 1.2 proves equality; for $p=0$ both are the same empty sum $0_K$. [step 1.1, step 1.2] ∎
