---
page: inclusion-exclusion-and-the-pigeonhole-principle-examples
title: "Inclusion–Exclusion, the Pigeonhole Principle and Double Counting: Examples and Counterexamples"
status: published
items: []
examples: [ex-a-three-set-and-a-four-set-sieve-computed,
           ex-the-onto-functions-from-a-five-set-to-a-three-set-counted-both-ways,
           ex-the-derangements-of-a-four-element-set-listed,
           ex-the-hat-check-ratio-as-a-quotient-of-counts,
           ex-two-elements-with-the-same-number-of-neighbours-in-a-finite-symmetric-relation,
           ex-the-handshake-identity-by-double-counting,
           ex-a-ceiling-bound-from-the-strong-pigeonhole,
           cex-a-sieve-computation-that-omits-a-term,
           cex-a-list-of-length-mn-with-no-long-monotone-sublist,
           cex-an-averaging-bound-that-is-not-attained]
---

**Objective.** This page is the worked companion to Inclusion–Exclusion, the
Pigeonhole Principle and Double Counting, linked under Prerequisites above. That
page proves the machinery; this one runs it on explicit finite sets, with every
intersection, every fibre and every arithmetic step written out, and exhibits the
witnesses behind the hypotheses that page carries. There are no new definitions
and no new theorems here.

The discipline is that **nothing is asserted by inspection**. Where a family is
small enough to tabulate, it is tabulated:
[[ex-a-three-set-and-a-four-set-sieve-computed]] lists every intersection $A_J$
of a three-set family inside $X = \{0,\dots,7\}$ and then of the four-set family
obtained by adjoining one more subset, and checks both forms of the sieve against
the union computed by hand. Where a set is small enough to list, it is listed:
[[ex-the-derangements-of-a-four-element-set-listed]] writes down the derangements
of $\{0,1,2,3\}$ as tuples, proves the enumeration complete by a case analysis on
the first two values, and matches the result against the closed formula and
against both recurrences, each used only at an index where its hypothesis holds.

Where a number can be reached by two genuinely different routes, both are
walked. [[ex-the-onto-functions-from-a-five-set-to-a-three-set-counted-both-ways]] gets
$243 - 96 + 3 - 0 = 150$ from the sieve formula, and then gets the same number by
partitioning the functions according to their image and counting the surjections
onto sets of size $0$, $1$ and $2$ directly. [[ex-the-handshake-identity-by-double-counting]]
counts a symmetric irreflexive relation once by its row fibres, giving the sum of
the neighbour counts, and once by the fibres of the map sending an ordered
related pair to the corresponding unordered pair, giving twice the number of
related unordered pairs; in the extreme case where every pair of distinct
elements is related, the identity reduces to the published count of two-element
subsets.

[[ex-two-elements-with-the-same-number-of-neighbours-in-a-finite-symmetric-relation]]
is the example where a naive count is not enough. The neighbour counts of an
$N$-element set lie in a range of $N$ possible values, so the pigeonhole
principle says nothing until the range is cut down; what cuts it down is that no
element can have no neighbour while another is a neighbour of everything else.
[[ex-a-ceiling-bound-from-the-strong-pigeonhole]] computes
$\lceil 17/5\rceil = 4$ from the definition, notes that the counting form of the
principle already yields it at $k = 3$ and says nothing at $k = 4$, and then
exhibits a distribution whose largest fibre is exactly $4$, so the bound is
attained and cannot be raised.

[[ex-the-hat-check-ratio-as-a-quotient-of-counts]] tabulates
$\iota(D_n)/\iota(n!)$ for small $n$ and identifies it with the truncated
alternating sum. It is a quotient of two counts and is not called a probability:
nothing among this page's declared prerequisites defines a probability space, and
no statement about random behaviour is made anywhere on it. No limit is claimed
either, since the function that would be needed to name one is not available.

The counterexamples isolate what the theorems do not say.
[[cex-a-sieve-computation-that-omits-a-term]] performs a three-set count with the
triple intersection dropped and returns $4$ where the truth is $5$, on a family
of overlapping but unequal sets, so the failure is not an artefact of a
degenerate configuration. [[cex-a-list-of-length-mn-with-no-long-monotone-sublist]]
exhibits $2, 1, 4, 3, 6, 5$: three blocks of two, decreasing inside a block and
increasing across blocks, with longest increasing sublist of length $3$ and
longest decreasing sublist of length $2$, so a list of length $mn$ is not enough
for the Erdős–Szekeres conclusion. [[cex-an-averaging-bound-that-is-not-attained]]
gives a relation whose average row-fibre size is $3/2$ while its fibre sizes are
$1$ and $2$, which is why the averaging principle asserts two inequalities and
never an equality: the average is a real number and a fibre size is a natural
number.
