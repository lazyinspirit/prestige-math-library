---
id: lem-locally-finite-union-of-sigma-locally-finite-bases
kind: lemma
title: 'A locally finite open cover by subspaces with $\sigma$-locally-finite bases yields a $\sigma$-locally-finite basis of the whole space'
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-discrete-family-and-sigma-bases, def-cover-refinement-and-local-finiteness, def-subspace-topology-top]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "UCR, Partitions of Unity and a Metrization Theorem of Smirnov"
      url: "https://math.ucr.edu/~res/math205A/smirnov.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal U$ be a locally finite open cover of $X$. If every $U\in\mathcal U$, with its subspace topology, has a $\sigma$-locally-finite open basis $\bigcup_n\mathcal B_{U,n}$, then $X$ has a $\sigma$-locally-finite open basis.

## Facts & Assumptions

**Given:** A locally finite open cover $\mathcal U$ and the stated relative bases.

[L1] A locally finite family has a neighbourhood at each point meeting only finitely many members ([[def-cover-refinement-and-local-finiteness]]).

[L2] A subspace-open set is the intersection of the subspace with an ambient open set ([[def-subspace-topology-top]]).

## Proof

**Proof technique:** direct.

1.1 Since every $U\in\mathcal U$ is open in $X$, every member of a relative open basis $\mathcal B_{U,n}$ is open in $X$ by [L2]. Put $\mathcal B_n=\bigcup_{U\in\mathcal U}\mathcal B_{U,n}$. [L2, construct]

2.1 The family $\mathcal B_n$ is locally finite. At $x$, take from [L1] a neighbourhood meeting only finitely many $U$; within each of those finitely many $U$, local finiteness of $\mathcal B_{U,n}$ supplies a neighbourhood meeting finitely many members, and their finite intersection meets only finitely many members of $\mathcal B_n$. [L1, step 1.1]

2.2 If $O$ is open and $x\in O$, choose $U\in\mathcal U$ containing $x$ and then a member of the basis of $U$ containing $x$ and contained in $O\cap U$. Thus $\bigcup_n\mathcal B_n$ is a basis of $X$. [step 1.1]

3.1 Steps 2.1 and 2.2 prove the result. [step 2.1, step 2.2] ∎
