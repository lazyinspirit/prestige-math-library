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
dependency_level: 17
---

## Statement

For the ancilla-free, on-the-nose $R_z(\theta)$ problem with
$\varepsilon>0$, the procedure first returns its zero-T Clifford whenever
$\varepsilon\ge c_0=|1-e^{i\pi/8}|$. In the remaining range
$0<\varepsilon<c_0$, it has the following guarantees with its exact-real
comparison and norm-solver assumptions.

1. In complete mode with a factoring oracle and a complete
   factorization-based solver for $t^*t=\xi$, the first successful candidate
   yields a circuit of minimum T-count among all one-qubit Clifford+T circuits
   satisfying the operator norm bound. The direct branch for
   $\varepsilon\ge c_0$ is also optimal because it has T-count zero.
2. In bounded-factorization mode, for $0<\varepsilon<c_0$, under
   Ross–Selinger Hypothesis 8.3,
   interpreted quantitatively as [A1] below, if $m$ is the returned T-count
   and $m''$ is the second-smallest T-count among non-equivalent feasible
   solutions, then the expected number of non-equivalent feasible solutions
   of T-count strictly below $m$ is $O(\log(1/\varepsilon))$, and
   $\mathbb E[m]\le\mathbb E[m'']+O(\log\log(1/\varepsilon))$ as
   $\varepsilon\to0$. Both expectations include the arithmetic-instance
   randomness of [A1]; $m''$ is almost surely defined and integrable in this
   range. If $m''$ is deterministic in the chosen model, its expectation is
   simply $m''$.
   For $c_0\le\varepsilon<1/2$, the direct branch returns $m=0$, so there
   are no feasible solutions of smaller T-count and the same mean bound is
   immediate whenever $m''$ is defined.
3. For $0<\varepsilon<1/2$, with the efficient iterator and calibrated
   capped-prime implementation specified below,
   the expected arithmetic-operation time is
   $O(\operatorname{polylog}(1/\varepsilon))$. In the range
   $c_0\le\varepsilon<1/2$, the direct branch takes constant arithmetic work.
   These are not bit-time bounds for arbitrary unencoded real inputs.

Two determinant-one solutions are equivalent when their upper-left entries
$u$ agree; the T-count of a class is the least count attained in that class.
The nontrivial near-optimality assertion concerns the unbounded candidate
stream, without a finite total candidate budget. The source's notation
$\mathbb E[m]=m''+O(\log\log(1/\varepsilon))$ is used here only in the upper
bound sense of its Proposition 8.8. In the explicit random-arithmetic model
[A1], the second-best class is random as well, so its count must also be
averaged. No lower bound relative to that class is asserted.

## Facts & Assumptions

**Given:** The exact-real comparisons, the procedure in
[[alg-qc-rz-clifford-t-approximation]], and the displayed input.

[F1] [[thm-qc-rz-approximation-correct-on-termination]] gives correctness
for all $\varepsilon>0$ and successful termination in COMPLETE mode with an
unbounded candidate limit, valid complete factorizations when required, and
terminating exact-real operations (almost surely for the efficient randomized
norm mode).

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
Its two disk inequalities also give $0\le\xi,\xi^\bullet\le1$ for the
residual $\xi=1-|u|^2$.

[F6] [[cor-qc-cyclotomic-prime-norm-solvability]]: double positivity and
prime $n\equiv1\pmod8$ or $n=1$ imply solvability of the norm equation.

[F7] [[lem-qc-rz-prime-model-stopping-bounds]] proves all fixed stopping-time
moments and the logarithmic expectation bound from a joint-failure
product estimate; independence of actual solver successes is not required.

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
complete branches. Conditioning on all arithmetic data makes the calls
independent in their fresh solver bits; averaging gives the joint-failure
product bound from independent modelled prime indicators, without asserting
unconditional independence of the actual successful calls.

[A1] Quantitative prime model: clauses 2--3 adopt an idealized stochastic
model of candidate arithmetic in the sense of Ross--Selinger Hypothesis 8.3.
The iterator and solver coins are drawn independently of the underlying
modelled arithmetic instance, and solver streams are independent of one
another. For each fixed enumerator/tie-choice framework, the model assumes
that the indicators $I_j$ of prime or zero/unit norm numerators are
independent, with probabilities $p_j\ge c/(k_j+1)$, for a constant $c>0$
uniform in the input and tie choices. Other numerical data can be correlated.
This is a model assumption before conditioning on all numerical candidate
data; after those data are fixed, primality is fixed too. In particular,
fixing an actual input and drawing iterator bits does not make its integers
random or prove this hypothesis. The expectations in clauses 2--3 refer to
this explicit idealized arithmetic model together with the algorithmic coins.
The uniform lower bound is the quantitative reading of Hypothesis 8.3 used
here; [F5] gives $\log n=O(k_j+1)$ for $n>1$. Zero/unit cases succeed
outright. The model is not an established number-theoretic theorem about
each deterministic input stream.

[A2] For the probabilistic and runtime clauses use the efficient scaled-grid
iterator and the calibrated capped-prime branch of the stated procedure,
with fresh independent bits at each norm call and no finite total candidate
limit. Bounded mode makes no extra factor-suggestion attempt. Complete mode
instead supplies valid complete factorizations and uses the complete
efficient solver. Every returned matrix is compiled by the optimal local
exact compiler. The range $c_0\le\varepsilon<1/2$ returns before either
iterator or norm solver is called; its exact integer-part operation is
counted as one arithmetic operation.

## Proof

1.1 If $\varepsilon\ge c_0$, the direct branch from [F2] returns a feasible
zero-T Clifford, which is globally optimal by nonnegativity of T-count.
Suppose instead $0<\varepsilon<c_0$. Then [F1] gives a first solvable
candidate in COMPLETE mode. Since the stream is ordered by exponent and the
solver is complete, its exponent $k$ is the least exponent of any solvable
candidate. By [F3], taking the smaller compiled count returns $f(k)$, the
minimum across determinant-one feasible classes, because $f$ is
nondecreasing. By [F2] this is the global minimum. [F1, F2, F3, F4, given,
algebra]

2.1 If $c_0\le\varepsilon<1/2$, the direct branch returns $m=0$, so no
feasible solution has T-count below $m$ and the expected lower-count is zero;
also $\mathbb E[m]=0\le\mathbb E[m'']$ whenever $m''$ is defined.
Suppose $0<\varepsilon<c_0$. For the bounded-factorization branch let $J$ be
the first successful mandatory prime-attempt index, using preassigned fresh
bit streams along the candidate sequence.
For each enumerator/tie-choice framework, condition first on all its
arithmetic data $\mathcal D$. By [F11],
$\Pr(J>j\mid\mathcal D)\le\prod_{i=1}^j(1-I_i/2)$.
Averaging over the arithmetic model [A1] gives
$\Pr(J>j)\le\prod_{i=1}^j(1-p_i/2)
\le\prod_{i=1}^j(1-c/(2(k_i+1)))$.
This uses independence of the modelled indicators only; actual successful
calls may be correlated after averaging over numerical inputs. The
procedure succeeds no later than $J$. Apply the joint-failure version of
[F7], with $c$ replaced by $c/2$: $J$ is finite almost surely,
$\mathbb E[J]=O(L)$, and
$\mathbb E[\log_2J]=O(1+\log L)$. All constants are uniform in the
iterator tie choices, so these bounds survive averaging over its coins.
[F2, F5, F6, F7, F11, A1, A2, algebra]

2.2 By [F3], the returned count satisfies $m\le f(k_J)$.
Every feasible class of count below $m$ therefore has exponent strictly
below $k_J$, since its class minimum is $f(k)$ and $f$ is nondecreasing.
By [F2] these classes cover all feasible solutions. Distinct classes have
distinct candidates and occur before index $J$, so their number is at most
$J-1$. Taking expectations proves the lower-count solution bound.
[F2, F3, F4, step 2.1, algebra]

2.3 The model has infinitely many prime or zero/unit candidates almost
surely. Indeed, for each integer $r\ge1$, the growth bound [F4] implies that
for every sufficiently large $m$,
$\sum_{i=2^m}^{2^{m+1}-1}p_i\ge
c\,2^m/(k_2+2m+3)$. These block lower bounds imply
$\sum_{i=r}^{\infty}p_i=\infty$. Independence in [A1] gives
$\Pr(I_i=0\text{ for every }r\le i\le N)
=\prod_{i=r}^N(1-p_i)\le\exp(-\sum_{i=r}^Np_i)\to0$.
Thus with probability one good indices occur after every finite $r$, so
there are infinitely many. By [F5], each candidate has
$\xi,\xi^\bullet\ge0$. If $n=0$, then $\xi^\bullet\xi=0$ makes one
embedding zero, and the field-automorphism property used in [F5] forces $\xi=0$, so the
solver returns $t=0$. If $n=1$ or $n$ is prime, then $n>0$ makes both
embeddings strictly positive; for prime $n$, [F5] gives $n\equiv1\pmod8$,
so [F6] makes the norm equation solvable. Distinct candidates give distinct
$u$-classes, so
the best and second-best feasible classes exist almost surely. Choose the
best and second-best feasible classes, breaking equal-count
ties by increasing exponent, and let their exponents be $k'$ and $k''$.
Since their class counts are $f(k)$ and $f$ is nondecreasing, this choice
has $k'\le k''$. The two classes are distinct candidates, so $k_2\le k''$.
By [F3,F4],
$m\le2k_J\le2k''+4\lceil\log_2J\rceil
\le m''+2+4\lceil\log_2J\rceil
\le m''+6+4\log_2J$.
To check integrability of the benchmark, use the deterministic bound
$K=\lceil\log_2(512/\varepsilon^2)\rceil\ge k_2$ from [F4], and let $H$ be
the second index with $I_H=1$. If each of the blocks $1,\ldots,r$ and $r+1,\ldots,2r$ contains
a good index, then $H\le2r$. By [A1,F4] and the same failure-product bound,
$$\Pr(H>2r)\le
2\exp\!\left(-\frac{cr}{K+2\lceil\log_2(2r)\rceil+1}\right).$$
The tail comparison in [F7] gives finite moments of $H$. The first two good
indices give two feasible classes, so $m''\le2k_H$ by [F3], and [F4]
makes $m''$ integrable. Also $m\le2k_J$ is integrable by step 2.1.
Taking expectations of the pathwise inequality and applying step 2.1 now
gives $\mathbb E[m]\le\mathbb E[m'']+O(1+\log L)$, which is the stated
asymptotic bound.
[F2, F3, F4, F5, F6, F7, F11, A1, step 2.1, algebra]

3.1 If $c_0\le\varepsilon<1/2$, the direct branch takes constant arithmetic
work, including one exact integer-part operation and reducing exponents
modulo $8$. Suppose $0<\varepsilon<c_0$. Write $C_j$ for the iterator work through its $j$th global candidate,
with no norm calls interleaved. The exponent sequence $k_j$ depends only on
the number of distinct candidates in each layer, so it is unchanged by the
iterator's randomized tie order. By [F4,F8], for some fixed $D$,
$\sqrt{\mathbb E[C_j^2]}\le C(j+1)^2(L+1+\log(j+1))^D$.
The joint-failure estimate of step 2.1 and [F7] give the stopping tail
uniformly for each enumerator/tie-choice framework in [A1], hence also after
averaging over the independent iterator coins:
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
