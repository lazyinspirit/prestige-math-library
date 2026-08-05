# Adversarial proof reading — `ex-the-cocountable-topology-in-the-separation-hierarchy`

## The item under review, in full

`items/ex-the-cocountable-topology-in-the-separation-hierarchy.md`

```markdown
---
id: ex-the-cocountable-topology-in-the-separation-hierarchy
kind: example
title: "The cocountable topology on $\\mathbb{R}$ is $T_1$, has unique sequential limits, and is neither Hausdorff nor regular nor normal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-standard-topologies, def-t0-and-t1-spaces, thm-t1-iff-singletons-are-closed,
       def-hausdorff-space, def-regular-and-t3-spaces, def-normal-and-t4-spaces,
       def-sequence-convergence-top, def-countable, lem-subset-of-countable,
       lem-countable-iff-surjection-from-n, thm-r-uncountable,
       thm-countable-union-of-countable, def-interior-closure-boundary-top,
       def-topological-space, fs-unique-sequential-limits-imply-hausdorff]
justified_by: []
aliases: []
landmark: false
short: "cocountable topology in the hierarchy"
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
    - title: "Cocountable topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cocountable_topology"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "L. Steen and J. Seebach, Counterexamples in Topology, §20"
      url: "https://en.wikipedia.org/wiki/Counterexamples_in_Topology"
pipeline_run: null
---

## Example

Give $\mathbb{R}$ the cocountable topology
$\mathcal{T}_{\mathrm{coc}} = \{\varnothing\} \cup \{\, U \subseteq \mathbb{R} : \mathbb{R} \setminus U \text{ is at most countable} \,\}$
([[def-standard-topologies]]), whose closed sets are $\mathbb{R}$ together with
the at most countable subsets of $\mathbb{R}$ ([[def-countable]]). Then:

1. $(\mathbb{R}, \mathcal{T}_{\mathrm{coc}})$ is **$T_1$**
   ([[def-t0-and-t1-spaces]]).
2. **Every convergent sequence is eventually constant**, so every sequence has at
   most one limit ([[def-sequence-convergence-top]]).
3. No two nonempty open sets are disjoint. Consequently the space is **not
   Hausdorff** ([[def-hausdorff-space]]), **not regular**
   ([[def-regular-and-t3-spaces]]) and **not normal**
   ([[def-normal-and-t4-spaces]]).

Clauses 1, 2 and the Hausdorff half of clause 3 are what refute the claim that
unique sequential limits force the Hausdorff condition
([[fs-unique-sequential-limits-imply-hausdorff]]); clause 3's other two halves
place the space in the hierarchy exactly where the cofinite topology sits, at
$T_1$ and no higher.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with the cocountable topology $\mathcal{T}_{\mathrm{coc}}$, a sequence $(x_k)_{k \in \mathbb{N}}$ in $\mathbb{R}$, and points $p, q, u, v, w \in \mathbb{R}$.

[A1] $U \in \mathcal{T}_{\mathrm{coc}}$ exactly when $U = \varnothing$ or $\mathbb{R} \setminus U$ is at most countable; the closed sets are $\mathbb{R}$ and the at most countable subsets ([[def-standard-topologies]], [[def-topological-space]], [[def-interior-closure-boundary-top]]).

[A2] $x_k \to p$ means: for every neighbourhood $N$ of $p$ there is $K \in \mathbb{N}$ with $x_k \in N$ for all $k \ge K$; an open set containing $p$ is such a neighbourhood ([[def-sequence-convergence-top]]).

[L1] A topology is $T_1$ exactly when it contains the cofinite topology on the same set; a finite set is at most countable ([[thm-t1-iff-singletons-are-closed]], clause (d), [[def-t0-and-t1-spaces]], [[def-countable]]).

[L2] The range of a sequence is nonempty and at most countable, and a subset of an at most countable set is at most countable ([[lem-countable-iff-surjection-from-n]], [[lem-subset-of-countable]]).

[L3] A union of two at most countable sets is at most countable: this is the two-set instance of [[thm-countable-union-of-countable]] padded with copies of $\varnothing$, and it needs no choice principle, as [[def-standard-topologies]] records.

[L4] $\mathbb{R}$ is uncountable ([[thm-r-uncountable]]), so in particular it has at least three distinct points.

[L5] Hausdorff, regular and normal are as in [[def-hausdorff-space]], [[def-regular-and-t3-spaces]] and [[def-normal-and-t4-spaces]].

## Verification

**Proof technique:** direct.

1.1 The cofinite topology on $\mathbb{R}$ is contained in $\mathcal{T}_{\mathrm{coc}}$, a finite complement being at most countable, so the space is $T_1$, which is claim 1. [A1, L1]

1.2 Fix three distinct points $u, v, w$ of $\mathbb{R}$, for instance $0$, $1$ and $2$. [L4]

1.3 Suppose $x_k \to p$ and put $R := \{\, x_k : k \in \mathbb{N} \,\} \setminus \{p\}$, at most countable by [L2]; then $\mathbb{R} \setminus R$ is open by [A1] and contains $p$, so [A2] gives $K$ with $x_k \notin R$ for all $k \ge K$. [A1, A2, L2, assume-hyp]

1.4 Let $U, V$ be nonempty open sets and suppose $U \cap V = \varnothing$; then $\mathbb{R} = (\mathbb{R} \setminus U) \cup (\mathbb{R} \setminus V)$ is at most countable by [A1] and [L3], contradicting [L4]. So no two nonempty open sets are disjoint. [A1, L3, L4, assume-hyp]

2.1 Under step 1.3: for $k \ge K$ the point $x_k$ lies in the range of the sequence and outside $R$, hence equals $p$; so the sequence is eventually constant with value $p$. [step 1.3]

2.2 Any open $U \ni u$ and open $V \ni v$ are nonempty, hence meet by step 1.4, so the space is not Hausdorff. [step 1.2, step 1.4, L5]

2.3 $\{v\}$ is at most countable, hence closed by [A1], and $u \notin \{v\}$; any open $U \ni u$ and open $V \supseteq \{v\}$ are nonempty, hence meet by step 1.4, so the space is not regular. [step 1.2, step 1.4, A1, L5]

2.4 $\{v\}$ and $\{w\}$ are disjoint nonempty closed sets by [A1] and step 1.2; any open sets containing them are nonempty, hence meet by step 1.4, so the space is not normal. [step 1.2, step 1.4, A1, L5]

3.1 Under step 1.3: if also $x_k \to q$ with $q \ne p$, then $\mathbb{R} \setminus \{p\}$ is open by [A1] and contains $q$, so [A2] gives $K'$ with $x_k \ne p$ for all $k \ge K'$, contradicting step 2.1 at any index at least both $K$ and $K'$. So a sequence has at most one limit, which with step 2.1 is claim 2. [step 2.1, A1, A2]

4.1 Steps 2.2, 2.3 and 2.4 complete claim 3, step 3.1 is claim 2 and step 1.1 is claim 1. [step 1.1, step 3.1, step 2.2, step 2.3, step 2.4] ∎

## Remarks

- **Sequences cannot see this topology.** A sequence reaches at most countably many points, and every at most countable set is closed, so the complement of the values other than the limit is an open set that forces the sequence to be eventually constant. Uniqueness of limits is therefore free, and it carries no separation information at all — which is the point of [[fs-unique-sequential-limits-imply-hausdorff]].

- **The failure of $T_2$, $T_3$ and $T_4$ has the same one-line cause as in the cofinite case**: two at most countable sets cannot cover an uncountable one, so two nonempty open sets always meet. What changes between the two examples is only how large a set has to be for the topology to be interesting: infinite for cofinite, uncountable for cocountable.

- **On an at most countable set the cocountable topology is discrete** ([[def-standard-topologies]]), so the uncountability of $\mathbb{R}$ is doing real work here and not merely supplying a familiar underlying set.
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

### `def-sequence-convergence-top` — definition — Convergence and cluster points of a sequence in a topological space, sequential continuity, and the sequential closure

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
neighbourhoods as in [[def-neighbourhood-top]].

A **sequence in $X$** is a function $x : \mathbb{N} \to X$, written $(x_k)$ with
$x_k := x(k)$. As everywhere in this library $\mathbb{N}$ contains $0$
([[def-natural-numbers]]) and a sequence is indexed from $0$
([[def-sequence]]); an index range copied from a text that starts at $1$ must be
shifted before it is used here. The **range** of $(x_k)$ is
$\{\, x_k : k \in \mathbb{N} \,\}$. Following [[def-sequence]], a property of
indices holds **eventually** if it holds for all $k \ge K$ for some
$K \in \mathbb{N}$, and **frequently** if for every $K$ it holds for some
$k \ge K$; that vocabulary is used here for sequences in an arbitrary set.

Let $(x_k)$ be a sequence in $X$ and let $p \in X$.

- $(x_k)$ **converges to $p$**, written $x_k \to p$, if for every neighbourhood
  $N$ of $p$ one has $x_k \in N$ eventually. The point $p$ is then called **a
  limit of $(x_k)$**.
- $p$ is a **cluster point** of $(x_k)$ if for every neighbourhood $N$ of $p$ one
  has $x_k \in N$ frequently.
- For $A \subseteq X$, the **sequential closure** of $A$ is
  $$\operatorname{seqcl}(A) := \{\, p \in X : x_k \to p \text{ for some sequence } (x_k) \text{ with } x_k \in A \text{ for all } k \,\} .$$
- A function $f : X \to Y$ into a topological space $Y$ is **sequentially
  continuous at $p$** if $x_k \to p$ in $X$ implies $f(x_k) \to f(p)$ in $Y$, and
  **sequentially continuous** if it is sequentially continuous at every point of
  $X$ ([[def-continuous-map-top]] for the ordinary notion).

**The notation $\lim_k x_k$ is not available at this generality, and the reason
is not fastidiousness.** In a general topological space a sequence may converge
to more than one point, so there is no function taking a convergent sequence to
"its" limit, and a symbol $\lim_k x_k$ would not denote. In the indiscrete
topology on a set with at least two points the only neighbourhood of any point is
$X$, so **every** sequence converges to **every** point; in the cofinite topology
on an infinite set every injective sequence converges to every point. Both
witnesses are on the companion page. Accordingly this library writes "$p$ is *a*
limit of $(x_k)$" and "$(x_k)$ converges to $p$", never "*the* limit" and never
$\lim_k x_k$, for a sequence in a space that has not been given a hypothesis
restoring uniqueness.

**Where the notation becomes legitimate again.** Uniqueness of limits is what
licenses the symbol, exactly as it does for sequences of reals
([[lem-limit-unique]]) and in a metric space ([[lem-metric-limits-unique]]): in a
metric space a sequence has at most one limit and $\lim_k x_k$ is unambiguous.
Every metrizable space therefore admits the notation, and so does every space in
which distinct points have disjoint neighbourhoods; where this page uses a
metrizable space, and only there, the usual notation is used without further
comment. The general reading of "$x_k \to p$" above never presupposes it.

**Convergence agrees with the metric notion on a metric topology.** For a metric
space the balls around $p$ are a neighbourhood base at $p$
([[lem-metric-ball-neighbourhood-base]]), so "eventually in every neighbourhood
of $p$" and "eventually in every ball around $p$" are the same condition, and the
latter is [[def-metric-convergence]]. The identification is carried out where
metrizable spaces are defined, later on this page.

### `def-countable` — definition — Finite, countably infinite, countable, uncountable

(statement provenance: ai-altered)

### Definition

Recall that a natural number is a von Neumann natural
([[def-natural-numbers]]): $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$, so
that

$$n = \{\, m \in \mathbb{N} : m < n \,\} = \{0, 1, \dots, n-1\}$$

is itself the set of its predecessors. Here $<$ is the order of
[[def-nat-order]], which is defined additively, so the displayed identity is a
theorem and not a convention: it is [[lem-nat-order-is-membership]], proved
immediately above. Let $A$ be a set, and let $\approx$ be equinumerosity
([[def-equinumerous]]).

- $A$ is **finite** if $A \approx n$ for some $n \in \mathbb{N}$.
- $A$ is **countably infinite** if $A \approx \mathbb{N}$.
- $A$ is **at most countable** if it is finite or countably infinite.
- $A$ is **uncountable** if it is not at most countable.

### `lem-subset-of-countable` — lemma — Every subset of an at most countable set is at most countable

(statement provenance: ai-altered)

### Statement

Let $A$ be at most countable ([[def-countable]]) and let $B \subseteq A$. Then
$B$ is at most countable.

The proof establishes the sharper statement about subsets of $\mathbb{N}$ from
which this follows: **a subset $S \subseteq \mathbb{N}$ is finite if it is
bounded above, and countably infinite if it is not.**

**No choice principle is used.** This is the point of the lemma rather than a
footnote to it. The enumeration of an unbounded $S \subseteq \mathbb{N}$ is built
by always taking the *least* element of $S$ above the previous one, and the least
element of a nonempty set of naturals is canonical
([[thm-well-ordering-principle]]): it is determined by $S$, not selected from it.
Replacing "least" by "some" would turn the construction into an appeal to
dependent choice.

### `lem-countable-iff-surjection-from-n` — lemma — A nonempty set is at most countable iff it is a surjective image of $\\mathbb{N}$

(statement provenance: ai-altered)

### Statement

Let $A$ be a nonempty set. Then $A$ is at most countable ([[def-countable]]) if
and only if there is a surjection $s : \mathbb{N} \to A$
([[def-injection-surjection-bijection]]).

Moreover, from any such surjection an injection $A \to \mathbb{N}$ is obtained
explicitly, without any choice, by

$$j(a) := \min\{\, k \in \mathbb{N} : s(k) = a \,\}.$$

This is the working form of countability used everywhere below: to prove a
nonempty set countable it suffices to list its elements, repetitions and all.

**No choice principle is used.** The backward direction is where an appeal to
choice would be natural ("for each $a$ pick some $k$ with $s(k) = a$") and it is
avoided outright, because $\min$ is canonical: every nonempty set of naturals has
a *least* element ([[thm-well-ordering-principle]]), so $j(a)$ is determined by
$a$ and $s$ alone.

### `thm-r-uncountable` — theorem — $\\mathbb{R}$ is uncountable (Cantor's nested intervals, 1874)

(statement provenance: ai-altered)

### Statement

Let $\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]).
Then $\mathbb{R}$ is **uncountable** ([[def-countable]]): there is no surjection
$\mathbb{N} \to \mathbb{R}$, so $\mathbb{R}$ is neither finite nor countably
infinite.

The proof is Cantor's original argument of 1874, not the decimal diagonal.
Assuming a surjection $f : \mathbb{N} \to \mathbb{R}$, one builds nested closed
intervals $[a_n, b_n]$ with $a_n < b_n$ and $f(n) \notin [a_{n+1}, b_{n+1}]$, and
then $\sup\{a_n\}$ is a real number that $f$ misses. **The decimal diagonal is
deliberately avoided**: decimal expansions are infinite series, which this
library has not yet constructed, so a diagonal proof here would rest on machinery
that does not exist. The diagonal argument survives in its non-circular form, on
power sets, as Cantor's theorem earlier on this page; see the remarks below.

**The construction uses no choice, and that is what the thirds are for.** Given
$[a_n, b_n]$ of length $d$, its three closed thirds
$[a_n, a_n + d/3]$, $[a_n + d/3, a_n + 2d/3]$, $[a_n + 2d/3, b_n]$ cannot all
contain $f(n)$, because the first and the third are disjoint; the rule takes the
**first one in that fixed order** which does not contain $f(n)$. That is a
definition by cases, so the whole construction is a single application of the
recursion theorem ([[thm-recursion]]) to one explicitly given function. A version
of the argument that says "pick a third avoiding $f(n)$" would be using dependent
choice, silently and unnecessarily.

### `thm-countable-union-of-countable` — theorem — Countable unions of at most countable sets, assuming $\\mathrm{AC}_\\omega$

(statement provenance: ai-altered)

### Statement

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). Let
$(A_n)_{n \in \mathbb{N}}$ be a family of at most countable sets
([[def-countable]]) indexed by $\mathbb{N}$. Then

$$U = \bigcup_{n \in \mathbb{N}} A_n$$

is at most countable.

**The hypothesis $\mathrm{AC}_\omega$ is not decoration and it is not removable.**
It is spent at exactly one step, step 3.1 below, where one surjection
$\mathbb{N} \to A_n$ is selected for every $n$ at once. Each $A_n$ has such
surjections, in general many of them, and the countability assumption provides no
rule for singling one out. Without some choice principle the theorem is not
available at all: ZF alone does not prove it, **conditionally on the consistency
of ZF**, as recorded among this page's false statements and discussed in the
remarks below, where that item is named and linked. The
consistency hypothesis is not a formality and cannot be dropped: the separation
rests on an external independence result that this library quotes rather than
proves, and it cannot be stated without it.

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

### `fs-unique-sequential-limits-imply-hausdorff` — false-statement — FALSE: a space in which every sequence has at most one limit is Hausdorff

(statement provenance: ai-altered)

### Statement

**False claim:** if every sequence in a topological space has at most one limit
([[def-sequence-convergence-top]]), then the space is Hausdorff
([[def-hausdorff-space]]).

The refutation is the **cocountable topology** $\mathcal{T}_{\mathrm{coc}}$ on
$\mathbb{R}$ ([[def-standard-topologies]]), whose open sets are $\varnothing$
together with the complements of the at most countable subsets of $\mathbb{R}$.
In it every convergent sequence is eventually constant, so limits are unique; and
no two nonempty open sets are disjoint, so the space is not Hausdorff. It is
nevertheless $T_1$.

**This is why [[def-sequence-convergence-top]] refuses the notation
$\lim_k x_k$ in a general space and restores it only under a hypothesis.**
Uniqueness of sequential limits is strictly weaker than the Hausdorff condition,
so it is uniqueness, and not the Hausdorff condition, that is the exact
licensing condition for the symbol — and the two are not interchangeable.

## What to return

Read `ex-the-cocountable-topology-in-the-separation-hierarchy` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
