---
id: cor-rodl-in-the-edge-density-form
kind: corollary
title: "The edge-density form of Rödl's theorem: every nonempty $H$-free graph has a linearly large set of self-density at most $\\epsilon$ or at least $1-\\epsilon$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-rodl-every-h-free-graph-has-a-linear-restricted-set, lem-a-sparse-set-has-small-self-density, def-edge-density-between-vertex-sets, def-c-sparse-and-c-restricted-vertex-set, def-real-power]
justified_by: []
aliases: []
landmark: false
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
    - title: "J. Conlon, J. Fox, and B. Sudakov, Recent developments in graph Ramsey theory, sec. 3.3"
      url: "https://arxiv.org/pdf/1501.02474"
pipeline_run: null
---

## Statement

For every graph $H$ and every $\epsilon\in(0,\tfrac12)$ there exists
$\delta>0$ such that every nonempty $H$-free finite simple graph $G$ contains a
set $X\subseteq V(G)$ with $|X|\ge\delta|V(G)|$ and either
$d_G(X,X)\le\epsilon$ or $d_G(X,X)\ge1-\epsilon$.

## Facts & Assumptions

**Given:** A graph $H$ and a real $\epsilon\in(0,\tfrac12)$.

[L1] Rödl's theorem supplies a constant $\delta_0>0$ such that every nonempty $H$-free graph $G$ has an $(\epsilon/2)$-restricted set of size at least $\delta_0|V(G)|$ ([[cor-rodl-every-h-free-graph-has-a-linear-restricted-set]]).

[L2] A $(\epsilon/2)$-sparse set has self-density at most $\epsilon/2$, while a $(\epsilon/2)$-dense set has self-density at least $1-\epsilon/2-1/|X|$ ([[lem-a-sparse-set-has-small-self-density]]).

## Proof

**Proof technique:** direct.

1.1 Let $\delta_0$ be the constant from [L1] for the parameter $\epsilon/2$, and set $\delta:=\min\{\delta_0,\epsilon\delta_0/2\}$. [L1, choose]

2.1 If $G$ is nonempty and $H$-free, then [L1] gives a set $X$ with $|X|\ge\delta_0|V(G)|$ that is $(\epsilon/2)$-restricted. [step 1.1, L1]

3.1 If $X$ is $(\epsilon/2)$-sparse, then [L2] gives $d_G(X,X)\le\epsilon/2\le\epsilon$. [step 2.1, L2]

3.2 If $X$ is $(\epsilon/2)$-dense and $|X|\ge2/\epsilon$, then [L2] gives $d_G(X,X)\ge1-\epsilon$. If instead $|X|<2/\epsilon$, then $|V(G)|<2/(\epsilon\delta_0)$ by step 2.1, and the single-vertex set $\{v\}$ has self-density $0\le\epsilon$ and size $1>\delta|V(G)|$ by the choice of $\delta$ in step 1.1. [step 1.1, step 2.1, L2, algebra, cases]

4.1 In every case there is a set of size at least $\delta|V(G)|$ whose self-density is at most $\epsilon$ or at least $1-\epsilon$. [step 3.1, step 3.2, algebra] ∎
