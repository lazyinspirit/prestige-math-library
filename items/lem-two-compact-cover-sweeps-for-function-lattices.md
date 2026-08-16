---
id: lem-two-compact-cover-sweeps-for-function-lattices
kind: lemma
title: "A function lattice with the two-point duplication property uniformly approximates its target"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-two-point-duplication-property, lem-compactness-of-a-subspace-is-ambient]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. M. Erdman, A Companion to Real Analysis, Theorem 21.2.3"
      url: "https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf"
    - title: "E. Carlen, Notes on Topology and the Stone-Weierstrass Theorem, Lemma 1.27"
      url: "https://sites.math.rutgers.edu/~carlen/502S13/Topology502.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a nonempty compact topological space, let $f\in C(X,\mathbb R)$, and let $L\subseteq C(X,\mathbb R)$ be closed under pointwise maxima and minima. If $L$ has the two-point duplication property relative to $f$ ([[def-two-point-duplication-property]]), then for every $\varepsilon>0$ there is $u\in L$ such that
$$|u(z)-f(z)|<\varepsilon\qquad\text{for every }z\in X.$$

## Facts & Assumptions

**Given:** A nonempty compact space $X$, a continuous $f:X\to\mathbb R$, a family $L\subseteq C(X,\mathbb R)$ closed under finite pointwise maxima and minima, the two-point duplication property relative to $f$, and a real $\varepsilon>0$.

[L1] The two-point duplication property says that for every $x,y\in X$ there is $h\in L$ with $h(x)=f(x)$ and $h(y)=f(y)$ ([[def-two-point-duplication-property]]).

[L2] If an indexed family of open subsets of an ambient space covers a compact subset $A$, then finitely many indexed members cover $A$, with the case $A=\varnothing$ stated separately ([[lem-compactness-of-a-subspace-is-ambient]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in X$ and let $H_x:=\{h\in L:h(x)=f(x)\}$; for $h\in H_x$ put $U_h:=\{z\in X:h(z)>f(z)-\varepsilon\}$, an open set by continuity. [given]

2.1 The family $(U_h)_{h\in H_x}$ covers $X$: for any $y\in X$, [L1] supplies $h\in L$ with $h(x)=f(x)$ and $h(y)=f(y)>f(y)-\varepsilon$, so $h\in H_x$ and $y\in U_h$. [L1, step 1.1]

3.1 By compactness and [L2], finitely many $U_{h_0},\ldots,U_{h_n}$ cover $X$; their pointwise maximum $g:=h_0\vee\cdots\vee h_n$ belongs to $L$, satisfies $g(z)>f(z)-\varepsilon$ for every $z\in X$, and satisfies $g(x)=f(x)$ because every $h_j(x)=f(x)$. [step 2.1, L2, given]

4.1 Let $G:=\{g\in L:g(z)>f(z)-\varepsilon\text{ for every }z\in X\text{, and }g(x)=f(x)\text{ for some }x\in X\}$, a subset of $L$ formed by comprehension rather than by selecting one function per point, and for $g\in G$ put $V_g:=\{z\in X:g(z)<f(z)+\varepsilon\}$; each $V_g$ is open. The family $(V_g)_{g\in G}$ covers $X$: given $x\in X$, step 3.1 produces a member of $L$ with both defining properties, so it lies in $G$, and it contains $x$ in its $V_g$ because $g(x)=f(x)<f(x)+\varepsilon$. [step 3.1, given]

5.1 By compactness and [L2], finitely many $V_{g_0},\ldots,V_{g_m}$ cover $X$; their pointwise minimum $u:=g_0\wedge\cdots\wedge g_m$ belongs to $L$. [step 4.1, L2, given]

6.1 Every $g_j$ is greater than $f-\varepsilon$ everywhere by step 3.1, so $u>f-\varepsilon$ everywhere; and at every $z$ some $V_{g_j}$ contains $z$, so $u(z)\le g_j(z)<f(z)+\varepsilon$. Thus $|u(z)-f(z)|<\varepsilon$ for every $z\in X$. [step 3.1, step 4.1, step 5.1, algebra] ∎
