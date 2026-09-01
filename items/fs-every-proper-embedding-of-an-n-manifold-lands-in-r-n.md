---
id: fs-every-proper-embedding-of-an-n-manifold-lands-in-r-n
kind: false-statement
title: "FALSE: every proper embedding of an n-manifold lands in R^n"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-weak-whitney-proper-embedding-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Theorem 6.15"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

**False claim:** every smooth $n$-manifold admits a proper embedding into
$\mathbb R^n$.

## Facts & Assumptions

**Given:** The circle $S^1$.

[L1] Every smooth manifold does embed properly in $\mathbb R^{2n+1}$
([[thm-weak-whitney-proper-embedding-theorem]]).

## Refutation
**Proof technique:** direct.

1.1 Suppose $S^1$ embedded in $\mathbb R$. Because $S^1$ is compact and connected, its image would be a compact connected subset of $\mathbb R$, hence a closed interval $[a,b]$. [given, algebra]

2.1 Removing any point from $S^1$ leaves a connected space, but removing an interior point from $[a,b]$ disconnects it, while removing an endpoint leaves a noncompact interval. Therefore $S^1$ is not homeomorphic to any closed interval. This contradicts step 1.1. [step 1.1, algebra]

3.1 So the claim already fails in dimension $1$. The honest general statement is the higher-dimensional existence theorem [L1], not an ambient-dimension-equality theorem. [L1, step 2.1] ∎
