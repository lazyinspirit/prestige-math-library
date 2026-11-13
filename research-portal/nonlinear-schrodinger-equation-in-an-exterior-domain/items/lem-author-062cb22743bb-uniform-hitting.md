---
id: lem-author-062cb22743bb-uniform-hitting
kind: lemma
domain: mathematics
title: Uniform hitting for a compact closed family of ray segments
status: published
deps:
  - lem-author-062cb22743bb-diagonal-ray
  - math:def-dependent-choice
  - math:def-metric-space
  - math:def-metric-topology
  - math:def-topological-space
  - math:def-continuous-map-top
  - math:def-subspace-topology-top
  - math:def-topology-of-uniform-convergence
  - math:thm-uniform-limit-theorem
dependency_roles:
  lem-author-062cb22743bb-diagonal-ray: mathematical-premise
  math:def-dependent-choice: mathematical-premise
  math:def-metric-space: mathematical-premise
  math:def-metric-topology: mathematical-premise
  math:def-topological-space: mathematical-premise
  math:def-continuous-map-top: mathematical-premise
  math:def-subspace-topology-top: mathematical-premise
  math:def-topology-of-uniform-convergence: mathematical-premise
  math:thm-uniform-limit-theorem: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references: []
proof_strategy: direct
dependency_level: 2
---

## Statement

Assume Dependent Choice. Let $(Z,d)$ be a metric space with its metric topology, let $(B,\mathcal T)$ be a topological space, and let $\pi:Z\to B$ be continuous. Write $C([0,\infty),Z)$ for the set of continuous maps from the nonnegative real half-line, with the relative topology inherited from the metric $|s-t|$ on $\mathbb R$, to $Z$. A complete forward path is an element of this set; its base path is $\pi\circ q$. Let $\mathcal F\subseteq C([0,\infty),Z)$ and let $\mathcal A\subseteq C([0,\infty),Z)$ be a specified set of paths called admissible. Let $U\in\mathcal T$.

For maps on $[0,m]$, uniform convergence means that, for every $\varepsilon>0$, eventually $d(q_n(t),v(t))<\varepsilon$ for every $t\in[0,m]$. Locally uniform convergence on $[0,\infty)$ means uniform convergence on each $[0,m]$, for every positive integer $m$. Assume the following two properties.

- For every sequence $(q_n)$ in $\mathcal F$ and every positive integer $m$, some subsequence of the restrictions $q_n|_{[0,m]}$ converges uniformly to a map $v:[0,m]\to Z$. This quantifies over every sequence, including every subsequence of any previously selected sequence.
- Every locally uniform limit $q:[0,\infty)\to Z$ of a sequence from $\mathcal F$ belongs to $\mathcal A$.

If every such limiting path $q\in\mathcal A$ satisfies $\pi(q(t))\in U$ for some finite $t\ge0$, then there is $L<\infty$ such that every $q\in\mathcal F$ satisfies $\pi(q(t))\in U$ for some $t\in[0,L]$. The formulation is abstract: a generalized-ray application supplies its own continuous phase paths and admissible class. Neither uniqueness through an initial point nor an admissible extension of an arbitrary finite segment is assumed.

## Facts & Assumptions

[F1] The phase metric and its topology are those of [[math:def-metric-space]] and [[math:def-metric-topology]]. The base topology and continuity of the projection are those of [[math:def-topological-space]] and [[math:def-continuous-map-top]]. If $\pi(z)\in U$, continuity provides an open neighbourhood $V$ of $z$ with $\pi(V)\subseteq U$; the metric topology then provides $\delta>0$ such that $d(w,z)<\delta$ implies $w\in V$. Time intervals carry their relative real topology as in [[math:def-subspace-topology-top]].

[F2] Uniform convergence has the metric meaning of [[math:def-topology-of-uniform-convergence]]. Claim 2 of [[math:thm-uniform-limit-theorem]] makes every uniform limit of continuous maps on the nonempty interval $[0,m]$ continuous. Completeness of $Z$ is unnecessary because the finite-interval hypothesis supplies limits in $Z$.

[F3] Assume [[math:def-dependent-choice]]. It selects the avoiding sequence by extension of finite lists, and is also the stated choice hypothesis of the diagonal supplier.

[F4] Use the abstract part of [[lem-author-062cb22743bb-diagonal-ray]] with $\mathcal A_0(I)=C(I,Z)$ for every nonempty time interval $I\subset[0,\infty)$. These are auxiliary interval classes, distinct from the specified complete-path class $\mathcal A$. Restrictions are continuous by the subspace-topology supplier. The local admissibility contract follows from the definition of continuity: if near each $t\in I$ a map is continuous on a relative interval neighbourhood, every open neighbourhood of its value has a preimage containing a neighbourhood of $t$ in $I$. Thus the map is continuous at every $t$. The hereditary extraction hypothesis will be checked for the actual avoiding sequence; no geometric ray construction is used in this abstract application.

## Proof

**Given:** The metric phase space, topological base, continuous projection, path classes, two compactness/closedness assumptions, limiting-path hitting assumption, and Dependent Choice. **Goal:** A finite common hitting bound for $\mathcal F$.

1.1 Suppose no common bound exists. For every positive integer $n$ there is a path in $\mathcal F$ whose base avoids $U$ throughout $[0,n]$. Consider finite lists of paths whose $n$th entry has this property, including the empty list. Extending a list by one suitable entry is an entire relation on these lists, since failure of a common bound supplies that entry. Dependent Choice starting at the empty list yields a sequence $(q_j)_{j\ge1}$ with $\pi(q_j(t))\notin U$ for $0\le t\le j$. [given, F3]

2.1 Set $a_j=q_j|_{[0,j]}$. These curves belong to $\mathcal A_0([0,j])$ by restriction continuity. Fix a positive integer $m$ and any strictly increasing indices $j_k\ge m$. The sequence $(q_{j_k})$ consists of members of $\mathcal F$, so the finite-interval compactness hypothesis gives a further subsequence converging uniformly on $[0,m]$ to a map into $Z$. That limit is continuous by the uniform limit theorem and therefore belongs to $\mathcal A_0([0,m])$. This verifies the hereditary extraction property of the diagonal supplier, including extraction from every previously selected subsequence. [given, F2, F4, step 1.1]

3.1 Apply the diagonal supplier to $(a_j)$ and the interval classes $\mathcal A_0(I)$. It gives strictly increasing indices $n_k$ and one continuous path $q:[0,\infty)\to Z$ such that $q_{n_k}\to q$ uniformly on every bounded time interval, since $a_{n_k}$ and $q_{n_k}$ agree there whenever $n_k$ exceeds the endpoint. The closedness assumption in the Statement puts $q$ in $\mathcal A$, and the limiting-path hitting assumption supplies a finite $t\ge0$ with $\pi(q(t))\in U$. [given, F3, F4, step 2.1]

4.1 Put $z=q(t)$ and choose $\delta>0$ as in F1 so that $d(w,z)<\delta$ implies $\pi(w)\in U$. Choose an integer $m>t$. Uniform convergence on $[0,m]$ gives $d(q_{n_k}(t),z)<\delta$ for all sufficiently large $k$, hence $\pi(q_{n_k}(t))\in U$. But $n_k\to\infty$, so also $n_k\ge t$ for large $k$, contradicting the avoidance property in step 1.1. The contradiction proves that a finite common bound exists. [F1, F2, step 1.1, step 3.1] ∎
