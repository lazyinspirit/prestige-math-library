---
id: thm-svarc-milnor-lemma
kind: theorem
title: "The Svarc-Milnor lemma"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-coarsely-dense-subset-and-quasi-isometry, def-geometric-action-on-a-metric-space, def-word-metric, lem-cobounded-proper-geodesic-actions-produce-finite-generating-sets, lem-orbit-maps-of-isometric-actions-are-coarse-lipschitz]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
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

Let $G$ act geometrically on a geodesic metric space $X$, fix $x_0 \in X$,
and choose $D\ge0$ such that every point of $X$ lies within $D$ of $G\cdot x_0$.
Then $G$ is finitely generated. More precisely, if
$$S := \{\, g \in G : d_X(x_0,\ g \cdot x_0) \le 2D+1 \,\}$$
is the finite generating set obtained from
[[lem-cobounded-proper-geodesic-actions-produce-finite-generating-sets]], then
the orbit map
$$\phi_{x_0} : (G,d_S) \longrightarrow X, \qquad \phi_{x_0}(g) := g \cdot x_0,$$
is a quasi-isometry.

## Facts & Assumptions

**Given:** A geometric action of $G$ on a geodesic metric space $X$, a point $x_0 \in X$, and a real $D \ge 0$ such that every point of $X$ lies within distance at most $D$ of the orbit $G \cdot x_0$.

[L1] The set $S := \{\, g \in G : d_X(x_0,\ g \cdot x_0) \le 2D+1 \,\}$ is a finite generating set of $G$ ([[lem-cobounded-proper-geodesic-actions-produce-finite-generating-sets]]).

[L2] For this generating set, the orbit map satisfies $d_X(g \cdot x_0,\ h \cdot x_0) \le M\, d_S(g,h)$ for some constant $M \ge 0$ ([[lem-orbit-maps-of-isometric-actions-are-coarse-lipschitz]]).

[L3] A subset is coarsely dense when every point of the space lies within a fixed distance of it, and a quasi-isometry is a coarse Lipschitz map admitting a coarse Lipschitz quasi-inverse ([[def-coarsely-dense-subset-and-quasi-isometry]]).

[L4] The word metric is $d_S(g,h)=|g^{-1}h|_S$ ([[def-word-metric]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the set $S$ is finite and generates $G$, so $d_S$ is a word metric on $G$. Step [L2] gives the coarse-Lipschitz upper bound for $\phi_{x_0}$. [L1, L2, L4]

1.2 The orbit $\phi_{x_0}(G)=G \cdot x_0$ is $D$-dense in $X$ by the choice of $D$, so it is coarsely dense in the sense of [L3]. [L3, given]

1.3 For $g \in G$, the proof of [L1] writes $g$ as a product of at most $m$ elements of $S$, where $m$ is the least positive integer with $d_X(x_0,\ g \cdot x_0) \le m$. Therefore $|g|_S \le d_X(x_0,\ g \cdot x_0) + 1$. Applying this to $g^{-1}h$ and using isometricity gives $d_S(g,h) = |g^{-1}h|_S \le d_X(g \cdot x_0,\ h \cdot x_0) + 1$. [L1, L4, algebra]

2.1 The finite generating set $S$ gives a fixed enumeration of $G$: order words in the finite alphabet $S$ first by length and then lexicographically, and retain the first word representing each group element. The empty word represents the identity. For each $x\in X$, step 1.2 makes the set of words whose represented element $g$ satisfies $d_X(x,g\cdot x_0)\le D$ nonempty. Let $r(x)$ be the element represented by its first word. This defines one function $r:X\to G$ without choosing independently over $X$, and $d_X(x,r(x)\cdot x_0)\le D$ for every $x$. [L1, step 1.2, construct]

3.1 For $x,y \in X$, step 1.3 with $g=r(x)$ and $h=r(y)$ gives $$d_S(r(x),r(y)) \le d_X(r(x) \cdot x_0,\ r(y) \cdot x_0) + 1 \le d_X(x,y) + 2D + 1.$$ So $r : X \to G$ is coarse Lipschitz. [step 1.3, step 2.1, algebra]

3.2 For every $x \in X$, step 2.1 gives $d_X(\phi_{x_0}(r(x)),x) \le D$. For every $g \in G$, step 1.3 and step 2.1 with $x=g \cdot x_0$ give $$d_S(r(g \cdot x_0),g) \le d_X(r(g \cdot x_0) \cdot x_0,\ g \cdot x_0) + 1 \le D+1.$$ Thus $r \circ \phi_{x_0}$ and $\operatorname{id}_G$, and also $\phi_{x_0} \circ r$ and $\operatorname{id}_X$, are at bounded distance. [step 1.3, step 2.1, algebra]

4.1 Step 1.1 shows that $\phi_{x_0}$ is coarse Lipschitz, and step 3.2 gives a coarse Lipschitz quasi-inverse. Hence the orbit map is a quasi-isometry by [L3]. [L3, step 1.1, step 3.1, step 3.2] ∎
