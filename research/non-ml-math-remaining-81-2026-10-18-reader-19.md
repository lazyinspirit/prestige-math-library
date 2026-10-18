# Step 3a reader report — batch 19

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: reader  
Date: 2026-10-18

## Opened inventory

Assigned pages opened:

- `relay-and-interference-channel-bounds` — `library/information-theory/relay-and-interference-channel-bounds.md` (A page)
- `relay-and-interference-channel-bounds-examples` — `library/information-theory/relay-and-interference-channel-bounds-examples.md` (B page)

The prerequisite page `multiuser-channel-networks` was also opened to check the DM-MAC interface used by the finite strong-interference item.

All 40 assigned items were opened and reviewed in dependency order:

- `def-finite-discrete-memoryless-network-and-code`
- `def-real-gaussian-multicast-relay-network`
- `def-real-two-user-gaussian-interference-channel`
- `lem-real-vector-gaussian-maximum-differential-entropy`
- `def-finite-discrete-memoryless-relay-channel-and-causal-code`
- `def-finite-two-user-interference-channel-and-strong-regime`
- `def-finite-two-way-relay-channel-and-causal-code`
- `lem-bounded-density-finite-second-moment-has-finite-differential-entropy`
- `lem-complex-scalar-gaussian-maximum-differential-entropy`
- `lem-finite-joint-iid-strong-typicality`
- `def-finite-directed-information-and-causal-conditioning`
- `lem-finite-conditional-codebook-covering`
- `lem-finite-conditional-typicality-packing`
- `lem-scalar-gaussian-channel-mutual-information-power-bound`
- `lem-real-gaussian-han-kobayashi-inner-region`
- `lem-real-gaussian-multiple-access-random-coding-region`
- `thm-finite-relay-decode-forward-inner-bound`
- `lem-finite-conditional-channel-mutual-information-concave-input-law`
- `lem-finite-directed-information-feedback-decomposition`
- `lem-finite-strong-interference-block-lift`
- `lem-standard-borel-conditional-mutual-information-chain-rule-and-data-processing`
- `lem-standard-borel-memoryless-channel-mutual-information-tensorization`
- `lem-complex-gaussian-interference-entropy-estimates`
- `lem-finite-or-euclidean-likelihood-ratio-network-coding`
- `lem-gaussian-superposition-nonunique-han-kobayashi-region`
- `thm-finite-relay-cut-set-outer-bound`
- `thm-finite-multisource-multicast-noisy-network-coding-inner-bound`
- `cor-finite-relay-compress-forward-noisy-network-coding-bound`
- `cor-finite-two-way-relay-noisy-network-coding-region`
- `thm-real-gaussian-multicast-noisy-network-coding-inner-bound`
- `thm-real-gaussian-strong-interference-capacity-region`
- `thm-finite-full-feedback-relay-capacity`
- `thm-finite-strong-interference-channel-capacity`
- `lem-real-gaussian-interference-genie-outer-region`
- `thm-real-gaussian-interference-channel-within-one-bit`
- `thm-real-gaussian-multicast-noisy-network-coding-cut-dependent-gap`
- `ex-real-gaussian-relay-fixed-quantizer-gap`
- `ex-real-gaussian-strong-interference-region`
- `cex-strong-interference-formula-fails-outside-regime`
- `ex-binary-additive-strong-interference-capacity`

The 21 direct external item dependencies listed in the batch manifest were opened and read before their assigned consumers:

- `def-axiom-of-choice`
- `def-it-finite-conditional-mutual-information`
- `def-it-finite-strongly-typical-set`
- `def-it-real-differential-entropy`
- `def-measure-theoretic-mutual-information`
- `def-qa-35-finite-probability-entropy-and-stochastic-matrices`
- `def-standard-borel-conditional-mutual-information`
- `def-standard-borel-space`
- `lem-finite-products-of-standard-borel-spaces-are-standard-borel`
- `lem-it-fano-for-finite-message-density-observations`
- `lem-kl-invariant-under-measurable-bijections`
- `thm-general-kl-chain-rule-for-standard-borel-kernels`
- `thm-it-fano-inequality`
- `thm-it-finite-conditional-mutual-information-identities-and-equality`
- `thm-it-finite-entropy-chain-rule`
- `thm-it-two-user-discrete-memoryless-mac-capacity-region`
- `thm-kullback-leibler-is-nonnegative`
- `thm-mutual-information-chain-rule`
- `thm-nondegenerate-multivariate-normal-law-has-density`
- `cor-iid-finite-variance-weak-law`
- `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`

## Repairs made

- `def-finite-discrete-memoryless-network-and-code`, Definition: made the positive node count and nonempty message sets explicit. A uniform law on a message set requires that set to be nonempty.
- `def-finite-two-user-interference-channel-and-strong-regime`, Definition: made all channel alphabets and message sets nonempty, so the transition law, product input laws, and uniform messages are defined.
- `def-finite-discrete-memoryless-relay-channel-and-causal-code`, Definition: specified a positive integer message-set size for the uniform law on `[M]`.
- `def-real-gaussian-multicast-relay-network`, Definition: made `N ≥ 1`, finite nonempty source message sets, and nonnegative power budgets explicit. The later Gaussian NNC and cut-gap statements use the zero-power endpoint.
- `def-real-two-user-gaussian-interference-channel`, Definition: specified independent receiver noises across receivers and uses, independent messages, deterministic separate encoders, no feedback, finite nonempty message sets, and expected average-power constraints with `P_i ≥ 0`. Replaced the overbroad “scalar Gaussian mutual information is” formula with the single-user AWGN capacity formula and its Gaussian attaining inputs. The interference-converse and simulation proofs use the independent-noise model; the scalar formula otherwise would incorrectly read as applying to arbitrary input laws.
- `lem-standard-borel-conditional-mutual-information-chain-rule-and-data-processing`, Proof 3.1: cited both previously established chain-rule identities to obtain the data-processing inequality, then used nonnegativity of the remaining conditional mutual information.
- `lem-gaussian-superposition-nonunique-han-kobayashi-region`, Proof 2.1: corrected the real Gaussian fourth moment to `3σ⁴`, retaining the complex value `2σ⁴` and using the valid uniform variance bound `3P_i²/n`. Proof 4.1 now distinguishes the nominal mutual-information expressions from the larger rates in the auxiliary-removal construction.
- `ex-real-gaussian-strong-interference-region`, Example: added the nonnegative-rate constraints to the stated capacity region.

After those repairs, the proof-contract entries for the affected consumers were regenerated from the current item facts and steps. Stale `template_review` hash records were removed from the eight edited item entries; no `verification.judge` record was present on the edited carriers. No mathematical judgment or judge stamp was added.

## Source checks

The primary Etkin–Tse–Wang paper was checked at [arXiv:cs/0702045](https://arxiv.org/pdf/cs/0702045), §4.3.1, Theorem 5 (weak interference, printed PDF pp. 30–34), and §4.3.2, Theorem 6 (mixed interference, printed PDF pp. 34–36). These state the clipped noise-level private-power policy and the within-one-bit region result. I checked the local facet comparisons and auxiliary-removal argument against those regimes.

The primary Lim–Kim–El Gamal–Chung paper, [“Noisy Network Coding”](https://isl.stanford.edu/~abbas/papers/Noisy%20Network%20Coding.pdf), was consulted at §III’s multicast packing analysis (PDF pp. 15–18) and §V-A, Theorem 4’s Gaussian multicast gap calculation (PDF pp. 20–22). The local likelihood-ratio lemma supplies the additional explicit finite/Euclidean measure and cost details; its construction and false-index count were checked directly against its stated hypotheses.

## Page verdicts

- `relay-and-interference-channel-bounds` (A): sound after the listed repairs. The finite relay, finite multicast, Gaussian multicast, strong-interference, and weak/mixed within-one-bit claims match their local item statements and proofs. The page’s Gaussian convention and finite-versus-continuous information-unit distinctions are consistent with the definitions.
- `relay-and-interference-channel-bounds-examples` (B): sound. The relay quantizer gives the stated two NNC cuts and exact half-bit gap to the cut-set value; the binary additive channel has the stated triangle; the outside-strong-regime counterexample excludes the full time-sharing union; and the numerical complex example has the stated SNR/INR values and active sum constraint. B-page prose was not edited.
- `multiuser-channel-networks` (prerequisite page consulted): its summary and DM-MAC dependency interface are consistent with the finite strong-interference consumer. It is outside this batch and was not edited.

## Validation

- `tools/reflow.mts` ran for all eight changed item paths; all were unchanged by reflow.
- `tools/precheck.mts` ran for all eight changed item paths: five definitions reported zero proof sections to check; the three proof-bearing/example items passed.
- `tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-19.proof-contracts.json --strict`: 40/40 items checked, zero errors or warnings.
- `node tools/proof-layout.mjs` ran once on the eight changed paths: 8 items, 10 steps, 0 defects.

## Unedited defects and blocker

No confirmed or suspected defect remains in an uneditable assigned or dependency subject. The batch-19 review has no blocker. The final run status is still `running` and reports an unrelated `3a-collect` blocker: `collect-13` failed three times for `covers: 13` (reported at `2026-10-18T01:23:16.904Z`). I did not inspect or edit batch 13 because this dispatch owns batch 19 only.

## Coverage note

No batch-19 rendered reader bundle was present in `.autopilot/non-ml-math-remaining-81-2026-10-18`; I used the exact current manifest, the assigned page files, the assigned item sources, the proof-contract file, and every direct item dependency instead. The assigned items and their direct dependency interfaces were reviewed; I did not independently audit the full transitive foundational closure behind those dependencies. The unrelated `collect-13` run blocker is outside this mathematical coverage.
