---
id: lem-qc-open-cube-is-not-null
kind: lemma
title: A Nonempty Euclidean Open Set Is Not Null
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-null-and-content-zero-in-rn
  - thm-heine-borel-rn
  - def-multidimensional-rectangle-and-volume
  - def-finite-sum
  - def-series
  - lem-finite-sum-laws
  - thm-nonnegative-series-bounded-partial-sums
  - def-integer-power
  - thm-binomial-theorem
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Jiří Lebl, Basic Analysis II, Section 10.3, Outer Measure and Null Sets
      url: https://www.jirka.org/ra/html/sec_outermeasure.html
    - title: Jiří Lebl, Basic Analysis II, Section 10.1, Riemann Integral over Rectangles
      url: https://www.jirka.org/ra/html/sec_rirect.html
---

## Statement

For every integer $m\ge1$, every nonempty open subset $O\subseteq\mathbb R^m$ is not null in the closed-cube-cover sense of [[def-null-and-content-zero-in-rn]]. The proof uses no choice principle.

## Facts & Assumptions

**Given:** An integer $m\ge1$ and a nonempty Euclidean open set $O\subseteq\mathbb R^m$.

[F1] A set is null when, for every $\varepsilon>0$, a sequence of closed cubes covers it with total volume at most $\varepsilon$; nullity passes to subsets ([[def-null-and-content-zero-in-rn]]).

[F2] Every closed Euclidean box is compact, and the proof of Heine–Borel in $\mathbb R^m$ uses no choice principle ([[thm-heine-borel-rn]]).

[F3] A closed rectangle has volume equal to the product of its side lengths; finite coordinate cuts partition it into finitely many subrectangles whose volumes sum to its volume ([[def-multidimensional-rectangle-and-volume]]).

[F4] Finite sums are additive and monotone, and a finite subfamily of nonnegative terms is bounded by a partial sum through its largest index ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[F5] A nonnegative series whose partial sums are bounded by $B$ converges with sum at most $B$, and every partial sum is at most the series sum ([[thm-nonnegative-series-bounded-partial-sums]]).

[F6] For reals $x,y$ and natural $m$, $(x+y)^m=\sum_{r=0}^{m}\iota\binom mr x^r y^{m-r}$ where $\iota$ is the canonical embedding of naturals into $\mathbb R$ ([[thm-binomial-theorem]]).

## Proof

**Given:** As in Facts & Assumptions.

1.1 Choose $x\in O$ and $r>0$ with the Euclidean ball $B(x,r)\subseteq O$. Put $s=r/(2\sqrt m)>0$ and let $Q=\prod_{j=1}^m[x_j-s/2,x_j+s/2]$. For every $y\in Q$, $\|y-x\|_2\le\sqrt m\,s/2=r/4<r$, so $Q\subseteq O$ and $\operatorname{vol}(Q)=s^m>0$. [given, choose, algebra]

2.1 Suppose $O$ were null. By [F1], with $\varepsilon=s^m/4$ there is a sequence of closed cubes $C_i$ covering $Q$ whose side lengths $\ell_i\ge0$ have $\sum_i\ell_i^m\le s^m/4$. For each $i\ge0$, set $\delta_i=\min\{1,\,s^m2^{-i-5}/(3^m(1+\ell_i)^{m-1})\}$ and enlarge $C_i$ concentrically to an open cube $C_i'$ of side $\ell_i+2\delta_i$. By [F6] and $\delta_i\le1$, $0\le\Delta_i:=(\ell_i+2\delta_i)^m-\ell_i^m\le d_i:=s^m2^{-i-5}$. For every $N\ge0$, induction using the finite-sum recursion gives $\sum_{i<N}d_i=s^m(1-2^{-N})/16\le s^m/16$. Thus every partial sum of the nonnegative enlarged-cost sequence $b_i=(\ell_i+2\delta_i)^m=\ell_i^m+\Delta_i$ satisfies $\sum_{i<N}b_i\le s^m/4+s^m/16=5s^m/16$, by [F4] and [F5]. A second application of [F5] gives a convergent total enlarged-cost series with sum at most $5s^m/16<s^m/2$. [F1, F4, F5, F6, step 1.1, algebra, construct, induction]

3.1 The open cubes $C_i'$ cover the closed box $Q$, so [F2] gives a finite subcover $C_{i_1}',\ldots,C_{i_t}'$. Order its indices increasingly and take $N$ larger than the largest one. By [F4], the subcover's total cost is at most $\sum_{i<N}b_i$, which is at most $5s^m/16<s^m/2$ by step 2.1. [F2, F3, F4, step 2.1]

4.1 Write $\overline{C_i'}$ for the closed cube with the same center and side as $C_i'$, so $\operatorname{vol}(\overline{C_i'})=b_i$. Cut $Q$ and these finitely many closed covering cubes at all their coordinate endpoints. The positive-side grid cells inside $Q$ partition it; the interior of each cell lies in one covering cube because no covering-cube boundary crosses the cell. Assign each cell to the least index of a covering cube containing its interior. By finite cut-additivity from [F3], the assigned cells for each cube have total volume at most that closed cube's volume, while all cells sum to $\operatorname{vol}(Q)=s^m$. Thus $s^m\le\sum_{j=1}^t\operatorname{vol}(\overline{C_{i_j}'})<s^m/2$, a contradiction. Therefore $O$ is not null. [F3, step 1.1, step 3.1, contradiction] ∎
