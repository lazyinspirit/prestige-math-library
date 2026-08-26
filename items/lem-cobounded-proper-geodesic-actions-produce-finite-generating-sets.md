---
id: lem-cobounded-proper-geodesic-actions-produce-finite-generating-sets
kind: lemma
title: "Cobounded proper geodesic actions produce finite generating sets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-finitely-generated-group, def-geometric-action-on-a-metric-space, def-geodesic-and-geodesic-metric-space, thm-of-archimedean, thm-well-ordering-principle]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory, Sections 4.4 and 5.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "C. Drutu and M. Kapovich, Lectures on Geometric Group Theory, Chapter 5"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
pipeline_run: null
---

## Statement

Let $G$ act geometrically on a geodesic metric space $X$. Fix $x_0 \in X$, and
choose $D \ge 0$ such that every point of $X$ lies within distance at most $D$
of the orbit $G \cdot x_0$. Then
$$S := \{\, g \in G : d_X(x_0,\ g \cdot x_0) \le 2D+1 \,\}$$
is finite and generates $G$.

## Facts & Assumptions

**Given:** A geometric action of $G$ on a geodesic metric space $X$, a point $x_0 \in X$, and a real $D \ge 0$ such that every point of $X$ lies within distance at most $D$ of the orbit $G \cdot x_0$.

[L1] A geometric action is isometric, proper, and cobounded ([[def-geometric-action-on-a-metric-space]]).

[L2] In a geodesic metric space, every two points are joined by a geodesic segment ([[def-geodesic-and-geodesic-metric-space]]).

[L3] The Archimedean property says that for every real $t$ there is a natural number $m$ with $t < m$ ([[thm-of-archimedean]]).

[L4] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

[L5] A group is finitely generated when some finite subset generates it ([[def-finitely-generated-group]]).

## Proof

**Proof technique:** direct.

1.1 The set $S$ is finite because the action is proper by [L1], the singleton $\{x_0\}$ and the ball $\{y : d_X(x_0,y) \le 2D+1\}$ are bounded, and $S$ is exactly the transporter set from the first to the second. [L1]

1.2 Let $g \in G$. By [L2], choose a geodesic $\gamma : [0,\ell] \to X$ from $x_0$ to $g \cdot x_0$, where $\ell = d_X(x_0,\ g \cdot x_0)$. By [L3] and [L4], let $m$ be the least natural number with $\ell \le m$. Put $p_i := \gamma(i\ell/m)$ for $0 \le i \le m$. Then $d_X(p_{i-1},p_i)=\ell/m \le 1$ for each $i$. [L2, L3, L4, choose]

2.1 For each $i$, choose $g_i \in G$ with $d_X(p_i,\ g_i \cdot x_0) \le D$, and arrange $g_0 = e$ and $g_m = g$. This is possible because $p_0=x_0$ and $p_m=g \cdot x_0$. [given, step 1.2, choose]

3.1 Put $s_i := g_i^{-1}g_{i+1}$. Then $d_X(x_0,\ s_i \cdot x_0) = d_X(g_i \cdot x_0,\ g_{i+1} \cdot x_0) \le D + 1 + D = 2D+1$, so every $s_i$ lies in $S$. Since $g = s_0 s_1 \cdots s_{m-1}$, the set $S$ generates $G$. [L1, step 2.1, algebra]

4.1 Step 3.1 shows that $S$ is a generating set, and step 1.1 shows that it is finite. Hence [L5] makes $G$ finitely generated. [L5, step 1.1, step 3.1] ∎
