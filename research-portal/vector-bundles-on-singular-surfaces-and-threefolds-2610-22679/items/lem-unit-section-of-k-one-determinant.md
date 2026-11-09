---
id: lem-unit-section-of-k-one-determinant
kind: lemma
title: Units split the K one determinant
status: draft
domain: mathematics
deps:
  - def-nonconnective-k-spectrum-interface
  - def-exterior-determinant-bundles
  - lem-author-4f716d60801a-lifted-affine-equivalence
  - lem-author-4f716d60801a-finite-projective-model
  - lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback
  - thm-author-da44cda020c0-units-k1-classical-comparisons
  - thm-author-da44cda020c0-units-k1-enhanced-comparisons
  - lem-author-da44cda020c0-units-k1-stable-matrix-determinant
  - lem-author-da44cda020c0-units-k1-determinant-base-change
  - lem-author-da44cda020c0-units-k1-gluing-units
  - lem-author-da44cda020c0-units-k1-local-determinant-gluing
  - lem-author-da44cda020c0-units-k1-split-surjective-homomorphism
  - math:def-axiom-of-choice
dependency_roles:
  def-nonconnective-k-spectrum-interface: mathematical-premise
  def-exterior-determinant-bundles: mathematical-premise
  lem-author-4f716d60801a-lifted-affine-equivalence: mathematical-premise
  lem-author-4f716d60801a-finite-projective-model: mathematical-premise
  lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback: mathematical-premise
  thm-author-da44cda020c0-units-k1-classical-comparisons: mathematical-premise
  thm-author-da44cda020c0-units-k1-enhanced-comparisons: mathematical-premise
  lem-author-da44cda020c0-units-k1-stable-matrix-determinant: mathematical-premise
  lem-author-da44cda020c0-units-k1-determinant-base-change: mathematical-premise
  lem-author-da44cda020c0-units-k1-gluing-units: mathematical-premise
  lem-author-da44cda020c0-units-k1-local-determinant-gluing: mathematical-premise
  lem-author-da44cda020c0-units-k1-split-surjective-homomorphism: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 11
---

## Statement
Assume AC and let X be a quasi-compact quasi-separated scheme, with K(X)=𝕂(Perf(X)) as specified in [[def-nonconnective-k-spectrum-interface]]. There is a natural group homomorphism

$$s_X:\Gamma(X,\mathcal O_X)^\times\longrightarrow K_1(X),\qquad u\longmapsto[\mathcal O_X\xrightarrow{u}\mathcal O_X].$$

There is a natural determinant homomorphism det_X:K₁(X)→Γ(X,$O_X$)×, characterized by the usual stable matrix determinant on each affine restriction under the explicit affine comparison. It satisfies det_X∘$s_X$=id; hence determinant is surjective and $s_X$ injective. For a vector-bundle automorphism α, det_X([α]) is the unit inducing the top-exterior-power automorphism det(α) of its determinant line (defined locally on rank loci). Neither a global resolution property nor regularity/noetherian hypotheses are required. This statement makes no identification of a motivic projection with determinant.

## Facts & Assumptions
**Given:** qcqs X, AC, the supplied perfect enhancement and nonconnective K functor; rings below are commutative and unital. The notation [α] is the automorphism loop under the natural core→connective K→nonconnective K construction, not an object class in K₀.

**Goal:** Establish the precise affine π₁ comparison and unit normalization, construct det_X and $s_X$, and prove the splitting.

[F1] [[def-nonconnective-k-spectrum-interface]] supplies the actual sheaf-derived perfect model and exact pullbacks. [[lem-author-4f716d60801a-lifted-affine-equivalence]] and [[lem-author-4f716d60801a-finite-projective-model]] identify its affine fiber with the enhanced bounded finite-projective model. [[lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback]] identifies actual affine pullback with derived extension of scalars on those representatives.

[F2] [[thm-author-da44cda020c0-units-k1-classical-comparisons]] supplies the matrix/Quillen/S/Gillet–Waldhausen comparisons, with their automorphism-class normalization.

[F3] [[thm-author-da44cda020c0-units-k1-enhanced-comparisons]] supplies the actual Waldhausen-to-infinity K comparison, the natural automorphism classes and j inducing an isomorphism on π₁ to the supplied nonconnective functor.

[F4] [[lem-author-da44cda020c0-units-k1-stable-matrix-determinant]] constructs determinant on GL(A)_ab; [[lem-author-da44cda020c0-units-k1-determinant-base-change]] proves its ring-map naturality.

[F5] [[lem-author-da44cda020c0-units-k1-gluing-units]] and [[lem-author-da44cda020c0-units-k1-local-determinant-gluing]] supply unit sheaf gluing and the induced homomorphism. [[lem-author-da44cda020c0-units-k1-split-surjective-homomorphism]] gives surjectivity and injectivity from a right inverse.

[F6] [[def-exterior-determinant-bundles]] supplies the exterior-power determinant line and its local wedge bases and pullback compatibility.

## Proof
1.1 For a ring A, P(A) is split exact: a surjection onto a projective module has a section, so its kernel is a direct summand of the finite projective source and is finite projective. This verifies the kernel-of-surjections hypothesis of Gillet–Waldhausen in [F2]. The Waldhausen category C(A) of bounded finite-projective cochain complexes has mapping cylinders, so every map factors as a degreewise split monomorphism followed by a quasi-isomorphism. Its homotopy category after quasi-isomorphisms is the enhanced perfect category’s homotopy category by [F1]; hence a map is a weak equivalence exactly when it becomes an isomorphism (DHKS-saturation). Indeed the cone of a quasi-isomorphism between bounded projectives is bounded acyclic projective and contractible: apply the K-projective mapping property in [F1] to its identity. Thus the comparison hypotheses in [F3] hold. [F1, F2, F3]

2.1 Compose the actual maps of [F2], the actual Waldhausen/infinity comparison of [F3], j on π₁ from [F3], and the exact affine enhancement equivalence of [F1]. They give an isomorphism $c_A:GL(A)_{ab}\xrightarrow{\sim}\pi_1\mathbb K(\operatorname{Perf}(\operatorname{Spec}A))$. Every step carries an automorphism M of Aⁿ to the class of that same degree-zero automorphism: degree-zero inclusion is literal, the S-construction comparisons use its core loop, and associated sheaf sends it to its matrix acting on $O^n$. Thus $c_A([u])=[\mathcal O\xrightarrow{u}\mathcal O]$. This uses π₁ agreement in the positive-degree range of j; no π₀-only comparison is substituted. [F1, F2, F3, step 1.1]

3.1 This $c_A$ is natural for unital A→B. Extension of scalars takes finite projectives to finite projectives and preserves split monomorphisms. A bounded projective quasi-isomorphism is a homotopy equivalence by step 1.1, so tensor with B preserves it without a flatness hypothesis. Hence it is weakly exact on C(A). All comparisons are induced by the corresponding actual functors in [F1]–[F3], and on matrix generators they send M to its entrywise image. The resulting π₁ naturality square commutes. Define $d_A=\det_A\circ c_A^{-1}$; [F4] makes these homomorphisms commute with all such ring maps, and $d_A$([u])=u by step 2.1. [F1, F2, F3, F4, step 1.1, step 2.1]

4.1 Given k∈K₁(X), on each affine open V=Spec(A) take $d_A(k|_V)\in\mathcal O_X(V)^\times$. On an intersection of two affine opens, restrict further to any affine neighbourhood W inside that intersection. Naturality from step 3.1 identifies both restrictions with $d_{\mathcal O(W)}(k|_W)$. They therefore agree as sections on the intersection by the sheaf uniqueness axiom. Apply [F5] to glue a unique global unit det_X(k). The same gluing lemma shows det_X is a homomorphism and independent of the affine cover. [F1, F4, F5, step 3.1]

5.1 A global unit is the automorphism $m_u$ of $O_X$. The natural automorphism map in [F3] defines $s_X$(u)=[$m_u$]. Composition $m_u m_v=m_{uv}$ makes $s_X$ a group homomorphism. It is compatible with scheme pullback by [F1] and [F3]. Restriction to an affine V sends its class to the class [u|_V] of step 2.1. [F1, F3, step 2.1, step 4.1]

6.1 The restriction of det_X($s_X$(u)) to each affine V is u|_V by steps 3.1 and 5.1. Unit sheaf uniqueness in [F5] gives det_X($s_X$(u))=u globally. The right-inverse lemma in [F5] proves surjectivity of determinant and injectivity of $s_X$. For f:Y→X between qcqs schemes, choose an affine V around f(y) and an affine W around y inside f⁻¹(V). Step 3.1 proves determinant naturality on W; sheaf uniqueness then proves it globally. Thus both maps are natural on the stated category. [F1, F5, step 3.1, step 4.1, step 5.1]

7.1 For an automorphism α of a vector bundle E, choose affine opens where E is free of constant rank. Naturality of the automorphism construction restricts [α] to the matrix class of α there. The top-wedge expansion in [F6] says that its action on det(E) is multiplication by that matrix determinant, exactly the local unit used in step 4.1. These local units glue uniquely; a line-bundle automorphism is canonically multiplication by a unit, because that is true on trivializations and scalar multiplication commutes with transition units. Thus det_X([α]) has the asserted exterior determinant interpretation. The empty scheme has only the unique unit and zero K-group, so the same assertion also includes it. This completes the proof. [F1, F3, F4, F5, F6, step 4.1, step 6.1] ∎
