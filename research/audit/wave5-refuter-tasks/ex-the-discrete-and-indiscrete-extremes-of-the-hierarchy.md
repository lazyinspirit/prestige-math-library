# Adversarial proof reading — `ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy`

## The item under review, in full

`items/ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy.md`

```markdown
---
id: ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy
kind: example
title: "A discrete space satisfies every axiom in the chain; an indiscrete space with two points is regular, completely regular, normal, completely normal and perfectly normal, and fails $T_0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-standard-topologies, def-t0-and-t1-spaces, def-hausdorff-space,
       def-urysohn-space, def-regular-and-t3-spaces, def-normal-and-t4-spaces,
       def-completely-normal-and-perfectly-normal-spaces,
       def-completely-regular-and-tychonoff-spaces, def-separated-sets,
       def-g-delta-and-f-sigma-in-a-topological-space, def-zero-sets-and-cozero-sets,
       def-metrizable-space, thm-t1-iff-singletons-are-closed,
       def-continuous-map-top, thm-continuity-characterisations-top,
       def-interior-closure-boundary-top, thm-closure-characterisation-top,
       def-interval, def-topological-space]
justified_by: []
aliases: []
landmark: false
short: "the two extremes of the hierarchy"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Discrete space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discrete_space"
    - title: "Trivial topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Trivial_topology"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
pipeline_run: null
---

## Example

Let $X$ be a set with the **discrete** topology
$\mathcal{T}_{\mathrm{disc}} = \mathcal{P}(X)$, and let $Y = \{a,b\}$ with
$a \ne b$ carry the **indiscrete** topology
$\mathcal{T}_{\mathrm{ind}} = \{\varnothing, Y\}$ ([[def-standard-topologies]]).
Then:

1. $(X, \mathcal{T}_{\mathrm{disc}})$ satisfies **every** axiom named on the main
   page: it is $T_1$, Hausdorff, Urysohn, regular, completely regular, normal,
   completely normal and perfectly normal, hence $T_0$, $T_1$, $T_2$,
   $T_{2\frac12}$, $T_3$, $T_{3\frac12}$, $T_4$, $T_5$ and $T_6$.
2. $(Y, \mathcal{T}_{\mathrm{ind}})$ is **regular, completely regular, normal,
   completely normal and perfectly normal**, and it is **not $T_0$**, hence not
   $T_1$, not Hausdorff and not Urysohn; and it is not metrizable
   ([[def-metrizable-space]]).

Clause 2 is the sharpest form of the observation that the unnumbered adjectives
carry no information about points: a space may satisfy all five of them and still
fail to distinguish any pair of its points. That is exactly what the numerals
$T_3$ to $T_6$ are for.

## Facts & Assumptions

**Given:** A set $X$ with $\mathcal{T}_{\mathrm{disc}} = \mathcal{P}(X)$; the set $Y = \{a,b\}$ with $a \ne b$ and $\mathcal{T}_{\mathrm{ind}} = \{\varnothing, Y\}$; subsets $A, B$ of the space under discussion; and $\mathbb{R}$ with its usual topology.

[A1] In $(X,\mathcal{T}_{\mathrm{disc}})$ every subset is open and every subset is closed ([[def-standard-topologies]], [[def-topological-space]]).

[A2] In $(Y,\mathcal{T}_{\mathrm{ind}})$ the open sets are $\varnothing$ and $Y$, and so are the closed sets ([[def-standard-topologies]], [[def-topological-space]]).

[L1] The axioms: $T_0$ and $T_1$ ([[def-t0-and-t1-spaces]]); Hausdorff ([[def-hausdorff-space]]); Urysohn ([[def-urysohn-space]]); regular ([[def-regular-and-t3-spaces]]); completely regular ([[def-completely-regular-and-tychonoff-spaces]]); normal ([[def-normal-and-t4-spaces]]); completely normal and perfectly normal ([[def-completely-normal-and-perfectly-normal-spaces]]).

[L2] $A$ and $B$ are separated when $\overline{A} \cap B = A \cap \overline{B} = \varnothing$; separated sets are disjoint ([[def-separated-sets]]).

[L3] $\overline{A} = A$ when $A$ is closed, and $\overline{A}$ is the smallest closed superset of $A$ ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]]).

[L4] A set is a $G_\delta$ when it is an intersection of a sequence of open sets; every open set is a $G_\delta$, by the constant sequence ([[def-g-delta-and-f-sigma-in-a-topological-space]]).

[L5] A map out of a discrete space is continuous, every preimage being open; a constant map is continuous; $[0,1]$ carries the subspace topology of $\mathbb{R}$ ([[thm-continuity-characterisations-top]], clause (b), [[def-continuous-map-top]], [[def-zero-sets-and-cozero-sets]], [[def-interval]]).

[L6] A metrizable space is Hausdorff, so a space that is not Hausdorff is not metrizable ([[def-metrizable-space]]).

[L7] A space is $T_1$ exactly when every singleton is closed ([[thm-t1-iff-singletons-are-closed]]).

## Verification

**Proof technique:** direct.

1.1 In $(X,\mathcal{T}_{\mathrm{disc}})$ every singleton is closed by [A1], so the space is $T_1$ by [L7], hence $T_0$. [A1, L7]

1.2 In $(X,\mathcal{T}_{\mathrm{disc}})$ distinct points $x \ne y$ have the disjoint open neighbourhoods $\{x\}$ and $\{y\}$, whose closures are themselves by [A1] and [L3]; so the space is Hausdorff and Urysohn. [A1, L1, L3]

1.3 In $(X,\mathcal{T}_{\mathrm{disc}})$ let $A$ and $B$ be separated, hence disjoint by [L2]; then $A$ and $B$ are themselves disjoint open sets containing them, so the space is completely normal, and in particular normal, every pair of disjoint closed sets being separated by [L2] and [L3]. [A1, L1, L2, L3]

1.4 In $(X,\mathcal{T}_{\mathrm{disc}})$ let $C$ be closed and $x_0 \notin C$; the function $f$ with $f(x_0) = 1$ and $f(x) = 0$ for $x \ne x_0$ takes values in $[0,1]$ and is continuous by [L5], and it satisfies $f(x_0) = 1$ and $f(y) = 0$ for every $y \in C$, since $x_0 \notin C$, so the space is completely regular; taking $U := \{x_0\}$ and $V := C$ shows it is regular. [A1, L1, L5]

1.5 In $(Y,\mathcal{T}_{\mathrm{ind}})$ the only open set containing $a$ is $Y$, which also contains $b$, and likewise with $a$ and $b$ exchanged; so no open set contains exactly one of them and the space is not $T_0$, hence not $T_1$, not Hausdorff and not Urysohn, and not metrizable by [L6]. [A2, L1, L6]

1.6 In $(Y,\mathcal{T}_{\mathrm{ind}})$ the closed sets are $\varnothing$ and $Y$ by [A2], so $\overline{\varnothing} = \varnothing$ and $\overline{A} = Y$ for every nonempty $A$, the smallest closed superset of a nonempty set being $Y$. [A2, L3]

1.7 In $(Y,\mathcal{T}_{\mathrm{ind}})$ let $C$ be closed with $y_0 \notin C$; then $C \ne Y$, so $C = \varnothing$ by [A2], and the constant function $1$ is continuous by [L5] with $f(y_0) = 1$ and $f[C] = \varnothing \subseteq \{0\}$ vacuously, so the space is completely regular; and $U := Y$, $V := \varnothing$ are disjoint open sets separating $y_0$ from $C$, so it is regular. [A2, L1, L5]

2.1 In $(X,\mathcal{T}_{\mathrm{disc}})$ every closed set is open by [A1], hence a $G_\delta$ by [L4]; with step 1.3 the space is perfectly normal. [step 1.3, A1, L4]

2.2 In $(Y,\mathcal{T}_{\mathrm{ind}})$ a separated pair $A, B$ has an empty member: if both were nonempty then $\overline{A} \cap B = Y \cap B = B \ne \varnothing$ by step 1.6, contradicting [L2]. [step 1.6, L2]

3.1 By steps 1.1 to 1.5 the discrete space satisfies every axiom listed in claim 1, and the numbered forms follow, each numeral being its adjective together with $T_1$, which holds by step 1.1. [step 1.1, step 1.2, step 1.3, step 2.1, step 1.4]

3.2 In $(Y,\mathcal{T}_{\mathrm{ind}})$, given a separated pair with, say, $A = \varnothing$, the open sets $U := \varnothing$ and $V := Y$ separate them, and symmetrically when $B = \varnothing$; so the space is completely normal, and normal, disjoint closed sets being separated by [L2] and step 1.6. [step 1.6, step 2.2, A2, L1, L2]

4.1 In $(Y,\mathcal{T}_{\mathrm{ind}})$ both closed sets $\varnothing$ and $Y$ are open by [A2], hence $G_\delta$ by [L4]; with step 3.2 the space is perfectly normal. [step 3.2, A2, L4]

5.1 Steps 3.2, 4.1, 1.7 and 1.5 are claim 2, and step 3.1 is claim 1. [step 3.1, step 1.5, step 3.2, step 4.1, step 1.7] ∎

## Remarks

- **The two extremes bracket the whole page.** Every topology on a set lies between the indiscrete and the discrete one in the comparison order ([[def-standard-topologies]]), and the two ends of that order sit at opposite ends of the separation hierarchy: the discrete topology satisfies everything, the indiscrete topology on two points satisfies every unnumbered adjective and no numbered axiom at all.

- **The indiscrete space is the reason the numerals exist.** It refutes at a stroke any reading of "normal", "completely normal", "perfectly normal", "regular" or "completely regular" as implying a separation of *points*; the main page records the normal case as a false statement, and the argument here shows the same for the other four adjectives.

- **The discrete space is metrizable and the indiscrete one is not.** [[def-metrizable-space]] records the second, the failure of the Hausdorff condition being an obstruction to metrizability; the first is not needed here, since every axiom was verified directly rather than quoted from the metric theorems of the main page.
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-standard-topologies` — definition — The discrete, indiscrete, cofinite, cocountable, particular-point and Sierpinski topologies

(statement provenance: ai-altered)

### Definition

Throughout, a topology is as in [[def-topological-space]], and *finite*,
*at most countable* and *uncountable* are as in [[def-countable]], so that
"countable" always means "at most countable" and every finite set is countable.
Let $X$ be a set. The six families below are topologies on $X$; that each really
satisfies (T1), (T2) and (T3) is discharged in full after the list.

1. **Discrete topology.** $\mathcal{T}_{\mathrm{disc}} := \mathcal{P}(X)$: every
   subset is open, hence every subset is closed, hence every subset is clopen.
2. **Indiscrete topology.** $\mathcal{T}_{\mathrm{ind}} := \{\varnothing, X\}$.
   Its closed sets are again $\varnothing$ and $X$.
3. **Cofinite topology.**
   $\mathcal{T}_{\mathrm{cof}} := \{\varnothing\} \cup \{\, U \subseteq X : X \setminus U \text{ is finite} \,\}$.
   Its closed sets are $X$ together with the finite subsets of $X$.
4. **Cocountable topology.**
   $\mathcal{T}_{\mathrm{coc}} := \{\varnothing\} \cup \{\, U \subseteq X : X \setminus U \text{ is at most countable} \,\}$.
   Its closed sets are $X$ together with the at most countable subsets of $X$.
5. **Particular-point topology.** Fix $p \in X$ and put
   $\mathcal{T}_p := \{\varnothing\} \cup \{\, U \subseteq X : p \in U \,\}$: the
   open sets are $\varnothing$ and the sets containing $p$. Its closed sets are
   $X$ together with the sets **not** containing $p$.
6. **Sierpinski topology.** On a two-point set $S = \{a, b\}$ with $a \ne b$,
   $\mathcal{T}_{\mathrm{Sier}} := \{\varnothing, \{b\}, S\}$. The pair
   $(S, \mathcal{T}_{\mathrm{Sier}})$ is **Sierpinski space**; $b$ is its open
   point and $a$ its closed point. This is exactly the particular-point topology
   of item 5 on a two-point set with particular point $b$, listed separately
   because it is quoted so often.

**Two elementary facts about finite sets are used below, and both are proved
here.**

*(i) A subset of a finite set is finite.* Let $F \approx n$ with $n \in \mathbb{N}$
([[def-equinumerous]], [[def-natural-numbers]]), witnessed by a bijection
$\varphi : F \to n$, and let $B \subseteq F$. Then $\varphi$ restricts to a
bijection of $B$ onto $\varphi[B] \subseteq n$
([[def-injection-surjection-bijection]]). Every element of the von Neumann natural
$n$ is a natural number strictly smaller than $n$
([[lem-nat-order-is-membership]]), so $\varphi[B]$ is a subset of $\mathbb{N}$
bounded above by $n$, hence finite by the sharper form of
[[lem-subset-of-countable]] ("a subset $S \subseteq \mathbb{N}$ is finite if it is
bounded above"). Since $\approx$ is symmetric and transitive, $B$ is finite.

*(ii) A union of two finite sets is finite.* First, if $H$ is finite and $g$ is
any object then $H \cup \{g\}$ is finite: if $g \in H$ there is nothing to prove,
and otherwise a bijection $u : H \to k$ extends to a bijection
$H \cup \{g\} \to k \cup \{k\} = \sigma(k)$ by setting $u(g) := k$, which is
injective because $k \notin k$ ([[lem-nat-transitive-irreflexive]]). Now fix a
finite set $F$ and argue by induction ([[thm-induction-principle]]) on
$m \in \mathbb{N}$ over the statement "for every $G$ with $G \approx m$, the union
$F \cup G$ is finite". At $m = 0$ we have $G = \varnothing$ and $F \cup G = F$. At
$m = \sigma(j)$, a bijection $\psi : G \to \sigma(j)$ gives $g := \psi^{-1}(j)$
and $G' := G \setminus \{g\} \approx j$ (restrict $\psi$), so
$F \cup G = (F \cup G') \cup \{g\}$ is finite by the induction hypothesis and the
previous sentence.

**Discharge of the topology axioms.**

*Discrete.* Every subset of $X$ lies in $\mathcal{P}(X)$, so (T1), (T2) and (T3)
hold with nothing to check.

*Indiscrete.* (T1) is the definition. For (T2), a subfamily of
$\{\varnothing, X\}$ has union $\varnothing$ (if it is empty or $\{\varnothing\}$)
or $X$ (otherwise). For (T3), $\varnothing \cap A = \varnothing$ and
$X \cap X = X$.

*Cofinite.* (T1): $\varnothing$ is listed, and $X \setminus X = \varnothing$ is
finite. (T2): let $\mathcal{S} \subseteq \mathcal{T}_{\mathrm{cof}}$. If every
member is $\varnothing$ the union is $\varnothing$. Otherwise fix
$U_0 \in \mathcal{S}$ with $U_0 \ne \varnothing$; then
$X \setminus \bigcup \mathcal{S} \subseteq X \setminus U_0$, which is finite, so
the left side is finite by (i). (T3): for nonempty $U, V$ with finite
complements, $X \setminus (U \cap V) = (X \setminus U) \cup (X \setminus V)$ is
finite by (ii); and if either of $U, V$ is empty so is $U \cap V$. The closed sets
are the complements of the open ones, that is $X = X \setminus \varnothing$
together with the finite sets.

*Cocountable.* Identical to the cofinite case with "at most countable" in place of
"finite": (i) is replaced by [[lem-subset-of-countable]] itself, and (ii) by the
statement that a union of two at most countable sets is at most countable, which
is the two-set instance of [[thm-countable-union-of-countable]] applied to the
family $A_0 := U, A_1 := V, A_k := \varnothing$ for $k \ge 2$.

*Particular point.* (T1): $\varnothing$ is listed and $p \in X$. (T2): a
subfamily whose members are all $\varnothing$ has union $\varnothing$; otherwise
some member contains $p$, hence so does the union. (T3): if $U$ and $V$ both
contain $p$ then so does $U \cap V$; and if either is $\varnothing$ then so is the
intersection.

*Sierpinski.* The special case $X = \{a,b\}$, $p = b$ of the previous paragraph:
the sets containing $b$ are $\{b\}$ and $S$, so
$\mathcal{T}_b = \{\varnothing, \{b\}, S\} = \mathcal{T}_{\mathrm{Sier}}$.

### `def-t0-and-t1-spaces` — definition — $T_0$ (Kolmogorov) and $T_1$ (Frechet) spaces

(statement provenance: literature-derived)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **$T_0$**, or a **Kolmogorov space**, when any two distinct points are
  *topologically distinguishable*: for all $x, y \in X$ with $x \ne y$ there is
  an open set containing exactly one of $x$ and $y$.
- $X$ is **$T_1$**, or a **Frechet space**, when each of any two distinct points
  has an open set containing it and missing the other: for all $x, y \in X$ with
  $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \quad y \notin U, \qquad y \in V, \quad x \notin V .$$

Nothing is asserted about a pair of equal points, so a space with at most one
point satisfies both conditions vacuously.

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), both conditions may be read with "open
neighbourhood" in place of "open set"; and by the same equivalence recorded in
[[def-neighbourhood-top]] they may be read with arbitrary neighbourhoods, since
a neighbourhood of $x$ contains an open one and an open neighbourhood is a
neighbourhood.

**Every $T_1$ space is $T_0$, and this is discharged here** rather than left to
the reader, because it is the bottom arrow of the whole hierarchy on this page.
Let $x \ne y$ and take $U, V$ as in the $T_1$ condition. Then $U$ is an open set
containing $x$ and not $y$, so it contains exactly one of the two points, which
is the $T_0$ condition. Only the first half of the $T_1$ condition is used, so
the implication does not reverse formally, and it does not reverse in fact:
Sierpinski space is a witness, recorded on the companion page.

**The two conditions differ exactly in symmetry.** $T_0$ asks for *one* open set
that tells the pair apart, with no control over which of the two it contains;
$T_1$ asks for *both* separations at once. In Sierpinski space
$(\{a,b\}, \{\varnothing, \{b\}, \{a,b\}\})$ of [[def-standard-topologies]] the
open set $\{b\}$ contains $b$ and not $a$, so the space is $T_0$; but the only
open set containing $a$ is the whole space, which also contains $b$, so it is
not $T_1$.

**Neither condition is a property of a set alone.** Both are properties of the
pair $(X, \mathcal{T})$, and both are inherited upwards along the comparison
order of [[def-topological-space]]: if $\mathcal{T}_1 \subseteq \mathcal{T}_2$
and $(X,\mathcal{T}_1)$ is $T_0$, respectively $T_1$, then so is
$(X,\mathcal{T}_2)$, since the separating open sets of the coarser topology lie
in the finer one. In particular the discrete topology satisfies both, and the
indiscrete topology on a set with at least two points satisfies neither.

### `def-hausdorff-space` — definition — Hausdorff space: distinct points have disjoint open neighbourhoods; every metrizable space is Hausdorff and the indiscrete topology on two points is not

(statement provenance: ai-altered)

### Definition

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

### `def-urysohn-space` — definition — Urysohn ($T_{2\\frac{1}{2}}$) space: distinct points have neighbourhoods with disjoint closures

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
closures as in [[def-interior-closure-boundary-top]]. Then $X$ is an **Urysohn
space**, also written **$T_{2\frac{1}{2}}$**, when any two distinct points have
open neighbourhoods whose *closures* are disjoint: for all $x, y \in X$ with
$x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \qquad y \in V, \qquad \overline{U} \cap \overline{V} = \varnothing .$$

Equivalently, by [[def-neighbourhood-top]], distinct points have disjoint closed
neighbourhoods: if $U$ and $V$ are as displayed then $\overline{U}$ and
$\overline{V}$ are disjoint closed neighbourhoods of $x$ and $y$; conversely
disjoint closed neighbourhoods $K \ni x$ and $L \ni y$ contain open
$U \ni x$ and $V \ni y$ with $\overline{U} \subseteq K$ and
$\overline{V} \subseteq L$, since $K$ and $L$ are closed, so the closures are
disjoint.

The condition is vacuous for a space with at most one point, and nothing is
asserted about equal points.

**The condition strictly strengthens the Hausdorff condition** on its face:
$U \subseteq \overline{U}$ and $V \subseteq \overline{V}$, so disjointness of the
closures forces disjointness of $U$ and $V$ and hence the Hausdorff property
([[def-hausdorff-space]]). That implication is proved as the next item, together
with the implication that puts Urysohn spaces below the regular $T_1$ spaces.
This page does not exhibit a Hausdorff space that is not Urysohn, and it does not
assert that one exists: every witness reachable from the material developed here
would need machinery this page does not have, so the question whether the
implication reverses is left open here.

**A live naming collision, flagged here and settled in this page's
conventions.** Two different conditions travel under Urysohn's name:

- the one defined above, separation of points by *disjoint closed
  neighbourhoods*, which is what this library calls **Urysohn** and
  $T_{2\frac{1}{2}}$;
- separation of points by a *continuous real-valued function*, which is usually
  called **completely Hausdorff** and which this library does not define.

Some texts exchange the two names. Neither is **Urysohn's lemma**, a theorem
about normal spaces that is not proved on this page at all
([[rem-separation-axiom-conventions]]).

### `def-regular-and-t3-spaces` — definition — Regular spaces and $T_3$ spaces, with the source disagreement over whether regularity includes $T_1$ stated explicitly

(statement provenance: literature-derived)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **regular** when a point can be separated from a closed set not
  containing it: for every closed $C \subseteq X$ and every
  $x \in X \setminus C$ there are $U, V \in \mathcal{T}$ with
  $$x \in U, \qquad C \subseteq V, \qquad U \cap V = \varnothing .$$
- $X$ is **$T_3$** when it is regular **and** $T_1$ ([[def-t0-and-t1-spaces]]).

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), regularity reads: $x$ and $C$ have disjoint open
neighbourhoods. The case $C = \varnothing$ is allowed and is satisfied by
$U = X$, $V = \varnothing$, so no nonemptiness is hidden in the condition.

**The convention fork, and this library's side of it.** Textbooks disagree about
whether the word *regular* carries a $T_1$ hypothesis. Munkres builds it in,
defining a regular space to be one in which points are closed and the separation
condition above holds; Kelley, Willard and Engelking do not, and reserve $T_3$
for the conjunction. **This library takes the second side**: *regular* names the
separation condition alone, $T_3$ names regular plus $T_1$, and every statement
that needs points to be closed writes the $T_1$ hypothesis out. The reason is
that the two halves are genuinely independent and each is used alone below: the
indiscrete topology on a two-point set is regular and not $T_0$
([[def-standard-topologies]]), and the cofinite topology on an infinite set is
$T_1$ and not regular, both witnessed on the companion page.

**Regularity alone implies no other separation axiom.** It does not imply $T_0$,
$T_1$ or Hausdorff ([[def-hausdorff-space]]): in the indiscrete topology on a set
$X$ the only closed sets are $\varnothing$ and $X$, so the only pair $(C, x)$ to
be separated has $C = \varnothing$, and $U = X$, $V = \varnothing$ separates it;
yet no two distinct points are distinguished by any open set. Conversely $T_1$
does not imply regularity. It is the *conjunction* $T_3$ that sits above
Hausdorff in the hierarchy, and the proof of that is two items below.

### `def-normal-and-t4-spaces` — definition — Normal spaces and $T_4$ spaces, with the source disagreement over whether normality includes $T_1$ stated explicitly

(statement provenance: literature-derived)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **normal** when any two disjoint closed sets can be separated by
  disjoint open sets: for all closed $A, B \subseteq X$ with
  $A \cap B = \varnothing$ there are $U, V \in \mathcal{T}$ with
  $$A \subseteq U, \qquad B \subseteq V, \qquad U \cap V = \varnothing .$$
- $X$ is **$T_4$** when it is normal **and** $T_1$ ([[def-t0-and-t1-spaces]]).

Either of $A$, $B$ may be empty, and those cases are met by $U = \varnothing$ or
$V = \varnothing$ together with $X$; so the condition hides no nonemptiness
hypothesis. As with regularity, "disjoint open sets" may equivalently be read as
"disjoint open neighbourhoods of the two sets" ([[def-neighbourhood-top]]).

**Normality is the special case of complete normality at a disjoint closed
pair.** Disjoint closed sets are separated in the sense of
[[def-separated-sets]], since the closure of a closed set is itself; so a space
in which every *separated* pair can be put into disjoint open sets is in
particular normal. That stronger condition is defined later on this page, and the
implication is proved there.

**The convention fork, and this library's side of it.** Exactly as for
regularity, textbooks disagree about whether *normal* carries a $T_1$ hypothesis.
Munkres builds it in; Kelley, Willard and Engelking do not. **This library takes
the second side**: *normal* names the separation condition alone, $T_4$ names
normal plus $T_1$, and the $T_1$ hypothesis is written out wherever it is used.
The reason is again that the two halves are independent, and here the point is
sharp: **normality without $T_1$ implies nothing at all** in the hierarchy. The
indiscrete topology on a two-point set ([[def-standard-topologies]]) is normal,
its only closed sets being $\varnothing$ and the whole space, and it is not even
$T_0$; Sierpinski space is normal, $T_0$ and not regular. Both are recorded on
this page, the first as a false statement and both on the companion page.

### `def-completely-normal-and-perfectly-normal-spaces` — definition — Completely normal ($T_5$) and perfectly normal ($T_6$) spaces

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **completely normal** when any two **separated** sets can be put into
  disjoint open sets: for all $A, B \subseteq X$ that are separated
  ([[def-separated-sets]]) there are $U, V \in \mathcal{T}$ with
  $$A \subseteq U, \qquad B \subseteq V, \qquad U \cap V = \varnothing .$$
  $X$ is **$T_5$** when it is completely normal and $T_1$
  ([[def-t0-and-t1-spaces]]).
- $X$ is **perfectly normal** when $X$ is normal ([[def-normal-and-t4-spaces]])
  **and** every closed subset of $X$ is a $G_\delta$
  ([[def-g-delta-and-f-sigma-in-a-topological-space]]). $X$ is **$T_6$** when it
  is perfectly normal and $T_1$.

As with *regular* and *normal*, neither adjective carries a $T_1$ hypothesis in
this library, and the numerals name the conjunctions.

**The $G_\delta$ condition, restated by complementation.** Every closed subset of
$X$ is a $G_\delta$ if and only if every open subset of $X$ is an $F_\sigma$,
because complementation exchanges the two classes and exchanges open with closed
([[def-g-delta-and-f-sigma-in-a-topological-space]]). Both forms are used below,
and the second is the one the implication $T_6 \Rightarrow T_5$ consumes.

**Complete normality really is stronger than normality, on its face.** Disjoint
closed sets are separated ([[def-separated-sets]]), so the complete-normality
condition applies in particular to them; that is the whole proof of the next
item. What complete normality adds is the ability to separate sets that are not
closed, for instance the two sets $(0,1)$ and $(1,2)$ of $\mathbb{R}$, which are
separated and neither of which is closed.

**A competing definition of *perfectly normal*, and why this library does not
use it.** Some texts define a perfectly normal space to be a normal space in
which every closed set is a **zero set** ([[def-zero-sets-and-cozero-sets]]).
That condition is equivalent to the one above, but the equivalence rests on
Urysohn's lemma, which is not available at this point in the reading order; the
$G_\delta$ form is therefore the definition here, and no statement on this page
asserts the equivalence. What *is* proved here is one direction in the metric
case, where the distance function exhibits every closed set simultaneously as a
zero set and as a $G_\delta$.

### `def-completely-regular-and-tychonoff-spaces` — definition — Completely regular spaces and Tychonoff ($T_{3\\frac{1}{2}}$) spaces

(statement provenance: literature-derived)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$[0,1] \subseteq \mathbb{R}$ carry the subspace topology of the usual topology of
$\mathbb{R}$ ([[def-interval]], [[def-subspace-topology-top]],
[[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).

- $X$ is **completely regular** when a point can be separated from a closed set
  not containing it *by a continuous function*: for every closed $C \subseteq X$
  and every $x_0 \in X \setminus C$ there is a continuous
  $f : X \to [0,1]$ ([[def-continuous-map-top]]) with
  $$f(x_0) = 1 \qquad \text{and} \qquad f(y) = 0 \ \text{ for every } y \in C .$$
- $X$ is **Tychonoff**, also written **$T_{3\frac{1}{2}}$** and *completely
  regular Hausdorff*, when it is completely regular **and** $T_1$
  ([[def-t0-and-t1-spaces]]).

The case $C = \varnothing$ is allowed and is satisfied by the constant function
$1$, which is continuous ([[def-zero-sets-and-cozero-sets]]); so the condition
hides no nonemptiness hypothesis.

**The same condition in the vocabulary of zero sets.** With $f$ as displayed,
$C \subseteq Z(f)$ and $x_0 \in \operatorname{coz}(f)$
([[def-zero-sets-and-cozero-sets]]), so complete regularity says: for every
closed $C$ and every $x_0 \notin C$ there is a continuous $f$ whose zero set
contains $C$ and whose cozero set contains $x_0$. In particular
$\operatorname{coz}(f)$ is an open set containing $x_0$ and disjoint from $C$;
that alone is weaker than regularity, and the passage from the function to two
*disjoint* open sets is the next item.

**The values $0$ and $1$ are a normalisation, not a restriction.** If
$g : X \to \mathbb{R}$ is continuous with $g(x_0) = a$, $g[C] = \{b\}$ and
$a \ne b$, then the condition above is met by a function built from $g$ by an
affine change of variable followed by truncation into $[0,1]$; this page never
needs that construction, because every function it builds is already normalised.
The *direction* of the normalisation is a genuine convention and is fixed here as
$f(x_0) = 1$ and $f[C] = \{0\}$, following the most common usage; some texts
write the reverse, and a reader must check which is meant before quoting a
formula.

**The convention fork over $T_1$ is the same one as for regularity.** *Completely
regular* names the function-separation condition alone, and Tychonoff names the
conjunction with $T_1$ ([[def-regular-and-t3-spaces]]). The indiscrete topology
on a two-point set ([[def-standard-topologies]]) is completely regular, its only
closed set disjoint from a point being $\varnothing$, and it is not $T_0$; so the
two halves are independent here as well.

### `def-separated-sets` — definition — Separated sets: $\\overline{A} \\cap B = A \\cap \\overline{B} = \\varnothing$

(statement provenance: literature-derived)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$A, B \subseteq X$, with closures taken in $X$
([[def-interior-closure-boundary-top]]). Then $A$ and $B$ are **separated** when

$$\overline{A} \cap B = \varnothing \qquad \text{and} \qquad A \cap \overline{B} = \varnothing .$$

Equivalently, neither set meets the closure of the other. The condition is
symmetric in $A$ and $B$ by construction, and it is inherited downwards: if $A$
and $B$ are separated and $A' \subseteq A$, $B' \subseteq B$, then $A'$ and $B'$
are separated, because $A' \subseteq A$ forces
$\overline{A'} \subseteq \overline{A}$, the closure $\overline{A}$ being a closed
superset of $A'$ and $\overline{A'}$ the smallest such
([[thm-closure-characterisation-top]], claim 2).

**Separated sets are disjoint, and being disjoint is not enough.** From
$A \subseteq \overline{A}$ one gets
$A \cap B \subseteq \overline{A} \cap B = \varnothing$. The converse fails: in
$\mathbb{R}$ with its usual topology the sets $A = (0,1)$ and $B = [1,2)$ are
disjoint, yet $1 \in \overline{A} \cap B$, so they are not separated.

**Two sufficient conditions, both used constantly below.**

1. *Disjoint closed sets are separated.* If $A$ and $B$ are closed and disjoint
   then $\overline{A} = A$ and $\overline{B} = B$
   ([[thm-closure-characterisation-top]], claim 2), so both displayed
   intersections are $A \cap B = \varnothing$.
2. *Disjoint open sets are separated.* Let $U, V$ be open and disjoint. If
   $y \in V$ then $V$ is an open set containing $y$ and missing $U$, so
   $y \notin \overline{U}$ by clause (c) of
   [[thm-closure-characterisation-top]]; hence $\overline{U} \cap V = \varnothing$,
   and symmetrically $U \cap \overline{V} = \varnothing$.

**Separation is absolute rather than relative to a subspace.** Let
$A, B \subseteq S \subseteq X$ with $S$ carrying the subspace topology
([[def-subspace-topology-top]]). Then $A$ and $B$ are separated in the space $S$
if and only if they are separated in $X$. Indeed
$\operatorname{cl}_S(A) = \overline{A} \cap S$
([[thm-subspace-closure-and-interior]], claim 1), so

$$\operatorname{cl}_S(A) \cap B = \overline{A} \cap S \cap B = \overline{A} \cap B$$

because $B \subseteq S$, and symmetrically for the other intersection. So the
phrase "$A$ and $B$ are separated" needs no ambient space named once both sets
are fixed, and this is exactly what makes the notion the right hypothesis for
complete normality later on this page.

### `def-g-delta-and-f-sigma-in-a-topological-space` — definition — $G_\\delta$ and $F_\\sigma$ subsets of a topological space, agreeing with the real-line notion

(statement provenance: literature-derived)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$A \subseteq X$.

- $A$ is a **$G_\delta$ set of $X$** when there is a sequence
  $(V_n)_{n \in \mathbb{N}}$ of open subsets of $X$ with
  $$A \;=\; \bigcap_{n \in \mathbb{N}} V_n .$$
- $A$ is an **$F_\sigma$ set of $X$** when there is a sequence
  $(F_n)_{n \in \mathbb{N}}$ of closed subsets of $X$ with
  $$A \;=\; \bigcup_{n \in \mathbb{N}} F_n .$$

As everywhere in this library $\mathbb{N}$ contains $0$, so both indexings start
at $0$. An at most countable *family* may always be presented as a sequence
([[def-countable]]): a finite list $V_0, \dots, V_m$ is extended by $V_n := V_m$
for $n > m$, which changes neither the intersection nor the union, so nothing is
lost by indexing over $\mathbb{N}$.

**The two classes are exchanged by complementation.** $A$ is $F_\sigma$ in $X$ if
and only if $X \setminus A$ is $G_\delta$ in $X$. If $A = \bigcup_n F_n$ with
each $F_n$ closed then $X \setminus A = \bigcap_n (X \setminus F_n)$ by De Morgan
and each $X \setminus F_n$ is open ([[def-topological-space]]); the converse is
the same computation read backwards.

**Every open set is $G_\delta$ and every closed set is $F_\sigma$**, by the
constant sequence $V_n := A$, respectively $F_n := A$. **Neither converse
holds**, and $\mathbb{R}$ with its usual topology already refutes both. The
singleton $\{0\}$ is a $G_\delta$ that is **not open**: it is
$\bigcap_{n \in \mathbb{N}} (-1/(n+1),\ 1/(n+1))$, since $0$ lies in every one of
those intervals while a real $t \ne 0$ is excluded at some index, the
Archimedean property giving a natural $k \ge 1$ with $1/k < |t|$ and $k$ being a
successor $n+1$ ([[cor-archimedean-reciprocal]], [[lem-nat-nonzero-is-successor]],
[[def-canonical-natural]]); and $\{0\}$ is not open because every bounded open
interval $(a,b)$ with $a < 0 < b$ contains the point $b/2 \ne 0$
([[def-interval]], [[lem-real-line-is-a-metric-space]], claim 3). Complementing,
$\mathbb{R} \setminus \{0\}$ is an $F_\sigma$ that is **not closed**, its
complement $\{0\}$ not being open.

**The condition that is a real restriction is the other pairing**, namely that
every **closed** set be a $G_\delta$, equivalently that every **open** set be an
$F_\sigma$. That is not automatic in an arbitrary space, and it is exactly the
second conjunct of perfect normality later on this page. It must not be confused
with the two automatic inclusions above: they hold everywhere and say nothing
about a space.

**Agreement with the real-line notion, stated because a second notion of the
same name would be a defect.** [[def-f-sigma-g-delta]] defines $F_\sigma$ and
$G_\delta$ subsets of $\mathbb{R}$ by the same two displayed conditions, with
"open" and "closed" read in the sense of [[def-open-and-closed-in-r]]. Those two
words name the same two collections of subsets of $\mathbb{R}$ as the usual
topology of $\mathbb{R}$ does, and the verification is one line of unfolding.
[[def-open-and-closed-in-r]] calls $U$ open when every $x \in U$ admits
$\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$, where
$N_\varepsilon(x) = (x - \varepsilon,\ x + \varepsilon)$
([[def-neighbourhood-r]]); [[def-metric-topology]] calls $U$ open in
$(\mathbb{R}, d_{\mathbb{R}})$ when every $x \in U$ admits $r > 0$ with
$B(x,r) \subseteq U$, and $B(x,r) = (x-r,\ x+r)$ by claim 2 of
[[lem-real-line-is-a-metric-space]]. The two conditions are therefore the same
condition word for word, so the two collections of open subsets of $\mathbb{R}$
are one collection, and hence so are the two collections of closed subsets, each
being the complements of the other collection. The usual topology of $\mathbb{R}$
is the metric topology of $d_{\mathbb{R}}$ ([[def-metrizable-space]]). Since the
two definitions quantify over one collection of open sets and one collection of
closed sets, a subset of $\mathbb{R}$ is $G_\delta$ in the sense above, for
$\mathbb{R}$ with its usual topology, if and only if it is $G_\delta$ in the
sense of [[def-f-sigma-g-delta]]; and likewise for $F_\sigma$. **There is one
notion here, not two**, and every statement proved about $F_\sigma$ or $G_\delta$
subsets of $\mathbb{R}$ elsewhere in this library may be quoted verbatim as a
statement about the topological space $\mathbb{R}$.

### `def-zero-sets-and-cozero-sets` — definition — Zero sets and cozero sets of continuous real-valued functions

(statement provenance: literature-derived)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$\mathbb{R}$ carry its usual topology, the metric topology of
$d_{\mathbb{R}}(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]],
[[def-metrizable-space]]). For a continuous $f : X \to \mathbb{R}$
([[def-continuous-map-top]]) put

$$Z(f) \;:=\; f^{-1}[\{0\}] \;=\; \{\, x \in X : f(x) = 0 \,\}, \qquad \operatorname{coz}(f) \;:=\; X \setminus Z(f) \;=\; \{\, x \in X : f(x) \ne 0 \,\} .$$

$Z(f)$ is the **zero set** of $f$ and $\operatorname{coz}(f)$ its **cozero set**.
A subset of $X$ is *a zero set of $X$* when it is $Z(f)$ for some continuous
$f : X \to \mathbb{R}$, and *a cozero set of $X$* when it is the complement of
one. Where the target is written $[0,1]$ ([[def-interval]]) with its subspace
topology ([[def-subspace-topology-top]]), a continuous map $X \to [0,1]$ is the
same thing as a continuous map $X \to \mathbb{R}$ with all values in $[0,1]$, by
the characteristic property of a map into a subspace recorded in
[[def-subspace-topology-top]]; so nothing below depends on which of the two
targets is written.

**Every zero set is closed and every cozero set is open.** $\{0\}$ is closed in
$\mathbb{R}$: its complement $\mathbb{R} \setminus \{0\}$ is open, since a point
$t \ne 0$ has the bounded open interval $(t - |t|,\ t + |t|)$ around it inside
$\mathbb{R} \setminus \{0\}$ ([[def-interval]], [[lem-real-line-is-a-metric-space]],
claim 3). The preimage of a closed set under a continuous map is closed
([[thm-continuity-characterisations-top]], clause (c)).

**Every zero set is a $G_\delta$ and every cozero set an $F_\sigma$**
([[def-g-delta-and-f-sigma-in-a-topological-space]]). Writing $\iota$ for the
canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]), so that $1/(n+1)$
abbreviates the inverse of $\iota(n+1)$, put

$$V_n \;:=\; f^{-1}\big[\,(-1/(n+1),\ 1/(n+1))\,\big] \qquad (n \in \mathbb{N}).$$

Each $V_n$ is open, being the preimage of an open interval
([[thm-continuity-characterisations-top]], clause (b)). Clearly
$Z(f) \subseteq \bigcap_n V_n$. Conversely, if $f(x) \ne 0$ then
$\varepsilon := |f(x)| > 0$, and [[cor-archimedean-reciprocal]] gives a natural
$k \ge 1$ with $1/k < \varepsilon$; since $k \ne 0$ it is a successor,
$k = n+1$ with $n \in \mathbb{N}$ ([[lem-nat-nonzero-is-successor]]), so
$|f(x)| > 1/(n+1)$ and $x \notin V_n$. Hence $Z(f) = \bigcap_{n} V_n$ is a
$G_\delta$, and $\operatorname{coz}(f)$ is an $F_\sigma$ by complementation.

**Both extremes occur.** The constant maps are continuous, since the preimage of
any set under a constant map is $\varnothing$ or $X$
([[thm-continuity-characterisations-top]], clause (b)); so $X = Z(0)$ and
$\varnothing = Z(1)$ are zero sets of every space, where $0$ and $1$ denote the
corresponding constant maps.

### `def-metrizable-space` — definition — Metrizable space: a topological space whose topology is induced by some metric; metrizability is topological, the metric is not

(statement provenance: ai-altered)

### Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**metrizable** if there is a metric $d$ on $X$ ([[def-metric-space]]) whose
metric topology is $\mathcal{T}$, that is $\mathcal{T} = \mathcal{T}_d$
([[def-metric-topology]]). Such a $d$ is said to **induce** or **metrise**
$\mathcal{T}$.

**The definition presupposes that $\mathcal{T}_d$ is a topology in the sense of
[[def-topological-space]], and it is.** By [[def-metric-topology]] both
$\varnothing$ and $X$ are open in $(X,d)$, which is (T1), and by
[[thm-metric-open-set-algebra]] the family $\mathcal{T}_d$ is closed under
arbitrary unions, which is (T2), and under intersections of $n \ge 1$ members,
which contains (T3). So every metric space is a topological space, and the
metric-space development of this library is a special case of the present one.

**The standard local notions in the two developments agree after translating
their neighbourhood conventions.** Let $d$ be a metric on $X$ and give $X$ the
topology $\mathcal{T}_d$.

- *Neighbourhoods and balls.* [[def-metric-topology]] uses "neighbourhood" for
  an open set containing $x$, whereas [[def-neighbourhood-top]] also allows a
  non-open superset of such a set. Thus the two collections are not literally
  equal, but the open metric neighbourhoods are cofinal in the broader
  neighbourhood filter. The balls $B(x,r)$, $r > 0$ ([[def-metric-ball]]), are
  open ([[thm-metric-open-set-algebra]]) and form a neighbourhood base at $x$:
  any neighbourhood $N$ contains an open $U \ni x$, hence a ball around $x$ by
  [[def-metric-topology]]. The balls of radius $1/n$ alone already suffice
  ([[lem-metric-ball-neighbourhood-base]]).
- *Interior, closure, boundary.* [[def-metric-interior-closure-boundary]] defines
  them by the same conditions with balls in place of neighbourhoods, and the
  previous bullet makes the two conditions equivalent; the metric closure is the
  smallest closed superset ([[thm-metric-closure-characterisation]]), which is the
  definition used here ([[def-interior-closure-boundary-top]]). So the two
  closures, the two interiors and the two boundaries are the same three
  operations.
- *Convergence.* $x_k \to p$ in the sense of [[def-sequence-convergence-top]] is
  "eventually in every neighbourhood of $p$", and by the first bullet this is
  "eventually in every ball around $p$", which is [[def-metric-convergence]].
- *Continuity.* $\varepsilon$-$\delta$ continuity at $a$
  ([[def-metric-continuity]]) says that every ball around $f(a)$ has a ball
  around $a$ mapped into it, which by the first bullet is continuity at $a$ in
  the sense of [[def-continuous-map-top]].

- *Subspaces.* For $A \subseteq X$ the subspace topology
  $\{\, U \cap A : U \in \mathcal{T}_d \,\}$ of [[def-subspace-topology-top]] is
  exactly the metric topology of the subspace metric $d_A$
  ([[def-isometry-and-metric-embedding]]), so the two uses of the phrase
  *subspace topology* in this library name one thing. Indeed
  $B_A(a,r) = B_X(a,r) \cap A$: a trace $U \cap A$ is $d_A$-open, since each of
  its points $a$ has $B_X(a,r) \subseteq U$ and hence $B_A(a,r) \subseteq U \cap A$;
  and a $d_A$-open $W$ is the trace of
  $U := \bigcup \{\, B_X(a,r) : a \in W,\ r > 0,\ B_X(a,r) \cap A \subseteq W \,\}$,
  which is $d_X$-open, satisfies $U \cap A = W$, and involves no choice principle,
  the union being taken over a set of pairs rather than over a selection.

Consequently the metric-space notions of interior, closure, boundary, density,
convergence, continuity and subspace agree with the topological notions here,
and statements about them transfer once a metric is named. For neighbourhoods
the transfer uses the explicit convention change above: a metric-page
neighbourhood is an open topological neighbourhood, while every topological
neighbourhood contains one.

**Metrizability is a topological property; the metric is not part of it.** If
$h : X \to Y$ is a homeomorphism ([[def-homeomorphism-and-open-maps]]) and $d$
metrises $X$, then $d'(y_1,y_2) := d(h^{-1}(y_1), h^{-1}(y_2))$ is a metric on
$Y$ — the three axioms transfer along the bijection $h^{-1}$ — and
$h[B_d(x,r)] = B_{d'}(h(x), r)$, so $h$ carries a basis of $\mathcal{T}_d$ to a
basis of $\mathcal{T}_{d'}$ and $\mathcal{T}_{d'} = h[\mathcal{T}_d] = \mathcal{T}_Y$.
Hence $Y$ is metrizable. The metric itself, however, is **not** determined by the
topology: two metrics on one set may induce the same topology without agreeing,
which is exactly topological equivalence ([[def-equivalent-metrics]]), and
properties of a metric that are not properties of its topology, boundedness among
them, are therefore not properties of a metrizable space.

**Two things every metrizable space has.** It is **Hausdorff**: distinct points
have disjoint open neighbourhoods, by [[thm-metric-hausdorff-separation]] applied
to any metric inducing the topology. And it is **first countable**
([[def-first-countable-top]]), by [[lem-metric-ball-neighbourhood-base]]. Either
failure is therefore an obstruction to metrizability, and this page uses the
first of them to exhibit a topology induced by no metric.

**Sequential limits in a metrizable space are unique, so the notation
$\lim_k x_k$ is available there.** In a metric space a sequence has at most one
limit ([[lem-metric-limits-unique]]), and by the agreement of convergence above
that uniqueness is a statement about the topology alone; so within a metrizable
space, and only there, this page writes $\lim_k x_k$ in the ordinary way. In a
general space the symbol is unavailable ([[def-sequence-convergence-top]]).

**The usual topology of $\mathbb{R}$.** The absolute value makes $\mathbb{R}$ a
metric space under $d_{\mathbb{R}}(x,y) = |x-y|$, its open balls are the bounded
open intervals, and the resulting metric topology is what claim 3 of
[[lem-real-line-is-a-metric-space]] names the **usual topology** of $\mathbb{R}$.
That is the topology meant by the phrase throughout these two pages, and
$\mathbb{R}$ carrying it is metrizable by definition. Every statement about it on
these two pages is proved from the metric $d_{\mathbb{R}}$ and the bridge above,
and no example re-derives any of it.

### `thm-t1-iff-singletons-are-closed` — theorem — A space is $T_1$ if and only if every singleton is closed, if and only if every finite subset is closed, if and only if its topology contains the cofinite topology

(statement provenance: literature-derived)

### Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$\mathcal{T}_{\mathrm{cof}}$ be the cofinite topology on the set $X$
([[def-standard-topologies]]). The following four conditions are equivalent.

- **(a)** $X$ is $T_1$ ([[def-t0-and-t1-spaces]]).
- **(b)** $\{x\}$ is closed for every $x \in X$.
- **(c)** $F$ is closed for every finite $F \subseteq X$ ([[def-countable]]).
- **(d)** $\mathcal{T}_{\mathrm{cof}} \subseteq \mathcal{T}$, that is, the
  topology of $X$ is finer than the cofinite topology on the same set.

Condition (d) says that the cofinite topology is the **coarsest** $T_1$ topology
on any set: it is $T_1$ by the equivalence, and every $T_1$ topology on that set
contains it.

### `def-continuous-map-top` — definition — Continuity of a map of topological spaces at a point and globally

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces
([[def-topological-space]]), let $f : X \to Y$ be a function and let $x \in X$.
Neighbourhoods are as in [[def-neighbourhood-top]].

$f$ is **continuous at $x$** if for every neighbourhood $V$ of $f(x)$ in $Y$ the
preimage $f^{-1}[V]$ is a neighbourhood of $x$ in $X$.

$f$ is **continuous** if it is continuous at every point of $X$.

**The same condition with open sets only.** $f$ is continuous at $x$ if and only
if for every open $V \subseteq Y$ with $f(x) \in V$ there is an open
$U \subseteq X$ with $x \in U$ and $f[U] \subseteq V$. Indeed, if $f$ is
continuous at $x$ and $V$ is such an open set, then $V$ is a neighbourhood of
$f(x)$, so $f^{-1}[V]$ is a neighbourhood of $x$ and contains an open $U \ni x$,
which satisfies $f[U] \subseteq V$. Conversely, given the displayed condition and
a neighbourhood $V$ of $f(x)$, fix open $V_0$ with $f(x) \in V_0 \subseteq V$ and
then open $U \ni x$ with $f[U] \subseteq V_0$; then $x \in U \subseteq f^{-1}[V_0] \subseteq f^{-1}[V]$,
so $f^{-1}[V]$ is a neighbourhood of $x$. Both forms are used below and are the
same statement written twice.

**Preimage, not image.** $f^{-1}[V] = \{\, x \in X : f(x) \in V \,\}$
is the preimage in the sense of [[def-injection-surjection-bijection]] and is
defined for every function, invertible or not; no inverse function is being
asserted to exist. Continuity is a condition on preimages throughout, and the
corresponding conditions on images define the *open* and *closed* maps of a later
item, which are different notions.

### `thm-continuity-characterisations-top` — theorem — For a map of spaces the following agree: continuity at every point, preimages of open sets open, preimages of closed sets closed, preimages of subbasic open sets open, and $f(\\overline{A}) \\subseteq \\overline{f(A)}$

(statement provenance: ai-altered)

### Statement

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces, let
$f : X \to Y$ be a function, and let $\mathcal{S}$ be a subbasis for
$\mathcal{T}_Y$ ([[def-topology-basis-subbasis]]). The following five conditions
are equivalent.

- **(a)** $f$ is continuous at every point of $X$ ([[def-continuous-map-top]]).
- **(b)** $f^{-1}[V]$ is open in $X$ for every open $V \subseteq Y$.
- **(c)** $f^{-1}[F]$ is closed in $X$ for every closed $F \subseteq Y$.
- **(d)** $f^{-1}[S]$ is open in $X$ for every $S \in \mathcal{S}$.
- **(e)** $f[\overline{A}] \subseteq \overline{f[A]}$ for every $A \subseteq X$,
  closures being taken in $X$ and in $Y$ respectively
  ([[def-interior-closure-boundary-top]]).

Condition (d) is what makes continuity checkable against a generating family
rather than against every open set, and it holds for a *basis* as well, a basis
being in particular a subbasis for the topology it generates.

### `def-interior-closure-boundary-top` — definition — Interior, closure, boundary, exterior, derived set and isolated point in a topological space

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), let
$A \subseteq X$ and let $x \in X$. Neighbourhoods are as in
[[def-neighbourhood-top]], so a neighbourhood need not be open.

- The **interior** of $A$ is
  $\operatorname{int}(A) := \bigcup \{\, U \in \mathcal{T} : U \subseteq A \,\}$.
- The **closure** of $A$ is
  $\overline{A} := \bigcap \{\, F \subseteq X : F \text{ closed and } A \subseteq F \,\}$.
- The **exterior** of $A$ is $\operatorname{ext}(A) := \operatorname{int}(X \setminus A)$.
- The **boundary** of $A$ is $\partial A := \overline{A} \setminus \operatorname{int}(A)$.
- $x$ is a **limit point** (accumulation point) of $A$ if every neighbourhood $N$
  of $x$ satisfies $N \cap (A \setminus \{x\}) \ne \varnothing$. The set of limit
  points of $A$ is the **derived set** $A'$.
- $x$ is an **isolated point of $A$** if $x \in A$ and some neighbourhood $N$ of
  $x$ satisfies $N \cap A = \{x\}$.

**Both operators are well posed, and the two names are justified rather than
asserted.** The interior is a union of open sets, hence open by (T2), it is
contained in $A$, and it contains every open $U \subseteq A$: so
$\operatorname{int}(A)$ is *the largest open subset of $A$*. The family being
intersected in the definition of $\overline{A}$ is nonempty, since $X$ is closed
and contains $A$, so the intersection is a set; it is closed by (C2) of
[[def-topological-space]], it contains $A$, and it is contained in every closed
$F \supseteq A$: so $\overline{A}$ is *the smallest closed superset of $A$*. In
particular

$$\operatorname{int}(A) \subseteq A \subseteq \overline{A},$$

and $A$ is open if and only if $A = \operatorname{int}(A)$, and closed if and
only if $A = \overline{A}$, in each case because one inclusion is automatic and
the other says exactly that $A$ belongs to the family in question.

**Interior and closure are exchanged by complementation.** For every
$A \subseteq X$,

$$X \setminus \operatorname{int}(A) = \overline{X \setminus A}, \qquad X \setminus \overline{A} = \operatorname{int}(X \setminus A) = \operatorname{ext}(A).$$

Indeed $U \mapsto X \setminus U$ is a bijection between the open subsets of $A$
and the closed supersets of $X \setminus A$, and it turns unions into
intersections ([[def-topological-space]]); applying complementation to the first
identity gives the second. So $\operatorname{ext}(A) = X \setminus \overline{A}$,
and every statement about interiors has a mirror statement about closures.

**The pointwise description of the interior.** $x \in \operatorname{int}(A)$ if
and only if $A$ is a neighbourhood of $x$. If $x \in \operatorname{int}(A)$ then
$\operatorname{int}(A)$ is an open set with $x \in \operatorname{int}(A) \subseteq A$;
conversely a neighbourhood relation $x \in U \subseteq A$ with $U$ open puts $x$
in the union defining $\operatorname{int}(A)$. The corresponding description of
the closure is proved as the next item, because it is the statement that does the
work in every later proof.

**$X$ is the disjoint union of the three regions.** Since
$\operatorname{int}(A) \subseteq \overline{A}$, the three sets
$\operatorname{int}(A)$, $\partial A = \overline{A} \setminus \operatorname{int}(A)$
and $\operatorname{ext}(A) = X \setminus \overline{A}$ are pairwise disjoint and
their union is $X$. This is recorded again, with the identities for interior and
closure of unions and intersections, in the lemma two items below.

### `thm-closure-characterisation-top` — theorem — A point lies in the closure of $A$ iff every basic neighbourhood of it meets $A$; the closure is the smallest closed superset and equals $A$ together with its derived set

(statement provenance: ai-altered)

### Statement

Let $(X, \mathcal{T})$ be a topological space, let $\mathcal{B}$ be a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]), let $A \subseteq X$ and let
$x \in X$. Closure, derived set and limit points are as in
[[def-interior-closure-boundary-top]]. Then:

1. The following four conditions are equivalent.
   - (a) $x \in \overline{A}$;
   - (b) $N \cap A \ne \varnothing$ for every neighbourhood $N$ of $x$
     ([[def-neighbourhood-top]]);
   - (c) $U \cap A \ne \varnothing$ for every open $U$ with $x \in U$;
   - (d) $B \cap A \ne \varnothing$ for every $B \in \mathcal{B}$ with $x \in B$.
2. $\overline{A}$ is closed, contains $A$, and is contained in every closed
   $F \subseteq X$ with $A \subseteq F$; so it is the smallest closed superset of
   $A$, and $A$ is closed if and only if $A = \overline{A}$.
3. $\overline{A} = A \cup A'$.

Claim 2 is recorded here for reference and is discharged in
[[def-interior-closure-boundary-top]], where it is what makes the definition of
$\overline{A}$ well posed; claims 1 and 3 are proved below. Claim 1 is the form in
which the closure is used everywhere afterwards, and clause (d) is what makes a
closure computable from a basis rather than from all open sets.

### `def-interval` — definition — Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length

(statement provenance: ai-altered)

### Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]).

A subset $I \subseteq \mathbb{R}$ is **order-convex** when

$$x, y \in I \text{ and } x \le z \le y \;\Longrightarrow\; z \in I .$$

The **intervals** of $\mathbb{R}$ are the sets of the following nine forms, where
$a, b \in \mathbb{R}$:

| | bounded forms | | one-sided and full forms |
|---|---|---|---|
| $(a,b)$ | $\{x : a < x < b\}$ | $(a,\infty)$ | $\{x : a < x\}$ |
| $[a,b]$ | $\{x : a \le x \le b\}$ | $[a,\infty)$ | $\{x : a \le x\}$ |
| $[a,b)$ | $\{x : a \le x < b\}$ | $(-\infty,b)$ | $\{x : x < b\}$ |
| $(a,b]$ | $\{x : a < x \le b\}$ | $(-\infty,b]$ | $\{x : x \le b\}$ |
| | | $(-\infty,\infty)$ | $\mathbb{R}$ |

An interval is **open** when both of its written endpoints are excluded, that is
for the forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$ and $(-\infty,\infty)$; it is
**closed** when both written endpoints are included, that is for $[a,b]$,
$[a,\infty)$, $(-\infty,b]$ and $(-\infty,\infty)$. The forms $[a,b)$ and
$(a,b]$ are **half-open**.

**The symbols $\pm\infty$ are notation and not elements of $\mathbb{R}$.** They
mark which side carries no endpoint condition at all; the five forms in the right
column are defined by the displayed conditions on $x$ alone, and no arithmetic is
ever performed with $\infty$. This is the same refusal to extend $\mathbb{R}$
silently that [[rem-sup-conventions]] records for suprema.

**Every one of the nine forms is order-convex.** Each is defined by a conjunction
of at most two conditions, each of the shape $a < x$, $a \le x$, $x < b$ or
$x \le b$, and each such condition is inherited by an intermediate point: if
$a < x$ and $x \le z$ then $a < z$, and if $z \le y$ and $y < b$ then $z < b$,
by transitivity of the order ([[def-ordered-field]]). Applying this to whichever
one or two conditions define the form in question gives $z \in I$ whenever
$x, y \in I$ and $x \le z \le y$.

**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly
when it is of one of the four forms in the left column: for those, $a$ is a lower
bound and $b$ an upper bound. The other five forms are unbounded, on the side or
sides written with $\infty$; the verification is in the remarks below.

**Nondegeneracy.** An interval is **degenerate** when it has at most one element,
and **nondegenerate** when it has at least two. For the four bounded forms with
endpoints $a$ and $b$:

- $[a,b]$ is nonempty exactly when $a \le b$, and it is nondegenerate exactly
  when $a < b$. It is the singleton $\{a\}$ when $a = b$.
- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each
  is nondegenerate.

The only assertion here that is not immediate from the defining conditions is
that $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because
$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to
both sides and halving ([[def-ordered-field]]); repeating the halving inside
$(a, (a+b)/2)$ produces a second point.

**Closed bounded intervals.** These are the sets $[a,b]$ with $a \le b$, which is
exactly the condition making them nonempty. They are the intervals the nested
interval property is stated for, and the phrase *closed bounded interval* always
carries the hypothesis $a \le b$ in this library.

**Length.** The **length** of a bounded interval presented by its endpoints
$a \le b$ is

$$\ell = b - a \;\ge\; 0 .$$

Length is attached to the presentation by endpoints and is not recovered from the
set: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is
$(c,c)$ for any other $c$, while each of these presentations has length $0$, so
nothing inconsistent arises; but the endpoints are named explicitly at every
point where a length is used in this library, and never inferred from the set.
Unbounded intervals are assigned no length.

### `def-topological-space` — definition — Topology on a set, open and closed sets, clopen sets, the closed-set axiomatisation, and the coarser/finer comparison

(statement provenance: ai-altered)

### Definition

Let $X$ be a set and write $\mathcal{P}(X)$ for its power set. A **topology** on
$X$ is a family $\mathcal{T} \subseteq \mathcal{P}(X)$ such that

- **(T1)** $\varnothing \in \mathcal{T}$ and $X \in \mathcal{T}$;
- **(T2)** $\bigcup \mathcal{S} \in \mathcal{T}$ for every $\mathcal{S} \subseteq \mathcal{T}$;
- **(T3)** $U \cap V \in \mathcal{T}$ for all $U, V \in \mathcal{T}$.

A **topological space** is a pair $(X, \mathcal{T})$ consisting of a set $X$ and
a topology $\mathcal{T}$ on it; the elements of $X$ are its **points**. When only
one topology is in play we write $X$ for the pair; when several are, the topology
is always named.

The members of $\mathcal{T}$ are the **open** sets of $(X,\mathcal{T})$. A subset
$F \subseteq X$ is **closed** when its complement $X \setminus F$ is open, and
**clopen** when it is both open and closed. By (T1) both $\varnothing$ and $X$
are clopen. *Open and closed are not opposites*: a set may be neither, and it may
be both, so "not open" is never a synonym for "closed".

**Finite intersections, and the empty one.** Axiom (T3) is stated for two sets
because that is all that is ever needed: if $n \ge 1$ and
$U_1, \dots, U_n \in \mathcal{T}$, then $U_1 \cap \dots \cap U_n \in \mathcal{T}$
follows by iterating (T3) $n-1$ times. The intersection of the **empty** family
of subsets of $X$ is $X$, since the condition "lies in every member of the empty
family" is vacuous; that case is covered by (T1) rather than by (T3), which is
one of the two reasons $X \in \mathcal{T}$ is demanded outright. The other is
that (T2) alone gives only $\bigcup \varnothing = \varnothing$.

**The closed sets, and the dual axiomatisation.** Put
$\mathcal{C} := \{\, X \setminus U : U \in \mathcal{T} \,\}$, the family of closed
sets. Then

- **(C1)** $\varnothing \in \mathcal{C}$ and $X \in \mathcal{C}$;
- **(C2)** $\bigcap \mathcal{D} \in \mathcal{C}$ for every **nonempty**
  $\mathcal{D} \subseteq \mathcal{C}$;
- **(C3)** $C \cup D \in \mathcal{C}$ for all $C, D \in \mathcal{C}$.

Conversely, if a family $\mathcal{C} \subseteq \mathcal{P}(X)$ satisfies (C1),
(C2) and (C3), then $\mathcal{T} := \{\, X \setminus C : C \in \mathcal{C} \,\}$
is a topology on $X$ whose closed sets are exactly the members of $\mathcal{C}$.
So a topology may be presented equally well by its open sets or by its closed
sets, and this library uses whichever is shorter.

*Both directions are one computation, and it is carried out here rather than
assumed.* The map $U \mapsto X \setminus U$ is an involution of
$\mathcal{P}(X)$, hence a bijection, and it carries the two De Morgan identities

$$X \setminus \bigcup_{i \in I} A_i = \bigcap_{i \in I} (X \setminus A_i) \quad (I \ne \varnothing), \qquad X \setminus \bigcap_{i \in I} A_i = \bigcup_{i \in I} (X \setminus A_i) \quad (I \ne \varnothing)$$

term by term into each other. Given (T1)–(T3): $\varnothing = X \setminus X$ and
$X = X \setminus \varnothing$ lie in $\mathcal{C}$, which is (C1); for nonempty
$\mathcal{D} \subseteq \mathcal{C}$ the family
$\mathcal{S} = \{\, X \setminus C : C \in \mathcal{D} \,\}$ lies in $\mathcal{T}$
and $\bigcap \mathcal{D} = X \setminus \bigcup \mathcal{S}$ is closed by (T2),
which is (C2); and $C \cup D = X \setminus ((X \setminus C) \cap (X \setminus D))$
is closed by (T3), which is (C3). Given (C1)–(C3) the same three lines run
backwards, the empty-union case $\bigcup \varnothing = \varnothing$ being supplied
by (C1) rather than by (C2); and $\{\, X \setminus C : C \in \mathcal{C} \,\}$ has
$\mathcal{C}$ as its family of complements because complementation is an
involution.

**Comparison of topologies.** If $\mathcal{T}_1$ and $\mathcal{T}_2$ are
topologies on the same set $X$ and $\mathcal{T}_1 \subseteq \mathcal{T}_2$, then
$\mathcal{T}_1$ is **coarser** than $\mathcal{T}_2$ and $\mathcal{T}_2$ is
**finer** than $\mathcal{T}_1$; the comparison is **strict** when the inclusion
is. Inclusion is a partial order on the set of topologies on $X$
([[def-partial-order]]), and it is not a total one: two topologies on the same
set may be incomparable.

## What to return

Read `ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
