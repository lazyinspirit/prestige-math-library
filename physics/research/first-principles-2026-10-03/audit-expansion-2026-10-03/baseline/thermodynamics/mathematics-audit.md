# Thermodynamics mathematics audit

2026-10-03; research design only. Mathematical objects/results remain mathematical irrespective of their later physical names. This audit maps every mathematical operation promised in the restricted core. Advanced branches have explicit OPEN contracts rather than a manufactured closure. Published originals and imported suppliers were read only.

## Reviewed versus inherited evidence

[supplier-map.json](supplier-map.json) is the exact machine-readable mapping: 34 directly read supplier statements/bodies, 529 reachable mathematical records through declared deps and justified_by, all status published at inspection. The 495 other records were **not personally proof-read in this task**. Each has exact original/import path, raw SHA256, pinned SHA256 from physics/research/math-imports.json, publication/verification metadata, declared dependencies, and read_statement/read_proof flags. All 529 original and imported raw bytes match the pinned hashes. This is identity and status evidence, not proof certification. Transitive mathematical closure remains inherited and requires dependency-ordered review before a production acceptance claim. Implicit uses outside those declared edges are not certified by the graph traversal. No readiness receipt was written.

For the following table, original path is `items/ID.md`, imported path is `physics/items/ID.md`, exact status is `published`, and statement/body reading is direct. Definitions have no invented proof; theorem proof reading means the complete present argument was inspected, while its transitive interfaces retain the above limitation. All exact hashes and current verification fields are in supplier-map.json. A supplier theorem's physical application additionally requires the postulates/identifications from prose-scaffold.md; those are never dependencies of these mathematics records.

| Necessary mathematics; exact published ID | Read statement/proof and hypotheses checked | Consumer use / limitations |
|---|---|---|
| def-cartesian-product | Definition/body read: ordered-pair product, Separation in double powerset; no theorem proof claimed | TD1/TD2 finite compound systems, M1. Finite products by iteration; no arbitrary-index choice |
| def-preorder | Definition read: reflexive/transitive relation, not antisymmetric | TD3 accessibility; M1 supplies equivalence quotient proof. Does not imply real representation |
| def-convex-subset-of-euclidean-space | Definition read: full segment contained in U | TD1/TD2 domains, M2; affine constraints preserve convexity by linearity |
| def-convex-and-strictly-convex-functions-on-euclidean-sets | Definition read: two-point inequality, strict only interior weights/distinct points | M2 concavity by negation, TD4 constrained stability. Homogeneity precludes global strict curvature |
| def-total-derivative-in-euclidean-space | Definition read: open Euclidean domain, linear approximation with normalized remainder →0 | All smooth TD4/TD5 claims and M0/M3/M5; choose fixed numerical units before Euclidean norms of unlike dimensions |
| def-ck-and-multi-index-notation-in-several-variables | Definition read: all ordered partial words continuous through k; scalar open domain | C¹/C² assumptions in TD2–TD7. Equality of words requires a theorem |
| thm-continuous-partial-derivatives-imply-total-differentiability | Statement/proof read: all partials exist in neighborhood, continuous at point; telescoping + vector mean-value estimate | Converts stated C¹/C² partial regularity to total differentials in M0–M10. Transitive mean-value/norm interfaces inherited |
| thm-chain-rule-for-total-derivatives | Statement/proof read: f differentiable at a, g at f(a), open domains; local increment bound, bounded linear remainder | Every coordinate transformation, Hessian line restriction, reaction extent derivative and phase-curve derivative |
| thm-algebra-of-total-derivatives | Statement/proof read: sums/scalar multiples of totally differentiable maps; norm triangle estimate | All finite differential sums. Scalar product/reciprocal rules proved locally M0 rather than assumed for general Banach maps |
| thm-algebra-of-derivatives | Statement/proof read: derivative on A at its limit point; quotient domain excludes g=0, denominator nonzero at c | M7 finite canonical derivatives; local M0 handles multivariable products. Current stamp is bounded local review, not whole-closure audit |
| cor-mean-value-theorem | Statement/proof read: continuity on closed interval, differentiability inside; proof invokes Cauchy MVT | M3 monotonicity/Lipschitz bound; M7 log inequality; M9 scalar chart. No omission of endpoint continuity |
| thm-intermediate-value | Statement/proof read: continuous closed interval, value between endpoint values; canonical bisection, no AC | M3 existence of scalar inverse; global domain/coverage not implied |
| thm-heine-borel-rn | Statement/proof read: n≥1, Euclidean closed bounded sets compact; canonical box bisection | M3 compact boxes/bounded y-partials; TD4 attainment only for explicitly compact feasible set |
| thm-extreme-value-metric | Statement/proof read: nonempty compact metric domain, continuous real f | M2 existence, M3 derivative bound. Noncompact Γ itself does not guarantee equilibrium maximum |
| lem-clairaut-for-c2-potentials-by-rectangular-differences | Statement/proof read: open U, continuous second partials; two MVT rectangle evaluations, either signs h,k | Primary Maxwell supplier TD5/M5/M8; full local argument directly inspected |
| thm-clairaut-schwarz-mixed-partials | Statement/proof read: C² open domain; reduced to Peano theorem | Alternative interface only; its Peano proof was not re-read. Prefer rectangle lemma for this branch |
| thm-hessian-characterises-convexity | Statement/proof read: C² function on open convex set; line second derivative ↔ PSD | M2 concavity via -S; TD4 stability. Univariate second-derivative criterion and Hessian/norm conventions inherited |
| def-path-polygonal-length-and-rectifiability-in-rn | Definition/body read: continuous parametrized curve, polygonal length supremum, rectifiability | Path vocabulary. Body does not itself give the full piecewise-C¹ definition; local definition M6 addendum supplies it explicitly |
| def-piecewise-c1-path-operations-and-oriented-reparametrizations | Definition read: reversal, matching-endpoint concatenation, bijective monotone reparametrization | TD1 paths/cycles, M6; no reparametrization invariance beyond the relevant declared interface is needed |
| def-scalar-and-vector-line-integrals-along-piecewise-c1-paths | Definition/body read: finite admissible partition and continuous derivative extensions, continuous coefficients | M6 heat/work functionals; partition independence is inherited justified_by, not personally reviewed |
| thm-continuous-implies-integrable | Statement/proof read: continuous [a,b], bounded and Darboux integrable; uniform continuity partition construction | M6 existence of piecewise integrals; transitive Heine–Cantor/Darboux theory inherited |
| thm-newton-leibniz-with-interior-derivative | Statement/proof read: G continuous closed interval, differentiable interior, Riemann-integrable extension of G′ | M6 endpoint telescoping; continuous derivative extensions supply integrability |
| thm-gradient-theorem-for-line-integrals | Statement/proof read: C¹ potential on open U, piecewise-C¹ path; chain rule + Newton–Leibniz | Exact dU increments versus path-dependent Q/W in TD1/TD5/M6 |
| def-natural-logarithm | Definition read: inverse exp:(0,∞), no log 0 | M7 entropy and β partition identities; zero probabilities use explicit 0log0 convention rather than log0 |
| cor-exponential-is-a-bijection-onto-positive-reals | Statement/proof read: positivity/range + monotonicity + IVT | M7 positive finite partition function; inherited range/positivity proof interfaces |
| thm-derivative-of-exponential | Statement/proof read: real exponential C∞, power-series differentiation | M7 finite Gibbs weights; no infinite partition-function derivative interchange supplied |
| thm-logarithm-derivative-and-integral | Statement/proof read: x>0, log′=1/x; inverse derivative + FTC | M7 logZ derivative and logx≤x−1. FTC identity not used to infer any physical law |
| thm-natural-logarithm-laws | Statement/proof read: positive arguments, product/quotient/reciprocal laws | M7 log canonical weights and independent entropy additivity |
| lem-finite-sum-laws | Statement/proof read: recursion/induction, additivity/scaling/splitting/monotonicity/telescoping/products | M7 means/variance/KL/product sums; each finite model has a chosen enumeration |
| def-finite-probability-space-and-event | Definition read: finite Ω, nonnegative w, Σw=1; nonempty zero-probability events possible | TD8/M7: probability does not quantify every possible trial |
| def-finite-real-random-variable-and-distribution | Definition/body read: real function on finite Ω, fibres define distribution; finite additivity supplier inherited | TD8 observables/mean; no independence of repeated trials asserted |
| def-expectation-on-a-finite-probability-space | Definition read: ΣXw | M7 energy mean, explicitly average rather than pointwise outcome |
| thm-real-power-continuity-and-derivatives | Statement/proof read: x>0, real α, derivative αx^(α−1); exp/log chain | TD6 C∝sqrt(T) counterexample; finite interval antiderivative then explicit limit at zero, not a general improper-integral convergence theorem |
| thm-finite-jensen-inequality | Statement/proof read: univariate convex f on interval, finite nonnegative weights sum 1; induction | Potential **finite** stochastic examples only. Not sufficient for infinite path-measure Jarzynski Jensen application; O5 remains open |

The Banach inverse-function theorem `items/thm-inverse-function-theorem-for-banach-spaces.md` was also completely read as a candidate, but **not adopted**: it expressly assumes AC and general Banach hypotheses, while M3 supplies the needed finite-dimensional scalar inversion without importing it. The univariate `def-higher-derivatives-and-smoothness` was read but is not the multivariable regularity supplier. Filename guesses that did not exist were not treated as mathematical interfaces.

## Every core consumer's local mathematical contract

Local M0–M10 are complete restricted research arguments in mathematical-prerequisites.md, with exclusively mathematical hypotheses/dependencies. They still require future schema authoring and independent review; they are not published suppliers.

| Consumer promise | Exact mathematical suppliers / local argument | Status and strict hypotheses |
|---|---|---|
| State composition, conservation constraint set, accessible-state relation | def-cartesian-product, def-preorder; M1 | Restricted definitions complete; no energy construction or real order representation deduced |
| Fundamental entropy and concavity | convex definitions; M2 | Physical S existence, additivity, concavity and entropy law are postulates. No deduction from calculus |
| Entropy-to-energy chart, differential dU | total derivative/C¹ interfaces, chain rule, M0,M3 | Complete local scalar inverse proof; S_U>0, open box and C¹/C². Global inverse requires explicit domain coverage |
| Concave entropy ↔ convex energy | M0 convex-inverse argument | Requires globally defined monotone inverse on convex image domain; convexity not automatic from local chart |
| Equality of T,p,μ at equilibrium/reaction conditions | M2 constrained directional derivatives, M3 definitions, M9 stoichiometric chain | Complete interior algebra; allowed exchange directions and attainment are physical/feasibility assumptions |
| Stability, unique maximum, maximum existence | M2, Hessian criterion, extreme value, Heine–Borel | PSD/NSD ≠ definite; strictness on feasible slice only; existence separate |
| Euler and Gibbs–Duhem | M4, chain/product rules | Complete on open positive scaling cone, C¹/C², degree-one homogeneity; no surface or nonadditive extension |
| Legendre differentials and Maxwell relations | M0,M3,M5; rectangular Clairaut lemma | Complete smooth local transforms. Positive curvature/nonzero Jacobians; C²; remaining variables held fixed |
| C_p−C_V=TVα²/κ_T | M8 with M3,M5,mixed partials | Complete restricted identity for T,V>0, p_V<0. No singular denominator or critical extrapolation |
| Exact state increment versus path-dependent transfers | M6, path/line-integral definitions, gradient theorem | Complete elementary counterexample and endpoint theorem; general physical process need not be equilibrium curve |
| Carnot and refrigerator bounds | ordered real algebra, M2 tangent inequality for finite reservoirs, TD first/second-law assumptions | Complete ideal-bath balance in scaffold; M10 derives correct initial-temperature tangent bound. LY final-temperature variant is rejected: it reverses concavity inequality |
| Third-law integral consequence | Newton–Leibniz on positive-T intervals; thm-real-power-continuity-and-derivatives and the explicit M6 low-temperature addendum supply the illustrative limit; general improper-integral convergence is an added premise | No universal third-law proof claimed; behavior at T=0 and allowed cooling operations remain physical scope |
| Local Clapeyron curve | M9 scalar implicit curve and chain rule | Complete local proof if smooth phase branches and Δv≠0; coexistence premise adopted |
| Finite canonical mean/variance/entropy, maximum, factorization | M7, exp/log/finite sums/probability suppliers | Complete for finite nonempty Ω, β>0, fixed energy levels; no infinite or interacting factorization |
| Finite smoothness of Z/free energy | M0,M7 + exp/log smooth calculus | Smoothness established. Real-analytic version requires explicit analytic-composition supplier before theorem authoring; scaffold claims only smooth finite model |
| Phase rule rank count, Maxwell convexification, critical singularity, full nonsmooth duality | O2 + exact finite-dimensional rank count | **OPEN** if asserted as a theorem; core only conditional local coexistence derivatives |
| Order-to-entropy representation, simple-system product CH, global calibration/mixing | O1; source LY exact theorem chain | **OPEN local supplier**. Source full reading does not substitute for a repository proof. Universal calibration's algebraic route must carry AC/Hamel or coherent elementary decomposition; mixing needs M/no-gap distinctions |
| Thermodynamic limit, ensemble equivalence, infinite/continuous/quantum ensembles | O3,O4 | **OPEN**, need measure/trace/limit/spectral/interaction hypotheses. No unspecified mechanics/QM dependency |
| Nonequilibrium fluctuation relation and average inequality, continuum transport | O5; advanced continuum contracts | **OPEN**, no temporal microscopic entropy-monotonicity theorem and no original measured evidence |
| Carathéodory/Frobenius global entropy route | O6 | **OPEN**; local integrating factor is not global entropy uniqueness |

## Remaining blockers and source evidence

The restricted algebraic/calculus core has local arguments M0–M10 and exact existing direct interfaces. Full production mathematical closure is **not claimed** because 495 transitive proofs remain inherited, the O1–O6 major contracts remain open, and any phase-rule rank theorem needs a complete restricted rank argument. Definitions of equilibrium/constitutive laws, thermal contacts, scaling and absolute entropy normalization remain physical inputs. Missing scientific evidence is not filled by a mathematical derivation.

All four source-reader reports are integrated in the final section of prose-scaffold.md. Reports may reveal source errors; authoritative publication or complete reading does not confer proof validity. No mathematical item, physics item, page, plan-spec, import, engine state or readiness record was altered.
