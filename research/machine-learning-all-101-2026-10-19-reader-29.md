# Step 3a reader report — batch 29

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Batch: `29`

## Opened inventory

Assigned pages read in full (both are frontmatter-only):

- `library/machine-learning/ml02-private-learning.md`
- `library/machine-learning/ml02-private-learning-examples.md`

Assigned items read in dependency order:

- `alg-private-randomized-weighted-majority`
- `alg-private-finite-class-erm`
- `thm-private-online-learning-regret-under-composition`
- `ex-online-one-round-replacement`
- `thm-private-erm-excess-risk`
- `ex-private-threshold-class-erm`
- `ex-private-erm-large-finite-class`

Dependency items opened to check the assigned arguments:

- Exponential, measurable-space, product, measure and kernel suppliers: `cor-exponential-reciprocal-and-positivity`, `def-real-exponential-function-and-e`, `thm-exponential-addition-formula`, `thm-exponential-is-strictly-increasing`, `lem-of-square-positive`, `def-measurable-space`, `def-sigma-algebra`, `def-measurable-function-between-measurable-spaces`, `def-measurable-rectangle`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-measure`, `def-measure-space`, `def-probability-measure`, and `def-measure-kernel-and-probability-kernel`.
- Measurability suppliers for the ERM selector: `thm-arithmetic-and-lattice-operations-preserve-measurability`, `thm-composition-with-borel-functions-preserves-measurability`, `thm-continuous-preimages-of-borel-sets-are-borel`, and `thm-threshold-characterisations-of-real-and-extended-real-measurability`.
- Regret and adaptive-composition suppliers: `def-axiom-of-choice`, `def-natural-logarithm`, `thm-natural-logarithm-laws`, `thm-logarithm-derivative-and-integral`, `def-filtration-and-filtered-probability-space`, `def-conditional-expectation-given-a-sigma-algebra`, `def-martingale-difference-sequence`, `lem-qa-30-exp-quadratic-bound`, `thm-azuma-hoeffding-inequality`, `def-differential-privacy-and-adjacency`, `thm-advanced-adaptive-composition-arbitrary-measurable-outputs`, `lem-dp-joint-measure-purification`, `lem-dp-test-function-extension`, `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`, `thm-integration-against-a-radon-nikodym-derivative`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `thm-measurability-of-integration-against-a-kernel`, `thm-sections-of-product-measurable-functions-are-measurable`, `thm-monotone-convergence-for-the-integral`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, and `def-integral-of-a-nonnegative-simple-function`.
- ERM risk and probability suppliers: `lem-probability-measure-basic-identities`, the current in-run `thm-finite-class-agnostic-erm-bound`, and `thm-finite-class-uniform-deviation`.

The required external page targets `finite-class-pac-learning-and-erm` and `ml02-differential-privacy` were checked at their page metadata; both are draft. The `quantum-optimization-sdp-and-variational-algorithms` page target exists under `library/quantum-algorithms/` and is published. No TikZ or tikzcd diagrams occur in the assigned files.

## Page verdicts

- `ml02-private-learning`: **pass**. Draft status, `page_layout: compact-v1`, companion and required-page metadata, and four-item inventory match the batch manifest. The Markdown body is empty, as required.
- `ml02-private-learning-examples`: **pass**. Draft status, `page_layout: compact-v1`, companion and required-page metadata, and three-example inventory match the batch manifest. The Markdown body is empty, as required.

## Mathematical verdicts

- `alg-private-randomized-weighted-majority`: repaired. The original Definition called histories containing arbitrary real loss vectors finite sets. The verification also asserted a probability kernel from a list of probabilities without constructing its event measures, and the Definition gave both a closed-form weight and a recursive update without establishing their agreement. The Definition now specifies finite-length, possibly uncountable histories with their power-set sigma-algebras, states that each current loss is fixed before the fresh action draw, and defines the conditional action kernel. The procedure uses the recursive update; Verification 1.1 proves finite positive weights and normalizers by induction, and Verification 2.1 explicitly constructs the finite, countably additive probability measure and checks kernel measurability. This avoids an unsupported duplicate closed-form definition.
- `alg-private-finite-class-erm`: repaired. Verification 2.1 previously inferred a probability measure from normalized point weights without defining its event values or checking countable additivity. It now defines `K(S,A)` as the finite sum over each event and proves countable additivity and measurability for both the ordered-sample and power-set database domains.
- `thm-private-online-learning-regret-under-composition`: the expected and high-probability regret arguments, ordered per-round privacy ratios, composition caps, exact inverse-parameter expression, and interactive-kernel extension are supported by the stated hypotheses and suppliers. Its fact F1 was updated to describe the revised algorithm interface accurately. The closed form in the theorem's own Statement agrees with the recursive update by finite induction using the cited exponential addition law.
- `ex-online-one-round-replacement`: repaired. Fact F1 now describes the algorithm's recursive update rather than a closed-form formula no longer stated by that supplier. Verification 1.1 now says that the common first loss leaves the weights unchanged, without incorrectly describing the full action-loss history as containing only the loss vector. Verification 2.1 computes the round-three weights from the update.
- `thm-private-erm-excess-risk`: the restricted-domain add/remove sensitivity bound, normalized-weight ratios, finite-range selector tail, deviation event, union bound, excess-risk decomposition, and sample-size constant check out. No mathematical defect was found. Its batch-3 deviation supplier has an owner-readiness binding blocker described below.
- `ex-private-threshold-class-erm`: the four prediction vectors, empirical risks, weights, normalizer, and normalized probabilities are correct.
- `ex-private-erm-large-finite-class`: the Boolean-function count, log-cardinality, specialized sufficient sample-size expression, and exhaustive implementation cost are correct; the text correctly limits the cost claim to that implementation.

## Repairs and evidence

Only these assigned in-flight items were edited: `alg-private-randomized-weighted-majority`, `alg-private-finite-class-erm`, `thm-private-online-learning-regret-under-composition`, and `ex-online-one-round-replacement`. Their affected entries in `research/machine-learning-all-101-2026-10-19-batch-29.proof-contracts.json` were synchronized. None of the four carriers had a `verification.judge` record, so there was no stale judge record to remove. No page, B-page prose, published content, other batch, or plan specification was edited.

The Dwork–Roth source confirms the recursive weighted-majority procedure in Algorithm 15, the expected regret bound in Theorem 11.1, the whole-vector replacement adjacency and action transcript in §11.2, the per-round `2η` privacy parameter, and the advanced-composition specialization in Theorem 11.2. Its Theorem 3.20 gives the exact advanced-composition expression used by the local supplier. Its Definition 3.4 and Theorem 3.10 support the finite exponential selector and privacy-ratio argument. Shalev-Shwartz–Ben-David, Lemma 4.5 and Corollary 4.6, support the finite-class Hoeffding and union-bound event. Vadhan’s §2.2 Lemma 2.4 and Claim 2.5 provide the privacy-loss composition argument; its lemma is stated asymptotically, while the exact arbitrary-measurable-output claim is proved by the opened local in-run supplier.

- [Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf): Definition 3.4 and Theorem 3.10, printed pp. 38–40; Theorem 3.20, printed pp. 49–51; §11.1, printed pp. 219–221; Algorithm 15 and Theorems 11.1–11.4, printed pp. 223–226.
- [Shalev-Shwartz and Ben-David, *Understanding Machine Learning: From Theory to Algorithms*](https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf): Chapter 4 §4.2, Lemma 4.5 and Corollary 4.6, printed pp. 56–57.
- [Vadhan, *The Complexity of Differential Privacy*](https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf): §2.2, Lemma 2.4 and Claim 2.5, PDF pp. 15–17.

## Unedited defects

No confirmed or suspected mathematical defect remains that is outside this batch’s edit authority. The current body of `thm-finite-class-agnostic-erm-bound` was reviewed at SHA-256 `2abdbb1484c8a25f68858c13921e1699fd25bb657085c4b64209b51b9a5119dc`; its deviation argument is sound for the use made here.

## Blockers and validation

- **Batch-3 readiness blocker:** `research/machine-learning-all-101-2026-10-19-step1-thm-finite-class-agnostic-erm-bound.json` says `ready` but binds SHA-256 `ffa42526dba8eff929d9d37093641d531a9038e6e8bc84dcd118a476474ab8a4`, which differs from the current supplier bytes reviewed above. The assigned consumer `thm-private-erm-excess-risk` therefore still depends on an unreconciled owner-readiness record. That record belongs to batch 3 and was not edited or refreshed here; it is a workflow blocker, not a mathematical finding.
- **Run-wide blocker:** the recomputed autopilot status still reports `3a-split` blocked because `split-8` failed three times (covers batch 8), outside this assignment.
- Reflow and precheck passed for each changed item. Final batch precheck passed all seven assigned items; strict proof-contract validation passed all seven with zero errors or warnings. The final `node tools/proof-layout.mjs` run checked the four changed items: 14 proof steps, zero defects. No judging, stamping, or self-certification was performed.
