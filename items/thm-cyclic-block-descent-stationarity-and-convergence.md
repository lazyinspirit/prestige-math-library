---
id: thm-cyclic-block-descent-stationarity-and-convergence
kind: theorem
title: "Cyclic exact block descent has globally optimal accumulation points"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-cyclic-exact-block-minimization
  - lem-cyclic-block-minimizer-value-continuity
  - lem-coordinatewise-minimum-implies-composite-stationarity
  - lem-smooth-composite-sum-preserves-proper-closed-convexity
  - thm-euclidean-semicontinuous-extreme-value-theorem
  - thm-compact-implies-the-other-compactness-forms
  - thm-infimum-property
  - lem-inf-epsilon
  - def-proper-closed-convex-function-on-rn
  - thm-compact-subset-is-closed-and-bounded
  - def-c-one-map-and-local-inverse
  - thm-total-differentiability-gives-a-local-linear-bound-and-continuity
  - thm-recursion
  - thm-well-ordering-principle
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "P. Tseng, Convergence of a Block Coordinate Descent Method for Nondifferentiable Minimization, §§4–5"
      url: "https://www.mit.edu/~dimitrib/PTseng/papers/archive/bcr_jota.pdf"
    - title: "Amir Beck, First-Order Methods in Optimization, Theorem 14.9 and proof"
      url: "https://epubs.siam.org/doi/book/10.1137/1.9781611974997"
---

## Statement

Let $F(x)=f(x)+g(x)$ on $\mathbb R^d$, where $f:\mathbb R^d\to\mathbb R$ is convex and continuously differentiable, and $g(x)=\sum_i g_i(x_{B_i})$ is proper closed convex with each $g_i$ proper closed convex. Assume $F(x^0)<+\infty$ and the initial sublevel set $S=\{x:F(x)\le F(x^0)\}$ is compact. Suppose every exact block minimizer on the visited sublevel exists uniquely and the resulting block-minimizer maps are continuous. Then every accumulation point of any indefinitely continued cyclic full-sweep run of [[alg-cyclic-exact-block-minimization]] is coordinatewise minimizing, satisfies $0\in\nabla f(x)+\partial g(x)$, and is a global minimizer of $F$. If the global minimizer is unique, the full sequence, including within-sweep iterates, converges to it. The theorem uses the unique-continuous-minimizer branch of the pair design; it makes no claim for arbitrary nonconvex or nonseparable nonsmooth updates.

## Facts & Assumptions

**Given:** The objective, compact sublevel and block-minimizer hypotheses in the Statement.

[F1] [[alg-cyclic-exact-block-minimization]]: a sweep minimizes each block in order and leaves the other blocks unchanged.

[F2] [[lem-cyclic-block-minimizer-value-continuity]]: with continuous unique block-minimizer maps, the value of each block minimum is continuous in the other coordinates.

[F3] [[lem-coordinatewise-minimum-implies-composite-stationarity]]: a coordinatewise minimum of this convex separable composite is stationary and globally minimizing.

[F4] [[lem-smooth-composite-sum-preserves-proper-closed-convexity]]: adding the finite continuous convex function $f$ to proper closed convex $g$ preserves properness, convexity and closed epigraph.

[F5] [[thm-euclidean-semicontinuous-extreme-value-theorem]]: a real-valued lower-semicontinuous function on a nonempty compact Euclidean set is bounded below and attains its minimum.

[F6] [[thm-compact-implies-the-other-compactness-forms]]: every sequence in a compact metric space has a convergent subsequence; the theorem proves this implication without a choice principle.

[F7] [[thm-infimum-property]] and [[lem-inf-epsilon]]: a nonempty real set bounded below has an infimum, and elements lie arbitrarily close above it.

[F8] [[thm-compact-subset-is-closed-and-bounded]]: a compact subset of a metric space is closed, so ambient limits of iterates in $S$ remain in $S$.

[F9] [[def-c-one-map-and-local-inverse]] and [[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]]: the $C^1$ hypothesis makes $f$ continuous, as required by [F4].

[F10] [[thm-well-ordering-principle]] and [[thm-recursion]]: a recursively defined subsequence can choose the least next natural index in any nonempty set of admissible indices.

[F11] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean norm is continuous, so a limit of points outside a fixed open ball remains outside that ball's interior.

[A1] The maps for the exact block minimizers are single-valued and continuous on the states in $S$; every finite update is exact.

## Proof

1.1 By [F1], $F$ is nonincreasing at every block update, so all cycle and within-cycle iterates remain in $S$. By [F9], $f$ is continuous, so [F4] makes $F$ lower semicontinuous; it is real-valued on $S$ because $F\le F(x^0)<+\infty$. Thus [F5] bounds it below on $S$. By [F7], $L=\inf_k F(x^k)$ is real; for each $\varepsilon>0$, [F7] gives $j$ with $F(x^j)<L+\varepsilon$, and monotonicity then gives $L\le F(x^k)\le F(x^j)<L+\varepsilon$ for all $k\ge j$. Hence the full-sweep values tend to $L$. [A1, F1, F4, F5, F7, F9, given, algebra]

2.1 Fix any accumulation point $\bar x$ of the full-sweep iterates and a subsequence $x^{k_j}\to\bar x$. Since $S$ is compact, [F8] makes it closed and therefore $\bar x\in S$. The intermediate states $y_j^0=x^{k_j},y_j^1,\ldots,y_j^n=x^{k_j+1}$ satisfy $F(x^{k_j})\ge F(y_j^i)\ge F(x^{k_j+1})$. Both endpoint values tend to $L$, so every intermediate value tends to $L$. By [A1] and continuity of the finitely many block maps, each $y_j^i$ converges to a limit $\bar y^i$, with $\bar y^0=\bar x$. [A1, F1, F8, step 1.1, given]

3.1 Fix $i$. Let $a_j$ be the coordinates other than block $i$ in $y_j^{i-1}$, and let $u_j^-$ and $u_j^+$ be its block-$i$ coordinates before and after the update. Then $a_j\to\bar a$, $u_j^-\to\bar u^-$, and $u_j^+\to\bar u^+$ by step 2.1; exactness gives $u_j^+=T_i(a_j)$. Write $m_i(a)=\min_u\{f(a,u)+g_i(u)\}$. Since the other penalties cancel, the objective decrease is $d_j=f(a_j,u_j^-)+g_i(u_j^-)-m_i(a_j)$, and $d_j\to0$ because the two intermediate objective values both tend to $L$. By [F2], $m_i(a_j)\to m_i(\bar a)$; continuity of $f$ and lower semicontinuity of $g_i$ imply $f(\bar a,\bar u^-)+g_i(\bar u^-)\le m_i(\bar a)$. The reverse inequality follows from the minimum definition, so $u^-=T_i(\bar a)$ by uniqueness. Continuity of $T_i$ gives $\bar u^+=T_i(\bar a)=\bar u^-$, hence $\bar y^i=\bar y^{i-1}$. [A1, F1, F2, step 2.1, algebra]

4.1 Applying step 3.1 for $i=1,\ldots,n$ shows every within-sweep limit equals $\bar x$ and that $\bar x$ minimizes every block slice. Since $\bar x\in S$ and $F(x^0)<+\infty$, $F(\bar x)<+\infty$. By [F3], $\bar x$ satisfies the composite stationarity condition and is globally minimizing. Since $\bar x$ was arbitrary, every accumulation point is global. [A1, F3, step 3.1, algebra]

5.1 The sequence lies in compact $S$, so [F6] supplies an accumulation point. If the global minimizer is unique, step 4.1 makes it the only possible accumulation point. Fix $\varepsilon>0$. If infinitely many full-sweep indices lay outside the open $\varepsilon$-ball about that minimizer, start with the least such index and recursively choose the least later such index; infinitude makes each candidate set nonempty, while [F10] supplies the least indices and constructs the sequence. By [F6] it has a convergent subsequence with limit in $S$, and [F11] keeps that limit outside the ball, producing a different accumulation point. Thus all sufficiently late full-sweep iterates lie in the ball. For a fixed within-sweep position, suppose a subsequence of those states converges to $y$. Its cycle-start subsequence lies in compact $S$, so [F6] supplies a further subsequence converging to some $x\in S$; steps 2.1 and 3.1 show that the corresponding within-sweep states also converge to $x$, hence $y=x$ and is a full-sweep accumulation point. Therefore every convergent subsequence of within-sweep states has the unique minimizer as its limit. If infinitely many states at that position lay outside the ball, the least-index recursion and [F6] would give a convergent subsequence whose limit remains outside by [F11], a contradiction. Hence each within-sweep sequence converges to the unique minimizer as well. [F6, F10, F11, step 2.1, step 3.1, step 4.1, algebra] ∎

