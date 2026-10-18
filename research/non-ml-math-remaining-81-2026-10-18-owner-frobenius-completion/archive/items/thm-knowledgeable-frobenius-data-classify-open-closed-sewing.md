---
id: thm-knowledgeable-frobenius-data-classify-open-closed-sewing
kind: theorem
title: "Typed colored knowledgeable Frobenius data classify open-closed sewing"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 10
deps: [def-category, def-countable-choice, def-equivalence-and-adjoint-equivalence-of-categories, def-frobenius-object-and-knowledgeable-sewing-data, def-lax-strong-and-strict-monoidal-functor, def-monoidal-natural-transformation, def-oriented-open-closed-surface-category, def-relative-open-closed-surface-normal-form, def-symmetric-monoidal-category, lem-boundary-relative-two-dimensional-surface-normal-form, lem-elementary-surface-sewing-relations, lem-frobenius-sewing-derived-moves, lem-relative-surface-collars-and-elementary-decomposition]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
axiom_use: "For arbitrary field k and color set S. ACω is inherited only through the face-relative surface decomposition and normal-form theorem. No semisimplicity or C=Z(A) assumption is used."
sources:
  references:
    - title: "Aaron D. Lauda and Hendryk Pfeiffer, Open-closed strings: Two-dimensional extended TQFTs and Frobenius algebras, arXiv:math/0510664v3"
      url: "https://arxiv.org/pdf/math/0510664v3"
      locator: "§§3.3–4.3 and §5, PDF pp. 18–44; the colored definitions and short proof indications are completed by local typed and normal-form arguments."
    - title: "Gregory W. Moore and Graeme Segal, D-branes and K-theory in 2D topological field theory, arXiv:hep-th/0609042v1"
      url: "https://arxiv.org/pdf/hep-th/0609042v1"
      locator: "§§2.1–2.4 and Appendix A.2, PDF pp. 5–12 and printed pp. 71–80, for independent open/closed data and boundary-relative sewing."
    - title: "Joachim Kock, Frobenius algebras and 2D topological quantum field theories, complete minicourse notes"
      url: "https://mat.uab.cat/~kock/TQFT/FS.pdf"
      locator: "§§1.1–1.3 and 2.4, PDF pp. 6–18 and 25–30, for the closed sector and Frobenius contractions."
---

## Statement

For any set $S$ and field $k$, the category of strong symmetric monoidal functors
$$
\mathsf{Cob}^{\mathrm{oc}}_2(S)\longrightarrow\mathrm{Vect}_{\mathrm{fd}}(k)
$$
and monoidal natural transformations is equivalent to the category of S-colored knowledgeable Frobenius data and the homomorphisms defined in [[def-frobenius-object-and-knowledgeable-sewing-data]]. The open objects are the typed spaces $A_{ab}$, not one common algebra for every interval. The closed object $C$ is commutative Frobenius; each $A_{aa}$ has symmetric Frobenius pairing; and $i_a:C\to A_{aa}$, $i_a^*:A_{aa}\to C$ satisfy the stated centrality, adjunction, and Cardy equations. For $S=\{*\}$ this is the usual knowledgeable pair $(A,C,i,i^*)$.

The theorem does not identify $C$ with the center of $A_{aa}$, does not imply that every symmetric Frobenius algebra admits an open/closed extension, and makes no claim about modular three-dimensional or point-level fully extended TQFTs.

## Facts & Assumptions

**Given:** An arbitrary set $S$, an arbitrary field $k$, and the exact S-colored surface category with boundary conventions of [[def-oriented-open-closed-surface-category]].

[A1] $\mathrm{AC}_\omega$ is required only by the collar/Morse decomposition and surface normal-form suppliers ([[def-countable-choice]], [[lem-relative-surface-collars-and-elementary-decomposition]], [[lem-boundary-relative-two-dimensional-surface-normal-form]]).

[F1] A strong symmetric monoidal functor and a monoidal natural transformation preserve composition, tensor, unit, symmetry, and their coherence maps ([[def-lax-strong-and-strict-monoidal-functor]], [[def-symmetric-monoidal-category]], [[def-monoidal-natural-transformation]]).

[F2] The ten elementary surfaces have the exact typed algebraic generator maps, and their boundary-relative relations are equations 1–7 of [[def-frobenius-object-and-knowledgeable-sewing-data]] ([[lem-elementary-surface-sewing-relations]]).

[F3] Pairing duality, both snakes, zipper/cozipper transports, cozipper coalgebra preservation, cyclic rotation, and the window/handle/Cardy reductions are proved with every endpoint label retained ([[lem-frobenius-sewing-derived-moves]]).

[F4] Every surface has a finite decomposition into the ten generators, and its marked colored boundary data have the unique candidate normal word of [[lem-boundary-relative-two-dimensional-surface-normal-form]] ([[lem-relative-surface-collars-and-elementary-decomposition]], [[def-relative-open-closed-surface-normal-form]]).

[F5] An equivalence of categories consists of functors with natural isomorphisms between both composites and the identity functors ([[def-equivalence-and-adjoint-equivalence-of-categories]]).

## Proof

1.1 Let $T$ be a strong symmetric monoidal functor. Set $C=T(Circle)$ and $A_{ab}=T(I_{ab})$. Transport the images of the ten elementary surfaces along the structure isomorphisms of $T$ to obtain the maps $\mu_C,\eta_C,\Delta_C,\epsilon_C$, the indexed maps $\mu_{abc},\eta_a,\Delta_{abc},\epsilon_a$, and the zipper/cozipper maps $i_a,i_a^*$. Each vector space is finite-dimensional because $T$ lands in $\mathrm{Vect}_{\mathrm{fd}}(k)$. [given, F1, F2, construct]

1.2 By [F2], every defining relation is a boundary-relative equality of elementary surfaces. Applying $T$ to the closed and open pair-of-pants, disk, zipper, and cozipper relations gives each equation 1–7 of the data definition, including cyclic trace, centrality, adjunction, and the exact colored Cardy map $A_{bb}\to A_{aa}$. The snakes and indexed trace in [F3] show that each $A_{ab}$ pairs perfectly with $A_{ba}$; no extra nondegeneracy or semisimplicity hypothesis is needed. Thus extraction sends $T$ to an object of the stated data category. [step 1.1, F2, F3, algebra]

2.1 Conversely, let $D$ be S-colored data. Assign $C$ to a circle, $A_{ab}$ to $I_{ab}$, the tensor product of the assigned spaces to each ordered word, and $k$ to the empty word. Use the canonical associators, unitors, and flips of vector spaces for the strong symmetric monoidal structure. By [F4], every surface has a finite elementary decomposition; evaluate it by composing and tensoring the maps of $D$ along that decomposition. If two decompositions represent the same surface, the normal-form reduction in [F4] relates them by the elementary relations of [F2] and the derived moves of [F3]. Those are equations satisfied by $D$, so both evaluations are equal. The assignment is therefore independent of the decomposition and of the representative surface. [given, A1, F1, F2, F3, F4, construct]

2.2 The identity cylinder evaluates to the identity map by the unit and counit equations. If two surfaces are composable, concatenate their finite decompositions along the matching parameterized black boundary; the composite word evaluates to the composite of their linear maps. By [F4] it reduces to the normal word of the glued surface without changing that evaluation, so composition is preserved. Ordered disjoint union concatenates generator words, and the symmetry cylinder evaluates to the vector-space flip; hence tensor, symmetry, and interchange are preserved. The canonical reassociation and unit maps satisfy the coherence equations in [F1], proving that the construction is a strong symmetric monoidal functor. [step 2.1, F1, F2, F3, F4, algebra]

3.1 A data homomorphism $(f_C,(f_{ab}))$ defines on each object word the tensor product of its component maps, with the prescribed unit component on $k$. The equations defining a data homomorphism are exactly naturality on the ten generating surfaces. Naturality on an arbitrary surface follows by induction over its finite decomposition: it is preserved under composition by the induction hypothesis and under disjoint union by tensoring the naturality squares. Conversely, a monoidal natural transformation restricts at each circle and interval to maps $f_C,f_{ab}$; its naturality squares on the ten generators give every structure-preservation equation, while monoidal compatibility determines all word components. Therefore extraction is fully faithful. [F1, F2, F4, step 2.1, step 2.2, algebra]

3.2 Let $E$ be extraction and $R$ be the construction in steps 2.1–2.2. On a data object, $ER$ recovers exactly its named vector spaces and generator maps. On a functor $T$, the components of the canonical monoidal structure maps of $T$ identify $RE(T)$ with $T$ on every word, including the empty word. They are natural on the ten generators by the definitions in step 1.1; [F4] extends their naturality to every surface. They form a monoidal natural isomorphism by [F1]. Thus $ER$ is the identity and $RE$ is naturally isomorphic to the identity, which proves the equivalence in [F5]. When $S$ is a singleton, the indexed maps reduce to $A=A_{**}$ and the same construction is the usual knowledgeable pair. No step identifies $C$ with a center: only the explicitly stated equations are used. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, F1, F4, F5, discharge-construct] ∎
