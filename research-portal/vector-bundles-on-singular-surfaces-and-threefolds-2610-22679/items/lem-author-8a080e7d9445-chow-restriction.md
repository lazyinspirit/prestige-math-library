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
dependency_roles:
  lem-author-8a080e7d9445-restriction-diagram: mathematical-premise
  def-supported-higher-cycle-complex: mathematical-premise
  lem-bloch-chow-and-negative-range: mathematical-premise
  lem-author-8a080e7d9445-geometry: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
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

[F1] The supported-cycle fiber sequence and the identity-on-cycles identification of degree-zero homology with ordinary Chow groups, compatible with open restriction. [[def-supported-higher-cycle-complex]], [[lem-bloch-chow-and-negative-range]]

[F2] The natural comparison for the actual restriction arrow under the intended geometry. [[lem-author-8a080e7d9445-restriction-diagram]]

[F3] For the stated $k,X,U,T,V$, the schemes $U,V$ are smooth separated finite type over the perfect field $k$. [[lem-author-8a080e7d9445-geometry]]

[F4] The Axiom of Choice is retained as an assumption of the supplied comparison framework; the following homology and square arguments make no additional choice. [[math:def-axiom-of-choice]]

## Proof
1.1 By [F3], $U,V$ satisfy the smooth finite-type hypotheses of [F1]. Since $T$ is closed in $X$ and contained in $U$, it is closed in $U$ and has open complement $V$. The fixed-support cycle supplier gives the homological fiber sequence $z_T^3(U,\bullet)\to z^3(U,\bullet)\to z^3(V,\bullet)$. Its long exact homology sequence ends in $H_0z^3(U)\to H_0z^3(V)\to H_{-1}z_T^3(U)$. The last group is zero because the supported complex is concentrated in nonnegative homological degrees. Thus the first arrow is surjective. The identity-on-cycles identification of $H_0$ with ordinary Chow groups gives exactly the stated Chow restriction. [given, F1, F3]

2.1 Apply [F2] to this pair, retaining the choice and size assumptions recorded in [F4]. The comparison was constructed as an equivalence of actual restriction diagrams before taking $H^6$. The square of its degree-six maps commutes and its vertical maps are isomorphisms. Surjectivity therefore transfers across that square to the actual motivic arrow, not an arbitrarily identified homomorphism. [F1, F2, F3, F4, step 1.1] ∎
