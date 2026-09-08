# phase-2-wave-1 · beta batch 1 · blocker-resolution notes

## Current owner-authorized disposition — 2026-09-08

Current scope: only the accepted small-cancellation pair remains. HG was deferred by owner authority with all 34 items and sources preserved in phase-2-hg-deferred.*; HG-P is added earlier in Phase 2. Earlier HG closure/escalation claims below are historical.

Receipt: `research/phase-2-escalation-repairs-2026-09-08.md`.
Canonical published-consumer tracking remains in `research/published-consumer-supplier-ledger.md`.

Status: **owned scaffold contracts and sources are locally ready; the complete inherited closure remains blocked by protected published-content defects.**

Date: 2026-09-08. Scope: the Small-Cancellation Disc Diagrams and Torsion Toolkit A/B pair and Quantitative Hyperbolic-Geometry Toolkit A/B pair only. The engine remains paused. No published item/page, canonical plan/ledger, library file, or engine state was edited.

## Exact inventory and identity change

The owned manifest has 55 items: SC A/B has 17+4=21 and HG A/B has 29+5=34. No mathematical item was added or removed during this blocker-resolution pass.

One unspliced auxiliary identity was renamed because its claim changed materially:

`lem-hg-toolkit-exponential-detour-bound` → `lem-hg-toolkit-exponential-projection-contraction`.

The old proposed identity described a generic detour cutoff. The repaired statement is the specific corrected closest-point projection inequality needed by the exact Morse proof, with supplied attained endpoint projections, a K-quasiconvex target, and an auxiliary product constant strictly greater than the actual one. Every live occurrence in the owned manifest, coverage, and group-track prose uses the new identity. This is an explicit provenance map, not a deletion; no published consumer used either unspliced identity.

## Objection dispositions

- **B1-SC-SETUP — resolved locally.** The van Kampen proof contract now reproduces the balloon construction, folding, spanning-tree reading and orientation checks. Minimal diagrams use cancellable-pair surgery. Singular diagrams are decomposed by the block-cut tree; the nonsingular curvature/shell argument is applied to an end block, with the attachment treated as semi-exterior. The local route does not depend forward on the later published van Kampen page.
- **B1-SC-TORSION — resolved locally.** The Lipschutz periodic-word route retains proper powers and the common-root alternative, and avoids the damaged shortening argument. Greendlinger is applied only after the singular-diagram setup above.
- **B1-HG-CONSTANTS — resolved locally.** For δ>0 the manifest requires reproduction of the revised Druţu–Kapovich halfspace proof: a 6δ-local arc-length geodesic is a `(3,4δ)` quasi-geodesic in the real-interval convention, hence so is a k-local geodesic for k≥6δ. For δ=0, only k>0 is asserted and the tripod proof is local; k=0 is not treated as a locality hypothesis.
- **B1-HG-MORSE — resolved locally.** The statement covers arbitrary possibly discontinuous quasi-geodesic maps on nonempty compact real intervals. The optimized AFP interpolation gives a continuous `(λ,4ε)` map, 2λ-Lipschitz, at image Hausdorff distance 2ε. Projection explicitly defines K-quasiconvexity, assumes supplied attained closest points in the nonproper case, works with ρ greater than the actual product constant, and passes to the limit. The authoring obligation reproduces the complete projection induction, two-level optimized recurrence with `L=18ρ`, `D=55ρ`, `α=12/100`, limiting argument, both Hausdorff inclusions, discontinuous interpolation, short-endpoint case, and final inequalities. The printed paper alone is not represented as the complete proof of 92.
- **B1-HG-FILLING — resolved locally.** The proof contract reproduces the planar minsize inequality and the sublinear-minsize contradiction, including the rescaling/ultralimit estimates, before concluding uniformly slim triangles. It does not replace triangle hyperbolicity by a bigon-only assertion and retains finite presentation and bounded relator perimeter.
- **B1-HG-BOUNDARY — resolved locally.** Product comparisons, equivalence and neighbourhood axioms are separated from the proper ray model. Proper compactness/ray extraction uses diagonal compact-ball arguments; quasi-isometry extension for Gromov sequences does not silently assume properness.
- **B1-HG-DYNAMICS — resolved locally.** Canary Theorem 5.7 was read through its proof and supplies uniform-on-compact subsequential convergence. Proposition 5.1 pins the attractor/repeller of powers, and the every-subsequence contradiction yields the required uniform north–south inclusions.
- **B1-HG-EXISTENCE — resolved locally.** Hamann Theorems 5.3.7–5.3.8 were read through the torsion-allowed proof. The manifest includes finite cone types, infinite-order existence, boundary trichotomy and the shared-pole axis argument; it does not use Canary's torsion-free subgroup corollaries.
- **B1-CLOSURE — explicitly open.** The earlier structural traversals reported 1,567 current transitive SC IDs and 3,112 current transitive HG IDs, together with historical dependency variants and inherited published/plan issues. Those thousands of statements and proof uses were not all semantically reread in this pass. Direct-interface proof resolution is bounded progress, not certification of the stronger complete transitive audit. Genuine inherited published-proof defects remain Phase 3 work.

## Full-text evidence actually read

- Touikan, *An introduction to combinatorial and geometric group theory*, complete 80-page PDF: §3.1.1 pp.40–43 (balloon/folding van Kampen proof), and §§3.4–3.5 (Euler curvature, shells, spurs, singular diagrams and semi-exterior vertices).
- Druţu–Kapovich, corrected 837-page *Geometric Group Theory*: Theorem 11.45 and Lemma 11.46 pp.375–378; Proposition 9.104 pp.329–331; Definition 11.175, Proposition 11.176 and Lemma 11.177 pp.428–429; Theorem 11.181 pp.431–432.
- Gouëzel–Shchur, complete ten-page corrected Morse paper: all pp.1–10. It states 92, details a conservative 2460 argument, and expressly summarizes rather than prints all exact optimizations.
- Gouëzel, official AFP current-release source: `Isometries.thy` proposition `quasi_geodesic_made_lipschitz`, source lines 2321–3330; `Morse_Gromov_Theorem.thy`, rendered source lines 450–2538, covering projection contraction, both orientations of the optimized recurrence, the strict-constant limit, reverse Hausdorff inclusion, interpolation and short-endpoint cases. These formal sources close the exact-92 reading gap and are proof templates, not external dependencies.
- Hamann, complete 101-page lecture notes: Remark 5.3.6 and Theorems 5.3.7–5.3.8 pp.91–94, plus the cyclic-undistortion and centralizer proofs pp.87–90.
- Canary, complete 181-page lecture notes: Proposition 5.1 pp.25–26, Theorem 5.7 pp.28–29 and Theorem 7.3 pp.32–33.

Coverage contains 57 dispositions across 11 source records. All source roles and exact locators are recorded there. In particular, the corrected paper and AFP records no longer conflate an expository proof with the complete exact-constant calculation, and Hamann's finite-cone/infinite-order proof has its own read dispositions.

## Readiness boundary

The local scaffold proof contracts and source locators are ready for independent review and authoring. This is not a splice, publication, full-closure, or Phase-3 certification. `B1-CLOSURE` remains the exact blocker to any claim that every transitive inherited interface has been semantically certified.

## Step-3 fix-pass checkpoint (superseded dependency metadata)

Supervisor reconciliation after this checkpoint: the live manifest no longer
uses the B item `ex-frechet-filter`. It constructs the proper tail filter
locally from A definitions and natural-number order facts, then applies the
ultrafilter lemma under AC. The canonical HG prerequisite list now matches
the manifest. Eleven upstream A-for-B page substitutions leave the current
SC and HG plan closures at 40 and 115 pages with zero B suppliers.
The counts and plan-drift statements below describe the earlier fix-pass
bytes, not current readiness. Full semantic closure remains for independent
recheck; no verdict was changed by this reconciliation.

- **Finding `B1-CLOSURE` — HG ultrafilter/choice subfinding: resolved in the owned manifest.** `lem-linear-isoperimetry-implies-uniformly-thin-geodesic-bigons` now depends on `def-axiom-of-choice`, `thm-ultrafilter-lemma`, `ex-frechet-filter`, and `def-ultrafilter`; its A page now requires `filters-and-ultrafilters`. The statement assumes AC explicitly: it both selects the counterexample/geodesic sequences and supplies the local ultrafilter extension through Zorn. The strategy constructs the nonprincipal ultrafilter by extending the Fréchet filter, uses the complementary tail of each singleton to rule out principality, and defines the rescaling, ultrafilter equivalence, cone metric, and limiting sides inline before the minsize contradiction. Evidence: `items/thm-ultrafilter-lemma.md`, Statement and Proof 1.1–7.1 (AC via Zorn and extension); `items/ex-frechet-filter.md`, Example and Verification 1.1–4.1 (the proper tail/cofinite filter and complementary singleton tails); `items/def-ultrafilter.md`, Definition (nonprincipal/free convention). Changed records: batch manifest and coverage `dependency_audit`.

- **Finding `B1-CLOSURE` — SC transitive closure: remains blocked, not rebutted.** The current closure has the seven B-page suppliers recorded in the Alpha-A review. A B leaf is not an adequate A-page supplier, so a semantic audit over that closure cannot certify the consumer. The binding replacement is the A-only requirement table in `research/plan-group-theory-track.md` §30.2. No new A/B pair is required; the authorized central plan/prose-scaffold writer must install that table in the protected plan and prose scaffold. Only then can the 1,567-ID closure be audited proof by proof for exact claim, hypotheses, direction, conventions, axiom strength, and use.

- **Finding `B1-CLOSURE` — HG transitive closure: remains blocked, not rebutted.** The current closure has the eleven B-page suppliers recorded in the Alpha-A review. The same protected A-only repair in `research/plan-group-theory-track.md` §30.2 is required before the 3,112-ID closure can be semantically certified. The added `filters-and-ultrafilters` edge is an earlier published A-page supplier (order 12) and has no same-frontier supplier, so batch 1's cross-batch input remains correctly `[]`; no frontier-ledger row was added.

The Step-0 design/spec comparison has a new post-review conflict: the original HG design and current `plan-spec.json` omit `filters-and-ultrafilters`, but the repaired proof route cannot conceal its use. The owned manifest is deliberately strengthened; the protected current plan remains to be reconciled by its authorized writer. No item was added, removed, renumbered, or moved, and no published content, shared plan, source record, or another batch was edited.

### Checks run (rerun after the final AC-strength correction)

- `node tools/coverage-checklist.mjs research/phase-2-wave-1-batch-1.coverage.json` — 2 pages, 57 harvested results, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/phase-2-wave-1-batch-*.pages.json` — 434 items, 0 normalized, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/phase-2-wave-1-batch-1.pages.json` — 55 scoped items, 0 errors, 0 warnings.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-wave-1` — refreshed and deduplicated; batch 1 remains an empty consumer input because its added supplier is outside this run.
- `node tools/validate-plan.mjs research/plan-spec.json --repo .` — structural plan check completed with its final `OK` result. Its output still displays the inherited B-page requirement chain, which is the recorded mathematical blocker rather than a waived defect.
- `node tools/extcheck.mjs --quiet` — completed with no hard errors; it reported 63 pre-existing published-item warnings about recorded-not-proved material.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-wave-1-batch-1.coverage.json --stamp` — 11/11 sources fetch-verified, 0 newly stamped; 11/11 resolved, 0 documented drops.
- `node tools/source-backing.mjs --coverage research/phase-2-wave-1-batch-1.coverage.json --liveness research/phase-2-wave-1-url-liveness.json --require-verified` — 28 authored results, all backed by an openable verified source or a documented alternative.
- Read-only current-plan closure traversal — SC has 50 pages and the exact 7 B-page supplier edges in the Alpha-A verdict; HG has 127 pages and the exact 11 B-page supplier edges in that verdict. This confirms, rather than assumes, the remaining blocker on the current bytes.

## Scaffold-fix round

Date: 2026-09-08. This round addresses only the two `work[]` entries for
batch 1 in `research/phase-2-wave-1-scaffold-closure.json`. It supersedes the
historical 50/127-page and 1,567/3,112-item counts above for current-graph
bookkeeping. Authorized shared-plan, published-definition, and delegated-
verification cutovers landed while this audit was in progress; all figures
and dispositions below were reconciled afterward.
The owned 55-item manifest was not changed: the direct SC/HG
proof contracts and all 57 existing source dispositions remain intact, but the
inherited current closure is still fatal and the batch remains blocked.

### Finding `B1-CLOSURE` — `small-cancellation-disc-diagrams-and-torsion-toolkit`

- **Disposition:** audited on current bytes; blocked by protected inherited
  content, not rebutted.
- **Evidence:** recursive traversal gives exactly 40 declared A pages, 1,029
  item IDs and 5,785 `deps` edges, with zero missing IDs, item cycles, B-page
  suppliers, or item suppliers outside the declared page closure. The sorted
  page/item/edge SHA-256 fingerprints are respectively
  `d2ea226e6871c1d19b88c948758a8ebce072010fdc22f1dc7fd787a71a241d30`,
  `0528341b1c91ff141a64e645cac9a20148f665701f72bf296a12b972480acbe4`,
  and `c67de34a9413c6e4d502b553e9f2e7cfcf9a45752914219edb390c6e7623370c`.
  The exact path to the load-bearing forward construction is
  `small-cancellation-disc-diagrams-and-torsion-toolkit -> free-groups-and-presentations -> group-homomorphisms-and-the-isomorphism-theorems -> normal-subgroups-and-quotient-groups -> cosets-and-lagranges-theorem -> congruences-and-the-chinese-remainder-theorem -> inclusion-exclusion-and-the-pigeonhole-principle -> finite-counting-and-binomial-coefficients -> countability-and-uncountability -> suprema-and-infima -> foundations-of-the-real-numbers -> cex-ordered-field-not-archimedean -> cor-rational-function-field-as-a-fraction-field`.
  The last link occurs in Facts & Assumptions, not orientation, and the supplier
  page is outside this closure. The exact common group-theory defect path is
  `small-cancellation-disc-diagrams-and-torsion-toolkit -> hnn-extensions-and-brittons-lemma -> subgroups-of-free-groups-and-schreier-rewriting -> socles-and-the-onan-scott-landscape`.
- **Change:** replaced the stale open-audit description in batch coverage with
  current closure fingerprints, paths, and fatal dispositions. No manifest,
  plan, published item, or source record changed.
- **Remaining blocker:** an authorized Phase-3 owner must repair the ordered-
  field construction/order edge, the recorded-result consumers, and the five
  nominal group-theory proofs enumerated below; independent review must then
  recheck the repaired closure.

### Finding `B1-CLOSURE` — `quantitative-hyperbolic-geometry-toolkit`

- **Disposition:** audited on final current bytes; blocked by protected
  inherited published content, not rebutted.
- **Evidence:** recursive traversal gives 73 declared A pages, 1,905 item IDs
  and 10,135 `deps` edges, with zero missing IDs, item cycles, B-page suppliers,
  or item suppliers outside the declared page closure. Its sorted
  page/item/edge SHA-256 fingerprints are
  `5bac705be3d1eaaec10753ce8b647e35cac9e810fe1e81b6e8967fd469624936`,
  `0a74e89b94fb307cb7cbf3f490db00381d6ec6052c21e8e6a8a897459f1b34f6`,
  and `31606a9c29183f091dcb9f924231f70db4c878d6216a56a0e380e07608959166`.
  The concurrent authorized cutover removed the intermediate route through
  `applications-of-the-fundamental-group`, Power Series, and metric compactness;
  the earlier 115-page Taylor observation does not apply to final current
  bytes. The remaining common group-theory defect path is
  `quantitative-hyperbolic-geometry-toolkit -> small-cancellation-and-dehn-algorithms -> decision-problems-for-finitely-presented-groups -> hnn-extensions-and-brittons-lemma -> subgroups-of-free-groups-and-schreier-rewriting -> socles-and-the-onan-scott-landscape`.
- **Change:** recomputed and replaced the closure inventory after the shared
  plan changed; no batch-owned manifest or protected shared file was edited by
  this worker.
- **Remaining blocker:** the published owner must resolve the recorded-result,
  nominal-proof, load-bearing-forward, AC-header, and diagram-area supplier
  defects below.

### Finding `B1-CLOSURE-DC`

- **Disposition:** resolved by owner-authorized repair and current delegated
  verification.
- **Evidence:** `def-dependent-choice` is now homed immediately after
  `def-countable-choice` on order-18 `countability-and-uncountability` in the
  current plan and published page, and its arbitrary `x:N->X` uses
  `def-function`, not the real-valued `def-sequence`. Both SC and HG reach that
  page. HG also reaches
  `thm-equivalent-characterizations-of-noetherian-modules` through
  `geometric-actions-svarc-milnor-and-growth -> modules-over-a-pid-and-canonical-forms -> chain-conditions-and-semisimple-modules`;
  that theorem now declares DC, states that only ACC-to-maximal assumes it, and
  applies the strict-inclusion relation in proof step 1.2. Both edited items
  now carry owner-authorized `verification.verified` receipts from
  `gpt-5.6-sol`, dated 2026-09-08, and
  `research/phase-2-wave-1-owner-published-repairs.json` records independent
  Group F acceptance.
- **Change:** no batch-owned mathematical edit; this round reconciled the
  stale verification-open checkpoint to the current accepted receipts.
- **Remaining blocker:** none for the repaired definition or supplier theorem.
  Their acceptance does not certify the downstream consumers below.

### Finding `B1-CLOSURE-RECORDED`

- **Disposition:** fatal recorded-result dependency use in both closures.
- **Evidence:** SC reaches two proof-not-supplied records and the two prohibited
  consumers `fs-onan-scott-is-the-classification-of-finite-simple-groups` and
  `fs-the-onan-scott-theorem-requires-the-classification-of-finite-simple-groups`
  of `rem-cfsg-refinements-of-the-onan-scott-reduction`. HG reaches eleven such
  records and ten direct recorded-supplier edges: those two; the Bass–Guivarc'h
  edge from `cor-finitely-generated-nilpotent-groups-have-polynomial-growth`;
  the invariant-factor edge from
  `thm-word-problem-for-finitely-generated-abelian-groups`; the Adian–Rabin to
  Novikov–Boone edge; the triviality/finiteness to Adian–Rabin edge; and the
  four Novikov–Boone false-statement consumers enumerated in coverage. These
  exact edges match `research/published-consumer-supplier-ledger.md` §30.4.
- **Change:** none; recorded results were not accepted as proof suppliers.
- **Remaining blocker:** the published owner must perform the ledger's exact
  removals/repoints. The Bass consumer may be repointed only after the existing
  batch-6 `thm-bass-guivarch-growth-degree-formula-with-proof` is published;
  the authorized plan writer must then add the earlier
  `hall-malcev-coordinates-and-bass-guivarch-growth` A page to
  `geometric-actions-svarc-milnor-and-growth` `requires`, so page and item
  closure agree. That protected published-page repair is not a dependency of
  any owned batch-1 item, so the batch-1 frontier input remains the correct
  empty array.

### Finding `B1-CLOSURE-NOMINAL-PROOFS`

- **Disposition:** fatal published proof defects common to both closures.
- **Evidence:** direct rereading confirms that
  `thm-onan-scott-classification-of-finite-primitive-groups` assumes the whole
  classification as `[A2]`;
  `thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups`
  imports the crucial automorphic-image/centralization package as unlinked
  `[A2]`; `lem-distinct-components-commute` assumes its statement verbatim;
  `thm-generalized-fitting-subgroup-contains-its-centralizer` assumes its
  statement verbatim; and
  `thm-finitely-generated-free-groups-are-subgroup-separable` assumes Marshall
  Hall's separability conclusion instead of using the published free-factor
  theorem and covering completion. The exact repairs and source blocker are
  already binding in the canonical ledger §30.4.
- **Change:** none; all five items are published and protected.
- **Remaining blocker:** Phase 3 must restore/expand the five proofs or recorded
  statuses exactly as the ledger specifies, remove invalid outgoing edges, and
  re-audit retained consumers.

### Finding `B1-CLOSURE-AC-HEADER`

- **Disposition:** fatal explicit-dependency omission in the HG closure.
- **Evidence:**
  `cor-quasi-isometries-are-exactly-the-coarsely-dense-quasi-isometric-embeddings`
  explicitly assumes and links `def-axiom-of-choice` in both its Statement and
  Given line, but omits it from `deps`. Its theorem supplier also assumes AC,
  so the result is not mathematically underpowered; its own exact hypothesis
  inventory is nevertheless incomplete.
- **Change:** none; the corollary is published.
- **Remaining blocker:** an authorized published-content owner must add
  `def-axiom-of-choice` to its `deps` and recheck affected consumers.

### Finding `B1-CLOSURE-NOETHERIAN-CONSUMERS`

- **Disposition:** three fatal published choice-contract defects in the HG
  closure.
- **Evidence:** the exact current page path is
  `quantitative-hyperbolic-geometry-toolkit -> geometric-actions-svarc-milnor-and-growth -> modules-over-a-pid-and-canonical-forms -> chain-conditions-and-semisimple-modules`.
  `thm-chain-conditions-in-short-exact-sequences` Facts L6 and Proof 3.1
  convert ACC back to finite generation even though the accepted supplier now
  makes the intervening ACC-to-maximal implication conditional on DC.
  `thm-composition-series-iff-noetherian-and-artinian` explicitly assumes DC
  for its converse but omits `def-dependent-choice` from `deps`, and its Proof
  2.1 does not make the recursive successor relation entire at zero.
  `thm-principal-ideal-domains-are-unique-factorisation-domains` Fact L2 and
  Proof 1.1 use the DC-only maximal-condition route while its Statement,
  Given, and `deps` remain unconditional. These exact findings and repairs are
  recorded in the canonical published-consumer ledger's Noetherian direct-
  consumer follow-up and in the current Alpha-A recheck.
- **Change:** added the current closure work entry's downstream findings to
  batch coverage and notes; no protected published item was edited.
- **Remaining blocker:** the published owner must replace the short-exact
  Noetherian argument by the direct finite-generator lift proof; declare DC and
  give zero a self-successor in the composition-series converse; and either
  declare the exact DC cost in PID-to-UFD or supply a fully audited choice-free
  proof. Re-audit the repaired HG closure. No new A/B pair is required.

### Finding `B1-CLOSURE-FORWARD-REFS`

- **Disposition:** 77/135 SC/HG links rebutted as orientation; the common
  ordered-field link remains fatal.
- **Evidence:** location/item-kind screening of all 78 SC and 136 HG
  `forward_refs` links found that every link except
  `cex-ordered-field-not-archimedean -> cor-rational-function-field-as-a-fraction-field`
  occurs in a `Remarks` section or a remark record as comparison/orientation.
  The extra current link is the repaired definition's Remarks pointer
  `def-dependent-choice -> rem-compactness-choice-ledger-metric`.
  The exception occurs in Facts & Assumptions and supplies the witness field.
  Its supplier page is outside both final current closures. The canonical ledger's
  current findings index independently records this precise cutover.
- **Change:** no false dependencies were added to silence orientation warnings.
- **Remaining blocker:** the published owner must replace or reorder the
  load-bearing construction.

### Finding `B1-CLOSURE-DIAGRAM-AREA`

- **Disposition:** fatal inadequate published supplier statement in the HG
  closure.
- **Evidence:** `thm-diagram-area-agrees-with-algebraic-relator-area` step 1.1
  needs the quantitative assertion that an `m`-face van Kampen diagram gives a
  product of exactly `m` conjugates of relators. Its declared
  `thm-van-kampen-lemma` states only the existence equivalence, while
  `lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group`
  states only nullity. The latter proof contains the exact `m`-factor shelling
  identity, but a supplier proof body is not its statement. The exact path is
  `quantitative-hyperbolic-geometry-toolkit -> small-cancellation-and-dehn-algorithms -> thm-diagram-area-agrees-with-algebraic-relator-area`.
- **Change:** reclassified this depcheck warning as fatal after checking the
  supplier statements; did not accept a resolving ID as mathematical adequacy.
- **Remaining blocker:** the published owner must strengthen the boundary-label
  lemma to export its already-proved exact factor count, add that lemma directly
  to the area theorem `deps`, and re-audit the linear-isoperimetric consumer. No
  new A/B pair is required.

### Finding `B1-CLOSURE-WARNING-REBUTTALS`

- **Disposition:** rebutted; no manifest change.
- **Evidence:** final-current depcheck reports one SC and twenty HG
  cited-not-in-deps warnings. The ordered-field, AC and diagram-area warnings
  are retained as fatal above. The other seventeen HG links are explanatory
  contrasts or downstream pointers: false converses, locality, sequential
  analogues, downstream algebra/composition/error corollaries, choice-cost
  remarks, and the perfect-set theorem's explicit statement that DC is
  unavailable before it constructs a canonical choice-free recursion. None is
  invoked in its host proof. No Foundations `deps`, `justified_by`, or
  load-bearing `forward_refs` route to `deferred-set-theory-beyond-choice` was
  found; orientation-only references were not promoted to suppliers.
- **Change:** rebutted only those seventeen orientation warnings.
- **Remaining blocker:** none for those seventeen.

### Finding `B1-PROSE-HG`

- **Disposition:** resolved on final current bytes by the authorized shared
  writer.
- **Evidence:** `research/plan-group-theory-track.md` §30.5 now lists
  `filters-and-ultrafilters` first in the explicit HG `**requires**` inventory,
  matching the owned manifest and current `research/plan-spec.json`.
- **Change:** no batch-owned edit; this worker reread the authorized shared
  change before finalization.
- **Remaining blocker:** none.

### Coverage and source disposition

No definition, lemma, theorem, example, source record, or A/B pair was added,
so no new harvested-result disposition or source locator is required. The
coverage artifact now records every new audit finding and its exact repair
owner. Existing batch source evidence remains 11 active full-text records with
57 dispositions. `research/phase-2-wave-1-batch-1.pages.json` and
`research/phase-2-wave-1-batch-1.cross-batch-dependencies.json` remain byte-
unchanged; only this notes file and the owned coverage file were changed.

### Checks run in this scaffold-fix round

- `node tools/coverage-checklist.mjs research/phase-2-wave-1-batch-1.coverage.json`
  — exit 0; 2 pages, 57 harvested results, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/phase-2-wave-1-batch-*.pages.json`
  — exit 0; whole run, 434 items, 0 normalized, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/phase-2-wave-1-batch-1.pages.json`
  — exit 0; 55 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json --repo .` — exit 0;
  final `OK`: declared page order acyclic and structurally consistent, with its
  existing redundant-prerequisite diagnostics and the stated limitation that
  719 planned pages have no item lists. This structural check does not
  adjudicate the protected semantic defects or the future BG repoint/page edge
  recorded above.
- `node tools/extcheck.mjs --quiet` — exit 0; final `OK` with 63 warnings. Its pre-existing
  recorded-not-proved warnings include this closure's Novikov–Boone,
  invariant-factor, Bass–Guivarc'h and O'Nan–Scott consumers and therefore
  corroborate, rather than waive, `B1-CLOSURE-RECORDED`.
- `node tools/depcheck.mjs --quiet` — exit 0; final `OK` with 474 repository-
  wide warnings. The current delegated verification receipts eliminate the
  earlier published-unaudited errors. Its cited-not-in-deps diagnostics still
  include the ordered-field, AC-header, and diagram-area interfaces retained
  as fatal above; a warning-only structural pass does not certify their
  mathematical adequacy.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-wave-1-batch-1.coverage.json --stamp`
  — exit 0; 11/11 sources fetch-verified, 0 newly stamped; 11/11 resolved, 0
  documented drops.
- `node tools/source-backing.mjs --coverage research/phase-2-wave-1-batch-1.coverage.json --liveness research/phase-2-wave-1-url-liveness.json --require-verified`
  — exit 0; all 28 authored results backed by an openable source or documented
  alternative.

The frontier input was not edited, so the refresh command was not run in this
round. No check above is reported as semantic certification of the protected
published defects.


## Final adjudication — scaffold-final-a-dd56d4fd02dbb1cd

SC accepted. HG escalated on HG-LOCAL-THRESHOLD and HG-CONE-CONVERSE. No batch-1 manifest was changed. The complete current proof-use audit, source locators, exact owner decisions needed, checks, and Phase-3 supplier/consumer repair strategies are in research/phase-2-wave-1-alpha-a-recheck.md. This supersedes earlier page-wide blocking conclusions. Published consumer debt remains open; no published proof was edited. Current owned cross-batch input remains [] after declared and implicit proof-use reconciliation.


## Step-5 authoring

2026-09-08. Current scope is the 17-item A page and four-item B page in the manifest. Earlier HG and page-wide audit notes are historical. Current Step 3 SC verdict is sufficient. Read SC design §30.5 and source discussion §30.8; current plan and manifest agree on IDs, requirements, and statements. Draft content initially absent. No independent review is performed here.

Sources recovered and reread: Touikan author HTML §§3.4–3.5 and cached author PDF §§3.1.1, 3.4–3.5; current PDF pagination differs from old coverage (van Kampen printed pp.40–43, Euler pp.57–61, small cancellation pp.61–67). Lipschutz university-library PDF recovered from /tmp/phase2-source-recovery.RnzVYP/lipschutz.pdf after live endpoints failed; §2 printed pp.37–38, Lemma 4 p.39, §6 pp.41–42, including the p.42 image. Its infinite-order hypothesis is not imported.

### Checkpoint `def-sc-toolkit-symmetrised-relators-and-pieces`

Completed definition and conventions. Exact claim and conventions: Let $X^{\pm1}$ be an alphabet with formal inverses. Length $|u|$ means literal letter length. Fix a set $R$ of nonempty cyclically reduced words, closed under inverses and cyclic rotations, with duplicate words removed. The group is $G=\langle X\mid R\rangle$ in [[def-group-presentation]], and cyclic reduction has the convention of [[def-cyclically-reduced-word]]. Neither $X$ nor $R$ must be finite.  A **piece** is a nonempty word $p$ that is an initial segment of two distinct words $r,s\in R$. The condition $C'(1/6)$ says $|p|<|r|/6$ for each such initial segment of each $r$. Rotating relators gives the identical bound for an overlap based anywhere on a relator. Equal rotations, including equal rotations of a proper power, are one word and do not create a piece.  Symmetrising a collection does not change its normal closure: if $r=uv$, then $vu=u^{-1}ru$ in the free group, and inverses of elements of a normal subgroup remain in it. Thus every added word belongs to the old normal closure; the original words are retained, giving the reverse inclusion. The empty set $R$ is permitted and satisfies the condition vacuously. 

Dependencies: def-group-presentation, def-cyclically-reduced-word. Sources: Touikan §3.5 Definition 3.5.2; convention comparison with Lyndon–Schupp V §10 — https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html. Provenance retained as ai-altered/not-applicable. Contract maps actual rows and boundary cases. Checks pending batch run; no judge stamp. Open local gaps: none identified in this item. Next: next manifest item, then required batch checks.

### Checkpoint `def-sc-toolkit-labelled-planar-disc-diagram`

Completed definition and conventions. Exact claim and conventions: Over the symmetrised presentation of [[def-sc-toolkit-symmetrised-relators-and-pieces]], a **diagram** is a finite connected simply connected combinatorial $2$-complex embedded in the plane. Its $1$-skeleton is a finite graph, allowing loops and parallel edges. Each oriented edge has a letter of $X^{\pm1}$ as label; reversal inverts that letter, as in [[def-alphabet-words-and-reduction]]. Faces are polygonal $2$-cells attached along finite edge walks, each reading a member of $R$. Orienting a face oppositely or changing its starting corner is allowed by symmetrisation. Area is the number of faces.  The **outer boundary walk** follows the unbounded complementary region, with the complex on its right. Choose a starting edge occurrence to obtain a word. A bridge is traversed twice, once in each direction. Length counts occurrences, not distinct edges. At a cut vertex the walk completes the incident excursions in their planar order. The diagram consisting of one vertex has empty boundary and area zero.  A **nonsingular disc diagram** has underlying space a closed topological disc. General diagrams may have cut vertices, bridges and **spurs** (vertices incident with exactly one edge germ). The topological frontier is a set; the outer walk is a parametrised walk and must not be confused with that set. A finite tree is a zero-face diagram. 

Dependencies: def-sc-toolkit-symmetrised-relators-and-pieces, def-alphabet-words-and-reduction. Sources: Touikan §3.4 opening definitions — https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-17.html. Provenance retained as ai-altered/not-applicable. Contract maps actual rows and boundary cases. Checks pending batch run; no judge stamp. Open local gaps: none identified in this item. Next: next manifest item, then required batch checks.

### Checkpoint `thm-sc-toolkit-van-kampen-existence`

Completed 4 written argument rows. Exact claim and conventions: A finite word $w$ is null in the presented group if and only if it is the outer boundary label of a diagram. Boundary spurs are allowed; in particular the statement holds for freely reduced $w$ as an exact word, and also for arbitrary words before free reduction. A diagram with $m$ faces gives a product of $m$ conjugates of oriented relators freely equal to its boundary word. 

Dependencies: def-sc-toolkit-labelled-planar-disc-diagram, prop-normal-closure-is-products-of-conjugates. Sources: Touikan §3.1, Theorem 3.1.7 and the balloon-diagram construction — https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/IntroCGGT.pdf. Provenance retained as ai-altered/ai-altered. Contract maps actual rows and boundary cases. Checks pending batch run; no judge stamp. Open local gaps: none identified in this item. Next: next manifest item, then required batch checks.

### Checkpoint `lem-sc-toolkit-minimal-diagrams-and-cut-vertex-reduction`

Completed 4 written argument rows. Exact claim and conventions: Every null word has a minimum-area diagram. Such a diagram is **reduced**: no adjacent distinct faces form a cancellable pair, meaning that their full boundary words, read from the same oriented common edge with one face orientation reversed, agree literally. Every diagram decomposes along cut vertices into nonsingular disc blocks and bridge blocks. An end disc block meets the remainder in at most one vertex; a boundary arc avoiding that vertex in its interior is a contiguous part of the full outer walk. An end bridge has a spur tip. 

Dependencies: def-sc-toolkit-labelled-planar-disc-diagram, thm-sc-toolkit-van-kampen-existence, thm-well-ordering-principle. Sources: Touikan §3.5 Figure 3.5.1 and nonsingular restriction before Definition 3.5.3 — https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html. Provenance retained as ai-altered/ai-altered. Contract maps actual rows and boundary cases. Checks pending batch run; no judge stamp. Open local gaps: none identified in this item. Next: next manifest item, then required batch checks.

### Checkpoint `def-arc-reduction-and-combinatorial-curvature-of-a-disc-diagram`

Completed definition and conventions. Exact claim and conventions: In a diagram of [[def-sc-toolkit-labelled-planar-disc-diagram]], an **arc** is an edge path whose internal vertices have degree two and whose endpoints are vertices of other degrees. Replace each maximal such path by one edge labelled by its whole word; this is **arc reduction**. Edge lengths are retained as word lengths. Internal arcs have a face on both sides; exterior arcs border the unbounded region. A component that is a whole circle is retained with one marked vertex and one loop, rather than being suppressed to a vertex-free object. In particular use that convention for a one-face disc. A tree reduces to a tree with its spur tips retained. The isolated point is unchanged.  Give each face corner a real angle $\alpha_c$ measured in units of $\pi$. Let $d(f)$ count the edge occurrences around $f$. The link $\operatorname{lk}(v)$ is the finite graph with one vertex for each edge germ at $v$ and one edge for each incident face corner. Loop edges have two germs. Put $\chi(\operatorname{lk}(v))=V_{\operatorname{lk}(v)}-E_{\operatorname{lk}(v)}$ and  $$k(f)=\sum_{c\text{ at }f}\alpha_c-(d(f)-2),\qquad k(v)=2-\chi(\operatorname{lk}(v))-\sum_{c\text{ at }v}\alpha_c.$$  All incidences are counted with multiplicity. An interior disc vertex has circular link of Euler characteristic zero; an ordinary boundary vertex has interval link of Euler characteristic one. A spur tip has singleton link, no corners, and curvature one. The isolated point has empty link and curvature two. These angles are combinatorial data; they need not be geometrically realizable. 

Dependencies: def-sc-toolkit-labelled-planar-disc-diagram. Sources: Touikan §3.4.2 curvature formulas; §3.5.1 arc reduction — https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-17.html. Provenance retained as ai-altered/not-applicable. Contract maps actual rows and boundary cases. Checks pending batch run; no judge stamp. Open local gaps: none identified in this item. Next: next manifest item, then required batch checks.

### Checkpoint `lem-internal-arcs-of-a-reduced-small-cancellation-diagram-are-pieces`

Completed 2 written argument rows. Exact claim and conventions: The nonempty word on an internal arc between two noncancelling faces of a reduced diagram is a piece. Consequently in a $C'(1/6)$ diagram its length is strictly less than one sixth of each adjacent face perimeter. 

Dependencies: def-sc-toolkit-symmetrised-relators-and-pieces, lem-sc-toolkit-minimal-diagrams-and-cut-vertex-reduction, def-arc-reduction-and-combinatorial-curvature-of-a-disc-diagram. Sources: Touikan §3.5 Figure 3.5.1 and following paragraph — https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html. Provenance retained as ai-altered/ai-altered. Contract maps actual rows and boundary cases. Checks pending batch run; no judge stamp. Open local gaps: none identified in this item. Next: next manifest item, then required batch checks.

### Checkpoint `lem-c-prime-one-sixth-interior-faces-have-at-least-seven-arcs`

Completed 2 written argument rows. Exact claim and conventions: Every interior face of an arc-reduced reduced $C'(1/6)$ diagram has at least seven incident arcs, counted with multiplicity. 

Dependencies: lem-internal-arcs-of-a-reduced-small-cancellation-diagram-are-pieces. Sources: Touikan §3.5.1 paragraph preceding Definition 3.5.3 — https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html. Provenance retained as ai-altered/ai-altered. Contract maps actual rows and boundary cases. Checks pending batch run; no judge stamp. Open local gaps: none identified in this item. Next: next manifest item, then required batch checks.

### Checkpoint `lem-euler-curvature-identity-for-an-arc-reduced-disc-diagram`

Completed 4 written argument rows. Exact claim and conventions: For a finite diagram $D$ with arbitrary corner angles and with the arc-reduction conventions below,  $$\sum_v k(v)+\sum_f k(f)=2(V-E+F)=2.$$  This includes zero-face trees, the isolated point, and spurs, with all boundary and link incidences counted with multiplicity. 

Dependencies: def-arc-reduction-and-combinatorial-curvature-of-a-disc-diagram. Sources: Touikan Lemmas 3.4.2–3.4.3, Corollary 3.4.5 and Theorem 3.4.6 — https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-17.html. Provenance retained as ai-altered/ai-altered. Contract maps actual rows and boundary cases. Checks pending batch run; no judge stamp. Open local gaps: none identified in this item. Next: next manifest item, then required batch checks.

### Checkpoint `lem-boundary-spur-or-at-most-three-shell-from-curvature`

Completed 5 written argument rows. Exact claim and conventions: A reduced $C'(1/6)$ diagram other than a point has a boundary spur or an exposed face whose exterior boundary is connected and whose complementary path has at most three internal arcs. A one-face disc is a zero-shell. For a singular diagram one may take an end disc block, and choose the exterior arc so its interior avoids that block's attachment vertex; consequently it is contiguous in the full outer walk. In a nonsingular multi-face disc there are at least two distinct exposed faces with at most three internal arcs. 

Dependencies: lem-sc-toolkit-minimal-diagrams-and-cut-vertex-reduction, lem-c-prime-one-sixth-interior-faces-have-at-least-seven-arcs, lem-euler-curvature-identity-for-an-arc-reduced-disc-diagram. Sources: Touikan Proposition 3.5.5, complete proof — https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html. Provenance retained as ai-altered/ai-altered. Contract maps actual rows and boundary cases. Checks pending batch run; no judge stamp. Open local gaps: none identified in this item. Next: next manifest item, then required batch checks.

### Checkpoint `thm-greendlinger-shell-existence-from-the-curvature-count`

Completed 3 written argument rows. Exact claim and conventions: Let $w$ be a nonempty freely reduced null word over a symmetrised $C'(1/6)$ presentation. Some cyclic reading of its boundary contains a contiguous segment $s$ of a defining face word $r$ with $|s|>|r|/2$. 

Dependencies: lem-boundary-spur-or-at-most-three-shell-from-curvature, lem-internal-arcs-of-a-reduced-small-cancellation-diagram-are-pieces. Sources: Touikan Corollary 3.5.8, with singular-diagram obligation carried from the preceding lemma — https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html. Provenance retained as ai-altered/ai-altered. Contract maps actual rows and boundary cases. Checks pending batch run; no judge stamp. Open local gaps: none identified in this item. Next: next manifest item, then required batch checks.

### Checkpoint `def-minimal-cyclic-power-diagram-and-relator-root`

Completed definition and conventions. Exact claim and conventions: Use the symmetrised presentation of [[def-sc-toolkit-symmetrised-relators-and-pieces]]. Let $g\ne1$ have finite order in the quotient. Choose a shortest freely reduced word $z$ among all words representing conjugates of $g$. Such lengths form a nonempty subset of the natural numbers, so a minimum is attained by [[thm-well-ordering-principle]]. The length is positive since the empty word represents the identity. The word $z$ is cyclically reduced: if $z=a u a^{-1}$, conjugating by $a^{-1}$ would give the shorter representative $u$.  Let $n$ be the least positive integer with $g^n=1$, using powers in [[def-group-power]]. The word $z^n$ is null. Its diagrams exist by [[thm-sc-toolkit-van-kampen-existence]]; choose one of least area, again using well-ordering. This is a **minimal cyclic power diagram** for this choice of $z$. Since $g\ne1$, $n\ge2$. No simultaneous choice for all conjugacy classes is required.  A **relator root** is a nonempty word $v$ which is not literally a proper power and for which a cyclic rotation $r$ of a defining relator satisfies $r=v^m$ literally, for some integer $m\ge1$. The root is a word; its image in the quotient is a separate object. A shortest nonempty word whose positive power equals a given relator is a root: a proper-power decomposition would give a still shorter such word. Existence follows since the relator itself is a candidate. Literal powers and quotient-group powers must be distinguished. 

Dependencies: def-sc-toolkit-symmetrised-relators-and-pieces, thm-sc-toolkit-van-kampen-existence, def-group-power, thm-well-ordering-principle. Sources: Lipschutz (1964), §2 and §6; minimum-length choices expanded locally — http://lib.ysu.am/articles_art/6b5e2e5df94354a3efa7529c0c38c956.pdf. Provenance retained as ai-altered/not-applicable. Contract maps actual rows and boundary cases. Checks pending batch run; no judge stamp. Open local gaps: none identified in this item. Next: next manifest item, then required batch checks.

### Checkpoint `lem-sc-toolkit-commuting-positive-words-have-a-common-root`

Completed 2 written argument rows. Exact claim and conventions: If nonempty finite words $x,y$ satisfy $xy=yx$ literally, then $x=c^a$ and $y=c^b$ for a nonempty word $c$ and positive integers $a,b$. Here positive powers mean repetitions; inverse alphabet letters are allowed, and commutation only in a quotient group is not enough. 

Dependencies: def-alphabet-words-and-reduction. Sources: Lipschutz (1964), §6 opening periodic-word argument; commuting-word input expanded locally — http://lib.ysu.am/articles_art/6b5e2e5df94354a3efa7529c0c38c956.pdf. Provenance retained as ai-altered/ai-altered. Contract maps actual rows and boundary cases. Checks pending batch run; no judge stamp. Open local gaps: none identified in this item. Next: next manifest item, then required batch checks.

### Checkpoint `lem-sc-toolkit-periodic-relator-overlap-is-a-piece`

Completed 2 written argument rows. Exact claim and conventions: Let $r=x^m a$ be a literal cyclically reduced relator word, with $x\ne\varnothing$, $m\ge2$, and $a$ possibly empty. If $xa\ne ax$ literally, then $x^{m-1}$ is a piece. If $xa=ax$ and $a$ is nonempty, $x$ and $a$ are positive powers of a common nonempty word, and so is $r$. If $a$ is empty, $r$ is already a power of $x$. 

Dependencies: def-sc-toolkit-symmetrised-relators-and-pieces, lem-sc-toolkit-commuting-positive-words-have-a-common-root. Sources: Lipschutz (1964), §6 opening remark, printed p.41 — http://lib.ysu.am/articles_art/6b5e2e5df94354a3efa7529c0c38c956.pdf. Provenance retained as ai-altered/ai-altered. Contract maps actual rows and boundary cases. Checks pending batch run; no judge stamp. Open local gaps: none identified in this item. Next: next manifest item, then required batch checks.

### Checkpoint `def-sc-toolkit-cyclically-dehn-reduced-word`

Completed definition and conventions. Exact claim and conventions: Over the symmetrised presentation of [[def-sc-toolkit-symmetrised-relators-and-pieces]], a word $w$ is **Dehn-reduced** if it is freely reduced and has no literal contiguous segment $s$ that is an initial segment of some $r\in R$ with $|s|>|r|/2$. Symmetrisation permits the relator segment to start at any corner. A word is **cyclically Dehn-reduced** if every cyclic rotation of it is Dehn-reduced. Its rotations have the same finite length; the empty word has only itself as a rotation and satisfies both conditions. Equality $|s|=|r|/2$ is permitted. These conditions concern literal subwords, not equalities in the presented group. 

Dependencies: def-sc-toolkit-symmetrised-relators-and-pieces. Sources: Lipschutz (1964), §2, printed pp.37–38 — http://lib.ysu.am/articles_art/6b5e2e5df94354a3efa7529c0c38c956.pdf. Provenance retained as ai-altered/not-applicable. Contract maps actual rows and boundary cases. Checks pending batch run; no judge stamp. Open local gaps: none identified in this item. Next: next manifest item, then required batch checks.

### Checkpoint `lem-sc-toolkit-periodic-word-square-alternative`

Completed 10 written argument rows. Exact claim and conventions: Let $w$ be a nonempty cyclically Dehn-reduced word in a symmetrised $C'(1/6)$ presentation. At least one of the following holds:  - a cyclic rotation of $w$ and a defining relator are positive powers of a common nonempty word; - every positive power of $w$ is Dehn-reduced; - $w^2$ is conjugate in the presented group to a nonempty word $y$ whose every positive power is Dehn-reduced.  The relator set may be infinite. 

Dependencies: def-sc-toolkit-cyclically-dehn-reduced-word, lem-sc-toolkit-periodic-relator-overlap-is-a-piece. Sources: Lipschutz (1964), Lemma 4 and complete §6 proof, printed pp.39,41–42; common-root exceptions retained locally — http://lib.ysu.am/articles_art/6b5e2e5df94354a3efa7529c0c38c956.pdf. Provenance retained as ai-altered/ai-altered. Contract maps actual rows and boundary cases. Checks pending batch run; no judge stamp. Open local gaps: none identified in this item. Next: next manifest item, then required batch checks.

### Checkpoint `lem-minimal-power-diagram-has-a-periodic-boundary-shell`

Completed 3 written argument rows. Exact claim and conventions: For a shortest representative $z$ of a nonidentity finite-order conjugacy class in a symmetrised $C'(1/6)$ presentation, a cyclic rotation of $z$ and a cyclic conjugate of a defining relator are positive powers of a common nonempty word. 

Dependencies: thm-greendlinger-shell-existence-from-the-curvature-count, def-minimal-cyclic-power-diagram-and-relator-root, lem-sc-toolkit-periodic-word-square-alternative. Sources: Lipschutz (1964), §6, printed pp.41–42; local torsion deduction retaining the common-root alternative — http://lib.ysu.am/articles_art/6b5e2e5df94354a3efa7529c0c38c956.pdf. Provenance retained as ai-altered/ai-altered. Contract maps actual rows and boundary cases. Checks pending batch run; no judge stamp. Open local gaps: none identified in this item. Next: next manifest item, then required batch checks.

### Checkpoint `thm-c-prime-one-sixth-torsion-elements-come-from-relator-roots`

Completed 2 written argument rows. Exact claim and conventions: In a group presented by a symmetrised $C'(1/6)$ set of nonempty cyclically reduced free words, every nonidentity finite-order element is conjugate to a power of a root of a cyclic conjugate of a defining relator. Relators that are proper powers are permitted; no assertion about presentations over arbitrary free-product factors is made. 

Dependencies: lem-minimal-power-diagram-has-a-periodic-boundary-shell, def-minimal-cyclic-power-diagram-and-relator-root. Sources: Lipschutz (1964), §6 periodic-word proof, with the local torsion deduction — http://lib.ysu.am/articles_art/6b5e2e5df94354a3efa7529c0c38c956.pdf. Provenance retained as ai-altered/ai-altered. Contract maps actual rows and boundary cases. Checks pending batch run; no judge stamp. Open local gaps: none identified in this item. Next: next manifest item, then required batch checks.

### Checkpoint `ex-curvature-ledger-for-a-two-cell-diagram`

Completed 2 written argument rows. Exact claim and conventions: Take two vertices $u,v$ and three disjoint-in-the-interior arcs $e_0,e_1,e_2$ from $u$ to $v$, in planar order. Fill the regions between $e_0,e_1$ and between $e_1,e_2$ by two faces. This is a disc with $V=2,E=3,F=2$. Give every face corner angle $1/2$ in units of $\pi$. Both vertex curvatures are zero and both face curvatures are one.  One possible labelling is $a,b,c$ on the three arcs: the face words are $ab^{-1}$ and $bc^{-1}$, up to orientation. This example is a curvature computation, not a $C'(1/6)$ claim. 

Dependencies: def-arc-reduction-and-combinatorial-curvature-of-a-disc-diagram, lem-euler-curvature-identity-for-an-arc-reduced-disc-diagram. Sources: Touikan Theorem 3.4.6; explicit two-cell specialization — https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-17.html. Provenance retained as ai-altered/ai-altered. Contract maps actual rows and boundary cases. Checks pending batch run; no judge stamp. Open local gaps: none identified in this item. Next: next manifest item, then required batch checks.

### Checkpoint `ex-a-three-shell-after-arc-reduction`

Completed 2 written argument rows. Exact claim and conventions: A four-arc face has one exterior arc and three internal arcs. If its perimeter is $N$ and the internal lengths $a,b,c$ are each less than $N/6$, its exterior length exceeds $N/2$. Concretely use $N=19$ and $a=b=c=3$, so the exterior arc has length $10$.  This is a local shell length ledger. It does not assert a globally labelled $C'(1/6)$ presentation realizing these lengths. 

Dependencies: def-arc-reduction-and-combinatorial-curvature-of-a-disc-diagram, lem-boundary-spur-or-at-most-three-shell-from-curvature. Sources: Touikan Definition 3.5.3 and Figure 3.5.4 — https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html. Provenance retained as ai-altered/ai-altered. Contract maps actual rows and boundary cases. Checks pending batch run; no judge stamp. Open local gaps: none identified in this item. Next: next manifest item, then required batch checks.

### Checkpoint `ex-relator-root-versus-proper-power`

Completed 3 written argument rows. Exact claim and conventions: For the symmetrisation of $a^7$, the root is $a$, equal cyclic rotations do not create pieces, and $\langle a\mid a^7\rangle$ is cyclic of exact order seven. 

Dependencies: def-sc-toolkit-symmetrised-relators-and-pieces, def-minimal-cyclic-power-diagram-and-relator-root. Sources: Lipschutz (1964), §6 common-root exception; cyclic-group example computed locally — http://lib.ysu.am/articles_art/6b5e2e5df94354a3efa7529c0c38c956.pdf. Provenance retained as ai-altered/ai-altered. Contract maps actual rows and boundary cases. Checks pending batch run; no judge stamp. Open local gaps: none identified in this item. Next: next manifest item, then required batch checks.

### Checkpoint `cex-a-boundary-spur-when-free-reduction-is-omitted`

Completed 2 written argument rows. Exact claim and conventions: Every nonempty null boundary word of a diagram over a $C'(1/6)$ presentation has a shell, even without requiring free reduction. 

Dependencies: def-sc-toolkit-labelled-planar-disc-diagram, def-arc-reduction-and-combinatorial-curvature-of-a-disc-diagram. Sources: Touikan Lemma 3.4.3, zero-face case — https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-17.html. Provenance retained as ai-altered/ai-altered. Contract maps actual rows and boundary cases. Checks pending batch run; no judge stamp. Open local gaps: none identified in this item. Next: next manifest item, then required batch checks.

### Page checkpoint

Completed draft pages `small-cancellation-disc-diagrams-and-torsion-toolkit` and `small-cancellation-disc-diagrams-and-torsion-toolkit-examples` at their category/id paths, retaining all 21 IDs and the 17/4 split. No source or promised result was removed. The singular argument expands the source using two positive-curvature shells, each contributing at most one, to avoid the attachment explicitly. Periodic-word comparisons include all four join cases and one-block endpoint cases. Next: read back and run required checks.

### Checkpoint `thm-sc-toolkit-van-kampen-existence`

Completed 4 written argument rows. Exact claim and conventions: A finite word $w$ is null in the presented group if and only if it is the outer boundary label of a diagram. Boundary spurs are allowed; in particular the statement holds for freely reduced $w$ as an exact word, and also for arbitrary words before free reduction. A diagram with $m$ faces gives a product of $m$ conjugates of oriented relators freely equal to its boundary word. 

Dependencies: def-sc-toolkit-labelled-planar-disc-diagram, prop-normal-closure-is-products-of-conjugates. Sources: Touikan §3.1, Theorem 3.1.7 and the balloon-diagram construction — https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/IntroCGGT.pdf. Provenance retained as ai-altered/ai-altered. Contract maps actual rows and boundary cases. Checks pending batch run; no judge stamp. Open local gaps: none identified in this item. Next: next manifest item, then required batch checks.

### Checkpoint `lem-boundary-spur-or-at-most-three-shell-from-curvature`

Completed 5 written argument rows. Exact claim and conventions: An **$i$-shell** is a face with one exterior arc and a complementary path of exactly $i$ internal arcs. A reduced $C'(1/6)$ diagram other than a point has a boundary spur or an exposed face whose exterior boundary is connected and whose complementary path has at most three internal arcs. A one-face disc is a zero-shell. For a singular diagram one may take an end disc block, and choose the exterior arc so its interior avoids that block's attachment vertex; consequently it is contiguous in the full outer walk. In a nonsingular multi-face disc there are at least two distinct exposed faces with at most three internal arcs. 

Dependencies: lem-sc-toolkit-minimal-diagrams-and-cut-vertex-reduction, lem-c-prime-one-sixth-interior-faces-have-at-least-seven-arcs, lem-euler-curvature-identity-for-an-arc-reduced-disc-diagram. Sources: Touikan Proposition 3.5.5, complete proof — https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html. Provenance retained as ai-altered/ai-altered. Contract maps actual rows and boundary cases. Checks pending batch run; no judge stamp. Open local gaps: none identified in this item. Next: next manifest item, then required batch checks.

### Checkpoint `thm-greendlinger-shell-existence-from-the-curvature-count`

Completed 3 written argument rows. Exact claim and conventions: Let $w$ be a nonempty freely reduced null word over a symmetrised $C'(1/6)$ presentation. Some cyclic reading of its boundary contains a contiguous segment $s$ of a defining face word $r$ with $|s|>|r|/2$. 

Dependencies: lem-boundary-spur-or-at-most-three-shell-from-curvature, lem-internal-arcs-of-a-reduced-small-cancellation-diagram-are-pieces. Sources: Touikan Corollary 3.5.8, with singular-diagram obligation carried from the preceding lemma — https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html. Provenance retained as ai-altered/ai-altered. Contract maps actual rows and boundary cases. Checks pending batch run; no judge stamp. Open local gaps: none identified in this item. Next: next manifest item, then required batch checks.

### Checkpoint `lem-sc-toolkit-periodic-word-square-alternative`

Completed 10 written argument rows. Exact claim and conventions: Let $w$ be a nonempty cyclically Dehn-reduced word in a symmetrised $C'(1/6)$ presentation. At least one of the following holds:  - a cyclic rotation of $w$ and a defining relator are positive powers of a common nonempty word; - every positive power of $w$ is Dehn-reduced; - $w^2$ is conjugate in the presented group to a nonempty word $y$ whose every positive power is Dehn-reduced.  The relator set may be infinite. 

Dependencies: def-sc-toolkit-cyclically-dehn-reduced-word, lem-sc-toolkit-periodic-relator-overlap-is-a-piece. Sources: Lipschutz (1964), Lemma 4 and complete §6 proof, printed pp.39,41–42; common-root exceptions retained locally — http://lib.ysu.am/articles_art/6b5e2e5df94354a3efa7529c0c38c956.pdf. Provenance retained as ai-altered/ai-altered. Contract maps actual rows and boundary cases. Checks pending batch run; no judge stamp. Open local gaps: none identified in this item. Next: next manifest item, then required batch checks.

### Dependency and citation reconciliation

Added the direct definition dependency `lem-sc-toolkit-periodic-word-square-alternative -> def-sc-toolkit-symmetrised-relators-and-pieces` in draft and manifest, because its final Proof steps 1.1, 4.1 and 5.1 use the strict piece bound, not merely Dehn reduction. Added exact Fact F3 and its contract quotations/uses. This is an intra-batch earlier supplier; consumer input remains `[]`. The protected plan was not edited; its item dependency snapshot still lacks this now-explicit redundant edge, for Alpha/serial-writer reconciliation. No new prerequisite page or scope change is needed. Removed the unrecovered Lyndon–Schupp comparison from the first definition's source title and added the actually reread Lipschutz §2 reference. Restored complete source-claim quotations after phase renumbering; an opening paragraph alone would not support the piece or periodic alternative fact. No source was dropped.

### Final Step-5 record

**Completed pages:** `library/group-theory/small-cancellation-disc-diagrams-and-torsion-toolkit.md` and `library/group-theory/small-cancellation-disc-diagrams-and-torsion-toolkit-examples.md`.

**Completed item IDs (current manifest, none removed):**

- `def-sc-toolkit-symmetrised-relators-and-pieces`
- `def-sc-toolkit-labelled-planar-disc-diagram`
- `thm-sc-toolkit-van-kampen-existence`
- `lem-sc-toolkit-minimal-diagrams-and-cut-vertex-reduction`
- `def-arc-reduction-and-combinatorial-curvature-of-a-disc-diagram`
- `lem-internal-arcs-of-a-reduced-small-cancellation-diagram-are-pieces`
- `lem-c-prime-one-sixth-interior-faces-have-at-least-seven-arcs`
- `lem-euler-curvature-identity-for-an-arc-reduced-disc-diagram`
- `lem-boundary-spur-or-at-most-three-shell-from-curvature`
- `thm-greendlinger-shell-existence-from-the-curvature-count`
- `def-minimal-cyclic-power-diagram-and-relator-root`
- `lem-sc-toolkit-commuting-positive-words-have-a-common-root`
- `lem-sc-toolkit-periodic-relator-overlap-is-a-piece`
- `def-sc-toolkit-cyclically-dehn-reduced-word`
- `lem-sc-toolkit-periodic-word-square-alternative`
- `lem-minimal-power-diagram-has-a-periodic-boundary-shell`
- `thm-c-prime-one-sixth-torsion-elements-come-from-relator-roots`
- `ex-curvature-ledger-for-a-two-cell-diagram`
- `ex-a-three-shell-after-arc-reduction`
- `ex-relator-root-versus-proper-power`
- `cex-a-boundary-spur-when-free-reduction-is-omitted`

All five definitions and all sixteen proof-bearing items are authored. The contract has an entry for each of the 21 IDs, exactly one mapping for every numbered argument row, complete local source-statement excerpts with actual uses, and all eight boundary dispositions per item. The earlier per-item checkpoint numbers, if mentioned in prose, precede canonical renumbering; the final item and proof-contract row identifiers control. Canonical repairs changed phase numbering and the order of independent rows, not the mathematical argument. Final readback covered the complete periodic-word and shell arguments after repair.

**Source/provenance decisions:** All statements retain `ai-altered`; definitions retain `proof: not-applicable` and proof-bearing items `proof: ai-altered`. No generated statement is a supplier, no generation field is asserted, no recorded-not-proved supplier is used, and no forward or well-definedness edge was introduced. The source-based local torsion deduction is not falsely attributed as Lipschutz's stated Lemma 4. Its infinite-order hypothesis is replaced by the proved common-root alternative. No arbitrary-family choice axiom is used: lengths/areas attain minima and overlap lengths lie in a finite integer interval. No judge, audit, delegated verification, or other stamp was written.

**Source-to-argument locators:**

- Touikan, complete author PDF §3.1.1, printed pp.40–43, Theorem 3.1.7 and preceding construction: van Kampen Proof 1.1 supplies the exact peeling identity and factor count; 1.2 constructs balloons; 2.1 handles the first spherical closure; 3.1 restores an arbitrary boundary spelling by spurs. The zero-factor case is retained.
- Touikan §3.5 Figure 3.5.1: minimal-diagram Proof 2.1 performs cancelling-pair surgery with outer occurrences retained. The local finite block-tree argument is Proof 1.2 and 3.1.
- Touikan §3.4 Lemmas 3.4.2–3.4.3 and Theorem 3.4.6: Euler Proof 1.1 double-counts germs/corners; 1.2 and 2.1 establish Euler characteristic by face/edge collapses; 3.1 separately checks spur curvature. Exact short excerpt: “simply a double counting argument”. No structural check supplies this equality.
- Touikan §3.5.1 before Definition 3.5.3: interior-arcs and seven-arcs arguments, respectively Proof 1.1/2.1 and 1.1/2.1. Exact short excerpt: “internal 2-cells must have at least 7 sides”. Each bound is derived locally using distinct symmetrised words.
- Touikan Proposition 3.5.5 and general-diagram paragraph after Definition 3.5.9 (current PDF printed pp.64–66): shell Proof 1.1–3.1 computes the numerical curvature bounds. Proof 4.1–5.1 supplies a full attachment argument through two shells rather than treating the source's brief semi-exterior observation as a proof. Greendlinger Proof 1.1–3.1 then roots the block tree at the basepoint and sums strict length inequalities.
- Lipschutz §2, printed pp.37–38, controls distinct-relator and fully-reduced conventions; §6 opening paragraph, p.41, motivates the periodic-piece lemma, whose two branches are proved by literal cancellation. The commuting-word recursion is fully proved locally.
- Lipschutz Lemma 4 statement p.39 and entire §6 pp.41–42, with the p.42 image checked: periodic-square Proof 1.1 retains the common-root exception, 2.1 maximizes over bounded integer lengths, 3.1 checks empty blocks and joins, 4.1 derives all length bounds, 5.1 verifies the quotient identity, and 6.1–7.1 expands both whole-block cases, both crossing cases and the single-block endpoint case. Exact short excerpt: “There are four possibilities”. The original Lemma 4 hypothesis is “of infinite order”; the local lemma does not assume or infer that hypothesis.
- The final minimal-power lemma Proof 1.2 puts a cyclic segment of a null power into a double literal power; Proof 2.1 excludes both non-root alternatives. The torsion theorem Proof 2.1 extracts a primitive word root by least positive length. These are the local deductions, not additional theorems quoted from the source.

**Checks actually run:**

- Required explicit-path precheck command: `node tools/tsx-run.mjs tools/precheck.mts` followed by all 21 `items/ID.md` paths enumerated above. First direct run required canonical repairs for all 16 proof-bearing items; those repairs were adopted and contracts reconciled. Final run: exit 0, **16 checked, 0 failing**. Definitions are skipped by that checker. An initial nested subprocess wrapper exited 1 without diagnostic output and was replaced by the direct explicit-path invocation.
- `node tools/validate-plan.mjs` initially returned its usage requirement for a plan argument. Correct invocation `node tools/validate-plan.mjs research/plan-spec.json --repo .` was run and rerun: final exit 0, acyclic and consistent declared order; 930 pages with item lists, 683 without item lists. These are structural results, not mathematical certification. The intra-batch extra dependency recorded above remains a protected plan-snapshot reconciliation, not a cycle or scope failure.
- `node tools/content-policy.mjs research/phase-2-wave-1-batch-1.pages.json`: final exit 0, **21 scoped items, 0 errors, 0 warnings**.
- `node tools/proof-contract.mjs research/phase-2-wave-1-batch-1.proof-contracts.json --strict`: final exit 0, **21/21 checked, 0 errors, 0 warnings**.
- `node tools/rendercheck.mjs` with precisely the 21 item and two page paths: final exit 0, **23 files**, YAML and all math spans parse under the actual renderer parsers. An earlier `--help` probe unexpectedly ran a repository-wide read-only check because this tool has no help mode; it found 13 unrelated errors in Hall–Mal'cev and PDE draft formulas. Those files are outside this batch and were not edited.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-wave-1`: exit 0, refreshed and deduplicated after the dependency edit. The owned consumer input is `[]` because every actual item supplier is in this batch or on an earlier published page. The unified ledger was refreshed only through its mandated tool.

**Unresolved mathematical/scope obligations:** No local mathematical gap or proposed narrowing/removal is identified in this authored pair. No missing required input remains; failed live paper retrieval was recovered from the full cached university-library PDF. Alpha/serial plan owner should reconcile the additional explicit intra-batch piece-definition edge noted above; no prerequisite page or new result is requested. Historical published-consumer debt remains separate and is not claimed repaired or independently re-reviewed by this Step-5 author. All owned output remains draft. Next action belongs to the workflow's review stage; no state transition was performed here.
