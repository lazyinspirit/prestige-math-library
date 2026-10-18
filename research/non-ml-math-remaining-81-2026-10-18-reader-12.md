# Step 3a reader report — batch 12

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: reader  
Coverage: batch `12`

## Review scope and inventory

The live autopilot status was `running` at Step 3a, with no dispatch in flight and no reader result yet. The worktree was clean when review began.

Read the repository entry instructions in `CLAUDE.md`, `README.md`, `briefs/reader.md`, and the relevant item/dependency and algorithm rules in `SCHEMA.md` and `WORKFLOW.md`. Read the assigned batch manifest and reviewed all 20 item entries in `research/non-ml-math-remaining-81-2026-10-18-batch-12.proof-contracts.json`, including their citations, derivations, and boundary obligations.

Opened both assigned pages:

- `library/information-theory/discrete-memoryless-channel-capacity.md` (A page)
- `library/information-theory/discrete-memoryless-channel-capacity-examples.md` (B companion)
- The A page's required page, `library/information-theory/f-divergences-renyi-and-hypothesis-testing.md`

Opened all 18 A-page items in dependency order:

`def-channel-sequence`, `def-discrete-memoryless-channel`, `lem-discrete-memoryless-channel-block-kernels-are-stochastic`, `def-discrete-memoryless-channel-information-capacity`, `def-fixed-length-channel-code`, `def-discrete-memoryless-channel-information-density`, `lem-discrete-memoryless-channel-capacity-is-attained`, `lem-discrete-memoryless-channel-n-letter-information-bound`, `def-fixed-length-channel-code-errors`, `lem-discrete-memoryless-channel-iid-information-density-converges`, `lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound`, `def-discrete-memoryless-channel-operational-capacity`, `lem-discrete-memoryless-channel-average-to-maximal-expurgation`, `thm-discrete-memoryless-channel-random-coding-achievability`, `lem-discrete-memoryless-channel-information-density-concentration`, `thm-discrete-memoryless-channel-average-error-converse`, `thm-discrete-memoryless-channel-alphabet-scoped-strong-converse`, and `thm-discrete-memoryless-channel-capacity-formula`.

Opened both B-page examples: `ex-binary-symmetric-channel-capacity` and `ex-binary-erasure-channel-capacity`.

Opened the direct item suppliers and the supporting items used in the reviewed proofs. These included the finite probability-vector and stochastic-kernel definitions; the finite mutual-information, conditional-entropy, conditional-mutual-information and entropy-chain results; the KL and f-divergence definitions and their finite generator/log-sum lemmas; Fano and finite data processing; the measurable probability-kernel, finite probability-space, and random-element definitions; and the logarithm, derivative, convexity, and finite-dimensional compactness results. The current-run supplier items inspected were assigned to batches 4 and 7. The published Cauchy-real completeness corollary noted below was also opened.

## Findings and page verdicts

### A page: `discrete-memoryless-channel-capacity`

The page summary accurately describes the transition from measurable channel sequences to finite DMCs, the product channel law, the code/error conventions, the units, and the scope excluding feedback and input costs. The block-kernel calculation, entropy/Fano converse, random-coding argument, capacity formula, and stated finite-alphabet strong converse match their hypotheses. No defect was found in the assigned A-page prose or its assigned items.

One uneditable published dependency defect lies on the proof path for `lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound`; details follow.

### B page: `discrete-memoryless-channel-capacity-examples`

The BSC and BEC computations, their endpoint cases, and the page's one-use BEC average/maximal-error example are correct. The expurgation summary and its rate-loss bound agree with the assigned lemma and capacity theorem. No defect was found in the B-page prose or either example.

### Uneditable dependency defect

`items/cor-cauchy-reals-lub-complete.md`, proof step 6.1, second case (s'<s): the proof chooses (2\varepsilon<s-s'), then asserts

`s-s' <= |s-a_k| + (a_k-b_k) + |b_k-s'| < 2 epsilon`.

But step 3.1 gives (a_k\le b_k), so (a_k-b_k\le0); this is not a valid upper bound for the positive gap (s-s'). Step 4.1 instead supplies (b_k-a_k<\varepsilon). The estimate closes by writing (s-s'\le |s-a_k|+(b_k-a_k)+|b_k-s'|<3\varepsilon) and choosing (3\varepsilon<s-s'). The theorem statement remains true, but this written proof step is false and needs that sign and constant correction.

This published dependency is reached by assigned consumer `lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound` through `def-finite-kullback-leibler-divergence`, `def-finite-f-divergence`, and `lem-convex-generator-boundary-limits-exist`. It was outside the authorized edit scope and was not changed. The finding is nonfatal because the local estimate has a short repair.

## Edits and validation

No item or page was edited: no confirmed defect was found in an editable batch-12 carrier. Accordingly, no proof contract or judge record was changed, and reflow, precheck, and proof-layout were not run.

## Blocker and coverage limit

No workflow blocker. The assigned pages, all 20 items, all assigned item contract entries, the direct mathematical item suppliers, and the supporting sources listed above were reviewed. I did not audit every transitive foundational dependency of all published suppliers or the two page-level requirements of the required f-divergences page; those broader closures are not needed to trace the reviewed batch-12 proofs. The finding above is limited to the published proof text opened directly.

At close, the broader worktree showed changes outside this batch. I left them untouched. The assigned draft paths and this report appeared as untracked paths; the flagged published dependency showed no tracked-file change.
