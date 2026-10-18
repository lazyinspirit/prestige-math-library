# Step 3a reader report — batch 18

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: reader  
Scope: batch `18`

## Inventory opened

### Pages

- Assigned A page: `library/information-theory/multiuser-channel-networks.md` (`multiuser-channel-networks`).
- Assigned B page: `library/information-theory/multiuser-channel-networks-examples.md` (`multiuser-channel-networks-examples`).
- Required source page: `library/information-theory/lossy-source-coding-with-side-information.md` (`lossy-source-coding-with-side-information`).

### Assigned items, read in dependency order

- Level 0: `def-it-real-differential-entropy`; `def-it-two-user-real-awgn-mac-code`.
- Level 1: `def-it-two-user-real-awgn-mac-feedback-code`; `lem-it-finite-gaussian-mixture-entropy-bounds`.
- Level 2: `def-it-physically-degraded-dm-broadcast-channel`; `def-it-two-user-discrete-memoryless-mac`; `lem-it-awgn-feedback-estimation-covariance-update`.
- Level 3: `def-it-finite-dmc-feedback-code`; `def-it-physically-degraded-dm-broadcast-code`; `def-it-two-user-discrete-memoryless-mac-code`; `def-it-two-user-discrete-memoryless-mac-feedback-code`; `lem-it-fano-for-finite-message-density-observations`; `lem-it-ozarow-feedback-sum-corner-achievable`.
- Level 4: `def-it-two-correlated-iid-sources-over-dm-mac-code`; `lem-it-awgn-feedback-rate-splitting-achievable`; `thm-it-cover-leung-feedback-mac-inner-bound`; `thm-it-two-user-real-awgn-mac-capacity-region`.
- Level 5: `lem-it-cover-elgamal-salehi-conditional-packing`; `thm-it-ozarow-awgn-mac-feedback-capacity-region`.
- Level 6: `thm-it-cover-el-gamal-salehi-correlated-source-mac-sufficient-condition`; `ex-it-ozarow-awgn-mac-feedback-rate-region-at-rho`.
- Level 7: `thm-it-finite-dmc-feedback-does-not-increase-capacity`; `thm-it-physically-degraded-dm-broadcast-capacity-region`; `thm-it-two-user-discrete-memoryless-mac-capacity-region`.
- Level 8: `ex-it-binary-xor-dm-mac-product-input-region`; `ex-it-correlated-source-binary-adder-dm-mac`.

### Additional dependency items opened

Direct mathematical suppliers: `thm-gaussian-integral`; `thm-substitution`; `thm-of-square-roots`; `thm-tonelli-theorem-for-sigma-finite-product-spaces`; `def-finite-stochastic-kernel`; `def-discrete-memoryless-channel`; `def-it-finite-conditional-entropy`; `def-it-finite-iid-multisource`; `def-it-finite-conditional-mutual-information`; `def-it-finite-mutual-information`; `def-it-finite-strongly-typical-set`; `lem-it-finite-type-class-cardinality-bounds`; `thm-it-finite-conditional-mutual-information-identities-and-equality`; `thm-it-finite-entropy-chain-rule`; `def-qa-35-finite-probability-entropy-and-stochastic-matrices`; `thm-it-finite-kl-nonnegative-equality`; `def-discrete-memoryless-channel-information-capacity`; `thm-discrete-memoryless-channel-random-coding-achievability`; `thm-it-fano-inequality`.

Further supporting statements opened: `def-finite-probability-vector`; `def-finite-probability-space-and-event`; `def-random-element-and-real-random-variable`; `def-it-information-units-and-logarithm-base`; `def-natural-logarithm`; `thm-natural-logarithm-laws`; `def-real-exponential-function-and-e`; `def-finite-sum-in-a-commutative-monoid`; `lem-finite-sum-reindexing-and-fubini`; `lem-it-finite-marginals-and-conditionals-are-pmfs`; `thm-finite-jensen-inequality`; `lem-it-finite-log-sum-inequality`; `thm-it-finite-markov-data-processing`; `def-measure-kernel-and-probability-kernel`; `def-channel-sequence`; `def-finite-alphabet-iid-source`; `lem-discrete-memoryless-channel-block-kernels-are-stochastic`; `def-fixed-length-channel-code`; `def-fixed-length-channel-code-errors`; `lem-discrete-memoryless-channel-capacity-is-attained`; `def-discrete-memoryless-channel-information-density`; `lem-discrete-memoryless-channel-iid-information-density-converges`; `thm-logarithm-derivative-and-integral`; `thm-algebra-of-derivatives`; `thm-algebra-of-continuous-functions`; `cor-mean-value-theorem`; `def-convex-concave-and-midpoint-convex-functions`; `thm-logarithm-slower-than-every-positive-power`; `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`; `def-finite-law-self-information-and-entropy`; `def-identically-distributed-and-iid-random-variables`.

No defect was confirmed in the reviewed dependency items.

## Repairs and evidence

Only assigned batch items and the assigned A-page prose were edited. The batch proof contract was updated for the repaired derivations and relevant finite-check anchors; no stale `verification.judge` record was present on an edited item.

- `lem-it-awgn-feedback-estimation-covariance-update`: added the Gaussian residual, its zero covariance with the observation, and the joint-Gaussian characteristic-function factorization establishing independence and the conditional covariance. This supplies the conditional Gaussian fact used by the feedback consumers.
- `lem-it-ozarow-feedback-sum-corner-achievable`: made the rates strictly positive and strictly below the corner bounds when choosing exponential midpoint grids; boundary rates follow by closure.
- `thm-it-cover-leung-feedback-mac-inner-bound`: stated the closed rate polytope for each finite law and the closure of their union. Singleton-message users now omit their corresponding decoder tests, covering zero-rate faces even when an information bound is zero.
- `thm-it-two-user-real-awgn-mac-capacity-region`: corrected the malformed closure notation. The converse now records the uniform information bound and rate control needed for the normalized Fano terms to vanish. Its zero-power specialization and expected-power expurgation remain explicit.
- `thm-it-ozarow-awgn-mac-feedback-capacity-region`: included both single-user axis vertices at the optimizing correlation, which together with the feedback corner support the endpoint time-sharing rectangle; the endpoint time-sharing step now says so explicitly.
- `ex-it-correlated-source-binary-adder-dm-mac`: supplied the endpoint-entropy and logarithmic-inequality details. Corrected the converse to apply Fano to the source pair given the decoder's channel observation, then use the deterministic Markov chain from the source pair through the schedule to the channel output. Refreshed its finite-check anchors.
- `thm-it-physically-degraded-dm-broadcast-capacity-region`: added finite output-information bounds to control the rates and normalized Fano remainders along reliable sequences.
- `thm-it-two-user-discrete-memoryless-mac-capacity-region`: added the finite-output information bound needed to bound rates before sending the Fano remainder to zero.
- `library/information-theory/multiuser-channel-networks.md`: clarified that capacity regions are closures, with strict interior constructions and boundary handling stated separately; qualified the feedback enlargement to positive powers.

The specialized theorem checks used these authoritative passages:

- Cover and Leung, “A rate region for the multiple-access channel with feedback,” Theorem 1 and Section II, printed pp. 293–294, and the construction outline in Section IV, printed pp. 295–296: [original paper PDF](https://isl.stanford.edu/~cover/papers/transIT/0292cove.pdf).
- Cover, El Gamal, and Salehi, “Multiple access channels with arbitrarily correlated sources,” Theorem 1, printed p. 649, and the binary-adder example, printed pp. 649–650: [original paper PDF](https://www-isl.stanford.edu/~cover/papers/transIT/0648cove.pdf). The local three-condition result is separately supported by its deterministic-schedule proof and conditional type-packing lemma. The correlated-source setup and packing method were also checked in El Gamal, Kim, and El Gamal, *Network Information Theory*, Lecture 15, pp. 15-4 and 15-9–12: [lecture notes PDF](https://arxiv.org/pdf/1001.3404v3).
- Lapidoth and Wigger, “On the AWGN MAC with Imperfect Feedback,” §III-A, printed pp. 5435–5436, equations (6)–(9), for Ozarow's region and its optimizing correlation; Remark IV.15, printed p. 5439, its proof on pp. 5450–5451, equations (82)–(85), and Appendix F, Remark F.3, for rate splitting and the recursion: [paper PDF](https://www.isi.ee.ethz.ch/papers/docu/alap-mwig-2010-2.pdf). The original Ozarow result was also identified as “The capacity of the white Gaussian multiple access channel with feedback,” DOI [10.1109/TIT.1984.1056935](https://doi.org/10.1109/TIT.1984.1056935).

## Validation

Reflow and precheck were run on each of the eight distinct changed item files. Reflow reported `unchanged` for all eight; all eight prechecks passed. The required single final layout command covered all eight changed item paths and reported `8 items, 59 steps, 0 defects`.

## Uneditable findings

Two batch proof-contract finite-check anchors refer to nonexistent proof steps. They are retained for the owner because the permitted content-edit scope is assigned item prose and A-page prose:

- `ex-it-ozarow-awgn-mac-feedback-rate-region-at-rho`: `research/non-ml-math-remaining-81-2026-10-18-batch-18.proof-contracts.json`, `contracts.ex-it-ozarow-awgn-mac-feedback-rate-region-at-rho.finite_checks[0].checked_in` lists `1.1` and nonexistent `1.2`; the current proof has steps `1.1` and `2.1`.
- `ex-it-binary-xor-dm-mac-product-input-region`: the same contract file, `contracts.ex-it-binary-xor-dm-mac-product-input-region.finite_checks[0].checked_in` lists nonexistent `1.2` and omits the mixture argument at `3.1`; the current proof has steps `1.1`, `2.1`, and `3.1`.

These are nonfatal contract citation inaccuracies, not defects in the corresponding item proofs. They are the only findings in the JSON output.

## Page verdicts and coverage limits

- `multiuser-channel-networks` (assigned A): acceptable after the summary corrections above; its theorem summaries preserve the proved closure and power qualifications.
- `multiuser-channel-networks-examples` (assigned B): acceptable as reviewed; no edit or defect found.
- `lossy-source-coding-with-side-information` (required source page): acceptable at the interface used by this batch; no defect found.

No blocker remains for this reader task. The cited specialized source sections were checked at the locations above, and mathematical dependencies needed for the batch claims were opened locally. This review did not audit every full cited book or every transitive prerequisite of every published source. Unrelated concurrent worktree modifications were left untouched.
