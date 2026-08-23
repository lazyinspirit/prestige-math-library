---
id: thm-frattini-quotient-is-the-largest-elementary-abelian-quotient
kind: theorem
title: "The Frattini quotient is the largest elementary abelian quotient of a finite $p$-group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-elementary-abelian-p-group, lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces, def-fp-basis-of-an-elementary-abelian-p-group, lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension, def-frattini-subgroup-of-a-finite-group, lem-frattini-subgroup-is-characteristic, thm-maximal-subgroups-of-finite-nilpotent-groups, thm-finite-p-groups-are-nilpotent, thm-correspondence-theorem-groups, cor-prime-order-group-is-cyclic, thm-lagrange, def-quotient-group]
aliases: []
landmark: true
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

For a finite $p$-group $P$, the quotient $P/\Phi(P)$ is elementary abelian ([[def-elementary-abelian-p-group]], [[def-quotient-group]]), and for $N\trianglelefteq P$ the quotient $P/N$ is elementary abelian if and only if $\Phi(P)\le N$.

## Facts & Assumptions

**Given:** A finite $p$-group $P$, its Frattini subgroup $\Phi(P)$, and a normal subgroup $N\trianglelefteq P$.

[F1] For a finite group $G$, $\Phi(G)$ is the intersection of all maximal proper subgroups; for $G=1$ the intersection is $G$ ([[def-frattini-subgroup-of-a-finite-group]]).

[L1] Every finite $p$-group is nilpotent; every maximal proper subgroup of a finite nilpotent group is normal and has prime index; Lagrange's theorem makes that index divide $|P|=p^n$, so the index is $p$; and every group of prime order is cyclic ([[thm-finite-p-groups-are-nilpotent]], [[thm-maximal-subgroups-of-finite-nilpotent-groups]], [[thm-lagrange]], [[cor-prime-order-group-is-cyclic]]).

[L2] Every finite elementary abelian $p$-group has its canonical $\mathbb F_p$-linear structure, has a basis, and every independent subset extends to a basis ([[lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces]], [[def-fp-basis-of-an-elementary-abelian-p-group]], [[lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension]]).

[L3] For $N\trianglelefteq G$, subgroups of $G/N$ correspond inclusion-preservingly to subgroups of $G$ containing $N$ ([[thm-correspondence-theorem-groups]]).

[L4] For every finite group $G$, $\Phi(G)$ is characteristic and hence normal ([[lem-frattini-subgroup-is-characteristic]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], each maximal subgroup $M$ of $P$ is normal with $P/M$ cyclic of order $p$. Hence every commutator and every $p$th power lies in every $M$. Their images are therefore trivial modulo the normal subgroup $\Phi(P)$ from [L4] and [F1], so $P/\Phi(P)$ is abelian of exponent at most $p$, and thus elementary abelian, including the trivial quotient. [given, F1, L1, L4, algebra]

1.2 For the forward direction of the kernel criterion, suppose $P/N$ is elementary abelian and let $x\notin N$. The nonzero vector $xN$ extends by [L2] to a basis of $P/N$. The span of the other basis vectors is a maximal proper subgroup not containing $xN$; by [L3], its preimage is a maximal subgroup of $P$ containing $N$ but not $x$. Thus $x\notin\Phi(P)$, and so $\Phi(P)\le N$. [given, L2, L3, algebra]

2.1 For the reverse direction, suppose $\Phi(P)\le N$. Step 1.1 places every commutator and every $p$th power of $P$ inside $\Phi(P)$ and hence inside $N$, so $P/N$ is abelian and every element of it has $p$th power the identity. It is therefore elementary abelian, including the trivial quotient $N=P$. Together with step 1.2 this proves the iff. [step 1.1, step 1.2, F1, algebra] ∎
