---
id: cor-maximal-subgroups-of-a-finite-p-group-are-frattini-hyperplanes
kind: corollary
title: "Maximal subgroups of a finite $p$-group are the inverse images of Frattini hyperplanes"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-frattini-quotient-is-the-largest-elementary-abelian-quotient, def-frattini-subgroup-of-a-finite-group, def-fp-basis-of-an-elementary-abelian-p-group, lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension, thm-correspondence-theorem-groups, def-maximal-subgroup-of-a-group, def-group-homomorphism]
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
    - title: "D. A. Craven, The Theory of p-Groups, §2.2"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, §3.1"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

Let $\pi:P\to E:=P/\Phi(P)$ be the quotient map. The maximal subgroups ([[def-maximal-subgroup-of-a-group]]) of a finite $p$-group $P$ are exactly the inverse images of codimension-one subgroups of $E$. Equivalently, they are the subgroups

$$\pi^{-1}(\ker\lambda)=\ker(\lambda\circ\pi)$$

for nonzero $\mathbb F_p$-linear homomorphisms $\lambda:E\to\mathbb Z/p$ ([[def-group-homomorphism]]).

## Facts & Assumptions

**Given:** A finite $p$-group $P$ and quotient map $\pi:P\to E:=P/\Phi(P)$.

[F1] The Frattini subgroup is the intersection of the maximal proper subgroups, so $\Phi(P)\le M$ for every maximal subgroup $M$ ([[def-frattini-subgroup-of-a-finite-group]]).

[L1] The quotient $E=P/\Phi(P)$ is elementary abelian ([[thm-frattini-quotient-is-the-largest-elementary-abelian-quotient]]).

[L2] Every independent subset extends to a basis, every spanning subset contains a basis, and all bases have equal finite size ([[lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension]], [[def-fp-basis-of-an-elementary-abelian-p-group]]).

[L3] Subgroups of $E$ correspond inclusion-preservingly to subgroups of $P$ containing $\Phi(P)$ ([[thm-correspondence-theorem-groups]]).

## Proof

**Proof technique:** direct.

1.1 If $M$ is maximal in $P$, [F1] and [L3] make $M/\Phi(P)$ maximal proper in $E$. Choose a basis of this subgroup and extend it by [L2] to a basis of $E$. Maximality permits exactly one added basis vector, since two would create a proper intermediate span. Thus $M/\Phi(P)$ has codimension one. [given, F1, L1, L2, L3, algebra]

2.1 The coordinate of the omitted basis vector defines a nonzero linear homomorphism $E\to\mathbb Z/p$ whose kernel is $M/\Phi(P)$. Conversely, let $\lambda:E\to\mathbb Z/p$ be linear and nonzero and choose $v\in E$ with $\lambda(v)=1$. Every $x\in E$ splits as $x=(x-\lambda(x)v)+\lambda(x)v$ with the first summand in $\ker\lambda$, and $v\notin\ker\lambda$, so a basis of $\ker\lambda$ together with $v$ spans $E$ and is independent; it is therefore a basis of $E$ by [L2], and $\ker\lambda$ has codimension one. Any subgroup strictly between $\ker\lambda$ and $E$ would contain some $y$ with $\lambda(y)\ne0$ and hence a scalar multiple of $y$ equal to $v$ modulo $\ker\lambda$, so it would be all of $E$; thus $\ker\lambda$ is maximal proper and [L3] makes its inverse image maximal in $P$. [step 1.1, L2, L3, given, algebra]

3.1 The quotient and inverse-image maps in [L3] are inverse, so steps 1.1 and 2.1 give the stated classification. The trivial group has neither maximal subgroups nor nonzero linear homomorphisms. [step 1.1, step 2.1, L3] ∎
