# Batch 100 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-100`. Independent current-content review in generated dependency order. No judge or engine gate invoked.

## `def-ctrl1-linear-lqr-control-problem`

Reviewed Definition and its quotient, weak-convergence and Euclidean-inner-product suppliers. T>0, positive dimensions, compact nonempty convex U_c, positive lower R bound and nonempty convex weakly sequentially closed F are explicit. Ambient J is defined before restriction; state existence is deferred through justified_by. Zero Q/P and singleton U_c are admissible; endpoint representatives cannot affect the Volterra integrals. No optimizer is asserted here.

Risk review: complete. Continue in generated order.

## `def-ctrl1-smooth-transcription-data`

Accepted the reader's explicit n,m>=1 declaration. Open state/control domains, pointwise representatives, compact tubes, continuous derivatives through order three, and optional constraints distinguish smooth transcription data from L-infinity classes. Checked the Euclidean C^k supplier: its positive dimensions/open domains match state/control differentiation. No IVP existence or node-only continuous feasibility is asserted. Consumers use these same dimensions and tube conventions; adding the missing m declaration does not change any admissible existing use.

Risk review: complete. Continue in generated order.

## `lem-ac-zero-derivative-and-integral-reconstruction-under-countable-choice`

Read all five proof steps and exact statements of all 13 suppliers. The least dyadic radius is uniquely specified at good and exceptional tags; Cousin supplies a finite fine partition without pointwise choice. Bad-tag cells lie in one open null cover of measure below the absolute-continuity modulus; good-tag increments sum to eta(t-s)<epsilon/2. Finite shared endpoints are null. Subtracting the indefinite L1 integral leaves an absolutely continuous function with zero derivative off a finite null union, yielding reconstruction coordinatewise. Countable Choice covers outer regularity and the first L1 FTC; a=b and empty bad-cell families are handled. This is a complete local gauge argument, independent of stronger differentiability/reconstruction theorems.

Risk review: complete. Continue in generated order.

## `lem-ctrl1-control-box-is-weakly-closed`

Accepted the explicit Countable Choice and rational-basis/null-union repair. Read all three steps and exact supplier statements. Nearest-point minimization on nonempty compact U_c and convexity give strict separation; continuity of the support function passes separation to a rational direction. Each measurable indicator test is in L2 on finite horizon; positive-measure strict violation yields an E_r contradiction. The canonical exceptional sets indexed by countable Q^m have null union under the stated choice/measure assumptions. Singleton U_c and zero directions cause no exception. Reviewed downstream weak closedness uses: cost and VI now explicitly assume CC; existence and mesh convergence derive it from DC. Recovery explicitly assumes CC; weak-to-uniform convergence assumes admissibility of the limit and does not use weak closedness or CC.

Risk review: complete. Continue in generated order.

## `lem-ctrl1-measurable-linear-ode-state-map`

Accepted the geometric-series citation supplying the Picard Cauchy estimate. Read all five steps and exact integral, C(K), Gronwall and geometric-series supplier statements. A finite partition makes q_j<1, including A=0 via one interval; deterministic Picard iteration and finite coordinate completeness give one unique global integral solution. Bu is L1 by finite-horizon Cauchy-Schwarz. The norm integral estimate is proved locally by a unit test vector. Gronwall is invoked only with continuous norm and constant nonnegative coefficients. L1 absolute continuity and representative independence establish the unconditional integral claims; only the a.e. derivative invokes CC. Affineness and the zero-initial linear bound follow from uniqueness, with no contraction theorem requiring stronger choice.

Risk review: complete. Continue in generated order.

## `def-ctrl1-lqr-adjoint-equation`

Accepted coordinatewise scalar absolute continuity, avoiding conflation with the cited Darboux vector-integral definition. Checked the state-map and derivative suppliers. The backward sign and terminal condition agree with H=L+p^T(Ax+Bu); existence is explicitly deferred under CC. Zero terminal P is allowed. Consumers use coordinatewise AC and the same sign, so this clarification requires no consumer repair.

Risk review: complete. Continue in generated order.

## `lem-ctrl1-compact-convex-control-cell-averages-form-a-recovery-sequence`

Accepted the Minkowski citation for the triangle inequalities. Read all three steps, mesh definition, exact box-density/Minkowski suppliers and previously checked separation/integral suppliers. Nearest-point separation forces each average into compact convex U_c; cellwise Cauchy-Schwarz gives an L2 contraction, including zero averages. Interval indicators have error supported on at most two boundary cells of total length <=2h; finite component sums converge, and density plus contraction proves strong recovery. N>=1 and h>0 exclude division by zero. The statement explicitly restricts F=U_c and warns that additional constraints need separate recovery; CC matches the density supplier.

Risk review: complete. Continue in generated order.

## `lem-ctrl1-weak-control-convergence-implies-uniform-state-convergence`

Read all three steps and exact cited suppliers. Compact U_c bounds both the sequence and its assumed admissible limit; state-map boundedness gives a common M_x. The integral equation gives a common Lipschitz constant despite merely measurable coefficients. Coordinate evaluations composed with the zero-initial linear map are bounded scalar functionals, so weak convergence gives nodewise convergence. A finite epsilon/(3L) net yields uniform convergence; L=0 is separate. No weak-closure conclusion is used here and no additional CC assumption is needed for this argument.

Risk review: complete. Continue in generated order.

## Read-only batch-85 supplier escalation

`reader:100:1` and `refuter:100:1`: **escalated**, current fatal ill-formedness confirmed. Current Definition instruction 2 still uses undefined d_i in G_i p=-d_i; neither its input nor def-sqp-linearized-quadratic-subproblem defines d_i, G, A_E or b_E explicitly. The quoted subproblem instead supplies h+Dh p=0 and g+Dg p<=0. Independent review of both proof steps, current producer contract citations and manifest confirms that nonsingularity only guarantees a unique solve after its RHS is specified. Missing prerequisite: a fully specified affine-row/RHS interface. Attempted local closure: infer intended A_E=Dh, b_E=-h, G=Dg, d=g; these are a plausible correction, not authored instructions. Producer batch 85 must define that interface, synchronize its contract/manifest and review affected consumers before this batch can close the branch. No producer files edited.

Producer carrier and pre-reader fingerprints and dependency paths are preserved verbatim in both decisions. Current raw producer SHA-256: `5587da778bc3ea7c2afe8f7aa3e0896e731457b8ac413ff39fa2ac654512561b`. Reader historical bytes remain unbound; no historical reconstruction or completed repair is claimed. No closed defect row is fabricated while the supplier defect remains unresolved. Required owner action: route supplier-first repair to batch 85, then resolve these consumer findings against reviewed corrected bytes.

## `lem-ctrl1-lqr-adjoint-exists-uniquely`

Accepted reflection/change-of-variables repair. Read all three steps and exact AC hierarchy, boundedness, scalar L2 inequality and L1 change-of-variables statements. Reflection is a C1 diffeomorphism of (0,T), Jacobian absolute value one; applying change of variables to squared norms and null-set indicators preserves L2 and exceptional null sets, while essential bounds are preserved. With C=A(T-s)^T and D=I, the forward state lemma constructs q. Reflection preserves coordinate AC directly by interval lengths. The difference quotient gives the minus derivative sign. For uniqueness, bounded AC competitors have L1 derivative Cq+g; the previously reviewed CC reconstruction lemma converts them to the same Volterra problem. No uniqueness for an a.e. ODE is assumed without reconstruction.

Risk review: complete. Continue in generated order.

## `lem-ctrl1-lqr-cost-is-weakly-lower-semicontinuous`

Accepted explicit CC propagation. All three proof steps and exact suppliers checked. Weak closedness first places the weak limit in U_c, enabling uniform state convergence. Uniform state error and L2 target imply convergence of Q tracking terms (the remaining factor is L1 on finite horizon), and terminal evaluation converges. For controls the bounded symmetric multiplication operator R gives the supporting-quadratic inequality; testing at w=u attains the supremum and proves weak lower semicontinuity. Zero Q/P and singleton U_c are harmless; no square root of a measurable matrix or unstated compactness theorem is used.

Risk review: complete. Continue in generated order.

## `lem-ctrl1-lqr-adjoint-identity-and-gradient`

Read every step and exact AC integration-by-parts supplier, whose CC and DC assumptions are explicitly retained. Affine state dependence gives a linear variation and a uniform O(||w||_2) bound. Expansion leaves a quadratic remainder bounded by C||w||_2^2. Integration by parts cancels A terms and the terminal P term with the correct backward-adjoint sign. B^T p+Ru is L2 and defines a bounded scalar functional by Cauchy-Schwarz. Ambient perturbations u+w need not satisfy the control box because J and the state map were defined on all L2.

Risk review: complete. Continue in generated order.

## `thm-ctrl1-lqr-existence-and-unique-optimal-control`

Accepted explicit DC-to-CC propagation to weak closedness. Read four steps and exact Hilbert/reflexivity, DC-to-CC, UL/DC/HB direct-method suppliers and axiom definitions. The finite coordinate product of scalar real L2 is Hilbert; F is assumed nonempty, convex and weakly sequentially closed. J is finite and >=r||u||_2^2/2, so proper and coercive, and the reviewed weak lower semicontinuity applies. All three direct-method principles are stated rather than replaced by full AC. The affine state map and PSD tracking/terminal forms preserve convexity; uniformly positive R supplies strict convexity on L2 classes, hence uniqueness even with additional convex constraints. No assertion of feasibility for arbitrary extra constraints is made.

Risk review: complete. Continue in generated order.

## `cex-ctrl1-terminal-constraints-break-pointwise-control-vi`

Read all three steps. u>=0 with integral zero forces the singleton feasible set {0}; that set is convex and weakly sequentially closed. x=0 and p(t)=t-1 satisfy -p'=x-1 and p(1)=0. c=1 belongs to [0,2] and gives g(c-u)=t-1<0 on [0,1), while every feasible variation is zero. The stated CC/DC hypotheses match the gradient supplier. Checked the exact integral-zero supplier; the counterexample attacks only the extension to terminal constraints, not the valid control-only theorem.

Risk review: complete. Continue in generated order.

## `thm-ctrl1-lqr-variational-inequality-and-pointwise-control-branch`

Accepted explicit rational basis, countable null-union and integral order/linearity suppliers. Read all four steps and exact cited statements. Convex feasible segments give necessity; the exact quadratic remainder and r>0 give sufficiency and uniqueness without requiring a preexisting optimizer. For F=U_c, countable choice supplies a dense set via rational boxes, measurable negative-level sets detect every violation by continuity in c, and positive measure of one such set gives a valid localized control perturbation contradicting the integral VI. Conversely the common null set permits substitution c=v(t), and Cauchy-Schwarz makes the pairing integrable. Arbitrary additional state/terminal constraints are explicitly excluded from the pointwise equivalence. Singleton U_c and null exceptional sets remain valid.

Risk review: complete. Continue in generated order.

## `ex-ctrl1-bounded-actuator-lqr`

Checked all three steps algebraically. Writing m=integral u gives J=||u-m||_2^2/2+(m-1/2)^2+1/4, so equality exactly at the admissible constant 1/2 (as an L2 class). x=t/2, p=-1/2 satisfy the terminal adjoint, and p+u=0. The main square-completion proof needs no choice principle; optional adjoint/gradient verification explicitly states CC/DC. The value 1/4 and signs are correct.

Risk review: complete. Continue in generated order.

## `alg-ctrl1-runge-kutta-shooting-and-collocation-transcription`

Accepted reader fixes for exact A/B input to the linear branch, sampled controls, post-insertion stage times, state-domain checks and constructed status. Read all instructions and every direct supplier interface. Found and repaired a further domain error: preimage of the compact smooth-data tube was called an open Newton domain. It now uses the affine preimage of open Omega_x at fixed valid stage times and Omega_u controls, explicitly requires C1 residual there, and distinguishes the compact bounding tube. Thus the finite-budget Newton supplier's actual hypotheses hold, including a seed in that domain and budget M_s=0; tolerance-root is not an exact root. Exact linear elimination remains finite and requires nonsingularity and domain validation. Finite-graph derivatives are distinguished from exact implicit-branch derivatives; quadrature bounds and optional adaptive estimates have separate statuses. Reviewed all direct item/reference consumers (QP, shooting equivalence, mesh convergence, error conversion, dispatcher, local KKT, two examples and A page): each uses a successful map or separately stated smooth local branch, and none relies on a compact set being open. No consumer statement/definition change is necessary; no affected consumer lies outside batch 100. Contract textual copies synchronized; manifest interface unchanged; existing ai-altered provenance remains appropriate and no judge stamp is present.

Risk review: complete. Continue in generated order.

## `lem-ctrl1-lqr-transcription-is-a-convex-quadratic-program`

Checked both proof steps and exact tableau, conic/QP and NLP conventions. Explicit stage induction and nonsingular implicit linear solves make stages and endpoints affine in node/control variables. Nonnegative quadrature weights and PSD sampled cost matrices make each pulled-back Hessian PSD; finite sums remain PSD. All constraints are assumed finite affine equations/inequalities, so compact nonpolyhedral controls are not silently treated as a QP. Representative sampling and the algebraic-only branch are explicitly distinguished from a smooth-data call. Singular implicit stage matrices are excluded. The repaired Newton domain is immaterial to this exact linear branch.

Risk review: complete. Continue in generated order.

## `lem-ctrl1-single-and-multiple-shooting-nlps-are-equivalent`

Read all three steps. With successful deterministic interval maps, recursive extension of each feasible control tuple gives a unique node tuple. Conversely the initial condition and continuity equations force these same nodes by finite induction; shared objective and node constraints therefore agree in both directions. This does not assert continuous feasibility, exact ODE integration, or uniqueness of an implicit equation with multiple branches. The success hypothesis and shared deterministic map cover the repaired open evaluation domain without consumer edits.

Risk review: complete. Continue in generated order.

## `thm-ctrl1-mesh-consistent-lqr-minimizers-converge`

Accepted the CC qualification in the weak-closedness fact. Read all four steps and exact reflexive-subsequence supplier under UL/DC/HB. Compact controls give norm boundedness; every subsequence has a weakly convergent subsubsequence. F_N subset F ensures a weak cluster limit remains feasible by assumed sequential closedness. Global discrete minimality, uniform objective consistency and strong feasible recovery bound its cost by J(u*); uniqueness identifies it with u*. Failure of full weak convergence has a single-functional positive-tolerance subsequence witness, contradicted by extraction. Reviewed weak-to-uniform supplier then yields state convergence. Recovery for extra constraints and existence of discrete global minimizers are hypotheses, not consequences of node sampling. The standard control-only piecewise-constant space admits cell averages; no automatic consistency rate is claimed.

Risk review: complete. Continue in generated order.

## `thm-ctrl1-objective-and-control-error-from-consistency-bounds`

Read all five steps and checked every displayed constant. Feasible segments and the exact quadratic expansion give G_u*[v-u*]>=0 and r/2 norm-squared growth. Two objective discrepancies plus eta and rho give exactly 2delta+eta+rho. Nonnegative sample weights summing to T and Q sample norm bounds justify the displayed state/quadrature/terminal delta. For recovery, both feasible states have tracking L2 norm <=E and terminal norm <=M_T; state difference <=C_s sigma and control norm <=sqrt(T)M_c yield exactly C_J. Cell averages give convergence under CC, and the pointwise Lipschitz bound integrates to sqrt(T)L_u h_N. Zero Q/P and zero state/control error reduce correctly; r>0 permits division.

Risk review: complete. Continue in generated order.

## `ex-ctrl1-chemical-dosing-linear-model`

Checked all three verification steps. x=1-exp(-t) satisfies the Volterra equation with constant dose 1 and initial zero. One midpoint step h=1 gives K1=1, X2=1/2, K2=1/2 and endpoint 1/2. Since e>2, exact endpoint 1-e^-1 exceeds 1/2. This example uses zero costs and does not apply the strictly-positive-R LQR minimizer theorem. It correctly distinguishes finite adaptive termination from an error certificate; all used stages are explicit and in the natural full state domain, so the Newton-domain repair has no effect.

Risk review: complete. Continue in generated order.

## `alg-ctrl1-finite-budget-transcription-solver-dispatch`

Independently checked every instruction and all nine direct supplier interfaces. Reader's canonical start tuple and tolerance map are sound: x,s>0 are checked, absent strict starts fall back without infeasibility, epsilon_d=min(tau_d,tau_c) meets shared dual/centered-complementarity tolerance, epsilon_g=tau_c bounds the nonnegative canonical complementarity gap. Dyadic canonicalization and exact residual audits certify only the stored QP; invalid PSD/rank data return or fall back through supplier statuses. Outer caps K=0 and N=0 still audit before stopping. Full multiplier vectors and SOC accepted points are preserved. The exact-Hessian branch uses the same active multipliers/Hessian pair; the repaired stage-domain definition is compatible. However the merit branch calls alg-sqp-merit-globalization-with-finite-budgets, which calls the still ill-formed batch-85 alg-sqp-exhaustive-active-set-qp-solve. Missing prerequisite is its authored affine-row/RHS interface (d_i and selected b_J); current proof/contract/manifest do not provide it. Inferring d_i=g_i(x) is a proposed repair outside this dispatch, not closure. Risk remains OPEN pending batch-85 supplier-first repair and owner resolution of reader:100:1/refuter:100:1. The reader's local tolerance/start repair is retained, but the complete procedure cannot be accepted yet.

Risk review: open. Continue in generated order.

## `ex-ctrl1-single-versus-multiple-shooting-two-intervals`

Read both verification steps. For x'=u every stage slope is the cell's constant control; sum b_i=1 gives exact half-cell increments v0/2 and v1/2. Abscissae in [0,1] keep evaluations in the horizon. The multiple-shooting equations uniquely force x1=v0/2 and x2=(v0+v1)/2, and substitution gives the identical quadratic objective with coefficient 1/4 for the running control cost. No optimizer or continuous error theorem is inferred. Explicit stages make the Newton-domain correction irrelevant.

Risk review: complete. Continue in generated order.

## `thm-ctrl1-local-sqp-kkt-convergence-on-a-transcription`

Read all five proof steps and exact SOSC, active-set SQP, finite-dimensional completeness and Banach contraction suppliers. This theorem uses the exact-Hessian branch, independent of the defective exhaustive-QP merit branch. Actual reduced NLP C3 regularity on an open neighborhood is assumed, so it is not inferred from residual-zero at one implicit stage. LICQ, strict complementarity and SOSC match the cited local Newton theorem; C3 on a smaller compact ball gives its locally Lipschitz Jacobian. In the mesh branch the frozen-Jacobian map T=z-A^-1 K has center displacement <=beta epsilon=R/2 and derivative bound beta L R=2beta^2 L epsilon<=1/2 on the radius-R ball, hence maps it into itself and contracts. epsilon=0 gives a singleton root ball directly. Bounded reconstructions give exactly 2 C_E beta epsilon plus reference error. Quadratic convergence at each mesh additionally assumes regular roots and a common local basin; no finite-budget, global-optimum or path-feasibility conclusion follows. The repaired open stage domain preserves all actual smooth-branch hypotheses.

Risk review: complete. Continue in generated order.

## Page, historical comparison and decision dispositions

Read the complete A page. Its choice qualification is a sufficient common assumption, its pointwise VI is restricted to control-only constraints, and all finite/mesh claims retain their prerequisites. Page disposition: reviewed_no_defect, audit_enrichment. No published mathematical defect was found in the interfaces reviewed, so no published-ledger edit or lock was necessary.

All 12 touched item raw hashes matched the reader-post snapshot before local edits, and differed from the pre-reader records. The pre/post fingerprints and reader report support the repair history; unavailable original pre-reader source text was not claimed read. Dependency additions, explicit DC-to-CC reminders, and coordinatewise AC clarification are classified as audit enrichment, with empty defect_ids. Closed local defect rows cover dimension typing, two choice hypotheses, stage input specification, the newly found open-domain error, and the QP-call parameters. The dispatcher remains escalated for the distinct unresolved producer, despite its sound local parameter repair.

Strict contract checking exposed stale quote/use maps and one missing declared dependency. Updated exact current relevant source excerpts, A1/F3 use maps and routine-step inputs; added def-countable-choice to weak-closure deps and its manifest. These mechanical corrections do not create defect rows or new obligations. No item Statement changed during this adjudication; the transcription Definition domain change was checked against every direct consumer.

## Sources and coverage limits

Read local full-text excerpts: Monnier, §2.4–§2.5.3, printed pp.21–24 (`research/numerical-optimization-dynamics-2026-10-16-batch-100.sources/monnier-optimal-control-ode-lecture-notes.txt`, lines 283–495); Hager §2, printed pp.249–252 (same .sources directory, hager-runge-kutta-optimal-control-2000.txt lines 80–245); Gros–Diehl Chapter 13 §§13.1–13.4, printed pp.230–244 (gros-diehl-numerical-optimal-control-draft.txt lines 8370–8980, collocation equations re-read at 8761–8800 after display truncation). Monnier uses the opposite maximization-adjoint sign; the authored minimization convention was checked directly, and Hager equations (2)–(4) agree with its terminal sign. Monnier’s continuity-to-weak-LSC shortcut is not used: the local proof supplies that missing argument. Hager’s stage-control parameterization is richer than the cell-constant specialization here; no optimal-control order is inferred from RK state order. Gros–Diehl retains collocation variables in the outer NLP, whereas this algorithm explicitly solves/eliminates internal stages and requires the actual reduced smooth branch for local theorems. The local proofs, rather than source outlines, discharge each assigned claim.

All routed items reviewed in generated dependency order with checkpointed risk dispositions before moving higher. Read every routed proof step and every cited direct prerequisite statement relevant to it; supplier proofs were inspected where the reported mismatch required it (batch-85 solver and nonsingularity). This is not a new audit of the entire transitive published library. No browser/source retrieval is claimed; these established arguments were checked using the supplied local source texts and exact library interfaces.

Next action: run focused mechanical checks, record the expected open-risk result, and hand supplier escalation to the engine/owner.

## Local checks and handoff

- Precheck on the two locally changed items: 1 proof checked, 0 failures; algorithm has no phase proof.
- Rendercheck on both changed items and routed A page: 3 files, YAML and real KaTeX parsing pass.
- `manifest-deps` on batch-100 manifest: 27 items, 0 normalized, 0 errors.
- Strict proof-contract check: 27/27 items, 0 errors, 1 existing shotgun-bracket warning in error-conversion step 4.1. Its four fact tags each support the explicit estimates/recovery; no mathematical defect follows from that heuristic.
- Final `node tools/proof-layout.mjs items/alg-ctrl1-runge-kutta-shooting-and-collocation-transcription.md items/lem-ctrl1-control-box-is-weakly-closed.md`: 2 items, 3 steps, 0 defects. No item edit or formatter followed this final layout pass.
- Risk report without require-reviewed: 0 errors, 27 items routed. With `--require-reviewed`: exit 1, exactly the dispatcher risk review remains open; the other 23 HIGH/CRITICAL reviews are complete. This failure is expected evidence of the unresolved supplier and is not waived.
- Owning cross-batch dependency input updated with the open merit/exhaustive-solver route; `frontier-dependency-ledger refresh --run numerical-optimization-dynamics-2026-10-16` succeeded.
- Decisions inventory: exactly 15 owed obligations (12 touched, 1 page, 1 reader, 1 refuter), no extra or duplicate decisions. Six local confirmed defects have closed 3a-adjudicate ledger rows; the unresolved supplier findings remain escalated without fabricated closed rows.

Live state was checked against `.autopilot/numerical-optimization-dynamics-2026-10-16` and recent git history: run is active at Step 3a, with no worker in flight at that status read; no RESUME file was used as authority. No engine state was changed, no agents dispatched, no judge/stamp cycle initiated, no published content edited, and no commit or publication performed.

**Outstanding owner action:** batch 85 must author the exact affine-row/RHS convention in `alg-sqp-exhaustive-active-set-qp-solve` (and synchronize/check its own affected carriers). Then independently review the actual corrected current supplier and resolve `reader:100:1`, `refuter:100:1`, and `touched:100:alg-ctrl1-finite-budget-transcription-solver-dispatch`; complete its risk review only after that resolution. The original reader observation remains historically unbound, with the dispatch-authorized disposition and immutable producer evidence preserved in decisions.
