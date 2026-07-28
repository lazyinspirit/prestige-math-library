---
id: lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure
kind: lemma
title: "In a locally compact Hausdorff space every open set containing a point contains an open set containing it whose closure is compact and still inside; such a space is regular"
status: draft
origin: session
deps: [def-locally-compact-space, def-compact-space,
       thm-closed-subspace-of-a-compact-space-is-compact,
       thm-compact-subset-of-a-hausdorff-space-is-closed,
       thm-a-compact-hausdorff-space-is-regular-and-normal,
       lem-regularity-via-closed-neighbourhoods, def-regular-and-t3-spaces,
       def-hausdorff-space, def-subspace-topology-top, thm-subspace-closure-and-interior,
       def-interior-closure-boundary-top, def-neighbourhood-top,
       def-topology-basis-subbasis, def-topological-space]
justified_by: []
aliases: [lem-locally-compact-hausdorff-base-of-compact-closures]
landmark: true
short: "locally compact Hausdorff: a base of open sets with compact closure"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Locally compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_compact_space"
    - title: "Regular space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Regular_space"
    - title: "J. Munkres, Topology, 2nd ed., §29"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $X$ be a locally compact ([[def-locally-compact-space]]) Hausdorff
([[def-hausdorff-space]]) space, so that every point of $X$ has a compact
neighbourhood ([[def-neighbourhood-top]], [[def-compact-space]]). Closures are
taken in $X$ unless a subscript names another space
([[def-interior-closure-boundary-top]]). Then:

1. **Shrinking with a compact closure.** For every $x \in X$ and every open
   $U \subseteq X$ with $x \in U$ there is an open $V \subseteq X$ with
   $$x \in V \subseteq \overline{V} \subseteq U$$
   and $\overline{V}$ compact.
2. **A base.** The family of open subsets of $X$ whose closure is compact is a
   basis for the topology of $X$ ([[def-topology-basis-subbasis]]).
3. **Regularity.** $X$ is regular ([[def-regular-and-t3-spaces]]).

Nothing stronger than regularity is claimed: complete regularity of such a space
is a separate statement, needs a continuous real-valued function, and is not
proved here.

## Facts & Assumptions

**Given:** A locally compact Hausdorff space $X$, a point $x \in X$ and an open set $U \subseteq X$ with $x \in U$.

[A1] Every point of $X$ has a compact neighbourhood: for each $x$ there are a compact subset $K \subseteq X$ and an open $O \subseteq X$ with $x \in O \subseteq K$ ([[def-locally-compact-space]], [[def-neighbourhood-top]], [[def-compact-space]]).

[A2] $X$ is Hausdorff: distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]]).

[A3] $\operatorname{int}(K)$ is the largest open subset of $K$, and $\overline{A}$ is the smallest closed superset of $A$ ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

[L1] For $S \subseteq X$ the open sets of the subspace $S$ are the traces $U' \cap S$ of the open sets of $X$; an open subset of $X$ contained in $S$ is open in $S$; and for $S \subseteq T \subseteq X$ the topology $S$ inherits from $T$ is the topology it inherits from $X$ ([[def-subspace-topology-top]]).

[L2] A compact subset of a Hausdorff space is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

[L3] A compact Hausdorff space is regular ([[thm-a-compact-hausdorff-space-is-regular-and-normal]], claim 1).

[L4] A space is regular if and only if for every point $p$ of it and every set $W$ open in it with $p \in W$ there is a set $V$ open in it with $p \in V \subseteq \operatorname{cl}(V) \subseteq W$, the closure being taken in that space ([[lem-regularity-via-closed-neighbourhoods]], (a) iff (b), [[def-regular-and-t3-spaces]]).

[L5] For $S \subseteq X$ and $A \subseteq S$ one has $\operatorname{cl}_S(A) = \overline{A} \cap S$ ([[thm-subspace-closure-and-interior]], claim 1).

[L6] A closed subspace of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]).

[L7] A family of open sets is a basis for the topology exactly when for every open $W$ and every $p \in W$ some member of the family contains $p$ and is contained in $W$ ([[def-topology-basis-subbasis]]).

## Proof

**Proof technique:** direct.

1.1 By [A1] fix a compact $K \subseteq X$ and an open $O \subseteq X$ with $x \in O \subseteq K$; then $O \subseteq \operatorname{int}(K)$ by [A3], so $x \in \operatorname{int}(K)$. [A1, A3, choose]

1.2 The subspace $K$ is Hausdorff: distinct $p, q \in K$ have disjoint open $U_1 \ni p$ and $U_2 \ni q$ in $X$ by [A2], and the traces $U_1 \cap K$ and $U_2 \cap K$ are disjoint open sets of the subspace containing $p$ and $q$ respectively. [A2, L1]

1.3 $K$ is closed in $X$, being a compact subset of the Hausdorff space $X$. [A2, L2]

2.1 The subspace $K$ is compact and Hausdorff, hence regular. [step 1.2, L3]

2.2 Put $G := U \cap \operatorname{int}(K)$; it is open in $X$, contains $x$ by step 1.1, is contained in $K$ by [A3], and is therefore also open in the subspace $K$. [step 1.1, A3, L1]

3.1 Applying [L4] inside the space $K$, which is regular by step 2.1, to the point $x$ and the set $G$ open in $K$, there is a set $V$ open in $K$ with $x \in V \subseteq \operatorname{cl}_K(V) \subseteq G$. [step 2.1, step 2.2, L4, choose]

4.1 $V$ is open in $X$: by [L1] there is an open $V' \subseteq X$ with $V = V' \cap K$, and since $V \subseteq G \subseteq \operatorname{int}(K)$ we get $V = V \cap \operatorname{int}(K) = V' \cap K \cap \operatorname{int}(K) = V' \cap \operatorname{int}(K)$, an intersection of two open subsets of $X$. [step 2.2, step 3.1, L1, A3]

4.2 $\overline{V} = \operatorname{cl}_K(V)$: from $V \subseteq K$ and $K$ closed in $X$ (step 1.3) the smallest closed superset of $V$ satisfies $\overline{V} \subseteq K$, and [L5] gives $\operatorname{cl}_K(V) = \overline{V} \cap K = \overline{V}$. [step 1.3, step 3.1, A3, L5]

5.1 $\overline{V}$ is compact: by step 4.2 it is $\operatorname{cl}_K(V)$, which is closed in the compact subspace $K$ and hence compact by [L6]; and by the transitivity clause of [L1] the topology it inherits from $K$ is the one it inherits from $X$, so it is a compact subset of $X$. [step 4.2, L1, L6]

6.1 Combining, $V$ is open in $X$ by step 4.1, $x \in V \subseteq \overline{V} = \operatorname{cl}_K(V) \subseteq G \subseteq U$ by steps 3.1, 4.2 and 2.2, and $\overline{V}$ is compact by step 5.1; as $x$ and $U$ were arbitrary this is claim 1. [step 2.2, step 3.1, step 4.1, step 4.2, step 5.1]

7.1 The open subsets of $X$ with compact closure are open, and by step 6.1 every open $U$ and every $x \in U$ admit such a set $V$ with $x \in V \subseteq U$; so by [L7] they form a basis for the topology of $X$, which is claim 2. [step 6.1, L7]

7.2 Step 6.1 gives, for every $x$ and every open $U \ni x$, an open $V$ with $x \in V \subseteq \overline{V} \subseteq U$, which is condition (b) of [L4] for the space $X$; hence $X$ is regular, which is claim 3. [step 6.1, L4]

8.1 Steps 6.1, 7.1 and 7.2 are claims 1, 2 and 3, so the lemma is proved. [step 6.1, step 7.1, step 7.2] ∎

## Remarks

- **Which clause of local compactness is used.** Only that every point has a compact neighbourhood, in the weak sense of [[def-locally-compact-space]]: a compact $K$ with $x$ in its interior. The stronger-sounding conclusion, a neighbourhood base of open sets with compact closure, is *derived* from it here, and the Hausdorff hypothesis is what makes the derivation possible — it is used twice, once to make $K$ closed in $X$ and once to make the subspace $K$ regular.

- **Why the argument moves into the subspace $K$ and back out.** Regularity is available inside $K$, because $K$ is compact Hausdorff, and not yet available in $X$ — proving it for $X$ is claim 3. The two transfers back to $X$ are step 4.1, which uses that $V$ sits inside the *open* set $\operatorname{int}(K)$, and step 4.2, which uses that $K$ is *closed*. Neither transfer works without its hypothesis: an open set of a subspace need not be open in the ambient space, and a closure computed in a subspace need not agree with the ambient closure.

- **Compactness of $\overline{V}$, not merely of its closure inside $K$.** Compactness is a property of a space, and $\overline{V}$ carries the same topology whether it is reached through $K$ or directly from $X$ ([[def-subspace-topology-top]]); step 5.1 records that, so no second notion of "compact subset" is created.
