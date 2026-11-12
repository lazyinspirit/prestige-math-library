---
title: Restriction to the slice commutes with big-site localization
status: published
research_item: lem-author-2ac325480ae8-slice-localization
dependency_level: 14
---

PDF p. 6: Singular Beilinson–Lichtenbaum comparison

## Prerequisites

- [lem-author-2ac325480ae8-slice-site](item-lem-author-2ac325480ae8-slice-site)
- [lem-adjudicate-a3b6736b67cc-slice-hyperdescent](item-lem-adjudicate-a3b6736b67cc-slice-hyperdescent)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the compatible universe bounds of the slice-site construction. Fix a prime $p$ as in that construction. Let $\mathcal C$ be its big qcqs cdh site over $S=\operatorname{Spec}\mathbb Z[1/p]$, let $U=\operatorname{Spec}k$ for a field in which $p$ is invertible, and equip $\mathcal C/U$ with the induced topology. Let $j^*$ restrict $D(\mathbb Z)$-valued coherent presheaves along the forgetful functor $j:\mathcal C/U\to\mathcal C$, and write $L_{\mathcal C}$ and $L_{\mathcal C/U}$ for ordinary covering-family derived Čech sheafification. For every such presheaf $P$ there is a canonical natural equivalence $j^*L_{\mathcal C}P\simeq L_{\mathcal C/U}(j^*P)$. It identifies the restriction of the ambient localization unit with the slice localization unit. The same statement holds with $L^{\rm hyp}_{\mathcal C}$ and $L^{\rm hyp}_{\mathcal C/U}$, the reflectors into presheaves satisfying descent for every hypercover, defined by coproducts of representables and locally surjective augmented matching maps. Both sites must use the same convention in either assertion; no equivalence between ordinary and hyperdescent localization is needed here.

## Statement references
[lem-author-2ac325480ae8-slice-site](item-lem-author-2ac325480ae8-slice-site)

[lem-adjudicate-a3b6736b67cc-slice-hyperdescent](item-lem-adjudicate-a3b6736b67cc-slice-hyperdescent)

## Facts & Assumptions
[A1] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the fixed compatible universe bounds retain the construction premises of [lem-author-2ac325480ae8-slice-site](item-lem-author-2ac325480ae8-slice-site) and [lem-adjudicate-a3b6736b67cc-slice-hyperdescent](item-lem-adjudicate-a3b6736b67cc-slice-hyperdescent). The prime $p$ is the one fixed in the slice-site construction. Choice is inherited through these supplied site, coherent-presheaf and reflector constructions in steps 1.1 and 2.1; the adjunction and reflection argument introduces no additional choice.

[F1] [lem-author-2ac325480ae8-slice-site](item-lem-author-2ac325480ae8-slice-site) gives the sites, coefficient infinity-category, coherent functors, inherited Choice and size assumptions, and preservation of ordinary sheaves by $j^*,j_*$. Here $j_*Q(V)=Q(V\times_SU\to U)$.

[F2] For either reflective localization in use, write $\operatorname{Map}$ for the mapping space of coherent natural transformations. A map $v:A\to B$ is a local equivalence when $\operatorname{Map}(B,Q)\to\operatorname{Map}(A,Q)$ is an equivalence for every local object $Q$. The reflector unit is a local equivalence with local target, characterized by this universal property. Ordinary reflectors are supplied by [F1].

[F3] [lem-adjudicate-a3b6736b67cc-slice-hyperdescent](item-lem-adjudicate-a3b6736b67cc-slice-hyperdescent) defines hypercovers, their derived descent condition and the hyperdescent reflectors on both actual sites, with the mapping-space universal property. It proves that both $j^*$ and $j_*$ preserve hyperdescent, using the matching maps and the equal covering sieves over slice objects.

## Proof
**Given:** $P$ on $\mathcal C$ under the stated Choice and universe assumptions, with either ordinary localization on both sites or hyperdescent localization on both sites.

**Goal:** Prove localization compatibility, including the actual units and naturality.

1.1 The formulas in [F1] give an adjunction $j^*\dashv j_*$. A coherent map $\alpha:j^*P\to Q$ yields $P(V)\to P(V\times_SU)\xrightarrow{\alpha}Q(V\times_SU\to U)$, using the projection to $V$. Conversely a coherent map $\beta:P\to j_*Q$ gives $P(V)\xrightarrow{\beta_V}Q(V\times_SU\to U)\to Q(V,f)$ for each $(V,f)$, using the graph $(\operatorname{id},f):V\to V\times_SU$. The projection and graph are natural scheme transformations. Their projection–graph identities are the triangle identities for the forgetful/product adjunction $j\dashv b$, where $b(V)=(V\times_SU\to U)$. Precomposition with their nerves and composition with coherent transformations therefore define these two maps on the entire mapping spaces, including parametrized transformations. Naturality and the same triangle identities give inverse homotopies there. Thus $\operatorname{Map}(j^*P,Q)\simeq\operatorname{Map}(P,j_*Q)$, rather than only a bijection of isomorphism classes. [A1, F1, construct]

2.1 Use [F1] for ordinary sheaves and [F3] for hyperdescent. In either case both functors preserve the chosen local objects. If $v:P\to P'$ is an ambient local equivalence and $Q$ is any slice local object, then $j_*Q$ is ambient local, so step 1.1 and [F2] give $\operatorname{Map}(j^*P',Q)\simeq\operatorname{Map}(P',j_*Q)\simeq\operatorname{Map}(P,j_*Q)\simeq\operatorname{Map}(j^*P,Q)$. Hence $j^*v$ is a slice local equivalence. Apply this to $P\to LP$. Its restriction is a slice local equivalence and its target is slice local, because $LP$ is ambient local and $j^*$ preserves local objects. For every slice local $Q$, precomposition with this restricted unit is consequently an equivalence of mapping spaces. It is thus a reflection arrow for $j^*P$; the slice reflection universal property produces the asserted equivalence with $L(j^*P)$, carrying precisely the restricted ambient unit to the slice unit. The space of such compatible identifications is contractible, so the equivalence is canonical and natural in $P$, including natural transformations. This argument applies separately to the two supplied reflective subcategories. [A1, F1, F2, F3, step 1.1] ∎
