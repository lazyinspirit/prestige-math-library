# Citation-precision audit — everything that cites `def-standard-topologies`

## The target, as it actually stands on disk

`items/def-standard-topologies.md` — definition — The discrete, indiscrete, cofinite, cocountable, particular-point and Sierpinski topologies

#### Definition

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

## The 25 citing use(s), quoted verbatim from the citing items

### `cex-pseudocompact-noncompact-particular-point-space` (published-backward, page the-topology-of-euclidean-space-examples)

Title: An infinite particular-point space is pseudocompact and not compact

- [L1] The particular-point topology is a topology and has exactly the stated open sets ([[def-standard-topologies]]).

### `def-completely-regular-and-tychonoff-spaces` (published-backward, page separation-axioms)

Title: Completely regular spaces and Tychonoff ($T_{3\\frac{1}{2}}$) spaces

- on a two-point set ([[def-standard-topologies]]) is completely regular, its only

### `def-normal-and-t4-spaces` (published-backward, page separation-axioms)

Title: Normal spaces and $T_4$ spaces, with the source disagreement over whether normality includes $T_1$ stated explicitly

- indiscrete topology on a two-point set ([[def-standard-topologies]]) is normal,

### `def-order-topology-on-an-ordinal` (published-backward, page separation-axioms)

Title: The order topology on an ordinal, with the half-open intervals $(\\alpha, \\beta]$ and the initial segments $[0, \\beta]$ as a basis

- carries the discrete topology ([[def-standard-topologies]]).

### `def-regular-and-t3-spaces` (published-backward, page separation-axioms)

Title: Regular spaces and $T_3$ spaces, with the source disagreement over whether regularity includes $T_1$ stated explicitly

- ([[def-standard-topologies]]), and the cofinite topology on an infinite set is

### `def-t0-and-t1-spaces` (published-backward, page separation-axioms)

Title: $T_0$ (Kolmogorov) and $T_1$ (Frechet) spaces

- $(\{a,b\}, \{\varnothing, \{b\}, \{a,b\}\})$ of [[def-standard-topologies]] the

### `ex-cardinal-functions-of-a-one-point-compactification` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: The one-point compactification of the discrete real line is compact and Lindelöf but is neither first countable nor separable

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `ex-cardinal-functions-of-an-uncountable-discrete-space` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: Under choice, for an infinite discrete space of cardinality $\\kappa$, $w=d=L=c=\\kappa$ while $\\chi=1$

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `ex-cocountable-closure-detected-by-a-net-not-a-sequence` (published-backward, page nets-and-filters-examples)

Title: In the cocountable topology on $\\mathbb{R}$, a closure point outside $[0,1]$ is reached by a net in $[0,1]$ but by no sequence in $[0,1]$

- [L1] Nonempty cocountable opens have at most countable complements ([[def-standard-topologies]], [[def-countable]]).

### `ex-coordinate-reading-sequence-has-subnets-but-no-convergent-subsequence` (published-backward, page nets-and-filters-examples)

Title: The coordinate-reading sequence in a compact binary cube has a convergent subnet but no convergent subsequence

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `ex-sierpinski-space-is-t0-normal-and-not-regular` (published-backward, page separation-axioms-examples)

Title: Sierpinski space is $T_0$ and normal but neither $T_1$ nor regular: normality without $T_1$ implies nothing

- ([[def-standard-topologies]]), so that $b$ is the open point and $a$ the closed
- [A1] $\mathcal{T}_{\mathrm{Sier}}$ is a topology on $S$ and its members are exactly $\varnothing$, $\{b\}$ and $S$ ([[def-standard-topologies]], [[def-topological-space]]).
- - **Why "the closed point" is the right name for $a$.** $\{a\}$ is closed and $\{b\}$ is not, so the two points of $S$ are not interchangeable even though the set has only two elements; the labelling is fixed once and for all in [[def-standard-topologies]].

### `ex-the-cocountable-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The cocountable topology on $\\mathbb{R}$ is $T_1$, has unique sequential limits, and is neither Hausdorff nor regular nor normal

- ([[def-standard-topologies]]), whose closed sets are $\mathbb{R}$ together with
- [A1] $U \in \mathcal{T}_{\mathrm{coc}}$ exactly when $U = \varnothing$ or $\mathbb{R} \setminus U$ is at most countable; the closed sets are $\mathbb{R}$ and the at most countable subsets ([[def-standard-topologies]], [[def-topological-space]], [[def-interior-closure-boundary-top]]).
- [L3] A union of two at most countable sets is at most countable: this is the two-set instance of [[thm-countable-union-of-countable]] padded with copies of $\varnothing$, and it needs no choice principle, as [[def-standard-topologies]] records.
- - **On an at most countable set the cocountable topology is discrete** ([[def-standard-topologies]]), so the uncountability of $\mathbb{R}$ is doing real work here and not merely supplying a familiar underlying set.

### `ex-the-cofinite-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The cofinite topology on an infinite set is $T_1$ but neither Hausdorff nor regular nor normal

- ([[def-standard-topologies]]), whose closed sets are $X$ together with the finite
- [A1] $U \in \mathcal{T}_{\mathrm{cof}}$ exactly when $U = \varnothing$ or $X \setminus U$ is finite; the closed sets are $X$ and the finite subsets of $X$; and a union of two finite sets is finite ([[def-standard-topologies]], facts (i) and (ii) of that item, [[def-topological-space]]).
- [L3] A set with at most one element is finite, being equinumerous with $0$ or with $1$; so an infinite set has at least three distinct points, since a set with at most two elements is finite as a union of two sets each with at most one ([[def-countable]], [[def-standard-topologies]], fact (ii)).
- - **The hypothesis that $X$ is infinite is necessary.** On a finite set the cofinite topology is the discrete one ([[def-standard-topologies]]), which satisfies every axiom on the main page.

### `ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy` (published-backward, page separation-axioms-examples)

Title: A discrete space satisfies every axiom in the chain; an indiscrete space with two points is regular, completely regular, normal, completely normal and perfectly normal, and fails $T_0$

- $\mathcal{T}_{\mathrm{ind}} = \{\varnothing, Y\}$ ([[def-standard-topologies]]).
- [A1] In $(X,\mathcal{T}_{\mathrm{disc}})$ every subset is open and every subset is closed ([[def-standard-topologies]], [[def-topological-space]]).
- [A2] In $(Y,\mathcal{T}_{\mathrm{ind}})$ the open sets are $\varnothing$ and $Y$, and so are the closed sets ([[def-standard-topologies]], [[def-topological-space]]).
- - **The two extremes bracket the whole page.** Every topology on a set lies between the indiscrete and the discrete one in the comparison order ([[def-standard-topologies]]), and the two ends of that order sit at opposite ends of the separation hierarchy: the discrete topology satisfies everything, the indiscrete topology on two points satisfies every unnumbered adjective and no numbered axiom at all.

### `ex-the-particular-point-topology-in-the-separation-hierarchy` (published-backward, page separation-axioms-examples)

Title: The particular-point topology is $T_0$ and not $T_1$, it is not regular once the set has at least two points, and it is not normal once the set has at least three

- ([[def-standard-topologies]]), whose closed sets are $X$ together with the
- [A1] $U \in \mathcal{T}_p$ exactly when $U = \varnothing$ or $p \in U$; the closed sets are $X$ and the subsets not containing $p$ ([[def-standard-topologies]], [[def-topological-space]]).
- - **Sierpinski space is the case of two points.** With $X = \{p, x\}$ the open sets are $\varnothing$, $\{p\}$ and $X$, which is [[def-standard-topologies]]'s Sierpinski topology with the open point named $p$; so clause 4 genuinely needs its extra hypothesis.

### `fs-every-normal-space-is-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: every normal space is Hausdorff, so the $T_1$ hypothesis in $T_4$ is redundant

- $X = \{a, b\}$ with $a \ne b$ ([[def-standard-topologies]]). It is normal,
- [L1] The closed sets of $\mathcal{T}_{\mathrm{ind}}$ are $\varnothing$ and $X$ ([[def-standard-topologies]], [[def-topological-space]]).

### `fs-every-subnet-of-a-sequence-is-a-subsequence` (published-backward, page nets-and-filters)

Title: FALSE: every subnet of a sequence is a subsequence

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `fs-every-t1-space-is-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: every $T_1$ space is Hausdorff

- $\mathbb{R}$ ([[def-standard-topologies]]), whose open sets are $\varnothing$
- [L1] $\mathcal{T}_{\mathrm{cof}}$ consists of $\varnothing$ together with the sets whose complement is finite; a union of two finite sets is finite ([[def-standard-topologies]], facts (i) and (ii) of that item).

### `fs-first-countable-spaces-are-second-countable` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: every first countable space is second countable

- [L1] Every subset of a discrete space is open ([[def-standard-topologies]]).

### `fs-lindelofness-is-hereditary` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: Lindelöfness is hereditary

- [L3] The real line is uncountable and every subset of a discrete space is open ([[thm-r-uncountable]], [[def-standard-topologies]]).

### `fs-second-countability-is-arbitrarily-productive` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming choice and countable choice, refuted: arbitrary products of second countable spaces are second countable

- [L1] The two-point discrete space is second countable, and the product topology on the family of those factors is the Cantor cube $2^I$ ([[def-standard-topologies]], [[def-product-topology]]).

### `fs-the-compact-open-topology-is-always-metrizable` (published-backward, page function-space-topologies)

Title: FALSE: the compact-open topology on $C(X,Y)$ is metrizable for every metric $X$ and $Y$

- [L2] A map out of a space in which every subset is open is continuous, every preimage being open ([[def-continuous-map-top]], [[def-standard-topologies]], [[def-topological-space]]).

### `fs-unique-sequential-limits-imply-hausdorff` (published-backward, page separation-axioms)

Title: FALSE: a space in which every sequence has at most one limit is Hausdorff

- $\mathbb{R}$ ([[def-standard-topologies]]), whose open sets are $\varnothing$
- [A1] $\mathcal{T}_{\mathrm{coc}}$ consists of $\varnothing$ together with the sets whose complement in $\mathbb{R}$ is at most countable; its closed sets are $\mathbb{R}$ and the at most countable sets ([[def-standard-topologies]]).
- [L2] A union of two at most countable sets is at most countable; this is the two-set instance of [[thm-countable-union-of-countable]], padded with copies of $\varnothing$, and it needs no choice principle, exactly as [[def-standard-topologies]] records for the cocountable topology itself.

### `thm-cantor-cubes-are-ccc` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Under choice, every Cantor cube $2^I$ satisfies ccc

- [F1] A basic cylinder specifies values in only finitely many coordinates, and these cylinders form a basis for the product topology ([[def-product-topology]], [[def-standard-topologies]]).

### `thm-t1-iff-singletons-are-closed` (published-backward, page separation-axioms)

Title: A space is $T_1$ if and only if every singleton is closed, if and only if every finite subset is closed, if and only if its topology contains the cofinite topology

- ([[def-standard-topologies]]). The following four conditions are equivalent.
- [L3] The cofinite topology on $X$ consists of $\varnothing$ together with the sets whose complement in $X$ is finite; its closed sets are $X$ together with the finite subsets of $X$ ([[def-standard-topologies]]).
