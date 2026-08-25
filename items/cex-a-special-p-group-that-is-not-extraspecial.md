---
id: cex-a-special-p-group-that-is-not-extraspecial
kind: counterexample
title: "For odd $p$, a direct product of two Heisenberg groups is special with centre of order $p^2$, hence not extraspecial"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-special-and-extraspecial-p-groups, def-heisenberg-group-of-order-p-cubed, prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed, prop-the-heisenberg-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-for-odd-p, def-external-direct-product-of-groups, def-elementary-abelian-p-group, def-center-of-a-group, def-commutator-and-commutator-subgroup, thm-frattini-subgroup-formula-for-a-finite-p-group, def-pth-power-subgroup-of-a-group, prop-order-of-finite-direct-product]
aliases: []
landmark: false
proof_strategy: constructive
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
## Statement refuted

Every special $p$-group is extraspecial.

## Facts & Assumptions

**Given:** The proposed claim together with the witness named in the Statement refuted.

[F1] A finite $p$-group $P$ is special when $Z(P)=P'=\Phi(P)$ is elementary abelian, and extraspecial when in addition $P$ is nonabelian and this common subgroup has order $p$ ([[def-special-and-extraspecial-p-groups]]).

[L1] The Heisenberg group of order $p^3$ is the set $(\mathbb Z/p)^3$ with $(a,b,c)(a',b',c')=(a+a',b+b',c+c'+ab')$ ([[def-heisenberg-group-of-order-p-cubed]]).

[L2] The Heisenberg multiplication makes $(\mathbb Z/p)^3$ a nonabelian group of order $p^3$ ([[prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed]]).

[L3] The Heisenberg group of order $p^3$ is extraspecial, and for odd $p$ it has exponent $p$ ([[prop-the-heisenberg-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-for-odd-p]]).

[L4] $$G\times H:=\{(g,h):g\in G,\ h\in H\}$$ ([[def-external-direct-product-of-groups]]).

[L5] An elementary abelian $p$-group is a finite abelian $p$-group in which every nonidentity element has order $p$; the trivial group is permitted (,, ). ([[def-elementary-abelian-p-group]]).

[L6] $$Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}.$$ ([[def-center-of-a-group]]).

[L7] $$[g,h]:=ghg^{-1}h^{-1}.$$ ([[def-commutator-and-commutator-subgroup]]).

[L8] For every finite $p$-group $P$, the Frattini formula gives $$\Phi(P)=P'P^p.$$ ([[thm-frattini-subgroup-formula-for-a-finite-p-group]])

[L9] For a group $G$ and a prime $p$, the $p$th-power subgroup is $$G^p=\langle g^p:g\in G\rangle.$$ ([[def-pth-power-subgroup-of-a-group]])

[L10] For finite groups $G$ and $H$, the direct product has order $|G\times H|=|G|\,|H|$. ([[prop-order-of-finite-direct-product]])


## Counterexample

**Proof technique:** constructive.

1.1 Fix an odd prime $p$, let $H_p$ be the Heisenberg group of order $p^3$, and put $G:=H_p\times H_p$. By [L2] each factor has order $p^3$, so [L10] gives $|G|=p^6$ and in particular $G$ is a finite $p$-group. [L1, L2, L4, L10, construct]

1.2 Because $H_p$ is extraspecial, each factor has centre equal to its derived subgroup and that common subgroup has order $p$; hence coordinatewise multiplication in the direct product gives $Z(G)=Z(H_p)\times Z(H_p)$ and $G'=H_p'\times H_p'$. Therefore $Z(G)=G'$ is elementary abelian of order $p^2$. Also every element of $H_p$ has $p$th power $1$, so every element of $G$ has $p$th power $(1,1)$ and therefore $G^p=1$. [F1, L3, L4, L5, L6, L7, L9, L10, algebra]

2.1 Since $G$ is a finite $p$-group, the Frattini formula gives $\Phi(G)=G'G^p=G'$. Thus $Z(G)=G'=\Phi(G)$ is elementary abelian, so $G$ is special. [F1, L8, step 1.1, step 1.2]

3.1 But $|Z(G)|=p^2$, not $p$, so $G$ is not extraspecial. [F1, step 1.2, step 2.1, discharge-construct] ∎
