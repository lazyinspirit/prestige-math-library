---
id: lem-two-noncommuting-elements-of-an-extraspecial-p-group-generate-a-subgroup-of-order-p-cubed
kind: lemma
title: "Two elements of an extraspecial $p$-group with nontrivial commutator generate an extraspecial subgroup of order $p^3$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-equivalent-characterisations-of-an-extraspecial-p-group, def-commutator-pairing-of-an-extraspecial-p-group, lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating, def-generated-subgroup, thm-lagrange, lem-cyclic-quotient-by-center-implies-abelian, def-quotient-group, lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces, def-fp-basis-of-an-elementary-abelian-p-group, def-center-of-a-group, def-elementary-abelian-p-group, cor-prime-order-group-is-cyclic, lem-subgroups-of-finite-p-groups-are-p-groups, def-commutator-and-commutator-subgroup]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, \u00a73.2, proof of Theorem 3.9"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, Theorem 2.40(iii)"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

Let $P$ be an extraspecial $p$-group with $Z(P)=\langle z\rangle$, and let
$x,y\in P$ satisfy $[x,y]\ne e$. Then $Q=\langle x,y\rangle$ contains $Z(P)$, has
order $p^3$, is nonabelian, and is extraspecial with $Z(Q)=Z(P)$.

## Facts & Assumptions

**Given:** An extraspecial $p$-group $P$ with $Z(P)=\langle z\rangle$ of order $p$, the quotient $V=P/Z(P)$ with its commutator pairing $b_z$, and elements $x,y\in P$ with $[x,y]\ne e$.

[F1] The commutator pairing of $P$ relative to $z$ is the map $b_z:V\times V\to\mathbb F_p$ determined by $[x,y]=z^{\,b_z(\bar x,\bar y)}$ ([[def-commutator-pairing-of-an-extraspecial-p-group]]).

[F2] $Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}$ ([[def-center-of-a-group]]).

[F3] A subset $S$ of an elementary abelian $p$-group is independent when $\prod_{s\in S}s^{a_s}=e$ with finite support forces every $a_s=0$, and it spans when every element is such a product ([[def-fp-basis-of-an-elementary-abelian-p-group]]).

[F4] An elementary abelian $p$-group is a finite abelian $p$-group in which every nonidentity element has order $p$ ([[def-elementary-abelian-p-group]]).

[L1] For a finite $p$-group $P$ the following are equivalent: $P$ is extraspecial; $P$ is nonabelian, $|Z(P)|=p$ and $P/Z(P)$ is elementary abelian; $P$ is nonabelian and $Z(P)=P'=\Phi(P)$ has order $p$ ([[prop-equivalent-characterisations-of-an-extraspecial-p-group]]).

[L2] The commutator pairing is well defined, $\mathbb F_p$-bilinear and alternating, and satisfies $b_z(\bar y,\bar x)=-b_z(\bar x,\bar y)$ ([[lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating]]).

[L3] In a finite group whose order is prime, every $g\ne e$ has order $|G|$ and generates $G$ ([[cor-prime-order-group-is-cyclic]]).

[L4] For a finite group $G$ and $H\le G$, $|G|=[G:H]\,|H|$ ([[thm-lagrange]]).

[L5] If the quotient group $G/Z(G)$ is cyclic, then $G$ is abelian ([[lem-cyclic-quotient-by-center-implies-abelian]]).

[L6] $\langle S\rangle$ is the smallest subgroup of $G$ containing $S$ ([[def-generated-subgroup]]).

[L7] The rule $\bar a\cdot x=x^a$ gives every elementary abelian $p$-group its canonical $\mathbb F_p$-vector-space structure ([[lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces]]).

[L8] If $P$ is a finite $p$-group and $H\le P$, then $|H|=p^k$ for some $k\in\mathbb N$ ([[lem-subgroups-of-finite-p-groups-are-p-groups]]).

## Proof

**Proof technique:** direct.

1.1 The element $[x,y]$ lies in $[P,P]=Z(P)$ and is not the identity, so it generates the group $Z(P)$ of order $p$; since $[x,y]\in Q$, this gives $Z(P)\le Q$. [F2, L1, L3, L6]

1.2 Write $c=b_z(\bar x,\bar y)$; then $z^{c}=[x,y]\ne e$, so $c\ne0$ in $\mathbb F_p$. [F1]

2.1 The pair $\bar x,\bar y$ is independent in $V$: if $\bar x^{\,a}\bar y^{\,d}$ is the identity of $V$, pairing with $\bar y$ gives $a\,c=0$ and hence $a=0$, and pairing with $\bar x$ gives $-d\,c=0$ and hence $d=0$. [F3, L2, L7, step 1.2]

3.1 Since $Z(P)\le Q$, the image of $Q$ in $V$ is $Q/Z(P)$, and it equals $\langle\bar x,\bar y\rangle=\{\bar x^{\,a}\bar y^{\,d}:a,d\in\mathbb F_p\}$; independence makes the $p^2$ displayed products pairwise distinct, so $|Q/Z(P)|=p^2$ and Lagrange gives $|Q|=p\cdot p^{2}=p^{3}$. [F3, L4, L6, L7, step 1.1, step 2.1]

4.1 $Q$ is nonabelian because $[x,y]\ne e$, and $Z(P)\le Z(Q)$ because an element central in $P$ is central in the subgroup $Q$ containing it. The order of $Z(Q)$ is a power of $p$ dividing $p^3$ and is not $p^3$; were it $p^2$, the quotient $Q/Z(Q)$ would have order $p$ and hence be cyclic, forcing $Q$ abelian. So $|Z(Q)|=p$ and $Z(Q)=Z(P)$. [F2, L3, L4, L5, L8, step 1.1, step 3.1]

5.1 The quotient $Q/Z(Q)=Q/Z(P)$ is a subgroup of the elementary abelian group $V$, hence is itself a finite abelian $p$-group all of whose nonidentity elements have order $p$; so $Q$ is a nonabelian finite $p$-group with centre of order $p$ and elementary abelian central quotient, and the characterisation makes it extraspecial. [F4, L1, step 3.1, step 4.1] ∎

## Remarks

The hypothesis is on the pair, not on either element separately: $x$ and $y$ are automatically noncentral, since a central element commutes with everything, but two noncentral elements can commute and then generate an abelian subgroup.
