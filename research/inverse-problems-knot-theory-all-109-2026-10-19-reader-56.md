# Step 3a reader report — batch 56

Run: inverse-problems-knot-theory-all-109-2026-10-19  
Role: reader  
Scope: batch 56 only

## Run state

At the final status check (2026-10-21 09:02:46 UTC), the run was PAUSED. Step 3a-read covered 66 of 109 batches and still listed batch 56 as missing; no worker was in flight. The live status showed a separate 3a-collect blocker: collect-49 failed three times for batch 49. Batch 56 has no review blocker; the run must be resumed by its owner before later stages can advance. No run state was changed. The six changed item paths and the batch-56 proof-contract file were clean before this review; unrelated pre-existing worktree changes were left untouched.

## Opened inventory

Assigned pages:

- library/knot-theory/wirtinger-presentations-and-knot-groups.md
- library/knot-theory/wirtinger-presentations-and-knot-groups-examples.md

Assigned items, in dependency order:

- Level 0: def-knot-planar-code; lem-compact-knot-has-choice-free-tube.
- Level 1: lem-wirtinger-crossing-ball-cover.
- Level 2: lem-wirtinger-local-meridian-conjugacy; lem-knot-group-infinity-collar.
- Level 3: alg-knot-wirtinger-presentation-from-code.
- Level 4: thm-knot-wirtinger-presentation-correctness.
- Level 5: lem-explicit-unknot-and-figure-eight-oriented-wirtinger-codes; ex-knot-kt-01-worked-cases; cex-knot-kt-01-boundary-case.

Direct mathematical suppliers opened:

- Knot and diagram interfaces: def-oriented-link-in-s-three-and-ambient-isotopy; def-regular-oriented-link-diagram; def-normal-addition-map-for-a-euclidean-submanifold; lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section; thm-smooth-inverse-function-theorem-on-manifolds; thm-lebesgue-number-lemma; def-retraction-and-deformation-retract.
- Fundamental-group and van Kampen interfaces: def-based-loops-and-fundamental-group; def-induced-homomorphism-on-fundamental-groups; thm-induced-fundamental-group-map-functoriality; thm-fundamental-group-laws; thm-fundamental-group-of-the-circle; thm-fundamental-group-of-finite-wedge-of-circles; thm-higher-dimensional-spheres-are-simply-connected; def-simply-connected; thm-seifert-van-kampen; cor-seifert-van-kampen-simply-connected-overlap; thm-group-pushout-as-an-amalgamated-quotient; lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts; prop-relative-cw-inclusions-are-cofibrations; lem-cw-quotients-and-collapse-of-a-contractible-subcomplex; thm-polygonal-jordan-curve; thm-simple-polygon-admits-a-triangulation.
- Group presentation and abelianization interfaces: def-group-presentation; def-free-group; thm-quotient-group-universal-property; def-commutator-and-commutator-subgroup; thm-derived-subgroup-is-characteristic-and-abelianization-is-universal.
- Additional basepoint suppliers inspected while repairing the proof: prop-retracts-inject-fundamental-groups; ex-change-of-basepoint-isomorphism-for-fundamental-groups.

The two pages required by the assigned A-page were opened for page metadata context: library/braid-groups/oriented-links-braid-closures-and-markov-equivalence.md and library/topology/the-seifert-van-kampen-theorem.md. They are published dependencies and were not edited or given page verdicts because they are outside batch 56.

The current-run batch-56 authoring notes were read as historical evidence, not as a verdict. Their older nine-item inventory and earlier “escalated” dispositions do not match the current manifest and current authored files; the current manifest contains ten items, including the explicit-code lemma, and the current proofs were reviewed directly.

## Page verdicts

| Page ID | Verdict |
|---|---|
| wirtinger-presentations-and-knot-groups | Pass. YAML frontmatter only; draft status and compact-v1 are present; the eight A-item IDs match the current manifest; the body is empty. |
| wirtinger-presentations-and-knot-groups-examples | Pass. YAML frontmatter only; draft status and compact-v1 are present; items is empty; the two example IDs match the current manifest; the body is empty. |

## Repairs and evidence

| Item | Repair | Evidence |
|---|---|---|
| alg-knot-wirtinger-presentation-from-code | Expanded the Definition’s exact validation instructions: finite rational records and incident endpoints; valence and branch pairing; stored versus geometric cyclic order; coherent orientation and one-component tracing; designated start-arc membership; exact segment intersections; and source/target selection from the positive cyclic order. This replaces an undefined determinant test on “branch direction vectors” when a polygonal branch has a corner at the crossing. | def-knot-planar-code supplies the validity conditions and cyclic-order data; lem-wirtinger-local-meridian-conjugacy fixes the positive-normal source/target convention. The exact figure-eight certificate was checked against all 276 unordered segment pairs, the four crossing determinants, side signs, and cyclic orders. |
| lem-wirtinger-crossing-ball-cover | Clarified that for c>0 the exterior is taken from the constructed cap-and-upper-arc disk-bundle tube, while c=0 uses a Euclidean normal tube. Replaced the unsupported comparison of the model tube with an unrelated normal chart by the direct fiberwise radial strong deformation retraction of the selected tube. Clarified that the finite cap and tube exit charts fit to a disk bundle over the single core circle. | The cap and product-tube construction in Proof 2.1 supplies the chosen disk-bundle neighborhood; the radial homotopy fixes its boundary. The c=0 proof independently retains the extra sphere at infinity and identifies the positive meridian circle. Friedl, Knot Theory, §5.3, printed pp. 69–73, was consulted for the classical upper/lower van Kampen decomposition and meridian presentation; it is corroboration, not a substitute for the exact local cover proved here. |
| lem-wirtinger-local-meridian-conjugacy | Specified that the crossing-product normal frame is oriented by the knot tangent and ambient orientation, and that increasing fiber angle therefore gives a positive meridian even when the source-to-target parameter runs opposite to the knot orientation. | The local positive-area loop around the overstrand, together with the oriented cylinder over the under-arc, gives the stated based conjugacy equation and preserves the stated inverse-direction rule. |
| lem-knot-group-infinity-collar | Replaced the incorrect citation of thm-fundamental-group-laws as a basepoint-change theorem. At a basepoint on the retracting sphere, the pointed radial deformation and functoriality give the group isomorphism; other basepoints are handled by the explicit conjugation formula and path-retracing homotopy. Expanded the cone-volume argument so the countable cover estimate is explicit and does not assume a choice of covers. | The opened target thm-fundamental-group-laws establishes loop-class group operations, but does not state basepoint change. The proof now derives basepoint change directly. The supplied sphere theorem and open-cover corollary then give the required simply connected overlap and van Kampen isomorphism. |
| thm-knot-wirtinger-presentation-correctness | Expanded termination verification to include rational-coordinate, incidence, cyclic-order and starting-arc checks. Made the iterative van Kampen proof rebase each annular core along its supplied collar access path; conjugating the core word preserves its normal closure. | The revised algorithm Definition and the crossing-cover’s ordered annular intersections supply the finite scan and exact relators. The basepoint change is proved by the explicit conjugation/retracing formula using the existing fundamental-group-law supplier, so the frozen manifest dependency list remains valid. |
| ex-knot-kt-01-worked-cases | Corrected the non-rendered TikZ source comments for R2 and R3 to match their visible labels: R2 has left x2/right x1; R3 has left x4/right x3. No visible diagram labels or crossing equations changed. | In both panels the upper-right label is the target L, the lower-left label is the source R, and the under-arrow follows the positive over-normal. The displayed equations agree with the local conjugacy rule. |

The proof-contract rows and current source quotations were updated for the repaired carriers. No stale verification.judge record was present on the modified items, so none was removed. Existing proof-status and focused-review metadata were left as historical evidence, not treated as reader acceptance.

## Downstream consumer check

Because the algorithm Definition and crossing-cover Statement were clarified, I also checked current-run consumers in batches 63, 68, 98, and 107: thm-fundamental-quandle-and-adjoint-group-from-wirtinger; lem-trefoil-plus-one-surgery-group-presentation; lem-trefoil-knot-group-is-nonabelian-with-abelianization-z; and ex-trefoil-bridge-and-unknotting-numbers. Their uses remain compatible with the revised exact code validation and the unchanged positive-normal relator. No out-of-batch edits were made.

## Validation

| Command | Result |
|---|---|
| reflow + precheck, alg-knot-wirtinger-presentation-from-code | Reflow unchanged; precheck clean (0 proof rows, 0 failures). |
| reflow + precheck, lem-wirtinger-crossing-ball-cover | Reflow unchanged; 1 checked, 0 failures. |
| reflow + precheck, lem-wirtinger-local-meridian-conjugacy | Reflow unchanged; 1 checked, 0 failures. |
| reflow + precheck, lem-knot-group-infinity-collar | Reflow unchanged; 1 checked, 0 failures. |
| reflow + precheck, thm-knot-wirtinger-presentation-correctness | Reflow unchanged; 1 checked, 0 failures. |
| reflow + precheck, ex-knot-kt-01-worked-cases | Reflow unchanged; 1 checked, 0 failures. |
| node tools/proof-layout.mjs on all six changed item paths | 6 items, 26 steps, 0 defects. |
| git diff --check on changed items and batch-56 proof contracts | Clean. |

## Unedited findings and coverage limits

No confirmed uneditable defect remains in the assigned batch. The assigned pages have no summary-body violation. No other batch, published item, page prose, plan, or run-state file was edited.

No separate batch-56 rendered evidence bundle was present in the dispatch or live .autopilot state; the current item files, direct suppliers, current manifest, contracts, batch notes, and source passages were used. The Friedl PDF text layer was read in bounded page chunks; its figures were not visually inspected. The assigned TikZ source was checked at the code/label level, but no rendered raster output was produced. The other bibliography entries were not used to certify the local proofs.

The batch-56 notes and prior verification records are historical evidence only. The live run is currently PAUSED with batch 56 missing from 3a-read. No mathematical blocker is specific to batch 56; the run pause and separate 3a-collect blocker on batch 49 remain outside this dispatch.
