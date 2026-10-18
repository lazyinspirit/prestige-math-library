# Step 3a reader report — batch 21

Run: `non-ml-math-remaining-81-2026-10-18`  
Reader: `reader-21`  
Batch: `21`

## Opened inventory

### Assigned pages

- A page: `library/information-theory/quantum-information-measures.md`
- B page: `library/information-theory/quantum-information-measures-examples.md`

### Current page prerequisites

- `finite-alphabet-entropy-and-divergence` — `library/information-theory/finite-alphabet-entropy-and-divergence.md`
- `trace-distance-fidelity-and-information-limits` — `library/quantum-computing/trace-distance-fidelity-and-information-limits.md`
- `knill-laflamme-recovery-and-subsystem-codes` — `library/quantum-computing/knill-laflamme-recovery-and-subsystem-codes.md`
- `trust-region-and-cubic-regularization-methods` — `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/trust-region-and-cubic-regularization-methods.md`

The current page and batch manifest list these four prerequisites. The batch notes say there are only two; that note also reports an older `1-scaffold` state. The live autopilot status at review start reported `running` at `3a-read`, with no worker in flight. After writing these artifacts, status reported 19/81 batches covered and did not list batch 21 as missing. I used the current page and manifest and did not consult any `RESUME.md` file.

### Assigned items, read in dependency-level order

**Level 0:** `def-it-von-neumann-entropy`; `lem-it-partial-traces-of-a-state-are-states`; `lem-it-finite-cq-block-sum-is-a-state`; `lem-it-inverse-compression-resolvent`; `lem-it-finite-classical-kl-nonnegative-equality`; `lem-it-finite-povm-measurement-channel`.

**Level 1:** `def-it-finite-dimensional-quantum-relative-entropy`; `def-it-finite-quantum-information-measures`; `lem-it-operator-jensen-negative-log`; `ex-it-qubit-von-neumann-entropy`.

**Level 2:** `def-it-classical-quantum-state-and-holevo-information`; `lem-it-quantum-entropy-support-and-finiteness`; `lem-it-relative-modular-representation`; `lem-it-quantum-relative-entropy-support-regularization`; `lem-it-quantum-relative-entropy-isometric-invariance`; `thm-it-finite-quantum-conditional-mutual-information-identities`; `cex-it-non-full-support-quantum-kl-is-infinite`; `ex-it-bell-pair-negative-conditional-entropy`.

**Level 3:** `thm-it-quantum-relative-entropy-joint-convexity`; `thm-it-quantum-entropy-identities`; `ex-it-classical-ensemble-holevo-equality`.

**Level 4:** `thm-it-quantum-relative-entropy-partial-trace-data-processing`.

**Level 5:** `thm-it-quantum-relative-entropy-channel-data-processing`.

**Level 6:** `thm-it-quantum-relative-entropy-nonnegative-equality`; `thm-it-holevo-measurement-bound`.

### Direct external item suppliers opened

`cor-complex-de-moivre-formula`; `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`; `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`; `cor-mean-value-theorem`; `def-adjoint-of-a-linear-map-between-inner-product-spaces`; `def-kernel-and-image-of-a-linear-map`; `def-natural-logarithm`; `def-non-negative-and-positive-operator`; `def-qc-density-operator`; `def-qc-first-factor-partial-trace`; `def-qc-kraus-representation`; `def-qc-partial-trace`; `def-qc-povm-and-outcome-law`; `def-qc-quantum-channel`; `def-qc-register-and-computational-basis`; `def-qc-tensor-register-and-permutation`; `def-real-and-complex-inner-product-space`; `def-trace-of-an-endomorphism`; `lem-natural-logarithm-bounded-by-argument`; `prop-trace-is-linear`; `thm-adjoint-exists-and-is-unique-in-finite-dimension`; `thm-continuous-implies-integrable`; `thm-ftc-second-part`; `thm-kernel-and-fibres-of-complex-exponential`; `thm-logarithm-derivative-and-integral`; `thm-natural-logarithm-laws`; `thm-non-negative-operator-characterisations`; `thm-non-negative-square-root-exists-and-is-unique`; `thm-qc-kraus-choi-equivalence`; `thm-qc-partial-trace-characterization-and-basis-independence`; `thm-qc-partial-trace-positive-and-trace-preserving`; `thm-qc-povm-probabilities-normalize`; `thm-qc-trace-preserving-kraus-normalization`; `thm-qc-wire-permutation-is-unitary`; `thm-trace-of-ab-equals-trace-of-ba`.

The batch proof-contract file covers all 21 proof-bearing assigned items. Its 56 derivation rows match the current numbered arguments. After repairs, all 145 quoted supplier excerpts were exact substrings of their current source items; strict contract checking passed for all six repaired items.

## Review and repairs

The assigned definitions, claims, constructions, witnesses, computations, proofs, remarks, and page summaries were checked against their stated hypotheses and the opened suppliers. The finite support cases, zero-weight branches, zero-dimensional cases where admitted, tensor-factor order, linear-first inner-product convention, and natural-log units were preserved. I found and repaired six missing or inaccurately attributed logarithm prerequisites:

| Item | Location | Repair and evidence |
|---|---|---|
| `lem-it-relative-modular-representation` | Fact `[F8]`; Proof 1.1 | Added `thm-natural-logarithm-laws` to `deps` and cited its quotient law for `-ln(b_j/a_i) = -ln b_j + ln a_i`, which is required for the spectral formula for `-ln Δ`. |
| `thm-it-quantum-relative-entropy-nonnegative-equality` | Facts `[F10]`–`[F11]`; Proof 1.1 | Separated the QRE trace formula from the claim `D(1||1)=0` and cited `ln 1=0` from `thm-natural-logarithm-laws`. |
| `ex-it-qubit-von-neumann-entropy` | Example; Fact `[F4]`; Verification 2.1 | Made the base-two logarithm convention explicit and cited the reciprocal law used to evaluate `ln(1/2)`. |
| `ex-it-classical-ensemble-holevo-equality` | Fact `[F4]`; Verification 2.1 | Added `thm-natural-logarithm-laws` and cited `ln(1/p_x)=-ln p_x` in the equality with `H(p)`. |
| `ex-it-bell-pair-negative-conditional-entropy` | Fact `[F6]`; Verification 3.1 | Added `thm-natural-logarithm-laws` and cited `ln(1/2)=-ln 2` in the marginal entropy calculation. |
| `lem-it-quantum-relative-entropy-support-regularization` | Fact `[F4]` | Derived `ln t → -∞` as `t ↓ 0` from the cited logarithm theorem’s strict increase and surjectivity, rather than attributing the limit directly to its statement. |

Each affected proof contract was regenerated with `tools/regen-contract-entries.mjs`. None of the six changed items had a `verification.judge` record to remove. For every changed item, reflow reported `unchanged` and precheck passed. The final focused strict proof-contract check passed for 6/6 items with zero errors or warnings. The final required proof-layout run covered all six changed item paths: 6 items, 16 steps, zero defects.

## Page verdicts

- **`quantum-information-measures` (A): sound summary.** It accurately describes the finite entropy, support-sensitive relative entropy, information definitions, entropy/Holevo identities, joint convexity, data processing, nonnegativity/equality, and measurement bound in its assigned items. Its qualification that no nonnegativity result is asserted for conditional entropy or conditional mutual information is accurate.
- **`quantum-information-measures-examples` (B): sound summary.** Its four examples match the assigned qubit, orthogonal-ensemble, non-full-support, and Bell-pair carriers and preserve the natural-log and zero-term conventions.

The four current page prerequisites were opened and their summaries were checked for relevant conventions. The draft finite-alphabet page states the nats/bits conventions; the other three opened pages give prerequisite context. No defect in an uneditable page or published dependency was identified.

## Unedited defects and blockers

No confirmed defect remains unedited. The six confirmed proof-step/citation defects were repaired in assigned batch-21 items. There is no blocker to this reader review. The live run status was `3a-read` at review start.

## Source and coverage limits

For the unfamiliar operator-convexity and data-processing chain, I independently read Watrous, *The Theory of Quantum Information*, §5.2.3, including Corollary 5.33 on joint convexity (printed pp. 279–280) and the complete proof of Theorem 5.35 on channel monotonicity (printed pp. 280–281), at <https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf>. These results corroborate the claims; the assigned items supply their own local proofs. Wilde’s full text is recorded in the batch’s source-evidence file but was not independently reread here, and no conclusion in this report relies on it.

The batch notes report a 910-item recursive published-dependency closure. I independently opened the assigned items, all 35 direct external item suppliers listed above, all four current page prerequisites, and all current contract citation targets. I did not independently reread the entire further transitive closure of those published suppliers. No defect was observed among the direct supplier carriers reviewed.
