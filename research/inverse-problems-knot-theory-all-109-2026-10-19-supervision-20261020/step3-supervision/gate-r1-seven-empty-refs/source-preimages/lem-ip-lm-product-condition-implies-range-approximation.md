---
id: lem-ip-lm-product-condition-implies-range-approximation
kind: lemma
title: Product condition gives the LM range-approximation bound
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-product-tangential-cone-condition
  - def-ip-nonlinear-forward-map
  - def-hilbert-space
  - def-frechet-derivative-between-banach-spaces
  - cor-inner-product-induces-a-norm
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, Assumption 11.10 and proof of Theorem 11.11"
      url: "https://arxiv.org/pdf/2001.00617v2"
verification:
  precheck: pending
---

## Statement

Let $X,Y$ be real Hilbert spaces, let $U\subseteq X$ be open, and let
$F:U\to Y$ be Fréchet differentiable at every point of $U$ with
$x\mapsto F'(x)$ continuous in operator norm. Let $V\subseteq U$ and let
$c>0$ be such that, for every $u,\tilde u\in V$,
$$\|F(u)-F(\tilde u)-F'(u)(u-\tilde u)\|_Y\le c\|u-\tilde u\|_X\|F(u)-F(\tilde u)\|_Y.$$
Suppose
$x^\dagger,x\in V$, $F(x^\dagger)=y$, $\|y^\delta-y\|_Y\le\delta$ with
$\delta\ge0$, $\tau>0$, and $\|x-x^\dagger\|_X\le e$. If
$R:=\|F(x)-y^\delta\|_Y>\tau\delta$, then

$$\|F'(x)(x^\dagger-x)+F(x)-y^\delta\|_Y\le\frac{1+ce(1+\tau)}{\tau}R.$$

In particular, if $\sigma\in(0,1)$, $e\le e_0$, and
$$\gamma:=\frac{\sigma\tau}{1+ce_0(1+\tau)}>1,$$
then
$$\|F'(x)(x^\dagger-x)+F(x)-y^\delta\|_Y\le\frac{\sigma}{\gamma}R.$$

## Statement references

[[def-ip-product-tangential-cone-condition|Product-type tangential cone condition]]

[[def-ip-nonlinear-forward-map|Nonlinear forward map and exact-data convention]]

[[def-hilbert-space|Real Hilbert spaces and their induced norms]]

[[def-frechet-derivative-between-banach-spaces|Fréchet differentiability and operator-norm derivative]]

[Christian Clason, *Regularization of Inverse Problems*, Assumption 11.10 and proof of Theorem 11.11](https://arxiv.org/pdf/2001.00617v2)

## Facts & Assumptions

**Given:** The spaces, map, set, constant, exact solution, datum, noise bound, $\tau$, and points in the Statement.

[F1] For $x,\tilde x\in V$, the product condition gives
$$\|F(x)-F(\tilde x)-F'(x)(x-\tilde x)\|_Y\le c\|x-\tilde x\|_X\|F(x)-F(\tilde x)\|_Y$$
([[def-ip-product-tangential-cone-condition]]).

[F2] The exact-data convention is $F(x^\dagger)=y$ ([[def-ip-nonlinear-forward-map]]); the noise bound $\|y^\delta-y\|_Y\le\delta$ is an additional hypothesis in the Statement.

[F3] The induced real Hilbert norm satisfies the triangle inequality ([[cor-inner-product-induces-a-norm]]).

## Proof



1.1 Set $E:=F(x)-F(x^\dagger)-F'(x)(x-x^\dagger)$. By [F1] with $\tilde x=x^\dagger$ and the point-distance bound, $\|E\|_Y\le ce\|F(x)-y\|_Y$. [given, F1, construct, algebra]

2.1 The target residual equals $E+(y-y^\delta)$. Also [F3] gives $\|F(x)-y\|_Y\le R+\delta$. Therefore [F3] and [F2] yield $\|F'(x)(x^\dagger-x)+F(x)-y^\delta\|_Y\le ce(R+\delta)+\delta.$ [given, F2, F3, step 1.1, algebra]

3.1 Since $R>\tau\delta$ and $\tau>0$, $\delta<R/\tau$. Substituting into step 2.1 and collecting the coefficient of $R$ gives $ce(R+\delta)+\delta\le\left(ce\left(1+\frac1\tau\right)+\frac1\tau\right)R=\frac{1+ce(1+\tau)}{\tau}R,$ which is the first conclusion. [given, step 2.1, algebra]

4.1 If $e\le e_0$, then $1+ce(1+\tau)\le1+ce_0(1+\tau)=\sigma\tau/\gamma$. Applying this inequality to step 3.1 proves the stated $\sigma/\gamma$ range-approximation bound. [given, step 3.1, algebra] ∎
## Remarks

No choice principle is used: the proof applies the product condition to the two fixed points in the hypotheses and then uses norm inequalities.
