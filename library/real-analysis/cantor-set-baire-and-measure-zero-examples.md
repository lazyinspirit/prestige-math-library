---
page: cantor-set-baire-and-measure-zero-examples
title: "The Cantor Set, Baire Category, and Measure Zero in $\\mathbb{R}$: Examples and Counterexamples"
status: published
items: []
examples: [ex-q-covered-by-intervals-of-small-total-length,
           ex-cantor-set-in-ternary,
           ex-fat-cantor-measure-computed,
           ex-baire-reproves-r-uncountable,
           ex-cantor-function-values,
           ex-cantor-set-is-perfect-and-totally-disconnected,
           cex-nowhere-dense-with-positive-measure,
           cex-dense-set-of-measure-zero,
           cex-null-set-not-of-content-zero,
           cex-meager-set-of-full-measure,
           cex-cantor-point-that-is-not-an-endpoint,
           cex-irrationals-are-not-f-sigma]
---

**Objective.** This page is the worked companion to the Cantor set, Baire
category and measure zero page, linked under Prerequisites above. There are no
new definitions and no new theorems here: six examples carry out a computation in
full, five counterexamples exhibit the witnesses behind the five false statements
recorded on the previous page, and a sixth counterexample writes $\mathbb{R}$ as
the union of a meager set and a set of measure zero.

**Computations.** [[ex-q-covered-by-intervals-of-small-total-length]] covers
$\mathbb{Q}$ by open intervals of total length exactly $\varepsilon$, for a
prescribed $\varepsilon > 0$, and is the concrete form of
[[lem-countable-sets-are-null]]. [[ex-cantor-set-in-ternary]] turns membership in
the Cantor set into a test on ternary digits and works out six points, of which
$1/4 = \Phi(0,2,0,2,\dots)$ is the one whose digits never settle down.
[[ex-fat-cantor-measure-computed]] adds up the intervals removed from the
Smith-Volterra-Cantor set, obtains $\tfrac12$, and pairs it with the lower bound
$\tfrac12$ for the total length of any cover of the set.
[[ex-cantor-function-values]] computes $c(1/9) = 1/4$, $c(1/4) = 1/3$,
$c(7/9) = 3/4$ and the constant value $\tfrac12$ on the whole middle third.

**Two structural examples.** [[ex-baire-reproves-r-uncountable]] gives a third
proof that $\mathbb{R}$ is uncountable: a listing would present $\mathbb{R}$ as a
countable union of singletons, each nowhere dense, which
[[thm-baire-category-r]] forbids. It proves more than uncountability, since the
same argument rules out $\mathbb{R}$ being a countable union of *any* nowhere
dense sets. [[ex-cantor-set-is-perfect-and-totally-disconnected]] puts side by
side the two properties of the Cantor set that sound incompatible: every point of
$C$ is a limit of other points of $C$, and no two points of $C$ are joined by a
segment inside $C$. The phrase in that item's identifier is the usual name for
the second property and is used there only as a gloss; the claim made is the one
about connected subsets.

**The witnesses.** [[cex-nowhere-dense-with-positive-measure]] and
[[cex-dense-set-of-measure-zero]] are the two halves of the independence of
category and measure at the level of single sets: the Smith-Volterra-Cantor set
is nowhere dense and not null, $\mathbb{Q}$ is null and not nowhere dense.
[[cex-null-set-not-of-content-zero]] separates the countable and the finite
covering conditions with $\mathbb{Q} \cap [0,1]$, a bounded null set no finite
family of intervals covers with total length below $1$; what it lacks is
closedness, not boundedness. [[cex-cantor-point-that-is-not-an-endpoint]] shows
$1/4$ to be a point of $C$ approached from both sides by other points of $C$,
hence the endpoint of no removed interval. [[cex-irrationals-are-not-f-sigma]]
records the irrationals as a residual $G_\delta$ set that is not $F_\sigma$.

**The sharpest of them** is [[cex-meager-set-of-full-measure]], which writes
$\mathbb{R}$ as the union of a meager set and a set of measure zero. Both pieces
are negligible, one in category and one in measure, and $\mathbb{R}$ itself is
negligible in neither ([[thm-baire-category-r]],
[[lem-nondegenerate-interval-is-not-null]]). After that item no reading of
"small" survives under which the two notions could be comparable.

**Everything here is verified, not asserted by inspection.** Every value of the
Cantor function is computed from a digit sequence and a geometric series, every
cover is exhibited with its lengths, and every appeal to a theorem of the
previous page names the claim of that theorem being used.
