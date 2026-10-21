# Step 3a reader report — batch 65

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Reviewed: 2026-10-21  
Role: reader

## Opened inventory

### Assigned pages

- `library/knot-theory/twisted-alexander-polynomials-and-reidemeister-torsion.md` — A page; pass. Title, required pages, and all 11 item IDs agree with the batch manifest. The body is empty and `page_layout: compact-v1` is preserved.
- `library/knot-theory/twisted-alexander-polynomials-and-reidemeister-torsion-examples.md` — B page; pass. Title, companion requirement, and both example IDs agree with the manifest. The body is empty and `page_layout: compact-v1` is preserved.

### Assigned items

All 13 manifest items were opened and reviewed. Suppliers were read before the claims that use them.

1. `items/def-knot-twisted-chain-complex-and-reidemeister-torsion.md`
2. `items/def-knot-wada-quotient-for-deficiency-one-presentation.md`
3. `items/lem-twisted-torsion-cell-basis-change-ambiguity.md`
4. `items/lem-twisted-acyclicity-from-torsion-module.md`
5. `items/lem-twisted-fox-jacobian-is-cellular-boundary.md`
6. `items/lem-knot-twisted-exterior-acyclicity-from-torsion-module.md`
7. `items/thm-wada-deleted-minor-equals-twisted-reidemeister-torsion.md`
8. `items/alg-twisted-burau-determinant-for-colored-braid-closure.md`
9. `items/thm-twisted-burau-axis-torsion-product.md`
10. `items/thm-knot-wada-quotient-equals-reidemeister-torsion.md`
11. `items/thm-twisted-burau-determinant-formula-under-extension-hypotheses.md`
12. `items/cex-knot-kt-10-boundary-case.md`
13. `items/ex-knot-kt-10-worked-cases.md`

### Direct item dependencies reviewed

I opened the relevant definition or statement clauses of:

- `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`
- `def-maximal-abelian-cover-alexander-module`, `lem-maximal-abelian-cover-link-exterior-retraction`, `thm-abelian-cover-chain-model-computes-alexander-module`
- `def-group-ring`, `thm-group-ring-is-a-unital-algebra-with-basis-g`, `def-field-of-fractions`, `thm-field-of-fractions-is-a-field-and-the-domain-embeds`, `def-axiom-of-choice`
- `def-group-presentation`, `def-free-group`
- `def-braid-group-by-the-artin-presentation`, `def-closure-of-a-geometric-braid`, `def-artin-automorphisms-of-the-free-group`, `def-the-artin-representation-on-a-free-group`, `prop-the-geometric-action-on-meridians-is-the-artin-representation`, `def-standard-meridians-of-a-punctured-disk`, `thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians`
- `thm-seifert-van-kampen`

I also opened the three page prerequisites listed by the assigned A page: `wirtinger-presentations-and-knot-groups`, `knot-exteriors-and-peripheral-systems`, and `multivariable-alexander-modules-and-chain-models`. Their frontmatter is consistent with the assigned page’s prerequisites.

### Cited source passages checked

- Anthony Conway, [*Burau Maps and Twisted Alexander Polynomials*, version 2](https://arxiv.org/pdf/1510.06678): §2(d), Lemma 2.6; Proposition 2.4; §3(c), Theorem 3.15 and its axis-filling proof; braid and cumulative-meridian conventions.
- Paul Kirk and Charles Livingston, [*Twisted Alexander Invariants, Reidemeister Torsion, and Casson–Gordon Invariants*](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/kirkliv1.pdf): §3 torsion conventions and §4, including Theorem 4.1 and Lemma 4.2.
- Andrew Ranicki, [*Notes on Reidemeister Torsion*](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/torsion.pdf): Definitions 4 and 6, basis-change discussion, and Theorem 15.
- Allen Hatcher, [*Algebraic Topology*, §1.2, Example 1.24](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf): torus-knot exterior mapping-cylinder model.
- Alessia Cattabriga and Stefano Francaviglia, [*Knot Theory and Applications: Lecture Notes*, §5.2, proof of Theorem 5.2.1](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf): two-solid-torus decomposition, annular intersection, core maps, and the Seifert–van Kampen group calculation.

## Repairs and evidence

- In `lem-twisted-acyclicity-from-torsion-module` and `lem-knot-twisted-exterior-acyclicity-from-torsion-module`, corrected the Conway citation from “Lemma 2.7” to “Lemma 2.6” and made the locator precise. The current version-2 PDF labels the localized-acyclicity result Lemma 2.6 in §2(d), printed pp. 8–9. The local proof of the general deficiency-one statement remains in place.
- In `ex-knot-kt-10-worked-cases`, corrected the Cattabriga–Francaviglia locator from a nonexistent subsection label “§5.2.1” to §5.2, proof of Theorem 5.2.1, printed pp. 28–29. The source supports the torus splitting, annular intersection, and group calculation; it does not claim the simple-spine equivalence, which the item proves locally.
- In `lem-twisted-acyclicity-from-torsion-module`, stated the right coefficient action and universal-cover chain formula in the theorem statement. The former wording applied a definition scoped to link-exterior CW structures to a theorem about arbitrary finite based 2-complexes. The added formula preserves the full theorem domain. I also made the lifted-edge boundary calculation explicit in proof step 2.2 and synchronized derivation `derive-2-2` in the batch proof contract.
- In `alg-twisted-burau-determinant-for-colored-braid-closure`, specified that the axis generator is assigned `\rho(x)=I_d` for mapping-torus checks and that rank checks use the closure-exterior spine `X`. Both theorem consumers and the trefoil example consumer of this algorithm are also in batch 65 and were reviewed.
- In `thm-twisted-burau-axis-torsion-product` and `thm-twisted-burau-determinant-formula-under-extension-hypotheses`, removed the assertion that the triangulated-exterior chain-model theorem supplies the full-meridian computation for these inputs. That theorem requires a specified finite triangulation, meridian edge loops, and an integer-vector edge labeling; the theorem inputs provide spine and gluing certificates, not those data. The proof still uses the colored algorithm’s explicit full-meridian-then-color-map convention. The affected proof-contract citations and the axis-step derivation were synchronized.

No proof-contract changes were needed for the bibliographic corrections or algorithm instruction clarification; the proof-contract changes above track the changed derivations and removed inapplicable citation obligations. No changed item had a stale `verification.judge` record, and no judge or acceptance stamp was added.

## Diagram review

Reviewed all three TikZ diagrams in scope. The colored-braid generator diagram and the three-crossing trefoil diagram consistently show the stated positive crossing with the left strand over the right, the underpass gap, and the expected endpoint permutation. The braid-axis diagram correctly records the span from `T` to `Y` and `V`, with both pieces mapping into `X` along the stated gluing. The diagrams agree with the text; no additional diagram was needed, and no proof relies on a diagram.

## Validation

- `reflow.mts`: all six changed item paths returned `unchanged`.
- `precheck.mts`: all six changed items passed; the algorithm correctly reported zero phase proofs checked.
- Final `node tools/proof-layout.mjs` batch over the six changed item paths: `6 items, 24 steps, 0 defects`.

## Unedited issue and blocker

The batch sidecar `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-65.source-evidence.json` retains historical locator strings for Conway (“Lemma 2.7”, “Theorem 3.19”) and Cattabriga–Francaviglia (“§5.2.1”). Those labels do not match the current PDFs inspected above. I left the sidecar untouched because the reader’s repair scope is assigned items and A-page prose; the assigned item citations themselves are corrected. This sidecar discrepancy is not an uneditable item/page finding.

At the 2026-10-21 08:42 UTC status snapshot, the run remained active and `.autopilot` reported `3a-split` unit 50 failed three times. This run-level blocker is unrelated to batch 65. No batch-65 mathematical blocker remains.
