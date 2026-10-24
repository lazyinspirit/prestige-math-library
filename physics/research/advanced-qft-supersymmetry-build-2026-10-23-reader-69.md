# Step 3a reader report — batch 69

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: independent reader  
Batch: `69`

## Opened inventory

Assigned pages:

- `library/quantum-field-theory-mathematics/qftx-positive-real-linear-monad-normal-forms.md` (A)
- `library/quantum-field-theory-mathematics/qftx-positive-real-linear-monad-normal-forms-examples.md` (B)

Assigned items, read in dependency order:

- A: `def-qftx-positive-real-monad-first-order-families`, `lem-qftx-positive-real-monad-charge-normalization`, `lem-qftx-positive-real-monad-hyperplane-twist-sequences`, `lem-qftx-positive-real-monad-rank-stability-criterion`, `lem-qftx-positive-real-monad-analytic-twist-cohomology`, `lem-qftx-positive-real-monad-chain-lift`, `lem-qftx-positive-real-monad-flat-splitting`, `lem-qftx-positive-real-monad-internal-positivity`, `thm-qftx-positive-real-adhm-monad-normal-form`.
- B: `ex-qftx-positive-real-monad-zero-charge`, `ex-qftx-positive-real-monad-one-instanton`.

Opened the current supplier pages and draft items from batches 59 and 67: `qftx-adhm-linear-data-and-framed-monads`, `def-qftx-adhm-linear-data-stability-and-regularity`, `lem-adhm-stable-quotient-and-torus-lift`, `thm-qftx-adhm-real-complex-quotient-correspondence`, `qftx-gaga-projective-scalar-dolbeault`, `def-qftx-gaga-projective-twisting-line-bundles`, `lem-qftx-gaga-projective-cover-laurent-cohomology`, and `thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology`. No defect was confirmed in those current-run suppliers at the uses made by batch 69.

The direct published mathematical dependencies used in the assigned arguments were opened: `def-axiom-of-choice`, `def-dual-numbers-scheme`, `def-relative-projective-space-standard-charts`, `def-locally-free-sheaf-finite-rank`, `def-twisting-sheaf-proj`, `def-complex-projective-space-and-holomorphic-charts`, `def-complex-manifolds-and-holomorphic-vector-bundles`, `def-chern-character-and-todd-class`, `def-chern-classes-of-a-vector-bundle`, `lem-chern-class-naturality-additivity-and-splitting`, `lem-integral-cohomology-ring-of-complex-projective-space-by-splitting`, `lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold`, `thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals`, `thm-cohomology-projective-space-twisting-sheaves`, `thm-long-exact-sequence-sheaf-cohomology`, `thm-the-complex-numbers-are-algebraically-closed`, and `def-curvature-of-a-vector-bundle-connection`. Their imported/read-only status was checked against `research/math-imports.json`; none was edited.

## Repairs and evidence

- `def-qftx-positive-real-monad-first-order-families`: defined the semilinear dual sheaf, nondegenerate Hermitian pairing, Hermitian symmetry, and the constant pointwise pairing on sections of a real line. This makes the stated positivity test a precise Hermitian form on the line-section space.
- `lem-qftx-positive-real-monad-charge-normalization`: specified (k,N\in\mathbb Z_{\ge0}), defined algebraic sheaf cohomology and its Euler characteristic, and defined the hyperplane cycle map used to compare the Chow and singular cohomology classes. Added the exact-sequence additivity of the Chern character from the stated Whitney/splitting inputs and Euler-characteristic additivity from the long exact sequence; the two monad short exact sequences now supply the displayed (N-2k) calculation.
- `lem-qftx-positive-real-monad-rank-stability-criterion`: made its parameter range (N\ge1, k\ge0) explicit, matching `def-qftx-adhm-linear-data-stability-and-regularity`.
- `lem-qftx-positive-real-monad-analytic-twist-cohomology`: supplied the missing derived-cohomology identification for a closed hyperplane inclusion (i), namely (H^q(\mathbb P^r,i_*G)\cong H^q(\mathbb P^{r-1},G)). The proof records exactness of closed pushforward, its preservation of injectives, and equality of global sections. This closes the previously implicit passage in both hyperplane long exact sequences.
- `lem-qftx-positive-real-monad-chain-lift`: identified (D(F)) explicitly as the holomorphic twisted dual ((\sigma^*\overline F)^\vee), matching the signed-dual monad.
- `lem-qftx-positive-real-monad-flat-splitting`: tied its line positivity hypothesis to the explicit constant section pairing and corrected the source for the global-section isomorphism: it follows from the negative-twist vanishing and the sheaf-cohomology long exact sequence. Its line restriction argument now refers to the exact pairing definition.
- `thm-qftx-positive-real-adhm-monad-normal-form`: stated the line-section pairing explicitly, kept the first-order family proof in the algebraic category specified by its definition, and proved the (U(k,A)) residual-isomorphism claim over the dual-number ring by coefficient comparison and preservation of the Hermitian form. The family argument now uses the algebraic twisting-sheaf computation rather than an unstated analytic thickening comparison.

For the main normal-form proof, I checked the coefficient derivation of both moment equations, the infinity framing and flat summand, the unitary residual action, and the family base-change conditions. In the arbitrary-rank positivity lemma, the real-line Gram matrices are nondegenerate, the orthogonal projection (Q) has the stated complement, and the inverse-Gram calculation gives \(\Delta K=-2KDK\preceq0\); the decay \(K=O(|x|^{-2})\) and the minimum-principle argument give (K\succ0). The one-instanton example’s (D_zD_z^\dagger=f_zI_2), projection connection, and anti-self-dual two-form signs agree with its stated Euclidean metric and orientation.

Updated the affected batch-69 proof-contract records and synchronized the assigned manifest’s dependency roles, dependencies, and statement mirrors. No `verification.judge` record was present on the repaired items, and no review or verification stamp was added. No B-page prose or published/imported supplier was edited.

## Uneditable published-dependency findings

- `thm-cohomology-projective-space-twisting-sheaves`, Proof 3.1 and 3.2, refers to the “first/second group of 1.6”, but there is no numbered Step 1.6. Proof 4.1 refers to Step 2.3, which also does not exist. The corresponding groups are already displayed in Step 2.2 and the (n=0) case in Step 3.3, so this is a nonfatal internal-reference defect; it is reported for owner disposition. Assigned consumers include the charge lemma and the normal-form theorem.
- `thm-long-exact-sequence-sheaf-cohomology`, Proof 4.1, places the final justification tags after `∎`. The required order is `[tags] ∎`. The mathematical long-exact-sequence statement is clear, so this is a nonfatal published formatting defect. Batch 69 uses this supplier in the chain-lifting and exact-sequence arguments, including the charge lemma.

No confirmed defect was found in the current-run draft suppliers from batches 59 and 67; therefore there is no `in-run-dependency` finding and no `observed_source` binding.

## Diagram review

The single TikZ commutative diagram in `lem-qftx-positive-real-monad-chain-lift` has the stated source and target monads, arrow directions, and signed differential (-\beta^\#). Its squares match (H\alpha=-\beta^\#p) and (r\beta=\alpha^\#H). The proof does not rely on the diagram. No other assigned item contains a TikZ or tikzcd diagram requiring repair or addition.

## Page verdicts

- A page `qftx-positive-real-linear-monad-normal-forms`: no page-frontmatter or presentation defect; its body remains empty as required. The assigned mathematical repairs are recorded above. The page remains draft and has the reported published-supplier findings for owner disposition.
- B page `qftx-positive-real-linear-monad-normal-forms-examples`: no page-frontmatter or presentation defect; its body remains empty as required. Both examples are consistent with the repaired theorem and charge calculation. The page remains draft and inherits the reported published-supplier findings through its item dependencies.

## Sources, checks, and limits

Read the cited primary passages relevant to the local mathematics: [Donaldson, *The ADHM construction of Yang–Mills instantons*](https://arxiv.org/pdf/2205.08639), §§2–4 and 6 (matrix data, projection connection, twistor lines, and instanton/charge conventions); [Nakajima–Yoshioka, *Lectures on Instanton Counting*](https://arxiv.org/pdf/math/0311058), §3.1, printed pp. 17–19 (framed sheaves and the locally free instanton locus); [Brantner, *Infinity-Categories and Deformation Theory*, Lecture 1](https://people.maths.ox.ac.uk/brantner/24L1.pdf), printed pp. 1–2 (dual numbers and first-order deformations); and [Stacks Project, Tag 0B28](https://stacks.math.columbia.edu/tag/0B28), Definition 33.16.1 and the following scaling map (epsilon\mapsto\lambda\epsilon). The latter sources support the cited context only; all batch-69 deductions above were checked from the stated local hypotheses and opened suppliers. The Barth–Hulek PDF endpoint was not retrievable through the web tool, and the 11 MB Verdier PDF exceeded its retrieval limit; neither was used as a substitute for a local proof.

Reflow and precheck were run on every changed item. Reflow reported either unchanged or reflowed; every scoped precheck exited successfully. The required final command `node tools/physics-support/proof-layout.mjs items/def-qftx-positive-real-monad-first-order-families.md items/lem-qftx-positive-real-monad-charge-normalization.md items/lem-qftx-positive-real-monad-rank-stability-criterion.md items/lem-qftx-positive-real-monad-analytic-twist-cohomology.md items/lem-qftx-positive-real-monad-chain-lift.md items/lem-qftx-positive-real-monad-flat-splitting.md items/thm-qftx-positive-real-adhm-monad-normal-form.md` reported 7 items, 38 steps, 0 defects.

Coverage is limited to the assigned batch, direct suppliers needed for its claims, and the named transitive current-run draft suppliers; I did not independently re-audit the full transitive published mathematics foundation beneath those suppliers. No operational blocker remains. The two published dependency findings are outside this reader’s write scope.
