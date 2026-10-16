---
id: alg-qc-cyclotomic-scaled-grid-and-norm-solver
kind: algorithm
title: Cyclotomic scaled grid and norm-equation solver
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - def-qc-dyadic-cyclotomic-ring
  - def-qc-cyclotomic-bullet-automorphism
  - lem-qc-dyadic-cyclotomic-conjugate-norm
  - def-qc-denominator-exponent
  - lem-qc-denominator-exponent-well-defined
  - lem-qc-dyadic-coefficient-encoding
  - lem-qc-cyclotomic-scaled-grid-finiteness
  - cor-rational-algebraic-integers-are-integers
  - thm-qc-cyclotomic-norm-equation-decision
  - thm-qc-factored-cyclotomic-norm-equation-efficient
  - lem-qc-cyclotomic-euclidean-factorization-and-units
  - def-qc-ancilla-free-rz-approximation-problem
  - alg-qc-rz-efficient-scaled-grid-iterator
  - thm-qc-rz-efficient-scaled-grid-enumeration
justified_by:
  - lem-qc-capped-prime-norm-attempt-success
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations"
      url: https://arxiv.org/pdf/1403.2975
dependency_level: 11
---

## Definition

Fix $\omega=e^{i\pi/4}$ and $D=\mathbb Z[\omega,1/2]$. Use the automorphism
$\bullet$ from [[def-qc-cyclotomic-bullet-automorphism]], which sends
$\omega$ to $-\omega=\omega^5$ and fixes $i$. Let $0<\varepsilon<1/2$ and
$\theta\in\mathbb R$. The scaled grid for this input is

$$\mathcal G(\theta,\varepsilon)=\{u\in D:\ |u|\le1,\ |u^\bullet|\le1,\ \operatorname{Re}(e^{i\theta/2}u)\ge1-\varepsilon^2/2\}.$$

The default iterator is [[alg-qc-rz-efficient-scaled-grid-iterator]], with
$w=e^{-i\theta/2}$. It emits every candidate once in increasing least
$k=\operatorname{sde}(u)$, with randomized order within each layer and
finite layer completion for every random-bit sequence. Its expected prefix
cost and all fixed prefix moments are proved in
[[thm-qc-rz-efficient-scaled-grid-enumeration]].

A complete finite-search alternative uses lexicographic power-basis
coefficients within each layer. For each $k\ge0$, write
$u=(a_0+a_1\omega+a_2\omega^2+a_3\omega^3)/(\sqrt2)^k$ with least exponent
$k$; the finite coefficient bound is
$|a_j|\le\lfloor2^{k/2}\rfloor$, proved in
[[lem-qc-cyclotomic-scaled-grid-finiteness]]. Test the three displayed
conditions exactly. This defines a finite candidate list for each $k$.

For a candidate $u$, put
$\xi=1-u^\dagger u=1-|u|^2\in D_+=\mathbb Z[\sqrt2,1/2]$, using
[[lem-qc-dyadic-cyclotomic-conjugate-norm]]. For scalars, $z^\dagger=\bar z$.
Write
$\xi^\bullet\xi=n/2^\ell$ with $n\in\mathbb Z$ and least $\ell\ge0$; compute
it by writing $\xi=a+b\sqrt2$ with $a,b\in\mathbb Z[1/2]$ and multiplying
$(a-b\sqrt2)(a+b\sqrt2)=a^2-2b^2$. The two disk conditions give
$\xi,\xi^\bullet\ge0$, so $n\ge0$; if $\xi\ne0$, injectivity of $\bullet$
gives $n>0$.
The complete norm-equation subprocedure receives $\xi$ and, if $n\ne0$, a prime
factorization of $n$. It must decide whether some $t\in D$ satisfies
$t^\dagger t=\xi$, return an exact such $t$ if one exists, and otherwise return
`NO_SOLUTION`. If $\xi=0$, it returns $t=0$. A bounded factorization attempt
may return `FACTOR_TIMEOUT`; that result skips this candidate and is not a
proof of `NO_SOLUTION`.

### Factored norm-equation subprocedure

When the supplied integer factorization is available, use the efficient
construction in [[thm-qc-factored-cyclotomic-norm-equation-efficient]].
Clear the denominator by $\eta=4^r\xi$, taking the least nonnegative
$r$ for which $\eta\in\mathbb Z[\sqrt2]$. For each rational prime in its
known norm factorization, recover its real prime generators using
$\gcd(p,\sqrt2-b)$ when $b^2=2\pmod p$ exists, and otherwise retain
$p$. Split these into cyclotomic prime generators by the displayed modular
roots of $-1$ or $-2$ and cyclotomic gcds; retain the inert generators and
include $\delta=1+\omega$ over $2$. Recover the exponents in
$\eta$ by exact division, allocate them under complex conjugation as below,
and recover the real unit by multiplying by $1+\sqrt2$ or its inverse
until its positive embedding lies in $[1,1+\sqrt2)$.
The cited construction specifies all residue-class branches and its
randomized modular square-root subroutine; balance gcd remainders by real
units as there. It returns an exact solution or `NO_SOLUTION` and has
expected polynomial bit cost in the explicit algebraic input size. For a
grid candidate of exponent $k$, this is polynomial in $k+1$.

### Calibrated bounded prime attempts

In bounded mode no prime recognition oracle is used. For candidate exponent
$k$, use the fixed calibrated polynomial
$$P(k)=2^{200}(k+1)^{20}$$
from [[thm-qc-factored-cyclotomic-norm-equation-efficient]]. If $n=0$,
return $t=0$. If $n=1$, run the complete efficient construction with the
empty odd-prime factor list; its remaining powers of two are known.

For $n>1$, execute the factored construction prospectively, using the
single factor hint $n^1$, for at most $2P(k)$ of its elementary binary
operations. This is an attempt, not a claim that $n$ is prime. Instrument
all loops, including random sampling, with this counter. Guard every partial
operation: check divisors for zero and obtain modular inverses by the
integer extended Euclidean algorithm, aborting if the gcd is not one.
Impossible order/root searches, malformed outputs, negative solver outcomes,
failed inverses, and work-cap interruptions all end the attempt with
`FACTOR_TIMEOUT`, never with a claim of `NO_SOLUTION`.

Before accepting any prospective output, reduce its rational power-basis
coefficients and check $t^\dagger t=\xi$ exactly. Accept only when that
equality holds; otherwise return `FACTOR_TIMEOUT`. Watchdog, guard and final
certificate costs are charged; they are polynomial in $k+1+P(k)$ even on
composite inputs. The solver-work counter bounds every intermediate bit
string by its input length plus $2P(k)$, so certification cannot hide an
unbounded output cost. Use fresh independent random bits at each candidate.

After the capped prime attempt fails, return FACTOR_TIMEOUT for this
candidate and continue to the next grid candidate. Bounded mode makes no
additional factoring attempt and takes no factor-suggestion procedure or
additional factor-attempt budget as input. Complete oracle mode instead
supplies a valid full factorization and runs the complete efficient solver
without this cap.

### Complete finite-search alternative

Use the complete terminating construction of
[[thm-qc-cyclotomic-norm-equation-decision]]. Explicitly, after the zero
case choose the least integer $r\ge0$ clearing the coefficient denominators so that
$\eta=4^r\xi\in\mathbb Z[\sqrt2]$. Factor $\eta$ in
$O=\mathbb Z[\omega]$ by the finite divisor search in
[[lem-qc-cyclotomic-euclidean-factorization-and-units]]. Group the prime
associate classes under $\dagger$. If any fixed class has odd exponent,
return `NO_SOLUTION`. Otherwise form $s$ by allocating half each fixed
exponent, and all of the common exponent to one class from each conjugate
pair. Compute the positive real unit $e=\eta/(s^\dagger s)$, recover
$v\in\mathbb Z[\sqrt2]$ with $v^2=e$ by the unit construction, and return
$t=vs/2^r$. Every computation here uses exact power-basis arithmetic.

The supplied integer factorization is retained as an admissible input for
implementations using rational-prime splitting. The finite-search mode above
does not need it and has no asserted polynomial runtime. In bounded mode,
FACTOR_TIMEOUT skips the current candidate and never changes the complete
subprocedure's NO_SOLUTION criterion.

### Comparison contract

The grid comparisons involve the supplied real parameters $\theta$ and
$\varepsilon$. Their exact comparison interface is part of the outer
real-input contract. It is independent of the algebraic norm solver, whose
sign, equality, divisibility and associate tests are all exact and terminating.
