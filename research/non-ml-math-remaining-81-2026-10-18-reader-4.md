# Step 3a reader report — batch 4

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: reader  
Batch: `4`

## Opened inventory

Pages:

- A page `finite-alphabet-entropy-and-divergence`: `library/information-theory/finite-alphabet-entropy-and-divergence.md`.
- B page `finite-alphabet-entropy-and-divergence-examples`: `library/information-theory/finite-alphabet-entropy-and-divergence-examples.md`.

Assigned items, reviewed in dependency order:

- `def-it-information-units-and-logarithm-base`
- `lem-it-finite-marginals-and-conditionals-are-pmfs`
- `lem-it-finite-kl-agrees-with-measurable-kl`
- `lem-it-finite-log-sum-inequality`
- `def-it-finite-conditional-entropy`
- `def-it-finite-mutual-information`
- `def-it-finite-conditional-mutual-information`
- `thm-it-finite-kl-nonnegative-equality`
- `thm-it-information-unit-conversion`
- `thm-it-finite-conditional-mutual-information-identities-and-equality`
- `thm-it-finite-entropy-chain-rule`
- `thm-it-finite-markov-data-processing`
- `thm-it-fano-inequality`
- `cor-it-fano-with-erasure-or-out-of-alphabet-estimates`
- `ex-it-binary-entropy-and-extremizers`
- `cex-it-kl-is-directional-and-can-be-infinite`
- `ex-it-independent-and-deterministic-information`

Published dependency interfaces opened: `def-natural-logarithm`, `thm-natural-logarithm-laws`, `def-real-exponential-function-and-e`, `def-qa-35-finite-probability-entropy-and-stochastic-matrices`, `def-finite-sum-in-a-commutative-monoid`, `lem-finite-sum-reindexing-and-fubini`, `def-finite-probability-space-and-event`, `thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces`, `cor-expectation-agrees-with-the-finite-weighted-sum`, `def-absolutely-continuous-with-respect-to-a-positive-measure`, `def-radon-nikodym-derivative`, `def-kullback-leibler-divergence`, `def-axiom-of-choice`, `thm-finite-jensen-inequality`, `def-convex-concave-and-midpoint-convex-functions`, `thm-logarithm-derivative-and-integral`, `thm-algebra-of-derivatives`, `thm-algebra-of-continuous-functions`, `cor-mean-value-theorem`, and `def-random-element-and-real-random-variable`. I also consulted `def-finite-real-random-variable-and-distribution` for finite-space context. The batch proof-contract file was reviewed as evidence and not treated as a verdict.

## Mathematical review and source evidence

The log-base convention has domain `b>1, t>0`; strict increase of `ln` and `ln 1=0` justify `ln b>0`. The marginal and conditional normalization calculations follow from the finite reindexing/Fubini interface and divide only by positive marginal mass. The finite/measurable KL comparison constructs the finite density coordinatewise, separates failure of absolute continuity, and invokes the general KL definition only with its stated AC interface.

The log-sum proof establishes strict convexity of `t ln t` on the positive domain from its derivative and the mean value theorem, handles the zero endpoint directly, and separates all support and zero-total cases. Its Jensen equality argument yields proportionality on the full coordinate set, including zero reference coordinates. The KL nonnegativity/equality theorem, unit conversion, conditional mutual-information identity and equality criterion, entropy and mutual-information chain rules, Markov data processing equality condition, both Fano bounds, and the three finite examples are justified with finite sums and explicit support cases. No unlicensed inference or unsupported conclusion remained after the repair below.

I checked the cited information-theory passages against the linked authoritative texts. Gray's *Entropy and Information Theory*, corrected first edition, §2.2, printed pp. 18–20, gives the finite entropy formula, `0 ln 0=0`, and nats/bits convention; Lemma 2.3.1, printed pp. 21–22, gives finite KL nonnegativity and equality; Lemma 2.5.5, printed pp. 40–41, gives conditional mutual-information nonnegativity and its conditional-independence equality case; and Lemma 4.2.1, printed pp. 72–73, gives the sharp finite Fano bound. Source: <https://ee.stanford.edu/~gray/it.pdf>.

Polyanskiy and Wu, *Information Theory: From Coding to Learning*, author prepublication, Definition 1.1 and Definition 1.3, printed pp. 9–11, specify entropy units and conditional entropy; Theorem 2.3, printed p. 24, gives the information inequality; Definition 3.1, printed p. 42, identifies mutual information with joint KL; Definition 3.6 and Theorem 3.7, printed pp. 50–52, cover conditional mutual information, chain rule, and data processing; and Theorem 3.12, printed pp. 57–58, states Fano's inequality for randomized estimators. Source: <https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf>.

## Edit and validation

- In `thm-it-finite-entropy-chain-rule`, proof step 1.1 now explicitly restricts the logarithmic expansion to `q_x>0` and `q_{y|x}>0`. The previous display included `ln q_{y|x}` for zero conditional mass. The revised finite sum is valid without evaluating `ln 0`; the zero coordinates contribute through the stated entropy convention. I synchronized derivation step 1.1 in `research/non-ml-math-remaining-81-2026-10-18-batch-4.proof-contracts.json`. The draft had no `verification.judge` record to remove.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-it-finite-entropy-chain-rule.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-it-finite-entropy-chain-rule.md`: pass.
- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-4.proof-contracts.json --items thm-it-finite-entropy-chain-rule --json`: pass.
- `node tools/proof-layout.mjs items/thm-it-finite-entropy-chain-rule.md`: 1 item, 3 steps, 0 defects.
- No page prose or B-page prose was edited.

## Page verdicts

- `finite-alphabet-entropy-and-divergence` (A): sound after the localized proof-step repair. The page summary accurately describes the finite conventions and results.
- `finite-alphabet-entropy-and-divergence-examples` (B): sound. The binary entropy calculation, directional KL witness, disjoint-support boundary, independence calculation, and deterministic-output calculation match their statements.

## Unedited defects and blocker

No confirmed defect remains unedited. No blocker.

## Coverage note

All assigned pages and items and the published dependency statements/interfaces needed for their local arguments were opened. The published suppliers' entire transitive proof closures were not re-audited; the review checked their exact interfaces used by this batch and cross-checked the cited information-theory passages listed above.
