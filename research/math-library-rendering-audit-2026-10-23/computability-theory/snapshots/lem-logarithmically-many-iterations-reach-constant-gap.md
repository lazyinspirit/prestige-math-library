---
id: lem-logarithmically-many-iterations-reach-constant-gap
kind: lemma
title: "Logarithmic iteration reaches a constant unsatisfaction gap"
status: published
origin: pipeline
deps:
  - lem-one-transformation-preserves-satisfiability
  - lem-one-transformation-amplifies-gap
  - lem-one-transformation-has-constant-factor-growth
  - def-constraint-graph-and-labeling-value
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP Theorem by Gap Amplification, §1.3 Theorem 1.5 and the logarithmic-iteration paragraph, printed pp. 4–5"
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach, §18.5 (iteration of Lemma 18.28 log m times), printed p. 370"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Let $t$ be the fixed integer of [[lem-one-transformation-amplifies-gap]], let
$\alpha=\min(1/2,\kappa\beta c/\sqrt t)>0$ be its cap, let $T:=T_t$ and let
$C:=C_E\ge1$ be the edge-growth constant of
[[lem-one-transformation-has-constant-factor-growth]]. For every finite binary
constraint graph $G_0$ over $\Sigma_\star$ with $m=\lvert E(G_0)\rvert\ge1$
edge records and $\operatorname{UNSAT}(G_0)>0$, the iterates
$G_k:=T^k(G_0)$ at $k:=\lceil\log_2 m\rceil$ satisfy
$$\operatorname{UNSAT}(G_k)\ge\alpha,\qquad \lvert E(G_k)\rvert\le C^k m=m^{O(1)}.$$
If instead $\operatorname{UNSAT}(G_0)=0$, then $\operatorname{UNSAT}(G_k)=0$
for every $k\ge0$: all iterates of a satisfiable graph are satisfiable.

## Facts & Assumptions

**Given:** Fix the fixed integer $t$, the map $T=T_t$ and the constants $\alpha>0$ and $C=C_E\ge1$.

[F1] For every finite binary constraint graph $G$ over $\Sigma_\star$, $\operatorname{UNSAT}(T(G))\ge\min(2\operatorname{UNSAT}(G),\alpha)$. ([[lem-one-transformation-amplifies-gap]])

[F2] $T$ is a deterministic map from finite $\Sigma_\star$-graphs to finite $\Sigma_\star$-graphs, the same transformation may be used in every round, and $\alpha=\min(1/2,\kappa\beta c/\sqrt t)>0$. ([[lem-one-transformation-amplifies-gap]])

[F3] For every finite $\Sigma_\star$-graph $G$ with $m=\lvert E(G)\rvert$ edge records, $\lvert E(T(G))\rvert\le C\,m$, where $C=C_E\ge1$ is a constant fixed before any input graph is given. ([[lem-one-transformation-has-constant-factor-growth]])

[F4] For every finite $\Sigma_\star$-graph $G$ with $\operatorname{val}(G)=1$, $\operatorname{val}(T(G))=1$; equivalently $\operatorname{UNSAT}(G)=0$ implies $\operatorname{UNSAT}(T(G))=0$. ([[lem-one-transformation-preserves-satisfiability]])

[F5] For a labeling $\sigma$ the number $\operatorname{val}_\sigma(G)$ is the fraction of ordinary edges satisfied when $E(G)\ne\varnothing$, and $\operatorname{UNSAT}(G)=\min_\sigma(1-\operatorname{val}_\sigma(G))$; hence for a graph with $m\ge1$ edges and $\operatorname{UNSAT}(G)>0$ every labeling violates at least one edge, so $\operatorname{UNSAT}(G)\ge1/m$. ([[def-constraint-graph-and-labeling-value]])

## Proof

**Given:** Use the fixed $T$, $\alpha$ and $C$, and let $G_0$ be an arbitrary finite $\Sigma_\star$-graph with $m=\lvert E(G_0)\rvert\ge1$ edge records and $\operatorname{UNSAT}(G_0)>0$.

1.1 Put $k:=\lceil\log_2 m\rceil$ and $u_i:=\operatorname{UNSAT}(T^i(G_0))$ for $0\le i\le k$, where $T^0$ is the identity. By [F2] every iterate $T^i(G_0)$ is again a finite $\Sigma_\star$-graph, so all $u_i$ are defined and [F1] and [F3] can be applied to each of them. [F2, given]

1.2 Since $m\ge1$ and $u_0=\operatorname{UNSAT}(G_0)>0$, every labeling of $G_0$ violates at least one of the $m$ edge records, so by [F5] $u_0\ge1/m$. [F5, given, algebra]

2.1 We prove $u_i\ge\min(2^iu_0,\alpha)$ for all $0\le i\le k$ by induction on $i$. For $i=0$ this reads $u_0\ge\min(u_0,\alpha)$, which holds because $\alpha>0$. For the induction step, assume $u_i\ge\min(2^iu_0,\alpha)$; then [F1] applied to the finite $\Sigma_\star$-graph $T^i(G_0)$ of step 1.1 gives $u_{i+1}\ge\min(2u_i,\alpha)\ge\min\bigl(2\min(2^iu_0,\alpha),\alpha\bigr)=\min(2^{i+1}u_0,\alpha)$, using that $x\mapsto\min(2x,\alpha)$ is nondecreasing and $\min(2a,2\alpha,\alpha)=\min(2a,\alpha)$ for $\alpha>0$. [F1, F2, step 1.1, algebra]

2.2 We prove $\lvert E(T^i(G_0))\rvert\le C^im$ for all $0\le i\le k$ by induction on $i$: for $i=0$ this is $\lvert E(G_0)\rvert=m$; for the step, [F3] applied to the finite graph $T^i(G_0)$ gives $\lvert E(T^{i+1}(G_0))\rvert\le C\lvert E(T^i(G_0))\rvert\le C^{i+1}m$. In particular $\lvert E(G_k)\rvert\le C^km$. [F3, step 1.1, algebra]

2.3 If $\operatorname{UNSAT}(G_0)=0$, then equivalently $\operatorname{val}(G_0)=1$ by [F5], and [F4] applied to $G=T^i(G_0)$ for $i=0,\dots$ gives $\operatorname{val}(T^{i+1}(G_0))=1$ whenever $\operatorname{val}(T^i(G_0))=1$; inductively $\operatorname{UNSAT}(T^i(G_0))=0$ for every $i\ge0$, so every iterate of a satisfiable graph is satisfiable. [F4, F5, step 1.1, algebra]

3.1 Since $k=\lceil\log_2m\rceil$ gives $2^k\ge m$, step 1.2 yields $2^ku_0\ge2^k/m\ge1$, and step 2.1 yields $u_k\ge\min(2^ku_0,\alpha)\ge\min(1,\alpha)=\alpha$ because $\alpha\le1/2<1$ by [F2]. Moreover $k\le\log_2m+1$ and $C\ge1$, so $C^k\le C^{\log_2m+1}=C\,m^{\log_2C}$ and therefore $\lvert E(G_k)\rvert\le C^km\le C\,m^{1+\log_2C}=m^{O(1)}$ by step 2.2. With step 2.3 this proves both clauses for the arbitrary graph $G_0$. [F2, step 1.2, step 2.1, step 2.2, step 2.3, algebra] ∎

## Remarks

The point of the iteration is that the doubling lemma's cap $\alpha$ is reached after only $\lceil\log_2m\rceil$ rounds once the initial unsatisfaction is positive, because a positive value on an $m$-edge graph is at least $1/m$; the growth lemma keeps the size polynomial, $m^{O(1)}$, so no round is ever applied to an exponential-size object. The same fixed $t$, the same $\alpha$ and the same map $T$ are used in every round, and the satisfiable case is preserved separately by the completeness lemma. No choice principle is used: all iterates are determined by the fixed deterministic map $T$.
