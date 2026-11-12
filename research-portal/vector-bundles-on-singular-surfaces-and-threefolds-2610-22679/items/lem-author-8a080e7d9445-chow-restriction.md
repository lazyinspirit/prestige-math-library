---
id: lem-author-8a080e7d9445-chow-restriction
kind: lemma
title: Actual Chow localization gives surjectivity of the motivic arrow
status: published
domain: mathematics
deps:
  - lem-author-8a080e7d9445-restriction-diagram
  - def-supported-higher-cycle-complex
  - lem-bloch-chow-and-negative-range
  - lem-author-8a080e7d9445-geometry
  - math:def-axiom-of-choice
  - def-article-conventions
  - math:def-smooth-locus-morphism
  - def-motivic-cohomology
  - math:thm-abelian-groups-form-an-abelian-category
  - math:def-mapping-cone-of-a-chain-map
  - math:def-shift-of-a-chain-complex
  - math:prop-homology-of-a-shift-is-shifted-homology
  - math:thm-the-cone-long-exact-sequence
dependency_roles:
  lem-author-8a080e7d9445-restriction-diagram: mathematical-premise
  def-supported-higher-cycle-complex: mathematical-premise
  lem-bloch-chow-and-negative-range: mathematical-premise
  lem-author-8a080e7d9445-geometry: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-article-conventions: mathematical-premise
  math:def-smooth-locus-morphism: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  math:thm-abelian-groups-form-an-abelian-category: mathematical-premise
  math:def-mapping-cone-of-a-chain-map: mathematical-premise
  math:def-shift-of-a-chain-complex: mathematical-premise
  math:prop-homology-of-a-shift-is-shifted-homology: mathematical-premise
  math:thm-the-cone-long-exact-sequence: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 12
---

## Statement
Assume the Axiom of Choice and the fixed universe and site-size bounds of the supplied comparisons. Let $k$ be an algebraically closed field, let $X$ be an affine finite-type threefold over $k$, put $U=X_{\mathrm{smooth}/k}$, let $T\subset X$ be a closed subset contained in $U$, and put $V=U\setminus T$. Use the reduced structure on $T$ when a scheme structure is needed. For the actual open restriction $V\hookrightarrow U$, the map $\mathrm{CH}^3(U)\to\mathrm{CH}^3(V)$ is surjective. Under the preceding natural arrow comparison this is exactly the map $H^{6,3}_{\mathrm{mot}}(U,\mathbb Z)\to H^{6,3}_{\mathrm{mot}}(V,\mathbb Z)$, which is therefore surjective.

## Facts & Assumptions
**Given:** $k,X,U,T,V$ and the choice and size assumptions of the statement.

**Goal:** Prove surjectivity of Chow restriction and transfer it to this particular motivic restriction arrow.

[F1] The supported-cycle complex, its explicit homotopy-fiber model for open restriction, its vanishing negative homology, and the identity-on-cycles identification of degree-zero homology with ordinary Chow groups, compatible with open restriction. [[def-supported-higher-cycle-complex]], [[lem-bloch-chow-and-negative-range]]

[F2] The natural comparison for the actual restriction arrow under the intended geometry. [[lem-author-8a080e7d9445-restriction-diagram]]

[F3] For the stated $k,X,U,T,V$, the schemes $U,V$ are smooth separated finite type over the perfect field $k$. [[lem-author-8a080e7d9445-geometry]]

[F4] The Axiom of Choice is retained as an assumption of the supplied comparison framework; the following homology and square arguments make no additional choice. [[math:def-axiom-of-choice]]

[F5] The article conventions define the algebraically closed field, affine finite-type schemes and chain dimension; threefold means dimension three. The smooth locus is the set of points at which the structure morphism is smooth, defined for locally finitely presented morphisms. The geometry supplier verifies local finite presentation here and supplies the open structures on $U,V$ and, when needed, the reduced induced structure on $T$. [[def-article-conventions]], [[math:def-smooth-locus-morphism]], [[lem-author-8a080e7d9445-geometry]]

[F6] Integral motivic cohomology means $H^{i,j}_{\mathrm{mot}}(Y,\mathbb Z)=H^i(\mathbb Z(j)_{\mathrm{mot}}(Y))$, with pullback induced by its contravariant complex-valued functor. It applies to the qcqs schemes $U,V$ supplied by the geometry lemma. [[def-motivic-cohomology]], [[lem-author-8a080e7d9445-geometry]]

[F7] Abelian groups and homomorphisms form an abelian category. For a chain map $f:A\to B$, its cone has $C_n=B_n\oplus A_{n-1}$ and differential $(b,a)\mapsto(d_Bb+f(a),-d_Aa)$; the shift $F[1]$ has $(F[1])_n=F_{n-1}$ and differential $-d_F$. [[math:thm-abelian-groups-form-an-abelian-category]], [[math:def-mapping-cone-of-a-chain-map]], [[math:def-shift-of-a-chain-complex]]

[F8] For this chain map in an abelian category, the cone long exact sequence is exact at $H_0(B)$ in $H_0(A)\xrightarrow{H_0(f)}H_0(B)\to H_0(C)$. Shift homology gives $H_0(F[1])\cong H_{-1}(F)$. [[math:thm-the-cone-long-exact-sequence]], [[math:prop-homology-of-a-shift-is-shifted-homology]]

## Proof
1.1 By [F3] and [F5], $U,V$ satisfy the smooth finite-type hypotheses of [F1]. Since $T$ is closed in $X$ and contained in $U$, it is closed in $U$ and has open complement $V$. Write $A=z^3(U,\bullet)$, $B=z^3(V,\bullet)$ and $f=j^*:A\to B$ for actual open restriction. By [F1] its homotopy fiber is the complex $F_n=A_n\oplus B_{n+1}$ with $d_F(a,b)=(d_Aa,f(a)-d_Bb)$, and $z_T^3(U,\bullet)\to F$ is a quasi-isomorphism. Form $C=\operatorname{Cone}(f)$ and $F[1]$ as in [F7]. The degreewise invertible map $\phi_n:(F[1])_n\to C_n$, $(a,b)\mapsto(b,-a)$, is a chain map: both $d_C\phi_n(a,b)$ and $\phi_{n-1}(-d_F(a,b))$ equal $(d_Bb-f(a),d_Aa)$. Its inverse is $(b,a)\mapsto(-a,b)$, so it identifies homology groups. Thus [F8] and [F1] give $H_0(C)\cong H_0(F[1])\cong H_{-1}(F)\cong H_{-1}z_T^3(U,\bullet)=0$. The cone long exact sequence of [F8] now makes $H_0(f):H_0(A)\to H_0(B)$ surjective. The identity-on-cycles identification in [F1] gives exactly the stated Chow restriction. [given, F1, F3, F5, F7, F8]

2.1 Apply [F2] to this pair, retaining the choice and size assumptions recorded in [F4]. The comparison was constructed as an equivalence of actual restriction diagrams before taking $H^6$, which gives the motivic groups and pullback of [F6]. Its degree-six square commutes and its vertical maps to Chow groups are isomorphisms. For any class in the target motivic group, take its image in $\mathrm{CH}^3(V)$; step 1.1 supplies a preimage in $\mathrm{CH}^3(U)$. The inverse vertical isomorphism on $U$ sends that preimage to a motivic class whose restriction is the original target class, by commutativity and injectivity of the vertical map on $V$. This proves surjectivity of the actual motivic arrow. [F1, F2, F3, F4, F6, step 1.1] ∎
