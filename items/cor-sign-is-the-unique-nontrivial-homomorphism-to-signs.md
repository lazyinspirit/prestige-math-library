---
id: cor-sign-is-the-unique-nontrivial-homomorphism-to-signs
kind: corollary
title: 'For $n\ge2$, sign is the unique nontrivial homomorphism $S_n\to\{+1,-1\}$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-transpositions-generate-the-symmetric-group, thm-sign-is-a-homomorphism,
       lem-group-homomorphism-basic-properties]
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
    - title: 'J. S. Milne, Group Theory, Remark 4.25'
      url: 'https://www.jmilne.org/math/CourseNotes/GT.pdf'
pipeline_run: null
---

## Statement

For $n\ge2$, the sign homomorphism is the unique nontrivial group homomorphism
$S_n\to\{+1,-1\}$.

## Facts & Assumptions

**Given:** A natural $n\ge2$ and a group homomorphism $\varphi:S_n\to\{+1,-1\}$.

[L1] The transpositions generate $S_n$, and sign is a homomorphism sending every transposition to $-1$ ([[thm-transpositions-generate-the-symmetric-group]], [[thm-sign-is-a-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Any two transpositions are conjugate in $S_n$: for their two-point supports, the identity handles equality, a transposition handles one common point, and the product of two disjoint transpositions handles disjoint supports, producing a permutation $\pi$ with $\pi(a\,b)\pi^{-1}=(c\,d)$. [given, L1]

2.1 Since $\{+1,-1\}$ is abelian, $\varphi(\pi\tau\pi^{-1})=\varphi(\tau)$; hence $\varphi$ takes one common value on every transposition. [step 1.1, L1]

3.1 By [L1], if the common value is $1$ then $\varphi$ is trivial. If it is $-1$, a product of $r$ transpositions has image $(-1)^r$, which is also its image under sign because sign sends every transposition to $-1$. Thus $\varphi=\operatorname{sgn}$, and sign is the unique nontrivial homomorphism. [step 2.1, L1] ∎
