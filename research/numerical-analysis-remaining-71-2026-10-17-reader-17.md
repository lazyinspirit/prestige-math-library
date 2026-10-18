# Step 3a reader report — batch 17

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader  
Batch: `17`

## Opened inventory

Assigned pages:

- `library/numerical-linear-algebra-and-approximation/sketched-least-squares-and-subspace-embeddings.md` (A)
- `library/numerical-linear-algebra-and-approximation/sketched-least-squares-and-subspace-embeddings-examples.md` (B)

Page prerequisites opened:

- `library/numerical-linear-algebra-and-approximation/randomized-low-rank-approximation.md` (draft)
- `library/numerical-linear-algebra-and-approximation/computed-fast-transforms-and-convolution.md` (published)
- `library/mathematical-statistics/robust-covariance-and-high-dimensional-stability.md` (published; this page is in the `mathematical-statistics` category)

Assigned A-page items opened, in supplier-first order:

- `alg-sketch-and-solve-least-squares`
- `def-oblivious-l2-subspace-embedding`
- `def-sketch-qr-right-preconditioner`
- `def-subspace-leverage-scores`
- `lem-hermitian-sphere-net-controls-operator-norm`
- `lem-gaussian-squared-norm-tail`
- `lem-subspace-leverage-score-identities`
- `thm-sketch-and-solve-exact-minimizer`
- `thm-sketch-qr-right-preconditioner-conditioned-spectrum`
- `alg-leverage-score-row-sampling-sketch`
- `thm-gaussian-oblivious-l2-subspace-embedding`
- `thm-sketch-and-solve-residual-guarantee`
- `thm-leverage-score-row-sampling-subspace-embedding`

Assigned B-page items opened:

- `cex-embedding-the-column-space-alone-does-not-control-ls-residual`
- `ex-leverage-zero-rows-and-high-coherence`
- `ex-overdetermined-regression-exact-subspace-sketch`

Immediate item dependencies opened before their consumers:

- `alg-rank-thresholded-least-squares-by-svd`
- `def-full-reduced-and-column-pivoted-computational-qr-factorisations`
- `lem-epsilon-net-of-unit-sphere-has-cardinality-bound`
- `thm-complex-spectral-theorem-for-normal-endomorphisms`
- `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`
- `def-operator-norm-on-a-finite-dimensional-inner-product-space`
- `def-countable-choice`
- `def-standard-real-and-normalized-complex-gaussian-matrix-law` (draft, batch 11)
- `thm-linear-change-of-variables-for-lebesgue-measure`
- `cor-markov-inequality-for-random-variables`
- `thm-logarithm-derivative-and-integral`
- `thm-finite-union-bound`
- `thm-svd-thresholded-least-squares-minimum-norm-model`
- `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`
- `thm-singular-value-decomposition`
- `thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts`
- `thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison`
- `lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence` (draft, batch 11)
- `thm-least-squares-solutions-and-normal-equation`
- `lem-bounded-independent-matrix-bernstein-via-trace-exponential`

Additional local items opened to check Gaussian-law normalization:

- `thm-gaussian-integral`
- `lem-normal-density-has-total-mass-one`
- `lem-plane-gaussian-integral-in-polar-coordinates`

## Source checks

- Woodruff, [*Sketching as a Tool for Numerical Linear Algebra*](https://arxiv.org/pdf/1411.4357), §§2.1–2.6: Definitions 1–2 (PDF pp. 9–10), Lemma 5 (p. 12), Theorem 6 (p. 13), Definition 16 and Theorem 17 (pp. 25–28), and Theorem 21 (pp. 30–31). Theorem 6 states the Gaussian row rate as an absolute-constant `Theta` bound; the local proof supplies the explicit constant 192. Theorem 17 gives the leverage-sampling rate with a larger published constant; the local proof derives its stated constant from the matrix-Bernstein supplier. Theorem 21 uses the subspace spanned by the columns of A and b; the local proof supplies the squared-residual factor directly.
- Mahoney, [*Randomized Algorithms for Matrices and Data*](https://www.math.ucdavis.edu/~strohmer/courses/270/RandLA.pdf), §§4.2–4.3 (PDF pp. 21–23): §4.2 describes leverage-score row sampling and rescaling followed by solving the sketched least-squares problem; §4.3 gives a deterministic structural condition for relative-error approximation. The local batch proofs supply the sharper exact statements they claim.
- Lin, [*Lecture Notes of Matrix Computations*](https://zhims.github.io/doc/note/computing/matrixComputations.pdf), §3.2.2, Theorem 3.2.1 and Remark 3.2.1 (PDF pp. 60–61; printed pp. 50–51): the SVD formula for the unique minimum-norm least-squares solution and the pseudoinverse representation.
- Martinsson and Tropp, [*Randomized Numerical Linear Algebra: Foundations & Algorithms*](https://arxiv.org/pdf/2002.01387), §§8.3, 11.1.1, and 11.4.2 (PDF pp. 30, 42–43, 47–48): Gaussian embeddings and the rangefinder setup; §11.4.2 treats real standard-normal test matrices. Halko, Martinsson, and Tropp, [*Finding Structure with Randomness*](https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf), §10.1 (PDF pp. 54–55) defines standard Gaussian matrices through independent real standard-normal entries, states rotational invariance, and says the section focuses on the real case with analogous complex results. These sections do not provide the local normalized-complex density argument identified below.
- Rigollet and Hütter, [*High-Dimensional Statistics: Lecture Notes*](https://arxiv.org/pdf/2310.19244v1), Lemma 1.18 (PDF pp. 34–35): the volume-packing proof gives the net cardinality bound used for the real sphere (the sphere is contained in the unit ball). Woodruff Lemma 5 supports the net method, with its own looser cardinality bound.

## Edits and evidence

- `items/def-subspace-leverage-scores.md`: added the dependency on `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases` and a Remark citing it. The Definition chooses an orthonormal basis for every positive-dimensional subspace of `K^n`; the published corollary states that every finite-dimensional real or complex inner-product space has one. The existing leverage-identity lemma establishes basis independence, but did not supply existence.
- `items/lem-hermitian-sphere-net-controls-operator-norm.md`: expanded step 1.1 to justify the real-symmetric case from the cited complex spectral theorem. For a real matrix, a complex max-modulus eigenvector has real and imaginary parts that are real eigenvectors, and the complex diagonalization bounds the real operator norm while a real eigenvector attains it. This closes the gap between the lemma's `R` case and its complex-only spectral-theorem supplier.
- `items/cex-embedding-the-column-space-alone-does-not-control-ls-residual.md`: corrected step 1.1 from the false scalar equality `S(Ax)=x=||Ax||_2` for every real x to `||S(Ax)||_2=|x|=||Ax||_2`. The example's embedding calculation is then valid for negative and positive x.
- Updated the exact step-1.1 derivation mirrors for the two changed proof-bearing items in `research/numerical-analysis-remaining-71-2026-10-17-batch-17.proof-contracts.json`. `def-subspace-leverage-scores` has no proof-contract row because it is a definition; its consumer contract's quoted Definition text did not change. None of the three changed items had a `verification.judge` record to remove.

The batch manifest still records `deps: []` for `def-subspace-leverage-scores`, while the corrected item now lists the orthonormal-basis corollary. I did not edit the manifest because the reader scope permits item and A-page prose repairs, not manifest maintenance; the owner should reconcile that mirror before any exact-mirror gate.

## Unedited defects

- A-page `sketched-least-squares-and-subspace-embeddings`, `frontmatter.requires`: the current page lists `randomized-low-rank-approximation` and `computed-fast-transforms-and-convolution`; the batch manifest also lists `robust-covariance-and-high-dimensional-stability`. This third page contains `lem-bounded-independent-matrix-bernstein-via-trace-exponential`, a direct dependency of `thm-leverage-score-row-sampling-subspace-embedding`. The page-level prerequisite is therefore absent from the authored A-page carrier. I could not edit page metadata under the assigned scope.
- B-page `sketched-least-squares-and-subspace-embeddings-examples`, summary paragraph: it says the first example is the two-row regression sketch, then the counterexample, and the final example is the leverage calculation. The page's actual `examples` order is the counterexample, the leverage example, then the regression example. I could not edit B-page prose.
- In-run dependency `def-standard-real-and-normalized-complex-gaussian-matrix-law` (batch 11), Definition: its current source declares the real and normalized-complex formulas to be probability densities/laws and states `E|z|^2=1`, but its declared dependencies contain no normalization or moment supplier. The assigned consumer `lem-gaussian-squared-norm-tail` calls the density a probability density in F1 and uses its total mass in step 1.1. The local `lem-normal-density-has-total-mass-one` assumes full AC, whereas this definition assumes Countable Choice; the local Gaussian-integral and plane-integral theorems I checked are not in the definition's dependency closure, and the complex normalization/moment still needs an argument under the stated assumption. I read the current carrier after an observed source change; the current raw SHA-256 is `08cd141d61198fc5d49fa067861bddcd42c50977e355debd50c57a12d2505ae4`. The cross-batch finding binds this current hash, not the earlier source bytes. A local proof under Countable Choice or a compatible normalization supplier is needed.

## Page verdicts

- **A page — substantively accurate with an open page-prerequisite defect.** Its summary matches the assigned claims and limitations. The row-sampling theorem's matrix-Bernstein supplier is present at item level, but the containing robust-covariance page is absent from `requires`.
- **B page — computations sound after the counterexample repair, summary inaccurate.** The three witnesses and computations are valid, but the summary assigns them the wrong order and descriptions.

## Validation and blocker

- `reflow` reported unchanged for all three edited items.
- `precheck`: `def-subspace-leverage-scores` — 0 checked, 0 failing; the counterexample — 1 checked, 0 failing; the Hermitian-net lemma — 1 checked, 0 failing.
- Strict proof-contract validation passed for the Hermitian-net lemma, the counterexample, and `lem-subspace-leverage-score-identities`: 3/3, 0 errors, 0 warnings.
- Final `proof-layout` for all three changed items: 3 items, 6 steps, 0 defects.

The Gaussian concentration and Gaussian-embedding claims remain blocked on the batch-11 Gaussian-law normalization dependency. The A-page prerequisite metadata and B-page summary also require out-of-scope owner repairs. No validator or execution blocker occurred in this review.

## Coverage note

I read all 16 assigned items, both assigned pages, the three page prerequisites listed above, and the 20 immediate item dependencies used by the assigned items. I did not independently re-audit the full recursive proof closure of every published immediate dependency or unrelated claims on the prerequisite pages. Truncated batched reads were continued with targeted reads until the relevant statements and arguments were complete. The in-run Gaussian-law finding is tied to the current hash recorded above; the earlier observed source hash no longer describes current bytes.
