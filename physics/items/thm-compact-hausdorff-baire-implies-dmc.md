---
id: thm-compact-hausdorff-baire-implies-dmc
kind: theorem
title: "Compact Hausdorff Baire implies DMC"
status: published
origin: pipeline
deps: [def-dependent-multiple-choice-finite-level-tree, def-compact-space, def-baire-space, def-hausdorff-space, def-standard-topologies, def-locally-compact-space, def-one-point-compactification, thm-one-point-compactification-properties, def-product-topology, lem-products-preserve-t0-t1-and-hausdorff, lem-t0-t1-and-hausdorff-are-hereditary, def-subspace-topology-top, thm-compact-iff-fip, def-finite-intersection-property, thm-dmc-tree-and-successor-menu-formulations, def-natural-numbers, def-interior-closure-boundary-top, def-topological-space, def-hereditary-property, thm-subset-of-a-finite-set, lem-finite-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
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

[F2] The one-point compactification $X^{*} = X \cup \{\infty\}$ of a space $X$ is compact and contains $X$ as an open subspace, is Hausdorff when $X$ is locally compact Hausdorff, and $X$ is dense in $X^{*}$ exactly when $X$ is not compact ([[def-one-point-compactification]], [[thm-one-point-compactification-properties]]).

[F3] A discrete space is locally compact and Hausdorff, and a product of Hausdorff spaces is Hausdorff; Hausdorffness is hereditary to subspaces ([[def-standard-topologies]], [[def-locally-compact-space]], [[lem-products-preserve-t0-t1-and-hausdorff]], [[lem-t0-t1-and-hausdorff-are-hereditary]], [[def-hereditary-property]]).

[F4] A space is compact if and only if every family of closed subsets with the finite intersection property has nonempty intersection ([[thm-compact-iff-fip]], [[def-finite-intersection-property]]).

[L1] Baireness: the intersection of every sequence of dense open sets is dense ([[def-baire-space]]); a subset of a compact space is closed exactly when its complement is open, and closed subspaces with the subspace topology are what the hypothesis applies to ([[def-subspace-topology-top]], [[def-compact-space]]).

[L2] Nodes of $T$ are functions on a natural number, a node may have many immediate successors, but each node of length $n+1$ has the unique length-$n$ predecessor obtained by restriction, and the levels $T_n$ are the nodes of length $n$ ([[def-dependent-multiple-choice-finite-level-tree]], [[def-natural-numbers]]).

[F5] Finite choices are available in ZF: fix a listing of the particular finite index set and apply [[lem-finite-choice]]; no family of such listings is selected. Subsets of finite sets are finite ([[thm-subset-of-a-finite-set]]).

## Proof

**Proof technique:** direct.

1.1 Assume every compact Hausdorff space is Baire, let $T$ be a pruned tree of height $\omega$ with nonempty levels on a set $A$, and let $\infty$ be a point outside $T$; it suffices by [F1] to produce a subtree of $T$ with nonempty finite levels. [given, F1]

2.1 Give $T$ the discrete topology and let $T^{*} := T \cup \{\infty\}$ be its one-point compactification; by [F3] the discrete $T$ is locally compact Hausdorff, so $T^{*}$ is compact Hausdorff by [F2], and it is nonempty because $\infty \in T^{*}$. In the discrete space a compact subset is finite: its singleton cover has a finite subcover. Conversely finite subsets are compact by finite choices from a cover. Thus the neighbourhoods of $\infty$ are exactly the complements of finite subsets of $T$. [step 1.1, F2, F3]

3.1 Let $X := (T^{*})^{\omega}$ with the product topology; by [F3] $X$ is Hausdorff, and $X$ is nonempty because the constant-$\infty$ function is a member. [step 2.1, F3]

4.1 Let $K \subseteq X$ be the set of those $x$ with: for all $m < n$, either $x(m) = \infty$, or $x(n) = \infty$, or $x(m), x(n) \in T$ and $x(m)$ is a proper initial segment of $x(n)$. [step 3.1, L2]

5.1 $K$ is closed in $X$: its complement is the union, over $m<n$ and $s,t\in T$ for which $s$ is not a proper initial segment of $t$, of the two-coordinate cylinders $\{x:x(m)=s,\ x(n)=t\}$. Each such cylinder is open because every $s\in T$ is an isolated point of $T^*$, so the complement of $K$ is open. Hence $K$ is a closed subspace of the Hausdorff space $X$, and is Hausdorff by [F3]; it is nonempty because the constant sequence with value $\infty$ lies in $K$. [step 3.1, step 4.1, F3, L2]

5.2 For $n \in \mathbb{N}$ put $G_n := \{\, x \in K : x(i) \ne \infty \text{ for some } i \ge n \,\}$, a subset of $K$. [step 4.1]

6.1 Each $G_n$ is open in $K$: it is the union over $i \ge n$ and $t \in T$ of the sets $K \cap \{x : x(i) = t\}$, and each $\{x : x(i) = t\}$ is a basic open set of the product because $\{t\}$ is open in the discrete space $T$. [step 5.2, step 2.1, L2]

6.2 Case B: $K$ is not compact. Choose an open cover of $K$ with no finite subcover, and refine it by taking all canonical basic product cylinders $W\subseteq X$ whose trace $K\cap W$ is contained in a member of the cover; here the coordinate restrictions in $W$ may be taken to be a singleton $\{t\}$, $t\in T$, or a cofinite neighbourhood of $\infty$. This is still a cover of $K$ with no finite subcover. Let $\mathcal E$ consist of all finite intersections of $X$, the closed cylinder complements $X\setminus W$, and all constraint complements $X\setminus\{x:x(m)=s,\ x(n)=t\}$ for $m<n$ and $s,t\in T$ with $s$ not a proper initial segment of $t$. Every such generator is a closed member of the finite-coordinate cylinder algebra. Every finite intersection is nonempty: choose in $K$ a point outside the finitely many $W$'s, which automatically satisfies every constraint complement. The intersection of all members is empty because the constraint complements cut the intersection down to $K$ and the $W$'s cover $K$. Thus $\mathcal E$ is a downwards-directed family of nonempty closed subsets of $X$, contains $X$ and every constraint complement, has empty intersection, and every member belongs to the finite-coordinate cylinder algebra. [step 4.1, step 5.1, F4]

7.1 Each $G_n$ is dense in $K$: let $N$ be a nonempty relatively open subset of $K$, and choose a basic product-open $W$ with $\varnothing\ne K\cap W\subseteq N$, restricting only the coordinates in a finite set $J$; choose $u \in K \cap W$. If $u(i) \ne \infty$ for some $i \ge n$ then $u \in N \cap G_n$ and we are done. Otherwise every non-$\infty$ value of $u$ occurs at an index $< n$; let $t$ be a value of $u$ of maximal length among those, or the empty node if $u$ has no non-$\infty$ value. Choose $N_1 \ge n$ larger than every index in $J$ and larger than $n$, and let $s \in T$ be a proper extension of $t$ of length at least $N_1$, which exists by finitely iterating pruning and restricting to the required length if needed (choose a length at least $\max(N_1,\operatorname{dom}(t)+1)$). Define $y$ by: $y(i) := u(i)$ for $i \in J$; $y(i) := \infty$ if $i \notin J$ and $i > N_1$; $y(N_1) := s$; and $y(i) := \infty$ if $i \notin J$ and $i < N_1$. Then $y \in K \cap W$, because the only non-$\infty$ values are the values of $u$ at indices in $J$ together with $s$ at $N_1$, all of which are comparable by the maximality of $t$ and the choice of $s$; and $y(N_1) = s \ne \infty$ with $N_1 \ge n$ gives $y \in G_n$. [step 5.2, step 6.1, L2]

7.2 In case B, construct families $\mathcal{E}_n$ of closed subsets of $X$ by $\mathcal{E}_0 := \mathcal{E}$ and: if $\infty \in \pi_n[E]$ for every $E \in \mathcal{E}_n$, let $\mathcal{E}_{n+1}$ be $\mathcal{E}_n$ together with $E \cap \pi_n^{-1}[\{\infty\}]$ for $E \in \mathcal{E}_n$, and otherwise let $\mathcal{E}_{n+1} := \mathcal{E}_n$; here $\pi_n$ is the $n$-th projection. The added sets are nonempty by the condition triggering the first alternative, and downward directedness follows because a lower bound $D\subseteq E\cap E'$ in $\mathcal E_n$ gives the lower bound $D\cap\pi_n^{-1}[\{\infty\}]$ whenever one or both of the two sets carries the new coordinate constraint. Thus each $\mathcal{E}_n$ is downwards directed, consists of nonempty closed sets, and has empty intersection because it contains $\mathcal E$. Inductively every member lies in the finite-coordinate cylinder algebra generated by the sets $\pi_i^{-1}[\{t\}]$, $i \in \mathbb{N}$, $t \in T$, and $\pi_i^{-1}[\{\infty\}]$, $i<n$. For such an $E$, take one finite Boolean expression in the listed generators and let $H\subseteq T$ be the finite set of node labels tested at coordinate $n$. No test $x(n)=\infty$ occurs, since all infinity tests have indices less than $n$. If $x\in E$ and $x(n)\notin H$, replacing only $x(n)$ by $\infty$ preserves every test and hence membership in $E$. Therefore $\infty\notin\pi_n[E]$ implies $\pi_n[E]\subseteq H$, so that projection is finite. This uses no compactness of an infinite or finite product. [step 2.1, step 6.2, F2, F3]

8.1 Case A: $K$ is compact. Then $K$ is a compact Hausdorff space, so by the hypothesis assumed in step 1.1 it is Baire, and by step 6.1 and step 7.1 the sets $G_n$ are dense open, so their intersection is dense and in particular nonempty; fix $x \in \bigcap_n G_n$. Let $D := \{\, i \in \mathbb{N} : x(i) \ne \infty \,\}$. [step 1.1, step 5.1, step 6.1, step 7.1, L1]

8.2 In case B, put $\mathcal E^*:=\bigcup_n\mathcal E_n$ and $D:=\{n:\pi_n^{-1}[\{\infty\}]\notin\mathcal E^*\}$. If $n\in D$, then some $E_0\in\mathcal E_n$ has $\infty\notin\pi_n[E_0]$: otherwise the first alternative in step 7.2, applied also to $X\in\mathcal E_n$, would put $X\cap\pi_n^{-1}[\{\infty\}]=\pi_n^{-1}[\{\infty\}]$ in $\mathcal E_{n+1}$, contrary to $n\in D$. The finite-test argument in step 7.2 makes $\pi_n[E_0]$ finite. Put $F_n:=\bigcap\{\pi_n[E]:E\in\mathcal E^*\}$. Downward directedness makes the projected family finitely intersecting, so its intersection inside the finite set $\pi_n[E_0]$ is nonempty; hence $F_n$ is a nonempty finite subset of $T$. Moreover some $E_n^0\in\mathcal E^*$ satisfies $\pi_n[E_n^0]=F_n$: using [F5] after fixing a listing of the finite set $\pi_n[E_0]\setminus F_n$, for each such $t$ take a member whose projection omits $t$, and take a common lower bound with $E_0$. Its projection is contained in $F_n$, while the definition of $F_n$ gives the reverse inclusion. [step 6.2, step 7.2, F2, F5]

9.1 In case A, $D$ is infinite: for each $n$ the membership $x \in G_n$ gives some $i \ge n$ with $x(i) \ne \infty$, so $D$ contains arbitrarily large naturals and is therefore infinite. [step 8.1, step 7.1]

9.2 In case B, $D$ is infinite. Suppose instead that it is finite. Successively for $n\in D$, one can adjoin a cylinder $\pi_n^{-1}[\{s_n\}]$, $s_n\in F_n$, while preserving the finite-intersection property: at that stage include the member $E_n^0$ from step 8.2, whose $n$-th projection is the finite set $F_n$; if no one of the finitely many cells $\pi_n^{-1}[\{s\}]$, $s\in F_n$, preserved the finite-intersection property, finitely many witnessing failures, obtained using [F5], would have a common lower bound meeting $E_n^0$ but none of those cells, a contradiction. Closing under finite intersections gives a downwards-directed family $\mathcal E_1^*$ of nonempty closed sets which contains $\mathcal E^*$ and the chosen cylinders. Define $z(n):=s_n$ for $n\in D$ and $z(n):=\infty$ otherwise. Every basic neighbourhood of $z$ meets every $E\in\mathcal E_1^*$: intersect $E$ with the finitely many chosen singleton cylinders for its coordinates in $D$ and, for coordinates outside $D$, with the cylinders $\pi_n^{-1}[\{\infty\}]\in\mathcal E^*$. Therefore $z$ lies in the closure of every member, hence in every member because they are closed, contradicting the empty intersection of $\mathcal E^*\subseteq\mathcal E_1^*$. [step 8.2, F5]

9.3 In case B, let $m<n$ lie in $D$ and $s\in F_m$. Then some $t\in F_n$ properly extends $s$. Otherwise every $t\in F_n$ gives a constraint complement $C_t:=X\setminus\{x:x(m)=s,\ x(n)=t\}\in\mathcal E^*$ by step 6.2. Take $E_n^0\in\mathcal E^*$ with $\pi_n[E_n^0]=F_n$ from step 8.2, and use downward directedness and the finiteness of $F_n$ to obtain $E'\in\mathcal E^*$ with $E'\subseteq E_n^0\cap\bigcap_{t\in F_n}C_t$. Since $s\in F_m\subseteq\pi_m[E']$, choose $x\in E'$ with $x(m)=s$. But $x(n)\in\pi_n[E']\subseteq F_n$; taking $t=x(n)$ contradicts $x\in C_t$. [step 6.2, step 8.2]

10.1 In case A, the values $x(i)$ for $i \in D$ form a chain in $T$ under initial segment, strictly increasing in length, by the definition of $K$ in step 4.1 since no two of them are $\infty$. [step 4.1, step 9.1]

10.2 In case B, enumerate $D$ increasingly as $m_0<m_1<\cdots$ and put $F'_0:=F_{m_0}$ and $F'_{i+1}:=\{t\in F_{m_{i+1}}:s\text{ is a proper initial segment of }t\text{ for some }s\in F'_i\}$. By step 9.3, every $s\in F'_i$ has an extension in $F'_{i+1}$; by definition every member of $F'_{i+1}$ has a predecessor in $F'_i$. Thus every $F'_i$ is nonempty finite, and every one of its nodes has length at least $i$. Let $T'$ be the set of all initial segments of nodes in $\bigcup_iF'_i$. It is a subtree and has a node at every level $r$, because any member of $F'_r$ has length at least $r$. Its level $r$ is finite: if $u\in T'$ has length $r$, choose $t\in F'_j$ with $u$ an initial segment of $t$. If $j<r$, extend $t$ through the successive $F'_i$ to a member of $F'_r$; if $j>r$, follow predecessors down to a member of $F'_r$. In either case, because initial segments of the same node are comparable and every member of $F'_r$ has length at least $r$, $u$ is the length-$r$ initial segment of some member of the finite set $F'_r$. Hence the level has at most $|F'_r|$ elements. [step 9.2, step 9.3, L2]

11.1 In case A, let $T'$ be the set of all initial segments of the nodes $x(i)$, $i \in D$. Then $T'$ is a subtree of $T$: it is contained in $T$ because $T$ is closed under initial segments, and it is closed under initial segments by construction. Its level $m$ consists of the initial segments of length $m$ of the nodes $x(i)$ with $i \in D$; for $i \le j$ in $D$ the nodes $x(i), x(j)$ are comparable and $x(i)$ is an initial segment of $x(j)$, so all nodes $x(i)$ with length at least $m$ have the same initial segment of length $m$, and this common node is unique; since lengths in $D$ are unbounded there is such an $i$, so level $m$ of $T'$ is a singleton. Hence $T'$ has nonempty finite levels, as required. [step 10.1, L2]

12.1 In either case the pruned tree $T$ has a subtree with nonempty finite levels: case A by step 11.1, case B by step 10.2. This is the tree form of DMC, so by [F1] DMC in successor-menu form holds, and since $T$ was an arbitrary pruned tree with nonempty levels, the hypothesis that every compact Hausdorff space is Baire implies DMC. [step 11.1, step 10.2, F1] ∎

## Remarks

- **What compactness of $K$ is used for, and what happens without it.** In case A the hypothesis of the theorem is applied to $K$ itself, so $K$ must be compact; in case B the failure of compactness is converted into a family of closed sets with empty intersection, which is the exact form the finite-intersection characterisation of compactness provides.

- **The dichotomy is exhaustive and no choice is used in it.** In case A, the assumed Baireness of the compact Hausdorff space $K$ supplies one point of the intersection of the dense open sets $G_n$; the recursive construction of the families $\mathcal{E}_n$ in case B is a definition by recursion on $\mathbb{N}$ and the sets $F'_i$ are defined, not selected. Case B uses individual existential witnesses and finite choices, never countably many simultaneous selections.
