# Step 3a reader report — batch 44

Run: `machine-learning-all-101-2026-10-19`  
Role: `reader-44`  
Batch: `44`

## Opened inventory

Read the assigned manifest, batch notes, coverage record, proof contracts, author check, and both page carriers. The notes, contracts, and author check were treated as evidence only.

Pages:

- `library/machine-learning/implicit-bias-of-gradient-training.md`
- `library/machine-learning/implicit-bias-of-gradient-training-examples.md`

Assigned A-page items, reviewed in dependency order:

- `def-clarke-subdifferential-and-gradient-flow`
- `def-linear-separable-margin-and-hard-margin-svm`
- `def-tight-exponential-tail`
- `thm-zero-initialized-gd-selects-minimum-norm-least-squares`
- `lem-hard-margin-svm-has-unique-minimizer`
- `lem-logistic-and-exponential-losses-have-tight-exponential-tail`
- `def-homogeneous-classifier-margin-and-exponential-risk`
- `def-margin-kkt-and-mfcq`
- `lem-clarke-euler-identity-for-homogeneous-margins`
- `lem-clarke-sum-chain-rule-for-exponential-risk`
- `lem-recursive-hard-margin-comparison-trajectory`
- `thm-separable-logistic-gd-selects-hard-margin-direction`
- `lem-homogeneous-margin-constraints-satisfy-mfcq`
- `lem-homogeneous-clarke-flow-margin-monotonicity`
- `lem-approximate-margin-kkt-limit-under-mfcq`
- `lem-local-margin-minimum-satisfies-kkt-under-mfcq`
- `lem-homogeneous-clarke-flow-produces-approximate-margin-kkt-points`
- `thm-homogeneous-gradient-flow-limit-satisfies-margin-kkt`

Assigned B-page examples:

- `ex-underdetermined-linear-system-gd-minimum-norm`
- `ex-degenerate-hard-margin-support-vector`
- `ex-homogeneous-kkt-point-not-global-margin-maximizer`

Direct suppliers opened before their assigned consumers:

- `alg-gradient-descent`
- `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`
- `thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution`
- `thm-least-squares-solutions-and-normal-equation`
- `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`
- `def-feedforward-neural-network` (current batch-31 supplier)
- `thm-strict-separation-of-a-point-from-a-closed-convex-set`
- `thm-farkas-alternative-for-finite-linear-systems`
- `lem-nonzero-real-polynomial-zero-set-is-lebesgue-null` (current batch-31 supplier)
- `def-countable-choice`

For the compactness/attainment fact used by the hard-margin proofs, also opened `thm-heine-borel-rn` and `thm-compactness-under-continuous-maps`.

Checked the assigned feedforward-network dependency's TikZ diagram against its definition. It correctly depicts a fully connected scalar-output perceptron with two inputs, two activated hidden nodes, and a linear output; no proof relies on it.

## Review and edits

The assigned definitions, theorem statements, examples, witnesses, and proofs are mathematically sound under their stated hypotheses. In particular, the linear least-squares theorem covers rank deficiency and the zero matrix; the recursive hard-margin comparison proof handles zero-multiplier active constraints without a generic-position assumption; and the flow/KKT chain keeps its margin and constraint signs consistent.

Two in-scope repairs were made:

1. In `lem-homogeneous-clarke-flow-margin-monotonicity`, Step 5.1 inferred `r(t) → ∞` only from the impossibility that the whole trajectory is bounded. The repair handles failure to tend to infinity: it extracts a bounded-radius subsequence, places it in a compact ball, bounds every continuous margin above there, and contradicts the already proved loss limit `φ(t) → 0`.
2. In `def-margin-kkt-and-mfcq`, the Remarks now record the sign inconsistency in Lyu and Li, Appendix C.1–C.2 and Lemma C.7. Their text sets `g_i = 1 - q_i ≤ 0`, but states positive directional derivatives for `∂°g_i` and then evaluates the Euler pairing as `+Lq_i`; since `∂°g_i = -∂°q_i`, that pairing is `-Lq_i`. The local margin-form convention is sign-consistent. The reference to Lemma C.7 in `lem-homogeneous-margin-constraints-satisfy-mfcq` was annotated with this caveat; its local proof directly establishes the claim.

For the first repair, the affected batch-44 proof-contract derivation for Step 5.1 was updated. None of the edited items had a `verification.judge` record to remove.

Validation after the edits:

- Reflow reported unchanged for all three edited item paths.
- Precheck passed for both proof-bearing edited items; the definition has no proof phases (`0 checked, 0 failing`).
- Final layout check: `node tools/proof-layout.mjs items/def-margin-kkt-and-mfcq.md items/lem-homogeneous-clarke-flow-margin-monotonicity.md items/lem-homogeneous-margin-constraints-satisfy-mfcq.md` reported `3 items, 7 steps, 0 defects`.

Authoritative source checks included Soudry et al., [Theorem 3, JMLR PDF p. 3](https://jmlr.csail.mit.edu/papers/volume19/18-188/18-188.pdf) and its Appendix B Lemma 12 / Appendix C Theorem 13 statements (PDF pp. 24–26); Lyu and Li, [§3 and §4.1–4.3 and Appendix C.1–C.2](https://arxiv.org/pdf/1906.05890), including Theorems 4.1 and 4.4, Theorem C.4, and Lemma C.7; and the least-squares source locations in Hastie et al. [§2.2, Proposition 1](https://arxiv.org/pdf/1903.08560) and Cornell CS 3780 [Lecture 12, pp. 1–2](https://www.cs.cornell.edu/courses/cs3780/2026sp/slides/lec12.pdf). The source Theorem 3 matches the linear claim; the local batch proof supplies its own comparison-trajectory argument. The locally used source results were checked against their exact statements and hypotheses.

## Uneditable findings

These are published-dependency statement-format defects. Each complete Definition or Statement contains inline item links, contrary to the uninterrupted-statement rule. The links must be moved after the complete section into the corresponding references section while preserving their meanings.

- `alg-gradient-descent`, `## Definition`: two links in the opening paragraph and a link to the Armijo-termination lemma in the closing paragraph. Assigned consumer route: `thm-zero-initialized-gd-selects-minimum-norm-least-squares`.
- `def-countable-choice`, `## Definition`: the equivalence sentence embeds links to `def-choice-function` and `def-countable`. Assigned consumer route: `thm-separable-logistic-gd-selects-hard-margin-direction`.
- `thm-strict-separation-of-a-point-from-a-closed-convex-set`, `## Statement`: the concluding sentence embeds a link to `def-supporting-hyperplane-to-a-convex-set`. Assigned consumer route: `lem-clarke-sum-chain-rule-for-exponential-risk`.
- `thm-heine-borel-rn`, `## Statement`: inline links occur in the opening sentence and the closed-box, Heine–Borel, and real-line clauses. Assigned consumer route: `lem-hard-margin-svm-has-unique-minimizer`, through `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`.
- `thm-compactness-under-continuous-maps`, `## Statement`: inline links occur throughout the introductory sentence and all three claims. Assigned consumer route: `lem-hard-margin-svm-has-unique-minimizer`, through `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`.

## Page verdicts

- `implicit-bias-of-gradient-training` (A): pass. It is draft, has `page_layout: compact-v1`, has an empty body, and lists the 18 assigned A items exactly once in the manifest order. Its seven `requires` entries match the assigned manifest.
- `implicit-bias-of-gradient-training-examples` (B): pass. It is draft, has `page_layout: compact-v1`, has an empty body, and lists the three assigned examples exactly once. Its requirement on the A page is present.

## Blocker and coverage note

Blocker: none for batch 44.

I reviewed all 21 assigned items and both pages, plus the listed direct suppliers and the two transitive compactness/attainment suppliers needed for the existence arguments. I did not audit every transitive dependency of the published suppliers. I checked the cited Soudry theorem and the relevant recursive-decomposition statements, but did not reconstruct every line of the paper's Appendix C auxiliary case analysis; the assigned comparison-trajectory proof was checked directly rather than treated as established by that paper.
