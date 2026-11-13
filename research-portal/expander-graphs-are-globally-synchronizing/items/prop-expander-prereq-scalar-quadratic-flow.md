---
id: prop-expander-prereq-scalar-quadratic-flow
kind: proposition
title: Explicit scalar quadratic descent and its forward domain
domain: mathematics
status: draft
origin: pipeline
deps:
  - math:def-first-order-ode-initial-value-problem-and-solution
  - math:thm-picard-lindelof-local-existence-and-uniqueness
  - math:lem-derivative-algebra-and-chain-rules
  - math:def-countable-choice
  - math:thm-lebesgue-measure-of-a-box-of-every-kind
  - math:def-locally-lipschitz-in-the-state-variable
  - math:def-limits-at-infinity
  - math:def-one-sided-limits
  - math:def-vector-valued-derivative-and-integral
  - math:def-euclidean-inner-product
  - math:thm-cauchy-schwarz-and-the-euclidean-norm
dependency_roles:
  math:def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  math:thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  math:lem-derivative-algebra-and-chain-rules: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  math:def-locally-lipschitz-in-the-state-variable: mathematical-premise
  math:def-limits-at-infinity: mathematical-premise
  math:def-one-sided-limits: mathematical-premise
  math:def-vector-valued-derivative-and-integral: mathematical-premise
  math:def-euclidean-inner-product: mathematical-premise
  math:thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

Let $a>0$ and $x_0\in\mathbb R$. A solution means a differentiable real-valued function on an interval containing $0$ that satisfies $\dot x=-ax^2$ and $x(0)=x_0$. On the largest open interval containing $0$ on which $1+ax_0t\ne0$, the unique solution is $x(t)=x_0/(1+ax_0t)$. If $x_0\ge0$, it exists for all $t\ge0$ and tends to zero as $t\to\infty$. If $x_0<0$, its maximal forward interval is $[0,-1/(ax_0))$.

For finitely many independent coordinates $\dot x_i=-a_i x_i^2$, where $n\ge1$ and every $a_i>0$, every initial point in $(0,\infty)^n$ has a forward solution converging to the origin. For vector solutions, convergence to the origin as $t\to\infty$ means that for every $\varepsilon>0$ there is $T\ge0$ such that $\|x(t)\|_2<\varepsilon$ for all $t>T$, where $\|z\|_2=(\sum_{i=1}^n z_i^2)^{1/2}$ is the Euclidean norm. Here the attraction region of the origin is the set of initial points in $\mathbb R^n$ whose unique solutions exist for every $t\ge0$ and converge to the origin as $t\to\infty$. Assuming countable choice, the attraction region contains the positive-Lebesgue-measure box $(0,1)^n$. This attraction conclusion is a dynamical statement and does not require a second-order classification of the origin.

## Facts & Assumptions

**Given:** The coefficients, initial values and independent equations in the Statement; countable choice is assumed for the measure assertion.

[F1] A solution of an initial-value problem is a differentiable function on an interval containing the initial time and satisfying the equation and initial condition ([[math:def-first-order-ode-initial-value-problem-and-solution]]).

[F2] A continuous vector field that is locally Lipschitz in its state variable has a unique local solution; any two solutions through the same initial data agree on every common interval containing the initial time ([[math:def-locally-lipschitz-in-the-state-variable]], [[math:thm-picard-lindelof-local-existence-and-uniqueness]]).

[F3] The sum, product, quotient and chain rules apply to differentiable real functions where the relevant denominator is nonzero ([[math:lem-derivative-algebra-and-chain-rules]]).

[F4] Under countable choice, an $n$-dimensional open box is Lebesgue measurable and its measure is the product of its side lengths ([[math:def-countable-choice]], [[math:thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F5] Local Lipschitz continuity in the state variable, locally uniform in time, means that every compact time-state cylinder in the open domain has one finite state-Lipschitz constant ([[math:def-locally-lipschitz-in-the-state-variable]]).

[F6] Convergence as $t\to+\infty$ uses the real $\varepsilon$-threshold condition. A one-sided infinite limit at $T$ is the infinite-limit condition on the restriction to $t<T$ or $t>T$, with $T$ a limit point of that restricted domain ([[math:def-limits-at-infinity]], [[math:def-one-sided-limits]]).

[F7] A function from a nondegenerate real interval to $\mathbb R^n$ is differentiable if and only if all its components are differentiable, and its derivative has those component derivatives; this includes domain-relative endpoint derivatives ([[math:def-vector-valued-derivative-and-integral]]).

[F8] For $z\in\mathbb R^n$, the Euclidean norm is $\|z\|_2=(\sum_{i=1}^n z_i^2)^{1/2}$, so it is nonnegative and $\|z\|_2^2=\sum_{i=1}^n z_i^2$; it is a norm inducing the Euclidean metric ([[math:def-euclidean-inner-product]], [[math:thm-cauchy-schwarz-and-the-euclidean-norm]]).

## Proof

**Given:** The coefficients, initial values and independent equations in the Statement; countable choice is assumed for the measure assertion.

**Proof technique:** direct.

**Goal:** Establish the explicit solutions, their maximal intervals and the attraction assertion.

1.1 The field $f(x)=-ax^2$ is continuous and locally Lipschitz: for $|x|,|y|\le R$, $|f(x)-f(y)|\le2aR|x-y|$. Thus [F2] applies. On the stated open interval the quotient rule gives $\frac{d}{dt}\frac{x_0}{1+ax_0t}=-\frac{ax_0^2}{(1+ax_0t)^2}=-a\left(\frac{x_0}{1+ax_0t}\right)^2$, and the value at zero is $x_0$. It is therefore a solution by [F1], and [F2] makes every other solution agree with it on their common interval containing zero. [given, F1, F2, F3, F5]

2.1 If $x_0=0$, the formula is identically zero. If $x_0>0$, its denominator is at least one for $t\ge0$ and the quotient tends to zero. If $x_0<0$, put $T=-1/(ax_0)>0$; the formula is defined for $0\le t<T$ and tends to $-\infty$ as $t\uparrow T$. A real-valued differentiable solution on an interval extending beyond $T$ would be continuous at $T$ and, by uniqueness, equal the formula for $0\le t<T$, a contradiction. Hence its maximal forward interval is $[0,T)$. The same pole argument at the finite endpoint also shows that the stated open interval is maximal when $x_0>0$; for $x_0=0$ it is all of $\mathbb R$. [given, F2, F3, F6, step 1.1]

3.1 Apply steps 1.1 and 2.1 to each coordinate with initial values $x_{i,0}>0$. The intersection $I$ of their finitely many open solution intervals is an open interval containing $0$ and all $t\ge0$. On $I$, put $x(t)=(x_i(t))_{i=1}^n$, with $x_i(t)=x_{i,0}/(1+a_ix_{i,0}t)$. By [F7] this is a differentiable vector function with $x'(t)=(-a_ix_i(t)^2)_{i=1}^n$, so [F1] makes it a solution of the vector initial-value problem. Conversely, [F7] makes every component of any other vector solution a scalar solution; scalar uniqueness from step 1.1 gives agreement on every common interval containing $0$. [given, F1, F7, step 1.1, step 2.1]

4.1 Fix $\varepsilon>0$. For each $i$, scalar convergence from step 2.1 and [F6] give $T_i\ge0$ such that $|x_i(t)|<\varepsilon/n$ for all $t>T_i$. Choose these finitely many thresholds and take their maximum $T$; this finite choice uses no countable-choice assumption. For $t>T$, [F8] gives $\|x(t)\|_2^2=\sum_{i=1}^n x_i(t)^2<n(\varepsilon/n)^2=\varepsilon^2/n\le\varepsilon^2$. Since both the norm and $\varepsilon$ are nonnegative, $\|x(t)\|_2<\varepsilon$. This is exactly the vector convergence condition in the Statement. [given, F6, F8, step 2.1, step 3.1, algebra]

5.1 By the definition in the Statement, these forward solutions place $(0,1)^n$ in the attraction region; the box has Lebesgue measure $1$ by [F4]. No second-order classification entered this argument. [given, F4, step 3.1, step 4.1] ∎
