---
id: thm-path-independence-iff-zero-closed-loop-integrals
kind: theorem
title: "Path independence is equivalent to zero integral around every closed piecewise-C1 path"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-piecewise-c1-path-connected-conservative-and-path-independent, thm-line-integrals-under-reversal-and-concatenation, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, thm-line-integrals-under-oriented-reparametrization]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Theorem 9.3.3"
      url: "https://www.jirka.org/ra/html/sec_pathind.html"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb R^n$ be open and piecewise-$C^1$ path-connected, and let $F:U\to\mathbb R^n$ be continuous. The following are equivalent:

1. $F$ is path-independent;
2. every closed piecewise-$C^1$ path $\gamma$ in $U$ satisfies $\int_\gamma F\cdot d\mathbf r=0$.

## Facts & Assumptions
**Given:** The domain and field in the Statement.

[L1] Path independence means equality of vector line integrals along any two piecewise-$C^1$ paths with the same endpoints ([[def-piecewise-c1-path-connected-conservative-and-path-independent]]).

[L2] Under concatenation vector line integrals add, and reversal negates a vector line integral ([[thm-line-integrals-under-reversal-and-concatenation]]).

[L3] A constant path has zero vector line integral because its velocity is zero ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).

[L4] An orientation-preserving oriented piecewise-$C^1$ reparametrization leaves a vector line integral unchanged ([[thm-line-integrals-under-oriented-reparametrization]]).



## Proof

**Proof technique:** direct.

1.1 Assume condition 1, and let $\gamma$ be closed at $x$. The path $\gamma$ and the constant path at $x$ have the same endpoints, so [L1] and [L3] give $\int_\gamma F\cdot d\mathbf r=0$. Thus condition 2 holds. [given, L1, L3]

1.2 Conversely, assume condition 2. Let $\alpha$ and $\beta$ be paths from $x$ to $y$. The increasing affine bijection of $[0,1]$ onto a path's domain is an orientation-preserving oriented reparametrization, so by [L4] we may replace each path by its reparametrization on $[0,1]$ without changing either integral. With both domains $[0,1]$, the concatenation in [L2] is defined and $\alpha*\beta^-$ is closed. [given, L2, L4]

2.1 By condition 2 and [L2], $$0=\int_{\alpha*\beta^-}F\cdot d\mathbf r =\int_\alpha F\cdot d\mathbf r-\int_\beta F\cdot d\mathbf r.$$ [given, step 1.2, L2, algebra]

3.1 Hence the two integrals agree, and [L1] gives path independence. [step 2.1, L1, algebra]

4.1 Step 1.1 proves the forward direction, and steps 1.2, 2.1, and 3.1 prove the reverse direction. Piecewise-$C^1$ path-connectedness guarantees that the comparison paths relevant to condition 1 exist between any two points of $U$. [step 1.1, step 1.2, step 2.1, step 3.1, L1] ∎
