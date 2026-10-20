# Batch 68 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`; group: `batch-68`; dispatch: `3a-batch-68`.

## Producer review checkpoint

Reviewed batch 67 current `lem-reversed-kernels-and-generator-identity`, its complete proof, its exact DCT/Fubini and Bayes-kernel dependencies, its owning contract and page manifest, and `thm-markov-diffusion-reversal-by-bayes-kernels` through which the assigned sampler consumes it. Reader:68:1 and refuter:68:1 identify the same unresolved substantial prerequisite: a justified integrated reverse-kernel generator/martingale identity under the actual stated regularity. Proof 1.2 asserts local uniform o(h) without a uniform estimate as the starting time varies; 2.1 integrates partition errors against kernels over the entire state space, requiring an additional justified limit. Individual integrability and validity of differentiation under fixed integrals do not supply this partition majorant. DCT requires one integrable bound; Fubini requires an L1 product. Neither proves these missing properties. The algebra in 3.1 and Bayes normalization in 1.1 are sound. Zero tests and equal-time identity kernels do not repair the analytic gap.

Attempted closure: inspected the adjoint Duhamel expansion and telescoping partition argument, the exact cited local suppliers, Anderson Sections 3 and 5, and Tang–Zhao Theorem 2.1. Anderson's theorem additionally assumes smooth unique solvability for augmented joint forward equations; Section 5 does not establish the missing trajectory identification under this local statement. Tang–Zhao explicitly labels its derivation heuristic. Required owner action: obtain batch-67 supplier-first proof/regularity repair (with actual uniform/integrable estimates or a fully matched proved theorem), then review the changed reversal theorem and sampler interface. No out-of-batch source was edited. These two obligations remain escalated and the sampler risk stays open; no completed repair or closed defect is invented.

The Anderson reference in the lemma's Statement references still uses `eva.fcien.edu.uy` and failed web retrieval. The source metadata already uses working `eva.fcien.udelar.edu.uy`, from which the actual 14-page paper was read in relevant sections. This is a nonfatal citation-access defect, not a counterexample to the reverse formula. Its correction is routed to batch 67.

## Probability-flow theorem checkpoint

Reviewed `thm-probability-flow-ode-marginals` Proof 1.1–3.1 against marginal score, pushforward law, monotone convergence, and pi-lambda statements. The divergence product rule includes the state-dependent covariance-divergence term. Common compact support justifies integration by parts and differentiation; the inverse-flow image of [0,t] times a compact test support is compact. Chain-rule characteristic tests give equal C_c^1 integrals, and the explicit nondecreasing cubic cutoffs recover bounded rational open boxes. Empty intersections and total-space masses give the needed pi/lambda classes. Endpoints are one-sided, zero velocity and singular covariance cause no division, and no path-law equivalence or density existence is claimed. Current proof is sound under the explicitly assumed global jointly C1 diffeomorphism flow.

## Stationary OU checkpoint

Reviewed `ex-stationary-ornstein-uhlenbeck-probability-flow` Verification 1.1–3.1 and actual scalar Ito, deterministic Gaussian integral, normal density, independence, affine-characteristic-function, almost-sure-subsequence, Brownian and probability-flow interfaces. The filtration and AC assumptions are explicit. Integrands are square integrable on every finite interval; a Brownian-measurable version of the integral preserves independence of X0. Variances theta exp(-2 gamma t) and theta(1-exp(-2 gamma t)) sum to theta, including t=0. The FP terms cancel and the velocity vanishes, so the identity global flow meets the theorem's hypotheses. gamma,theta,T>0 exclude undefined densities; the scalar state and empty event are harmless. No new defect found.

## Pending work at checkpoint

Finish sampler and two level-4 example risk records, persist all exact decisions and ledger/disposition routes, and run local focused checks. No diagrams occur in the reviewed carriers.

## alg-predictor-corrector-score-sampling

Read the complete Definition, reference derivation and Remarks, reader/refuter findings, exact archived pre/post bytes and actual ULA, score, Brownian, Ito, normal and reversal supplier interfaces. The current raw hash equals native reader-post 6775c301f4d21fe20cc94e4abf8fd25d9863d64b5b06a9194de7669c9e36ec07; the reader only separated labeled references. h=(T-epsilon)/N is positive, t_N=epsilon, predictor uses t_k and corrector uses t_(k+1); signs and sqrt(h),sqrt(2 eta_k) match Euler/ULA. N=1,d=1 and zero scores remain valid. U=-log p is C1 with normalizer one. The finite procedure makes no solver exactness or convergence claim; AC is declared and independent Gaussian inputs are supplied. However its reference paragraph asserts the shifted process has the reverse Brownian driver using batch-67 theorem step 2.1, which relies on the unresolved generator lemma. Read that current lemma, contract and manifest: no uniform partition-error domination is stated or proved. DCT and Fubini do not supply it; Anderson Section 3 has additional joint-density uniqueness assumptions and Tang-Zhao Theorem 2.1 is heuristic. Supplier-first owner repair and renewed sampler interface review are required. Risk is deliberately OPEN, not a complete acceptance.

## ex-singular-data-score-truncation

Read Verification 1.1–2.1 and actual Brownian, normal-density, marginal-score, law, DCT and weak-convergence statements. At t>0 the Gaussian density is positive finite and score -x/t; singleton mass at t=0 rules out a Lebesgue density. The explicit Gaussian substitution and vanishing integration-by-parts boundary give E W_epsilon^2=epsilon. One common continuous-path event yields W_epsilon ->0, and for each bounded continuous f, the single constant majorant ||f||_infinity is integrable on the probability space; sequential DCT gives the full weak limit. AC is explicit. The example uses only the sampler requirement for a positive-time score, not its unresolved reverse martingale theorem; no numerical output or accuracy claim is deduced. Empty events, t=0 and positive epsilon<T are covered. No local defect found.

## ex-vp-finite-terminal-prior-mismatch

Read Verification 1.1–3.1 and actual Ito, deterministic Gaussian integral, normal-density, score, law and sampler input interfaces. Continuous positive beta on [0,T] makes B C1 and deterministic integrating factor square integrable. Ito product gives the VP SDE; integrating (exp B) prime gives variance 1-exp(-B(t)). Its endpoint t=0 is Dirac; for all t>0 the density/score is valid. 0<B(T)<infinity implies 0<v_T<1; the explicit Gaussian second-moment integral distinguishes P_T from N(0,1). AC and filtration increment hypotheses match suppliers. Its only sampler use is the explicit P_T initial draw, independent of the unresolved general reverse martingale proof. Finite T is essential; no infinite-horizon or convergence-rate conclusion is asserted. No local defect found.

## Final dispositions and scope

Exactly four decisions are written in the companion `alpha-batch-68-3a-decisions.json`, with `group: batch-68`:

| Obligation | Verdict | Evidence/disposition |
|---|---|---|
| reader:68:1 | escalated | Substantial batch-67 reverse generator/martingale prerequisite remains unproved; open causal row `ml101-b68-reverse-generator-domination`. |
| refuter:68:1 | escalated | Same mathematical gap, independently reviewed; same open causal row, not a duplicate defect. |
| refuter:68:2 | confirmed_nonfatal | Bad Statement-reference host; correct host already in metadata. Closed nonfatal-recorded row `ml101-b68-anderson-reference-host`; owner correction requested, no repair claimed. |
| touched:68:alg-predictor-corrector-score-sampling | accepted_repair | Accept the exact reader reference-layout change only; closed row `ml101-b68-reader-reference-layout`, repair_confidence 1. The independent mathematical escalation remains open. |

There are no owed page or foreign-gate decisions. The two assigned page inventories and compact-v1 flags are intact and bodies empty. All six current assigned statements/definitions/examples are uninterrupted by hyperlinks, with references immediately afterward. No TikZ/tikzcd or other mathematical diagram occurs, and none is needed for these scalar calculations and analytic arguments. No item source, page, manifest, published carrier, judge record, or engine state was changed by this adjudicator. No Statement/Definition changed, so no new consumer-propagation repair is triggered. Existing stable IDs and proposed withdrawals remain present. Published supplier interfaces were inspected for actual uses; no published mathematical defect is asserted and no published ledger edit is needed.

The two escalated findings deliberately reference an OPEN row. The instruction to preserve unresolved escalations and their risks precludes manufacturing the ordinarily required closed reader/refuter ledger row. A complete producer repair and owner resolution, followed by independent current consumer review, are still required. The nonfatal URL row closes its severity disposition only, not a purported source repair.

Four CRITICAL risk reviews are complete: probability-flow theorem, stationary OU, singular cutoff, finite VP mismatch. The CRITICAL sampler review contains a detailed assessment but has status open. The examples' references to the sampler concern its explicit score-domain/initial-law inputs; their Gaussian and weak-limit proofs do not invoke the missing reverse generator identity. `batch-68.cross-batch-dependencies.json` now marks the affected reversal page/item interfaces open while retaining earlier AC-review evidence. The required frontier dependency ledger has the same producer-first alert.

## Historical binding

Full archived pre/post sampler source hashes were recomputed and match `step3-hash-68-pre.json` and `step3-hash-68-post.json`: pre `e35f471eda513771134e014b8ba37e9aaa924e6c5767ea54e904de124dad8643`, post/current `6775c301f4d21fe20cc94e4abf8fd25d9863d64b5b06a9194de7669c9e36ec07`. The complete diff contains only reference paragraph separation and grammatical transitions; mathematics and the Definition are identical. Archives are under `research/machine-learning-all-101-2026-10-19-owner-step3-authenticated-preimages/preimage/items/` and `research/machine-learning-all-101-2026-10-19-owner-step3-authenticated-reader-post/batch-68/sources/items/` respectively.

Current producer hash is `f175c411a0351c6f6dfc6e1051f4161219734f3b5f09b5debf2a0210b1fb4c33`, exactly the routed refuter observation. The producer pre-snapshot file hashes to `f1b824a50eff07c98713f099b2f70812e9edab3f3857332b178b50b6b84b0973`; its pre-reader lemma fingerprint is `fd8c63d6be8ce5716a2a96303df06d39be5851410e920c81f527a5895b5f7c04`. Every routed producer_batch, consumer_id, dependency path, producer-at-split and immutable pre-snapshot structure is preserved verbatim in its decision. Current rereading does not erase the original findings or supply inherited acceptance.

## Sources actually checked

- [Anderson, Reverse-time diffusion equation models](https://eva.fcien.udelar.edu.uy/pluginfile.php/166428/mod_resource/content/1/1982_andersonREVERSE-TIME%20DIFFUSION%20EQUATION%20MODELS.pdf), Section 3 theorem, printed pp. 317–318, and Section 5, pp. 322–323: the stated joint-density smooth-unique-solvability requirements and the limitation concerning identifying trajectories were checked against the local lemma. These are not matched by its existing hypotheses.
- [Tang and Zhao](https://arxiv.org/html/2402.07487v3), Theorem 2.1 and following proof/commentary: the drift formula is stated subject to unspecified suitable conditions; its FP derivation is expressly heuristic. This does not prove the local missing kernel limit.
- [Song et al.](https://arxiv.org/html/2011.13456), Section 4.2 and Appendix D.1, equations (35)–(38): predictor/corrector ordering and the covariance-divergence and half-score terms agree with the owned formulas. Local global-flow uniqueness is proved in the assigned theorem rather than inferred from this source's FP calculation.
- [Durmus and Moulines](https://arxiv.org/pdf/1507.05021v3), Section 1, equation (2), PDF p. 2: the ULA update uses negative potential gradient and noise sqrt(2 gamma); fixed positive-step invariant laws need not be the target. The sampler's caveat is appropriate.
- [Särkkä and Solin](https://users.aalto.fi/~asolin/sde-book/sde-book.pdf), Section 5.2 Theorem 5.4 and its integration-by-parts argument, Example 5.7, and Algorithm 8.1: checked forward-equation convention, stationary OU variance q/(2 lambda), and time-dependent Euler predictor update. No convergence result from the book is imported.

The cited Raginsky text was not needed to close any local inference and was not independently read in this adjudication. Exact local supplier statements, not these source names or earlier reports, supplied the prerequisite checks recorded above. This review does not audit the full published transitive closure.

## Local checks and handoff

- Initial `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-68.proof-contracts.json`: exit 0; all five CRITICAL items identified and assessed.
- Same command with `--require-reviewed` after the records: exit 1, exactly one `risk-review-missing` diagnostic for `alg-predictor-corrector-score-sampling`. This reflects the deliberately OPEN substantive escalation; no passing review is claimed.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-68.proof-contracts.json --strict`: exit 0, six items, zero errors/warnings.
- `node tools/tsx-run.mjs tools/precheck.mts` on the six explicit batch-68 item paths: exit 0, four proof-bearing items checked, zero failures.
- `node tools/rendercheck.mjs` on the six explicit batch-68 items and both assigned pages with `--quiet`: exit 0, eight files parse and render without error.
- One batched `node tools/proof-layout.mjs` call on all six batch-68 items: exit 0, 15 steps, zero defects. No item was edited here, and no item edit or formatter followed that check.
- Companion JSON parses; four unique owed obligations are present; the three causal ledger IDs each occur exactly once. No mechanical failure was entered as a defect.

The live `.autopilot/machine-learning-all-101-2026-10-19/state.json` was inspected (stage 3a-read, unpaused); current git log begins at `951a2e7a6d`. No historical resume handoff was used to infer active work. No agent dispatch, judge, stamp, gate battery, publication, push, commit, or scheduling/transition action was performed. The engine owns exact current hash stamping and native gates. Owner action remains the batch-67 generator proof and reference correction, then sampler risk closure; the checkpoint's formerly pending local assessment/bookkeeping is now complete.
