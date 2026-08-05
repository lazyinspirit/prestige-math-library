# Adversarial proof reading — `fs-lindelofness-is-hereditary`

## The item under review, in full

`items/fs-lindelofness-is-hereditary.md`

```markdown
---
id: fs-lindelofness-is-hereditary
kind: false-statement
title: "Refuted: Lindelöfness is hereditary"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-compactness-variants, def-compact-space, def-one-point-compactification, thm-one-point-compactification-properties, def-standard-topologies, def-locally-compact-space, def-hausdorff-space, thm-r-uncountable, def-hereditary-property]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "UCR General Topology Notes"
      url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"
    - title: "Fort space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fort_space"
    - title: "Alexandroff extension (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Alexandroff_extension"
pipeline_run: null
---
## Statement
Lindelöfness is hereditary.
## Facts & Assumptions

**Given:** The uncountable discrete space $D=\mathbb R$ and its one-point compactification $D^*$.

[L1] The one-point compactification $D^*$ is compact and contains $D$ as an open subspace ([[thm-one-point-compactification-properties]]).

[L2] Compactness gives a finite subcover for every open cover, Lindelöfness gives an at most countable subcover, and a property is hereditary when every subspace has it ([[def-compactness-variants]], [[def-hereditary-property]]).

[L3] The real line is uncountable and every subset of a discrete space is open ([[thm-r-uncountable]], [[def-standard-topologies]]).

[F1] A space is locally compact when every point has a compact neighbourhood, and Hausdorff when distinct points have disjoint open neighbourhoods ([[def-locally-compact-space]], [[def-hausdorff-space]]).
## Refutation

**Proof technique:** direct.

1.1 The discrete space $D$ is Hausdorff because distinct singleton neighbourhoods are disjoint, and locally compact because each point has the compact singleton neighbourhood; it is not compact because its singleton cover has no finite subcover. Thus its one-point compactification has the usual compact Hausdorff behavior, and in any case [L1] makes $D^*$ compact with $D$ as an open subspace. By [L2], $D^*$ is Lindelöf. [L1, L2, L3, F1]

1.2 The subspace $D$ is discrete and has the open cover $\{\{x\}:x\in D\}$; any subcover must contain every singleton, so no at most countable subfamily covers the uncountable set $D$. [L3]

2.1 Thus the Lindelöf space $D^*$ has the non-Lindelöf subspace $D$, so Lindelöfness is not hereditary. [step 1.1, step 1.2, L2] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-compactness-variants` — definition — Countably compact, Lindel\\\"of, sequentially compact, limit point compact and $\\sigma$-compact spaces, and relatively compact subsets

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
open covers, subcovers, finiteness and compactness as in [[def-compact-space]],
and *finite*, *at most countable* and *uncountable* as in [[def-countable]].

- $(X, \mathcal{T})$ is **countably compact** when every open cover of $X$ that
  is at most countable has a finite subcover.
- $(X, \mathcal{T})$ is **Lindel&ouml;f** when every open cover of $X$ has an at
  most countable subcover.
- $(X, \mathcal{T})$ is **sequentially compact** when every sequence $(x_k)$ in
  $X$, that is every function $x : \mathbb{N} \to X$
  ([[def-sequence-convergence-top]]), has a subsequence $(x_{n_j})$ converging to
  a point of $X$, the index map $n : \mathbb{N} \to \mathbb{N}$ being strictly
  increasing ([[def-sequence]], [[lem-index-map-grows]]).
- $(X, \mathcal{T})$ is **limit point compact** when every infinite subset
  $A \subseteq X$ has a limit point in $X$, that is a point $p \in X$ every
  neighbourhood $N$ of which satisfies $N \cap (A \setminus \{p\}) \ne \varnothing$
  ([[def-interior-closure-boundary-top]]). Here *infinite* means not finite in
  the sense of [[def-countable]].
- $(X, \mathcal{T})$ is **$\sigma$-compact** when there is an at most countable
  family $\mathcal{K}$ of compact subsets of $X$ with $X = \bigcup \mathcal{K}$.
- A subset $A \subseteq X$ is **relatively compact in $X$** when its closure
  $\overline{A}$ ([[def-interior-closure-boundary-top]]) is a compact subset of
  $X$.

A subset $A \subseteq X$ is called countably compact, Lindel&ouml;f,
sequentially compact, limit point compact or $\sigma$-compact when the subspace
$(A, \mathcal{T}_A)$ is ([[def-subspace-topology-top]]), exactly as for
compactness. **Relative compactness is the exception and is deliberately not of
that form**: it is a statement about $A$ *inside* $X$, since $\overline{A}$ is
computed in $X$, and a set may be relatively compact in one space and not in
another that contains it. Every other notion on this list is intrinsic to the
subspace.

**The countable covers may be listed.** A nonempty at most countable family
$\mathcal{U}$ admits a surjection $\mathbb{N} \to \mathcal{U}$
([[lem-countable-iff-surjection-from-n]]), so countable compactness says: for
every sequence $(U_n)_{n \in \mathbb{N}}$ of open sets with
$X = \bigcup_{n \in \mathbb{N}} U_n$ there are finitely many indices whose sets
already cover $X$. That surjection is produced from the countability assumption
alone and no choice principle is involved; the empty family covers only the empty
space, which is compact anyway.

**Indexing starts at $0$.** A sequence here is a function on $\mathbb{N}$ and
$\mathbb{N}$ contains $0$ ([[def-sequence]]), so a subsequence is
$(x_{n_j})_{j \in \mathbb{N}}$ with $n_0 < n_1 < \cdots$ and $n_j \ge j$
([[lem-index-map-grows]]). An index range taken from a text that starts at $1$
must be shifted before it is used here.

**Agreement with the metric definitions.** Let $(X,d)$ be a metric space carrying
its metric topology $\mathcal{T}_d$ ([[def-metric-topology]],
[[def-metrizable-space]]). Then the three notions that
[[def-metric-compactness-variants]] defines metrically are the three defined
above, read in $(X, \mathcal{T}_d)$:

- *Countably compact.* The open sets used there are the members of
  $\mathcal{T}_d$, so the at most countable open covers are the same families and
  the condition is the same condition, exactly as for compactness itself
  ([[thm-compactness-agrees-with-metric-compactness]]).
- *Sequentially compact.* Convergence of a sequence in the metric sense and in
  the sense of [[def-sequence-convergence-top]] agree on a metric topology,
  because the balls around a point are a neighbourhood base at it
  ([[def-metrizable-space]]); the subsequences quantified over are the same.
- *Limit point compact.* A point $p$ is a limit point of $A$ in the metric sense
  when every ball around $p$ meets $A \setminus \{p\}$, and in the sense above
  when every neighbourhood does; the same neighbourhood base makes the two
  conditions one ([[def-metrizable-space]],
  [[def-interior-closure-boundary-top]]).

So no statement below about a metrizable space introduces a second notion, and
every theorem of the metric development about these three properties may be
quoted here once a metric inducing the topology is named. Lindel&ouml;fness,
$\sigma$-compactness and relative compactness have no metric counterpart in this
library and are defined here for the first time.

### `def-compact-space` — definition — Open cover, subcover, and compact topological space; a compact subset is a subspace that is compact in its own right

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- An **open cover** of $(X,\mathcal{T})$ is a family
  $\mathcal{U} \subseteq \mathcal{T}$ of open sets with $X = \bigcup \mathcal{U}$,
  where $\bigcup \mathcal{U} = \{\, x \in X : x \in U \text{ for some } U \in \mathcal{U} \,\}$.
- A **subcover** of $\mathcal{U}$ is a subfamily $\mathcal{V} \subseteq \mathcal{U}$
  that is itself an open cover.
- A family $\mathcal{V}$ of sets is **finite** when $\mathcal{V} = \varnothing$ or
  there are $n \in \mathbb{N}$ and sets $V_0, \dots, V_n$ with
  $\mathcal{V} = \{V_0, \dots, V_n\}$; repetitions in the list are allowed and
  harmless.
- $(X,\mathcal{T})$ is **compact** when every open cover of it has a finite
  subcover: for every open cover $\mathcal{U}$, either $X = \varnothing$ and the
  empty subfamily covers it, or there are $n \in \mathbb{N}$ and
  $U_0, \dots, U_n \in \mathcal{U}$ with
  $$X = U_0 \cup \dots \cup U_n .$$
- A subset $A \subseteq X$ is a **compact subset** of $X$ when the subspace
  $(A, \mathcal{T}_A)$ is a compact topological space, $\mathcal{T}_A$ being the
  subspace topology ([[def-subspace-topology-top]]).

**Compactness of a subset is defined intrinsically, and only intrinsically.**
The last clause speaks about the subspace $(A, \mathcal{T}_A)$ and its own open
sets, not about families of open subsets of the ambient $X$. The two readings do
agree, but that is a theorem and not a convention: it is
[[lem-compactness-of-a-subspace-is-ambient]], and no item of this library may use
the ambient reading without citing it. Taking the intrinsic reading makes
compactness a property of the topological space $(A, \mathcal{T}_A)$ alone.
Hence it is preserved when $A$ is embedded homeomorphically as a subspace, or
when another ambient space induces the same topology on $A$; it need not be
preserved if the induced topology changes. This is exactly the convention already fixed for
metric spaces by [[def-metric-compactness]], and the agreement of that
definition with this one is [[thm-compactness-agrees-with-metric-compactness]].

**The empty space is compact**, since the empty subfamily of any family covers
it; this is the reason the clause above is written with the two cases. Every
space listed as $\{x_0, \dots, x_n\}$ is compact too: given a cover, each $x_i$
lies in some member, and finitely many members named in this way already cover.
So every finite space is compact, whatever its topology, and in particular the
discrete topology on a finite set is compact while the discrete topology on an
infinite set is not ([[def-standard-topologies]]).

**The finiteness convention.** "Finite" above is the listing form. It agrees with
the definition of finiteness by equinumerosity with a natural number
([[def-countable]]), in both directions, and the agreement is the one already
discharged in [[def-metric-compactness]]: a nonempty set equinumerous with
$m \ge 1$ is listable, and a set listed as $\{a_0, \dots, a_n\}$ injects into
$\sigma(n)$ by sending $x$ to the least $i \le n$ with $a_i = x$. Neither
direction uses a choice principle; the second selects nothing, taking a least
index instead.

**Quasicompact is not used here.** Some authors, following Bourbaki, reserve
*compact* for a space that is both compact in the above sense and Hausdorff, and
call the open-cover condition alone *quasicompact*. This library follows the more
widely adopted convention: **compact** means the open-cover condition and nothing
more, and a Hausdorff hypothesis is always written out. The fork is recorded in
[[rem-compactness-conventions-and-choice-ledger]].

### `def-one-point-compactification` — definition — The one-point (Alexandroff) compactification $X^{*} = X \\cup \\{\\infty\\}$, whose open sets are the open sets of $X$ together with the complements in $X^{*}$ of the closed compact subsets of $X$

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

**A point outside $X$, named rather than assumed.** Put

$$\infty \;:=\; \{\, y \in X : y \notin y \,\},$$

a set by Separation. Then $\infty \notin X$: were $\infty \in X$, the defining
condition applied to $\infty$ itself would give
$\infty \in \infty \iff \infty \notin \infty$. So no hypothesis about $X$ is
needed to obtain a point outside it, and the construction below is available for
every space.

**The space.** Put $X^{*} := X \cup \{\infty\}$ and

$$\mathcal{T}^{*} \;:=\; \mathcal{T} \;\cup\; \{\, X^{*} \setminus C \;:\; C \subseteq X,\ C \text{ closed in } X \text{ and a compact subset of } X \,\} .$$

The pair $(X^{*}, \mathcal{T}^{*})$ is the **one-point compactification**, or
**Alexandroff compactification**, of $X$. Members of $\mathcal{T}$ are said to be
of the **first kind** and the sets $X^{*} \setminus C$ of the **second kind**; a
set of the second kind is exactly an open set of $\mathcal{T}^{*}$ containing
$\infty$, since a member of $\mathcal{T}$ is a subset of $X$, and the set $C$ is
recovered from it as $C = X^{*} \setminus (X^{*} \setminus C)$.

**$\mathcal{T}^{*}$ is a topology on $X^{*}$, and this is discharged here.**
Throughout, "closed" and "compact" without qualification mean closed in $X$ and a
compact subset of $X$ ([[def-compact-space]]); two facts about such sets are used
and both are [[thm-closed-subspace-of-a-compact-space-is-compact]]: a subset of a
compact $C$ that is closed in $X$ is closed in the subspace $C$
([[def-subspace-topology-top]]) and hence compact, and a union of two compact
subsets is compact.

*(T1).* $\varnothing \in \mathcal{T}$, and $X^{*} = X^{*} \setminus \varnothing$
is of the second kind, $\varnothing$ being closed in $X$ and compact.

*(T2).* Let $\mathcal{S} \subseteq \mathcal{T}^{*}$, let $\mathcal{S}_1$ be the
members of $\mathcal{S}$ lying in $\mathcal{T}$ and $\mathcal{S}_2$ the rest, so
that every member of $\mathcal{S}_2$ is of the second kind. If
$\mathcal{S}_2 = \varnothing$ then $\bigcup \mathcal{S} = \bigcup \mathcal{S}_1$
lies in $\mathcal{T}$ by (T2) in $X$. Otherwise put
$U := \bigcup \mathcal{S}_1 \in \mathcal{T}$ and
$\mathcal{D} := \{\, X^{*} \setminus O : O \in \mathcal{S}_2 \,\}$, a nonempty
family of closed compact subsets of $X$, and $C_0 := \bigcap \mathcal{D}$. Then
$C_0$ is closed by (C2) of [[def-topological-space]], and it is a closed subset of
any one member of $\mathcal{D}$, hence compact. Now

$$\bigcup \mathcal{S} \;=\; U \cup (X^{*} \setminus C_0) \;=\; X^{*} \setminus (C_0 \setminus U),$$

and $C_0 \setminus U = C_0 \cap (X \setminus U)$ is closed in $X$ and a subset of
the compact $C_0$, hence compact; so $\bigcup \mathcal{S}$ is of the second kind.

*(T3).* For $U, V \in \mathcal{T}$ the intersection lies in $\mathcal{T}$ by (T3)
in $X$. For two sets of the second kind,
$(X^{*} \setminus C) \cap (X^{*} \setminus D) = X^{*} \setminus (C \cup D)$, and
$C \cup D$ is closed in $X$ and compact as a union of two compact subsets. For one
of each, $\infty \notin U$ gives
$U \cap (X^{*} \setminus C) = U \cap (X \setminus C)$, an intersection of two
members of $\mathcal{T}$.

**Why the compact sets are also required to be closed.** The complement of a
compact set that is not closed in $X$ would not make $\infty$'s neighbourhoods
behave: the union computation in (T2) uses that an intersection of the discarded
sets is again closed, and the intersection of arbitrary compact subsets of a
non-Hausdorff space need not be compact. When $X$ is Hausdorff every compact
subset is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]) and the
two descriptions agree, which is why many texts state the definition without the
word "closed" and silently assume the Hausdorff case.

### `thm-one-point-compactification-properties` — theorem — $X^{*}$ is compact and contains $X$ as an open subspace; $X$ is dense in $X^{*}$ exactly when $X$ is not compact; and $X^{*}$ is Hausdorff exactly when $X$ is locally compact and Hausdorff

(statement provenance: ai-altered)

### Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$(X^{*}, \mathcal{T}^{*})$ be its one-point compactification, with added point
$\infty$ ([[def-one-point-compactification]]). Then:

1. **$X^{*}$ is compact** ([[def-compact-space]]).
2. **$X$ is an open subspace of $X^{*}$**: $X \in \mathcal{T}^{*}$, and the
   subspace topology that $X$ inherits from $X^{*}$
   ([[def-subspace-topology-top]]) is $\mathcal{T}$ itself.
3. **$X$ is dense in $X^{*}$** ([[def-dense-top]]) **if and only if $X$ is not
   compact.**
4. **$X^{*}$ is Hausdorff** ([[def-hausdorff-space]]) **if and only if $X$ is
   locally compact** ([[def-locally-compact-space]]) **and Hausdorff.**

In particular, a locally compact Hausdorff space is an open subspace of a compact
Hausdorff space, which is the reason the construction is made. **No choice
principle is used**: the only cover thinned below is thinned by the indexed form
of [[lem-compactness-of-a-subspace-is-ambient]], which returns its own indices.

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

### `def-locally-compact-space` — definition — Locally compact topological space: every point has a compact neighbourhood; and what this says in a metric space

(statement provenance: ai-altered)

### Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is **locally
compact** when

> every point of $X$ has a compact neighbourhood:

that is, for every $x \in X$ there is a neighbourhood $N$ of $x$
([[def-neighbourhood-top]]) that is a compact subset of $X$
([[def-compact-space]], [[def-subspace-topology-top]]).

**A neighbourhood need not be open here**, and that is what makes the condition
the weak one it is meant to be: $N$ is required only to contain some open set
containing $x$. Writing "compact **open** neighbourhood" instead would define a
strictly stronger property, satisfied by no space in which a point has no compact
open neighbourhood, $\mathbb{R}$ among them; and requiring the compact set merely
to *contain* $x$ would define a property so weak that every space with a
singleton has it, singletons being compact.

**Every compact space is locally compact**, since $X$ itself is a neighbourhood
of each of its points and is a compact subset of itself. The converse fails, and
$\mathbb{R}^n$ is the standard witness.

**What the condition says in a metric space.** Let $(X,d)$ be a metric space
carrying its metric topology ([[def-metric-topology]], [[def-metrizable-space]]),
with balls as in [[def-metric-ball]], and let $x \in X$. Then

> $x$ has a compact neighbourhood **if and only if** there are a real $r > 0$ and
> a compact $K \subseteq X$ with $B(x,r) \subseteq K$.

*Both directions are immediate and are discharged here.* If $N$ is a compact
neighbourhood of $x$, fix an open $U$ with $x \in U \subseteq N$; by
[[def-metric-topology]] there is $r > 0$ with $B(x,r) \subseteq U \subseteq N$, so
$K := N$ serves. Conversely, if $B(x,r) \subseteq K$ with $K$ compact, then $K$
contains the open set $B(x,r)$, which contains $x$, so $K$ is a neighbourhood of
$x$ and is compact. Compactness of a subset of $(X,d)$ means the same thing read
metrically and read topologically
([[thm-compactness-agrees-with-metric-compactness]]), so the criterion may be
applied with either development's theorems.

**$\mathbb{R}^n$ is locally compact for every $n \ge 1$.** Give $\mathbb{R}^n$
the product topology, which is the metric topology of the Euclidean metric $d_2$
([[lem-metrics-on-rn]], [[cor-heine-borel-in-the-product-topology]]). For
$p \in \mathbb{R}^n$ the set

$$Q_p \;:=\; \{\, x \in \mathbb{R}^n : d_2(x,p) \le 1 \,\}$$

is closed, being the complement of the union of the open balls $B(y, d_2(y,p) - 1)$
over the points $y$ with $d_2(y,p) > 1$, and it is bounded
([[def-metric-bounded-diameter]]), lying inside $B(p, 2)$; so $Q_p$ is compact by
[[cor-heine-borel-in-the-product-topology]]. It contains the open ball $B(p,1)$,
which contains $p$, so it is a compact neighbourhood of $p$. The space
$\mathbb{R}^n$ is not compact, so local compactness is strictly weaker than
compactness.

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

### `def-hereditary-property` — definition — Hereditary, open-hereditary and closed-hereditary properties of topological spaces

(statement provenance: ai-altered)

### Definition

A **property of topological spaces** is a condition $P$ that is either true or
false of each space, as in [[def-homeomorphism-and-open-maps]]; a **topological
property** is one whose truth value is the same for homeomorphic spaces. Every
subset of a space is regarded as a space by giving it the subspace topology
([[def-subspace-topology-top]]).

Let $P$ be a property of topological spaces. Then $P$ is

- **hereditary** if, whenever a space $X$ has $P$, every subspace of $X$ has $P$;
- **open-hereditary** if, whenever $X$ has $P$, every subspace $S \subseteq X$
  with $S$ open in $X$ has $P$;
- **closed-hereditary** if, whenever $X$ has $P$, every subspace $S \subseteq X$
  with $S$ closed in $X$ has $P$.

A hereditary property is both open-hereditary and closed-hereditary, since the
condition on $S$ is only a restriction of the range of subspaces quantified over.
Neither of the two weaker notions implies the other, and neither implies
heredity.

**The definition is stable under the route by which a subspace is reached.** If
$S \subseteq T \subseteq X$ then the topology $S$ inherits from the subspace $T$
is the topology $S$ inherits from $X$, transitivity being discharged in
[[def-subspace-topology-top]]. So "every subspace of $X$" is unambiguous, and a
hereditary property automatically passes from $X$ to a subspace of a subspace,
with no separate induction.

**Heredity is a statement about a property, not about a space.** It quantifies
over all spaces having $P$ and all their subspaces, so a single space whose
subspaces all inherit $P$ says nothing; and a single space that **has** $P$ and
has one subspace lacking $P$ refutes heredity outright. A space that lacks $P$
refutes nothing, however its subspaces behave. That asymmetry is why the failures are
recorded here as counterexamples and the successes as theorems.

**Only topological properties are worth asking about.** Taking $S = X$ shows that
a hereditary property holds of $X$ itself, and the subspace topology on $X$ is
$\mathcal{T}$ ([[def-subspace-topology-top]], with $U \cap X = U$), so the
definition is not vacuous at the top. But a condition that is not invariant under
homeomorphism can be hereditary for uninteresting reasons, since a subspace is
only determined up to the identification of its topology
([[def-topological-space]]); every property named hereditary in this library is
a topological property, and it is said so where it is proved.

## What to return

Read `fs-lindelofness-is-hereditary` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
