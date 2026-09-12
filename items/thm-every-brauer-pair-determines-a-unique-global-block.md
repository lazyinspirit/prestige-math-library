---
id: thm-every-brauer-pair-determines-a-unique-global-block
kind: theorem
title: Every Brauer pair determines a unique global block
deps: [thm-brauer-pair-order-is-independent-of-the-normal-chain, lem-brauer-homomorphism-is-conjugation-equivariant]
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: pipeline
verification:
  audited: 2026-09-12
sources:
  references:
    - title: Jacobsen, Block fusion systems and the center of the group ring, Lemma 2.32 and Theorem 2.33, pp.18–19; general-field lifting proved locally
      url: https://www.math.ku.dk/bibliotek/arkivet/phd-theses/phd14mwj.pdf
proof_strategy: direct
---

## Statement

Every local Brauer pair $(P,e)$ belongs to exactly one global block $b$ of $kG$. Conjugate local pairs belong to the same global block, and comparable local pairs belong to the same global block.

## Facts & Assumptions

**Given:** A finite group $G$, a field $k$ of characteristic $p$, and local Brauer pairs.

[F1] Every subgroup of a pair has a unique subpair; at a normal subgroup inclusion is normal inclusion. ([[thm-brauer-pair-order-is-independent-of-the-normal-chain]])

[F2] Conjugation commutes with Brauer projection. ([[lem-brauer-homomorphism-is-conjugation-equivariant]])

## Proof

**Proof technique:** direct.

1.1 Apply unique descent to $1\le P$. Its unique pair $(1,b)$ has $b$ a block of $kC_G(1)=kG$. Since $1\trianglelefteq P$, the normal criterion says exactly that $b$ is $P$-fixed and $\operatorname{Br}_P(b)e=e$. A global block is central, hence $P$-fixed. Thus descent is equivalent to membership, proving existence and uniqueness of the global block. [F1]

2.1 For $g\in G$, centrality gives ${}^g b=b$; equivariance gives $\operatorname{Br}_{{}^gP}(b){}^g e={}^g(\operatorname{Br}_P(b)e)={}^g e$. Therefore conjugate pairs have the same block by step 1.1. If $(Q,f)\le(P,e)$, the unique descent $(1,c)$ below $(Q,f)$ is below $(P,e)$ by transitivity. Its uniqueness forces $c=b$. [F1, F2, step 1.1] ∎

## Sources

Jacobsen, Block fusion systems and the center of the group ring, Lemma 2.32 and Theorem 2.33, pp.18–19; general-field lifting proved locally. Local argument and conventions as displayed above.
