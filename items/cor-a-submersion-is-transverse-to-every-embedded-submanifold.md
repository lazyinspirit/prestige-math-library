---
id: cor-a-submersion-is-transverse-to-every-embedded-submanifold
kind: corollary
title: "A submersion is transverse to every embedded submanifold"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-a-smooth-map-transverse-to-an-embedded-submanifold,
       def-immersion-submersion-and-constant-rank-map]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

If $F:M\to N$ is a submersion, then $F\pitchfork Z$ for every embedded
submanifold $Z\subseteq N$.

## Facts & Assumptions

**Given:** A submersion $F:M\to N$ and an embedded submanifold $Z\subseteq N$.

[F1] A submersion has surjective differential at every point ([[def-immersion-submersion-and-constant-rank-map]]).

[F2] Transversality to $Z$ means $dF_p(T_pM)+T_{F(p)}Z=T_{F(p)}N$ at each point of $F^{-1}(Z)$ ([[def-a-smooth-map-transverse-to-an-embedded-submanifold]]).

## Proof
**Proof technique:** direct.

1.1 Let $p\in F^{-1}(Z)$. By [F1], $dF_p(T_pM)=T_{F(p)}N$. [F1, given]

2.1 Therefore $dF_p(T_pM)+T_{F(p)}Z=T_{F(p)}N$, so [F2] gives $F\pitchfork Z$ at $p$. [F2, step 1.1]

3.1 Since $p$ was arbitrary, $F$ is transverse to every embedded submanifold. [step 2.1] ∎