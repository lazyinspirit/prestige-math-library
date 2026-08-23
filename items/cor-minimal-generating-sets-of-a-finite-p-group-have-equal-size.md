---
id: cor-minimal-generating-sets-of-a-finite-p-group-have-equal-size
kind: corollary
title: "Minimal generating sets of a finite $p$-group have size $d(P)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-burnside-basis-theorem, def-generator-rank-of-a-finite-p-group, lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "K. Conrad, Generating Sets, consequences of Theorem 6.12"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/genset.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, Theorem 3.7"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

Every minimal generating set of a finite $p$-group $P$ has size $d(P)$, and every generating set contains a minimal generating subset of that size.

## Facts & Assumptions

**Given:** A finite $p$-group $P$.

[L1] A subset $X\subseteq P$ is minimally generating exactly when the quotient map restricts to a bijection from $X$ onto a basis of $P/\Phi(P)$ ([[thm-burnside-basis-theorem]]).

[L2] Every spanning subset of a finite elementary abelian $p$-group contains a basis, and all bases have the same finite size ([[lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension]]).

[F1] The generator rank $d(P)$ is the common size of a basis of $P/\Phi(P)$ ([[def-generator-rank-of-a-finite-p-group]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], every minimal generating set is in bijection with a quotient basis. All such bases have size $d(P)$ by [F1] and [L2]. [given, L1, L2, F1]

2.1 If $Y$ generates $P$, its quotient image spans. Choose by [L2] a basis contained in that finite image and, for each basis vector, retain one element of $Y$ mapping to it. The resulting subset maps bijectively onto the basis, so [L1] makes it minimally generating; step 1.1 gives its size. [given, step 1.1, L1, L2, algebra] ∎
