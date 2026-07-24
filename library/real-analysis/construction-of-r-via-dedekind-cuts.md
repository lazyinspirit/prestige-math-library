---
page: construction-of-r-via-dedekind-cuts
title: "Construction of the Real Numbers via Dedekind Cuts"
status: published
items: [def-integers, lem-int-equivalence, def-int-operations,
        lem-int-add-well-defined, lem-int-mul-well-defined, thm-int-comm-ring,
        def-int-order, thm-int-ordered-ring, lem-int-cancellation, lem-nat-embeds-int,
        def-rationals, lem-rat-equivalence, def-rat-operations,
        lem-rat-ops-well-defined, thm-rat-field, def-rat-order,
        thm-rat-ordered-field, lem-int-embeds-rat, lem-rat-archimedean,
        def-dedekind-cut, def-real-dedekind, def-cut-order, lem-cut-order-total,
        def-cut-addition, lem-cut-add-well-defined, lem-cut-additive-inverse,
        def-cut-multiplication, lem-cut-reciprocal, thm-reals-dedekind-field, lem-rat-cut-embeds,
        thm-reals-dedekind-ordered-field, lem-cut-archimedean, thm-dedekind-complete]
examples: [ex-sqrt2-cut, fs-sqrt2-rational, fs-cut-has-greatest]
---

**Objective.** This page constructs the real number field $\mathbb{R}$ via
Dedekind cuts and proves that $\mathbb{R}$ is a totally ordered field with the
least-upper-bound property. The natural numbers $\mathbb{N}$, with their
arithmetic and order, are the assumed starting point.

**Foundations ($\mathbb{N}$ to $\mathbb{Q}$).** The construction of the integers
and the rationals is shared verbatim with the
[[construction-of-r-via-cauchy-sequences|Cauchy-sequence construction]], so we
take it as given: $\mathbb{Z}$ is built from $\mathbb{N}$ as a totally ordered
commutative ring ([[thm-int-ordered-ring]]), and $\mathbb{Q}$ from $\mathbb{Z}$
as a totally ordered, Archimedean field ([[thm-rat-ordered-field]],
[[lem-rat-archimedean]]). Only the final passage from $\mathbb{Q}$ to
$\mathbb{R}$ differs between the two constructions, and it is the subject of this
page.

**The gap in $\mathbb{Q}$.** Order-completeness fails in $\mathbb{Q}$: the set
$\{ q : q^2 < 2 \}$ is bounded above yet has no rational least upper bound. A
Dedekind cut fills exactly such a gap, naming the missing bound by the rationals
that lie below it.

**Cuts and the reals.** A **Dedekind cut** is a subset $A \subseteq \mathbb{Q}$
that is nonempty and proper, downward closed, and without a greatest element
([[def-dedekind-cut]]): the set of all rationals lying strictly below a point of
the line. The reals are defined to be the set of all cuts ([[def-real-dedekind]]),
ordered simply by inclusion ([[def-cut-order]]), which is a total order
([[lem-cut-order-total]]).

**Arithmetic.** Addition is the sumset $A + B$, with a subtle additive inverse
$-A$ chosen so that $A + (-A) = 0^{*}$ ([[def-cut-addition]],
[[lem-cut-additive-inverse]]). Multiplication is defined first on the
nonnegative cuts and then extended by signs ([[def-cut-multiplication]],
[[lem-cut-reciprocal]]). These operations make $\mathbb{R}$ a field
([[thm-reals-dedekind-field]]) into which $\mathbb{Q}$ embeds densely as an
ordered subfield ([[lem-rat-cut-embeds]]).

**Order.** Inclusion makes this field totally ordered
([[thm-reals-dedekind-ordered-field]]) and Archimedean ([[lem-cut-archimedean]]),
so the rational cuts stay cofinal in $\mathbb{R}$.

**Destination.** $\mathbb{R}$ is order-complete: every nonempty set of cuts
bounded above has a least upper bound, obtained as nothing more than the union
of the cuts ([[thm-dedekind-complete]]). This least-upper-bound property is the
payoff of the construction, the order-theoretic counterpart of the Cauchy
completeness delivered by the sequence construction
([[thm-reals-cauchy-complete]]). It is also what a cut was designed to supply:
each cut simply *is* the supremum of the rationals beneath it, so the holes in
$\mathbb{Q}$ are filled once and for all.
