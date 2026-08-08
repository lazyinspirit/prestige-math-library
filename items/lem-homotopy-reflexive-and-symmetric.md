---
id: lem-homotopy-reflexive-and-symmetric
kind: lemma
title: "Homotopy relative to a subspace is reflexive and symmetric"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-homotopy-relative-and-path-homotopy, thm-product-universal-property, thm-continuity-characterisations-top, def-subspace-topology-top, lem-real-line-is-a-metric-space]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "Homotopy lecture notes (University of Padua)"
      url: "https://www.math.unipd.it/~maraston/Topologia2/Topo2_1011_homotopy.pdf"
pipeline_run: null
---

## Statement

Let $A\subseteq X$. Every continuous map $f:X\to Y$ is homotopic to itself rel $A$. If $f\simeq_A g$, then $g\simeq_A f$.

## Facts & Assumptions

**Given:** Topological spaces $X,Y$, a subspace $A\subseteq X$, continuous maps $f,g:X\to Y$, and, for symmetry, a homotopy $H:X\times I\to Y$ from $f$ to $g$ rel $A$.

[A1] A homotopy rel $A$ is a continuous $K:X\times I\to Y$ with $K(x,0)$ and $K(x,1)$ the prescribed endpoint maps and $K(a,t)$ equal to their common value for every $a\in A$ and $t\in I$ ([[def-homotopy-relative-and-path-homotopy]]).

[L1] The projections from a product are continuous, and a map into a product is continuous exactly when all of its components are continuous ([[thm-product-universal-property]]).

[L2] A map is continuous exactly when preimages of open sets are open ([[thm-continuity-characterisations-top]], condition (b)).

[L3] In the usual topology of $\mathbb R$, the open balls are the intervals $(u-r,u+r)$; $I=[0,1]$ has the subspace topology ([[lem-real-line-is-a-metric-space]], [[def-subspace-topology-top]]).

## Proof

**Proof technique:** direct.

1.1 The projection $p_X:X\times I\to X$ is continuous by [L1]. For every open $V\subseteq Y$, $(f\circ p_X)^{-1}[V]=p_X^{-1}[f^{-1}[V]]$ is open, so $K_f(x,t):=f(x)$ is continuous by [L2]. [L1, L2]

1.2 The map $r:I\to I$, $r(t)=1-t$, is continuous: for $t_0\in I$ and an open neighbourhood $V=O\cap I$ of $r(t_0)$, with $O$ open in $\mathbb R$, [L3] gives $\varepsilon>0$ with $(r(t_0)-\varepsilon,r(t_0)+\varepsilon)\subseteq O$; then $U=(t_0-\varepsilon,t_0+\varepsilon)\cap I$ is an open neighbourhood of $t_0$ and $r[U]\subseteq V$, since $|r(t)-r(t_0)|=|t-t_0|$. [L3]

2.1 The homotopy $K_f$ has $K_f(x,0)=K_f(x,1)=f(x)$ and $K_f(a,t)=f(a)$ for $a\in A$, so it is a homotopy from $f$ to itself rel $A$. [step 1.1, A1]

2.2 The map $R:X\times I\to X\times I$, $R(x,t)=(x,r(t))$, is continuous because its components are continuous by step 1.2 and [L1]. For every open $V\subseteq Y$, $(H\circ R)^{-1}[V]=R^{-1}[H^{-1}[V]]$ is open, so $\overline H:=H\circ R$ is continuous by [L2]. [step 1.2, L1, L2]

3.1 One has $\overline H(x,0)=H(x,1)=g(x)$ and $\overline H(x,1)=H(x,0)=f(x)$; for $a\in A$, $\overline H(a,t)=H(a,1-t)=f(a)=g(a)$. Hence $\overline H$ is a homotopy from $g$ to $f$ rel $A$. [step 2.2, A1] ∎
