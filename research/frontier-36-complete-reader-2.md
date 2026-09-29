# Step 5a reader report — batch 2

Run: `frontier-36-complete`  
Role: `reader-2`  
Manifest: `research/frontier-36-complete-batch-2.pages.json`

## Opened assigned pages and items

- A page: `library/functional-analysis/measurable-hilbert-fields-and-direct-integral-operators.md`
  - `def-von-neumann-algebra-and-commutant`
  - `def-measurable-hilbert-field-from-a-countable-fundamental-family`
  - `lem-measurable-sections-have-measurable-pointwise-inner-products`
  - `lem-separable-abelian-von-neumann-algebras-have-a-self-adjoint-generator`
  - `def-direct-integral-of-a-measurable-hilbert-field`
  - `thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces`
  - `def-measurable-and-decomposable-operator-fields`
  - `thm-measurable-essentially-bounded-operator-fields-act-decomposably`
  - `thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication`
  - `lem-diagonal-multipliers-form-a-von-neumann-algebra`
  - `thm-spectral-multiplicity-model-for-separable-abelian-von-neumann-algebras`
- B page: `library/functional-analysis/measurable-hilbert-fields-and-direct-integral-operators-examples.md`
  - `ex-direct-integral-of-a-constant-hilbert-field`
  - `ex-multiplicity-two-diagonal-representation`
  - `ex-a-measurable-two-dimensional-operator-field`

I opened both assigned page files and all fourteen assigned item files. The A-page summaries match the current items. The B-page summaries and calculations match its examples. The B-page title uses an em dash where the manifest uses a colon; this is a punctuation-only difference and does not change the title's scope.

## Dependency evidence opened

I opened the following published dependencies for the claims that needed their exact hypotheses or conclusions:

- `def-countable` (including the convention `N={0,1,...}`), `def-axiom-of-choice`, `def-countable-choice`, `lem-countable-iff-surjection-from-n`, `thm-n-cross-n-countable`, `thm-rationals-countable`, and `def-separable-space`.
- `lem-maximal-orthogonal-family-of-cyclic-reducing-subspaces`, `thm-cyclic-spectral-representation`, `lem-scalar-and-complex-measures-from-a-pvm`, and `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`.
- `thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact`, `thm-c-c-is-dense-in-l-p-for-radon-measures`, `thm-borel-functional-calculus-for-bounded-normal-operators`, `thm-continuous-functional-calculus-for-bounded-self-adjoint-operators`, and `thm-bounded-borel-pvm-integral`.
- `thm-parseval-equivalences-for-a-complete-orthonormal-family`, `cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras`, `def-finite-sigma-finite-and-semifinite-measures`, `cor-cauchy-schwarz-inequality-for-l-two`, and `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`.

I also read `briefs/reader.md` and consulted these primary source passages because the direct-integral and spectral-multiplicity results were unfamiliar:

- [Bruhat, lecture notes PDF](https://ncatlab.org/nlab/files/Bruhat-LecturesOnLie.pdf), Part III, Chapter 10, printed pp. 94–101: the measurable-field criterion, local field conventions, and operator-field action results.
- [Bekka–de la Harpe, PDF](https://arxiv.org/pdf/1912.07262), Chapter 1, §1.G, pp. 59–60: fundamental families, measurable sections, direct integrals, and Proposition 1.G.2; §§1.G.3–1.H, pp. 64–67: operator-field actions, norm, commutants, and diagonal multiplication.
- [Anantharaman–Popa, PDF](https://www.idpoisson.fr/anantharaman/publications/IIun.pdf), Chapter 8, §8.1, pp. 122–123: Theorem 8.1.1 gives the multiplicity-field decomposition and uniqueness almost everywhere for separable abelian von Neumann algebra modules; Remark 8.1.2 relates it to the classical spectral-multiplicity theorem for a self-adjoint generator.

These sources corroborate the forms of the results; the item proofs were checked against the repository's cited hypotheses and dependencies rather than treating an external theorem statement as a substitute for the local proof.

## Repairs and validation

1. In `items/thm-measurable-essentially-bounded-operator-fields-act-decomposably.md`, proof step 3.1 had a malformed union index, `j,k\in\mathbb N,,n\in\mathbb N_{>0}`. I repaired it to `j,k\in\mathbb N,\ n\in\mathbb N_{>0}`. This fixes syntax without changing the countable-superlevel-set argument or its conclusion. The proof contract's step 3.1 already accurately records that argument, so it needed no change.
   - `node tools/tsx-run.mjs tools/reflow.mts items/thm-measurable-essentially-bounded-operator-fields-act-decomposably.md` — reflowed.
   - `node tools/tsx-run.mjs tools/precheck.mts items/thm-measurable-essentially-bounded-operator-fields-act-decomposably.md` — PASS, 1 checked, 0 failing.
2. In `items/thm-spectral-multiplicity-model-for-separable-abelian-von-neumann-algebras.md`, proof step 1.9 claimed `\nu(K)\le1` for `b_j=2^{-j}/(1+\|\eta_j\|^2)`. Since the repository indexes `\mathbb N` from zero, `\sum_{j\in\mathbb N}2^{-j}=2`; the displayed weights justify `\nu(K)\le2`, which is sufficient for the required finiteness. I changed the bound and stated the sum that proves it. The proof contract's `derive-1-9` claim now records the corrected finite-measure bound.
   - No `verification.judge` record was present in either repaired item's verification metadata.
   - `node tools/tsx-run.mjs tools/reflow.mts items/thm-spectral-multiplicity-model-for-separable-abelian-von-neumann-algebras.md` — unchanged.
   - `node tools/tsx-run.mjs tools/precheck.mts items/thm-spectral-multiplicity-model-for-separable-abelian-von-neumann-algebras.md` — PASS, 1 checked, 0 failing.

## Verdicts and remaining defects

- A page: pass after the two repairs above. The remaining definitions, constructions, claims, and proofs checked out under their stated conventions and dependencies.
- B page: pass. The three examples' operators, spectra/essential ranges, measures, multiplicities, and commutant computations checked out. No B-page prose was edited.
- Uneditable defects: none identified in the material opened for this review.
- Mathematical blocker: none identified in the assigned claims. The findings JSON therefore has an empty `findings` array.

## Coverage and run-state limitation

There are 102 unique direct dependency IDs in the batch's dependency closure. I did not independently open every routine transitive dependency leaf or reread every bibliography entry; I opened the load-bearing dependencies listed above and traced remaining elementary steps to the exact facts and local derivations supplied by the assigned items. Thus this is not a full transitive audit of the published library.

The repository's `.autopilot/frontier-36-complete` directory is absent. The requested status command reported a workflow-revision mismatch and no configured run/status file; `git log` also has no commit mentioning this run, and the assigned draft files are untracked. The dispatch and their `pipeline_run` frontmatter identify this batch, but I could not independently recompute its live stage. This limits confirmation of run state, not the mathematical verdicts above.
