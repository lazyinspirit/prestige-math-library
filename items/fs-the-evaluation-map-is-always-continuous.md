---
id: fs-the-evaluation-map-is-always-continuous
kind: false-statement
title: "FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$"
status: draft
origin: session
deps: [def-evaluation-map, def-compact-open-topology, def-locally-compact-metric-space,
       def-metric-compactness, lem-compactness-is-intrinsic,
       thm-compact-subset-is-closed-and-bounded, lem-distance-to-set-is-lipschitz,
       def-metric-bounded-diameter, def-metric-continuity,
       thm-metric-continuity-characterisations, def-metric-ball, lem-rat-embeds-dense,
       cor-interval-uncountable, thm-rationals-countable, lem-subset-of-countable,
       def-countable, def-interval, lem-real-line-is-a-metric-space,
       def-metrizable-space, def-max-min, lem-finite-set-has-max, def-product-topology,
       def-continuous-map-top, thm-continuity-characterisations-top,
       def-topology-basis-subbasis, thm-basis-criterion, def-metric-topology,
       thm-metric-open-set-algebra, thm-metric-closure-characterisation,
       def-isometry-and-metric-embedding, def-metric-space, def-infimum,
       def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy,
       def-abs-value, def-topological-space,
       thm-evaluation-is-continuous-on-a-locally-compact-metric-domain]
justified_by: []
aliases: []
landmark: false
short: "evaluation is not always continuous"
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Compact-open topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact-open_topology"
    - title: "Locally compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §46"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

**False claim:** for every metric space $X$ and every topological space $Y$ the
evaluation map $e : C(X,Y) \times X \to Y$, $e(f,x) = f(x)$
([[def-evaluation-map]]), is continuous when $C(X,Y)$ carries the compact-open
topology ([[def-compact-open-topology]]).

The witness is $X = \mathbb{Q}$, the rationals inside $\mathbb{R}$ with the
metric $d(s,t) = |s-t|$, and $Y = \mathbb{R}$ with the same metric. The
load-bearing fact is that a compact subset of $\mathbb{Q}$ has empty interior in
$\mathbb{Q}$: it is closed in $\mathbb{R}$, and a subset of $\mathbb{Q}$ closed in
$\mathbb{R}$ that contained a $\mathbb{Q}$-ball would contain a whole real
interval, which is uncountable while $\mathbb{Q}$ is not.

**What the true theorem on this page requires is therefore not decoration.**
Continuity of the evaluation map is proved here under the hypothesis that $X$ is
locally compact ([[def-locally-compact-metric-space]],
[[thm-evaluation-is-continuous-on-a-locally-compact-metric-domain]]), and
$\mathbb{Q}$ is a metric space that is locally compact at no point, exactly
because of the fact just named.

No choice principle is used.

## Facts & Assumptions

**Given:** The rationals $\mathbb{Q}$ inside $\mathbb{R}$ with the metric $d(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]), the target $\mathbb{R}$ with the same metric, the constant function $z : \mathbb{Q} \to \mathbb{R}$ with value $0$, and the open interval $V := (-1,1)$ ([[def-interval]]).

[L1] A compact subset of a metric space is closed in it and bounded; compactness of a subset is a property of the subspace metric alone, so a compact subset of $\mathbb{Q}$ is a compact subset of $\mathbb{R}$ ([[thm-compact-subset-is-closed-and-bounded]], [[def-metric-compactness]], [[lem-compactness-is-intrinsic]], [[def-isometry-and-metric-embedding]]).

[L2] A union of two closed subsets of a metric space is closed, its complement being an intersection of two open sets; iterating covers any finite list, and $\varnothing$ is closed ([[thm-metric-open-set-algebra]], [[def-metric-topology]]).

[L3] Strictly between any two reals lies a rational ([[lem-rat-embeds-dense]]).

[L4] For nonempty $A$ the closure is $\overline{A} = \{\, x : d(x,A) = 0 \,\}$, a closed set equals its closure and contains it, and $d(x,A) \ge 0$ with $d(x,A) \le d(x,a)$ for every $a \in A$; $d(x,A) = 0$ when $x \in A$ ([[thm-metric-closure-characterisation]], [[def-metric-bounded-diameter]], [[def-infimum]]).

[L5] Every nondegenerate open interval of $\mathbb{R}$ is uncountable, $\mathbb{Q}$ is at most countable, and a subset of an at most countable set is at most countable ([[cor-interval-uncountable]], [[thm-rationals-countable]], [[lem-subset-of-countable]], [[def-countable]]).

[L6] For nonempty $A \subseteq \mathbb{Q}$ the map $s \mapsto d(s,A)$ is $1$-Lipschitz, so $s \mapsto c\, d(s,A)$ is Lipschitz with constant $c$ for a real $c > 0$, hence continuous ([[lem-distance-to-set-is-lipschitz]], [[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]], [[def-abs-value]]).

[L7] Continuity of a map at a point, in the open-set form, and the fact that the boxes $O \times U$ with $O$ open in $C(\mathbb{Q},\mathbb{R})$ and $U$ open in $\mathbb{Q}$ form a basis for the product topology, while the finite intersections of the sets $S(K,W)$ form a basis for the compact-open topology ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]], [[def-product-topology]], [[def-compact-open-topology]], [[def-topology-basis-subbasis]], [[thm-basis-criterion]], [[def-topological-space]]).

[L8] Balls of the subspace $\mathbb{Q}$ are traces of balls of $\mathbb{R}$: $B_{\mathbb{Q}}(q,r) = (q-r, q+r) \cap \mathbb{Q}$; and a subset of a metric space is open exactly when each of its points has a ball around it inside the set ([[def-isometry-and-metric-embedding]], [[def-metric-ball]], [[def-metric-topology]], [[def-metrizable-space]], [[def-interval]]).

[L9] The minimum of a two-element set of reals exists, is one of them, and is at most each of them ([[lem-finite-set-has-max]], [[def-max-min]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose the claim holds; in particular, with $X := \mathbb{Q}$ and $Y := \mathbb{R}$, the evaluation map $e : C(\mathbb{Q},\mathbb{R}) \times \mathbb{Q} \to \mathbb{R}$ is continuous. [assume-contra]

1.2 The constant function $z$ is continuous, and $e(z,0) = 0 \in V$ with $V$ open in $\mathbb{R}$. [given, L6, L8]

2.1 Continuity of $e$ at the point $(z,0)$ gives, by the two bases of [L7], a natural $n$, compact sets $K_0, \dots, K_{n-1} \subseteq \mathbb{Q}$, open sets $V_0, \dots, V_{n-1} \subseteq \mathbb{R}$ and an open $U \subseteq \mathbb{Q}$ with $0 \in U$, such that $z \in O := S(K_0,V_0) \cap \dots \cap S(K_{n-1},V_{n-1})$ and $e[O \times U] \subseteq V$. [step 1.1, step 1.2, L7, choose]

3.1 Fix a real $\varepsilon > 0$ with $B_{\mathbb{Q}}(0,\varepsilon) \subseteq U$. [step 2.1, L8, choose]

3.2 Put $K := K_0 \cup \dots \cup K_{n-1}$, with $K := \varnothing$ when $n = 0$; each $K_j$ is a compact subset of $\mathbb{R}$ and hence closed in $\mathbb{R}$, so $K$ is a subset of $\mathbb{Q}$ closed in $\mathbb{R}$. [step 2.1, L1, L2]

4.1 $B_{\mathbb{Q}}(0,\varepsilon) \not\subseteq K$: otherwise $(-\varepsilon,\varepsilon) \cap \mathbb{Q} \subseteq K$, and this set is nonempty since it contains $0$; every $t \in (-\varepsilon,\varepsilon)$ then satisfies $d(t, (-\varepsilon,\varepsilon) \cap \mathbb{Q}) = 0$, because for a real $s > 0$ the set $(\max\{t-s,-\varepsilon\},\ \min\{t+s,\varepsilon\})$ is a nondegenerate open interval and so contains a rational within $s$ of $t$; hence $t$ lies in the closure of that set, which the closed $K$ contains, so $(-\varepsilon,\varepsilon) \subseteq K \subseteq \mathbb{Q}$, making the uncountable interval $(-\varepsilon,\varepsilon)$ at most countable, which is false. [step 3.2, L3, L4, L5, L8, L9]

5.1 Fix $q \in B_{\mathbb{Q}}(0,\varepsilon)$ with $q \notin K$. [step 4.1, choose]

6.1 Put $\eta := \min\{d(q,K),\ 1\}$ when $K \ne \varnothing$ and $\eta := 1$ when $K = \varnothing$; then $0 < \eta \le 1$, because $K$ closed in $\mathbb{R}$ and $q \notin K$ give $q \notin \overline{K}$ and hence $d(q,K) \ne 0$, while $d(q,K) \ge 0$; and $|q - t| \ge d(q,K) \ge \eta$ for every $t \in K$. [step 3.2, step 5.1, L4, L9]

6.2 $q \in U$, since $|q - 0| < \varepsilon$ puts $q$ in $B_{\mathbb{Q}}(0,\varepsilon) \subseteq U$. [step 3.1, step 5.1]

7.1 Put $A := \{\, s \in \mathbb{Q} : |s - q| \ge \eta \,\}$, which is nonempty because $q + 1 \in \mathbb{Q}$ and $|(q+1) - q| = 1 \ge \eta$, and define $g : \mathbb{Q} \to \mathbb{R}$ by $g(s) := (2/\eta)\, d(s,A)$. [step 6.1, construct, L4]

8.1 $g$ is Lipschitz with constant $2/\eta$, hence continuous, so $g \in C(\mathbb{Q},\mathbb{R})$. [step 7.1, L6]

8.2 $g$ vanishes on $K$: every $t \in K$ lies in $\mathbb{Q}$ and satisfies $|t - q| \ge \eta$ by step 6.1, so $t \in A$ and $d(t,A) = 0$. [step 6.1, step 7.1, L4]

8.3 $g(q) \ge 2$: every $s \in A$ satisfies $|q - s| \ge \eta$, so $\eta$ is a lower bound of the distances from $q$ to the members of $A$ and $d(q,A) \ge \eta$, whence $g(q) = (2/\eta)\,d(q,A) \ge 2$. [step 7.1, L4]

9.1 $g \in O$: for each $j < n$ with $K_j \ne \varnothing$ we have $z \in S(K_j,V_j)$, so $0 \in V_j$, and $g[K_j] \subseteq \{0\} \subseteq V_j$ by step 8.2 since $K_j \subseteq K$; for $K_j = \varnothing$ the condition is vacuous; and for $n = 0$ the set $O$ is the whole of $C(\mathbb{Q},\mathbb{R})$. [step 2.1, step 3.2, step 8.1, step 8.2]

10.1 Hence $(g,q) \in O \times U$ while $e(g,q) = g(q) \ge 2$, so $e(g,q) \notin (-1,1) = V$, contradicting $e[O \times U] \subseteq V$ of step 2.1; the assumption of step 1.1 is therefore false, and the claim fails for $X = \mathbb{Q}$ and $Y = \mathbb{R}$. [step 2.1, step 8.3, step 9.1, step 6.2, discharge-contradiction] ∎

## Remarks

- **The obstruction is exactly the absence of compact neighbourhoods.** A basic compact-open neighbourhood of a function constrains it on finitely many compact sets, and in $\mathbb{Q}$ those sets have empty interior, so they leave rational points arbitrarily close to $0$ completely unconstrained. The bump $g$ exploits one such point. In a locally compact domain no such point exists near $0$: some compact set is a neighbourhood of $0$, and the argument of [[thm-evaluation-is-continuous-on-a-locally-compact-metric-domain]] goes through.

- **Separate continuity is not at issue.** For each fixed $f$ the map $x \mapsto f(x)$ is continuous, and for each fixed $x$ the map $f \mapsto f(x)$ is continuous for the compact-open topology ([[def-evaluation-map]]). What fails above is **joint** continuity, and the witness is the standard warning that separate continuity in each variable does not give continuity on the product.

- **The bump function is built from a distance and needs no maximum or truncation.** Taking $g(s) = (2/\eta)\,d(s,A)$ with $A$ the set of rationals at distance at least $\eta$ from $q$ makes $g$ Lipschitz by [[lem-distance-to-set-is-lipschitz]] alone, vanish on $A$ and hence on $K$, and take a value at least $2$ at $q$. Nothing about its exact shape matters.
