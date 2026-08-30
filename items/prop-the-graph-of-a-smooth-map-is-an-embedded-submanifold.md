---
id: prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold
kind: proposition
title: "The graph of a smooth map is an embedded submanifold"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-the-diagonal-is-an-embedded-submanifold, thm-a-regular-level-set-is-an-embedded-submanifold, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, Embedded Submanifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
---

## Statement

Let $F:M\to N$ be smooth. Its graph

$$\Gamma_F:=\{(p,F(p)):p\in M\}\subseteq M\times N$$

is an embedded submanifold of $M\times N$ of dimension $\dim M$.

## Facts & Assumptions

**Given:** A smooth map $F:M\to N$.

[L1] The diagonal $\Delta_N\subseteq N\times N$ is an embedded submanifold ([[prop-the-diagonal-is-an-embedded-submanifold]]).

[L2] A regular level set is an embedded submanifold ([[thm-a-regular-level-set-is-an-embedded-submanifold]]).

[L3] Products of smooth manifolds carry canonical product structures ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]).

## Proof
**Proof technique:** direct.

1.1 Consider the map $G:M\times N\to N\times N$ defined by $G(p,q)=(F(p),q)$. In product charts on $M\times N$ and $N\times N$, its representative has the form $(u,v)\mapsto(\widehat F(u),v)$, so $G$ is smooth. The graph satisfies $\Gamma_F=G^{-1}(\Delta_N)$. [L1, L3, given]

1.2 Fix $(p,F(p))\in\Gamma_F$. Choose a chart $\psi:V\to\Omega\subseteq\mathbb R^n$ on $N$ at $F(p)$. By [L3], the product chart $\psi\times\psi$ identifies a neighbourhood of $(F(p),F(p))$ in $N\times N$ with $\Omega\times\Omega$, and in these coordinates the diagonal from [L1] is the set $\{(a,b):a=b\}$. The difference map $D:\Omega\times\Omega\to\mathbb R^n$, $D(a,b)=b-a$, is a smooth submersion with zero fibre exactly that diagonal slice. [L1, L3, given, construct]

2.1 Choose a chart $\varphi:U\to\Lambda$ on $M$ at $p$ with $F(U)\subseteq V$, and define $H:=D\circ(\psi\times\psi)\circ G\circ(\varphi\times\psi)^{-1}:\Lambda\times\Omega\to\mathbb R^n$. Then $H(u,v)=v-\widehat F(u)$, so the Jacobian of $H$ has block form $\begin{bmatrix}-D\widehat F(u) & I_n\end{bmatrix}$ and is surjective at every point. Its zero fibre is exactly the graph in these coordinates. Thus $0$ is a regular value of $H$. [step 1.1, step 1.2, construct]

3.1 By [L2], the zero fibre of $H$ is an embedded codimension-$n$ submanifold of $M\times N$ near $(p,F(p))$. Since $(p,F(p))$ was arbitrary, $\Gamma_F$ is an embedded submanifold. Its ambient dimension is $\dim M+n$, so its dimension is $\dim M$. [L2, step 2.1] ∎
