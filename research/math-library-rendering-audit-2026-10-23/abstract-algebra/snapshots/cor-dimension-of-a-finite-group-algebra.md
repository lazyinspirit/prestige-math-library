---
id: cor-dimension-of-a-finite-group-algebra
kind: corollary
title: "If $G$ is finite then $\\dim_k k[G]=|G|$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-dimension, def-group-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Chapter 1 Section 1.1"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Statement

Let $k$ be a field and let $G$ be a finite group. Then the group algebra
$k[G]$ is finite-dimensional over $k$, with
$$\dim_k k[G]=|G|.$$

## Facts & Assumptions

**Given:** A field $k$ and a finite group $G$.

[L1] The module $k[G]$ is free on the set $G$, with basis $\{[g]:g\in G\}$ ([[def-group-ring]]).

[L2] The dimension of a finite-dimensional vector space is the size of any finite basis ([[def-dimension]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the set $\{[g]:g\in G\}$ is a basis of $k[G]$ indexed by the finite set $G$, so it has exactly $|G|$ elements. [L1, given]

2.1 Applying [L2] to that finite basis gives $\dim_k k[G]=|G|$. [step 1.1, L2] ∎
