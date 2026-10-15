# Batch 10 Step 3a adjudication

Run: `physics-td-qft-rpm-62-2026-10-14`; group: `batch-10`; assigned batch: 10.

The routed scope has six touched obligations, no reader/refuter findings and no page obligations. Current raw item hashes match every batch-10 post-reader snapshot entry. The pre/post snapshots identify the six changes; the reader report describes their substance. No historical source-byte reconstruction is claimed.

Completed level-6 review: the Nernst item explicitly adopts a uniform entropy-difference limit; nonempty K and eventual boundedness make its real supremum meaningful, compactness alone is not used to infer boundedness. Individual entropy limits and normalization remain additional premises. The finite canonical model has positive probabilities, Z >= g >= 1, ground weights 1, excited weights tending to zero, and the continuous extension of -p log p at zero follows from the cited logarithm limit. This includes g=N and N=g=1. The geometric model preserves (0,T_*] because 0<r<1, including N=0; finite N gives finite duration. Neither model parameter is silently identified with the macroscopic entropy derivative. No measurements, uncertainty estimates or statistical rejection are asserted.

Source checking completed: see the source locators below.

Completed level-7 review: the reservoir Definition supplies matching endpoint tuples for the working-system and total-compound records, affine bath entropy increments and a zero-entropy work store. Its consumers use exactly these premises. The capacity witness has an explicit preparation-label realization and positive-mass rest data; its product patch is open and convex on fixed-amount slices. Direct differentiation, explicit inversion, cutoff Newton–Leibniz and the quantified small-theta choice prove the refutation for every real q >= 1. No global bulk extension is asserted. All five risk reviews are now complete.

Completed level-8 review: cyclicity and the first law give W_out=Q_h-Q_c or W_in=Q_h-Q_c with the appropriate modes. Total-compound second-law entropy changes give Q_c/Q_h >= T_c/T_h in engine mode and W_in >= Q_c(T_h-T_c)/T_c in refrigerator mode. All divisors are strictly positive; both algebraic equality directions are valid. Reversibility supplies saturation without an asserted converse. The numerical consumers give eta <= 1/2, COP <= 4 and W_in >= 300 J under stipulated inputs. The residual-entropy remark remains compatible with the canonical-parameter clarification. No additional item or page edits are needed.

## Decisions and supplier evidence

All six touched obligations receive `accepted_repair`, with repair confidence 1, in the companion decisions file. The original scope assignment group `q` remains unchanged. No additional reader/refuter/page obligation is invented. No carrier was edited in this adjudication. Risk-review enrichment is the only contract edit; the reader changes remain intact. No new confirmed defect, open mathematical prerequisite or defective published item was found, so no new defect-ledger or published-ledger row was created.

The exact mathematical supplier statements checked are in the current `items/` files: the complete-ordered-field supremum definition; natural-number/induction and ordered-field definitions; natural-logarithm inverse and logarithm continuity/laws; positive-range exponential limit and monotonicity; real-power definition and derivatives on positive arguments; scalar instances of the Banach derivative sum/product/chain theorem on open intervals; interval convexity and the second-derivative criterion; continuity implying Riemann integrability on a closed interval; Newton–Leibniz with a continuous primitive and derivative on the interior; and logarithm divided by every positive power tending to zero (used at exponent 1). These imported suppliers remain published read-only premises, not newly audited results. No AC is required by these finite constructions.

Current physical suppliers were independently read at their actual definitions/postulates: state-domain preparation labels and rest data; SI units; physical-coordinate temperature conversion; primitive concave entropy; closed process and transfer records; boundary/exchange classification; reversibility; first-law balance; total-compound second-law association and entropy split; response charts. They remain draft definitions or adopted postulates, not empirical evidence or independently published acceptance. Exact citation hypotheses fit the calculations. The counterexample does not use the potential-differential theorem.

## Sources and limits

Retrieved [Tong, Chapter 4](https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf), §4.3.1 (printed pp.115–117), §4.3.2 equation (4.9), and §4.5 (pp.133–134). Retrieved [Arovas, Chapter 2](https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf) with curl after the browser retrieval failed; inspected complete §§2.5.2–2.5.4 (pp.21–26) and §2.6.2 (pp.29–30), plus the endpoint entropy calculation in §2.6.3. The cycle and finite-degeneracy discussions support the stated background. Neither source establishes this exact uniform compact-family Nernst formulation; the carrier expressly labels it an altered, separately adopted assumption. Tong's power-bound inference on p.133 is stronger than integral convergence warrants, and the local counterexample correctly refutes that inference. Source statements are evidence to check, not verdicts.

Raw current item hashes were compared with both native snapshots: all eleven match post, and the six routed carriers differ from pre. The reader report provides the repair descriptions. Full pre-reader carrier bytes were not reconstructed, and no byte-by-byte historical diff is claimed; verdicts accept the specified reader repairs after independent review of the current exact post-reader content and actual suppliers.

## Local validation and handoff

- Initial risk report: exit 0, five HIGH/CRITICAL carriers routed.
- Risk report with `--require-reviewed`: exit 0, all five have complete specific reviews.
- `node tools/physics-support/proof-contract.mjs research/physics-td-qft-rpm-62-2026-10-14-batch-10.proof-contracts.json --strict`: exit 0; 11/11 checked, zero errors and warnings.
- Scoped precheck via `node tools/tsx-run.mjs tools/physics-support/precheck.mts` on the six touched item paths: exit 0; all five proof-bearing items pass, definition has no numbered proof.
- Scoped `rendercheck.mjs` on those same six paths: exit 0; YAML and all math spans parse.
- One batched `proof-layout.mjs` invocation on those six paths: exit 1 before item inspection. The application renderer cannot resolve `@/components` imported by `prestige-intelligence/web/components/library/ItemBody.tsx`. No rendered step/chip result is available. This is the same external renderer-resolution failure reported by the reader, not a mathematical finding. The renderer lies outside this dispatch's edit scope; owner must restore its module resolution and rerun the required layout check before gate closure.

Content adjudication is complete. The outstanding handoff blocker is the unavailable rendered proof-layout check. No judge, stamp, self-certification, engine transition or gate battery was initiated. Current record checks are local validation only; the engine owns final hash stamping and gates.
