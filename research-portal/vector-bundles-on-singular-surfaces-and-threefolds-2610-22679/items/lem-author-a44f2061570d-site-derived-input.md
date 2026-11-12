---
id: lem-author-a44f2061570d-site-derived-input
kind: lemma
title: Imported derived sections on a small site
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - def-author-cf6ede58b450-site-plus-data
  - lem-author-a44f2061570d-evaluation-left-exact
  - math:def-abelian-category
  - math:def-cochain-complex-in-an-abelian-category
  - math:def-cohomology-object-of-a-cochain-complex
  - math:def-chain-homotopy
  - math:def-injective-object
  - math:def-injective-resolution-in-an-abelian-category
  - math:def-localization-of-a-category-at-a-class-of-morphisms
  - math:thm-abelian-groups-form-an-abelian-category
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  def-author-cf6ede58b450-site-plus-data: mathematical-premise
  lem-author-a44f2061570d-evaluation-left-exact: mathematical-premise
  math:def-abelian-category: mathematical-premise
  math:def-cochain-complex-in-an-abelian-category: mathematical-premise
  math:def-cohomology-object-of-a-cochain-complex: mathematical-premise
  math:def-chain-homotopy: mathematical-premise
  math:def-injective-object: mathematical-premise
  math:def-injective-resolution-in-an-abelian-category: mathematical-premise
  math:def-localization-of-a-category-at-a-class-of-morphisms: mathematical-premise
  math:thm-abelian-groups-form-an-abelian-category: mathematical-premise
external_input: true
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: literature-derived
sources:
  references:
    - title: "The Stacks Project, Section 18.3: Abelian sheaves"
      url: https://stacks.math.columbia.edu/tag/03CM
      version: Online tagged text reread 2026-11-12; no repository revision pinned.
      locator: Lemma 18.3.1(1)-(4)
      statement: The category of abelian sheaves on a site is abelian.
      hypotheses: A site with the stated size conventions.
      reading_limits: Read Lemma 18.3.1(1)-(4) and its displayed kernel/cokernel
        argument; the sheafification and abelian-category prerequisites cited
        there were not reconstructed.
    - title: "The Stacks Project, Section 21.19: Cohomology of unbounded complexes"
      url: https://stacks.math.columbia.edu/tag/07A5
      version: Online tagged text reread 2026-11-12; no repository revision pinned.
      locator: Opening construction, additive-functor clause (2), and object-sections
        example (2), before Lemma 21.19.1
      statement: Every complex of modules on a ringed site has a K-injective
        resolution; an additive functor into an abelian category has a right
        derived functor computed on such a resolution.
      hypotheses: A ringed site with fixed size bounds and an additive functor to an
        abelian category; here use the constant integer sheaf and evaluation
        into abelian groups.
      reading_limits: Read the opening K-injective existence assertion,
        additive-functor clause (2), computation formula and object-sections
        example (2); underlying existence and derived-functor proofs remain
        imported.
    - title: "The Stacks Project, Section 21.2: Cohomology of sheaves"
      url: https://stacks.math.columbia.edu/tag/01FT
      version: Online tagged text reread 2026-11-12; no repository revision pinned.
      locator: Opening paragraph and equation 21.2.0.1
      statement: Abelian sheaves on a site have enough injectives, and the cohomology
        over an object is computed by evaluating an injective resolution of the
        sheaf in degree zero.
      hypotheses: An abelian sheaf on a site with the fixed size bounds and an object
        of that site.
      reading_limits: Read the opening enough-injectives assertion and
        object-cohomology construction through equation 21.2.0.1; the referenced
        existence theorem was not reconstructed.
    - title: "The Stacks Project, Lemma 13.31.4: Bounded below injective complexes"
      url: https://stacks.math.columbia.edu/tag/070J
      version: Online tagged text reread 2026-11-12; no repository revision pinned.
      locator: Lemma 13.31.4, statement and one-line proof
      statement: A bounded below complex of injective objects in an abelian category
        is K-injective.
      hypotheses: An abelian category and a bounded below complex whose terms are
        injective objects.
      reading_limits: Read the lemma and its reduction to Lemmas 13.31.2 and 13.18.8;
        those antecedent proofs were not reconstructed.
    - title: "The Stacks Project, Section 18.6: Ringed sites"
      url: https://stacks.math.columbia.edu/tag/04KQ
      locator: Definition 18.6.1(1)
      statement: A ringed site is a site equipped with a sheaf of rings.
      hypotheses: A site and a sheaf of rings on that site.
      reading_limits: Read Definition 18.6.1(1); no morphism-of-ringed-sites
        construction is used.
      version: Online tagged text read 2026-11-12; no repository revision pinned.
    - title: "The Stacks Project, Definition 18.9.1: Presheaves of modules"
      url: https://stacks.math.columbia.edu/tag/03CT
      locator: Definition 18.9.1(1)-(2)
      statement: An O-module presheaf is an abelian presheaf with sectionwise O-module
        structures compatible with restriction; morphisms respect those actions.
      hypotheses: A category and a presheaf of rings O.
      reading_limits: Read the definition and its morphism compatibility square; no
        later module-category theorem is imported from this page.
      version: Online tagged text read 2026-11-12; no repository revision pinned.
    - title: "The Stacks Project, Section 18.10: Sheaves of modules"
      url: https://stacks.math.columbia.edu/tag/03CV
      locator: Definition 18.10.1(1)-(4)
      statement: A sheaf of O-modules is an O-module presheaf whose underlying abelian
        presheaf is a sheaf; its morphisms are the module-presheaf morphisms.
      hypotheses: A site with a sheaf of rings O.
      reading_limits: Read Definition 18.10.1 and followed its link to Definition
        18.9.1; no unstated algebraic structure is supplied by set-valued
        sheafification alone.
      version: Online tagged text read 2026-11-12; no repository revision pinned.
    - title: "The Stacks Project, Lemma 21.5.2: Constant integer coefficients"
      url: https://stacks.math.columbia.edu/tag/03F2
      locator: First sentence of the proof, before the Ext comparison
      statement: For the constant integer sheaf Z on a site C, the category Mod(Z)
        identifies with Ab(C).
      hypotheses: A site with its constant integer sheaf, using the same size bounds
        for both categories.
      reading_limits: Read the lemma and the first proof paragraph identifying these
        categories. Only that identification is imported; the H1 comparison and
        the remaining extension argument are not used.
      version: Online tagged text read 2026-11-12; no repository revision pinned.
dependency_level: 8
---

## Statement
Assume the Axiom of Choice and fixed size bounds, and let $\mathcal C$ be a small site with $U$ an object. The category of abelian sheaves on $\mathcal C$ is abelian. Evaluation at $U$ has a right derived functor on the unbounded derived category, computed by evaluating a K-injective resolution. For a sheaf $F$ placed in degree zero, this derived value may also be computed by an injective resolution concentrated in nonnegative degrees.

Here a small site is a small category equipped with a Grothendieck topology, specified by covering sieves satisfying maximality, pullback stability and transitivity; no scheme hypothesis is imposed. Fix universes $\mathcal U\in\mathcal V$ for the small category and sheaf values, and enlarged bounds for the sheaf and derived categories. These bounds are hypotheses, not assertions of universe existence. An abelian sheaf is a contravariant functor to abelian groups satisfying unique amalgamation on covering sieves; its morphisms are natural transformations of group homomorphisms. Evaluation sends such a sheaf and such a morphism to their value and component at $U$.

Complexes use cochain grading: $d^{n+1}d^n=0$, and a map $f:A^\bullet\to B^\bullet$ satisfies $d_B^nf^n=f^{n+1}d_A^n$. Write $H^n(A)=\ker d_A^n/\operatorname{im}d_A^{n-1}$; acyclic means that all these cohomology objects vanish. A cochain homotopy from $f$ to $g$ is a family $h^n:A^n\to B^{n-1}$ with $f^n-g^n=d_B^{n-1}h^n+h^{n+1}d_A^n$. This is the chain-homotopy convention reindexed by $A_n=A^{-n}$, $B_n=B^{-n}$ and $s_n=h^{-n}$.

An injective sheaf is an object $I$ such that maps into $I$ extend across monomorphisms. An injective resolution of $F$ is an exact coaugmented complex $0\to F\to I^0\to I^1\to\cdots$ with every $I^n$ injective. A quasi-isomorphism is a cochain map inducing isomorphisms on all cohomology objects. A complex $I^\bullet$ is K-injective if every cochain map from an acyclic complex to it is cochain-homotopic to zero. A K-injective resolution is a quasi-isomorphism into such a complex. Bounded below means zero in all sufficiently negative cochain degrees.

The unbounded derived category is the localization of the category of cochain complexes at quasi-isomorphisms; no degree bound is imposed. The right derived functor here is the functor from this localization to $D(\mathbf{Ab})$ supplied by the cited K-injective construction, with value represented by $I^\bullet(U)$. For $F[0]$, the complex has $F$ in degree zero and zero in every other degree.

## External input
References 0, 1, 2 and 3 supply, respectively, the abelian-sheaf category theorem, the unbounded K-injective and derived-functor construction, the ordinary injective-resolution computation, and the bounded-below K-injectivity criterion. Their existence proofs remain imported. The hypotheses are the indicated small site and size bounds, Choice for the selected existence constructions, and an object $U$ of the site.

For the ringed-site application, a sheaf of rings assigns rings and restriction homomorphisms with the underlying sheaf condition, and a ringed site is a site equipped with such a sheaf. An $\mathcal O$-module sheaf is an abelian sheaf with an $\mathcal O(V)$-module structure on each value at $V$, compatible with restrictions; its morphisms respect these actions. References 4, 5 and 6 give precisely these definitions. Reference 7 identifies abelian sheaves with modules over the constant integer sheaf $\underline{\mathbb Z}$, the sheaf associated to the constant integer presheaf with its induced ring operations. This identification preserves objects, morphisms and evaluation into abelian groups. We use clause (2) of reference 1 with the additive evaluation functor into $\mathbf{Ab}$; it does not require identifying $\underline{\mathbb Z}(U)$ with $\mathbb Z$.

## Facts & Assumptions

[A1] Choice and the fixed size bounds are retained for the imported K-injective and ordinary injective-resolution existence constructions applied in step 2.1; their foundational proofs are not reconstructed here. [[math:def-axiom-of-choice]]

**Given:** A small site $\mathcal C$, an object $U$, Choice and fixed size bounds as specified in the Statement.

**Goal:** Obtain the stated derived-evaluation interface and its ordinary-sheaf computation.

[F0] General small sites, covering sieves, matching families, the sheaf condition and relative-smallness conventions are supplied by [[def-author-cf6ede58b450-site-plus-data]].

[F1] References 0, 1 and 2 in External input supply the abelian category, unbounded derived evaluation and ordinary injective-resolution computation. These are imported results under their recorded hypotheses.

[F2] Evaluation is additive and left exact once the sheaf category is abelian. [[lem-author-a44f2061570d-evaluation-left-exact]] Its target $\mathbf{Ab}$ is abelian. [[math:thm-abelian-groups-form-an-abelian-category]]

[F3] A bounded below complex of injectives in an abelian category is K-injective, by reference 3, [Stacks Lemma 13.31.4](https://stacks.math.columbia.edu/tag/070J).

[F4] Abelian categories and the cochain, cohomology, homotopy, injective-object, injective-resolution and localization conventions have the meanings of [[math:def-abelian-category]], [[math:def-cochain-complex-in-an-abelian-category]], [[math:def-cohomology-object-of-a-cochain-complex]], [[math:def-chain-homotopy]], [[math:def-injective-object]], [[math:def-injective-resolution-in-an-abelian-category]] and [[math:def-localization-of-a-category-at-a-class-of-morphisms]]. The homotopy formula in the Statement explicitly reindexes the chain convention; K-injectivity, acyclicity and boundedness are specified inline.

[F5] References 4, 5 and 6 specify the ringed-site and module-sheaf object types. Reference 7 supplies the constant-integer-sheaf identification used to apply reference 1. No reconstruction of its sheafification foundations is claimed.

## Proof

**Proof technique:** Apply the cited site results with the constant integer coefficient ring.

1.1 By [F0] the general small site and its abelian sheaves are defined, and [F1] makes their category abelian in the sense of [F4]. With the ringed-site and module conventions of [F5], its objects and morphisms identify with modules over the constant integer sheaf: integer multiplication is determined by the abelian group operation, and locally constant integer sections act locally by this multiplication and then glue uniquely by the sheaf condition. Evaluation is additive and left exact by [F2], with abelian target $\mathbf{Ab}$. Thus the additive-functor clause of the imported unbounded result applies to this evaluation functor. [F0, F1, F2, F4, F5]

2.1 By [F1] and [A1], every sheaf complex has a K-injective resolution, and the imported construction gives the derived evaluation functor represented by evaluating that resolution, independently of its choice in the derived category. For $F[0]$, the ordinary imported construction gives the injective resolution of [F4] starting in degree zero; extend it by zero in negative degrees. Its terms are injective in the abelian category of step 1.1, and it is bounded below, so [F3] makes it K-injective. Its coaugmentation is a quasi-isomorphism by exactness of the injective resolution. Consequently its evaluation computes this same unbounded right-derived value on the sheaf. [F1, F3, F4, A1, step 1.1] ∎
