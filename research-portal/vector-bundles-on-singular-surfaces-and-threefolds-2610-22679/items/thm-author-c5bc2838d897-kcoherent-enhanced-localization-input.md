---
id: thm-author-c5bc2838d897-kcoherent-enhanced-localization-input
kind: theorem
title: External localization of one marked scheme and tensor family
status: draft
domain: mathematics
deps:
  - math:def-axiom-of-choice
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Blumberg–Gepner–Tabuada, Uniqueness of the multiplicative cyclotomic
        trace
      url: https://arxiv.org/pdf/1103.3923v3
      locator: §3, Proposition 3.5, PDF p. 13
      statement: A symmetric monoidal relative category whose weak equivalences are
        preserved by tensor in each variable has a symmetric monoidal
        infinity-localization. A weakly symmetric monoidal functor preserving
        weak equivalences induces a symmetric monoidal functor on these
        localizations.
      hypotheses: Ordinary symmetric monoidal categories C,D, weak equivalences
        W_C,W_D tensor-stable in each variable, and a lax symmetric monoidal
        functor whose unit/product comparison maps are weak equivalences. Apply
        to K-flat sheaf complexes and quasi-isomorphisms, with actual strong
        symmetric monoidal f*.
      reading_limits: Read Proposition 3.5 and its full displayed proof plus preceding
        Lemma 3.4 context. The cited older Higher Algebra numbering is
        version-specific; the theorem here is imported directly. No general
        field-dependent dg monoidal nerve theorem is used.
    - title: Jacob Lurie, Higher Algebra
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Proposition 1.3.4.5 (statement p. 109, proof pp. 114–115); Proposition
        1.3.2.10 and §1.3.5
      statement: For a full subcategory of complexes closed under tensor with the
        finite chain interval N_*(Δ¹), ordinary infinity-localization at chain
        homotopy equivalences is its dg nerve. A dg category of complexes closed
        under the finite stable operations has stable dg nerve; the derived
        sheaf category is localization at quasi-isomorphisms.
      hypotheses: An additive category, full subcategory of its complexes, with
        closure under the chain interval. Translate chains to cochains by degree
        negation. K-flat complexes have this closure.
      reading_limits: Read the full statement and proof of 1.3.4.5 and the relevant
        stable dg nerve/derived localization statements. §1.3.5 is also present
        in the exact completed run supplier. Did not reconstruct the
        model-categorical and coherent-nerve prerequisites.
    - title: Brad Drew, Verdier quotients of stable quasi-categories are localizations
      url: https://arxiv.org/pdf/1511.08287v1
      locator: Theorem 1.3, PDF pp. 6–7; Definition 1.1
      statement: If A is a stable full subcategory of a small stable infinity-category
        C, then localization of C at maps whose cofibers lie in A is the stable
        Verdier quotient C/A. In particular that ordinary infinity-localization
        is stable.
      hypotheses: Smallness in a chosen universe; enlarge universes to encompass the
        sheaf-complex categories. No field hypothesis occurs in Theorem 1.3.
      reading_limits: Read Definition 1.1, Lemma 1.2 and Theorem 1.3 with their full
        displayed proofs. Inspected §2/Corollary 2.6 and did not apply its
        field-dependent dg construction. The imported theorem handles the
        already defined stable dg nerve, not a field-specific enhancement.
    - title: Vladimir Hinich, Dwyer–Kan localization revisited
      url: https://arxiv.org/pdf/1311.4128v4
      locator: §1.1.2–1.1.3; Definition 2.1.1, Proposition 2.1.4 and complete proof
        §2.1.5–2.2.6; Definition 3.2.1 and Proposition 3.2.2; PDF pp. 4–5, 16–22
      statement: Localization is an actual functor L:Cat_∞^+→Cat_∞ with a natural
        localization map. A marked cocartesian fibration localizes to a
        cocartesian fibration with the localized fibers (Proposition 2.1.4).
        Tensor-stable markings give a symmetric monoidal localization with the
        full symmetric monoidal functor universal property (Proposition 3.2.2).
      hypotheses: Definition 2.1.1 requires a cocartesian fibration, marked
        cocartesian lifts of marked base edges, preservation of fiber markings
        by every transport, and equivalence of localized fibers over marked base
        edges. Markings are saturated. For symmetric monoidal localization every
        active Fin_* transport must preserve the markings. Use equivalences as
        base markings, componentwise quasi-isomorphisms in the fibers, and all
        categories in a sufficiently large universe.
      reading_limits: Read all statements and displayed proofs in §1.1.2–1.1.3,
        §2.1–2.2 and §3.2, including the mapping-simplex proof of fiberwise
        localization. Did not reconstruct the referenced straightening model
        structure or all earlier DK comparison results. Proposition 3.2.2 is
        used only under tensor-stable markings, verified below for K-flat
        complexes.
    - title: Jacob Lurie, Higher Topos Theory
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Remark 2.4.2.2 and its dual; Proposition 3.2.5.21; Hinich §2.1.5–2.1.6
      statement: The nerve of an ordinary Grothendieck opfibration is a cocartesian
        fibration; such a fibration classifies a coherently functorial diagram
        of infinity-categories.
      hypotheses: Ordinary categories and Grothendieck opfibrations in a chosen
        universe. A pseudofunctor of ordinary categories gives the opfibration
        by the ordinary Grothendieck construction; composition is defined using
        its coherent natural comparison isomorphisms.
      reading_limits: Read Remark 2.4.2.2, Proposition 3.2.5.21 and its displayed
        proof, and Hinich §2.1.5–2.1.6 for the family classification. The
        straightening/unstraightening foundations are imported rather than
        reconstructed.
dependency_level: 0
---

## Statement
Assume AC and suitable universes. Hinich's localization L:Cat_∞^+→Cat_∞ is a functor with a natural localization map. For a marked cocartesian fibration p:(E,V)→(B,W) satisfying Definition 2.1.1, its localization is a cocartesian fibration L(E,V)→L(B,W), with fibers the localized original fibers (Proposition 2.1.4). The four hypotheses are: p is cocartesian; cocartesian lifts of W are marked; all fiber transports preserve markings; and transports over W induce equivalences of localized fibers. Markings are saturated. For a symmetric monoidal cocartesian fibration over Fin_*, if every active transport preserves its componentwise marking, Proposition 3.2.2 gives a symmetric monoidal localization, with the full universal property for symmetric monoidal functors.

The nerve of an ordinary Grothendieck opfibration is a cocartesian fibration (dual of HTT Remark 2.4.2.2). Cocartesian fibrations classify coherent diagrams, as in Hinich §2.1.5–2.1.6/HTT straightening. These facts apply to a single family over a product base, and thus retain coherence in all base variables simultaneously.

For the fiber comparison, retain these formal inputs: the symmetric monoidal relative localization theorem of BGT Proposition 3.5; HA Proposition 1.3.4.5 identifying chain-homotopy localization with the dg nerve under finite-chain-interval closure; HA Proposition 1.3.2.10 and its following paragraph giving stability for full shift/cone-closed complex subcategories; and Drew Theorem 1.3 identifying stable Verdier quotients with localization at the maps whose cones lie in the subcategory.

## Source contract
**Given:** Marked cocartesian families satisfying all four explicit conditions, tensor-stable markings for the monoidal assertion, and the interval/stability conditions for the separate fiber comparison. Use larger universes for the categories of schemes and sheaf complexes.

**Goal:** Import a genuine coherent family-localization theorem, rather than only pointwise localization statements.

[F1] Hinich Definition 2.1.1 and Proposition 2.1.4, with its entire proof, supply the family theorem and its compatibility with the functorial localization map of §1.1.

[F2] Hinich Definition 3.2.1/Proposition 3.2.2 supply the symmetric monoidal universal property; HTT Remark 2.4.2.2 and family classification supply the ordinary-opfibration and coherent-diagram bridge.

[F3] The precise BGT, HA and Drew results in the frontmatter supply the formal fiber comparisons; no field-dependent dg monoidal nerve theorem is used.

## External input
Import [F1]–[F3] with the stated hypotheses and reading limits. In the application, the base is Sch_qcqs^op×Fin_* marked only by equivalences; fiber markings are componentwise quasi-isomorphisms. The local helper constructs its total Grothendieck category before localization and checks every marked-cocartesian and active-tensor hypothesis. The result is one diagram in the scheme and tensor variables at once. It identifies the supplied fiber enhancements; it neither assumes nor claims a natural comparison with a previously specified pullback/tensor diagram on those fibers, because the supplied definition specifies no such diagram.
