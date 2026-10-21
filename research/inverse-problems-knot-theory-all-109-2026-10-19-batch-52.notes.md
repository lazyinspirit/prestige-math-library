# Batch 52 authoring notes

## Scope, controlling plan, and inventory

- Run: inverse-problems-knot-theory-all-109-2026-10-19; pair: open-frontiers-in-learned-inverse-problems, draft only.
- Binding owner direction: research/inverse-problems-knot-theory-all-109-2026-10-19-owner-authoring-direction.md. The IP-52 design in research/plan-inverse-problems-track.md controls item inventory and scope.
- research/plan-spec.json agrees on page IDs, title, category, orders, and requires. Its IP-52 item arrays are empty placeholders; the design supplies four A open problems and eight B examples. No semantic plan conflict was found.
- Page manifest was populated before carriers: A items are op-ip-calibration-under-score-and-solver-error, op-ip-distributionally-robust-inversion-under-operator-shift, op-ip-finite-compute-multimodal-posterior-fidelity, op-ip-neural-operator-sample-complexity-for-inverse-maps; B leaves are the eight ex-ip items in batch-52.pages.json.
- Three B-carrier titles were synchronized to the scaffold manifest after the explicit manifest/carrier audit. The final audit confirms both frontmatter-only pages, their titles/requires/placements, and all 12 item IDs/kinds/titles/deps/levels agree with the manifest.
- Every carrier has deps [], justified_by [], and item dependency_level 0. The eight A-page requires edges are page context only under the owner direction; none is a logical item dependency. Batch schedule level remains 9 with prerequisite batches 14, 46, 47, 48, 49, 50, 51.
- The page pair has four A items and eight B examples, under the 100-item page limit. Both authored page files have YAML frontmatter only and empty Markdown bodies. No page_layout flag was authored; the engine owns that transition.

## Item checkpoints

### op-ip-calibration-under-score-and-solver-error — drafted, level 0, escalated for owner status review

- Claim and conventions: a finite-dimensional Gaussian sequence experiment with n replicated vector observations, a proper diagonal Gaussian prior, exact posterior credible-ball baseline, deterministic matrix perturbation, score error measured under noised approximate-posterior marginals, explicit reverse-time Euler recursion, an empirical posterior-quantile ball, and a uniform boundary-margin condition. The target separates baseline calibration error from additional approximation error. The question explicitly asks whether the listed norm controls suffice uniformly over the score-field class.
- Direct item dependencies: none. Matrices, laws, radii, time variables, score fields, and sampler random variables are specified in the statement.
- Sources read and dispositions:
  - Knapik, van der Vaart, and van Zanten, https://arxiv.org/pdf/1103.2692, §§1–4, especially Theorem 4.2: exact Gaussian inverse-sequence credible-ball coverage depends on truth/prior regularity; no sampler perturbation theorem imported.
  - Szabó, van der Vaart, and van Zanten, https://arxiv.org/pdf/1310.4489v5, §§1, 3, Theorems 3.6 and 3.9: polished-tail restrictions and unrestricted-coverage counterexamples; scope warning only.
  - Giné–Nickl, https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf, §§6.4 and 8.3: confidence-set honesty and adaptation constraints; general calibration context only.
  - Narnhofer et al., https://arxiv.org/pdf/2212.12499v2, §§1–3, Proposition 3.5 and full proof: finite-sample conformal pixelwise error-quantile coverage with approximate statistics. This is expressly not a Bayesian credible-ball theorem.
- Status lead retained for owner review: the 2026 publisher abstract at https://doi.org/10.1016/j.cnsns.2026.110801 reports a conformal inverse-identification result under exchangeability and conditional-stability hypotheses. Its full text/proof was not retrieved; official ScienceDirect page/PDF attempts and author/repository searches are recorded in source-coverage. The abstract is not used as evidence because its conformal set and conditional-stability hypotheses do not cover the target Bayesian credible-ball sampler perturbations.
- Source retrieval history: a previous browser open of the Narnhofer PDF returned an internal error. The complete arXiv HTML alternative was read, including Proposition 3.5's proof; the canonical PDF later passed the required fetch check. No source was dropped.
- Readiness: escalated; owner must review formulation-specific status. The sources establish adjacent results only, not the requested joint bound.

### op-ip-distributionally-robust-inversion-under-operator-shift — drafted, level 0, escalated for owner status review

- Claim and conventions: a compact Sobolev ellipsoid in ell^2, product-Borel white-noise observations in R^N, supervised source law, test law at Wasserstein radius rho_X, unknown relative perturbation A_p(I+E) with operator norm at most rho_A<1/2, Borel learners not given E, squared reconstruction risk, and its robust minimax value. Source/test law and conditional measurement-law shifts are kept distinct.
- Direct item dependencies: none. The white-noise product-space construction, coupling definition of W_1, and learner/risk domains are stated locally.
- Sources read and dispositions:
  - van Maarschalkerwaart et al., https://arxiv.org/pdf/2606.30230v1, Theorem 4.2 and complete proof, §4.3: finite-dimensional squared-risk bound for conditional measurement-law perturbation with fixed truth marginal; §4.3 says truth-marginal perturbation needs extra assumptions. No simultaneous infinite-dimensional minimax result imported.
  - Zheng et al., official ICLR PDF https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf, full 29 pages, §§4.3–5 and Appendix C: scoped empirical shift observations, not a uniform theorem.
  - Bal, https://www.stat.uchicago.edu/~guillaumebal/COURSES/E6901/LectureNotesIP.pdf, §1.1, PDF pp. 3–4, and §§8.2–8.3, pp. 91–97: inverse-model, noise, prior, regularization, and computation conventions only.
- Supplier interfaces inspected: current batch-14 mismatch definition and draft no-uniform-recovery theorem; current batch-51 benchmark definition and scoped-finding remark. Neither draft result is treated as accepted or imported.
- Readiness: escalated; owner review must reconcile simultaneous shift scope and global status.

### op-ip-finite-compute-multimodal-posterior-fidelity — drafted, level 0, escalated for owner status review

- Claim and conventions: a nonempty family of separated finite Gaussian-mixture targets, with Delta >= 8 sqrt(d v_max) and w_min <= 1/L, VP forward diffusion, exact score, integrated score error under ideal marginals, reverse Euler recursion, finite iid output sample, component-centered disjoint regions, and a combined W_1, regional-mass, and missed-region loss. The class explicitly asks whether integrated score-error control alone permits a finite uniform minimax bound; the Euler chain is required to have finite first moment.
- Direct item dependencies: none. Gaussian mixture, score, diffusion, reverse recursion, region masses, and W_1 are specified locally.
- Sources read and dispositions:
  - Burns–Fridovich-Keil, https://arxiv.org/pdf/2605.30330v1, §4.1, §§5–6 and Appendix C: finite-sample mode-weight/missing-mode failures for specific moment-matching samplers; not the requested score-Euler theorem.
  - Daras et al., https://arxiv.org/pdf/2410.00083v1, §§2.4, 3.3–3.4: posterior-score guidance and method-specific finite-step caveats.
  - Blechschmidt et al., https://arxiv.org/pdf/2610.02377v1, §§3.3–3.4 and §5: flow-matching Metropolis correction and posterior diagnostics; different algorithm, contextual only.
  - Prince, full Chapter 18 notes, https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html: reverse-process and finite-sampling conventions.
- Item formulation change: mode separation was scaled by sqrt(d) so each component's own Gaussian mass has a dimension-aware relation to its component-centered region. The score field is jointly Borel and finite-valued; the research question does not assume score-error control transfers automatically from ideal marginals to Euler-chain marginals.
- Readiness: escalated; owner review must assess whether added score-field stability hypotheses are needed.

### op-ip-neural-operator-sample-complexity-for-inverse-maps — drafted, level 0, escalated for owner reconciliation

- Claim and conventions: a periodic real Fourier basis, compact Sobolev ellipsoid, diagonal smoothing inverse, explicit finite-mesh trigonometric FNO layers with bounded parameters and mesh-shared weights, supervised noisy mesh observations, measurable ERM selectors, and both architecture-restricted and unrestricted minimax risks. The target is the joint sample-size/mesh risk rate and whether the bounded shared-parameter architecture attains the unrestricted rate.
- Direct item dependencies: none. The finite-mesh architecture and all observation, training, test, and loss spaces are defined in the statement.
- Sources read and dispositions:
  - Reinhardt, Wang, and Zech, https://www.jmlr.org/papers/volume27/25-0543/25-0543.pdf, Theorems 5–6, §3 and Appendix B, complete 82-page paper: entropy-controlled function-space ERM and FrameNet rates under their stated assumptions; no joint mesh-to-continuum inverse risk theorem.
  - de Hoop et al., https://arxiv.org/pdf/2511.20361, Theorem 4.8 and §5: continuum approximation on compact EIT data; no finite-sample mesh-rate claim.
  - Bal, https://www.stat.uchicago.edu/~guillaumebal/COURSES/E6901/LectureNotesIP.pdf, §1.1, pp. 3–4 and §§8.2–8.3, pp. 91–97: inverse-problem/noise/regularization context only.
  - Kovachki et al., https://www.jmlr.org/papers/volume24/21-1524/21-1524.pdf, §§1.1 and 4.4, complete paper: parameter sharing, discretization invariance, and FNO architecture; no finite-sample risk result.
- Supplier overlap: batch-47's current op-ip-finite-sample-generalization-of-neural-inverse-maps is a separate draft open question. This item is narrowed to a fully specified diagonal problem with mesh-dependent observations; it does not use that draft as a premise. Owner reconciliation remains required.
- Readiness: escalated; no global open-status claim is certified.

### B examples — locally verified, no direct item suppliers

All eight examples have complete local Facts & Assumptions and at least two numbered proof steps; their contracts contain the exact step text/input labels and all standard boundary dispositions. Links to the A questions sit after the uninterrupted Example statement and are nonlogical context references.

- ex-ip-score-coverage-baseline-gaussian-sequence: exact normal-normal posterior and repeated-sampling coverage formula. Direct deps [], level 0. Local proof completes the square and standardizes the credible-interval endpoints.
- ex-ip-score-coverage-unbounded-truth-prior-bias: at fixed n, Gaussian-prior shrinkage makes central credible-interval coverage tend to zero as |theta| grows. Direct deps [], level 0. Local proof uses the exact normal coverage expression and normal tails.
- ex-ip-operator-shift-stable-scalar-risk: exact squared risk of g(y)=y/a_0 under scalar operator shift, plus a W_1 risk-transfer modulus. Direct deps [], level 0. Coupling inequality is proved using |theta^2-theta_0^2|<=2R|theta-theta_0|.
- ex-ip-operator-shift-vanishing-singular-value: absolute operator error can vanish while inverse error remains R^2 if baseline conditioning is allowed to vanish. Direct deps [], level 0. Scalar discrepancy and reconstruction error are computed explicitly.
- ex-ip-diffusion-two-mode-finite-sample-weights: exact W_1 error and omitted-mode probability for iid samples from a two-atom law, plus the binomial variance bound. Direct deps [], level 0.
- ex-ip-diffusion-finite-budget-misses-rare-mode: fixed finite trajectory count misses a mode with probability tending to one as its mass tends to zero; a positive lower mass gives an explicit sufficient count. Direct deps [], level 0.
- ex-ip-neural-inverse-mesh-truncation-modulus: Fourier truncation error m^p delta + R(m+1)^(-s) for the diagonal inverse. Direct deps [], level 0. Retained noise and omitted Sobolev tail are separately bounded.
- ex-ip-neural-inverse-finite-samples-need-class-control: finite sites admit two indistinguishable one-Lipschitz tent targets with uniform gap at least 1/(2(N+1)); every deterministic returned predictor errs by at least 1/(4(N+1)) at a midpoint. Direct deps [], level 0. Duplicate sites and endpoint samples are included in the gap proof.

## Cross-pair page-context inspection

Current draft bodies for batch 46 (learned-estimator, train/test-risk and posterior-mean items), batch 47 (FNO definition, conditional EIT existence/stability items, and its finite-sample open problem), batch 48 (finite-domain/output Borel lemma, unrolled architecture, and finite-iteration limitation), batch 49 (Tweedie/MMSE, exact-MMSE PnP, arbitrary-denoiser limitation), batch 50 (conditional score, score definitions, reverse-kernel algorithm, plug-in approximation), batch 14 (operator/prior mismatch definition and draft unrestricted-mismatch theorem), and batch 51 (benchmark definition and scoped InverseBench remark) were inspected. Their actual hypotheses and conditional/draft statuses are recorded in batch-52.cross-batch-dependencies.json. The published losses-risk-and-decision-rules page and its loss/Bayes/minimax definitions were also read. Page requirements are context; no supplier result is an item dependency or accepted proof premise.

The batch-51 page and remark were absent at the earlier checkpoint but are now present. The current A page lists both items; the definition is draft and specifies benchmark fields without a risk-transfer theorem, while the remark scopes experimental results and records the first-Born paper/implementation discrepancy. This current reading supersedes the earlier absence report.

## Source, contract, and readiness records

- Four A-page items cite 15 source entries across four independent source sets, including a full book or lecture-note treatment for every A page. Every source has URL, locator, supported item, and included/out-of-scope disposition in batch-52.source-coverage.json; fetch stamps are mirrored in batch-52.source-evidence.json.
- Source-fetch command passed: 15/15 source entries fetch-verified and 15/15 resolved, 0 documented drops. Check mode also passed after stamping.
- The four open-problem contracts do not manufacture proof steps. The eight example contracts match their actual proof steps and boundary cases.
- Current item decisions: four open problems escalated; eight completed B examples ready after final scoped checks, with examined dependency list []. No --owner override is used.
- Final scoped results: proof-layout passed on all 12 changed items (18 proof steps, 0 defects); precheck passed on all eight B examples; rendercheck passed on 14 files (12 items and both pages); strict proof-contract passed 12/12 with 0 errors/warnings; content-policy passed 12/12 items with 0 errors/warnings; focused depcheck passed for 12 items/two pages with no errors/warnings; source-fetch check passed 15/15 and 0 drops.
- Local dependency calculation from the final batch manifest returned 12 items, all level 0, with no cycles/errors. The run-wide item-level check still exits 1 on unrelated knot-theory artifacts: five empty inventories (character-varieties-and-the-a-polynomial-examples, open-questions-in-knot-polynomials-and-surgery, open-questions-in-knot-polynomials-and-surgery-examples, zero-traces-and-conway-nonsliceness, zero-traces-and-conway-nonsliceness-examples) and 32 level mismatches. None names a batch-52 item.
- The read-only batch-level check is blocked before digest comparison by duplicate YAML key axiom_use in items/lem-knot-exterior-irreducible-and-boundary-incompressible-kt18-local.md (line 27). The shared dependency file currently records input hash a027c237a267f58a993feefbeb574159b4021b36f4b477b433b88b801b2c6fdc and batch 52 at level 9 with prerequisites 14, 46, 47, 48, 49, 50, 51. The authored pages manifest changed after that snapshot; an updated digest could not be computed until the unrelated duplicate-key blocker is resolved. Shared scheduling data was not edited.
- Step-1 records: all eight B examples are ready with current item hashes; all four open problems are escalated for status/overlap owner review; every record lists direct dependencies [], uses owner: false, and was written with step1-decisions.mjs record. The four escalated records intentionally remain open for owner review.
- Latest read-only autopilot status remains stage 1-scaffold, 95/109 batch units covered, batch 52 still awaiting engine artifact accounting, no worker in flight (latest status updated 2026-10-19T05:37:26.311Z), and the existing owner blocker remains at research/inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json. No engine state or verdict was changed.
