# Batch 51 Step 3a adjudication

Run: inverse-problems-knot-theory-all-109-2026-10-19. Group: batch-51. Scope: batch 51 only.

The order task routes four touched decisions and four risk reviews; reader-findings-51.json and refute-51.json have empty finding arrays, with no foreign gate or page obligations. Every current item initially matched its immutable reader-post item hash. For all four touched items, git HEAD provides the complete pre-reader source with the exact pre hash; deltas were compared directly, not inferred from hashes. No historical-byte uncertainty is needed.

## Completed item checkpoints, in generated order

1. ex-ip-inversebench-black-hole-imaging: amended_repair. Both Verification steps and current F1/F2 reviewed. The Fourier/gain model, oriented triangle and ordered quadrangle are correct, including all zero-visibility domain caveats. The paper's printed closure ordering differs from code; the item deliberately follows the pinned implementation. Reader locator ranges miss quadrangle indices (134) and log ratio (260); corrected to 110–140, 208–233, 241–260. HIGH risk review complete in the batch contract. No diagram in this item; the supplier definition's information-flow TikZ is consistent with its protocol and asserts no risk identity. No Statement change. Repair confidence: 1.

Next: first-Born citation and finite linearity check.

2. ex-ip-inversebench-first-born-scattering: amended_repair (mechanical YAML escaping and retained citation enrichment). The reader only enriches the paper locator with Appendix A.1 Table 3, which explicitly reports noise level 10^-4. Independently checked v2 §4.1, Appendix B.1 and Table 3; pinned inverse_scatter.py 341–360 conjugates the real contrast times the fixed field, 385–398 passes uinc_dom_set, and 435–439 constructs the fixed matrix. Real-linearity follows term by term, including zero contrast. No source claim of linearity is imported from the contrast-dependent printed total-field expression. The mathematical argument needs no edit; the locator backslash was escaped for valid YAML. No defect row is created for this mechanical failure.

3. ex-ip-inversebench-full-waveform-inversion: amended_repair. Retain reader's zero pressure/velocity initial data and added version-pinned implementation references; correct acoustic.py locator to 61–69 and 83–86. Default zero-filled time-order-2 wavefields establish the implemented quiescent initial state. Directly read Devito v4.8.12 dense.py 84–115 and 141–155, resolving the native refuter's explicit reading limitation. The paper's §4.1, Appendix B.4 and Table 2 support the remaining physical settings and split. HIGH risk review complete. No change to the reader-post Example or Verification mathematics. Search of all items/library references to this item and solver-invalid-iterate found only their own files and the owning B-page inventory; there are no logical or reference consumers requiring repairs. Repair confidence: 1.

4. ex-ip-inversebench-navier-stokes: risk review escalated; this untouched item owes no decision. A periodic curl has integral zero, by integrating each periodic derivative. For the normalized constant eigenfunction e0, the displayed full periodic-space covariance gives Var(<w0,e0>) = 9^-4 > 0, so w0 is almost surely not a periodic curl. Also vorticity alone does not specify the spatially constant velocity: adding a constant velocity preserves curl/divergence but changes advection. The pinned solver selects velocity through streamfunction derivatives (navier_stokes.py 67–88), but the item omits that convention. Local closure attempted: inspected paper §3 equation 9, §4.1 and Appendix B.5 (v2 HTML 649–657), plus pinned navier_stokes.py 47–106 and 129–170. The paper does not specify the Gaussian zero mode. Code removes it in nonlinear_term (64–65, 92–99), but retains the original Fourier state in solve (135, 156–160), so this does not prove that supplied samples have zero mean or that w equals curl u. The missing prerequisite is a source-supported dataset/solver convention making the reported random-field law, periodic-curl equation and initial-to-final map compatible, including whether Gaussian seeds or their five-time-unit evolved states are the reconstruction inputs. Owner must authorize a documented source/implementation distinction or supply the actual data-generation law and zero-mode/velocity convention. No unverified projection or covariance repair was made; the defect and HIGH risk review remain open.

5. ex-ip-inversebench-prior-shift: HIGH risk review complete. Both steps and all four cited carriers checked. Same fastMRI collection is explicitly not equality of train/test laws. Figure 5's digit/ring and nine-cell observations remain empirical; no zero-support, population-risk or robustness theorem is inferred. Paper v2 §4.1, §4.3/Figure 5 and Appendix C support the stated counts and qualitative scope. No edits or decisions owed.

6. ex-ip-inversebench-solver-invalid-iterate: accepted_repair. The pre-reader assertion that no score may be assigned was not licensed by benchmark Definition paragraphs 2–3. The repaired statement and step 1.2 correctly require failure visibility and an explicitly specified aggregation policy without dictating the score. An explicit false admissibility predicate suffices for step 1.1; its converse, solver convergence and a universal CFL threshold are not asserted. Current finite-element solver-contract paragraph defining admissibility is used only for this method-specific predicate convention; no finite-element adjoint result is applied to Devito. Figure 3 and §4.3 support only qualitative small/larger step behavior. Repair confidence: 1. Consumer scan found no other item consumer; B-page inventory is unaffected.

## Final metadata follow-through

The reader's first-Born locator enrichment contains an unescaped YAML backslash before sigma. Corrected the mechanical escaping without changing its meaning. The touched verdict is amended_repair; no mathematical defect row is created for a mechanical YAML failure. Synchronized all four touched item source-reference and Example mirrors in the batch page manifest, which still held pre-reader values. Preserved IDs, dependencies, provenance and draft status; no verification.judge record exists on these items. Existing contract derivations agree with the retained reader repairs. No material proof rewrite was made.

## Sources actually consulted

- [InverseBench arXiv v2 HTML](https://arxiv.org/html/2503.11043v2): §3 Navier–Stokes equation 9; §4.1; §4.3/Figures 3 and 5; Table 3; Appendices B.1, B.3–B.5 and C. These are the accessible full-text counterpart passages; no claim is made to have read the proceedings PDF separately.
- [Pinned blackhole.py](https://raw.githubusercontent.com/devzhk/InverseBench/1db5932bc2995504491663d1e2c498e7317c5404/inverse_problems/blackhole.py): 100–140, 189–260.
- [Pinned inverse_scatter.py](https://raw.githubusercontent.com/devzhk/InverseBench/1db5932bc2995504491663d1e2c498e7317c5404/inverse_problems/inverse_scatter.py): 322–360, 370–398, 413–442.
- [Pinned acoustic.py](https://raw.githubusercontent.com/devzhk/InverseBench/1db5932bc2995504491663d1e2c498e7317c5404/inverse_problems/acoustic.py): 29–86, 171–175, 183–202; checked solver call and shot dispatch.
- [Devito v4.8.12 wavesolver.py](https://raw.githubusercontent.com/devitocodes/devito/v4.8.12/examples/seismic/acoustic/wavesolver.py): 96–112; [dense.py](https://raw.githubusercontent.com/devitocodes/devito/v4.8.12/devito/types/dense.py): 84–115, 141–155.
- [Pinned navier_stokes.py](https://raw.githubusercontent.com/devzhk/InverseBench/1db5932bc2995504491663d1e2c498e7317c5404/inverse_problems/navier_stokes.py): 1–210. This code confirms the unresolved zero-mode distinction, not a compatible dataset-generation law.

All six routed carriers were read completely, including all 13 numbered Verification steps, facts, references, and boundary qualifications. Actual local suppliers read: benchmark-risk-and-compute-budget, inversebench-scoped-findings, inverse-risk-under-train-and-test-laws, learned-reconstruction-estimator, operator-and-prior-mismatch, pde-solver-admissibility-contract, diffusion-prior-score-and-measurement-score (with their exact def-/rem- prefixes as in the item metadata). These definitions were checked for the uses above; unrelated transitive theorem proofs were not recertified. No routed item contains a TikZ diagram or needs one to make its proof rigorous. The opened benchmark supplier diagram is a sound protocol flow diagram.

## Ledger, consumers and scope

Four closed mathematical/citation defect rows were appended: 3a-b51-blackhole-locator, 3a-b51-fwi-initial-state, 3a-b51-fwi-locator, 3a-b51-failure-scoring, all prefixed by the run ID and referenced by the corresponding decisions. The separate 3a-b51-ns-periodic-model row remains open. There are exactly four decisions and no invented finding/page/gate obligation. No published defect was found in the supplier statements actually used; published content and the published-consumer ledger were unchanged. No pair, page, algorithm, item ID, or inventory was added or withdrawn. The two prior-shift cross-batch item uses and solver-invalid-iterate's predicate supplier use have current review evidence in the existing owned batch dependency ledger; other owners' files were untouched.

## Checks and blockers

- Initial risk-report without --require-reviewed: exit 0, nine items routed, four HIGH.
- Focused precheck: exit 0, all four touched items passed.
- Focused rendercheck: exit 0, all four touched items parsed with real KaTeX and renderer YAML.
- Final batched proof-layout: exit 0, four touched items, nine steps, zero defects.
- Exact decision-set and source/Example manifest-mirror checks: pass for all four touched items.
- Final risk-report --require-reviewed: exit 1, exactly one error, ex-ip-inversebench-navier-stokes lacks a complete risk review. This is intentional preservation of the unresolved mathematical escalation, not a passing gate claim.
- The live autopilot status was read from .autopilot and current git history. At inspection it reported batch 51 awaiting adjudication and an unrelated collect-49 blocker; no engine controls, stamps or judge cycles were invoked.

Batch 51 is not clear for closure: the owner must resolve the periodic Navier–Stokes dataset/model convention described in checkpoint 4 before that risk review can be completed. The unchanged item and contract derivations remain available for owner disposition.


Owner resolution of open risk

Root accepted the focused source/model repair after independent FIRST review of the full pinned 243-line solver and actual primary Navier passages/full Appendix B.5. Physical periodic curl and chosen zero-mean velocity are separated from the implementation scalar-state extension retaining a constant offset. Full Gaussian seed covariance is preserved; five-time-unit preparation produces the inversion inputs and is distinct from inversion horizon T. Actual source and claim mirrors retain grid/noise/splits/access/empirical qualifications. There are no item consumers. The original native fatal open risk remains historical; this is current owner repair and supplies no new native execution or theorem coverage.
