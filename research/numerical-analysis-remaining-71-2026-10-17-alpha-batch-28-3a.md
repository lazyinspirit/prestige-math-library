# Batch 28 Step-3a adjudication

Run: `numerical-analysis-remaining-71-2026-10-17`; group: `batch-28`.

Scope: exactly three touched obligations, no reader/refuter/page obligations. Reader and refuter findings arrays are empty.

## Mathematical review in generated order

1. `lem-conservative-fv-face-fluxes-converge-in-l1loc`: current proof sound under its stated ACω, strong local convergence and uniform bounds up to the initial face. Checked all four steps, every cited interface, compact-state uniform continuity, cutoff translation/isometry, null intervals, zero state range, and the uniform O(ε) initial strip. Reader additions supply correct explicit justifications without changing the Statement. Risk review complete in the owning contract. Historical comparison is recorded below.

Sources inspected: De Sterck–Ullrich, https://climate.ucdavis.edu/AM452.pdf, §3.4.1 equations (3.36)–(3.37), §3.4.3 Theorem 3.1; MIT OCW Lecture 19, https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/814ce5a38ea0db4c58eff0c5ad8b111a_MIT18_336S09_lec19.pdf, pp.1–2. Sources give the numerical setup; the local proof provides the exact analytic convergence argument.

The following records were checkpointed after each item, before moving higher. All reviews are now complete.

2. `lem-godunov-flux-for-burgers-is-continuous-and-consistent`: reviewed every branch and join, including zero, diagonal and shock-axis neighborhoods. Current defining suppliers and MIT Lecture 19 pp.1–2 agree; continuity and consistency are locally proved without CFL or choice. No decision owed; risk review complete. 

3. `thm-conservative-finite-volume-weak-limit`: verified exact finite telescoping and signs, terminal test support, initial cell-average pairing, total O(τ) time and O(h) space errors with no ratio restriction, and initial-strip passage. The local weak definition and published globally bounded convention agree under the extra global bound. Inherited ACω is explicit. No decision owed; risk review complete. 

4. `cex-conservative-fv-weak-limit-need-not-be-entropic`: exact recurrence verified at every cell type; τ/h=2 gives front speed 1/2 with L1 error ≤hT′ and uniform bound 1. At k=1/2, entropy flux jumps from 1/8 to 3/8 and the moving nonnegative smooth test gives −β(0)∫α/4<0. The published entropy sign convention agrees. Reader completion of u0 at zero is harmless and sound. Risk review complete. 

5. `ex-bounded-fv-reconstructions-need-not-be-strongly-compact`: independently verified dyadic cancellation and constant pairwise L1 distance 1/2 on [0,1]×[1/4,3/4]. No subsequence is Cauchy. The text correctly distinguishes arbitrary bounded cell profiles from fixed-data scheme trajectories. No decision owed; risk review complete. 

6. `ex-godunov-fv-captures-burgers-shock-speed`: verified all face fluxes equal 1/2 and induction fixes every cell. The direct weak identity cancels the initial term and has zero spatial flux pairing. Global boundedness, C1 Burgers flux, C1 stationary interface and nonzero jump −2 meet the published jump theorem, giving speed zero. Reader replacement of the ACω theorem invocation is sound. All six required risk reviews are complete. 

## Historical comparison and final decisions

The exact complete pre-reader carriers were recovered read-only from `research/numerical-analysis-remaining-71-2026-10-17-dispatch/reader-reader-28.attempt-1.log`. Each candidate was delimited from the original successful item read, and its raw SHA256 matched the immutable pre snapshot. No reconstructed or guessed preimage was used. Before Alpha edits all three current raw hashes equalled their immutable post-reader hashes. The log locators below are zero-based character offsets of each original `id:` line; the preceding line is the frontmatter opener.

| Carrier | Original log offset | Exact pre-reader SHA256 | Frozen reader-post SHA256 |
|---|---:|---|---|
| `lem-conservative-fv-face-fluxes-converge-in-l1loc` | 1290178 | `038468b42bea01280fb1c7ea3585d34bc777b4303caf4ddc756082e0219d7410` | `0399af99fc445a7b96f7a02d77ad330cf7f30bf8d965d1fdcc2b5e6dfe1c220a` |
| `cex-conservative-fv-weak-limit-need-not-be-entropic` | 1312904 | `074eb6e25a9b82fe71d1d5f9b3c8265ccb70c6023ca06a3dd689fcff94028deb` | `fe0e826d6c9d0f403f5bb5601690ead2107f56e519d43622b612e2a26b9116a4` |
| `ex-godunov-fv-captures-burgers-shock-speed` | 1308974 | `106afd61a1db3dc46ba5f13f5f86a66d8c84da901ae0ad0233cf8100f075ea4c` | `128ea406d5095061d2a9afff9af4893dc5ae4141b3746dab9e6e7790899e860b` |

- `touched:28:lem-conservative-fv-face-fluxes-converge-in-l1loc`: **amended_repair**, confidence 1. Reader correctly made elementary translation/finite-measure/initial-strip justifications explicit. These are nonfatal polish, not a false theorem. Alpha adds the two newly cited measure suppliers to item and manifest dependencies; F7 now cites the actual translation-invariance Statement directly rather than another theorem's Facts. Exact contract quotations and use maps are reconciled. Closed row: `na71-b28-3a-face-justifications`.
- `touched:28:ex-godunov-fv-captures-burgers-shock-speed`: **amended_repair**, confidence 1. The historical invocation of an ACω theorem lacked that premise. The elementary direct proof closes the local gap while retaining the choice-free claim. Alpha mirrors the reader's replacement dependency in the manifest and changes the item/manifest dependency level from 4 to 3, since the largest actual supplier level is 2. The strategy mirror now mentions the direct weak identity. Closed nonfatal row: `na71-b28-3a-shock-choice-premise`.
- `touched:28:cex-conservative-fv-weak-limit-need-not-be-entropic`: **reviewed_no_defect**, `change_kind: audit_enrichment`, `defect_ids: []`. The published initial-data convention is an a.e. equivalence class. The original two half-line values already specified that class; explicitly assigning zero at the interface completes a representative without changing a cell average or any mathematical assertion. No defect is manufactured for this clarification. The current item remains exactly reader-post.

There are exactly three decisions, with no reader, refuter or page decision owed. No decision hashes or judge stamps were authored.

## Prerequisites, consumers and metadata

Read the current scheme, reconstruction, Godunov definition, summation-by-parts lemma, local weak definition, and the six reviewed proofs. Read exact relevant published interfaces: scalar conservation-law and distributional weak-solution definitions; Lp translation theorem (including its L3 isometry fact); finite measure on bounded sets; measure definition and monotonicity; Heine–Borel, extreme value and Heine–Cantor; countable choice; translation invariance and box measure; Kruzhkov entropy definition; Rankine–Hugoniot Statement and its interface conventions. These suffice for the actual authored inferences; no transitive proof audit is claimed.

The reader's example Statement adds only a null-point value. A direct item/reference scan found no other item consuming that example or the entropy counterexample; their only outside-carrier placement is the B page. Its actual prose correctly describes stationary shock speed, bounded noncompact profiles and the CFL-violating entropy example, and remains sound. The face-flux Statement is unchanged. No interface propagation repair is required. The owning cross-batch-dependencies file is `[]`; a scoped frontier-dependency-ledger note records that fact and retains stable IDs. No withdrawal is proposed or deleted.

Only the two Alpha-edited item files, owning manifest/contract, task report/decisions and required ledgers/view are changed by this adjudication. Proof bodies retain the reader arguments except for the F7 citation simplification. Existing provenance remains accurate, and neither edited item had a judge stamp to invalidate. Contract repair replaces paraphrases with exact source excerpts, adds all F3 uses and the direct F7 supplier. Historical template/independent review evidence remains preserved.

No defective published supplier was found, so published content and the published-consumer ledger remain unchanged. No outside-scope repair or owner escalation is pending.

## Local checks and limits

- Initial risk report: six HIGH/CRITICAL carriers routed, zero errors. All six received specific complete reviews, in dependency order, in the owning contract. Final `node tools/risk-report.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-28.proof-contracts.json --require-reviewed`: zero errors, 11 items routed.
- `node tools/proof-contract.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-28.proof-contracts.json --strict`: final zero errors, zero warnings, 11/11 checked. Initial diagnostics exposed stale reader citation quotes/use maps; these were repaired and the complete batch check rerun.
- Reflow of the two Alpha-edited items: unchanged. Final precheck: 2 checked, zero failures. Explicit two-file rendercheck: pass, including real KaTeX and YAML.
- Two closed ledger rows appended through the serialized ledger tool; generated view refreshed. No row was created for mechanical contract diagnostics.
- A rendercheck help probe was unintentionally treated by that tool as an unscoped invocation. Its output is excluded from these scoped validation claims; only the explicit two-file check is relied upon.

Final proof-layout result is recorded below. The engine owns decision sealing, the gate battery and stage transitions. No judgment, certification or transition was performed here. Blockers: none.

Final required layout check, after the final item edits and reflow: `node tools/proof-layout.mjs items/lem-conservative-fv-face-fluxes-converge-in-l1loc.md items/ex-godunov-fv-captures-burgers-shock-speed.md items/cex-conservative-fv-weak-limit-need-not-be-entropic.md` — **3 items, 12 steps, 0 defects**, exit 0. All requested local work is complete; engine handoff is next.
