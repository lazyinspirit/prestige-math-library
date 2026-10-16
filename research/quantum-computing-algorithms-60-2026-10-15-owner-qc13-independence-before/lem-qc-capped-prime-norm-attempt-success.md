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
sources:
  references:
    - title: "Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations, Algorithm 7.6 and Proposition 8.8"
      url: https://arxiv.org/pdf/1403.2975
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

Under an independent candidate-primality model with probability at least
$c/(k_j+1)$, using fresh independent random bits at each candidate gives
independent successful prime-attempt events with probabilities at least
$c/(2(k_j+1))$. Thus these attempts meet the stopping-bound hypothesis with
only a constant change in $c$.

## Facts & Assumptions

**Given:** The calibrated polynomial budget bound $P$, the exact algebraic
input, and independent random bits for each call. In the last assertion,
modelled candidate prime events are mutually independent and independent of
all internal random bits; the candidate ordering is fixed before those bits
are drawn.

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

1.1 The exact certificate check in [F1] is a comparison of the four rational
power-basis coefficients of $t^\dagger t$ and $\xi$. Equality of these
coefficients is equality in the field, so acceptance always proves the
required equation. On a composite input no field property of a proposed
residue quotient and no `NO_SOLUTION` message is used as evidence: a failed
operation, negative outcome, or work-cap interruption causes only a skip.
[F1, given, algebra]

1.2 The construction is interrupted after $B=2\lceil P(k)\rceil$ binary
operations, regardless of whether its proposed prime factor was valid.
Every generated bit string then has length bounded by the input length plus
$B$. The grid-input bound of [F2] makes its input length polynomial in
$k+1$. A fixed-degree rational-coefficient multiplication and equality check
therefore takes polynomial work in $k+1+B$, by schoolbook integer
multiplication and division. Since $B$ is a specified polynomial, total work
including exact certification is polynomial on every input. [F1, F2, step 1.1, algebra]

1.3 If $n$ is prime, the proposed one-factor factorization is valid, and
[F3,F4] make its norm equation solvable. Let $T\ge0$ be the binary work of
the uncapped construction on this input. By the calibrated bound [F2],
$\mathbb E[T]\le P(k)$. The elementary inequality
$T\ge B\,\mathbf1_{\{T>B\}}$ gives
$\Pr(T>B)\le\mathbb E[T]/B\le1/2$.
Whenever $T\le B$, [F2] returns an exact solution and step 1.1 accepts it.
Thus success probability is at least $1/2$. The zero case is explicit in
[F1], and [F4] plus the complete factored empty-list branch gives the
numerator-one case. [F1, F2, F3, F4, step 1.1, algebra]

1.4 At candidate $j$, combine its modelled prime event with the event that
its fresh internal bits give a successful capped call. The latter has
conditional probability at least $1/2$ on a prime input by step 1.3. The
combined event therefore has probability at least $c/(2(k_j+1))$. Each event
is a function only of that candidate's model variable and that call's
independent bits. These collections are independent across candidates, so
the combined events are independent. Immediate zero/unit successes can
only shorten stopping. No adaptive selection from internal failed trials is
used to choose the next candidate; all candidates follow the fixed grid
ordering. [given, step 1.3, algebra] ∎
