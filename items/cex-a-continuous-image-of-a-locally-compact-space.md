---
id: cex-a-continuous-image-of-a-locally-compact-space
kind: counterexample
title: "Collapsing the set of naturals inside $\\mathbb{R}$ to a point gives a quotient of $\\mathbb{R}$ that is not locally compact at the collapsed point"
status: draft
origin: session
deps: [def-locally-compact-space, def-quotient-topology, thm-quotient-universal-property, def-compact-space, def-continuous-map-top, def-neighbourhood-top, thm-compactness-agrees-with-metric-compactness, thm-heine-borel-rn, def-metrizable-space, lem-real-line-is-a-metric-space, def-metric-topology, def-interval, def-canonical-natural, def-natural-numbers, thm-closed-subspace-of-a-compact-space-is-compact, def-standard-topologies, def-topological-space, def-subspace-topology-top, def-complete-ordered-field, thm-of-archimedean]
justified_by: []
aliases: []
landmark: true
short: "a quotient of a locally compact space"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Locally compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_compact_space"
    - title: "Quotient space (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Quotient_space_(topology)"
pipeline_run: null
---

## Statement refuted

**Refuted:** that a continuous image of a locally compact space is locally
compact ([[def-locally-compact-space]]). Local compactness is not preserved by
continuous maps, and it is not even preserved by quotient maps.

**Witness.** Write $\iota : \mathbb{N} \to \mathbb{R}$ for the canonical natural
([[def-canonical-natural]]) and put $N := \{\, \iota(n) : n \in \mathbb{N} \,\}$,
the set of naturals inside $\mathbb{R}$. Let

$$Y \;:=\; (\mathbb{R} \setminus N) \cup \{N\}, \qquad q : \mathbb{R} \to Y, \quad q(t) := t \ (t \notin N), \quad q(t) := N \ (t \in N),$$

and give $Y$ the quotient topology of $q$ ([[def-quotient-topology]]). Then $q$ is
a continuous surjection, $\mathbb{R}$ is locally compact, and $Y$ is **not**
locally compact: the point $\ast := N$ of $Y$ has no compact neighbourhood.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its usual topology, the set $N = \{\iota(n) : n \in \mathbb{N}\}$, the set $Y$, the surjection $q$, and the quotient topology on $Y$.

[L1] A subset $V \subseteq Y$ is open exactly when $q^{-1}[V]$ is open in $\mathbb{R}$; $q$ is continuous; and a set $G \subseteq \mathbb{R}$ with $G \cap N = \varnothing$ satisfies $q^{-1}[q[G]] = G$, while a set $G \supseteq N$ satisfies $q^{-1}[q[G]] = G$ as well ([[def-quotient-topology]], [[thm-quotient-universal-property]], [[def-continuous-map-top]]).

[L2] $U \subseteq \mathbb{R}$ is open exactly when every $x \in U$ has a real $r > 0$ with $(x-r, x+r) \subseteq U$; $\mathbb{R}$ is metrizable and is locally compact, the set $\{t : |t - p| \le 1\}$ being a compact neighbourhood of $p$ ([[lem-real-line-is-a-metric-space]], [[def-metric-topology]], [[def-metrizable-space]], [[def-interval]], [[thm-heine-borel-rn]], [[thm-compactness-agrees-with-metric-compactness]], [[def-locally-compact-space]]).

[L3] Distinct naturals have distinct canonical naturals and $\iota(n+1) = \iota(n) + 1$, so the members of $N$ are spaced at distance at least $1$; and for every real $t$ there is a natural $n$ with $t < \iota(n)$ ([[def-canonical-natural]], [[def-natural-numbers]], [[thm-of-archimedean]], [[def-complete-ordered-field]]).

[L4] A subset $A$ is a compact subset when the subspace it carries is compact; a closed subset of a compact space is a compact subset of it; a space in which every singleton is open is discrete, and an infinite discrete space is not compact, its singletons covering it with no finite subcover ([[def-compact-space]], [[thm-closed-subspace-of-a-compact-space-is-compact]], [[def-standard-topologies]], [[def-subspace-topology-top]], [[def-topological-space]]).

[L5] $A$ is a neighbourhood of $x$ when some open set lies between them ([[def-neighbourhood-top]]).

## Counterexample

**Proof technique:** direct.

1.1 $q$ is a continuous surjection by [L1] and $\mathbb{R}$ is locally compact by [L2], so any failure of local compactness in $Y$ refutes the claim. Suppose $K \subseteq Y$ is a compact neighbourhood of $\ast$, and fix an open $O$ of $Y$ with $\ast \in O \subseteq K$; then $G := q^{-1}[O]$ is open in $\mathbb{R}$ and contains $N$. [L1, L2, L5, construct]

2.1 For $n \in \mathbb{N}$ put $\rho_n := \tfrac12 \sup \{\, r \in \mathbb{R} : 0 < r < \tfrac12 \text{ and } (\iota(n)-r, \iota(n)+r) \subseteq G \,\}$, a supremum of a nonempty set of reals bounded above by $\tfrac12$, so $0 < \rho_n < \tfrac12$ and $(\iota(n) - \rho_n, \iota(n)+\rho_n) \subseteq G$; nothing is selected, the supremum being determined by $n$ and $G$. Put $x_n := \iota(n) + \rho_n$, so that $\iota(n) < x_n < \iota(n) + \tfrac12$ and $x_n \in G$. [L2, L3, step 1.1, construct]

3.1 No $x_n$ lies in $N$, since $\iota(n) < x_n < \iota(n)+1 = \iota(n+1)$ and the members of $N$ are the $\iota(m)$; and $x_n \ne x_m$ for $n \ne m$, the two lying in disjoint intervals $(\iota(n), \iota(n)+\tfrac12)$ and $(\iota(m), \iota(m)+\tfrac12)$. So $P := \{\, x_n : n \in \mathbb{N} \,\}$ is an infinite subset of $\mathbb{R} \setminus N$ and $q$ is injective on it. [L3, step 2.1]

4.1 $P$ is closed in $\mathbb{R}$: a real $t$ lies in $[\iota(m), \iota(m)+1)$ for exactly one natural $m$ when $t \ge 0$ by [L3], and in $(-\infty, 0)$ otherwise; the interval $(t - \tfrac14, t + \tfrac14)$ meets at most one of the disjoint intervals $(\iota(n), \iota(n)+\tfrac12)$, hence contains at most one member of $P$, so no real is a limit point of $P$ outside $P$ and the complement of $P$ is open by [L2]. [L2, L3, step 3.1]

4.2 The subspace $q[P]$ is discrete: for each $n$ the interval $I_n := (x_n - \eta_n, x_n + \eta_n)$ with $\eta_n := \tfrac12\min\{\rho_n, \tfrac12\}$ misses $N$, since $\iota(n) < x_n - \eta_n$ and $x_n + \eta_n < \iota(n)+1$, so $q^{-1}[q[I_n]] = I_n$ is open by [L1] and $q[I_n]$ is open in $Y$; and $q[I_n] \cap q[P] = \{q(x_n)\}$, because $I_n$ contains no $x_m$ with $m \ne n$. [L1, L3, step 2.1, step 3.1]

5.1 $q[P]$ is closed in $Y$: its preimage is $P$ by [L1], since $P$ misses $N$, and the preimage of the complement of $q[P]$ is the complement of $P$, which is open by step 4.1, so $q[P]$ is closed by [L1]. Moreover $q[P] \subseteq q[G] = O \subseteq K$, so $q[P]$ is a closed subset of the compact $K$ and hence a compact subset of $Y$ by [L4]. [L1, L4, step 1.1, step 2.1, step 4.1]

6.1 So $q[P]$ is an infinite discrete compact space, which [L4] forbids: its singletons form an open cover with no finite subcover. Hence $\ast$ has no compact neighbourhood in $Y$, the space $Y$ is not locally compact, and the claim that a continuous image of a locally compact space is locally compact is refuted. [L4, step 1.1, step 5.1, step 4.2] ∎

## Remarks

**Collapsing a compact set would not work, and that is the point.** If $E$ is a *compact* subset of a locally compact Hausdorff space, the quotient collapsing $E$ to a point is again locally compact at the collapsed point: claim 4 of [[thm-locally-compact-hausdorff-basics]] gives an open $V \supseteq E$ with $\overline{V}$ compact, the saturation of $V$ is $V$ itself, so its image is open and lies inside the compact image of $\overline{V}$. So a convergent sequence together with its limit is the wrong set to collapse; what is needed is an infinite **closed discrete** set, and $N$ is the simplest one.

**What the failure looks like.** Every open set of $Y$ containing $\ast$ pulls back to an open set containing all of $N$, hence containing an interval around each $\iota(n)$; the points $x_n$ chosen just to the right of each $\iota(n)$ then form a closed discrete infinite set inside it, and no compact set can contain such a thing. There is no way to make the neighbourhood small, because it must be large near infinitely many separated places at once.

**Compactness behaves differently.** A continuous image of a compact space is compact ([[thm-compactness-under-continuous-maps]], claim 1); it is only the *local* condition that fails to survive, and it fails because "locally" is a statement about each point separately and a quotient can glue infinitely many points together.

**Quotient maps are the natural place to look.** A quotient map is a continuous surjection, so this also refutes the same claim for continuous surjections; and since $q$ here is a closed map with one non-singleton fibre, no weakening of the hypothesis short of compactness of the fibres will restore the conclusion.
