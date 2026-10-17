# Batch 53 authoring notes — Adaptive ODE solvers and error estimation

Run: `numerical-optimization-dynamics-2026-10-16` · pair: `adaptive-ode-solvers-and-error-estimation` · batch: 53.

## Controlling design and conflict record

I read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the assigned task and batch brief, the owner authoring direction, the complete NA-18 design sections in `plan-numerical-analysis-track.md` and `plan-numerical-dynamics-track.md`, the NA-18 row in `plan-spec.json`, the dynamics audit, the run dependency-level input and the current assigned manifests/evidence.

The owner's current authoring direction and the repaired dynamics plan/audit control this pair. The earlier NA-18 entry in `plan-numerical-analysis-track.md` covers the heuristic embedded controller, its bounded branches and its estimator warning, but does not carry the later local dense-output and residual-certificate amendments. The current dynamics plan and `plan-spec.json` add a dense-output reconstruction with its own defect, the continuous-residual a posteriori estimate, and a validated tube with a strict inward/existence argument. I kept those amendments and their proof obligations. The dynamics audit also explicitly separates the controller's embedded difference from the one-sided-Lipschitz residual theorem. No global adaptive error theorem or stiffness diagnosis is asserted from the controller.

The assigned design names `one-step-ode-consistency-and-local-error`, `outward-rounded-interval-and-ball-arithmetic`, and `runge-kutta-methods-and-order` as page prerequisites. Batch 35's actual RK page also declares `global-ode-and-density-error` as a prerequisite. Its item `thm-global-error-from-one-step-defect-and-stability` is therefore an in-run transitive supplier and is directly named by `rem-fixed-mesh-global-error-does-not-certify-adaptivity`. Its uniform-mesh hypotheses are recorded exactly; they do not imply a variable-step result. This is a transitive input, not a change to batch 53's scheduler prerequisites.

The current scheduling input SHA-256 is `7feab71278a6cf5fc9513d25514ffc7397bdc4421f8c0fa99e7485d2c1d3041a`. Batch dependency level is 3 and the assigned prerequisite batches are 7, 14, and 35. Item levels were computed on the full reachable in-run closure, including batch 28 through batch 35's declared page dependency. The closure contains 34 in-run items across batches 7, 14, 28, 35, and 53; it is acyclic. Batch 53 has 20 items across its A and B pages, with item levels 0–7, below the 100-item cap. Exact items, dependencies, levels and page inputs are in `research/numerical-optimization-dynamics-2026-10-16-batch-53.pages.json` and `...batch-53-dependency-inputs.json`.

| Level | Batch 53 items |
|---:|---|
| 0 | `lem-maximal-ode-solution-extends-from-compact-tube`, `thm-ode-residual-a-posteriori-error-bound`, `thm-piecewise-c1-ode-residual-a-posteriori-error-bound` |
| 2 | `def-embedded-runge-kutta-pair-and-error-estimator` |
| 3 | `alg-bounded-adaptive-runge-kutta-controller`, `def-heun-euler-embedded-runge-kutta-pair` |
| 4 | `prop-embedded-pair-estimator-asymptotics`, `def-heun-quadratic-dense-output`, `def-validated-residual-tube-certificate`, `rem-fixed-mesh-global-error-does-not-certify-adaptivity`, `thm-bounded-adaptive-runge-kutta-controller-terminates` |
| 5 | `thm-heun-euler-pair-local-orders-and-estimator`, `lem-rational-expression-derivative-recursion-correct` |
| 6 | `thm-heun-dense-output-local-order-two`, `alg-validated-residual-tube-certificate-checker`, `ex-below-roundoff-tolerance-breaks-embedded-estimate`, `ex-fast-decay-problem-rejects-at-minimum-step`, `ex-heun-euler-estimator-leading-term-vanishes` |
| 7 | `thm-validated-residual-tube-certificate-sound`, `thm-validated-residual-tube-checker-terminates` |

## Supplier bodies and hypotheses

I inspected the actual supplier bodies, including draft status and limitations. These inspections establish interface consistency only; they are not independent acceptance.

- Batch 7: `def-one-step-ode-method-local-defect-order-and-stability` defines the exact-start defect as method output minus exact next value, order $p$ as a uniform $O(h^{p+1})$ defect, and one-step Lipschitz stability separately. The Euler theorem is not used to prove the Heun expansions.
- Batch 35: `def-explicit-runge-kutta-tableau-and-stage-map`, selected tableau/order items and the RK page establish stage order and existing selected formulas. The selected tableaus do not contain the Heun/Euler pair, so this batch defines that pair locally and proves its order and estimator expansion from Taylor's formula.
- Batch 14: `def-intervals-rectangles-and-complex-balls`, `def-outward-rounded-interval-and-ball-operations`, and `thm-outward-rounded-operations-are-isotone-and-dag-sound` establish the interval syntax, finite-result statuses, outward endpoint rules and exact-DAG inclusion. The validator uses only rational real-interval addition, subtraction, multiplication and division. It does not use the supplier's complex rectangles, balls, square-root evaluator, or an elementary-function evaluator.
- Batch 28, reached through the batch-35 RK page: `thm-global-error-from-one-step-defect-and-stability` and `lem-discrete-one-step-error-recurrence-bound` require the prescribed uniform mesh, exact-start defect and stability bounds, and a common compact tube. They are cited only to state the missing hypotheses for adaptive global certification.
- Published ODE suppliers used locally include the first-order IVP and maximal-solution definitions, Picard–Lindelöf/maximal-solution existence, locally unique solution gluing, the real Cauchy-completeness theorem, the mean value theorem, and Heine–Borel. Lebesgue integration suppliers for the general residual estimate were read in full and their Lebesgue (not Riemann) hypotheses are retained.

The general absolutely-continuous residual estimate assumes Countable Choice and Dependent Choice exactly through `thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions`; its proof identifies that use. A separate piecewise-$C^1$ residual theorem regularizes the error norm at zero and uses finite-piece ordinary calculus without choice. The rational certificate proof is choice-free.

## Source reading and dispositions

Two independent full treatments of adaptive Runge–Kutta control were read, along with the relevant full-text dense-output exercise:

- Hairer–Nørsett–Wanner, *Solving Ordinary Differential Equations I*, Chapter III §§III.2–III.4, PDF pp. 4–11 / printed pp. 60–67. The complete chapter PDF was retrieved; the relevant pages were read, and PDF pp. 9–11 were rendered and visually inspected for the controller formulas and branches. It supports shared stages, embedded estimates, the asymptotic model, scaled error, safety factor and controller exponent. It does not prove the batch's finite safeguards or an adaptive global certificate.
- Driscoll–Braun, *Fundamentals of Numerical Computation*, Chapter 6 `adaptive-rk.md`, read as the complete raw source file at commit `a280ed1a013393ee0a184dcbaa866522f35a3516`. The source independently describes the embedded difference, controller model and target-versus-guarantee limitation. Its public textbook page is cited on items; the pinned raw URL and commit are preserved in the source ledger.
- Hairer and Wanner, author-hosted course notes `poly.pdf`, Chapter III Exercise 10 (“Dense output”), PDF p. 89 / printed p. 85. The complete relevant exercise was inspected. It states a Hermite dense-output error target and leaves the proof to the reader; it is not used to prove the local Heun continuous extension.

The planned Estep (1995) SIAM PDF returned HTTP 403 on the initial retrieval and all five recovery retries. After those six recorded attempts, searches for the exact title, DOI and author/title found publisher metadata/abstract and bibliographic listings but no full text. I do not claim to have read or quote that paper. Its source-resolution record is marked dropped because the local residual and validated-tube arguments are complete and their exact suppliers are listed; dropping the paper did not drop any mathematical claim. `source_resolution.alternatives` contains the complete local fact/proof sections and declared dependencies for `thm-ode-residual-a-posteriori-error-bound`, `thm-piecewise-c1-ode-residual-a-posteriori-error-bound`, and `thm-validated-residual-tube-certificate-sound`.

Source URLs, exact locators, retrieved stamps, source harvests, every disposition and the six failure attempts are recorded in `research/numerical-optimization-dynamics-2026-10-16-batch-53.source-coverage.json`. Results outside the assigned scope or not proved by the source are marked out-of-scope with reasons; the local proofs supply the missing arguments.

## Proof and example scope

The controller specifies all acceptance/rejection, scaling, safety, min/max step, final clipping, evaluation-failure and finite-budget branches. Its $1/(p+1)$ factor is a model, and the termination theorem counts at most $N$ trials. The estimator proposition proves asymptotic ratio one only for a nonzero leading low-defect coefficient; the Heun/Euler $y'=t^2$ calculation gives an actual ratio-$3/2$ zero-leading-term case. The dense-output theorem has a uniform within-step estimate separate from the endpoint order. The fixed-mesh warning preserves the exact premises of the imported batch-28 theorem.

The general residual theorem gives the integrating-factor bound for an absolutely continuous reconstruction and integrable coefficients; the proof shows measurability/integrability and a.e. positivity before integrating. The choice-free piecewise theorem uses $q_\varepsilon=(\|U-y\|_2^2+\varepsilon^2)^{1/2}$ so no derivative of the norm at zero is assumed. The certificate format is deliberately limited to rational fields, dyadic polynomial reconstructions, finite real-interval range tests and strict radius supersolutions. Unsupported operations or any nonfinite interval status return `inconclusive`; the proof includes the actual stored reconstruction so represented stage/interpolation/storage errors enter its residual.

The B examples compute the vanishing Heun/Euler leading coefficient, two fast-decay rejections ending at the minimum-step guard, and a three-significant-bit rounded endpoint pair that accepts with a zero stored difference while missing the requested tolerance. The latter is explicitly an example of the rounded realization, not a claim about the exact-arithmetic specification.

## Cross-batch record

`research/numerical-optimization-dynamics-2026-10-16-batch-53.cross-batch-dependencies.json` records the three direct page prerequisites, the transitive batch-28 page, and every direct item edge to batches 7, 14, 28 and 35, with actual supplier evidence and hypotheses. There are no unavailable in-run suppliers. Estep is a dropped external source, not an in-run logical dependency.

## Scoped checks and readiness

- Reachable item dependency closure: 34 in-run items across six pages; no cycle or dependency-level label errors. Batch 53 item levels are 0–7, and all dependency-input records match.
- Manifest dependency check: 20 items, 0 missing dependency arrays and 0 errors.
- Strict proof contracts: 20/20 items; 36 numbered-step mappings, 84 exact fact-to-supplier citations, 15 additional exact supplier excerpts, boundary worksheets for all items, and finite arithmetic records for the three B examples; 0 errors and 0 warnings.
- Phase precheck: 20 files, 13 proof-bearing items checked, 0 failures; 7 definitions/algorithms/remarks are not applicable.
- Proof layout: 20 items, 36 proof steps, 0 defects.
- Renderer check: 22 assigned item/page files, 0 errors.
- Content policy: 20 assigned items, 0 errors and 0 warnings.
- Focused dependency check: all 20 assigned items and their prerequisite page/item closure pass; 883 items and 178 pages examined, 0 errors and 0 warnings.
- Coverage checklist: 1 A page and 12 harvested source results, 0 errors and 0 warnings.
- Source fetch check: 3/4 sources fetch-verified; 4/4 resolved, with one fully documented Estep drop and local proof alternatives. The stamps were already present; this final check added none.
- Step 1 decision records: all 20 batch items have ready records with owner=false, the exact declared dependency set and item hash. The records attest authoring readiness only and are not independent proof approval. The whole-run step1-decisions check did not return during the read-only scan and was interrupted; no batch record was missing in the direct record audit.
- Disk-recomputed autopilot status: the run remained at 1-scaffold, 46/107 batches covered, with no worker in flight. The owner-held run blocker still requires repair and recertification elsewhere; this batch's readiness records do not resolve that blocker. No runtime state, shared plan, verdict or gate record was changed.

No tests were run; only the requested scoped authoring and content checks were run.
