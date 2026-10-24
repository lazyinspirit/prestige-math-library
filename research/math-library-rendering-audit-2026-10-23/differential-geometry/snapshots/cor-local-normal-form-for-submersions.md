---
id: cor-local-normal-form-for-submersions
kind: corollary
title: "Local normal form for submersions"
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
    - title: "John M. Lee, Introduction to Smooth Manifolds, Submersions"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry, Proposition 6.13"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $F:M^m\to N^n$ be a smooth submersion at $p\in M$. Then there are charts
near $p$ and $F(p)$ in which the coordinate representative of $F$ is

$$ (u,v)\longmapsto u $$

near the distinguished point.

## Facts & Assumptions

**Given:** A smooth map $F:M^m\to N^n$ that is a submersion at $p$.

[L1] The submersion locus is open ([[cor-the-immersion-and-submersion-loci-are-open]]).

[L2] A constant-rank-$n$ map has local normal form $(u,v)\mapsto(u,0)$ in adapted coordinates ([[thm-constant-rank-theorem-for-manifolds]]).

## Proof
**Proof technique:** direct.

1.1 Since $F$ is a submersion at $p$, the linear map $dF_p:T_pM\to T_{F(p)}N$ is surjective. Its target has dimension $n$, so its rank is $n$. Thus [L1] gives a neighbourhood on which $F$ has constant rank $n$. [L1, given]

2.1 Apply [L2] with $r=n$. The target normal factor has dimension $0$, so the normal form reads $(u,v)\mapsto u$. [step 1.1, L2]

3.1 This is the claimed submersion normal form. [step 2.1] ∎
