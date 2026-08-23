---
id: thm-burnside-basis-theorem
kind: theorem
title: "Burnside Basis Theorem"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-generation-is-detected-modulo-the-frattini-subgroup, def-minimal-generating-set-of-a-group, def-generator-rank-of-a-finite-p-group, def-fp-basis-of-an-elementary-abelian-p-group, lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension, thm-frattini-quotient-is-the-largest-elementary-abelian-quotient]
aliases: []
landmark: true
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
    - title: "D. A. Craven, The Theory of p-Groups, Theorem 2.28"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "K. Conrad, Generating Sets, Theorem 6.12"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/genset.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, Theorem 3.7"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

A subset $X$ of a finite $p$-group $P$ is a minimal generating set if and only if the quotient map restricts to a bijection from $X$ onto a basis of $P/\Phi(P)$. Equivalently, the indexed family $(x\Phi(P))_{x\in X}$ is a basis.

The restricted-bijection clause is essential: the image set alone would forget whether two distinct elements of $X$ lie in the same Frattini coset. Every basis in this theorem has $d(P)$ members ([[def-generator-rank-of-a-finite-p-group]]).

## Facts & Assumptions

**Given:** A finite $p$-group $P$, the quotient map $\pi:P\to P/\Phi(P)$, and a subset $X\subseteq P$.

[L1] A subset $S$ of a finite group $G$ generates $G$ if and only if its image generates $G/\Phi(G)$ ([[cor-generation-is-detected-modulo-the-frattini-subgroup]]).

[F1] A subset $X$ is a minimal generating set when it generates and no proper subset generates ([[def-minimal-generating-set-of-a-group]]).

[L2] Every finite elementary abelian $p$-group has a basis; every independent subset extends to a basis, every spanning subset contains a basis, and all bases have the same finite size ([[lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension]], [[def-fp-basis-of-an-elementary-abelian-p-group]]).

[L3] For a finite $p$-group $P$, the quotient $P/\Phi(P)$ is elementary abelian ([[thm-frattini-quotient-is-the-largest-elementary-abelian-quotient]]).

## Proof

**Proof technique:** direct.

1.1 For the forward direction, suppose $X$ is minimally generating. By [L1], $\pi(X)$ spans. If $x\in X$ mapped to zero, or if distinct $x,y\in X$ had the same image, deleting one of them would leave the same spanning image and [L1] would make a proper subset generate, contrary to [F1]. Thus $\pi|_X$ is injective. Any proper subset of $\pi(X)$ that spanned would likewise pull back to a proper generating subset of $X$, so $\pi(X)$ spans and no proper subset of it does. By [L2] it contains a basis $B$; since $B$ spans, the failure of every proper subset to span forces $B=\pi(X)$, so $\pi(X)$ is itself a basis. [given, L1, F1, L2, L3, algebra]

1.2 For the reverse direction, suppose $\pi|_X$ is a bijection onto a basis. The basis spans, so [L1] gives $\langle X\rangle=P$. Removing any $x\in X$ removes its distinct basis vector; the remaining basis vectors do not span, so [L1] says $X\setminus\{x\}$ does not generate. Thus $X$ is minimal by [F1]. [given, L1, F1, L2, L3, algebra]

2.1 Steps 1.1 and 1.2 prove both implications. For $P=1$, the quotient has the empty basis and the empty set is the minimal generating set, so the same statement applies. [step 1.1, step 1.2] ∎
