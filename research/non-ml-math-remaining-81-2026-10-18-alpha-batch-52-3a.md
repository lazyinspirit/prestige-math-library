# Batch 52 Step 3a adjudication

Run: `non-ml-math-remaining-81-2026-10-18`; group: `batch-52`.

Scope: three touched obligations; no reader/refuter findings or page obligations. Initial risk-report succeeded and routes nine HIGH/CRITICAL items.

Completed level 0: `def-locally-finite-homotopy-type`. The unbased mapping-path Remarks correctly remove the source-basepoint restriction of the published definition. Path concatenation and reversal identify fibers in one target component, including fibers with no strict preimage. Empty types and trivial groups are allowed. Definition and product order agree with Toën §2 Definitions 2.1–2.5, PDF pp.4–6, https://arxiv.org/pdf/math/0501343v4. Reader changed Remarks, not the Definition. Exact historical byte comparison completed below.

Completed level 1: `lem-homotopy-fiber-component-weight-ratio`. Read all three steps and F1–F4 statements/proofs where used. Finite monodromy orbits, full low-degree exact sequence and telescoping orders give wX/wY; no false identification of π1(F) with a kernel. Finite support suffices and bounds are componentwise. Risk review recorded in owning contract. No defect.

Checkpoint: level 0 and 1 reviews completed before subsequent work below.

Completed levels 2–5 through the correspondence squares: reviewed all dg Definition suppliers, two-variable finite thick closure, finite diagram RHom limits, Ext1 classification of fixed-endpoint fibers, and both full homotopy-pullback comparisons. Risk reviews recorded for these four carriers. Stabilizer uses equivalence components, not nonunits; the LES ends in the actual stabilizer with order cancellation. Recomputed the cone coordinate change and verified the inverse middle-object pullback construction.

Recovered exact pre-reader bytes for all three touched items in `.autopilot/non-ml-math-remaining-81-2026-10-18/owner-step2-source-baseline/items/`: each SHA-256 equals its pre inventory entry; each current source SHA-256 equals its post entry. Diffs are exactly the reader-described Remarks addition and two step-1.1 repairs. No historical uncertainty remains. Claims, dependencies and manifests are unchanged.

Checkpoint: subsequent higher-level reviews and checks are recorded below.

Completed level 5 number formula: source/cofiber are unframed isomorphism classes, target is fixed. Component quotient, corrected stabilizer weight, and orbit/stabilizer identity yield both coefficients, including zero subset and zero object. Risk review complete.

Completed level 6 associativity/unit: both transposed squares have proper lower map p=(s,t); final target and three input coordinates agree. Source-zero and equivalence-arrow target fibers are contractible and give both unit identities. Risk review complete. Harmless closing prose cites 1.1–1.2 for associativity but its actual tags include completing step 2.1; no repair warranted.

Completed level 7 heart embedding: negative Ext vanish with the stated shift convention; exact triangles are supplied heart extensions; monomorphism orbits are free. Current ordinary Hall supplier places the subobject second, hence the opposite algebra is necessary and the written anti-homomorphism is correct. All ten supplier interfaces read. Risk review complete.

Completed level 8 A2 example: checked vertexwise abelian structure, finite Hom and endpoint extension sets, both projectives, exact length-one resolution and two-lift K-projectivity argument against the no-roof supplier. Scalar zero/nonzero orbits and unique (0,k) subobjects give the two coefficients one, in the correct opposite-heart order. Risk review complete. Final step omits a tag to immediately preceding finitarity step 2.1; this is nonfatal polish and needs no mathematical repair.

All three touched obligations receive `accepted_repair`, `repair_confidence: 1`; each references one closed nonfatal defect row in `research/defect-ledger.jsonl`. Exact evidence and rationale are in the companion decisions JSON. No item source was edited by Alpha. The reader’s explanations resolve convention, component-restriction and first-pullback-description gaps without changing any mathematical claim.

The strict contract check initially reported one mechanical anchoring failure: definition nonempty-choice evidence named no recognized section. Added an explicit Definition/Remarks anchor to the existing accurate evidence; no defect-ledger row was created for this mechanical issue. All nine required current risk reviews are complete.

Source evidence: independently consulted [Toën, Derived Hall algebras, arXiv:math/0501343v4](https://arxiv.org/pdf/math/0501343v4), §2 Definitions 2.1–2.5 and Lemmas 2.3/2.6 (PDF pp.4–6), §3 Definition 3.1 and Lemma 3.2 (pp.6–8), the complete §4 proof including Lemma 4.2 (pp.9–16), §5 Proposition 5.1 and proof (pp.16–18), and §6 Proposition 6.1 and proof (pp.18–19). PDF pagination is one-based. The reader’s §4 locator p.10 identifies the displayed diagrams; their homotopy-cartesianness is addressed on pp.11–16. Secondary Schiffmann and Hatcher references were not independently consulted; local prerequisite proofs and the primary Toën argument were sufficient for these assigned claims.

Published prerequisites were read only for their actual interfaces: homotopy fiber/mapping-path/fibration exact-sequence constructions; field/ring, cochain and triangulated conventions; canonical t-structure/truncation conventions; projectives and the no-roof theorem. Outside draft DGA/module and ordinary Hall suppliers were checked at the declared uses. No unrelated transitive audit or coverage is claimed. Both owned pages and the two declared prerequisite pages were inspected as context; no page decision is owed.

Consumer records: all nine existing batch-52 cross-batch records and stable IDs remain present. Corrected the finiteness-lemma evidence summary: finite Hom bounds each fixed-middle coefficient, while finite Yoneda Ext1 bounds possible middle classes. The cohomological right-module sign matches the current DGA/module suppliers, and the ordinary Hall order forces the stated opposite algebra. No Statement or Definition section changed in the reader edits, so no interface propagation was triggered. No necessary outside consumer repair, proposed withdrawal, or defective published item was identified. The published ledger therefore needed no edit or lock; published items stayed read-only.

Final local checks:

- Initial and final `node tools/risk-report.mjs research/non-ml-math-remaining-81-2026-10-18-batch-52.proof-contracts.json`, final with `--require-reviewed`: zero errors, all nine HIGH/CRITICAL reviews complete.
- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-52.proof-contracts.json --strict`: 16/16 checked, zero errors or warnings after the mechanical anchor correction.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-locally-finite-homotopy-type.md items/lem-derived-hall-stabilizer-homotopy-sequence.md items/lem-derived-hall-associativity-squares.md --json`: three files, two checked proofs pass, definition not applicable, zero failures or proposed repairs.
- `node tools/rendercheck.mjs` on the same three explicit files: renderer YAML and all real KaTeX spans pass. An exploratory `--help` invocation unexpectedly selected the corpus and was interrupted; it supplies no check result or coverage.
- Final `node tools/proof-layout.mjs` on the same three files: three items, five steps, zero defects. No item edit or formatter followed.

Handoff: exactly three decisions, each `accepted_repair`, with three closed nonfatal ledger rows; no reader/refuter/page obligations, escalations or unresolved mathematical blockers. Alpha changed only the owning contract review/evidence, one cross-batch evidence summary, the shared owned-consumer note, the required report/decisions, and appended closed ledger rows. No source item, page, manifest inventory, provenance or verification stamp changed. No judge, certification, gate battery, commit, publication or dispatch was initiated; engine hash stamping and gates remain owed.
