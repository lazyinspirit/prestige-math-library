# Step 3a reader report — batch 5

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: `reader-5`  
Review date: 2026-10-21

## Result

No confirmed defects remain in the assigned batch. No item or page content was edited, no uneditable defect was found, and there is no batch-level blocker. Since no item changed, item reflow, precheck, and proof-layout commands were not applicable. No diagram occurs in an assigned item or page.

The live run status was recomputed from `.autopilot/inverse-problems-knot-theory-all-109-2026-10-19`: it was at `3a-read`, with no worker in flight. The reader report and findings file are the only files written for this handoff; no run state or gate was changed.

## Opened inventory

### Assigned pages

- `library/inverse-problems/parameter-choice-and-bakushinskii-veto.md` — A page `parameter-choice-and-bakushinskii-veto`.
- `library/inverse-problems/parameter-choice-and-bakushinskii-veto-examples.md` — B page `parameter-choice-and-bakushinskii-veto-examples`.

Both assigned pages have frontmatter only, retain `page_layout: compact-v1`, and have inventories matching the batch manifest.

### Page prerequisites opened

- `library/inverse-problems/linear-operators-pseudoinverses-and-picard-criteria.md` — `linear-operators-pseudoinverses-and-picard-criteria`.
- `library/inverse-problems/deterministic-source-conditions-and-optimal-recovery.md` — `deterministic-source-conditions-and-optimal-recovery`.
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/spectral-regularization-and-parameter-choice.md` — `spectral-regularization-and-parameter-choice`; its slug resolves under this category.

### Assigned items

- `def-ip-noise-level-free-parameter-rule`
- `thm-ip-bakushinskii-veto`
- `ex-ip-discrete-grid-l-curve-parameter-choice`
- `cex-ip-noise-underestimation-truncated-svd`
- `ex-ip-stable-restricted-class-bakushinskii`

### Item dependencies opened for claim checks

- Inverse-model and parameter-rule context: `def-countable-choice`, `def-ip-compact-linear-inverse-model`, `def-ip-unbounded-hilbert-moore-penrose-inverse`.
- Discrete L-curve example: `alg-discrete-l-curve-parameter-choice`, `def-tikhonov-regularised-least-squares`, `thm-tikhonov-regularised-least-squares-has-a-unique-minimiser`.
- Compactness and sequence-space counterexample: `def-banach-space`, `def-bounded-linear-operator`, `def-compact-linear-operator`, `def-linear-map`, `def-operator-norm`, `def-linear-basis`, `def-square-summable-family-on-an-arbitrary-index-set`, `lem-finite-rank-operators-are-compact`, `lem-square-summable-sequences-form-a-hilbert-space`, `thm-norm-limit-of-compact-operators-is-compact`.
- Restricted source-class example: `def-ip-centered-modulus-of-continuity`, `def-ip-index-source-ball`, `def-ip-power-source-set`, `def-compact-spectral-filter-and-qualification`, `def-absolute-value-and-singular-values-of-a-compact-operator`, `thm-singular-value-decomposition-for-compact-operators`, `lem-ip-index-source-elements-are-minimum-norm`, `lem-ip-spectral-interpolation-for-power-source-balls`, `thm-ip-source-ball-modulus-of-continuity`, and the assigned `thm-ip-bakushinskii-veto`.

The batch-5 proof-contract citations, derivations, boundary rows, and finite checks were compared with the current item text. The cited fact labels and step uses match the authored arguments.

## Item review

- **`def-ip-noise-level-free-parameter-rule` — pass.** The definition fixes the operator and reconstruction family, defines a positive-valued map on observed data, and distinguishes it from inputs carrying the exact datum or noise bound. Its references follow the complete definition.
- **`thm-ip-bakushinskii-veto` — pass.** Step 1 uses the observation $z=y$ in every positive error ball and the per-datum limit to force exact recovery by $R_{\alpha(y)}y$. Step 2 applies that identity to each $z\in D(K^\dagger)$, then the limit at the fixed $y$ gives continuity in the inherited norm. The argument does not require uniform convergence over all exact data; the Countable Choice hypothesis is retained for the Moore–Penrose supplier. The cited Clason and Asherry results support this implication and its scope.
- **`ex-ip-discrete-grid-l-curve-parameter-choice` — pass.** The three Tikhonov solutions, residuals, and solution norms are computed correctly. The log-log edge vectors are $(\log 5,-\log(9/5))$ and $(\log(9/5),-\log 5)$; their determinant and all curvature denominator factors are nonzero. With exactly three retained points there is one candidate, assigned to the middle grid value.
- **`cex-ip-noise-underestimation-truncated-svd` — pass.** The coordinate truncations are bounded finite-rank operators and converge to $K$ in operator norm, so the cited compactness theorem applies into the Banach space $\ell^2$. The range and pseudoinverse formulas are correct. For $y=0$, the data $z_j=e_j/j$ satisfy $\|z_j\|=1/j\to0$, while $\alpha(z_j)=1/j^2$ and $R_{\alpha(z_j)}z_j=e_j$; the worst-case error is at least one at arbitrarily small noise levels. The proof also establishes pointwise regularization on $D(K^\dagger)$.
- **`ex-ip-stable-restricted-class-bakushinskii` — pass.** The source-ball theorem supplies the stated $\sqrt{\rho\delta}$ bound and singular-direction equality for $\nu=1$. Its witness $x_j=\rho s_jv_j$ lies in the source ball and has data norm $\rho s_j^2$. Separately, $K v_j=s_ju_j\to0$ while $K^\dagger(Kv_j)=v_j$ has norm one, proving discontinuity at zero. The restricted modulus claim does not assert universal convergence.

## Source checks

- Christian Clason, [*Regularization of Inverse Problems*](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf): Definition 4.4, Chapter 4, PDF p. 34, says a heuristic rule depends only on the observed datum; Theorem 4.8 and proof, PDF p. 37, derive continuity of the pseudoinverse from convergence of a data-only rule. The scope discussion on pp. 37–38 expressly leaves finite-dimensional and restricted data/error cases open. Theorems 4.11–4.12, PDF p. 40, give the power-source modulus upper bound and singular-direction attainment used by the restricted-class example. These passages support the cited claims; the assigned proofs were checked independently.
- Ferdia Sherry, [*Inverse Problems: Lecture Notes 2024*](https://ferdiasherry.com/LectureNotes2024.pdf): Section 3.2.3, Theorem 3.12 and proof, PDF pp. 33–34, state and prove that convergence with a heuristic data-only parameter rule implies continuity of the Moore–Penrose inverse.
- Per Christian Hansen, [*Introduction to Inverse Problems*, Chapter 5](https://people.compute.dtu.dk/pcha/DIP/chap5.pdf): slides 10–13, PDF pp. 9–12, describe the log-log L-curve and maximum-curvature corner. Hansen's slides use a $\lambda_H^2$ penalty convention; the local Tikhonov definition and algorithm consistently use $\lambda$ as the coefficient of the squared-norm penalty. The source supports the L-curve context, while the exact finite-grid rule is defined by the local algorithm.

## Page verdicts

- **`parameter-choice-and-bakushinskii-veto` — pass.** Its two assigned items are placed in the A-page item list, examples are empty, all three required page IDs resolve, and the page body is empty.
- **`parameter-choice-and-bakushinskii-veto-examples` — pass.** Its three assigned examples are in the examples list, the item list is empty, its required A page resolves, and the page body is empty.

## Edits, remaining defects, and blockers

- **Item/page edits:** none.
- **Confirmed defects that could not be edited:** none.
- **Blocker:** none for batch 5.

The review covered the complete assigned item and page bodies, their direct mathematical dependencies, the supplier proofs needed for the displayed arguments, and the cited source sections listed above. It was not a repository-wide audit of every transitive foundation behind those suppliers, and it does not claim any native gate or publication coverage.
