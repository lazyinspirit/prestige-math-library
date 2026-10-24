---
id: thm-it-exhaustive-global-empirical-quantizer-is-optimal
kind: theorem
title: Exhaustive empirical search attains a global quantizer
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - alg-it-exhaustive-global-empirical-quantizer
  - def-it-finite-squared-error-quantizer
  - lem-it-weighted-centroid-squared-error-identity
justified_by: []
aliases: []
axiom_use: No choice principle is used; the proof uses a finite exhaustive search.
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Robert M. Gray, Source Coding Theory, first edition
      url: https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf
      locator: Chapter 5, §§5.1–5.2, printed pp. 115–119, finite quantizer objectives and partitions; the exhaustive proof is supplied locally.
    - title: "Robert Gallager, 6.450 Principles of Digital Communications I, Chapter 3: Quantization"
      url: https://ocw.mit.edu/courses/6-450-principles-of-digital-communications-i-fall-2006/926689aaa62a0315473fa9b982de1b07_book_3.pdf
      locator: §3.2, printed pp. 65–68, nearest assignments and centroid updates; the finite exhaustive proof is supplied locally.
    - title: Robert M. Gray and David L. Neuhoff, Quantization, IEEE Transactions on Information Theory 44(6) (1998)
      url: https://www.csd.uoc.gr/~hy438/lectures/Quantization.pdf
      locator: §III, printed pp. 2341–2343, fixed-rate finite codebook and distortion setting; the exhaustive proof is supplied locally.
---

## Statement

For every finite indexed data set $x_1,\ldots,x_N\in\mathbb R^d$ with $N,d,k\ge1$ and positive normalized weights, the algorithm of [[alg-it-exhaustive-global-empirical-quantizer]] terminates after checking exactly $k^N$ assignments and returns a nearest-center quantizer whose empirical squared-error distortion is no greater than that of any $k$-center tuple. Its exact arithmetic operation count is $O(k^N(N+k)d)$; this is an exponential exhaustive procedure, not a polynomial-time claim.

## Facts & Assumptions

**Given:** $N,d,k\ge1$, points $x_i\in\mathbb R^d$, weights $w_i>0$ summing to one, and exact arithmetic and comparisons.

[F1] [[alg-it-exhaustive-global-empirical-quantizer]]: the procedure checks every ordered assignment, uses a weighted centroid for each nonempty cluster and $x_1$ for each empty cluster, retains a minimum-cost assignment, then reassigns points to least-index nearest centers.

[F2] [[lem-it-weighted-centroid-squared-error-identity]]: replacing any cluster center by its weighted centroid cannot increase its assigned squared-error cost.

[F3] Put $X_N:=\{x_i:1\le i\le N\}$, a finite Borel subset of $\mathbb R^d$, and let $\mu_N:=\sum_{i=1}^Nw_i\delta_{x_i}$ on $X_N$, where $\delta_{x_i}$ is unit point mass at $x_i$. This is a probability measure on the relative Borel sigma algebra of $X_N$ with finite second moment $\int_{X_N}\|x\|_2^2\,d\mu_N(x)=\sum_{i=1}^Nw_i\|x_i\|_2^2<\infty$. For an ordered center tuple $c$, let $Q_c:X_N\to\{1,\ldots,k\}$ be its least-index nearest-center rule. Each fiber is Borel because $X_N$ is finite, so [[def-it-finite-squared-error-quantizer]] gives

$$D_{\mu_N}(Q_c;c_1,\ldots,c_k)=\sum_{i=1}^Nw_i\|x_i-c_{Q_c(x_i)}\|_2^2=\sum_{i=1}^Nw_i\min_{1\le j\le k}\|x_i-c_j\|_2^2=:J(c).$$

## Proof

1.1 The assignment set $\{1,\ldots,k\}^N$ has exactly $k^N$ elements, so the finite ordered loop in [F1] terminates and retains an assignment $a^*$ of minimum centroid-adjusted assigned cost $L_*$. [given, F1, construct]

1.2 Fix any center tuple $c$ and assign each point to its least-index nearest center, obtaining $a(c)$. By [F2], the centroid-adjusted cost of this assignment is at most its cost at $c$, so $L_*\le L(a(c))\le J(c)$ by [F3]. [given, F2, F3, algebra]

2.1 Let $c^*$ be the tuple retained for $a^*$. Reassigning $a^*$ to nearest centers cannot increase its cost, hence $J(c^*)\le L_*$. Step 1.2 gives $L_*\le J(c)$ for every $c$, in particular $L_*\le J(c^*)$; therefore $J(c^*)=L_*$ and $J(c^*)\le J(c)$ for every $k$-center tuple. The returned tuple is globally minimizing. [step 1.1, step 1.2, F1, F3, algebra]

3.1 Each of the $k^N$ assignments can be grouped, centered and costed in $O((N+k)d)$ exact operations; the final nearest reassignment costs $O(Nkd)$, which is bounded by $O(k^N(N+k)d)$ for $N,k\ge1$. This proves the stated operation count without a bit-complexity claim. [given, F1, step 1.1, algebra] ∎
