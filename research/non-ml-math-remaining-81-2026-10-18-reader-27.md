# Step 3a reader report — batch 27

Run: `non-ml-math-remaining-81-2026-10-18`  
Batch: `27`  
Role: reader

## Opened inventory

- Assignment: `research/non-ml-math-remaining-81-2026-10-18-batch-27.pages.json`; reader instructions: `briefs/reader.md`.
- Repository instructions: `CLAUDE.md`, `README.md`, `SCHEMA.md`, and the independent-review section of `WORKFLOW.md`.
- Proof contract: `research/non-ml-math-remaining-81-2026-10-18-batch-27.proof-contracts.json` (all 12 item contracts).
- Assigned A page: `library/information-theory/finite-trellis-viterbi-and-sequence-decoding.md`.
- Assigned B page: `library/information-theory/finite-trellis-viterbi-and-sequence-decoding-examples.md`.
- Page prerequisite opened: `library/information-theory/prefix-codes-and-finite-lossless-coding.md`.
- Assigned items, read with suppliers before consumers: `def-finite-layered-trellis`, `def-finite-hidden-markov-model-for-sequence-decoding`, `lem-finite-trellis-prefix-score-recurrence`, `lem-finite-hmm-joint-law-normalizes`, `cex-hmm-zero-evidence-has-no-posterior-map`, `cex-hmm-marginal-modes-are-not-sequence-map`, `alg-viterbi-max-product-on-finite-trellis`, `thm-viterbi-finite-trellis-is-optimal`, `alg-hmm-viterbi-sequence-map`, `thm-hmm-viterbi-is-sequence-map`, `ex-finite-trellis-viterbi-tie-and-unreachable-state`, and `ex-hmm-viterbi-exact-sequence-map`.
- The cited HMM/Viterbi references were checked at the relevant sections: [MIT OCW, Lecture 7](https://ocw.mit.edu/courses/6-096-algorithms-for-computational-biology-spring-2005/c48f8fdb8e1ff0cb6336e5b9b6cab23f_lecture7.pdf), pp. 5 and 21 (HMM parameters and Viterbi recurrence/traceback); [Stanford CS262, Lecture 7](https://web.stanford.edu/class/cs262/presentations/lecture7.pdf), pp. 2 and 16–19 (Viterbi recurrence and HMM formulation).

## Review and edit

The trellis and HMM definitions preserve their domains and zero-weight cases. The prefix recurrence and finite-HMM normalization proofs follow from the stated finite maxima and normalized rows. The trellis algorithm and its theorem cover zero and one layer, empty layers, endpoint weights, traceback, ties, and the stated operation and storage bounds. The HMM decoder correctly excludes zero factors, and its theorem proves the positive-evidence/zero-evidence split. The counterexamples and both numerical examples were checked directly; their listed scores, posterior marginals, maxima, and traceback values are correct.

One confirmed input omission was repaired in `items/ex-hmm-viterbi-exact-sequence-map.md`, Example paragraph before the path-mass table. The invoked decoder requires a total order on the hidden-state set (`alg-hmm-viterbi-sequence-map`), but the example had not supplied one. I added the order $u\prec v$. The example's maxima are unique, so the order does not change its calculated path. I updated the corresponding `nonempty-choice` boundary evidence in the batch proof contract to record the supplied order. The item had no `verification.judge` record to remove.

Validation after the edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/ex-hmm-viterbi-exact-sequence-map.md` — passed.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-hmm-viterbi-exact-sequence-map.md` — passed; 1 proof checked, 0 failures.
- `node tools/proof-layout.mjs items/ex-hmm-viterbi-exact-sequence-map.md` — passed; 2 steps, 0 defects.
- The updated proof-contract JSON parses and contains all 12 batch contracts.

No other defects were found. No uneditable defect remains.

## Page verdicts

- `finite-trellis-viterbi-and-sequence-decoding` (A): **pass**. Its summary accurately describes the finite-horizon recurrence, traceback, HMM path scoring, and the positive- versus zero-evidence distinction.
- `finite-trellis-viterbi-and-sequence-decoding-examples` (B): **pass**. Its summary matches the assigned counterexamples and worked computations.

The prefix-coding prerequisite page was opened to inspect the declared page dependency; it was outside this batch's verdict scope. No blocker.
