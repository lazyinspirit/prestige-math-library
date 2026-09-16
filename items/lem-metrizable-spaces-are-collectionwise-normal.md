---
id: lem-metrizable-spaces-are-collectionwise-normal
kind: lemma
title: "Metrizable spaces are collectionwise normal"
status: draft
origin: pipeline
deps: [def-metrizable-space, def-metric-topology, def-normalized-families-and-collectionwise-normality, lem-distance-to-set-is-lipschitz, lem-discrete-families-are-locally-finite, lem-locally-finite-unions-and-closures, def-metric-bounded-diameter, def-infimum, def-metric-ball, def-discrete-family-and-sigma-bases]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "GMU Math 631 course notes, Axioms of separation"
      url: "https://math631spring2011.wordpress.com/wp-content/uploads/2011/01/axiomsofseparation3.pdf"
      locator: "Section 14, Theorem 65 and its distance-neighbourhood proof, printed p. 12"
---

## Statement

In $\mathrm{ZF}$, every metrizable space ([[def-metrizable-space]]) is
collectionwise normal
([[def-normalized-families-and-collectionwise-normality]]).

## Facts & Assumptions

**Given:** A metrizable space $(X, \mathcal T)$ together with one metric $d$ with $\mathcal T = \mathcal T_d$ ([[def-metrizable-space]], [[def-metric-topology]]), and a discrete family $\mathcal F = \{F_i : i \in I\}$ of closed subsets of $X$ ([[def-discrete-family-and-sigma-bases]]).

[F1] A discrete family is locally finite, and a locally finite union of closed sets is closed; hence every subunion $\bigcup_{i \in J} F_i$ is closed ([[lem-discrete-families-are-locally-finite]], [[lem-locally-finite-unions-and-closures]]).

[F2] Collectionwise normality asks that a discrete family of closed sets be separated, that is, have a pairwise disjoint open expansion ([[def-normalized-families-and-collectionwise-normality]]).

[L1] For nonempty $A \subseteq X$ and $u \in X$ the distance $d(u,A) = \inf \{\, d(u,a) : a \in A \,\}$ exists, is $\ge 0$, and equals $0$ when $u \in A$; the map $u \mapsto d(u,A)$ differs by at most $d(u,v)$ at two points $u,v$ ([[def-metric-bounded-diameter]], [[lem-distance-to-set-is-lipschitz]]).

[L2] If $A \subseteq B$ are nonempty then $d(u,B) \le d(u,A)$, because every lower bound of the set of distances to $B$ is one for $A$ and the infimum is the greatest lower bound ([[def-infimum]]). If $A$ is closed and $u \notin A$ then $d(u,A) > 0$: $d(u,A) = 0$ would let balls of every radius about $u$ meet $A$, so $u$ would lie in the closure of $A$ and hence in $A$ ([[def-metric-ball]], [[def-metric-topology]]).

## Proof

**Proof technique:** direct.

1.1 Fix $d$ and $\mathcal F$ as in the Given. For each $i \in I$ put $G_i := \bigcup_{j \ne i} F_j$, a possibly empty closed set by [F1]. [given, F1]

2.1 For each $i$, define $U_i$ by cases: $U_i := \varnothing$ if $F_i = \varnothing$; $U_i := X$ if $F_i \ne \varnothing$ and $G_i = \varnothing$; and $U_i := \{\, x \in X : d(x, F_i) < \frac13 d(x, G_i) \,\}$ if both $F_i$ and $G_i$ are nonempty. This definition is a formula in $F_i$ and $G_i$, so the assignment $i \mapsto U_i$ is a single definable function and no selection is used. [step 1.1, L1]

3.1 Each $U_i$ is open. The first two cases are clear. In the third, let $x \in U_i$ and put $c := d(x,F_i) \ge 0$ and $h := d(x,G_i) > 0$, so $3c < h$ by definition of $U_i$; set $r := (h - 3c)/8 > 0$. For $y$ with $d(x,y) < r$ we get $d(y,F_i) \le c + r$ and $d(y,G_i) \ge h - r$, and $3c + 3r = 3c + \frac{3}{8}(h-3c) < \frac12(h+3c) < h - r$, where the last inequality is $3c < h$; hence $3\,d(y,F_i) < d(y,G_i)$ and $y \in U_i$. So every point of $U_i$ has a ball around it inside $U_i$, and $U_i$ is open in the metric topology ([[def-metric-ball]], [[def-metric-topology]]). [step 2.1, L1]

3.2 Each $F_i \subseteq U_i$. If $F_i = \varnothing$ this is clear; if $G_i = \varnothing$ then $U_i = X$; otherwise $y \in F_i$ gives $d(y,F_i) = 0$ and $d(y,G_i) > 0$ because $G_i$ is closed and $y \notin G_i$, so $0 < \frac13 d(y,G_i)$ and $y \in U_i$. [step 2.1, L1, L2]

3.3 The sets $U_i$ are pairwise disjoint. Let $x \in U_i \cap U_k$ with $i \ne k$. If either of the first two cases produced $U_i$ or $U_k$, then one of them is empty and the other is $X$ only when every $F_j$ with $j \ne i$ is empty, in which case $U_k = \varnothing$ for $k \ne i$; so both sets are given by the third case. Then $F_k \subseteq G_i$ and $F_i \subseteq G_k$ give by [L2] that $d(x,F_i) < \frac13 d(x,G_i) \le \frac13 d(x,F_k)$ and $d(x,F_k) < \frac13 d(x,G_k) \le \frac13 d(x,F_i)$, hence $d(x,F_i) < \frac19 d(x,F_i)$, so that $d(x,F_i) = 0$ and then $d(x,F_k) < 0$, contradicting $d(x,F_k) \ge 0$. [step 2.1, L1, L2]

4.1 By steps 3.1, 3.2 and 3.3 the family $(U_i)_{i \in I}$ is a pairwise disjoint open expansion of $\mathcal F$, so $\mathcal F$ is separated and $X$ is collectionwise normal by [F2]. [step 3.1, step 3.2, step 3.3, F2] ∎

## Remarks

- **The empty cases are real cases.** If $F_i = \varnothing$ then $G_i$ may be everything, and the formula $\frac13 d(x,G_i)$ with $G_i = X$ would give $d(x,X) = 0$ and force $U_i = \varnothing$; the first case records that directly. If all other $F_j$ are empty, $G_i = \varnothing$ and the distance $d(x,G_i)$ is undefined, which is why the second case is separated out. Both are decided by the given data, so no choice enters.

- **No choice anywhere.** One metric is fixed by the hypothesis, the sets $U_i$ are defined by a formula, and the three cases are decided by definable conditions; the argument therefore runs in $\mathrm{ZF}$.
