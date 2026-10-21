# Step 3a reader report — batch 19

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Batch: `19`

## Opened inventory

Assigned pages, both checked against the batch manifest:

- `library/inverse-problems/map-estimators-and-cameron-martin-geometry.md` — A page, draft, `compact-v1`; YAML-only body; its four-item inventory and `requires` list match the manifest.
- `library/inverse-problems/map-estimators-and-cameron-martin-geometry-examples.md` — B page, draft, `compact-v1`; YAML-only body; its three examples and `requires` list match the manifest.

Assigned items were opened in dependency order:

1. `lem-ip-banach-gaussian-cm-shift-ball-bound`
2. `lem-ip-gaussian-shift-small-ball-ratio`
3. `def-ip-small-ball-map-estimator`
4. `thm-ip-gaussian-small-ball-map-functional`
5. `ex-ip-finite-dimensional-small-ball-map-equals-density-mode`
6. `cex-ip-infinite-dimensional-pointwise-density-fallacy`
7. `ex-ip-map-differs-from-posterior-mean`

I also opened the batch-19 proof-contract records and the statement interfaces for all 41 unique direct item dependencies:

- Gaussian, choice, and Cameron–Martin interfaces: `def-axiom-of-choice`, `def-countable-choice`, `def-hahn-banach-extension-principle-relative`, `def-borel-gaussian-random-element-on-a-separable-banach-space`, `def-banach-gaussian-covariance-operator-and-rkhs`, `thm-banach-gaussian-covariance-rkhs-is-well-defined`, `def-multivariate-normal-law`, `def-standard-normal-and-normal-laws`, `lem-separable-banach-has-countable-norming-family`, `lem-gaussian-centering-for-bounded-symmetric-quasiconvex-loss`, `thm-continuity-from-above-for-measures`, `thm-cameron-martin-translation-for-separable-banach-gaussian-law`, `thm-support-of-banach-gaussian-is-closure-of-rkhs`, `def-polish-space`, `thm-every-borel-probability-on-a-polish-space-is-tight`, `lem-banach-gaussian-rkhs-unit-ball-is-compact`, `thm-fernique-integrability-for-separable-banach-gaussian-law`, `thm-bolzano-weierstrass`.
- Prior, posterior, and Banach interfaces: `def-ip-prior-on-a-forward-domain`, `def-ip-misfit-evidence-and-posterior-law`, `thm-ip-function-space-posterior-propriety`, `def-banach-space`, `def-borel-probability-law-on-a-polish-space`, `def-separable-space`, `thm-finite-and-countable-subadditivity-of-measures`, `lem-ip-gaussian-series-prior-regularity`.
- Lebesgue and finite-dimensional interfaces: `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `def-nonnegative-lebesgue-integral`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `prop-the-nonnegative-integral-agrees-with-the-simple-integral`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, `lem-euclidean-balls-have-positive-finite-lebesgue-measure`, `thm-borel-sets-are-lebesgue-measurable`, `prop-measure-monotonicity`, `thm-nondegenerate-multivariate-normal-law-has-density`.
- Countability and measure interfaces: `def-measure`, `thm-rationals-countable`, `lem-rat-embeds-dense`, `thm-product-of-countable`, `thm-countable-union-of-countable`.

Full supplier proof bodies were reviewed for `lem-separable-banach-has-countable-norming-family`, `thm-banach-gaussian-covariance-rkhs-is-well-defined`, `lem-gaussian-centering-for-bounded-symmetric-quasiconvex-loss`, `thm-cameron-martin-translation-for-separable-banach-gaussian-law`, `thm-support-of-banach-gaussian-is-closure-of-rkhs`, `lem-banach-gaussian-rkhs-unit-ball-is-compact`, `thm-fernique-integrability-for-separable-banach-gaussian-law`, `lem-ip-gaussian-series-prior-regularity`, and `thm-ip-function-space-posterior-propriety`. The four direct draft cross-batch suppliers are the two prior/posterior definitions and the latter two proof items; their interfaces or proofs supplied what the assigned arguments use.

## Mathematical verdicts

- `lem-ip-banach-gaussian-cm-shift-ball-bound` — sound. The proof handles singular finite-coordinate covariance by restricting to its range, then uses the countable norming family and continuity from above for closed balls.
- `lem-ip-gaussian-shift-small-ball-ratio` — sound. The Cameron–Martin change of measure, conditional symmetry/mean, local shift-ball bound, and dense covariance-range approximation establish the fixed-center ratio for closed balls and positivity of its denominator.
- `def-ip-small-ball-map-estimator` — sound. The global strong small-ball condition is distinguished from the pairwise Cameron–Martin ratio-mode condition; the countable-cover argument establishes positivity of the global supremum.
- `thm-ip-gaussian-small-ball-map-functional` — sound under its stated AC, HB, countable-choice, regularity, and lower-envelope hypotheses. The proof establishes evidence propriety, fixed-center posterior ratios, and existence of a finite minimizer; it does not infer a global strong MAP.
- `ex-ip-finite-dimensional-small-ball-map-equals-density-mode` — sound. The posterior precision is positive definite, the unique density mode is the Gaussian center, and the centered-ball comparison gives a global strong small-ball MAP.
- `cex-ip-infinite-dimensional-pointwise-density-fallacy` — sound for its explicit Gaussian witness on `ℓ²`. The disjoint translated balls and countable dense cover rule out every nonzero translation-invariant Borel measure finite on bounded Borel sets; the conclusion does not rule out densities relative to other measures.
- `ex-ip-map-differs-from-posterior-mean` — sound. The likelihood is valid, the evidence is `1/12`, the strong small-ball MAP is `2/3`, and the posterior mean is `3/5`.

No TikZ or tikzcd diagrams occur in the assigned items or pages. The pages have no Markdown summaries.

## Repairs and evidence

All repairs were confined to `sources.references` metadata in the seven assigned in-flight items. No statement, hypothesis, proof, computation, dependency, contract derivation, or page was changed.

| Item | Repair | Evidence |
| --- | --- | --- |
| `lem-ip-banach-gaussian-cm-shift-ball-bound` | Changed “Lemma 2.4.4” to “Theorems 2.4.4–2.4.5” and identified the finite-dimensional and separable-Banach results separately. | [Giné–Nickl](https://www.statslab.cam.ac.uk/~nickl/Site/__files/FULLPDF.pdf), §2.4.1: Theorem 2.4.4 is Anderson’s finite-dimensional lemma; Theorem 2.4.5 is the separable-Banach shift inequality and proof. Also corrected the Dashti paper’s author list. |
| `lem-ip-gaussian-shift-small-ball-ratio` | Corrected the Dashti author list; corrected the lecture-note authors to H. Kekkonen and Y. Korolev and the section to §7.5; clarified that Theorem 7.5.3 states an open-ball ratio while this local proof establishes the closed-ball version. | [Dashti et al.](https://arxiv.org/pdf/1303.4795), §3, Theorem 3.2 proof invokes the Gaussian ratio rather than proving it. [Kekkonen–Korolev](https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2019/LectureNotes2019.pdf), §7.5, Theorem 7.5.3 states the open-ball ratio. The local proof is the evidence for the closed-ball claim. |
| `def-ip-small-ball-map-estimator` | Corrected the Dashti locators to Assumption 2.1, equation (2.1), and Definition 3.1; corrected the Kekkonen–Korolev section and removed the nonexistent “Definition 7.5.1” label. | [Dashti et al.](https://arxiv.org/pdf/1303.4795), §2 contains Assumption 2.1 and the OM functional at (2.1); §3, Definition 3.1 gives the ball-probability MAP convention. [Kekkonen–Korolev](https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2019/LectureNotes2019.pdf), §7.5 contains the MAP discussion and Theorems 7.5.2–7.5.3. |
| `thm-ip-gaussian-small-ball-map-functional` | Corrected the Dashti theorem locators to §3 rather than nonexistent subsections §3.3 and §3.4; corrected the Kekkonen–Korolev locator to §7.5; supplied the complete Dashti author list. | [Dashti et al.](https://arxiv.org/pdf/1303.4795), §3 contains Definition 3.1, Theorems 3.2 and 3.5, and Corollary 3.10 with their proofs. [Kekkonen–Korolev](https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2019/LectureNotes2019.pdf), §7.5 contains Theorems 7.5.2–7.5.3 and Theorem 7.5.6 with its compact-embedding minimizer proof. |
| `ex-ip-finite-dimensional-small-ball-map-equals-density-mode` | Corrected the Dashti author list and the Kekkonen–Korolev locator from §7.4 to §7.5. | The [Dashti paper](https://arxiv.org/pdf/1303.4795) title page lists M. Dashti, K. J. H. Law, A. M. Stuart, and J. Voss; its §2 gives the finite-dimensional density motivation. The [lecture notes](https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2019/LectureNotes2019.pdf) place Theorems 7.5.2–7.5.3 in §7.5. |
| `cex-ip-infinite-dimensional-pointwise-density-fallacy` | Supplied the omitted K. J. H. Law coauthor in the Dashti reference. | The [Dashti paper](https://arxiv.org/pdf/1303.4795) title page lists all four authors. Its §2 discusses the lack of an infinite-dimensional Lebesgue reference; [Giné–Nickl](https://www.statslab.cam.ac.uk/~nickl/Site/__files/FULLPDF.pdf), §4.4.1, is “Random Gaussian Wavelet Series in Besov Spaces.” |
| `ex-ip-map-differs-from-posterior-mean` | Corrected the Dashti author list and replaced inaccurate MAP locators with Definition 3.1 and the §7.5 MAP discussion/Theorem 7.5.2; corrected the Kekkonen–Korolev author initials. | The [Dashti paper](https://arxiv.org/pdf/1303.4795) defines its ball-probability MAP in §3, Definition 3.1. The [lecture notes](https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2019/LectureNotes2019.pdf) discuss this framework in §7.5; the numerical posterior-mean claim is derived in the assigned proof. |

The proof contracts were checked against the current item proofs and remain applicable because no proof fact or derivation changed. The edited items had no `verification.judge` records to remove.

## Page verdicts

- `map-estimators-and-cameron-martin-geometry` — pass. Draft status, A inventory, `requires`, and `compact-v1` are consistent with the manifest; the page body is empty.
- `map-estimators-and-cameron-martin-geometry-examples` — pass. Draft status, B example inventory, `requires`, and `compact-v1` are consistent with the manifest; the page body is empty.

## Validation

- Reflow: all seven assigned item commands completed; every item was unchanged.
- Precheck: six proof-bearing items passed; the definition returned 0 checked and 0 failing proofs.
- Proof layout: `7 items, 22 steps, 0 defects`.

## Defects not repaired and blocker

No confirmed defect remains unedited in an assigned item, page, or dependency. No blocker.

## Coverage note

All seven assigned item bodies and both assigned pages were opened, as were all 41 unique direct dependency interfaces. The nine full supplier proof bodies listed above were reviewed. I did not re-audit every transitive proof behind the remaining published interfaces; those results were used through the exact statements needed by the assigned arguments. No unresolved inference in the assigned proofs depended on a missing premise.
