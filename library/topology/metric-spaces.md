---
page: metric-spaces
title: "Metric Spaces"
status: draft
items: [def-metric-space, lem-metric-nonnegativity, def-metric-ball,
        def-metric-bounded-diameter, lem-metric-reverse-triangle,
        lem-distance-to-set-is-lipschitz, def-metric-topology,
        lem-real-line-is-a-metric-space, lem-metrics-on-rn, lem-sup-metric-is-a-metric,
        thm-metric-open-set-algebra, def-metric-interior-closure-boundary,
        thm-metric-closure-characterisation, def-metric-convergence,
        lem-metric-limits-unique, lem-metric-ball-neighbourhood-base,
        thm-metric-sequential-closure, thm-metric-hausdorff-separation,
        def-metric-continuity, thm-metric-continuity-characterisations,
        def-isometry-and-metric-embedding, lem-isometry-is-an-embedding,
        def-equivalent-metrics, thm-metric-equivalence-hierarchy,
        lem-bounded-remetrisation, rem-metric-axiom-conventions]
examples: [fs-closed-ball-is-the-closure-of-the-open-ball,
           fs-boundedness-is-a-topological-property]
---

**Objective.** This page opens the topology track. It takes the one structure
that a first course in analysis uses without naming, the distance between two
points, isolates it into three axioms, and shows how much of the vocabulary of
analysis is already determined by them: open and closed sets, interior, closure
and boundary, convergence of sequences, and continuity of maps. Nothing here
assumes anything about $\mathbb{R}$ beyond the complete ordered field built on
the earlier pages, and everything proved here is available verbatim in every
metric space that later pages construct.

**The axioms, and what is not among them.** A metric on a set $X$ is a
real-valued function of two points satisfying separation, symmetry and the
triangle inequality ([[def-metric-space]]). Nonnegativity is deliberately not an
axiom: it follows from the other three, and [[lem-metric-nonnegativity]] proves
it, so a verification that some candidate function is a metric has three things
to check and not four. The values are real numbers, never $+\infty$;
[[rem-metric-axiom-conventions]] records that decision, together with the live
naming fork between *pseudometric* and *semimetric* and the reason extended
metrics wait for the extended real line.

**Three metric spaces are established here, and they are the ones later pages
cite.** That the absolute value makes $\mathbb{R}$ a metric space, with the open
balls exactly the bounded open intervals and the space unbounded, is
[[lem-real-line-is-a-metric-space]]. That $\mathbb{R}^n$, defined ZFC-natively
as the set of functions from the von Neumann natural $n$ to $\mathbb{R}$, carries
the three metrics $d_1$, $d_2$ and $d_\infty$ for every $n \ge 1$ is
[[lem-metrics-on-rn]]. That restriction is not decoration: at $n = 0$ the metric
$d_\infty$ would be a maximum over the empty index set. The lemma is proved
from Minkowski at exponent $1$ and from Cauchy-Schwarz, with no rational power
anywhere. That the bounded real-valued functions on a nonempty set carry the
supremum metric is [[lem-sup-metric-is-a-metric]]. None of these had a home in
the library before, and each is stated here rather than on the companion page
because an examples page is a leaf and nothing may depend on it.

**From the metric to the topology.** The open sets are those in which every
point has a ball around it inside the set ([[def-metric-topology]]), and
[[thm-metric-open-set-algebra]] proves that this collection is closed under
arbitrary unions and finite intersections, that balls are open and that closed
balls are closed. Interior, closure, boundary, limit points and density follow
([[def-metric-interior-closure-boundary]]), and
[[thm-metric-closure-characterisation]] identifies the closure three ways at
once: as the points at distance zero from the set, as the set together with its
limit points, and as the smallest closed superset. The distance to a fixed
nonempty set is $1$-Lipschitz ([[lem-distance-to-set-is-lipschitz]]), a
refinement of the reverse triangle inequality
([[lem-metric-reverse-triangle]]) that makes the first of those three
descriptions the zero set of a well-behaved function.

**Sequences, and where choice is spent.** Convergence in a metric space is
convergence to zero of the real sequence of distances
([[def-metric-convergence]]), so it inherits the conventions of the sequences
page, including that $\mathbb{N}$ contains $0$ and that the definition
quantifies over rational $\varepsilon$. Limits are unique
([[lem-metric-limits-unique]]), and more is true: distinct points are separated
by disjoint balls, so every metric space is Hausdorff
([[thm-metric-hausdorff-separation]]). The balls of radius $1/n$ form a
countable neighbourhood base at each point
([[lem-metric-ball-neighbourhood-base]]), which is what makes sequences powerful
enough to detect the closure: a point is adherent to a set exactly when some
sequence in the set converges to it, and a set is closed exactly when it is
sequentially closed ([[thm-metric-sequential-closure]]). That theorem is the one
place on this page where a choice principle is spent, and it spends only
countable choice; the dependence is flagged at the step that spends it rather
than suppressed, and [[thm-metric-continuity-characterisations]] inherits it from
there rather than adding to it.

**Continuity, embeddings and comparison of metrics.** The $\varepsilon$-$\delta$
definition ([[def-metric-continuity]]) agrees with four other conditions:
preimages of open sets are open, preimages of closed sets are closed, sequential
continuity, and $f[\overline{A}] \subseteq \overline{f[A]}$
([[thm-metric-continuity-characterisations]]). Isometric embeddings are
injective and identify their source with the subspace they land on, topology and
all ([[def-isometry-and-metric-embedding]], [[lem-isometry-is-an-embedding]]),
which is what licenses treating a subset of a metric space as a space in its own
right. Finally, two metrics on one set may be compared at three strengths,
Lipschitz, uniform and topological ([[def-equivalent-metrics]]), ranked by
[[thm-metric-equivalence-hierarchy]]. The ranking is strict, but the witnesses
live on the companion page, so the theorem claims only the two implications.

**Two false statements close the page**, both about reading too much into the
names. The closure of an open ball need not be the closed ball of the same
radius ([[fs-closed-ball-is-the-closure-of-the-open-ball]]); and boundedness is
not determined by the topology, because every metric space carries a bounded
metric with the same open sets ([[lem-bounded-remetrisation]],
[[fs-boundedness-is-a-topological-property]]). The witnesses for both, and for
the strictness of the equivalence hierarchy, are on
[[metric-spaces-examples|the companion examples page]].
