---
id: cex-cyclic-block-descent-may-cycle-outside-hypotheses
kind: counterexample
title: "Cyclic exact block minimization can cycle outside the convex separable hypotheses"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-cyclic-exact-block-minimization
  - def-extended-reals
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - lem-finite-set-has-max
  - def-metric-topology
  - def-metric-ball
generation:
  role: counterexample
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Stephen J. Wright, Coordinate Descent Algorithms, §3.1"
      url: "https://arxiv.org/html/1502.04759v1"
    - title: "P. Tseng, Convergence of a Block Coordinate Descent Method for Nondifferentiable Minimization, §1"
      url: "https://www.mit.edu/~dimitrib/PTseng/papers/archive/bcr_jota.pdf"
---

## Statement refuted

The claim that every infinite continuation of the cyclic exact block-minimization update rule for an arbitrary nonconvex, nonseparable extended-real objective converges to one point is false when block minimizers are nonunique and the allowed tie choices vary by update.

## Witness

Let $C=\{(0,0),(2,0),(2,2),(1,2),(1,1),(0,1)\}\subset\mathbb R^2$ and let $F$ be its indicator: $F=0$ on $C$ and $F=+\infty$ off $C$. This is a finite, closed but nonconvex, nonseparable domain. Use singleton blocks in the order $x,y$ and start at $(0,0)$. Any finite sweep budget follows the corresponding prefix of the periodic tie-selection rule; three sweeps complete one six-update period.

## Facts & Assumptions

**Given:** The objective, blocks and starting point in the Counterexample.

[F1] [[alg-cyclic-exact-block-minimization]]: at each update the selected coordinate is replaced by any global minimizer of the current coordinate slice.

[F2] [[def-extended-reals]]: the indicator values $0$ and $+\infty$ give the extended-real objective and its finite domain.

[F3] [[def-euclidean-inner-product]] and [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean norm induces the usual metric and satisfies the triangle inequality; [[lem-finite-set-has-max]]: a nonempty finite set of positive reals has a positive minimum; [[def-metric-topology]] and [[def-metric-ball]]: open balls form neighborhoods in which closedness is tested.

## Proof

1.1 At $y=0$, the feasible $x$ values are $0$ and $2$, and both minimize the slice with value $0$; choose $x=2$. At $x=2$, the feasible $y$ values are $0$ and $2$, and both minimize; choose $y=2$. [F1, F2, given, choose]

2.1 At $y=2$, choose $x=1$ from the two minimizing values $1,2$. At $x=1$, choose $y=1$ from the two minimizing values $1,2$. At $y=1$, choose $x=0$ from the two minimizing values $0,1$. At $x=0$, choose $y=0$ from the two minimizing values $0,1$. Thus one six-update cycle returns to $(0,0)$, and repeating the same admissible tie choices gives a period-six trajectory. [F1, F2, step 1.1, choose]

3.1 Every point in the trajectory lies in $C$ and has objective $0$, so every coordinate update described in steps 1.1 and 2.1 is an exact global block minimization. The set $C$ is closed: for any $z\notin C$, the finitely many distances $\{\|z-c\|_2:c\in C\}$ are positive, so [F3] gives a positive minimum $\delta$; if $\|w-z\|_2<\delta/2$, the triangle inequality gives $\|w-c\|_2\ge\|z-c\|_2-\|w-z\|_2>\delta/2$ for every $c\in C$. Thus the open ball of radius $\delta/2$ about $z$ misses $C$. The set is nonconvex because $(0,0),(2,0)\in C$ but their midpoint $(1,0)\notin C$. It is not a Cartesian product of its coordinate projections: both projections are $\{0,1,2\}$, whose product has nine points, whereas $C$ has six. If $F(x,y)=h(x)+k(y)$ for functions $h,k$ taking values in $\mathbb R\cup\{+\infty\}$, its finite domain consists exactly of pairs where $h$ and $k$ are each finite, hence is a Cartesian product. Thus $F$ is nonseparable. [F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 In the infinite continuation of the finite-budget prefixes, the trajectory does not converge: the subsequences at updates $6m$ and $6m+1$ are constantly $(0,0)$ and $(2,0)$, respectively, and those limits differ. Repeating the six admissible choices therefore gives a nonconvergent cyclic exact-minimization trajectory. [F1, step 1.1, step 2.1, step 3.1, algebra] ∎

## Remarks

The example has a nonconvex, nonseparable objective and nonunique block minimizers. It lies outside [[thm-cyclic-block-descent-stationarity-and-convergence]]; the convergence theorem does not assert convergence for this case.
