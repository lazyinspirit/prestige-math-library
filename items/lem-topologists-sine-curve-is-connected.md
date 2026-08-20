---
id: lem-topologists-sine-curve-is-connected
kind: lemma
title: "The topologist's sine curve is connected"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-connected-subsets-of-the-line,
       thm-continuous-image-of-a-connected-space,
       thm-closure-of-a-connected-set, thm-product-universal-property,
       thm-algebra-of-continuous-functions,
       thm-composition-of-continuous-functions,
       thm-sine-and-cosine-derivatives, cor-differentiable-implies-continuous,
       thm-sine-cosine-signs-monotonicity-and-ranges,
       thm-sine-cosine-zero-sets-and-fundamental-period,
       cor-archimedean-reciprocal, thm-of-archimedean,
       def-pi-via-first-positive-cosine-zero,
       thm-cosine-has-a-smallest-positive-zero]
justified_by: []
aliases: []
landmark: true
short: "the topologist's sine curve is connected"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gary Gruenhage and Mark Guest, Topology Course Notes, §2.3.1, Example 111"
      url: "https://webhome.auburn.edu/~gruengf/papers/Topology_Course_Notes.pdf"
pipeline_run: null
---

## Statement

The topologist's sine curve $S=\{(x,\sin(1/x)):0<x\le1\}\cup(\{0\}\times[-1,1])$ is connected.

## Facts & Assumptions

**Given:** The graph $C:=\{(x,\sin(1/x)):0<x\le1\}$ and the set $S:=C\cup(\{0\}\times[-1,1])$ in $\mathbb R^2$.

[L1] Every interval in the real line, including $(0,1]$, is connected ([[cor-connected-subsets-of-the-line]]).

[L2] A continuous image of a connected subset is connected ([[thm-continuous-image-of-a-connected-space]]).

[L3] A map into a product is continuous exactly when each component is continuous ([[thm-product-universal-property]], claim 2).

[L4] Sine has range $[-1,1]$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[L5] Sine has period $2\pi$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[L6] The positive naturals are cofinal, and for every real $\varepsilon>0$ some positive integer $N$ satisfies $1/N<\varepsilon$ ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]]).

[L7] The reciprocal is continuous away from zero, sine is continuous, and composites of continuous real functions are continuous ([[thm-algebra-of-continuous-functions]], [[thm-sine-and-cosine-derivatives]], [[cor-differentiable-implies-continuous]], [[thm-composition-of-continuous-functions]]).

[L8] If $A$ is connected and $A\subseteq B\subseteq\overline A$, then $B$ is connected ([[thm-closure-of-a-connected-set]]).

[L9] The number $\pi=2\gamma$ is positive because the smallest positive zero of cosine satisfies $\gamma\in(0,2)$ ([[def-pi-via-first-positive-cosine-zero]], [[thm-cosine-has-a-smallest-positive-zero]]).

## Proof

**Proof technique:** direct.

1.1 The interval $(0,1]$ is connected by [L1]. The map $h(x):=(x,\sin(1/x))$ has continuous components by [L7], so it is continuous by [L3]. Its image $C$ is therefore connected by [L2]. [L1, L2, L3, L7]

1.2 Fix $y\in[-1,1]$. By [L4], choose $u\in\mathbb R$ with $\sin u=y$. By [L6] and [L9], choose a positive integer $N$ with $u+2\pi N\ge1$. For $j\in\mathbb N$, put $r_j:=1/(u+2\pi(N+j))$. Then $0<r_j\le1$, $r_j\to0$, and [L5] gives $\sin(1/r_j)=y$. Thus $(r_j,y)\in C$ and $(r_j,y)\to(0,y)$, so $(0,y)\in\overline C$. [L4, L5, L6, L9, choose, construct, algebra]

2.1 Since $y$ was arbitrary, step 1.2 gives $\{0\}\times[-1,1]\subseteq\overline C$. Hence $C\subseteq S\subseteq\overline C$, and [L8] applied to the connected set from step 1.1 proves that $S$ is connected. [step 1.1, step 1.2, L8] ∎
