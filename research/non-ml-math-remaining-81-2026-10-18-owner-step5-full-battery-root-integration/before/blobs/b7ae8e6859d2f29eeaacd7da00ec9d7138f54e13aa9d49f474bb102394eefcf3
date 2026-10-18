---
id: thm-it-finite-data-lloyd-termination-and-fixed-point
kind: theorem
title: Exact finite-data Lloyd descent and finite termination
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - alg-it-finite-data-lloyd-quantizer
  - def-it-finite-squared-error-quantizer
  - lem-it-weighted-centroid-squared-error-identity
justified_by: []
aliases: []
axiom_use: No choice principle is used; the proof uses only finite sets and exact arithmetic.
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Robert Gallager, 6.450 Principles of Digital Communications I, Chapter 3: Quantization"
      url: https://ocw.mit.edu/courses/6-450-principles-of-digital-communications-i-fall-2006/926689aaa62a0315473fa9b982de1b07_book_3.pdf
      locator: §3.2.3, printed pp. 66–68, Lloyd alternation and warning that necessary conditions need not be sufficient for global optimality.
    - title: Robert M. Gray and David L. Neuhoff, Quantization, IEEE Transactions on Information Theory 44(6) (1998)
      url: https://www.csd.uoc.gr/~hy438/lectures/Quantization.pdf
      locator: §II, printed pp. 2328–2330, descent iteration and possible local optima; the finite-state proof here is local.
    - title: Robert M. Gray, Source Coding Theory, first edition
      url: https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf
      locator: Chapter 5, §5.2, printed pp. 117–119, nearest-neighbor distortion and centroid updates.
---

## Statement

For $N$ indexed points in $\mathbb R^d$ with positive normalized weights, $k\ge1$ centers, and any initial center tuple, the exact algorithm of [[alg-it-finite-data-lloyd-quantizer]] terminates after at most $2^{Nk}$ assignment/update passes. Every pass that changes a center strictly decreases the empirical squared-error distortion; at termination, the returned assignment is nearest-center and each nonempty cluster center is its weighted centroid. Each pass uses $O(Nkd)$ exact arithmetic and comparisons, so the crude total operation bound is $O(2^{Nk}Nkd)$. The conclusion is a fixed point, not a global-optimality claim.

## Facts & Assumptions

**Given:** $N,d,k\ge1$, points $x_1,\ldots,x_N\in\mathbb R^d$, weights $w_i>0$ with sum one, and initial centers $c^0$; all comparisons and arithmetic are exact.

[F1] [[alg-it-finite-data-lloyd-quantizer]]: each pass assigns each point to its least-index nearest center, replaces every nonempty cluster center by its weighted centroid, leaves every empty-cluster center unchanged, and stops when the center tuple is unchanged.

[F2] [[lem-it-weighted-centroid-squared-error-identity]]: for a nonempty cluster $S$ of weight $W_S$ and centroid $\mu_S$, its cost at center $c$ is its cost at $\mu_S$ plus $W_S\|c-\mu_S\|_2^2$.

[F3] Put $X_N:=\{x_i:1\le i\le N\}$, a finite Borel subset of $\mathbb R^d$, and let $\mu_N:=\sum_{i=1}^Nw_i\delta_{x_i}$ on $X_N$, where $\delta_{x_i}$ is unit point mass at $x_i$. This is a probability measure on the relative Borel sigma algebra of $X_N$ with finite second moment $\int_{X_N}\|x\|_2^2\,d\mu_N(x)=\sum_{i=1}^Nw_i\|x_i\|_2^2<\infty$. For an ordered center tuple $c$, let $Q_c:X_N\to\{1,\ldots,k\}$ be its least-index nearest-center rule. Each fiber is Borel because $X_N$ is finite, so [[def-it-finite-squared-error-quantizer]] gives

$$D_{\mu_N}(Q_c;c_1,\ldots,c_k)=\sum_{i=1}^Nw_i\|x_i-c_{Q_c(x_i)}\|_2^2=\sum_{i=1}^Nw_i\min_{1\le j\le k}\|x_i-c_j\|_2^2=:J(c).$$

## Proof

1.1 At pass $t$, the assignments in [F1] minimize each point's squared distance for the fixed tuple $c^t$, so their assigned cost is exactly $J(c^t)$ from [F3]. [given, F1, F3]

1.2 Replacing the centers by cluster centroids changes the assigned cost by subtracting $\sum_{j:S_j^t\ne\varnothing}W_{S_j^t}\|c_j^t-\mu_{S_j^t}\|_2^2$, by [F2]; empty clusters contribute no cost and their centers are unchanged by [F1]. If any center changes, one nonempty-cluster term is positive. Reassigning to nearest centers cannot increase cost, so $J(c^{t+1})<J(c^t)$. [given, F1, F2, F3, algebra]

1.3 Every center value occurring in the iteration is either its own initial value or the centroid of one of the at most $2^N-1$ nonempty indexed subsets of the data; thus each center has at most $2^N$ possible values and there are at most $2^{Nk}$ possible ordered center tuples. [given, F1, construct]

2.1 A changed pass cannot revisit a previous center tuple, because $J$ is a function of that tuple and strictly decreases at every changed pass by step 1.2. Hence at most $2^{Nk}-1$ passes change the tuple; the next pass leaves it unchanged and the algorithm stops, for at most $2^{Nk}$ passes. [step 1.2, step 1.3, algebra]

3.1 At the stopping pass, the tuple is unchanged. The deterministic nearest-center rule therefore gives the same assignments on the next evaluation, and the update formula in [F1] already made every nonempty center its assigned centroid. Thus the returned pair is an assignment/centroid fixed point. [F1, step 2.1]

4.1 One pass evaluates $Nk$ squared distances in $d$ coordinates and performs at most $O(Nd+kd)$ accumulation/update work, which is $O(Nkd)$ since $N,d,k\ge1$. Multiplying by the pass bound gives $O(2^{Nk}Nkd)$ exact operations; this exponential bound makes no polynomial-time claim. [given, step 2.1, algebra] ∎
