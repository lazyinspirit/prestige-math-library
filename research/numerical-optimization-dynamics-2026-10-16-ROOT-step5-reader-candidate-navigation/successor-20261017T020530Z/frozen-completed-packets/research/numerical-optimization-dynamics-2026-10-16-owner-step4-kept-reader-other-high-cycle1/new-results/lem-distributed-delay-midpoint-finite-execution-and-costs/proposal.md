---
id: lem-distributed-delay-midpoint-finite-execution-and-costs
kind: lemma
title: "Finite execution, alignment and costs for stored-history midpoint quadrature"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [alg-distributed-delay-composite-midpoint-rule, lem-retarded-delay-euler-finite-execution-and-storage-counts]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Guglielmi and Hairer, Solving Delay Differential Equations, Chapter 1 (underlying delay algorithms; finite counts proved here)"
      url: "https://www.unige.ch/~hairer/preprints/ChapterDDE.pdf"
---

## Statement

For [[alg-distributed-delay-composite-midpoint-rule]], all history queries are in $[-\tau,T_h]$, and, assuming the kernel and history evaluations return, the procedure terminates after exactly $r=qm$ kernel evaluations and $r$ history queries. Every Euler-grid knot within the sampled history window, including each delay breakpoint $k\tau$ there, corresponds to a quadrature-cell endpoint in the variable $\theta$.

In the unit-cost scalar arithmetic and direct-array indexing model of [[lem-retarded-delay-euler-finite-execution-and-storage-counts]], the computation uses $O(rd)$ arithmetic, excluding the internal cost of evaluating $K$. Besides the given stored history, working memory is $O(d)$ when the midpoint coordinates and weights are generated on demand, or $O(r+d)$ when the $r$ scalar weights are cached. The output accumulator is included in this working memory; the input history is not.

## Facts & Assumptions

**Given:** Admissible inputs and the cost and returning-evaluation conventions in the Statement.

[F1] [[alg-distributed-delay-composite-midpoint-rule]] has $0\le n\le N$, $t_n=nh$, $h=\tau/m$, $r=qm$, $\Delta=h/q$, and $\theta_j=(j+1/2)\Delta$ for $0\le j<r$. It accumulates $\Delta K(\theta_j)\widehat y_h(t_n-\theta_j)$ once per index and returns the sum.

[F2] A direct stored piecewise-linear history query costs $O(d)$ scalar arithmetic under the stated model ([[lem-retarded-delay-euler-finite-execution-and-storage-counts]]).

## Proof

1.1 Every midpoint obeys $0<\theta_j<\tau$, while $0\le t_n\le T_h$. Therefore $-\tau\le t_n-\theta_j\le T_h$, so all history and kernel evaluations are admitted. A history knot $s=\ell h$ in $[t_n-\tau,t_n]$ corresponds to $\theta=t_n-s=(n-\ell)h=(n-\ell)q\Delta$. This is an integer multiple of $\Delta$ in $[0,\tau]$, hence a quadrature-cell endpoint. Each delay breakpoint $k\tau=kmh$ in that window is such a knot. [given, F1, algebra]

2.1 The finite loop has exactly $r$ indices, and each prescribes one kernel evaluation and one history query; returning evaluations therefore give termination with these counts. By [F2], a history query uses $O(d)$ arithmetic; forming a scalar weight uses constant overhead and multiplying and adding its $d$ coordinates uses $O(d)$ more. Summing $r$ iterations gives $O(rd)$ arithmetic, excluding kernel evaluation cost. Generating each midpoint and weight as needed retains a constant number of scalars and a bounded number of $d$-vectors, including the accumulator, so uses $O(d)$ working memory. Caching one scalar weight for each of $r$ indices adds $r$ scalar entries, giving $O(r+d)$ working memory. [given, F1, F2, step 1.1, algebra] ∎
