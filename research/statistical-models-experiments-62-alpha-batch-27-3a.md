# Batch 27 Step 3a adjudication

Run: statistical-models-experiments-62; group: batch-27; assigned batch: 27.

Scope has three touched obligations, no reader/refuter findings and no page obligations. Initial risk report routes three HIGH items (score 7) and one CRITICAL example (score 9). All six current raw item hashes match reader-post. For each touched item, changing only the H&R locator back to 125–127 and removing the final newline exactly reproduces its frozen pre-reader hash. Mathematical statements, facts, proofs, dependencies and provenance are unchanged.

## Completed: prop-observed-law-does-not-identify-latent-error-variance-split

Reviewed every step and all eight direct dependency carriers. Uniform signs give block independence by atom counts, centering and finite second moments; covariance bilinearity gives variance pairs (2,2) and (3,1). W0=W1 pointwise on the same finite space, while psi differs on Theta={0,1}, exactly refuting estimand identifiability. Positive component variances avoid degeneracy; no variance division, limiting argument, converse or choice is used. Reader/refuter report no remaining defect. Checked H&R Chapter 9 printed pp.125–128 (PDF pp.134–137), Fine Point 9.1 on p.128, and STRATOS §§2.1,3.1.1,4.1–4.2; these are context, while the finite countermodel is proved locally. Bibliographic repair accepted; no mathematical gap found.

Verdict: accepted_repair, repair_confidence: 1. Closed citation defect: `statistical-models-experiments-62-3a-batch-27-fine-point-locator-prop-observed-law-does-not-identify-latent-error-variance-split`. Contract derivations and boundary rows match the current proof. No statement change or consumer repair is required.

## Sources and evidence

Hernán–Robins, [What If, 19 Aug 2026](https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf), downloaded directly after browser retrieval failed; PyMuPDF extraction checked printed pp.125–128 (PDF pp.134–137). Technical Point 9.1 is on p.126; Fine Point 9.1 is on p.128. The latter supports qualified measurement-bias discussion and validation context, not a general attenuation theorem. [Keogh et al., STRATOS Part 1 author manuscript](https://www.stratos-initiative.org/wp-content/uploads/2021/10/Keoghetal-2020.pdf), §§2.1,3.1.1,4.1–4.2, checked in the browser. Local dependency carriers were read as mathematical evidence, without claiming audits of unrelated transitive closures.


## Completed risk review: thm-berkson-error-slope-in-simple-linear-model

Reviewed all three steps and seven direct dependency carriers, including the one-predictor specialization of the normal-equations theorem. L2 integrability and independent centered U,W and epsilon,W give exactly the two zero covariances needed. Cov(Y,W)=beta Var(W); Var(W)>0 ensures existence and unique slope beta. Neither independence nor zero covariance between U and epsilon is used. U=0, epsilon=0 and beta=0 remain admissible; W with zero variance is excluded. No choice or converse is used. STRATOS §§2.1 and3.1.1 (manuscript pp.4–6,9–10) confirms the model and qualified slope context; H&R §§9.1–9.2 is measurement-bias background. Reader/refuter supply no finding. Current carrier matches frozen pre and post; no repair or decision is owed.

Contract citations, derivations and boundary exclusions agree with the authored proof. 

## Completed: thm-classical-error-attenuation-in-simple-linear-regression

Reviewed all four steps and seven direct dependency carriers. Independence of U from the pair (X,epsilon) implies independence from each coordinate; the separate epsilon,X hypothesis removes the remaining covariance. L2 ensures integrability; product factorization gives all three cross covariances zero. Cov(Y,W)=beta Var(X), Var(W)=Var(X)+Var(U)>0, and the actual affine-prediction theorem gives the unique slope. Nonnegative variances give factor in [0,1], endpoints at zero component variances, and strict magnitude reduction only for both variances positive and beta nonzero. Beta=0 yields gamma=0, including constant Y when epsilon=0; both predictor-component variances zero is excluded. No choice, conditional-mean linearity or converse is assumed. STRATOS §3.1.1 gives the covariance-ratio argument; current proof handles zero and sign cases explicitly. H&R Fine Point 9.1 is printed p.128, so the reader locator repair is correct. No mathematical defect remains.

Verdict: accepted_repair, repair_confidence: 1. Closed citation defect: `statistical-models-experiments-62-3a-batch-27-fine-point-locator-thm-classical-error-attenuation-in-simple-linear-regression`. No Statement, proof, provenance or manifest change is necessary; therefore no consumer repair is triggered. 

## Completed: ex-classical-berkson-differential-error-and-validation

Reviewed all eight verification steps and all eleven direct dependencies after completing the level-1 suppliers. Four-atom independent centered signs and epsilon=0 meet every classical/Berkson hypothesis and give measured slopes 1 and 2. With Y=X, bounded conditional factorization holds on both positive X strata; the imported conditional-independence definition assumes AC, explicitly carried in F8 and deps (the finite computations themselves require none). Third-model cells give P(W=1)=1/2, conditional means 1/5 and4/5 and contrast -3/5. Fourth-model cells give true contrast 1/2 and measured contrast -1; on X=1 the joint indicator expectation is0 versus product3/16, disproving conditional independence on positive mass. Independent four-sign blocks give the same W law and variance pairs (2,2),(3,1). X0=0 has probability1/2 while X1=0 is impossible by odd parity, separating the joint validation laws. All denominators use positive strata; deterministic Y and W and zero residuals are valid. This is only candidate-pair separation, not universal identification. Exact Fraction enumeration independently checked binary contrasts, all block-independence cells, variances and validation probabilities. STRATOS §§2.1–2.2,3.1.1,3.2.1–3.2.4,4.1–4.2 checked; its general binary attenuation wording must be qualified by the mechanism (here sensitivity and specificity are1/5), and the local sign-reversal witness is sound. H&R Fine Point9.1 is printed p.128, confirming the bibliography repair. Reader/refuter have no unresolved finding; no defect in mathematics or supplier use found.

Verdict: accepted_repair, repair_confidence: 1. Closed citation defect: `statistical-models-experiments-62-3a-batch-27-fine-point-locator-ex-classical-berkson-differential-error-and-validation`. The mathematical content and its exact contract remain unchanged apart from the required risk-review enrichment. No additional item edit, material rewrite, judge invalidation or consumer repair is needed. 

## Published findings and consumer dispositions

No defective published carrier or unmet prerequisite was established. Published content remains read-only; no published-consumer ledger row is needed. Exact current direct dependency statements/definitions were checked at each use, including the imported conditional-expectation convention under AC. No Statement or Definition changed, so no outside consumer repair is triggered. Batch-27 cross-batch input is `[]`: all in-run logical suppliers are within batch 27, and the declared outside prerequisites are published context. Its empty input remains correct. The frontier dependency note records these owned-consumer checks; stable IDs and proposed withdrawals are preserved. No blocker, escalation or required owner decision remains.

## Local checks and limits

All commands below exited 0 against the current batch-27 carriers:

- Initial `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-27.proof-contracts.json`: three HIGH and one CRITICAL item, zero errors.
- The same command with `--require-reviewed`: all four required reviews complete, zero errors.
- `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-27.proof-contracts.json --strict`: 4/4 items, zero errors or warnings; exact citations and derivation mirrors current.
- `node tools/finite-smoke.mjs research/statistical-models-experiments-62-batch-27.proof-contracts.json`: the selected symmetric-Rademacher check passed (one check). Separate exact Fraction enumeration checked both binary contrasts, all sixteen-atom block-independence cells, the variance pairs and validation probabilities; these computations substantiate only the stated finite models.
- `node tools/tsx-run.mjs tools/precheck.mts` with the four proof-bearing batch-27 item paths: four checked, zero failures.
- `node tools/rendercheck.mjs` with those same four paths: YAML and real KaTeX rendering pass.
- `node tools/defect-ledger.mjs append --file /tmp/batch27-defect-rows.json`: three closed nonfatal citation rows appended, with the generated view refreshed under the tool's lock.

No additional item edits were made by this adjudication. Only four `risk_review` entries were added to the proof contracts; other contract content and the manifest remain unchanged. Decisions contain exactly the three owed touched obligations, each `accepted_repair` with confidence 1 and one closed citation row; the untouched Berkson theorem has only its required risk review. These are independent local review and focused-check results, not judgments, stamps or a gate battery. The engine owns hash stamping and subsequent gates.

Final proof-layout command, run once at handoff on all three reader-changed paths: `node tools/proof-layout.mjs items/prop-observed-law-does-not-identify-latent-error-variance-split.md items/thm-classical-error-attenuation-in-simple-linear-regression.md items/ex-classical-berkson-differential-error-and-validation.md` — exit 0, three items, sixteen steps, zero defects. Final obligation coverage is exactly three decisions; all six current raw item hashes still equal their immutable reader-post hashes.
