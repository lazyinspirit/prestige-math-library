---
id: ex-maximal-abelian-subgroups-of-the-dihedral-group-of-order-eight
kind: example
title: "The three maximal abelian subgroups of $\\operatorname{Dih}(C_4)$ have order four, as the general bound predicts"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-maximal-abelian-subgroups-of-an-extraspecial-p-group-have-order-p-to-one-plus-n, prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial, cor-dihedral-groups-as-semidirect-products, thm-lagrange]
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

The three maximal abelian subgroups of $\operatorname{Dih}(C_4)$ have order four, as the general bound predicts.

## Facts & Assumptions

**Given:** The objects and hypotheses in the Example.

[L1] Every maximal abelian subgroup of an extraspecial $p$-group of order $p^{1+2n}$ has order $p^{1+n}$ ([[prop-maximal-abelian-subgroups-of-an-extraspecial-p-group-have-order-p-to-one-plus-n]]).

[L2] The generalized dihedral group $\operatorname{Dih}(C_4)$ and the quaternion group $Q_8$ are extraspecial of order $8$, with six and two solutions of $x^2=1$ respectively ([[prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial]]).

[L3] For $n\ge1$, $\operatorname{Dih}(C_n)=C_n\rtimes C_2$ has order $2n$, and with $C_n=\langle r\rangle$ and $C_2=\langle s\rangle$ one has $r^n=s^2=1$, $srs^{-1}=r^{-1}$, and every element has a unique form $r^i$ or $r^is$ with $0\le i<n$ ([[cor-dihedral-groups-as-semidirect-products]]).

[L4] $$|G|=[G:H]\,|H|.$$ ([[thm-lagrange]]).


## Verification

**Proof technique:** direct.

1.1 Write $D=\operatorname{Dih}(C_4)=\langle r,s\rangle$. Its three subgroups of order four are $\langle r\rangle$, $\langle r^2,s\rangle$, and $\langle r^2,rs\rangle$. [L2, L3]

2.1 The subgroup $\langle r\rangle$ is cyclic, while $\langle r^2,s\rangle$ and $\langle r^2,rs\rangle$ are Klein four groups because $r^2$ is central of order two and both $s$ and $rs$ are involutions. Thus all three are abelian. Each has order four in the order-eight group $D$; any larger subgroup would be the whole group, which is nonabelian by [L2], so each is maximal among abelian subgroups. [L2, L3, L4, step 1.1]

3.1 Their common order four equals $p^{1+n}$ at $p=2$ and $n=1$, exactly as [L1] predicts. Their pairwise intersections are all $\langle r^2\rangle=Z(D)$; and $\langle r\rangle\langle r^2,s\rangle=D$, $\langle r\rangle\langle r^2,rs\rangle=D$, and $\langle r^2,s\rangle\langle r^2,rs\rangle=D$ because in each case the two displayed subgroups contain generators $r$ and $s$ of $D$. [L1, L2, L3, step 2.1] ∎
