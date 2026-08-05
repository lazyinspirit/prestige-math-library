# Adversarial proof reading — `thm-rational-points-and-boxes-in-rn`

## The item under review, in full

`items/thm-rational-points-and-boxes-in-rn.md`

```markdown
---
id: thm-rational-points-and-boxes-in-rn
kind: theorem
title: "$\\mathbb{Q}^n$ is a countable dense subset of $\\mathbb{R}^n$, and rational open boxes form a countable basis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-q-and-irrationals-dense-r, thm-rationals-countable, def-product-topology, def-topology-basis-subbasis, lem-finite-powers-of-countable-sets-are-countable, lem-finite-choice, lem-subset-of-countable, lem-real-and-metric-notions-agree]
aliases: []
landmark: true
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
    - title: "Euclidean space"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "Separable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separable_space"
pipeline_run: null
---

## Statement

Let $n\ge1$. The set $\mathbb Q^n$ is countable and dense in $\mathbb R^n$. Moreover the rational open boxes

$$\prod_{i<n}(a_i,b_i),\qquad a_i,b_i\in\mathbb Q,\quad a_i<b_i,$$

form a countable basis for the product topology on $\mathbb R^n$.

## Facts & Assumptions

**Given:** $n\ge1$, the product $\mathbb R^n=\prod_{i<n}\mathbb R$, and the rationals embedded in $\mathbb R$.

[L1] $\mathbb Q$ is countably infinite, and every finite power of an at most countable set is at most countable ([[thm-rationals-countable]], [[lem-finite-powers-of-countable-sets-are-countable]]).

[L2] Every nonempty open subset of $\mathbb R$ contains a rational point ([[lem-q-and-irrationals-dense-r]]).

[L3] The product topology has a basis of finite-coordinate boxes, which for the finite index set $n$ are products of open subsets of $\mathbb R$ ([[def-product-topology]]).

[L4] A family is a basis when each point of each open set lies in one of its members contained in that open set ([[def-topology-basis-subbasis]]).

[L5] Finite choices may be assembled into a tuple, and a subset of an at most countable set is at most countable ([[lem-finite-choice]], [[lem-subset-of-countable]]).

[L6] If $U\subseteq\mathbb R$ is open and $x\in U$, then some open interval about $x$ is contained in $U$ ([[lem-real-and-metric-notions-agree]]).
## Proof

**Proof technique:** constructive.

1.1 By [L1], $\mathbb Q^n$ is at most countable. It is infinite because the injection $q\mapsto(q,0,\ldots,0)$ embeds $\mathbb Q$ in it, hence it is countable. [L1]

1.2 Let $U=\prod_{i<n}U_i$ be a nonempty basic product-open set. Every $U_i$ is nonempty and open, so [L2] gives a rational $q_i\in U_i$; finite choice supplies the tuple $q=(q_i)_{i<n}\in\mathbb Q^n\cap U$. [L2, L5, choose]

1.3 Let $x\in U=\prod_{i<n}U_i$ be a basic product-open neighbourhood. For each $i<n$, use [L6] to choose $r_i>0$ with $(x_i-r_i,x_i+r_i)\subseteq U_i$, then use [L2] to choose rationals $$ x_i-r_i<a_i<x_i<b_i<x_i+r_i. $$ Finite choice assembles these choices, and then $x\in\prod_{i<n}(a_i,b_i)\subseteq U$. [L2, L5, L6, choose]

2.1 Every nonempty open subset contains a nonempty basic product-open set about each of its points by [L3], so step 1.2 shows that every nonempty open subset meets $\mathbb Q^n$. Thus $\mathbb Q^n$ is dense. [L3, step 1.2]

3.1 Step 1.3 and [L4] show that rational open boxes form a basis. They are indexed by a subset of $\mathbb Q^{2n}$, which is at most countable by [L1], so the basis is at most countable by [L5]. [L1, L4, L5, step 1.3] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `lem-q-and-irrationals-dense-r` — lemma — Both $\\mathbb{Q}$ and $\\mathbb{R} \\setminus \\mathbb{Q}$ are dense in $\\mathbb{R}$, and every nonempty open subset of $\\mathbb{R}$ is uncountable

(statement provenance: untagged)

### Statement

Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$
under the canonical embedding $q \mapsto \hat q$ ([[lem-rat-embeds-dense]]), the
set usually written $\mathbb{Q}$ once the identification is made, and put
$X := \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ for the irrationals. Then:

1. $\mathbb{Q}_{\mathbb{R}}$ is dense in $\mathbb{R}$, that is,
   $\overline{\mathbb{Q}_{\mathbb{R}}} = \mathbb{R}$ ([[def-limit-point-r]]);
2. $X$ is dense in $\mathbb{R}$;
3. every nonempty open subset of $\mathbb{R}$ is uncountable
   ([[def-countable]]).

Claim 2 is not a symmetry of claim 1: the rationals are dense because they are
*constructed* to approximate, whereas the irrationals are dense because there are
too many points in any interval for a countable set to exhaust it, which is why
claim 3 is proved alongside and used for it.

### `thm-rationals-countable` — theorem — $\\mathbb{Q}$ is countably infinite

(statement provenance: ai-altered)

### Statement

$\mathbb{Q} \approx \mathbb{N}$ ([[def-equinumerous]]): the rationals are
countably infinite ([[def-countable]]).

**No choice principle is used.** The one place where a reader expects a choice,
"pick a representative $a/b$ of each rational", is exactly where
[[lem-rat-positive-denominator]] applies: every rational *has* a representative
with positive denominator, so the map $(a,b) \mapsto [(a,b)]$ defined on
$\mathbb{Z} \times \mathbb{Z}_{>0}$ is already **surjective** onto $\mathbb{Q}$,
and countability follows from a surjection without ever selecting a
representative. The same device handles $\mathbb{Z}$, which is a surjective image
of $\mathbb{N} \times \mathbb{N}$ by construction ([[def-integers]]).

### `def-product-topology` — definition — The product set $\\prod_{i \\in I} X_i$ of functions choosing a point in each factor, the projections, the box topology, and the product topology as the initial topology of the projections; the empty product is a one-point space

(statement provenance: ai-altered)

### Definition

**The product set.** Let $I$ be a set and let $X_i$ be a set for each $i \in I$.
The **product** is

$$\prod_{i \in I} X_i \;:=\; \Big\{\, x : x \text{ is a function with domain } I \text{ and } x(i) \in X_i \text{ for every } i \in I \,\Big\},$$

and we write $x_i := x(i)$, the $i$-th **coordinate** of $x$. Two elements of the
product are equal exactly when they agree at every index, functions being equal
when they have the same domain and the same values. For $j \in I$ the $j$-th
**projection** is

$$\pi_j : \prod_{i \in I} X_i \to X_j, \qquad \pi_j(x) := x_j .$$

**Notation for a finite product.** For $I = n$ a natural number, which is the set
$\{0, 1, \dots, n-1\}$ of its predecessors, an element of $\prod_{k<n} X_k$ is a
function on $n$ and we write it $(x_0, \dots, x_{n-1})$. In particular $I = 2$
gives the **binary product**, written $X \times Y$ for $\prod_{i<2} X_i$ with
$X_0 = X$ and $X_1 = Y$, whose elements are written $(u,v)$ for the function
$0 \mapsto u$, $1 \mapsto v$. This is the only meaning the symbol $X \times Y$
carries on this page.

**Two facts about when the product is nonempty, stated because they are used and
because they cost something.** If some $X_{i_0}$ is empty then the product is
empty, since no function can take a value in $X_{i_0}$. Conversely, suppose every
$X_i$ is nonempty.

- For $I = n$ a natural number, the product is nonempty, and this is a theorem of
  ZF: [[lem-finite-choice]] applied to the function $i \mapsto X_i$ on $n$
  supplies a choice function $g$ for the family of values, and
  $x(i) := g(X_i)$ defines a member of $\prod_{k<n} X_k$.
- For an arbitrary $I$ the assertion "$\prod_{i \in I} X_i \ne \varnothing$
  whenever every $X_i$ is nonempty" **is** the Axiom of Choice: it is the
  formulation recorded in [[def-axiom-of-choice]], and the choice function of
  [[def-choice-function]] is exactly a point of the product of a family by
  itself. Every use of it below is flagged at the step that spends it.

**The box topology.** Now let each $X_i$ carry a topology $\mathcal{T}_i$
([[def-topological-space]]). Put

$$\mathcal{R} \;:=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i \in I \,\Big\},$$

the family of **boxes**. $\mathcal{R}$ is a basis for a topology
([[thm-basis-criterion]]): it contains $\prod_i X_i$, so it covers the product,
and it is closed under binary intersections, since

$$\Big(\prod_i U_i\Big) \cap \Big(\prod_i V_i\Big) = \prod_i (U_i \cap V_i)$$

and each $U_i \cap V_i$ is open by (T3). The topology it generates is the **box
topology** $\mathcal{T}^{\square}$, and $\mathcal{R}$ is a basis for it
([[def-topology-basis-subbasis]]).

**The product topology.** The **product topology** $\mathcal{T}^{\Pi}$ on
$\prod_i X_i$ is the initial topology of the family of projections
$(\pi_i)_{i \in I}$ ([[def-initial-and-final-topology]]): the topology generated
by the subbasis

$$\mathcal{G} \;:=\; \{\, \pi_i^{-1}[U] : i \in I,\ U \in \mathcal{T}_i \,\}, \qquad \pi_i^{-1}[U] = \prod_{j \in I} W_j \ \text{ with } W_i = U \text{ and } W_j = X_j \text{ for } j \ne i .$$

By [[thm-basis-criterion]] the finite intersections of members of $\mathcal{G}$
form a basis for $\mathcal{T}^{\Pi}$, and those finite intersections are exactly
the boxes with all but finitely many factors unrestricted:

$$\mathcal{R}^{\Pi} \;=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i, \text{ and } U_i = X_i \text{ for all but finitely many } i \,\Big\}.$$

Indeed the intersection of $\pi_{i_1}^{-1}[U_1], \dots, \pi_{i_n}^{-1}[U_n]$ is
the box whose factor at $i$ is the intersection of those $U_m$ with $i_m = i$ and
is $X_i$ when no $i_m$ equals $i$; and the intersection of no members is the
whole product, the box with every factor $X_i$. Conversely a box with
$U_i = X_i$ off a finite set is such an intersection. Members of
$\mathcal{R}^{\Pi}$ are called **basic product-open** sets, and members of
$\mathcal{R}$ **boxes**. So $\mathcal{R}^{\Pi} \subseteq \mathcal{R}$, with
equality when $I$ is a natural number.

**The empty product.** For $I = \varnothing$ there is exactly one function with
domain $\varnothing$, the empty function, so $\prod_{i \in \varnothing} X_i$ is a
one-point set. A one-point set carries exactly one topology, namely
$\{\varnothing, \{\varnothing\}\}$, since a topology must contain the empty set
and the whole set and there is nothing else to contain
([[def-topological-space]]); so the box topology and the product topology agree
there, and both equal the discrete topology and the indiscrete topology
([[def-standard-topologies]]), which coincide on a one-point set. There are no
projections to speak of, and the initial topology of the empty family is indeed
the indiscrete one ([[def-initial-and-final-topology]]).

**Convention.** Unless the box topology is named explicitly, $\prod_i X_i$ always
carries the product topology in this library. That is not a matter of taste: the
product topology is the one with the characteristic property of the next item,
and the box topology has no such property.

### `def-topology-basis-subbasis` — definition — Basis and subbasis for a topology, and the topology generated by a family of sets

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

A family $\mathcal{B} \subseteq \mathcal{T}$ is a **basis for $\mathcal{T}$** if
every open set is a union of members of $\mathcal{B}$: for every
$U \in \mathcal{T}$ there is $\mathcal{B}_U \subseteq \mathcal{B}$ with
$U = \bigcup \mathcal{B}_U$. Equivalently, and this is the form used in proofs,

$$\text{for every } U \in \mathcal{T} \text{ and every } x \in U \text{ there is } B \in \mathcal{B} \text{ with } x \in B \subseteq U .$$

*The two forms say the same thing.* If every open $U$ is such a union and
$x \in U$, then $x$ lies in one of the sets united, which is a member of
$\mathcal{B}$ inside $U$. Conversely, if the displayed condition holds then
$U = \bigcup \{\, B \in \mathcal{B} : B \subseteq U \,\}$, since each such $B$ is
contained in $U$ and each $x \in U$ lies in one of them. Note that
$\bigcup \varnothing = \varnothing$, so the empty open set is covered by the empty
subfamily and needs no member of $\mathcal{B}$. The members of a basis are called
**basic open sets**.

**The topology generated by a family.** Let $\mathcal{S} \subseteq \mathcal{P}(X)$
be *any* family of subsets of $X$. Then

$$\langle \mathcal{S} \rangle := \bigcap \{\, \mathcal{T}' : \mathcal{T}' \text{ is a topology on } X \text{ with } \mathcal{S} \subseteq \mathcal{T}' \,\}$$

is a topology on $X$, it contains $\mathcal{S}$, and it is contained in every
topology on $X$ that contains $\mathcal{S}$. It is called the **topology
generated by $\mathcal{S}$**, and $\mathcal{S}$ is a **subbasis** for a topology
$\mathcal{T}$ when $\mathcal{T} = \langle \mathcal{S} \rangle$.

*This is well posed, and the obligation is discharged here.* The collection being
intersected is nonempty, because $\mathcal{P}(X)$ is a topology on $X$ containing
$\mathcal{S}$; so the intersection is an intersection of a nonempty family of
subsets of $\mathcal{P}(X)$ and is a set. It is a topology: $\varnothing$ and $X$
lie in every topology on $X$, hence in the intersection, which is (T1); if
$\mathcal{S}' \subseteq \langle \mathcal{S} \rangle$ then $\mathcal{S}'$ is a
subfamily of each $\mathcal{T}'$ in the collection, so $\bigcup \mathcal{S}'$ lies
in each $\mathcal{T}'$ and hence in the intersection, which is (T2); and the same
argument with $U \cap V$ gives (T3). It contains $\mathcal{S}$ because every
$\mathcal{T}'$ in the collection does, and it is contained in each such
$\mathcal{T}'$ because an intersection is contained in each of its members. So
$\langle \mathcal{S} \rangle$ is the coarsest topology on $X$ containing
$\mathcal{S}$ ([[def-topological-space]]), and in particular it is uniquely
determined by $\mathcal{S}$.

**Neither notion is intrinsic to the family alone.** "$\mathcal{B}$ is a basis
for $\mathcal{T}$" and "$\mathcal{S}$ is a subbasis for $\mathcal{T}$" are
relations between a family and a topology, not properties of the family. The
question of which families are a basis *for some* topology, and how the topology
generated by a subbasis is computed from it, is settled by the next item.

### `lem-finite-powers-of-countable-sets-are-countable` — lemma — Every finite power of an at most countable set is at most countable

(statement provenance: literature-derived)

### Statement

If $C$ is at most countable and $m\in\mathbb N$, then the finite product $C^m=\prod_{i<m}C$ is at most countable.

### `lem-finite-choice` — lemma — Every natural-number-indexed list of nonempty sets has a choice function on its family of values

(statement provenance: ai-altered)

### Statement

Let $n \in \mathbb{N}$ and let $F$ be a function with domain $n$ all of whose
values are nonempty sets. Then the family of its values,
$\mathcal{F} = F[n] = \{\, F(i) : i \in n \,\}$, has a choice function
([[def-choice-function]]).

This is a theorem of ZF: its proof uses no form of the Axiom of Choice
([[def-axiom-of-choice]]).

What is proved below is exactly the displayed statement, by induction on $n$. The
natural number $n$ serves as the index set in the von Neumann sense,
$n = \{0, 1, \dots, n-1\}$ ([[def-natural-numbers]]), so "$F$ has domain $n$"
says precisely that the members of $\mathcal{F}$ are listed as
$F(0), \dots, F(n-1)$. The listing need not be injective, and $\mathcal{F}$ is the
set of values, so repetitions are harmless and are not counted.

The displayed statement and its proof use only a natural-number-indexed
function. They do not identify an arbitrary finite family with a particular
enumeration.

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

### `lem-real-and-metric-notions-agree` — lemma — Dictionary: for $A \\subseteq \\mathbb{R}$ with the metric $d(x,y) = |x-y|$, continuity and uniform continuity of $f : A \\to \\mathbb{R}$ agree with the metric-space notions, the Lipschitz and Hölder conditions are the metric ones instantiated, and a subset of $\\mathbb{R}$ is compact in the open-cover sense of $\\mathbb{R}$ exactly when it is a compact metric subspace

(statement provenance: untagged)

### Statement

Let $A \subseteq \mathbb{R}$ carry the subspace metric of the usual metric
$d_{\mathbb{R}}(x,y) = |x-y|$ of $\mathbb{R}$, that is
$d_A(x,y) = |x - y|$ for $x, y \in A$
([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]),
and let $f : A \to \mathbb{R}$, regarded also as a map of metric spaces
$(A, d_A) \to (\mathbb{R}, d_{\mathbb{R}})$. Then the $\mathbb{R}$-native
notions of this page and the metric-space notions of the earlier pages are the
**same notions**, in the following five senses.

1. **Continuity.** For every $c \in A$: $f$ is continuous at $c$ in the sense of
   [[def-continuity-real]] if and only if $f$ is continuous at $c$ in the sense
   of [[def-metric-continuity]]. Consequently $f$ is continuous on $A$ if and
   only if it is continuous as a map of metric spaces.
2. **Uniform continuity.** $f$ is uniformly continuous on $A$ in the sense of
   [[def-uniform-continuity-real]] if and only if it is uniformly continuous as
   a map of metric spaces ([[def-metric-uniform-continuity]]).
3. **Lipschitz.** For a real $L \ge 0$: $f$ is Lipschitz with constant $L$ as a
   map of metric spaces ([[def-lipschitz-holder-contraction]]) if and only if
   $$|f(x) - f(x')| \le L\,|x - x'| \qquad \text{for all } x, x' \in A .$$
   This displayed condition is what "$f$ is Lipschitz with constant $L$" means
   for a real function on $A$ in this library; no second definition is made.
4. **Hölder.** For a rational $\alpha$ with $0 < \alpha \le 1$ and a real
   $C \ge 0$: $f$ is $\alpha$-Hölder with constant $C$ as a map of metric spaces
   if and only if
   $$|f(x) - f(x')| \le C\,|x - x'|^{\alpha} \qquad \text{for all } x, x' \in A ,$$
   the power being the rational power of a nonnegative base
   ([[def-rational-power]]).
5. **Compactness, in both senses used in this library.** For $K \subseteq
   \mathbb{R}$ with the subspace metric $d_K$:
   - $K$ is compact in the open-cover sense of [[def-open-cover-r]] — every
     family of open subsets of $\mathbb{R}$ covering $K$ has a finite subfamily
     covering $K$ — if and only if the metric space $(K, d_K)$ is compact
     ([[def-metric-compactness]]);
   - $K$ is sequentially compact in the sense of [[def-open-cover-r]] if and
     only if $(K, d_K)$ is sequentially compact as a metric space
     ([[def-metric-compactness-variants]]).

Two consequences are recorded, since they are the reason the dictionary is
stated as a lemma rather than as a remark.

6. **The regularity hierarchy transfers verbatim.** By clauses 1 to 4 and
   [[thm-metric-regularity-hierarchy]]: a Lipschitz $f : A \to \mathbb{R}$ is
   uniformly continuous on $A$; an $\alpha$-Hölder $f$ with rational
   $0 < \alpha \le 1$ is uniformly continuous on $A$; a uniformly continuous $f$
   is continuous on $A$; and if $A$ is nonempty and bounded, a Lipschitz $f$ is
   $\alpha$-Hölder for every rational $\alpha$ with $0 < \alpha \le 1$. No
   strictness is claimed here, and none is claimed there.
7. **Cauchy sequences transfer.** A sequence $(x_k)$ with terms in $A$ is Cauchy
   in $(A, d_A)$ ([[def-cauchy-in-metric]]) if and only if it is Cauchy as a
   sequence of reals ([[def-real-limit]]); so by clause 2 and
   [[thm-uniform-continuity-preserves-cauchy]], a uniformly continuous
   $f : A \to \mathbb{R}$ carries Cauchy sequences of $A$ to Cauchy sequences of
   $\mathbb{R}$.

**Why this lemma exists, and why it is a lemma.** Three results of this page —
[[thm-continuous-image-of-a-compact-set-r]], [[thm-extreme-value-r]] and
[[thm-heine-cantor-r]] — are stated a second time here, having already been
proved metric-generally as
[[thm-continuous-image-of-a-compact-space-is-compact]],
[[thm-extreme-value-metric]] and [[thm-heine-cantor-metric]]. The duplication is
deliberate: the $\mathbb{R}$-native proofs run through
[[thm-heine-borel-characterisation-r]] and
[[thm-compact-iff-sequentially-compact-r]], which are order-based, while the
metric proofs run through the cover machinery of metric spaces. **This item is
the single place in the library where that duplication is acknowledged**, and
clauses 1 and 5 are what make the two families of statements literally the same
statements. It is a lemma, and not a remark, precisely so that later pages can
cite it and move between the two vocabularies.

**Clause 5 closes a second seam.** The phrase *compact subset of $\mathbb{R}$*
is defined twice in this library — metrically, as compactness of the metric
subspace ([[def-metric-compactness]]), and $\mathbb{R}$-natively, by covers by
open subsets of $\mathbb{R}$ ([[def-open-cover-r]]) — and until this clause no
item asserted that the two agree.

## What to return

Read `thm-rational-points-and-boxes-in-rn` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
