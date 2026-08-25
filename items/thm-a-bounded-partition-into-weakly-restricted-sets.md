---
id: thm-a-bounded-partition-into-weakly-restricted-sets
kind: theorem
title: "Every $H$-free graph partitions into boundedly many vertex sets of self-density at most $\\epsilon$ or at least $1-\\epsilon$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-rodl-in-the-edge-density-form, lem-forbidden-induced-subgraph-classes-are-hereditary, lem-induced-freeness-passes-to-induced-subgraphs, def-h-free-and-family-free-graph, def-subgraph-induced-subgraph-and-spanning-subgraph, def-edge-density-between-vertex-sets, lem-geometric-sequence-null]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Chudnovsky, A. Scott, P. Seymour, and S. Spirkl, Strengthening Rödl's theorem, Theorem 1.3"
      url: "https://arxiv.org/pdf/2105.07370"
pipeline_run: null
---

## Statement

Fix a graph $H$ and a real $\epsilon\in(0,\tfrac12)$. Then there exists an
integer $B=B(H,\epsilon)$ such that every $H$-free finite simple graph $G$
admits a partition

$$
V(G)=X_1\sqcup\cdots\sqcup X_m,\qquad m\le B,
$$

in which every part satisfies $d_G(X_i,X_i)\le\epsilon$ or
$d_G(X_i,X_i)\ge1-\epsilon$.

## Facts & Assumptions

**Given:** A graph $H$ and a real $\epsilon\in(0,\tfrac12)$.

[L1] The edge-density form of Rödl's theorem supplies a constant $\delta_0>0$ such that every nonempty $H$-free finite simple graph $J$ contains a set $X\subseteq V(J)$ with $|X|\ge\delta_0|V(J)|$ and either $d_J(X,X)\le\epsilon/2$ or $d_J(X,X)\ge1-\epsilon/2$ ([[cor-rodl-in-the-edge-density-form]]).

[L2] Every induced subgraph of an $H$-free graph is again $H$-free ([[lem-forbidden-induced-subgraph-classes-are-hereditary]], [[lem-induced-freeness-passes-to-induced-subgraphs]], [[def-h-free-and-family-free-graph]]).

[F1] If $W\subseteq V(G)$ then $G[W]$ has the same adjacencies on every subset $X\subseteq W$ as $G$ does, so $d_{G[W]}(X,X)=d_G(X,X)$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]], [[def-edge-density-between-vertex-sets]]).

[L3] For $0<r<1$, the sequence $r^k$ tends to $0$ ([[lem-geometric-sequence-null]]).

## Proof

**Proof technique:** direct.

1.1 Let $\delta_0>0$ be the constant from [L1], set $\rho:=\min\{\delta_0,\tfrac12\}$, and note that $0<\rho\le\tfrac12$. Then every nonempty $H$-free graph $J$ contains a set $X\subseteq V(J)$ with $|X|\ge\rho|V(J)|$ and either $d_J(X,X)\le\epsilon/2$ or $d_J(X,X)\ge1-\epsilon/2$. [L1, algebra, choose]

2.1 Since $0<1-\rho<1$, [L3] applied to $r=1-\rho$ yields a natural number $t\ge1$ with $(1-\rho)^t<\rho\epsilon/16$. [step 1.1, L3, choose]

2.2 Let $G$ be an $H$-free finite simple graph. If $V(G)=\varnothing$, the empty partition works, so assume $n:=|V(G)|>0$. Put $R_0:=V(G)$. For each $i=1,\dots,t$, if $R_{i-1}=\varnothing$ stop; otherwise the induced subgraph $G[R_{i-1}]$ is $H$-free by [L2], so step 1.1 and [F1] give a nonempty set $X_i\subseteq R_{i-1}$ with $|X_i|\ge\rho|R_{i-1}|$ and either $d_G(X_i,X_i)\le\epsilon/2$ or $d_G(X_i,X_i)\ge1-\epsilon/2$. Define $R_i:=R_{i-1}\setminus X_i$. [step 1.1, L2, F1, choose]

3.1 If the process stops at some stage $i\le t$ because $R_{i-1}=\varnothing$, then the nonempty extracted sets $X_1,\dots,X_{i-1}$ partition $V(G)$ and each already has self-density at most $\epsilon/2$ or at least $1-\epsilon/2$, hence in particular at most $\epsilon$ or at least $1-\epsilon$. [step 2.2, algebra]

3.2 Assume now that the process does not stop before stage $t$. Then $X_1,\dots,X_t$ are pairwise disjoint nonempty sets, and an induction on $i$ using step 2.2 gives $|R_i|\le(1-\rho)|R_{i-1}|$ for every $i\le t$. Hence $|R_t|\le(1-\rho)^t n<(\rho\epsilon/16)n$ by step 2.1, while $|X_1|\ge\rho n$ by step 2.2. [step 2.1, step 2.2, algebra]

4.1 Put $Y_1:=X_1\cup R_t$ and $Y_i:=X_i$ for $2\le i\le t$. Then $Y_1,\dots,Y_t$ partition $V(G)$. Writing $x:=|X_1|$, $r:=|R_t|$, $y:=|Y_1|=x+r$ and $\alpha:=r/x$, step 3.2 gives $\alpha<\epsilon/16$. [step 3.2, algebra]

5.1 If $d_G(X_1,X_1)\le\epsilon/2$, then $e_G(Y_1,Y_1)\le e_G(X_1,X_1)+2ry$ because the new ordered edges are those incident with at least one vertex of $R_t$. Therefore $d_G(Y_1,Y_1)\le(\epsilon/2)(x/y)^2+2r/y\le\epsilon/2+2\alpha<\epsilon$. [step 4.1, algebra]

5.2 If instead $d_G(X_1,X_1)\ge1-\epsilon/2$, then $d_G(Y_1,Y_1)\ge d_G(X_1,X_1)(x/y)^2\ge(1-\epsilon/2)/(1+\alpha)^2$. Since $\alpha<\epsilon/16$ and $\epsilon<1/2$, one has $(1+\alpha)^2<(1+\epsilon/16)^2\le1+\epsilon/2$, so $d_G(Y_1,Y_1)>(1-\epsilon/2)/(1+\epsilon/2)>1-\epsilon$. [step 4.1, algebra]

6.1 In the situation of steps 3.2 and 4.1, step 5.1 or 5.2 handles $Y_1$, while each $Y_i=X_i$ for $i\ge2$ already has self-density at most $\epsilon/2$ or at least $1-\epsilon/2$. Therefore every part of the partition has self-density at most $\epsilon$ or at least $1-\epsilon$. [step 2.2, step 4.1, step 5.1, step 5.2]

7.1 Step 3.1 settles the case where the extraction stops early, and step 6.1 settles the case where it reaches stage $t$. So $B:=t$ works for every $H$ and $\epsilon$. [step 2.1, step 3.1, step 6.1] ∎
