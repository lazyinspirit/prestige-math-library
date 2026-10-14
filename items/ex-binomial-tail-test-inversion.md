---
id: ex-binomial-tail-test-inversion
kind: example
title: Binomial upper confidence limit by lower-tail test inversion
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 7
deps:
  - def-statistical-experiment
  - def-sigma-algebra
  - def-probability-measure
  - def-confidence-set-and-coverage
  - def-test-size-and-power
  - thm-test-inversion-coverage
  - def-binomial-coefficient
  - thm-binomial-theorem-over-a-commutative-ring
  - thm-intermediate-value
  - thm-monotonicity-from-the-derivative
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Anna Mikusheva, MIT 14.381, Lecture 11: Confidence Sets, §2, PDF p. 1"
      url: "https://ocw.mit.edu/courses/14-381-statistical-method-in-economics-fall-2018/6a7fdee0c759b8ac985bf28a553acb24_MIT14_381F18_lec11.pdf"
    - title: "Karl B. Gregory, USC STAT 713, Lecture 14: Confidence Intervals and Sets, slide 12, PDF p. 20"
      url: "https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_14_slides_annotated.pdf"
---

## Example

Let the observation space be $\{0,\ldots,n\}$ with its full power set,
$n\ge1$, $p\in[0,1]$, $0<\alpha<1$, and let $X$ have mass
$P_p(X=j)=\binom njp^j(1-p)^{n-j}$, $j=0,\ldots,n$, with $0^0=1$.
Define $F_p(k)=\sum_{j=0}^k\binom njp^j(1-p)^{n-j}$.
For $k<n$, let $U_k\in(0,1)$ be the unique solution of
$F_{U_k}(k)=\alpha$, and set $U_n=1$. Then $C(X)=[0,U_X]$ is the
confidence set obtained by inverting the lower-tail tests that reject
$p=p_0$ when $F_{p_0}(X)<\alpha$. Its coverage is at least
$1-\alpha$; discreteness can make it conservative.

## Facts & Assumptions

**Given:** The finite binomial model, $n\ge1$, $p\in[0,1]$, and
$0<\alpha<1$.

[F1] [[thm-binomial-theorem-over-a-commutative-ring]]: the binomial expansion
holds for real $p$ and $1-p$.

[F2] [[def-confidence-set-and-coverage]]: coverage is the probability that
the true parameter belongs to the confidence set.

[F3] [[thm-test-inversion-coverage]]: inverting measurable point-null
acceptance events of probability at least $1-\alpha$ gives coverage at
least $1-\alpha$.

[F4] [[def-binomial-coefficient]]: $\binom nj$ counts the $j$-element
subsets of an $n$-element set.

[F5] [[def-sigma-algebra]]: a sigma-algebra is an algebra of subsets closed
under countable unions.

[F6] [[def-probability-measure]]: a probability measure is a measure of total
mass one on a measurable space.

[F7] [[def-statistical-experiment]]: an experiment fixes a measurable
observation space and a probability law for each parameter.

[F8] [[def-test-size-and-power]]: a test has level $\alpha$ when its size,
the supremum of its rejection probabilities over the null, is at most
$\alpha$.

[F9] [[thm-monotonicity-from-the-derivative]]: a continuous function on an
interval with strictly negative derivative at every interior point is strictly
decreasing on that interval.

[F10] [[thm-intermediate-value]]: a continuous real function on a closed
interval takes every value between its endpoint values.

## Verification

1.1 The full power set of $\{0,\ldots,n\}$ is an algebra closed under countable unions, hence a sigma-algebra by [F5]. The binomial theorem [F1] gives $\sum_{j=0}^n\binom njp^j(1-p)^{n-j}=(p+1-p)^n=1$; all terms are nonnegative for $p\in[0,1]$, so [F6] makes the displayed masses a probability measure, including $p=0,1$. These laws form an experiment as in [F7]. [given, F1, F5, F6, F7, algebra]

1.2 For $k<n$, count pairs consisting of a $j$-element subset of an $n$-element set and a distinguished element inside it. Counting in the two orders gives $j\binom nj=n\binom{n-1}{j-1}$ for $1\le j\le k$. Counting instead a distinguished element outside the subset gives $(n-j)\binom nj=n\binom{n-1}j$ for $0\le j\le k$, by [F4]. The first identity is not used at $j=0$: in differentiating $p^j$, that boundary term is zero, so the first derivative sum starts at $j=1$, while the second identity includes $j=0$. Since $F_p(k)$ is a polynomial, it is continuous on $[0,1]$, and for $0<p<1$ termwise differentiation and the two identities give $$\frac{d}{dp}F_p(k) =\sum_{j=1}^k j\binom njp^{j-1}(1-p)^{n-j} -\sum_{j=0}^k(n-j)\binom njp^j(1-p)^{n-j-1} =-n\binom{n-1}k p^k(1-p)^{n-k-1}<0.$$ When $k=0$, the first sum is empty and the $j=0$ term of the second sum gives the same formula. By [F9], $F_p(k)$ is strictly decreasing on $[0,1]$. Also $F_0(k)=1$ and $F_1(k)=0$ because $k<n$. Applying [F10] to this continuous polynomial on $[0,1]$ gives a point $U_k\in(0,1)$ with $F_{U_k}(k)=\alpha$; strict decrease makes it unique. [given, F4, F9, F10, algebra]

2.1 For each fixed candidate $p_0$, $F_{p_0}(k)$ is nondecreasing in integer $k$. Let $k_0$ be the least $k\in\{0,\ldots,n\}$ with $F_{p_0}(k)\ge\alpha$, which exists because $F_{p_0}(n)=1$. The deterministic test function is $\varphi_{p_0}(x)=\mathbf1_{\{F_{p_0}(x)<\alpha\}}$; it is measurable on this finite space. Its rejection event is $\{X<k_0\}$, whose probability is $0$ if $k_0=0$, and otherwise is $F_{p_0}(k_0-1)<\alpha$. The null is $\{p_0\}$, and the alternative $[0,1]\setminus\{p_0\}$ is nonempty; by [F8] the test size equals this rejection probability and is at most $\alpha$. [given, F8, step 1.1, algebra]

3.1 For an observed $x<n$, strict decrease of $F_p(x)$ in $p$ makes $\{p_0:F_{p_0}(x)\ge\alpha\}=[0,U_x]$; for $x=n$, the set is $[0,1]=[0,U_n]$. Thus $C(X)$ is precisely the inversion of those acceptance events. The level calculation in step 2.1 and [F3] imply its coverage is at least $1-\alpha$, in the sense of [F2]. [given, F2, F3, step 1.2, step 2.1, algebra] ∎

## Remarks

The finite binomial size calculation uses the current [[def-test-size-and-power]] interface, and [[thm-test-inversion-coverage]] supplies the stated coverage implication.
