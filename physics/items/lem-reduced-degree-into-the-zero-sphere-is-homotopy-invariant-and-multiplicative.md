---
id: lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative
kind: lemma
title: "Reduced degree into the 0-sphere is homotopy invariant and multiplicative"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-reduced-degree-into-the-zero-sphere, def-euclidean-spheres-and-closed-balls, def-subspace-topology-top, thm-connected-subsets-of-r-are-intervals, thm-product-of-connected-spaces]
justified_by: []
aliases: []
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, §2.1 and §3.1"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Degree opening paragraph, printed p. 134 (degree properties: homotopy invariance and multiplicativity), together with the reduced homology $\\widetilde H_0$ of §2.1"
dependency_level: 1
---

## Statement

Let $(P,s)$ be a balanced oriented finite $0$-manifold, so that every map
$P\to S^0$ has a reduced degree, and let $f:P\to S^0$ be a map
([[def-reduced-degree-into-the-zero-sphere]]).

(i) If $F:P\times[0,1]\to S^0$ is continuous and $F_t(x):=F(x,t)$, then
$F_t=F_0$ for every $t\in[0,1]$; in particular $\deg F_t=\deg F_0$.

(ii) If $g:S^0\to S^0$ is any map and $\deg g$ denotes its reduced degree as a
self-map of $S^0$, then $\deg(g\circ f)=\deg(g)\deg(f)$.

## Facts & Assumptions

**Given:** A balanced oriented finite $0$-manifold $(P,s)$ with
$\sum_{x\in P}s(x)=0$ and a map $f:P\to S^0$.

[F1] $S^0=\{-1,+1\}$ is oriented by the boundary orientation of $[-1,1]$: the
point $+1$ has sign $+1$ and $-1$ has sign $-1$. A reduced degree is defined
only for a **balanced** source: $\sum_{x\in P}s(x)=0$, and then
$\deg(h)=\frac12\sum_{x\in P}s(x)h(x)\in\mathbb Z$ for a map $h:P\to S^0$. For
$P=S^0$ itself this reads
$\deg(h)=\frac{h(+1)-h(-1)}{2}\in\{-1,0,+1\}$
([[def-reduced-degree-into-the-zero-sphere]]).

[F2] $S^0=S_2(0,1)\subseteq\mathbb R$ carries the subspace topology
([[def-euclidean-spheres-and-closed-balls]], [[def-subspace-topology-top]]). The
interval $[0,1]$ is order-convex, hence connected, and a product of connected
spaces is connected
([[thm-connected-subsets-of-r-are-intervals]],
[[thm-product-of-connected-spaces]]); in particular every
$\{x\}\times[0,1]\subseteq P\times[0,1]$ is connected.

[F3] In $S^0=\{-1,+1\}\subseteq\mathbb R$ the two singletons are open for the
subspace topology: $\{+1\}=S^0\cap B_2(+1,1)$ and
$\{-1\}=S^0\cap B_2(-1,1)$ ([[def-euclidean-spheres-and-closed-balls]],
[[def-subspace-topology-top]]). A continuous map from a connected space into
$S^0$ is therefore constant: the preimages of the two disjoint open singletons
would otherwise separate the domain.

## Proof

**Proof technique:** direct; split the composition law by the three possible
reduced degrees of the self-map $g$.

1.1 The product $P\times[0,1]$ is the disjoint union of the connected subsets $\{x\}\times[0,1]$, one for each $x\in P$; a continuous map from a connected space into $S^0$ is constant, so $F$ is constant on each $\{x\}\times[0,1]$, hence $F_t(x)=F(x,t)=F(x,0)=F_0(x)$ for all $x\in P$ and $t\in[0,1]$; equal maps have equal reduced degree, which proves (i). [F2, F3, algebra]

1.2 Suppose $g$ is not constant. A map $S^0\to S^0$ is determined by the pair $\bigl(g(+1),g(-1)\bigr)$, so a nonconstant $g$ sends $+1$ and $-1$ to different values; hence $g$ is either the identity, with $\sigma:=+1$ and $g(y)=y$ for both $y$, or the antipodal map $g(y)=-y$, with $\sigma:=-1$, so that $g(y)=\sigma y$ for all $y\in S^0$; then $g\circ f=\sigma f$ and, by linearity of the defining signed count, $\deg(g\circ f)=\frac12\sum_x s(x)\sigma f(x)=\sigma\deg(f)$, while $\sigma=\deg(g)$ by [F1], the identity and the antipodal map having reduced degrees $+1$ and $-1$; thus $\deg(g\circ f)=\deg(g)\deg(f)$. [F1, algebra]

2.1 If $g$ is constant with value $c\in S^0$, then $g\circ f$ is the constant map $c$ and $\deg(g\circ f)=\frac12 c\sum_{x\in P}s(x)=0$ by balance, while $\deg(g)=\frac12(c-c)=0$ by [F1]; hence again $\deg(g\circ f)=0=\deg(g)\deg(f)$, which completes (ii). [F1, step 1.2, algebra] ∎
