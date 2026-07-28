---
page: finite-counting-and-binomial-coefficients-examples
title: "Finite Counting, Factorials and Binomial Coefficients: Examples and Counterexamples"
status: published
items: []
examples: [ex-pascals-triangle-to-row-six, ex-counting-committees,
           ex-anagrams-by-the-multinomial-coefficient, ex-poker-hands-from-a-deck,
           ex-weak-compositions-worked, ex-functions-injections-and-subsets-of-a-small-set,
           ex-vandermonde-checked-numerically, cex-same-cardinality-without-a-canonical-bijection,
           cex-a-count-that-double-counts, fs-every-injection-of-a-set-into-itself-is-a-bijection,
           fs-cardinality-of-a-union-adds-without-disjointness,
           fs-the-product-rule-makes-a-product-larger,
           fs-the-alternating-row-sum-vanishes-for-every-n,
           fs-stars-and-bars-holds-for-every-number-of-parts]
---

**Objective.** This page is the worked companion to Finite Counting, Factorials
and Binomial Coefficients, linked under Prerequisites above. That page proves the
machinery; this one uses it on concrete sets, with every count carried out, and
exhibits the witnesses behind the hypotheses that page carries. There are no new
definitions and no new theorems here.

The discipline is that **nothing is asserted by inspection**. Where a set is small
enough to list, it is listed:
[[ex-functions-injections-and-subsets-of-a-small-set]] writes down all eight
functions $3 \to 2$, observes that none is injective, and checks that against
both the falling factorial $2^{\underline{3}} = 0$ and the pigeonhole principle;
[[ex-weak-compositions-worked]] lists all fifteen weak compositions of $4$ into
$3$ parts and matches them against $\binom{6}{2}$, exhibiting the stars-and-bars
bijection rather than merely checking the number. Where a set is
too large to list, every arithmetic step is written out:
[[ex-pascals-triangle-to-row-six]] builds rows $0$ to $6$ from Pascal's rule and
then re-derives four interior entries from the closed formula, so the two routes
are seen to agree; [[ex-counting-committees]] separates the unordered count
$\binom{10}{3} = 120$ from the ordered count $10^{\underline{3}} = 720$ and shows
that the ratio is $3!$; [[ex-poker-hands-from-a-deck]] gets $\binom{52}{5} =
2598960$ and, by a genuine use of the sum rule over the four suits,
$4\binom{13}{5} = 5148$ single-suit hands. No probability is claimed anywhere on
that item, since the library has no probability space at this point in the
reading order.

Two examples exercise the later theorems.
[[ex-anagrams-by-the-multinomial-coefficient]] counts the arrangements of
$\mathrm{MISSISSIPPI}$ as $\binom{11}{1,4,4,2} = 34650$, and its real content is
the modelling step: an arrangement **is** a colouring of the eleven positions
with prescribed fibre sizes, which is literally the set the multinomial
coefficient counts, and the condition $1+4+4+2 = 11$ has to be checked before the
symbol is written down at all. [[ex-vandermonde-checked-numerically]] checks
Vandermonde's identity at $m = 4$, $n = 3$, $k = 3$, where both sides are $35$,
exhibits the block of the underlying partition that the term
$\binom{4}{2}\binom{3}{1}$ counts, and then repeats the check at $k = 5$, where
three of the six terms vanish by the boundary convention and both sides are $21$.

The two counterexamples isolate two things the definitions do not give.
[[cex-same-cardinality-without-a-canonical-bijection]] refutes the reading under
which equal cardinality determines a bijection: two sets of cardinality $2$ admit
exactly $2! = 2$ bijections between them and nothing in the library prefers
either, so the cardinality is canonical while the bijection realising it is not.
[[cex-a-count-that-double-counts]] performs a wrong count in full, adding the
eight subsets of $\{0,1,2,3\}$ containing $0$ to the eight containing $1$ and
getting $16$ where the truth is $12$, and then names the exact step of the sum
rule's proof that fails, namely the injectivity of the splice map.

Five false statements record the hypotheses that the main page's theorems carry.
[[fs-every-injection-of-a-set-into-itself-is-a-bijection]] is refuted by the
successor map on $\mathbb{N}$, which is injective and misses $0$; the statement is
true for finite sets, so finiteness is what fails, and the refutation locates it
in the proof. [[fs-cardinality-of-a-union-adds-without-disjointness]] is refuted
by $A = B = \{0\}$ and again by a partial overlap.
[[fs-the-product-rule-makes-a-product-larger]] fails at both ends: trivially for
$A = \varnothing$, and substantially for $A = B = \mathbb{N}$, since
$\mathbb{N}\times\mathbb{N} \approx \mathbb{N}$; the corrected finite statement is
proved alongside, and the contrast with Cantor's theorem, where strict increase
does survive to the infinite case, is drawn.
[[fs-the-alternating-row-sum-vanishes-for-every-n]] is the page's index-range
item: the identity is exactly what a text whose naturals begin at $1$ would state
truly, and in this library it acquires a counterexample at $n = 0$, where the sum
is $\binom{0}{0} = 1$. [[fs-stars-and-bars-holds-for-every-number-of-parts]] is
of an unusual kind, since at $m = 0$ the formula is either ill formed, $m-1$ not
being a natural number, or, under the truncated reading, well formed and equal to
$1$ where the true count is $0$.
