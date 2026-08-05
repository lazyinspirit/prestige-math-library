# Adversarial proof reading — `thm-the-separation-implication-chain`

## The item under review, in full

`items/thm-the-separation-implication-chain.md`

```markdown
---
id: thm-the-separation-implication-chain
kind: theorem
title: "The implications proved on this page: perfectly normal gives completely normal under countable choice, and completely normal gives normal; normal with $T_1$ gives $T_3$; completely regular gives regular; regular with $T_1$ gives Urysohn, hence Hausdorff, hence $T_1$, hence $T_0$; and metrizable gives every one of them"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-t0-and-t1-spaces, def-hausdorff-space, def-urysohn-space,
       def-regular-and-t3-spaces, def-completely-regular-and-tychonoff-spaces,
       def-normal-and-t4-spaces, def-completely-normal-and-perfectly-normal-spaces,
       thm-t1-iff-singletons-are-closed, lem-urysohn-sits-between-hausdorff-and-regular-plus-t1,
       thm-completely-regular-implies-regular, thm-t4-implies-t3,
       thm-completely-normal-implies-normal, thm-perfectly-normal-implies-completely-normal,
       thm-metric-spaces-are-completely-normal, thm-metric-spaces-are-tychonoff-and-perfectly-normal,
       def-metrizable-space, def-countable-choice, def-topological-space]
justified_by: []
aliases: [thm-separation-chain]
landmark: true
short: "the separation implication chain"
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
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §31-33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "S. Willard, General Topology, §13-15"
      url: "https://en.wikipedia.org/wiki/General_topology"
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Tychonoff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff_space"
    - title: "Urysohn and completely Hausdorff spaces (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn_and_completely_Hausdorff_spaces"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]). The
following implications hold, and each is proved by an earlier item of this page.

1. **Perfectly normal implies completely normal**, assuming the Axiom of
   Countable Choice ([[def-countable-choice]]).
2. **Completely normal implies normal**, and **perfectly normal implies normal**.
3. **Normal together with $T_1$ implies $T_3$**, that is regular together with
   $T_1$.
4. **Completely regular implies regular**, and **Tychonoff implies $T_3$**.
5. **Regular together with $T_1$ implies Urysohn**, which implies **Hausdorff**,
   which implies **$T_1$**, which implies **$T_0$**.
6. **Metrizable implies every property named above**: a metrizable space is
   perfectly normal, completely normal, normal, Tychonoff, completely regular,
   $T_3$, regular, Urysohn, Hausdorff, $T_1$ and $T_0$, with no choice principle
   used.

Reading the numbered axioms in order, clauses 1 to 5 give

$$T_6 \Rightarrow T_5 \Rightarrow T_4 \Rightarrow T_3 \Rightarrow T_{2\frac12} \Rightarrow T_2 \Rightarrow T_1 \Rightarrow T_0 ,$$

the first arrow under $\mathrm{AC}_\omega$, together with
$T_{3\frac12} \Rightarrow T_3$.

**This is the whole of the classical chain that this page proves, and it is one
arrow short of the classical chain.** The implication $T_4 \Rightarrow
T_{3\frac12}$ — a normal $T_1$ space is completely regular — is Urysohn's lemma
and is not available at this point in the reading order. Its absence is recorded,
with what would license it, in this page's conventions remark; it is
deliberately **not** asserted here,
and no clause above may be read as giving it.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, and the definitions of $T_0$, $T_1$, Hausdorff, Urysohn, regular, completely regular, normal, completely normal and perfectly normal ([[def-t0-and-t1-spaces]], [[def-hausdorff-space]], [[def-urysohn-space]], [[def-regular-and-t3-spaces]], [[def-completely-regular-and-tychonoff-spaces]], [[def-normal-and-t4-spaces]], [[def-completely-normal-and-perfectly-normal-spaces]]).

[L1] Assuming $\mathrm{AC}_\omega$, every perfectly normal space is completely normal ([[thm-perfectly-normal-implies-completely-normal]], [[def-countable-choice]]).

[L2] Every completely normal space is normal, and every perfectly normal space is normal ([[thm-completely-normal-implies-normal]]).

[L3] A normal $T_1$ space is regular, hence $T_3$ ([[thm-t4-implies-t3]]).

[L4] Every completely regular space is regular, and every Tychonoff space is $T_3$ ([[thm-completely-regular-implies-regular]]).

[L5] Every regular $T_1$ space is Urysohn, every Urysohn space is Hausdorff, and every Hausdorff space is $T_1$ and hence $T_0$ ([[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]]).

[L6] Every $T_1$ space has closed singletons, and conversely ([[thm-t1-iff-singletons-are-closed]]).

[L7] Every metric space is completely normal, hence normal, with no choice principle used ([[thm-metric-spaces-are-completely-normal]]).

[L8] Every metrizable space is Tychonoff and perfectly normal, and hence satisfies every axiom named in clause 6 ([[thm-metric-spaces-are-tychonoff-and-perfectly-normal]], [[def-metrizable-space]]).

## Proof

**Proof technique:** direct.

1.1 Clause 1 is [L1], whose hypothesis $\mathrm{AC}_\omega$ is carried into clause 1 unchanged. [L1]

1.2 Clause 2 is [L2]. [L2]

1.3 Clause 3 is [L3]. [L3]

1.4 Clause 4 is [L4]. [L4]

1.5 Clause 5 is [L5], the first implication of which uses [L6] inside its own proof and needs nothing further here. [L5, L6]

1.6 Clause 6 is [L7] together with [L8]. [L7, L8]

2.1 The displayed chain of numbered axioms is read off from steps 1.1 to 1.5, each numbered axiom being the corresponding unnumbered property together with $T_1$, which is carried along every arrow: $T_6$ gives completely normal by step 1.1, hence $T_5$; $T_5$ gives normal by step 1.2, hence $T_4$; $T_4$ gives $T_3$ by step 1.3; and $T_3$ gives Urysohn, Hausdorff, $T_1$ and $T_0$ by step 1.5. [step 1.1, step 1.2, step 1.3, step 1.5]

2.2 The side arrow $T_{3\frac12} \Rightarrow T_3$ is the second half of step 1.4. [step 1.4]

3.1 Steps 1.1 to 1.6, 2.1 and 2.2 are exactly clauses 1 to 6 and the two displayed chains, and no other implication is asserted. [step 1.6, step 2.1, step 2.2] ∎

## Remarks

- **Every clause above is an implication and none is an equivalence.** This page refutes four of the possible converses among its false statements — $T_1$ does not give Hausdorff, normal does not give Hausdorff, Hausdorff does not give regular, and unique sequential limits do not give Hausdorff — and asserts nothing about the others.

- **The $T_1$ hypothesis is where the numerals differ from the adjectives.** *Regular*, *completely regular*, *normal*, *completely normal* and *perfectly normal* carry no $T_1$ in this library; $T_3$, $T_{3\frac12}$, $T_4$, $T_5$ and $T_6$ are the conjunctions with $T_1$. Clauses 3 and 5 are the two places the conjunction is genuinely needed for the next arrow, and they are what makes the numbered chain descend at all.

- **The countable choice in clause 1 is inherited, not introduced.** It is spent in the proof of [[thm-perfectly-normal-implies-completely-normal]] and nowhere else on this page; clause 6 in particular is choice free, since the metric proofs construct their open sets explicitly.
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

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

### `lem-urysohn-sits-between-hausdorff-and-regular-plus-t1` — lemma — Every Urysohn space is Hausdorff, every Hausdorff space is $T_1$ and hence $T_0$, and every regular $T_1$ space is Urysohn

(statement provenance: ai-altered)

### Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]). Then:

1. If $X$ is Urysohn ([[def-urysohn-space]]) then $X$ is Hausdorff
   ([[def-hausdorff-space]]).
2. If $X$ is Hausdorff then $X$ is $T_1$, and hence $T_0$
   ([[def-t0-and-t1-spaces]]).
3. If $X$ is regular ([[def-regular-and-t3-spaces]]) and $T_1$ — that is, if $X$
   is $T_3$ — then $X$ is Urysohn.

Consequently $T_3$ implies $T_{2\frac12}$, which implies $T_2$, which implies
$T_1$, which implies $T_0$. Nothing here asserts that any of the four
implications reverses; two of the failures are recorded among this page's false
statements.

### `thm-completely-regular-implies-regular` — theorem — Every completely regular space is regular, and every Tychonoff space is $T_3$

(statement provenance: literature-derived)

### Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]). If $X$
is completely regular ([[def-completely-regular-and-tychonoff-spaces]]) then $X$
is regular ([[def-regular-and-t3-spaces]]). Consequently every Tychonoff space is
$T_3$, being completely regular and $T_1$ ([[def-t0-and-t1-spaces]]).

This page does not prove the converse and does not assert it: a regular space
that is not completely regular would need a construction this page does not
carry, so whether the implication reverses is left open here.

### `thm-t4-implies-t3` — theorem — A normal $T_1$ space is regular, hence $T_3$, hence Urysohn, Hausdorff, $T_1$ and $T_0$

(statement provenance: ai-altered)

### Statement

Let $(X, \mathcal{T})$ be a $T_4$ space, that is a normal $T_1$ space
([[def-normal-and-t4-spaces]], [[def-t0-and-t1-spaces]]). Then $X$ is regular
([[def-regular-and-t3-spaces]]), hence $T_3$, and therefore also Urysohn
([[def-urysohn-space]]), Hausdorff ([[def-hausdorff-space]]), $T_1$ and $T_0$.

**The $T_1$ hypothesis is not decoration.** Normality alone implies none of the
conclusions: the indiscrete topology on a two-point set is normal and not even
$T_0$, which is recorded among this page's false statements.

### `thm-completely-normal-implies-normal` — theorem — Every completely normal space is normal, and every perfectly normal space is normal

(statement provenance: literature-derived)

### Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

1. If $X$ is completely normal
   ([[def-completely-normal-and-perfectly-normal-spaces]]) then $X$ is normal
   ([[def-normal-and-t4-spaces]]).
2. If $X$ is perfectly normal then $X$ is normal.
3. Consequently $T_5$ implies $T_4$ and $T_6$ implies $T_4$.

Claim 2 is immediate from the definition, normality being one of the two
conjuncts of perfect normality; it is recorded here so that the chain assembled
at the end of this page has a single item to cite for both implications. Claim 1
is the one with content, and its content is that disjoint *closed* sets are a
special case of separated sets.

### `thm-perfectly-normal-implies-completely-normal` — theorem — Assuming countable choice, every perfectly normal space is completely normal: separated sets in a normal space whose open sets are all $F_\\sigma$ can be separated by disjoint open sets

(statement provenance: ai-altered)

### Statement

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). Let
$(X, \mathcal{T})$ be a perfectly normal space
([[def-completely-normal-and-perfectly-normal-spaces]]): $X$ is normal
([[def-normal-and-t4-spaces]]) and every closed subset of $X$ is a $G_\delta$,
equivalently every open subset of $X$ is an $F_\sigma$
([[def-g-delta-and-f-sigma-in-a-topological-space]]). Then $X$ is **completely
normal**: any two separated sets $A, B \subseteq X$ ([[def-separated-sets]])
admit disjoint open $U \supseteq A$ and $V \supseteq B$.

Consequently $T_6$ implies $T_5$.

**No continuous function is constructed anywhere in the proof**, and in
particular Urysohn's lemma is not used. All that is consumed is normality,
applied once to each member of a countable family of closed sets, and the
$F_\sigma$ presentation of two open sets.

**Where the choice principle is spent, and why it is not removable as written.**
Step 4.1 selects, for each $n \in \mathbb{N}$ at once, one open set $U_n$ out of
the nonempty family that normality provides for the closed set $F_n$, and
likewise one $V_n$; normality is an existence statement and supplies no rule for
singling out a member, so extracting the two sequences is an application of
$\mathrm{AC}_\omega$ and of nothing stronger. The hypothesis is stated in the
theorem rather than hidden in the proof, as this library does everywhere.

### `thm-metric-spaces-are-completely-normal` — theorem — In a metric space any two separated sets have disjoint open neighbourhoods, so every metrizable space is completely normal

(statement provenance: literature-derived)

### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) with its metric topology
([[def-metric-topology]]), and let $A, B \subseteq X$ be separated
([[def-separated-sets]]). Then there are disjoint open sets $U \supseteq A$ and
$V \supseteq B$.

Consequently every metrizable space ([[def-metrizable-space]]) is **completely
normal**, and hence normal
([[def-completely-normal-and-perfectly-normal-spaces]],
[[def-normal-and-t4-spaces]]).

**No choice principle is used.** The two open sets are unions indexed by the
points of $A$ and of $B$, and the radius attached to a point is the number
$d(a,B)/2$, which is determined by $a$, by $B$ and by $d$; nothing is selected.

### `thm-metric-spaces-are-tychonoff-and-perfectly-normal` — theorem — In a metric space every closed set is a zero set and a $G_\\delta$, and the distance function separates a point from a closed set, so every metrizable space is Tychonoff and perfectly normal

(statement provenance: ai-altered)

### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) with its metric topology
([[def-metric-topology]]), and write $1/(n+1)$ for the inverse of the canonical
natural $\iota(n+1)$ of $\mathbb{R}$ ([[def-canonical-natural]]). Then:

1. **Every closed set is a zero set.** For closed $C \subseteq X$ there is a
   continuous $f : X \to \mathbb{R}$ with $C = Z(f)$
   ([[def-zero-sets-and-cozero-sets]]); for $C \ne \varnothing$ one may take
   $f(x) = d(x,C)$ ([[def-metric-bounded-diameter]]), and for $C = \varnothing$
   the constant function $1$.
2. **Every closed set is a $G_\delta$**
   ([[def-g-delta-and-f-sigma-in-a-topological-space]]): for $C \ne \varnothing$,
   $$C \;=\; \bigcap_{n \in \mathbb{N}} \{\, x \in X : d(x,C) < 1/(n+1) \,\},$$
   an intersection of open sets, and $\varnothing$ is open hence a $G_\delta$.
3. **$X$ is completely regular** ([[def-completely-regular-and-tychonoff-spaces]]):
   for closed $C$ and $x_0 \notin C$ the function
   $f(x) := \min\{1,\ d(x,C)/r\}$ with $r := d(x_0,C)$ is continuous, takes the
   value $1$ at $x_0$ and the value $0$ on $C$, when $C \ne \varnothing$; for
   $C = \varnothing$ the constant function $1$ serves.
4. Consequently every metrizable space ([[def-metrizable-space]]) is **Tychonoff**
   and **perfectly normal**, and hence $T_6$, $T_5$, $T_4$, $T_{3\frac12}$,
   $T_3$, $T_{2\frac12}$, $T_2$, $T_1$ and $T_0$.

**No choice principle is used anywhere below.**

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

### `def-countable-choice` — definition — The Axiom of Countable Choice ($\\mathrm{AC}_\\omega$)

(statement provenance: ai-altered)

### Definition

The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following
statement.

> For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by
> $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that
> $f(n) \in X_n$ for every $n \in \mathbb{N}$.

Equivalently, in the vocabulary of [[def-choice-function]]: every at most
countable family of nonempty sets ([[def-countable]]) has a choice function.

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

Read `thm-the-separation-implication-chain` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
