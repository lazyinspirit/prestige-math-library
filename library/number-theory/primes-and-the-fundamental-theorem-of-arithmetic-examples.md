---
page: primes-and-the-fundamental-theorem-of-arithmetic-examples
title: "Primes and Factorisation: Examples and Counterexamples"
status: published
items: []
examples: [ex-prime-factorisation-worked, ex-two-is-the-only-even-prime,
           ex-no-rational-square-root-of-three, ex-arbitrarily-long-runs-of-composites,
           cex-hilbert-monoid-factorisation-not-unique,
           cex-calling-one-prime-destroys-uniqueness,
           fs-euclids-product-of-primes-plus-one-is-prime,
           fs-n-squared-plus-n-plus-forty-one-is-always-prime,
           fs-every-fermat-number-is-prime]
---

**Objective.** This is the worked companion to Primes, Euclid's Lemma and the
Fundamental Theorem of Arithmetic, linked under Prerequisites above. That page
proves the theory with almost no numbers in sight; this one supplies the
computations, the witnesses that make its hypotheses do work, and the three
misreadings the subject invites. Four examples, two counterexamples and three
false statements are recorded here.

**The theory, run on numbers.** [[ex-prime-factorisation-worked]] factors $360$
and $84$, reads off the valuation table against the injective list $(2,3,5,7)$,
and computes $\gcd(360,84) = 12$ and $\operatorname{lcm}(360,84) = 2520$ from the
minima and maxima of the exponents. The point is the cross-check, not the
arithmetic: the Euclidean algorithm of [[thm-euclidean-algorithm]] returns $12$
from $360 = 4 \cdot 84 + 24$, $84 = 3 \cdot 24 + 12$, $24 = 2 \cdot 12 + 0$
without ever mentioning a prime, and $12 \cdot 2520 = 30240 = 360 \cdot 84$
matches [[thm-gcd-lcm-product]]. Three routes, one answer, because
[[thm-gcd-and-lcm-from-valuations]] proves the exponent recipe *identifies* the
$\gcd$ of [[def-common-divisor-and-gcd]] rather than defining a second one.

**The smallest prime.** [[ex-two-is-the-only-even-prime]] checks that $2$ is
prime — there is no integer strictly between $0$ and $1$, so the only positive
divisors of $2$ are $1$ and $2$ — and that every even integer above $2$ is
composite. It also records why parity alone sufficed for the $2$-adic
construction elsewhere in the library, while a general prime needs
[[thm-euclids-lemma]].

**Irrationality, a second time.** [[ex-no-rational-square-root-of-three]] runs
[[cor-rational-root-of-an-integer-is-an-integer]] three times: no rational
squares to $3$ or to $6$, and none cubes to $2$. In each case the corollary
reduces the question to an integer, and the remaining work is a size check —
$1 < 3 < 4$, and so on. The library already refuted "some rational squares to
$2$" on the construction pages, by parity alone and long before primes existed
here; that is [[fs-sqrt2-rational]], and the two arguments agree.

**Gaps between primes.** [[ex-arbitrarily-long-runs-of-composites]] produces, for
every $n$, a run of $n$ consecutive composite integers: with
$N = \prod_{j<n}(j+2)$, each of $N+2, \dots, N+n+1$ is divisible by its own
offset. No factorial is used — the library's $k!$ lives inside $\mathbb{R}$ on a
different page — and the finite product of [[def-monoid-finite-product]] in
$(\mathbb{Z},\cdot,1)$ does the work. The example says the gaps are unbounded
and nothing about where the primes are; it is entirely compatible with
[[thm-euclid-infinitude-of-primes]].

**Why uniqueness is not free.**
[[cex-hilbert-monoid-factorisation-not-unique]] takes the multiplicative monoid
$H = \{1,4,7,10,\dots\}$ of positive integers one more than a multiple of $3$.
Every element above $1$ factors into irreducibles of $H$, by the same descent
that proves [[thm-prime-factorisation-exists]]; but $100 = 4 \cdot 25 = 10 \cdot
10$, with $4$, $10$ and $25$ all irreducible in $H$, so uniqueness fails. What
fails underneath is Euclid's lemma: $10$ divides $4 \cdot 25$ inside $H$ and
divides neither factor. $H$ was chosen because it needs nothing beyond
$\mathbb{Z}$ and divisibility; the classical witness for this phenomenon uses
machinery that is not available at this point in the reading order.

**Why $1$ is not a prime.** [[cex-calling-one-prime-destroys-uniqueness]] admits
$1$ and watches the theorem break: $6 = 2 \cdot 3 = 1 \cdot 2 \cdot 3 = 1 \cdot 1
\cdot 2 \cdot 3$ are lists of lengths $2$, $3$ and $4$ with the same product, so
the clause $r = s$ of [[thm-fundamental-theorem-of-arithmetic]] fails at once,
and no permutation can be found because the index sets differ in size. Existence
survives the change, which is what makes the exclusion of $1$ a decision forced
by uniqueness alone.

**Three false statements.**
[[fs-euclids-product-of-primes-plus-one-is-prime]] refutes the standard
misreading of Euclid's theorem: $2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 13 + 1
= 30031 = 59 \cdot 509$ is composite, while the theorem only ever promised a
prime divisor outside the list — and $59$, which is prime, is such a divisor.
[[fs-n-squared-plus-n-plus-forty-one-is-always-prime]] fails at $n = 40$, where
$40^{2} + 40 + 41 = 41 \cdot 41$; the failure is structural, since
$40^{2} + 40 = 40 \cdot 41$, and the item exists to show that forty successful
tests establish nothing.
[[fs-every-fermat-number-is-prime]] fails at the fifth Fermat number, by Euler's
argument: $641 = 5 \cdot 2^{7} + 1 = 2^{4} + 5^{4}$, and those two readings
together force $641 \mid 2^{32} + 1$. Congruence notation is not available at
this point in the library, so every step there is written as a divisibility
statement with an explicit witness.

**What is deliberately absent.** No claim that $509$ or the cofactor of the fifth
Fermat number is prime, since neither is needed. No verification that
$n^{2}+n+41$ is prime for $n < 40$, or that the first five Fermat numbers are
prime: both are recorded as classical facts and neither is used. And no primality
test beyond trial division bounded by the observation that a composite $n$ has a
prime divisor $q$ with $q \cdot q \le n$, which is proved where it is used.
