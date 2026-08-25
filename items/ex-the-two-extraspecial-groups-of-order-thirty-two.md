---
id: ex-the-two-extraspecial-groups-of-order-thirty-two
kind: example
title: "The two extraspecial groups of order $32$ have $20$ and $12$ solutions of $x^2=1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial, thm-a-central-product-of-extraspecial-p-groups-is-extraspecial, lem-a-central-product-of-two-quaternion-groups-is-a-central-product-of-two-dihedral-groups, lem-counting-elements-of-order-dividing-two-in-a-central-product-of-extraspecial-two-groups, thm-classification-of-extraspecial-two-groups, def-order-in-a-group, def-finite-cardinality]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
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

The two extraspecial groups of order $32$ have $20$ and $12$ solutions of $x^2=1$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the Example.

[L1] The generalized dihedral group $\operatorname{Dih}(C_4)$ and the quaternion group $Q_8$ are extraspecial of order $8$, with six and two solutions of $x^2=1$ respectively ([[prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial]]).

[L2] If $P_1$ and $P_2$ are extraspecial $2$-groups with $t_i$ solutions of $x^2=1$, then $P_1\circ P_2$ has $(t_1t_2+(|P_1|-t_1)(|P_2|-t_2))/2$ such solutions ([[lem-counting-elements-of-order-dividing-two-in-a-central-product-of-extraspecial-two-groups]]).

[L3] $Q_8\circ Q_8\cong\operatorname{Dih}(C_4)\circ\operatorname{Dih}(C_4)$ ([[lem-a-central-product-of-two-quaternion-groups-is-a-central-product-of-two-dihedral-groups]]).

[L4] For each $n\ge1$ there are exactly two extraspecial groups of order $2^{1+2n}$ up to isomorphism, with $2^{2n}+2^{n}$ and $2^{2n}-2^{n}$ solutions of $x^2=1$ ([[thm-classification-of-extraspecial-two-groups]]).

[L5] **The order of a finite group.** Let $G$ be a group whose underlying set is finite, so that $G \approx n$ for some $n \in \mathbb{N}$. ([[def-order-in-a-group]]).

[L6] A set $A$ is **finite** when $A \approx n$ for some $n \in \mathbb{N}$. ([[def-finite-cardinality]]).

[L7] A central product of extraspecial $2$-groups identified along their centres is extraspecial and has order $|E_1||E_2|/2$ ([[thm-a-central-product-of-extraspecial-p-groups-is-extraspecial]]).


## Verification

**Proof technique:** direct.

1.1 The two factors have eight elements each, with six and two solutions of $x^2=1$ respectively; each central product below is extraspecial of order $8\cdot8/2=32$. [L1, L5, L7]

2.1 For two dihedral factors the formula gives $(36+4)/2=20$, and for a dihedral and a quaternion factor it gives $(12+12)/2=12$. [L2, L6, step 1.1, algebra]

3.1 These are the values $2^{4}+2^{2}$ and $2^{4}-2^{2}$ predicted by the classification, and the two central products with two quaternion factors and with two dihedral factors give the same group. [L2, L3, L4, step 2.1] ∎
