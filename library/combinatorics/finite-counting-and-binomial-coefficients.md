---
page: finite-counting-and-binomial-coefficients
title: "Finite Counting, Factorials and Binomial Coefficients"
status: published
items: [def-finite-cardinality, thm-subset-of-a-finite-set, def-nat-finite-sum-and-product,
        lem-nat-finite-sum-laws-and-the-canonical-embedding, lem-finite-sum-permutation-invariance,
        def-sum-over-a-finite-index-set, thm-sum-rule, thm-product-rule, def-nat-power,
        thm-cardinality-of-a-set-of-functions, cor-cardinality-of-the-power-set,
        def-factorial-and-falling-factorial, thm-number-of-injections,
        thm-number-of-bijections-of-a-finite-set, def-binomial-coefficient,
        thm-binomial-closed-formula, thm-pascals-rule, thm-two-element-subsets-count,
        thm-binomial-theorem, cor-binomial-theorem-consequences, thm-vandermonde-identity,
        def-multinomial-coefficient, thm-multinomial-theorem, def-composition-of-a-natural-number,
        thm-stars-and-bars, rem-counting-conventions-and-scope]
examples: []
---

**Objective.** This page builds finite counting from the ground up: what
$\lvert A\rvert$ means, the two rules that every count is assembled from, and the
factorials and binomial coefficients they produce. It ends with the binomial and
multinomial theorems and with stars and bars. Everything is proved from this
page's declared prerequisites — the countability page and the page on roots and
rational powers — together with the naturals and the ordered-field foundations
below them; nothing is imported from later in the reading order.

The starting point is [[def-finite-cardinality]]. A set is finite when it is
equinumerous with a natural number, and the pigeonhole principle says it is
equinumerous with exactly one, so $\lvert A\rvert$ names a single natural number.
Four consequences are proved there and used constantly: $\lvert n\rvert = n$,
$\lvert A\rvert = 0$ exactly for the empty set, transport of cardinality along a
bijection, and the equivalence of $\lvert A\rvert = \lvert B\rvert$ with
$A \approx B$. The workhorse that follows, [[thm-subset-of-a-finite-set]], says
that a subset of a finite set is finite with no larger cardinality, that equal
cardinality forces equality of the sets, and that an injection or a surjection of
a finite set onto itself is a bijection. That last clause is where finiteness is
spent; the successor map on $\mathbb{N}$ shows what happens without it.

**Several items on this page exist because of a gap in the published library,
and it is worth saying which.** The finite sums already in the library are real valued:
[[def-finite-sum]] opens with a sequence $a : \mathbb{N} \to \mathbb{R}$. Every
count on this page is a natural number, so the sum rule, the row sums of Pascal's
triangle, the condition $\sum_i k_i = n$ on a multinomial coefficient and the
stars-and-bars count all need a sum that stays in $\mathbb{N}$. That is
[[def-nat-finite-sum-and-product]], built by the same recursion, together with
[[lem-nat-finite-sum-laws-and-the-canonical-embedding]], which proves the usual
laws and the bridge $\iota(\sum^{\mathbb{N}}) = \sum^{\mathbb{R}}\iota$ and the
injectivity of $\iota$. Those two clauses are the licence used throughout: an
identity between counts may be proved in $\mathbb{R}$, where subtraction and
division exist, and carried back. The third minted item is
[[lem-finite-sum-permutation-invariance]]. The published law list has additivity,
scaling, splitting, monotonicity, telescoping and the product laws, and **no**
permutation-invariance clause; without one, the sum $\sum_{i \in S} a_i$ over a
finite index set is not well posed. It is proved here for all four of
$(\mathbb{R},+)$, $(\mathbb{R},\cdot)$, $(\mathbb{N},+)$, $(\mathbb{N},\cdot)$ by
a single argument, and [[def-sum-over-a-finite-index-set]] is then well defined,
with an explicit bridge back to the sum over an initial segment.

The two counting rules follow. [[thm-sum-rule]] splices two enumerations into
one; disjointness is used at exactly one step, the injectivity of the splice, and
that step is named so the false statement on the companion page can point at it.
The same splice, used as an enumeration, splits a sum along a partition of its
index set, which is what the multinomial theorem later needs.
[[thm-product-rule]] then counts $A \times B$ by slicing it over $B$ and adding,
which needs no arithmetic at all, and iterates to a finite product of sets.
Exponentiation of naturals is minted in [[def-nat-power]], again because
[[def-integer-power]] is real valued, and it carries the bridge
$\iota(m^{n}) = \iota(m)^{n}$ and the agreement $0^{0} = 1$. With it,
[[thm-cardinality-of-a-set-of-functions]] gives $\lvert A^{B}\rvert =
\lvert A\rvert^{\lvert B\rvert}$, both degenerate cases included, and
[[cor-cardinality-of-the-power-set]] gives $\lvert\mathcal{P}(A)\rvert = 2^{n}$
together with $n < 2^{n}$, deduced from Cantor's theorem rather than left beside
it.

[[def-factorial-and-falling-factorial]] defines $n!$ and $n^{\underline{k}}$ by
recursion inside $\mathbb{N}$. **$0! = 1$ is the base clause of that recursion,
not an imported convention**: the monoid version of the empty product comes later
in the reading order, so it could not be cited here even if one wanted to. The
agreement with the empty product is then proved, and so is
$\iota(n!) = \prod_{j<n}\iota(j+1)$, which is what keeps this factorial and the
real-valued one used elsewhere in the library a single object.
[[thm-number-of-injections]] counts injections as $n^{\underline{k}}$, with both
boundary regimes checked, and [[thm-number-of-bijections-of-a-finite-set]] gets
$n!$ as the case $k = n$. That theorem is stated about a **set** of bijections,
with no group vocabulary anywhere, because the symmetric group is later in the
reading order; it is on this page rather than among the examples so that a later
page may cite it.

[[def-binomial-coefficient]] defines $\binom{n}{k}$ as the count
$\lvert [n]^{k}\rvert$ of $k$-element subsets. Integrality is then free and the
familiar quotient is a theorem: [[thm-binomial-closed-formula]] counts the
bijections of $n$ twice, once directly and once by the image of an initial
segment, and gets $\binom{n}{k}k!(n-k)! = n!$, the relation
$\binom{n}{k}k! = n^{\underline{k}}$, the quotient formula in $\mathbb{R}$, and
the symmetry $\binom{n}{k} = \binom{n}{n-k}$ by complementation.
[[thm-pascals-rule]] follows by splitting the $k$-subsets according to whether
they contain a fixed point, and carries the hockey-stick identity as its second
clause. [[thm-two-element-subsets-count]] records the count of unordered pairs,
$2\binom{n}{2} = n(n-1)$, checked at $n = 0$ and $n = 1$; it is stated purely as
a count, since no graph is defined anywhere in the library at this point.

[[thm-binomial-theorem]] is proved by induction from Pascal's rule. It is stated
**in $\mathbb{R}$**, with the coefficient written $\iota\binom{n}{k}$, because a
binomial coefficient is a natural number and not an element of the field; the
commutative-ring version is a separate statement, to be made where rings exist.
[[cor-binomial-theorem-consequences]] draws the row sum $2^{n}$, proved twice on
purpose, once by partitioning the power set and once through the theorem, and the
alternating row sum, which is $0$ **only for $n \ge 1$**: at $n = 0$ the sum is
$\binom{0}{0} = 1$, and that is exactly where $(-1+1)^{n} = 0^{n}$ stops being
$0$. [[thm-vandermonde-identity]] is a double count over a disjoint union, chosen
in preference to generating functions and to coefficient comparison, both of
which need machinery far later in the reading order.

The last block generalises. [[def-multinomial-coefficient]] counts the colourings
of a finite set with prescribed fibre sizes, the condition $\sum_i k_i = n$ being
part of the definition rather than a side remark, and
[[thm-multinomial-theorem]] gives both the closed formula
$\binom{n}{k}\prod_i k_i! = n!$ and the expansion of a power of a sum, its outer
sum indexed by the finite set of tuples summing to $n$.
[[def-composition-of-a-natural-number]] names those tuples and records the counts
at $m = 0$, and [[thm-stars-and-bars]] computes them: $\binom{n+m-1}{m-1}$ weak
compositions for $m \ge 1$, and $\binom{n-1}{m-1}$ compositions for $m \ge 1$ and
$n \ge 1$. The stars-and-bars bijection is exhibited explicitly and shown
injective; surjectivity is read off from the count, which spares an appeal to the
increasing enumeration of an arbitrary subset.
[[rem-counting-conventions-and-scope]] closes the page with every convention it
fixes and with what is deliberately left to later pages, inclusion and exclusion
among them.

**Two habits are enforced throughout.** Every sum,
product and index range is checked at its first index, because $\mathbb{N}$
contains $0$ here. Three results carry a hypothesis for that reason alone: the
alternating row sum needs $n \ge 1$, the weak-composition count needs $m \ge 1$
and the composition count needs $n \ge 1$. The first two have a matching false
statement on the companion page; the third is recorded in the theorem's own
Statement. And every
count is kept in $\mathbb{N}$, with $\iota$ written whenever a count is used
inside $\mathbb{R}$, so that the two sides of an identity always live in the same
set.
