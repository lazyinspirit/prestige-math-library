# Numerical Analysis supplier-first prose audit — 2026-10-14

This is a draft planning repair, not an engine review, build acceptance, source-proof certification or publication. The audit covers every NA-01–NA-46 A/B scope, every named algorithm/result/example family in those scopes, all 44 original missing-local-proof inventory entries, and the four independent planned P-NUM ODE/SDE interfaces. No item carrier or engine state was changed. The canonical plan-spec and historical execution receipts remain untouched. Existing unrelated working changes were preserved.

## What was repaired

The primary plan now includes one contract-completion row for each of the 46 pairs, binding finite inputs/instructions/branches, arithmetic and oracle models, admissible domains, outputs, and separate theorem obligations for correctness, termination, convergence/error and work. The original 46 pair identities and 92 planned page identities remain. All original established scope stays promised with the necessary conditions/proof obligations; no omitted proof is relabeled an open problem.

Concrete corrections include stored-entry CSR cost rather than mathematical nnz with duplicates/zeros; rounded-Cholesky failure and square-root/complex arithmetic models; genuinely strict/irreducibly weak diagonal dominance; exact versus stored Householder orthogonality; Krylov breakdown and small-LS costs; all Jordan/root boundary modes; exact multigrid smoothing/approximation inequalities; Newton finite-difference/domain/backtracking branches; node-return barycentric evaluation; the fact that Weierstrass density plus logarithmic Lebesgue growth alone gives no interpolation convergence; quadrature finite sums and second FTC; Gauss exactness-only moment versus remainder-norm premises; terminating adaptive procedures without invented accuracy certificates; uniform-in-time Lax convergence and DC; shooting sensitivity beyond continuous dependence; separable partial-domain geometric integration and finite-regularity pullback; finite-order modified-energy closeness/defect/horizon; BV space-time compactness and initial trace; reference-cell trace proofs outside the published C¹-domain theorem; time-dependent Ritz residual rather than a false evolution commutation; positive/shifted min–max and projection injectivity; convex trial-domain and exact Armijo parameters; pointwise HK integrands; exact versus digitally truncated scrambles; integer MLMC allocation/zero variance; and error-budget nonoverlap/Minkowski versus covariance sums.

The geometric repair retains the approved symplectic-Euler, Verlet, quadratic-invariant RK and finite-order energy claims. General nonseparable implicit variants remain conditional on a selected branch. The parabolic repair retains the measurable time-dependent continuous variational theorem; its discrete error uses a fixed comparator with full residual, or a time-differentiable Ritz operator with the extra derivative term. The eigenproblem repair retains lower-bounded symmetric operators by coercive shift, not only positive unshifted operators. Mixed FEM retains the promised concrete stable pair, specifies mini elements in d=2/3, and leaves any additional Taylor–Hood variant as a separately proved candidate. Adaptive FEM retains its approved model/approximation-class optimality.

## Exhaustive topic and inventory coverage

The authoritative coverage is the complete 46-row table headed “Contract completions from the supplier-first audit” in the plan. It reviews the full Scope, Proof route and Examples for each pair, not one sampled theorem. The matching `scaffold/coverage.json` contains those same 46 contract rows; `scaffold/prerequisite-map.json` binds every pair and every one of its 44 original authoring-obligation records to its completion. The companion audit JSON enumerates every pair, procedure/result/example promise, original obligation and consumer closure. These are planning dispositions, not proof verdicts.

Supplier review preceded consumer correction. No original item Definition or Statement changed, so no active item's mathematical consumer was silently recertified. Changed *planned* interfaces were followed through the complete existing earlier-pair graph, including conditional quadrature links NA-12/13→30. Major affected closures are NA-28 through all FEM descendants 29–37; NA-10 through interpolation/quadrature/spectral/error-ledger descendants; NA-19 through all linear FD/BVP descendants; NA-09 through nonlinear BVP/optimization/error-ledger descendants; and NA-39/40 through QMC/RQMC/MLMC/error-ledger/open-formulation descendants. NA-22 and NA-36 have no originally declared outgoing NA dependencies; conditional future NA-45 examples must consume their exact corrected interfaces if introduced. NA-46 has no outgoing logical edge. Optional and nonlogical physics links are tracked separately.

The statistical plans' BCS-23/25/54–59, ML-37–39/58/60–61, MSF-26 and SME-02/04/16/36 remain their current owners and conditional downstream interface consumers. No shared statistical plan was rewritten. The audit specifically preserves their numerical-versus-inferential boundary. New root supplier proposals are local-body holds, not executable dependency resolutions.

## Actual supplier and source inspection

All explicitly named existing root supplier Statements/Definitions in the pre-completion plan were inspected against disk; this is statement/interface inspection, not a whole-proof audit of every supplier closure. The audit JSON records their current paths and hashes as navigation evidence only. Full bodies independently read for the high-risk repairs include `thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model`, `lem-newton-contraction-near-an-invertible-derivative`, `thm-hessian-characterises-convexity`, `thm-global-h-two-dirichlet-regularity`, `thm-courant-fischer-minimax-for-elliptic-eigenvalues`, `thm-uniform-boundedness-principle`, `thm-doob-lp-maximal-inequality`, `def-elementary-predictable-brownian-integrand` and the preconditioner counterexample. Second FTC and independent P-NUM ODE/SDE planned bodies were also read; no unprinted full-text source is claimed read.

The sharp trace Statement is bounded C¹ domain, 1<p<∞, AC. Polygonal/simplex cells do not meet it. Sobolev and H² statements carry Countable Choice; weak Poisson existence explicitly carries AC+CC; entropy existence carries DC+CC and integrable bounded initial data; local entropy contraction carries CC. Elliptic min–max/spectrum uses AC+CC. UBP carries DC. IID CLT carries AC. The imported time-dependent Hamiltonian flow carries AC_ω. These actual assumptions now survive the consumers. The Doob supplier is discrete time, so the consumed finite-L² SDE route explicitly requires the continuous-path dyadic-grid extension rather than silently citing it as continuous time.

Physics mathematical bodies independently read: `def-cm-splitting-hamiltonian-and-verlet-map`, `prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart`, `prop-cm-drift-kick-and-verlet-preserve-the-canonical-form`, `lem-cm-verlet-local-truncation-error-is-cubic`, `thm-cm-verlet-finite-time-error-is-quadratic`, and `rem-cm-scope-of-the-certified-verlet-estimates`. The analytic energy theorem's Statement, Facts and telescoping proof were inspected, but its entire analytic dependency chain was not independently reread or accepted. These are maximal directly relevant proof-design reuse: root P-NA-GEO-01…05 proposals retain SPD mass/C³ potential, intermediate domains, convex-tube bounds, exact arithmetic, compact endpoint/segment retention, and finite versus exponential time distinctions. No physical postulate/theorem/experiment/remark is a root logical premise. Any physical-origin applications are nonlogical attributed context. These inspected bodies also explain why importing smooth symplectomorphism terminology for merely C² maps would require a new finite-regularity root interface.

Independent source checks used the actual cached full documents, initially without source recovery; the later fresh discrepancy retrieval is recorded separately below: Saad Ch.13 §13.5.2 printed 453–454, inequalities (13.62)/(13.63), Theorem 13.3 and its full proof, for the product S C and sqrt bound; Long Chen's parabolic note §§1–2.5 (especially PDF p.4 noncommutative diagram and p.5 Lemma 2.2) and later error/time-method context, for the time-independent Ritz residual; Boyd–Vandenberghe §9.5.3 printed 488–491 (cached full textbook excerpt), for damped Newton's separate convex regime, Lipschitz-Hessian and backtracking assumptions; Giles full-paper opening/model/coupling/allocator context only, not an independent full-paper reread. The cached full documents were consulted where the source hypothesis mattered. The plan's detailed 2026-10-12 reading ranges remain attributable to their original packet readers. HMT's omitted Gaussian estimates and Owen's omitted multivariate HK/scramble proofs remain local authoring/source obligations; the present audit does not fabricate their proof coverage.

## Missing suppliers and genuine unresolved questions

All proposed P-NA-ARITH/JORDAN/SENS/CELL/APPROX/BV/EVOL/GEO/QMC suppliers have exact contracts, proof routes and direct/indirect consumers in the plan appendix. They are proposals only: local bodies, exact final IDs/dependencies and proof closure must be supplied before a consumer's theorem can be released. In particular reference-cell trace/Green and Bramble–Hilbert, sensitivity, evolution trace/well-posedness, Gaussian matrix estimates, HK/Stieltjes representation, scramble ANOVA/occupancy and mixed Korn/divergence/Fortin/stable-pair proofs are established mathematical authoring obligations, not open problems. The unchanged 44 original obligations keep their sound scope and source limitations.

The self-contained P-NUM appendix gives exact ODE constants/norms/local-to-global recurrence and all stage/tube/order premises, plus explicit Euclidean/Frobenius Lipschitz/growth/time-Hölder constants, Brownian filtration (H), integrability, interpolation, strong and weak SDE hypotheses and claim-specific proof routes. It keeps the finite-L² time-dependent route distinct from HMS's autonomous all-moment theorem. P-NUM-SDE-01's outside-owner qualitative modulus is not repaired by pretending the new appendix is an already proved original supplier. The exact contracts are reviewable; consumer release remains held pending local authoring.

NA-46 is the only new genuine open-problem candidate. A fresh research source/status review on 2026-10-14 supports retaining the unresolved fixed-d formulation; it is not a publication/source-acceptance stamp. The fixed-d≥3 discrepancy order has no outgoing logical consumers, and its B page cannot solve it. The existing periodic Navier–Stokes question remains contextual only, with historical source/status claims attributed to their dated review. No research/source incompleteness was relabeled unresolved mathematics.

## Checkpoint and remaining work

Objective: repair the entire numerical prose scaffold and owned inventories while preserving all approved sound claims and separate established-proof obligations. Verified state: all 46 pairs and 44 original obligations now carry concrete draft completions; all four P-NUM imports have self-contained exact consumed contracts; supplier/consumer and physics design maps are explicit. Remaining work is actual established item/proof authoring and source/status refresh at any separate discrepancy publication, not further permission, dispatch, acceptance or publication in this audit. Before any future handoff, reread current on-disk plan and inventories; this checkpoint does not configure API compaction.

Scoped check results are appended after final validation; no whole-corpus checks, engine transitions, gate controls or active acceptance stamps are part of this work.

## Fresh discrepancy formulation/status review

On 2026-10-14 the current author-hosted Owen PDF at https://artowen.su.domains/mc/practicalqmc.pdf was fetched successfully. Printed pp.18–19 explicitly state that the best possible discrepancy rate is unknown, give Roth’s lower bound and the believed n⁻¹(log n)^(d−1) barrier, settled there for d≤2; Theorem15.7 supplies a nonsharp known fixed-d upper construction. The document itself is marked ©2013–2023, so retrieval date is distinguished from writing date. This gives exact formulation/status and bound locators; it is not a new proof of any bound.

The latest-first arXiv exact-phrase “star discrepancy” first50 search was inspected on the same date. Recent relevant full-text introductions independently read were Smirnov–Vershynin, arXiv:2607.12263v1, §§1.1–1.3 (random-set modification and arbitrary-measure upper bounds), and Josef Dick, arXiv:2607.23571v2, §1 through Theorem1.2/Remark1.3 (Novak–Woźniakowski uniform tractability). Dick’s claimed new resolution operates in joint growing-dimension regimes d≈ε⁻α and proves uniform polynomial accuracy/dimension exponents; it does not give the fixed-d sharp logarithmic star-discrepancy order. Its title is therefore not evidence that NA-46 was settled. Ait Abderrahim–Doerr–Durand, arXiv:2604.00786v2 introduction, was checked as finite-size optimization context and does not establish the asymptotic order. These inspected results contain no resolution of the precise NA-46 claim. The first50/latest-results search is bounded and does not prove absence of all conceivable announcements; no preprint proof was accepted.

The current authoritative author exposition plus targeted 2026 context supports the draft unresolved classification with the above limits. The avoidable fresh-retrieval hold is discharged at research level; active open-problem authoring/publication still needs its ordinary dated source/status carrier and current check. Full retrieved documents remain temporary private files, not tracked reproductions. The audit JSON records retrieval hashes and inspected locators.

## Final scoped checks

- Explicit rendercheck of the primary plan, category overview and this audit report: exit0, checked3, no errors/warnings (final rerun follows the status edit).
- Structural coverage:46/46 pair contract rows,44/44 original obligation completions,4/4 self-contained consumed P-NUM interfaces;92/92 original page identities unchanged. Required/conditional earlier-pair graph checked over all46 nodes; NA-46 has no consumers.66/66 explicitly named root interface paths resolve.
- Both owned scaffold inventories and the audit JSON parse; contract rows agree with the plan. `git diff --check` on the six owned paths reports no whitespace errors.
- No proof-layout check applies because no item carriers changed. The category has no authored A/B pages or pathway; a pathcheck attempt returned checked0 and is expressly excluded from validation evidence.

Changed files: `research/plan-numerical-analysis-track.md`, `library/numerical-analysis/_category.md`, `research/numerical-analysis-2026-10-12/scaffold/prerequisite-map.json`, `research/numerical-analysis-2026-10-12/scaffold/coverage.json`, `research/scaffold-audit-2026-10-14/numerical-analysis.md` and `.json`. No engine controls, canonical spec, active item, publication, Git commit or push.

## Completed inherited supplier graph follow-up

The earlier report intentionally distinguished Statement/interface inspection from proof-closure review. The requested follow-up now explicitly navigates the actual inherited graph:94 named consumed/context root seeds,2,795 reachable root item carriers,317 BFS-shortest seed-to-forbidden-target paths,14 unique remark targets;94 reachable justified_by targets separately inspected, none forbidden. Aliases were canonicalized before traversal; no unresolved ID, open-problem, physical carrier or active unproved/external fallback was reached in this scoped root deps closure. Loading inventory metadata was navigation needed to resolve IDs, not a whole-corpus mathematical audit. Context-only supplier candidates are distinct from actual declared numerical logical uses. Exact per-seed shortest paths and affected direct/indirect NA consumers appear in the companion dependency-closure JSON.

All14 actual remark bodies were independently read. Their content is mathematical convention/definition/dictionary material; its usefulness does not permit remark-kind logical premises. P-NA-TYPE-01…14 in the primary prerequisite appendix give concrete typed definitions/results, exact domains and local proof routes for each. Existing bare primitives and results are named where appropriate, but their own inherited closure is not declared clean. Pure context links can be moved to Remarks only after the supplier reviewer confirms no mathematical premise depends on them; hidden actual definitions/results require the typed local supplier. The same shared supplier owner must check every actual predecessor and its descendants. No shared root file was changed here.

**Native prerequisite closure is not met.** The mathematical-scaffold repair is complete, but all listed inherited logical uses remain conditional holds until the supplier owner authors/reroutes the actual typed premise, checks its consumer bodies and retraces current deps. Neither these proposal names nor a published status or source citation discharges the hold. This is an established-authoring/structural-supplier repair obligation, not unresolved mathematics, a native readiness verdict or acceptance.

### Exact shortest paths and affected consumers

The following is one global shortest witness per distinct target; the receipt retains all317 per-seed shortest witnesses. “NA” lists explicit consumers and their required/conditional planned descendants. “Context candidates” identifies conditional uses of supplier groups without inventing new NA deps.

**rem-characteristic-function-fourier-stieltjes-convention**; typed replacement is the matching target row in the primary P-NA-TYPE table.

Shortest path: `def-brownian-motion → lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments → thm-uniqueness-of-a-law-from-its-characteristic-function → rem-characteristic-function-fourier-stieltjes-convention`.

NA: NA-39, NA-40, NA-41, NA-42, NA-45, NA-46. Context candidates: none.

**rem-complex-contours-as-planar-rectifiable-paths**; typed replacement is the matching target row in the primary P-NA-TYPE table.

Shortest path: `cor-abstract-parabolic-smoothing → lem-generator-of-the-contour-semigroup-is-the-sectorial-operator → lem-contour-definition-of-an-analytic-semigroup → def-complex-contours-reversal-concatenation-and-closedness → rem-complex-contours-as-planar-rectifiable-paths`.

NA: NA-11, NA-38. Context candidates: NA-36.

**rem-complex-plane-euclidean-dictionary**; typed replacement is the matching target row in the primary P-NA-TYPE table.

Shortest path: `cor-abstract-parabolic-smoothing → def-complex-sector-and-bounded-analytic-semigroup → def-complex-domain → rem-complex-plane-euclidean-dictionary`.

NA: NA-11, NA-38. Context candidates: NA-36.

**rem-elements-of-l-p-are-equivalence-classes-and-pointwise-statements-require-a-representative**; typed replacement is the matching target row in the primary P-NA-TYPE table.

Shortest path: `thm-global-h-two-dirichlet-regularity → lem-tangential-h-two-estimate-near-a-flat-dirichlet-boundary → lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative → thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity → lem-l-p-functions-have-sigma-finite-essential-support-for-finite-p → rem-elements-of-l-p-are-equivalence-classes-and-pointwise-statements-require-a-representative`.

NA: NA-12, NA-14, NA-27, NA-28, NA-29, NA-30, NA-31, NA-32, NA-33, NA-34, NA-35, NA-36, NA-37, NA-38, NA-39, NA-40, NA-41, NA-42, NA-45, NA-46. Context candidates: NA-10, NA-11, NA-12, NA-13, NA-14, NA-19, NA-20, NA-21, NA-23, NA-24, NA-25, NA-26, NA-27, NA-28, NA-29, NA-30, NA-31, NA-32, NA-33, NA-34, NA-35, NA-36, NA-37, NA-38, NA-45.

**rem-euclidean-topology-dictionary**; typed replacement is the matching target row in the primary P-NA-TYPE table.

Shortest path: `cor-abstract-parabolic-smoothing → def-complex-sector-and-bounded-analytic-semigroup → def-complex-domain → rem-complex-plane-euclidean-dictionary → rem-euclidean-topology-dictionary`.

NA: NA-11, NA-38. Context candidates: NA-36.

**rem-heine-criterion-choice-cost**; typed replacement is the matching target row in the primary P-NA-TYPE table.

Shortest path: `cor-abstract-parabolic-smoothing → thm-exponential-bound-for-a-c-zero-semigroup → cor-exponential-is-a-bijection-onto-positive-reals → thm-intermediate-value → thm-sequential-criterion-for-continuity → rem-heine-criterion-choice-cost`.

NA: NA-02, NA-04, NA-05, NA-06, NA-07, NA-08, NA-11, NA-12, NA-14, NA-16, NA-17, NA-21, NA-22, NA-27, NA-28, NA-29, NA-30, NA-31, NA-32, NA-33, NA-34, NA-35, NA-36, NA-37, NA-38, NA-39, NA-40, NA-41, NA-42, NA-44, NA-45, NA-46. Context candidates: NA-09, NA-10, NA-11, NA-12, NA-13, NA-14, NA-15, NA-16, NA-17, NA-18, NA-19, NA-20, NA-21, NA-22, NA-23, NA-24, NA-25, NA-26, NA-27, NA-28, NA-29, NA-30, NA-31, NA-32, NA-33, NA-34, NA-35, NA-36, NA-37, NA-38, NA-43, NA-45.

**rem-locally-uniform-convergence-dictionary**; typed replacement is the matching target row in the primary P-NA-TYPE table.

Shortest path: `cor-runge-polynomial-approximation → thm-runge-approximation-with-prescribed-poles → lem-cauchy-riemann-sums-give-rational-approximation → thm-global-cauchy-integral-formula-homology → lem-dixon-entire-gluing → thm-contour-parameter-integrals-are-holomorphic → rem-locally-uniform-convergence-dictionary`.

NA: NA-11, NA-38. Context candidates: none.

**rem-metric-axiom-conventions**; typed replacement is the matching target row in the primary P-NA-TYPE table.

Shortest path: `def-bounded-coercive-and-symmetric-sesquilinear-forms → def-norm-and-normed-space → rem-metric-axiom-conventions`.

NA: NA-01, NA-02, NA-03, NA-04, NA-05, NA-06, NA-07, NA-08, NA-09, NA-11, NA-12, NA-14, NA-15, NA-16, NA-17, NA-18, NA-19, NA-20, NA-21, NA-22, NA-23, NA-24, NA-25, NA-27, NA-28, NA-29, NA-30, NA-31, NA-32, NA-33, NA-34, NA-35, NA-36, NA-37, NA-38, NA-39, NA-40, NA-41, NA-42, NA-43, NA-44, NA-45, NA-46. Context candidates: NA-09, NA-10, NA-11, NA-12, NA-13, NA-14, NA-15, NA-16, NA-17, NA-18, NA-19, NA-20, NA-21, NA-22, NA-23, NA-24, NA-25, NA-26, NA-27, NA-28, NA-29, NA-30, NA-31, NA-32, NA-33, NA-34, NA-35, NA-36, NA-37, NA-38, NA-43, NA-45.

**rem-plane-star-shaped-and-convex-dictionary**; typed replacement is the matching target row in the primary P-NA-TYPE table.

Shortest path: `cor-runge-polynomial-approximation → thm-runge-approximation-with-prescribed-poles → lem-cauchy-riemann-sums-give-rational-approximation → thm-global-cauchy-integral-formula-homology → lem-holomorphic-difference-quotient-is-jointly-continuous → lem-holomorphic-difference-quotient-segment-formula → rem-plane-star-shaped-and-convex-dictionary`.

NA: NA-11, NA-38. Context candidates: NA-36.

**rem-real-and-complex-normed-space-convention**; typed replacement is the matching target row in the primary P-NA-TYPE table.

Shortest path: `def-bounded-coercive-and-symmetric-sesquilinear-forms → rem-real-and-complex-normed-space-convention`.

NA: NA-19, NA-20, NA-21, NA-23, NA-24, NA-25, NA-28, NA-29, NA-30, NA-31, NA-32, NA-33, NA-34, NA-35, NA-36, NA-37. Context candidates: NA-10, NA-11, NA-12, NA-13, NA-14, NA-19, NA-20, NA-21, NA-23, NA-24, NA-25, NA-26, NA-27, NA-28, NA-29, NA-30, NA-31, NA-32, NA-33, NA-34, NA-35, NA-36, NA-37, NA-38, NA-45.

**rem-real-exponents-deferred**; typed replacement is the matching target row in the primary P-NA-TYPE table.

Shortest path: `thm-floating-point-dot-product-componentwise-and-normwise-error-bounds → def-p-norms-on-rn → rem-real-exponents-deferred`.

NA: NA-01, NA-02, NA-03, NA-04, NA-05, NA-06, NA-07, NA-08, NA-09, NA-11, NA-12, NA-14, NA-15, NA-16, NA-17, NA-18, NA-21, NA-22, NA-27, NA-28, NA-29, NA-30, NA-31, NA-32, NA-33, NA-34, NA-35, NA-36, NA-37, NA-38, NA-39, NA-40, NA-41, NA-42, NA-43, NA-44, NA-45, NA-46. Context candidates: NA-09, NA-10, NA-11, NA-12, NA-13, NA-14, NA-15, NA-16, NA-17, NA-18, NA-19, NA-20, NA-21, NA-22, NA-23, NA-24, NA-25, NA-26, NA-27, NA-28, NA-29, NA-30, NA-31, NA-32, NA-33, NA-34, NA-35, NA-36, NA-37, NA-38, NA-43, NA-45.

**rem-semigroup-sign-and-generator-conventions**; typed replacement is the matching target row in the primary P-NA-TYPE table.

Shortest path: `cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup → rem-semigroup-sign-and-generator-conventions`.

NA: none from an explicit named per-pair seed. Context candidates: NA-36.

**rem-sup-conventions**; typed replacement is the matching target row in the primary P-NA-TYPE table.

Shortest path: `thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain → def-metric-bounded-diameter → rem-sup-conventions`.

NA: NA-01, NA-02, NA-03, NA-04, NA-05, NA-06, NA-07, NA-08, NA-09, NA-11, NA-12, NA-14, NA-15, NA-16, NA-17, NA-18, NA-19, NA-20, NA-21, NA-22, NA-23, NA-24, NA-25, NA-27, NA-28, NA-29, NA-30, NA-31, NA-32, NA-33, NA-34, NA-35, NA-36, NA-37, NA-38, NA-39, NA-40, NA-41, NA-42, NA-43, NA-44, NA-45, NA-46. Context candidates: NA-09, NA-10, NA-11, NA-12, NA-13, NA-14, NA-15, NA-16, NA-17, NA-18, NA-19, NA-20, NA-21, NA-22, NA-23, NA-24, NA-25, NA-26, NA-27, NA-28, NA-29, NA-30, NA-31, NA-32, NA-33, NA-34, NA-35, NA-36, NA-37, NA-38, NA-43, NA-45.

**rem-zero-times-infinity-convention-for-pointwise-products**; typed replacement is the matching target row in the primary P-NA-TYPE table.

Shortest path: `def-sobolev-space-wkp-and-its-norm → def-complex-lp-and-euclidean-test-function-conventions → thm-arithmetic-and-lattice-operations-preserve-measurability → rem-zero-times-infinity-convention-for-pointwise-products`.

NA: NA-12, NA-14, NA-27, NA-28, NA-29, NA-30, NA-31, NA-32, NA-33, NA-34, NA-35, NA-36, NA-37, NA-38, NA-39, NA-40, NA-41, NA-42, NA-45, NA-46. Context candidates: NA-10, NA-11, NA-12, NA-13, NA-14, NA-19, NA-20, NA-21, NA-23, NA-24, NA-25, NA-26, NA-27, NA-28, NA-29, NA-30, NA-31, NA-32, NA-33, NA-34, NA-35, NA-36, NA-37, NA-38, NA-45.


### Follow-up scoped checks and checkpoint

The graph receipt records actual shortest paths, current source-byte navigation hashes, body-reading scope and forbidden-target classifications, with native_closure_met=false and acceptance=false. Each original pair's audit row now identifies its inherited actual-use holds and conditional context targets. The two owned scaffold inventories point to the same graph and typed-contract appendix. No source Statement/Definition or native control changed. The new seventh owned file is `research/scaffold-audit-2026-10-14/numerical-analysis-dependency-closure.json`. Final explicit render/JSON/whitespace checks are rerun after this update; graph counts are substantive navigation evidence only.

Objective/state at follow-up handoff: finish numerical inherited prerequisite navigation without shared root edits; all14 targets now have read bodies, exact shortest paths, affected NA consumers and typed draft replacement designs. Next action belongs to the shared supplier owner: surgically implement each actual-premise/context repair and recheck the affected graph and consumer bodies. No compaction setting or native closure is claimed.

**Well-definedness discharge follow-through:** the94 direct justified_by target kinds are permitted, but this does not make their proofs clean. Their actual deps closures were separately traced over2,022 carriers, exposing131 shortest discharge-to-remark paths under33 definitions. The12 targets are already among the14 typed replacements; no new target family appeared. The receipt records every exact discharge path, every consuming seed→definition path, the affected explicit/context NA descendants and a shortest mixed-edge witness. All corresponding well-definedness uses retain the same authoring hold. No reversed discharge edge or artificial definition/theorem cycle was inserted into the scheduling graph.

Final follow-up checks passed: all 317 primary dependency paths and 131 discharge dependency paths match current canonical `deps`; every mixed witness's `justified_by` edge and seed-to-definition path resolves; 2,795/2,795 recorded navigation hashes match current source bytes. All four owned JSON files parse, and 46/46 plan contract rows still agree with both inventories and the audit. Explicit rendercheck checked three prose files with no errors/warnings; whitespace checks covered all seven owned paths. These checks validate the recorded navigation/design carriers, not mathematical proof acceptance or native prerequisite closure.
