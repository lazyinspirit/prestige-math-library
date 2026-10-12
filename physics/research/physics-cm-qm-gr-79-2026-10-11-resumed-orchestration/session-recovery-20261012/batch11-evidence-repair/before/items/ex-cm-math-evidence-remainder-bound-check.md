---
id: ex-cm-math-evidence-remainder-bound-check
kind: example
title: "Equality and strictness in the uniform second-order remainder bound"
status: draft
origin: pipeline
domain: mathematics
deps: [def-convex-subset-of-euclidean-space, def-hessian-and-euclidean-critical-point, def-jacobian-matrix-and-gradient, def-operator-norm-on-a-finite-dimensional-inner-product-space, lem-cm-uniform-second-order-remainder-bound, lem-derivative-of-a-power]
dependency_roles:
  def-convex-subset-of-euclidean-space: mathematical-premise
  def-hessian-and-euclidean-critical-point: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-operator-norm-on-a-finite-dimensional-inner-product-space: mathematical-premise
  lem-cm-uniform-second-order-remainder-bound: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
dependency_level: 1
proof_strategy: direct computation
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "K. Bryan, Taylor's Theorem in One and Several Variables (Rose-Hulman MA 433 lecture notes), the second-order case in n dimensions (equation (8)) and the Hessian matrix form 1/2 (x-a)^T H(b) (x-a)"
      url: "https://www.rose-hulman.edu/~bryan/lottamath/mtaylor.pdf"
verification:
  precheck: pass
---

## Example

Two explicit one-variable cases of
[[lem-cm-uniform-second-order-remainder-bound]].

**A quadratic on an interval.** Let $h(y):=y^2$ on the open convex set
$U=(-1,3)$ and fix $\mu=1$. Then $h$ is $C^2$ with constant Hessian $(2)$, so
$\lVert H_h(y)\rVert=2$ for every $y\in U$ and $B=2$ is the sharp constant.
For every $y\in U$,
$$h(y)-h(1)-h'(1)(y-1)=y^2-1-2(y-1)=(y-1)^2 =\frac{B}{2}\lvert y-1\rvert^2,$$
so the inequality of the lemma is an equality for every $y\in U$.

**A cubic on an interval.** Let $g(y):=y^3$ on the open convex set
$V=(-1,2)$ and fix $\mu=1/2$. Then $g$ is $C^2$ with Hessian $(6y)$, and
$\lVert H_g(y)\rVert=\lvert6y\rvert\le12$ on $V$, so $B=12$ is an admissible
constant. At $y=1$,
$$g(1)-g\Bigl(\frac12\Bigr)-g'\Bigl(\frac12\Bigr)\Bigl(1-\frac12\Bigr) =1-\frac18-\frac34\cdot\frac12=\frac12 \le\frac{12}{2}\Bigl(\frac12\Bigr)^2=\frac32 ,$$
so the bound holds strictly at this point. Both computations are formal and
assert nothing beyond the stated intervals.

## Facts & Assumptions

**Given:** The functions $h(y)=y^2$ on $U=(-1,3)$ and $g(y)=y^3$ on $V=(-1,2)$ with the points indicated.

[L1] If $U$ is open and convex, $h:U\to\mathbb R$ is $C^2$, and $\lVert H_h(x)\rVert\le B$ on $U$, then $\lvert h(y)-h(\mu)-h'(\mu)(y-\mu)\rvert\le\frac{B}{2}\lvert y-\mu\rvert^2$ for all $\mu,y\in U$. ([[lem-cm-uniform-second-order-remainder-bound]])

[L2] The derivatives of $y^2$ and $y^3$ are $2y$ and $3y^2$, and the Hessian of a one-variable $C^2$ function is the $1\times1$ matrix of its second derivative. ([[lem-derivative-of-a-power]], [[def-hessian-and-euclidean-critical-point]], [[def-jacobian-matrix-and-gradient]])

[L3] For a $1\times1$ matrix $(a)$ the operator norm is $\lvert a\rvert$. ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]])

[L4] The intervals $(-1,3)$ and $(-1,2)$ are open and convex subsets of $\mathbb R$. ([[def-convex-subset-of-euclidean-space]])

## Verification

**Proof technique:** direct computation.

1.1 On $U=(-1,3)$ the second derivative of $h$ is the constant $2$, so $H_h=(2)$ and $\lVert H_h\rVert=2$ by [L2] and [L3]; $U$ is open and convex by [L4]. [given, L2, L3, L4]

1.2 On $V=(-1,2)$ the second derivative of $g$ is $6y$, so $H_g(y)=(6y)$ and $\lVert H_g(y)\rVert=\lvert6y\rvert\le12$ for $\lvert y\rvert<2$; $V$ is open and convex by [L4]. [given, L2, L3, L4, algebra]

2.1 For $h$ with $\mu=1$ and $B=2$, the difference in the Example equals $(y-1)^2$ by expansion, and the bound of [L1] is $\frac{2}{2}(y-1)^2$, so equality holds for every $y\in U$. [step 1.1, given, L1, algebra]

2.2 For $g$ with $\mu=1/2$ and $B=12$, the difference at $y=1$ is $1-\frac18-\frac38=\frac12$, while the bound of [L1] is $\frac{12}{2}\cdot\frac14=\frac32$, and $\frac12<\frac32$. [step 1.2, given, L1, algebra]

3.1 Step 2.1 exhibits equality in the bound, and step 2.2 exhibits strict inequality, so both alternatives occur under the lemma's hypotheses. [step 2.1, step 2.2] ∎
