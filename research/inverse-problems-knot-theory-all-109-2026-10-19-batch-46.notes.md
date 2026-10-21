# Batch 46 — Learned reconstruction targets and risk

## Assignment and controlling inputs

- Run `inverse-problems-knot-theory-all-109-2026-10-19`, role `beta`, batch `46`, pair `learned-reconstruction-targets-and-risk`.
- A page order 3088; B page order 3089; category `inverse-problems`.
- Scheduling input SHA-256: `41dd33146255b664e55b75603e7c764ee3bde257d4079845e209411309d97f62`.
- Batch dependency level 5; prerequisite batches 1, 16, 20.
- Read the repository instructions, assigned batch and dependency-order tasks, controlling owner direction, complete IP-46 plan section, current `plan-spec.json` rows, current batch-46 manifest, dependency-level input, and current native status before authoring.
- Native status recomputed from disk at `2026-10-19T04:00:03.624Z`: 1-scaffold has 76/109 batches covered, batch 46 missing, nothing in flight, and an owner-repair hold is active elsewhere. No state, verdict, shared plan, or foreign item was changed. `HEAD` at inspection was `50139bdcb6`.

## Plan comparison and decisions

- The current task and `plan-spec.json` agree on A/B page identities, order 3088/3089, category, and the five `requires` pages: `inverse-problems-identifiability-and-stability`, `bayesian-inverse-likelihoods-and-posterior-propriety`, `posterior-contraction-in-gaussian-sequence-inversion`, `losses-risk-and-decision-rules`, and `conditional-distributions-and-regular-conditional-probability`.
- The IP-46 prose design names three A items: `def-ip-learned-reconstruction-estimator`, `def-ip-inverse-risk-under-train-and-test-laws`, and `prop-ip-posterior-mean-is-square-loss-optimal`; it names three B leaves: posterior mean outside a nonconvex signal class, train/test prior shift, and a calibrated posterior sample. The empty `items` arrays in the current plan/initial scaffold are construction placeholders; the three planned A items and three complete examples are being authored.
- The older `research/inverse-problems-planning-2026-10-18/proposed-registration-delta.json` records page order 3068/3069. That candidate delta is stale relative to the current task and `plan-spec.json`; order 3088/3089 controls. Its proposed item dependencies are expressly marked candidate overapproximations, so I refined them to actual logical uses while preserving all five required page edges. In particular, IP-20 remains a page prerequisite, but its Gaussian-sequence contraction theorem does not supply a theorem about arbitrary learned estimators or the Hilbert-target Bayes action.
- The source design's scope is preserved: distinguish deterministic point rules, finite unrolled updates, denoisers/learned priors, score fields, amortized maps and posterior kernels; define train/test risk under the actual laws; prove the finite-second-moment posterior mean result only for squared norm loss on a real Hilbert target; state the almost-sure version class; and make no admissibility or perceptual-representativeness claim.
- Final item-edge refinement: the posterior-mean theorem is stated for any supplied probability kernel, so the learned-estimator definition and joint train/test-risk definition are not logical prerequisites of its proof. It uses the published posterior-risk definition for the Bayes-action conclusion; its proof does not need the inverse-misfit construction. Removed those three nonlogical in-run item edges while retaining every page-level `requires` edge. The proposition's computed item level is 0; its two dependent examples are level 5, so the batch maximum remains 5.

## Supplier inspection and current readiness evidence

- IP-01 actual current definitions `def-ip-forward-map-and-solution-classes` (level 0) and `def-ip-identifiability-and-stability-modulus` (level 1) were read in full. Their live Step-1 records are `ready`. The IP-46 definitions use the model/target and deterministic-estimator interfaces. The separate IP-01 kernel-direction theorem is not used as a logical premise.
- IP-16 actual `def-ip-misfit-evidence-and-posterior-law` (level 2) and `thm-ip-function-space-posterior-propriety` (level 3) were read; both have live Step-1 records `ready`. The former supplies the evidence-normalized posterior-kernel convention for the A-page context. The posterior-mean item is stated for any supplied probability kernel and has no item edge to IP-16; its finite-second-moment domain is explicit. The propriety theorem alone is not used as a moment bound, and its common-envelope hypotheses are not imposed on every target posterior.
- IP-20 actual `def-ip-posterior-contraction-rate` (level 3) and `thm-ip-conjugate-gaussian-sequence-contraction` (level 5) were read; both have live Step-1 records `ready`. The theorem assumes AC and Countable Choice, a fixed Gaussian sequence inverse experiment, independent Gaussian coordinates, and a trace-class variance sequence; none of those claims is generalized to learned estimators here.
- Published statistical interfaces read: `def-loss-function-and-risk`, `def-bayes-and-minimax-risk`, `def-posterior-risk-and-bayes-action`, `thm-conditional-expectation-is-the-l2-orthogonal-projection`, `def-conditional-expectation-given-a-sigma-algebra`, `def-conditional-law-given-a-random-element`, `thm-conditional-integration-through-a-regular-conditional-law`, `cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable`, and `lem-conditional-expectation-is-unique-almost-surely`. Their exact hypotheses/conventions are reflected in the item dependencies and proof facts.
- Published Hilbert/probability interfaces read: `def-hilbert-space`, `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis`, `thm-parseval-equivalences-for-a-complete-orthonormal-family`, `thm-measurability-of-integration-against-a-kernel`, and `thm-monotone-convergence-for-the-integral`. The vector mean is constructed locally from scalar posterior-coordinate means; the local proof explicitly assumes AC for scalar L2 projection and thereby satisfies the Countable Choice branch required by Parseval.
- No required supplier body is missing; no unresolved cross-pair supplier remains at this checkpoint.

## Source retrieval history before authoring

- Plan lane reader 3 is Dashti–Stuart's complete 107-page lecture-note text; §3.2 supplies posterior-kernel context and §4.1 treats Hellinger posterior well-posedness. I inspected the relevant full-text passages. The printed proof of Theorem 4.3 bounds a continuous potential on a bounded positive-mass set, which need not be compact; the current IP-16 local theorem repairs this positivity step using a support-point neighborhood. That posterior-propriety source argument is not used to prove the IP-46 Hilbert-risk identity.
- Plan lane reader 6's complete 38-page Daras et al. diffusion survey and its Appendix A.1 conditional-expectation/MMSE proof were read. The appendix is a finite-dimensional treatment and is used only as independent context; the assigned proof extends the result locally to a separable real Hilbert target.
- The complete ICLR 2025 InverseBench paper (29 PDF pages) was fetched from the official proceedings PDF after the arXiv PDF and OpenReview browser endpoints failed in web extraction. Its main-text discussion of out-of-distribution sources and Appendix C's prior-mismatch discussion were inspected. The paper's results remain empirical and are not premises in any theorem.
- Additional independent treatments read: Ongie et al., *Deep Learning Techniques for Inverse Problems in Imaging*, §§3.1, 4.1 and 4.2.1 (full arXiv paper); Ryan Martin, *Lecture Notes on Advanced Statistical Theory*, §5.3.1 (full notes); Peter Hoff, *Statistical Decision Problems*, §§4.1–4.2 (full notes). These support method distinctions and risk terminology; the assigned mathematical proof is local.
- Exploratory full-text retrieval of the Cambridge-hosted Arridge et al. Acta Numerica PDF failed because its 11.27 MB response exceeded the browser extractor limit. A BDA3 PDF endpoint also failed web extraction. Neither source is cited or used; the full Ongie/Daras papers and full Martin/Hoff notes provide the needed independent treatments. No source was dropped from the authored source list and no mathematical coverage was waived.

## Item authoring checkpoint

All six assigned items and both A/B frontmatter inventories have been authored. Next: complete contracts, source evidence and cross-batch dependencies; run scoped validation; then record the final readiness outcome and any external blockers.

### Completed item: `def-ip-learned-reconstruction-estimator`

- Claim and conventions: defines the measurable forward/target setting; distinguishes a learned point map, finite unrolled update, denoiser, probability prior/generator, finite-dimensional score field, amortized map, and posterior sampling kernel. Fit law and test-pair law are separate named inputs. It asserts no reconstruction, convergence, stability, calibration, or generalization guarantee.
- Direct dependencies: `def-ip-forward-map-and-solution-classes`, `def-ip-identifiability-and-stability-modulus`, `def-ip-misfit-evidence-and-posterior-law`, `def-hilbert-space`, `def-measurable-space`, `def-probability-measure`, `def-measurable-function-between-measurable-spaces`, and `def-measure-kernel-and-probability-kernel`. Computed in-run level: 3 (max direct in-run supplier level 2 plus 1).
- Sources inspected: Ongie et al. §§3.1, 4.1, 4.2.1 (full PDF); Daras et al. §§1.2, 2.4.2–2.4.3 and Appendix A.1 (full PDF); Dashti–Stuart §3.2 (full lecture notes). Source dispositions and full-text fetch records will be carried in batch source evidence.
- No unresolved supplier or axiom obligation. Next: define the joint-law risk interface under the same target and train/test conventions.

### Completed item: `def-ip-inverse-risk-under-train-and-test-laws`

- Claim and conventions: defines deterministic and kernel-valued randomized reconstruction risk under a specified joint input-target probability law. Risks are extended nonnegative integrals; the definition states no train/test inequality without a law-comparison or rule-stability premise.
- Direct dependencies: IP-01 forward/target and estimator interfaces; batch-46 `def-ip-learned-reconstruction-estimator`; published product-measurability, probability, probability-kernel integration, and statistical loss/risk definitions. Computed in-run level: 4 (its highest in-run supplier is the level-3 estimator definition).
- Sources inspected: Martin §5.3.1, PDF pp. 104–105, complete posterior-risk/Bayes-risk argument; Hoff §§4.1–4.2, PDF pp. 7–8, decision rules and risk; ICLR InverseBench §5/Appendix C, PDF pp. 10 and 28–29, prior-mismatch experiments. The empirical paper is context only and supplies no general shift bound.
- No unresolved hypotheses or supplier gaps. Next: construct the posterior-mean proposition using the scalar L2 projection theorem coordinatewise.

### Completed item: `prop-ip-posterior-mean-is-square-loss-optimal`

- Claim and conventions: for a supplied probability kernel on a separable real Hilbert space with a fixed finite/countable ON basis and finite posterior second moment, the locally constructed coordinate mean is measurable and satisfies the exact posterior squared-risk Pythagorean identity. The claim is over all Hilbert actions and is not a constrained-signal or perceptual theorem. Its conditional-law clause is only an almost-sure coordinatewise class.
- Direct in-run dependencies: none after the final dependency audit. The proposition directly depends on published measurable-space, kernel, Hilbert/basis, scalar conditional-expectation, monotone-convergence, posterior-risk and RCD interfaces, including Cauchy–Schwarz for continuity of Hilbert coordinate functionals. Computed in-run level: 0.
- Proof route: measurable kernel integrals give the finite-second-moment domain and coordinate means; scalar L2 projection gives each coordinate Pythagorean identity; Parseval plus monotone convergence constructs the Hilbert mean and sums the risks; scalar conditional uniqueness on a countable basis yields the almost-sure version class. AC is stated and used only through scalar L2 projection and the Countable Choice hypothesis of Parseval.
- Sources inspected: Martin §5.3.1 (scalar posterior-risk quadratic), Daras et al. Lemma A.1 (finite-dimensional conditional mean/MMSE proof), and Dashti–Stuart §3.2/§4.1 (posterior kernel/propriety context). The Hilbert-space derivation is local and complete; the survey's finite-dimensional proof and the lecture-note source are not used as substitutes for it.
- No unresolved supplier or axiom obligation. The proof explicitly extends the measurable posterior mean by zero off its finite-second-moment domain before applying the RCD clause; coordinate uniqueness is taken on a common full-measure set. Next: complete the final proof-contract/evidence and scoped validation pass.

### Completed item: `ex-ip-train-test-prior-shift-changes-risk`

- Claim and conventions: a two-point inverse problem keeps the data marginal fixed while changing the target prior; the same measurable rule has squared risks 0 and 1 under the two joint laws.
- Direct dependencies: `def-ip-forward-map-and-solution-classes`, `def-ip-learned-reconstruction-estimator`, and `def-ip-inverse-risk-under-train-and-test-laws`. Computed in-run level: 5.
- Argument: the deterministic forward map sends both truths to the sole datum; exact risk values follow by evaluation of the two point-mass joint laws. No distribution-shift theorem or unproved bound is imported.
- No source, axiom, or supplier blocker. The posterior-mean proposition is complete at its recomputed level 0. Next: finish the proof-contract and batch-evidence records.

### Completed item: `ex-ip-posterior-mean-outside-nonconvex-signal-class`

- Claim and conventions: the equal posterior on `{-1,1}` has full-space squared-risk mean 0 outside the nonconvex signal class; each admissible signal has risk 2 while the unrestricted mean has risk 1.
- Direct dependencies: batch-46 estimator/risk definitions and posterior-mean proposition; current published conditional-law definition and AC definition. Computed in-run level: 5 after the proposition dependency refinement.
- Verification computes the conditional law directly on the one-point data space and evaluates the posterior risks exactly. AC is inherited only through the general proposition; the finite witness is choice-free.
- No unresolved supplier or boundary case. Next: finish the proof-contract and batch-evidence records.

### Completed item: `ex-ip-calibrated-posterior-sample`

- Claim and conventions: on the symmetric two-point posterior, the identity sampler is exactly calibrated as a conditional law, while an independent posterior draw has squared error 2 versus posterior-mean point risk 1.
- Direct dependencies: batch-46 estimator/risk definitions and posterior-mean proposition; current published conditional-law definition and AC definition. Computed in-run level: 5 after the proposition dependency refinement.
- Verification identifies the constant RCD, verifies exact kernel equality, computes both risks from the four equally likely draw pairs, and keeps randomized-sample risk distinct from point-action risk.
- No unresolved supplier or axiom obligation. Next: finish contracts/evidence and run the scoped validation and readiness-record commands.

## Final evidence and readiness

- The final manifest dependency check gives batch-46 item levels `3, 4, 0, 5, 5, 5`; all six declared levels match their computed levels and the batch maximum is 5. The required run-wide dependency command exits 1 on 27 errors outside batch 46: 26 empty scaffold inventories and one unrelated mismatch, `cex-knot-kt-21-boundary-case` (declared level 15, computed 16). Exact error strings and the zero in-scope error list are in `batch-46.coverage.json` under `validation.item-dependency-levels`; no foreign page or item was changed.
- Final scoped results: proof-contract validation 0 errors/0 warnings for 6/6; precheck 4 proof-bearing items passed and 2 definitions were not applicable; proof-layout 6 items/16 steps/0 defects; content-policy 6 scoped items/0 errors/0 warnings; rendercheck 8 files/0 errors/0 warnings; source-fetch-check 6/6 full texts verified with no drops. The direct finite checks give the exact posterior risks, the train/test risks 0 and 1, and independent-sample risk 2 versus point-mean risk 1.
- `step1-decisions record` wrote `ready`, `owner:false` records for all six items without `--owner`. The six records are hash-closed against their current item/dependency inputs. Their exact hashes and reasons are in the corresponding `step1-<item>.json` files and in the coverage validation record.
- The latest read-only autopilot status is 81/109 batches covered, no work in flight, with batch 46 still listed as missing while stage 1-scaffold is held for the existing owner repair/recertification blocker. I did not change `.autopilot`, shared plans, verdicts, published content, or Git state; no acceptance or publication is claimed. The dispatch scheduling SHA remains `41dd33146255b664e55b75603e7c764ee3bde257d4079845e209411309d97f62`; the dependency-input SHA sampled in final coverage is `41be181e2562bef4cd2b96ddeb7d72853a4ba7be344ae49cfc976c53dd15d416`.
