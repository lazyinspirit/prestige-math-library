---
id: lem-qec-prereq-bounded-phase-averaging-control
kind: lemma
domain: mathematics
title: Bounded phase spread and calibrated jump-time residual
status: published
origin: session
deps:
  - def-qec-prereq-diagonal-lift-phase-data
  - lem-qec-prereq-jump-time-phase-gram
  - math:def-probability-measure
  - math:def-expectation-of-a-nonnegative-or-integrable-random-variable
  - math:cor-expectation-linearity-monotonicity-and-modulus-bound
  - math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - math:thm-complex-exponential-is-entire-with-derivative-itself
  - math:lem-mean-value-inequality-for-a-differentiable-banach-valued-curve
  - math:lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves
  - math:lem-bochner-integral-norm-inequality
  - math:def-countable-choice
  - math:def-random-element-and-real-random-variable
  - math:def-measure-null-set-and-almost-everywhere
  - math:def-measurable-function-between-measurable-spaces
  - math:thm-continuous-preimages-of-borel-sets-are-borel
  - math:def-complex-lp-and-euclidean-test-function-conventions
  - math:def-integrable-real-and-complex-functions-and-their-integrals
  - math:def-nonnegative-lebesgue-integral
  - math:def-integral-of-a-nonnegative-simple-function
  - math:thm-complex-exponential-addition-and-real-extension
  - math:cor-finite-dimensional-normed-spaces-are-banach
dependency_roles:
  def-qec-prereq-diagonal-lift-phase-data: mathematical-premise
  lem-qec-prereq-jump-time-phase-gram: mathematical-premise
  math:def-probability-measure: mathematical-premise
  math:def-expectation-of-a-nonnegative-or-integrable-random-variable: mathematical-premise
  math:cor-expectation-linearity-monotonicity-and-modulus-bound: mathematical-premise
  math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  math:thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  math:lem-mean-value-inequality-for-a-differentiable-banach-valued-curve: mathematical-premise
  math:lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  math:lem-bochner-integral-norm-inequality: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-random-element-and-real-random-variable: mathematical-premise
  math:def-measure-null-set-and-almost-everywhere: mathematical-premise
  math:def-measurable-function-between-measurable-spaces: mathematical-premise
  math:thm-continuous-preimages-of-borel-sets-are-borel: mathematical-premise
  math:def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  math:def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  math:def-nonnegative-lebesgue-integral: mathematical-premise
  math:def-integral-of-a-nonnegative-simple-function: mathematical-premise
  math:thm-complex-exponential-addition-and-real-extension: mathematical-premise
  math:cor-finite-dimensional-normed-spaces-are-banach: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 2
---

## Statement

Assume Countable Choice. Let $\tau\geq0$, let $I=[a,a+\tau]$, and let $s$ be a real measurable random variable on a probability space with $s\in I$ almost surely. Write $m=\mathbb E s$. For every real $\delta$ and every $s_0\in I$, almost surely $|e^{i\delta s}-e^{i\delta s_0}|\leq|\delta|\tau$, and $|\mathbb E e^{i\delta(s-m)}-1|\leq\delta^2\tau^2/2$.

For finitely many real frequencies $d_j$, let $\delta_{jk}=d_j-d_k$ and $G_{jk}=\mathbb E e^{i\delta_{jk}s}$. If $\max_{j,k}|\delta_{jk}|\leq M$, every calibrated entry $e^{-i\delta_{jk}m}G_{jk}$ satisfies $|e^{-i\delta_{jk}m}G_{jk}-1|\leq M^2\tau^2/2$; this deviation tends uniformly to zero as $\tau\to0$ with $M$ fixed. When a conditional branch has the phase Gram lemma's diagonal averaging formula under the common input-independent law of $s$, and its diagonal entries are specifically $e^{id_js}$, these calibrated entries are its relative-coherence multipliers after removing the known mean phase.

For the diagonal lift's evolution $U_s=e^{-isD}$ with $D$ having entries $d_j$, the uncorrected multipliers instead are $H_{jk}=\mathbb E e^{-i\delta_{jk}s}$. Under the corresponding common-law averaging formula, inverse mean-phase calibration gives $|e^{i\delta_{jk}m}H_{jk}-1|\leq M^2\tau^2/2$, with the same uniform limit. In both conventions calibration requires the mean phase to be known; it does not reveal the random time $s$. This entrywise estimate alone does not assert a bound for a complete repeated-check channel.

## Facts & Assumptions

[F1] A probability measure has total mass one, and expectation is integration of an integrable random variable against it. [[math:def-probability-measure]] [[math:def-expectation-of-a-nonnegative-or-integrable-random-variable]]

[F2] Expectation is linear and monotone on integrable variables, and $|\mathbb E Z|\leq\mathbb E|Z|$ for integrable complex $Z$. [[math:cor-expectation-linearity-monotonicity-and-modulus-bound]]

[F3] For real $u$, $|e^{iu}|=1$; the complex exponential has derivative equal to itself. [[math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] [[math:thm-complex-exponential-is-entire-with-derivative-itself]]

[F4] A differentiable Banach-valued curve with derivative norm bounded by $C$ changes by at most $C$ times the interval length. [[math:lem-mean-value-inequality-for-a-differentiable-banach-valued-curve]]

[F5] Under Countable Choice, the fundamental theorem applies to continuously differentiable Banach-valued curves on compact intervals; the norm of a Bochner integral is at most the integral of the norm. [[math:def-countable-choice]] [[math:lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]] [[math:lem-bochner-integral-norm-inequality]]

[F6] The phase Gram lemma assumes a common probability law and diagonal entries $e^{i\theta_j}$; its averaging formula then has coherence multiplier $\mathbb E e^{i(\theta_j-\theta_k)}$. The diagonal lift convention $U_s=e^{-isD}$ has matrix-unit phase $e^{-is(d_j-d_k)}$; its calibration convention supplies known phase data, not an unobserved time. [[lem-qec-prereq-jump-time-phase-gram]] [[def-qec-prereq-diagonal-lift-phase-data]]

[F7] A real random variable is a measurable map into the real Borel space; measurable maps take inverse images of measurable sets to measurable sets. An almost-sure assertion holds off a measurable null set. [[math:def-random-element-and-real-random-variable]] [[math:def-measurable-function-between-measurable-spaces]] [[math:def-measure-null-set-and-almost-everywhere]]

[F8] Continuous maps have Borel inverse images of Borel sets. A complex function is measurable when its real and imaginary components are measurable, and modulus preserves this measurability. [[math:thm-continuous-preimages-of-borel-sets-are-borel]] [[math:def-complex-lp-and-euclidean-test-function-conventions]]

[F9] A real or complex measurable function is integrable when its modulus has finite integral. The nonnegative integral is the supremum of the simple integrals of its nonnegative simple minorants; a simple function with disjoint measurable level sets $E_\ell$ and values $c_\ell\geq0$ has simple integral $\sum_\ell c_\ell\mathbb P(E_\ell)$. [[math:def-integrable-real-and-complex-functions-and-their-integrals]] [[math:def-nonnegative-lebesgue-integral]] [[math:def-integral-of-a-nonnegative-simple-function]]

[F10] For all complex $z,w$, $e^{z+w}=e^ze^w$. [[math:thm-complex-exponential-addition-and-real-extension]]

[F11] The complex numbers with the usual modulus form a normed complex space with ordered basis $(1)$, so they are Banach by the finite-dimensional Banach corollary. For differentiation in a real variable, the underlying real space has the same norm metric and is therefore also complete. [[math:cor-finite-dimensional-normed-spaces-are-banach]]

## Proof

**Given:** The probability space, interval, random variable, frequencies and conditional branch data in the statement, and Countable Choice.

**Goal:** Prove the pointwise and centered bounds and their conditional entrywise application in both phase conventions.

1.1 Work in the Banach codomain $\mathbb C$ with norm $|\cdot|$, using its underlying real structure for differentiation, as established in [F11]. The curve $u\mapsto e^{iu}$ has derivative $ie^{iu}$ of modulus one: the complex derivative in [F3], evaluated on increments $ih$, gives this real derivative directly. Differentiability also gives continuity, including at the endpoints of every compact interval. Applying the mean value inequality between real $u$ and $v$ gives $|e^{iu}-e^{iv}|\leq|u-v|$, including equality of endpoints trivially. Taking $u=\delta s$ and $v=\delta s_0$ proves the first assertion almost surely because both $s$ and $s_0$ lie in $I$. [given, F3, F4, F11]

2.1 In the same Banach codomain from [F11], for real $x$ the fundamental theorem applied to $u\mapsto e^{iu}-1-iu$ on the interval between $0$ and $x$, with orientation reversed when $x<0$, gives $e^{ix}-1-ix=\int_0^x i(e^{iu}-1)\,du$. The derivative $i(e^{iu}-1)$ is continuous by step 1.1. The integral norm inequality and step 1.1 yield $|e^{ix}-1-ix|\leq\int_0^{|x|}v\,dv=x^2/2$. The case $x=0$ is immediate. [F3, F5, F11, step 1.1]

3.1 If $h$ is a continuous real- or complex-valued function on $\mathbb R$, then $h\circ s$ is measurable: for any Borel set $B$, $(h\circ s)^{-1}(B)=s^{-1}(h^{-1}(B))$ is measurable by [F7] and [F8]. In the complex case apply the same argument to the continuous real and imaginary components of $h$ to obtain the componentwise convention of [F8]; coordinate projections are continuous since each coordinate difference is bounded by the complex modulus. Affine real functions, their squares, and the exponential and remainder functions in steps 1.1 and 2.1 are continuous, so all their compositions with $s$ used below, and their moduli, are measurable. [F7, F8, step 1.1, step 2.1]

4.1 Let $f$ be any such measurable real or complex function with $|f|\leq B$ off a measurable null set $N$, where $0\leq B<\infty$. For any nonnegative simple minorant $q\leq|f|$, split its disjoint level sets into intersections with $N$ and its complement. The pieces in $N$ have zero measure. Every nonempty piece outside $N$ has coefficient at most $B$, and their disjoint measures sum to at most $1$. Thus the simple integral of $q$ is at most $B$. Taking the supremum in [F9] gives $\int|f|\,d\mathbb P\leq B$, hence integrability. Applying this to $f=1$ gives an upper bound of $1$; the simple minorant $q=1$ has simple integral $1$ by [F1] and [F9], so $\mathbb E1=1$. In particular $s$ is integrable with $B=\max(|a|,|a+\tau|)$, and real constants have their stated expectations by [F2]. [given, F1, F2, F7, F9, step 3.1]

5.1 Monotonicity gives $a\leq m\leq a+\tau$, so $|s-m|\leq\tau$ almost surely. Put $X=\delta(s-m)$. The variables $X$, $X^2$, $e^{iX}$ and $e^{iX}-1-iX$ are measurable by step 3.1 and almost surely bounded, respectively by $|\delta|\tau$, $\delta^2\tau^2$, $1$ and $2+|\delta|\tau$, so step 4.1 makes all of them integrable. Linearity and $\mathbb E1=1$ give $\mathbb E X=0$ and $\mathbb E e^{iX}-1=\mathbb E(e^{iX}-1-iX)$. The expectation modulus bound, step 2.1 and monotonicity now give $|\mathbb E e^{iX}-1|\leq\mathbb E(X^2/2)\leq\delta^2\tau^2/2$. [given, F1, F2, F3, step 2.1, step 3.1, step 4.1]

6.1 The exponential addition law and expectation linearity give $e^{-i\delta_{jk}m}G_{jk}=\mathbb E e^{i\delta_{jk}(s-m)}$. The expectations exist by steps 3.1 and 4.1. Step 5.1 bounds each entry's distance from $1$ by $M^2\tau^2/2$. This common upper bound tends to zero with $\tau$, uniformly over the finite index set and all laws satisfying the interval hypothesis, when $M$ is fixed. [given, F2, F10, step 3.1, step 4.1, step 5.1]

7.1 Under the positive-sign branch hypothesis, diagonal matrix multiplication in [F6] gives $(D_+(s)\rho D_+(s)^\dagger)_{jk}=e^{i\delta_{jk}s}\rho_{jk}$, where $D_+(s)$ denotes its specified diagonal matrix. Entrywise averaging and [F2] give multiplier $G_{jk}$; inverse mean-phase conjugation by the diagonal matrix with entries $e^{-id_jm}$ multiplies it by $e^{-i\delta_{jk}m}$. For the lift convention in [F6], the same calculation gives $H_{jk}$, and its inverse mean-phase matrix has entries $e^{id_jm}$. Substituting $-\delta_{jk}$ into step 5.1 and using [F10] bounds $|e^{i\delta_{jk}m}H_{jk}-1|$ by $M^2\tau^2/2$. These calculations use the respective assumed diagonal averaging formula and knowledge of the mean phase, without inferring observation of $s$ or a repeated-check channel bound. [given, F2, F6, F10, step 5.1, step 6.1] ∎
