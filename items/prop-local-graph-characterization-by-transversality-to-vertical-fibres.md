---
id: prop-local-graph-characterization-by-transversality-to-vertical-fibres
kind: proposition
title: "An $m$-dimensional submanifold transverse to vertical fibres is locally a graph"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-transverse-embedded-submanifolds,
       thm-smooth-inverse-function-theorem-on-manifolds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let $S\subseteq M\times N$ be an embedded submanifold with $\dim S=\dim M$, and
let $(x_0,y_0)\in S$. If $S$ is transverse at $(x_0,y_0)$ to the vertical
fibre $\{x_0\}\times N$, then there exist neighbourhoods $U\subseteq M$ of
$x_0$ and $V\subseteq N$ of $y_0$ and a smooth map $f:U\to V$ such that

$$
S\cap(U\times V)=\{(x,f(x)):x\in U\}.
$$

## Facts & Assumptions

**Given:** An embedded submanifold $S\subseteq M\times N$ with $\dim S=\dim M$, transverse to the vertical fibre $\{x_0\}\times N$ at $(x_0,y_0)\in S$.

[F1] Transversality of embedded submanifolds means that their tangent spaces span the ambient tangent space at the intersection point ([[def-transverse-embedded-submanifolds]]).

[L1] A smooth map with invertible differential at a point is a local diffeomorphism there ([[thm-smooth-inverse-function-theorem-on-manifolds]]).

## Proof
**Proof technique:** direct.

1.1 Let $\pi_M:M\times N\to M$ be the first projection. A tangent vector $v\in T_{(x_0,y_0)}S$ lies in the kernel of $d(\pi_M|_S)_{(x_0,y_0)}$ exactly when it is tangent to the vertical fibre $\{x_0\}\times N$. By [F1], transversality gives $$ T_{(x_0,y_0)}S+T_{(x_0,y_0)}(\{x_0\}\times N)=T_{x_0}M\times T_{y_0}N, $$ so $d(\pi_M|_S)_{(x_0,y_0)}$ is surjective. Because $\dim T_{(x_0,y_0)}S=\dim T_{x_0}M$, this surjective linear map is an isomorphism. [F1, given, algebra]

2.1 Therefore [L1] gives neighbourhoods $W\subseteq S$ of $(x_0,y_0)$ and $U\subseteq M$ of $x_0$ such that $\pi_M|_W:W\to U$ is a diffeomorphism. Shrinking in the product if necessary, write $W=S\cap(U\times V)$ for some neighbourhood $V$ of $y_0$. [L1, step 1.1, choose]

3.1 Define $f:=\pi_N\circ(\pi_M|_W)^{-1}:U\to V$. Then $$ W=\{(x,f(x)):x\in U\}, $$ so $S$ is locally the graph of $f$. [step 2.1, construct] ∎
