---
page: topological-spaces-and-continuity
title: "Topological Spaces and Continuity"
status: draft
items: [def-topological-space, def-standard-topologies, def-topology-basis-subbasis,
        thm-basis-criterion, def-neighbourhood-top, def-interior-closure-boundary-top,
        thm-closure-characterisation-top, lem-interior-closure-boundary-identities,
        def-dense-top, thm-kuratowski-closure-axioms, def-continuous-map-top,
        thm-continuity-characterisations-top, def-subspace-topology-top,
        lem-continuity-is-local-and-pastes, def-homeomorphism-and-open-maps,
        lem-homeomorphism-criteria, def-sequence-convergence-top,
        lem-sequential-closure-inside-closure, def-first-countable-top,
        thm-first-countable-sequences-suffice, def-metrizable-space,
        rem-topology-conventions]
examples: [fs-arbitrary-intersection-of-opens-is-open-top,
           fs-sequentially-continuous-implies-continuous,
           fs-continuous-bijection-is-a-homeomorphism,
           fs-every-topology-is-metrizable]
---

**Objective.** This page opens general topology. The metric-spaces page isolated
the distance between two points into three axioms and derived open sets, closure,
convergence and continuity from them; here the open sets themselves are taken as
the primitive data, and everything that survives that abstraction is rebuilt.
What survives is more than one might expect and less than one might hope: the
whole vocabulary of interior, closure, boundary, density and continuity goes
through unchanged, while sequences — which detect everything in a metric space —
turn out to detect almost nothing without a countability hypothesis.

**The axioms and the standard supply of spaces.** A topology on a set is a family
of subsets containing $\varnothing$ and the whole set and closed under arbitrary
unions and binary intersections ([[def-topological-space]]). The asymmetry
between "arbitrary" and "binary" is the whole subject: it is what makes a metric
topology an instance, and it is not removable, as the first false statement below
records. Closed sets are complements of open sets, and a topology may equally be
presented by its closed sets, a dual axiomatisation discharged in full inside the
definition. Six standard topologies are then defined ([[def-standard-topologies]]) — the
first four on an arbitrary set, the particular-point one on a set with a point
named in it, and Sierpinski space on a two-point set — and topology-hood is
verified for each; the cofinite and cocountable verifications are where the
countability machinery of the earlier pages is spent, and the definition records honestly that only finite
unions are needed, so no choice principle is actually required despite the
citation to a theorem that carries one.

**Bases, subbases and generation.** Rather than list every open set one usually
names a small family and generates ([[def-topology-basis-subbasis]]).
[[thm-basis-criterion]] settles both directions of that practice: a family is a
basis for a topology exactly when it covers the set and every point of an
intersection of two members lies in a member inside that intersection, and the
topology is then unique; and the finite intersections of *any* family form a
basis for the topology it generates. This library takes the empty intersection to
be the whole set, so no covering hypothesis is imposed on a subbasis, and that
fork is stated in the theorem itself as well as in the conventions remark that
closes the page.

**Interior, closure and the Kuratowski correspondence.** Neighbourhoods are
defined without requiring openness ([[def-neighbourhood-top]]), interior and
closure as the largest open subset and the smallest closed superset
([[def-interior-closure-boundary-top]]), and
[[thm-closure-characterisation-top]] gives the working criterion: a point lies in
the closure exactly when every basic neighbourhood of it meets the set, and the
closure is the set together with its derived set.
[[lem-interior-closure-boundary-identities]] then draws the line between what is
an identity and what is only an inclusion — interior commutes with finite
intersections and closure with finite unions, the two reverse combinations do
not, and both identities fail outright for infinite families, with witnesses in
the cofinite topology. Density, codensity and nowhere density follow
([[def-dense-top]]). The section closes with [[thm-kuratowski-closure-axioms]]:
the four axioms $c(\varnothing) = \varnothing$, $A \subseteq c(A)$,
$c(c(A)) = c(A)$ and $c(A \cup B) = c(A) \cup c(B)$ characterise closure
operators exactly, and topologies on a set correspond bijectively to them.

**Continuity, subspaces and homeomorphism.** Continuity is defined pointwise by
preimages of neighbourhoods ([[def-continuous-map-top]]), and
[[thm-continuity-characterisations-top]] proves the five standard descriptions
equivalent, including the test against a subbasis alone and the closure
inclusion $f[\overline{A}] \subseteq \overline{f[A]}$. The subspace topology is
built next ([[def-subspace-topology-top]]), with its closed sets, its bases, the
continuity of the inclusion and the characteristic property of a map into a
subspace; it is what gives the word *restriction* a meaning, and
[[lem-continuity-is-local-and-pastes]] uses it: continuity may be checked on any
open cover and on any **finite** closed cover, and composites of continuous maps
are continuous. Sameness of spaces is homeomorphy
([[def-homeomorphism-and-open-maps]]), and [[lem-homeomorphism-criteria]] reduces
it to a check on one map: a continuous bijection is a homeomorphism exactly when
it is open, exactly when it is closed.

**Sequences, and the exact price of using them.** Convergence, cluster points,
sequential continuity and the sequential closure are defined for an arbitrary
space ([[def-sequence-convergence-top]]). The notation $\lim_k x_k$ is
deliberately **not** introduced there: limits need not be unique, and in the
indiscrete topology every sequence converges to every point, so the symbol would
not denote. [[lem-sequential-closure-inside-closure]] proves what always holds — the
sequential closure sits between the set and its closure, continuity implies
sequential continuity — and adds that sequential limits need not be unique, the
indiscrete topology witnessing that inline. It claims no converse, because the
witnesses against the converses live on the companion page. Under first countability
([[def-first-countable-top]]) both converses hold
([[thm-first-countable-sequences-suffice]]), and the proof spends the axiom of
countable choice at exactly two points, both flagged.

**Metrizability.** A space is metrizable when some metric induces its topology
([[def-metrizable-space]]). That item carries the bridge to everything already
proved for metric spaces: neighbourhoods and balls, interior and closure,
convergence and continuity are shown to be the same notions on the two sides, so
no metric result is re-proved here. It also fixes what "the usual topology of
$\mathbb{R}$" means — the metric topology of $|x-y|$, named in
[[lem-real-line-is-a-metric-space]] — and records, via
[[rem-r-native-topology-scope]], that this is the same collection of open sets as
the order-native development built earlier in the library, not a second notion.
Metrizability is a topological property; the metric is not, and inside a
metrizable space the notation $\lim_k x_k$ becomes legitimate again, uniqueness of
limits being available there.

**Four false statements and the conventions.** An arbitrary intersection of open
sets need not be open, witnessed both in the cofinite topology and in $\mathbb{R}$
([[fs-arbitrary-intersection-of-opens-is-open-top]]). A sequentially continuous
map need not be continuous, witnessed by the identity from the cocountable
topology on $\mathbb{R}$ to its usual topology, argued inline
([[fs-sequentially-continuous-implies-continuous]]). A continuous bijection need
not be a homeomorphism, witnessed on a two-point set
([[fs-continuous-bijection-is-a-homeomorphism]]). And not every topology comes
from a metric, witnessed by the indiscrete topology on two points
([[fs-every-topology-is-metrizable]]). Finally
[[rem-topology-conventions]] settles the four convention forks that are live on
this page — whether a neighbourhood must be open, what the empty intersection is,
whether *basis* is a relation or a property, and coarser/finer against
weaker/stronger — and lists the two conventions inherited from earlier pages that
change how statements here are read. The worked spaces, and the witnesses behind
every non-reversal claimed above, are on
[[topological-spaces-and-continuity-examples|the companion examples page]].
