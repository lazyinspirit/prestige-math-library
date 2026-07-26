---
page: completeness-and-uniform-continuity
title: "Completeness, Completion, and Uniform Continuity"
status: draft
items: [def-cauchy-in-metric, lem-metric-convergent-implies-cauchy,
        lem-metric-cauchy-bounded, lem-metric-cauchy-with-convergent-subsequence,
        def-complete-metric-space, thm-complete-subspace-iff-closed,
        thm-euclidean-space-complete, thm-cantor-intersection-metric,
        def-metric-uniform-continuity, def-lipschitz-holder-contraction,
        thm-metric-regularity-hierarchy, thm-uniform-continuity-preserves-cauchy,
        thm-uniformly-continuous-extension-from-dense, thm-banach-fixed-point,
        cor-banach-error-estimates, def-metric-completion,
        thm-metric-completion-exists, thm-metric-completion-unique,
        lem-complete-remetrisation,
        rem-complete-metrizability-is-the-topological-shadow]
examples: [fs-completeness-is-a-topological-property,
           fs-cauchy-implies-convergent-in-every-metric-space,
           fs-strict-contraction-has-a-fixed-point,
           fs-equivalent-metrics-share-cauchy-sequences]
---

**Objective.** The Metric Spaces page, linked under Prerequisites above, fixes
the axioms and develops open sets, closure, convergence and continuity. It stops
one step short of the two notions that make metric spaces useful for analysis:
the condition on a sequence that says it *ought* to converge, and the condition
on a map that says one $\delta$ serves every point. This page introduces both,
proves what each is good for, and shows exactly how far each fails to be
topological.

**Cauchy sequences, and what completeness is.** [[def-cauchy-in-metric]] states
the condition without naming a limit: the terms get uniformly close to one
another. Three small lemmas fix its behaviour. Every convergent sequence is
Cauchy ([[lem-metric-convergent-implies-cauchy]]); every Cauchy sequence has
bounded range ([[lem-metric-cauchy-bounded]]); and a Cauchy sequence with one
convergent subsequence already converges, to that subsequence's limit
([[lem-metric-cauchy-with-convergent-subsequence]]).
[[def-complete-metric-space]] then names the spaces where the converse of the
first lemma holds, and the word is always relative to the metric, never to the
topology.

**Where completeness comes from.** Two theorems supply the concrete complete
spaces that the fixed-point and extension arguments below run on; a third source,
the completion of an arbitrary metric space, is built at the end of the page.
[[thm-euclidean-space-complete]] transfers the Cauchy criterion from
$\mathbb{R}$ to $\mathbb{R}^n$ for every $n \ge 1$, coordinatewise, using two
inequalities and no Cauchy-Schwarz; the restriction $n \ge 1$ is inherited from
[[lem-metrics-on-rn]], where at $n = 0$ the metric $d_\infty$ would be a maximum
over the empty index set.
[[thm-complete-subspace-iff-closed]] settles subspaces in both directions: a
complete subspace of *any* metric space is closed, and a closed subspace of a
complete one is complete. Between them they make every closed subset of
$\mathbb{R}^n$ available as a complete space, which is what the fixed-point
arguments later on the page need.

**Nested sets: an equivalent form of completeness.**
[[thm-cantor-intersection-metric]] proves both directions at once. In a complete
space, nested nonempty closed bounded sets whose diameters tend to $0$ meet in
exactly one point; and a space in which every such family has nonempty
intersection is complete. The converse half has to close the tails of a Cauchy
sequence, so it proves inline that closing a set does not change its diameter,
rather than assuming it. The diameter hypothesis earns its place: the vanishing of the
diameters cannot be dropped, and cannot be weakened to boundedness of the
diameters either
([[cex-cantor-intersection-needs-vanishing-diameters]]). Boundedness of each
$F_k$ is not a further hypothesis but the precondition for writing a diameter
down at all, and the item says so.

**Uniform continuity and the regularity hierarchy.**
[[def-metric-uniform-continuity]] discharges a promise made twice on the previous
page, where for want of a name the condition had to be written out in full in
[[def-equivalent-metrics]] and pointed at from [[def-metric-continuity]];
uniform equivalence of two metrics now reads as "both identity maps are
uniformly continuous". [[def-lipschitz-holder-contraction]] adds the three
quantitative strengthenings, with the Hölder exponent a rational in $(0,1]$
because this library has no real exponents.
[[thm-metric-regularity-hierarchy]] then proves five implications: contraction
implies Lipschitz implies uniformly continuous implies continuous, every Hölder
map is uniformly continuous, and a Lipschitz map on a nonempty bounded space is
Hölder for every exponent, with the constant written down. That last clause
carries its boundedness hypothesis because the unconditional version is false,
and the theorem's first remark exhibits the witness: the identity of
$\mathbb{R}$ is Lipschitz and is $\alpha$-Hölder for no rational exponent
$\alpha < 1$. A chain
reading "Lipschitz implies Hölder implies uniformly continuous" is therefore not
available, and this page does not assert one.

**What uniform continuity buys.**
[[thm-uniform-continuity-preserves-cauchy]] is the hinge of everything after it: a uniformly continuous map sends Cauchy sequences to Cauchy
sequences, which continuity alone does not do
([[cex-continuous-map-destroying-cauchyness]]).
[[thm-uniformly-continuous-extension-from-dense]] is the payoff: a uniformly
continuous map from a dense subspace into a **complete** space extends, uniquely
among continuous maps, to a uniformly continuous map on the whole space. The
construction here is deliberately choice free at the point where it defines the
extension: $g(x)$ is the unique point common to the closures of the images of the
shrinking balls around $x$, rather than the limit of a selected sequence, so no
selection is made at uncountably many points. The Axiom of Countable Choice is
still spent inside the two results that are cited, and the item says where.

**Banach's fixed point theorem.** [[thm-banach-fixed-point]] gives the exact
statement: a contraction of a nonempty complete metric space into itself has one
fixed point, reached by iterating from any starting point, together with the
quantitative estimate $d(x_m,x_n) \le q^{\,n} d(x_1,x_0)/(1-q)$, valid for
$m \ge n$, that the proof produces along the way. That estimate is in the
statement because
[[cor-banach-error-estimates]] reads the two working bounds off it, the a priori
bound that says how many steps are needed and the a posteriori bound that says
how good the current step is. Every hypothesis has a witness for its necessity on
the companion page: completeness
([[cex-contraction-on-an-incomplete-space]]) and the uniform constant $q < 1$
([[fs-strict-contraction-has-a-fixed-point]],
[[cex-strict-contraction-without-a-fixed-point]]).

**Completion.** [[def-metric-completion]] defines a completion as a pair, a
complete space together with an isometric embedding with dense image; the
embedding is data, not decoration. [[thm-metric-completion-exists]] builds one
for an arbitrary metric space out of the equivalence classes of its Cauchy
sequences, defining and verifying the equivalence relation inline, as
[[def-integers]] does for the integers, since this library has no general theory
of equivalence relations. The notation there is kept honest: the Cauchy sequences
being classified need not converge, so no limit of them is ever written, and the
only limits taken are limits of real sequences whose existence has been proved
first. [[thm-metric-completion-unique]] then proves the universal property and
reads uniqueness off it: any two completions are related by a unique isometry
compatible with the embeddings, which is what licenses the phrase *the*
completion. The worked instance is $\mathbb{Q}$, whose completion is $\mathbb{R}$
([[ex-completion-of-q-is-r]]).

**Four false statements, and what they mark.** Completeness is **not**
topological ([[fs-completeness-is-a-topological-property]]); not every Cauchy
sequence converges ([[fs-cauchy-implies-convergent-in-every-metric-space]]); the
strict inequality $d(fx,fy) < d(x,y)$ does not force a fixed point
([[fs-strict-contraction-has-a-fixed-point]]); and topologically equivalent
metrics need not share their Cauchy sequences
([[fs-equivalent-metrics-share-cauchy-sequences]]). Each refutation carries its
witness inside itself, and each is worked out again in full on the companion
page. Taken together they say one thing: convergence is topological, Cauchyness
is not, and completeness inherits that failure.
[[lem-complete-remetrisation]] then names the topological invariant that does
survive — **complete metrizability**, the existence of *some* topologically
equivalent complete metric — and proves three things about it: it is carried
across homeomorphisms, it passes to closed subspaces, and it is strictly weaker
than completeness, $(0,\infty)$ carrying the complete metric
$|x-y| + |1/x - 1/y|$ for the same open sets that $|x-y|$ gives it without being
complete. [[rem-complete-metrizability-is-the-topological-shadow]] closes the
page by saying what is still missing: the *characterisation* of the completely
metrizable topologies, which is Alexandroff's theorem and needs machinery a much
later page supplies.
