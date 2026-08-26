---
id: lem-orbit-maps-of-isometric-actions-are-coarse-lipschitz
kind: lemma
title: "Orbit maps of isometric actions are coarse Lipschitz"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-coarse-lipschitz-map-and-quasi-isometric-embedding, def-finitely-generated-group, def-isometric-proper-and-cobounded-actions-on-metric-spaces, def-word-metric, def-word-length-with-respect-to-a-generating-set]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
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

Let a finitely generated group $G$ with finite generating set $S$ act
isometrically on a metric space $X$, and fix $x_0 \in X$. Then the orbit map
$$\phi_{x_0} : (G,d_S) \longrightarrow X, \qquad \phi_{x_0}(g) := g \cdot x_0,$$
is coarse Lipschitz. In fact, if
$$M := \max\bigl(\{0\}\cup\{\,d_X(x_0,\ s \cdot x_0):s\in S\cup S^{-1}\,\}\bigr),$$
then
$$d_X(g \cdot x_0,\ h \cdot x_0) \le M\, d_S(g,h) \qquad \text{for all } g,h \in G.$$

## Facts & Assumptions

**Given:** A finite generating set $S$ of $G$, an isometric action of $G$ on a metric space $X$, and a point $x_0 \in X$.

[L1] A group is finitely generated when some finite subset generates it ([[def-finitely-generated-group]]).

[L2] An isometric action satisfies $d(g \cdot x,\ g \cdot y) = d(x,y)$ for all $g \in G$ and $x,y \in X$ ([[def-isometric-proper-and-cobounded-actions-on-metric-spaces]]).

[L3] The word metric is $d_S(g,h)=|g^{-1}h|_S$ ([[def-word-metric]]), and $|u|_S$ is the least length of an expression of $u$ as a product of elements of $S \cup S^{-1}$ ([[def-word-length-with-respect-to-a-generating-set]]).

[L4] A map is coarse Lipschitz when its output distances are bounded by $A$ times the input distance plus an additive constant $B$, for some reals $A,B\ge0$ ([[def-coarse-lipschitz-map-and-quasi-isometric-embedding]]).

## Proof

**Proof technique:** direct.

1.1 Because $S \cup S^{-1}$ is finite by [L1], adjoining $0$ gives a nonempty finite set of real numbers, so the maximum $M$ exists. [L1, choose]

2.1 Let $u := g^{-1}h$, and write $u = s_1 \cdots s_n$ with $n = |u|_S = d_S(g,h)$ and each $s_i \in S \cup S^{-1}$ by [L3]. Repeated use of the triangle inequality gives $d_X(x_0,\ u \cdot x_0) \le \sum_{i=1}^n d_X(x_0,\ s_i \cdot x_0) \le nM$. Applying the isometry $g$ and [L2] yields $d_X(g \cdot x_0,\ h \cdot x_0) = d_X(x_0,\ u \cdot x_0) \le M\, d_S(g,h)$. [L2, L3, step 1.1, algebra]

3.1 The displayed estimate is a coarse-Lipschitz bound with multiplicative constant $M$ and additive constant $0$, so the orbit map is coarse Lipschitz by [L4]. [L4, step 2.1] ∎
