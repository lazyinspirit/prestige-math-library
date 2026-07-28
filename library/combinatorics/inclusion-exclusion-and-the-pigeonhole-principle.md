---
page: inclusion-exclusion-and-the-pigeonhole-principle
title: "Inclusion–Exclusion, the Pigeonhole Principle and Double Counting"
status: published
items: [lem-a-double-sum-over-finite-index-sets-may-be-interchanged,
        def-a-finite-incidence-relation-and-its-fibres, thm-double-counting,
        cor-the-averaging-principle, def-the-ceiling-of-a-quotient-of-naturals,
        thm-the-strong-pigeonhole-principle, def-a-sieve-family-and-its-intersections,
        thm-inclusion-exclusion, lem-the-partial-alternating-sum-of-a-binomial-row,
        thm-the-bonferroni-inequalities, thm-the-number-of-surjections,
        def-the-derangement-number, thm-the-derangement-formula,
        cor-the-derangement-recurrences, def-a-monotone-sublist-of-a-finite-list-of-reals,
        thm-erdos-szekeres, thm-the-erdos-szekeres-bound-is-sharp,
        rem-sieve-pigeonhole-and-double-counting-conventions]
examples: [fs-inclusion-and-exclusion-for-three-sets-without-the-triple-term,
           fs-a-bonferroni-truncation-is-exact,
           fs-the-erdos-szekeres-bound-can-be-lowered]
---

**Objective.** The sum rule counts a union of finite sets only when the blocks are
disjoint. This page removes that hypothesis. It proves the sieve identity, which
repairs an overlapping count by an alternating sum over the intersections of the
family; the Bonferroni inequalities, which say what a truncation of that sum does
before it is complete; and the two counting principles that live beside it,
double counting and the pigeonhole principle in its strong form. It closes with
the Erdős–Szekeres theorem on monotone sublists, whose proof is a pigeonhole
argument and whose bound is shown to be exactly right.

Everything rests on the counting page named under Prerequisites above, together
with the naturals and the ordered-field foundations beneath it.

One tool minted here is
[[lem-a-double-sum-over-finite-index-sets-may-be-interchanged]]:
[[thm-sum-rule]] splits a sum along a partition of a single index set, and
nothing there exchanges two index sets, which is what every argument on this page
that counts a set of pairs in two ways requires. Another is
[[lem-the-partial-alternating-sum-of-a-binomial-row]]:
[[cor-binomial-theorem-consequences]] gives the alternating sum of a **whole**
row of Pascal's triangle, and only for $n \ge 1$, whereas the Bonferroni
inequalities need the value of a **truncation** of that row. It turns out to be a
single binomial coefficient of the row above, with the sign of the last term
kept, and that coefficient is the error of the truncation.

Double counting comes first, since it needs the least machinery.
[[def-a-finite-incidence-relation-and-its-fibres]] fixes a relation between two
finite sets together with its row and column fibres, and shows that the two fibre
families are two partitions of the same set. [[thm-double-counting]] is then the
sum rule read along each of them, and [[cor-the-averaging-principle]] draws the
consequence that some row fibre is at least the average size and some is at most:
the average is a real number, obtained by dividing one count by another, so the
statement has to be made after both counts are carried into $\mathbb{R}$.

The pigeonhole principle follows. Its sharp form,
[[thm-the-strong-pigeonhole-principle]], says that a map whose domain is larger
than $k$ times its codomain has a fibre with more than $k$ elements, and then
that some fibre has at least $\lceil\lvert A\rvert/\lvert B\rvert\rceil$
elements. That second form needs a name for the rounding, and neither a floor nor
a ceiling exists among this page's declared prerequisites, nor does a division
with remainder. So [[def-the-ceiling-of-a-quotient-of-naturals]] mints exactly
what the proof produces and no more: the **least** $q$ with $m \le nq$, which
exists by [[thm-well-ordering-principle]] and involves no division at all. It is
not a floor, it is not defined for a real argument, and its own item says so.

[[def-a-sieve-family-and-its-intersections]] sets up the sieve. A finite family
$(A_i)_{i \in I}$ of subsets of a finite **ambient** set $X$ carries intersections
$A_J$ for every $J \subseteq I$, with $A_\varnothing := X$ stipulated. The ambient
set has to be part of the data for that stipulation to mean anything: for
nonempty $J$ the intersection is determined by the family, while for
$J = \varnothing$ the defining description is satisfied by everything.
[[thm-inclusion-exclusion]] then proves both forms, the one computing the size of
the union and the complementary one computing the size of what lies in none of
the $A_i$. The proof counts each point of $X$ once: a point lying in $t \ge 1$ of
the sets contributes the alternating sum over the nonempty subsets of a
$t$-element set, which is $1$ because the full alternating row sum vanishes for
$t \ge 1$, and a point lying in none contributes over an empty index set. That
$t \ge 1$ is the whole hypothesis of the row-sum identity, and applying it at
$t = 0$ would make the theorem false.

[[thm-the-bonferroni-inequalities]] truncates the sieve. Writing $S_j$ for the
sum over the $j$-element subsets and $T_m$ for the alternating sum of the first
$m$ of them, the size of the union is at most $T_m$ when $m$ is odd and at least
$T_m$ when $m$ is even, with equality once $m$ reaches $\lvert I\rvert$. The proof
is the pointwise one again: at a point of trace size $t \ge 1$ the truncation
misses the truth by $(-1)^{m}\binom{t-1}{m}$, whose sign is the parity of $m$ and
whose size is nonnegative. The parity is written as $2r$ and $2r+1$ rather than
with the words *even* and *odd*, which this page's declared prerequisites do not
define.

Classical counts follow from the sieve.
[[thm-the-number-of-surjections]] sieves the functions $A \to B$ by the values
they miss and gets $\sum_{i<k+1}(-1)^{i}\binom{k}{i}(k-i)^{n}$. The formula is
correct at $n = 0$ and $k = 0$, where the empty function is the unique surjection
onto the empty set, and it is correct there **only** because
$0^{0} = 1$ is the base clause of the recursion in [[def-nat-power]].
[[def-the-derangement-number]] counts the fixed-point-free bijections of a finite
set, with $D_0 = 1$ computed rather than stipulated;
[[thm-the-derangement-formula]] sieves the bijections by the points they fix and
gets $\iota(D_n) = \iota(n!)\sum_{i<n+1}(-1)^{i}/\iota(i!)$; and
[[cor-the-derangement-recurrences]] extracts the two recurrences, the first legal
from $n = 1$ and the second from $n = 2$, its derivation applying the first
recurrence at $n - 1$ as well.

The page ends with monotone sublists.
[[def-a-monotone-sublist-of-a-finite-list-of-reals]] fixes what a sublist is, a
choice of positions rather than of values, and what it means for one to be
strictly increasing or strictly decreasing. [[thm-erdos-szekeres]] shows that a
list of $mn+1$ pairwise distinct reals has an increasing sublist of length $m+1$
or a decreasing one of length $n+1$, by sending each position to the pair of
lengths of the longest monotone runs ending there and observing that this map is
injective into $m \times n$. [[thm-the-erdos-szekeres-bound-is-sharp]] builds the
witness at length $mn$: $m$ blocks of $n$ terms, decreasing inside a block and
increasing across blocks. The two block counts are not interchangeable, and
getting them the wrong way round proves the sharpness statement for the other
pair.

[[rem-sieve-pigeonhole-and-double-counting-conventions]] is the page's ledger:
the empty intersection, where the counts live, the first index of every sum, and
what this page's declared prerequisites do not supply. Every alternating identity
here is stated in $\mathbb{R}$ through the canonical natural, because a count is
a natural number and $\mathbb{N}$ has no subtraction, and read back through the
injectivity of that embedding. Every index range starts at $0$, and each
hypothesis of the form $t \ge 1$ or $n \ge 1$ on this page exists for that reason
and is checked at its first legal index.
