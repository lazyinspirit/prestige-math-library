---
id: thm-adjudicate-f6007757a8ac-waldhausen-determinant-one-type
kind: theorem
title: Exact true-triangle and Waldhausen determinant one-type input
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
external_input: true
sources:
  references:
    - title: "Knudsen–Mumford, The projectivity of the moduli space of stable curves
        I: Preliminaries on det and Div"
      url: https://journals.msp.org/mscand/article/download/2000/1999
      locator: graded invertible sheaves pp20–21; alternating determinant p31;
        Definition2 p37 and remark p38; Definition4 pp40–42 including footnote
        p41; Theorem2 p42; warning and Proposition7 p44
      statement: Extended determinant is defined on perfect complexes with additivity
        for true triangles, represented in the derived category of actual
        short-exact complex diagrams, with naturality for their isomorphisms,
        the true-triangle-of-triangles axiom, and derived-pullback composition
        compatibility. The source expressly does not assert functorial
        additivity for all ordinary triangle diagrams on arbitrary schemes.
      hypotheses: Arbitrary schemes and locally perfect complexes for Theorem2. True
        triangles and isomorphisms are those of VT(A), not all commuting
        diagrams in D(A). Additional reducedness hypothesis occurs in
        Proposition7 for an ordinary-triangle extension and is not silently
        imposed on Theorem2.
      reading_limits: This assignment visually read the cached primary KM scans of
        printed pp.20–21,31,37–38,40–44, including the true-triangle category,
        all Definition4 axioms and its p41 footnote, Theorem2, the
        perfect-cohomology corollary and p44 warning. The remote journal URL was
        unavailable. Theorem2 and the omitted Proposition4 proof remain
        established external inputs; no reconstruction or all-higher enhancement
        of KM is claimed.
    - title: Fernando Muro, Andrew Tonks and Malte Witte, On determinant functors and
        K-theory, Publicacions Matematiques59(2015),137–233
      url: https://fmuro.github.io/assets/files/papers/zbMATH06417698.pdf
      locator: Definition1.2.3 and axioms pp145–146; Example1.2.7 p147;
        Definition1.2.9 pp147–148; Theorem1.5.4 pp161–162; section1.6 Lemma1.6.1
        p166 and Theorem1.6.3 p167; natural construction statement surrounding
        Theorem4.3.4 p212
      statement: A determinant functor on a Waldhausen category is a functor on weak
        equivalences with additivity for actual cofibration sequences,
        naturality under weak-equivalence diagrams, staircase associativity and
        commutativity. Its universal Picard target exists and models the actual
        Waldhausen K-spectrum 1-type. Example1.2.7 explicitly includes the
        bounded-complex extension of the graded vector-bundle determinant.
      hypotheses: Small Waldhausen category up to fixed universes. Picard groupoid
        target; retain its graded symmetry. Theorem1.6.3 gives the actual
        Waldhausen branch, not a substitution of arbitrary triangulated
        K-theory. Exact functors preserve the data and the universal
        construction is natural.
      reading_limits: "Read extracted text of the author-hosted 2015 journal PDF,
        printed pp.145–148,161–162,166–167,212: the complete named definitions,
        both determinant axioms, Example1.2.7, universal factorization, the
        named theorem statements, and the p212 naturality/2-functoriality
        passage. The long universal-construction and homotopy-model proofs are
        imported, not reconstructed. Only the Waldhausen branch is applied."
    - title: Blumberg–Gepner–Tabuada, A universal characterization of higher algebraic
        K-theory
      url: https://arxiv.org/pdf/1001.2282v4
      locator: Lemma7.11 and Corollary7.12 pp48–49; Remark9.33 p64; compare completed
        enhanced-comparison supplier
      statement: The Waldhausen-to-infinity K comparison is natural for weakly exact
        functors under DHKS saturation and factorization. The canonical
        connective-to-nonconnective map agrees in positive degrees; its
        degree-zero comparison is an isomorphism under idempotent completeness.
        Thus its connective truncation is an equivalence for Perf(A).
      hypotheses: DHKS-saturated Waldhausen category admitting factorization for the
        model comparison. Idempotent-complete associated stable
        infinity-category is needed for degree zero; Perf(A) satisfies it.
      reading_limits: Read arXiv:1001.2282v4 (5 February 2013), pp.48–49 in full for
        Lemma7.11/Corollary7.12 and their proofs, and p64 Proposition9.32/proof
        and Remark9.33. The present application explicitly uses idempotent
        completeness for degree zero as well as positive-degree agreement. The
        corepresentability and delooping foundations remain imported.
dependency_level: 0
---

## Statement
Assume AC and fixed universe bounds. For a small Waldhausen category $\mathcal W$ a determinant functor to a Picard groupoid $\mathcal P$ consists of a functor on weak equivalences and additivity isomorphisms for actual cofibration sequences, satisfying weak-equivalence naturality, staircase associativity and commutativity. It factors essentially uniquely through the universal Picard groupoid $V(\mathcal W)$, which represents the 1-type of $K^W(\mathcal W)$. Hence it gives an actual map of connective K-space 1-types to the nerve of $\mathcal P$, natural in exact functors and compatible with object/automorphism classes. For bounded finite-projective complexes, the Knudsen–Mumford alternating graded determinant is such a functor. Its triangle coherence is for true/enhanced triangles. It is not a claim of natural additivity under every morphism of ordinary distinguished-triangle diagrams.

## External input
The statements below are precise established inputs. Their constructions are used at the Waldhausen/cofiber-sequence and Picard-one-type level. No general determinant functor on arbitrary diagrams in an ordinary triangulated category, or unrestricted higher categorical enhancement of Knudsen–Mumford, is imported.

## Facts & Assumptions
**Given:** The stated model hypotheses, AC and fixed universe bounds.

**Goal:** Supply the actual determinant map required by the consumers, with exactly the recorded coherence.

[F1] The precise KM and MTW source records above.

[F2] The BGT record above supplies the canonical enhanced/connective/nonconnective comparison under its explicit hypotheses.

## Proof
1.1 Apply the Waldhausen branches of MTW Definition1.2.3, Theorems1.5.4 and1.6.3. Definition1.2.9 identifies the supplied determinant functor with a symmetric monoidal functor out of $V(\mathcal W)$, and the 1-type comparison supplies the actual K-space map with its object and weak-equivalence maps. The finite Picard target needs this coherence, rather than any replacement of it by bare equality of $K_0,K_1$ groups. [F1]

2.1 KM Definition4 provides the weak-equivalence naturality and associativity on actual true short-exact complex diagrams; its restriction to bounded finite-projective complexes is explicitly the MTW Example1.2.7. The graded-line symmetry is retained, matching the commutativity axiom and its sign. KM pullback isomorphisms include composition compatibility. Thus these data are natural under tensor extension of bounded projectives and under restriction. [F1, step 1.1]

3.1 Apply BGT to the bounded-projective Waldhausen model when transporting the map to the specified affine enhanced Perf model. Idempotent completeness supplies its missing degree-zero hypothesis in Remark9.33, in addition to positive-degree agreement. The canonical comparison is therefore an equivalence on connective covers, and the determinant map transports across that actual equivalence. This imports the exact model bridge, not a new enhancement inferred from KM’s ordinary statement or local Postnikov calculations. [F2, step 1.1] ∎
