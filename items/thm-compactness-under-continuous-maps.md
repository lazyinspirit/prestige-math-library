---
id: thm-compactness-under-continuous-maps
kind: theorem
title: "A continuous image of a compact space is compact; a continuous real-valued map on a nonempty compact space attains a maximum and a minimum; and a continuous bijection from a compact space to a Hausdorff space is a homeomorphism"
status: draft
origin: session
deps: [def-compact-space, lem-compactness-of-a-subspace-is-ambient, def-continuous-map-top, thm-continuity-characterisations-top, def-hausdorff-space, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-closed-subspace-of-a-compact-space-is-compact, lem-homeomorphism-criteria, def-homeomorphism-and-open-maps, def-metrizable-space, lem-real-line-is-a-metric-space, def-metric-topology, def-complete-ordered-field, def-real-order, def-max-min, lem-finite-set-has-max, def-interval, def-subspace-topology-top, def-topological-space, lem-finite-choice]
justified_by: []
aliases: [thm-continuous-image-of-a-compact-space-is-compact-top, thm-extreme-value-top]
landmark: true
short: "continuous images, extreme values, homeomorphism"
proof_strategy: direct
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Extreme value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extreme_value_theorem"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---
## Statement

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces
([[def-topological-space]]), and let $\mathbb{R}$ carry its usual topology, the
metric topology of $d_{\mathbb{R}}(s,t) = |s-t|$
([[lem-real-line-is-a-metric-space]], [[def-metric-topology]],
[[def-metrizable-space]]). Then:

1. **Continuous images.** If $f : X \to Y$ is continuous
   ([[def-continuous-map-top]]) and $(X, \mathcal{T}_X)$ is compact
   ([[def-compact-space]]), then $f[X]$ is a compact subset of $Y$. More
   generally, if $K \subseteq X$ is a compact subset of $X$ then $f[K]$ is a
   compact subset of $Y$.
2. **Extreme values.** If $(X, \mathcal{T}_X)$ is compact and nonempty and
   $g : X \to \mathbb{R}$ is continuous, then $g[X]$ has a maximum and a minimum
   ([[def-max-min]]): there are $x_{\max}, x_{\min} \in X$ with
   $$g(x_{\min}) \;\le\; g(x) \;\le\; g(x_{\max}) \qquad \text{for every } x \in X .$$
3. **Compact to Hausdorff.** If $(X, \mathcal{T}_X)$ is compact, $(Y,
   \mathcal{T}_Y)$ is Hausdorff ([[def-hausdorff-space]]) and $f : X \to Y$ is a
   continuous bijection, then $f$ is a homeomorphism
   ([[def-homeomorphism-and-open-maps]]).

Nonemptiness in claim 2 is a hypothesis and not an oversight: for
$X = \varnothing$ the image is empty and has neither a maximum nor a minimum. **No
choice principle is used**: the one selection made below is over a finite index
set, where [[lem-finite-choice]] is a theorem of ZF.

## Facts & Assumptions

**Given:** Topological spaces $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$, and $\mathbb{R}$ with its usual topology.

[L1] A function is continuous exactly when the preimage of every open set is open ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]], clause (b)).

[L2] A space is compact exactly when every family of open sets with union the space has a finite subfamily with union the space; a subset $A$ is a compact subset when the subspace $(A, \mathcal{T}_A)$ is compact ([[def-compact-space]], [[def-subspace-topology-top]]).

[L3] $A$ is a compact subset of a space $Z$ exactly when for every family $\mathcal{U}$ of open subsets of $Z$ with $A \subseteq \bigcup \mathcal{U}$ there are $n \in \mathbb{N}$ and $U_0, \dots, U_n \in \mathcal{U}$ with $A \subseteq U_0 \cup \dots \cup U_n$, or else $A = \varnothing$ ([[lem-compactness-of-a-subspace-is-ambient]], claim 1).

[L4] A function with domain a natural number all of whose values are nonempty sets has a choice function, and this is a theorem of ZF ([[lem-finite-choice]]).

[L5] For $S \subseteq X$ the restriction $f|_S : S \to Y$ of a continuous $f$ is continuous, since $(f|_S)^{-1}[V] = f^{-1}[V] \cap S$ ([[def-subspace-topology-top]], [[def-continuous-map-top]]).

[L6] $U \subseteq \mathbb{R}$ is open in the usual topology exactly when every $x \in U$ admits a real $r > 0$ with $(x-r, x+r) \subseteq U$ ([[lem-real-line-is-a-metric-space]], claim 3; [[def-interval]], [[def-metric-topology]], [[def-metrizable-space]]).

[L7] Every set of reals listable as $\{a_0, \dots, a_n\}$ with $n \in \mathbb{N}$ has a maximum and a minimum, each of them one of the listed members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L8] The order of $\mathbb{R}$ is a total order: no real satisfies $s < s$, and $s < t$ together with $t \le s$ is impossible ([[def-real-order]], [[def-complete-ordered-field]]).

[L9] A closed subset of a compact space is a compact subset of it ([[thm-closed-subspace-of-a-compact-space-is-compact]], claim 1).

[L10] A compact subset of a Hausdorff space is closed in it ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], claim 3; [[def-hausdorff-space]]).

[L11] A continuous bijection is a homeomorphism if and only if it is a closed map ([[lem-homeomorphism-criteria]], claim 1; [[def-homeomorphism-and-open-maps]]).

## Proof

**Proof technique:** direct.

1.1 For claim 1 assume $(X, \mathcal{T}_X)$ is compact, let $f : X \to Y$ be continuous, and let $\mathcal{U}$ be a family of open subsets of $Y$ with $f[X] \subseteq \bigcup \mathcal{U}$; put $\mathcal{G} := \{\, f^{-1}[U] : U \in \mathcal{U} \,\}$, a family of open subsets of $X$ by [L1], whose union is $X$ because every $x \in X$ has $f(x) \in U$ for some $U \in \mathcal{U}$. [L1, construct]

2.1 If $X = \varnothing$ then $f[X] = \varnothing$ and the second alternative of [L3] holds; otherwise compactness of $X$ applied to $\mathcal{G}$ gives $n \in \mathbb{N}$ and $G_0, \dots, G_n \in \mathcal{G}$ with $X = G_0 \cup \dots \cup G_n$. [L2, step 1.1]

3.1 For each $j \le n$ the set $S_j := \{\, U \in \mathcal{U} : f^{-1}[U] = G_j \,\}$ is nonempty by the definition of $\mathcal{G}$, and $j \mapsto S_j$ is a function with domain the natural number $\sigma(n)$, so a choice function for its values supplies $U_0, \dots, U_n \in \mathcal{U}$ with $f^{-1}[U_j] = G_j$ for every $j \le n$. [L4, step 2.1]

4.1 Every point of $f[X]$ is $f(x)$ for some $x \in X$, and $x$ lies in some $G_j = f^{-1}[U_j]$, so $f(x) \in U_j$; hence $f[X] \subseteq U_0 \cup \dots \cup U_n$, and by [L3] the set $f[X]$ is a compact subset of $Y$. [L3, step 2.1, step 3.1]

5.1 For the second sentence of claim 1 let $K \subseteq X$ be a compact subset, so that the subspace $(K, (\mathcal{T}_X)_K)$ is a compact space by [L2] and $f|_K : K \to Y$ is continuous by [L5]; step 4.1, proved for an arbitrary compact space and an arbitrary continuous map out of it, applies to $f|_K$ and gives that $f|_K[K] = f[K]$ is a compact subset of $Y$. [L2, L5, step 4.1]

5.2 For claim 2 assume $X$ is compact and nonempty and let $g : X \to \mathbb{R}$ be continuous; by step 4.1 the set $S := g[X]$ is a nonempty compact subset of $\mathbb{R}$. Suppose for the moment that $S$ has no maximum; then every $x \in S$ admits $s \in S$ with $x < s$, so the family $\mathcal{R} := \{\, (-\infty, s) : s \in S \,\}$ covers $S$, and its members are open by [L6], since $x < s$ gives $(x - r, x + r) \subseteq (-\infty, s)$ for $r := s - x > 0$. [L6, L8, step 4.1]

6.1 By [L3] there are $n \in \mathbb{N}$ and $s_0, \dots, s_n \in S$ with $S \subseteq (-\infty, s_0) \cup \dots \cup (-\infty, s_n)$; by [L7] the set $\{s_0, \dots, s_n\}$ has a maximum, one of the $s_i$ and hence a member of $S$, so it lies in some $(-\infty, s_j)$, giving that maximum $< s_j$ while $s_j \le$ that maximum, which [L8] forbids. So $S$ has a maximum; the same argument with the rays $(s, \infty)$, open by [L6], and the minimum supplied by [L7] shows that $S$ has a minimum. [L3, L6, L7, L8, step 5.2]

6.2 For claim 3 let $f : X \to Y$ be a continuous bijection with $X$ compact and $Y$ Hausdorff, and let $F \subseteq X$ be closed; then $F$ is a compact subset of $X$ by [L9], so $f[F]$ is a compact subset of $Y$ by step 5.1, and hence closed in $Y$ by [L10]. [L9, L10, step 5.1]

7.1 The maximum and the minimum of $S$ are members of $S = g[X]$, so there are $x_{\max}, x_{\min} \in X$ with $g(x_{\max})$ the maximum and $g(x_{\min})$ the minimum, and then $g(x_{\min}) \le g(x) \le g(x_{\max})$ for every $x \in X$; this is claim 2. [L7, step 6.1]

8.1 Step 6.2 says that $f$ carries closed sets to closed sets, so $f$ is a closed map, and by [L11] a continuous bijection that is closed is a homeomorphism, which is claim 3; claims 1 and 2 were proved at steps 5.1 and 7.1. [L11, step 5.1, step 6.2, step 7.1] ∎

## Remarks

**Claim 2 is the extreme value theorem, and compactness is the whole of it.** No metric, no completeness argument and no sequence appears: the rays $(-\infty, s)$ with $s \in S$ cover a set with no maximum, and a finite subcover of them is impossible because finitely many reals do have a maximum. The metric statement of the same result is [[thm-extreme-value-metric]], proved there for a compact metric space; by [[thm-compactness-agrees-with-metric-compactness]] it is the present claim applied to a metric topology.

**Claim 3 is the reason compactness is worth having when identifying spaces.** Constructing a continuous bijection is usually easy and constructing the inverse explicitly is usually not; claim 3 removes the second task whenever the source is compact and the target is Hausdorff. Both hypotheses are needed: the identity from a set with a finer topology to the same set with a coarser one is a continuous bijection and is not a homeomorphism, and it becomes one under these hypotheses precisely because the finer topology is then compact and the coarser Hausdorff.

**The metric special cases are [[thm-continuous-image-of-a-compact-space-is-compact]] and [[thm-continuous-bijection-from-a-compact-space-has-continuous-inverse]].** Neither is used above; both are the corresponding claim read in a metric topology.