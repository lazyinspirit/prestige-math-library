# Step 3a reader report — batch 113

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader (`reader-113`)  
Scope: batch `113`

## Opened inventory

- Batch manifest: `research/physics-non-fluid-129-2026-10-21-r2-batch-113.pages.json`.
- Assigned pages: `library/thermodynamics-and-general-relativity-mathematics/tgr-mhs05.md` and `library/thermodynamics-and-general-relativity-mathematics/tgr-mhs05-examples.md`.
- Assigned items: `def-tgr-finite-cutoff-outside-entropy`, `lem-tgr-finite-cutoff-mode-entropy-growth`, `lem-tgr-renormalization-finite-part-ambiguity`, and `ex-tgr-generalized-entropy-not-monotone-from-definition`.
- Batch context read as evidence: `research/physics-non-fluid-129-2026-10-21-r2-batch-113.proof-contracts.json` and `research/physics-non-fluid-129-2026-10-21-r2-batch-113.notes.md`. I checked the current item bodies independently of the earlier author dispositions.
- Mathematical supplier statements opened for the assigned arguments: `def-linear-map`, `def-coordinate-column-and-matrix-of-a-linear-map`, `thm-unique-coordinates-with-respect-to-an-ordered-basis`, `def-qc-tensor-register-and-permutation`, `def-non-negative-and-positive-operator`, `def-self-adjoint-and-normal-endomorphism`, `def-qc-density-operator`, `def-trace-of-a-square-matrix`, `def-trace-of-an-endomorphism`, `cor-trace-is-invariant-under-similarity`, `thm-similarity-is-an-equivalence-relation-and-models-basis-change`, `def-it-von-neumann-entropy`, `thm-non-negative-operator-characterisations`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `def-natural-logarithm`, `def-real-exponential-function-and-e`, `def-integer-power`, `thm-exponential-addition-formula`, `cor-exponential-reciprocal-and-positivity`, `thm-exponential-is-strictly-increasing`, `thm-of-archimedean`, `def-real-numbers`, `cor-cauchy-reals-lub-complete`, `def-complete-ordered-field`, `thm-reals-ordered-field`, `thm-reals-field`, and `def-real-order`. The dependency statements used below are from published mathematical suppliers.

## Independent item review and repairs

### `def-tgr-finite-cutoff-outside-entropy`

**Verdict:** The definition and local finite-dimensional construction are sound after the proof references were made explicit. The displayed partial-trace matrix is the linear map obtained from its action on the product basis. Positivity, self-adjointness and trace one follow from the density-operator hypothesis and the ordered tensor inner product. The basis-independence argument using `tr(ρ_out B)` and matrix units is valid.

**Repair:** The original final proof step used the spectral facts for a non-negative endomorphism without stating the finite-dimensional spectral supplier; its trace calculation also used the diagonal-sum definition without citing that definition. I added `thm-non-negative-operator-characterisations` and `def-trace-of-a-square-matrix` as mathematical prerequisites, expanded Facts [F3], [F7] and [F9], and rewrote step 2.1 to derive that the eigenvalues are nonnegative and sum to one before applying the entropy definition. The exact supplier statements are: a non-negative finite-dimensional complex endomorphism has an orthonormal eigenbasis with nonnegative real eigenvalues, and matrix trace is the sum of diagonal entries. The item's Definition statement itself was not changed.

The proof contract now records the tensor-product inner-product convention, both trace definitions, the spectral result, and their uses in step 2.1. The item had no `verification.judge` record to remove; its existing `precheck: pending` was retained.

### `lem-tgr-finite-cutoff-mode-entropy-growth`

**Verdict:** The entropy calculation and divergence argument are correct after restoring the hypothesis of the Archimedean supplier.

**Repair:** The original Fact [F8] stated the Archimedean conclusion for every real number but omitted that `thm-of-archimedean` assumes a complete ordered field. Step 3.1 applied it to `M/c` without establishing that hypothesis for the library's real field. I added `def-real-numbers` and `cor-cauchy-reals-lub-complete` as mathematical prerequisites, stated the complete ordered-field property in new Fact [F10], and corrected [F8] to retain the supplier's hypothesis. Step 3.1 now applies the theorem to `M/c` only after [F10]. The real-completeness statement is supported by the published Cauchy-sequence real construction and its least-upper-bound result. The lemma's Statement was not changed.

The proof contract now records the complete-field hypothesis, the real-number construction and completeness suppliers, and the revised step 3.1 derivation. The item had no `verification.judge` record to remove; its existing `precheck: pending` was retained.

### `lem-tgr-renormalization-finite-part-ambiguity`

**Verdict:** No defect found. The explicit epsilon definition is used directly: replacing `r_N` by `r_N-a` changes each tail difference by exactly `a`, so the finite limit changes from `L` to `L+a`. No divergence expansion or physical renormalization claim is inferred.

### `ex-tgr-generalized-entropy-not-monotone-from-definition`

**Verdict:** No defect found. Both displayed matrices are density operators with spectra `(1/2,1/2)` and `(1,0)`. Their entropies are respectively `k_B log 2` and zero; the fixed additive term cancels, giving the stated strict decrease on the two labels. The item expressly says the labels are not a physical evolution.

## Source and citation review

The cited sources were checked at their relevant sections, not read cover to cover:

- [Watrous, *The Theory of Quantum Information*, ch. 2, §2.1.3](https://jhwatrous.github.io/TQI.2.pdf), equations (2.30)–(2.34), defines reductions by partial trace and gives its coordinate form. The general mixed-state positivity, trace, and basis-independence proof in the assigned definition is local.
- [Preskill, *Quantum Information*, ch. 2, §2.3](https://www.preskill.caltech.edu/ph219/chap2_15.pdf), equations (2.61)–(2.67), derives the partial-trace formula in a pure-state expansion. I did not use that pure-state derivation as proof of the item's general mixed-state claim.
- [Watrous, *The Theory of Quantum Information*, ch. 5, §5.2.1](https://jhwatrous.github.io/TQI.5.pdf), Definition 5.17, defines von Neumann entropy through the eigenvalue vector. Watrous uses base-2 logarithms by default and writes the natural logarithm as `ln`; the assigned definition explicitly uses the natural logarithm and an arbitrary positive scalar `k_B`, with its exact mathematical meaning supplied by `def-it-von-neumann-entropy`.
- [Preskill, *Quantum Shannon Theory*, ch. 10, §10.2](https://www.preskill.caltech.edu/ph219/chap10_6A_2025.pdf), equations (10.59)–(10.61), relates von Neumann entropy to the eigenvalue distribution. The chapter likewise uses base-2 logarithms by default. The assigned items state their natural-log convention explicitly; no source-specific base conversion is claimed.
- [MIT OCW 18.100B, Spring 2025, Lecture 3](https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf), p. 13, states the epsilon definition of sequence convergence. The finite-part shift itself is proved in the assigned item.

## Page verdicts

- `tgr-mhs05` (A page): The draft mathematics page has the expected three-item placement and its frontmatter identity, category, and required-page list match the assigned inventory. No page-level defect remains. The two proof repairs above are local to assigned items and add only published mathematics prerequisites.
- `tgr-mhs05-examples` (B page): The draft companion identity and one-example placement match the assigned inventory. No page-level defect found. Its body is empty, consistent with this run's compact frontmatter-only page policy.

No TikZ/tikzcd diagrams occur in the assigned pages or items, and no diagram is needed for the stated finite-dimensional arguments. The assigned items are mathematical; there are no physical assumptions, empirical observations, or statistical claims to qualify.

## Validation and disposition

- Reflow: both repaired items reported `unchanged`.
- Precheck: both repaired items passed (`1 checked, 0 failing` each).
- Final proof layout: `2 items, 8 steps, 0 defects`.
- Updated proof-contract JSON parses successfully. No judge record was present on either repaired item.
- Uneditable findings: none. No current-run cross-batch supplier was introduced; the added suppliers are published mathematical items.

## Blocker and coverage limits

There is no remaining batch-level mathematical blocker. The batch authoring notes report a stale shared run-level batch-dependency scheduling snapshot and say it needs owner refresh before run-wide gates. I did not independently recheck or modify that shared run artifact; the owner should confirm its current status.

The assigned base definition and independent finite-part lemma were initially opened before all of their published suppliers; I read the exact used supplier statements before reaching the final proof verdicts. Thus the mathematical checks below are supplier-informed, but I do not claim a fully supplier-first file-opening sequence. External-source review covered the cited passages only, not the full books. I also did not independently re-audit every transitive dependency of the published mathematical suppliers or run whole-batch gates.
