---
id: thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras
kind: theorem
title: "Closed oriented two-dimensional TQFTs are commutative Frobenius algebras"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 10
deps: [def-category, def-countable-choice, def-equivalence-and-adjoint-equivalence-of-categories, def-frobenius-object-and-knowledgeable-sewing-data, def-lax-strong-and-strict-monoidal-functor, def-braided-monoidal-functor, def-monoidal-natural-transformation, def-oriented-open-closed-surface-category, def-symmetric-monoidal-category, lem-boundary-relative-two-dimensional-surface-normal-form, lem-elementary-surface-sewing-relations]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
axiom_use: "Arbitrary field k. ACω is inherited only through the boundary-relative surface normal-form theorem."
sources:
  references:
    - title: "Joachim Kock, Frobenius algebras and 2D topological quantum field theories, complete minicourse notes"
      url: "https://mat.uab.cat/~kock/TQFT/FS.pdf"
      locator: "§§1.1–1.3 and 3.1.12–3.1.13, PDF pp. 6–18 and 34–36, for the closed cobordism convention, Frobenius generators, and genus formula."
    - title: "Aaron D. Lauda and Hendryk Pfeiffer, Open-closed strings: Two-dimensional extended TQFTs and Frobenius algebras, arXiv:math/0510664v3"
      url: "https://arxiv.org/pdf/math/0510664v3"
      locator: "§4, PDF pp. 39–42, for the categorical TQFT/Frobenius correspondence."
---

## Statement

For any field $k$, the category of strong symmetric monoidal functors $\mathsf{Cob}^{\mathrm{cl}}_2\to\mathrm{Vect}_{\mathrm{fd}}(k)$ and monoidal natural transformations is equivalent to the category of finite-dimensional commutative Frobenius $k$-algebras and maps preserving multiplication, unit, comultiplication, and counit. Here $\mathsf{Cob}^{\mathrm{cl}}_2$ has circle words as objects and only surfaces with **no free boundary at all** as morphisms. It is not the full subcategory on circle objects inside the open-closed category, since that larger category also has circle-to-circle morphisms with free windows.

If $M$ is connected with genus $g$, $m$ incoming circles and $n$ outgoing circles, its value under the functor corresponding to $(C,\mu,\eta,\Delta,\epsilon)$ is
$$
\Delta_C^{[n]}\circ H^g\circ\mu_C^{[m]}:C^{\otimes m}\to C^{\otimes n}, \qquad H:=\mu_C\Delta_C,
$$
where $\mu_C^{[0]}=\eta_C$, $\Delta_C^{[0]}=\epsilon_C$, and $\mu_C^{[1]}=\Delta_C^{[1]}=1_C$. Disconnected surfaces are evaluated by tensor products and the boundary-slot symmetries.

## Facts & Assumptions

**Given:** An arbitrary field $k$ and the no-free-boundary oriented surface category specified above.

[A1] The face-relative smooth category/decomposition uses $\mathrm{AC}_\omega$ only through the stated collars and normal-form result ([[def-countable-choice]], [[lem-boundary-relative-two-dimensional-surface-normal-form]]).

[F1] Objects and morphisms of a category, composition, and identities obey the typed category laws ([[def-category]]).

[F2] A closed surface has no free boundary; the category of such surfaces is a symmetric monoidal subcategory with disjoint union ([[def-oriented-open-closed-surface-category]]).

[F3] Strong symmetric monoidal functors obey the monoidal coherence equations and preserve the symmetry under their tensor structure maps as in [[def-braided-monoidal-functor]]; monoidal natural transformations obey the structure and compatibility equations of [[def-lax-strong-and-strict-monoidal-functor]], [[def-symmetric-monoidal-category]], and [[def-monoidal-natural-transformation]].

[F4] The closed elementary surfaces give exactly the algebra, coalgebra, commutativity, and Frobenius equations ([[lem-elementary-surface-sewing-relations]]).

[F5] Every closed oriented surface has the marked boundary-relative normal word, and two surfaces agree exactly when the normal-form invariants agree ([[lem-boundary-relative-two-dimensional-surface-normal-form]]).

## Proof

1.1 Let $T:\mathsf{Cob}^{\mathrm{cl}}_2\to\mathrm{Vect}_{\mathrm{fd}}(k)$ be a strong symmetric monoidal functor. Put $C=T(S^1)$, a finite-dimensional vector space. Apply $T$ to the pair of pants $S^1\sqcup S^1\to S^1$, the disk $\varnothing\to S^1$, and their height reversals. Transport their images along the strong monoidal structure maps to obtain $\mu_C:C\otimes C\to C$, $\eta_C:k\to C$, $\Delta_C:C\to C\otimes C$, and $\epsilon_C:C\to k$. The associativity, unit, coassociativity, counit, and both Frobenius surface equalities in [F4] give those Frobenius equations. For commutativity, the symmetry cylinder is sent to the vector-space flip by the symmetry-preservation equation in [F3]; applying $T$ to the pair-of-pants swap equality in [F4] therefore gives $\mu_C=\mu_C\tau_{C,C}$. Thus $C$ is a finite-dimensional commutative Frobenius algebra. [given, F1, F2, F3, F4, construct]

1.2 Conversely let $(C,\mu_C,\eta_C,\Delta_C,\epsilon_C)$ be a finite-dimensional commutative Frobenius algebra. Assign to a word of $m$ circles the vector space $C^{\otimes m}$, with $C^{\otimes0}=k$. Assign to a connected morphism with the indicated genus and boundaries the formula in the statement, inserting the canonical associators, unitors, and boundary permutations; assign to a disconnected morphism the ordered tensor product of the connected formulas. By [F5], these data are independent of the chosen surface decomposition: every decomposition reduces through the closed elementary relations in [F4] to the same normal word. If two morphisms are glued, their chosen decompositions concatenate; evaluating the concatenated generator word is the composite of the two linear maps. Reducing the glued surface to its unique normal word preserves that value by the Frobenius equations. Hence identities, composition, tensor product and symmetry are preserved. The block-permutation cylinders evaluate to the corresponding vector-space factor permutations; under the canonical tensor comparison maps this is exactly the symmetry-preservation equation in [F3]. The canonical associators and unitors of vector spaces give the remaining strong monoidal coherence maps, so this defines a strong symmetric monoidal functor. [given, F1, F2, F3, F4, F5, construct]

2.1 If $M$ is connected with $m$ incoming circles, $n$ outgoing circles, and genus $g$, the closed normal-form theorem [F5] reduces it to $m$-fold multiplication, $g$ copies of the handle $H=\mu_C\Delta_C$, and $n$-fold comultiplication. The empty input and output reductions are the unit disk and counit disk; a cylinder gives the identity convention at arity one. Therefore $T(M)$ is the stated formula. For a disconnected surface, the components are a disjoint union, so the strong monoidal structure and [F3] give the tensor product formula. [step 1.1, A1, F3, F5, algebra]

2.2 A map $f:C\to C'$ preserving all four Frobenius maps defines a component $f^{\otimes m}$ on every $m$-circle word, with the unit component at $k$. It is natural for each of the four generating surfaces by the four preservation equations; it is natural for a composite by induction on the number of generator factors, and for disjoint union by the tensor product rule. Thus it is a monoidal natural transformation. Conversely a monoidal natural transformation between two TQFTs restricts at the circle to a linear map $f:C\to C'$. Naturality at the pair of pants and the two disks gives the multiplication, unit, comultiplication, and counit preservation equations, and monoidal compatibility forces its component on every circle word to be $f^{\otimes m}$. The two constructions therefore give inverse maps on every hom-set. [F3, F4, step 1.2, algebra]

3.1 Write $E$ for extraction of the commutative Frobenius algebra and $R$ for the construction from that algebra. Step 2.2 proves that $E$ is fully faithful. Step 1.2 constructs a functor from each algebra, so every object in the algebra category is in the image of $E$; on objects and generating maps, $E R$ is the identity after the fixed tensor-structure identifications. For any TQFT $T$, the canonical comparison maps from its monoidal structure identify $R E(T)$ with $T$ on each circle word; naturality on the four generators from step 1.1 and the normal-form reduction in step 2.1 prove naturality on every surface. These comparison maps are monoidal by [F3], so $R E$ is naturally isomorphic to the identity. Hence $E$ and $R$ are quasi-inverse equivalences of categories. [step 1.1, step 2.1, step 1.2, step 2.2, F3, F5, discharge-construct] ∎

