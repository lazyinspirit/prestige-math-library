---
id: thm-whitney-approximation-for-manifold-valued-maps
kind: theorem
title: "Whitney approximation for manifold-valued maps"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-weak-whitney-proper-embedding-theorem,
       thm-whitney-approximation-for-euclidean-valued-maps,
       lem-a-fine-euclidean-approximation-lands-in-a-prescribed-tubular-neighbourhood,
       thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold,
       def-homotopy-relative-and-path-homotopy]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Smooth Approximation of Maps Between Manifolds"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let $F:M\to N$ be a continuous map between smooth manifolds. Then there exists a
smooth map $\widetilde F:M\to N$ homotopic to $F$.

## Facts & Assumptions

**Given:** A continuous map $F:M\to N$.

[L1] The target manifold admits a proper Euclidean embedding ([[thm-weak-whitney-proper-embedding-theorem]]).

[L2] Continuous Euclidean-valued maps admit smooth approximations with any positive continuous error function, and those approximations can be forced into a prescribed tubular neighbourhood ([[thm-whitney-approximation-for-euclidean-valued-maps]], [[lem-a-fine-euclidean-approximation-lands-in-a-prescribed-tubular-neighbourhood]]).

[L3] A closed embedded submanifold has a tubular neighbourhood in its ambient manifold, and homotopy is a continuous map on a product with $I=[0,1]$ ([[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]], [[def-homotopy-relative-and-path-homotopy]]).

## Proof
**Proof technique:** direct.

1.1 Choose a proper embedding $j:N\hookrightarrow\mathbb R^m$ from [L1]. By [L3], the embedded image $j(N)$ has a tubular neighbourhood $U$ with smooth retraction $r:U\to j(N)$. [L1, L3, given, choose]

2.1 Apply the fine-approximation lemma from [L2] to the continuous map $j\circ F:M\to\mathbb R^m$ and the tubular neighbourhood $U$, obtaining a positive continuous error function $\varepsilon$ whose $\varepsilon(p)$-ball around $j(F(p))$ lies in $U$. Then use the Euclidean Whitney theorem from [L2] to obtain a smooth map $H:M\to\mathbb R^m$ with $\|H(p)-j(F(p))\|<\varepsilon(p)$ for all $p$, hence with image in $U$. [L2, step 1.1, construct]

3.1 Define $$\widetilde F:=j^{-1}\circ r\circ H.$$ This map is smooth. For each $p\in M$ and $t\in I$, the point $(1-t)j(F(p))+tH(p)$ stays in the same $\varepsilon(p)$-ball around $j(F(p))$, hence stays in $U$ by step 2.1. Since $r$ fixes $j(N)$ pointwise, the formula $$(p,t)\mapsto j^{-1}\bigl(r((1-t)j(F(p))+tH(p))\bigr)$$ is therefore well defined and continuous on $M\times I$, and it gives a homotopy from $F$ to $\widetilde F$ in the sense of [L3]. [L3, step 1.1, step 2.1, algebra] ∎
