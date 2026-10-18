---
id: thm-smooth-inverse-function-theorem-on-manifolds
kind: theorem
title: "The smooth inverse function theorem on manifolds"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-differential-of-a-smooth-map, thm-chain-rule-for-differentials-of-smooth-maps, thm-euclidean-inverse-function-theorem, thm-higher-regularity-of-local-inverses, prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets, cor-the-tangent-space-of-an-n-manifold-has-dimension-n, def-c-r-and-smooth-maps-between-smooth-manifolds]
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
    - title: "John M. Lee, Introduction to Smooth Manifolds, The Inverse Function Theorem and Its Friends"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $F:M\to N$ be a smooth map and let $p\in M$. If $dF_p:T_pM\to T_{F(p)}N$ is
an isomorphism, then there are open neighbourhoods $U$ of $p$ and $V$ of
$F(p)$ such that $F|_U:U\to V$ is a diffeomorphism.

## Facts & Assumptions

**Given:** A smooth map $F:M\to N$ and a point $p\in M$ with $dF_p$ an isomorphism.

[F1] The differential of a smooth map is the induced linear map on tangent spaces ([[def-differential-of-a-smooth-map]]).

[L1] Differentials satisfy the chain rule ([[thm-chain-rule-for-differentials-of-smooth-maps]]).

[L2] In dimension $n\ge1$, a Euclidean $C^1$ map with invertible derivative at a point has a local $C^1$ inverse ([[thm-euclidean-inverse-function-theorem]]).

[L3] If the original Euclidean map is smooth, then its local inverse is smooth ([[thm-higher-regularity-of-local-inverses]]).

[L4] Chart maps and their inverses are smooth diffeomorphisms onto open Euclidean sets ([[prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]]).

[L5] The tangent space of a smooth $n$-manifold has dimension $n$, including $n=0$ ([[cor-the-tangent-space-of-an-n-manifold-has-dimension-n]]).

[L6] A smooth map is continuous and has smooth coordinate representatives on compatible chart neighbourhoods; maps on open subsets of $\mathbb R^0$ are declared smooth ([[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

## Proof
**Proof technique:** direct.

1.1 By [L5], the isomorphism $dF_p$ implies that $M$ and $N$ have the same dimension $n$. If $n=0$, smooth charts at $p$ and $F(p)$ have nonempty open images in the singleton $\mathbb R^0$, so their domains are the open singletons $U=\{p\}$ and $V=\{F(p)\}$. The restriction $F|_U:U\to V$ is bijective, and its inverse has the unique map $\mathbb R^0\to\mathbb R^0$ as its coordinate representative, which is smooth by [L6]. Thus the conclusion holds when $n=0$. For the remainder assume $n\ge1$. [L4, L5, L6, given, cases, algebra]

1.2 Choose smooth charts $(U_0,\varphi)$ at $p$ and $(V_0,\psi)$ at $F(p)$ with $F(U_0)\subseteq V_0$, as permitted by smoothness in [L6], and let $f:=\psi\circ F\circ\varphi^{-1}$. By [L4], the chart maps $\varphi^{-1}$ and $\psi$ are diffeomorphisms, so their differentials are linear isomorphisms. Applying [L1] gives $$ D f(\varphi(p))=d\psi_{F(p)}\circ dF_p\circ d(\varphi^{-1})_{\varphi(p)}. $$ Because $dF_p$ is an isomorphism by [F1], the Euclidean differential $D f(\varphi(p))$ is invertible. [F1, L1, L4, L6, given]

2.1 Since $n\ge1$, [L2] applies: after shrinking to open neighbourhoods $\widetilde U\subseteq\varphi(U_0)$ and $\widetilde V\subseteq\psi(V_0)$ of $\varphi(p)$ and $\psi(F(p))$, the restriction $f|\widetilde U:\widetilde U\to \widetilde V$ is a bijection with $C^1$ inverse. Since $f$ is smooth, [L3] upgrades that inverse to a smooth one. [step 1.1, step 1.2, L2, L3]

3.1 Put $U:=\varphi^{-1}(\widetilde U)$ and $V:=\psi^{-1}(\widetilde V)$. Then $F|_U=\psi^{-1}\circ(f|\widetilde U)\circ\varphi$, so $F|_U:U\to V$ is bijective. Its inverse is $\varphi^{-1}\circ(f|\widetilde U)^{-1}\circ\psi$, which is smooth by [L4] and step 2.1. [step 2.1, L4, construct]

4.1 Thus $F|_U$ is a bijective smooth map with smooth inverse, hence a diffeomorphism of neighbourhoods. [step 3.1, L4] ∎
