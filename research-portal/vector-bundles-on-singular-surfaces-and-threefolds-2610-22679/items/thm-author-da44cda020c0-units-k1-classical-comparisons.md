---
id: thm-author-da44cda020c0-units-k1-classical-comparisons
kind: theorem
title: External matrix, exact and bounded-projective K-theory comparisons
status: published
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
    - title: Charles Weibel, The K-book, Chapter III
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.III.pdf
      locator: Definition III.1.1 and Example III.1.1.1, PDF pp. 1–2
      statement: Classical K₁(A)=GL(A)/[GL(A),GL(A)] is natural in unital ring maps.
        For a commutative ring determinant gives a surjection to A× split by the
        one-by-one matrices.
      hypotheses: Unital rings for matrix K₁; commutative unital rings for determinant
        and the unit section. No regularity or noetherian hypothesis.
      reading_limits: Read the full definition and adjacent determinant example on pp.
        1–2. The matrix determinant and its naturality are independently
        authored in the first two local helpers; no general Whitehead theorem is
        reconstructed.
    - title: Charles Weibel, The K-book, Chapter IV
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.IV.pdf
      locator: Definition IV.1.1; Theorem IV.4.9 and explicit maps η_n(g)=(g,1), pp.
        42–43; Theorem IV.4.11/Corollary IV.4.11.1, pp. 44–45; Theorem
        IV.7.1/Corollary IV.7.2, pp. 61–64; Exercises IV.7.8–7.9, printed and
        PDF p. 65; IV.8.3.2, IV.8.5 and Exercises IV.8.5–8.7, pp. 68,74–75
      statement: The canonical free-module automorphism maps identify matrix
        K₁(A)=π₁BGL(A)^+ with π₁ of exact-category K-theory of finite
        projectives. The split-exact group-completion and Quillen Q
        constructions agree. Waldhausen S and Quillen Q agree for exact
        categories, with the indicated automorphism classes matched by the
        explicit comparison.
      hypotheses: P(A), finite projective modules, is split exact. Stabilization sends
        M to diag(M,1). The exact-category S/Q comparison applies to any small
        exact category. Positive generator orientation is the usual automorphism
        class of M, as fixed by the source η_n map, Exercise IV.7.9(c), and
        Exercise IV.8.7 (with its cross-reference corrected to IV.7.9).
      reading_limits: Prior recorded reading covered the stated
        plus/group-completion/Q comparisons and their displayed
        proofs/reductions in the listed passages, including the explicit η_n map
        and cofinality hypotheses. Read the complete canonical S/Q comparison
        construction and automorphism statement in Exercises 8.5–8.7; those are
        a published proof outline, not a locally completed reconstruction of
        Waldhausen’s original proof. Did not read Waldhausen’s original paper or
        reconstruct all group-completion and Theorem-B prerequisites. This
        adjudication read Exercises IV.7.8–7.9 and IV.8.5–8.7 only, including
        IV.7.9(c), in the Rutgers web text accessed 2026-11-10; visually checked
        printed/PDF pp. 65 and 75 in the primary cached PDF
        /tmp/k1-authoring/Kbook.IV.pdf (93 pages; PDF creation date 2012-08-17;
        SHA256
        9f1c1b8cccfe19d547c27dd04c61f198fd7a0cddd0018a0b84442b00fa575248). The
        web text and the two cached pages agree on the cited passages; no byte
        identity with the live PDF is claimed. No new reading of the other
        comparison proofs is claimed.
    - title: Charles Weibel, The K-book, Chapter V
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.V.pdf
      locator: Theorem V.2.2 (Gillet–Waldhausen) and proof, pp. 13–14; §V.2.7.2, p. 18
      statement: For an exact category closed under kernels of surjections in an
        ambient abelian category, inclusion as complexes concentrated in degree
        zero induces a K-theory equivalence with its bounded chain-complex
        Waldhausen category. In particular K(P(A))≃K(Chᵇ(P(A))).
      hypotheses: P(A) is the category of finite projective A-modules, with split
        exact sequences. Chᵇ(P(A)) has degreewise split monomorphisms as
        cofibrations and quasi-isomorphisms as weak equivalences; the ambient
        abelian category is all A-modules. Kernels of surjections between finite
        projectives are finite projective because the sequence splits. Cochain
        reindexing does not change the statement.
      reading_limits: Read Theorem 2.2 and its full displayed proof and §2.7.2,
        including the actual inclusion functors. The proof imports Waldhausen
        localization and preceding exact-complex calculations; those substantial
        foundational results are not reconstructed. Only the bounded-projective
        bridge is needed here; the larger perfect-complex approximation in
        §2.7.2 is context, not a required new model.
dependency_level: 0
---

## Statement
Assume AC. For every commutative unital ring A, let P(A) be the exact category of finite projective modules and let C(A)=Chᵇ(P(A)) be bounded cochain complexes, with degreewise split monomorphisms as cofibrations and quasi-isomorphisms as weak equivalences. The canonical matrix-automorphism maps and degree-zero inclusion give natural isomorphisms

$$GL(A)_{ab}\xrightarrow{\sim}\pi_1 K^Q(P(A))\xrightarrow{\sim}\pi_1 K^W(C(A)).$$

The first is the classical matrix/Quillen comparison; the second includes the canonical exact-category S/Q comparison and Gillet–Waldhausen inclusion. The image of M∈$GL_n$(A) is the standard automorphism class of M acting on Aⁿ in degree zero. In particular the one-by-one unit u maps to the class of multiplication by u on A. These comparisons are natural for extension of scalars along unital ring maps.

## Source contract
**Given:** A commutative unital ring, AC, and the exact/Waldhausen structures specified above.

**Goal:** Import the actual classical comparison maps with their matrix-loop normalization.

[F1] Weibel III.1.1 identifies matrix K₁ with GL(A)_ab. IV.1.1, IV.4.9/4.11.1 and IV.7.1–7.2 identify its canonical automorphism maps with exact-category Quillen K-theory.

[F2] Weibel Exercise IV.7.9(c) matches the Quillen automorphism class with its group-completion class. IV.8.3.2/8.5 and Exercises IV.8.5–8.7 supply the canonical S/Q comparison and its automorphism-class normalization. V.2.2 supplies the K-theory equivalence induced by P(A)→C(A).

## External input
Import [F1] and [F2] with the precise reading limits in the frontmatter. These are comparisons induced by actual categorical constructions, not an unqualified existence of abstract π₁ isomorphisms. The elementary checks that P(A) is closed under kernels of its surjections and that base change is weakly exact on C(A) are given in the target’s application. The local helpers independently prove determinant and its unit calculation; no determinant compatibility is inferred from a π₀ comparison.

Source correction: Exercise IV.8.7 cites IV.7.8 for the automorphism class; the intended reference is IV.7.9. This source cross-reference error does not change the imported comparison.
