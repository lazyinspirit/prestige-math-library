# Step 3a adjudication — batch 66

Run: machine-learning-all-101-2026-10-19. Group: batch-66; original scope group v preserved. The generated order task routes four touched obligations and refuter:66:1, with no reader, page-only or foreign gate obligations. All five decisions are recorded in the accompanying decisions JSON. No blocker or escalation remains.

## Evidence and historical comparison

Read the order task, scope, reader report/findings, refuter artifact, pre/post snapshots, current carriers, manifest, contracts and source evidence. The live `.autopilot/machine-learning-all-101-2026-10-19/state.json` reports stage `3a-read`; Git HEAD inspected was `951a2e7a6d`. No engine transition was initiated.

For each of the four touched items, the complete original file in `research/machine-learning-all-101-2026-10-19-owner-step3-authenticated-preimages/preimage/items/` hashes exactly to its pre-reader snapshot. All seven original current item files matched their post-reader raw source hashes before this adjudication's edits. Exact preimage/current diffs establish the deltas below; no historical uncertainty or owner-current-content exception is needed.

Read actual current Definition/Statement interfaces of every external direct supplier, rather than relying on contract quotes: AC; Lebesgue measure; multivariate normal laws and moments; positive-definite Gaussian density; finite product measure and Tonelli; product Euclidean Lebesgue identification; expectation; directional KL; natural logarithm; independent Gaussian stacks; Gaussian conditional law; law/pushforward; variational-family admissibility; and the ELBO/KL decomposition. These are context/interface reviews, not full audits of all published supplier proofs.

Sources independently opened and relevant passages read:

- Ho, Jain, Abbeel, https://arxiv.org/pdf/2006.11239: §2 Eqs. (1)–(7), PDF pp. 2–3; §3.2 Eqs. (8)–(12) and Algorithm 1, PDF pp. 3–4; §3.4 Eq. (14), PDF p. 5; Appendix A Eqs. (17)–(22), PDF pp. 13–14. The local model uses a continuous Gaussian decoder; the paper's discretized image decoder and empirical results are not imported.
- Prince chapter transcription, https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html: tractable conditional and Gaussian decoder, lines 269–288; ELBO and simplification, lines 297–333. In particular lines 319–322 approximate the terminal-prior ratio; they do not establish exact finite-horizon cancellation. Reader source qualifications are retained.

## Reviews in dependency order

### def-forward-gaussian-diffusion-chain — level 0, risk review only

Finite d,T>=1 and the open schedule give positive finite forward Gaussian variances. Finite Borel reverse means and positive finite variances give measurable normalized reverse kernels. Successive Tonelli integration normalizes both finite path laws. AC covers Gaussian interfaces and countable choice in product-Lebesgue identification. The t=1 conditional on x0 is correctly a point mass; its learned decoder is separate. The sole TikZ diagram has forward x_(t-1) to x_t and reverse x_t to x_(t-1), with no inverse claim. No missing diagram is needed. Complete HIGH risk review saved; no decision owed.

### lem-isotropic-gaussian-kl-formula — level 0, touched

Both proof steps are sound. Positive densities give Q<<P. The Gaussian log-density ratio has finite quadratic moments; E||X-m||²=dv and E||X-n||²=dv+||m-n||² give the stated directional formula. At v=w and m=n the result is zero; zero displacement and unequal positive variances are admitted, while zero variances are excluded. AC is explicit. The exact reader diff is one extra blank line between already separated steps, with no mathematical edit. Verdict: reviewed_no_defect, change_kind metadata, defect_ids empty. Complete CRITICAL risk review saved.

### thm-gaussian-forward-and-posterior-kernels — level 1, risk review only

All four steps checked: innovation change of variables gives mutual independence; finite Gaussian stacking and scalar projections give joint normality; the variance sum telescopes to 1-bar-alpha_t. For adjacent states the observed covariance B=(1-bar-alpha_t)I is positive definite. Conditional-law substitution yields the stated posterior mean and Schur-complement variance beta_t(1-bar-alpha_(t-1))/(1-bar-alpha_t), positive for t>=2. T=1 keeps only its forward marginal. No unconditional reverse Gaussian assertion is made. Complete HIGH risk review saved; no decision owed.

### thm-ddpm-elbo-decomposition — level 2, touched

All six steps and actual prerequisites checked. The decoder bound gives finite evidence and positivity on a positive-measure box gives positive evidence. Gaussian forward residual moments make log q integrable. The proper positive posterior meets the variational-family support requirement, and the stated absolute-log-integrability hypothesis licenses the ELBO/KL theorem with its AC branch. The pathwise ratios telescope in the correct direction.

Retain reader step 2.2: reverse Gaussian log factors are bounded above, so integrability of their finite sum implies each factor is integrable. Forward marginal and conditional log densities have finite Gaussian quadratic moments. This closes the nonfatal omitted justification for termwise expectations (D01). Retain the Prince approximation qualification. The original Statement is unchanged. Verdict: accepted_repair, repair_confidence 1.

The noise-parameterization difference gives beta_t²/[alpha_t(1-bar-alpha_t)] times squared noise error, hence exactly w_t and C_t. T=1 has an empty interior sum and keeps the terminal and decoder terms. The explicit c-family witness is valid: sigma_1²=1/(2pi) and constant decoder mean x0 give p_theta(x0)=1 for every c; simple loss is c²/2. No exact terminal-prior matching is asserted. Complete CRITICAL risk review saved.

### ex-scalar-gaussian-diffusion-chain — level 2, risk review only

All four verification steps and supplier interfaces checked. The schedule gives bar-alpha_2=3/8, forward variance 5/8, posterior variance 1/5 and coefficients 2sqrt(3)/5 and sqrt(2)/5. x0=0 is valid. The t=1 point-mass boundary is correctly distinguished from a decoder density. Complete HIGH risk review saved; no decision owed.

### alg-epsilon-prediction-diffusion-training — level 3, touched and refuter:66:1

Every instruction and supplier interface checked. Retain the reader's explicit dimensions, domains, epsilon reverse means and mode-specific finite-expectation hypotheses. The original weighted return referred to p_theta without specifying its reverse means; the reader's definition makes it determinate (D02). Independent I,J,epsilon give the correct marginal; K_T is the exact Gaussian terminal KL. Positive schedule denominators and finite maps make all outputs finite. The decoder is used only in the J=1 weighted branch.

The refuter correctly identifies a separate nonfatal omission: no proved result established the expected-output property of the named estimator (D03). Verdict: confirmed_nonfatal. Added `lem-diffusion-objective-estimator-expectation` after the algorithm on the existing A page. It proves finite expectations and both exact empirical-objective identities, with no optimizer or convergence assertion. Added a Remarks link and justified_by entry; every procedure instruction and its Definition remain at the reader-post content. Touched verdict: amended_repair, repair_confidence 1. Both decisions reference the same D03 row for the common defect; the touched decision also references D02. Complete CRITICAL risk review saved before the new higher-level lemma review.

### ex-weighted-and-simple-diffusion-losses — level 3, touched

All four steps checked: the affine predictor has step-two error one and step-one error zero; sigma_2²=1/5 gives w2=2 and C2=0. The uniform simple objective's step-two contribution is 1/2. Retain the reader's fuller F2 and the restricted final inference comparing those contributions (D04): a single contribution comparison alone does not identify whole objectives or likelihood. Original Example unchanged. Verdict: accepted_repair, repair_confidence 1. Retain the source qualification. No additional defect or diagram.

### lem-diffusion-objective-estimator-expectation — new level 4 repair supplier

Independently rechecked its three proof steps and six supplier interfaces. Conditional on I=i,J=t, the affine noise sample has the forward marginal. In simple mode finite squared-error expectations give integrability and averaging yields N^(-1) sum_i L_simple. In weighted mode the Gaussian KL formula gives K_T, while the proved ELBO decomposition and algorithm hypotheses supply absolute integrability. Averaging over J cancels T on every decoder/interior contribution and counts K_T once, giving -ELBO for the selected datum. Averaging over I gives the empirical negative ELBO. N=1, T=1, zero error and signed decoder outputs are covered. AC is inherited; no extra choice. Complete HIGH risk review saved.

Updated only the owning A page, manifest, proof contract, source coverage/evidence and algorithm references. The A page remains YAML only with compact-v1. No new page/pair was created. No old judge record was retained on a materially rewritten proof; neither changed item had such a record. The helper has no judge stamp.

## Consumers, published content and ledger

The reader changed the algorithm Definition but no other original Statement/Definition. A scan of all item references finds no original external consumer of that algorithm; its new helper is checked above. The ELBO's existing direct item consumers are the owned algorithm and weighted example, both reviewed against its unchanged Statement. No necessary interface change propagates beyond the batch. The empty batch cross-dependency record remains valid. Updated the owned-consumer block in `briefs/tasks/frontier-dependency-ledger.md`; stable IDs and proposed withdrawals are preserved.

No defective published supplier was identified; published files and their ledger were not edited. Four closed defect rows D01–D04 were appended with caught_at_stage 3a-adjudicate. The lemma's whitespace-only delta has no defect row. The refuter omission has one row shared by both related decisions. No mechanical failure was made a defect row.

## Local validation and handoff

- Reflow: both edited/new item paths unchanged by reflow.
- Precheck: the new lemma initially needed canonical phase numbering; adopted it and synchronized its contract. Final invocation on all four reader-touched items plus the helper: four proof-bearing items passed, zero failures; the algorithm has no phase proof.
- Proof contract: an initial helper bookkeeping failure was corrected (tag extraction and anchored boundary evidence). Final `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-66.proof-contracts.json --strict`: 8/8 checked, zero errors and warnings.
- Rendercheck: algorithm, new helper and changed A page: three files passed with actual KaTeX and YAML parsing.
- Risk report run before reviews, again after adding the helper, and with --require-reviewed: eight items routed, zero errors; all seven HIGH/CRITICAL items have specific complete reviews.
- Final required proof-layout invocation, after final item edits: `node tools/proof-layout.mjs items/alg-epsilon-prediction-diffusion-training.md items/lem-diffusion-objective-estimator-expectation.md`: two items, three proof steps, zero defects.
- Defect-ledger append succeeded for all four rows and refreshed its generated index. An initial rejected repair_cost enum was corrected before append; no partial row was written.

These are local checks, not a judge verdict, stamp or native gate battery. The engine owns decision hashing and all remaining gates and transitions. No outside repair, escalation or uncertainty remains from this dispatched review.
