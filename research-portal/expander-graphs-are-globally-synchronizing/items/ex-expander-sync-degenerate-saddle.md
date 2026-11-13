---
id: ex-expander-sync-degenerate-saddle
title: Positive-measure attraction to a degenerate saddle
kind: example
domain: mathematics
status: published
origin: pipeline
deps:
  - prop-expander-prereq-scalar-quadratic-flow
  - math:def-hessian-and-euclidean-critical-point
  - math:lem-derivative-algebra-and-chain-rules
  - math:def-countable-choice
  - math:thm-lebesgue-measure-of-a-box-of-every-kind
  - math:def-first-order-ode-initial-value-problem-and-solution
dependency_roles:
  prop-expander-prereq-scalar-quadratic-flow: mathematical-premise
  math:def-hessian-and-euclidean-critical-point: mathematical-premise
  math:lem-derivative-algebra-and-chain-rules: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  math:def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 3, footnote 3
      statement: For $U(x,y)=x^3+y^3$, the article gives convergence to the saddle
        $(0,0)$ from every point in the positive quadrant.
      hypotheses: The negative-gradient dynamics discussed in the surrounding text,
        with initial point in the positive quadrant.
      reading_limits: PDF page 3, including the rendered footnote and surrounding
        passage, was inspected. The reference attributes the example; the
        verification below is local and does not use the article as a proof.
dependency_level: 1
---

## Example

Let $U:\mathbb R^2\to\mathbb R$ be $U(x,y)=x^3+y^3$. Its negative-gradient flow is the system $\dot x=-\partial_x U$, $\dot y=-\partial_y U$; a trajectory means a differentiable solution on an open interval containing $0$ that admits no extension as a solution to a larger such interval. The origin is a degenerate saddle: it is a critical point, its Hessian is the zero matrix, and every neighborhood of it contains points where $U$ is greater than $U(0,0)$ and points where $U$ is less. Every trajectory starting in the positive quadrant $(0,\infty)^2$ exists for all forward time and converges to $(0,0)$. Assuming countable choice, the set of such initial points contains a Lebesgue-measurable box of positive measure.

## Example references

[[math:def-first-order-ode-initial-value-problem-and-solution]]

[[math:def-hessian-and-euclidean-critical-point]]

[[prop-expander-prereq-scalar-quadratic-flow]]

[[math:def-countable-choice]]

[[math:thm-lebesgue-measure-of-a-box-of-every-kind]]

## Facts & Assumptions

**Given:** The function $U$ and its negative-gradient system in the example. Countable choice is assumed for the measure assertion.

**Goal:** Verify the saddle properties, forward convergence, and the positive-measure assertion.

[F1] A critical point has zero gradient, and the Hessian is the matrix of second partial derivatives ([[math:def-hessian-and-euclidean-critical-point]]).

[F2] The power, sum, and product rules give the indicated derivatives of polynomials ([[math:lem-derivative-algebra-and-chain-rules]]).

[F3] For $\dot u=-au^2$ with $a>0$ and $u(0)=u_0>0$, the unique maximal solution is $u(t)=u_0/(1+au_0t)$ on $(-1/(au_0),\infty)$. Finitely many independent such coordinates give forward solutions converging to zero. Assuming countable choice, their attraction region contains the positive-measure box $(0,1)^n$ ([[prop-expander-prereq-scalar-quadratic-flow]], [[math:def-countable-choice]]).

[F4] Assuming countable choice, for $n\ge1$ and real endpoints $a_i\le b_i$, an open box $\prod_{i<n}(a_i,b_i)$ is Lebesgue measurable with measure $\prod_{i<n}(b_i-a_i)$ ([[math:thm-lebesgue-measure-of-a-box-of-every-kind]], [[math:def-countable-choice]]).

[F5] For an open set $D\subseteq\mathbb R\times\mathbb R^n$ and a map $F:D\to\mathbb R^n$, a solution with initial data $(0,z_0)\in D$ is a differentiable map $z:I\to\mathbb R^n$ on an interval containing $0$, satisfying $(t,z(t))\in D$, $z(0)=z_0$, and $z^{\prime}(t)=F(t,z(t))$ for every $t\in I$. Here take $n=2$, $D=\mathbb R\times\mathbb R^2$, $z=(x,y)$, and $F(t,z)=(-\partial_x U(x,y),-\partial_y U(x,y))$; this system equation means that both coordinate equations hold ([[math:def-first-order-ode-initial-value-problem-and-solution]]).

## Verification

**Proof technique:** direct.

1.1 By the polynomial derivative rules, $\nabla U(x,y)=(3x^2,3y^2)$ and $\nabla^2 U(x,y)=\begin{pmatrix}6x&0\\0&6y\end{pmatrix}$. Thus the origin is critical and its Hessian is zero. For every $\varepsilon>0$, the points $(t,0)$ and $(-t,0)$ with $0<t<\varepsilon$ are within $\varepsilon$ of the origin, while their respective values are $t^3>0$ and $-t^3<0$. This proves the stated saddle property. [F1, F2, algebra]

2.1 The negative-gradient equations are $\dot x=-3x^2$ and $\dot y=-3y^2$. For initial data $(x_0,y_0)\in(0,\infty)^2$, [F3] gives $x(t)=x_0/(1+3x_0t)$ and $y(t)=y_0/(1+3y_0t)$. The intersection of their maximal intervals is $I=(\max\{-1/(3x_0),-1/(3y_0)\},\infty)$. The pair of formulas is a solution on $I$ by [F5]; scalar uniqueness makes any solution with these initial data agree with the formulas wherever both are defined. The coordinate whose pole is the left endpoint of $I$ cannot extend across that endpoint, by scalar maximality. Hence the pair is the unique maximal trajectory. Its domain contains every $t\ge0$, and each coordinate tends to zero as $t\to\infty$. [given, F3, F5, step 1.1]

3.1 By step 2.1 every initial point of $(0,1)^2$ has a trajectory converging to the origin. Under countable choice, [F4] with $n=2$ and endpoints $a_0=a_1=0$, $b_0=b_1=1$ makes this box Lebesgue measurable with measure $(1-0)(1-0)=1>0$. This proves the positive-measure assertion. [given, F4, step 2.1, algebra] ∎

## Source notes

The example is attributed to the article's footnote 3. Its verification above uses the stated mathematical suppliers and direct calculation.
