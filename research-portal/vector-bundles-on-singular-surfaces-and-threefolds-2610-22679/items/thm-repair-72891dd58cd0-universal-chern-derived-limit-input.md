---
id: thm-repair-72891dd58cd0-universal-chern-derived-limit-input
kind: theorem
title: Universal Chern cohomology and countable derived limits
status: draft
domain: mathematics
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Annala–Iwasa, Motivic spectra and universality of K-theory, author PDF
        dated April 14, 2025
      url: https://ryomei.com/papers/MotSp.pdf
      locator: §2.1.1–2.1.4 p. 14; Lemma 3.2.3 p. 23; Definition 4.4.1 and Lemma 4.4.3
        pp. 30–31; Corollaries 4.4.5 and 4.4.7 and Theorem 4.4.6 pp. 31–32
      hypotheses: A homotopy-commutative oriented motivic E1-ring spectrum satisfying
        the projective bundle formula, in the multiplicative category of stacks
        over the qcqs base Spec(k). Apply to classical integral HZ; its
        orientation and PBF are those in the supplied field comparison. Smooth
        means qcqs smooth and does not require separatedness.
      statement: Corollary 4.4.7 identifies the bigraded cohomology of Vect_n with
        formal series over base cohomology in its actual universal Chern
        classes. Lemma 4.4.3 identifies their pullbacks under addition of a
        trivial line.
      reading_limits: Read the cached primary PDF at these passages, including the
        proof of Theorem 4.4.6 and the adjacent corollaries; opened the live
        primary URL to check the version. The deeper lifting and categorical
        results used in that proof are accepted as established inputs, not
        reconstructed.
      version: April 14, 2025; primary PDF SHA256
        ad36a2ed6a7e8b5815c94b19100b2431f2533fb538c57843bdbeef3d1b400261
    - title: Stacks Project, derived limits and the Milnor exact sequence
      url: https://stacks.math.columbia.edu/tag/0919
      locator: Lemma 15.88.5 (tag 0919), statement and proof; Definition 13.34.1 (tag
        08TB); Lemma 15.88.1(2)–(3) (tag 07KW)
      hypotheses: A countable inverse system with its derived limit in a triangulated
        category with the required products; here the derived mapping complexes
        are in D(Ab), with a genuine enhanced limit.
      statement: The kernel of Hom(L,Rlim T_n) to lim Hom(L,T_n) is R^1 lim
        Hom(L,T_n[-1]). For a surjective countable system this derived-limit
        obstruction vanishes.
      reading_limits: Read the statements and proofs of Lemmas 15.88.1 and 15.88.5 and
        the product-difference definition in 13.34.1 on the primary live site.
        Only these results are imported; no assertion that an arbitrary diagram
        in a homotopy category determines canonical coherent data is made.
      version: Primary live tag pages 0919, 07KW and 08TB as read on 2026-11-10; not a
        claim to have inspected the repository history
    - title: "Stacks Project, derived limits: product-difference triangle"
      url: https://stacks.math.columbia.edu/tag/08TB
      locator: Definition 13.34.1
      statement: A derived limit fits into the distinguished triangle from the limit
        to the countable product, then by one minus the transition shift to that
        product, then to the shifted limit. Such limits exist when the product
        exists, including in D(Ab); uniqueness in the triangulated category is
        only up to a nonunique isomorphism.
      hypotheses: A countable inverse system in a triangulated category with the
        required product. Here the system comes from actual coherent derived
        mapping complexes in D(Ab), before passage to the homotopy category.
      reading_limits: Read Definition 13.34.1 and its following explanation on the
        primary live site in this adjudication. Only that definition and
        explanation are imported; no canonical coherence is inferred from an
        arbitrary diagram in a triangulated category.
      version: Primary live tag 08TB as read on 2026-11-10; no repository-history
        inspection is claimed.
    - title: Stacks Project, Rlim of abelian groups
      url: https://stacks.math.columbia.edu/tag/07KW
      locator: Lemma 15.88.1(2)–(3), statement and proof
      statement: For a countable inverse system of abelian groups, the derived limit
        is represented by the product-difference complex in degrees zero and
        one. Its first derived-limit group vanishes for a Mittag–Leffler system,
        in particular for a system with surjective transition maps.
      hypotheses: A countable inverse system of abelian groups; the vanishing
        assertion assumes the Mittag–Leffler condition.
      reading_limits: Read the statement and proof on the primary live site in this
        adjudication. Only parts (2)–(3), the product-difference description and
        Mittag–Leffler vanishing, are imported; the deeper derived-functor
        prerequisites cited there are not reconstructed.
      version: Primary live tag 07KW as read on 2026-11-10; no repository-history
        inspection is claimed.
dependency_level: 0
---

## Statement
For a homotopy-commutative oriented motivic $E_1$-ring spectrum satisfying the projective bundle formula over a qcqs base, Annala–Iwasa Corollary 4.4.7 computes the bigraded cohomology of $\mathrm{Vect}_n$ as formal series over base cohomology in the universal Chern classes; Lemma 4.4.3 supplies their Whitney behavior, including pullback under addition of a trivial line.

For a countable inverse system of abelian groups, the derived limit is represented by the product-difference complex in degrees zero and one; its first derived-limit group vanishes for a Mittag–Leffler system. For a countable inverse system in a triangulated category with the required products, the derived limit fits into the product-difference triangle, and the associated Milnor exact sequence holds for derived Hom as in Stacks Project Lemma 15.88.5. These statements have the precise hypotheses in the source records.

## External input
The Annala–Iwasa computation and Whitney behavior, and the Stacks Project derived-limit statements, are imported from the cited sources with the stated version and reading limits. Their proofs are literature-derived; no local reconstruction is claimed.
