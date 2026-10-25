---
id: cor-local-normal-form-for-immersions
kind: corollary
title: "Local normal form for immersions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-the-immersion-and-submersion-loci-are-open, thm-constant-rank-theorem-for-manifolds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, Immersions"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry, Proposition 6.3"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $F:M^m\to N^n$ be a smooth immersion at $p\in M$. Then there are charts near
$p$ and $F(p)$ in which the coordinate representative of $F$ is

$$u\longmapsto(u,0)$$

near the distinguished point.

## Facts & Assumptions

**Given:** A smooth map $F:M^m\to N^n$ that is an immersion at $p$.

[L1] The immersion locus is open ([[cor-the-immersion-and-submersion-loci-are-open]]).

[L2] A constant-rank-$m$ map has local normal form $(u,v)\mapsto(u,0)$ ([[thm-constant-rank-theorem-for-manifolds]]).

## Proof
**Proof technique:** direct.

1.1 Because $F$ is an immersion at $p$, the linear map $dF_p:T_pM\to T_{F(p)}N$ is injective. Its domain has dimension $m$, so its rank is $m$. Therefore [L1] supplies a neighbourhood of $p$ on which $F$ has constant rank $m$. [L1, given]

2.1 Apply [L2] with $r=m$. The source has no normal coordinates left, so the local model is exactly $u\mapsto(u,0)$. [step 1.1, L2]

3.1 This is the asserted immersion normal form. [step 2.1] ∎
