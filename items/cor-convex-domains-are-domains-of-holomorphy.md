---
id: cor-convex-domains-are-domains-of-holomorphy
kind: corollary
title: "Convex domains are domains of holomorphy"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-convex-domains-are-holomorphically-convex,
       thm-cartan-thullen-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Exercise 2.1.7 and Theorem 2.6.3"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, Theorems 5 and 6"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Statement

Every convex domain in $\mathbb C^m$ is a domain of holomorphy.

## Facts & Assumptions

**Given:** A convex domain $\Omega\subseteq\mathbb C^m$.

[L1] Convex domains are holomorphically convex
([[thm-convex-domains-are-holomorphically-convex]]).

[L2] For domains in $\mathbb C^m$, holomorphic convexity is equivalent to being
a domain of holomorphy ([[thm-cartan-thullen-theorem]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the convex domain $\Omega$ is holomorphically convex. [L1, given]

2.1 Applying [L2] to step 1.1 shows that $\Omega$ is a domain of holomorphy. [L2, step 1.1] ∎
