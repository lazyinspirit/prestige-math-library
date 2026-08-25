---
id: cor-the-generator-rank-of-an-extraspecial-p-group-is-twice-its-symplectic-rank
kind: corollary
title: "An extraspecial $p$-group of order $p^{1+2n}$ has generator rank $2n$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-equivalent-characterisations-of-an-extraspecial-p-group, cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number, thm-burnside-basis-theorem, def-generator-rank-of-a-finite-p-group, lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension, def-frattini-subgroup-of-a-finite-group, def-fp-basis-of-an-elementary-abelian-p-group, lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces, def-center-of-a-group]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, Theorem 2.28 and \u00a73.2"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, Theorem 3.7"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

Let $P$ be an extraspecial $p$-group of order $p^{1+2n}$. Then
$\Phi(P)=Z(P)$ has order $p$, the Frattini quotient $P/\Phi(P)$ has order
$p^{2n}$, the generator rank is $d(P)=2n$, and every minimal generating set of
$P$ has exactly $2n$ elements.

## Facts & Assumptions

**Given:** An extraspecial $p$-group $P$ of order $p^{1+2n}$.

[F1] For a finite $p$-group $P$, the generator rank $d(P)$ is the common size of a basis of $P/\Phi(P)$ ([[def-generator-rank-of-a-finite-p-group]]).

[F2] A subset $S$ of an elementary abelian $p$-group spans when every element is a product $\prod_{s\in S}s^{a_s}$ with coefficients in $\mathbb F_p$, and is independent when such a product is the identity only for zero coefficients; a basis is an independent spanning subset ([[def-fp-basis-of-an-elementary-abelian-p-group]]).

[L1] For a finite $p$-group $P$ the following are equivalent: $P$ is extraspecial; $P$ is nonabelian, $|Z(P)|=p$ and $P/Z(P)$ is elementary abelian; $P$ is nonabelian and $Z(P)=P'=\Phi(P)$ has order $p$ ([[prop-equivalent-characterisations-of-an-extraspecial-p-group]]).

[L2] An extraspecial $p$-group has $\lvert P\rvert=p^{1+2n}$ with $n\ge1$ and $\lvert P/Z(P)\rvert=p^{2n}$ ([[cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number]]).

[L3] Every finite elementary abelian $p$-group has a basis; every independent subset extends to a basis, every spanning subset contains a basis, and all bases have the same finite size ([[lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension]]).

[L4] A subset $X$ of a finite $p$-group $P$ is a minimal generating set if and only if the quotient map restricts to a bijection from $X$ onto a basis of $P/\Phi(P)$ ([[thm-burnside-basis-theorem]]).

[L5] The rule $\bar a\cdot x=x^a$ gives every elementary abelian $p$-group its canonical $\mathbb F_p$-vector-space structure ([[lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces]]).

## Proof

**Proof technique:** direct.

1.1 By the third description in the characterisation, $\Phi(P)=Z(P)$ has order $p$, so the Frattini quotient is the central quotient. [L1]

1.2 The central quotient has order $p^{2n}$ and is elementary abelian. [L1, L2]

2.1 It therefore has a basis, and all of its bases have the same size, say $k$; independence and spanning make the map sending a coefficient family $(a_1,\dots,a_k)$ to the product of the corresponding powers a bijection from the $p^{k}$ coefficient families onto the group, so $p^{k}=p^{2n}$ and $k=2n$. [F2, L3, L5, step 1.1, step 1.2]

3.1 Hence $d(P)=2n$ by the definition of the generator rank, and by the Burnside basis theorem a minimal generating set of $P$ is carried bijectively onto a basis of $P/\Phi(P)$, so it has $2n$ elements. [F1, L4, step 2.1] ∎

## Remarks

The two clauses say different things. The first is about the quotient and is a count of a basis; the second is about $P$ itself and needs the Burnside basis theorem, because a generating set of $P$ of size $2n$ could a priori collapse in the quotient. It is the restricted-bijection clause of that theorem which rules that out.
