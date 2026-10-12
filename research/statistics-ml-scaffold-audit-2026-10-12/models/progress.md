# Category 2 scaffold audit: durable progress

Assigned file: `research/plan-statistical-models-experiments-track.md` (62 SME pairs). Write scope also allows evidence under this directory. Before reading the scaffold, I read `CLAUDE.md`, `README.md`, and `SCHEMA.md` fully. I have read the complete assigned scaffold and all six `research/statistics-scaffolds-2026-10-11/models/models-*/dossier.md` files; the source manifests/progress records are retained in those dossiers and have not been treated as proof certificates.

## Confirmed cross-category interfaces

- SME-44 needs a precise general state-space law: standard-Borel state/observation spaces, initial law, jointly measurable probability kernels, and finite-horizon factorization `mu_0(dx_0) prod K_t(x_{t-1},dx_t) G_t(x_t,dy_t)`. Its separate linear-Gaussian subclass needs centered mutually independent initial/process/observation noises, independence across times, and PSD covariance matrices. The Bayesian audit owner confirmed these clauses match BCS-38/39, is updating their `Requires` entries, and is checking BCS-40–45.
- SME-20 will expose recursive SCM, DAG d-separation, the global Markov implication (DAG factorization implies d-separation conditional independence), and faithfulness as separate clauses. It will not promise a Markov-equivalence/skeleton/unshielded-collider theorem: the recorded Pearl reading is §§3.1–3.3 and its extracted text contains no such characterization. The replacement ML audit owner will prove CPDAG/Markov equivalence/oracle orientation locally. No Cat2 dependency reaches Cat4.
- Parent reports the baseline parser found all 62 SME main pairs structurally referenced and no unknown/later `Requires` labels; that check was structural only.

## Existing library bodies inspected

Statuses below were read from item front matter (all listed items are `published`); theorem statements and proof routes were checked in item bodies, not inferred from names.

- Probability law/moments: `def-random-element-and-real-random-variable`, `def-law-or-distribution-of-a-random-element`, `def-moments-variance-and-covariance`, `lem-variance-and-covariance-identities-for-random-variables`. These supply measurable observations/laws, square-integrable means/covariances and finite covariance algebra.
- Linear prediction: `thm-normal-equations-for-best-affine-l2-prediction` proves a unique (L^2) predictor class even when coefficients are nonunique; it is not a fixed-design statistical theorem. `thm-least-squares-solutions-and-normal-equation` gives all minimizers as one solution plus the kernel; `thm-orthogonal-projection-is-the-unique-nearest-point` gives projection uniqueness. `thm-qr-factorisation-over-r-or-c`, spectral theorem/Courant–Fischer, SVD, Moore–Penrose minimum-norm, and matrix derivative items supply only their stated algebraic clauses.
- Conditional laws: `def-conditional-expectation-given-a-sigma-algebra`, `thm-conditional-expectation-is-the-l2-orthogonal-projection`, `cor-conditional-variance-decomposition`, `def-measure-kernel-and-probability-kernel`, `thm-existence-of-regular-conditional-distributions-for-standard-borel-targets`, `thm-disintegration-of-a-joint-law-on-standard-borel-spaces`, and `thm-conditional-density-formula`. RCD/disintegration and conditional-expectation existence inherit AC; standard-Borel and integrability hypotheses are explicit. `def-conditional-independence-given-a-sigma-algebra` is a published bounded conditional-product definition and also inherits AC; this exact supplier was missing from the plan's existing-supplier table and is being added.
- Independence/limits: `def-independent-random-elements`, `thm-independent-random-elements-have-product-joint-law`, `thm-factorization-of-expectations-for-independent-variables`, iid and Lindeberg–Feller CLTs, multivariate iid CLT, `thm-cramer-wold-device`, scalar Slutsky, continuous mapping, and iid L1 strong law. The cited iid/martingale CLTs, Cramér–Wold and scalar Gaussian definitions state AC; no independent-observation result silently upgrades pairwise independence.
- Martingales: `def-filtration-and-filtered-probability-space`, `def-martingale-submartingale-and-supermartingale`, `def-martingale-difference-sequence`, `def-square-integrable-martingale-difference-array-and-variance-clock`, `thm-martingale-central-limit-theorem`, `thm-optional-sampling-for-bounded-stopping-times`, and Azuma–Hoeffding. They are discrete-time. The existing martingale definition and CLT/optional-sampling statement inherit AC; bounded sampling cannot be replaced by an unproved unbounded stopping argument.
- Spectrum/measure: `thm-bochner-theorem-for-lca-groups` requires AC and DC; `thm-lebesgue-stieltjes-correspondence-with-distribution-functions` requires Countable Choice; `def-measure`, `def-counting-measure`, and `prop-counting-measure-is-a-measure` concern ordinary measures/arbitrary-set counting measure, not random locally finite counting measures or Palm laws.

The scaffold's planned interfaces MSF-01/02/03/04/05/07/08/10/12/13/14/15/20/34/35 remain planned suppliers, not existing library items. SME-30 and SME-31 are new Cat2 prerequisites; SME-30 must require (E[A_T]<\infty), not merely pathwise finite compensator, for the proposed square-integrable isometry. No missing MSF interface has been identified so far.

## Concrete mathematical findings to repair

1. SME-05 had the wrong exact degrees of freedom for the Wishart trace statistic. Under (H_0:\Sigma=\Sigma_0), `tr(Sigma_0^{-1}(n-1)S)` is \(\chi^2_{p(n-1)}\), while the covariance LRT's regular asymptotic degrees of freedom are \(p(p+1)/2\). I corrected the scaffold.
2. SME-30's phrase “finite A” was too weak for square integrability. It will require an integrable continuous compensator on the finite horizon (at least (E A_T<\infty)), a unit-jump simple counting process, the martingale compensator contract, and bounded predictable integrands; then state predictable bracket/isometry and no-simultaneous-jump cross-brackets. This is a local Cat2 supplier, not a general compensator-existence theorem.
3. SME-41 and SME-45 use the existing LCA Bochner theorem; the scaffold must carry AC+DC. SME-28 uses the existing Lebesgue–Stieltjes correspondence and must carry Countable Choice.
4. SME-44 lacked exact kernel factorization and independent-noise conditions for BCS. Changes are coordinated with the BCS owner.
5. SME-20's current “observationally equivalent graphs” example is underspecified; it will be stated as two SCMs with the same observed law and different intervention laws. CI notation is supplied by the existing conditional-independence definition; the model/graph theorem contract will be explicit without importing Markov equivalence.
6. Parent reported a baseline `rendercheck` with 526 unsupported TeX delimiter errors in this plan (`\(...\)`/`\[...\]`); I will convert all to `$...$`/`$$...$$` and record the final check result.

## Source evidence read for uncertainty resolution

- I read the exact H-H (Hudgens–Halloran) models-03 extracted full-text section 3.1–3.6 and 4.1 to check the strategy-specific interference estimands and design-unbiasedness boundary; the source says variance estimators need the separate stratified-interference assumption and may be biased without additivity.
- I searched the retained Pearl models-03 extraction for Markov-equivalence/skeleton/v-structure wording; none appears in the recorded §§3.1–3.3 range. This is why ML-25 keeps that theorem local.
- I read the actual library item bodies for the suppliers listed above and checked front-matter statuses/dependency declarations. This was a read-only review; no workflow, item, page, canonical plan or commit was touched.

## Next action

Continue pair-by-pair contract repair from SME-19 onward in short durable chunks, then SME-28–62, finish exact per-pair JSON and reviewer report, convert all TeX delimiters, inspect the BCS edits against SME-44, and run only requested/necessary formatting/render checks. Current pair count remains 62; no pair addition is decided.

## Additional repairs completed

- Reviewed and repaired the mathematical contracts in SME-01–18 and SME-19–62 inline while preserving all 62 pair labels. Main additions include exact pair-specific definitions/hypotheses for regression estimability/Gauss–Markov, Gaussian/GLM and multivariate tests, sampling designs, sharp-null randomization, potential outcomes and interference, missingness/measurement error, censoring/survival, counting-process integrability, survival influence expansions, time-series/ARMA, fields/kriging/point processes, multiplicity, selective/sequential and adaptive tests.
- Corrected the GLM IRLS weight to use the common scale (a(\phi)V(\mu_i)); kept the deviance-residual/goodness-of-fit source gap explicit rather than adding an unsupported distributional claim.
- Repaired SME-20 `Requires` metadata by moving its own proposed IDs to `Interfaces:`. The exact global-Markov direction is factorization ⇒ d-separation CI on the full graph; faithfulness is separate. Back-door/front-door evaluation includes latent nodes in the full graph; continuous-treatment pointwise formulas are restricted to positive-probability discrete treatments, with continuous values only a.e. absent extra version/regularity proof.
- Repaired SME-24 with Hudgens–Halloran's exact two-stage randomization and group-average estimands/estimators, after reading the extracted source §§2–4.1. Variance estimation remains conditional on stratified interference and may be positively biased without additive effects.
- Repaired SME-44 with exact BCS general-kernel and linear-Gaussian interfaces; the BCS owner confirmed and is updating direct `Requires` references.
- Converted all 811 occurrences each of unsupported `\(` and `\)` delimiters in the plan to `$` inline math delimiters. No `\[`/`\]` occurrences were present. This is syntactic normalization only; final rendercheck remains to run and inspect.

## Remaining work

Review exact final pair metadata/typos (including old pair IDs and direct-edge table), finish the complete JSON audit with a row for every pair, write the breadth/depth/library-reuse report, verify cross-category owners' updates, run the requested plan rendercheck plus the parent-provided focused structure scan, and report actual results. Current plan still has 62 pairs; no new pair has been added.

## Crash-recovery checkpoint (2026-10-12)

The prior SME-01–62 contract review and inline repairs are preserved above. I
re-read the current plan bytes after the old writers drained, repaired additional
hypothesis/dependency gaps, and wrote the complete machine-readable 62-pair audit
to `research/statistics-ml-scaffold-audit-2026-10-12/models/pair-audit.json`.
That file binds the approved before-snapshot hash, current plan hash, exact pair
and supplier clauses, 75 currently published supplier bodies, planned MSF/SME
interfaces and their status, exact cited source ranges plus each assignment's
source-manifest hashes/read-scope distinction, downstream consumers, and
future local proof obligations. It does not represent any proposed result as a
completed proof.

Additional repairs in this recovery pass:

- SME-03's remaining unsupported nested-formula TeX delimiters and three
  unsupported delimiter pairs in the existing Poisson-count supplier note were
  converted to renderer-supported `$...$` notation.
- SME-07 now names the actual published Gaussian, L2 projection and least-
squares suppliers. The arbitrary-dimensional Gaussian block-conditioning
formula remains an explicit local proof obligation; the published bivariate
example is a cross-check only.
- SME-17 gives the positive integer sample-size domain and the correct least-n
  formula for all `alpha,beta in (0,1)`, including nonpositive z-quantile sums.
  SME-18 conditions its variance formula on fixed treatment contributions.
- SME-33 now requires an interior allocation fraction. SME-34 makes its baseline
  cumulative hazard absolutely continuous to match the displayed `lambda_0(t)
  dt` information integral. SME-45 restricts its displacement-only variogram to
  order-two intrinsic stationarity.
- SME-61 now specifies a zero-mean multivariate Gaussian null vector with the
  canonical covariance, `alpha in (0,1)`, `t_0=0`, and an infinite boundary for
  flat spending. It no longer assigns independent increments to standardized
  group-sequential statistics.

Cross-category checks confirm SME-44's exact kernel and independent
linear-Gaussian interfaces match BCS-38/39 and trace to BCS-40–45. SME-20
supplies causal Markov/d-separation/faithfulness but not Markov equivalence;
ML-25 owns CPDAG characterization and oracle orientation. The Cat4 author has
been sent the exact SME-20 interface IDs and is updating its `Requires` field.

Validation: after all current plan edits,
`node tools/rendercheck.mjs research/plan-statistical-models-experiments-track.md --json`
passed with checked=1, zero errors and zero warnings at the recorded plan hash.
The focused structure scan passed earlier; these edits preserve all 62 pair
labels and page IDs. Rerun the scan after the other category plan writer drains.

Next actions: finish a read-only consistency pass over `pair-audit.json` and the
six source-manifest ranges; incorporate any final consumer-interface changes;
write the concise final report; rerun the focused structural scan after
concurrent plan writers drain; update this checkpoint with actual results.
Current plan hash recorded in the pair evidence:
`577b9898cf820c46f81936b72769d84904810ddbfe4d74d53fa55f051fde4d4d`.

### Resume checkpoint (2026-10-12, post-writer-drain)

Durable state verified immediately after resuming: `pair-audit.json` parses and
contains all 62 pair rows; its last recorded plan hash is
`577b9898cf820c46f81936b72769d84904810ddbfe4d74d53fa55f051fde4d4d`, with
rendercheck recorded at zero errors/warnings. The complete repairs and exact
source/supplier evidence summarized above remain in the allowed models scope.
The plan now needs a final supplier-reuse update for SME-44: replace the generic
Markov-chain supplier with the existing standard-Borel, probability-kernel,
Ionescu–Tulcea, independent-random-elements/product-law, and Gaussian-law
interfaces, carrying the suppliers' absolute-continuity conditions. After that,
refresh exact hashes and evidence, resolve the parent's 12 remaining SME
rendercheck diagnostics, write `report.md`, and rerun rendercheck and the focused
structure scan. No SME content/evidence outside the assigned plan and models
folder has been modified by this resumed writer.

### SME-44 reuse checkpoint (2026-10-12)

SME-44 now names exact published interfaces: standard-Borel spaces and finite
products; probability kernels; the AC-bearing history-dependent Ionescu–Tulcea
construction; and, for the independent linear-Gaussian model, independence and
product-joint-law, multivariate-normal projection/characteristic-function,
independent-sum, law-uniqueness, and Cramér–Wold suppliers. AC is stated at the
interfaces that require it. The former generic Markov-chain supplier is no
longer used to stand in for time-inhomogeneous observed state-space laws.
`pair-audit.json` now records all 11 exact supplier IDs, live published statuses,
current item hashes and operative clause excerpts, direct BCS-38/39 contracts,
transitive BCS-40–45 consumers, and three explicit future proof obligations.
The updated plan SHA256 is
`168404be0c9913a6dc7b0c98e2b3e9b005fcce9946b6b31d4c9825de922ba6c8`;
rendercheck is pending for these final bytes.

### Full-audit checkpoint (2026-10-12)

The human-readable [`report.md`](report.md) is now written. The 62-row evidence
was consistency-checked against the exact current pair lines and `Requires`
clauses, including the multi-line SME-42 inference addendum; all 62 source
dossier/progress/source-manifest hash triples and all 80 unique current
published-supplier status/hash records validate with zero errors. The SME-42
addendum separately records its two proposed local inference theorems and their
uncompleted proof routes. The final SME rendercheck passed at plan hash
`168404be0c9913a6dc7b0c98e2b3e9b005fcce9946b6b31d4c9825de922ba6c8` (one file,
zero errors, zero warnings). The stale saved resume diagnostic had quoted
unsupported delimiters, but the current plan bytes contain none and the fresh
rendercheck confirms this.

Remaining integration step: rerun the four-plan structural scan once the
Category 1 and Category 4 plan writers have drained, then bind that result in
the evidence and report. The structural scan is not a mathematical proof check.

### Handoff checkpoint (2026-10-12)

Root reports the latest four-plan structural scan passed after the latest MSF
edits: 253 pairs, 506 proposed pages, zero structural errors. Its output is
recorded in the audit root `structure-scan.json`; root will rerun final
integration after the still-active ML writer finishes. The Category 2 audit
is otherwise complete and its pair evidence/report/rendercheck are current.
