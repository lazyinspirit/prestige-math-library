---
id: lem-author-a44f2061570d-site-derived-input
kind: lemma
title: Imported derived sections on a small site
status: draft
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - def-scheme-sites-and-sheafification
  - lem-author-a44f2061570d-evaluation-left-exact
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  def-scheme-sites-and-sheafification: mathematical-premise
  lem-author-a44f2061570d-evaluation-left-exact: mathematical-premise
external_input: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "The Stacks Project, Section 18.3: Abelian sheaves"
      url: https://stacks.math.columbia.edu/tag/03CM
      version: Online tagged text read 2026-11-09; no repository revision was pinned.
      locator: Lemma 18.3.1(1)-(4)
      statement: The category of abelian sheaves on a site is abelian.
      hypotheses: A site with the stated size conventions.
      reading_limits: The stated lemma and kernel/cokernel descriptions were read; its
        proof was not independently reconstructed.
    - title: "The Stacks Project, Section 21.19: Cohomology of unbounded complexes"
      url: https://stacks.math.columbia.edu/tag/07A5
      version: Online tagged text read 2026-11-09; no repository revision was pinned.
      locator: Opening construction, additive-functor clause (2), and object-sections
        example (2), before Lemma 21.19.1
      statement: Every complex of modules on a ringed site has a K-injective
        resolution; an additive functor into an abelian category has a right
        derived functor computed on such a resolution.
      hypotheses: A ringed site with fixed size bounds and an additive functor to an
        abelian category; here use the constant integer sheaf and evaluation
        into abelian groups.
      reading_limits: The existence and computation statements in the opening
        paragraphs were read; the underlying K-injective existence proof was not
        reconstructed.
    - title: "The Stacks Project, Section 21.2: Cohomology of sheaves"
      url: https://stacks.math.columbia.edu/tag/01FT
      version: Online tagged text read 2026-11-09; no repository revision was pinned.
      locator: Opening paragraph and equation 21.2.0.1
      statement: Abelian sheaves on a site have enough injectives, and the cohomology
        over an object is computed by evaluating an injective resolution of the
        sheaf in degree zero.
      hypotheses: An abelian sheaf on a site with the fixed size bounds and an object
        of that site.
      reading_limits: The injective-resolution definition for a sheaf was read; its
        underlying existence proof was not reconstructed.
    - title: "The Stacks Project, Lemma 13.31.4: Bounded below injective complexes"
      url: https://stacks.math.columbia.edu/tag/070J
      version: Online tagged text read 2026-11-09; no repository revision was pinned.
      locator: Lemma 13.31.4, statement and one-line proof
      statement: A bounded below complex of injective objects in an abelian category
        is K-injective.
      hypotheses: An abelian category and a bounded below complex whose terms are
        injective objects.
      reading_limits: Read the statement and its reduction to Lemmas 13.31.2 and
        13.18.8; the latter's argument and the resolution-existence proofs were
        not reconstructed.
dependency_level: 9
---

## Statement
Assume the Axiom of Choice and fixed size bounds, and let $\mathcal C$ be a small site with $U$ an object. The category of abelian sheaves on $\mathcal C$ is abelian. Evaluation at $U$ has a right derived functor on the unbounded derived category, computed by evaluating a K-injective resolution. For a sheaf $F$ placed in degree zero, this derived value may also be computed by an injective resolution concentrated in nonnegative degrees.

An injective sheaf is an object $I$ such that maps into $I$ extend across monomorphisms. A quasi-isomorphism is a chain map inducing isomorphisms on all cohomology objects. A complex $I^\bullet$ is K-injective if every chain map from an acyclic complex to it is chain-homotopic to zero. A K-injective resolution is a quasi-isomorphism into such a complex. The derived category is obtained from the category of complexes by formally inverting quasi-isomorphisms. A right derived functor here means the functor on that localization supplied by the cited construction.

## External input
The cited Stacks results supply the abelian category, the unbounded K-injective resolution and derived-functor construction on a ringed site, and the ordinary nonnegative injective-resolution computation. Apply the ringed-site result to the constant integer sheaf: its modules are precisely abelian sheaves. These are imported established results, not locally reconstructed proofs. The hypotheses are a small site, the indicated size conventions and Choice; $U$ must be an object of the site. Lemma 13.31.4 applies to the nonnegative complex of injectives in this abelian category and identifies an ordinary injective resolution as a K-injective resolution. Thus its evaluation computes the same unbounded derived value. The foundational existence proofs remain imported.

## Facts & Assumptions

[A1] Choice and the fixed size bounds are retained for the imported K-injective and ordinary injective-resolution existence constructions applied in step 2.1; their foundational proofs are not reconstructed here. [[math:def-axiom-of-choice]]

**Given:** A small site $\mathcal C$, an object $U$, Choice and fixed size bounds.

**Goal:** Obtain the stated derived-evaluation interface and its ordinary-sheaf computation.

[F1] The imported results in External input apply to abelian sheaves and to evaluation at an object. [[def-scheme-sites-and-sheafification]]

[F2] Evaluation is additive and left exact once the sheaf category is abelian. [[lem-author-a44f2061570d-evaluation-left-exact]]

[F3] A bounded below complex of injectives in an abelian category is K-injective, by the imported [Stacks Lemma 13.31.4](https://stacks.math.columbia.edu/tag/070J).

## Proof

**Proof technique:** Apply the cited site results with the constant integer coefficient ring.

1.1 By the imported abelian-sheaf result, the category is abelian. Its objects are exactly modules over the constant integer sheaf: integer multiplication is determined by the abelian group operation, and locally constant integer sections act locally by this multiplication and then glue uniquely by the sheaf condition. Evaluation is additive and left exact by [F2]. [F1, F2]

2.1 The imported unbounded result applied to this ringed site gives K-injective resolutions and the derived evaluation functor computed by evaluating them. For a sheaf in degree zero, the imported ordinary-sheaf construction gives an injective resolution starting in degree zero. Its terms are injective in the abelian category of step 1.1, and it is bounded below, so [F3] makes it K-injective. Consequently its evaluation computes this same right-derived functor on the sheaf. [F1, F3, A1, step 1.1] ∎
