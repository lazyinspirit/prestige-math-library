---
id: cor-frattini-free-finite-p-groups-are-elementary-abelian
kind: corollary
title: "A finite $p$-group has trivial Frattini subgroup exactly when it is elementary abelian"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-frattini-quotient-is-the-largest-elementary-abelian-quotient, def-elementary-abelian-p-group]
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
    - title: "D. A. Craven, The Theory of p-Groups, Proposition 2.24"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, Lemma 3.4"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

A finite $p$-group has trivial Frattini subgroup if and only if it is elementary abelian.

## Facts & Assumptions

**Given:** A finite $p$-group $P$.

[L1] For a finite $p$-group $P$, $P/\Phi(P)$ is elementary abelian, and $P/N$ is elementary abelian exactly when $\Phi(P)\le N$ ([[thm-frattini-quotient-is-the-largest-elementary-abelian-quotient]]).

[F1] An elementary abelian $p$-group is a finite abelian $p$-group in which every nonidentity element has order $p$; the trivial group is permitted ([[def-elementary-abelian-p-group]]).

## Proof

**Proof technique:** direct.

1.1 For the forward direction, if $\Phi(P)=1$, then [L1] identifies $P$ with its elementary abelian Frattini quotient. [given, L1, F1]

2.1 For the reverse direction, if $P$ is elementary abelian, apply the kernel criterion in [L1] with $N=1$ to obtain $\Phi(P)\le1$, hence $\Phi(P)=1$. [given, L1, F1] ∎
