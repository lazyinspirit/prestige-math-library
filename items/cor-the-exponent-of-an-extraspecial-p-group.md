---
id: cor-the-exponent-of-an-extraspecial-p-group
kind: corollary
title: "An extraspecial group of odd order has exponent $p$ or $p^2$, and an extraspecial $2$-group has exponent $4$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial, prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two, thm-classification-of-extraspecial-two-groups, thm-classification-of-extraspecial-p-groups-for-odd-p, thm-classification-of-the-nonabelian-groups-of-order-p-cubed, thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed, prop-equivalent-characterisations-of-an-extraspecial-p-group, thm-frattini-subgroup-formula-for-a-finite-p-group, def-pth-power-subgroup-of-a-group, def-plus-and-minus-type-of-an-extraspecial-p-group, def-exponent-of-a-finite-group, def-order-in-a-group]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. van Beek, Topics in Finite p-Groups, Proposition 2.39(iii)"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

Let $P$ be an extraspecial $p$-group of order $p^{1+2n}$. If $p$ is odd then
$\exp(P)=p$ when $P$ is of plus type and $\exp(P)=p^2$ when $P$ is of minus type.
If $p=2$ then $\exp(P)=4$, whichever type $P$ is.

## Facts & Assumptions

**Given:** An extraspecial $p$-group $P$ of order $p^{1+2n}$ with $n\ge1$.

[F1] For a finite group $G$, $\exp(G)=\min\{n\in\mathbb N:n>0\text{ and }g^n=e\text{ for every }g\in G\}$ ([[def-exponent-of-a-finite-group]]).

[F2] For odd $p$, $p^{1+2n}_{+}$ is the extraspecial group of that order with exponent $p$ and $p^{1+2n}_{-}$ the one with exponent $p^2$; at $p=2$ the two are named by their number of solutions of $x^2=1$ ([[def-plus-and-minus-type-of-an-extraspecial-p-group]]).

[F3] $\operatorname{ord}(g)$ is the least $k\ge1$ with $g^k=e$ ([[def-order-in-a-group]]).

[F4] For a group $G$ and a prime $p$, $G^p=\langle g^p:g\in G\rangle$ ([[def-pth-power-subgroup-of-a-group]]).

[L1] For odd $p$ there are exactly two extraspecial groups of order $p^{1+2n}$, distinguished by their exponent, which is $p$ for one and $p^2$ for the other ([[thm-classification-of-extraspecial-p-groups-for-odd-p]]).

[L2] For each $n\ge1$ there are exactly two extraspecial groups of order $2^{1+2n}$, separated by the number of solutions of $x^2=1$ ([[thm-classification-of-extraspecial-two-groups]]).

[L3] There are $n\ge1$ subgroups of $P$, each nonabelian of order $p^3$ with centre $Z(P)$, forming an internal central product of $P$ ([[thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed]]).

[L4] For every prime $p$ there are exactly two nonabelian groups of order $p^3$; at $p=2$ they are $\operatorname{Dih}(C_4)$ and $Q_8$ ([[thm-classification-of-the-nonabelian-groups-of-order-p-cubed]]).

[L5] In $\operatorname{Dih}(C_4)$ the rotation has order four, and in $Q_8$ the element $\mathbf i$ has order four ([[prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial]], [[prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two]]).

[L6] For a finite $p$-group $P$ the following are equivalent: $P$ is extraspecial; $P$ is nonabelian, $|Z(P)|=p$ and $P/Z(P)$ is elementary abelian; $P$ is nonabelian and $Z(P)=P'=\Phi(P)$ has order $p$ ([[prop-equivalent-characterisations-of-an-extraspecial-p-group]]).

[L7] For every finite $p$-group $P$, $\Phi(P)=P'P^p$ ([[thm-frattini-subgroup-formula-for-a-finite-p-group]]).

## Proof

**Proof technique:** direct.

1.1 Every $g\in P$ has $g^{p}\in P^{p}\le\Phi(P)=Z(P)$, a group of order $p$, so $g^{p^{2}}=(g^{p})^{p}=e$ and $\exp(P)$ divides $p^{2}$. [F1, F4, L6, L7]

1.2 For odd $p$ the classification names the two isomorphism classes by their exponents, which are $p$ and $p^{2}$, and the plus and minus labels are those names. [F2, L1]

2.1 At $p=2$, take an internal central product decomposition into subgroups of order eight; each is nonabelian, hence isomorphic to $\operatorname{Dih}(C_4)$ or to $Q_8$, and each contains an element of order four. So $\exp(P)$ is a multiple of four, and by step 1.1 it divides four; hence $\exp(P)=4$ for both types. [F1, F3, L2, L3, L4, L5, step 1.1] ∎

## Remarks

At $p=2$ the exponent does not separate the two types, and that is why the classification there uses the number of solutions of $x^2=1$ instead. The two invariants are not interchangeable: for odd $p$ the exponent separates the types and the number of solutions of $x^p=1$ does so as well, while at $p=2$ only the second does.
