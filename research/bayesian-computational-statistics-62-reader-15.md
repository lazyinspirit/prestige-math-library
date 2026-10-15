# Step 3a reader report — batch 15

**Run:** `bayesian-computational-statistics-62`  
**Scope:** batch `15` only  
**Manifest:** `research/bayesian-computational-statistics-62-batch-15.pages.json`

## Opened inventory

### Assigned pages

- `gaussian-process-support-and-concentration` — A page, draft.
- `gaussian-process-support-and-concentration-examples` — B/examples page, draft.

### Assigned items, read in dependency order

- **Level 0:** `def-borel-gaussian-random-element-on-a-separable-banach-space`; `lem-borel-map-into-separable-banach-is-strongly-measurable`; `lem-separable-banach-has-countable-norming-family`; `thm-finite-dimensional-gaussian-isoperimetric-expansion`; `thm-standard-gaussian-log-sobolev-inequality`; `lem-countable-norming-family-determines-borel-laws`.
- **Level 1:** `thm-standard-gaussian-lipschitz-concentration`; `lem-uncorrelated-joint-banach-gaussians-are-independent`.
- **Level 2:** `thm-fernique-integrability-for-separable-banach-gaussian-law`.
- **Level 3:** `def-banach-gaussian-covariance-operator-and-rkhs`; `thm-borell-concentration-for-separable-banach-gaussian-law`.
- **Level 4:** `thm-banach-gaussian-covariance-rkhs-is-well-defined`.
- **Level 5:** `thm-cameron-martin-translation-for-separable-banach-gaussian-law`.
- **Level 6:** `lem-banach-gaussian-rkhs-unit-ball-is-compact`; `thm-support-of-banach-gaussian-is-closure-of-rkhs`.
- **Level 7:** `def-gaussian-prior-concentration-function`; `thm-borell-sudakov-tsirelson-expansion-for-banach-gaussian-law`.
- **Level 8:** `thm-gaussian-concentration-sieve-bounds`.
- **Examples:** `ex-cylinder-gaussian-process-is-not-banach-valued`; `ex-finite-dimensional-gaussian-process-as-tight-banach-prior`.

### Dependency material opened

- Draft current-run supplier: `thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel` (batch 14). Its claim is limited to a unique cylinder-space Gaussian law and does not assert Banach-valued realization or tightness.
- Required page dependencies: `gaussian-process-priors-and-posterior-laws` (draft), `banach-valued-integration-and-the-radon-nikodym-property` (published), and `polyhedral-selective-inference` (published).
- Mathematical interfaces opened where used: `def-standard-normal-and-normal-laws`; `def-multivariate-normal-law`; `lem-characteristic-function-of-a-multivariate-normal-law`; `lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal`; `thm-nondegenerate-multivariate-normal-law-has-density`; `lem-standard-normal-cdf-is-continuous-and-strictly-increasing`; `thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions`; `thm-integration-by-parts-for-absolutely-continuous-functions`; `def-absolutely-continuous-function`; `def-separable-space`; `lem-rat-embeds-dense`; `thm-rationals-countable`; `thm-product-of-countable`; `lem-borel-product-of-second-countable-spaces`; `thm-continuous-preimages-of-borel-sets-are-borel`; `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`; `thm-rectangle-criterion-for-independent-random-elements`; `thm-measure-uniqueness-on-a-sigma-finite-pi-system`; `thm-continuity-from-above-for-measures`; `thm-continuity-from-below-for-measures`; `thm-finite-and-countable-subadditivity-of-measures`; `thm-borel-probability-measures-on-polish-spaces-are-inner-regular`; `thm-every-borel-probability-on-a-polish-space-is-tight`; `def-strongly-measurable-banach-valued-function`; `def-bochner-integrable-function`; `thm-bochner-integrability-criterion`; `lem-bochner-integral-norm-inequality`; `thm-bounded-linear-maps-commute-with-bochner-integration`; `thm-hahn-banach-dominated-extension`; `def-hahn-banach-extension-principle-relative`; `cor-relative-hahn-banach-dual-norming`; `thm-relative-hahn-banach-geometric-separation`; and `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`.

## Repairs

1. **`lem-countable-norming-family-determines-borel-laws`, Fact F3 and step 1.1.** Added `def-separable-space` as a dependency and cited it where the proof chooses a countable dense subset. The statement's separability hypothesis now supplies the base used to identify the Borel sigma-algebra.

2. **`thm-finite-dimensional-gaussian-isoperimetric-expansion`, Fact F1 and step 2.1.** Added `thm-nondegenerate-multivariate-normal-law-has-density` and cited the $N_d(0,I_d)$ density explicitly; tagged the Gaussian integration-by-parts computation with F1. The existing scalar-normal and CDF citations remain in place.

3. **`thm-standard-gaussian-log-sobolev-inequality`, Fact F1 and step 2.1.** Added the same density supplier and tagged the Gaussian-density integration-by-parts step with F1.

4. **`thm-standard-gaussian-lipschitz-concentration`, Fact F2.** Replaced the under-specified citation for the $d$-dimensional Gaussian density with the exact nondegenerate multivariate-normal density theorem and added it to `deps`.

5. **`thm-cameron-martin-translation-for-separable-banach-gaussian-law`, statement, Fact F6, and step 1.1.** Added the $L^2$ Hilbert-space supplier required to extend the isometry to the completion. Specified a Borel-measurable representative of $z_h$ and constructed that representative from the Borel-measure-space $L^2$ class, so the density and its later joint-law uses are Borel-measurable.

6. **`thm-gaussian-concentration-sieve-bounds`, Fact F7.** Added the rational-ball/countable-base and product-Borel suppliers, with the separability dependencies they require. Fact F7 now establishes a Borel joint law for $(W,z_h)$ before using the countable norming family to obtain symmetry.

7. **`ex-cylinder-gaussian-process-is-not-banach-valued`, Fact F5 and step 3.1.** Made the uniqueness bridge explicit: a hypothetical $ℓ^2$-valued random element with the stated finite-coordinate laws induces a cylinder probability agreeing with the given law; uniqueness then contradicts the cylinder law's zero mass on $ℓ^2$.

Each repair is reflected in the batch-15 proof contracts. No `verification.judge` record was present on the changed items. Existing hash-bound boundary-template records remain at their pre-repair hashes; they have not been rebound to the repaired carriers.

## Source checks

- Chafaï–Lehec, *Lectures on the Logarithmic Sobolev Inequality*, Theorem 4.4, PDF p. 45: for every Borel $A\subseteq\mathbb R^d$ and $r>0$, the Gaussian measure of the open $r$-neighborhood is at least $\Phi(\Phi^{-1}(\gamma_d(A))+r)$. The local finite-ball argument supplies the closed Minkowski-sum/inner-measure form used by the item. [Source PDF](https://djalil.chafai.net/docs/M2/chafai-lehec-m2-lsie-lecture-notes.pdf)
- van der Vaart–van Zanten, *Rates of Contraction of Posterior Distributions Based on Gaussian Process Priors*, Theorem 2.1 (§2; PDF p. 4) and its proof in §5 (PDF pp. 19–20): the entropy, complement-mass, and shifted small-ball bounds with constants $6C$, $e^{-Cn\varepsilon^2}$, and $e^{-n\varepsilon^2}$. The local proof matches those prior bounds and makes no posterior-contraction claim. [Article PDF](https://arxiv.org/pdf/0806.3024)
- Borell, *The Brunn–Minkowski Inequality in Gauss Space*, Theorem 3.1, §3, printed pp. 209–210: the Gaussian enlargement inequality for a Gauss space and its Cameron–Martin unit ball. This agreed with the Banach expansion statement; the batch item supplies its reduction locally. [Article PDF](https://dornsife.usc.edu/sergey-lototsky/wp-content/uploads/sites/211/2023/06/Borell-Subspace-original.pdf)

## Checks

- Reflow and precheck were run on all seven changed items. All seven prechecks passed; reflow changed only whitespace in the log-Sobolev, Cameron–Martin, sieve, and cylinder-example items.
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-15.proof-contracts.json --strict --items <seven repaired IDs> --json` passed with no errors or warnings.
- Final required formatter/layout check: `node tools/proof-layout.mjs` on the seven changed item paths reported **7 items, 28 steps, 0 defects**.

## Page verdicts

- **`gaussian-process-support-and-concentration`: sound summary.** It accurately describes the Borel Banach Gaussian setup, the locally proved finite-dimensional and Banach enlargement results, the RKHS support/concentration results, and the restriction that prior bounds alone do not imply posterior contraction.
- **`gaussian-process-support-and-concentration-examples`: sound summary.** It accurately describes the non-$\ell^2$ cylinder example and the explicit tight rank-one $\mathbb R^2$ prior, including its RKHS/support and exponential-moment computations.

## Unedited defects and blockers

No confirmed defect remained outside this batch's edit scope, and no blocker remained for this reader task. The batch-14 Gaussian-process theorem was inspected as a draft dependency and its used cylinder-law interface is supported; no approval of that other batch is implied. The prior boundary-template hashes noted above still refer to pre-repair item bytes and must not be read as review of the repaired bytes.

## Coverage note

Both assigned pages and all 20 assigned item bodies were opened and reviewed in dependency order, along with the direct supplier statements listed above. I did not re-audit unrelated transitive proofs behind established published suppliers. No uneditable mathematical defect was confirmed.
