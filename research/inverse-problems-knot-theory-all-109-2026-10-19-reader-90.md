# Step 3a reader report — batch 90

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: `reader`  
Batch: `90`

## Opened inventory

### Assigned pages

- `library/knot-theory/khovanov-homology-and-jones-categorification.md` — draft A page; its item list matches the 12 assigned items, its `requires` list is present, and its Markdown body is empty as required.
- `library/knot-theory/khovanov-homology-and-jones-categorification-examples.md` — draft B page; its two examples match the assigned inventory and its body is empty as required.

### Assigned items, in dependency order

1. `lem-marked-knot-cut-tangles-have-relative-reidemeister-movies`
2. `def-khovanov-frobenius-algebra-and-cube-of-resolutions`
3. `alg-khovanov-chain-complex-from-diagram`
4. `lem-khovanov-cube-differential-squares-to-zero`
5. `def-reduced-khovanov-cohomology-of-a-knot`
6. `thm-khovanov-chain-complex-from-diagram-procedure-properties`
7. `lem-khovanov-graded-euler-characteristic-jones-normalization`
8. `lem-khovanov-signed-local-cancellation-models`
9. `lem-khovanov-reidemeister-chain-homotopies`
10. `thm-khovanov-homology-is-an-oriented-link-invariant`
11. `thm-reduced-khovanov-basepoint-and-reidemeister-invariance`
12. `thm-khovanov-euler-characteristic-is-jones`
13. `cex-knot-kt-37-boundary-case`
14. `ex-knot-kt-37-worked-cases`

### Supplier items opened for the assigned arguments

`def-countable-choice`; `thm-transverse-preimage-theorem`; `thm-parametric-transversality`; `thm-morse-sard-for-smooth-manifolds`; `thm-morse-sard-for-euclidean-maps`; `thm-isotopy-extension`; `lem-a-smooth-isotopy-of-links-can-be-put-in-general-position`; `lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times`; `def-oriented-reidemeister-moves`; `def-planar-isotopy-of-link-diagrams`; `def-kauffman-bracket-smoothing-and-loop-value`; `def-oriented-crossing-sign-writhe-and-blackboard-framing`; `def-cochain-complex-in-an-abelian-category`; `def-oriented-link-in-s-three-and-ambient-isotopy`; `def-regular-oriented-link-diagram`; `def-chain-homotopy`; `def-chain-homotopy-equivalence`; `def-mapping-cone-of-a-chain-map`; `thm-oriented-reidemeister-equivalence-theorem`; `lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy`; `def-axiom-of-choice`; `thm-choice-implies-dependent-implies-countable-choice`; `def-temperley-lieb-quotient-and-jones-specialization`; and the current-run supplier `thm-bracket-state-sum-matches-library-jones-specialization` (batch 82).

I also opened the batch-100 direct consumers of the procedure theorem: `def-reduced-khovanov-cohomology-of-a-based-link-over-f2`, `lem-trefoil-reduced-khovanov-rank-three`, and `lem-reduced-khovanov-over-f2-basepoint-independence`. Their uses concern based nonempty diagrams or a trefoil and remain inside the procedure's nonempty input domain.

Primary source portions consulted as convention checks were Khovanov, [*A categorification of the Jones polynomial*](https://arxiv.org/pdf/math/9908171v2), §§5.2–5.3 (negative-curl and RII raw shifts), the opening of §5.4 (RIII setup), the introduction’s Euler-characteristic summary, and §§8.2–8.4 (module-valued tangle complexes); Kauffman, [*An Introduction to Khovanov Homology*](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf), §2 and the opening cube discussion in §3; and Queffelec, [*Reidemeister’s theorem using transversality*](https://arxiv.org/pdf/2406.18203v1), Theorem 2 and §§3.3–3.6 (multijet transversality and the cusp, tangency, and triple-event models). Queffelec explicitly gives only an outline for the RII/RIII local models; the assigned relative proof supplies its own calculations. I did not read the full Bar-Natan or Zhang sections cited in the item bibliography; neither was used to close a finding. I did not audit every recursive supplier proof or the complete bibliography.

## Page verdicts

- **Khovanov homology and Jones categorification (A):** page presentation passes. The page has no summary body, keeps the assigned inventory, and its item-level scope is mathematically coherent after the listed domain clarifications. The Jones comparison theorem still has an uneditable dependency finding recorded below.
- **Khovanov homology and Jones categorification — Examples and Counterexamples (B):** page presentation passes. The page has no summary body and lists the assigned counterexample and example.

## Repairs and evidence

- `items/lem-khovanov-graded-euler-characteristic-jones-normalization.md`: stated that the bracket input is a **nonempty** link diagram and restricted the reduced identity to a based knot diagram. The bracket definition excludes the empty link, and the reduced-complex supplier is specifically for knots with a basepoint. This preserves the unreduced identity for all nonempty links and makes the reduced domain match its supplier. Updated the batch-90 contract’s consumer quote accordingly.
- `items/thm-khovanov-chain-complex-from-diagram-procedure-properties.md`: stated that the procedure theorem applies to a nonempty diagram, matching the algorithm’s explicit input domain. Its zero-crossing case remains included: it is a nonempty crossingless diagram with one resolution state. Updated batch-90 contract quotations that consume this statement.
- `items/cex-knot-kt-37-boundary-case.md`: restricted the false universal claim to nonempty diagrams, the input domain of the defined raw cube procedure. The crossingless unknot and its two curls remain valid witnesses. Updated the matching batch-90 contract quote.
- No numbered proof steps changed, and these three items had no `verification.judge` record to remove. Reflow reported all three items unchanged. Precheck passed on all three. One batched proof-layout run reported 3 items, 8 steps, 0 defects.

The batch-90 proof-contract quotes for the changed statements were updated. Existing owner `template_review` records were preserved as historical evidence; no new review stamp was created.

The direct assigned consumers of the Euler-characteristic lemma were checked. `thm-khovanov-euler-characteristic-is-jones` already assumes a nonempty link and applies the reduced identity only to a based knot; its batch-90 contract quote was refreshed. The example and counterexample cite the lemma after their complete statements but calculate their own values. The direct assigned consumers of the procedure theorem also use nonempty diagrams.

## Uneditable finding

- `thm-bracket-state-sum-matches-library-jones-specialization` is a draft supplier from batch 82 used by assigned consumer `thm-khovanov-euler-characteristic-is-jones`. In Proof 3.1, line 136, it uses an undefined ring symbol `R_A` and asserts that the localization denominator maps to a unit. The cited Jones-specialization definition defines the source localization `T` but does not define `R_A`. If `R_A` is read as the Laurent polynomial ring used for the Kauffman bracket, `A^{-4}+1` is not a unit, so the stated map from `T` does not exist. The step needs an explicit common target, such as the rational function field or the localization at `A^{-4}+1`, and a corresponding injective-map argument before it can conclude equality in `T`. This is a nonfatal one-step notation/inference gap, but the supplier is outside batch 90 and was not edited.

## Remaining outside-scope contract follow-up

The batch-100 contracts for `def-reduced-khovanov-cohomology-of-a-based-link-over-f2`, `lem-trefoil-reduced-khovanov-rank-three`, and `lem-reduced-khovanov-over-f2-basepoint-independence` still quote the pre-clarification procedure-theorem Statement. Their item inputs are based nonempty diagrams, so the mathematical arguments remain within the clarified domain; refreshing those three quotes is outside batch 90's write scope.

## Blocker and coverage note

There is no blocker specific to batch 90. The run remains active in Step 3a, and the final status showed no active writer. It also showed an unrelated `3a-collect` blocker: batch 71's `collect-71` failed three times. No gate or adjudication was attempted. I checked the full authored bodies of all assigned items and the supplier interfaces needed for their arguments, but I did not recursively audit every dependency of each published supplier or read every cited source in full. The Zhang PDF fetch failed because of its file size, so I do not claim to have read it.
