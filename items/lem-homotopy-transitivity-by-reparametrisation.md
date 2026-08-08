---
id: lem-homotopy-transitivity-by-reparametrisation
kind: lemma
title: "Two homotopies relative to the same subspace concatenate after piecewise-linear reparametrisation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-homotopy-relative-and-path-homotopy, thm-continuity-characterisations-top, def-subspace-topology-top, thm-product-universal-property, def-topological-space, lem-real-line-is-a-metric-space]
aliases: []
landmark: true
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

Let $A\subseteq X$ and let $f,g,h:X\to Y$ be continuous. If $F$ is a homotopy from $f$ to $g$ rel $A$ and $G$ is a homotopy from $g$ to $h$ rel $A$, then

$$K(x,t):=\begin{cases}F(x,2t),&0\le t\le \tfrac12,\\G(x,2t-1),&\tfrac12\le t\le1\end{cases}$$

is a continuous homotopy from $f$ to $h$ rel $A$.

## Facts & Assumptions

**Given:** Topological spaces $X,Y$, a subspace $A\subseteq X$, continuous maps $f,g,h:X\to Y$, and homotopies $F:f\simeq_A g$ and $G:g\simeq_A h$.

[A1] The endpoint and relative conditions for $F$ and $G$ are those of [[def-homotopy-relative-and-path-homotopy]].

[L1] A map is continuous exactly when preimages of closed sets are closed ([[thm-continuity-characterisations-top]], condition (c)).

[L2] In a subspace, closed sets are exactly traces of ambient closed sets; restrictions of continuous maps to subspaces are continuous ([[def-subspace-topology-top]]).

[L3] Product projections are continuous, and a map into a product is continuous exactly when its components are continuous ([[thm-product-universal-property]]).

[L4] A finite union of closed sets is closed, and the complement of an open set is closed ([[def-topological-space]]).

[L5] In the usual topology of $\mathbb R$, open balls are open intervals; $I=[0,1]$ has the subspace topology ([[lem-real-line-is-a-metric-space]], [[def-subspace-topology-top]]).

## Proof

**Proof technique:** direct.

1.1 The sets $I_0=[0,\tfrac12]$ and $I_1=[\tfrac12,1]$ are closed in $I$: their complements are respectively $I\cap(\tfrac12,\tfrac32)$ and $I\cap(-\tfrac12,\tfrac12)$, traces of open intervals of $\mathbb R$. Hence $D_0=X\times I_0$ and $D_1=X\times I_1$ are closed in $X\times I$, because they are the preimages of $I_0,I_1$ under the continuous time projection. [L1, L3, L4, L5]

1.2 The maps $a_0:I_0\to I$, $a_0(t)=2t$, and $a_1:I_1\to I$, $a_1(t)=2t-1$, are continuous. Indeed, at any $t_0$ and for any ambient open interval of radius $\varepsilon$ about $a_j(t_0)$, the relative interval of radius $\varepsilon/2$ about $t_0$ maps into it, since $|a_j(t)-a_j(t_0)|=2|t-t_0|$; [L5] turns these intervals into the required subspace neighbourhoods. [L5]

2.1 Define $r_j:D_j\to X\times I$ by $r_j(x,t)=(x,a_j(t))$. The first component is the restricted product projection and the second is $a_j$ after the time projection, so $r_j$ is continuous by [L2], step 1.2 and [L3]. [step 1.2, L2, L3]

3.1 The maps $K_0:=F\circ r_0:D_0\to Y$ and $K_1:=G\circ r_1:D_1\to Y$ are continuous: for every closed $C\subseteq Y$, $K_j^{-1}[C]=r_j^{-1}[F^{-1}[C]]$ or $r_j^{-1}[G^{-1}[C]]$, which is closed by [L1]. On $D_0\cap D_1=X\times\{\tfrac12\}$ they agree, since $K_0(x,\tfrac12)=F(x,1)=g(x)=G(x,0)=K_1(x,\tfrac12)$. [step 2.1, A1, L1]

4.1 Thus the displayed clauses define one function $K:X\times I\to Y$. If $C\subseteq Y$ is closed, then $K^{-1}[C]$ is the union of $K_0^{-1}[C]$, regarded as a closed subset of $X\times I$ through the closed subspace $D_0$, and $K_1^{-1}[C]$, regarded likewise through $D_1$. Each is closed by [L2] and steps 1.1 and 3.1, so their union is closed by [L4]. Hence $K$ is continuous by [L1]. [step 1.1, step 3.1, L1, L2, L4]

5.1 At $t=0$ the first clause gives $K(x,0)=F(x,0)=f(x)$, and at $t=1$ the second gives $K(x,1)=G(x,1)=h(x)$. If $a\in A$, both clauses give the common value $f(a)=g(a)=h(a)$ for every $t$. Therefore $K$ is a homotopy from $f$ to $h$ rel $A$. [step 4.1, A1] ∎

## Remarks

The continuity argument uses only a cover by the two closed sets $D_0,D_1$ and proves the finite pasting step directly. No assertion about an infinite closed cover is used.
