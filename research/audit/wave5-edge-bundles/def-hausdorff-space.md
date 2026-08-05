# Citation-precision audit — everything that cites `def-hausdorff-space`

## The target, as it actually stands on disk

`items/def-hausdorff-space.md` — definition — Hausdorff space: distinct points have disjoint open neighbourhoods; every metrizable space is Hausdorff and the indiscrete topology on two points is not

#### Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**Hausdorff** when any two distinct points are separated by disjoint open sets:
for all $x, y \in X$ with $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \qquad y \in V, \qquad U \cap V = \varnothing .$$

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), the condition reads: distinct points have disjoint
open neighbourhoods. Nothing is asserted about points that are equal, and the
condition is vacuous for a space with at most one point, so every such space is
Hausdorff.

**Every metrizable space is Hausdorff.** This is not proved here, because it is
already discharged: [[def-metrizable-space]] records it among the two things
every metrizable space has, deriving it from
[[thm-metric-hausdorff-separation]], which separates $p \ne q$ in a metric space
by the disjoint open balls $B(p,r)$ and $B(q,r)$ with $r = d(p,q)/2 > 0$. In
particular $\mathbb{R}$ with its usual topology, every $\mathbb{R}^n$, and every
subspace of a metrizable space are Hausdorff.

**Not every space is Hausdorff.** The indiscrete topology
$\mathcal{T}_{\mathrm{ind}} = \{\varnothing, X\}$ on a set $X = \{a,b\}$ with
$a \ne b$ ([[def-standard-topologies]]) is not: the only open set containing $a$
is $X$, the only one containing $b$ is $X$, and $X \cap X = X \ne \varnothing$.
This is the same two-point space that [[def-metrizable-space]] uses to exhibit a
topology induced by no metric, and the reason is the same one: failure of the
Hausdorff condition is an obstruction to metrizability.

**Being Hausdorff is a topological property** ([[def-homeomorphism-and-open-maps]]).
If $h : X \to Z$ is a homeomorphism and $X$ is Hausdorff, then for $z \ne z'$ in
$Z$ the points $h^{-1}(z)$ and $h^{-1}(z')$ are distinct, so they have disjoint
open $U, V$; the images $h[U]$ and $h[V]$ are open, disjoint, and contain $z$ and
$z'$ respectively, a homeomorphism carrying the open sets of one space
bijectively onto those of the other. So no space homeomorphic to a Hausdorff
space fails the condition.

**Scope of this item.** Only the definition, the metrizable case and the
two-point failure are recorded here, because that is all this page uses. The
Hausdorff condition is one of a graded family of separation axioms; that family,
its ordering, and the questions of which of its members are hereditary or
preserved by products, are not available at this point in the reading order and
nothing here anticipates them. What this page does use is a single negative
result: a quotient of a Hausdorff space need not be Hausdorff, which is recorded
below as a false statement and witnessed on the companion page.

## The 24 citing use(s), quoted verbatim from the citing items

### `cex-pseudocompact-noncompact-particular-point-space` (published-backward, page the-topology-of-euclidean-space-examples)

Title: An infinite particular-point space is pseudocompact and not compact

- [L2] The usual topology on $\mathbb R$ is Hausdorff, so distinct real numbers have disjoint open neighbourhoods ([[lem-real-line-is-a-metric-space]], [[def-hausdorff-space]]).

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- with the subspace topology. Then $T$ is Hausdorff ([[def-hausdorff-space]]) and
- [L6] Normality: two disjoint closed sets have disjoint open supersets. Hausdorff: distinct points have disjoint open neighbourhoods. A set is closed exactly when its complement is open ([[def-normal-and-t4-spaces]], [[def-hausdorff-space]], [[def-topological-space]], [[def-interior-closure-boundary-top]], [[thm-closure-characterisation-top]]).

### `def-regular-and-t3-spaces` (published-backward, page separation-axioms)

Title: Regular spaces and $T_3$ spaces, with the source disagreement over whether regularity includes $T_1$ stated explicitly

- $T_1$ or Hausdorff ([[def-hausdorff-space]]): in the indiscrete topology on a set

### `def-urysohn-space` (published-backward, page separation-axioms)

Title: Urysohn ($T_{2\\frac{1}{2}}$) space: distinct points have neighbourhoods with disjoint closures

- ([[def-hausdorff-space]]). That implication is proved as the next item, together

### `ex-sierpinski-space-is-t0-normal-and-not-regular` (published-backward, page separation-axioms-examples)

Title: Sierpinski space is $T_0$ and normal but neither $T_1$ nor regular: normality without $T_1$ implies nothing

- ([[def-hausdorff-space]]) either, and for an independent reason rather than
- [L3] Hausdorff: distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]]).

### `ex-the-cocountable-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The cocountable topology on $\\mathbb{R}$ is $T_1$, has unique sequential limits, and is neither Hausdorff nor regular nor normal

- Hausdorff** ([[def-hausdorff-space]]), **not regular**
- [L5] Hausdorff, regular and normal are as in [[def-hausdorff-space]], [[def-regular-and-t3-spaces]] and [[def-normal-and-t4-spaces]].

### `ex-the-cofinite-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The cofinite topology on an infinite set is $T_1$ but neither Hausdorff nor regular nor normal

- Hausdorff** ([[def-hausdorff-space]]), **not regular**
- [L2] Hausdorff: distinct points have disjoint open neighbourhoods. Regular: a point and a closed set not containing it have disjoint open supersets. Normal: two disjoint closed sets have disjoint open supersets ([[def-hausdorff-space]], [[def-regular-and-t3-spaces]], [[def-normal-and-t4-spaces]]).

### `ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy` (published-backward, page separation-axioms-examples)

Title: A discrete space satisfies every axiom in the chain; an indiscrete space with two points is regular, completely regular, normal, completely normal and perfectly normal, and fails $T_0$

- [L1] The axioms: $T_0$ and $T_1$ ([[def-t0-and-t1-spaces]]); Hausdorff ([[def-hausdorff-space]]); Urysohn ([[def-urysohn-space]]); regular ([[def-regular-and-t3-spaces]]); completely regular ([[def-completely-regular-and-tychonoff-spaces]]); normal ([[def-normal-and-t4-spaces]]); completely normal and perfectly normal ([[def-completely-normal-and-perfectly-normal-spaces]]).

### `ex-the-particular-point-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The particular-point topology is $T_0$ and not $T_1$, it is not regular once the set has at least two points, and it is not normal once the set has at least three

- hence not Hausdorff ([[def-hausdorff-space]]).
- [L1] $T_0$: some open set contains exactly one of two distinct points. $T_1$: every singleton is closed. Every Hausdorff space is $T_1$ ([[def-t0-and-t1-spaces]], [[thm-t1-iff-singletons-are-closed]], [[def-hausdorff-space]]).

### `fs-every-hausdorff-space-is-regular` (published-backward, page separation-axioms)

Title: FALSE: every Hausdorff space is regular

- **False claim:** every Hausdorff space ([[def-hausdorff-space]]) is regular
- [L1] $(\mathbb{R}, \mathcal{T}_K)$ is Hausdorff and $T_1$; $K$ is closed in it; and there are no disjoint open $U \ni 0$ and $V \supseteq K$ ([[lem-the-k-topology-is-hausdorff-and-not-regular]], claims 2, 3 and 4, [[def-hausdorff-space]], [[def-t0-and-t1-spaces]]).

### `fs-every-normal-space-is-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: every normal space is Hausdorff, so the $T_1$ hypothesis in $T_4$ is redundant

- ([[def-hausdorff-space]]); equivalently, the $T_1$ hypothesis in the definition
- [A2] A space is Hausdorff when distinct points have disjoint open neighbourhoods, $T_1$ when each of two distinct points has an open set containing it and missing the other, and $T_0$ when some open set contains exactly one of them ([[def-hausdorff-space]], [[def-t0-and-t1-spaces]]).

### `fs-every-t1-space-is-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: every $T_1$ space is Hausdorff

- ([[def-hausdorff-space]]).
- [A1] A space is Hausdorff when any two distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]], [[def-topological-space]]).

### `fs-lindelofness-is-hereditary` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: Lindelöfness is hereditary

- [F1] A space is locally compact when every point has a compact neighbourhood, and Hausdorff when distinct points have disjoint open neighbourhoods ([[def-locally-compact-space]], [[def-hausdorff-space]]).

### `fs-unique-sequential-limits-imply-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: a space in which every sequence has at most one limit is Hausdorff

- ([[def-hausdorff-space]]).
- [A3] A space is Hausdorff when distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]], [[def-topological-space]]).

### `lem-ordinal-order-topology-is-t3` (published-backward, page separation-axioms)

Title: Every ordinal with its order topology has a basis of clopen sets, and is $T_1$, Hausdorff and regular

- 3. $\gamma$ is Hausdorff ([[def-hausdorff-space]]).

### `lem-the-k-topology-is-hausdorff-and-not-regular` (published-backward, page separation-axioms)

Title: The $K$-topology on $\\mathbb{R}$, generated by the open intervals together with their complements of $K = \\{1/(n+1) : n \\in \\mathbb{N}\\}$, is $T_1$ and Hausdorff but not regular

- 2. $(\mathbb{R}, \mathcal{T}_K)$ is Hausdorff ([[def-hausdorff-space]]) and $T_1$
- [L6] A space is Hausdorff when distinct points have disjoint open neighbourhoods; every Hausdorff space is $T_1$; a space is regular when a point and a closed set not containing it have disjoint open neighbourhoods ([[def-hausdorff-space]], [[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]], [[def-regular-and-t3-spaces]], [[def-t0-and-t1-spaces]]).

### `lem-urysohn-sits-between-hausdorff-and-regular-plus-t1` (published-backward, page separation-axioms)

Title: Every Urysohn space is Hausdorff, every Hausdorff space is $T_1$ and hence $T_0$, and every regular $T_1$ space is Urysohn

- ([[def-hausdorff-space]]).
- [A2] $X$ is Hausdorff when distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]]).

### `rem-function-space-conventions` (published-backward, page function-space-topologies)

Title: Standing hypotheses on this page: a metric domain, where the target must be metric, and why the compact-open topology is built from metric compactness

- ([[def-hausdorff-space]]); where the target is metric it is Hausdorff for free

### `rem-separation-axiom-conventions` (published-backward, page separation-axioms)

Title: Conventions on this page, and the one implication of the classical chain that is not available at this point in the reading order

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma` (published-backward, page nets-and-filters)

Title: Assuming the ultrafilter lemma, an arbitrary product of compact Hausdorff spaces is compact

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `thm-hausdorff-iff-net-limits-are-unique` (published-backward, page nets-and-filters)

Title: A topological space is Hausdorff if and only if every net has at most one limit

- [A1] Distinct points in a Hausdorff space have disjoint neighbourhoods ([[def-hausdorff-space]]).

### `thm-metric-spaces-are-tychonoff-and-perfectly-normal` (published-backward, page separation-axioms)

Title: In a metric space every closed set is a zero set and a $G_\\delta$, and the distance function separates a point from a closed set, so every metrizable space is Tychonoff and perfectly normal

- [L7] Every metrizable space is Hausdorff, hence $T_1$ and $T_0$ ([[def-metrizable-space]], [[def-hausdorff-space]], [[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]], [[def-t0-and-t1-spaces]]).

### `thm-t4-implies-t3` (published-backward, page separation-axioms)

Title: A normal $T_1$ space is regular, hence $T_3$, hence Urysohn, Hausdorff, $T_1$ and $T_0$

- ([[def-urysohn-space]]), Hausdorff ([[def-hausdorff-space]]), $T_1$ and $T_0$.

### `thm-the-separation-implication-chain` (published-backward, page separation-axioms)

Title: The implications proved on this page: perfectly normal gives completely normal under countable choice, and completely normal gives normal; normal with $T_1$ gives $T_3$; completely regular gives regular; regular with $T_1$ gives Urysohn, hence Hausdorff, hence $T_1$, hence $T_0$; and metrizable gives every one of them

- **Given:** A topological space $(X,\mathcal{T})$, and the definitions of $T_0$, $T_1$, Hausdorff, Urysohn, regular, completely regular, normal, completely normal and perfectly normal ([[def-t0-and-t1-spaces]], [[def-hausdorff-space]], [[def-urysohn-space]], [[def-regular-and-t3-spaces]], [[def-completely-regular-and-tychonoff-spaces]], [[def-normal-and-t4-spaces]], [[def-completely-normal-and-perfectly-normal-spaces]]).
