---
id: rem-what-the-diagonal-criterion-gives-and-what-it-costs
kind: remark
title: "Why the criterion is about the product topology, and the choice cost of the compact separation lemmas"
status: draft
origin: session
deps: [thm-hausdorff-iff-the-diagonal-is-closed, def-the-diagonal-of-a-space,
       def-product-topology, thm-product-universal-property,
       thm-compact-subset-of-a-hausdorff-space-is-closed, lem-finite-choice,
       def-choice-function, def-axiom-of-choice, def-compact-space,
       def-hausdorff-space, rem-separation-axiom-conventions]
justified_by: []
aliases: []
landmark: false
short: "what the diagonal criterion needs, and what the separation arguments cost"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "J. Munkres, Topology, 2nd ed., §19, §31 and §32"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

**The criterion is a statement about the product topology, and the proof uses
one specific fact about it.** [[thm-hausdorff-iff-the-diagonal-is-closed]] tests
the closedness of $\Delta_X$ against basic open sets of $X \times X$, and the
basic open sets it uses are the boxes $U \times V$ with $U$ and $V$ open in $X$.
That those boxes really are a basis is a feature of a *binary* product: by
[[def-product-topology]] a basic product-open set is a box all but finitely many
of whose factors are unrestricted, and a box with two factors satisfies that
condition for the trivial reason that it has only two. So for $X \times X$ the
box basis and the product basis are one family, and the criterion carries no
ambiguity about which of the two topologies is meant. No product with an infinite
index set is formed anywhere on this page, and nothing here is asserted about one.

**What the criterion buys, in one sentence.** The Hausdorff condition is a
quantifier over pairs of points and pairs of open sets; the criterion converts it
into the closedness of a single subset of a single space. Every consequence on
this page is then obtained the same way: package two maps into one map into a
square with [[def-the-diagonal-of-a-space]], and pull $\Delta$ back along it,
using the characteristic property of the product
([[thm-product-universal-property]]) to know the packaged map is continuous.
That is why an agreement set, and a graph, and the equality of two maps on a
dense set are corollaries of the criterion rather than independent
arguments.

**The separation of compact sets, and what the naive proof of it would cost.**
The separation clauses used on this page are those of
[[thm-compact-subset-of-a-hausdorff-space-is-closed]]: in a Hausdorff space a
point and a disjoint compact set have disjoint open neighbourhoods, and so do two
disjoint compact sets. The argument everyone writes first is

> for each $y \in K$ choose disjoint open $U_y \ni x$ and $V_y \ni y$,

and it selects one pair of open sets for each point of an arbitrary set $K$. That
is an application of the Axiom of Choice ([[def-axiom-of-choice]],
[[def-choice-function]]), and it is avoidable. Take instead the family
$\mathcal{V}$ of **all** open $V$ for which there exists an open $U$ with
$x \in U$ and $U \cap V = \varnothing$. This family is specified by a formula, so
nothing is selected in forming it; it covers $K$, because $X$ is Hausdorff
([[def-hausdorff-space]]) and $x \notin K$; compactness ([[def-compact-space]])
cuts it down to finitely many members $V_0, \dots, V_{n-1}$; and only now is a
$U_i$ chosen for each $i < n$ — finitely many choices, licensed by
[[lem-finite-choice]], which is a theorem of ZF. Then
$$U := \{\, t \in X : t \in U_i \text{ for every } i < n \,\}, \qquad V := \bigcup_{i<n} V_i$$
are the required neighbourhoods: $U$ is open, being $X$ when $n = 0$ and a finite
intersection of open sets otherwise, it contains $x$, and it misses each $V_i$
because it is contained in each $U_i$. The same manoeuvre — collect a
formula-defined family, cut it down by compactness, choose only afterwards — is
what the closed-graph criterion on this page does. Where a step of this page
spends a choice principle the step names it, and it is never more than
[[lem-finite-choice]].

**Why the sequential form is weaker, and how much weaker.** Uniqueness of
sequential limits follows from the Hausdorff condition and does not imply it,
which is why the criterion above is stated for the diagonal and not for
sequences: a sequence sees at most countably many points, whereas closedness of
$\Delta_X$ is a condition at every point of the square at once.

**Conventions.** The separation vocabulary used here — *regular* and *normal* as
conditions on sets alone, $T_3$ and $T_4$ as their conjunctions with $T_1$ — is
the one fixed in [[rem-separation-axiom-conventions]], and every statement on
this page writes the $T_1$ hypothesis out where it is used rather than building
it into an adjective.
