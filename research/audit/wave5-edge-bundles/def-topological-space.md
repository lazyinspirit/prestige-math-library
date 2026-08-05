# Citation-precision audit — everything that cites `def-topological-space`

## The target, as it actually stands on disk

`items/def-topological-space.md` — definition — Topology on a set, open and closed sets, clopen sets, the closed-set axiomatisation, and the coarser/finer comparison

#### Definition

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

## The 53 citing use(s), quoted verbatim from the citing items

### `cex-closed-unbounded-euclidean-subset-not-compact` (published-backward, page the-topology-of-euclidean-space-examples)

Title: $\\mathbb{R}^n$ is closed and unbounded and is not compact for $n\\ge1$

- [L4] The empty set is open, so the whole space is closed; a metric subset is bounded exactly when it lies in some ball about some centre ([[def-topological-space]], [[def-metric-bounded-diameter]]).

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- [L6] Normality: two disjoint closed sets have disjoint open supersets. Hausdorff: distinct points have disjoint open neighbourhoods. A set is closed exactly when its complement is open ([[def-normal-and-t4-spaces]], [[def-hausdorff-space]], [[def-topological-space]], [[def-interior-closure-boundary-top]], [[thm-closure-characterisation-top]]).

### `def-compact-open-topology` (published-backward, page function-space-topologies)

Title: The compact-open topology on $C(X,Y)$ for a metric domain $X$, with subbasis $S(K,V) = \\{f : f[K] \\subseteq V\\}$

- a topological space ([[def-topological-space]]), and let

### `def-completely-normal-and-perfectly-normal-spaces` (published-backward, page separation-axioms)

Title: Completely normal ($T_5$) and perfectly normal ($T_6$) spaces

- Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

### `def-completely-regular-and-tychonoff-spaces` (published-backward, page separation-axioms)

Title: Completely regular spaces and Tychonoff ($T_{3\\frac{1}{2}}$) spaces

- Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let

### `def-countable-chain-condition` (published-backward, page countability-axioms-and-cardinal-functions)

Title: The countable chain condition: every pairwise-disjoint family of nonempty open sets is at most countable

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `def-directed-set-and-net` (published-backward, page nets-and-filters)

Title: Directed preorders and nets

- If $X$ is the underlying set of a topological space ([[def-topological-space]]), a **net in $X$** indexed by $D$ is a function $x:D\to X$, written $(x_d)_{d\in D}$. The order on $D$ records which indices are sufficiently far along; it need not be a linear order.

### `def-evaluation-map` (published-backward, page function-space-topologies)

Title: The evaluation map $e : C(X,Y) \\times X \\to Y$, $e(f,x) = f(x)$

- topological space ([[def-topological-space]]), and let $C(X,Y)$ carry the

### `def-g-delta-and-f-sigma-in-a-topological-space` (published-backward, page separation-axioms)

Title: $G_\\delta$ and $F_\\sigma$ subsets of a topological space, agreeing with the real-line notion

- Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
- and each $X \setminus F_n$ is open ([[def-topological-space]]); the converse is

### `def-lindelof-degree-and-cellularity` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, Lindelöf degree $L(X)$ and cellularity $c(X)$ as raw cardinal functions

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `def-locally-compact-metric-space` (published-backward, page function-space-topologies)

Title: Locally compact metric space: every point has a compact neighbourhood

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `def-normal-and-t4-spaces` (published-backward, page separation-axioms)

Title: Normal spaces and $T_4$ spaces, with the source disagreement over whether normality includes $T_1$ stated explicitly

- Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

### `def-order-topology-on-an-ordinal` (published-backward, page separation-axioms)

Title: The order topology on an ordinal, with the half-open intervals $(\\alpha, \\beta]$ and the initial segments $[0, \\beta]$ as a basis

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `def-regular-and-t3-spaces` (published-backward, page separation-axioms)

Title: Regular spaces and $T_3$ spaces, with the source disagreement over whether regularity includes $T_1$ stated explicitly

- Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

### `def-separated-sets` (published-backward, page separation-axioms)

Title: Separated sets: $\\overline{A} \\cap B = A \\cap \\overline{B} = \\varnothing$

- Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let

### `def-t0-and-t1-spaces` (published-backward, page separation-axioms)

Title: $T_0$ (Kolmogorov) and $T_1$ (Frechet) spaces

- Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).
- order of [[def-topological-space]]: if $\mathcal{T}_1 \subseteq \mathcal{T}_2$
- - **No separation is built into the word *space*.** [[def-topological-space]]

### `def-topology-of-pointwise-convergence` (published-backward, page function-space-topologies)

Title: The topology of pointwise convergence on $Y^{X}$, which is the product topology, and its restriction to $C(X,Y)$

- ([[def-topological-space]]). Write

### `def-urysohn-space` (published-backward, page separation-axioms)

Title: Urysohn ($T_{2\\frac{1}{2}}$) space: distinct points have neighbourhoods with disjoint closures

- Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with

### `def-zero-sets-and-cozero-sets` (published-backward, page separation-axioms)

Title: Zero sets and cozero sets of continuous real-valued functions

- Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let

### `ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets` (published-backward, page separation-axioms-examples)

Title: Every nonempty closed subset $A$ of $\\mathbb{R}$ is the zero set of $x \\mapsto d(x, A)$ and the intersection of the open sets $\\{x : d(x,A) < 1/(n+1)\\}$, worked for $[0,1]$ and for $\\{0\\}$

- [L5] Every open set is a $G_\delta$, by the constant sequence; $(0,1)$ is open and is not closed, since $0$ lies in every open interval around it and not in $(0,1)$ ([[def-g-delta-and-f-sigma-in-a-topological-space]], [[lem-real-line-is-a-metric-space]], [[def-topological-space]], [[def-metric-space]]).

### `ex-sierpinski-space-is-t0-normal-and-not-regular` (published-backward, page separation-axioms-examples)

Title: Sierpinski space is $T_0$ and normal but neither $T_1$ nor regular: normality without $T_1$ implies nothing

- [A1] $\mathcal{T}_{\mathrm{Sier}}$ is a topology on $S$ and its members are exactly $\varnothing$, $\{b\}$ and $S$ ([[def-standard-topologies]], [[def-topological-space]]).
- [A2] A set is closed exactly when its complement is open ([[def-topological-space]], [[def-interior-closure-boundary-top]]).

### `ex-the-cocountable-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The cocountable topology on $\\mathbb{R}$ is $T_1$, has unique sequential limits, and is neither Hausdorff nor regular nor normal

- [A1] $U \in \mathcal{T}_{\mathrm{coc}}$ exactly when $U = \varnothing$ or $\mathbb{R} \setminus U$ is at most countable; the closed sets are $\mathbb{R}$ and the at most countable subsets ([[def-standard-topologies]], [[def-topological-space]], [[def-interior-closure-boundary-top]]).

### `ex-the-cofinite-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The cofinite topology on an infinite set is $T_1$ but neither Hausdorff nor regular nor normal

- [A1] $U \in \mathcal{T}_{\mathrm{cof}}$ exactly when $U = \varnothing$ or $X \setminus U$ is finite; the closed sets are $X$ and the finite subsets of $X$; and a union of two finite sets is finite ([[def-standard-topologies]], facts (i) and (ii) of that item, [[def-topological-space]]).
- [L4] A set is closed exactly when its complement is open ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

### `ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy` (published-backward, page separation-axioms-examples)

Title: A discrete space satisfies every axiom in the chain; an indiscrete space with two points is regular, completely regular, normal, completely normal and perfectly normal, and fails $T_0$

- [A1] In $(X,\mathcal{T}_{\mathrm{disc}})$ every subset is open and every subset is closed ([[def-standard-topologies]], [[def-topological-space]]).
- [A2] In $(Y,\mathcal{T}_{\mathrm{ind}})$ the open sets are $\varnothing$ and $Y$, and so are the closed sets ([[def-standard-topologies]], [[def-topological-space]]).

### `ex-the-ordinal-spaces-omega-plus-one-and-omega-one` (published-backward, page separation-axioms-examples)

Title: $\\omega + 1$ as a convergent sequence together with its limit, and, assuming countable choice, $[0, \\omega_1)$, in which every sequence lies inside an at most countable initial segment

- [A1] The basic open sets of an ordinal $\gamma$ are $[0,\beta]$ for $\beta \in \gamma$ and $(\alpha,\beta]$ for $\alpha < \beta$ in $\gamma$; they form a basis ([[def-order-topology-on-an-ordinal]], [[def-topological-space]]).

### `ex-the-particular-point-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The particular-point topology is $T_0$ and not $T_1$, it is not regular once the set has at least two points, and it is not normal once the set has at least three

- [A1] $U \in \mathcal{T}_p$ exactly when $U = \varnothing$ or $p \in U$; the closed sets are $X$ and the subsets not containing $p$ ([[def-standard-topologies]], [[def-topological-space]]).

### `fs-every-hausdorff-space-is-regular` (published-backward, page separation-axioms)

Title: FALSE: every Hausdorff space is regular

- [A1] A space is regular when for every closed $C$ and every point $x \notin C$ there are disjoint open $U \ni x$ and $V \supseteq C$ ([[def-regular-and-t3-spaces]], [[def-topological-space]]).

### `fs-every-normal-space-is-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: every normal space is Hausdorff, so the $T_1$ hypothesis in $T_4$ is redundant

- [L1] The closed sets of $\mathcal{T}_{\mathrm{ind}}$ are $\varnothing$ and $X$ ([[def-standard-topologies]], [[def-topological-space]]).

### `fs-every-t1-space-is-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: every $T_1$ space is Hausdorff

- [A1] A space is Hausdorff when any two distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]], [[def-topological-space]]).

### `fs-the-compact-open-topology-is-always-metrizable` (published-backward, page function-space-topologies)

Title: FALSE: the compact-open topology on $C(X,Y)$ is metrizable for every metric $X$ and $Y$

- [L2] A map out of a space in which every subset is open is continuous, every preimage being open ([[def-continuous-map-top]], [[def-standard-topologies]], [[def-topological-space]]).

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L7] Continuity of a map at a point, in the open-set form, and the fact that the boxes $O \times U$ with $O$ open in $C(\mathbb{Q},\mathbb{R})$ and $U$ open in $\mathbb{Q}$ form a basis for the product topology, while the finite intersections of the sets $S(K,W)$ form a basis for the compact-open topology ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]], [[def-product-topology]], [[def-compact-open-topology]], [[def-topology-basis-subbasis]], [[thm-basis-criterion]], [[def-topological-space]]).

### `fs-unique-sequential-limits-imply-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: a space in which every sequence has at most one limit is Hausdorff

- [A3] A space is Hausdorff when distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]], [[def-topological-space]]).

### `lem-normality-via-shrinking` (published-backward, page separation-axioms)

Title: A space is normal if and only if every closed $A$ inside an open $U$ admits an open $V$ with $A \\subseteq V \\subseteq \\overline{V} \\subseteq U$

- Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
- [L2] A set is closed exactly when its complement is open, and complementation reverses inclusion ([[def-topological-space]]).

### `lem-ordinal-order-topology-is-t3` (published-backward, page separation-axioms)

Title: Every ordinal with its order topology has a basis of clopen sets, and is $T_1$, Hausdorff and regular

- ([[def-topological-space]]), so $\gamma$ has a basis of clopen sets.
- [L2] A set is open exactly when each of its points lies in a basic set inside it; a set is closed exactly when its complement is open; a union of open sets is open ([[def-topology-basis-subbasis]], [[def-topological-space]]).

### `lem-regularity-via-closed-neighbourhoods` (published-backward, page separation-axioms)

Title: A space is regular if and only if every point has a neighbourhood base of closed neighbourhoods, if and only if $x \\in U$ open gives an open $V$ with $x \\in V \\subseteq \\overline{V} \\subseteq U$

- Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
- [L4] A set is closed exactly when its complement is open ([[def-topological-space]]).

### `lem-the-k-topology-is-hausdorff-and-not-regular` (published-backward, page separation-axioms)

Title: The $K$-topology on $\\mathbb{R}$, generated by the open intervals together with their complements of $K = \\{1/(n+1) : n \\in \\mathbb{N}\\}$, is $T_1$ and Hausdorff but not regular

- [L7] A set is closed exactly when its complement is open, and an arbitrary union of open sets is open ([[def-topological-space]]).

### `lem-tube-lemma-for-a-compact-metric-factor` (published-backward, page function-space-topologies)

Title: Tube lemma: if $K$ is a compact subset of a metric space $X$, $Z$ is a topological space and $N$ is open in $X \\times Z$ with $K \\times \\{z_0\\} \\subseteq N$, then $K \\times W \\subseteq N$ for some open $W \\ni z_0$

- a topological space ([[def-topological-space]]), and give $X \times Z$ the
- [L3] $Z$ is open in $Z$, and an intersection of finitely many open subsets of $Z$ is open ([[def-topological-space]], axioms (T1) and (T3) iterated).

### `lem-urysohn-sits-between-hausdorff-and-regular-plus-t1` (published-backward, page separation-axioms)

Title: Every Urysohn space is Hausdorff, every Hausdorff space is $T_1$ and hence $T_0$, and every regular $T_1$ space is Urysohn

- Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]). Then:
- [L3] $A \subseteq \overline{A}$ for every $A \subseteq X$, and a set is closed exactly when its complement is open ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

### `rem-function-space-conventions` (published-backward, page function-space-topologies)

Title: Standing hypotheses on this page: a metric domain, where the target must be metric, and why the compact-open topology is built from metric compactness

- space ([[def-topological-space]]). The uniform metric

### `thm-comparison-of-the-three-function-space-topologies` (published-backward, page function-space-topologies)

Title: On $C(X,Y)$ with $X$ and $Y$ metric, uniform convergence is finer than compact convergence, which is finer than pointwise convergence

- than pointwise convergence ([[def-topological-space]] for *finer*). The middle

### `thm-completely-normal-implies-normal` (published-backward, page separation-axioms)

Title: Every completely normal space is normal, and every perfectly normal space is normal

- Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

### `thm-completely-regular-implies-regular` (published-backward, page separation-axioms)

Title: Every completely regular space is regular, and every Tychonoff space is $T_3$

- Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]). If $X$

### `thm-evaluation-is-continuous-on-a-locally-compact-metric-domain` (published-backward, page function-space-topologies)

Title: If $X$ is a locally compact metric space then the evaluation map is continuous for the compact-open topology

- $(Y,\mathcal{T}_Y)$ be a topological space ([[def-topological-space]]), and give

### `thm-exponential-correspondence-is-continuous` (published-backward, page function-space-topologies)

Title: If $f : X \\times Z \\to Y$ is continuous then its transpose $F : Z \\to C(X,Y)$, $F(z)(x) = f(x,z)$, is continuous for the compact-open topology, with no hypothesis on $X$ beyond being metric

- topological spaces ([[def-topological-space]]), and let
- [L3] A constant map into a topological space is continuous, the preimage of an open set being the whole domain or the empty set, both open ([[thm-continuity-characterisations-top]], clause (b), [[def-topological-space]]).

### `thm-function-space-is-complete-for-a-complete-target` (published-backward, page function-space-topologies)

Title: If $(Y,d)$ is complete then $Y^{X}$ is complete in the uniform metric, and so is $C(X,Y)$

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `thm-metric-spaces-are-completely-normal` (published-backward, page separation-axioms)

Title: In a metric space any two separated sets have disjoint open neighbourhoods, so every metrizable space is completely normal

- [L3] Open balls are open and an arbitrary union of open sets is open; $\varnothing$ and $X$ are open ([[thm-metric-open-set-algebra]], [[def-metric-topology]], [[def-topological-space]]).

### `thm-metric-spaces-are-tychonoff-and-perfectly-normal` (published-backward, page separation-axioms)

Title: In a metric space every closed set is a zero set and a $G_\\delta$, and the distance function separates a point from a closed set, so every metrizable space is Tychonoff and perfectly normal

- [L4] A set is closed exactly when it equals its closure ([[thm-metric-closure-characterisation]], claim 3); $\varnothing$ and $X$ are open ([[def-metric-topology]], [[def-topological-space]]).

### `thm-perfectly-normal-implies-completely-normal` (published-backward, page separation-axioms)

Title: Assuming countable choice, every perfectly normal space is completely normal: separated sets in a normal space whose open sets are all $F_\\sigma$ can be separated by disjoint open sets

- [L2] $\overline{S}$ is closed and contains $S$; a set is closed exactly when it equals its closure; a set is closed exactly when its complement is open ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]], [[def-topological-space]]).
- [L3] A union of finitely many closed sets is closed by iterating (C3), an arbitrary union of open sets is open by (T2), and an intersection of two open sets is open by (T3) ([[def-topological-space]]).

### `thm-t1-iff-singletons-are-closed` (published-backward, page separation-axioms)

Title: A space is $T_1$ if and only if every singleton is closed, if and only if every finite subset is closed, if and only if its topology contains the cofinite topology

- Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
- [L1] A set is closed exactly when its complement is open; $\varnothing$ and $X$ are open and closed; and a union of two closed sets is closed by (C3), hence so is a union of finitely many by iterating (C3) ([[def-topological-space]]).
- - **Clause (d) locates the cofinite topology.** It is the smallest $T_1$ topology on a given set, in the sense of [[def-topological-space]]'s comparison order, and this is why it is the standard witness for a $T_1$ space that fails every stronger separation axiom; the witness is worked on the companion page.

### `thm-t4-implies-t3` (published-backward, page separation-axioms)

Title: A normal $T_1$ space is regular, hence $T_3$, hence Urysohn, Hausdorff, $T_1$ and $T_0$

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `thm-the-exponential-law` (published-backward, page function-space-topologies)

Title: The exponential law: for a locally compact metric $X$ and any spaces $Z$ and $Y$, transposition is a bijection between $C(X \\times Z, Y)$ and $C(Z, C(X,Y))$ with the compact-open topology

- and $Y$ be topological spaces ([[def-topological-space]]). Give $C(X,Y)$ the

### `thm-the-separation-implication-chain` (published-backward, page separation-axioms)

Title: The implications proved on this page: perfectly normal gives completely normal under countable choice, and completely normal gives normal; normal with $T_1$ gives $T_3$; completely regular gives regular; regular with $T_1$ gives Urysohn, hence Hausdorff, hence $T_1$, hence $T_0$; and metrizable gives every one of them

- Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]). The

### `thm-uniform-limit-theorem` (published-backward, page function-space-topologies)

Title: A uniform limit of continuous functions is continuous, so $C(X,Y)$ is closed in $Y^{X}$ under the uniform metric

- Let $(X,\mathcal{T}_X)$ be a topological space ([[def-topological-space]]) and
