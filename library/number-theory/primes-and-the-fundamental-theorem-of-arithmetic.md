---
page: primes-and-the-fundamental-theorem-of-arithmetic
title: "Primes, Euclid's Lemma and the Fundamental Theorem of Arithmetic"
status: published
items: [def-prime, lem-prime-not-dividing-is-coprime, thm-euclids-lemma,
        cor-prime-iff-euclid-property, cor-euclids-lemma-for-finite-products,
        lem-every-integer-above-one-has-a-prime-divisor, thm-prime-factorisation-exists,
        thm-fundamental-theorem-of-arithmetic, cor-factorisation-of-a-nonzero-integer,
        thm-euclid-infinitude-of-primes, def-p-adic-valuation,
        lem-p-adic-valuation-basic, lem-p-adic-valuation-additive,
        thm-canonical-prime-factorisation, lem-divisibility-via-valuations,
        thm-gcd-and-lcm-from-valuations, lem-p-adic-valuation-on-q,
        cor-rational-root-of-an-integer-is-an-integer]
examples: []
---

**Objective.** This page is the one the divisibility page promised. Its summary
says in as many words that "primes, Euclid's lemma and unique factorisation are
**not** proved here; they belong to a later page, and no argument below assumes
them". Everything needed is already in place: the divisibility relation of
[[def-divides-in-z]], Bézout's identity and the characterisation of $\gcd$ in
[[cor-common-divisor-divides-gcd]], and — the item this page was waiting for —
[[lem-coprime-divides-product]], proved there with no primality whatever. What is
added here is the definition of a prime, Euclid's lemma, existence and uniqueness
of prime factorisation, Euclid's theorem on the infinitude of the primes, and the
$p$-adic valuation, which turns factorisation into arithmetic on exponents.

**The definition, and the two conventions inside it.** [[def-prime]] fixes
$p > 1$ with only $1$ and $p$ as positive divisors, and records the boundary
explicitly: $0$, $1$ and every negative integer are neither prime nor composite,
so the two words classify exactly the integers greater than $1$. The exclusion of
$1$ is argued where it is made rather than asserted as taste: with $1$ admitted,
the uniqueness half of [[thm-fundamental-theorem-of-arithmetic]] fails, and the
companion page carries the explicit witness. The definition also records that
"only $1$ and $p$ among the positive divisors" is the same condition as "only
$1$, $-1$, $p$, $-p$ among all divisors", which is the form several later proofs
use. No ring vocabulary appears anywhere on this page: the distinction between a
prime element and an irreducible element belongs to a page far above this one,
and what is proved here instead is the arithmetic content of their coincidence,
[[cor-prime-iff-euclid-property]].

**Euclid's lemma is two lines, and that is the design.**
[[lem-prime-not-dividing-is-coprime]] is the single place on this page where
primality is converted into coprimality: for a prime $p$, $\gcd(p,a)$ is $p$ when
$p \mid a$ and $1$ otherwise. [[thm-euclids-lemma]] then instantiates the
published [[lem-coprime-divides-product]] and is done. That lemma's own Remarks
say "no primality is used" in it, which is exactly why it could be homed a page
earlier, and why the present page inherits a short proof rather than a
re-derivation. [[cor-prime-iff-euclid-property]] proves the converse, so for
$p > 1$ the Euclid property characterises primality, and
[[cor-euclids-lemma-for-finite-products]] extends the lemma to a finite product
by induction — including at $n = 0$, where the empty product is $1$ and a prime
never divides $1$, so the statement is true there rather than excluded.

**Existence, then uniqueness, and they are genuinely separate.**
[[lem-every-integer-above-one-has-a-prime-divisor]] takes the least divisor of
$n$ exceeding $1$ and shows it is prime, using
[[lem-int-bounded-above-has-greatest]] rather than well-ordering directly,
because the set in question is a set of integers.
[[thm-prime-factorisation-exists]] turns that into a strong induction: every
$n \ge 1$ is a finite product of primes, with $n = 1$ the empty product, and it
also records the converse, that every finite product of primes is at least $1$.
[[thm-fundamental-theorem-of-arithmetic]] adds uniqueness, and states it with a
quantifier rather than a gesture: the two lists have equal length and are matched
by a permutation of the von Neumann natural $r$, in the sense of
[[def-symmetric-group]]. The letter $\pi$ is used for that permutation because
$\sigma$ is already the successor function. Existence needs a descent; uniqueness
needs Euclid's lemma, and the companion page exhibits a setting where the first
holds and the second fails. [[cor-factorisation-of-a-nonzero-integer]] then puts
the sign on a unit: every nonzero $n$ is $u \prod_{i<r} p_i$ with
$u \in \{1,-1\}$, and $u$, $r$ and the list up to order are determined.

**Euclid's theorem.** [[thm-euclid-infinitude-of-primes]] is stated in the form
that carries the content: for every finite list of primes there is a prime not on
it. The proof takes $N = \prod_{i<n} p_i + 1$, checks $N > 1$ — the case $n = 0$
is real, where $N = 2$ — and applies the prime-divisor lemma. It concludes only
that $N$ has a prime divisor outside the list, never that $N$ is prime; the
companion page refutes that misreading with $30031 = 59 \cdot 509$. The second
clause, that the set of primes is not finite in the sense of [[def-countable]],
follows because a bijection from that set onto a natural number would be a list
enumerating every prime.

**The $p$-adic valuation.** [[def-p-adic-valuation]] defines $v_p(a)$ for a
prime $p$ and a nonzero $a$ as the greatest $k \in \mathbb{N}$ with
$p^{k} \mid a$, and discharges the existence of that greatest element inside the
definition: the set of exponents is nonempty because $p^{0} = 1$, and bounded
because $p^{k}$ exceeds its own exponent while $p^{k} \mid a$ forces
$p^{k} \le |a|$. The powers are the monoid powers of [[def-group-power]] in
$(\mathbb{Z},\cdot,1)$, not the real ones, and $v_p(0)$ is left undefined rather
than set to infinity, since this library has no ordered set to hold an infinite
value. [[lem-p-adic-valuation-basic]] converts the definition into the form the
proofs use, chiefly $a = p^{v_p(a)}a'$ with $p \nmid a'$, and
[[lem-p-adic-valuation-additive]] proves $v_p(ab) = v_p(a) + v_p(b)$ together
with the ultrametric inequality $v_p(a+b) \ge \min\{v_p(a),v_p(b)\}$. Additivity
is where primality enters, through Euclid's lemma, and among the valuation
lemmas it is the only place it does.

**Factorisation read by exponents.** [[thm-canonical-prime-factorisation]] states
the canonical form honestly: for an injective list of primes covering the prime
divisors of $n$, one has $n = \prod_{i<r} p_i^{\,v_{p_i}(n)}$, the exponents are
determined, and every prime off the list has valuation $0$. There is deliberately
no product over all primes, because an indexed product with finite support is not
available at this point in the library — [[def-monoid-finite-product]] multiplies
a finite list. [[lem-divisibility-via-valuations]] proves that for positive $a$
and $b$, $a \mid b$ holds exactly when $v_p(a) \le v_p(b)$ for every prime $p$;
its reverse direction is a descent that peels off one prime at a time and needs
no canonical form at all.

**The seam with the divisibility page.** [[thm-gcd-and-lcm-from-valuations]] is
the agreement item, and its point is that this page does not introduce a rival
$\gcd$: $v_p(\gcd(a,b)) = \min\{v_p(a),v_p(b)\}$ and
$v_p(\operatorname{lcm}(a,b)) = \max\{v_p(a),v_p(b)\}$, and any positive integer
with those valuations *is* the $\gcd$, respectively the $\operatorname{lcm}$,
already defined in [[def-common-divisor-and-gcd]] and [[def-lcm]]. Adding the two
clauses recovers $\gcd \cdot \operatorname{lcm} = |ab|$ of
[[thm-gcd-lcm-product]]. Both arguments are restricted to positive integers,
because $v_p(0)$ is undefined and signs are handled by
$\gcd(a,b) = \gcd(|a|,|b|)$.

**Two consequences that reach outside this page.**
[[lem-p-adic-valuation-on-q]] extends $v_p$ to the nonzero rationals by
$v_p(a/b) = v_p(a) - v_p(b)$, proves the value independent of the
representative, and carries the two laws across. That well-definedness is exactly
what the published [[ex-p-adic-ultrametric]] said it lacked: that item builds the
$2$-adic absolute value from parity alone and records that the general $p$-adic
valuation "needs primality and unique factorisation in $\mathbb{Z}$, neither of
which this item develops or assumes". Nothing metric is stated here; the
absolute value $|x|_p$ and the ultrametric belong to the metric-space pages.
[[cor-rational-root-of-an-integer-is-an-integer]] proves that a rational root of
$x^{k} = m$ is an integer, entirely inside $\mathbb{Q}$ and with no appeal to
real $n$-th roots; the companion page runs the three instances the library uses.

**What is deliberately absent.** No congruences and no modular arithmetic: they
arrive on the next page, and every argument here is written with explicit
divisibility witnesses instead. No claim that the characteristic of a ring is $0$
or prime — that statement is deferred by [[def-ring-characteristic]] and needs
the definition of a ring, which sits far above this page; it is not discharged
here and no argument below approaches it. No product over all primes, no
statement about the distribution of primes beyond two facts: that there are
infinitely many, proved here, and that the gaps between them are unbounded,
proved on the companion page. And no bound on the size of the
witness in Euclid's theorem. Eighteen items make up this page: two definitions,
six lemmas, six theorems and four corollaries, nine of them marked as landmarks
in the flowchart above.
