---
page: the-riemann-integral-examples
title: "The Riemann Integral: Definition and Integrability: Examples and Counterexamples"
status: draft
items: []
examples: [ex-integral-of-x-squared-from-the-definition,
           ex-refinement-improves-the-darboux-sums,
           ex-integral-of-the-floor-function,
           ex-indicator-of-the-cantor-set-is-integrable-with-integral-zero,
           ex-thomae-is-riemann-integrable-with-integral-zero,
           cex-dirichlet-is-not-riemann-integrable,
           cex-indicator-of-a-fat-cantor-set-is-not-integrable,
           ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set,
           cex-riemann-sums-along-one-sequence-of-tagged-partitions-do-not-suffice,
           cex-nonnegative-integrable-with-zero-integral-need-not-vanish]
---

**Objective.** Work the definitions of *The Riemann Integral* out on concrete
functions, and separate the notions the general theory leaves adjacent: measure
against category, countable against uncountable, and the Darboux sums against
the Riemann sums.

**Computed from the definition.**
[[ex-integral-of-x-squared-from-the-definition]] evaluates $\int_0^1 x^2 = 1/3$
with uniform partitions and the closed form $6\sum_{k<n}k^2 = n(n-1)(2n-1)$,
noting that the sum runs over $k < n$ and that attaching the other indexing
convention to the wrong sum is how one lands on $1/2$ or $1/6$.
[[ex-refinement-improves-the-darboux-sums]] carries out a single refinement of
the same function by hand — inserting $1/2$ moves the sums from $(0,1)$ to
$(1/8, 5/8)$ — and is the smallest illustration of
[[lem-refinement-inequalities]]. [[ex-integral-of-the-floor-function]] computes
$\int_0^3 \lfloor x \rfloor = 3$ for a genuinely discontinuous integrand, using
[[thm-monotone-implies-integrable]] for integrability and the uniform partitions
into $3M$ parts for the value; its lower sums are exactly $3$ at every $M$.

**Where integrability stands or falls.**
[[ex-indicator-of-the-cantor-set-is-integrable-with-integral-zero]] is
discontinuous at uncountably many points and integrable, so no countability
criterion could decide the question;
[[ex-thomae-is-riemann-integrable-with-integral-zero]] is discontinuous on a
dense set and integrable, so no closure or category criterion could either.
Against them, [[cex-dirichlet-is-not-riemann-integrable]] has lower integral $0$
and upper integral $1$ at every partition, and
[[cex-indicator-of-a-fat-cantor-set-is-not-integrable]] is discontinuous exactly
on a **closed nowhere dense** set and is still not integrable, because that set
cannot be covered by intervals of small total length. The Cantor and
Smith-Volterra-Cantor indicators differ in no topological respect used here and
in exactly one measure-theoretic respect, which is the content of
[[thm-lebesgue-criterion]].

**The converse direction.**
[[ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set]]
realises **every** null $F_\sigma$ subset of $[0,1]$ as the exact discontinuity
set of a bounded integrable function, by the explicit construction
$h(x) = 2^{-n(x)}$ with $n(x)$ the least index of a closed set containing $x$.
Together with [[thm-discontinuity-set-is-f-sigma]], whose conclusion for the
domain $[0,1]$ is that the discontinuity set is the trace on $[0,1]$ of an
$F_\sigma$ set and hence, $[0,1]$ being closed, itself $F_\sigma$, and with
[[thm-lebesgue-criterion]],
this closes the classification: null and $F_\sigma$ is exactly what such a
discontinuity set can be.

**The Riemann definition needs all its quantifiers.**
[[cex-riemann-sums-along-one-sequence-of-tagged-partitions-do-not-suffice]]
tags the uniform partitions of $[0,1]$ by rationals and gets Riemann sum $1$ at
every $N$, so the sums converge along that sequence although the function is not
integrable at all; and it observes that the very same partition also carries a
tagging by irrationals whose Riemann sum is $0$. So convergence along one
sequence of tagged partitions establishes nothing, and the universal quantifier
in [[thm-darboux-equals-riemann]] is not decoration. Finally
[[cex-nonnegative-integrable-with-zero-integral-need-not-vanish]] records that
Thomae's function is nonnegative, integrable with integral $0$, and positive on a
dense set, refuting
[[fs-nonnegative-integrable-with-zero-integral-vanishes]].

**Nothing on this page uses a choice principle beyond what it cites.** Where
[[thm-lebesgue-criterion]] is invoked it is only its converse half, "null implies
integrable", which is a theorem of ZF; the fat-Cantor counterexample does not go
through the criterion at all; and every tag or point selection made here is over
a finite family. One cost is inherited rather than incurred:
[[ex-integral-of-x-squared-from-the-definition]] takes integrability from
[[thm-continuous-implies-integrable]] and with it the single use of countable
choice inside Heine-Cantor. The ledger is
[[rem-riemann-integral-choice-ledger]].
