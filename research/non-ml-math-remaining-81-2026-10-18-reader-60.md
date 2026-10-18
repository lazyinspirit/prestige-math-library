# Step 3a reader report — batch 60

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: reader (`reader-60`)  
Scope: batch `60`

## Opened inventory

The recomputed autopilot status at review start was `running`, with batch 60 in `3a-read` and no worker currently in flight. I read the current batch manifest, proof contracts, coverage record, cross-batch dependency record, and authoring notes as evidence, not as verdicts. The notes contain older counts of 26 items in later sections; the current manifest and item files contain 28 items: 23 A-page items and 5 examples.

Assigned pages opened in full:

- A page: `library/quantum-algebra-and-representation-theory/brauer-bmw-and-partition-diagram-algebras.md` (`brauer-bmw-and-partition-diagram-algebras`).
- B page: `library/quantum-algebra-and-representation-theory/brauer-bmw-and-partition-diagram-algebras-examples.md` (`brauer-bmw-and-partition-diagram-algebras-examples`).

All assigned items were opened in dependency order:

- Core definitions and elementary suppliers: `def-brauer-and-partition-diagram-categories`, `def-polynomial-invariants-for-a-rational-linear-action`, `lem-gram-map-fibers-and-rank-strata`, `lem-multilinear-minor-pfaffian-ideal-components`, `lem-even-row-tableau-generating-identity`, `lem-generic-pfaffian-straightening`, `lem-brauer-and-partition-composition-is-associative`, `lem-brauer-and-partition-diagram-basis-ranks`, `def-bmw-algebra-with-fixed-kauffman-skein-convention`, `lem-generic-symmetric-minor-straightening`, and `lem-framed-kauffman-link-evaluation`.
- Normality, presentations, and rank-coordinate suppliers: `lem-generic-symmetric-determinantal-ring-normal`, `lem-generic-pfaffian-ring-normal`, `thm-brauer-generator-presentation`, `lem-bmw-cubic-relation-and-hecke-quotient`, `lem-symmetric-and-alternating-rank-coordinate-rings`, `thm-partition-diagram-orbit-basis-centralizer`, and `thm-bmw-kauffman-tangle-basis`.
- Geometry and invariant-theory consumers: `lem-gram-map-torsor-descent-and-codimension-extension`, `lem-brauer-contraction-functor-and-bending`, `thm-orthogonal-and-symplectic-polynomial-contraction-invariants`, `thm-orthogonal-and-symplectic-multilinear-fft-sft`, and `thm-brauer-orthogonal-symplectic-tensor-centralizers`.
- Examples: `ex-brauer-and-partition-loop-composition`, `ex-orthogonal-brauer-centralizer-not-faithful-in-rank-one`, `ex-symplectic-brauer-relation-in-dimension-two`, `ex-partition-diagram-kernel-below-stable-range`, and `ex-bmw-cubic-and-hecke-quotient-separate`.

I opened the 35 direct external item suppliers named by these items: `cor-cramers-rule-over-a-field`, `def-axiom-of-choice`, `thm-serre-normality-criterion`, `lem-depth-localisation-inequality`, `lem-depth-quotient-by-regular-element`, `thm-hilbert-basis-theorem`, `thm-noetherian-ring-quotients-and-localisations`, `thm-krull-principal-ideal-theorem`, `thm-dimension-formula-for-affine-domains`, `cor-localisations-of-regular-local-rings-are-regular`, `lem-embedding-dimension-is-minimal-maximal-ideal-generator-number`, `thm-dimension-at-most-embedding-dimension`, `thm-integral-closure-finite-finite-type-domain-over-field`, `lem-polynomial-algebras-over-fields-are-integrally-closed`, `cor-submodules-of-finite-free-pid-modules-are-free`, `thm-radical-localisation-and-regular-quotient-properties-of-depth`, `lem-affine-domain-chain-dimension-formula-step`, `thm-quotient-and-lifting-regularity-across-a-regular-element`, `thm-integrality-commutes-with-localisation`, `thm-valuation-ring-is-integrally-closed`, `lem-zmt-polynomial-rings-over-normal-domains-are-normal`, `thm-proper-ideal-contained-in-maximal-ideal`, `cor-weak-nullstellensatz-algebraically-closed-coordinate-form`, `thm-normality-is-local-for-domains`, `thm-fundamental-theorem-of-arithmetic`, `lem-gauss-lemma-over-a-ufd`, `thm-polynomial-ring-over-a-field-is-a-ufd`, `thm-right-exactness-of-tensor-products`, `lem-normal-noetherian-domain-intersection-of-height-one-localizations`, `thm-classical-affine-nullstellensatz-correspondence`, `def-flat-and-faithfully-flat-modules-and-ring-maps`, `def-standard-etale-algebra`, `lem-etale-stable-base-change-composition`, `thm-faithfully-flat-descent-of-flatness`, and `cor-strong-nullstellensatz-two-inclusions`. For these published suppliers I checked the exact statements, hypotheses, and fact clauses used by batch 60; I did not re-audit every published proof.

The two page-level reading requirements were also opened: `algebraic-representation-and-tensor-symmetry-map` and `abelian-varieties-base-change-and-arithmetic-models`. The former is contextual: its associative-algebra module dictionary does not supply the rational algebraic-group coaction, which batch 60 defines locally. The latter contains the height-one-localization intersection result used as a direct item supplier; its other page contents are not logical premises for this batch.

## Independent review and repairs

1. In `lem-generic-symmetric-minor-straightening`, the opening hypothesis said `0≤m<t` while the statement and proof also covered `m=t`, where the minor ideal is zero. I changed the domain to `0≤m≤t` and stated the endpoint as `m=t`. The basis and Gram-embedding proof for this endpoint follows from the full-rank case in Steps 3.1–5.1 and the empty minor family. I checked the direct consumers `lem-generic-symmetric-determinantal-ring-normal` and `lem-symmetric-and-alternating-rank-coordinate-rings`, plus their current in-batch downstream consumers; their use of the `m≤t` interface remains valid.

2. In `lem-generic-symmetric-determinantal-ring-normal`, I made the final endpoint proof clause say `m=t`, matching its declared range `0≤m≤t`.

3. In `lem-symmetric-and-alternating-rank-coordinate-rings`, Step 2.1 added that the quotient rings identify the coordinate rings of the reduced affine varieties “exactly, rather than only up to radical.” That extra conclusion requires the strong Nullstellensatz, which was not a dependency of this item and was not needed for its stated result. I removed the extra sentence. Step 1.1 proves the rank-locus zero-set claims, while the normality suppliers prove the quotients are domains and hence their defining ideals are prime.

4. In `lem-gram-map-torsor-descent-and-codimension-extension`, Step 3.1 invoked faithfully-flat descent from the pivot charts without spelling out how the finite chart family gives a faithfully flat cover of each affine open. I added the product of the chart algebras, noted its positive finite free rank on each pivot open, and proved faithfulness using that the pivot opens cover. The step now applies the cited faithfully-flat descent result to the affine torsor map and verifies faithfulness after descent.

The four proof-contract entries were updated: the two exact quotes of the corrected symmetric-straightening statement, the changed derivation claims for rank-coordinate Step 2.1, Gram-torsor Step 3.1, and symmetric-normality Step 6.1, and the endpoint boundary evidence. No `verification.judge` record was present on the four changed items; no stamp or judgment was added.

## Source checks

I checked the relevant primary-source statements and proof passages against the current local arguments:

- [Lehrer and Zhang, *The Brauer Category and Invariant Theory*](https://arxiv.org/pdf/1207.5889), Theorem 2.6 and its regular-expression reductions, especially Lemma 2.13 and the completion argument, PDF pp. 6–12.
- [Goodman and Hauschild, *Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus*](https://arxiv.org/pdf/math/0411155), BMW parameter convention in Definition 3.1, PDF p. 15, and the ordinary tangle basis/isomorphism arguments in §5, including Theorem 5.41, PDF pp. 34–50. The sign map used here is `z_GH = -z`.
- [Kauffman, *An Invariant of Regular Isotopy*](https://homepages.math.uic.edu/~kauffman/IRH.pdf), the recursive construction and basepoint/Reidemeister arguments in §VI, printed pp. 452–465, and the Dubrovnik conversion beginning in §VII at p. 466.
- [Lakshmibai, Raghavan, Sankaran, and Shukla, *Standard Monomial Bases, Moduli Spaces of Vector Bundles & Invariant Theory*](https://www.imsc.res.in/~sankaran/Papers/0604321.pdf), Proposition 1.7.3 and Theorem 2.0.3, PDF pp. 9–14, and the normality discussion ending in Proposition 6.0.6, PDF pp. 25–26.
- [Linshaw and Song, *Standard Monomials and Invariant Theory of Arc Spaces II: Symplectic Group*](https://jag.math.tsinghua.edu.cn/1487/JAG1487.pdf), the Pfaffian rank-variety and ordinary standard-monomial statements in §1, PDF pp. 1–2, and Theorem 1.2’s standard-monomial basis statement.
- [Goodman, *Multiplicity-Free Spaces and Schur–Weyl–Howe Duality*](https://sites.math.rutgers.edu/~goodman/pub/webnuslect.pdf), Theorems 6.3–6.4, PDF pp. 18–19, and Theorem 7.4, PDF pp. 21–22.
- [Halverson and Ram, *Partition Algebras*](https://arxiv.org/pdf/math/0401314), Theorem 3.6(a) and the orbit-pattern statement, printed/PDF pp. 19–20.
- [Schreier-Aigner, *Growth Diagram Proofs for the Littlewood Identities*](https://arxiv.org/pdf/2404.04014), Theorem 3.1’s even-part projection identity, PDF p. 17.

The local proofs were reviewed independently. The Abeasis–Del Fra Pfaffian reference is marked bibliographic only in its item and is not used as a proof premise; I did not retrieve that article.

## Page verdicts and remaining findings

- `brauer-bmw-and-partition-diagram-algebras`: **Pass after the listed repairs.** Its scope summary matches the reviewed items: full orthogonal/symplectic groups in algebraically closed characteristic zero, the stated stable ranges, the all-field partition result, and the separate BMW basis. It makes no reverse-commutant claim.
- `brauer-bmw-and-partition-diagram-algebras-examples`: **Pass.** The five examples are consistent with the A-page conventions and their direct supplier statements; the page accurately says they do not supply A-page theorems.

No confirmed or suspected defect remains outside this batch’s authorized edit scope. No proposed withdrawal is needed. No blocker remains. The published dependency interfaces were checked at the exact clauses used; this review did not audit unrelated portions of those published items or the other items on the two page-level requirement pages.

## Checks after repair

- `reflow.mts`: all four changed item paths reported unchanged.
- `precheck.mts`: each of the four changed items passed.
- `proof-layout.mjs` (one batched command over the four changed paths): 4 items, 22 steps, 0 defects.
- `proof-contract.mjs --strict` on batch 60: 25/25 items checked, 0 errors, 1 heuristic `shotgun-bracket` warning on `lem-generic-symmetric-determinantal-ring-normal` Step 1.2. The declared facts are used in distinct proof steps; the other steps cited there use prior steps or constructions. No mathematical failure was reported.
