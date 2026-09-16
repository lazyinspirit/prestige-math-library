---
id: thm-compact-hausdorff-baire-implies-dmc
kind: theorem
title: "Compact Hausdorff Baire implies DMC"
status: draft
origin: pipeline
deps: [def-dependent-multiple-choice-finite-level-tree, def-compact-space, def-baire-space, def-hausdorff-space, def-standard-topologies, def-locally-compact-space, def-one-point-compactification, thm-one-point-compactification-properties, def-product-topology, lem-products-preserve-t0-t1-and-hausdorff, lem-t0-t1-and-hausdorff-are-hereditary, def-subspace-topology-top, thm-compact-iff-fip, def-finite-intersection-property, thm-dmc-tree-and-successor-menu-formulations, def-natural-numbers, def-interior-closure-boundary-top, def-topological-space, def-hereditary-property, thm-subset-of-a-finite-set]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "David H. Fremlin, Dependent multiple choice and Baire's theorem (following Fossy and Morillon)"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/n04j06.ps"
      locator: "Proposition 2 and Theorem 4, printed pp. 1-3"
---

## Statement

Over $\mathrm{ZF}$, if every compact Hausdorff space is a Baire space, then DMC
holds ([[def-dependent-multiple-choice-finite-level-tree]]).

The proof follows the dichotomy of Fossy and Morillon, in the form given by
Fremlin: for a pruned tree $T$ one forms the product of the one-point
compactifications of $T$ and considers the closed set $K$ of weakly increasing
points. If $K$ is compact, Baireness of a compact Hausdorff space produces a
branch of $T$; if $K$ is not compact, compactness failure of $K$ produces, by way
of the finite-intersection property, finite levels of a subtree of $T$.

## Facts & Assumptions

**Given:** The hypothesis that every compact Hausdorff space is Baire; a pruned tree $T$ of height $\omega$ on a set $A$ whose levels are nonempty.

[F1] DMC in tree form is equivalent over $\mathrm{ZF}$ to DMC in successor-menu form, so proving the tree form suffices ([[thm-dmc-tree-and-successor-menu-formulations]], [[def-dependent-multiple-choice-finite-level-tree]]).

[F2] The one-point compactification $X^{*} = X \cup \{\infty\}$ of a space $X$ is compact and contains $X$ as an open subspace, and $X$ is dense in $X^{*}$ exactly when $X$ is not compact ([[def-one-point-compactification]], [[thm-one-point-compactification-properties]]).

[F3] A discrete space is locally compact and Hausdorff, and a product of Hausdorff spaces is Hausdorff; both properties are hereditary to subspaces ([[def-standard-topologies]], [[def-locally-compact-space]], [[lem-products-preserve-t0-t1-and-hausdorff]], [[lem-t0-t1-and-hausdorff-are-hereditary]], [[def-hereditary-property]]).

[F4] A space is compact if and only if every family of closed subsets with the finite intersection property has nonempty intersection ([[thm-compact-iff-fip]], [[def-finite-intersection-property]]).

[L1] Baireness: the intersection of every sequence of dense open sets is dense ([[def-baire-space]]); a subset of a compact space is closed exactly when its complement is open, and closed subspaces with the subspace topology are what the hypothesis applies to ([[def-subspace-topology-top]], [[def-compact-space]]).

[L2] Nodes of $T$ are functions on a natural number, an extension of a node of length $n$ of length $n+1$ is unique, and the levels $T_n$ are the nodes of length $n$ ([[def-dependent-multiple-choice-finite-level-tree]], [[def-natural-numbers]]).

## Proof

**Proof technique:** direct.

1.1 Assume every compact Hausdorff space is Baire, let $T$ be a pruned tree of height $\omega$ with nonempty levels on a set $A$, and let $\infty$ be a point outside $T$; it suffices by [F1] to produce a subtree of $T$ with nonempty finite levels. [given, F1]

2.1 Give $T$ the discrete topology and let $T^{*} := T \cup \{\infty\}$ be its one-point compactification; by [F3] the discrete $T$ is locally compact Hausdorff, so $T^{*}$ is compact Hausdorff by [F2], and it is nonempty because $\infty \in T^{*}$. [step 1.1, F2, F3]

3.1 Let $X := (T^{*})^{\omega}$ with the product topology; by [F3] $X$ is Hausdorff, and $X$ is nonempty because every factor is. [step 2.1, F3]

4.1 Let $K \subseteq X$ be the set of those $x$ with: for all $m < n$, either $x(m) = \infty$, or $x(n) = \infty$, or $x(m), x(n) \in T$ and $x(m)$ is a proper initial segment of $x(n)$. [step 3.1, L2]

5.1 $K$ is closed in $X$: its complement is the union, over all $m<n$ and all pairs $s,t \in T$ with $s$ not an initial segment of $t$, of the basic open sets $\{x : x(m) = s,\ x(n) = t\}$, together with the sets $\{x : x(m) = s, x(n) = t\}$ for $s,t \in T$ equal-but-not-required, that is the union of cylinders over two coordinates, each of which is open because $T$ is discrete; a union of open sets is open by the definition of the product topology. Hence $K$ is a closed subspace of the Hausdorff space $X$, so $K$ is Hausdorff by [F3]; it is nonempty because the constant sequence with value $\infty$ lies in $K$. [step 3.1, step 4.1, F3, L2]

5.2 For $n \in \mathbb{N}$ put $G_n := \{\, x \in K : x(i) \ne \infty \text{ for some } i \ge n \,\}$, a subset of $K$. [step 4.1]

6.1 Each $G_n$ is open in $K$: it is the union over $i \ge n$ and $t \in T$ of the sets $K \cap \{x : x(i) = t\}$, and each $\{x : x(i) = t\}$ is a basic open set of the product because $\{t\}$ is open in the discrete space $T$. [step 5.2, step 2.1, L2]

6.2 Case B: $K$ is not compact. Then by [F4] there is a family $\mathcal{E}$ of closed subsets of $K$ with the finite intersection property and empty intersection; enlarging it by all finite intersections and adding $K$ and all sets of the form $X \setminus \{x : x(m) = s,\ x(n) = t\}$ for $m<n$, $s,t \in T$ with $s$ not an initial segment of $t$, produces a downwards directed family of nonempty closed subsets of $X$ with empty intersection. [step 4.1, step 5.1, F4]

7.1 Each $G_n$ is dense in $K$: let $N$ be a nonempty relatively open subset of $K$, so $N = K \cap W$ for a basic open $W$ of the product fixing the values of finitely many coordinates, say at indices in a finite set $J$; choose $u \in K \cap W$. If $u(i) \ne \infty$ for some $i \ge n$ then $u \in N \cap G_n$ and we are done. Otherwise every non-$\infty$ value of $u$ occurs at an index $< n$; let $t$ be a value of $u$ of maximal length among those, or the empty node if $u$ has no non-$\infty$ value. Choose $N_1 \ge n$ larger than every index in $J$ and larger than $n$, and let $s \in T$ be an extension of $t$ of length at least $N_1$, which exists because $T$ is pruned and closed under initial segments. Define $y$ by: $y(i) := u(i)$ for $i \in J$; $y(i) := \infty$ if $i \notin J$ and $i > N_1$; $y(N_1) := s$; and $y(i) := \infty$ if $i \notin J$ and $i < N_1$. Then $y \in K \cap W$, because the only non-$\infty$ values are the values of $u$ at indices in $J$ together with $s$ at $N_1$, all of which are comparable by the maximality of $t$ and the choice of $s$; and $y(N_1) = s \ne \infty$ with $N_1 \ge n$ gives $y \in G_n$. [step 5.2, step 6.1, L2]

7.2 In case B, construct families $\mathcal{E}_n$ of closed subsets of $X$ by $\mathcal{E}_0 := \mathcal{E}$ and: if $\infty \in \pi_n[E]$ for every $E \in \mathcal{E}_n$, let $\mathcal{E}_{n+1}$ be $\mathcal{E}_n$ together with $E \cap \pi_n^{-1}[\{\infty\}]$ for $E \in \mathcal{E}_n$, and otherwise let $\mathcal{E}_{n+1} := \mathcal{E}_n$; here $\pi_n$ is the $n$-th projection. Each $\mathcal{E}_n$ is downwards directed with finite intersection property and empty intersection, and by induction every member of $\mathcal{E}_n$ lies in the algebra generated by the coordinate sets $\pi_i^{-1}[\{t\}]$, $i \in \mathbb{N}$, $t \in T$, together with the sets $\pi_i^{-1}[\{\infty\}]$ for $i < n$. [step 6.2]

8.1 Case A: $K$ is compact. Then $K$ is a compact Hausdorff space, so by the hypothesis assumed in step 1.1 it is Baire, and by step 6.1 and step 7.1 the sets $G_n$ are dense open, so their intersection is dense and in particular nonempty; fix $x \in \bigcap_n G_n$. Let $D := \{\, i \in \mathbb{N} : x(i) \ne \infty \,\}$. [step 1.1, step 5.1, step 7.1, L1]

8.2 In case B, for $n \in \mathbb{N}$ let $D := \{\, n : \pi_n^{-1}[\{\infty\}] \notin \mathcal{E}^{*} \,\}$ where $\mathcal{E}^{*}$ is the union of the families $\mathcal{E}_n$; for $n \in D$ the projection $\pi_n[E]$ of a member $E$ of $\mathcal{E}_n$ does not contain $\infty$, and by step 7.2 it is a closed subset of $T^{*}$ inside $T$, hence finite because the discrete space $T$ is compact only when finite; consequently $F_n := \bigcap \{\, \pi_n[E] : E \in \mathcal{E}^{*} \,\}$ is a nonempty finite subset of $T$, and some member of $\mathcal{E}^{*}$ projects onto it. [step 7.2, F2, L2]

9.1 In case A, $D$ is infinite: for each $n$ the membership $x \in G_n$ gives some $i \ge n$ with $x(i) \ne \infty$, so $D$ contains arbitrarily large naturals and is therefore infinite. [step 8.1, step 7.1]

9.2 In case B, $D$ is infinite: otherwise the finite union $\bigcup_{n \in D} F_n$ is finite, and one may enlarge $\mathcal{E}^{*}$ by adjoining, for each $n \in D$, the set $\pi_n^{-1}[\{s_n\}]$ for a chosen $s_n \in F_n$, together with all finite intersections; the resulting family is still downwards directed with empty intersection, and the point $z$ with $z(n) = s_n$ for $n \in D$ and $z(n) = \infty$ otherwise lies in the closure of every member, hence in every member because they are closed, contradicting empty intersection. [step 8.2, F4]

9.3 In case B, for $m < n$ in $D$ and $s \in F_m$ there is $t \in F_n$ with $s$ an initial segment of $t$: otherwise, for every $t \in F_n$ the complement $X \setminus \{x : x(m) = s,\ x(n) = t\}$ belongs to $\mathcal{E}^{*}$, and since some $E \in \mathcal{E}^{*}$ projects onto $F_n$ and $s \in F_m = \bigcap\{\pi_m[E'] : E' \in \mathcal{E}^{*}\}$, a point of $E$ with $m$-th coordinate $s$ would have $n$-th coordinate in $F_n$ and hence outside $F_n$, a contradiction. [step 8.2, step 6.2, F4]

10.1 In case A, the values $x(i)$ for $i \in D$ form a chain in $T$ under initial segment, strictly increasing in length, by the definition of $K$ in step 4.1 since no two of them are $\infty$. [step 4.1, step 9.1]

10.2 In case B, enumerate $D$ increasingly as $m_0 < m_1 < \cdots$ and put $F'_0 := F_{m_0}$, $F'_{i+1} := \{\, t \in F_{m_{i+1}} : s \text{ an initial segment of } t \text{ for some } s \in F'_i \,\}$. Then each $F'_i$ is nonempty finite and every $s \in F'_i$ has an extension in $F'_{i+1}$, while every $t \in F'_{i+1}$ has a predecessor in $F'_i$; and if $T'$ is the set of all initial segments of nodes in $\bigcup_i F'_i$, then $T'$ is a subtree of $T$ whose level $m$ is contained in the union of the finitely many finite sets $F'_i$ with $i \le m$, hence is finite, and is nonempty for every $m$ by iterating the extension property. [step 9.2, step 9.3, L2]

11.1 In case A, let $T'$ be the set of all initial segments of the nodes $x(i)$, $i \in D$. Then $T'$ is a subtree of $T$: it is contained in $T$ because $T$ is closed under initial segments, and it is closed under initial segments by construction. Its level $m$ consists of the initial segments of length $m$ of the nodes $x(i)$ with $i \in D$; for $i \le j$ in $D$ the nodes $x(i), x(j)$ are comparable and $x(i)$ is an initial segment of $x(j)$, so all nodes $x(i)$ with length at least $m$ have the same initial segment of length $m$, and this common node is unique; since lengths in $D$ are unbounded there is such an $i$, so level $m$ of $T'$ is a singleton. Hence $T'$ has nonempty finite levels, as required. [step 10.1, L2]

12.1 In either case the pruned tree $T$ has a subtree with nonempty finite levels: case A by step 11.1, case B by step 10.2. This is the tree form of DMC, so by [F1] DMC in successor-menu form holds, and since $T$ was an arbitrary pruned tree with nonempty levels, the hypothesis that every compact Hausdorff space is Baire implies DMC. [step 11.1, step 10.2, F1] ∎

## Remarks

- **What compactness of $K$ is used for, and what happens without it.** In case A the hypothesis of the theorem is applied to $K$ itself, so $K$ must be compact; in case B the failure of compactness is converted into a family of closed sets with empty intersection, which is the exact form the finite-intersection characterisation of compactness provides.

- **The dichotomy is exhaustive and no choice is used in it.** The only existential instantiation is in case A, where the assumed Baireness of the compact Hausdorff space $K$ supplies one point of the intersection of the dense open sets $G_n$; the recursive construction of the families $\mathcal{E}_n$ in case B is a definition by recursion on $\mathbb{N}$ and the sets $F'_i$ are defined, not selected.
