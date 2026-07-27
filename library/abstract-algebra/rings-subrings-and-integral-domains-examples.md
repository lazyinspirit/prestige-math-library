---
page: rings-subrings-and-integral-domains-examples
title: "Rings, Domains and Fields: Examples and Counterexamples"
status: published
items: []
examples: [ex-integers-as-a-commutative-ring,
           ex-integers-are-an-integral-domain-not-a-field,
           ex-rationals-and-reals-as-fields,
           ex-cauchy-sequences-as-a-commutative-ring,
           ex-product-ring-has-zero-divisors,
           ex-the-zero-ring,
           ex-subring-that-is-not-a-subfield,
           cex-2z-is-not-a-subring,
           cex-ring-homomorphism-not-preserving-identity,
           fs-every-nonzero-element-is-a-unit-or-a-zero-divisor]
---

**Objective.** This page is the worked companion to Rings, Subrings, Integral
Domains and Fields, linked under Prerequisites above. That page fixes the axioms
and proves the general theory, building only one instance of its own — the
quaternions, which it needs on its own spine; this one supplies the rest, and a
witness for the clauses the general page had to state separately. Seven examples
and three refutations, two counterexamples and one false statement, are recorded
here.

**The number systems, re-read as rings.** The library owns $\mathbb{Z}$,
$\mathbb{Q}$ and $\mathbb{R}$ already, so the first task is to see the ring
axioms inside them rather than to build anything.
[[ex-integers-as-a-commutative-ring]] does that for $\mathbb{Z}$, and the point
is narrower than it looks: [[thm-int-comm-ring]] and [[thm-int-ordered-ring]]
were proved long before rings were defined and used the phrases "commutative
ring" and "totally ordered ring" informally, so this item is what records that
those phrases mean exactly what [[def-ring]] and [[def-ordered-ring]] mean.
[[ex-rationals-and-reals-as-fields]] does the same for $\mathbb{Q}$ and
$\mathbb{R}$, and has one extra step to take: their published order theorems are
stated as relations while [[def-ordered-field]] is stated by a positive cone, and
[[lem-ordered-ring-cone-and-order-agree]] is what carries one to the other. Both
have characteristic $0$.

**Where the hypotheses of the general page earn their keep.**
[[ex-integers-are-an-integral-domain-not-a-field]] is the standard separation:
$\mathbb{Z}$ satisfies every clause of [[def-zero-divisor-and-integral-domain]],
its group of units is $\{1,-1\}$, and $2$ is nonzero and not invertible, so an
integral domain need not be a field. [[ex-the-zero-ring]] is the ring in which
$1 = 0$; it has no zero divisors at all, vacuously, and is still not a domain,
which is why $1 \ne 0$ is a hypothesis of [[def-zero-divisor-and-integral-domain]]
and of [[def-division-ring]] rather than a consequence. Its characteristic is
$1$, the one value the general page's convention makes possible outside $0$ and
the values at least $2$. [[ex-subring-that-is-not-a-subfield]] puts $\mathbb{Z}$
inside $\mathbb{Q}$, by the embedding of [[lem-int-embeds-rat]] rather than by a
set inclusion, and shows the image is a subring whose element $j(2)$ has no
inverse there, so the inverse-closure clause of [[def-subfield]] is doing work.

**Two sources of zero divisors, and one that matters for the reals.**
[[ex-product-ring-has-zero-divisors]] shows that a product of two rings with
$1 \ne 0$ always has them, $(1,0)(0,1) = (0,0)$, so a product of integral domains
is never one; $\mathbb{Z} \times \mathbb{Z}$ is the instance.
[[ex-cauchy-sequences-as-a-commutative-ring]] reads [[thm-cauchy-ring]] as an
instance of [[def-commutative-ring]] and exhibits two eventually constant Cauchy
sequences with disjoint supports whose product is zero, so $\mathcal{C}$ is not
an integral domain. The index set is stated explicitly there and is **not**
$\mathbb{N}$: [[def-rational-cauchy-sequence]] indexes from $n \ge 1$, and since
$\mathbb{N}$ contains $0$ the ambient function ring is $\mathbb{Q}^{X}$ for
$X = \{\, n \in \mathbb{N} : n \ge 1 \,\}$.

**The two clauses that closure never supplies.**
[[cex-2z-is-not-a-subring]] takes the even integers inside $\mathbb{Z}$: closed
under addition, additive inverses and multiplication, containing $0$, and not a
subring, because $1 \notin 2\mathbb{Z}$. Under the convention of [[def-ring]] that
a ring has an identity, this is a counterexample rather than an example, and it
is the reason [[lem-subring-criterion]] leaves $1_R \in S$ standing on its own.
[[cex-ring-homomorphism-not-preserving-identity]] is the same phenomenon for
maps: $n \mapsto (n,0)$ from $\mathbb{Z}$ to $\mathbb{Z}\times\mathbb{Z}$ is
additive and multiplicative and sends $1$ to $(1,0) \ne (1,1)$, so clause (RH3) of
[[def-ring-homomorphism]] is not redundant.

**One false statement.**
[[fs-every-nonzero-element-is-a-unit-or-a-zero-divisor]] refutes the claim that
in a commutative ring every nonzero element is a unit or a zero divisor. The
witness is again $2$ in $\mathbb{Z}$: not a unit by [[lem-units-of-z]], and not a
zero divisor by [[lem-int-cancellation]]. The claim would follow from a
finiteness hypothesis it does not make, and the item says so as an observation
about the statement rather than as a result of this page.

**What this page does not contain.** Every witness above is built from
$\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$, the Cauchy sequences, a product of two
copies of $\mathbb{Z}$, or the one-element ring; no modular arithmetic is used,
and no item here assumes a ring is finite. The quaternions are *not* here: they
live on the general page, since companion pages are leaves in the reading order
and later pages need them.
