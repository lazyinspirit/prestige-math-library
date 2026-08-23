---
id: cor-every-nonfrattini-element-belongs-to-a-minimal-generating-set
kind: corollary
title: "Every element outside $\\Phi(P)$ belongs to a minimal generating set of $P$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-burnside-basis-theorem, def-frattini-subgroup-of-a-finite-group, lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension, thm-frattini-quotient-is-the-largest-elementary-abelian-quotient]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "M. van Beek, Topics in Finite p-Groups, remark after Theorem 3.7"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

Every element of $P\setminus\Phi(P)$ belongs to a minimal generating set of the finite $p$-group $P$.

## Facts & Assumptions

**Given:** A finite $p$-group $P$ and $x\in P\setminus\Phi(P)$ ([[def-frattini-subgroup-of-a-finite-group]]).

[L1] A subset $X\subseteq P$ is minimally generating exactly when the quotient map restricts to a bijection from $X$ onto a basis of $P/\Phi(P)$ ([[thm-burnside-basis-theorem]]).

[L2] Every independent subset of a finite elementary abelian $p$-group extends to a basis ([[lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension]]).

[L3] For a finite $p$-group $P$, the quotient $P/\Phi(P)$ is elementary abelian ([[thm-frattini-quotient-is-the-largest-elementary-abelian-quotient]]).

## Proof

**Proof technique:** direct.

1.1 By [L3] the quotient $P/\Phi(P)$ is a finite elementary abelian $p$-group, so [L2] applies to it. The coset $x\Phi(P)$ is nonzero, so its singleton is independent in $P/\Phi(P)$. [given, L2, L3, algebra]

2.1 Extend that singleton by [L2] to a finite basis. For every other basis vector choose one lift in $P$ and adjoin it to $x$. The quotient map restricts to a bijection from this lifted set onto the basis, so [L1] makes it a minimal generating set containing $x$. The assertion is vacuous for $P=1$. [step 1.1, L1, L2, given] ∎
