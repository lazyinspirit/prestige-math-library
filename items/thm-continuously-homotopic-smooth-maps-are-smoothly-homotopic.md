---
id: thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic
kind: theorem
title: "Continuously homotopic smooth maps are smoothly homotopic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-relative-whitney-approximation-for-manifold-valued-maps,
       def-homotopy-relative-and-path-homotopy,
       prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Smooth Approximation of Maps Between Manifolds"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

If two smooth maps $f_0,f_1:M\to N$ are continuously homotopic, then they are
smoothly homotopic.

## Facts & Assumptions

**Given:** Smooth maps $f_0,f_1:M\to N$ and a continuous homotopy
$H:M\times I\to N$ from $f_0$ to $f_1$.

[F1] Homotopies are maps on products with $I=[0,1]$
([[def-homotopy-relative-and-path-homotopy]]).

[L1] Products of smooth manifolds carry canonical smooth structures
([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]).

[L2] Relative manifold-valued approximation can smooth a continuous map while
fixing it on closed regions where it is already smooth
([[thm-relative-whitney-approximation-for-manifold-valued-maps]]).

## Proof
**Proof technique:** direct.

1.1 Choose a smooth function $\lambda:\mathbb R\to[0,1]$ with $\lambda(t)=0$ for $t\le1/3$ and $\lambda(t)=1$ for $t\ge2/3$. Define $$\widehat H(x,t):=H(x,\lambda(t))$$ on $M\times\mathbb R$. By [F1] and [L1], this is a continuous map on a smooth manifold; it is constant in $t$ on the closed collar regions $$A_0:=M\times(-\infty,1/3],\qquad A_1:=M\times[2/3,\infty),$$ so it is smooth on a neighbourhood of $A_0\cup A_1$. [F1, L1, given, construct]

2.1 Apply [L2] to the closed set $A_0\cup A_1\subseteq M\times\mathbb R$. We obtain a smooth map $\widetilde H:M\times\mathbb R\to N$ that agrees with $\widehat H$ on a neighbourhood of those collars. [L2, step 1.1, choose]

3.1 Restrict $\widetilde H$ to $M\times I$. Near $t=0$ it equals $f_0$, and near $t=1$ it equals $f_1$; after composing with a smooth reparameterization of $I$ that fixes the endpoints, this restriction becomes a smooth homotopy from $f_0$ to $f_1$. [F1, step 2.1, algebra] ∎
