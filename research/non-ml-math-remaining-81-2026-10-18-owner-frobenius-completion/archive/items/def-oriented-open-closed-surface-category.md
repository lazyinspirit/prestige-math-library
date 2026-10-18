---
id: def-oriented-open-closed-surface-category
kind: definition
title: "The oriented open-closed surface category with colored free boundary"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-category, def-countable-choice, def-lax-strong-and-strict-monoidal-functor, def-monoidal-category, def-monoidal-natural-transformation, def-symmetric-monoidal-category, thm-collar-neighborhood-theorem]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
axiom_use: "ACω is used only for smooth collar existence. Once compatible face collars are fixed, gluing, tensor, symmetry, and the category axioms are choice-free."
sources:
  references:
    - title: "Aaron D. Lauda and Hendryk Pfeiffer, Open-closed strings: Two-dimensional extended TQFTs and Frobenius algebras, arXiv:math/0510664v3"
      url: "https://arxiv.org/pdf/math/0510664v3"
      locator: "§§3.1–3.3, PDF pp. 11–20; especially Definitions 3.2–3.7 and the strict symmetric monoidal category construction."
    - title: "Joachim Kock, Frobenius algebras and 2D topological quantum field theories, complete minicourse notes"
      url: "https://mat.uab.cat/~kock/TQFT/FS.pdf"
      locator: "§§1.1–1.3, PDF pp. 6–18: closed cobordisms, gluing, disjoint union, and the functorial TQFT convention."
    - title: "Gregory W. Moore and Graeme Segal, D-branes and K-theory in 2D topological field theory, arXiv:hep-th/0609042v1"
      url: "https://arxiv.org/pdf/hep-th/0609042v1"
      locator: "§2.1–2.4, PDF pp. 5–12: open/closed objects, boundary labels, and sewing."
---

## Definition

Fix a set $S$ of **boundary colors**. A **black boundary component** is a parametrized incoming or outgoing boundary circle or interval. A **free boundary component** is a connected component of the remaining boundary, labeled by one element of $S$. The intersection of a black and a free face consists of **corners**. A smooth structure with corners means that every point has a chart in an open subset of $[0,\infty)^r\times\mathbb R^{2-r}$, $0\le r\le2$, and transition maps extend smoothly to open subsets of $\mathbb R^2$.

Each surface representative is equipped with smooth collars of its black and free faces that are product collars in the quadrant charts at corners. A collar of a face $F$ is a smooth embedding $F\times[0,\epsilon)\to M$ restricting to the identity on $F\times\{0\}$. The collars are used only to define gluing; morphisms forget their lengths and are identified by orientation-preserving diffeomorphisms that fix every black parameterization, preserve incoming/outgoing faces, and preserve each free-boundary color. Under $\mathrm{AC}_\omega$, compatible collars exist: use the smooth collar theorem on each face and choose the local product collars together in the finite corner charts.

An **object** is a finite ordered word in:

- the positively oriented circle $C$; and
- intervals $I_{ab}$, for $a,b\in S$, oriented from their left endpoint of color $a$ to their right endpoint of color $b$.

The empty word is allowed. A **morphism** from a word $X$ to a word $Y$ is an equivalence class of compact oriented smooth surfaces with corners whose black boundary is the disjoint union of a parameterized incoming copy of $X$ and a parameterized outgoing copy of $Y$, with the induced boundary orientations opposite to the object orientations on incoming components and equal on outgoing components. Every free-boundary component is colored in $S$. No free boundary is required to be connected, and a free component may be a circle (a window) or an interval between corners.

Composition glues the outgoing black boundary of the first surface to the incoming black boundary of the second, component by component, using the fixed parameterizations. A circle matches a circle; $I_{ab}$ matches the oppositely oriented copy of that same interval, with its endpoint colors in the reversed boundary orientation. Tensor product is ordered disjoint union and concatenation of words. The symmetry is the cylinder with the ordered boundary components permuted. The identity on a word is its product cylinder.

Write $\mathsf{Cob}^{\mathrm{oc}}_2(S)$ for this symmetric monoidal category. Its objects include circle and interval words and its morphisms may have colored free boundary.

The **closed oriented surface category** $\mathsf{Cob}^{\mathrm{cl}}_2$ has only finite words of circles as objects and only morphisms with no free boundary at all. It is not the full subcategory of $\mathsf{Cob}^{\mathrm{oc}}_2(S)$ on circle words: that full subcategory would also contain circle-to-circle surfaces with free-boundary windows.

For a field $k$, $\mathrm{Vect}_{\mathrm{fd}}(k)$ is the category of finite-dimensional $k$-vector spaces and linear maps with the usual tensor product, unit $k$, associator, unitors, and flip. A (closed or open-closed) **2D TQFT** here is a strong symmetric monoidal functor from the indicated surface category to $\mathrm{Vect}_{\mathrm{fd}}(k)$. Morphisms of TQFTs are monoidal natural transformations, with the binary and unit compatibility equations of [[def-monoidal-natural-transformation]].

## Facts & Assumptions

**Given:** A color set $S$, $\mathrm{AC}_\omega$, and the smooth surface and collar conventions above.

[A1] $\mathrm{AC}_\omega$ is the countable-choice principle used by the collar theorem ([[def-countable-choice]]).

[F1] A category has objects, typed morphisms, associative composition, and identities satisfying the two identity laws ([[def-category]]): “$h\circ(g\circ f)=(h\circ g)\circ f$” and “$1_B\circ f=f=f\circ1_A$.”

[F2] A monoidal category has a bifunctor, a unit, associators and unitors satisfying the pentagon and triangle equations ([[def-monoidal-category]]).

[F3] A symmetric monoidal category is a braided monoidal category whose double braiding is the identity ([[def-symmetric-monoidal-category]]).

[F4] Under $\mathrm{AC}_\omega$, every smooth manifold with boundary has a smooth collar ([[thm-collar-neighborhood-theorem]]).

[F5] A strong monoidal functor has invertible tensor and unit structure maps and obeys the associativity and unit coherence equations ([[def-lax-strong-and-strict-monoidal-functor]]).

[F6] A monoidal natural transformation obeys the binary tensor and unit compatibility equations ([[def-monoidal-natural-transformation]]).

## Proof

1.1 A corner in a compact surface with faces is isolated, so compactness gives finitely many corners. Choose pairwise disjoint quadrant charts about them; their two coordinate directions give product collars of the incident faces that agree on the quadrant. After deleting smaller corner charts, each remaining closed face piece is a compact smooth one-manifold with boundary, so [F4] supplies collars there. Shrinking them to the chart overlap and interpolating their positive normal coordinates gives collars agreeing with the quadrant collars. This finite construction gives the compatible face collars in the definition. A black face glues to an oppositely oriented black face of the same type, and the interval endpoint colors match by the stated rule; therefore the quotient retains an oriented surface with corners and the unglued free faces retain their labels. [given, A1, F4, construct]

1.2 Replacing either collar by a shorter collar or a smooth increasing reparameterization of its normal coordinate changes the glued surface by a diffeomorphism that is the identity outside the seam collars and on the residual black boundary. A boundary-relative diffeomorphism of either input extends over its product collar by the product map and hence descends to the glued quotient. Thus gluing is independent of representatives and collar widths in the stated equivalence class. [step 1.1, given, algebra]

2.1 For three composable representatives, both parenthesized composites identify the same three collared surfaces along the same two black boundary parameterizations. In product coordinates, both quotients are obtained by replacing the two seam collars by the same concatenated interval; a smooth increasing reparameterization of that interval gives a diffeomorphism fixed on the exterior black boundary. Hence composition is associative on equivalence classes. Gluing an identity cylinder merely lengthens a collar and is equivalent to the original surface by step 1.2. [F1, step 1.2]

3.1 Ordered disjoint union is associative with the empty surface as strict unit at the level of words and diffeomorphism classes. The cylinder that permutes components gives the symmetry; composition of these cylinders is permutation composition, and its double application is the identity permutation. The interchange law holds because gluing and disjoint union act on disjoint collared components. Thus the category is strict symmetric monoidal, and [F2]–[F3] identify its required coherence data. [F2, F3, step 1.2]

4.1 The condition $\partial_1M=\varnothing$ is preserved by gluing and disjoint union, so the circle-only objects and no-free-boundary morphisms form the stated closed symmetric monoidal subcategory. The excluded full-subcategory convention would admit a morphism with a nonempty free circular face, which violates $\partial_1M=\varnothing$. [given, step 1.1, step 3.1]

5.1 For the strong monoidal functors of [F5], identity natural transformations satisfy the binary and unit compatibility equations of [F6]; if two transformations satisfy them, substitution in those equations shows their componentwise vertical composite also satisfies them. Their identity and associativity laws hold componentwise in the target category [F1]. Thus the morphisms between the functors in the definition form the stated category. [F1, F5, F6, algebra] ∎
