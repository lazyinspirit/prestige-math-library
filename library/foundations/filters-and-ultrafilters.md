---
page: filters-and-ultrafilters
title: "Filters and Ultrafilters"
status: published
items: [def-filter, def-filter-base, lem-filter-base-generates,
        def-finite-intersection-property, lem-fip-generates-filter,
        def-ultrafilter, lem-union-of-chain-of-filters, thm-ultrafilter-lemma,
        thm-ultrafilter-characterisation, lem-ultrafilter-prime,
        rem-choice-strengths]
examples: [fs-every-ultrafilter-principal]
---

**Objective.** This page builds filters and ultrafilters from nothing but sets,
and proves the **ultrafilter lemma**: every filter on a set is contained in an
ultrafilter. It is the second foundations page that Zorn's lemma was developed
for, and the existence statement it reaches is genuinely non-constructive: the
ultrafilter it produces is named and never described.

A **filter** on $X$ collects the subsets of $X$ that count as large: the whole
space is large, the empty set is not, two large sets meet largely, and anything
containing a large set is large. Properness, that $\emptyset$ is never a member,
is part of the definition here, and the competing convention that admits the
improper filter $\mathcal{P}(X)$ is recorded where the definition is given rather
than left to be discovered. Two presentations follow immediately. A **filter
base** is a nonempty, downward directed family of nonempty sets, and those three
conditions are the whole of the definition; its upward closure is then a filter,
which is a lemma and not part of the definition, and that closure is how filters
are actually written down. A family has the **finite intersection property**
exactly when it sits inside some filter, which is how filters are actually
produced.

The main object is the **ultrafilter**: a filter that is maximal for inclusion.
Maximal, not greatest. On any set with two points there is no greatest filter, so
maximality cannot be read as greatestness, and doing so is the standard way to
misuse everything on this page. Distinct ultrafilters are never comparable, which
follows from maximality itself; how many of them there are is a separate question
that the absence of a greatest filter does not answer, and that this library does
not answer either, since the ultrafilter lemma below delivers existence and never
a count. Two results carry the subject.
The **ultrafilter lemma** applies Zorn's lemma to the filters
above a given one; the chain condition needs the union of a nonempty chain of
filters to be a filter, which is proved separately, and it needs the empty chain
to be bounded as well, which is why the poset has to be nonempty and why that case
is discharged explicitly by the given filter itself. The **characterisation**
then replaces maximality, a statement about the whole poset, by a statement about
$\mathcal{U}$ alone: an ultrafilter contains exactly one of $A$ and
$X \setminus A$ for every $A \subseteq X$. Everything usable about ultrafilters
follows from that form, starting with primeness: a finite union in $\mathcal{U}$
always has a member in $\mathcal{U}$.

The page closes on cost and on honesty. The ultrafilter lemma is a genuine choice
principle and, if ZF is consistent, strictly weaker than the Axiom of Choice; the
remark that records this separates the one implication proved here from the
independence results that are cited and not derived. The false statement is the
trap that follows from knowing only the examples one can write down: every
ultrafilter is principal. It is false, the witness is an ultrafilter extending the
filter of tails of $\mathbb{N}$, and the refutation is unusual in consuming the
ultrafilter lemma itself, since, if ZF is consistent, the false statement is
consistent with ZF alone.
