---
id: lem-sigma-cellular-base-yields-a-compatible-metric
kind: lemma
title: "A sigma-cellular base yields a compatible metric"
status: draft
origin: pipeline
deps: [def-topological-space, def-topology-basis-subbasis, def-metrizable-space, def-metric-space, def-metric-topology, def-metric-ball, def-neighbourhood-top]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "R. H. Bing, Metrization of topological spaces"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/48C1A50A9E249D05BD7054529F93BAA1/S0008414X00030923a.pdf/metrization-of-topological-spaces.pdf"
      locator: "Theorem 3, printed pp. 178-179, and Theorem 4, printed p. 179"
---

## Statement

Let $X$ be a $T_1$ topological space carrying a **base** of the form
$\bigcup_{n \in \mathbb N} \mathcal B_n$
([[def-topology-basis-subbasis]]) in which each $\mathcal B_n$ is a **pairwise
disjoint** family of open sets: $B \cap B' = \varnothing$ for distinct
$B, B' \in \mathcal B_n$. Then $X$ is metrizable
([[def-metrizable-space]]).

Explicitly: with $W_n := X \setminus \bigcup \mathcal B_n$ and
$\mathcal C_n := \mathcal B_n \cup \{W_n\}$, each $\mathcal C_n$ is a partition
of $X$ into open sets; define
$$\delta_n(x,y) := \begin{cases} 0 & \text{if } x,y \text{ lie in a common member of } \mathcal C_n,\\ 1 & \text{otherwise,}\end{cases} \qquad d(x,y) := \begin{cases} 0 & \text{if } x = y,\\ 2^{-k(x,y)} & \text{otherwise,}\end{cases}$$
where $k(x,y) := \min \{\, n \in \mathbb N : \delta_n(x,y) = 1 \,\}$, which exists for $x \ne y$ whenever the base separates points. Then $d$ is a metric on $X$ whose metric topology is the given topology.

## Facts & Assumptions

**Given:** A $T_1$ space $(X,\mathcal T)$ with a base $\bigcup_n \mathcal B_n$ of pairwise disjoint open families, and the sets $\mathcal C_n$, functions $\delta_n$ and $d$ defined above.

[F1] A base is a family of open sets such that every open set is a union of members; equivalently, for open $D$ and $x \in D$ there is a base member $B$ with $x \in B \subseteq D$ ([[def-topology-basis-subbasis]]).

[F2] $X$ is $T_1$: for $x \ne y$ the set $X \setminus \{y\}$ is an open neighbourhood of $x$ ([[def-topological-space]], [[def-neighbourhood-top]]).

[L1] Metric axioms: a metric is a function $X \times X \to \mathbb R$ satisfying (M1) $d(x,y) = 0 \iff x = y$, (M2) symmetry and (M3) the triangle inequality ([[def-metric-space]]); a metric is nonnegative ([[def-metric-space]]).

[L2] Metric topology and balls: $B(x,r) = \{y : d(x,y) < r\}$ is open and the balls form a neighbourhood base; a set is open exactly when each of its points has a ball inside it ([[def-metric-ball]], [[def-metric-topology]]).

## Proof

**Proof technique:** direct.

1.1 Each $\mathcal C_n$ is a partition of $X$ into open sets: members of $\mathcal B_n$ are open and pairwise disjoint, $W_n$ is open, and $W_n \cap \bigcup \mathcal B_n = \varnothing$, so the members are disjoint and cover $X$. Consequently each point lies in exactly one member of $\mathcal C_n$. [given]

2.1 Define $\delta_n$ and $d$ as in the statement. For $x \ne y$ the set of levels separating them is nonempty: by [F1] and [F2] there is $B \in \bigcup_n \mathcal B_n$ with $x \in B \subseteq X \setminus \{y\}$; writing $B \in \mathcal B_{n_0}$, step 1.1 shows that no member of $\mathcal C_{n_0}$ contains both $x$ and $y$, so $\delta_{n_0}(x,y) = 1$ and $k(x,y)$ exists. [step 1.1, F1, F2]

3.1 (M1) holds: $d(x,x) = 0$ by definition, every $\delta_n(x,x) = 0$ because $x$ lies in a member of $\mathcal C_n$, and for $x \ne y$ step 2.1 gives $k(x,y) \in \mathbb N$ with $d(x,y) = 2^{-k(x,y)} > 0$. [step 1.1, step 2.1, L1]

3.2 (M2) holds because $\delta_n(x,y) = \delta_n(y,x)$ for every $n$, so $k$ and hence $d$ are symmetric. [step 2.1]

3.3 (M3) holds. If $x = y$ or $y = z$ the inequality is immediate from $d \ge 0$; otherwise let $a := k(x,y)$, $b := k(y,z)$ and $m := \min(a,b)$. For every $n < m$ we have $\delta_n(x,y) = \delta_n(y,z) = 0$, so $x,y$ lie in a common member of $\mathcal C_n$ and $y,z$ do too; by step 1.1 those two members are the member containing $y$, hence equal, and $x,z$ lie in it as well, giving $\delta_n(x,z) = 0$. Therefore either $x = z$, or $k(x,z) \ge m$, and in both cases $d(x,z) \le 2^{-m} \le 2^{-a} + 2^{-b} = d(x,y) + d(y,z)$. [step 1.1, step 2.1]

4.1 The two topologies agree. (i) If $D$ is open and $x \in D$, choose $B \in \mathcal B_{k}$ with $x \in B \subseteq D$ by [F1]. For $y$ with $d(x,y) < 2^{-(N+1)}$ and $N \ge k$ we have $k(x,y) > N \ge k$, so $\delta_k(x,y) = 0$, that is, $y$ lies in the member of $\mathcal C_k$ containing $x$, which is $B$ by step 1.1; hence $y \in D$. So every open set contains a ball around each of its points. (ii) If $x \in X$, $\varepsilon > 0$ and $y$ satisfies $d(x,y) < \varepsilon$, put $\eta := \varepsilon - d(x,y) > 0$ and choose $N$ with $2^{-(N+1)} < \eta$. Let $O$ be the intersection of the members of $\mathcal C_n$ containing $y$, for $n \le N$; it is open by step 1.1 and contains $y$, and for $z \in O$ we have $\delta_n(y,z) = 0$ for all $n \le N$, so $k(y,z) > N$ and $d(y,z) \le 2^{-(N+1)} < \eta$; hence $d(x,z) \le d(x,y) + \eta = \varepsilon$ and $O \subseteq B(x,\varepsilon)$. So every ball is open. [step 1.1, step 2.1, step 3.3, F1, L2]

5.1 By steps 3.1, 3.2 and 3.3 the function $d$ is a metric on $X$, and by step 4.1 its metric topology is the given topology; hence $X$ is metrizable. [step 3.1, step 3.2, step 3.3, step 4.1, L1, L2] ∎

## Remarks

- **Why the extra member $W_n$.** Without it a point outside $\bigcup \mathcal B_n$ would lie in no member of the level, and the level indicator would not be an equivalence relation on blocks; adjoining the open complement of $\bigcup \mathcal B_n$ repairs exactly that, and it remains disjoint from every member of $\mathcal B_n$.

- **The metric is the minimum separating level.** It is the level metric determined by the decreasing sequence of block partitions; equivalently one may use the weighted sum $\sum_n 2^{-(n+1)}\delta_n$, which has the same balls of radius below $2^{-(N+1)}$ as the definition above. The level form is used here because it needs no convergence argument.

- **Where $T_1$ is used.** Only in step 2.1, to separate two distinct points by a base member; the construction is otherwise formal. In the applications on this page the space is a Moore space, hence regular $T_1$ ([[def-moore-spaces-and-developments]]).
