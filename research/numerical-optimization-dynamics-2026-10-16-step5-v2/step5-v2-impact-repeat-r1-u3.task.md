# Step 5 repair: impact-repeat, round 1, unit 3

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/impact-repeat-1.json.







Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-impact-repeat-r1-u3.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"impact-repeat",round:1,unit:"3",input_sha256:"533fe4d149a674c6140df26b758011efe81d0c2d3e9f5d6ede346b94b1f16f92",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.



Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.







All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-ctrl1-runge-kutta-tableau-and-stage-collocation",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "location": "Definition",
    "reason": "The cited explicit stage-map requires an open time-state domain containing its base point, which the supplied f on [0,T] does not provide at t=0. Replaced the invalid invocation by the finite lower-triangular recursion with the existing finite-horizon membership and failure checks. No extension or choice principle is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-ctrl1-runge-kutta-shooting-and-collocation-transcription",
    "severity": "fatal",
    "defect_type": "logic",
    "location": "Definition",
    "reason": "Defining defects without imposing d_j=0 leaves independent node states unconstrained: for f=0, x0=0, N=1, and an admissible X_{1,0}=1, the old exhaustive constraint list admits a spurious feasible tuple. Both multiple shooting and collocation now impose every continuity equality, and the complete constraint list and KKT equality residual explicitly include them. The existing independent terminal-node domain check already resolves the Step-4 concern and was preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-bouncing-ball-transverse-event-error-and-reset",
    "severity": "nonfatal",
    "locus": "statement",
    "reason": "Confirmed nonfatal endpoint misdescription: 26/25=2600/2500 < (51/50)^2=2601/2500, so 1 < sqrt(26/25) < 51/50. The reconstructed guard is -1/2500 at 51/50, but zero at the explicitly reported time sqrt(26/25). Every verification step uses that reported root, not the bracket endpoint, so the event-time and reset bounds remain valid. Removed only the words \"the upper endpoint\" from the Example.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-pick-freeze-monte-carlo-sobol-estimators",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "affected_use": "items/alg-pick-freeze-monte-carlo-sobol-estimators.md, Definition: explicit empirical covariance and the returned Jacobian sandwich.",
    "reason": "A centered row times its transpose produces a scalar and invalidates the plug-in covariance output. The repair transposes the first factor instead, yielding all centered coordinate cross-products and restoring the stated covariance interface.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-box-muller-finite-midpoint-tail",
    "severity": "fatal",
    "defect_type": "logic",
    "location": "statement",
    "status": "fixed",
    "source_context_sha256": "7edd0cbdb6b59a7262ae4244fc7c15dd32bfa4657f1e96274e857ab5de69cbbe",
    "before_sha256": "24fa7e025a581b04462edd9e8cc51e82e5e0e81e6766a5114359d3f565898978",
    "post_sha256": "cbf9f9eb2bc0c872cab0b54b24e52a76d768fd67374620d14e981451c4463863",
    "reason": "The Example claimed the midpoint grid never reaches the cutoff although K=0 attains sqrt(18 log 2). Replaced that false endpoint assertion with explicit attainment at K=0 and no exceedance; verification and ideal strict-tail probability remain valid.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-dyadic-floating-point-format-and-directed-rounding",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "locus": "definition",
    "before_sha256": "73541501b3683dc0c55a7e98ef5a8c5f5f547a5178d4cf63d7f1378a11bbb01f",
    "post_sha256": "bc0f65aad631b54526cf2447f4e15be131ab052cc553375d0e72df034918df9a",
    "finding": "The original overflow clause assigns the corresponding infinite sentinel to a directed result. With p=2, emin=0, emax=2, Nmax=6: downward rounding of x=7 to +infinity exceeds x, and upward rounding of x=-7 to -infinity is below x. This violates the defining lower/upper enclosure interface, rather than merely its citation. Repaired by specifying (rd,ru)=(Nmax,+infinity) for positive overflow and (-infinity,-Nmax) for negative overflow, retaining overflow status and infinite error bound in both cases.",
    "status": "fixed",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-pseudo-arclength-continuation-with-certified-local-corrector",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "Definition: valid seed and Output; procedure step 1",
    "finding": "Seed-only returns promised strict contraction data not required of valid seeds; G=(x+x^3,lambda) on the unit ball is an explicit counterexample.",
    "correction": "Require positive seed radius and the complete existing augmented-residual contraction certificate, whole-ball tube/chart inclusion and initial angle record; preserve the output promise.",
    "status": "fixed",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-pseudo-arclength-continuation-with-certified-local-corrector",
    "severity": "nonfatal",
    "defect_type": "logic",
    "locus": "Definition: procedure steps 1 and 6",
    "finding": "The step-6 loop-back targeted a step whose opening unqualified initialization could reset the trace, counts and supplied orientation on every visit, contrary to the explicit accepted-count and budget contract.",
    "correction": "Make initialization entry-only and explicitly retain list, counts and current previous orientation on the step-6 loop-back.",
    "status": "fixed",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update",
    "id": "alg-pseudo-arclength-continuation-with-certified-local-corrector",
    "reason": "Every direct item consumer found in current deps and references is a draft in the frozen frontier; no published consumer or outside-frontier affected use was found. The owning draft page remains sound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-rkc-eigenvalue-stability-does-not-control-nonnormal-growth",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "locus": "facts-block",
    "finding": "F3 uses x_1^2+x_2^2 although the cited definition indexes R^2 by {0,1}. The explicit matrix witness and its computed norm remain correct.",
    "correction": "Changed F3 to x_0^2+x_1^2 and renamed the proof witness from e_2 to v; synchronized the assigned contract mirrors.",
    "reason": "The supplier explicitly defines x_k only for k<n. At n=2 the valid indices are 0 and 1; the corrected sum gives 4+1/4=17/4 for the image vector.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-low-rank-adi-conditional-convergence-bound",
    "class": "accuracy",
    "subclass": "citation-inaccurate",
    "severity": "fatal",
    "location": "facts-block",
    "locus": "F3",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "The original F3 omitted the minus sign from the spectral disjointness condition for X -> AX+XB. The scalar maps with (A,B)=(-1,-1) and (1,-1) refute both directions of the erroneous restatement. Corrected F3 to sigma(A) intersect (-sigma(B)) empty, equivalently sep(A,-B)>0; step 1.2 already establishes this condition for B=A*. Only the assigned fact and its contract use_explanation changed.",
    "before_sha256": "6ea5f5cbccfb9c8a2e0a0b6b577dc6e3007ad390f63c74dd7775221f2e6d5659",
    "post_sha256": "ba514698752bfcd776d00f031f824d0f55c58965b4b5761b714c761b0cab5f5f",
    "model": "gpt-6.1-sol",
    "context_sha256": "7701293efa2d3002f1d32ddd35f2c67215b190f05378f6d29ffd25f03fc09d6c",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-composite-simpson-asymptotic-error-expansion",
    "locus": "facts-block",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "F6 omitted the integrability hypothesis of thm-additivity-over-subintervals. Restored it and the restriction-integrability conclusion. Both actual uses in proof step 3.1 already satisfy the hypothesis by step 1.2, so the asymptotic claim and proof remain sound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "prop-local-leapfrog-and-symplectic-euler-are-symplectic",
    "severity": "nonfatal",
    "location": "Facts & Assumptions, F4",
    "affected_use": "Proof 2.1 invokes F4 to identify the Jacobian of each admitted shear composition.",
    "invalidated_claim": "F4 asserts that derivatives multiply in reverse written composition order; the cited chain rule preserves the written order of outer and inner factors.",
    "minimality": "Replace only F4 by D(g∘f)(z)=Dg(f(z))Df(z), explicitly evaluating the outer derivative at f(z). The finite-product identity, Statement, contract and page need no change.",
    "reason": "The inaccurate chain-rule wording is repaired. The symplectic product calculation already applies to either factor order, so it has no essential dependence on the erroneous reversal claim.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-uniform-grid-and-difference-operators",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "section": "Definition",
    "reason": "Interior product was declared on edge arrays and annihilated the nonzero coordinate-zero vector. Corrected its domain to interior-node arrays, explicitly defined nodal restriction and the edge norm, and distinguished a full-nodal seminorm from the zero-endpoint norm. No formula or dependency was changed.",
    "post_sha256": "07973cbe79d29b9bf2ac1fe066dad3db7df68c752ecc33514ba69032c68530a6",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "ex-resource-allocation-barrier-central-path",
    "locus": "proof-step",
    "location": "Verification 2.1",
    "reason": "The rejection applies the smooth equality multiplier convention to the conic LP variable y. The explicitly listed supplier def-conic-optimization-primal-dual-models defines the standard-form LP dual by A^T y+s=c, and def-barrier-central-path-and-newton-residuals likewise has r_d=c-A^T y-s. Here A=(1,1), c=(1,2), and s=lambda, so y=1-lambda_1=2-lambda_2 gives both 1-y-lambda_1=0 and 2-y-lambda_2=0. In the smooth Lagrangian convention the equality multiplier is instead nu=-y=lambda_1-1=lambda_2-2. The central-gap supplier explicitly supports both conventions. Thus the displayed y and gap 2/t are valid; no item edit is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-phase-border-implies-periodic-bvp-linearization-bounded-inverse",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "locus": "facts-block",
    "affected_use": "F3 and proof steps 1.1 and 2.2 claim global continuation solely from local existence and maximal existence/uniqueness.",
    "reason": "F3 claimed bounded-solution continuation, but neither cited Statement supplied it. Steps 1.1 and 2.2 therefore lacked their global-existence premise. Repaired F3 using the published fixed-interval linear-matrix ODE lemma, with an explicit block augmentation for continuous forcing and Picard-Lindelof uniqueness.",
    "repair": "Use the existing global matrix-ODE supplier, explicitly homogenize affine forcing in F3, and obtain full-interval solutions before estimating them. Statement and K_L unchanged.",
    "post_sha256": "32fa4251b3087567fc4637bcb96371070622c33b440cdc39e2d94b25a4354be3",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-separated-simple-floquet-multiplier-perturbation-bound",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "locus": "statement",
    "affected_use": "The Statement and step 4.1 identify an eigenvalue of A+E as a Floquet multiplier solely because A is monodromy.",
    "reason": "The estimate concerns eigenvalues of A+E. A being monodromy does not make those eigenvalues Floquet multipliers: A=diag(1,1/4), E=diag(0,-1/4), lambda0=1/4, rho=delta=1/4 and R=2 satisfy q=kappa=1 and Rq^2 delta=1/2<1, yet lambda=0 belongs to D and cannot be a monodromy eigenvalue. The Statement and step 4.1 now correctly require A+E to be monodromy for the Floquet interpretation. The general matrix enclosure is preserved.",
    "repair": "Require A+E to be monodromy in Statement and step 4.1. Preserve the matrix perturbation bound and qualify the derivative interpretation to match the differentiable-eigenpair interface.",
    "post_sha256": "09dc6f76ba1cf8226ce41700ee9e64c4d746b99932ac2eb164b46dd925853ff8",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-implicit-stiff-time-stepper-with-consistent-starts",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "locus": "definition",
    "status": "fixed",
    "reason": "Confirmed a dependency-interface defect: both cited BE/RK definitions require the base pair in D, while the original wrapper required only defined field evaluations. With D=(0,2) x R, t_0=0, t_1=1, f=0 and Y_0=0 the residual G(z)=z is defined on R but the first cited call is inadmissible. Added (t_0,Y_0) in D and a test before later BE/RK calls; a finite-tolerance RK update need not remain in its next base-time slice.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-certified-spatial-branch-and-bound",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "locus": "Definition: lower-bound comparisons and split selection",
    "reason": "An empty-box proof may omit ell, so the former minimum selection on all nonclosed leaves was undefined. Certified-empty leaves are now retained with proofs and excluded from all comparisons and selection; evaluated leaves not certified empty must supply finite bounds.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update-required",
    "id": "alg-certified-spatial-branch-and-bound",
    "reason": "All seven direct item dependency/reference consumers are draft members of the frozen frontier. The only page reference is their draft owning page; no published or outside-frontier consumer was found.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-tensor-simpson-force-error",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "undefined-notation",
    "location": "proof-step",
    "locus": "1.1, concluding use in 3.1",
    "status": "fixed",
    "reason": "Original k=1,2 conflicts with the supplied coordinate domain {0,1}. The scalar argument is uniform in the component, so changing to k=0,1 repairs this indexing slip without a new premise or estimate. Coordinate derivative domination by the Euclidean norm is now explicit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-safeguarded-levenberg-marquardt-global-stationarity",
    "severity": "nonfatal",
    "location": "facts-block",
    "fact": "F2",
    "disposition": "fixed",
    "reason": "The large-damping citation omitted J(x)^T r(x) != 0, falsely promising a positive-prediction trial even at a stationary point. Restored that exact supplier hypothesis. The proof already limits its uses to nonstationary iterations, so its convergence argument requires no change.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-sqp-l1-exact-penalty-merit",
    "model": "gpt-6.1-sol",
    "context_sha256": "8778c347fab7db70f72ee2e37bd6bfc43087c0de89304cfd4a5b8cfb794222f2",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "location": "Proof 2.1",
    "status": "fixed",
    "reason": "Proof step 2.1 falsely identifies the Armijo reference with the model at tp. For the assigned scalar QP witness, m(s)=2+2s+max(1+s,0), p=-2 is its feasible QP minimizer, D=5, m(0)-sigma*t*D=9/8, and m(tp)=-1. Repaired the invalid comparison by deriving the reference m(0)+sigma*t*(m(p)-m(0)); Definition and dependency interface remain identical.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-sqp-merit-globalization-with-finite-budgets",
    "model": "gpt-6.1-sol",
    "context_sha256": "fbf48a90cbf4a092440c7f1f73b59cc5a6c09b487c9ece78c5dc13d66dc28947",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "location": "Definition step 2; Facts F3; Proof 1.1",
    "status": "fixed",
    "reason": "The SOC supplier requires the complete equality map of its input program. The original call named only h_E of the original program, without an auxiliary program; dependent Jacobian rows do not imply redundant nonlinear equalities. For example, at x=1, h=(z,z+(z-1)^2), f=0 and B=1 give h(x)=(1,1), Dh(x)=(1,1)^T, E={1}, p=-1 and h(x+p)=(0,1). Thus the retained row is corrected while the omitted nonlinear equality need not be. Repaired the call by explicitly supplying the auxiliary C2 program with equality map h_E and unchanged f,g,U,B. Consistent row reduction preserves its QP feasible set, so p remains an admissible SQP step and (h_E,g_J) meets the supplied rank and linearized-residual interface. Full original merit is retained.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-rooted-tree-generating-function-series",
    "class": "accuracy",
    "subclass": "citation-inflated",
    "severity": "fatal",
    "location": "facts-block",
    "disposition": "fixed",
    "finding": "F5 removes the real-argument restriction of its supplier, so the original proof does not establish the claimed complex derivatives. The repair states that restriction and proves the complex extension using uniform difference-quotient tails; absolute exponential majorization justifies the formal-to-analytic identities.",
    "adjudication_ref": "research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-repeat-r1-u87.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-finite-sectional-forward-euler-global-first-order-error",
    "class": "accuracy",
    "subclass": "citation-inflated",
    "severity": "fatal",
    "location": "facts-block",
    "disposition": "fixed",
    "finding": "F1 attributes exact mass-simplex invariance to a Statement that supplies only nonnegativity and coordinate/moment bounds. The proof relied on that stronger attribution to bound the exact path. The repair states the actual coordinate bounds and uses their compact box; F3 puts the numerical mass simplex in that same box.",
    "adjudication_ref": "research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-repeat-r1-u87.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-iteratively-regularized-gauss-newton-step",
    "severity": "nonfatal",
    "locus": "frontmatter",
    "finding": "The title labels an explicitly unanchored LM procedure as iteratively regularized Gauss–Newton. The Clason reference locator also incorrectly identifies equation (115), printed pp. 107–111 and PDF pp. 119–123.",
    "correction": "Changed title to Unanchored Levenberg–Marquardt step with explicit early stopping, synchronized the owning manifest title, and corrected Clason's locator to equations (11.14)–(11.15), printed p. 106/PDF p. 109, with comparison (11.26)–(11.27), printed p. 112/PDF p. 115. Definition unchanged.",
    "status": "fixed",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/2001.00617",
      "https://arxiv.org/pdf/0803.2373"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-index-one-eigenvector-following-step",
    "phase": "repeat",
    "round": 1,
    "unit": "91",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "Definition, introductory mode-reference clause and step 2 overlap description",
    "finding": "A positive eigenpair residual tolerance and a reference-overlap test do not certify that the stored direction is an exact lowest eigenvector. The rotated diag(-1,1) example passes every supplied check.",
    "status": "fixed",
    "correction": "Describe the signed approximate reference and overlap screening accurately; preserve the spectral tests, validated index-one certificate, finite procedure and exact Newton solve.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-sdc-finite-sweeps-raise-order",
    "locus": "proof-step",
    "location": "Original Proof 2.1; repaired Proof 1.3, 2.1, and 3.1",
    "defect_type": "dependency_citation",
    "severity": "fatal",
    "status": "fixed",
    "reason": "F4 previously lacked verified convex-tube, polynomial-containment, and branch-uniqueness hypotheses. The proof now constructs uniformly controlled local convex cylinders and verifies each hypothesis without strengthening the Statement.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no-update",
    "id": "thm-sdc-finite-sweeps-raise-order",
    "reason": "The assigned carrier and its direct mathematical suppliers are draft; this proof-only repair changes no Statement or Definition and yields no published-consumer maintenance event.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-chaos-quadrature-coefficient-estimator",
    "locus": "Definition",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "Evaluability at finitely many cubature nodes does not imply L2 membership or existence of exact integral coefficients: uniform [0,1] and u(y)=1/y for y>0, u(0)=0 gives a divergent constant coefficient. The exact-coefficient/projection sentence is now conditional on L2 membership; the finite estimator is preserved for all evaluable real inputs.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "ex-wave-cfl-endpoint-and-energy-breakdown",
  "lem-dirichlet-grid-poincare-inequality",
  "lem-dirichlet-grid-summation-by-parts",
  "lem-periodic-advection-amplification-symbols",
  "prop-index-one-eigenvector-step-is-the-local-newton-correction",
  "thm-bounded-mixed-integer-gap-certificate-sound",
  "thm-ctrl1-local-sqp-kkt-convergence-on-a-transcription",
  "thm-ctrl1-mesh-consistent-lqr-minimizers-converge",
  "thm-ctrl1-objective-and-control-error-from-consistency-bounds",
  "thm-dirichlet-leapfrog-discrete-energy",
  "thm-finite-budget-spatial-bnb-terminates",
  "thm-signed-dobrushin-stability-with-force-defect",
  "thm-mean-field-vortex-blob-error-budget",
  "thm-nearest-neighbor-cfl-domain-condition",
  "thm-pick-freeze-sobol-ratio-joint-clt-and-mcse",
  "thm-pseudo-arclength-finite-trace-partial-correctness-and-termination",
  "thm-signed-regularized-vorticity-characteristics-preserve-total-variation",
  "thm-spatial-bnb-eventual-epsilon-termination",
  "thm-sqp-merit-globalization-finite-budget-status"
]


