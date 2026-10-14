# Batch 7 Step 3a adjudication

Run: `mathematical-statistics-foundations-37`. Group: `batch-7`; original scope group `c` retained. Only batch 7 is writable. Eight obligations: seven touched carriers and `refuter:7:1` (route `flagged`). No reader or page obligations.

## Evidence and conventions

Read the scope, generated order, reader report/findings, refuter report, pre/post snapshots, current manifest and contracts. All seven current item raw hashes initially equal the immutable reader-post hashes. All pre/post item hashes differ except the Bernoulli example, whose contract alone changed. The reader report describes the mathematical deltas; hash snapshots alone do not reconstruct pre-reader text. Current claims and actual direct prerequisites are independently reviewed below. No historical preimage or source reading is invented.

## Dependency-ordered review

### Level 3 — def-score-and-fisher-information

Accepted the reader repair restricting scalar expected-square information to d=1 and retaining the d>1 outer-product matrix. Reviewed the complete Definition and every direct dependency’s relevant Definition/Statement. The chain rule applies coordinatewise on positive support; measurable derivative versions give a measurable score. The exceptional derivative-null set is handled by an arbitrary measurable version, as usual for expectations. Zero/infinite scalar information, zero scores, empty parameter sets, open-domain endpoints and the explicit arbitrary-index AC use were checked. No covariance identity is assumed by the definition. Current definition and manifest agree. Its complete HIGH risk review is recorded in the batch contract. No additional item edit.

Sources opened: Oxford SB2.1 §§3.1–3.2 (printed pp.21–24), https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf; MIT 18.655 Lecture 13 pp.6–8 and 16–17, https://ocw.mit.edu/courses/18-655-mathematical-statistics-spring-2016/9e3152248b9f79ea4d5cfaae9f31c21b_MIT18_655S16_LecNote13.pdf. Their regular score definitions agree on the stated regular subcase; the local definition carefully separates existence of a score from regular score identities.

### Level 4 — thm-score-mean-zero-and-information-identity

Accepted the reader signed-density and linearity clarification; final carrier verdict `amended_repair` because the focused contract check also required a citation-use correction. Read all four proof steps and all cited supplier statements. Shrinking U to a coordinate ball makes the MVT segments admissible. The density-integral part of step 1.1 holds at every eta in U without assuming score square-integrability there; this suffices for step 2.1. Difference quotients use nonzero increments. DCT is valid under the common g1/g2 bounds; the positive/negative-part extension of the density formula is valid. The Hessian entries are integrable by g2 and the score second moments. Zero/singular information is allowed. Oxford Theorems 3.4 and 3.7 and MIT’s corresponding score identities were read with their regularity hypotheses. CRITICAL risk review complete; no additional item edit.

### Level 7 — thm-cramer-rao-lower-bound

Accepted the reader common-null-set correction and explicit signed-integral/DCT derivation; final carrier verdict `amended_repair` includes the citation-use correction described below. All four steps and direct supplier statements were read. The sufficient route differentiates the local mean using one H outside one common null set, while the main bound assumes the score-covariance identity directly. The L2 pairing is valid and Cauchy–Schwarz yields both the inequality and its almost-sure equality characterization. The psi-prime-zero case gives equality precisely for an almost-sure constant T; positive finite I is essential. Oxford Theorem 5.3’s proof and MIT 18.655 Theorem 3.4.1 were checked. The source’s pointwise equality wording is not copied: the local almost-sure formulation is correct. CRITICAL risk review complete; no additional item edit.

### Level 7 — thm-multivariate-cramer-rao-bound

Amended the reader repair. The reader’s integrability and linearity additions are sound. Refuter finding `refuter:7:1` is **confirmed_nonfatal**: the scalar unbiasedness definition was cited without explaining coordinatewise use. The theorem already explicitly assumes its vector mean coordinatewise, all second moments, and the derivative identity, so this is a citation defect rather than a false inequality or missing substantial prerequisite. The Statement’s subclass sentence, F6 and proof 1.1 now explicitly apply the scalar definition to each real coordinate. Updated the manifest description and contract derivation; provenance already says ai-altered, and no judge stamp existed.

Read every step and cited dependency. With B=Dpsi I^{-1}, the residual has zero mean and covariance Cov(T)-Dpsi I^{-1}Dpsi^T. All products are integrable, dimensions match, I and I^{-1} are symmetric, and every quadratic form is an expected square. Singular I is excluded; zero Dpsi and zero residual covariance work. Oxford Theorem 5.9’s full proof sketch and MIT 18.655 Theorems 3.4.3–3.4.4 were consulted. The scalar d=1 case uses the usual 1-by-1 matrix convention. CRITICAL risk review complete, repair confidence 1.

Consumer check: exact ID search through items and library finds no other item consumer and only the owning A-page listing/prose. Its description of vector estimators and explicit derivative identity remains accurate; no consumer repair or outside escalation is needed. The published scalar definition is sound and remains read-only.

### Level 8 — cex-uniform-moving-support-invalidates-naive-cramer-rao-bound

Accepted the direct density-integral variance calculation; final carrier verdict `amended_repair` also refreshes a stale supplier quotation in its contract. Reviewed all three steps and every direct dependency’s relevant statement. For each fixed theta>0, parameter differentiability fails only at x=theta, a Lebesgue-null endpoint; this meets the a.e. convention of the local score definition. The probability law is unchanged by endpoint density values. On its support, 2x is nonnegative (or use its globally nonnegative support-truncated version for the density formula). Polynomial FTC gives ET=theta and Var(T)=theta²/3; the constant score has mean -1/theta, second moment 1/theta² and covariance zero. Thus psi-prime=1 contradicts the naive bound theta². Countable-choice uses of the Lebesgue/box and Riemann-integral suppliers are covered by explicit AC. The theta=0 boundary is excluded; theta=1 checks 1/3<1. CRITICAL risk review complete; no additional item edit.

### Level 8 — ex-bernoulli-score-fisher-information-and-cramer-rao-attainment

`reviewed_no_defect`, change_kind `audit_enrichment`, defect_ids empty: the pre/post raw item hashes are identical; only its contract changed. Independently checked all four steps and nine supplier statements. The finite support has positive masses on the chosen neighborhood, integrable derivative envelopes 1 and 0, mean and second moment p, variance p(1-p), mean-zero score and information 1/[p(1-p)]. The covariance derivative identity equals 1 and the equality relation holds pointwise. Endpoints 0 and 1 are excluded; p=1/2 gives I=4 and variance 1/4. MIT 14.381 pp.4–6 gives matching Bernoulli calculations and attainment. CRITICAL risk review complete; no item edit or manufactured defect.

### Level 8 — ex-normal-location-score-information-and-cramer-rao-attainment

Accepted the reader’s explicit affine-density verification; final carrier verdict `amended_repair` also refreshes a stale supplier quotation in its contract. Read all eight steps and all 24 direct dependency statements. The moment supplier only requires an increment with the specified normal law: Xt=Z, Xs=0, s=0, t=1 and m=1 are admissible without a Brownian process. The local compact-interval FTC, exponential-series tail bound and monotone convergence also independently prove EZ²=1. Scaling and translation give the normal density on every Borel set, then the N(0,2sigma²) density proves integrability of the common Gaussian-polynomial envelope. Both first and second density derivatives have this envelope on a fixed location neighborhood, so the mean-zero and information theorem applies. Mean, variance, covariance derivative identity and equality relation are verified before the scalar bound is invoked. Sigma=0 is excluded; unit scale and zero score at x=mu are harmless. MIT 14.381 p.4 has matching normal information calculation. CRITICAL risk review complete; no additional item edit.

## Decisions and evidence closure

The decisions JSON contains exactly eight owed obligations, in generated dependency order with the refuter finding adjacent to its theorem: one accepted repair (score definition), five amended repairs, one audit enrichment (Bernoulli), and one confirmed nonfatal refuter finding. Every completed repair has repair_confidence 1. Seven closed defect-ledger rows were appended through the serialized native append tool; the generated ledger view was refreshed. The multivariate touched decision names both its accepted reader integrability correction and the coordinatewise citation defect shared with `refuter:7:1`, with explicit same-defect evidence. No row was created for a mechanical check failure.

The first focused strict contract check found five mechanical mismatches: F10’s contract use at score-identity step 1.1 was unsupported, scalar F6’s use at step 1.1 was omitted, and the three examples/counterexample quoted the pre-repair scalar statement. Removed the nonexistent use, added the actual use, and replaced the stale quotes with the exact current supplier Statement. These are contract corrections; they require no proof rewrite. The final strict check passes all seven items. Bernoulli’s audit-enrichment verdict does not close any reader, refuter or open-ledger finding.

The current owned cross-batch dependency input was maintained, especially the scalar unbiasedness supplier’s coordinatewise use by the vector theorem and the likelihood-density supplier’s use by the scalar theorem. Ran the authorized dependency-ledger refresh. Independent exact-ID consumer scans found no outside consumer of the multivariate theorem. For the reader’s score-definition change, current direct outside consumers `def-wald-score-likelihood-ratio-statistics`, `def-efficient-score`, and `ex-efficient-score-nuisance-projection` were checked at their actual uses: they use coordinate log derivatives and outer-product information, and remain compatible. No scalar-bound item consumer outside batch 7 was found. No outside mathematical edit or escalation is needed.

## Sources and prerequisite evidence

All actual direct dependency Definition/Statement sections were read; in-run suppliers were `def-dominated-statistical-experiment`, `def-likelihood-density`, `def-statistic-and-estimator`, and `def-unbiased-estimator-and-umvu`. Published suppliers were read only as prerequisite context, including the density-integration, DCT/MCT, linearity, real L2/Cauchy–Schwarz, calculus/FTC, normal-law/moment, box-volume, and scaling/translation statements. No defective published item was identified, so no published-consumer ledger change or lock was needed.

External primary source sections consulted: Oxford SB2.1 printed pp.21–24, Theorems 3.4/3.7, and pp.29–32, Theorems 5.3/5.9 and their full relevant arguments; MIT 18.655 Lecture 13 pp.6–8,10–11,16–19, score identities and Theorems 3.4.1/3.4.3/3.4.4; MIT 14.381 Lecture 6 pp.2,4–6, normal/Bernoulli calculations, covariance proof, attainment and moving-support example (https://ocw.mit.edu/courses/14-381-statistical-method-in-economics-fall-2018/15224973dfc1c2b4287804c8712681f7_MIT14_381F18_lec6.pdf). Local proof reasoning, rather than unchecked source regularity assertions, establishes the claims here. No source quote was substituted for a local proof.

## Checks and handoff

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-multivariate-cramer-rao-bound.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-multivariate-cramer-rao-bound.md`: 1 checked, 0 failing.
- `node tools/rendercheck.mjs items/thm-multivariate-cramer-rao-bound.md --quiet`: one file passes YAML, KaTeX and delimiter checks.
- `node tools/proof-contract.mjs research/mathematical-statistics-foundations-37-batch-7.proof-contracts.json --strict`: after the recorded corrections, 0 errors, 0 warnings, 7/7 checked.
- `node tools/risk-report.mjs research/mathematical-statistics-foundations-37-batch-7.proof-contracts.json`: all seven HIGH/CRITICAL subjects routed before review. Final `--require-reviewed`: 0 errors, seven complete reviews.
- After final item edits and reflow, `node tools/proof-layout.mjs items/thm-multivariate-cramer-rao-bound.md`: 1 item, 3 steps, 0 defects. This is the complete set of item paths edited by this dispatch.
- `node tools/defect-ledger.mjs validate --run mathematical-statistics-foundations-37`: exit 1, solely because outside batch 24 row `msf37-batch24-3a-fixed-radius-truncation` has subclass `proof-step-overstatement` outside the closed enum. At execution, 68 run rows were checked. No batch-7 row error was reported. Owner/batch-24 must normalize that row; it is outside this dispatch’s repair scope. No mathematical defect row was created for this mechanical failure.

Batch-7 mathematical review and all eight decisions are complete, with no substantial unmet prerequisite, unresolved mathematical uncertainty, published defect or local blocker. The outside batch-24 ledger-schema diagnostic remains for the owner. No judge, stamping, certification, dispatch or gate cycle was initiated. The engine owns hashes and gate processing.
