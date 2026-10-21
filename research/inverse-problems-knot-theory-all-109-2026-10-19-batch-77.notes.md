# Batch 77 — authoring and evidence notes

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: beta  
A/B pair: `casson-gordon-invariants-and-sliceness-obstructions` / `casson-gordon-invariants-and-sliceness-obstructions-examples`  
Scheduling input SHA-256: `d74e34fe74ee072a7b0003faf5ce417f7198f9ae5e8fab17c0443de07d4b6a73`  
Page-level prerequisites: batches 66, 67, 74, and 75.

## Plan control and conflicts

The controlling design is KT-24 in `research/plan-knot-theory-track.md`, locations L714 and L716. Those are the exact locations named by the assignment, and the owner direction says the current plan controls design conflicts. `research/plan-spec.json` registers the same A/B page IDs, titles, category, and four A-page prerequisites; its empty item arrays are pre-authoring placeholders, not a scope conflict.

The prerequisite map creates a cycle by making `lem-slice-disk-induces-branched-cover-metabolizer` depend on the final Casson–Gordon obstruction and later Casson–Gordon lemmas. The authored acyclic proof route is: disk-cover homology → rational-ball boundary-kernel metabolizer → disk-induced metabolizer → character extension → signature-vanishing claim → obstruction. The signature-vanishing and obstruction claims remain escalated where their proof comparison is incomplete. The design's prime-power cover/character scope and warning not to identify arbitrary rho defects with Casson–Gordon tau are preserved.

## Inventory and item dependency levels

The manifest contains 26 A-page items and 2 B-page items; neither page exceeds the 100-item cap. Levels below are computed from all current run manifests, so suppliers in batches 66, 67, 74, and 75 contribute to the labels.

- **0:** def-bounding-chain-torsion-linking-pairing, def-finite-linking-form-and-metabolizer, def-oriented-bordism-group-of-a-space
- **1:** def-smooth-slice-disk-exterior, lem-linking-pairing-on-rational-homology-sphere-is-nonsingular, lem-oriented-bordism-classes-over-a-space-form-an-abelian-group
- **2:** lem-rational-homology-ball-boundary-kernel-is-linking-metabolizer, lem-slice-disk-exterior-has-homology-of-a-circle, thm-casson-gordon-third-bordism-group-finite
- **3:** def-infinite-cyclic-cover-of-a-slice-disk-exterior
- **4:** lem-prime-power-cyclic-cover-homology-of-slice-disk-exterior
- **5:** def-cyclic-zero-surgery-cover, def-finite-order-character-of-a-branched-cover, def-q-fold-branched-cover-of-a-slice-disk
- **6:** lem-prime-power-branched-cover-of-slice-disk-is-rational-homology-ball, lem-zero-surgery-cyclic-cover-homology-splitting
- **7:** def-torsion-linking-form-and-casson-gordon-bordism, lem-slice-disk-induces-branched-cover-metabolizer
- **8:** lem-casson-gordon-bordism-admissibility, lem-casson-gordon-characters-and-linking-metabolizers
- **9:** lem-casson-gordon-twisted-intersection-form-is-nonsingular, cex-knot-kt-24-boundary-case, ex-knot-kt-24-worked-cases
- **10:** lem-casson-gordon-bordism-independence-and-nonsingularity
- **11:** def-casson-gordon-signature-defect
- **12:** lem-casson-gordon-signature-defect-and-vanishing
- **13:** lem-prime-power-branched-cover-homology-is-finite
- **14:** thm-casson-gordon-slice-obstruction

## Source review and dispositions

All eight harvested full-text sources in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-77.source-evidence.json` have URL, locator, supported-item lists, result dispositions, recovery attempts, and fetch stamps. The required `source-fetch-check --stamp` returned: 8/8 fetch-verified (0 newly stamped); 8/8 formally resolved (0 documented drops). The latter is a mechanical source-record count; it does not clear the remaining Casson–Gordon proof escalations.

- Charles Livingston and Swatee Naik, *Introduction to Knot Concordance*, complete 199-page book, Chapters 7 §§7.5.3, 7.8–7.11, §7.12.5 and Chapter 8 §§8.1–8.5: https://chuck-livingston.github.io/math/Concordance_Book.pdf. The book supports the disk-cover rational-homology route and states the CG vanishing interface; it defers the key twisted/untwisted form comparison. Its zero-surgery-cover splitting and bordism/capping results are stated with proof calculations deferred.
- Patrick Gilmer, *Slice Knots in S3*, §1, printed pp. 306–309: https://www.maths.ed.ac.uk/~v1ranick/papers/gilmer3.pdf. The metabolizer and character-extension arguments were read; the final CG vanishing step cites the primary theorem.
- Patrick Gilmer and Charles Livingston, *On Surgery Curves for Genus-One Slice Knots*, §4, printed pp. 412–413, Theorem 16, and Appendix C pp. 17–19: https://msp.org/pjm/2013/265-2/pjm-v265-n2-p06-p.pdf. The exact extension/vanishing interface is stated but its proof is referred to Casson–Gordon.
- Stefan Friedl, *Higher and Quantum Invariants of Knots*, §4.3.8, Theorem 4.88: https://epub.uni-regensburg.de/53903/1/phd_thesis.pdf. The prime-power vanishing interface is stated; the proof cites Casson–Gordon.
- A. J. Casson and C. McA. Gordon, *Cobordism of Classical Knots* (1986), with appendix by P. M. Gilmer, printed pp. 189–194: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/cassgord.pdf. The full scanned pages covering the τ-independence discussion, Lemma 4 and corollary, and Theorem 2 with proof were read. It gives the special disk-exterior vanishing route but assumes bounding-pair independence and invokes Ω₃-finiteness without deriving the full prerequisites; those items remain escalated.
- Anthony Conway, *Algebraic Concordance and Casson–Gordon Invariants* (2017 lecture notes; archived PDF), §2.6, Lemma 2.31, and §2.7, Lemma 2.32/Theorem 2.33: https://web.archive.org/web/20240101000000id_/https://www.unige.ch/math/folks/conway/Notes/AlgebraicConcordanceCassonGordon.pdf. Lemma 2.31 supplies the complete zero-surgery cover splitting calculation; Lemma 2.32 and Theorem 2.33 state interfaces while referring key proofs to Casson–Gordon.
- Dale Rolfsen, *Knots and Links*, Chapter 8.D, printed pp. 212–215: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf. The trefoil double-cover surgery calculation was inspected.
- Jozef H. Przytycki and Akira Yasuhara, *Linking Numbers in Rational Homology 3-Spheres, Cyclic Branched Covers and Infinite Cyclic Covers*, §1 pp. 4–7 and §3 pp. 12–14: https://arxiv.org/pdf/math/0111203v1. The inverse framed-matrix linking formula was inspected.

The original Conway lecture-note URL, https://www.unige.ch/math/folks/conway/Notes/AlgebraicConcordanceCassonGordon.pdf, redirected to a staff/profile page; the local curl and course-resource Google Drive copy failed. A timestamped Internet Archive snapshot was then retrieved and stamped. Its complete §2.6 Lemma 2.31 proof was read and reproduced locally for the zero-surgery cover splitting. Section 2.7 states the tau vanishing and twisted-form nonsingularity results but refers their proofs to Casson–Gordon (1975), Theorem 2 and the corollary after Lemma 4. The primary Casson–Gordon 1986 chapter was also retrieved and read through Theorem 2, including the special disk-exterior proof route. That proof still assumes tau bounding-pair independence and invokes an Ω₃-finiteness input without deriving the full bordism calculation. The eight source records and fetch stamps are in `source-evidence.json`; all searches, failed routes, source attempts, and per-item dispositions are preserved in `source-resolution.json` and `coverage.json`.

The accessible Casson–Gordon 1978 scan was additionally inspected through printed pp. 44–50. Lemma 4.2 and Theorem 4.1 provide a prime-power disk-cover homology argument and a uniform bound on selected signature values for slice knots. This does not prove the exact rationalized tau/Witt-class vanishing claimed here, so the scan is recorded as supplementary reading, not as proof of that claim.

## Proof coverage and owner escalations

Twenty-one items now have complete local arguments and prerequisites. Seven mathematical proof gaps remain escalated:

- `thm-casson-gordon-third-bordism-group-finite`: prove the low-degree oriented-bordism calculation for Ω₃^SO(K(ℤ/d ⊕ ℤ,1)) for every prime-power d, including the required cyclic-group homology terms.
- `lem-casson-gordon-bordism-admissibility`: prove the finiteness of the relevant third bordism group for every prime-power character order, as needed to bound a positive multiple.
- `lem-casson-gordon-twisted-intersection-form-is-nonsingular`: construct the capping, identify the full boundary radical, and prove nonsingularity and preservation of the H2 module at chain level.
- `lem-casson-gordon-bordism-independence-and-nonsingularity`: compute the closed fourth bordism contribution and prove the twisted-minus-untwisted Witt-class difference is torsion before rationalization.
- `def-casson-gordon-signature-defect`: the full tau/sigma expression is retained, but well-definedness depends on the unresolved bordism-admissibility, capping/nonsingularity, and independence results.
- `lem-casson-gordon-signature-defect-and-vanishing`: the disk metabolizer and prime-power character extension are proved. Casson–Gordon Theorem 2 gives the special disk-exterior vanishing route, but it assumes the bounding-pair independence and bordism inputs that remain unresolved here.
- `thm-casson-gordon-slice-obstruction`: the quantified contrapositive is drafted, but its final contradiction uses the escalated vanishing lemma.

The Conway proof gives a complete filling calculation: the lifted longitude bounds a lift of a Seifert surface, Mayer–Vietoris identifies the zero-surgery cover with the exterior-cover homology, and division of meridian exponent by q retracts onto the lifted meridian. `def-torsion-linking-form-and-casson-gordon-bordism` can now use this proved splitting.

The four declared prerequisite-page items `def-knot-arf-invariant-from-seifert-form`, `thm-seifert-s-equivalence-and-conway-arf-bridge`, `lem-slice-disk-induces-seifert-metabolizer`, and `thm-levine-algebraic-concordance-classification` are owner-escalated upstream claims that no batch-77 item consumes. Batch 77 instead proves the branched-cover linking metabolizer locally. Their status and non-use are retained as explicit owner-escalation rows in the cross-batch input.

The worked square-knot example verifies H₁ ≅ ℤ/3 ⊕ ℤ/3, linking form diag(1/3, −1/3), diagonal metabolizer, and order-three character vanishing. The trefoil boundary counterexample verifies H₁ ≅ ℤ/3 with a nonsingular form and no subgroup of square-root order. The braid diagram convention is explained in the example; its proof uses the explicit Seifert/surgery matrices and not the drawing.

## Dependency evidence and checks

- Cross-batch input: 85 rows, 81/81 declared direct edges present with exact supplier excerpts; statuses are 81 verified and 4 owner-escalation rows for unused upstream page items. No direct edge is missing and no excerpt mismatch was found.
- Scoped item dependency levels were recomputed against all 218 run pages and 1,325 run items: 28/28 batch-77 labels match, maximum batch-77 item level 14.
- The full-run dependency checker reports four unrelated level mismatches: `lem-property-p-instanton-surgery-triangle-and-rank-input` (5 vs 6), `thm-property-p-for-nontrivial-knots` (6 vs 7), `lem-s-three-filling-detects-the-meridian-slope` (7 vs 8), and `thm-gordon-luecke-knot-complement-determines-knot` (8 vs 9). None is batch 77 and none was edited.
- `node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-77.proof-contracts.json --strict`: 0 errors, 0 warnings, 28/28 items.
- `node tools/proof-layout.mjs` on all 28 assigned carriers: 28 items, 53 numbered steps, 0 defects.
- Scoped statement-first check: 28 items, 0 defects. Coverage checklist: 2 pages, 24 harvested results, 0 errors and 0 warnings. Scoped renderer check: 30 files passed.
- Phase-format precheck: 18 proof-bearing items checked; four proposed canonical phase-step repairs were adopted. Six `no-qed` failures remain, exactly the proof-bearing Casson–Gordon claims whose arguments are still escalated above. Those partial arguments intentionally have no QED; no proof is claimed for them. The zero-surgery splitting proof now ends with QED.
- Source fetch stamp: 8/8 harvested sources verified, none newly stamped in the final check.
- Step 1 records show 19 ready, current-hash items and 9 preserved escalations; no record is owner-marked, and no ready item depends on an escalated batch-77 item. The 19 ready records were rehashed with `node tools/step1-decisions.mjs record` after statement/reference normalization and canonical proof-step numbering. The nine escalation records were not overwritten; their stored hashes are stale against the current carriers and require owner reconciliation. Two of those carriers now have complete local arguments (`lem-zero-surgery-cyclic-cover-homology-splitting` and `def-torsion-linking-form-and-casson-gordon-bordism`), but their earlier escalations remain preserved.
- Source-resolution structural validation reports owner escalation, uncertain confidence, and fewer than five recovery retries. The archive retrieval succeeded on recovery retry four, so retrieval stopped on success as directed. The 1986 primary chapter supplies the special disk-exterior vanishing route, but assumes bounding-pair independence and invokes Ω₃-finiteness without deriving the full prerequisites. These are mathematical gaps; no source is dropped.

The A/B library pages are frontmatter-only with empty bodies and no summaries. The active run remains at `1-scaffold`, so the engine has not yet applied `page_layout: compact-v1`; that engine-managed metadata was left untouched. All 28 statements are uninterrupted and have no inline hyperlinks; statement references follow in separate sections. All carriers remain drafts. These readiness records document authoring status only and do not constitute approval or publication.

## Live build status

Read-only command: `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run inverse-problems-knot-theory-all-109-2026-10-19 --state-dir .autopilot/inverse-problems-knot-theory-all-109-2026-10-19`. At 2026-10-19T06:28:21.127Z, the native run reports `1-scaffold` at 107/109, with batches 77 and 99 missing; nothing is running. The recorded run-level blocker points to `research/inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json` and calls for owner repair/recertification. Batch 77 authoring artifacts and readiness records are present, but no autopilot transition or engine-state repair was made.

`git log -5 --oneline` showed the current repository maintenance history; no commit history exists yet for the untracked batch-77 outputs (`git log -5 --oneline --` the scoped manifest, notes, and coverage files returned no entries). The current run status and disk evidence, not retired handoffs, were used for this checkpoint.
