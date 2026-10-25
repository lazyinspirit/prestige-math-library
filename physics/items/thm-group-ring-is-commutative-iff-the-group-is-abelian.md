---
id: thm-group-ring-is-commutative-iff-the-group-is-abelian
kind: theorem
title: "For a field $k$, the group algebra $k[G]$ is commutative if and only if $G$ is abelian"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-field, def-group-ring, thm-group-ring-is-a-unital-algebra-with-basis-g]
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
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 1.1"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
pipeline_run: null
---

## Statement

Let $k$ be a field and let $G$ be a group. Then the group algebra $k[G]$ is
commutative if and only if $G$ is abelian.

## Facts & Assumptions

**Given:** A field $k$ and a group $G$.

[L1] The basis vectors $[g]$ of $k[G]$ satisfy $[g][h]=[gh]$, and every element of $k[G]$ is a unique finite $k$-linear combination of them ([[thm-group-ring-is-a-unital-algebra-with-basis-g]], [[def-group-ring]]).

## Proof

**Proof technique:** direct.

1.1 If $G$ is abelian, then $[g][h]=[gh]=[hg]=[h][g]$ for all $g,h \in G$. Bilinearity of multiplication then makes every two finite $k$-linear combinations commute, so $k[G]$ is commutative. [L1, given]

1.2 Conversely, if $k[G]$ is commutative, then for every $g,h \in G$ one has $[gh]=[g][h]=[h][g]=[hg]$. By the uniqueness of the basis expansion in [L1], this forces $gh=hg$. Hence $G$ is abelian. [L1, given]

2.1 Steps 1.1 and 1.2 prove the two directions of the equivalence. [step 1.1, step 1.2] ∎
