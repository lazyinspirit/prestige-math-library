---
id: prop-equivalent-characterisations-of-an-extraspecial-p-group
kind: proposition
title: "Three equivalent descriptions of an extraspecial $p$-group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-special-and-extraspecial-p-groups, def-elementary-abelian-p-group, thm-frattini-quotient-is-the-largest-elementary-abelian-quotient, thm-frattini-subgroup-formula-for-a-finite-p-group, def-pth-power-subgroup-of-a-group, thm-quotient-abelian-iff-contains-commutator-subgroup, lem-center-is-normal, def-quotient-group, thm-lagrange, def-finite-p-group, def-frattini-subgroup-of-a-finite-group, cor-prime-order-group-is-cyclic, def-commutator-and-commutator-subgroup, def-center-of-a-group]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, Definition 3.1 and \u00a72.2 Theorem 2.19"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, Definitions 2.28 and 2.30"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

For a finite $p$-group $P$ the following are equivalent: $P$ is extraspecial;
$P$ is nonabelian, $|Z(P)|=p$ and $P/Z(P)$ is elementary abelian; $P$ is
nonabelian and $Z(P)=P'=\Phi(P)$ has order $p$.

Here $P'=[P,P]$, $\Phi(P)$ is the Frattini subgroup, and quotients are those of
[[def-quotient-group]].

## Facts & Assumptions

**Given:** A prime $p$ and a finite $p$-group $P$ ([[def-finite-p-group]]).

[F1] A finite $p$-group $P$ is special when $Z(P)=P'=\Phi(P)$ is elementary abelian, and extraspecial when in addition $P$ is nonabelian and this common subgroup has order $p$ ([[def-special-and-extraspecial-p-groups]]).

[L1] For a finite $p$-group $P$, the quotient $P/\Phi(P)$ is elementary abelian, and for $N\trianglelefteq P$ the quotient $P/N$ is elementary abelian if and only if $\Phi(P)\le N$ ([[thm-frattini-quotient-is-the-largest-elementary-abelian-quotient]]).

[L2] For every finite $p$-group $P$, $\Phi(P)=P'P^p$, where $P^p=\langle g^p:g\in P\rangle$ ([[thm-frattini-subgroup-formula-for-a-finite-p-group]], [[def-pth-power-subgroup-of-a-group]]).

[L3] For $N\trianglelefteq G$, the quotient $G/N$ is abelian if and only if $[G,G]\subseteq N$ ([[thm-quotient-abelian-iff-contains-commutator-subgroup]]).

[L4] An elementary abelian $p$-group is a finite abelian $p$-group in which every nonidentity element has order $p$; the trivial group is permitted ([[def-elementary-abelian-p-group]]).

[L5] For every group $G$, the center $Z(G)$ is a normal subgroup of $G$ ([[lem-center-is-normal]]).

[L6] For a finite group $G$ and $H\le G$, $|G|=[G:H]\,|H|$ ([[thm-lagrange]]).

[L7] In a finite group whose order is prime, every $g\ne e$ has order $|G|$ and generates $G$ ([[cor-prime-order-group-is-cyclic]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $P$ is extraspecial. Then $P$ is nonabelian, $\Phi(P)=Z(P)$ has order $p$, and $P/\Phi(P)$ is elementary abelian; since $\Phi(P)=Z(P)$ this says $P/Z(P)$ is elementary abelian, the quotient being formed along a normal subgroup. So the second description holds. [F1, L1, L4, L5]

1.2 Suppose $P$ is nonabelian with $|Z(P)|=p$ and $P/Z(P)$ elementary abelian. Applying the elementary abelian criterion to the normal subgroup $Z(P)$ gives $\Phi(P)\le Z(P)$, and an elementary abelian quotient is abelian, so $P'\le Z(P)$. As $P$ is nonabelian, $P'\ne1$; a subgroup of the group $Z(P)$ of order $p$ has order $1$ or $p$, so $P'=Z(P)$. Then $\Phi(P)=P'P^p$ contains $P'=Z(P)$ and is contained in $Z(P)$, so $\Phi(P)=P'=Z(P)$ has order $p$, which is the third description. [L1, L2, L3, L5, L6]

1.3 Suppose $P$ is nonabelian with $Z(P)=P'=\Phi(P)$ of order $p$. A group of prime order is cyclic, hence abelian, and each of its nonidentity elements has order $p$, so this common subgroup is elementary abelian; it is a finite $p$-group because its order is $p$. Thus $P$ meets the definition and is extraspecial. [F1, L4, L7]

2.1 The three implications close a cycle, so the three descriptions are equivalent. [step 1.1, step 1.2, step 1.3] ∎

## Remarks

The nonabelian hypothesis does real work exactly once, in step 1.2, where it supplies $P'\ne1$. Dropping it leaves the cyclic group of order $p$ satisfying the second description with $Z(P)=P$ of order $p$ and trivial quotient, while its derived subgroup is trivial and the third description fails.
