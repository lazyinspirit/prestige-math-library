---
id: thm-cdr-concordance-categories-form-abelian-groups
kind: theorem
title: "The CDR concordance categories are abelian groups"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-cdr-satellite-concordance-categories
  - def-countable-choice
  - lem-knot-concordance-compatible-with-connected-sum
  - lem-general-knot-reverse-mirror-sum-is-ribbon
  - thm-oriented-knot-connected-sum-is-a-commutative-monoid
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
    - title: "Charles Livingston, “A Survey of Classical Knot Concordance”"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.1, Definition 2.1 and Theorem 2.2"
    - title: "Arunima Ray, “Slice Knots and Knot Concordance”"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "Definition 3.5"
    - title: "Tim D. Cochran, Christopher W. Davis, and Arunima Ray, Injectivity of satellite operators in knot concordance"
      url: "https://arxiv.org/pdf/1205.5058v3"
      locator: "Section 1, printed pp. 1–2: the four categories, their connected-sum groups, unknot identity and reverse-mirror inverse. TOP/exotic group construction imported externally."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume AC_ω. Under connected sum, each of C_sm, C_top, C_ex and C^{1/n} is an abelian group. The identity is the class of the unknot, and the inverse of [K] is the class of the reverse mirror of K. Each category retains the ambient and coefficient conditions in its definition.

## Statement references

[Livingston, §2.1 and Theorem 2.2](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf)

## Facts & Assumptions

**Given:** The four concordance sets with their specified concordance relations.

[F1] The ambient and coefficient conditions defining the four concordance relations ([[def-cdr-satellite-concordance-categories]]).

[F2] The mirror-reverse connected sum K#−K bounds a ribbon disk in the standard 4-ball ([[lem-general-knot-reverse-mirror-sum-is-ribbon]]).

[F3] Connected sum is associative and commutative on oriented knot types, with the unknot identity ([[thm-oriented-knot-connected-sum-is-a-commutative-monoid]]).

[F4] Under AC_ω, connected sum respects smooth concordance in the standard product (and locally flat topological concordance). This does not assert compatibility in arbitrary localized homology products. [[lem-knot-concordance-compatible-with-connected-sum]]

[A1] AC_ω supplies the countable choice used by the cited ribbon and concordance constructions ([[def-countable-choice]]).

[F5] **External TOP/exotic input.** In the category conventions of [F1], connected sum descends to an abelian group on $\mathcal C_{\mathrm{top}}$ and $\mathcal C_{\mathrm{ex}}$, with unknot identity and reverse-mirror inverse. This is the group assertion in Cochran–Davis–Ray Section1, printed1–2. Its underlying TOP ambient gluing and relative-collar conclusion are imported under the run-specific external-source boundary; no new local proof of those unresolved ambient identifications is claimed. The cited CDR definitions and group assertion on printed1–2 were read directly.

[F6] **Compact finite-input convention.** The classical external results are initially used in ordinary ZFC, not assumed choice-free from their citations. For this one application take finitely many charts covering the given compact manifolds and finitely many pair charts covering each given compact disk or annulus, shrinking to closed inner charts inside open outer charts. Such finite subcovers exist by compactness; selecting this finite list uses no axiom of choice. Include the actual boundary/product collars and all supplied homeomorphisms in the list. Encode chart domains and overlaps by their rational balls, continuous maps and their inverses by dense rational data with moduli on the closed inner charts, and smooth maps by all finite-order derivative and Taylor-remainder data. The modulus at each integer scale is the least integer satisfying its uniform-continuity bound; restrictions to rational compact boxes use the least box index. These are uniquely defined choices from subsets of $\mathbb N$, not a countable family of freely selected charts. Include positive open-image and overlap margins, inverse identities, finite cover/Lebesgue bounds, and the pair-section identities with positive separation from the compact outside-patch remainder. On the standard disk/annulus parameters the latter certify the actual plane section, not merely a continuous embedding. One real $r$ codes these finitely many maps and their canonical countable data. The external relative-constructibility input is that $L[r]$ is an inner model of ZFC containing $r$ (Karagila, §8.3, p.42); no ambient choice hypothesis is required. All compact maps are decoded using these same moduli, so the inverse identities, covers, pair sections and collar equalities are checked on dense rational sets with their displayed buffers and remain valid in the ambient universe $V$. An internally produced compact witness is exported with the same certificates, and hence is an actual ambient compact witness. This uses the peer-checked compact annulus coding pattern of the standard connected-sum compatibility supplier only at its geometric scope; it does not assert that arbitrary homology or fundamental-group hypotheses are absolute.

## Proof

1.1 Specialize the TOP/exotic external assertion [F5] at each finite list of knot representatives and witnessing annuli actually used. For TOP these lie in the standard product; for exotic concordance the supplied boundary-marked homeomorphism to that product is part of the input code. The finite chart and pair-chart extraction in [F6] uses compactness, not a choice of an atlas for a countable family. Inside $L[r]$ use the ordinary CDR group operation, retain the actual output annulus and marked product homeomorphism, and export their compact forward/inverse and collar certificates. This proves the required finite compatibility and transitivity instances in $V$. Since each instance starts with its own given finite data, no simultaneous choice of representatives or witnesses for all classes is made. The quotient group operations and laws follow by universal quantification over these instances; the original $\mathrm{AC}_\omega$ hypothesis is therefore respected, rather than inferred from the unqualified source assertion. The localized category is handled directly by the subsequent homology calculations, with no TOP normal theorem needed. [F1, F5, F6, given, construct]

1.2 Let $D\subset B^4$ be the smooth ribbon disk for $K\#K^\dagger$ supplied by [F2]. By local smooth coordinates and straightening of the embedded disk, choose an ambiently standard interior 4-ball $B$ such that $B\cap D$ is a standard 2-disk. An ambient isotopy supported in the interior carries $B$ to a concentric standard ball, so its complement in $B^4$ is diffeomorphic to $S^3\times I$. Removing $\operatorname{int}B$ from $B^4$ and the interior of $B\cap D$ from $D$ gives a smooth annulus. The outer and inner boundary collars give product collars for it. Order the ends with $K\#K^\dagger$ at the lower end and the inner standard unknot at the upper end, and orient the annulus so its boundary is $-(K\#K^\dagger)$ at the lower end and $U$ at the upper end. It is therefore an admissible inverse concordance in the smooth category, and the same product annulus satisfies the TOP, exotic and localized ambient conditions. [A1, F1, F2, given, construct]

2.1 The supplied connected-sum theorem gives associativity, commutativity and the unknot identity at the level of oriented knot types. The smooth conclusion of [F4] gives concordance compatibility in the standard smooth product; the TOP/exotic compatibility is the external input [F5], and the localized ambient verification is given by the subsequent homology calculations. The knot-type isotopies themselves are admissible annuli in every category. [F1, F3, F4, F5, step 1.1, given, algebra]

2.2 The external input [F5] supplies the TOP and exotic ambient gluing/compatibility assertions at exactly the definitions in [F1]. For the localized smooth category, transitivity is stacking along the marked $S^3$: Mayer–Vietoris and the two boundary homology isomorphisms give another $R_n$-homology $S^3\times I$. Reflection gives symmetry and a product gives reflexivity, all with their smooth annulus collars. [F1, F5, step 1.1, given, construct, algebra]

3.1 For localized connected sum choose a smooth product neighborhood $D^3\times I$ of a proper spanning arc inside each witnessing annulus, with the annulus strip in its standard local position, and remove its interior. If $Q$ is the remaining ambient piece, excision gives $H_j(W,Q;R_n)=R_n$ only for $j=3$. The map $H_3(W;R_n)\to H_3(W,Q;R_n)$ is an isomorphism: the boundary fundamental class meets the spanning arc once. The pair sequence therefore makes $Q$ an $R_n$-homology ball. Glue the two such complements on $S^2\times I$, joining the annulus strips. Mayer–Vietoris gives $R_n$ in degrees0 and3 and zero in other positive degrees; the endpoint connected-sum spheres give the degree3 generator, so each end inclusion is a homology isomorphism. The resulting smooth annulus witnesses connected-sum compatibility in the original localized category. This calculation uses the product strip neighborhood along an arc in the smooth annulus; it does not apply the standard-product conclusion of [F4] to a homology product. These calculations use no homeomorphism-to-product assertion. [F1, F4, step 2.2, construct, algebra]

4.1 Thus connected sum is well defined in every category: the retained standard smooth construction handles $\mathcal C_{\mathrm{sm}}$, [F5] handles TOP/exotic, and steps 2.2–3.1 handle the localized case. The oriented knot connected-sum monoid [F3] descends to each quotient, giving associativity, commutativity and the unknot identity. The ribbon inverse in [F2], admissible in all four ambients, supplies the stated reverse-mirror inverse. All ambient and coefficient conditions are those of [F1]. [A1, F1, F2, F3, F5, step 2.1, step 1.2, step 2.2, step 3.1, algebra] ∎

