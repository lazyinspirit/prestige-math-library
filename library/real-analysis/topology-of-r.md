---
page: topology-of-r
title: "Topology of $\\mathbb{R}$"
status: draft
items: [def-neighbourhood-r, def-open-and-closed-in-r, thm-open-set-algebra-r,
        def-interior-closure-boundary-r, def-limit-point-r,
        thm-closure-characterisations-r,
        lem-sequential-characterisation-of-closure-r,
        thm-open-subsets-of-r-structure, lem-q-and-irrationals-dense-r,
        def-open-cover-r, thm-heine-borel-r,
        lem-compact-implies-closed-and-bounded-r,
        thm-heine-borel-characterisation-r,
        thm-compact-iff-sequentially-compact-r, def-connected-r,
        thm-connected-subsets-of-r-are-intervals, def-perfect-set-r,
        thm-perfect-set-uncountable-r, rem-r-native-topology-scope]
examples: [fs-arbitrary-intersection-of-open-is-open,
           fs-every-set-is-open-or-closed,
           fs-closed-bounded-compact-without-completeness]
---

**Objective.** This page builds the topology of $\mathbb{R}$ from the order and
the absolute value alone, and takes it as far as the four theorems that make
$\mathbb{R}$ a special space rather than a generic one: the structure of open
sets, Heine-Borel, the equivalence of compactness with sequential compactness,
and the identification of the connected sets with the intervals. It ends with
perfect sets and the theorem that a nonempty one is uncountable.

**Everything starts from one definition.** A neighbourhood of a point is an
interval centred on it ([[def-neighbourhood-r]]); a set is open when every one of
its points has a neighbourhood inside it, and closed when its complement is open
([[def-open-and-closed-in-r]]). Closedness is defined by complementation and by
nothing else on this page, so every other description of a closed set here is a
theorem. The basic algebra follows at once
([[thm-open-set-algebra-r]]): arbitrary unions and finite intersections of open
sets are open, dually for closed sets, and the word "finite" cannot be deleted
([[fs-arbitrary-intersection-of-open-is-open]]). Open and closed are not
opposites and not exhaustive ([[fs-every-set-is-open-or-closed]]).

**Closure, limit points, and two descriptions of the same set.** Interior and
closure are defined as the largest open subset and the smallest closed superset
([[def-interior-closure-boundary-r]]), and the working description of the
closure is proved rather than assumed: it is the set of points every
neighbourhood of which meets the set, equivalently the set together with its
limit points ([[def-limit-point-r]],
[[thm-closure-characterisations-r]]). Replacing neighbourhoods by sequences is a
separate theorem and costs more
([[lem-sequential-characterisation-of-closure-r]]): turning a point of the
closure into a sequence spends the axiom of countable choice, and the item says
so at the step where it happens.

**The first result with no analogue elsewhere.** Every open subset of
$\mathbb{R}$ is a countable disjoint union of open intervals
([[thm-open-subsets-of-r-structure]]), namely the classes of the relation "the
closed interval between these two points stays inside the set". The proof is an
order argument throughout, and the countability comes from the rationals: each
component contains one, and components are disjoint. Alongside it,
$\mathbb{Q}$ and its complement are both dense and every nonempty open set is
uncountable ([[lem-q-and-irrationals-dense-r]]).

**Compactness.** An open cover, a finite subcover, and the two notions of
compactness are fixed in [[def-open-cover-r]]. Heine-Borel is proved by
bisection, not quoted from a general theorem: a closed bounded interval is
compact ([[thm-heine-borel-r]]), with a **canonical** halving rule so that the
recursion needs only the recursion theorem and no choice principle. The converse
half ([[lem-compact-implies-closed-and-bounded-r]]) uses the Archimedean
property in both its forms, the cofinal one for boundedness and the reciprocal
one for closedness, and the two halves combine into the characterisation of
compact sets as the closed bounded ones
([[thm-heine-borel-characterisation-r]]). Compactness and sequential
compactness then coincide ([[thm-compact-iff-sequentially-compact-r]]), by a
route through Bolzano-Weierstrass. Completeness is doing real work here: in an
ordered field that is not complete a closed bounded set can fail to be compact
([[fs-closed-bounded-compact-without-completeness]]).

**Connectedness and perfect sets.** Connectedness is defined by separated sets
([[def-connected-r]]) and turns out to be an order property: a subset of
$\mathbb{R}$ is connected exactly when it is order-convex
([[thm-connected-subsets-of-r-are-intervals]]). A perfect set is one that is
closed with no isolated points ([[def-perfect-set-r]]), and a nonempty one is
uncountable ([[thm-perfect-set-uncountable-r]]). That last proof is where the
absence of dependent choice in this library is felt most sharply: the standard
argument chooses a shrinking neighbourhood at every stage, and the proof given
here instead fixes an enumeration of the rationals once and always takes the
least-indexed rational-endpoint interval that works.

**What is and is not claimed about generality.** Two results on this page use
only the definitions, and four are written in the vocabulary of the order of
$\mathbb{R}$ from beginning to end. [[rem-r-native-topology-scope]] separates
them, and it is deliberately silent about topological spaces in general, which
this library does not develop.
