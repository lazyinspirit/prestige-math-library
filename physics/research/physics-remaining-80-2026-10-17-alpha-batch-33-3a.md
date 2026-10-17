# Batch 33 Step 3a adjudication

Run: physics-remaining-80-2026-10-17. Group: batch-33.

Scope: six touched obligations; reader and refuter findings are empty; no page obligations. Initial risk-report: nine HIGH/CRITICAL items and one ordinary item, zero mechanical errors. All six current touched carriers match the post-reader raw SHA-256 snapshot.

## Completed level 0 review

- post-csm-dk-selected-thermal-langevin-bath: accept reader repair. The scalar coordinate and probability-one C1 qualification avoid an unjustified full worldline assertion; F0-measurable initial data match the exact published OU definition.
- thm-csm-dk-ou-velocity-diffusion-response: accept reader repair. Checked convolution, continuous uniqueness, integrated Gaussian law, covariance integral, scaling limit and nonzero constant-input division in steps 1.1–4.1.

Dependencies read: post-cm01-frames (especially clause ii); def-axiom-of-choice; def-tdmath-ornstein-uhlenbeck-equation, Definition; thm-tdmath-ornstein-uhlenbeck-model, Statement and proof. These suppliers retain published status; no transitive re-audit is claimed. Full specific risk reviews are recorded in the owning contract.

Next: level 1 rates, conditional OU theorem and finite-chain construction; then level 2 and level 3.

## Completed level 1 review

- post-csm-dk-selected-reversible-bath-rates: amended reader repair. Finite t_f and explicit symmetric coupling are sound, but the rate ratio was undefined on allowed absent edges. Restricted the ratio to positive-rate edges and explained the zero product identity. The controlled-rate rule and all predictions remain intact. Direct consumer is pthm-csm-dk-finite-bath-response; its actual use will be checked at level 3 before closure.
- pthm-csm-dk-ou-green-kubo-einstein: accept reader repair. The added Green–Kubo integral is exactly v/gamma and equals the variance limit. Its F0 preparation meets the corrected supplier.
- thm-csm-dk-nonexplosive-ctmc-and-gap: no defect found in uniformization, nonexplosion, spectral gap or two-sided extension. Reviewed Ionescu–Tulcea and real spectral theorem Statements and local use; all finite probabilities and positive inner-product hypotheses hold.

Next: level 2 response, entropy/averages and lumpability.

## Completed level 2 review

- thm-csm-dk-finite-rate-fluctuation-response: accept reader repair. Explicit t_f and normalized Gibbs weights match the compact-horizon Picard/parameter derivative proof. Independently checked pi K=-beta pi(QB), response sign, mean-zero inverse, covariance symmetry and positive semidefiniteness.
- thm-csm-dk-markov-entropy-and-strong-averages: reviewed without defect. Positive times remove logarithmic singularities; continuity at zero probabilities and spectral convergence close the endpoint. Summable square-grid tail estimates, bounded interpolation and path-law absolute continuity establish the almost-sure result for every initial law.
- thm-csm-dk-strong-lumpability: reviewed both directions without defect, including k=1 and singleton partitions. The theorem concerns a common generator for all preparations.

Read the exact Definition of def-countable-choice and current batch-30 thm-csm-dk-integrable-covariance-green-kubo Statement and complete proof. Its hypotheses (centered, bounded hence second moment, joint measurability on all real times, stationary second moments, absolutely integrable covariance, AC_omega) hold in both owned consumers. This draft supplier is used at its actual proved local scope, with no publication or independent certification inferred.

Next: level 3 conditional finite bath and hidden-state example; finalize consumer checks and local validation.

## Completed level 3 review and consumers

- pthm-csm-dk-finite-bath-response: accept reader repair. Normalized finite Gibbs weights and finite response horizon satisfy the mathematical supplier. The any-initial-law relaxation branch and equilibrium-preparation response branch remain separate. SI susceptibility and response units agree.
- cex-csm-dk-hidden-state-rate-obstruction: no defect. The three-state path is reversible and the off-block rates 0 and 1 give different first-order block-transition probabilities, exactly disproving a common all-preparations generator.

Consumer search of current items and library found only owned direct item consumers and the assigned A-page summary for the six changed interfaces. Thermal postulate -> rates postulate and OU physical theorem; OU mathematical theorem -> OU physical theorem; rate postulate -> finite-bath physical theorem; finite response mathematical theorem -> finite-bath physical theorem. The two physical theorems have no item consumers. Rechecked actual supplier uses: F0 preparation is available; the rate consumer uses the controlled-rate formula and product balance on missing edges, so no additional carrier edit is necessary. The assigned A-page summary makes only the resulting conditional predictions and remains sound. No affected outside consumer requires escalation.

## Decisions and records

Exactly six touched decisions are in the task-named decisions JSON: five accepted_repair and one amended_repair (the rates postulate). Every completed repair has confidence 1. Seven closed fixed rows were appended to research/defect-ledger.jsonl: the six reader-described corrections plus the distinct absent-edge ratio correction. The Green–Kubo title/interface completion is polish, not an incorrect transport computation. No reader/refuter/page decision was invented.

All six touched carriers initially matched the post-reader item hashes, and each differs from its recorded pre-reader hash. The five accepted carriers remain byte-identical to post-reader; the rates postulate has only the documented ratio amendment. The pre-reader raw carriers are not present in the dispatched artifacts; historical change descriptions are taken from the reader report and manifest's retained older statement fields, not reconstructed from hashes. No historical source-reading attestation is claimed. Current claims and actual prerequisites were independently reviewed in full at the scope described above. Manifest statement fields for all six touched carriers and cited current supplier quotations were synchronized; this repairs stale metadata rather than adding a content obligation. Existing source-backed provenance remains appropriate; no item had a judge record to invalidate.

The two owned proof consumers' cross-batch rows now record the independently checked exact batch-30 covariance use. Other inherited page/remark edge rows remain unchanged and are outside this dispatch's routed claim review. No defective published supplier was found in the actual supplier uses, so the published-consumer ledger was not changed. No new definition, lemma, page or pair was required. No escalation or unresolved scientific blocker remains.

## Source evidence and limits

- [Seifert](https://arxiv.org/html/1205.4176v1): §2.6.1, equation (38), underdamped dynamics and thermal noise; §6.1.1, rate conventions; §8.1.1, equations (165)–(166), conjugate-field equilibrium response; §§8.2.3–8.2.4, equations (193)–(195), perturbed equilibrium and rate ratios; §9.4.5, equations (240)–(242), ratio constraint and independent pair prefactors. The PDF fetch failed; the arXiv HTML supplied these statements. With source friction coefficient equal to m gamma and temperature in energy units k_B T_b, its thermal forcing agrees with the local noise normalization. Symmetric splitting is an additional adopted choice.
- [Pavliotis](https://www.ma.imperial.ac.uk/~pavl/PavliotisBook.pdf): §3.7, equation (3.101) and Proposition 3.10, linear solution and covariance; §4.4, invariant Gaussian and weighted-generator context; §1.2, equation (1.15), integrated covariance definition. The actual local OU theorem supplies the exact stationary scalar covariance and conditional Gaussian result. The local proofs independently evaluate the integrals and do not use a general Brownian scaling assertion from source prose.
- [Aldous–Fill](https://www.stat.berkeley.edu/users/aldous/RWG/book.pdf): Chapter 2 §2.1.2, equations (2.2)–(2.3), nonnegative rates, negative diagonal, jump-and-hold law and exp(tQ); Chapter 3 §3.1, equations (3.1) and (3.4), detailed balance and continuous-time convention. Local proofs establish uniformization, nonexplosion, spectral gap, two-sided construction and coarse criterion directly.

Only relevant source statements and actual supplier arguments were checked; no full-monograph or full-transitive-published-library audit is claimed. No measurements, sampling precision, p-values or empirical certainty are introduced. Statistical conclusions are under the explicitly adopted probability laws.

## Local checks

- Initial risk-report: zero errors; nine HIGH/CRITICAL items reviewed and recorded complete in their dependency order. Final --require-reviewed: zero errors, 10 contracts routed.
- Strict proof-contract check: 10/10, zero errors or warnings.
- Normative precheck with the tsx runner: all six touched items pass (including the two nonproof structures). A direct Node invocation of the .mts precheck was unavailable under Node 22; the documented tsx runner succeeded.
- Reflow with the documented tsx runner: all six unchanged. Direct Node .mts reflow help likewise lacked a loader; no content was changed by that failed help invocation.
- Rendercheck of the amended postulate: pass.

Final batched proof-layout check: six touched items, 15 steps, zero defects. Exact obligation coverage and defect-reference resolution also passed; five carriers remain post-reader exact and only the rates postulate has the documented amendment. The engine retains decision hashing and gate ownership; no judge, stamp, dispatch or gate battery was initiated.
