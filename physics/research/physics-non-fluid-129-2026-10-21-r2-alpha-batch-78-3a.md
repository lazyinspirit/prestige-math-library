# Batch 78 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`. Group: `batch-78`.

Scope has no touched/page/reader/refuter obligations; the decisions array is empty. All three required risk reviews are complete, in dependency order. Reader and refuter findings arrays are empty. Pre/post snapshots have identical item, contract and manifest fingerprints; current-carrier checks confirm that only the two documented diagram repairs changed item bytes after those snapshots.

## Completed level 1 review

`def-qftx-finite-flat-connection-groupoid`: reviewed current Definition and all four proof steps with `def-qftx-finite-groupoid-integration` and current `thm-qftx-cw-fundamental-group-presentation` (batch 42), including the latter's mathematical prerequisite statements. Closed attaching paths retain the tree/base paths when evaluating unnormalized edge labels. Gauge telescoping preserves flatness; the action law and finite orbit/stabilizer count give the stated cardinality. Single-vertex, trivial-group, disconnected and empty-complex cases agree. No arbitrary choice, analytic integral or empirical assumption is used. Complete Alpha risk review recorded in the owning contract; no content repair.

Sources actually opened: Freed–Quinn, §2 equations (2.1)–(2.3), Lemma 2.4, https://www.math.ru.nl/~mueger/TQFT/FQ.pdf (PDF pages 8–10); Hatcher, Propositions 1.26 and 1A.2, https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf (printed pages 50–51 and 84–85, PDF pages 59–60 and 93–94). The existing Hatcher locators call printed page numbers PDF page numbers; proposition numbers locate the intended results unambiguously. Batch-42 supplier is read-only here; this pagination observation is reported for owner maintenance, without asserting a proof defect.

Initial check: `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-78.proof-contracts.json` exited 0, reporting one HIGH and two CRITICAL items, nine total.

Level 1 review completed before proceeding to level 2.

## Completed level 2 review

`thm-qftx-finite-bf-topological-invariance`: reviewed Statement, steps 1.1–6.1, all five exact cited suppliers and contract citation/boundary rows. Root-one normalization is unique, normalized edge assignments correspond to representations in both directions, and constant vertex gauges give exactly their conjugation arrows. Inverse path holonomy respects the explicitly traversal-first loop product. For a connecting path gamma, its reverse holonomy gives the stated conjugation and the gauge transformation formula verifies naturality. The root-one gauge count gives the connected denominator; component products preserve automorphisms and empty K gives 1. Point, trivial-group and nonfree stabilizer cases check. Complete Alpha risk review recorded; no content repair.

Audit observation for owner: the level-1 definition contract's `boundaries[case=zero]` says a one-vertex complex has one flat assignment. This requires the additional no-1-cells condition already present in its finite-check row; a circle with one vertex and one edge has |G| flat assignments. The actual Definition and proof do not make that assertion. This ancillary worksheet sentence is outside the routed carrier decisions and is retained for owner correction; it does not undermine the reviewed groupoid construction.

Level 2 review completed before proceeding to level 4.

## Completed level 4 review and local repair decisions

`thm-qftx-finite-groupoid-gluing`: reviewed Statement, steps 1.1–3.1, all seven dependencies, complete Fubini/descent arguments and both diagrams. Descent extends boundary gauges by identity on interior vertices; compatible gauge pairs on global objects glue uniquely. Fubini counts automorphism image and kernel factors and identifies the pullback fibers. Cylinder projections and inclusions are pointed homotopy inverses; restriction naturality identifies the cylinder span with identity. Product groupoids give tensor products, including the empty unit. Orientation reversal preserves fixed edge directions and transposes the span; real kernel coefficients commute with pointwise conjugation. The closed amplitude follows from the reviewed representation groupoid. Empty boundary, empty union, d=1, trivial G and stabilizers check. Complete Alpha risk review recorded.

The mandatory diagram review found an error in both illustrations despite the empty reader/refuter findings: the upper-right object was the homotopy pullback but its arrow labelled `pr_2` landed in the boundary groupoid rather than a factor. Moreover, a square with an equivalence across its top is not this gluing pullback square in general. For example, gluing two 2-disks along a circle gives bulk groupoids equivalent to BG and boundary representation groupoid with multiple conjugacy classes for nontrivial G; disk-to-circle restriction is not an equivalence. The old square therefore could not have the claimed universal property. The valid square has the global groupoid upper left, piece M1 upper right, piece M2 lower left, and boundary lower right. Its comparison to the homotopy pullback is exactly the proved descent equivalence.

Local repair decisions (these are new diagram/audit discoveries, not additional frozen routed obligations):

<a id="diagram-descent"></a>

- `diagram-descent`: `accepted_repair`, `repair_confidence: 1`, defect `physics-non-fluid-129-2026-10-21-r2-3a-batch-78-descent-diagram`. Replaced the diagram and its explanatory paragraph in `lem-qftx-finite-groupoid-gluing-descent`; Statement, proof and prerequisites unchanged.
<a id="diagram-gluing"></a>

- `diagram-gluing`: `accepted_repair`, `repair_confidence: 1`, defect `physics-non-fluid-129-2026-10-21-r2-3a-batch-78-gluing-diagram`. Applied the same correction in `thm-qftx-finite-groupoid-gluing`; Statement, proof and prerequisites unchanged.
<a id="zero-worksheet"></a>

- `zero-worksheet`: `accepted_repair`, `repair_confidence: 1`, defect `physics-non-fluid-129-2026-10-21-r2-3a-batch-78-zero-worksheet`. Corrected the ancillary zero-boundary sentence to require no 1-cells, agreeing with the already correct finite-check row. This resolves the earlier audit observation locally; no Definition change.

No public Statement/Definition or physical interface changed, so no consumer interface propagation is triggered. No material proof rewrite or existing judge record is involved. Manifests and derivation/citation contracts remain applicable. Existing source-hash fields in historical boundary worksheets are retained as their genuine provenance; they are not new acceptance hashes. All content is mathematics: the finite untwisted model supplies neither empirical evidence nor a continuous-group or gravity theorem.

Additional source reading: Freed–Quinn §2 through Theorem 2.13 and its proof, equations (2.6)–(2.18), PDF pages 10–12. The source permits a cocycle generally; only its zero-cocycle case supports the unphased local convention. No claim of reading Moore–Saxena, Dijkgraaf–Witten or Baez in this adjudication is made; the local proofs and the directly opened Freed–Quinn/Hatcher passages suffice for these deductions. Earlier reader/refuter source-reading claims are preserved as their evidence, not adopted as fresh reading attestations.

## Final checks and handoff

All commands below exited 0 on the final current files:

- `node tools/tsx-run.mjs tools/physics-support/precheck.mts items/lem-qftx-finite-groupoid-gluing-descent.md items/thm-qftx-finite-groupoid-gluing.md`: 2 checked, 0 failing. An initial direct Node invocation could not load `.mts`; the supported wrapper resolved that invocation issue.
- `node tools/physics-support/rendercheck.mjs items/lem-qftx-finite-groupoid-gluing-descent.md items/thm-qftx-finite-groupoid-gluing.md`: 2 files pass YAML/math parsing. This is not a separate TikZ compilation claim; diagram arrows, types and conventions were checked against the definitions and descent proof.
- `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-78.proof-contracts.json --strict`: 9/9 checked, 0 errors, 0 warnings.
- `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-78.proof-contracts.json --require-reviewed`: 9 items, 0 errors; all three HIGH/CRITICAL entries have specific complete Alpha reviews.
- `node tools/physics-support/proof-layout.mjs items/lem-qftx-finite-groupoid-gluing-descent.md items/thm-qftx-finite-groupoid-gluing.md`: 2 items, 10 steps, 0 defects. Run once after final item edits; no later item formatter or edit.
- Direct JSON/SHA256 checks confirm identical pre/post snapshot item/contract/manifest/page maps; the only current item differences are the two diagram repairs. All six opened imported supplier files match their import pins. JSON decisions shape matches the empty frozen obligation inventory.
- Defect-ledger append tool recorded three fixed nonfatal rows at `caught_at_stage: 3a-adjudicate`, with confidence 1 and references to the local report decisions, and regenerated its Markdown view. No reader/refuter finding or frozen obligation was invented to account for these new local discoveries.

Reviewed all nine batch carriers as risk-review or dependency context, both current A/B pages, and the exact mathematical supplier statements listed above. The example's S3 and abelian T3 calculations agree with the local presentation and cardinality results. The five existing cross-batch dependency rows and their earlier evidence remain intact; the frontier ledger records this scoped review. No published item defect requiring a published-consumer ledger entry was found. Published/imported source bytes, stable IDs, inventory and withdrawals are unchanged.

No proof blocker remains. The outside batch-42 Hatcher pagination wording is an owner maintenance alert only: use the exact proposition numbers and printed/PDF locations given above. The report and empty routed decisions file are ready for engine hashing and gate checks. No judging, stamping, certification, workflow transition or agent dispatch was performed.
