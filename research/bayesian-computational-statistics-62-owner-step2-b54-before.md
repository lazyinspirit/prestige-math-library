---
id: ex-exchangeable-two-sample-permutation-test
kind: example
title: "A tied two-sample Bernoulli permutation test"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-measurable-finite-group-permutation-setup
  - def-measurable-finite-group-orbit-pvalues
  - alg-random-permutation-monte-carlo-pvalue
  - def-finite-probability-space-and-event
  - thm-finite-group-permutation-validity
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
---

## Example

Let $\Omega=\{0,1\}^2$, and for $q\in[0,1]$ assign the four vectors masses
$$P_q(0,0)=(1-q)^2,\quad P_q(0,1)=q(1-q),\quad P_q(1,0)=q(1-q),\quad P_q(1,1)=q^2.$$
These are two independent Bernoulli$(q)$ observations, one in each sample.
Let $G=S_2$ act by swapping coordinates and take the signed two-sample score
$T(x)=x_1-x_2$. Under the equal-distribution null, the law is invariant under
this swap. For the discordant sample $x=(1,0)$ the full-orbit p-value is
$1/2$; for $x=(0,1)$ it is $1$, and either tied sample has inclusive p-value
$1$.

For a uniform-subset Monte Carlo example without replacement, let
$G=\mathbb Z/6\mathbb Z$ act on itself by addition with its full power-set
sigma-algebra, let $X$ be uniform on $G$, and take
$T(x)=\mathbf 1\{x=0\}$. Set $B=2$, choose $S$ uniformly from the ten
two-element subsets of $G\setminus\{0\}$, and use $W=\{0\}\cup S$. This is
the identity-adjoined design of
[[alg-random-permutation-monte-carlo-pvalue]], with
$$p_{2,\mathrm{wor}}(x)=\frac{\#\{g\in W:T(g+x)\ge T(x)\}}{3}.$$

The equal-distribution null above is stronger than equality of means. For a
weak mean-difference null, use the data space $D^2$ with full power-set
sigma-algebra, where $D=\{-2,-1,0,1,2\}$, and let $S_2$ act by swapping
coordinates. On $D^2$ assign $(x,y)$ mass $P\{x\}Q\{y\}$, where $P$ puts
mass $1/2$ on each of $-1,1$ and $Q$ puts masses $1/4,1/2,1/4$ on
$-2,0,2$, respectively. Use the score $T(x,y)=x-y$. Both coordinate means
are zero, so the weak mean-difference null $E[X]=E[Y]$ holds. The pooled law
is not invariant under the swap.

## Facts & Assumptions

**Given:** The Bernoulli product law, its coordinate-swap action and score,
and the full-orbit rank definitions; the uniform-subset design on
$\mathbb Z/6\mathbb Z$; and the weak-null product law on $D^2$ with the
coordinate-swap action. Verify invariance and compute the ranks and design
p-value.

[F1] [[def-measurable-finite-group-permutation-setup]]: a finite group acts measurably on the experiment data space, and the theorem's null premise is invariance under every group element.

[F2] [[def-measurable-finite-group-orbit-pvalues]]: the inclusive rank counts all group transformations with $T(g\cdot x)\ge T(x)$; the randomized rank interpolates over the tied block using an independent uniform variable.

[F3] [[thm-finite-group-permutation-validity]]: under an invariant null, inclusive ranks are superuniform and tie-randomized ranks are exactly uniform.

[F4] [[def-finite-probability-space-and-event]]: nonnegative weights on a finite set that sum to one define a finite probability law, and event probabilities are sums of the weights.

[F5] [[alg-random-permutation-monte-carlo-pvalue]]: without replacement, adjoin the identity to a uniformly selected $B$-subset of the nonidentity group elements and divide the inclusive count by $B+1$.

## Verification

**Given:** The Bernoulli product law and $S_2$ swap score, the
$\mathbb Z/6\mathbb Z$ design, and the weak mean-difference model and swap
action stated in the Example.

1.1 All four masses are nonnegative and sum to $(q+(1-q))^2=1$, so [F4] makes them a finite probability law. The swap fixes $(0,0)$ and $(1,1)$ and exchanges $(0,1)$ with $(1,0)$, which have equal mass. Thus $P_q(s^{-1}A)=P_q(A)$ for every $A\subseteq\Omega$, and the group action is invariant for every $q\in[0,1]$. [F1, F4, given, algebra]

2.1 At $(0,0)$ and $(1,1)$, both transformed scores are $0$, giving $p_{\mathrm{orb}}=1$ and $p_{\mathrm{tie}}=U$. At $(1,0)$ the two scores are $1,-1$, giving $p_{\mathrm{orb}}=1/2$ and $p_{\mathrm{tie}}=U/2$. At $(0,1)$ they are $-1,1$, giving $p_{\mathrm{orb}}=1$ and $p_{\mathrm{tie}}=(1+U)/2$. [F2, step 1.1, algebra]

3.1 Put $a=q(1-q)$. Then $p_{\mathrm{orb}}=1/2$ with probability $a$ and equals $1$ otherwise. Its CDF is $0$ for $u<1/2$, $a\le1/4\le u$ for $1/2\le u<1$, and $1$ at $u=1$, so it is superuniform. For $0\le u\le1/2$, the tie-randomized CDF is $2au+(1-2a)u=u$: the $(1,0)$ branch contributes $2au$, the $(0,1)$ branch contributes zero except at a probability-zero endpoint, and the tied branches contribute $(1-2a)u$. For $1/2\le u\le1$, it is $a+a(2u-1)+(1-2a)u=u$. Thus $p_{\mathrm{tie}}$ is uniform, in agreement with [F3]. [F2, F3, step 2.1, algebra]

4.1 In the $\mathbb Z/6\mathbb Z$ example, addition by any fixed group element permutes the six equally likely outcomes, so the null law is invariant. If $X=0$, only the identity in $W$ has score at least $T(X)=1$, and the without-replacement p-value is $1/3$. If $X\ne0$, then $T(X)=0$ and every element of $W$ has score at least zero, so the p-value is $1$. Its distribution is therefore $1/3$ with probability $1/6$ and $1$ with probability $5/6$; its CDF is superuniform. [F1, F4, F5, given, algebra]

5.1 In the weak mean-difference example, $E[X]=E[Y]=0$. But the coordinate swap sends $(1,0)$ to $(0,1)$, and the product law assigns these points probabilities $P(X=1)Q(Y=0)=1/4$ and $P(X=0)Q(Y=1)=0$, respectively. Hence this weak null does not make the pooled law invariant under the swap, so the invariant-null premise of [F3] cannot be inferred from equality of means. [F1, F4, given, algebra] ∎
