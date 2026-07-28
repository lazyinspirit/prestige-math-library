---
page: compactness
title: "Compactness"
status: published
items: [def-compact-space, lem-compactness-of-a-subspace-is-ambient,
        thm-compactness-agrees-with-metric-compactness, thm-compact-iff-fip,
        thm-closed-subspace-of-a-compact-space-is-compact,
        thm-compact-subset-of-a-hausdorff-space-is-closed,
        thm-compactness-under-continuous-maps, lem-tube-lemma-for-a-compact-factor,
        thm-finite-products-of-compact-spaces, thm-alexander-subbase-lemma,
        thm-tychonoff, def-compactness-variants, thm-compactness-variants-hierarchy,
        cor-heine-borel-in-the-product-topology, def-locally-compact-space,
        thm-locally-compact-hausdorff-basics,
        lem-dependent-choice-along-a-sequence-of-relations, def-baire-space,
        thm-baire-category-locally-compact-hausdorff, def-one-point-compactification,
        thm-one-point-compactification-properties, lem-the-order-topology-on-an-ordinal,
        thm-ordinal-spaces-and-compactness,
        thm-the-long-line-is-countably-compact-and-not-compact,
        thm-quasicomponents-equal-components-in-a-compact-hausdorff-space,
        rem-compactness-conventions-and-choice-ledger]
examples: [fs-a-compact-subset-is-closed-in-every-space,
           fs-compact-implies-sequentially-compact,
           fs-sequentially-compact-implies-compact,
           fs-countably-compact-implies-compact,
           fs-local-compactness-is-hereditary]
---

**Objective.** Compactness is the hypothesis under which an infinite covering
argument collapses to a finite one. This page defines it for an arbitrary
topological space, proves what it gives — closedness in a Hausdorff space,
separation of disjoint compact sets, attainment of extreme values, automatic
continuity of an inverse — and settles how it behaves under the constructions of
general topology: subspaces, products of any size, continuous images, and the
adjunction of a single point at infinity.

**Compactness of a subset is intrinsic.** [[def-compact-space]] defines a compact
space by open covers and calls a subset compact when the subspace it carries is
compact. That is a statement about the subspace alone, so the notion does not
depend on which larger space the subset is regarded as sitting in. The bridge to
the working form is [[lem-compactness-of-a-subspace-is-ambient]]: a subset is
compact exactly when every family of ambient open sets covering it has finitely
many members that already cover it, in the indexed form as well as the unindexed
one. Almost every proof below uses the indexed form, because a cover is normally
produced by a rule attaching an open set to each point or to each index, and a
bare set of open sets forgets the rule. The same reading was already fixed for
metric spaces, and [[thm-compactness-agrees-with-metric-compactness]] shows that
the two developments describe one notion, which is what makes the whole metric
theory of compactness available here once a metric inducing the topology is named.

**What compactness gives.** [[thm-compact-iff-fip]] converts the covering
condition into a statement about closed sets with the finite intersection
property, which is the form used whenever a common point has to be produced.
[[thm-closed-subspace-of-a-compact-space-is-compact]] and
[[thm-compact-subset-of-a-hausdorff-space-is-closed]] are the two halves of the
relationship between compactness and closedness, and the second carries more than
its name: in a Hausdorff space a point and a disjoint compact set, and two
disjoint compact sets, lie in disjoint open sets. Those separation clauses are
proved **choice-free**, by collecting the family of all open sets that work
rather than choosing one for each point, and they are what later pages use to
separate closed sets in a compact Hausdorff space.
[[thm-compactness-under-continuous-maps]] collects the payoff: a continuous image
of a compact space is compact, a continuous real-valued function on a nonempty
compact space attains a maximum and a minimum, and a continuous bijection from a
compact space to a Hausdorff space is a homeomorphism.

**Products.** [[lem-tube-lemma-for-a-compact-factor]] is the step that makes a
product of two compact spaces compact, and it is proved with no choice principle
at all by indexing its cover with pairs of open sets;
[[thm-finite-products-of-compact-spaces]] runs the induction. For an arbitrary
index set the argument changes character: [[thm-alexander-subbase-lemma]] reduces
compactness to covers by members of a fixed subbasis, using Zorn's lemma, and
[[thm-tychonoff]] then follows because a subbasic cover of a product restricts
one coordinate at a time. Tychonoff's theorem implies the Axiom of Choice, so no
proof of it can be free.

**Weaker cousins, and what each implication costs.**
[[def-compactness-variants]] introduces countable compactness, the Lindelöf
property, sequential compactness, limit point compactness, $\sigma$-compactness
and relative compactness, and identifies those of them that the metric
development had already defined. [[thm-compactness-variants-hierarchy]] proves the
implications one at a time rather than as a single equivalence, because an
equivalence proved round a cycle charges every arrow the maximum: compactness
gives countable compactness, the Lindelöf property and limit point compactness in
ZF; sequential compactness gives countable compactness at the cost of countable
choice; countable compactness gives limit point compactness at the cost of
dependent choice, and the converse holds when singletons are closed, again at
the cost of countable choice.
[[cor-heine-borel-in-the-product-topology]] records that on $\mathbb{R}^n$ the
product topology is the Euclidean one, so Heine-Borel applies unchanged.

**Local compactness and the Baire property.** [[def-locally-compact-space]] asks
only that every point have a compact neighbourhood, and
[[thm-locally-compact-hausdorff-basics]] shows what a Hausdorff hypothesis adds:
a neighbourhood base of compact sets, the shrinking of any open set around a
point to an open set with compact closure inside it, heredity along open and
closed subspaces, and an open set with compact closure around any compact set.
That shrinking clause is exactly what a nested construction needs, and
[[thm-baire-category-locally-compact-hausdorff]] runs one: every locally compact
Hausdorff space is a Baire space ([[def-baire-space]]), assuming dependent
choice. The construction shrinks at stage $n$ into the $n$-th dense open set, so
the relation governing it changes with the stage;
[[lem-dependent-choice-along-a-sequence-of-relations]] is the bridge from the
single-relation form of dependent choice to that situation, and it is needed
because a family of relations is not a relation.

**One point at infinity.** [[def-one-point-compactification]] adjoins a single
point, constructed from the space rather than assumed to exist, and declares open
the complements of the closed compact sets; the verification that this is a
topology is carried out there.
[[thm-one-point-compactification-properties]] proves that the result is compact,
that the original space sits inside it as an open subspace with its own topology,
that it is dense exactly when the original space is not compact, and that the
result is Hausdorff exactly when the original space is locally compact and
Hausdorff.

**Ordinals and the long ray.** [[lem-the-order-topology-on-an-ordinal]] gives an
ordinal space a basis of clopen sets and identifies its isolated points;
[[thm-ordinal-spaces-and-compactness]] shows that a successor ordinal is compact
and a limit ordinal is not, and that $\omega_1$ is sequentially compact and
countably compact without being compact, assuming countable choice.
[[thm-the-long-line-is-countably-compact-and-not-compact]] proves a Heine-Borel
theorem for the closed initial segments of the long ray, using only order density
and the least upper bound property, and deduces that the ray is not compact — a
theorem of ZF — and, assuming countable choice, that it is countably compact and
not Lindelöf. Both spaces are the standard witnesses for the
false statements that close the page.
[[thm-quasicomponents-equal-components-in-a-compact-hausdorff-space]] is the last
theorem: in a compact Hausdorff space the quasicomponents are connected, so the
two decompositions of a space into connected pieces agree.

**The ledger.** [[rem-compactness-conventions-and-choice-ledger]] settles the
conventions in force — that *compact* means the covering condition alone and
never includes a Hausdorff hypothesis, that compactness of a subset is intrinsic,
and that relative compactness is the one notion here that is not — and then
records, result by result, which arguments are theorems of ZF and which spend the
Axiom of Choice, countable choice or dependent choice. Every entry is a statement
about the proof given here and never a claim that a choice principle is necessary.

**False statements** close the page, each with a witness: that a compact
subset is closed in every space, that compactness and sequential compactness
imply each other, that countable compactness implies compactness, and that local
compactness is hereditary. The worked witnesses, together with the compactness of
the interval, the Cantor set and the Hilbert cube, are on the companion page.
