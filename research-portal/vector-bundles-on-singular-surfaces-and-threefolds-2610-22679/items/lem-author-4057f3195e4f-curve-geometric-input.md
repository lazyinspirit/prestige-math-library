---
id: lem-author-4057f3195e4f-curve-geometric-input
kind: lemma
title: Completion, divisors and degree on smooth curves
status: draft
domain: mathematics
external_input: true
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: The Stacks Project, Curves, Remark 33.43.9 and preceding observation
      url: https://stacks.math.columbia.edu/tag/0A22
      locator: Remark 33.43.9 and the observation immediately following it
      statement: A regular curve over a perfect field admits a smooth projective
        compactification with finite closed-point complement; an affine
        positive-dimensional scheme over a field is not proper.
      hypotheses: A regular integral separated finite-type curve over a perfect field;
        positive dimension and affineness for nonproperness.
      reading_limits: The cited remark and observation were read; their underlying
        proofs were not reconstructed.
    - title: The Stacks Project, The Weil divisor class associated to an invertible
        module
      url: https://stacks.math.columbia.edu/tag/02SE
      locator: Definition 31.28.4 and Lemma 31.28.7
      statement: For a locally Noetherian integral scheme with UFD local rings, the
        map from the Picard group to the Weil divisor class group is an
        isomorphism, and the line bundle of a prime effective Cartier divisor
        maps to its divisor class.
      hypotheses: Locally Noetherian integral scheme with unique-factorization-domain
        local rings.
      reading_limits: The cited definition and lemma, including the displayed argument
        for the prime-divisor class, were read; their underlying prerequisites
        were not reconstructed.
    - title: The Stacks Project, Curves and Degrees on curves
      url: https://stacks.math.columbia.edu/tag/0AYQ
      locator: Lemmas 33.44.7 and 33.44.9; Curves, Lemma 33.43.8 at
        https://stacks.math.columbia.edu/tag/0A22
      statement: Degree is additive on line bundles on a proper curve, and the degree
        of the line bundle associated to a closed-point Cartier divisor is its
        residue-field degree.
      hypotheses: A proper curve over a field; the closed point must define an
        effective Cartier divisor.
      reading_limits: The cited statements were read; the proofs of their
        prerequisites were not reconstructed.
    - title: The Stacks Project, Picard groups of curves
      url: https://stacks.math.columbia.edu/tag/03RN
      locator: Section 59.69, opening paragraph before Lemma 59.69.1
      statement: For a smooth projective curve over an algebraically closed field, the
        degree-zero Picard group is identified with the rational points of the
        Picard variety.
      hypotheses: Smooth projective curve over an algebraically closed field.
      reading_limits: The opening statement was read; the construction of the Picard
        variety was not reconstructed.
dependency_level: 0
---

## Statement
For a regular integral separated curve of finite type over a perfect field, there is a smooth projective integral curve containing it as a dense open subscheme with finite closed-point complement; if the original curve is affine, that complement is nonempty. On a smooth integral finite-type curve, the divisor class group, defined as finite integer sums of closed points modulo principal divisors of nonzero rational functions, identifies naturally with the Picard group by sending a closed point to its associated line bundle. Restriction to a nonempty open subset corresponds to deleting divisor coefficients outside that subset. On a smooth projective curve over an algebraically closed field, degree is an additive homomorphism on the Picard group, the class of a closed point has degree equal to its residue-field degree, and its kernel is the group of rational points of the degree-zero Picard variety.

## External input

The completion and nonproperness assertions are imported from the first reference. Its curve convention includes separatedness (Definitions 33.43.1 and 33.3.1); the completion assertion uses that convention explicitly. The subsequent divisor comparison retains its locally Noetherian integral scope. For the divisor comparison, smooth-curve local rings are fields or discrete valuation rings, hence UFDs; the second reference supplies the isomorphism. Its construction by orders of meromorphic sections is compatible with restriction because the same local rings and orders occur at points of the open subset. The third reference gives the degree formula, using that a closed point on a smooth curve is an effective Cartier divisor. The fourth gives the stated Picard-variety identification. These are external inputs; their proofs are not claimed to have been reconstructed here.
