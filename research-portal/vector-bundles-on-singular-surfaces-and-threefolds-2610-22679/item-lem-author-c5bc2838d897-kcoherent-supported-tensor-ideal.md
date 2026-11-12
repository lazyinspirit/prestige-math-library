---
title: Support ideals, mixed products and pullback
status: published
research_item: lem-author-c5bc2838d897-kcoherent-supported-tensor-ideal
dependency_level: 9
---

PDF p. 3: Nonconnective algebraic K theory: enhanced prerequisite interface

## Prerequisites

- [lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback](item-lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback)
- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [lem-author-4f716d60801a-restriction-support](item-lem-author-4f716d60801a-restriction-support)
- [lem-author-4f716d60801a-supported-stability](item-lem-author-4f716d60801a-supported-stability)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison](item-lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison)
- [thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input](item-thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input)
- [math:lem-stalk-tensor-product](https://alphabetamath.cc/item/lem-stalk-tensor-product)
- [math:lem-stalk-inverse-image-sheaf](https://alphabetamath.cc/item/lem-stalk-inverse-image-sheaf)
- [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces)
- [math:lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product](https://alphabetamath.cc/item/lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)


## Statement
Assume the Axiom of Choice and fix the universes of the common-family construction. Let $X$ be a quasi-compact quasi-separated (qcqs) scheme, and use the common-family realizations of the supplied perfect fibers and their full supported subcategories. For any subsets $T,S\subseteq X$, derived tensor induces an exact-in-each-variable coherent pairing $\operatorname{Perf}_T(X)\times\operatorname{Perf}_S(X)\to\operatorname{Perf}_{T\cap S}(X)$ and a coherent unital action $\operatorname{Perf}(X)\times\operatorname{Perf}_T(X)\to\operatorname{Perf}_T(X)$. Thus $\operatorname{Perf}_T(X)$ is a stable tensor ideal and a module category over $\operatorname{Perf}(X)$; no distinguished tensor unit in $\operatorname{Perf}_T(X)$ is asserted for proper $T$. For every morphism $f:X\to Y$ between qcqs schemes and every subset $T\subseteq Y$, $Lf^*$ takes $\operatorname{Perf}_T(Y)$ to $\operatorname{Perf}_{f^{-1}T}(X)$, compatibly with the actions and pairings.

## Statement references

[lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison](item-lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison)

[def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)

[math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions
**Given:** Qcqs schemes in the fixed universe, arbitrary support subsets, any morphism between these schemes, and AC.

**Goal:** Supply supported multiplicative and contravariant functors without adding a false unit.

[F0] [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) defines qcqs schemes. Use the nested universes of the common-family construction with the closure convention of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention); universe existence is a standing size assumption separate from AC.

[F1] [lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback](item-lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback) gives exact coherent tensor and pullback on the perfect fibers over qcqs schemes, in the single common family of [lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison](item-lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison). In this family the operations are induced by signed total tensor and degreewise module pullback of K-flat complexes, and the fiber equivalences to the supplied sheaf-derived categories are induced by inclusion.

[F2] [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes), [lem-author-4f716d60801a-restriction-support](item-lem-author-4f716d60801a-restriction-support) and [lem-author-4f716d60801a-supported-stability](item-lem-author-4f716d60801a-supported-stability) supply the perfect and full supported subcategories, exact degreewise stalk functors commuting with cohomology, the criterion that support is contained in $T$ exactly when all stalk complexes off $T$ are acyclic, and stability with inherited finite stable operations. Full means retaining the ambient mapping spaces and composition coherences. A tensor ideal here means such a stable full subcategory closed under tensoring with every ambient perfect object; the module assertion specifies the restricted coherent ambient action and its associativity and unit coherences.

[F3] [thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input](item-thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input) supplies K-flat resolutions, the stalkwise K-flat criterion, and computation of derived tensor and pullback by signed direct-sum total tensor and degreewise pullback of K-flat representatives. Write $T_X(P,Q)^n=\bigoplus_{i+j=n}P^i\otimes_{\mathcal O_X}Q^j$, with differential $d(p\otimes q)=d_Pp\otimes q+(-1)^ip\otimes d_Qq$. K-flat means that this total tensor with any acyclic complex is acyclic. Tensoring with a K-flat complex preserves quasi-isomorphisms; tensoring any complex with a quasi-isomorphism between K-flat complexes also preserves quasi-isomorphisms. Its Source contract gives module-sheaf coproducts as sheafifications of sectionwise direct sums. The same input applies to one-point ringed spaces, hence to complexes over the stalk rings.

[F4] For any ringed space, [math:lem-stalk-tensor-product](https://alphabetamath.cc/item/lem-stalk-tensor-product) identifies $(M\otimes_{\mathcal O_X}N)_x$ naturally with $M_x\otimes_{\mathcal O_{X,x}}N_x$. Clause 2 of [math:lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product](https://alphabetamath.cc/item/lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product) gives $(\bigoplus_i G_i)_x\cong\bigoplus_i(G_i)_x$ for arbitrary set-indexed families of abelian sheaves and identifies their coproduct as the sheafification of the sectionwise direct sum. Only this coproduct clause, not its bounded-above tensor-total clause, is used.

[F5] [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces) defines $f^*M=\mathcal O_X\otimes_{f^{-1}\mathcal O_Y}f^{-1}M$. [math:lem-stalk-inverse-image-sheaf](https://alphabetamath.cc/item/lem-stalk-inverse-image-sheaf) gives $(f^{-1}M)_x\cong M_{f(x)}$, also for the structure sheaf, naturally with its ring and module operations.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is assumed through the common-family, enhanced-category and K-flat resolution constructions in [F1]–[F3]. No geometric flatness or Tor-dimension assumption is added.

## Proof
1.1 The module-sheaf coproduct construction in [F3] has the same underlying abelian sheaf as the abelian coproduct in [F4]. Consequently [F4] gives the coproduct stalk isomorphism also for module sheaves; it is $\mathcal O_{X,x}$-linear because the germ maps and scalar operations agree on each summand. Combining it in every degree with the tensor stalk isomorphism of [F4] gives $T_X(P,Q)_x\cong\operatorname{Tot}^{\oplus}(P_x\otimes_{\mathcal O_{X,x}}Q_x)$. Naturality makes this an isomorphism of cochain complexes: both differentials send a degree-$(i,j)$ tensor to $d_Pp\otimes q+(-1)^ip\otimes d_Qq$. The coproduct clause allows every integer diagonal, so no boundedness is assumed here. Choose K-flat representatives $P,Q$ of $E,F$ using [F3]. Their stalks are K-flat and represent $E_x,F_x$ by [F2]–[F3]. Thus the displayed isomorphism computes $(E\otimes^{\mathbf L}F)_x\simeq E_x\otimes^{\mathbf L}_{\mathcal O_{X,x}}F_x$ for the actual common-family tensor of [F1]. If $E\in\operatorname{Perf}_T(X)$, $F\in\operatorname{Perf}_S(X)$ and $x\notin T\cap S$, one stalk is acyclic by [F2]; tensoring it with the other K-flat stalk is acyclic by [F3]. This proves the mixed support bound. Perfection and exactness in each variable come from [F1], and the finite stable operations are inherited by [F2]. Taking the ambient support bound to be $X$ gives the action on $\operatorname{Perf}_T(X)$. All ambient associativity, symmetry and unit-action coherences restrict, since the operations land in the stated full supported subcategories, whose mapping spaces are ambient ones. The acting unit is $\mathcal O_X\in\operatorname{Perf}(X)$; no unit object in the proper supported category is asserted. This proves the tensor-ideal and coherent module claims. [F0, F1, F2, F3, F4, A1]

2.1 Let $f:X\to Y$, $E\in\operatorname{Perf}_T(Y)$ and $x\in X$, and put $y=f(x)$, $A=\mathcal O_{Y,y}$ and $B=\mathcal O_{X,x}$, with the ring map induced by $f$. Choose a K-flat representative $Q$ of $E$. By [F1] and [F3], $Lf^*E$ is represented by degreewise $f^*Q$. Applying [F4]–[F5] degreewise, with the tensor stalk formula on the ringed space $(X,f^{-1}\mathcal O_Y)$, gives the natural chain isomorphism $(f^*Q)_x\cong B\otimes_A Q_y$, because $(f^{-1}\mathcal O_Y)_x\cong A$ and $(f^{-1}Q^n)_x\cong Q_y^n$; naturality respects the differentials. Here $Q_y$ is K-flat and represents $E_y$ by [F2]–[F3]. To identify the derived tensor, take a K-flat resolution $R\to B[0]$ over $A$, using the one-point case of [F3]. Tensoring it with $Q_y$ preserves this quasi-isomorphism. Therefore $B\otimes_A Q_y$ represents $B\otimes_A^{\mathbf L}E_y$, and we have derived the stalk formula $(Lf^*E)_x\simeq\mathcal O_{X,x}\otimes^{\mathbf L}_{\mathcal O_{Y,y}}E_y$. If $x\notin f^{-1}T$, then $Q_y$ is acyclic. The map $0\to Q_y$ is now a quasi-isomorphism between K-flat complexes, so [F3] permits tensoring it with the arbitrary $A$-module $B[0]$, proving that $B\otimes_A Q_y$ is acyclic even when $A\to B$ is not flat. Hence pullback has the asserted support, and is perfect and exact by [F1]. The ambient symmetric monoidal and composition coherences of [F1] restrict to these full supported subcategories and commute with the actions and mixed pairings of step 1.1. This proves all assertions for arbitrary support subsets; the open-complement criterion is needed only when the complement is open. [F0, F1, F2, F3, F4, F5, A1, step 1.1] ∎
