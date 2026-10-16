---
id: lem-qc-capped-prime-norm-attempt-success
kind: lemma
title: Certified capped norm attempts succeed on prime residuals
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - alg-qc-cyclotomic-scaled-grid-and-norm-solver
  - thm-qc-factored-cyclotomic-norm-equation-efficient
  - cor-qc-cyclotomic-prime-norm-solvability
  - lem-qc-rz-candidate-norm-integer
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations, Algorithm 7.6 and Proposition 8.8"
      url: https://arxiv.org/pdf/1403.2975
dependency_level: 12
---

## Statement

Let $u$ be a grid candidate of least denominator exponent $k$, and put
$\xi=1-u^\dagger u$, $\xi^\bullet\xi=n/2^\ell$ in reduced form.
Let $P(k)=2^{200}(k+1)^{20}$ be the calibrated prime-input binary-work
bound of [[thm-qc-factored-cyclotomic-norm-equation-efficient]]. The capped prime-attempt procedure in
[[alg-qc-cyclotomic-scaled-grid-and-norm-solver]], with solver budget
$2\lceil P(k)\rceil$, has the following properties:

- Every accepted output is an exact solution $t^\dagger t=\xi$.
- On every input its work is polynomial in $k+1$, including the final exact
  verification, with no primality promise on $n$.
- When $n$ is prime, its success probability is at least $1/2$. When
  $n\in\{0,1\}$, the explicitly complete zero/unit branches succeed.

For a candidate stream with exponent profile $k_j$, suppose its arithmetic
data are given an idealized stochastic model in which the indicators $I_j$
of prime or zero/unit norm numerators are independent, with
$p_j=\Pr(I_j=1)\ge c/(k_j+1)$. Draw fresh independent solver bits,
independently of all arithmetic data. If $J$ is the first successful call,
then
$$\Pr(J>j)\le\prod_{i=1}^j(1-p_i/2)\le\prod_{i=1}^j\left(1-\frac{c}{2(k_i+1)}\right).$$
Thus these attempts have the same stopping-tail bound as independent events
with probabilities $c/(2(k_j+1))$. Independence of the actual successful-call
events is not asserted or needed. This last assertion concerns the explicit
stochastic model; the numerators of an actual fixed input have fixed
primality, while the first three assertions above hold for each such input.

## Facts & Assumptions

**Given:** The calibrated polynomial budget bound $P$, the exact algebraic
input, and independent random bits for each call. For the last assertion,
let $\mathcal D$ contain all modelled arithmetic data. The indicators $I_j$
are functions of $\mathcal D$ and have the stated independent marginal
model, but the remaining numerical data may have arbitrary correlations.
Solver-bit streams are independent of $\mathcal D$ and of one another;
the enumerator ordering uses none of these solver bits. Conditioning on
$\mathcal D$ fixes primality, so no nondegenerate prime probabilities are
asserted after that conditioning.

[F1] [[alg-qc-cyclotomic-scaled-grid-and-norm-solver]] defines the capped
prospective single-factor execution and accepts only a verified exact norm
certificate. An invalid or aborted computation only skips its candidate.

[F2] [[thm-qc-factored-cyclotomic-norm-equation-efficient]] proves that the
construction terminates almost surely, is complete with a valid supplied
factorization, and supplies the calibrated prime-input bound $P(k)$, as well as expected
polynomial bit cost on bounded grid inputs.

[F3] [[lem-qc-rz-candidate-norm-integer]] gives $n=0$ or $n\equiv1\pmod8$.

[F4] [[cor-qc-cyclotomic-prime-norm-solvability]] gives solvability when
$n=1$ or $n$ is prime congruent to one modulo eight.

## Proof


1.1 The exact certificate check in [F1] is a comparison of the four rational power-basis coefficients of $t^\dagger t$ and $\xi$. Equality of these coefficients is equality in the field, so acceptance always proves the required equation. On a composite input no field property of a proposed residue quotient and no `NO_SOLUTION` message is used as evidence: a failed operation, negative outcome, or work-cap interruption causes only a skip. [F1, given, algebra]

2.1 The construction is interrupted after $B=2\lceil P(k)\rceil$ binary operations, regardless of whether its proposed prime factor was valid. Every generated bit string then has length bounded by the input length plus $B$. The grid-input bound of [F2] makes its input length polynomial in $k+1$. A fixed-degree rational-coefficient multiplication and equality check therefore takes polynomial work in $k+1+B$, by schoolbook integer multiplication and division. Since $B$ is a specified polynomial, total work including exact certification is polynomial on every input. [F1, F2, step 1.1, algebra]

2.2 If $n$ is prime, the proposed one-factor factorization is valid, and [F3,F4] make its norm equation solvable. Let $T\ge0$ be the binary work of the uncapped construction on this input. By the calibrated bound [F2], $\mathbb E[T]\le P(k)$. The elementary inequality $T\ge B\,\mathbf1_{\{T>B\}}$ gives $\Pr(T>B)\le\mathbb E[T]/B\le1/2$. Whenever $T\le B$, [F2] returns an exact solution and step 1.1 accepts it. Thus success probability is at least $1/2$. The zero case is explicit in [F1], and [F4] plus the complete factored empty-list branch gives the numerator-one case. [F1, F2, F3, F4, step 1.1, algebra]

3.1 Condition first on all arithmetic data $\mathcal D$. Each call is then a deterministic function of its own input and its fresh solver bits, so its success events are independent under this conditional probability. By step 2.2 its conditional success probability is at least $I_i/2$; this also holds for the immediate zero/unit branches. Consequently $\Pr(J>j\mid\mathcal D)\le\prod_{i=1}^j(1-I_i/2)$. Average this inequality over $\mathcal D$. The indicators, rather than the successful-call events, are independent in the stated model; hence $\mathbb E[\prod_{i=1}^j(1-I_i/2)]=\prod_{i=1}^j(1-p_i/2)$. The lower bounds on $p_i$ give the displayed joint-failure estimate. Correlated numerical inputs can correlate the unconditional call successes, but cannot invalidate this estimate. [given, step 2.2, algebra] ∎

