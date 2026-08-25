---
id: ex-the-commutator-pairings-of-the-dihedral-and-quaternion-groups-of-order-eight
kind: example
title: "The commutator pairings of $\\operatorname{Dih}(C_4)$ and $Q_8$ are the same, while the groups are not isomorphic"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-commutator-pairing-of-an-extraspecial-p-group, lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating, prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial, def-generalized-dihedral-group, def-quaternion-group-of-order-eight, def-order-in-a-group]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups (Hilary Term 2008), 48 pp."
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, 62 pp."
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
    - title: "D. Kaur and A. Kulshrestha, Characters of real special 2-groups (arXiv:1510.06583v1)"
      url: "https://arxiv.org/pdf/1510.06583"
---
## Example

The commutator pairings of $\operatorname{Dih}(C_4)$ and $Q_8$ are the same, while the groups are not isomorphic.

## Facts & Assumptions

**Given:** The objects and hypotheses in the Example.

[F1] For an extraspecial $p$-group $P$ with $Z(P)=\langle z\rangle$, the commutator pairing is the map $b_z(\bar x,\bar y)\in\mathbb Z/p$ determined by $[x,y]=z^{b_z(\bar x,\bar y)}$ ([[def-commutator-pairing-of-an-extraspecial-p-group]]).

[L1] The commutator pairing is independent of the coset representatives, is $\mathbb F_p$-bilinear on $P/Z(P)$, and is alternating ([[lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating]]).

[L2] The generalized dihedral group $\operatorname{Dih}(C_4)$ and the quaternion group $Q_8$ are extraspecial of order $8$, with six and two solutions of $x^2=1$ respectively ([[prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial]]).

[L3] $$\operatorname{Dih}(A)=A\rtimes C_2.$$ ([[def-generalized-dihedral-group]]).

[L4] $$Q_8\;:=\;\{\,1,\,-1,\,i,\,-i,\,j,\,-j,\,k,\,-k\,\}\;\subseteq\;\mathbb{H}^{\times}.$$ ([[def-quaternion-group-of-order-eight]]).

[L5] **The order of a finite group.** Let $G$ be a group whose underlying set is finite, so that $G \approx n$ for some $n \in \mathbb{N}$. ([[def-order-in-a-group]]).


## Verification

**Proof technique:** direct.

1.1 In $\operatorname{Dih}(C_4)$ the images of $r$ and $s$ form a basis of the central quotient and $[r,s]=r^2$, so the pairing sends that basis pair to $1$. [F1, L1, L2, L3, algebra]

2.1 In $Q_8$ the images of $i$ and $j$ form a basis and $[i,j]=-1$, so the pairing again sends that basis pair to $1$; the two pairings agree in these coordinates. [F1, L4, step 1.1, algebra]

3.1 The groups are nevertheless not isomorphic, because six elements satisfy $x^2=1$ in the first and two in the second. [L2, L5, step 2.1] ∎
