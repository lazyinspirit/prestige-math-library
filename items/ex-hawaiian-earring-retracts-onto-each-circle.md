---
id: ex-hawaiian-earring-retracts-onto-each-circle
kind: example
title: "The Hawaiian earring retracts onto each of its circles"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-hawaiian-earring-is-compact-and-path-connected, def-retraction-and-deformation-retract, thm-continuity-characterisations-top, def-subspace-topology-top, cor-archimedean-reciprocal, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Example 1.25"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Example

For every $n\ge1$, the Hawaiian earring admits a retraction onto its circle $C_n$.

## Facts & Assumptions

**Given:** The Hawaiian earring $\mathbb H=\bigcup_{m\ge1}C_m$ and a fixed integer $n\ge1$.

[F1] For every integer $m\ge1$, $C_m$ is the circle of radius $1/m$ centred at $(1/m,0)$, and $\mathbb H=\bigcup_{m\ge1}C_m$ ([[prop-hawaiian-earring-is-compact-and-path-connected]]).

[F2] A continuous map $r:X\to A$ that restricts to the identity on $A$ is a retraction ([[def-retraction-and-deformation-retract]]).

[L1] A function is continuous exactly when the preimage of every open set is open ([[thm-continuity-characterisations-top]]).

[F3] Open subsets of a subspace are intersections with ambient open sets ([[def-subspace-topology-top]]).

[L2] For every real $\varepsilon>0$ there is an integer $N\ge1$ with $1/N<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[L3] The Euclidean norm satisfies the reverse triangle inequality $|\lVert u\rVert_2-\lVert v\rVert_2|\le\lVert u-v\rVert_2$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

## Verification

**Proof technique:** constructive.

1.1 Define $r_n:\mathbb H\to C_n$ by $r_n(x)=x$ for $x\in C_n$ and $r_n(x)=0$ for $x\in C_m$ with $m\ne n$. Distinct circles meet only at $0$: subtracting their equations $x_1^2+x_2^2=2x_1/m$ and $x_1^2+x_2^2=2x_1/k$ gives $x_1=x_2=0$. Thus the clauses agree and define a function. [given, F1, construct, algebra]

2.1 Let $x\in C_m\setminus\{0\}$ and put $d=\lVert x\rVert_2>0$. By [L2], choose $N$ with $2/N<d/2$; then every $C_k$ with $k\ge N$ lies in $B(0,d/2)$ and is disjoint from $B(x,d/2)$. For each of the finitely many $k<N$ with $k\ne m$, the positive number $|\lVert x-(1/k,0)\rVert_2-1/k|$ and [L3] give a ball about $x$ missing $C_k$; intersect these finitely many balls with $B(x,d/2)$. The resulting relative neighbourhood in $\mathbb H$ meets only $C_m$, so there $r_n$ is the identity when $m=n$ and the constant map $0$ when $m\ne n$. [step 1.1, F1, L2, L3, algebra]

3.1 Let $V\subseteq C_n$ be open and let $x\in r_n^{-1}[V]$. If $x\ne0$ and $x\in C_m$, step 2.1 gives a relative open neighbourhood $N$ of $x$ meeting only $C_m$. When $m=n$, write $V=O\cap C_n$ by [F3] and replace $N$ by $N\cap O$; the identity clause of $r_n$ then maps it into $V$. When $m\ne n$, one has $r_n(x)=0\in V$ and the constant clause maps all of $N$ into $V$. If $x=0$, then $0\in V$; write $V=O\cap C_n$ and choose an ambient open neighbourhood $W$ of $0$ with $W\subseteq O$. Every point of $W\cap C_n$ is fixed and every point of $W\cap C_m$ for $m\ne n$ maps to $0$, so $W\cap\mathbb H\subseteq r_n^{-1}[V]$. Thus every point of $r_n^{-1}[V]$ has a relative open neighbourhood inside it, making that preimage open. The criterion [L1] now shows that $r_n$ is continuous. [step 1.1, step 2.1, F3, L1]

4.1 The continuous map $r_n$ restricts to the identity on $C_n$, so it is a retraction of $\mathbb H$ onto $C_n$. [step 3.1, F2, discharge-construct] ∎
