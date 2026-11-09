---
id: thm-adjudicate-9c15b20e1f5d-oriented-chern-nilpotence-input
kind: theorem
title: External nilpotence of oriented projective-relation Chern coefficients
status: draft
domain: mathematics
deps: []
dependency_roles: {}
external_input: true
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: Annala–Iwasa, Motivic spectra and universality of K-theory, author PDF
        dated 14 April 2025 (third version)
      url: https://ryomei.com/papers/MotSp.pdf
      locator: Section 2.1.1, p. 14; Lemma 3.1.8(i), p. 22; Definition 4.4.1 and Lemma
        4.4.3(i), complete lemma proof, pp. 30–31
      source_sha256: ad36a2ed6a7e8b5815c94b19100b2431f2533fb538c57843bdbeef3d1b400261
      statement: Under the stated oriented homotopy-commutative ring-spectrum and
        projective-bundle hypotheses, each positive projective-relation Chern
        coefficient of a constant positive-rank bundle on Y in Sm_S is
        nilpotent.
      hypotheses: S is a qcqs derived scheme; Y is smooth and qcqs over S. The
        spectrum is homotopy-commutative, linearly oriented and satisfies the
        source class-power projective bundle formula. Definition 4.4.1 treats
        positive constant rank. No A1-invariance or smoothness over a field is
        required.
      reading_limits: Inspected the dated cached PDF (hash recorded above) and the
        same dated online source. Read the title page, section 0.4, section 2.1,
        orientation conventions, Lemma 3.1.8 and proof, section 3.2, the section
        4 opening correction footnote, Definition 4.4.1, and all of Lemma 4.4.3
        with proof. The cited geometric splitting trick and upstream spectrum
        foundations are imported, not reconstructed. Historical AI22 is not
        substituted for this corrected version.
dependency_level: 0
---

## Statement
Let $S$ be a quasi-compact quasi-separated derived scheme, and let $\mathcal E$ be a homotopy-commutative linearly oriented motivic ring spectrum over $S$ satisfying the source projective bundle formula with powers of the actual tautological first Chern class. Let $Y$ be a smooth qcqs derived $S$-scheme and let $V$ be a vector bundle of constant rank $r\geq1$ on $Y$. For every $1\leq i\leq r$, the coefficient $c_i^{\mathcal E}(V)$ defined by the quotient-projective relation of Definition 4.4.1 is nilpotent in $\mathcal E^*(Y)$: some positive integer power is zero. No $\mathbb A^1$-invariance or absolute smoothness over a field is assumed.

## External input
Import precisely Annala–Iwasa Lemma 4.4.3(i), using Definition 4.4.1, from the author PDF dated 14 April 2025, printed pp. 30–31. Section 2.1.1 fixes the smooth qcqs relative site; the base itself may be singular. The positive-rank statement and its nilpotence are established source input, not a locally reconstructed splitting argument. The source supplies existence of an exponent for each coefficient, rather than a dimension bound. The rank-zero, above-rank and finite-clopen extensions used by the consumer are separate explicit conventions and local deductions. Application to the actual EM model, including verification of orientation, PBF, products and coefficient comparison with base $S=X$, is made in that consumer.
