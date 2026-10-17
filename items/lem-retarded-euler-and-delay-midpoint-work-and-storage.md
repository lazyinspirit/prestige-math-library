---
id: lem-retarded-euler-and-delay-midpoint-work-and-storage
kind: lemma
title: "Stored retarded Euler and distributed midpoint work, storage, and grid alignment"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Nicola Guglielmi and Ernst Hairer, Solving Delay Differential Equations, Chapter 1"
      url: "https://www.unige.ch/~hairer/preprints/ChapterDDE.pdf"
      locator: "Delay-history procedure setting; the finite work and storage counts here are proved from the two local algorithm definitions."
---

## Statement

Fix positive integers $d,m$, positive $T,\tau$, $h=\tau/m$, and $N=\lceil T/h\rceil$. Consider the following finite storage schedule: initialize and retain $d$-vectors $Y_j=\phi(jh)$ for $j=-m,\ldots,0$; at each index $n=0,\ldots,N-1$, first test an optional nonnegative integer budget $B$, stopping if $n\ge B$, and otherwise evaluate one vector $f(nh,Y_n,Y_{n-m})$, form $Y_{n+1}=Y_n+h f(nh,Y_n,Y_{n-m})$, and append it. Assume every reached evaluation is defined and returns in finite time. A complete schedule uses exactly $N$ calls to $f$ and retains $N+m+1$ state vectors. If $B<N$, it stops after exactly $B$ calls with $m+B+1$ vectors. Initialization uses $m+1$ history evaluations in either case. Full history storage is $O(d(N+m))=O(d(T+\tau)/h)$ real entries. With direct array indexing and a constant-cost scalar floor operation, a query of the piecewise-linear interpolant of the stored vectors costs $O(d)$ arithmetic. Counts exclude internal evaluation costs.

For a complete stored history, fix a positive integer $q$ and $n\in\{0,\ldots,N\}$, put $r=qm$, $\Delta=h/q$, and $\theta_j=(j+1/2)\Delta$. Consider the schedule that initializes $A=0\in\mathbb R^d$ and, for $j=0,\ldots,r-1$, adds $\Delta K(\theta_j)\widehat y_h(nh-\theta_j)$ to $A$. With returning kernel evaluations, this makes $r$ kernel evaluations and $r$ history queries, using $O(rd)$ arithmetic besides kernel evaluations. Streaming the scalar weights uses $O(d)$ additional storage; caching all $r$ weights uses $O(r+d)$, excluding the input history. Every stored-grid knot, including a delay breakpoint $k\tau$, encountered by $\theta\mapsto\widehat y_h(nh-\theta)$ on $[0,\tau]$ is a quadrature-cell endpoint. No constant-memory claim is made for the complete stored history.

## Facts & Assumptions

**Given:** The two finite schedules, admissibility conditions, returning evaluations and indexing/cost conventions in the Statement.

## Proof

1.1 Initialization samples and stores exactly $m+1$ history vectors. After $k$ completed updates, induction gives $k$ calls to $f$ and $m+k+1$ retained vectors. The next delayed index $k-m$ has already been stored because $m\ge1$. Returning evaluations allow the finite loop to reach $k=N$, or its first budget stop at $k=B<N$. Each vector has $d$ entries. Since $N\le T/h+1$ and $m=\tau/h\ge1$, $N+m\le(T+\tau)/h+1\le2(T+\tau)/h$, proving the storage bound. [given, algebra, induction]

1.2 At a query $s$ in the stored interval, $j=\lfloor s/h\rfloor$ locates its cell, with the final stored endpoint handled separately. Direct indexing retrieves the two endpoint vectors; linear interpolation takes a fixed number of operations per coordinate. The floor/index work is constant by hypothesis, so the query costs $O(d)$. At a stored endpoint its vector may be returned directly. [given, algebra]

2.1 Each of the $r$ midpoint iterations evaluates one kernel value and one history query, then uses a fixed number of coordinate multiplications and additions. Step 1.2 gives $O(rd)$ total arithmetic. Streaming the midpoint and scalar weight retains only a constant number of scalars and $d$-vectors, hence $O(d)$ extra storage since $d\ge1$. Retaining all $r$ scalar weights adds $O(r)$; neither implementation duplicates the input history. [given, step 1.2, algebra]

3.1 A stored knot $jh$ appears at $nh-\theta=jh$ exactly when $\theta=(n-j)h=(n-j)q\Delta$. If this lies in $[0,\tau]$, it is an integer multiple of $\Delta$, hence a quadrature-cell endpoint. Each delay breakpoint $k\tau=kmh$ is such a knot. Alignment does not require midpoint samples themselves to be stored-grid nodes. [given, algebra] ∎
