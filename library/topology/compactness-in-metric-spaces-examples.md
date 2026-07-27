---
page: compactness-in-metric-spaces-examples
title: "Compactness in Metric Spaces: Examples and Counterexamples"
status: published
items: []
examples: [ex-discrete-metric-compact-iff-finite, ex-closed-cube-is-totally-bounded,
           ex-convergent-sequence-with-its-limit-is-compact,
           ex-distance-to-a-set-is-attained-on-a-compact-set,
           ex-lebesgue-number-of-a-two-set-cover,
           cex-closed-and-bounded-not-compact-in-the-sup-metric,
           cex-bounded-not-totally-bounded, cex-totally-bounded-not-compact,
           cex-evt-fails-without-compactness,
           cex-heine-cantor-fails-without-compactness,
           cex-open-cover-with-no-lebesgue-number]
---

**Objective.** This page is the worked companion to the Compactness in Metric
Spaces page, linked under Prerequisites above. That page proves the theory; this
one exhibits it, on spaces concrete enough to check by hand. Five examples carry
out a full verification on a particular space, and six counterexamples supply the
witnesses behind the false statements and behind every hypothesis the main page
declined to weaken.

**The examples.** [[ex-discrete-metric-compact-iff-finite]] takes the metric that
assigns distance $1$ to distinct points and shows that on it compactness, total
boundedness and finiteness are the same condition, while completeness holds
whatever the size of the space; that single example separates completeness from
compactness once and for all. [[ex-closed-cube-is-totally-bounded]] writes down
an explicit finite $\varepsilon$-net for the cube $[-M,M]^n$, a grid of points
whose index is produced as a least natural meeting an inequality rather than by
an integer part, which this library does not have at this point in the reading
order. [[ex-convergent-sequence-with-its-limit-is-compact]] proves that a
convergent sequence together with its limit is compact in any metric space, the
one member of a cover containing the limit swallowing all but finitely many
terms. [[ex-distance-to-a-set-is-attained-on-a-compact-set]] turns the infimum
defining the distance to a set into a minimum and deduces that disjoint compact
sets are at positive distance. [[ex-lebesgue-number-of-a-two-set-cover]] computes
a Lebesgue number exactly: for the cover of $[0,1]$ by $(-1,2/3)$ and $(1/3,2)$
it is $1/3$, the length of the overlap, and no larger number works.

**The counterexamples come in two families.** The first three are about the gap
between boundedness, total boundedness and compactness.
[[cex-bounded-not-totally-bounded]] and
[[cex-closed-and-bounded-not-compact-in-the-sup-metric]] are the witnesses for
the false statements of the main page: the natural numbers under the discrete
metric, and the closed unit ball of the bounded functions on $\mathbb{N}$ under
the supremum metric, where the indicator functions of the singletons are pairwise
at distance $1$. The second is the analytically important one, because closed
bounded subsets of function spaces are routinely not compact.
[[cex-totally-bounded-not-compact]] shows that the interval $(0,1)$ is totally
bounded and not compact, isolating completeness as the missing half.

The remaining three show that the compactness hypothesis cannot be weakened in
three of the theorems that consume it. On $(0,1)$ the identity is bounded with no
greatest value and $x \mapsto 1/x$ is continuous and unbounded, so the extreme
value theorem needs more than a bounded domain
([[cex-evt-fails-without-compactness]]); the same $1/x$ is continuous and not
uniformly continuous there, so Heine-Cantor needs more too
([[cex-heine-cantor-fails-without-compactness]]); and the cover of $(0,1)$ by the
intervals $(1/(k+2), 1)$ has no Lebesgue number
([[cex-open-cover-with-no-lebesgue-number]]). The last two are the same failure
seen twice, since the proof of Heine-Cantor runs through a Lebesgue number.

**Indexing.** Every reciprocal on this page is written $1/(k+1)$, $1/(k+2)$ or
$1/(k+3)$ rather than $1/k$, because $\mathbb{N}$ contains $0$ in this library
and a sequence is indexed from $0$; the shift is chosen in each case so that the
first term already lies where it is needed.

**No item outside this pair depends on anything here.** An examples page is a
leaf, so these items are free to be as concrete as they like, and the witnesses
they build are duplicated inline in the false statements that need them.
