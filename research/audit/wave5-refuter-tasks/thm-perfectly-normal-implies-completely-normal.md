# Adversarial proof reading — `thm-perfectly-normal-implies-completely-normal`

## The item under review, in full

`items/thm-perfectly-normal-implies-completely-normal.md`

```markdown
---
id: thm-perfectly-normal-implies-completely-normal
kind: theorem
title: "Assuming countable choice, every perfectly normal space is completely normal: separated sets in a normal space whose open sets are all $F_\\sigma$ can be separated by disjoint open sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completely-normal-and-perfectly-normal-spaces, def-normal-and-t4-spaces,
       def-separated-sets, def-g-delta-and-f-sigma-in-a-topological-space,
       lem-normality-via-shrinking, def-interior-closure-boundary-top,
       thm-closure-characterisation-top, def-topological-space, def-countable,
       def-countable-choice, lem-nat-trichotomy]
justified_by: []
aliases: []
landmark: true
short: "perfectly normal implies completely normal"
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
    - title: "R. Engelking, General Topology, §1.5"
      url: "https://en.wikipedia.org/wiki/General_topology"
    - title: "Gδ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G%CE%B4_set"
pipeline_run: null
---

## Statement

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

## Facts & Assumptions

**Given:** A perfectly normal space $(X,\mathcal{T})$ and separated sets $A, B \subseteq X$, so that $\overline{A} \cap B = A \cap \overline{B} = \varnothing$.

[A1] $A$ and $B$ are separated: $\overline{A} \cap B = \varnothing$ and $A \cap \overline{B} = \varnothing$ ([[def-separated-sets]]).

[A2] Every open subset of $X$ is an $F_\sigma$: it is $\bigcup_{n \in \mathbb{N}} C_n$ for some sequence of closed sets $C_n$ ([[def-completely-normal-and-perfectly-normal-spaces]], [[def-g-delta-and-f-sigma-in-a-topological-space]], [[def-countable]]).

[A3] $\mathrm{AC}_\omega$: for a family of nonempty sets indexed by $\mathbb{N}$ there is a function choosing a member of each ([[def-countable-choice]]).

[L1] In a normal space, disjoint closed sets $F$ and $D$ admit an open $W \supseteq F$ with $\overline{W} \cap D = \varnothing$ ([[lem-normality-via-shrinking]], final assertion, [[def-normal-and-t4-spaces]]).

[L2] $\overline{S}$ is closed and contains $S$; a set is closed exactly when it equals its closure; a set is closed exactly when its complement is open ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]], [[def-topological-space]]).

[L3] A union of finitely many closed sets is closed by iterating (C3), an arbitrary union of open sets is open by (T2), and an intersection of two open sets is open by (T3) ([[def-topological-space]]).

[L4] For all $n, m \in \mathbb{N}$ exactly one of $n < m$, $n = m$, $m < n$ holds ([[lem-nat-trichotomy]]).

## Proof

**Proof technique:** direct.

1.1 $A \subseteq X \setminus \overline{B}$ and $B \subseteq X \setminus \overline{A}$, and both of these sets are open. [A1, L2]

2.1 By [A2] fix sequences of closed sets with $X \setminus \overline{B} = \bigcup_{n \in \mathbb{N}} F_n$ and $X \setminus \overline{A} = \bigcup_{n \in \mathbb{N}} G_n$. [step 1.1, A2, choose]

3.1 For every $n$ the closed sets $F_n$ and $\overline{B}$ are disjoint, since $F_n \subseteq X \setminus \overline{B}$; likewise $G_n$ and $\overline{A}$ are disjoint closed sets. [step 2.1, L2]

4.1 By [L1] the set of open $W \supseteq F_n$ with $\overline{W} \cap \overline{B} = \varnothing$ is nonempty for each $n$, and likewise the set of open $W' \supseteq G_n$ with $\overline{W'} \cap \overline{A} = \varnothing$; so [A3] supplies sequences $(U_n)_{n \in \mathbb{N}}$ and $(V_n)_{n \in \mathbb{N}}$ of open sets with $F_n \subseteq U_n$, $\overline{U_n} \cap \overline{B} = \varnothing$, $G_n \subseteq V_n$ and $\overline{V_n} \cap \overline{A} = \varnothing$ for every $n$. [step 3.1, A3, L1, choose]

5.1 Define $U := \bigcup_{n \in \mathbb{N}} \big(U_n \setminus \bigcup_{i \le n} \overline{V_i}\big)$ and $V := \bigcup_{n \in \mathbb{N}} \big(V_n \setminus \bigcup_{j \le n} \overline{U_j}\big)$. [step 4.1, construct]

6.1 $U$ and $V$ are open: for each $n$ the set $\bigcup_{i \le n} \overline{V_i}$ is a union of finitely many closed sets, hence closed, so its complement is open and $U_n \setminus \bigcup_{i \le n} \overline{V_i}$ is an intersection of two open sets; the union over $n$ is then open. [step 5.1, L2, L3]

6.2 $A \subseteq U$: given $a \in A$, step 1.1 and step 2.1 put $a$ in some $F_n \subseteq U_n$, while $a \in \overline{A}$ and $\overline{V_i} \cap \overline{A} = \varnothing$ give $a \notin \overline{V_i}$ for every $i$; hence $a \in U_n \setminus \bigcup_{i \le n} \overline{V_i} \subseteq U$. [step 1.1, step 2.1, step 4.1, step 5.1, L2]

6.3 $B \subseteq V$: given $b \in B$, step 1.1 and step 2.1 put $b$ in some $G_m \subseteq V_m$, while $b \in \overline{B}$ and $\overline{U_j} \cap \overline{B} = \varnothing$ give $b \notin \overline{U_j}$ for every $j$; hence $b \in V_m \setminus \bigcup_{j \le m} \overline{U_j} \subseteq V$. [step 1.1, step 2.1, step 4.1, step 5.1, L2]

6.4 Suppose $x \in U \cap V$; then by step 5.1 there are $n, m \in \mathbb{N}$ with $x \in U_n$, $x \notin \overline{V_i}$ for all $i \le n$, $x \in V_m$, and $x \notin \overline{U_j}$ for all $j \le m$. [step 5.1, assume-hyp]

7.1 If $n \le m$ in step 6.4 then $j := n$ satisfies $j \le m$, so $x \notin \overline{U_n}$; but $x \in U_n \subseteq \overline{U_n}$, which is impossible. [step 6.4, L2]

7.2 If $m < n$ in step 6.4 then $i := m$ satisfies $i \le n$, so $x \notin \overline{V_m}$; but $x \in V_m \subseteq \overline{V_m}$, which is impossible. [step 6.4, L2]

8.1 By [L4] one of $n \le m$ and $m < n$ holds, so steps 7.1 and 7.2 exclude every case and no such $x$ exists: $U \cap V = \varnothing$. [step 7.1, step 7.2, L4]

9.1 By steps 6.1, 6.2, 6.3 and 8.1 the sets $U$ and $V$ are disjoint open sets containing $A$ and $B$ respectively; since $A$ and $B$ were an arbitrary separated pair, $X$ is completely normal, and with the hypothesis $T_1$ this reads $T_6$ implies $T_5$. [step 6.1, step 6.2, step 6.3, step 8.1] ∎

## Remarks

- **The subtraction of the earlier closures is the entire trick.** Each $U_n \setminus \bigcup_{i \le n} \overline{V_i}$ is still large enough to catch the part of $A$ that $F_n$ covers, because no point of $A$ lies in any $\overline{V_i}$; and it is small enough that the two unions cannot meet, because a putative common point would be inside a $U_n$ that a later stage of $V$ has already removed, or inside a $V_m$ that a later stage of $U$ has removed. The comparison $n \le m$ or $m < n$ is what decides which of the two it is.

- **Only the two closures $\overline{A}$ and $\overline{B}$ are used**, never the sets $A$ and $B$ themselves beyond membership, which is why the hypothesis is exactly separation and not disjointness. For disjoint sets that are not separated the argument breaks at step 6.2.

- **The converse is not proved here and is not asserted.** Perfect normality asks a countability condition of every closed set that complete normality never mentions, so the two are not the same hypothesis; but no witness separating them is exhibited in this library, and nothing above claims one exists.

- **The hereditary reading is not used.** Complete normality is equivalent to the normality of every subspace, and some texts prove this theorem in that language; the argument above works directly with the separated-sets definition and never passes to a subspace.
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

### `lem-normality-via-shrinking` — lemma — A space is normal if and only if every closed $A$ inside an open $U$ admits an open $V$ with $A \\subseteq V \\subseteq \\overline{V} \\subseteq U$

(statement provenance: literature-derived)

### Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
closures as in [[def-interior-closure-boundary-top]]. The following two
conditions are equivalent.

- **(a)** $X$ is normal ([[def-normal-and-t4-spaces]]).
- **(b)** For every closed $A \subseteq X$ and every open $U$ with
  $A \subseteq U$ there is an open $V$ with
  $$A \subseteq V \subseteq \overline{V} \subseteq U .$$

In particular, in a normal space any two disjoint closed sets $A$ and $D$ admit
an open $V \supseteq A$ with $\overline{V} \cap D = \varnothing$: apply (b) to
$A$ and the open set $X \setminus D$. That corollary is the form in which
normality is used later on this page.

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

### `lem-nat-trichotomy` — lemma — Trichotomy of the order on $\\mathbb{N}$

(statement provenance: literature-derived)

### Statement

For all $m, n \in \mathbb{N}$ exactly one of $m < n$, $m = n$, $m > n$ holds. In particular the order ([[def-nat-order]]) is total.

## What to return

Read `thm-perfectly-normal-implies-completely-normal` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
