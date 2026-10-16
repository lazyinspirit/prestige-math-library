---
id: thm-qc-rz-clifford-t-tcount
kind: theorem
title: T-count guarantees for Clifford+T Rz synthesis
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - alg-qc-rz-clifford-t-approximation
  - thm-qc-rz-approximation-correct-on-termination
  - lem-qc-rz-scaled-grid-norm-solution-exists
  - lem-qc-rz-determinant-one-reduction
  - lem-qc-su-two-denominator-t-count
  - lem-qc-rz-scaled-grid-growth
  - lem-qc-rz-prime-model-stopping-bounds
  - lem-qc-rz-candidate-norm-integer
  - cor-qc-cyclotomic-prime-norm-solvability
  - thm-qc-rz-efficient-scaled-grid-enumeration
  - thm-qc-factored-cyclotomic-norm-equation-efficient
  - thm-qc-exact-clifford-t-synthesis-optimality
  - lem-qc-capped-prime-norm-attempt-success
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations"
      url: https://arxiv.org/pdf/1403.2975
---

## Statement

For the ancilla-free, on-the-nose $R_z(\theta)$ problem with
$0<\varepsilon<1/2$, the Ross–Selinger grid/norm procedure has the following
source guarantees, with its exact-real comparison and norm-solver assumptions.

1. With a factoring oracle and a complete factorization-based solver for
   $t^*t=\xi$, the first successful candidate yields a circuit of minimum
   T-count among all one-qubit Clifford+T circuits satisfying the operator
   norm bound.
2. In bounded-factorization mode, under Ross–Selinger Hypothesis 8.3,
   interpreted quantitatively as [A1] below, if $m$ is the returned T-count
   and $m''$ is the second-smallest T-count among non-equivalent feasible
   solutions, then the expected number of non-equivalent feasible solutions
   of T-count strictly below $m$ is $O(\log(1/\varepsilon))$, and
   $\mathbb E[m]\le m''+O(\log\log(1/\varepsilon))$ as $\varepsilon\to0$.
3. With the efficient iterator and calibrated capped-prime implementation
   specified below,
   the expected arithmetic-operation time is
   $O(\operatorname{polylog}(1/\varepsilon))$. This is not a
   bit-time bound for arbitrary unencoded real inputs.

Two determinant-one solutions are equivalent when their upper-left entries
$u$ agree; the T-count of a class is the least count attained in that class.
The near-optimality assertion concerns the unbounded candidate stream, without
a finite total candidate budget. The source's notation
$\mathbb E[m]=m''+O(\log\log(1/\varepsilon))$ is used here only in the upper
bound sense proved in its Proposition 8.8; no lower bound relative to the
second-best class is asserted.

## Facts & Assumptions

**Given:** The exact-real comparisons, the procedure in
[[alg-qc-rz-clifford-t-approximation]], and the displayed input.

[F1] [[thm-qc-rz-approximation-correct-on-termination]] gives correctness
and successful termination with an unbounded candidate stream, a factoring
oracle, and terminating exact-real comparisons (almost surely for the
efficient randomized norm mode).

[F2] [[lem-qc-rz-determinant-one-reduction]]: below
$c_0=|1-e^{i\pi/8}|$ all feasible matrices have determinant one; at or above
$c_0$ a determinant-one Clifford solution of T-count zero exists.

[F3] [[lem-qc-su-two-denominator-t-count]] supplies the following interface:
for a feasible candidate $u$ of least exponent $k$ and any solution $t$,
the smaller optimal T-count of $U$ and $TUT^\dagger$ is
$f(k)=\max(0,2k-2)$, and no matrix in its $u$-class has count below $f(k)$.

[F4] [[lem-qc-rz-scaled-grid-growth]] supplies the increasing distinct
candidate sequence, $k_2=O(1+\log(1/\varepsilon))$, and
$k_j\le k_2+2\lceil\log_2j\rceil$.

[F5] [[lem-qc-rz-candidate-norm-integer]]: a candidate's reduced integer
$n$ is nonnegative, is zero or $1\pmod8$, and satisfies $n\le4^k$.

[F6] [[cor-qc-cyclotomic-prime-norm-solvability]]: double positivity and
prime $n\equiv1\pmod8$ or $n=1$ imply solvability of the norm equation.

[F7] [[lem-qc-rz-prime-model-stopping-bounds]] proves all fixed stopping-time
moments and the logarithmic expectation bound from [A1].

[F8] [[thm-qc-rz-efficient-scaled-grid-enumeration]] gives the default
iterator's finite-layer completion and all fixed prefix-work moments.
The second moment through $j$ global outputs is polynomially bounded in
$j$, $k_j$, and $L=1+\log(1/\varepsilon)$: completed layers contain at
most $j$ earlier outputs and at most $k_j+1$ layers, while the current
layer has the displayed prefix-moment bound.

[F9] [[thm-qc-factored-cyclotomic-norm-equation-efficient]] gives a complete
expected-polynomial solver with a valid supplied factorization, including
polynomial cost in the candidate exponent on these bounded grid inputs.

[F10] [[thm-qc-exact-clifford-t-synthesis-optimality]] gives exact optimal
compilation with polynomial coefficient cost. The fixed small-exponent
base cases are covered by the same compiler's finite lookup and reduction.

[F11] [[lem-qc-capped-prime-norm-attempt-success]] proves that the
calibrated capped prospective prime attempts accept only exact certificates,
have polynomial cost on every candidate, and succeed with probability at
least $1/2$ on an actual prime numerator. Zero/unit numerators have explicit
complete branches. Fresh per-call coins retain independent success events
conditional on any fixed iterator ordering.

[A1] Quantitative prime model: condition on the entire ordering generated
by the iterator's own random bits, independently of the norm-attempt bits.
For its distinct candidates the modelled events that $n$ is prime or
$n\in\{0,1\}$ are independent, with probability at least $c/(k_j+1)$
for a fixed $c>0$ independent of the input and the iterator ordering.
This is the uniform lower-bound reading of Hypothesis 8.3 required here;
for $n>1$, [F5] bounds $\log n$ by $O(k_j+1)$. The zero/unit cases are
accepted outright. This is an explicit conditional number-theoretic model,
not proved randomness of deterministic integers.

[A2] Use the efficient scaled-grid iterator and the calibrated capped-prime
branch of the stated procedure, with fresh independent bits at each norm
call and with no finite total candidate budget. Optional additional factoring
work has a declared polynomial budget per exponent; it can only add earlier
verified successes. Oracle mode instead supplies valid complete factorizations
and uses the complete efficient solver. Every returned matrix is compiled
by the optimal local exact compiler.

## Proof

1.1 In factoring-oracle mode [F1] gives a first solvable candidate. Since
the stream is ordered by exponent and the solver is complete, its exponent
$k$ is the least exponent of any solvable candidate. By [F3], taking the
smaller compiled count returns $f(k)$, the minimum across determinant-one
feasible classes, because $f$ is nondecreasing. By [F2] this is the global
minimum. For $\varepsilon\ge c_0$, the zero-T Clifford has an upper-left
root of unity and occurs in layer zero, so this reasoning still returns
zero. [F1, F2, F3, F4, given, algebra]

2.1 For the bounded-factorization branch let $J$ be the index of the first
guaranteed success event described below. Use [F11] to combine each modelled prime event with its independently
successful capped call. Conditional on the iterator order these events are
independent with probability at least $c/(2(k_j+1))$. The procedure succeeds
no later than their first index $J$; immediate success at $n=0$ or $1$ can
only improve this bound.
By [F7], $J$ is finite almost surely,
$\mathbb E[J]=O(L)$, and
$\mathbb E[\log_2J]=O(1+\log L)$. If $\varepsilon\ge c_0$, layer zero
already returns a Clifford under [A2], so its count and the number of
lower-count solutions are zero. Hence suppose $\varepsilon<c_0$.
[F2, F5, F6, F7, F11, A1, A2, algebra]

2.2 By [F3], the returned count satisfies $m\le f(k_J)$.
Every feasible class of count below $m$ therefore has exponent strictly
below $k_J$, since its class minimum is $f(k)$ and $f$ is nondecreasing.
By [F2] these classes cover all feasible solutions. Distinct classes have
distinct candidates and occur before index $J$, so their number is at most
$J-1$. Taking expectations proves the lower-count solution bound.
[F2, F3, F4, step 2.1, algebra]

2.3 Choose the best and second-best feasible classes, breaking equal-count
ties by increasing exponent, and let their exponents be $k'$ and $k''$.
Since their class counts are $f(k)$ and $f$ is nondecreasing, this choice
has $k'\le k''$. The two classes are distinct candidates, so $k_2\le k''$.
By [F3,F4],
$m\le2k_J\le2k''+4\lceil\log_2J\rceil
\le m''+2+4\lceil\log_2J\rceil
\le m''+6+4\log_2J$.
Taking expectations and applying step 2.1 gives
$\mathbb E[m]\le m''+O(1+\log L)$, which is the stated asymptotic bound.
The existence of two feasible classes is included in the solvability
interface: [A1,F6] give almost surely infinitely many solvable successes,
since the tail product after every finite index tends to zero by [F7].
[F3, F4, F6, F7, A1, step 2.1, algebra]

3.1 Write $C_j$ for the iterator work through its $j$th global candidate,
with no norm calls interleaved. The exponent sequence $k_j$ depends only on
the number of distinct candidates in each layer, so it is unchanged by the
iterator's randomized tie order. By [F4,F8], for some fixed $D$,
$\sqrt{\mathbb E[C_j^2]}\le C(j+1)^2(L+1+\log(j+1))^D$.
The stopping tail from [F7] holds uniformly conditional on every complete
iterator order, hence also unconditionally:
$\Pr(J>j)\le\exp(-j/(a+b\ln j))$, with $a=O(L)$ and fixed $b>0$.
Cauchy--Schwarz, applied separately to each event $J=j$, therefore gives
$\mathbb E[C_J]\le\sum_{j\ge1}\sqrt{\mathbb E[C_j^2]}\sqrt{\Pr(J=j)}$.
For completeness, the product bound follows by expanding the nonnegative
expectation of $(X/\sqrt{\mathbb E[X^2]}-Z/\sqrt{\mathbb E[Z^2]})^2$
with $X=C_j$ and $Z=\mathbf1_{\{J=j\}}$; if either second moment
vanishes its term is zero. This sum is polynomial in $L$. Indeed, for $j\ge a$ the tail proof of [F7]
bounds its exponential factor by $\exp(-c_1\sqrt{j/a})$; bound logarithms
by powers of $j$ and compare the resulting polynomial-times-exponential
sum with its integral, using $y=\sqrt{t/a}$. The part $j<a$ is also
polynomial. Thus no independence between iterator delay and $J$ is assumed.
[F4, F7, F8, step 2.1, algebra]

3.2 In capped mode [F11,A2] bound all candidate work through $J$ by
$J\operatorname{poly}(1+k_J)$, plus the successful exact compilation.
In oracle mode take $J$ to be the first prime/zero/unit model index,
which has the same tail and moment bounds and is solvable by [F6]. Then
[F9] supplies the same bound in conditional expectation:
condition on the preceding history before each call, and sum its uniform
polynomial expected bound over the calls that are reached. Integer-factor
oracle calls cost one operation; their factorization outputs have polynomial
length by [F5]. The stopping bounds [F4,F7] make the expectation of these
polynomial expressions finite and polynomial in $L$. By [F3,F10],
successful exact compilation also has polynomial cost in $k_J+1$:
its entry denominators are at most $k_J$ and squared-entry exponent at most
$2k_J$, with only finitely many small cases. Combining this with step 3.1
proves the expected polynomial arithmetic runtime for the actual efficient
implementations. It includes charged exact-real arithmetic and comparisons,
but supplies no bit-time guarantee for unencoded real parameters.
[F3, F4, F5, F7, F9, F10, F11, A2, step 2.1, step 3.1, algebra] ∎

## Remarks

The complete coefficient-box iterator and divisor-search norm solver remain
valid alternatives for completeness. Their costs are not used in the
expected polynomial bound. Capped prospective executions never infer
unsolvability from an unproved prime promise: only a verified exact norm
certificate is accepted. The candidate-primality model remains an explicit
number-theoretic hypothesis.
