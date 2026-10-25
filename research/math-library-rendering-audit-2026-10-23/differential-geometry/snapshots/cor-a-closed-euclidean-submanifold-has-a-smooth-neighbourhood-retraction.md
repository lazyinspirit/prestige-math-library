---
id: cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction
kind: corollary
title: "A closed Euclidean submanifold has a smooth neighborhood retraction"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-euclidean-tubular-neighbourhood-theorem, def-countable-choice, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Tubular Neighborhoods"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), which follows from the Axiom of Choice ([[def-axiom-of-choice]]). Every closed embedded smooth submanifold $S\subseteq\mathbb R^m$ has an open
neighbourhood $U$ and a smooth retraction $r:U\to S$.

## Facts & Assumptions

**Given:** Countable choice and a closed embedded smooth submanifold $S\subseteq\mathbb R^m$.

[L1] The Euclidean tubular neighbourhood theorem gives a diffeomorphism $E:\Omega_\delta\to U$ from a variable-radius normal neighbourhood onto an open neighbourhood $U$ of $S$ ([[thm-euclidean-tubular-neighbourhood-theorem]]).

## Proof
**Proof technique:** direct.

1.1 Countable choice supplies the hypothesis of [L1]; it is used only in obtaining its tubular diffeomorphism. Let $E:\Omega_\delta\to U$ be the tubular diffeomorphism from [L1]. The bundle projection $$\pi:\Omega_\delta\to S,\qquad \pi(p,v)=p,$$ is smooth. [L1, given, construct]

2.1 Define $r:=\pi\circ E^{-1}:U\to S$. This map is smooth, and for $p\in S$ one has $E^{-1}(p)=(p,0)$, so $r(p)=p$. Hence $r$ is a smooth retraction. [step 1.1, algebra] ∎
