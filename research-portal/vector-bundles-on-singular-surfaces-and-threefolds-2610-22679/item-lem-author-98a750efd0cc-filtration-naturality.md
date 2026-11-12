---
title: Naturality of image filtrations
status: published
research_item: lem-author-98a750efd0cc-filtration-naturality
dependency_level: 6
---

PDF p. 3: Section 2, functorial filtration

## Prerequisites

- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)
- [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)
- [lem-author-98a750efd0cc-filtration-image](item-lem-author-98a750efd0cc-filtration-image)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the compatible nested Grothendieck universes $U\in V\in W$, with $\omega\in U$, stipulated by the supplied stable spectra and filtration constructions. All indexing diagrams and objects obey those size bounds.

Let $F$ and $G$ be decreasing filtrations on spectra $E$ and $D$. Suppose maps $F^j\to G^j$ and $E\to D$ form a coherent map of augmented towers: in particular each square with the maps to $E$ and $D$ commutes up to the specified homotopy. Then $\pi_iE\to\pi_iD$ carries the $j$th image subgroup of $E$ into that of $D$, for every $i,j\in\mathbb Z$. These restricted maps respect identity and composition whenever the original maps do.

## Facts & Assumptions
**Given:** The two augmented towers and compatible maps just specified.

**Goal:** Establish induced functorial maps on their image subgroups.

[F1] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) specifies the augmented towers and their structure maps. The homotopy groups are those of [def-stable-spectra-interface](item-def-stable-spectra-interface): $\pi_i(T)=\pi_0\operatorname{Map}_{\mathrm{Sp}}(\mathbb S[i],T)$. Postcomposition induces their homomorphisms. Homotopic maps give paths in these mapping spaces and hence the same map on components; identities and composition are preserved on components.

[F2] [lem-author-98a750efd0cc-filtration-image](item-lem-author-98a750efd0cc-filtration-image) supplies the image subgroups with their inherited operations and the surjections from the stage homotopy groups onto them.

[F3] [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism) defines a group homomorphism by preservation of the group operation; here the groups are abelian and written additively.

[A1] Retain the classical foundations and compatible universe bounds of the supplied constructions, including the Axiom of Choice and $\omega\in U$ for fixed $U\in V\in W$. These are premises of the selected framework; the algebraic image and product arguments below assert no necessity of Choice for the corresponding abstract group facts. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Proof
1.1 Fix $i,j$. Write $u:\pi_iF^j\to\pi_iE$, $v:\pi_iG^j\to\pi_iD$, $a:\pi_iF^j\to\pi_iG^j$ and $b:\pi_iE\to\pi_iD$ for the induced homomorphisms. The specified homotopy and [F1] give $bu=va$. Let $H=\operatorname{im}u$ and $J=\operatorname{im}v$. If $h\in H$, [F2] gives an $x\in\pi_iF^j$ with $h=u(x)$, so $b(h)=v(a(x))\in J$. Thus $r:H\to J$, $r(h)=b(h)$, is well-defined. It is independent of the chosen preimage because its value is defined from $h$ itself. [F1, F2, given]

2.1 The subgroup operations are inherited by [F2]. For $h,h'\in H$, the ambient homomorphism gives $r(h+h')=b(h+h')=b(h)+b(h')=r(h)+r(h')$, so [F3] makes $r$ a homomorphism. Restricting an ambient identity gives $h\mapsto h$. For composable maps of augmented towers, let $c$ be the second ambient homomorphism. By [F1] the composite ambient map is $cb$; its restriction sends $h$ to $c(b(h))$, which is also the composite of the two restricted maps. The intermediate value lies in $J$ by step 1.1. Hence the restricted maps respect identity and composition as claimed. [F1, F2, F3, step 1.1] ∎
