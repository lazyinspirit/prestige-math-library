# Batch 36 Step 3a adjudication

Run: `statistical-models-experiments-62`. Group: `batch-36`. Scope: batch 36 only.

The single owed obligation is `touched:36:thm-first-order-measurement-uncertainty-propagation`, decided **accepted_repair**, with `repair_confidence: 1`. Reader/refuter findings and page obligations are empty. Both required risk reviews are complete. No blocker or published defect was identified.

## Definition and prerequisite review (level 1)

Read the full current Definition and Remarks of `def-measurand-calibration-and-measurement-uncertainty`, all four direct dependencies, the reader report/findings and refuter artifact. The actual suppliers are `def-scientific-statistical-model-contract`, `def-random-element-and-real-random-variable`, `def-moments-variance-and-covariance`, and `def-real-frechet-derivative-on-real-and-complex-matrix-spaces`.

The finite input random element has square-integrable coordinates on one probability space. Products defining covariance are integrable by the elementary inequality $2|ab|\le a^2+b^2$. A finite deterministic gradient defines a measurable, square-integrable affine output, whose finite nonnegative variance has a unique nonnegative square root. Zero gradient, zero covariance, singular covariance and scalar input cause no problem. Open $U$ and $\hat x\in U$ supply the derivative domain; no endpoint derivative or covariance inverse is required. The nonlinear output separately requires measurability, measurable completion on the null complement or a measurable extension, and square-integrability if its variance is used. Differentiability at one point does not imply global measurability or finite nonlinear variance.

Type A/B labels describe evaluation methods; random/systematic labels describe effects. Correction and shared reference uncertainty remains in the model. The scientific-contract supplier and its A-page supply interpretation fields and explicit adequacy disclaimers, not independence, identifiability or physical applicability. No AC or iff claim occurs. No defect found; CRITICAL risk review was recorded before completing the higher-level theorem adjudication.

## Propagation theorem review (level 2)

Read the full current Statement, F1–F4, Proof 1.1–3.1 and Remarks of `thm-first-order-measurement-uncertainty-propagation` and each actual cited dependency. Independently checked the entire current published `thm-covariance-bilinearity-and-symmetry` proof and the relevant expectation-linearity and variance/covariance-identity prerequisites. Its finite square-integrable families, common probability space, real coefficients, empty sums and constant-summand conventions apply exactly here.

Step 1.1 uses the real Frechet derivative on column matrices: $g_i=Df(\hat x)[e_i]$ and linearity gives $Df(\hat x)[h]=g^Th$. The reader changed step 1.2 to put $c=f(\hat x)-g^T\hat x$ and bound the entire output by $Q_{\mathrm{lin}}^2\le2c^2+2d\sum_i g_i^2X_i^2$. This has finite expectation, so the variance in step 2.1 is defined. Bilinearity eliminates the finite constant and gives the double covariance sum. Symmetry pairs off-diagonal terms, producing the factor 2 in step 3.1; nonnegativity follows from the variance itself. Checked $d=1$ with an empty off-diagonal sum, zero gradient/covariance, and singular covariance. No independence, AC, converse, exact nonlinear variance or coverage probability is asserted. HIGH risk review is complete.

The reader-described original omission of the constant-term integrability bound is immediately closable proof polish, hence nonfatal; the theorem was not false. Retain the explicit bound without further item edits. Closed ledger row `sme62-b36-3a-affine-l2-constant` records this exact defect at `3a-adjudicate` and is referenced by the touched decision.

## Carrier comparison and consumer maintenance

The frozen pre item hash is `ce18dfbd00e35d9cf81123b620a2ca3d236085c34b871785ad60f767a9ea480c`; frozen post and current raw item hashes are both `6394fdbc8f2528a1badc820e2bb34e9cf381fbfeff99570a6e9a192d4967c92e`. The theorem's manifest projection is unchanged between snapshots. For all three batch contracts, removing only the newly authored `risk_review` fields reproduces each frozen post contract hash. The definition's current raw hash also matches its unchanged frozen pre/post hash. Thus acceptance rests on the actual reader-post source and current independently reviewed argument; no historical source delta was inferred from a missing preimage.

No item or page source was edited by Alpha. Statement/Definition interfaces remain unchanged, so no interface-change consumer repair is triggered. Read the local example as the actual theorem consumer: its eight-point sign model has finite moments, means $(10,20,13)$, covariance entries $\Sigma_{11}=0.01$, $\Sigma_{22}=\Sigma_{33}=0.04$, $\Sigma_{12}=0.01$ and other off-diagonal entries zero. Its everywhere differentiable inverse curve has gradient $(0.4,0.6,0.5)$ and linearized variance $0.0308$. The stipulated batch mismatch $0.6$ and pooled OLS discrepancy $2/7$ follow from its displayed elementary calculations. Both unchanged page summaries accurately limit their claims. Neither the example nor pages owe additional decisions.

Enriched both owned cross-batch prerequisite records and maintained the batch-36 entry in `briefs/tasks/frontier-dependency-ledger.md`. Stable IDs and prior records remain present. No affected outside consumer, proposed withdrawal, published repair or published-ledger addition is needed. Published supplier review was limited to the actual claims/proof clauses used here; this is not a recursive whole-library audit.

## Source evidence

- Official [JCGM 100:2008](https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf), §§2.3.1–2.3.4 (printed p.3), 3.1.3 (p.4), 3.2.2–3.2.4 (p.5), 3.3.3–3.3.6 (pp.6–7), 5.1.2 (p.19), and 5.2.2 Eq.(13) (p.21): checked terminology, effect/evaluation distinctions, correction uncertainty, and the covariance formula's first-order interpretation.
- Official [Amendment 1:2026](https://www.bipm.org/documents/20126/2071204/JCGM_100_Amd1_2026.pdf), printed p.1, §4.1.4 new Note 1: significant nonlinearity requires further treatment; it does not certify nonlinear variance from the linearized identity.
- [NIST/SEMATECH Chapter 2](https://www.itl.nist.gov/div898/handbook/toolaids/pff/mpc.pdf), §2.3.6.7 (PDF pp.227–228) and §2.5.5 (PDF pp.321–323): calibration and later-reading uncertainty, propagation approximation, and covariance caveats agree with the local interpretation.
- [MIT OCW, Ravela, Quantifying Uncertainty summary](https://www.ocw.mit.edu/courses/12-s990-quantifying-uncertainty-fall-2012/a1cf07c268b15238d4351c512d31b28b_MIT12_S990F12_Summary.pdf), slide 17 (PDF p.17): covariance propagation via a Jacobian is supporting context. The local scalar result is established by its own proof, without importing the lecture's model-specific filtering premises.

## Local checks and handoff

All commands below completed successfully:

- `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-36.proof-contracts.json` — CRITICAL 8 definition, HIGH 6 theorem, MODERATE 4 example; 0 errors.
- Same command with `--require-reviewed` after recording the two reviews — 0 errors, 3 items routed.
- `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-36.proof-contracts.json --strict` — 0 errors, 0 warnings, 3/3 checked.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-first-order-measurement-uncertainty-propagation.md` — 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/thm-first-order-measurement-uncertainty-propagation.md` — 1 item, 4 steps, 0 defects. Alpha changed no item paths; this focused check also validates the retained reader edit at handoff.
- Canonical JSON comparison, excluding only `risk_review`, against frozen post contract hashes — all three matched; raw definition and theorem hash checks matched their post snapshots.
- `node tools/defect-ledger.mjs append --file /tmp/sme62-b36-defect-row.json` — one closed nonfatal row appended under the tool's serialized lock; generated view refreshed.
- `node tools/defect-ledger.mjs validate --run statistical-models-experiments-62` — 310 run rows checked, 0 errors at execution.

Report and decisions file are complete. No judge, certification, decision stamping, dispatch, stage transition or gate battery was initiated; the engine owns those actions.
