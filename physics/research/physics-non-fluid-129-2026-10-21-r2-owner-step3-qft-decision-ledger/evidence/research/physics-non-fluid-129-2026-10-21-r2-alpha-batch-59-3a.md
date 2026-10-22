# Batch 59 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-59`.

Pre/post reader snapshots have identical item, contract and manifest fingerprints: no reader edits or touched/page obligations. Thirteen finding obligations are routed. Published imports remain read-only. No judging, stamping or engine gates are performed here.

## Lorentz cocycle lemma (level 0)

`reader:59:6` and `refuter:59:1`: confirmed fatal well-formedness defect in the original proof: quaternion operations and their matrix identification were never defined. Repaired steps 1.2 and 4.1 using the explicit matrix parametrization and real-linear left action `(c,d) -> (ac-b conjugate(d), ad+b conjugate(c))`; expansion cancels cross terms and preserves the Euclidean norm. The Statement is unchanged; no interface propagation. Repair confidence: 1.

Reviewed all proof steps and seven declared suppliers. The compact-form brackets, transport homotopy equation, finite chart integration, normalized invariant averaging and final differentiation have the stated hypotheses. Zero module and trivial representation are allowed. No diagrams occur or are needed. Complete specific risk review recorded in the owning contract. MIT source pp.186–187 concerns compact averaging; Fuchs first Whitehead lemma is context only, not an imported proof premise.

Next: Hermite coefficient topology, then spectral calculus, then Gaussian construction and counterexample. Local checks pending final source edits.

## Hermite coefficients (level 0)

`reader:59:3` and `refuter:59:2`: confirmed fatal missing domain topology. Added the explicit finite-intersection Schwartz seminorm neighborhood basis in the Statement, preserving every estimate. All four steps and five exact supplier statements checked; inspected oscillator supplier scaling proof. Integration by parts is valid for polynomial Gaussians, eigenvalues are `2|alpha|+2`, and Parseval bounds the weighted coefficients, including `r=0` and `f=0`. The integrable radial majorant supplies continuity. Confidence 1. The only direct/reference consumer is the owned Gaussian theorem; its r=2 use matches this topology and estimate and needs only its separately routed topology repair. No outside consumer repair or propagation. Risk review complete.

## Positive unbounded spectral calculus (level 0)

`reader:59:2` and `refuter:59:3`: confirmed fatal domain defect. Defined the ambient-Borel extension by intersection with the spectrum in the Statement and step 3.1. Clarified zero-valued null-point integrands and inverse-power cutoffs in step 5.1; the positive-set union is within [0,1]. Confidence 1. Independently checked six proof steps and all seven supplier statements: closedness/adjoint domains, lower bounds and resolvent range, bounded spectral theorem, zero projection, pushforward, both domain inclusions and bounded calculus. AC and Countable Choice remain explicit. Both b=0 and b=1, A=0 and empty Borel sets are covered.

Direct/reference consumer search: `cex-qftx-resolvent-zero-continuous-spectrum` (owned), `def-qftx-heavy-gaussian-data` and `thm-qftx-heavy-derivative-bound` (outside). Read both outside consumers and their actual F1 uses: only E_A, domain, positivity and bounded multiplier norm enter; all are unchanged. No consumer repairs or second-hop propagation are needed. Manifest Statement and counterexample contract citation will be synchronized; no outside source changed. Risk review complete.

## Gaussian generalized field (level 1)

`reader:59:4` / `refuter:59:4`: confirmed fatal undefined Gaussian-vector terminology. Defined centered scalar normals by their densities (Dirac mass when variance is zero), and joint Gaussianity by all real scalar projections in the Statement.

`refuter:59:5`: confirmed fatal missing explicit topology for the continuous dual. Gave the real Schwartz test space and finite-seminorm neighborhood basis in the Statement; declared and described `def-schwartz-topology-and-convergence` as F12.

`refuter:59:6`: confirmed fatal omitted law-identification premise. Added `thm-uniqueness-of-a-law-from-its-characteristic-function` as F13, with AC already stated. Its exact statement and complete proof were inspected. Step 4.1 now identifies the limiting scalar law using uniqueness and the Gaussian Fourier transform, including the variance-zero law.

`reader:59:5` / `refuter:59:7`: confirmed nonfatal citation error, despite the refuter's fatal classification. The inversion/norm/extension results were conflated, but local declared F7–F9 establish the calculation. Corrected locator to Theorem 14.7 p.382 (Gaussian-regularized L1 inversion), Lemma 14.9 p.383 (norm identity with f and transform in L1), and Theorem 14.10 p.383 (unitary L2 extension). Read the exact cited source text at PDF indices 394–395, extracted lines 25865–25889 and 26012–26088. Its symmetric normalization differs from the explicitly converted local 2pi convention. URL: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf . Failed screenshot retrieval is not claimed as a visual reading; text extraction supplied the statements.

All completed repairs have confidence 1. Added the two published prerequisite page names to the owning A-page and manifest. No inventory, page identity, or physical scope changed. Checked all six proof steps and all direct supplier statements: consistency, common full-measure event, simultaneous absolute convergence, L2 covariance, continuity of the massive multiplier, real/even symmetry and both Fourier normalizations. Degree-n multiplicity n+1 gives a summable cubic tail; r=2 Hermite control is sufficient. The construction is pure mathematics, with no measurements or empirical inference.

Outside direct/reference consumers: `def-qftx-two-dimensional-wick-cutoff` and `lem-qftx-two-dimensional-covariance-log-integrability`. Inspected their actual uses: smooth compactly supported translated tests are Schwartz in the stated topology; the scalar Gaussian/covariance interface and (2pi)^-2 normalization are unchanged. No consumer edit needed and no second-hop propagation. Risk review complete.

## Resolvent counterexample (level 1)

Risk-review-only carrier: no decision owed. Four steps checked, including equality of adjoint domains, positivity, explicit out-of-range square-summable vector, strong PVM additivity and scalar regularity by finite atoms. The repaired spectral theorem changes no used conclusion. Since zero is proved to belong to this spectrum, its evaluation at {0} was already typed. No item edit. Complete risk review recorded.

## Published-dependency obligation

`reader:59:1`: false positive as a defect in `def-schwartz-space-and-its-seminorms`. Its exact Definition correctly supplies only the set and seminorms and claims no topology; `def-schwartz-topology-and-convergence` supplies that next construction in the published page `schwartz-space-and-the-plancherel-theorem`. Read both definitions and that page. The original consumer's missing explicit topology is a separate confirmed local defect (`refuter:59:5`) now repaired. The published original and imported snapshot stay unchanged; no defective published carrier was found, so no maintenance-ledger entry is warranted. The finding's consumer ID is retained in the decision.

## Consumer and scope disposition

No added items or pairs, withdrawals, or outside edits. Stable IDs retained. All direct item/reference consumer searches were scoped to current `items/` and `library/`; affected actual uses are listed above. Public clarifications retain every substantive conclusion. No outside consumer requires a repair; no unresolved supplier or consumer escalation remains. A-page additions are only the two exact published prerequisite page names needed by newly declared supplier edges. Both page inventories are unchanged. No TikZ/tikzcd diagrams occur in the owned carriers/pages, and these analytic arguments require no added diagram.

Scientific source reading is limited to the stated exact supplier sections and locally necessary proof portions; no complete audit of all transitive published mathematics is claimed. MIT pp.186–187 averaging was checked in the source PDF; Fuchs is context only. Teschl Fourier statement text was checked at the locators above. These are mathematical constructions, not empirical tests or physical-model acceptance.

## Local checks and final handoff

- `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-59.proof-contracts.json`: exit 0, five HIGH/CRITICAL items routed before reviews; rerun with `--require-reviewed`: exit 0, all five specific Alpha reviews complete.
- `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-59.proof-contracts.json --strict`: exit 0, 5/5 checked, zero errors/warnings. In-run source quotes, changed derivations and new F12/F13 citation maps synchronized.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts` on all four changed item paths: exit 0, all unchanged by reflow.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts` on the same four paths: exit 0, 4 checked, zero failing. An initial attempt to invoke the .mts file directly with node failed with ERR_UNKNOWN_FILE_EXTENSION; the successful command uses the prescribed TypeScript runner. No scientific defect row was created for this invocation error.
- `node tools/physics-support/rendercheck.mjs` on the four changed items and both owned A/B pages: exit 0, 6 files, renderer YAML and KaTeX parse checks passed.
- Final post-edit `node tools/physics-support/proof-layout.mjs items/lem-qftx-finite-lorentz-cocycle-splitting.md items/lem-qftx-hermite-coefficient-decay.md items/thm-qftx-positive-unbounded-spectral-calculus.md items/thm-qftx-tempered-massive-gaussian-field.md`: exit 0, 4 items, 22 steps, zero defects. No item edit followed this command.
- Exact manifest Statement mirror check: all three changed public Statements match source; exact routed decision coverage: 13/13, no extra obligations.
- `node tools/physics-support/depcheck.mjs --items-file /tmp/physics-b59-items.json --quiet`, with the temporary JSON containing exactly the five batch-59 IDs: exit 0, selected item/page and prerequisite cycle checks passed.
- Defect ledger append: eight closed rows, comprising seven confirmed distinct defects and one false-positive finding disposition; paired reader/refuter findings share the single corresponding row. The append tool serialized writes. The generated ledger view was refreshed with its ordinary render command. Frontier dependency ledger has the owned-consumer dispositions.

Outcome: 10 confirmed-fatal finding decisions repaired, 2 confirmed-nonfatal citation finding decisions repaired, 1 false-positive published-supplier decision. Every completed repair has confidence 1. Four item carriers, the owning A-page prerequisite metadata, manifest, proof contracts, report/decisions and required ledgers were updated. Counterexample source, B-page, published suppliers and imported originals were not edited. No substantial unmet prerequisite, unresolved escalation, withdrawal or outside required repair remains. No judge, stamp, self-certification, agent dispatch, engine transition or gate battery was initiated. Engine-owned current hashing and gates remain the next workflow action.
