---
id: thm-a-central-product-of-extraspecial-p-groups-is-extraspecial
kind: theorem
title: "A central product of extraspecial $p$-groups identified along their centres is extraspecial"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-special-and-extraspecial-p-groups, prop-equivalent-characterisations-of-an-extraspecial-p-group, prop-order-centre-and-derived-subgroup-of-a-central-product, prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images, def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, thm-quotient-abelian-iff-contains-commutator-subgroup, def-elementary-abelian-p-group, def-finite-p-group, def-quotient-group, def-center-of-a-group, def-commutator-and-commutator-subgroup]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. van Beek, Topics in Finite p-Groups, Propositions 2.36 and 2.39(i)"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
    - title: "D. A. Craven, The Theory of p-Groups, \u00a73.3"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
pipeline_run: null
---

## Statement

Let $E_1$ and $E_2$ be extraspecial $p$-groups and let
$\alpha:Z(E_1)\to Z(E_2)$ be an isomorphism. Then $P=E_1\circ_\alpha E_2$ is
extraspecial, of order $\lvert E_1\rvert\lvert E_2\rvert/p$, and its centre and
derived subgroup are the common image of $Z(E_1)$ and $Z(E_2)$.

## Facts & Assumptions

**Given:** Extraspecial $p$-groups $E_1,E_2$, an isomorphism $\alpha:Z(E_1)\to Z(E_2)$, and $P=E_1\circ_\alpha E_2$ with canonical images $\bar g$ for $g\in E_1$ and $\bar h$ for $h\in E_2$.

[F1] A finite $p$-group $P$ is special when $Z(P)=P'=\Phi(P)$ is elementary abelian, and extraspecial when in addition $P$ is nonabelian and this common subgroup has order $p$ ([[def-special-and-extraspecial-p-groups]]).

[F2] A finite $p$-group is a finite group whose order has the form $|P|=p^n$ for some $n\in\mathbb N$ ([[def-finite-p-group]]).

[L1] For a finite $p$-group $P$ the following are equivalent: $P$ is extraspecial; $P$ is nonabelian, $|Z(P)|=p$ and $P/Z(P)$ is elementary abelian; $P$ is nonabelian and $Z(P)=P'=\Phi(P)$ has order $p$ ([[prop-equivalent-characterisations-of-an-extraspecial-p-group]]).

[L2] For a central product of finite groups, $|G\circ_\alpha H|=|G||H|/|Z_1|$; without a finiteness hypothesis, its centre is the image of $Z(G)\times Z(H)$ and its derived subgroup is the image of $[G,G]\times[H,H]$ ([[prop-order-centre-and-derived-subgroup-of-a-central-product]]).

[L3] The canonical maps $G\to G\circ_\alpha H$ and $H\to G\circ_\alpha H$ are injective homomorphisms whose images commute elementwise, generate $G\circ_\alpha H$, and meet in the image of $Z_1$ ([[prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images]]).

[L4] For $N\trianglelefteq G$, the quotient $G/N$ is abelian if and only if $[G,G]\subseteq N$ ([[thm-quotient-abelian-iff-contains-commutator-subgroup]]).

[L5] An elementary abelian $p$-group is a finite abelian $p$-group in which every nonidentity element has order $p$ ([[def-elementary-abelian-p-group]]).

## Proof

**Proof technique:** direct.

1.1 Each $E_i$ is nonabelian, has $Z(E_i)=[E_i,E_i]$ of order $p$, and has elementary abelian central quotient $E_i/Z(E_i)$. [L1]

1.2 The canonical maps embed $E_1$ and $E_2$ in $P$; their images commute elementwise and generate $P$. [L3]

2.1 The central-product formulas give $\lvert P\rvert=\lvert E_1\rvert\lvert E_2\rvert/p$, which is a power of $p$; the centre of $P$ is the image of $Z(E_1)\times Z(E_2)$ and the derived subgroup of $P$ is the image of $[E_1,E_1]\times[E_2,E_2]$. Those two subgroups of $E_1\times E_2$ coincide by step 1.1, so $Z(P)=[P,P]$; the subgroup $Z(E_1)\times Z(E_2)$ has order $p^2$ and contains the identified subgroup of order $p$, so its image has order $p$. [F2, L2, step 1.1, algebra]

2.2 The group $P$ is nonabelian, because the canonical map embeds the nonabelian group $E_1$ into it. [step 1.1, step 1.2]

3.1 Since $[P,P]=Z(P)$, the quotient $P/Z(P)$ is abelian; and for $g\in E_1$, $h\in E_2$ the commuting images give $(\bar g\bar h)^p=\bar g^p\bar h^p=\overline{g^p}\ \overline{h^p}$, where $g^p\in Z(E_1)$ and $h^p\in Z(E_2)$ because the central quotients are elementary abelian, so $(\bar g\bar h)^p$ lies in $Z(P)$. Every element of $P$ has this form, so every element of the finite abelian $p$-group $P/Z(P)$ has order dividing $p$ and $P/Z(P)$ is elementary abelian. [L4, L5, step 1.1, step 1.2, step 2.1]

4.1 So $P$ is a nonabelian finite $p$-group with $\lvert Z(P)\rvert=p$ and elementary abelian central quotient, which is the second description in the characterisation; hence $P$ is extraspecial. [F1, L1, step 2.1, step 2.2, step 3.1] ∎

## Remarks

The identification must be along the full centres: if a proper subgroup of $Z(E_1)$ were identified it would be trivial, the product would be the direct product, and its centre would have order $p^2$. That is the case recorded on the companion page as a special group which is not extraspecial.
