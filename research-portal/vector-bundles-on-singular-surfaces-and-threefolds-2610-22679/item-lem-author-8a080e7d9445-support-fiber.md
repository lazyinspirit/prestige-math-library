---
title: Excision and the exact fixed-support cycle fiber
status: published
research_item: lem-author-8a080e7d9445-support-fiber
dependency_level: 15
---

PDF p. 13: Proposition 6.1 support argument

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-8a080e7d9445-geometry](item-lem-author-8a080e7d9445-geometry)
- [lem-author-8a080e7d9445-restriction-diagram](item-lem-author-8a080e7d9445-restriction-diagram)
- [def-cohomology-with-support](item-def-cohomology-with-support)
- [def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex)
- [def-supported-complex-indexing](item-def-supported-complex-indexing)
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

[F4] [def-supported-complex-indexing](item-def-supported-complex-indexing) supplies the unshifted cochain fiber model, its projection, roof representatives for derived arrows, and projection-compatible isomorphisms of fiber triangles for isomorphic derived arrows. Its cochain shift convention is $A[q]^m=A^{m+q}$ with differential $(-1)^q d_A$.

## Proof
1.1 Put $C(S)=\mathbb Z(3)_{\mathrm{mot}}(S)$ in the stable derived enhancement supplied in [F1]. The geometry lemma supplies the two-open Nisnevich cover $X=U\cup W$ with intersection $V$. Derived Nisnevich descent gives $C(X)\simeq C(U)\times_{C(V)}C(W)$, compatibly with both restrictions. The pullback argument of the open-excision supplier uses only the universal property of coherent pullbacks, so applies in this enhancement: $C_T(X)\simeq(C(U)\times_{C(V)}C(W))\times_{C(W)}0\simeq C(U)\times_{C(V)}0$. Here $C_T(X)=\operatorname{fib}(C(X)\to C(W))$ by the support convention. The last equivalence follows because a map into either pullback is a map into $C(U)$ with a coherent nullhomotopy of its composite to $C(V)$. This is the first support equivalence, induced by restriction; its projection to $C(U)$ is the support-to-global map followed by restriction. All four schemes are qcqs, so the arbitrary-open extension convention is unnecessary here. [F1, F3]

2.1 View the coherent restriction-diagram equivalence of [F2] in the derived category of abelian groups. To use cochain models, [F4] represents a derived arrow by a roof $A\xleftarrow{s}A'\xrightarrow{g}B$ with $s$ a quasi-isomorphism, takes the explicit fiber of $g$, and projects through $s$ to $A$. Its comparison of fiber triangles for isomorphic derived arrows gives a projection-compatible isomorphism of their fibers; the resulting isomorphism class with its projection is independent of the representatives. Thus the motivic fiber on $U$ is identified with the fiber of the shifted cycle restriction. By [F2], the inclusion $z_T^3(U,\bullet)\to\operatorname{fib}(z^3(U,\bullet)\to z^3(V,\bullet))$ is a quasi-isomorphism with the stated projection. For any homological complex $K_\bullet$, reindex it by $C(K)^m=K_{-m}$ and $d^m=\partial_{-m}$. Then $C(K)[-6]^a=K_{6-a}$, with unchanged differential sign since $-6$ is even. The homological fiber in degree $6-a$ has terms $z^3(U,6-a)\oplus z^3(V,7-a)$, exactly the degree-$a$ cochain fiber of the shifted restriction; its differential and projection agree with [F4]. Consequently reindexing and shifting the supported-cycle quasi-isomorphism gives the second equivalence, and $H^a(C(z_T^3(U,\bullet))[-6])=H_{6-a}z_T^3(U,\bullet)$. Its projection compatibility, together with step 1.1, proves the asserted compatibility of both equivalences. [F1, F2, F3, F4, step 1.1, algebra] ∎
