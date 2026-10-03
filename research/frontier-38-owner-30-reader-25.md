# Reader 25 — batch 25, frontier-38-owner-30

## Scope and disposition

Independently reviewed the current mathematics of A887/B888. Both pages and all fifteen assigned items were opened, along with fourteen immediate suppliers. The item reading order respected dependencies; independent branches were read before their consumers. The current engine status reports this run running at Step 5a, with Steps 1–4 complete. Git's latest commit is `badc8bdf3`; no historical RESUME claim was used to establish live status.

One ill-formed general-base character definition was repaired. The batch proof contracts also needed the corrections below. No confirmed or suspected uneditable mathematical defect remains from this review. There is no proposed withdrawal or blocker. These are reader conclusions, not judgments or certifications.

## Opened inventory

Pages, including their complete frontmatter and summary prose:

- `library/algebraic-geometry/groups-of-multiplicative-type-and-arithmetic-tori.md` — assigned A page.
- `library/algebraic-geometry/groups-of-multiplicative-type-and-arithmetic-tori-examples.md` — assigned B page, read only.

Assigned items, all at `items/<id>.md`, read in this dependency-compatible order:

1. `def-multiplicative-type-coordinate-hopf-algebra`
2. `lem-multiplicative-type-local-hopf-dictionary`
3. `def-diagonalizable-group-and-character-module`
4. `lem-diagonalizable-character-antiequivalence`
5. `def-group-of-multiplicative-type-and-torus`
6. `lem-multiplicative-type-affineness-by-field-descent`
7. `lem-finite-subcoalgebras-in-multiplicative-coordinate-algebras`
8. `lem-multiplicative-type-groups-split-separably`
9. `lem-finite-galois-descent-for-multiplicative-hopf-algebras`
10. `def-continuous-galois-character-module`
11. `thm-multiplicative-type-groups-and-galois-character-modules`
12. `cor-tori-correspond-to-torsion-free-character-lattices`
13. `ex-split-torus-character-lattice`
14. `ex-nonsplit-torus-galois-action`
15. `cex-mu-p-is-not-a-smooth-torus`

Suppliers, each opened before its assigned consumers, including its claim and argument where present:

- `def-group-scheme-over-a-field` — current-run draft outside this batch, read only.
- `thm-affine-scheme-ring-anti-equivalence`
- `thm-gluing-affine-schemes`
- `def-axiom-of-choice`
- `lem-fpqc-cover-submersive`
- `thm-affine-fibre-product-tensor-ring`
- `thm-global-sections-affine-scheme`
- `thm-morphisms-into-affine-scheme-global-sections`
- `thm-finite-galois-extension-characterizations`
- `lem-galois-fixed-points-recover-a-finite-dimensional-scalar-extension`
- `thm-fundamental-theorem-of-finite-galois-theory`
- `thm-separable-closures-exist-and-are-isomorphic-over-the-base`
- `def-smooth-morphism-schemes`
- `def-embedding-dimension-and-regular-local-ring`

Also opened `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/reader.md`, the task manifest, current batch notes, and every entry of `research/frontier-38-owner-30-batch-25.proof-contracts.json`. Long outputs were followed with bounded extraction of the omitted relevant clauses. Earlier author conclusions and verification records were not used as mathematical verdicts.

## Mathematical review

The Hopf dictionary reverses the group diagrams through the affine anti-equivalence, including the tensor-product universal property. The antipode makes a group-like element invertible, so characters correspond to these elements without a reducedness assumption. The group-algebra construction commutes with localization and glues over a general base. Over a field, coefficient comparison forces a group-like element to be a single monomial. Finite supports establish both directions of the finite-generation criterion, and tensor products give the stated product decomposition. Arbitrary abelian groups in this split dictionary cause no finite-generation inference until that hypothesis is imposed.

The affineness proof establishes separatedness from the closed rational identity and the difference morphism. A finite affine cover then gives the global-section equalizer and its compatibility with scalar extension. The algebra-generation argument descends finite generation through a faithful field extension. Saturation of the inverse's affine-open preimages follows by comparing residue-field points in the fibre product; the opened fpqc supplier licenses descent of these opens. The tensor equalizer, using a linear retraction of the extension field, descends the ring maps. Their agreement and inverse identities can be checked after the surjective faithful extension. All uses of arbitrary Choice here are declared.

The finite-coalgebra construction follows coassociativity coefficient by coefficient. Matrix coefficients span a finite subcoalgebra containing the chosen right coideal. In a group algebra, the coefficient extraction shows finite subcoalgebras are monomial spans, whose finite duals are products of the field. The separable-splitting lemma correctly transfers minimal-polynomial degree through field extension, obtains squarefree polynomials from the split product algebra, and uses interpolation to split the finite duals over the separable closure. Distinct roots make its interpolation denominators nonzero. Spanning and independence of group-likes give the group algebra, and finite generation allows all coefficients to descend to a finite normal separable extension. Faithful scalar extension proves the descended Hopf map is an isomorphism.

The Galois-descent lemma uses finite orbit spans to extend the opened finite-dimensional supplier to arbitrary dimension. Fixed tensor squares descend the comultiplication, and equivariance descends the counit and antipode. Finitely many algebra generators suffice to descend finite generation. The argument never divides by the group order, including in positive characteristic.

For classification, intersecting stabilizers of finitely many group generators gives the open normal action kernel. Restriction onto a finite Galois group and the fixed-field assertion are justified by the explicitly opened closure-isomorphism and finite-Galois suppliers, with the extension argument written in F6. The invariant Hopf algebra has the specified semilinear monomial action. Evaluation is an equivariant Hopf isomorphism and taking invariants recovers the group; equivariant maps descend over a common splitting field. The direction of the Hom bijection and naturality agree with the contravariant claim. No smoothness or perfection is silently used.

The corollary supplies the finite-presentation and integer-diagonalization argument. Its torus implication uses splitting over the separable closure; its converse compares two splittings over a residue field of the nonzero finite-dimensional algebra `L⊗_k K`. This comparison preserves the character module and proves it free of the required rank. Torsion excludes a torus even for smooth finite groups.

The split example's matrix has `s` rows and `r` columns, as claimed, including rank zero. The norm-one example's group law, identity and inverse preserve the equation; the displayed inverse substitutions require exactly the stated nonzero `2` and `2√d`. The Galois action is inversion, hence the sign action on the character group, and cannot be conjugated to the trivial rank-one action. The real specialization has precisely the unit-complex-number product. Finally, `μ_p=D(Z/p)` has torsion character group, while `k[u]/(u^p)` has one prime, dimension zero and cotangent dimension one. The opened smoothness and regular-local-ring definitions justify failure of smoothness already over the ground field. Field-valued points do not replace this scheme-theoretic computation.

## Sources consulted

Full relevant passages were retrieved from these primary sources:

- [Milne, Algebraic Groups, corrected 2022 edition](https://www.jmilne.org/math/Books/iAG2022.pdf), Theorem 12.18 and its proof, Corollary 12.19, printed pp. 237–238; §12g and Theorem 12.23 with its proof, printed pp. 239–240. These confirm separable splitting and the finite-generated-module anti-equivalence, including torsion. The local proofs were checked independently rather than replaced by Milne's descent citations.
- [SGA 3, Exposé IX](https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp9-8nov09.pdf), Definition 1.1, PDF p. 1: multiplicative type is defined by fpqc-local diagonalizability.
- [SGA 3, Exposé X](https://webusers.imj-prg.fr/~patrick.polo/SGA3/Expo10-8nov09.pdf), §1 through Proposition 1.4 and its complete proof, PDF pp. 1–3: finite-type groups over a field split over a finite separable extension and correspond to finitely generated continuous Galois modules.
- [SGA 3, Exposé VIII](https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp8-8nov09.pdf), §1, especially Corollary 1.3 and its complete proof, PDF pp. 3–4: a character over `S` is an `S`-group morphism to `G_{m,S}`. This is the precise base convention resolving the definition repair.

## Edits and evidence

Only one item carrier and the assigned batch contract file were edited; neither page was changed.

- `items/def-diagonalizable-group-and-character-module.md`, Definition, character-group sentence: the paragraph had introduced arbitrary `S` but then used `Hom_{k-groups}(G,G_m)` for its character group. Replaced this ill-formed domain with `Hom_{S-groups}(G,G_{m,S})`, and explicitly recorded its specialization for `S=Spec k`. Evidence: the group-morphism domain, the preceding general-base construction, and SGA 3 VIII Corollary 1.3 above. The associated definition contract's general-base boundary was updated. There was no `verification.judge` record to remove.
- Batch contracts, `def-continuous-galois-character-module.boundaries`, `iff-forward` and `iff-reverse`: replaced the ambiguous identity-preimage account by the orbit-map stabilizer preimage and the open coset neighborhoods on which the action is constant. This is the elementary continuity argument for the Definition's discrete module topology; the equivalence itself does not require finite generation.
- Batch contracts, `cor-tori-correspond-to-torsion-free-character-lattices.boundaries`, the two `iff` entries: corrected the reversed direction labels. The opening clause of step 2.1 proves torsion-free-to-torus; its converse clause proves torus-to-torsion-free. The item's proof was already correct.
- Batch contracts, `lem-multiplicative-type-groups-split-separably.boundaries.zero`: replaced the false claim that no denominator occurs with the nonvanishing of differences of distinct roots in interpolation at step 1.1. The proof's squarefree hypothesis already supplies this.
- Batch contract citation excerpts: the splitting lemma's F4 now quotes the finite-Galois characterization rather than only its fixed-field condition; the classification theorem's F5 now includes the subgroup/intermediate-field bijection rather than only degree formulas; the corollary's F3 now quotes the torus definition rather than the neighboring multiplicative-type definition. Each replacement is exact text from the opened supplier and retains the original source ID, section and use mapping.

The definition's direct assigned consumers are the split antiequivalence, multiplicative-type definition, and affineness lemma. Each was checked: their field and general-base uses agree with the corrected definition, and their mathematical interfaces need no change. This field specialization preserves every downstream computation reviewed above.

## Checks

- Reflow on the changed definition: exit 0, unchanged.
- Precheck on the changed definition: exit 0, `0 checked, 0 failing`; it contains no proof section, so this is not a checked-proof assertion.
- Rendercheck on the changed definition: exit 0, one file parsed successfully with valid math and frontmatter.
- Strict batch proof-contract check: final exit 0, `0 error(s), 0 warning(s), 15/15 item(s) checked`. An intermediate run rejected two continuity-boundary entries for lacking a named section anchor; both were anchored to the Definition before the successful check.
- After the final item edit and formatter, the required single explicit-path command `node tools/proof-layout.mjs items/def-diagonalizable-group-and-character-module.md` exited 0: one item, zero steps, zero defects. No later item edit occurred.

No judgments, audit stamps, publication changes or run transitions were made.

## Page verdicts and limitations

- A887, `groups-of-multiplicative-type-and-arithmetic-tori`: mathematically coherent after the repaired character-domain sentence and contract corrections. Its summary accurately describes the authored affineness, separable-splitting, descent and classification arguments and declares Choice. No remaining defect found.
- B888, `groups-of-multiplicative-type-and-arithmetic-tori-examples`: the three witnesses/computations and page summary agree with the A-page results and the opened regularity definitions. No remaining defect found; page prose was not edited.

The findings JSON has an empty array. Coverage includes the two assigned pages, all fifteen assigned item bodies and contracts, and fourteen opened immediate suppliers. This was not an exhaustive independent audit of every indirect prerequisite in the repository graph, and no such coverage is claimed. External source reading is limited to the passages identified above; it does not assert a complete audit of all bibliography entries. Checks are local mechanical evidence, not mathematical certification.
