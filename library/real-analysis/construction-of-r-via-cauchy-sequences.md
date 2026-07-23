---
page: construction-of-r-via-cauchy-sequences
title: "Construction of the Real Numbers via Cauchy Sequences"
status: draft
items: [def-integers, lem-int-equivalence, def-int-operations,
        lem-int-add-well-defined, lem-int-mul-well-defined, thm-int-comm-ring,
        def-int-order, thm-int-ordered-ring, lem-int-cancellation, lem-nat-embeds-int,
        def-rationals, lem-rat-equivalence, def-rat-operations,
        lem-rat-ops-well-defined, thm-rat-field, def-rat-order,
        thm-rat-ordered-field, lem-int-embeds-rat, lem-rat-archimedean, lem-rat-triangle,
        def-rational-cauchy-sequence, def-null-sequence, lem-cauchy-bounded,
        lem-null-is-cauchy, thm-cauchy-ring, lem-null-ideal,
        lem-cauchy-away-from-zero, lem-null-maximal, def-real-numbers,
        thm-reals-field, def-real-order, thm-reals-ordered-field,
        lem-rat-embeds-dense, def-real-limit, thm-reals-cauchy-complete]
examples: [ex-one-over-n-null, fs-sqrt2-rational, fs-rationals-complete]
---

**Objective.** This page constructs the real number field $\mathbb{R}$ via Cauchy
sequences, starting from the fundamental definitions of the integers and the
rational numbers, and proves that $\mathbb{R}$ is a totally ordered, complete
field. The natural numbers $\mathbb{N}$, with their arithmetic and order, are the
assumed starting point.

**Layer 1: from $\mathbb{N}$ to $\mathbb{Z}$.** Subtraction fails in
$\mathbb{N}$. The integers are defined as equivalence classes of pairs $(a,b)$
of naturals, where $(a,b)$ encodes the formal difference $a - b$
([[def-integers]]), with arithmetic defined on representatives
([[def-int-operations]]). The result is a commutative ring
([[thm-int-comm-ring]]): a set with an addition and a multiplication, both
associative and commutative, where multiplication distributes over addition,
addition has an identity $0$ and an inverse for every element, and
multiplication has an identity $1$. The integers also carry a total order,
defined on representatives by $(a,b) \le (c,d)$ exactly when $a + d \le b + c$:
any two integers are comparable, and the order is compatible with addition and
with multiplication by nonnegative elements, so $\mathbb{Z}$ is a totally
ordered commutative ring.

**Layer 2: from $\mathbb{Z}$ to $\mathbb{Q}$.** Division fails in $\mathbb{Z}$.
The rationals are equivalence classes of pairs of integers with nonzero second
component, encoding formal quotients $a/b$. The result is a field: a commutative
ring in which every nonzero element has a multiplicative inverse. The total order
extends from $\mathbb{Z}$: any two rationals remain comparable, and the order
stays compatible with the arithmetic; a field equipped with such an order is a
totally ordered field.

**Layer 3: from $\mathbb{Q}$ to $\mathbb{R}$.** Limits fail in $\mathbb{Q}$:
sequences such as $1, 1.4, 1.41, 1.414, \dots$ cluster ever more tightly yet
converge to no rational. A Cauchy sequence is one whose terms eventually stay
within any prescribed distance of one another ([[def-rational-cauchy-sequence]]).
The reals are equivalence classes of Cauchy sequences of rationals, two
sequences being identified when their difference is a null sequence
([[def-null-sequence]]). Arithmetic passes to the quotient, the null sequences
form a maximal ideal so that $\mathbb{R}$ is a field, and the order extends from
$\mathbb{Q}$.

**Destination.** $\mathbb{R}$ is a totally ordered field that is complete: every
Cauchy sequence of reals converges to a real. Completeness is the payoff of the
construction, and it fills the holes once and for all, since completing
$\mathbb{R}$ by the same device yields nothing new.
