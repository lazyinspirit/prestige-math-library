---
id: lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness
kind: lemma
title: Essential smallness of perfect and supported categories
status: published
domain: mathematics
deps:
  - thm-author-c5bc2838d897-kcoherent-qcqs-classical-generator-input
  - def-scheme-perfect-complexes
  - thm-author-4f716d60801a-derived-enhancement-input
  - math:def-axiom-of-choice
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  thm-author-c5bc2838d897-kcoherent-qcqs-classical-generator-input: mathematical-premise
  def-scheme-perfect-complexes: mathematical-premise
  thm-author-4f716d60801a-derived-enhancement-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 8
formulation_deps:
  - def-scheme-perfect-complexes
  - thm-author-4f716d60801a-derived-enhancement-input
  - math:def-axiom-of-choice
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-grothendieck-universe-closure-convention
argument_deps:
  - thm-author-c5bc2838d897-kcoherent-qcqs-classical-generator-input
  - def-scheme-perfect-complexes
  - thm-author-4f716d60801a-derived-enhancement-input
  - math:def-axiom-of-choice
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-grothendieck-universe-closure-convention
sources:
  references:
    - title: Jacob Lurie, Higher Topos Theory
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Proposition 5.4.1.7 and its proof (printed p. 423); Definition 5.4.1.3
        (p. 421); Proposition 5.4.1.2(3) (p. 419); Definition 1.2.10.1 and the
        following equivalence criterion (p. 43); Section 1.2.11 (p. 44).
      statement: In a locally small infinity-category, the full subcategory spanned by
        a small family of objects is essentially small. Essential smallness
        gives an equivalent small infinity-category. A fully faithful
        essentially surjective functor is an equivalence.
      hypotheses: An infinity-category with essentially small mapping spaces; a
        small-indexed family of objects. All smallness is relative to the fixed
        base universe.
      reading_limits: Read Proposition 5.4.1.7 and its proof, Definition 5.4.1.3, the
        statement of Proposition 5.4.1.2 including (3), and Sections 1.2.10–11.
        The minimal-model and homotopy-theoretic foundations are imported, not
        reconstructed.
---

## Statement
Assume AC. For every quasi-compact quasi-separated scheme X, the supplied Perf(X) is essentially small as a stable infinity-category. Every full supported subcategory Perf_T(X), for any subset T⊆X, is essentially small as well. Their already supplied idempotent completeness and stability therefore place chosen small equivalent models in Cat_perf, the infinity-category of small idempotent-complete stable infinity-categories and exact functors.

## Facts & Assumptions
**Given:** qcqs X, subset T, AC and the fixed suitable universes of the derived-enhancement supplier.

**Goal:** Justify the small domain needed for nonconnective K-theory.

[F1] [[thm-author-c5bc2838d897-kcoherent-qcqs-classical-generator-input]] gives one perfect classical generator P of the ordinary perfect derived category.

[F2] [[def-scheme-perfect-complexes]] supplies the exact full stable idempotent-complete enhancements. [[thm-author-4f716d60801a-derived-enhancement-input]] supplies the locally small ambient derived infinity-category: each mapping space admits a small equivalent model relative to the chosen universe.

[F3] [[math:def-quasi-compact-and-quasi-separated-scheme]] specifies the qcqs hypothesis: the underlying space is quasi-compact and the intersection of every two affine open subschemes is quasi-compact.

[A1] [[math:def-axiom-of-choice]] supplies AC. Use the universe closure convention of [[math:def-grothendieck-universe-closure-convention]]: fix a base universe $U$ containing $\omega$ and the scheme data, with a larger universe for the ambient category and its objects as in [F2]. Existence of these universes is assumed separately from AC. A family is $U$-small if it is indexed by a set in $U$; essential smallness means equivalence to a $U$-small infinity-category. AC is used to choose cone and splitting representatives for the small families of construction data in the larger universe. Closure of $U$ under finite constructions, subsets and $U$-indexed unions controls the sizes of the indexing sets, not membership of the chosen ambient objects in $U$.

[F4] Reference 0 supplies size replacement for full subcategories on small families and the fully faithful, essentially surjective equivalence criterion; small models retain coherent composition.

## External input
The size-replacement and equivalence inputs [F4] are imported from [Higher Topos Theory](https://www.math.ias.edu/~lurie/papers/HTT.pdf) at reference 0’s locators; they are not proved here.

## Proof
1.1 Begin with the classical generator $P$ of [F1]. From a $U$-small family of representatives, retain its members and add all integer shifts, finite sums, cones of every homotopy-category map between its members, and splitting images of all their idempotent endomorphisms. These objects remain perfect by [F2]. For each pair of representatives the ordinary Hom set is $U$-small by [F2], so the family of maps, and its subset of idempotents, has a $U$-small index set by [A1]. Cones exist and idempotents split by [F2]; AC in [A1] chooses representatives in the fixed larger universe. A splitting image is unique up to isomorphism: if $e=ir=i'r'$ with $ri=1$ and $r'i'=1$, then $r'i$ and $ri'$ are inverse isomorphisms. Iterate these operations over $\omega$. Because $\omega\in U$, the universe closure in [A1] makes the total indexing set $U$-small. Every finite expression in shifts, sums, cones and summands appears at a finite stage, up to isomorphism. [F1, F2, A1, construct]

2.1 The hypothesis [F3] permits application of [F1], so every ordinary perfect object is isomorphic to a representative from step 1.1. By [F2], an isomorphism in the homotopy category is an equivalence in the enhanced category. Let $\mathcal C_0$ be the full enhanced subcategory on those representatives. Its object family is $U$-small by step 1.1 and its mapping spaces are essentially $U$-small by [F2]; [F4] therefore gives a $U$-small model equivalent to $\mathcal C_0$. The inclusion $\mathcal C_0\to\operatorname{Perf}(X)$ is fully faithful by fullness and essentially surjective by the generator argument, hence an equivalence by [F4]. This uses the classical generator only to enumerate objects and makes no inference of enhanced coherence from a triangulated equivalence. Support is invariant under equivalence by [F2]; thus the subfamily whose support is contained in $T$ represents $\operatorname{Perf}_T(X)$ for any subset $T$, with no closedness assumption. Its index set is a subset of the small index set, hence is $U$-small by [A1]. Apply [F4] again to the full subcategory on this subfamily, using the same ambient mapping spaces; its fully faithful and essentially surjective inclusion in $\operatorname{Perf}_T(X)$ is an equivalence. Equivalences transport the finite-limit and finite-colimit universal properties and coherent idempotent splittings. Both small models therefore inherit the already supplied stability and idempotent completeness and lie in $\mathrm{Cat}_{\mathrm{perf}}$. [F1, F2, F3, F4, A1, step 1.1] ∎
