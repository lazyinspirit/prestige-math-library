---
id: thm-author-4f716d60801a-affine-derived-input
kind: theorem
title: External affine derived and perfect comparisons
status: published
domain: mathematics
deps:
  - math:def-perfect-complex-over-a-ring
  - math:def-axiom-of-choice
  - math:def-affine-scheme
  - math:def-associated-sheaf-module-affine-scheme
  - math:def-quasi-coherent-module-scheme
  - math:def-module-on-ringed-space
  - math:def-derived-category-of-an-abelian-category
  - math:def-locally-free-sheaf-finite-rank
  - math:def-restriction-sheaf-open-subspace
  - thm-author-4f716d60801a-derived-enhancement-input
  - lem-author-4f716d60801a-restriction-support
  - thm-author-4f716d60801a-local-perfect-input
dependency_roles:
  math:def-perfect-complex-over-a-ring: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-associated-sheaf-module-affine-scheme: mathematical-premise
  math:def-quasi-coherent-module-scheme: mathematical-premise
  math:def-module-on-ringed-space: mathematical-premise
  math:def-derived-category-of-an-abelian-category: mathematical-premise
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
  math:def-restriction-sheaf-open-subspace: mathematical-premise
  thm-author-4f716d60801a-derived-enhancement-input: mathematical-premise
  lem-author-4f716d60801a-restriction-support: mathematical-premise
  thm-author-4f716d60801a-local-perfect-input: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
external_input: true
sources:
  references:
    - title: The Stacks Project, Derived Categories of Schemes
      url: https://stacks.math.columbia.edu/tag/06Z0
      locator: Lemma 36.3.5 (06Z0), statement and proof, including the exactness
        assertion
      statement: On Spec(A), degreewise associated sheaf gives an equivalence D(A) ->
        D_qc(O_X), inverse to derived global sections. Its proof explicitly uses
        exactness of the module-to-sheaf functor.
      hypotheses: A is a commutative unital ring; complexes may be unbounded.
      reading_limits: Read the complete displayed statement and proof of 06Z0 in this
        repair, including the explicit exactness assertion. The referenced sheaf
        and unbounded-derived results are imported, not reconstructed. The
        earlier reading was limited to the statement and beginning of the proof.
    - title: The Stacks Project, Derived Categories of Schemes
      url: https://stacks.math.columbia.edu/tag/08EB
      locator: Lemma 36.10.7
      statement: For X = Spec(A), the associated derived object of an A-complex is
        perfect exactly when the A-complex is perfect.
      hypotheses: A is a commutative unital ring; ring-perfect means having a bounded
        finitely generated projective representative in D(A).
      reading_limits: Read the statement and short proof reference of 08EB; checked
        the ring convention in Definition 15.76.1 (0656), the displayed
        statement and proof of Lemma 15.76.2 (0658), and the local perfection
        statements in Definition 20.49.1 and Lemmas 20.49.2-3 (08CL, 0BCJ). Also
        read the displayed statement and proof of 20.49.5 (08CQ). The referenced
        pseudo-coherence, strictification and Tor-amplitude arguments are not
        reconstructed. The earlier reading was limited to the statement and
        short proof reference.
dependency_level: 2
---

## Statement
Assume the Axiom of Choice and work in suitable fixed universes for the unbounded derived categories. Let $A$ be a commutative unital ring and $X=\operatorname{Spec}A$, with its structure sheaf $\mathcal O_X$. Write $D(A)$ for the ordinary unbounded derived category of $A$-modules, and $D(\mathcal O_X)=D(\mathrm{Mod}(\mathcal O_X))$ for that of all sheaves of $\mathcal O_X$-modules, using cochain complexes and inverting quasi-isomorphisms. Let $D_{\mathrm{qc}}(X)$ be the full subcategory of $D(\mathcal O_X)$ consisting of objects whose cohomology sheaves are quasi-coherent in every degree.

Here an object $E$ of $D(\mathcal O_X)$ is called locally perfect if every point has an open neighbourhood $U$ such that $E|_U$ is isomorphic in $D(\mathcal O_U)$ to a bounded cochain complex of finite locally free $\mathcal O_U$-modules; the finite degree bounds may depend on $U$.

The associated-sheaf functor on $A$-modules is exact, and its degreewise application to complexes preserves quasi-isomorphisms. The induced functor $D(A)\to D_{\mathrm{qc}}(X)$ is an equivalence. For any $A$-complex, its associated object is locally perfect if and only if the complex is isomorphic in $D(A)$ to a bounded complex of finitely generated projective $A$-modules.

## Statement references
[[math:def-perfect-complex-over-a-ring]]

[[math:def-axiom-of-choice]]

[[math:def-affine-scheme]]

[[math:def-associated-sheaf-module-affine-scheme]]

[[math:def-quasi-coherent-module-scheme]]

[[math:def-module-on-ringed-space]]

[[math:def-derived-category-of-an-abelian-category]]

[[math:def-locally-free-sheaf-finite-rank]]

[[math:def-restriction-sheaf-open-subspace]]

[[thm-author-4f716d60801a-derived-enhancement-input]]

[[lem-author-4f716d60801a-restriction-support]]

[[thm-author-4f716d60801a-local-perfect-input]]

## Source contract
**Given:** $A$ and $X$ as above, and possibly unbounded complexes, under the stated Choice and universe conventions.

**Goal:** Record the classical affine comparison and its perfection criterion with the scheme-side terms specified.

[F1] Stacks Lemma 36.3.5 imports the equivalence in the statement. Its displayed proof explicitly invokes exactness of associated sheaf, so this import includes that exactness and the induced functor on complexes.

[F2] Stacks Lemma 36.10.7 imports the perfection criterion. The ring convention is that of [[math:def-perfect-complex-over-a-ring]]. The local finite locally free convention agrees with the source's perfection on schemes by [[thm-author-4f716d60801a-local-perfect-input]].

[F3] [[thm-author-4f716d60801a-derived-enhancement-input]] supplies the unbounded derived constructions and their Hom sets in suitable universes. The ordinary cochain-localization convention is [[math:def-derived-category-of-an-abelian-category]], applied to modules and to the module sheaves of [[math:def-module-on-ringed-space]]. Choice is retained for these imported resolution and derived-category constructions, as specified in [[math:def-axiom-of-choice]].

[F4] Restriction to an open subspace is [[math:def-restriction-sheaf-open-subspace]]; its degreewise operation induces restriction on derived objects by [[lem-author-4f716d60801a-restriction-support]]. Thus $E|_U$ in the inline local-perfect condition is independent of the complex representing $E$.

## External input
Import [F1] and [F2] with the stated reading limits, using the ambient construction in [F3] and the restriction operation in [F4]. The local-perfection convention in [F2] applies because schemes have local stalk rings. This item records a classical derived equivalence; the enhanced comparison is established separately for the actual induced functor. No local proof of the imported comparisons is claimed.
