---
title: The actual graded determinant map on the current K-space
status: draft
research_item: lem-adjudicate-f6007757a8ac-actual-determinant-stack-map
dependency_level: 14
---

PDF p. 9: Actual low-weight projections and determinant normalization

## Prerequisites

- [thm-adjudicate-f6007757a8ac-waldhausen-determinant-one-type](item-thm-adjudicate-f6007757a8ac-waldhausen-determinant-one-type)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model)
- [thm-author-da44cda020c0-units-k1-enhanced-comparisons](item-thm-author-da44cda020c0-units-k1-enhanced-comparisons)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-nisnevich-line-bundle-torsors](item-lem-nisnevich-line-bundle-torsors)



## Statement
Assume AC and the fixed compatible universes. For every qcqs scheme $X$ there is a natural pointed map from its specified nonconnective K-space to the stack of graded lines, whose value on a perfect complex $E$ is its Knudsen–Mumford graded determinant and whose value on an object automorphism is its determinant automorphism. Restricting to the locally constant rank-zero fiber gives the actual map to $B\mathbb G_m$. On vector bundles it is the frame-torsor map induced by $\det:GL_n\to\mathbb G_m$; on locally bounded finite-projective representatives it is the alternating graded determinant. Its additivity uses enhanced cofiber sequences and their specified diagrams; the induced class in $\operatorname{Pic}(X)$ kills every cofiber relation. No equality of global vector-bundle and perfect K zero, or arbitrary ordinary triangle-diagram functoriality, is assumed.

## Facts & Assumptions
**Given:** The stated model hypotheses, AC and fixed universe bounds.

**Goal:** Supply the actual determinant map required by the consumers, with exactly the recorded coherence.

[F1] [thm-adjudicate-f6007757a8ac-waldhausen-determinant-one-type](item-thm-adjudicate-f6007757a8ac-waldhausen-determinant-one-type) supplies the exact determinant/one-type bridge.

[F2] [lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model), [thm-author-da44cda020c0-units-k1-enhanced-comparisons](item-thm-author-da44cda020c0-units-k1-enhanced-comparisons) and [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) fix the actual affine model, object maps and natural connective comparison.

[F3] [lem-nisnevich-line-bundle-torsors](item-lem-nisnevich-line-bundle-torsors) supplies line-bundle/torsor descent. Graded-line groupoids form a Nisnevich stack: line bundles and their isomorphisms descend, with locally constant rank and the graded sign symmetry.

## Proof
1.1 On $\operatorname{Spec}A$ use $\mathcal W(A)=Ch^b(\operatorname{proj}A)$, with quasi-isomorphisms as weak equivalences and degreewise split monomorphisms as cofibrations. Mapping cylinders give factorization; quasi-isomorphisms between bounded projectives have contractible cones, so saturation holds. The completed enhancement comparison identifies its infinity-localization with the supplied $\operatorname{Perf}(A)$. It is idempotent complete. Hence [F1] and [F2] give the actual determinant map on the connective cover of the current K-spectrum and its space. [F1, F2]

2.1 For every ring map $A\to B$, termwise tensor takes finite projectives to finite projectives and preserves split cofibrations and contractible cones. It is therefore exact on these Waldhausen models, including preservation of weak equivalences. The KM pullback data and [F1] universal construction make the determinant maps natural, with the tensor-composition identifications, at the Picard-one-type level. These are actual maps and natural isomorphisms of the determinant data; a calculation of homotopy groups alone has not supplied them. [F1, F2, step 1.1]

3.1 Affine schemes cover the big scheme site by open immersions. By sheafification’s universal property and restriction to this covering basis, the actual affine map to the graded-line stack extends to a map from the sheafification of the K-space presheaf to that stack. Compose with the K-space sheafification unit to obtain the claimed map at every qcqs $X$. This construction does not require an equality of global bundle K zero and perfect K zero, or even an assertion that taking a first Postnikov section commutes with global sections. KM pullback composition and the affine exact-model naturality supply the descent morphisms. On a perfect object E its affine restrictions are sent to the alternating determinant with those same quasi-isomorphism transition maps; these glue to exactly KM’s global determinant line by its extended determinant/base-change construction. [F1, F2, F3, step 1.1, step 2.1]

4.1 The rank of the graded line is Euler rank. Its rank-zero substack is $B\mathbb G_m$ with its usual symmetry, giving the stated restricted map. An enhanced cofiber sequence is represented locally by a genuine cofibration sequence or a mapping-cylinder replacement of such a sequence; its determinant additivity is the one in [F1]. Taking line isomorphism classes yields $[\det Q]=[\det P]+[\det R]$ for every such cofiber relation, independently of a chosen ordinary triangle diagram. Degree-zero vector bundles and their matrix automorphisms give precisely exterior determinant and matrix determinant. For a global cofiber sequence, use its mapping-cone true triangle and the KM additivity isomorphism, with the quasi-isomorphism identifications of [F1]. These are the same pullback-compatible isomorphisms used by the affine determinant data in steps 1.1–3.1, so the global line relation retains its gluing maps. Mere equality of classes on affine opens is not used to infer equality in the global Picard group. [F1, F2, F3, step 1.1, step 2.1, step 3.1] ∎
