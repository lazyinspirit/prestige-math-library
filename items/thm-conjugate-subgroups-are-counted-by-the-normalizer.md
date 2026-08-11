---
id: thm-conjugate-subgroups-are-counted-by-the-normalizer
kind: theorem
title: "The conjugates of $H$ are in bijection with $G/N_G(H)$ and, for finite $G$, number $[G:N_G(H)]$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-orbit-stabilizer, cor-orbit-stabilizer-cardinality, def-normalizer-of-a-subgroup, lem-centralizers-and-normalizers-are-subgroups, thm-conjugation-is-an-automorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "P. Brosnan, Undergraduate Algebra Notes, 3.14: G-Sets, Corollary 3.110"
      url: "https://www.math.umd.edu/~pbrosnan/notes/ugalg/sect0035.html"
pipeline_run: null
---

## Statement

Let $H\le G$. The rule

$$G/N_G(H)\longrightarrow\{gHg^{-1}:g\in G\},\qquad gN_G(H)\longmapsto gHg^{-1},$$

is a well-defined bijection. If $G$ is finite, the number of distinct conjugates
of $H$ is $[G:N_G(H)]$.

## Facts & Assumptions

**Given:** A group $G$ and a subgroup $H\le G$.

[L1] Orbit-stabiliser identifies an orbit with the cosets of its stabilizer ([[thm-orbit-stabilizer]]).

[L2] The cardinality of a finite orbit is the index of its stabilizer ([[cor-orbit-stabilizer-cardinality]]).

[L3] The normalizer is $N_G(H)=\{g:gHg^{-1}=H\}$ ([[def-normalizer-of-a-subgroup]]).

[L4] The normalizer is a subgroup of $G$ ([[lem-centralizers-and-normalizers-are-subgroups]]).

[L5] Conjugation by each $g\in G$ is an automorphism of $G$ ([[thm-conjugation-is-an-automorphism]]).

## Proof

**Proof technique:** direct.

1.1 Let $G$ act on the set of subgroups of $G$ by $g\cdot K=gKg^{-1}$. By [L5], conjugation sends subgroups to subgroups, and the conjugation identities give the action laws. [L5]

2.1 The orbit of $H$ is its set of conjugates, while [L3] says that its stabilizer is $N_G(H)$, a subgroup by [L4]. [step 1.1, L3, L4]

3.1 Applying [L1] gives the displayed bijection, and [L2] gives the finite count $[G:N_G(H)]$. [step 2.1, L1, L2] ∎
