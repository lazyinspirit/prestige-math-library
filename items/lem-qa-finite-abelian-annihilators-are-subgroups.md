---
id: lem-qa-finite-abelian-annihilators-are-subgroups
kind: lemma
title: Annihilators of subgroups are subgroups
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qa-finite-abelian-subgroup-annihilator, thm-qa-finite-abelian-character-dual-is-finite-abelian-group, def-subgroup, def-additive-character-of-a-finite-abelian-group]
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---

## Statement

Let $G$ be a finite abelian group. For every subgroup $H\le G$, $H^\perp$ is a subgroup of $\widehat G$. For every subgroup $K\le\widehat G$, $K^\perp$ is a subgroup of $G$.

## Facts & Assumptions

**Given:** A finite abelian group $G$, a subgroup $H\le G$, and a subgroup $K\le\widehat G$; the annihilators are as defined in [[def-qa-finite-abelian-subgroup-annihilator]].

[F1] $\widehat G$ is a group under pointwise multiplication, with pointwise inverse and identity ([[thm-qa-finite-abelian-character-dual-is-finite-abelian-group]]).

[F2] A subgroup contains the identity and is closed under the operation and inverses ([[def-subgroup]]).

[F3] Every character satisfies $\chi(x+y)=\chi(x)\chi(y)$, $\chi(0)=1$, and $\chi(-x)=\chi(x)^{-1}$ ([[def-additive-character-of-a-finite-abelian-group]]).

## Proof

1.1 The trivial character is in $H^\perp$. If $\chi,\psi\in H^\perp$ and $h\in H$, then $(\chi\psi)(h)=\chi(h)\psi(h)=1$, and $\chi^{-1}(h)=\chi(h)^{-1}=1$. Thus $H^\perp$ contains the identity and is closed under pointwise product and inverse in the group $\widehat G$. [given, F1, F2, F3]

1.2 The identity $0$ of $G$ lies in $K^\perp$ by [F3]. If $g,h\in K^\perp$, then for every $\chi\in K$, $\chi(g+h)=\chi(g)\chi(h)=1$ and $\chi(-g)=\chi(g)^{-1}=1$. Therefore $K^\perp$ is closed under addition and inverses in $G$. [given, F2, F3]

2.1 By the subgroup criterion in [F2], steps 1.1 and 1.2 show respectively that $H^\perp\le\widehat G$ and $K^\perp\le G$. [F1, F2, step 1.1, step 1.2] ∎
