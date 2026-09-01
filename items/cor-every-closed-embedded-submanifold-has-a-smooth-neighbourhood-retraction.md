---
id: cor-every-closed-embedded-submanifold-has-a-smooth-neighbourhood-retraction
kind: corollary
title: "Every closed embedded submanifold has a smooth neighborhood retraction"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Tubular Neighborhoods"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let $i:S\hookrightarrow M$ be a closed smooth embedded submanifold. Then $S$ has
an open neighbourhood in $M$ that retracts smoothly onto $S$.

## Facts & Assumptions

**Given:** A closed smooth embedded submanifold $i:S\hookrightarrow M$.

[L1] The ambient manifold tubular neighbourhood theorem provides a
diffeomorphism $\Phi:\Omega\to U$ from a normal-bundle neighbourhood of the
zero section onto an open neighbourhood $U$ of $S$
([[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]]).

## Proof
**Proof technique:** direct.

1.1 Let $\pi:\Omega\to S$ be the bundle projection, and define $$r:=\pi\circ\Phi^{-1}:U\to S.$$ This map is smooth because $\pi$ and $\Phi^{-1}$ are smooth. [L1, given, construct]

2.1 For $p\in S$, one has $\Phi^{-1}(p)=(p,0)$, so $r(p)=p$. Therefore $r$ is a smooth retraction of $U$ onto $S$. [step 1.1, algebra] ∎
