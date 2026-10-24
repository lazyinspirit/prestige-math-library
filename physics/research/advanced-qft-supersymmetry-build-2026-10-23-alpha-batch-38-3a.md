# Batch 38 Step 3a adjudication

Run: `advanced-qft-supersymmetry-build-2026-10-23`. Group: `batch-38`. Role: Alpha. Only batch 38 was edited; no agents, judge cycle, engine stamps, publication or gate battery were initiated.

## Disposition

Exactly two obligations are owed: `reader:38:1` and `refuter:38:1`. Both are **confirmed_fatal**, concerning the same undefined tangential-structure input in `def-aqft-two-group-symmetry-realization`, opening Definition paragraph. They reference the single closed row `advanced-qft-supersymmetry-build-2026-10-23-batch-38-tangential-structure-input` in `research/defect-ledger.jsonl`, owned at `3a-adjudicate`, disposition `fixed`, repair confidence 1. No touched or page obligations are owed; no extra decisions were invented. The decisions companion uses group `batch-38`; the original scope group `g` is unchanged.

Both pre/post snapshot files have identical item, contract and manifest fingerprints for all four items and identical page fingerprints. Thus there was no retained reader repair to accept or revert. The original vague sentence remained in the carrier examined here. Scope binding records observed fingerprint `bc4b0a97a00166eac2d0f36b8a5753c24c7b332a03b391fbf811786e2935c954`; no unbound historical disposition is invoked.

## Definition review and repair — level 4

Read the complete current Definition and all six actual direct suppliers: `def-aqft-topological-defect`, `def-aqft-p-form-global-symmetry`, `def-aqft-two-group-background`, `thm-aqft-two-group-background-consistency`, `def-aqft-finite-background-two-groupoid`, and `thm-aqft-finite-background-two-groupoid-coherence`. Their cochain, defect and coherence content does not supply the missing tangential type. The findings are valid, rather than evidence that the finite-sum argument is false.

Replaced the vague reference to unspecified spin/lifting data by explicit model input: the Grassmannian model of BO(d), its tautological rank-d bundle, a chosen tangent-bundle classifying map and bundle identification, a specified fibration xi:X→BO(d), a lift theta with xi theta=tau_M, and compatible orientation. The homotopy lifting property defining “fibration” and the pullback fibers are stated explicitly. The maps and orientation remain fixed under internal background gauge arrows. Lift existence is an admissibility premise; no universal existence, spin structure or continuum theory is asserted. The orientation-only case is retained. Source metadata and the immediately following Definition references contain the new source; the complete Definition remains uninterrupted by links.

Updated the owned manifest's Definition/source mirror and design-state note, and refreshed the exact full-Definition quotations in the three owned consumer contracts. Existing `ai-altered` statement provenance remains appropriate. No item had a judge stamp requiring removal; no proof body was rewritten. The repaired item raw SHA256 is `f9ac67911561b051cbe634ece507289f7c2f1d6409e1671bfee20705154318f0` (observed bytes, not an acceptance stamp).

Independently checked the target 2-category construction: composition scalars multiply, zero/empty weights do not imply scalar uniqueness, conjugation preserves weights/local subalgebras, and each parallel 2-morphism is uniquely determined if it exists. The typed horizontal-composition and pseudofunctor equations have matching endpoints. Complete-insertion maps and support comparisons remain explicit additional model data. The counterterm convention requires one permitted functional trivializing every phase, in both directions. No arbitrary choice or analytic limiting argument is used. The Definition risk review was completed before proceeding to level 5.

## Coupling review — level 5

Read all three proof steps, A1 and actual F1–F5 supplier sections. Reindexing the finite sum under the given configuration bijection, transporting each insertion and factoring the configuration-independent phase proves the correlator identity; n=0 gives the partition identity. Empty sets and vanishing/cancelling weights are harmless because no normalized correlator or division by Z is used. Counterterm reweighting gives exactly the target factor times the inverse source factor. The anomaly equivalence is the declared simultaneous-trivialization convention. Neither the Postnikov class nor a zero partition function determines a phase.

The public Statement already imports the chosen tangential structure from the Definition; no claim/proof change is necessary. Refreshed F1 and clarified the contract's identity-boundary note: a pseudofunctor may have a weight-preserving unit comparison rather than a literal identity configuration map. Risk review complete before proceeding to level 6.

## Example reviews — level 6

Reviewed `ex-aqft-two-group-nonzero-postnikov-unit-response` first, including all four Verification steps, A1 and F1–F5. The normalized cocycle expansion cancels each monomial twice over Z2. Every normalized 2-cochain is supported only at (1,1), and its coboundary at (1,1,1) vanishes while beta there is 1, proving the stated nonzero class under the declared equivalence. The vertex potential proves flatness, and the expansion of delta(q_i a_ij a_jk), together with delta-squared c=0, proves every tetrahedron equation. The transformed 0123 edges and faces are correct. The separately adopted singleton model supplies phase 1. Its Remarks explicitly disclaim an effective full-symmetry realization, so the example needs no new geometric realization input. Refreshed F4; risk review complete.

Checked the sole TikZ diagram: all six edges point from smaller to larger vertex; the four face labels identify 012,013,023,123 correctly. It records incidence; the proof is independent of it. No repair or additional diagram is required.

Then reviewed `ex-aqft-two-group-split-background-coupling`, all three Verification steps, A1 and F1–F4. Precisely faces 012,013,014 contain edge 01; the shift equals delta lambda and its tetrahedron coboundary vanishes. Phase 1 follows from the separate weight-one singleton premise, not from beta=0 universally. Its response-only scope and Remarks are explicit. Refreshed F3; risk review complete. No diagram occurs or is needed.

A direct exact Python arithmetic check passed all 16 cocycle quadruples, both normalized 2-cochains, all five initial and five transformed nonzero-example tetrahedra, and all five split-shift tetrahedra. The initial 0123 face values are (1,0,0,0); the transformed values are (0,0,0,0). This finite calculation supplements the written proofs; it is not a measurement or a proof of continuum realization.

## Consumer review and open owner handoff

A search of actual item references/dependencies found exactly four direct consumers: the owned coupling theorem and both examples, plus outside batch-40 `def-aqft-finite-two-group-state-sum`. Read that current outside carrier and its exact F1/F2 contract quotation locations. Owned consumer claims need no changes for the reasons above; their quotation mirrors are current, so no next-hop public-interface propagation is needed within this batch.

**Owner handoff remains open before cross-batch closure.** Batch 40 asserts that its closed-manifold data instantiate this interface but currently states orientation only. The finite vertex-spin calculation uses no geometric spin lift and remains unaffected. Its owner must explicitly instantiate the orientation-only lifting input or document exactly how that chosen input is inherited; then refresh F1/F2 in `research/advanced-qft-supersymmetry-build-2026-10-23-batch-40.proof-contracts.json`, which still quote the old full Definition. Any necessary source/manifest maintenance belongs to that owner. Neither the outside carrier nor its contract was edited or certified. This is a concrete consumer/interface handoff, not a substantial missing mathematical theorem blocking the local repair. It is recorded in `briefs/tasks/frontier-dependency-ledger.md`. No outside completion or run closure is claimed.

## Sources and reading limits

- [Schommer-Pries, §1.1, printed p.2714, lift diagram and footnotes 5–6](https://msp.org/gt/2018/22-5/gt-v22-n5-p05-s.pdf): a tangential type is a specified fibration to BO(d), with an actual lift of a chosen tangent classifying map; the footnote records the additional choices needed for an actual map. This is the source of the repaired geometric input, not a QFT existence theorem.
- [Benini–Córdova–Hsin, §2.3, equations (2.14)–(2.20), printed pp.18–19](https://arxiv.org/pdf/1803.09336): flat edges, twisted face equation and two gauge transformations. Also checked §§1.3–1.4, printed pp.8–10, for the distinction between higher-group structure and residual anomaly phases. Explicit zeta/composition/coherence formulas are justified by the actual local mathematical suppliers, rather than attributed wholesale to the article.
- [Baez–Lauda, §8.3, printed pp.58–60, associator-cocycle calculation and Theorem 43](https://arxiv.org/pdf/math/0307200): normalized associator cocycles and coherent categorical conventions. The finite background 2-groupoid and target construction remain locally checked arguments.
- [Schäfer-Nameki, §§2.8.1–2.8.2, printed pp.29–33](https://arxiv.org/pdf/2305.18296v2): background mixing and the distinction from the anomaly produced by gauging. No faithful dynamical realization is imported from this discussion.

Only relevant source passages were consulted; no whole-source audit is claimed. All physical conclusions remain conditional finite-model deductions. There are no empirical premises, invented measurements, statistical precision, or new published-supplier findings. Published/imported content stayed read-only; no published-ledger entry or withdrawal was needed. Both assigned pages remain unchanged frontmatter-only carriers with `page_layout: compact-v1`.

## Local validation

All final checks below exited 0:

- `node tools/physics-support/risk-report.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-38.proof-contracts.json --require-reviewed`: four CRITICAL items, four complete reviews, zero errors. The unqualified risk report was also run before review.
- `node tools/physics-support/proof-contract.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-38.proof-contracts.json --strict`: 4/4 checked, zero errors/warnings. Its initial local run rejected an unanchored boundary-evidence note; adding its actual Statement/Proof locator resolved that mechanical issue without a defect row.
- `node tools/physics-support/content-policy.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-38.pages.json`: four items, zero errors/warnings.
- Explicit four-item `precheck.mts`: all three proof-bearing items passed; the Definition has no numbered proof to check.
- Explicit four-item/two-page `rendercheck.mjs`: six files passed YAML and KaTeX checks.
- Required final explicit four-item `proof-layout.mjs`, run once after the final item edit: four items, ten steps, zero defects.
- Scope-local integrity assertions: every current contract quotation equals its actual supplier section; the repaired manifest mirrors the complete Definition; all four public sections contain no hyperlinks; all four risk reviews are complete; exactly the two routed decisions are present.

Exploratory `--help` calls for content-policy and statement-first were rejected because those CLIs do not implement that option; they provided no validation evidence. No full-frontier statement-first check, native gate battery, decision stamping or acceptance claim was substituted for the scoped checks. The batch-40 handoff above is the remaining closure limitation.
