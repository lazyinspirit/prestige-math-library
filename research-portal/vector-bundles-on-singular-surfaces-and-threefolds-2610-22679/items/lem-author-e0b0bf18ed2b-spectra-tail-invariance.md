---
id: lem-author-e0b0bf18ed2b-spectra-tail-invariance
kind: lemma
title: Cofinal tails and level invariance of stable groups
status: published
domain: mathematics
deps:
  - math:def-stable-homotopy-groups-of-a-sequential-prespectrum
  - math:def-strict-map-and-structure-compatible-homotopy-of-sequential-prespectra
  - math:prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant
  - math:def-simplicial-set-homotopy-and-trivial-kan-fibration
  - math:prop-relative-cw-inclusions-are-cofibrations
  - math:def-compactly-generated-based-space-and-well-pointed-object
dependency_roles:
  math:def-stable-homotopy-groups-of-a-sequential-prespectrum: mathematical-premise
  math:def-strict-map-and-structure-compatible-homotopy-of-sequential-prespectra: mathematical-premise
  math:prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant: mathematical-premise
  math:def-simplicial-set-homotopy-and-trivial-kan-fibration: mathematical-premise
  math:prop-relative-cw-inclusions-are-cofibrations: mathematical-premise
  math:def-compactly-generated-based-space-and-well-pointed-object: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct-proof
dependency_level: 0
sources:
  references:
    - title: Kerodon, geometric realization
      url: https://kerodon.net/tag/001X
      locator: Definition 1.2.3.1, Proposition 1.2.3.4 and its skeletal construction,
        Corollary 1.2.3.5, Lemma 1.2.3.6, Remark 1.2.3.12
      statement: Geometric realization exists, is left adjoint to the singular
        functor, preserves colimits, and has a CW structure with one cell for
        each nondegenerate simplex. A chosen vertex is a CW subcomplex.
      hypotheses: An arbitrary simplicial set; the pointed construction uses its
        chosen vertex and the induced basepoint of its realization.
      reading_limits: Independently read these displayed definitions, statements, the
        skeletal construction and Lemma 1.2.3.6 proof in the primary HTML during
        this adjudication. The deeper simplex-decomposition results used there
        were not reconstructed.
    - title: Kerodon, finite products and realization
      url: https://kerodon.net/tag/013E
      locator: Corollary 3.6.2.2, statement and proof
      statement: The canonical realization-to-product map is a homeomorphism when one
        simplicial factor has finitely many nondegenerate simplices.
      hypotheses: Two simplicial sets, with at least one finite factor. Here that
        factor is the simplicial circle K.
      reading_limits: Independently read the full corollary and displayed proof in the
        primary HTML during this adjudication. Its preceding triangulation
        theorem is imported rather than reconstructed.
    - title: Kerodon, homotopy groups of Kan complexes
      url: https://kerodon.net/tag/00VJ
      locator: Construction 3.2.2.4, Notation 3.2.2.5, Example 3.2.2.7, Theorem
        3.2.2.10, Remarks 3.2.2.16–17
      statement: Kan homotopy groups use pointed simplicial sphere classes, are
        functorial groups (abelian in degrees at least two), and for singular
        complexes identify with the corresponding topological homotopy groups.
      hypotheses: Pointed Kan complexes and positive homotopy degree; the
        singular-complex comparison starts with a based topological space.
      reading_limits: Independently read these constructions, statements and remarks
        in the primary HTML during this adjudication. The group-law proof in the
        following subsection was not reconstructed.
    - title: Kerodon, Milnor unit theorem
      url: https://kerodon.net/tag/0142
      locator: Theorem 3.6.4.1, statement and displayed proof
      statement: The natural unit from a simplicial set to the singular complex of its
        realization is a weak homotopy equivalence. For Kan complexes its
        induced homotopy-group maps are isomorphisms.
      hypotheses: Any simplicial set for the unit theorem; a pointed Kan complex for
        the comparison of its ordinary Kan homotopy groups with those of its
        realization.
      reading_limits: Independently read the theorem statement and displayed proof in
        the primary HTML during this adjudication. Excision, filtered-colimit
        closure and the earlier weak-equivalence foundations invoked by that
        proof are imported, not reconstructed.
---

## Statement
For a sequential prespectrum $E$ and integer $k$, write $G_k(E)$ for the sequential colimit of the groups $\pi_{n+k}(E_n)$, starting at any $N\geq0$ with $n+k\geq2$ for $n\geq N$ and using the sphere-first bonding maps of the published definition. Increasing $N$ gives a canonical isomorphism. A strict map of prespectra $f:E\to F$ inducing an isomorphism on every stage group of such a tail induces an isomorphism on $G_k$.

The same assertions hold for pointed simplicial prespectra with the following explicit convention, which also covers levels that are not Kan. Put $K=\Delta^1/\partial\Delta^1$ and fix the oriented identification $|K|=S^1$. A pointed simplicial prespectrum $X$ consists of pointed simplicial sets $X_n$ and pointed simplicial maps $s_n:K\wedge X_n\to X_{n+1}$; the smash product is the degreewise product with the union of its basepoint factors collapsed. Set $\pi_d^{\mathrm{simp}}(X_n):=\pi_d(|X_n|)$ and $G_k(X):=\operatorname{colim}_{n\geq N}\pi_{n+k}^{\mathrm{simp}}(X_n)$. The bonding map is suspension with $S^1$ first followed by $|s_n|$, using the natural identification $|K\wedge X_n|\cong S^1\wedge|X_n|$. A strict simplicial map $g:X\to X'$ means pointed maps $g_n$ satisfying $g_{n+1}s_n=s'_n(1_K\wedge g_n)$. For Kan levels the stage groups agree naturally with ordinary Kan homotopy groups; their ordered suspension maps are read through this comparison. Thus no Kan hypothesis is required for the realization convention, and the usual Kan case is retained.

More generally, both conclusions hold for any sequential system of groups with specified bonding homomorphisms, and any compatible family of stage-group isomorphisms.

## Statement references

[[math:def-stable-homotopy-groups-of-a-sequential-prespectrum]]

[[math:def-strict-map-and-structure-compatible-homotopy-of-sequential-prespectra]]

[[math:def-simplicial-set-homotopy-and-trivial-kan-fibration]]

## Facts & Assumptions
**Given:** $k$, a tail cutoff $N$, the specified groups and bonding homomorphisms, and, for level invariance, compatible stage isomorphisms. Write $b_{n,m}$ for the composite of bonding maps from stage $n$ to stage $m\geq n$, with $b_{n,n}$ the identity.

**Goal:** Prove cutoff independence and level invariance for the topological, simplicial and abstract group systems.

[F1] [[math:def-stable-homotopy-groups-of-a-sequential-prespectrum]] supplies the topological stage groups, sphere-first bonding homomorphisms and colimit: representatives $(n,x)$ and $(m,y)$ agree precisely when $b_{n,r}x=b_{m,r}y$ for some $r\geq n,m$, and multiplication is performed at a common stage. The same representative construction defines the colimit of any specified sequential group system.

[F2] [[math:def-strict-map-and-structure-compatible-homotopy-of-sequential-prespectra]] supplies the equation $f_{n+1}\sigma_n=\tau_n(1_{S^1}\wedge f_n)$ for strict topological maps. [[math:prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]] supplies the induced homomorphisms and their compatibility with composition.

[F3] [[math:def-simplicial-set-homotopy-and-trivial-kan-fibration]] supplies simplicial sets, simplices, boundaries, degreewise products and simplicial homotopies. The pointed objects and strict simplicial maps used here are defined explicitly in the Statement.

[F4] The realization and Kan-comparison premises are imported at the exact locators in External input. [[math:prop-relative-cw-inclusions-are-cofibrations]] makes the chosen vertex inclusion in a realized CW complex a cofibration. A realized CW complex is Hausdorff, and its weak topology makes it compactly generated: if a subset has closed inverse image under every map from a compact Hausdorff space, it has closed inverse image on every characteristic disk and hence is closed. With the based compactly generated convention of [[math:def-compactly-generated-based-space-and-well-pointed-object]], these realizations are well-pointed spaces to which [F1] applies.

## External input
The first source record supplies realization, its colimit preservation and its cell structure. The second supplies preservation of products with the finite simplicial circle. Combining products and quotients gives the natural ordered identification $|K\wedge Z|\cong S^1\wedge|Z|$ for every pointed simplicial set $Z$. The last two source records supply the natural comparison of Kan homotopy groups with realization groups: apply the unit $Z\to\operatorname{Sing}|Z|$ and then the singular sphere-class comparison. These are imported premises; the colimit argument below is local.

## Proof
1.1 By [F3] and [F4], realizing a simplicial prespectrum gives a topological prespectrum with the stated sphere-first structure maps, so [F1] gives well-defined bonding homomorphisms for its stage groups; the Kan comparison has the meaning specified in External input. Now work with any of the given sequential group systems. For $N'\geq N$, send the class of $(n,x)$ to the class of $(m,b_{n,m}x)$ with $m=\max(n,N')$. Eventual equality makes this independent of the representative: advance two equal representatives to a common stage at least $N'$. It is a homomorphism because multiplication is computed at a common stage. Composing in either order with inclusion of the tail fixes every representative after advancement, so these maps are inverse. Successive cutoffs compose by the same rule, giving the claimed canonical isomorphisms. [F1, F3, F4, given]

2.1 For topological strict maps, the equation in [F2] and the sphere-first bonding formula in [F1] give $u_{n+1}b_n=b'_nu_n$, where $u_n=(f_n)_*$. For simplicial strict maps, realization of the stated equation and naturality of the ordered smash identification give the same compatibility, with $u_n=(|g_n|)_*$; functoriality in [F2] applies. For any such compatible family, $(n,x)\mapsto(n,u_nx)$ preserves eventual equality and multiplication and hence induces a colimit homomorphism. When every $u_n$ is an isomorphism, its inverses obey $u_{n+1}^{-1}b'_n=b_nu_n^{-1}$ and induce the inverse colimit homomorphism. No inverse map of spaces is required. Step 1.1 makes this independent of the chosen common tail. All assertions follow. [F1, F2, F3, F4, step 1.1, given] ∎
