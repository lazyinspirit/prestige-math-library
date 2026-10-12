# Machine-learning prose scaffold audit: final report

The full audit covers all 83 Category 4 machine-learning pair designs and all 12 independent general-mathematics prerequisite designs. Inline repairs are in research/plan-machine-learning-track.md. No library item or page, canonical plan, workflow state, publication, or commit was created.

The final machine-learning plan SHA-256 is de4dd13424fd25ddec4bf14ec47251dafb343d553691ad6b3a56e87feb368185. The source manifest at research/statistics-advanced-scaffolds-2026-10-11/learning-06/sources.json is bound by SHA-256 33bb1cf20f39b8d4ab3c269eb3b8d3ca0d9f8d1e0a446c4ec972dcc27a16348b. Pair JSON files preserve source citation, exact source ranges, cached source hashes, supplier interfaces/statuses, plan-section hashes, and future proof obligations.

## Evidence files

The main-pair audit is recorded in these dependency-ordered batches:

- pair-audit-batch-01-11.json
- pair-audit-batch-12-15.json
- pair-audit-batch-16-19.json
- pair-audit-batch-20-23.json
- pair-audit-batch-24-29.json
- pair-audit-batch-30-36.json
- pair-audit-batch-37-50.json
- pair-audit-batch-51-55.json
- pair-audit-batch-56-60.json
- pair-audit-batch-61-64.json
- pair-audit-batch-65-68.json
- pair-audit-batch-69-72.json
- pair-audit-batch-73-76.json
- pair-audit-batch-77-80.json
- pair-audit-batch-81-83.json

The independent-prerequisite audits and focused followups are in pair-audit-prerequisites-transport-sde-01-04.json, pair-audit-prerequisites-numerical-05-08.json, pair-audit-prerequisites-wgf-rmt-09-12.json, pair-audit-prerequisite-p-sde-02-followup.json, pair-audit-prerequisite-p-num-sde-02-followup.json, and pair-audit-prerequisite-p-rmt-02-page-numbering-followup.json. The ML-83 category ownership correction is recorded in pair-audit-ml-83-category-source-classification-followup.json. Earlier checkpoint hashes are preserved in those files; followup records bind later focused changes without rewriting history.

The final four ML batches cover ML-69 through ML-83. Their JSON files parse and pair IDs are contiguous. The ML-83 category-label correction is bound by its focused followup; the other fourteen terminal pair-section hashes match the final plan. The final-coverage-manifest.json binds current section hashes for all 83 ML and 12 independent prerequisites to the base evidence and focused followups.

## Material cross-track interfaces

The audit keeps published library contracts separate from future proposed interfaces. Examples of exact reuse and its limits include:

- ML-15, ML-53 and ML-59 carry BCS-03’s Gaussian-conditioning contract: PSD prior/noise covariance is allowed, but the observed covariance must be positive definite for the density formula. BCS-22’s ELBO/KL use requires absolute continuity, finite-positive normalizer and finite absolute log-integrability; ML-59 now states these conditions explicitly. ML-15 uses BCS-11’s combined finite-GP posterior/predictive interface under its observed-covariance SPD premise.
- ML-25 consumes SME-20’s recursive-SCM, d-separation, factorization-implies-global-Markov, and separately defined faithfulness contracts. Markov-equivalence, skeleton/unshielded-collider characterization, CPDAG, and oracle orientation proofs remain ML-owned.
- ML-64 consumes MSF-37’s split-conformal rank/sentinel and training-conditional marginal-coverage interface. It does not claim conditional or shifted coverage.
- ML-36 uses existing AP interfaces only where their exact Banach-space/factorization premises fit; approximation results for arbitrary targets or nonlinear neural maps are not inferred. Variable-coefficient PDE existence, stability, and energy arguments remain local proof designs.
- ML-83 reuses published filtration, adaptedness, predictability, conditional-expectation and martingale definitions. MSF-34 (Category 1) and SME-58/60 (Category 2) are proposed earlier-category interfaces, not published library items. ML-83 is not a supplier to any earlier category.

The exact source clauses/statuses and limits appear in each pair’s JSON record. The detailed supplier and independent-prerequisite contracts are not inferred from interface names alone.

## Final-batch findings and remaining proof obligations

ML-69–70 state expected Exp3/Exp4 regret only for the audited oblivious protocol, preserve the unbounded importance-estimator issue, and leave the local potential/second-moment arguments to future item proofs. Exp4-IX and omitted exercise proofs are not imported.

ML-71 retains the source’s self-normalized confidence and regret bounds with the conditional MGF, feature norm, parameter norm, reward-range, monotone-radius and attained-maximum premises. Its Gaussian-mixture/supermartingale and determinant calculations remain author obligations. ML-72 uses the published Banach fixed-point contract with contraction constant exactly gamma; Bellman contraction, greedy improvement and tie-retaining finite termination remain local proofs.

ML-73 gives Q-learning the finite discounted model, bounded reward, infinite visitation, per-pair Robbins–Monro and martingale-noise premises. Sutton–Barto cites rather than fully proves tabular Q/Sarsa convergence; its exploring-starts Monte Carlo control proof remains open. ML-74 defines PAC-MDP through the realized path’s count of non-epsilon-optimal decision steps and preserves the article’s adaptive concentration gap. ML-75 states UCRL2’s exact $34DS\sqrt{AT\log(T/\delta)}$ upper bound and $0.015\sqrt{DSAT}$ lower bound with their distinct restrictions. ML-76 carries terminating episodes and differentiation/integrability conditions; it makes no nonlinear actor–critic convergence claim.

ML-77 records Baird’s expected/deterministic-update result and keeps it separate from an almost-sure stochastic claim. Its two indistinguishable MRPs have no action-dependent policies; the finite calculations for both the update and Bellman-error objectives remain future work. ML-78 retains Dyna-Q’s deterministic table-model convention and RTDP’s restricted stochastic-optimal-path theorem. Its single-policy finite-horizon simulation inequality is a local design, requiring a proof and uniform errors over the union of reachable pairs; it does not guarantee an optimizer under model shift. ML-79 leaves trajectory RN factorization, doubly robust identities and the finite unseen-action impossibility construction as local proofs under support/integrability premises. ML-80 requires a positive Bayes normalizer, finite horizon, and a local belief-sufficiency/alpha-vector induction; the report does not imply model learning.

ML-81 separates DAgger’s no-regret/task-cost reduction from its Azuma finite-sample result and includes the one-step cost-to-go, surrogate and expert-mixing premises. ML-82 states Achiam et al.’s average-divergence theorem, but its proof is referred to an unaudited supplement; the performance-difference derivation and finite-action TV/KL/Jensen step remain open. ML-83 follows Howard et al.’s two-sided all-times statement using predictable bounded forecasts and the observed squared forecast-error clock. The Fan inequality and resulting scalar exponential-supermartingale construction remain local item-proof obligations. Matrix claims and the uninspected Howard et al. (2020) facts are excluded.

The independent prerequisite files similarly retain their exact unresolved obligations: finite and compact Kantorovich–Rubinstein duality proofs; a source-matched density-regularity theorem and unbounded-start reverse-diffusion proof design; strong/weak Euler estimates with explicit moment conditions; Wasserstein-gradient-flow existence and regularity; and Marchenko–Pastur/edge/directional-resolvent proofs. The Rubio–Mestre future-dependent martingale argument remains rejected; Bai–Miao–Pan’s adapted proof route and the local corrections are separately recorded.

## Validation

All four terminal pair JSON files parse and cover ML-69–ML-83 without gaps. The focused ML-83 category-classification followup rebinds its final section hash; the other fourteen terminal section hashes match the plan. Scoped rendercheck on the final machine-learning plan reports zero errors and zero warnings; the machine-readable result is rendercheck-final.json. The coverage manifest SHA-256 is fac51db193f0d782bf7488411cf5f793c9076f5d7a533c8d61391ee9471ea9cc. PROGRESS.md contains the batch checkpoints and final hashes. The root owns the combined cross-plan integration checks.
