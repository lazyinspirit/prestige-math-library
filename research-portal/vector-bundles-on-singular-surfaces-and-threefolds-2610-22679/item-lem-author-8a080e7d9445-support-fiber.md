---
title: Excision and the exact fixed-support cycle fiber
status: published
research_item: lem-author-8a080e7d9445-support-fiber
dependency_level: 14
---

PDF p. 13: Proposition 6.1 support argument

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-8a080e7d9445-geometry](item-lem-author-8a080e7d9445-geometry)
- [lem-author-8a080e7d9445-restriction-diagram](item-lem-author-8a080e7d9445-restriction-diagram)
- [def-cohomology-with-support](item-def-cohomology-with-support)
- [def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex)
- [lem-open-excision-for-support-fibers](item-lem-open-excision-for-support-fibers)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)


## Statement
Assume the Axiom of Choice and the fixed universe and site-size bounds of the supplied comparisons. Let $k$ be an algebraically closed field, let $X$ be an affine finite-type $k$-scheme of dimension three, put $U=X_{\mathrm{smooth}/k}$, and let $T\subset X$ be a closed subset contained in $U$. Use the reduced structure on $T$ when a scheme structure is needed. Put $V=U\setminus T$ and $W=X\setminus T$. There is an actual equivalence of support fibers
$$\mathbb Z(3)_{\mathrm{mot},T}(X)\simeq\operatorname{fib}(\mathbb Z(3)_{\mathrm{mot}}(U)\to\mathbb Z(3)_{\mathrm{mot}}(V))\simeq z_T^3(U,\bullet)[-6].$$
Here support complexes are unshifted cohomological fibers, so $H^{a,3}_{\mathrm{mot},T}(X,\mathbb Z)\cong H_{6-a}z_T^3(U,\bullet)$. These maps respect the support-to-global maps, followed by restriction to $U$.

## Facts & Assumptions
**Given:** $k,X,U,T,V,W$ and the choice and size assumptions of the statement.

**Goal:** Construct the stated actual maps and prove their consequence.

[F1] [lem-author-8a080e7d9445-geometry](item-lem-author-8a080e7d9445-geometry), [def-cohomology-with-support](item-def-cohomology-with-support), [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) and [lem-open-excision-for-support-fibers](item-lem-open-excision-for-support-fibers).

[F2] [lem-author-8a080e7d9445-restriction-diagram](item-lem-author-8a080e7d9445-restriction-diagram) and [def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex).

[F3] The assumed Axiom of Choice, [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), discharges the foundational hypotheses of the support definition in [F1] and the diagram comparison in [F2] when they are invoked in steps 1.1 and 2.1. The excision and fiber arguments use no additional choice.

## Proof
1.1 The completed EM complex supplier gives derived Nisnevich descent. The geometry lemma supplies the actual two-open cover and its restriction square, so that square is homotopy cartesian. Apply the completed open-excision supplier to obtain the first support equivalence, with its support-to-global compatibility. All these objects are qcqs, so the arbitrary-open extension convention is unnecessary here. [F1, F3]

2.1 Taking homotopy fibers is a functor on coherent arrow diagrams. Apply it to the preceding restriction-diagram equivalence. The completed fixed-support cycle definition gives the quasi-isomorphism from $z_T^3(U,\bullet)$ to the homotopy fiber of the actual unshifted homological cycle restriction. Reindex to cochains and shift by $-6$, which commutes with fibers. This gives the second equivalence and $H^a=H_{6-a}$, with the indicated projection maps. [F1, F2, F3, step 1.1] ∎
