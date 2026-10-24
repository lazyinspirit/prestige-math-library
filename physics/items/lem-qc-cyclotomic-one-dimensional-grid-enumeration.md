---
id: lem-qc-cyclotomic-one-dimensional-grid-enumeration
kind: lemma
title: One-dimensional quadratic grid enumeration and counting
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - def-qc-cyclotomic-bullet-automorphism
  - lem-integer-part
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations, Section 4
      url: https://arxiv.org/pdf/1403.2975
dependency_level: 2
---

## Statement

Put $\lambda=1+\sqrt2$. For bounded closed real intervals $I,J$, let $N$ count $\alpha\in\mathbb Z[\sqrt2]$ with $\alpha\in I$, $\alpha^\bullet\in J$, and put $P=|I||J|$. There is an explicit finite proposal list containing every solution once, with constant work per proposal, of length $O(N+1)$. If both lengths are positive its length is $O(P+1)$, and $N\ge P/(4\lambda^3)$ when $P\ge4\lambda^3$. The list has constant-size random-access data. Empty intervals give empty lists; singleton intervals are also allowed. Floor operations are specified as integer-part operations, and their comparison cost is charged separately, rather than assumed constant.

## Facts & Assumptions

**Given:** Closed bounded intervals and exact arithmetic/comparisons on their endpoints.

[F1] The automorphism sends $a+b\sqrt2$ to $a-b\sqrt2$ ([[def-qc-cyclotomic-bullet-automorphism]]).

[F2] Every real has an integer part ([[lem-integer-part]]).

## Proof

1.1 First suppose $I=[x_0,x_1]$, $J=[y_0,y_1]$ have positive lengths $\delta,\Delta$. Multiplication by the unit $\lambda^r$ on the first embedding and by $(-\lambda^{-1})^r$ on the second is a bijection of the grid solutions. Choose the integer $r$ so the new first length lies in $[\lambda^{-1},1)$, reversing the second interval's endpoints when necessary. This is done by taking an integer part of a logarithm and checking the endpoint inequalities; $P$ is unchanged. Work henceforth with the rescaled intervals. Every solution $a+b\sqrt2$ satisfies $(x_0-y_1)/(2\sqrt2)\le b\le(x_1-y_0)/(2\sqrt2)$. Enumerate the integers in this interval. For each $b$, the interval $[x_0-b\sqrt2,x_1-b\sqrt2]$ has length less than one, so its least integer is the only possible $a$; retain it only if both grid inequalities hold. No solution is duplicated or missed. The number of $b$ proposals is at most $1+(\delta+\Delta)/(2\sqrt2)=O(1+P)$ because $\lambda^{-1}\le\delta<1$ and $\Delta=P/\delta$. The integer endpoints and the affine formula for $b$ give random access to proposals. [F1, F2, given, construct, algebra]

2.1 Any pair of intervals whose length product is at least $\lambda^3$ contains a solution. Indeed, rescale as above, this time putting the first length in $[\lambda,\lambda^2)$; the second length is then greater than or equal to $\lambda$. For the two interval centers $x,y$, round $(x+y)/2$ and $(x-y)/(2\sqrt2)$ to their nearest integers $a,b$. Both errors $|a+b\sqrt2-x|$ and $|a-b\sqrt2-y|$ are at most $(1+\sqrt2)/2=\lambda/2$, so the rounded point satisfies both constraints. If $P\ge4\lambda^3$, put $q=\lfloor P/(2\lambda^3)\rfloor$. Divide $I$ into $q$ equal cells and use the concentric closed half of each cell. Each resulting interval paired with $J$ has length product $P/(2q)\ge\lambda^3$. Their disjointness gives $q$ distinct solutions, and $q\ge P/(4\lambda^3)$. Consequently the proposal bound in step 1.1 is $O(N+1)$, including the case $P<4\lambda^3$. [F1, F2, step 1.1, construct, algebra]

3.1 If $I$ is a singleton and $J$ has length $\Delta$, replace $I$ temporarily by the concentric interval of length $1/(\Delta+1)$ and test the original equality when filtering proposals. The product is at most one, so step 1.1 gives only constantly many proposals and contains all original solutions. Treat a singleton $J$ symmetrically; if both are singletons, enlarge both to length $1/2$. Empty intervals need no work. For all cases, restore the inverse unit scaling on retained points. Thus the asserted finite list and counting estimates hold without an unbounded search for a witness or a free floor oracle. [step 1.1, step 2.1, construct] ∎
