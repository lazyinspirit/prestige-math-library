---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-cochran-davis-ray-strong-winding-injectivity.json
  precheck: pass
id: thm-cochran-davis-ray-strong-winding-injectivity
kind: theorem
title: "Cochran–Davis–Ray satellite injectivity"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-cdr-satellite-concordance-categories
  - def-satellite-induced-concordance-operator
  - lem-cdr-smooth-s4-complement-is-standard-ball
  - lem-cdr-weak-injectivity-and-auxiliary-pattern-reduction
  - lem-satellite-operator-preserves-concordance
  - thm-cdr-concordance-categories-form-abelian-groups
justified_by:
  []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Asaf Karagila, Set Theory (2017 lecture notes)"
      url: "https://karagila.org/files/set-theory-2017.pdf"
      locator: "Section 8.3, closing remarks, printed p.42: relativized constructibility and inner ZFC; used with a single real parameter, with the compact-code qualification in the proof."
    - title: "Tim D. Cochran, Christopher W. Davis, and Arunima Ray, “Injectivity of satellite operators in knot concordance”"
      url: "https://arxiv.org/pdf/1205.5058v3"
      locator: "Theorem 5.1 and proof, printed pp. 11–12"
    - title: "Tim D. Cochran, Bridget D. Franklin, Matthew Hedden, and Peter D. Horn, “Knot concordance and homology cobordism”"
      url: "https://arxiv.org/pdf/1102.5730"
      locator: "Theorem 2.1, localized homology cobordism hypothesis"

---

## Statement

Let P be a pattern of nonzero winding number n. Then P induces an injective function $C^{1/n}\to C^{1/n}$. If P has strong winding number ±1, then it induces injective functions $C_{\mathrm{ex}}\to C_{\mathrm{ex}}$ and $C_{\mathrm{top}}\to C_{\mathrm{top}}$. If, in addition, the smooth 4-sphere has a unique smooth structure up to diffeomorphism, then P induces an injective function $C_{\mathrm{sm}}\to C_{\mathrm{sm}}$. No sliceness hypothesis on P(U) is required in this theorem; the proof constructs an auxiliary pattern with ribbon closure.

## Statement references

[CDR, Theorem 5.1 and complete proof](https://arxiv.org/pdf/1205.5058v3)

## Facts & Assumptions

**Given:** A pattern P and two knots K,J with P(K) concordant to P(J) in the category under consideration.

[F1] Strong winding means normal generation by the axis meridian ([[def-satellite-induced-concordance-operator]]).

[F2] The four concordance categories have the ambient and coefficient conventions in their definition ([[def-cdr-satellite-concordance-categories]]).

[F3] Weak injectivity and the auxiliary connected-sum reduction are proved with their category hypotheses ([[lem-cdr-weak-injectivity-and-auxiliary-pattern-reduction]]).

[F4] The finite connected-sum/inverse instances for these actual knots and concordances are available without an ambient choice axiom by the compact-input construction in [F3], step 1.1. The general group theorem records these same operations with $\mathrm{AC}_\omega$ ([[thm-cdr-concordance-categories-form-abelian-groups]]); its stronger choice assumption is not a premise of this unqualified theorem.

[F5] The satellite assignment descends to the concordance classes after concordance preservation ([[lem-satellite-operator-preserves-concordance]]).

[F6] The ordinary smooth branch uses the special smooth S⁴-complement assertion ([[lem-cdr-smooth-s4-complement-is-standard-ball]]).

## Proof

1.1 Use the finite-input choice qualification in [F3]: encode the actual finite knots, pattern and witnessing concordance, including the finite smooth presentation and chain homotopies when localized coefficients are involved. Execute only the unconditional geometry in $L[r]$ and decode actual compact witnesses, finite group words and chain identities into $V$. Thus the finite uses of [F4] below do not apply an $\mathrm{AC}_\omega$ theorem without its premise. No countable collection of representatives is selected. In the conditional ordinary smooth direction, the actual contractible smooth ball and capped sphere are constructed and decoded before the supplied smooth sphere-uniqueness hypothesis is applied in $V$. No transfer of that conditional hypothesis to $L[r]$ is made. [F2, F3, F4, given, construct]

2.1 Suppose P(K)=P(J) as concordance classes. By [F5] these values are defined in the chosen category, and the group law gives −[P(K)]#[P(J)]=0. [F2, F4, F5, step 1.1, given, algebra]

3.1 Apply the auxiliary-pattern reduction [F3] to obtain R with R(−K#J)=U, closure R(U)=−P(K)#P(K) ribbon, and winding w(R)=w(P). [F3, step 2.1]

4.1 If P has strong winding ±1, [F3] preserves strong winding for R; in the localized branch R has the same nonzero winding. [F1, F3, step 3.1]

5.1 The weak-injectivity part of [F3] applies to R and yields $-K\#J=U$, hence $K=J$. In ordinary smooth concordance the last step uses [F6] and assumes uniqueness of the smooth structure on S⁴. [F2, F3, F4, F6, step 4.1, algebra] ∎

