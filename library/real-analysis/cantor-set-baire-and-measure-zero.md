---
page: cantor-set-baire-and-measure-zero
title: "The Cantor Set, Baire Category, and Measure Zero in $\\mathbb{R}$"
status: published
items: [def-nowhere-dense-meager, def-f-sigma-g-delta, thm-baire-category-r,
        cor-q-is-meager-and-not-g-delta, def-measure-zero-and-content-zero,
        lem-finite-interval-cover-total-length,
        lem-nondegenerate-interval-is-not-null, lem-countable-sets-are-null,
        thm-countable-union-of-null-is-null, lem-content-zero-implies-null,
        thm-compact-null-is-content-zero, def-cantor-set,
        thm-cantor-set-ternary-description, thm-cantor-set-properties,
        def-fat-cantor-set, thm-fat-cantor-set-has-positive-measure,
        def-cantor-function, thm-cantor-function-properties,
        rem-baire-in-r-is-choice-free]
examples: [fs-nowhere-dense-implies-measure-zero,
           fs-measure-zero-implies-nowhere-dense,
           fs-null-implies-content-zero,
           fs-q-is-g-delta,
           fs-cantor-set-countable]
---

**Objective.** There are two ways for a subset of $\mathbb{R}$ to be small, and
they are unrelated. A set is small *in category* when it is a countable union of
sets whose closures contain no interval; it is small *in measure* when it can be
covered by intervals of total length below every positive bound. This page
defines both, proves the one theorem that makes the first notion non-trivial
(Baire), proves the one lemma that makes the second notion non-trivial (no
interval of positive length is null), and then builds the two sets that separate
them: the Cantor middle-thirds set, which is small in both senses and yet
uncountable, and the Smith-Volterra-Cantor set, which is small in category and
not in measure. It also builds the Cantor function, which climbs from $0$ to $1$
while doing all of its climbing on a set of measure zero, and it closes with a
remark on the choice cost of Baire and with five false statements.

**Category.** [[def-nowhere-dense-meager]] fixes *nowhere dense* as "the interior
of the closure is empty", records the working equivalent that the complement of
the closure is dense, and builds *meager*, *residual* and *second category* on
top of it; [[def-f-sigma-g-delta]] adds the two countable classes $F_\sigma$ and
$G_\delta$, which are exchanged by complementation.
[[thm-baire-category-r]] is the theorem of the page: a countable intersection of
dense open subsets of $\mathbb{R}$ is dense, so $\mathbb{R}$ is not a countable
union of nowhere dense sets. [[cor-q-is-meager-and-not-g-delta]] then settles the
status of the rationals and the irrationals completely: $\mathbb{Q}$ is
$F_\sigma$ and meager and is **not** $G_\delta$, and dually for the irrationals.
That last failure is the first genuinely hard fact on the page and is exactly
where Baire is spent.

**The proof of Baire spends no choice, and the page says so precisely.** The
textbook argument picks a nested interval at each stage in terms of the previous
one, which is dependent choice. The proof here fixes one enumeration of
$\mathbb{Q}$ and, at every stage, takes the interval whose two rational endpoints
have least index among those meeting the requirements, exactly the canonical
selection of [[thm-perfect-set-uncountable-r]]; the recursion is then a single
application of [[thm-recursion]] to a total map.
[[rem-baire-in-r-is-choice-free]] states what that does and does not establish,
and it is careful about the difference: nothing here bears on the Baire theorem
for general complete metric spaces, whose strength over ZF is a quoted external
result recorded in [[rem-baire-category-choice-strength]] and not proved in this
library. That remark is the one item on the page resting on unproved material,
and it is marked accordingly.

**Measure.** [[def-measure-zero-and-content-zero]] defines both notions by covers
of intervals, countable for *measure zero* and finite for *content zero*, and
records the working form in which only the partial sums of the lengths have to be
checked. Two lemmas carry the whole quantitative content.
[[lem-finite-interval-cover-total-length]] says that finitely many intervals
covering $[a,b]$ have total length at least $b - a$, by induction on their
number; [[lem-nondegenerate-interval-is-not-null]] upgrades this to countable
covers, using an enlargement to open intervals and the compactness of $[a,b]$,
and it is what forbids a null set from containing an interval of positive length.
Without those two nothing on the measure side means anything: on this page
[[thm-cantor-set-properties]], [[thm-fat-cantor-set-has-positive-measure]] and
[[fs-null-implies-content-zero]] all rest on one or the other, and none of them
is provable without them.

**What is null and what is not.** [[lem-countable-sets-are-null]] covers the
$k$-th point of a listing by an interval of length $\varepsilon 2^{-k-1}$ and uses
no choice at all. [[thm-countable-union-of-null-is-null]] does use countable
choice, at exactly one step, to pick one cover for each of the given sets, and the
item marks the step. [[lem-content-zero-implies-null]] is the trivial direction
between the two notions, and [[thm-compact-null-is-content-zero]] shows they
agree on compact sets, which is the only case in which content zero is used on
this pair of pages.

**The Cantor set.** [[def-cantor-set]] builds $C$ from the self-similar recursion
$C_{n+1} = \tfrac13 C_n \cup (\tfrac23 + \tfrac13 C_n)$, which is one application
of the recursion theorem and needs no bookkeeping of the $2^n$ intervals at stage
$n$. [[thm-cantor-set-ternary-description]] identifies $C$ with the set of sums
$\sum_k a_k 3^{-k-1}$ with every $a_k \in \{0,2\}$, exhibits the bijection with
$\{0,1\}^{\mathbb{N}}$, and extracts digits from a point of $C$ by a canonical
recursion rather than by choosing them. [[thm-cantor-set-properties]] then
collects what $C$ is: compact, of content zero and hence null, perfect,
uncountable, nowhere dense, containing no interval with two distinct endpoints,
and therefore having only single points as nonempty connected subsets. The phrase
*totally disconnected* appears in no statement or title on this pair, since
nothing in the reading order defines it; it survives only in the identifier of
the companion item that works the property out, where it is a gloss;
what is proved is the statement about connected subsets, via
[[thm-connected-subsets-of-r-are-intervals]].

**The Smith-Volterra-Cantor set.** [[def-fat-cantor-set]] runs the same shape of
construction while removing, at stage $n$, an interval of *fixed length*
$4^{-n-1}$ from each remaining piece, so that the total removed length is only
$\tfrac12$. [[thm-fat-cantor-set-has-positive-measure]] proves it compact,
perfect and nowhere dense, and proves that no cover of it by intervals has total
length below $\tfrac12$. That is the quantitative statement this library can
make: no outer measure is defined anywhere here, so nothing is said to *have*
measure $\tfrac12$, and every assertion is about covers and their total lengths.

**The Cantor function.** [[def-cantor-function]] halves the ternary digits of a
point of $C$, reads them in base two, and extends the result to $[0,1]$ by
$c(x) = \sup\{\gamma(t) : t \in C,\ t \le x\}$; the supremum exists because the
values lie in $[0,1]$. [[thm-cantor-function-properties]] proves that $c$ extends
$\gamma$, that $c(x) \le c(y)$ whenever $x \le y$, that $c$ is onto $[0,1]$, and
that $c$ is constant on the closure of every gap of $C$, every point outside $C$
lying in such a gap. **Nothing is claimed about continuity**: no definition of
continuity for a real function is available at this point in the reading order,
so no statement about it, in either direction, appears anywhere on this page.

**Five false statements** close the page, each with a witness on the companion
page: that nowhere dense implies measure zero, refuted by the
Smith-Volterra-Cantor set; that measure zero implies nowhere dense, refuted by
$\mathbb{Q}$; that measure zero implies content zero, refuted by
$\mathbb{Q} \cap [0,1]$; that $\mathbb{Q}$ is $G_\delta$; and that the Cantor set
is countable because only countably many intervals were removed. Read together
they say that the two smallness notions of this page are independent in every
direction, and that neither is a statement about cardinality.
