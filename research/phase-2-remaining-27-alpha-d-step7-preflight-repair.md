# Step-7 preflight repair — group d

Run: `phase-2-remaining-27`

Batches: `7`, `8`, `6`

Dispatch: `step7-preflight-d-1`

The twelve owned carriers were reread against their current proof contracts, exact cited clauses, and source locators. Contract-only changes do not alter `itemHashGuard`; every item edit below passed focused precheck, was followed by contract regeneration, and has an append-only defect-ledger row with the exact full pre/post guard digests. Correction rows supersede the earlier partial rows where the mathematical reread found more than the original structural failure. No item was approved or re-issued, and no judge record or stamp was written.

## `cex-finite-quadratic-variation-does-not-imply-finite-total-variation`

- Failure/cause: the F1 contract quote was stale after its supplier changed. Rereading the current supplier also showed that the carrier overreached from a fixed-horizon probability-one statement (or a prescribed countable horizon family) to one outcome simultaneously covering every compact interval.
- Repair: regenerated F1 and narrowed the refuted implication, witness, proof, and source note to the fixed interval `[0,1]`. The current supplier gives uniform dyadic quadratic-variation convergence and infinite total variation there on the same probability-one event.
- Evidence: Lawler, *Stochastic Calculus*, §2.8 (`https://www.math.uchicago.edu/~lawler/finbook.pdf`); exact Statement of `cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation`; `def-axiom-of-choice`.
- Hash/tools: `c515af6659aa71f17e04e377d1347ce5ed6ea04bc1dc1bcff5948eb5a9273c60` → `671fe2402db202642e0f567de4deea8e66b90032f1bc569cea130847987628f6`; precheck PASS; batch-7 regeneration; strict contract PASS; defect `p2r27-step7-preflight-d-008`.
- Blocker: none.

## `cex-symmetric-need-not-be-self-adjoint`

- Failure/cause: the repaired density argument load-bearingly uses the later cutoff lemma, but that edge remained in `deps` rather than the counterexample's permitted `forward_refs` declaration.
- Repair: moved `lem-schwartz-cutoffs-from-the-standard-smooth-step` from `deps` to `forward_refs`; the proof use was retained. Refreshed and reread the unified frontier ledger.
- Evidence: Williams, Example 7.23, pp.32–34; Teschl, §2.6, pp.91–95; Buehler–Salamon, Exercise 6.28/§6.3.2; exact cutoff, absolute-continuity, and adjoint clauses used by A1–A4.
- Hash/tools: `d99f217a9d08cfd627db56f68e48495a9f15cc574f1a8ac78e5aa8d27635d860` → `1cd4c284c60a5492d3137f8ab8529a50c37d1ad2730b12889635d4fb989cc4a8`; precheck PASS; `fwdcheck` PASS; defect `p2r27-step7-preflight-d-001`.
- Blocker: none.

## `cor-exponential-brownian-martingale`

- Failure/cause: F3 linked `lem-normal-density-has-total-mass-one` inside the Gaussian calculation and repeated it in the terminal citation list, producing duplicate contract rows.
- Repair: removed only the repeated terminal link and regenerated the batch-8 entry; the load-bearing Gaussian calculation remains unchanged.
- Evidence: Lawler, §3.3; exact normal-density Statement and the Gaussian-increment, change-of-variables, conditional-expectation, and Itô interfaces used by F1–F6.
- Hash/tools: `66d898b2362fc9ec8126c0458c7216eb44487c2828bb039046d49474c51f3f58` → `6e8c498b3e58677107ac9366a3325b38acc78ffe71b7c2fcb2df8f2f32463eec`; precheck PASS; batch-8 regeneration; strict contract PASS; defect `p2r27-step7-preflight-d-002`.
- Blocker: none.

## `cor-vector-levy-characterization`

- Failure/cause: F3 linked `thm-levy-characterization-of-brownian-motion` in the exact scalar claim and repeated it at the end of the fact.
- Repair: removed only the repeated terminal link and regenerated the batch-8 entry.
- Evidence: van der Vaart, Exercise 6.5 (`https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf`); exact scalar Lévy Statement and the covariance, Fourier, and conditional-expectation clauses used in the proof.
- Hash/tools: `416454dfc6d3f1de3edea66113fd7ffbb502bc8444f00ed5bb6f17eaca4d4485` → `898ce72fbc7394c1d35a589c207aa6a3c0ebcabf722b22bd43a4f7c58af810d3`; precheck PASS; batch-8 regeneration; strict contract PASS; defect `p2r27-step7-preflight-d-003`.
- Blocker: none.

## `ex-expected-exit-time-from-an-interval-via-ito-formula`

- Failure/cause: F2 and F3 each repeated a supplier. The mathematical reread also found that F3 wrote `u(0)>0` for arbitrary start `x` and treated the upper-first probability alone as establishing almost-sure exit.
- Repair: removed the duplicate links, corrected the start value to `u(x)>0`, and applied the two-sided exit theorem to both `B^x` and the reflected Brownian motion `-B^x`. The disjoint upper-first and lower-first events have probabilities `(x+a)/(a+b)` and `(b-x)/(a+b)`, whose sum is one.
- Evidence: Lawler, §3.5; exact cutoff, Brownian-reflection, two-sided-exit, bounded Dynkin, convergence, and continuity clauses used in steps 1.1–4.1.
- Hash/tools: `10e11be2f5169c7272f8ee897fe8c9f9f8657f660dcaa348851f22d1b2f52ad1` → `8a5f0b543daf1592c0e956ab2946ac42bcd8abb99a125111acadef227825d8e1`; precheck PASS; batch-8 regeneration; strict contract PASS; defect `p2r27-step7-preflight-d-004-correction`, superseding `p2r27-step7-preflight-d-004`.
- Blocker: none.

## `ex-logarithm-of-geometric-brownian-motion`

- Failure/cause: six boundary rows credited nonexistent step 4.1 after the proof was renumbered; the current boundary/consistency step is 3.1, and localization is removed in step 2.1.
- Repair: corrected the `empty`, `zero`, `one`, `degenerate`, `endpoints`, and `nonempty-choice` evidence to the current steps. The detector was not a false positive; item text was unchanged.
- Evidence: Lawler, §3.3; current Itô, positivity/compactness, stopping, and localized-integral clauses and proof steps 1.1–3.1.
- Hash/tools: unchanged `178d826d71a5e92a7804382feffd6528be5371a7b7e9f12db45ef631c65beb3d`; batch-8 regeneration; strict contract and boundary audit PASS.
- Blocker: none.

## `lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t`

- Failure/cause: F1 repeated its continuous-local-martingale supplier. More seriously, the partition proof passed a compensator known only to converge in probability through expectation without uniform integrability, and its localization removal inserted the later event `{σ_m≥t}` into a test variable required to be `F_s`-measurable.
- Repair: removed the duplicate link and repaired the proof without importing general local-martingale integration. The square identity `Q_n=(N_t-N_s)^2-2L_n` and martingale-increment orthogonality give `sup_n E Q_n^2≤160m^4`; this yields L1 Taylor-remainder and compensator control. The stopped conditional identity then passes directly to `M` by dominated convergence, with no future event inserted into the `F_s` test variable. Precheck's canonical stratification places the remainder estimate at step 1.4.
- Evidence: van der Vaart, Theorem 6.1 (`https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf`). The source's complete argument uses Itô's formula/general stochastic integration; it verifies the theorem but does not license the item's stated avoidance of that machinery, so the local partition proof was closed independently. Exact stopping, quadratic-variation, Taylor, convergence, and conditional-expectation clauses were checked.
- Hash/tools: `73d8ad0bf4fc00489be5ae067545e5315f8d3e7584545ae6aa8b7e079b0875b8` → `6ad6529dc9826da4f3c53c1045440b71de6b7aa1d9b4e2f5fa2cbf5eea6e6724`; precheck PASS; batch-8 regeneration; strict contract PASS; defect `p2r27-step7-preflight-d-005-correction`, superseding `p2r27-step7-preflight-d-005`.
- Blocker: none.

## `lem-second-resolvent-identity-for-closed-operator-perturbations`

- Failure/cause: this high-risk item lacked a complete current Alpha `risk_review`. Its `nonempty-choice` row also incorrectly said that no choice principle was declared, although the Statement assumes DC and step 1.1 uses the closed graph theorem.
- Repair: recorded a specific current risk review and corrected the choice row. The review checks the common-domain mappings, boundedness of `BR_A(z)` from the relative bound, boundedness of `BR_C(z)` from graph-norm equivalence, and both signs under the convention `R_T(z)=(z-T)^{-1}`.
- Evidence: Teschl, §6.1, Lemma 6.5, p.159; exact resolvent, relative-boundedness, graph-norm completeness, closed-graph, and DC clauses.
- Hash/tools: unchanged `dcb7a1db949e599b3b2b3a25305845e883682310970b0e2a1f4828f038ecbdc5`; batch-6 contract edit; `risk-report --require-reviewed` reports 0 errors.
- Blocker: none.

## `thm-brownian-markov-property`

- Failure/cause: four boundary rows credited nonexistent step 6.1; the current proof's final boundary/choice step is 5.1.
- Repair: corrected the `zero`, `one`, `degenerate`, and `nonempty-choice` rows to step 5.1. The detector was not a false positive; item text was unchanged.
- Evidence: Durrett, Theorem 7.2.1; Sousi, Definition 6.10 and the argument before Theorem 6.13; current raw/usual-filtration, independent-increment, conditioning, and transition clauses.
- Hash/tools: unchanged `35ae95d0f6fa1b6bf05505e8eaad8ad255242c38a5b29fe8d20f421f8015c330`; batch-7 regeneration; strict contract and boundary audit PASS.
- Blocker: none.

## `thm-brownian-paths-are-nowhere-differentiable`

- Failure/cause: F2 repeated both derivative-definition links, and the source note still described three increments and a nonsummable `n^{-1/2}` bound after the proof had changed to five increments. The reread also found that the mesh index condition had no solution at the claimed right endpoint `s=b`, and the final countable union mentioned intervals beginning before the process domain.
- Repair: removed the repeated links; synchronized the source note with the five-increment bound `12^5(C+1)^5(b-a)^{5/2}n^{-3/2}`; defined `k_0` as the maximal index in `{0,…,n-1}` with `t_{k_0}≤s`, so `s=b` selects the backward block; and restricted the countable cover to rational `0≤a<b`, with every `s>0` placed in an interior interval and `s=0` at a left endpoint.
- Evidence: Durrett, Theorem 7.1.6; Sousi, Theorem 6.41; exact derivative, normal-density, Brownian-increment, density-of-rationals, and Borel–Cantelli clauses.
- Hash/tools: `30aff98223a57b3fd31d39ffdffb343704dcde46b9fac1f42c6671d334dd42c3` → `cdd13e7a0f09935088e86ff3529b4a2d75ebd8e10f83a0a27dab3c278fb56653`; precheck PASS; batch-7 regeneration; strict contract PASS; defect `p2r27-step7-preflight-d-006-correction`, superseding `p2r27-step7-preflight-d-006`.
- Blocker: none.

## `thm-density-of-elementary-predictable-processes-in-predictable-l2`

- Failure/cause: F1/F3 retained obsolete shortened quotations. Rereading the proof showed that the generator construction omitted `u=T`, called the pointwise constant-one process elementary despite the required value zero at time zero, and inferred the empty-set case through complement closure before proving it. The boundary/risk records also falsely charged step 2.2 with countable choice, although only finitely many approximants are selected for each fixed `m`.
- Repair: regenerated the exact full Definition quotes; added the terminal-horizon constructions for both `s>0` and `s=0`; represented the constant-one L2 class by the elementary one-block process `1_(0,T]` modulo the null time-zero slice; proved the empty case directly with zero; and corrected the choice row and complete risk review to the current finite-selection proof.
- Evidence: van der Vaart, Lemmas 5.21–5.23; exact elementary-integrand, elementary-Itô, predictable-sigma-algebra, norm, pi-lambda, simple-approximation, domination, and Tonelli clauses.
- Hash/tools: `b8b4586ee279936214b71ca8bab8942ff2060190d4b923ac6be1248adbd70dfa` → `07b029a1e2c439f80a30e8210526af909742ec7aab2c47db45b7e8ba65ec046d`; precheck PASS; batch-8 regeneration; strict contract and boundary audit PASS; defect `p2r27-step7-preflight-d-009`.
- Blocker: none.

## `thm-self-adjointness-range-criterion`

- Failure/cause: derivation step 1.3 stated no input. The collecting step also had an unbalanced math delimiter and attributed the `(4)`/`(6)` closure to an incomplete route, although the proved chain closes through `(5)` and `(1)`.
- Repair: added `[given]` to step 1.3, rewrote step 4.1 to list the proved implication chains exactly, and grouped each chain in a balanced inline math span. Regeneration now records input `given` for step 1.3.
- Evidence: Williams, Theorem 7.34, pp.35–37; Teschl, §2.2, pp.66–69; Buehler–Salamon, Exercise 6.48/Theorem 6.35 area; exact adjoint kernel/range, double-complement, resolvent, and self-adjoint-resolvent clauses.
- Hash/tools: `2ce8b03142cd69256f54f98b473d4004af79467bfe6a7645d9a453ba932dcb59` → `7fd879d44b3089c10a322c5832f9e379baef1aef63e429ba69902363f0ae0efa`; precheck and rendercheck PASS; batch-6 regeneration; strict contract PASS; defect `p2r27-step7-preflight-d-007-correction`, superseding `p2r27-step7-preflight-d-007`.
- Blocker: none.

## Final validation

- `tools/precheck.mts`: all 9 edited carriers PASS.
- `tools/proof-contract.mjs --strict`: batch 6 `3/3`, batch 7 `3/3`, batch 8 `6/6`; 0 errors and 0 warnings.
- `tools/citation-fidelity.mjs --fail-on-missing-quote`: 1,244 citations checked; no missing quote. It reported 9 heuristic widening candidates; the sole owned candidate is F3 of the characteristic-exponential lemma, where “every t” is already restricted to nonnegative times by the continuous-time process domain and the fixed `[0,T]` context.
- `tools/boundary-audit.mjs --fail-on-contradicted`: 1,288 rows; no contradicted disposition and no template-reuse cluster.
- `tools/risk-report.mjs --require-reviewed`: the owned high-risk resolvent item and the updated critical density item are each routed with 0 errors.
- `tools/fwdcheck.mjs --quiet`: PASS; every forward reference is declared, strictly forward, planned, and acyclic.
- `tools/depcheck.mjs --quiet`: PASS (exit 0); no cycles, all references resolve, and no draft item is on a published page. Repository-wide warning-only multi-home and citation diagnostics remain, but there is no owned dependency error.
- `tools/rendercheck.mjs`: all 12 owned carriers PASS under the renderer and KaTeX.
- `tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27`: refreshed and deduplicated after the forward-reference edit.
- `tools/defect-ledger.mjs validate --run phase-2-remaining-27`: 1,141 run rows checked, 0 errors. Nine owned repair records are current after supersession; generated view fingerprint `a1a4d2b76abe`.

No unresolved owned blocker remains. The engine retains ownership of gate and stage transitions.
