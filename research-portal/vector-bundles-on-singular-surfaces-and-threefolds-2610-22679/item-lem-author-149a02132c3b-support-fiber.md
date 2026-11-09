---
title: Excision and the exact fixed-support cycle fiber
status: published
research_item: lem-author-149a02132c3b-support-fiber
dependency_level: 16
---

PDF p. 13: Proposition 6.1 support argument

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-149a02132c3b-geometry](item-lem-author-149a02132c3b-geometry)
- [lem-author-149a02132c3b-restriction-diagram](item-lem-author-149a02132c3b-restriction-diagram)
- [def-cohomology-with-support](item-def-cohomology-with-support)
- [def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex)
- [lem-open-excision-for-support-fibers](item-lem-open-excision-for-support-fibers)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)


## Statement
Assume the Axiom of Choice and the fixed site and universe bounds of the support and comparison constructions. Let $k$ be an algebraically closed field of arbitrary characteristic, let $X$ be an affine finite-type $k$-scheme of Krull dimension three, and let $T\subset X$ be a closed subset contained in the smooth locus $U=X_{\mathrm{smooth}}$ of $X\to\operatorname{Spec}k$. Equip $T$ with its reduced induced structure, and put $V=U\setminus T$ and $W=X\setminus T$. Write $\mathbb Z(3)_{\mathrm{mot},T}(X):=\operatorname{fib}(\mathbb Z(3)_{\mathrm{mot}}(X)\to\mathbb Z(3)_{\mathrm{mot}}(W))$ for the unshifted cohomological support fiber. There is an actual equivalence of support fibers
$$\mathbb Z(3)_{\mathrm{mot},T}(X)\simeq\operatorname{fib}(\mathbb Z(3)_{\mathrm{mot}}(U)\to\mathbb Z(3)_{\mathrm{mot}}(V))\simeq z_T^3(U,\bullet)[-6].$$
Here $z_T^3(U,\bullet)$ is reindexed from homological degree $n$ to cochain degree $-n$ before shifting. Support complexes are unshifted cohomological fibers, so, for every integer $a$, $H^{a,3}_{\mathrm{mot},T}(X,\mathbb Z)\cong H_{6-a}z_T^3(U,\bullet)$. These maps respect the support-to-global maps, followed by restriction to $U$.

## Facts & Assumptions
**Given:** The hypotheses in the statement, with the Axiom of Choice and fixed universe bounds.

**Goal:** Construct the stated actual maps and prove their consequence.

[F1] [lem-author-149a02132c3b-geometry](item-lem-author-149a02132c3b-geometry), [def-cohomology-with-support](item-def-cohomology-with-support), [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) and [lem-open-excision-for-support-fibers](item-lem-open-excision-for-support-fibers).

[F2] [lem-author-149a02132c3b-restriction-diagram](item-lem-author-149a02132c3b-restriction-diagram) and [def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex).

[F3] The assumed Axiom of Choice, [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), discharges the inherited Choice hypotheses of the geometry, support and comparison suppliers; their constructions use the fixed size bounds.

## Proof
1.1 Under the Choice and size assumptions in [F3], the EM complex supplier gives derived Nisnevich descent. The geometry lemma supplies the actual two-open cover $X=U\cup W$ with $U\cap W=V$ and its restriction square, so that square is homotopy cartesian. Apply the completed open-excision supplier to obtain the first support equivalence, with its support-to-global compatibility. All these objects are qcqs, so the arbitrary-open extension convention is unnecessary here. [F1, F3, given]

2.1 Taking homotopy fibers is a functor on coherent arrow diagrams. Apply it to the restriction-diagram equivalence of [F2] for this $V\hookrightarrow U$. The completed fixed-support cycle definition gives the quasi-isomorphism from $z_T^3(U,\bullet)$ to the homotopy fiber of the actual unshifted homological cycle restriction. Reindex to cochains and shift by $-6$, which commutes with fibers. This gives the second equivalence and $H^a=H_{6-a}$, with the indicated projection maps. [F1, F2, step 1.1] ∎
