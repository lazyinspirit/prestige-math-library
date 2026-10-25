---
id: thm-coalgebra-homomorphisms-are-closed-under-identities-and-composition
kind: theorem
title: "Coalgebra homomorphisms are closed under identities and composition"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-coalgebra-for-a-comonad-and-coalgebra-homomorphism]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Exercise 5.2.iii"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

For a comonad $G$, every identity on a $G$-coalgebra is a coalgebra homomorphism, and the composite of coalgebra homomorphisms is a coalgebra homomorphism.

## Facts & Assumptions

**Given:** $G$-coalgebras $(A,c)$, $(B,d)$, and $(C,e)$.

[L1] A coalgebra homomorphism $f:(A,c)\to(B,d)$ satisfies $G(f)c=df$ ([[def-coalgebra-for-a-comonad-and-coalgebra-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Functoriality gives $G(1_A)c=1_{GA}c=c=c1_A$, so $1_A$ is a coalgebra homomorphism by [L1]. [L1]

2.1 If $f:(A,c)\to(B,d)$ and $g:(B,d)\to(C,e)$ are coalgebra homomorphisms, then $G(gf)c=G(g)G(f)c=G(g)df=egf$. Thus $gf$ is a coalgebra homomorphism. [L1, step 1.1] ∎
