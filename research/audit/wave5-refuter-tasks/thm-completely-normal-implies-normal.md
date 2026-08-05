# Adversarial proof reading — `thm-completely-normal-implies-normal`

## The item under review, in full

`items/thm-completely-normal-implies-normal.md`

```markdown
---
id: thm-completely-normal-implies-normal
kind: theorem
title: "Every completely normal space is normal, and every perfectly normal space is normal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-completely-normal-and-perfectly-normal-spaces, def-normal-and-t4-spaces,
       def-separated-sets, def-interior-closure-boundary-top,
       thm-closure-characterisation-top, def-topological-space]
justified_by: []
aliases: []
landmark: false
short: "completely normal implies normal"
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
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Separated sets (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separated_sets"
    - title: "S. Willard, General Topology, §15"
      url: "https://en.wikipedia.org/wiki/General_topology"
pipeline_run: null
---

## Statement

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

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ and closed sets $A, B \subseteq X$ with $A \cap B = \varnothing$.

[A1] $X$ completely normal: every pair of separated sets admits disjoint open supersets ([[def-completely-normal-and-perfectly-normal-spaces]]).

[A2] $X$ perfectly normal: $X$ is normal and every closed subset of $X$ is a $G_\delta$ ([[def-completely-normal-and-perfectly-normal-spaces]]).

[L1] $A$ and $B$ are separated when $\overline{A} \cap B = A \cap \overline{B} = \varnothing$ ([[def-separated-sets]]).

[L2] A set is closed exactly when it equals its own closure ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]]).

[L3] Normality is the assertion that disjoint closed sets admit disjoint open supersets ([[def-normal-and-t4-spaces]]).

## Proof

**Proof technique:** direct.

1.1 $\overline{A} = A$ and $\overline{B} = B$, both sets being closed. [L2]

1.2 If $X$ is perfectly normal then $X$ is normal, this being the first conjunct of [A2], which is claim 2. [A2, L3]

2.1 $\overline{A} \cap B = A \cap B = \varnothing$ and $A \cap \overline{B} = A \cap B = \varnothing$, so $A$ and $B$ are separated. [step 1.1, L1]

3.1 If $X$ is completely normal, [A1] applied to the separated pair of step 2.1 gives disjoint open $U \supseteq A$ and $V \supseteq B$; since $A$ and $B$ were arbitrary disjoint closed sets, $X$ is normal, which is claim 1. [step 2.1, A1, L3]

4.1 Adding the hypothesis $T_1$ to either of steps 3.1 and 1.2 turns $T_5$, respectively $T_6$, into $T_4$, which is claim 3. [step 3.1, step 1.2] ∎

## Remarks

- **Neither converse is proved here and neither is asserted.** Whether a normal space must be completely normal, and whether a normal space must be perfectly normal, are left open on this page: any witness would need machinery this page does not have, and no false statement asserting a reversal is planted here.

- **Where the strength of complete normality actually shows.** It is not in the closed case above but in pairs like $(0,1)$ and $(1,2)$ in $\mathbb{R}$, which are separated and not closed. The metric theorem later on this page separates every such pair at once, which is why every metrizable space is completely normal and not merely normal.
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

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

Read `thm-completely-normal-implies-normal` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
