# Step 5 repair: impact-initial, round 1, unit 2

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/impact-initial-1.json.



Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-impact-initial-r1-u2.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"physics-remaining-80-2026-10-17",phase:"impact-initial",round:1,unit:"2",input_sha256:"f35a0c60231cc46cc7a2ecae5035cce2d49ad0ba7a73bf486eda14ccf8968a19",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-remaining-80-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.



Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-emg-geometry-units",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "finding": "The original SI paragraph attributed the shared light/clock identification in a curved-model definition to post-em-minkowski-physical-model, whose Postulate and physical_scope expressly exclude gravitational curvature. A formulation-prerequisite edge cannot extend that physical scope. Replaced this attribution with an explicit independent model-local choice of the same SI c for E, j and x0; restricted the flat postulate interpretation to the flat specialization. All numerical constants, tensor formulas and units are preserved.",
    "evidence": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u1.json",
    "proposal_only": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-emg-flat-electromagnetic-compatibility",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "finding": "The Statement and proof steps 2.4, 2.5 and 3.2 unconditionally call the contraction the adopted matter force/power density, although their A3 and post-em-lorentz-coupling clause (ii) require a specified applicable matter model. Mere continuity of rho,J cannot establish that premise. Preserved the full C1/continuous Maxwell equivalence and algebraic contraction identities; qualified only their physical interpretation by the supplier exact matter-model hypothesis throughout Statement, scope, Given, A3 and proof. Also distinguished first-order C1 equations from applying the smooth curved postulate.",
    "evidence": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u1.json",
    "proposal_only": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-new-finding",
    "subjects": [
      "post-em-minkowski-physical-model",
      "post-em-lorentz-coupling"
    ],
    "reason": "The current published suppliers correctly restrict themselves respectively to flat spacetime and to a qualifying explicit continuum matter model. Both defects were in their assigned draft consumers. No published carrier was edited or adjudicated.",
    "proposal_only": true
  },
  {
    "ledger": "defect-ledger",
    "id": "lem-emg-temporal-scalar-positive-symmetric-reduction",
    "status": "fixed",
    "severity": "nonfatal",
    "location": "Facts & Assumptions L1; Proof 3.1, 4.1, 5.1",
    "reason": "Record the incomplete full-periodic-domain restatement and its explicit state-space coefficient realization repair. Original statement remains unchanged and no full-field extension or coupled solution existence is asserted.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "lem-emg-temporal-scalar-positive-symmetric-reduction",
    "status": "fixed",
    "severity": "nonfatal",
    "location": "Proof 2.1",
    "reason": "Record the Step-4 digest presentation concern as verified and repaired: for output row r the summed spatial derivative is -g^{ri} partial_i pi_0, so the coefficient of partial_k pi_0 is -g^{rk}; the previously displayed principal matrices were already correct.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-emg-electric-stress",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "The rejected Example asserted anisotropy at zero amplitude, contradicting its own displayed zero spatial matrix. The Example now defines isotropy and states the exact nonzero criterion; Verification steps 1.1 and 2.1 prove both directions, including the isotropic zero tensors.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-emgmath-ml-b02",
    "defect_id": "remaining80-step5-initial-r1-u15-coordinate-metric",
    "severity": "fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "reason": "The Example does not identify its length-coordinate frame as orthonormal. The supplier explicitly says length coordinates need not be orthonormal. In coordinates x^1=2y^1 on standard Minkowski space with x^0=y^0, g_11=1/4, so the prescribed F_01=-E0/c gives E_U^1=4E0, not E0, and q=chi E_U fails. Specifying g_ab=diag(-1,1,1,1) repairs this missing hypothesis and licenses every contraction and component divergence.",
    "location": "Example opening conventions; Verification steps 1.1 and 2.1",
    "repair": "Declare g_ab=eta_ab=diag(-1,1,1,1) in the supplied global coordinate frame and explicitly check inverse metric, vanishing connection and U normalization. Synchronize only the owning manifest Example and first-step contract; correct contract sign/step descriptions.",
    "evidence": [
      "items/ex-emgmath-ml-b02.md",
      "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u15.json"
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "lem-emg-conformastatic-chart-is-lorentzian",
    "outcome": "confirmed_nonfatal",
    "proposed_status": "fixed",
    "reason": "Local F1 did not spell out the orientation attributed to it in step 2.1. Expanded F1 with the supplier Definition’s coordinate orientation and C_p^+ condition, including n^0=H>0. Existing contract already quotes that complete Definition; proof derivations and Statement are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "cor-emg-regular-counterpoised-sphere",
    "outcome": "false_positive",
    "proposed_status": "dismissed",
    "reason": "The objection misclassifies thm-emg-smooth-counterpoised-dust: its current carrier is kind theorem, domain mathematics, and its complete proof verifies explicit formal tensor equations without adopting physical postulates or empirical premises. The formal-system Definition explicitly treats them as mathematical conditions. The spherical H is smooth and positive on R^3 and has Laplacian -3ab^2/Psi^5<0, so the exact supplier hypotheses hold. The mathematical dependency is permitted; no carrier edit is licensed or needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "ex-emgmath-ml-b06",
    "outcome": "false_positive",
    "proposed_status": "dismissed",
    "reason": "The velocity, acceleration and force identity come from a mathematical theorem about formal equations, not a physics-theorem or physical postulate. Its proof step 2.2 explicitly derives a^0=0, a^i=-c^2 H_i/H^3 and rho a^b=sigma F^b{}_c U^c. The sphere has rho>0 everywhere, so division is legitimate. The example applies this exact mathematical interface with no empirical inference. No carrier edit is licensed or needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-ledger",
    "proposed_action": "no-update",
    "reason": "No published item was changed and no potentially defective published consumer was discovered in these assigned uses. The sole repair expands a local Fact; its Statement is unchanged, so no direct-consumer propagation or maintenance event is generated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-emg-matter-observables",
    "classification": "confirmed_nonfatal",
    "proposed_status": "fixed",
    "location": "Definition, observer/tetrad paragraph",
    "finding": "Any tangent-space basis was incorrectly called a tetrad despite the explicit smooth orthonormal-frame supplier.",
    "repair": "Define smooth local tetrads on an open set, require the diagonal Lorentz metric matrix and distinguish their pointwise values from fields.",
    "evidence": "items/def-emg-matter-observables.md; items/def-emg-geometry-units.md, Definition paragraph 2; current review hashes in this report.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-emg-ml-b03",
    "classification": "confirmed_nonfatal",
    "proposed_status": "open",
    "route": "owning-frontier-lane",
    "location": "Example, pure magnetic paragraph; Verification 1.1",
    "finding": "The proof establishes unequal spatial stresses only in the chosen observer frame, which alone does not exclude a moving perfect-fluid representation. This separate Step-4 concern is confirmed and remains outside this assignment.",
    "evidence": "Verification 1.1 gives T^{ab}=diag(u,u,u,-u), u>0, and zero mixed components. For any putative perfect-fluid form, T^{0i}=(epsilon+p)U^0 U^i/c^2=0 with U^0 nonzero. If epsilon+p is nonzero, all U^i vanish and the spatial stress must be isotropic, a contradiction. If epsilon+p=0, T=p g also has isotropic spatial stress, again a contradiction. The item does not supply this exclusion argument.",
    "minimal_repair": "Append this two-case algebraic argument to Verification 1.1; retain the existing claim and component calculations. No supplier change or new prerequisite is needed.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-emg-weak-slow-test-motion",
    "proposed_status": "OPEN",
    "severity": "fatal",
    "defect_type": "logic",
    "origin": "Step-4 batch-19 digest concern, independently checked in this dispatch; distinct from the assigned judge tuple",
    "location": "items/pthm-emg-weak-slow-test-motion.md:52,80,82; supplier items/thm-emg-weak-slow-test-lorentz-limit.md:75",
    "affected_use": "Proof 1.1 asserts exact matching of the mathematical supplier hypotheses, and 2.1 imports its uniform remainder and trajectory estimate, without requiring the common state set to lie in K x R3. The bounds on K cannot control trajectories outside K.",
    "invalidated_claim": "The stated uniform scaled acceleration remainder and finite-time comparison estimate need not hold for the item as written.",
    "minimality": "Add an explicitly named compact convex Q subset K x R3 containing both scaled trajectories, carry that exact condition through Given/F2 and the hypothesis check in 1.1, and reconcile its owning contract. Do not restrict the fields, alter the conclusion, or impose Maxwell equations.",
    "counterexample": "Use SI numerical c=L=alpha=m=q=1, Omega=R3, K the closed unit ball at 0, phi=0, e=(1,0,0), b=0, and a smooth positive lapse a(X) equal to 1 near K and 2 near the closed ball of radius 1 centered at X*=10e. Set g=-a(X)^2 (dx0)^2+sum_i(dxi)^2 and F=-epsilon dx0 wedge dx1, with A=epsilon x1 dx0. All metric remainders and their derivatives vanish on K. Start at X*, W=0 and take S*=1/4. In the distant constant-lapse patch the exact proper-time Lorentz solution has W_epsilon(S)=2S e/sqrt(1+epsilon S^2) and X_epsilon(S)=X*+[2(sqrt(1+epsilon S^2)-1)/epsilon]e, whereas W_N=Se and X_N=X*+(S^2/2)e. Both stay in the common compact convex Q=closed_ball(X*,1) x closed_ball(0,1), obey the uniform speed bound, and f=(W,e) has derivative norm 1 there. Q is outside K. At S=0 the exact scaled acceleration is 2e instead of e, so the claimed remainder has norm 1 for every epsilon, contradicting a uniform C_r epsilon bound. At S*=1/4 the velocity error tends to 1/4, also contradicting the finite-time conclusion.",
    "reason": "Confirmed fatal omission independently of the rejected Maxwell-sector objection. The assignment explicitly forbids editing false-positive items, so no carrier or contract was changed. This is an open owner referral, not a repaired or accepted theorem.",
    "required_owner_action": "Authorize a separate native distinct-finding repair of this assigned frontier theorem and its owning contract, then obtain a fresh current review. The run must not certify with this finding open.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "canonical_defect_ledger": [
      {
        "id": "def-emg-boundaryless-completeness-domain",
        "outcome": "confirmed_nonfatal",
        "proposed_status": "resolved",
        "finding": "The Christoffel proposition Statement supplies coefficients, whereas its F1 cites the fundamental theorem for existence. The latter already proves existence and uniqueness for exactly the supplied smooth Riemannian metric, so this is an attribution defect, not a missing mathematical existence argument. Corrected the Definition to cite that theorem directly and declared its mathematical dependency.",
        "uncertain": false
      },
      {
        "id": "lem-emg-positive-square-root-smoothness",
        "outcome": "confirmed_nonfatal",
        "proposed_status": "resolved",
        "finding": "F3 incorrectly attributes a chain rule to the algebra-of-derivatives theorem. Both uses in steps 1.1 and 3.1 need only its stated product rule: P prime(t)=2t and (s times s) prime=2s s prime. Removed the unused chain-rule attribution and stated the exact product rule. The positive-root smoothness proof and Statement are unchanged.",
        "uncertain": false
      },
      {
        "id": "def-emg-local-potentials-and-circle-data",
        "outcome": "false_positive",
        "proposed_status": "false-positive",
        "finding": "The cited chain-rule Statement restricts the intermediate space to R^n but does not require U to have dimension n. Its dependency defines total differentiability on U open in R^m, with independent m,n, and its proof explicitly handles all three dimensions. Here m=4,n=1,p=2: for E(t)=(cos t,sin t), D(E composed with f)=(-sin(f),cos(f)) df, or dg=i g df. Thus -i g inverse dg=df. The rejected dimensional restriction is absent from the actual supplier.",
        "uncertain": false
      }
    ],
    "published_consumer_ledger": [],
    "published_consumer_reason": "All 13 direct dependency/reference item consumers are draft members of the frozen frontier. No affected published consumer or outside-frontier repair was identified.",
    "outside_lane_referrals": [
      "lem-emg-sphere-flux-holonomy"
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "alg-emg-rational-electrovac-verification",
    "model": "gpt-6-luna",
    "context_sha256": "3ec444df1ca4833498edb3069704636ff91b39b49d0b6ed4295d9f41352830b3",
    "proposed_disposition": "fixed",
    "severity": "nonfatal",
    "reason": "Instruction 3 omitted the explicit inverse-metric sums for F^{ij} and F_j{}^k. The standard intended raising operation is uniquely recoverable from g^{-1}, so this is a nonfatal procedure-specification omission, repaired by defining both sums with indices 0 through 3. All residual and contraction formulas are preserved.",
    "evidence_path": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u21.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "def-emg-xs-geometric-electrovac",
    "model": "gpt-6-luna",
    "context_sha256": "5e67ae28c7098294359ab7293458314cc61bacafd45afa2f2c65ac16ac86eec5",
    "proposed_disposition": "fixed",
    "severity": "nonfatal",
    "reason": "The integration supplier requires an orientation-preserving diffeomorphism. The previously undefined word reparametrization omitted that precise hypothesis; it now explicitly means a smooth bijection with smooth inverse and orientation-preserving differential. This is a nonfatal hypothesis clarification. The judge's suggested higher-degree unbranched covering is not an example for a connected sphere, which has no such cover; the repair follows the actual supplier, not that example.",
    "evidence_path": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u21.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "def-emg-xs-rn-data",
    "model": "gpt-6-luna",
    "context_sha256": "08fb5802ba5e1bcfd174d6ac0f27cef3e10401fd9188f01c08d8b4293593e96a",
    "proposed_disposition": "false-positive",
    "severity": null,
    "reason": "The cited Schwarzschild definition is domain: mathematics and explicitly treats c, G_N and the mass parameter as formal real constants, not measured inputs. Only its clause (b) explicit stereographic atlas is used here. The rational chart inverses, product structure, round metric, smooth pole potentials, both signs of f and empty J were checked. No physical premise enters this definition.",
    "evidence_path": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u21.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "lem-emg-xs-kn-rational-calculus",
    "model": "gpt-6-luna",
    "context_sha256": "e0381800a5cb8d3bbadcbacdbc37bbf3fee763b082eb94a1d0c3ec8af17e41c6",
    "proposed_disposition": "false-positive",
    "severity": null,
    "reason": "The geometric-electrovac supplier is domain: mathematics, defining a quadratic tensor and explicit differential equations without adopting a physical law. F7 uses precisely that inverse-metric contraction. Replayed the full exact Fraction checker: 243 polynomial equalities passed, including all ordered Ricci and residual entries; Sigma, Delta and b remain the only chart divisors. The algorithm clarification agrees exactly with the checker's two index-raising contractions; the flux reparametrization clarification is unused.",
    "evidence_path": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u21.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "prop-emg-xs-rn-curvature",
    "model": "gpt-6-luna",
    "context_sha256": "e56cc89711e054a4e5c0f7f657863f38608ced23e7360aa7b575550826537760",
    "proposed_disposition": "fixed",
    "severity": "nonfatal",
    "reason": "The zero-parameter flatness assertion lacked its RN metric premise and a local argument; vanishing scalar contractions alone are insufficient. Added the exact RN definition and coordinate curvature prerequisite. Step 2.1 now gives the smooth diffeomorphism Phi(t,r,p)=(t,rp), its inverse, the pulled-back constant metric, and its zero connection and curvature. This elementary omitted calculation is nonfatal and fully repaired; the Statement and extension obstruction remain unchanged.",
    "evidence_path": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u21.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "thm-emg-xs-rn-verification",
    "model": "gpt-6-luna",
    "context_sha256": "87d7dba80a1f3be58e067bbe940af4d6689df29b3706ce05e9daab8cb6296a69",
    "proposed_disposition": "false-positive",
    "severity": null,
    "reason": "The stress supplier is domain: mathematics. Its clause (d) is the formal quadratic scaling Q(alpha F)=alpha^2 Q(F) with positive real constants; fixed-sector action variation is a conditional mathematical hypothesis, not an adopted physical postulate. Checked the global two-form, both signs of f in the Hodge formula, the diagonal Q/Ricci match and continuity at the sphere poles. The Hilbert interpretation retains its separate hypotheses. Item unchanged; only its exact F4 contract quote was refreshed after the supplier definition repair.",
    "evidence_path": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u21.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "thm-emg-xs-kn-verification",
    "proposed_disposition": "refer-to-frontier-owner",
    "severity": "nonfatal",
    "reason": "Verified the Step-4 digest concern against current F3 and Proof 1.2: the cited divergence theorem supplies the density identity for a vector current, not a two-index antisymmetric tensor. The claimed identity is correct but needs the short tensor-connection expansion; this item is not assigned and was not edited.",
    "source_raw_sha256": "ab962e4f32c07a5d8f65e8762b151251b5de6066b1b6647d8b238b3142e31163",
    "affected_use": "F3 supplies nabla_i F^{ij}=Sigma^-1 partial_i(Sigma F^{ij}) to the first sentence of Proof 1.2.",
    "invalidated_claim": "The attribution that the cited vector-current theorem directly establishes the tensor density identity.",
    "minimality": "Add nabla_i F^{ij}=partial_i F^{ij}+Gamma^i_ik F^{kj}+Gamma^j_ik F^{ik}; the last term is zero by lower-index symmetry and antisymmetry, and Gamma^i_ik=partial_k log w yields the density formula. No Statement change is necessary.",
    "supporting_digest": "research/physics-remaining-80-2026-10-17-batch-21-step5-context.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "subject": "thm-gr-curvature-tensoriality-and-coordinate-formula",
    "proposed_disposition": "OPEN publication-owner maintenance; nonfatal to reviewed coordinate-formula use",
    "reason": "Current published frontmatter records verification.precheck: pass but no audited or verified publication review. This is a publication-evidence omission, not a mathematical counterexample. Read the Statement and complete proof; coordinate formula (b), proved in step 5.1 by expanding the connection, supports the assigned flatness argument. Preserve the original mathematical carrier and route publication evidence to its owner.",
    "source_path": "items/thm-gr-curvature-tensoriality-and-coordinate-formula.md",
    "source_raw_sha256": "890a13925cb2af8469b5517b07496e1877f757faba51af4ef88fbd4da203a407",
    "affected_use": "prop-emg-xs-rn-curvature F4 and Proof 2.1 apply the coordinate curvature formula to the identically zero connection in the Cartesian chart.",
    "invalidated_claim": "No mathematical claim invalidated; required published proof-review metadata is absent.",
    "minimality": "Publication owner supplies genuine evidence or an authorized disposition; no physics-worker source edit or Step-5 item gate for the published supplier.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "prop-emg-xs-charged-ring-obstruction",
    "disposition": "false-positive",
    "outcome": "false_positive",
    "reason": "The exact charged Ricci-square identity gives 4q^4/Sigma^4 tending to infinity for q nonzero. Isometry and continuity of curvature contractions of a C2 nondegenerate metric contradict the supplied sequence limit. Sigma tending to zero also forces r to zero and, for a nonzero, theta to pi/2, yielding the stated ring. Repetition of a supplier conclusion is not a logical defect; no change is warranted.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-emg-xs-null-barrier",
    "disposition": "false-positive",
    "outcome": "false_positive",
    "reason": "The cited thm-emg-xs-kn-extension is kind theorem, domain mathematics, library mathematics; its 1299-item dependency closure contains no physics-domain supplier. Only the smooth displayed metric and chosen time orientation enter F2. Direct inversion makes d(v-r) timelike uniformly on the compact sphere near the root; the future-null conormal gives dr<=0 there. Smooth normalized causal vectors have bounded radial derivatives on a finite compact patch cover, and the mean-value theorem yields the stated uniform linear bound. No physical premise is used.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "prop-emg-xs-kn-ergoregion",
    "disposition": "fixed",
    "outcome": "confirmed_nonfatal",
    "reason": "For a=0 and M=abs(q)>0 the norm is -(r-M)^2/r^2, so the ergoregion is empty and its relative boundary is empty although r=M is a stationary-limit set. The Statement consistently distinguishes these sets and its rotating strict inequalities are sound off the axis. Only the title overclaimed ergosurfaces; renamed it to stationary-limit set, with the complete Statement and Proof unchanged.",
    "severity": "nonfatal",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-emg-xs-topological-charge",
    "disposition": "fixed",
    "outcome": "confirmed_fatal",
    "reason": "The flux supplier Statement specifies fluxes and finite homologous sphere conservation but does not state closedness; L1 falsely attributes closedness to that exact interface. Nonzero flux alone does not rule out a bounding 3-chain. Added direct mathematical verification and duality suppliers: dF=d(star F)=0 on the full-sphere exterior and constant dual rotation imply dF_beta=0 on the annulus. Finite-chain Stokes now proves nonbounding and nonglobal exactness. The Poincare lemma on convex north/south product charts supplies the retained local-potential conclusion. All draft qualifications and the Example remain unchanged.",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-emg-xs-kn-escape",
    "disposition": "fixed",
    "outcome": "confirmed_fatal",
    "reason": "FTC I differentiates an integral function and does not justify the asserted monotonicity of an arbitrary differentiable integrating-factor product. This was a load-bearing supplier mismatch in both crossing exclusions. Added cor-mean-value-theorem and checked continuity on closed C1 pieces and differentiability in their interiors: the derivative signs imply the required monotonicities, which patch across the finite partition. Added continuous-implies-integrable for the smooth compact radial integrands used by FTC I. The full angular collar, null-vector identities, positive exterior tangent and one unbounded-radius path prove both inclusions and the relative boundary, including extremality. The Statement is unchanged.",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-emg-xs-rn-escape",
    "disposition": "open",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "reason": "Proof 1.1 says: By [F2-F3], h'<=0 on every C1 piece, so [F4] makes h nonincreasing across the finite partition. F4 cites only thm-ftc-first-part. The root positive-excursion contradiction invokes FTC I for derivative-sign monotonicity, which its exact Statement does not supply. The below-root product monotonicity likewise needs this ordinary calculus justification. Add cor-mean-value-theorem as a mathematical dependency and exact fact, then apply it on continuous closed C1 pieces with interior differentiability. Preserve the escape Statement and patch the finite pieces by continuity; no public-interface change is needed.",
    "route": "frontier owner; outside this unit assignment",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no_update",
    "reason": "No published carrier or supplier interface was changed, and no potentially defective published consumer was identified in these reviews. The separate RN referral concerns an unassigned draft in the frozen frontier.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "cex-emg-xs-constant-radius",
    "proposed_status": "false-positive",
    "reason": "thm-emg-xs-br-verification is a domain:mathematics theorem proving tensor and differential-form identities for the explicit product metric, not a physics theorem or adopted physical law. Its definition of geometric electrovac is a system of mathematical equations. Its factor Ricci and Maxwell calculations use no physical premises. The counterexample computes area 4*pi*L^2, hence constant R_A=L with zero differential; a coordinate component has derivative 1 along its coordinate line. F2 correctly supplies the optional electrovac property. No reclassification or dependency removal is warranted.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "prop-emg-xs-mp-multicenter",
    "proposed_status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "The original Statement applies q_e and q_m to subsets of R^3 although def-emg-xs-geometric-electrovac requires oriented embedded spheres in the four-manifold. Without the inclusion map these spacetime two-form integrals are undefined. The repair supplies i_(s,S)(x)=(s,x) for every fixed x^0=s, transported outward orientation and explicit pullback fluxes. Step 1.2 verifies embedding, admissibility and time-slice independence. All numerical flux claims are preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "def-emg-xs-harmonic-mp",
    "proposed_status": "owner-referral",
    "reason": "The current Definition starts with arbitrary smooth positive H and defines the word harmonic by Delta H=0, but its final tuple clause says for these choices without requiring harmonicity. thm-emg-xs-mp-verification F1 assumes Delta H=0 although its Statement says every defined datum. This confirms the Step-4 digest interface concern; both carriers are unassigned and unchanged here. This proposition independently proves Delta H=0 in step 1.1, and the theorem proof explicitly establishes the restricted harmonic result under A1, so the owned use is sound. Owner should reconcile the defining restriction and theorem interface while preserving the arbitrary-positive-H analysis elsewhere.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "subject": "pthm-emg-xs-kn-model",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "Facts & Assumptions A1 and L3",
    "reason": "The zero-source equations already select the postulate’s expressly designated M_0 by its default clause, so no substantive matter premise is absent. The local explicit-instance requirement was nevertheless omitted: A1 now gives M_0, its singleton configuration, absent fields/constraints and smooth zero current/stress maps. Also corrected the inaccurate L3 locator: volume parallelism is proved locally in 3.1, not in the Hodge supplier’s Proof 3.1.",
    "evidence": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u24.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "subject": "pthm-emg-xs-rn-model",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "Facts & Assumptions A1 and L3",
    "reason": "The source-free convention in the postulate already identifies the zero-current, zero-material-stress use with M_0, and the RN verification plus the locally derived Hodge-divergence identity establish the stated equations. A1 lacked the expressly required local instance description; it now specifies the singleton configuration, no matter fields or constraints, and smooth zero maps. The non-load-bearing false L3 attribution of volume parallelism to the supplier’s Proof 3.1 is corrected to the local proof.",
    "evidence": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u24.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "subject": "texp-emg-xs-rotating-ergoregion",
    "severity": "fatal",
    "disposition": "fixed",
    "location": "Proof 1.1",
    "reason": "Original step 1.1 overwrote the arbitrary Statement radius by its midpoint; the subsequent argument therefore established the claimed norm sign only for that example. The repaired step retains arbitrary r_+<r<r_E+. Since r_E-<M<=r_+<r<r_E+, the factorization in 2.1 is strictly negative for every allowed r, including extremality, and the nonzero tangent cannot be timelike.",
    "evidence": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u24.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "subject": "pthm-emg-xs-rn-horizons",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "Facts & Assumptions F4",
    "reason": "F4 incorrectly included zero by identifying causality with the nonpositive norm inequality alone. The cited definition requires a nonzero timelike or null vector. F4 now states Z nonzero and g(Z,Z)<=0 and distinguishes the cone closure from its nonzero causal part. Step 2.5 already restricts admissible path tangents to nonzero future causal vectors, so its strict time-parameter bound and barrier proof remain valid; the contract’s cone paraphrase is synchronized to that precise proof.",
    "evidence": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u24.json"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change_proposed",
    "reason": "No published item was edited and no public supplier interface changed. The L3 attribution defect belongs to the two assigned draft carriers, not the published Hodge supplier, whose actual proof was inspected. No potentially defective published consumer was discovered in the assigned review."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-csm-statistical-state-observable",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The closing caution did not assert singleton measurability, so no probability or covariance conclusion failed. It nevertheless named undefined constructions. The Definition now specifies cells B in G, measurable inverse-image macrocells, their extended reference sizes, and an explicitly additional entropy assignment on a chosen family of cells; singleton fibres require measurable singletons. All preceding state, density, L2 and pushforward definitions remain unchanged."
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "id": "thm-tdmath-regular-energy-shell-measure",
    "status": "proposed-maintenance",
    "severity": "nonfatal",
    "reason": "Step 3.1 needs explicit band-localized tests and band integrals for its flow defined only on the fixed band; the theorem conclusion remains sound.",
    "affected_use": "Proof step 3.1 integrates g(phi_t x) over O for q in C_c(J), although the map is supplied only on a fixed compact band.",
    "invalidated_claim": "The displayed global integral is not defined without localization or an extension convention; volume preservation on the band remains valid.",
    "minimality": "Restrict q to the interior energy interval and integrate over that band, as in the local repaired proof. No Statement change is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-csm-regular-shell-coarea",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The invariant-flow conclusion is valid, but step 3.2 wrote compositions outside the supplied compact band. The repaired proof fixes D=H^{-1}([a,b]), uses q supported in (a,b), integrates only over D and extends products by zero. Step 4.1 proves continuity and test-function equality only inside that band. Step 5.1 separately handles the empty closed set before using distance. The Statement and all coordinate-normalization claims are unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-csm-exponential-normalization-covariance",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F4 cited a phase-reference definition for an arbitrary measure space. The original derivative and Hessian calculations are correct, but that reference did not itself define generic covariance. The Statement now explicitly defines P_theta, its integrable expectations and centered covariance; general density/integration suppliers support F4, and step 3.1 checks second-moment and mixed-moment integrability before expanding the covariance. The common-envelope differentiation proof is unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "post-csm-canonical-preparation",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "For an indistinguishable-particle quotient, finite normalization alone admits label-dependent H and therefore a noninvariant Gibbs lift, contrary to the counting supplier. The Postulate now requires H(gz)=H(z) almost everywhere for each within-species permutation, which makes the Gibbs density invariant almost everywhere; it retains the distinguishable-label convention. This makes the inherited physical model restriction explicit without changing the intended Gibbs formula or empirical qualifications."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "post-csm-grand-preparation",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "The arbitrary measurable sector Hamiltonians did not explicitly meet the counting supplier symmetry condition for a physical quotient state. The Postulate now requires within-species permutation invariance almost everywhere in every sector. Multiplication by the sector-constant fugacity preserves that invariance; the vacuum still has mass one and H_0=0. Sector-sum convergence remains a separate assumption, and distinguishable labels retain their declared convention."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "post-csm-isobaric-preparation",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "The reference nu_N already contains dV/V0, so the additional outer volume integral made the displayed normalizer ill-typed. Delta_N is now one integral over the complete (V,y,p) product domain. Added within-species symmetry makes its Gibbs lift admissible for the declared factorial/quotient convention. The dimensionless prior, V^N Jacobian, generalized pressure units and finite-positive normalization hypothesis are preserved. Concordia eq.123 was retrieved and read: it also uses one volume integral, while V0 is this item’s explicit reference convention."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "post-csm-microcanonical-preparation",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "A physically indistinguishable shell preparation requires a permutation-invariant Hamiltonian, not merely an arbitrary regular H. The Postulate now imposes pointwise H(gz)=H(z) for the specified cotangent permutation action in both branches. Pointwise symmetry is needed here because ambient almost-everywhere equality need not control a particular zero-volume shell. Cotangent permutations preserve phase volume and the energy graph shell measure, so the shell and band laws use the required symmetric lift; all AC, compactness, normalization and coordinate-scale hypotheses remain."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-csm-canonical-momentum-equipartition",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "A2 incorrectly identified the full physical reference with its restriction to the allowed position support. It now identifies the reference on the whole ambient Borel phase space and assigns the support restriction to the canonical density. The Statement already used exactly that extension by +infinity; Borel symmetrization, null-set completion, Gaussian normalization and moment computations are sound and unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-csm-grand-response-identities",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The Statement already imposed local common exponential-moment envelopes, and both derivative directions (-1,mu) and beta times the eta direction correctly give the displayed covariances. A1 nevertheless grouped these extra bounds with the preparation citation. It now cites the postulate only for the density and positive finite normalizer, then explicitly states the envelopes as additional theorem hypotheses. No Statement or physical-scope change is made."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-csm-isobaric-response-identities",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The theorem inherits V in m^d and P_ext in J m^-d from its explicit isobaric-preparation supplier. Its use of def-td-si-quantities is the temperature/Boltzmann convention in A2; it does not identify this generalized d-volume with that separate macroscopic framework’s cubic-metre state coordinate. PV has energy units for every d, the beta and pressure differentiation directions are valid under the stated envelopes, and all response identities are dimensionally consistent. Item bytes are unchanged; only necessary exact supplier quotes in its owning contract are refreshed."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-csm-ideal-canonical-grand",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "V is the one-particle d-dimensional position volume in the adopted dN-dimensional phase integral; it therefore has units m^d. A2 cites def-td-si-quantities specifically for T, k_B and beta, not to identify V with the separate macroscopic framework’s m^3 coordinate. The action scale makes lambda_T a length, so V/lambda_T^d is dimensionless for every d. Gaussian differentiation, the factorial sector sum, Poisson moments and canonical conditional law are sound. No item repair is required."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-csm-ideal-isobaric",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The claimed volume and enthalpy means were correct, but the original envelope argument mentioned only the volume tail and did not supply a joint kinetic-energy bound. Step 2.2 now gives an integrable common Gaussian-volume majorant and transfers it to the exact (B_*,V) statistics in a natural-parameter neighborhood. Step 3.1 explicitly integrates (p exp(-a p^2)) prime to obtain the kinetic mean and adds the volume mean. A2 also states generalized pressure/volume units separately. The Example and physical scope remain unchanged."
  },
  {
    "defect_ledger": [
      {
        "id": "thm-csm-ising-chain-convergent-series",
        "outcome": "confirmed_nonfatal",
        "disposition": "fixed",
        "reason": "The inverse identity is true by the imported def-natural-logarithm, but F2 and its quoted interfaces omit that definition. This is a local citation defect, not a false convergence claim. Replaced the inverse-log estimate by exp(u)=sum u^j/j! <= (1-u)^(-1)<4/3 using the existing exponential-series definition and geometric-series supplier. Also corrected the strict bound at K=r=0 and supplied an explicit uniform geometric tail."
      },
      {
        "id": "def-csm-gibbs-physical-parameters",
        "outcome": "confirmed_nonfatal",
        "disposition": "fixed",
        "reason": "The general H_Lambda was ambiguous between two supplier energies, although the displayed Ising sum already used free boundaries. Defined H_Lambda=H_Lambda^free explicitly for nonempty finite regions, with exterior-labelled conditional partitions separate. Specified translation invariance for stationary laws. The Gaussian substitution, activity units, SI conversion, and reference-action qualifications remain valid."
      },
      {
        "id": "def-csm-lattice-gibbs-specification",
        "outcome": "false_positive",
        "disposition": "false-positive",
        "reason": "The definition expressly calls its finite Gibbs formula a candidate. The justified_by lemma assumes that formula and the finite-alphabet interaction data, then proves finite positive normalization in 1.1, measurability/properness in 2.2 and consistency by a finite sum in 2.1. It does not assume those kernel conclusions. This is exactly the schema-permitted definition-to-justification dependency pattern, not circular reasoning."
      },
      {
        "id": "lem-csm-chain-markov-bridge",
        "outcome": "confirmed_nonfatal",
        "disposition": "fixed",
        "reason": "The statement and proof correctly construct an unconditioned stationary two-sided Markov law: positivity gives r, Tr=lambda r gives stochastic Q, symmetry gives invariant pi, and endpoint summation gives consistent block marginals and their unique extension under AC_omega. The title could suggest endpoint conditioning, so renamed it to describe the actual stationary law. No mathematical claim or proof changed."
      },
      {
        "id": "lem-csm-peierls-energy-injection",
        "outcome": "confirmed_fatal",
        "disposition": "fixed",
        "reason": "Step 1.1 applied the parity supplier outside its n>=1 hypotheses and left n=0 without a containment/boundary proof. Preserved the full nonnegative integer domain explicitly and proved the n=0 case: the only disagreement cycle is the unit square about the lone negative spin, with inside {0} and exactly its four boundary bonds. The existing involutive flip then changes precisely |gamma| bonds, lowers energy by 2J|gamma| and gives the injection weight bound. This is a logical hypothesis gap, not a counterexample to the claimed inequality."
      },
      {
        "id": "thm-csm-lattice-dlr-existence",
        "outcome": "confirmed_nonfatal",
        "disposition": "fixed",
        "reason": "A1 attributed extension to the axiom-definition item; the existing F1 correctly supplies probability compactness and extension, so the proof already had the necessary theorem. Restated A1 as AC_omega itself and assigned the measure conclusions to F1. Checked cylinder locality passes finite kernel identities to subsequential limits, equality on generating cylinders gives DLR, and convexity/closedness follow from those same linear local identities."
      },
      {
        "id": "lem-csm-stationary-dlr-construction",
        "outcome": "confirmed_nonfatal",
        "disposition": "fixed",
        "reason": "F1 overstated its direct theorem by attributing sequential compactness to its stated closedness conclusion. Added the existing ambient probability-compactness lemma as a direct supplier and F2, then used its subsequence theorem plus DLR closedness separately. Wrote translation covariance as an explicit kernel identity; averaging preserves DLR, the cube symmetric-difference ratio tends to zero, and the cylinder limit is invariant under each fixed lattice translation. The mathematical conclusion and AC_omega scope are unchanged."
      },
      {
        "id": "thm-csm-lattice-dlr-variational-pressure",
        "outcome": "confirmed_fatal",
        "disposition": "fixed",
        "reason": "F4 dropped the stationary-state supplier nonemptiness hypothesis, leaving attainment in 3.1 without an explicit licensed existence premise. Added the existing kernel-consistency and DLR-existence results as direct prerequisites and stated their hypotheses/conclusions before applying averaging. Checked the entropy upper bound and equality argument; defined the boundary layer and an explicit crossing-term constant C=sum |S_r| norm(Phi_r), giving relative entropy at most 2 beta C |boundary|=o(volume). All original variational claims, including no converse, are preserved."
      },
      {
        "id": "ex-csm-chain-analytic-interacting-model",
        "outcome": "confirmed_nonfatal",
        "disposition": "fixed",
        "reason": "The pressure value was mathematically correct but its physical example omitted the dimensionless per-site normalization. Specified p=lim N^(-1) log Z_N with the explicit periodic dimensionless partition and N>=2; no physical-volume conversion is being asserted. Kept zero field in Given and clarified that endpoint convergence belongs to the DLR uniqueness theorem, while the transfer-matrix lemma supplies the stationary law. The corrected series supplier retains exactly the example range 0<K<1/2."
      },
      {
        "id": "thm-csm-ising-high-temperature-state",
        "outcome": "confirmed_nonfatal",
        "disposition": "fixed",
        "reason": "A1 did wrongly attribute existence to the AC_omega definition. The stronger judge claim that no existence premise was available is false: F2 already invokes the Dobrushin result, whose proof 5.1 uses the DLR existence theorem. Corrected A1 to state the axiom and cite that existence theorem directly, added its dependency, and separated existence from uniqueness in 2.1. The finite interaction-list construction preserves unordered-pair normalization and the uniform one-site radius, and the influence bound gives the required strict row sum."
      },
      {
        "id": "pthm-csm-ising-equilibrium-phases",
        "outcome": "confirmed_nonfatal",
        "disposition": "fixed",
        "reason": "F3 omitted essential conditions in its local restatement, but the original Statement and proof 1.3 already confined the application to the stated low-temperature model. Made AC_omega, d=2, nearest-neighbor interactions, J>0, beta>0, h=0 and beta J>=2 explicit in F3 and 1.3. The original three conditional predictions are preserved. Corrected physical_scope to include the general finite-range d-dimensional uniqueness branch already claimed in Statement (ii). The cusp follows from the supplier secant inequalities, and no empirical premise or measured critical point is introduced."
      },
      {
        "id": "ex-csm-high-low-temperature-regimes",
        "outcome": "confirmed_fatal",
        "defect_type": "logic",
        "disposition": "fixed",
        "reason": "The original coexistence claim omitted h=0 and was false for its stated scope: if h>4J, every square-lattice one-site conditional mean is at least tanh(beta(h-4J))>0, so no DLR state can have negative one-site magnetization. Made the constant field energy explicit, retained the sufficient high-temperature uniqueness condition for every finite h, and imposed h=0 only on the K>=2 coexistence branch in Example, Given, F2, verification and physical_scope. All conclusions remain conditional predictions, with neither empirical transition data nor an exact critical point asserted."
      },
      {
        "id": "lem-csm-ising-influence-bound",
        "disposition": "owner-referral",
        "outcome": "confirmed_nonfatal",
        "reason": "The current Statement omits beta>0 although Given supplies it. Carry the explicit parameter hypothesis into Statement; this batch high-temperature consumer already has beta>0 and remains sound.",
        "source": "research/physics-remaining-80-2026-10-17-batch-27-step5-context.json",
        "uncertain": false
      }
    ],
    "published_ledger": []
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_native_adjudication",
    "id": "lem-csm-kl-chain-disjoint",
    "model": "gpt-6-luna",
    "context_sha256": "be980a97e3dca8a77d5f0c03322069b08ceada26b547f0247fc00acd4b0493d5",
    "outcome": "confirmed_nonfatal",
    "proposed_status": "fixed",
    "reason": "The product inequality and finite conditional chain are sound. The final application did not explicitly identify the conditioned mark spaces or the empty-product reference: occupancy zero alone would not imply zero KL for arbitrary unconditioned Q_i. Specified the fixed-count mark space (R^d)^n_i, its singleton zero-fold product and the common probability there, and proved its zero entropy. This resolves the application ambiguity without changing the product theorem.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_native_adjudication",
    "id": "lem-csm-information-contraction-pinsker",
    "model": "gpt-6-luna",
    "context_sha256": "97c0cc21e297bed4858dd746fa7fec1b107eb7a4fae76f080650770ef46c67e5",
    "outcome": "false_positive",
    "proposed_status": "false-positive",
    "reason": "The cited def-kullback-leibler-divergence itself proves D(P||Q)=integral r log(r) dQ with 0 log 0=0 and finite negative part, and assigns +infinity without absolute continuity. These are exactly the finite-region definition used by F1. No additional identification theorem is needed: substituting that explicit definition gives the bounded-test pullback proof on arbitrary measurable spaces. The cited Pinsker theorem uses the same KL and event-supremum TV conventions. The chain-supplier clarification affects no step here.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_native_adjudication",
    "id": "def-csm-full-marked-model",
    "model": "gpt-6-luna",
    "context_sha256": "ea5a27387bb9fad3e1e59602e87630f3bad8c18d2eda44bb2f021226378011e5",
    "outcome": "confirmed_nonfatal",
    "proposed_status": "fixed",
    "reason": "The mathematical phase measures and Gaussian formula are fixed by b>0, but the displayed conversion from temperature T used an undeclared k_B. Declared a fixed positive scalar temperature-to-energy conversion parameter, with units J/K and its defining thermal-energy role. The reference, Hamiltonian, Gaussian law and activity matching formulas are unchanged; this repairs the missing parameter without adopting a physical postulate in a mathematical item.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_native_adjudication",
    "id": "thm-csm-uniform-phase-shell-entropy",
    "model": "gpt-6-luna",
    "context_sha256": "259bac9436007b279fb004d6e28b0df5b9a36d35b7b8a50c9197bc2382bc5fcc",
    "outcome": "false_positive",
    "proposed_status": "false-positive",
    "reason": "The chain lemma cited in F3 explicitly records nonnegativity in its Facts F1 and uses it in proof step 1.1, citing lem-tdmath-relative-entropy-variational-and-chain-rules. That current published supplier explicitly states D>=0 and proves it from u log u>=u-1 in step 1.1. Thus the earlier mathematical fact is available with the identical entropy convention. The finite band bounds give 0<=D_n/V_n<=-log C_n(A_n)/V_n+2b delta_n->0. The item is unchanged; only its owning citation quotations are synchronized to the repaired suppliers.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_native_adjudication",
    "id": "pthm-csm-full-interacting-phase-equivalence",
    "model": "gpt-6-luna",
    "context_sha256": "b9e437f33597b556aa17bd3694b994981ca567eee2c8e10185c6131ab9a636e7",
    "outcome": "confirmed_nonfatal",
    "proposed_status": "fixed",
    "reason": "The Statement already imports only the momentum limits stated in the supplier, whose scope is bounded half-open cubes and their translates. However, step 2.1 used an undeclared Delta after the general bounded-local argument without restating that geometry. Added the precise cube domain at the point of application. This repairs the nonfatal proof-variable/hypothesis ambiguity while preserving the original Statement, physical scope, arbitrary bounded-local claim and all moment coefficients.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "refer_unassigned_frontier_finding",
    "id": "lem-csm-gaussian-mark-moments",
    "proposed_status": "open",
    "severity": "nonfatal",
    "affected_use": "The optional physical-temperature interpretation uses k_B without defining its mathematical type, positivity or units in this earlier supplier.",
    "invalidated_claim": "Only the temperature-conversion convention is underdefined; the lemma fixes b>0 independently and its Gaussian normalization, moments and exponential controls do not use k_B.",
    "minimality": "Define a fixed positive scalar k_B in J/K and positive T in kelvin in this sentence; keep the b-parametrized theorem and proof unchanged. Do not add the later marked-model definition as a prerequisite, since that would create a cycle.",
    "reason": "The optional physical-temperature conversion in the earlier Gaussian supplier uses an undeclared k_B; its b-parametrized theorem is otherwise unaffected. This item is not assigned by the current rejected-tuple pack, so no edit or native review is claimed; refer the exact sentence to the frontier owner.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "The direct dependency/reference consumers of the two changed interfaces are all draft members of this frozen frontier. No potentially defective published consumer or published supplier argument was identified during these assigned reviews. No published-content repair, source retrieval, or audit is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_false_positive_adjudications",
    "subjects": [
      "lem-emg-scaled-three-torus-smooth",
      "ex-emgmath-compact-neutrality",
      "lem-emg-maxwell-observer-stress"
    ],
    "reason": "All three assigned supplier objections are resolved by the actual supplier arguments and registered justifications described in decisions. Preserve original judge and digest evidence; do not invent historical defect classifications.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_open_finding_for_owner",
    "defect_id": "physics-remaining-80-2026-10-17-step5-batch-3-stress-remark-positivity",
    "subject": "lem-emg-maxwell-observer-stress",
    "batch": "3",
    "severity": "fatal",
    "defect_type": "logic",
    "location": "Remarks, first sentence",
    "affected_use": "The sign $T_{\\mathrm{EM}}^{0i}>0$ is for the conventions",
    "invalidated_claim": "A flux component is strictly positive under the stated conventions for every admitted smooth field.",
    "evidence": "Part (b) and proof step 1.3 correctly give T^{0i}=(E cross B)_i/(mu_0 c). Set c=mu_0=1 in flat oriented Minkowski space with n=partial_0 and constant F=-dx^0 wedge dx^1+dx^1 wedge dx^3. Then E=(1,0,0), B=(0,-1,0) and T^{03}=-1. The admitted F=0 also gives T^{0i}=0.",
    "minimality": "Replace the positivity inequality in the remark by the positive prefactor +1/(mu_0 c) multiplying (E cross B)_i; state that individual components can have either sign or vanish. The Statement and tensor proof need no change.",
    "route": "Root owner: separate native correction of a distinct confirmed finding on a correctly false-positive assigned subject. This dispatch explicitly forbids editing false-positive items, so no source correction is claimed.",
    "status": "open",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "propose_scoped_supplier_check_record",
    "subjects": [
      "def-wedge-product-of-differential-forms",
      "prop-differential-forms-form-a-graded-commutative-algebra",
      "def-integral-of-a-form-over-a-smooth-singular-simplex",
      "lem-emg-observer-field-decomposition"
    ],
    "consumers": [
      "lem-emg-scaled-three-torus-smooth",
      "ex-emgmath-compact-neutrality",
      "lem-emg-maxwell-observer-stress"
    ],
    "reason": "Current targeted supplier arguments resolve the three objections: the wedge smoothness justification step 1.2, simplex-integral Verification steps 1.1-2.1, and observer-decomposition A1/proof step 2.1 supply exactly the disputed facts. No defect or repair to these published suppliers is proposed, and this is not a whole-supplier audit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "defect_ledger": [
      {
        "id": "post-csm-dk-selected-hamiltonian-dynamics",
        "outcome": "confirmed_nonfatal",
        "proposed_disposition": "fixed",
        "finding": "The blanket SI assignment to generalized coordinates is false: a dimensionless angle has an action-valued conjugate. Replaced it by the cotangent rule that p_i dq^i has units J s, retaining length coordinates and the separate mechanical-momentum assumption. The model flow and preparation remain unchanged.",
        "evidence": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u30.json"
      },
      {
        "id": "thm-csm-dk-invariant-hamiltonian-and-shell-measures",
        "outcome": "confirmed_fatal",
        "proposed_disposition": "fixed",
        "finding": "The shell hypotheses control H inverse J only; the original quantifier over every nonempty shell did not require E in J, so F7 could not establish its claimed mass and invariance. Restored the supplier exact energy range E in J and n>=1. Also supplied the missing chartwise measure-preservation bridge on open flow domains before restriction to arbitrary invariant Borel R; the weighted clause remains unchanged.",
        "evidence": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u30.json"
      },
      {
        "id": "thm-csm-dk-mixing-hierarchy",
        "outcome": "false_positive",
        "proposed_disposition": "false-positive",
        "finding": "The supplied implication applies to exactly the same probability-preserving map and absolute-Cesaro convention. For strictly invariant E every correlation with E equals mu(E)(1-mu(E)), so weak mixing forces mass zero or one. Reusing this valid argument is not a mathematical defect; no distinct-proof obligation occurs in the approved statement. Item unchanged.",
        "evidence": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u30.json"
      },
      {
        "id": "thm-csm-dk-liouville-and-fine-entropy",
        "outcome": "confirmed_nonfatal",
        "proposed_disposition": "fixed",
        "finding": "The invoked canonical clause of the invariant-measure supplier has no full-AC hypothesis; its separate shell clause is unused. Removed the full-AC dependency and corrected A1 to countable choice for the phase measure and Fubini. On open complete R the density-preserving lemma applies directly. Normalization, weak transport, smooth Liouville equation and absolutely integrable fine entropy follow with the original Statement unchanged.",
        "evidence": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u30.json"
      },
      {
        "id": "cex-csm-dk-coarse-entropy-returns",
        "outcome": "confirmed_nonfatal",
        "proposed_disposition": "fixed",
        "finding": "The fine-entropy supplier assumes an open complete invariant domain and normalized Borel L1 data, with no regular-shell premise. Corrected A1 and removed unnecessary full AC. Also defined reversibility by an anti-symplectic involution and verified J(theta,I)=(-theta,I) reverses the flow and preserves R. Exact cell laws (1,0),(1/2,1/2),(0,1) give coarse entropies 0,k log 2,0, while the absolute fine-entropy integral is log 4. The refuted assertion is unchanged.",
        "evidence": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u30.json"
      }
    ],
    "published_consumer_ledger": [],
    "owner_referrals": [
      {
        "id": "pthm-csm-dk-qualified-hamiltonian-statistical-predictions",
        "route": "frontier-owner",
        "proposed_disposition": "open",
        "supplier": "thm-csm-dk-invariant-hamiltonian-and-shell-measures",
        "affected_use": "items/pthm-csm-dk-qualified-hamiltonian-statistical-predictions.md: Statement clause 2, A5, F2 and proof step 1.1 invoke the regular-shell conclusion without selecting E in J; clause 2 also places the gradient condition on J rather than H inverse J.",
        "invalidated_claim": "Every nonempty regular shell has the asserted finite positive invariant law under hypotheses that control only H inverse J.",
        "minimality": "Correct clause 2 and A5 to restrict the selected energy to E in J and type the gradient and compact-inverse-image conditions exactly as in the repaired supplier. No other clause needs modification from this interface event.",
        "uncertain": false
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_current_adjudication",
    "run": "physics-remaining-80-2026-10-17",
    "batch": "31",
    "subject": "def-csm-dk-phase-space-wasserstein-one",
    "model": "gpt-6-luna",
    "context_sha256": "47f665744f67ab8cd454589199aebd336ddafa9c4eb13c1bfdb065a1c4db08bd",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "The cited periodic model is a draft mathematical definition (domain: mathematics), as is its Hamiltonian-flow supplier; SI interpretation does not make it a physical premise. Its definition supplies T^d=(R/Z)^d. The sum metric and product Borel sigma algebra are compatible; the product probability is an admissible coupling with cost at most sqrt(d)/2 plus the two first velocity moments. No optimizing plan is assumed. The alleged forbidden mathematics-to-physics dependency is absent.",
    "evidence": [
      {
        "path": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u31.json",
        "note": "Current mathematical adjudication, repair review, fresh item/context guards and actual focused checks; original judge evidence remains unchanged."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_current_adjudication",
    "run": "physics-remaining-80-2026-10-17",
    "batch": "31",
    "subject": "thm-csm-dk-exact-bbgky",
    "model": "gpt-6-luna",
    "context_sha256": "41c0dbb32d015fc5d90f0810ecd9a640a09293b4d13ed9ea44cb7150c2da280e",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "disposition": "fixed",
    "reason": "Step 1.1 attributed the explicit equations and oddness of K to F1 although the cited flow Statement only identifies the associated model and transport. The force definition and equations are the interface of def-csm-dk-periodic-mean-field-model. Added that direct mathematical dependency and F3, and cited F3 in the paired-force calculation. This repairs the missing exact force supplier without changing the hierarchy Statement.",
    "evidence": [
      {
        "path": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u31.json",
        "note": "Current mathematical adjudication, repair review, fresh item/context guards and actual focused checks; original judge evidence remains unchanged."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_current_adjudication",
    "run": "physics-remaining-80-2026-10-17",
    "batch": "31",
    "subject": "thm-csm-dk-global-lipschitz-vlasov",
    "model": "gpt-6-luna",
    "context_sha256": "1a4f9b8117d4828c48a95e92355e2898548da86f2b0f3be642c3bd2ee1eea002",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "F5 asserted radial monotonicity not present in the cutoff lemma Statement. The original step 6.1 did correctly prove monotonicity for the explicit construction in the supplier proof, so there was no failed normalization deduction; the restatement still required correction. F5 now states only the promised support and range properties. Step 6.1 bounds mass on growing velocity balls, uses monotone convergence of their indicators to establish integrability, then uses dominated convergence on both sides of the cutoff identity to prove mass one. No monotonic smooth cutoff is assumed.",
    "evidence": [
      {
        "path": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u31.json",
        "note": "Current mathematical adjudication, repair review, fresh item/context guards and actual focused checks; original judge evidence remains unchanged."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_current_adjudication",
    "run": "physics-remaining-80-2026-10-17",
    "batch": "31",
    "subject": "thm-csm-dk-dobrushin-and-particle-limit",
    "model": "gpt-6-luna",
    "context_sha256": "4b9521cfc267393c09bd77da435c9d74fa6f43ee468ac06597e7a2e65cc77fdb",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "reason": "The original particle Statement applies a flow on the physical cotangent phase space at physical time t to dimensionless Z data and s. The conjugation existed only in proof 3.1. The Statement now explicitly defines Xi_N, tau_0=mL/P_0, and Z(s)=Xi_N^(-1) Phi_(tau_0 s)^N Xi_N Z(0). F1 supplies the force scaling, F3 only the actual physical-flow interface, and step 3.1 verifies the dimensionless equations. This resolves the ill-typed asserted trajectory while preserving both estimates and the weak uniqueness claim.",
    "evidence": [
      {
        "path": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u31.json",
        "note": "Current mathematical adjudication, repair review, fresh item/context guards and actual focused checks; original judge evidence remains unchanged."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "refer_unassigned_frontier_finding",
    "run": "physics-remaining-80-2026-10-17",
    "batch": "31",
    "subject": "thm-csm-dk-compact-iid-propagation-of-chaos",
    "severity": "fatal",
    "disposition": "open",
    "location": "Statement particle-evolution paragraph; compare proof step 3.1",
    "reason": "The direct consumer repeats the old physical/dimensionless trajectory mismatch in its Statement. Its proof 3.1 already defines precisely the rescaling now placed in the Dobrushin Statement. Refer the minimal analogous Statement clarification to its frontier owner, without weakening estimates or changing iid assumptions.",
    "evidence": [
      {
        "path": "items/thm-csm-dk-compact-iid-propagation-of-chaos.md",
        "note": "Statement feeds Z_i(0) in Z and s to the physical finite-N flow, whereas proof 3.1 uses Xi_N^(-1) Phi_(tau_0 s)^N Xi_N."
      },
      {
        "path": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u31.json",
        "note": "Exact affected use, invalidated interface clause and necessary minimal repair are recorded in repair_notes.consumer_examinations."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "refer_unassigned_frontier_finding",
    "run": "physics-remaining-80-2026-10-17",
    "batch": "31",
    "subject": "thm-csm-dk-compact-iid-propagation-of-chaos",
    "severity": "nonfatal",
    "disposition": "open",
    "location": "Statement expected supremum; proof steps 1.1 and 3.1",
    "reason": "The rejection-blind Step-4 concern is confirmed against the current proof: measurability of random W1 and its time supremum is not stated. A complete elementary proof-only repair is described in repair_notes.owner_referrals, using labeled coupling transfer, continuity in atoms and time, and the supremum over countably many dense times. The item is unassigned here and must be handled by its frontier owner.",
    "evidence": [
      {
        "path": "research/physics-remaining-80-2026-10-17-batch-31-step5-context.json",
        "note": "Original nonfatal Step-4 measurability concern, retained unchanged and hash-bound by supporting_evidence."
      },
      {
        "path": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u31.json",
        "note": "Current carrier checked and local repair argument supplied; no consumer edit or independent acceptance claimed."
      }
    ]
  },
  {
    "ledger": "defect-ledger",
    "id": "post-csm-dk-selected-cutoff-kinetic-model",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Propose recording the incorrect exclusive role assigned to v0 as a repaired nonfatal formulation defect. The Postulate now states its weighted-X-norm and dimensionless-logarithm roles; the current review and exact tuple are bound above. No published-consumer defect was found and no published-ledger change is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect",
    "id": "thm-csm-dk-ou-velocity-diffusion-response",
    "proposed_status": "fixed",
    "severity": "nonfatal",
    "reason": "Explicit forced-equation derivation replaces the inaccurate F1 attribution; initial-velocity measurability notation is corrected. This records an author repair, not independent acceptance."
  },
  {
    "ledger": "canonical-defect",
    "id": "rem-csm-dk-hard-limit-dispositions",
    "proposed_status": "fixed",
    "severity": "nonfatal",
    "reason": "Exact scalar Langevin formulation supplier, dependency role and relevant adopted assumptions now identify the previously unnamed model."
  },
  {
    "ledger": "canonical-defect",
    "id": "thm-csm-dk-finite-rate-fluctuation-response",
    "proposed_status": "false-positive",
    "reason": "Current finite-chain supplier Proof 5.1 explicitly establishes the joint measurability needed for Green–Kubo; no source repair was made."
  },
  {
    "ledger": "canonical-defect",
    "id": "pthm-csm-dk-finite-bath-response",
    "proposed_status": "fixed",
    "severity": "nonfatal",
    "reason": "Finite-state title now matches the fixed-temperature phenomenological rate model; no claim or physical scope was weakened."
  },
  {
    "ledger": "canonical-defect",
    "id": "def-qsm-dt-monitored-chain",
    "proposed_status": "open-owner-referral",
    "owner_batch": "49",
    "location": "Definition clause 2",
    "reason": "Verified the digest alert without editing this other owner’s carrier. Allowed three-state data with equal energies, w_12=w_21=w_23=w_32=1 and w_13=w_31=0 obey connected Gibbs detailed balance, but L_13|1>=0. The unconditional normalized post-click expression divides by zero. Restrict that expression to positive-rate/nonzero outcomes. This is a separate outside-assignment finding, not an assigned judge tuple."
  },
  {
    "ledger": "published-consumer",
    "proposed_status": "no-update",
    "reason": "No published carrier was repaired or found newly defective in these assigned uses; published mathematical OU suppliers were inspected read-only."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_record",
    "id": "pthm-csm-ideal-gas-ensemble",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "The stated sector weights leave conditional laws arbitrary: concentrated momenta p=0 in every nonvacuum sector preserve those weights but violate the claimed Gaussian conditional law. The preparation postulate expressly delegates full model laws to consumers. Repaired the local Statement and A3 with the full disjoint-union Gibbs measure, proved its normalization, and derived each conditional law by division by its strictly positive sector probability; no canonical or Poisson conclusion was removed.",
    "uncertain": false,
    "source_urls": [
      "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
    ],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_record",
    "id": "pthm-csm-tonks-rod-ensemble",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The graph supplier explicitly requires m≥1, so its invocation on one-dimensional endpoint boundaries was outside its hypotheses. This is a local boundary-case citation gap, not a false Tonks formula. Step 1.3 now computes the N=1 interval length L−a directly with existing F5, and reserves the affine graph argument for N≥2 with nondegenerate (N−1)-dimensional rectangles. The Statement and physical scope remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_record",
    "id": "ex-csm-ising-ring-correlation",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The exact finite-N correlation contains both 3^(−r) and 3^(−(N−r)), so it is not a single exponential with length 1/log3. The supplier and Example correctly obtain that length only after N→∞ at fixed r. Corrected the title to name finite-ring correlations and the limiting correlation length; no formula, proof claim or physical scope changed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No published direct consumer is affected by this draft ideal-gas Statement repair, and this review found no defective published supplier use. All three direct consumers are draft frontier items. Existing published ledger findings remain untouched.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "defect_ledger": [
      {
        "id": "lem-qsm-finite-gibbs-kms",
        "model": "gpt-6-luna",
        "context_sha256": "4e730b5225f4d2f4bde009ab65a12a2f1e29a20ba72f2cd114d9b7b622fcecf9",
        "outcome": "confirmed_nonfatal",
        "proposed_status": "fixed",
        "reason": "The support logarithm does not define the displayed entropy for singular densities. Step 2.1 now defines f(x)=x log x for x>0 and f(0)=0, so entropy is the finite spectral trace of f(rho). It also proves finite cyclicity by coordinate sums rather than overstating F1. Eigenvalue preservation gives entropy invariance; two cyclic permutations give the unchanged KMS boundary. This is a nonfatal notation/citation defect.",
        "uncertain": false
      },
      {
        "id": "lem-qsm-matrix-exponential-response",
        "model": "gpt-6-luna",
        "context_sha256": "5a3e3f90efc2a6ddf80ad1ae61e478200f392a88ec2235d15a9ce008ba832552",
        "outcome": "confirmed_nonfatal",
        "proposed_status": "fixed",
        "reason": "F1 and its Statement-only citation overstate the supplier interface: cyclicity appears only in its Proof step 3.1. Removed that attribution and proved the finite coordinate identity locally in step 2.1. Uniformly convergent differentiated exponential series give Duhamel; the quotient rule gives the Hessian; the logarithmic-mean bound is strict exactly between distinct density eigenspaces. The defect is nonfatal because the elementary mathematical result was already proved by the supplier.",
        "uncertain": false
      },
      {
        "id": "def-qsm-relative-entropy-domain",
        "model": "gpt-6-luna",
        "context_sha256": "4505e16ce426057aa8df558216c963a9c25f0625420caa48f8cb4d6f1baedcbe",
        "outcome": "false_positive",
        "proposed_status": "rejected-false-positive",
        "reason": "The infinite-dimensional definition intentionally gives a partial relative entropy. Its finite-subtraction clause requires support inclusion and finite terms, and its final paragraph restricts the spectral-moment interpretation to support inclusion. The contract explicitly retains that restricted domain. No total function on every density pair is asserted; the absent additional value outside the declared domain is not a defect. The item is unchanged.",
        "uncertain": false
      },
      {
        "id": "post-qsm-normal-measurement-state",
        "model": "gpt-6-luna",
        "context_sha256": "bf5ca0723d8b77057f5c117253dbf5cd6ecf64e4c8a5013aa6d6803c7b4f5fac",
        "outcome": "confirmed_nonfatal",
        "proposed_status": "fixed",
        "reason": "Confirmed a nonfatal source-scope omission: Watrous Chapter 2 supports finite-dimensional measurements. Consulted Landsman Chapter 4, §4.1, printed pp. 104–107: (4.8)–(4.9) give the density trace law, Corollary 4.8 and its following paragraph cover unbounded self-adjoint observables, and (4.20) states the Born interpretation. Added this source and locator. The postulate and physical scope remain unchanged; the mathematical probability law remains distinct from its adopted physical interpretation.",
        "uncertain": false
      },
      {
        "id": "thm-qsm-finite-gibbs-circuit-marginal-error",
        "model": "gpt-6-luna",
        "context_sha256": "1630eaa5f84861d7ff523c0e8a8d170619e3ef157c8c5ae0a98cfb413ca027d0",
        "outcome": "confirmed_nonfatal",
        "proposed_status": "fixed",
        "reason": "F8 overstates its supplier Statement by attributing cyclicity to it. Removed the attribution and proved finite cyclicity locally in step 1.2 by interchanging coordinate sums. Positive and negative parts then prove contraction under partial trace; the two-dimensional pure-state calculation bounds half the trace norm by the phase-adjusted vector distance. The defect is nonfatal: no missing theorem is needed. All success and shift-event qualifications remain unchanged.",
        "uncertain": false
      },
      {
        "id": "thm-qsm-finite-gibbs-variational",
        "model": "gpt-6-luna",
        "context_sha256": "5b6a7b4b52ec297fdb6ff072de2af79416315b5f484a0a845f08ac5661e11b50",
        "outcome": "confirmed_nonfatal",
        "proposed_status": "fixed",
        "reason": "L1 is invoked without its Countable Choice hypothesis, but the original step 3.2 independently proves D>=0 and its equality case using only finite overlaps and scalar logarithm inequalities. Removed the redundant invocation and dependency; the retained local argument is now step 3.1 and explicitly gives the free-energy bound through step 2.1. This is nonfatal because a complete alternative argument was already present. No public claim or hypothesis is weakened.",
        "uncertain": false
      },
      {
        "id": "thm-qsm-trace-cross-log-inequality",
        "model": "gpt-6-luna",
        "context_sha256": "1bc04010d01eb8ccdf645e4f12fde5b2fd33612e30eefbe80075fd6db99fbd99",
        "outcome": "false_positive",
        "proposed_status": "rejected-false-positive",
        "reason": "The objection imposes an unstated zero-based labeling on the eigenpairs. Step 3.1 explicitly uses the initial set 1<=i<=N; the finite or countable positive spectral family may be enumerated in that one-based order under the stated Choice assumption. These sets exhaust the support, so a_N tends to one; no p_0 is required. Normalized finite KL bounds entropy, and normalized q/Q plus Jensen gaps give the inequality and equality case. The item is unchanged.",
        "uncertain": false
      },
      {
        "id": "ex-qsm-oscillator-trace-gibbs",
        "model": "gpt-6-luna",
        "context_sha256": "81304cc992448787167bc9a782fd12963638c409776fc185c6576fa6f2dfdd4f",
        "outcome": "confirmed_nonfatal",
        "proposed_status": "fixed",
        "reason": "The auxiliary comparison adds dimensionless 1 to lambda_n squared in joules squared. Replaced it by 1+(lambda_n/E_*) squared, where E_*=hbar*omega is in joules. The envelope ratio tends to exp(-b E_*)<1; multiplying the resulting bounds by E_* and E_* squared restores energy-moment units. The diagonal adjoint argument, geometric partition/energy/entropy formulas, and infinite-degeneracy contrast remain valid. This is a nonfatal dimensional defect.",
        "uncertain": false
      }
    ],
    "published_consumer_ledger": []
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-qsm-local-matrix-net-completion",
    "model": "gpt-6-luna",
    "context_sha256": "0d2c9ab06f2070c564f1ece1e51d1c6e0db3072721e2a0777ad311029a2ab239",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The adjoint was named without a formula or an exact defining supplier. This is a nonfatal explicitness defect: conjugate transpose supplies the operation, its pairing identity and all involution laws without changing the algebra or embedding claim. Added that formula and verified both tensor-norm inequalities, the finite spectral C*-identity and continuous extension of multiplication and adjoint to the norm completion.",
    "evidence": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u37.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-qsm-local-subsystem-trace-tests",
    "model": "gpt-6-luna",
    "context_sha256": "11f1ace80c2dea87d089924dc9c3812c74db781b29479fe9ecb0ec3ffc811f6c",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The QSM definition explicitly restricts its terminology to equal-local-dimension powers, whereas the lemma quantifies over arbitrary nonzero finite ordered tensor registers. Confirmed a nonfatal missing terminology extension, not a false partial-trace theorem: the actual characterization and positivity suppliers apply to arbitrary finite factors. Added local coordinate definitions of density, POVM, effect, conjugate transpose and trace on the stated registers, retaining the full original claim. Steps 1.1-2.1 then prove trace-one positivity, the identity for every matrix A, and positivity and normalization of lifted effects.",
    "evidence": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u37.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "cex-qsm-local-local-global-distinction",
    "model": "gpt-6-luna",
    "context_sha256": "b097f5df11da9cd7f1028dde0d80ce97b5bd9e14209c182ae0b0bcfaa58b955f",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Confirmed nonfatal interpretation/terminology defect: the mathematical supplier expressly withholds the physical Born interpretation, so the item must not call an unspecified POVM pairing a physical outcome probability. The exact parity counting and spectral calculation already prove the intended separation. Replaced probability and measurement-prediction wording by diagonal entries and POVM trace pairings; explicitly computed Tr(pi_N P_even)=1 and Tr(gamma_N P_even)=1/2. Retained every proper marginal, including k=0, and the global trace-norm distance one.",
    "evidence": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u37.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-qsm-local-coercive-regulated-model",
    "model": "gpt-6-luna",
    "context_sha256": "4faa04e02769917f955e2aaba0dc66b94b6849ce2827be398903a98a3a4217de",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Confirmed nonfatal overstatement in the title and defined descriptor: r>=1, a_j>0 and V(q)>=c|q|^2-C0 permit V(q)=|q|^2, so neither higher-degree terms nor coupling follows. Renamed the class regulated polynomial model and explicitly retained quadratic uncoupled potentials. Did not narrow the admissible class. Checked that the published QFT data and selected-form/Gibbs theorem supply the same realization and 0<Tr(exp(-b h))<infinity for every b>0; b=beta E_* preserves units and positivity. Normal Born interpretation remains separately adopted and conditional.",
    "evidence": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u37.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "lem-qsm-local-generator-domain",
    "batch": "39",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "Proof 1.1; Proof 3.1",
    "reason": "The empty region is admitted by def-qsm-local-spin-algebras, but def-qsm-bounded-finite-range-interaction defines set distance only for nonempty sets. Original Proof 1.1 therefore uses an undefined distance when X is empty. This is a nonfatal omitted elementary boundary case: A=cI is fixed by the complex-linear unital automorphism group, so its generator and every commutator are zero. The repair proves that branch before restricting the neighborhood argument to nonempty X; the full Statement is retained. Also made the immediate t=0 integral identity explicit before setting h=t/N with t nonzero."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_record",
    "id": "lem-emg-matter-noether-exchange",
    "severity": "fatal",
    "defect_type": "logic",
    "proposed_status": "fixed",
    "reason": "The original unspecified matter configuration supplied neither admissible section directions nor transport maps, so A1 could not justify eliminating its contribution along a simultaneous lifted flow. Repaired by defining the field bundle, compact section families and vertical derivatives, the functional domain and linear splitting, and supplied pathwise matter lifts. The normalized connection calculation gives physical alpha=d chi or i_xi F; compact chart integration then proves both original conclusions without Maxwell or Einstein equations.",
    "post_sha256": "1bffa12f07e9a2d424b5b33040e6d9eb483a0d32af2a322e21b94fb0bbf2b770"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_record",
    "id": "lem-emg-einstein-action-variation",
    "severity": "nonfatal",
    "proposed_status": "fixed",
    "reason": "The local action and F1 used scalar R without identifying it with the cited supplier's S. This is an unambiguous notation omission, not an incorrect curvature identity. Defined R:=S=g^{ab}Ric_ab before the first formula, including the Ricci contraction and Einstein tensor convention, and made F1 use the same alias. All variational conclusions and hypotheses are preserved.",
    "post_sha256": "3405f7e2d0033da8abb61d642c866e110438f3453c5d4793ee6885ff87ae2ea9"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "proposed_record",
    "subjects": [
      "lem-emg-matter-noether-exchange",
      "lem-emg-einstein-action-variation"
    ],
    "reason": "Both assigned draft repairs preserve the original balance and metric-variation conclusions. Direct item consumers found are all drafts; no published consumer defect was identified in this scoped review. Local supplier arguments were inspected; no external source retrieval or independent acceptance of my repairs is claimed. Frontier follow-ups for the typed selected-matter contract and scalar relative-action auxiliary use remain routed to their owners.",
    "audit_status": "Native adjudication and repair review only; controller retains certification authority."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_owner_referral",
    "id": "lem-emg-charged-scalar-variation",
    "severity": "nonfatal",
    "proposed_status": "open",
    "reason": "The auxiliary Noether application uses the scalar action's invariant matter transport. Its associated line bundle (or global complex scalar) supplies E and smooth compact section families. For infinite background action the Definition supplies relative differences, while the Noether lemma requires a real functional; explicitly use a reference-configuration relative functional and justify its invariance, or restrict this auxiliary sentence to finite action. Steps 2.1-2.2 independently prove the full stated balances.",
    "minimality": "Clarify only the auxiliary application in Proof 3.1; the Statement need not change."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_owner_referral",
    "id": "post-emg-selected-matter-action",
    "severity": "nonfatal",
    "proposed_status": "open",
    "reason": "The postulate requires an actual configuration class, gauge action and compact variation class and says its hypotheses are exactly the Noether interface. Bind that selection explicitly to the supplied section bundle, functional domain, partial-derivative splitting and smooth pathwise transport now defined by the supplier. No particular matter action or solution is thereby guaranteed.",
    "minimality": "Add the exact typed-interface requirement to the existing model-selection contract; preserve both circle and real-phase branches."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_owner_referral",
    "id": "pthm-emg-total-matter-field-exchange",
    "severity": "nonfatal",
    "proposed_status": "open",
    "reason": "Its Statement defines G_ab=Ric_ab-R*g_ab/2 after citing def-emg-lorentzian-forms, whose scalar contraction is named S. No scalar R alias appears in this consumer. This is an existing notation omission observed while checking F4, independent of the new typed matter interface.",
    "minimality": "Define R:=S=g^{ab}Ric_ab at the existing Einstein-tensor formula; no change to conservation or compatibility conclusions is needed."
  },
  {
    "defect_ledger": [
      {
        "id": "def-qsm-translation-invariant-spin-interaction",
        "classification": "fatal",
        "defect_type": "logic",
        "status": "fixed",
        "reason": "Confirmed undefined summand: the actual supplier indexes Phi only by finite nonempty supports and defines H_Lambda as their sum, whereas this Definition included the empty support. Restricting the summation to nonempty Z exactly restores the supplier interface, including H_empty=0; no zero-valued Phi(empty) convention is assumed.",
        "evidence": "items/def-qsm-translation-invariant-spin-interaction.md#definition",
        "post_sha256": "47dcb5cc3a7f9f91a3b9eb4d2c09732845980142bd327e94457bac7489fece99"
      },
      {
        "id": "lem-qsm-energy-density-concentration",
        "classification": "fatal",
        "defect_type": "logic",
        "status": "open",
        "route": "assigned frontier owner; not repaired or adjudicated in unit 40",
        "location": "Statement first paragraph and Proof 1.1",
        "affected_use": "For each finite region Lambda, m_{Lambda,beta}=|Lambda|^{-1}Tr(rho H_Lambda) includes Lambda=empty, permitted by def-qsm-local-spin-algebras.",
        "invalidated_claim": "m_{empty,beta} is undefined because |empty|=0, despite H_empty=0 and Z_empty=1. This defect is independent of the present supplier repair.",
        "minimality": "Restrict the finite-volume density definition and normalized finite-volume proof calculations to nonempty regions; the existing van Hove conclusion already has that restriction.",
        "reason": "Independently verified the Step-4 digest concern against the current Statement, the proof normalization, and the local-spin definition. Reported without editing this unassigned consumer.",
        "uncertain": false,
        "source_urls": [],
        "familiar": true
      }
    ],
    "published_ledger": []
  },
  {
    "defect_ledger": [
      {
        "id": "thm-qsm-ising-high-temperature-kms-uniqueness",
        "outcome": "confirmed_nonfatal",
        "proposed_status": "fixed",
        "finding": "Implicit positive physical-time scale in the high-temperature specialization.",
        "resolution": "Statement, Facts Given, F2 and Proof Given now expressly carry hbar>0 and beta*hbar strip width; both owning statement mirrors are synchronized. Proof argument and strict influence bound are preserved."
      },
      {
        "id": "thm-qsm-diagonal-kms-dlr-bijection",
        "proposed_status": "open",
        "route": "frontier owner; outside unit 42 assignment",
        "severity": "nonfatal",
        "location": "Facts & Assumptions [A1]",
        "finding": "A1 says Countable Choice is used only for cylinder extension and CSM uniqueness inputs. The theorem also inherits it through F12 quasilocal completion and F15 dynamics, and its proof invokes no CSM uniqueness theorem.",
        "evidence": "The current Statement and Given already assume Countable Choice. Proof 1.3 invokes F12 for the completion and Proof 4.2 invokes F12 and F15. This is an inaccurate use-description and does not invalidate the conditional bijection or the assigned uniqueness transfers.",
        "minimal_repair": "Replace only the use-description in A1 to mention cylinder extension, completion and dynamics; remove the unused uniqueness-input description. No source edit performed here."
      }
    ],
    "published_ledger": []
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-qsm-product-thermal-state-nonnormal",
    "status": "fixed",
    "severity": "nonfatal",
    "finding": "Implicit energy/inverse-energy units and missing positive hbar convention in the onsite-KMS supplier use.",
    "resolution": "The supplier explicitly uses h in J, beta in inverse J and an arbitrary positive hbar in J s, whereas this item left those conventions implicit. This is a nonfatal specification defect: the product density depends only on beta h, and all four proof steps use that density, never hbar or time evolution. Any positive hbar gives the same nonnormal state. The repair declares all units, matrix type, dynamics and strip width, and retains the supplier finite-matrix hypotheses without changing the nonnormality claim or projection argument."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-qsm-product-thermal-state-nonnormal",
    "status": "fixed",
    "severity": "nonfatal",
    "finding": "Ancillary Ruelle irreducibility locator named nonexistent pp.42-44.",
    "resolution": "Current source check locates irreducibility and commutants in Chapter 1 sections 4-5 pp.9-10; corrected only this assigned item reference."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-qsm-nonnormal-tracial-spin-state",
    "status": "referred",
    "severity": "nonfatal",
    "finding": "Same implicit beta units and hbar convention in Example, Given and F1/F2; mathematical zero-dynamics use is valid.",
    "resolution": "Route to frontier owner for a minimal explicit convention repair; item not edited."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "qsm-nonnormal-thermal-states",
    "status": "referred",
    "severity": "nonfatal",
    "finding": "Summary omits q>=2 although the page also allows q=1. The latter gives a one-dimensional normal state.",
    "resolution": "Route to page owner for the q>=2 qualification; page not edited."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-qsm-vacuum-spin-representation",
    "status": "referred",
    "severity": "nonfatal",
    "finding": "Erroneous Ruelle irreducibility locator remains in this outside-lane supplier.",
    "resolution": "Refer citation-only correction to owning frontier lane; no source edit made."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-qsm-vacuum-representation-irreducible",
    "status": "referred",
    "severity": "nonfatal",
    "finding": "Erroneous Ruelle commutant/irreducibility locator remains in this outside-lane supplier.",
    "resolution": "Refer citation-only correction to owning frontier lane; no source edit made."
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "id": "lem-qsm-models-diagonal-occupation-trace",
    "run": "physics-remaining-80-2026-10-17",
    "phase": "initial",
    "round": 1,
    "unit": "45",
    "proposed_disposition": "fixed",
    "outcome": "confirmed_fatal",
    "reason": "The original response clause allowed J={1}. For epsilon_j=log j+4 log(log j), j>=3, mu=0, sum epsilon_j^2 exp(-epsilon_j) converges; the Bose product and its configuration second moment are finite at beta=1, whereas sum exp(-beta epsilon_j) diverges for beta<1. Thus no two-sided beta derivative is supplied. The repair explicitly requires a nonempty open interval J, so each differentiation point has a compact neighborhood to which F3 applies. Other trace, marginal, domain and coefficient clauses are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "id": "post-qsm-models-statistics-and-preparation",
    "run": "physics-remaining-80-2026-10-17",
    "phase": "initial",
    "round": 1,
    "unit": "45",
    "proposed_disposition": "rejected-finding",
    "outcome": "false_positive",
    "reason": "The Postulate adopts a density operator from a specified self-adjoint K_mu with finite positive trace. It asserts no Hamiltonian time evolution or invariance equation. Its physical_scope excludes thermalization, universal equilibrium and empirical applicability. A noncommuting H,N can invalidate stationarity but does not invalidate this adopted normalized preparation. Tong section 1.4.1, printed pp.27-28, does assume conserved N for the usual simultaneous energy-number equilibrium ensemble; that additional conclusion is not asserted by this carrier. No edit is licensed or needed.",
    "uncertain": false,
    "source_urls": [
      "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "id": "pthm-qsm-oscillator-spin-ensembles",
    "run": "physics-remaining-80-2026-10-17",
    "phase": "initial",
    "round": 1,
    "unit": "45",
    "proposed_disposition": "fixed",
    "outcome": "confirmed_nonfatal",
    "reason": "The theorem explicitly assumes Gibbs preparation, so the computed geometric and two-state laws are sound conditional calculations. However, it did not make the fixed-number sector declaration required by the postulate. This is a nonfatal formulation defect, repaired by declaring each model as N=1, specifying ordered mode sets and the Hermite unitary for the oscillator, and explicitly adopting each canonical state after its positive finite trace is proved. No formula, species assignment, choice premise or low/high-temperature conclusion is weakened.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "id": "pthm-qsm-fermi-zero-temperature",
    "run": "physics-remaining-80-2026-10-17",
    "phase": "initial",
    "round": 1,
    "unit": "45",
    "proposed_disposition": "fixed",
    "outcome": "confirmed_nonfatal",
    "reason": "The conclusion and limiting argument are valid, but beta>=1 compares an inverse-energy parameter with a dimensionless scalar. This is a nonfatal units defect in the displayed proof. Fixing arbitrary beta_0>0 in inverse joules gives f_F<=exp(-beta_0 alpha |k|^2/2) for beta>=beta_0; that Gaussian and its separately energy-weighted form control the number and energy tails. No theorem statement or physical scope changes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "id": "ex-qsm-oscillator-spin-ensembles",
    "run": "physics-remaining-80-2026-10-17",
    "phase": "initial",
    "round": 1,
    "unit": "45",
    "proposed_disposition": "fixed",
    "outcome": "confirmed_nonfatal",
    "reason": "The Given already imports the theorem models and its verification uses the correct Gibbs weights, so the numerical deduction is sound. However, the closing sentence attributes both entropy limits to Hamiltonians without stating the preparation premise. This nonfatal overattribution is repaired by explicitly carrying the adopted canonical preparations in Given and in the conclusion. The Example and physical_scope are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "id": "ex-qsm-fermi-zero-temperature",
    "run": "physics-remaining-80-2026-10-17",
    "phase": "initial",
    "round": 1,
    "unit": "45",
    "proposed_disposition": "fixed",
    "outcome": "confirmed_nonfatal",
    "reason": "The supplier does supply SI conventions, but the example only imported its formulas and did not explicitly state the relevant dimensional content. This is a nonfatal exposition defect under the required explicit-quantities rule. The Given now identifies the inherited SI convention and units of m,hbar,alpha,rho,k,k_F,E_F,u,u/rho,p and dimensionless g. All formulas, positivity hypotheses, ideal-model scope and empirical qualifications are preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "id": "pthm-qsm-onsite-interacting-atoms",
    "run": "physics-remaining-80-2026-10-17",
    "proposed_disposition": "open-owner-referral",
    "severity": "nonfatal",
    "location": "Proof 3.2; related dimensioned domain estimate in Proof 2.1",
    "reason": "Independent outside-assignment discovery, not an effect of the trace response repair: beta is in J^-1, yet Proof 3.2 uses beta>=1 and exp(-delta ell/2) with delta in J. Replace the lower bound by arbitrary beta_0>0 in J^-1 and the polynomial-damping factor by exp(-beta_0 delta ell/2); the geometric entropy argument is otherwise intact. Proof 2.1 also writes |P_a(n)|<=1+P_a(n)^2 with dimensioned energy; use an explicit energy reference E_0>0 and |P|<=E_0+P^2/E_0. Owner should make only these proof corrections and synchronize derivations; no Statement change or new prerequisite is needed. No edit made here.",
    "affected_use": "The entropy-tail bound needs a dimensionless exponent and the domain inclusion estimate needs compatible energy units.",
    "invalidated_claim": "Literal displayed dimensioned inequalities in Proof 3.2 and 2.1; no counterexample to the numerical theorem is asserted.",
    "minimality": "Two proof-local dimensional corrections preserve the exact model, all claimed conclusions and dependency boundary.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no-update-required",
    "reason": "All ten direct item consumers of the two changed interfaces are draft items in the frozen frontier. Published canonical-differentiation suppliers were inspected only as read-only context and their open-interval hypothesis is correct. No defective published use was found.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed-adjudication",
    "id": "thm-qsm-dt-normal-state-kubo",
    "model": "gpt-6-luna",
    "context_sha256": "23099ee226c6bb18000d5995a2c97e1a7667ed232fa801f8546305d00806639e",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "Step 1.3 omitted epsilon in the auxiliary unitary-conjugation derivative and absolute epsilon in its integral-error estimate. Corrected both, explicitly specifying W_epsilon′=epsilon i h B_t W_epsilon/hbar. The main response and remainder already follow directly from the trace-class Volterra application, so this is a nonfatal auxiliary proof error; no Statement or Definition changed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed-adjudication",
    "id": "thm-qsm-dt-spectral-fdt",
    "model": "gpt-6-luna",
    "context_sha256": "2b4e5d5ee840e1ed2bfdf3deca67c81afcc5f50f1f761e8ced665ab785c397ae",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "The current lem-qsm-matrix-state-calculus proof step 3.1 explicitly proves Tr(AB)=sum_ij A_ij B_ji=Tr(BA), then basis independence. Thus F2 cites an actually established supplier fact; restricting the supplied evidence to the Statement omitted the relevant proof. Checked spectral phases, detailed balance, the retarded integral sign, Lorentzian limits, and division only off zero. No edit is authorized or necessary."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed-adjudication",
    "id": "lem-qsm-dt-trace-gibbs-correlation-series",
    "model": "gpt-6-luna",
    "context_sha256": "79354c8f2fa0316b3a72e2670b5ad29deef58c255129c1cab12809ca48e60cf9",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "The current thm-qsm-trace-gibbs-variational proof step 1.1 explicitly establishes a complete energy eigenbasis via F2. Its actual published supplier thm-tdmath-general-trace-gibbs-model states that result and proves it in steps 1.1-3.1: the Gibbs exponential is positive compact injective, its eigenvectors form a basis, and their spectral measures lie on single energy levels. Checked Parseval row/column bounds and Cauchy-Schwarz, uniform absolute tails, countable additivity and the total-variation bound. The claimed prerequisite is available, so no edit is needed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed-adjudication",
    "id": "ex-qsm-dt-bounded-oscillator-response",
    "model": "gpt-6-luna",
    "context_sha256": "65ff2eb9ee06a0ee7c0bb65716050971479e3182ede753e368b0963c0aca0c48",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "F2 is an abbreviated supplier summary within a fully specified example, not an application to an arbitrary nonstationary density. The Example sets A=B self-adjoint and a continuous real constant h on finite [0,T]; Verification 1.1 proves self-adjointness of H and 2.1 establishes the trace-one stationary Gibbs density, bounded B, domain preservation and bounded commutator. Thus every strong-domain-response hypothesis is met before its use in 3.1. The exact block exponential in 4.1 reproduces the first derivative and separately proves periodic nonconvergence. No carrier edit is licensed by this false-positive tuple."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed-adjudication",
    "id": "thm-qsm-dt-trace-gibbs-correlation-measure",
    "model": "gpt-6-luna",
    "context_sha256": "f0689707f1b7ad1645dd805c2d54b4acbc90b0acc3492d78c150fb2d464d123f",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "A1 records the actual adopted full-Choice assumption, not a theorem that Choice is necessary or minimal. Both thm-spectral-theorem-for-unbounded-self-adjoint-operators and thm-qsm-trace-gibbs-variational explicitly begin Assume the Axiom of Choice. The correlation-measure Statement retains it. Checked the reflected absolutely summable series: swapping i,j replaces r_i by r_j, giving exp(-beta*hbar*omega); the weighted total variation stays finite by the reversed-observable coefficient bound, and Hermitian equal observables give positive atoms. No unsupported necessity assertion is made."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed-adjudication",
    "id": "thm-qsm-dt-variance-green-kubo",
    "model": "gpt-6-luna",
    "context_sha256": "8f5111277c27b3b0b93777b6733562b8927cb31530eb52580704f2d82a0b41ff",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "The current thm-qsm-dt-algebraic-kubo has kind theorem and domain mathematics, as do the spin-interaction definition, quasi-local algebra, consistent-local-state and finite-range-dynamics suppliers used here. The word spin and optional units do not turn their explicit algebraic hypotheses into physical postulates. Checked the stationary variance identity: invariance and Hermiticity symmetrize the time square, finite-time quadratic forms are nonnegative, and the integrable bound |G_ab| permits dominated convergence entrywise. Absolute temporal integrability is assumed, never inferred from finite range. The mathematical dependency boundary is respected."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed-owner-referral",
    "id": "ex-qsm-dt-bounded-oscillator-response",
    "status": "OPEN",
    "severity": "nonfatal",
    "defect_type": "presentation",
    "location": "items/ex-qsm-dt-bounded-oscillator-response.md: Example, final sentence",
    "affected_use": "This is a bounded projection between the first two oscillator levels, not the unbounded oscillator position.",
    "invalidated_claim": "B is not an idempotent projection: B squared equals b_0 squared times (P_0+P_1), whereas B itself has nonzero off-diagonal entries. The later response calculations correctly use the transition operator.",
    "minimality": "Replace bounded projection by bounded transition operator. This is a distinct Step-4 digest concern, not the rejected F2 hypothesis objection; the explicit prohibition on editing false-positive carriers reserves this correction for owner authorization.",
    "reason": "The Step-4 digest presentation concern is independently confirmed by direct two-by-two multiplication. No mathematical response conclusion or published supplier is invalidated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-qsm-dt-pinching-entropy",
    "model": "gpt-6-luna",
    "context_sha256": "44441a68f85d21044dc6b64f9a89222625ffc396ec715af28a5398e56b8be64e",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "The original Statement mixes endomorphisms of arbitrary H with matrices on C^d without a coordinate identification. This is a nonfatal, routine finite-dimensional typing omission: an ordered orthonormal basis gives a unitary U:H->C^d, and A maps to UAU*. The repair makes that map and the common matrix notation explicit, retaining all dimensions, projections, entropy conclusions, rank-deficient cases and inherited AC assumptions."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_false_positive",
    "subject": "thm-qsm-dt-detailed-balance-gap",
    "batch": "49",
    "status": "false_positive",
    "severity": "not_a_defect",
    "finding_key": "physics-remaining-80-2026-10-17-step5-initial-r1-u49-thm-qsm-dt-detailed-balance-gap",
    "reason": "False positive: F4 explicitly cites the supplier proof, whose steps 2.2 and 3.1 prove both product-order trace dual formulas and the Schwarz inequality. I checked the finite singular-vector construction, weighted spectral gap, anti-self-adjoint Hamiltonian energy estimate, convergent resolvent and Hilbert-Schmidt factor order in step 7.1; no statement-only restriction creates a mathematical gap.",
    "evidence": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u49.json",
    "post_sha256": "2ac3a3e0424495d09e2f072841f49a6ed3ec2105cc68e4199b7b48e179d65c69"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "def-qsm-dt-monitored-chain",
    "batch": "49",
    "status": "fixed",
    "severity": "fatal",
    "finding_key": "physics-remaining-80-2026-10-17-step5-initial-r1-u49-def-qsm-dt-monitored-chain",
    "reason": "Connectedness only gives positive total rates. For three equal-energy labels with positive rates 1<->2<->3 and w_13=w_31=0, L_13|1> is zero and the stated normalized state is undefined. Definition outcome 2 and proof step 1.2 now normalize only w_ab>0 and explicitly leave the impossible zero-operation branch unconditioned.",
    "evidence": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u49.json",
    "post_sha256": "66c41c9dc0dad62f50e32a5b5fbf7c046a746bbe4ee0525117090ec93554d531"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "post-qsm-dt-effective-bath",
    "batch": "49",
    "status": "fixed",
    "severity": "fatal",
    "finding_key": "physics-remaining-80-2026-10-17-step5-initial-r1-u49-post-qsm-dt-effective-bath",
    "reason": "The original adopted record applies to arbitrary rho_0 but supplies no initial energy label. The repaired Postulate defines q_a=<a|rho_0|a>, initializes the label chain with q and explicitly distinguishes its auxiliary pre-click label from the conditional quantum density. Direct diagonal multiplication gives survival sum q_a exp(-r_a t) and first-click density w_ab q_a exp(-r_a t); after a possible click the reset is |b><b|. This retains coherent preparations and the original finite physical interval.",
    "evidence": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u49.json",
    "post_sha256": "943b7c588140140c8abc607f17bd9c847fb72e406aa962b3d90c9fe000a89c8d"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_false_positive",
    "subject": "thm-qsm-dt-monitored-transport",
    "batch": "49",
    "status": "false_positive",
    "severity": "not_a_defect",
    "finding_key": "physics-remaining-80-2026-10-17-step5-initial-r1-u49-thm-qsm-dt-monitored-transport",
    "reason": "The objection omits the supplier Facts and proof. def-qsm-dt-monitored-chain explicitly assumes AC in Given and A1 and invokes the full-AC finite-chain theorem in F3 and step 3.1. That theorem states AC and constructs the joint clock/state law through Ionescu-Tulcea in step 1.1. A1 carries this existing adopted premise; it does not assert that AC is a logically minimal necessary axiom. Checked transport measurability, finite Fubini bounds, stationarity, spectral gap and dominated convergence; positive-rate repair removes only impossible branches.",
    "evidence": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u49.json",
    "post_sha256": "5f1d40aad9474162c501e8e6a118e5d0ac68d3ddf238eba009519b98904702fb"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "ex-qsm-dt-qubit-record-diffusion",
    "batch": "49",
    "status": "fixed",
    "severity": "fatal",
    "finding_key": "physics-remaining-80-2026-10-17-step5-initial-r1-u49-ex-qsm-dt-qubit-record-diffusion",
    "reason": "The speed scale v_0 collides with the state-0 component v_0 of v, forcing v_0=v_0(1-z_eq) when read literally. Since beta*Delta>0 gives z_eq<0, any nonzero scale makes that equation inconsistent. Renamed the independent scale to u in Example, Given and both verification steps. Checked pi=(b,a)/(a+b), the centered eigenvalue -(a+b), variance u^2(1-z_eq^2), and the finite-time exponential integral and limit.",
    "evidence": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u49.json",
    "post_sha256": "8251afbd55bc22457d3640f48965a3ec2c88f212d6e0d2c6f1e563ce04dc5b71"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update_required",
    "reason": "No assigned carrier or direct item consumer of the changed interfaces is published; all identified direct item consumers are draft frozen-frontier subjects. No potentially defective published consumer was found in these scoped uses. Existing unrelated published-ledger findings are outside this review."
  },
  {
    "defect_ledger": [
      {
        "id": "def-emg-charged-dust-model",
        "action": "record-adjudication",
        "outcome": "false_positive",
        "status": "false-positive",
        "evidence": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u5.json",
        "reason": "Tong §§4.5.2–4.5.4 supplies continuum stress context, not charged closure. The locator says the local closure and limits are stated here; the Definition explicitly adopts continuity and Lorentz force and defines smooth single-velocity breakdown as its own scope convention. It attributes no continuum evolution or existence theorem to Tong or the test-body supplier."
      },
      {
        "id": "post-emg-einstein-maxwell-equations",
        "action": "record-adjudication",
        "outcome": "false_positive",
        "status": "false-positive",
        "evidence": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u5.json",
        "reason": "The cited v1 PDF has metric stress definition (4.70) and WEC (4.72), printed pp. 116–117, exactly as the carrier states. The rejection gives numbering from a different text. The Postulate separately adopts its SI equations and does not import source signs or normalization."
      },
      {
        "id": "cex-emg-flat-nonzero-field-coupling",
        "action": "record-adjudication",
        "outcome": "confirmed_nonfatal",
        "status": "fixed",
        "evidence": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u5.json",
        "reason": "The locator incorrectly calls (4.69)–(4.72) Maxwell stress. Corrected it to generic metric variation and matter coupling at (4.68)–(4.70), PDF p. 123. The proof independently computes constant F, positive T_00 and zero G_00 from its exact local supplier; no logical defect or public-interface change occurs."
      },
      {
        "id": "ex-emg-classical-scalar-background-limits",
        "action": "record-adjudication",
        "outcome": "false_positive",
        "status": "false-positive",
        "evidence": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u5.json",
        "reason": "Units are inherited through the named scalar model from def-emg-charged-scalar-functional: [φ]=1, [Kφ]=J m⁻¹ and [λ]=Wb⁻¹. Consequently [Tφ]=J m⁻³ and [j]=J/(Wb m²)=A m⁻². The supplied conventions already make both coupled equations dimensionally consistent; no repeated local declaration is required."
      }
    ],
    "published_ledger": []
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-tgr-coordinate-boxes-are-compact-jordan",
    "finding": "Missing explicit identification of coordinate labels 1,...,m with the canonical function domain 0,...,m-1.",
    "outcome": "confirmed_nonfatal",
    "proposed_status": "fixed",
    "reason": "Statement now defines x_j=x(j-1) and products as canonical subsets of R^m. The proof is unchanged and all three direct consumer uses were examined and remain valid.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-tgr-normal-flux-coordinate-density",
    "finding": "Judge alleges that the slab definition is a physics-domain supplier.",
    "outcome": "false_positive",
    "proposed_status": "dismissed",
    "reason": "The actual supplier and all used hypotheses are mathematical; the item guard is unchanged and no physical premise enters the block-matrix proof.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-tgr-normal-flux-coordinate-density",
    "subject_type": "contract",
    "finding": "The diagonal-metric finite check omitted N>0 when asserting alpha=N and cited nonexistent step 2.2.",
    "outcome": "confirmed_nonfatal",
    "proposed_status": "fixed",
    "reason": "Added N>0 and changed finite-check result/verifies references to step 3.1 under the shared-write lock. Strict scoped contract validation passes.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-tgr-fluid-frame-projection",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "Proposed owner entry: the title promised frames under a smooth-congruence convention, but the valid statement constructs a pointwise Eckart vector and a local C1 Landau field. Corrected only the title; all hypotheses, conclusions and proof steps are retained. No published-supplier or published-consumer defect was found, so no published-ledger change is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "defect_ledger": [
      {
        "id": "ex-tgrmath-null-landau-obstruction",
        "severity": "nonfatal",
        "disposition": "fixed",
        "reason": "Title now expressly identifies the constructed null-dust example. The mathematical Example and Verification were sound and remain unchanged."
      },
      {
        "id": "lem-tgr-carter-circulation",
        "severity": "fatal",
        "defect_type": "logic",
        "disposition": "fixed",
        "affected_use": "Statement and Proof 1.2: both balance hypotheses were unspecified in the consuming lemma, although its supplier makes its conclusions conditional on them.",
        "reason": "Explicit stress and particle balances repair the missing premise, as witnessed by the time-dependent smooth counterexample in the decision. The direct frontier consumer already satisfies both."
      }
    ],
    "published_consumer_ledger": []
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-repaired-nonfatal",
    "id": "def-emg-causal-solution-and-horizon-vocabulary",
    "run": "physics-remaining-80-2026-10-17",
    "phase": "initial",
    "round": 1,
    "reason": "The cited Killing theorem and Lorentzian definition require orientation, while this item correctly allows a merely time-oriented manifold. The omitted localization is repaired in F2/F4: apply the suppliers on coordinate-oriented neighborhoods; the Killing tensor identity, metric connection, curvature and rest-metric formulas are orientation-independent and agree on overlaps. No global orientation is needed, and the Definition and its full scope are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-repaired-nonfatal",
    "id": "thm-emg-symmetric-hyperbolic-research-supplier",
    "run": "physics-remaining-80-2026-10-17",
    "phase": "initial",
    "round": 1,
    "reason": "F4 omitted the equal-initial-value hypothesis of uniqueness/stability clause (a). This is a genuine nonfatal supplier-restatement defect: proof 2.1 already explicitly compares solutions with the same initial state, so the theorem and its deduction remain valid. F4 now states the same system, u(0)=v(0), common compact range, finite H^s bounds and common open interval containing zero. Existence, the C1 upgrade from the distributional equation, finite Fourier partial-sum norm recovery, H^{s-1} stability and same-interval smooth persistence match the exact GR interfaces.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-repaired-nonfatal",
    "id": "lem-emg-fixed-smooth-background-harmonic-data",
    "run": "physics-remaining-80-2026-10-17",
    "phase": "initial",
    "round": 1,
    "reason": "The Statement conflated the dimensionless base torus with the length-coordinate torus contrary to its named convention. The harmonic cancellation is nevertheless valid after the canonical scaling identification, so this is a nonfatal domain/coordinate ambiguity. The repair explicitly sets Sigma=T^3_(2pi L0), defines the smooth bijection [theta] -> [L0 theta] and its inverse, puts Sobolev membership on composed component arrays (not tensor pullbacks), and fixes partial_X=L0^{-1}partial_theta. The h-inverse, connection-difference Q, metric jet, H0=0 cancellation and regularity are preserved; the exact convention supplier is now also a direct dependency.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "refer-published-maintenance",
    "id": "def-gr-spacelike-hypersurfaces-and-cauchy-sets",
    "affected_use": "Definition (e) labels H+(S)=D+(S) minus I-(D+(S)) as points not chronologically preceded by any point of D+(S).",
    "invalidated_claim": "The prose reverses the direction: membership in I-(D+(S)) means preceding some point of D+(S), not being preceded by such a point. The displayed set formula is the intended one.",
    "minimality": "Replace the gloss with points that do not chronologically precede any point of D+(S); retain the displayed formula. Any published Definition repair requires its own maintenance consumer tracing.",
    "owned_consumer": "def-emg-causal-solution-and-horizon-vocabulary",
    "owned_use_disposition": "Unaffected: clause (a) uses the spacelike and singleton Cauchy conventions, not the Cauchy-horizon gloss.",
    "evidence_path": "items/def-gr-spacelike-hypersurfaces-and-cauchy-sets.md: Definition (e)",
    "status": "outside-frontier maintenance; no published item edited or adjudicated",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect",
    "id": "post-tgr-cattaneo-thermal-model",
    "outcome": "false_positive",
    "proposed_disposition": "dismissed",
    "reason": "Positive C, kappa and tau do permit v_h=sqrt(kappa/(C tau))>c, but the Postulate adopts a supported-rest effective subsystem, not unconditional relativistic causality. Its mathematical supplier states v_h<=c iff kappa<=C tau c^2, and the physical theorem and home page explicitly retain that conditional test. Minkowski background geometry alone does not impose this inequality on an independently adopted constitutive subsystem. Imposing it would remove the deliberate parameter-comparison regime rather than repair a false claim."
  },
  {
    "ledger": "canonical-defect",
    "id": "ex-tgr-thermal-damped-model",
    "outcome": "confirmed_nonfatal",
    "proposed_disposition": "fixed",
    "location": "Example, added first paragraph",
    "reason": "The earlier postulate already supplies the thermal SI conventions, so the formulas are dimensionally recoverable and the four verification steps are valid. However, the example introduces the mode amplitude A, wave number k and angular frequency Omega without stating their units or explicitly adopting that unit convention. Added the inherited SI assignments and K, m^-1, s^-1 mode units; k x1, Omega t and t/(2 tau) are dimensionless and (C/k) phi-prime has units W m^-2. This completes the mandatory declarations without changing the model or any deduction."
  },
  {
    "ledger": "canonical-defect",
    "id": "ex-tgr-thermal-damped-model",
    "outcome": "confirmed_nonfatal",
    "proposed_disposition": "fixed",
    "location": "research/physics-remaining-80-2026-10-17-batch-61.proof-contracts.json: contracts.ex-tgr-thermal-damped-model.boundaries[case=zero]",
    "reason": "The carrier explicitly allows every real A, including zero, whereas the old contract incorrectly said A=0 was excluded. Corrected only this assigned boundary evidence under the shared write lock; the zero solution and the separately chosen nonzero small-amplitude construction are both retained."
  },
  {
    "ledger": "canonical-defect",
    "id": "pthm-tgr-cattaneo-thermal-properties",
    "outcome": "confirmed_nonfatal",
    "proposed_disposition": "open",
    "route": "frontier owner; outside unit 61 assignment",
    "location": "items/pthm-tgr-cattaneo-thermal-properties.md: Statement, evolution/data/positivity locators",
    "affected_use": "The global evolution and periodic positivity clauses point to local [F1], which contains entropy/Lyapunov identities; they require [F3]. The Schwartz definition points to [F2], which contains principal speeds; it requires [F4].",
    "invalidated_claim": "The internal fact locators are incorrect; the proof actually uses F3 and F4, so this does not invalidate the example equations or its direct verification.",
    "minimality": "Replace only the incorrect Statement locators. No consumer claim or physical scope needs changing.",
    "reason": "Verified the rejection-blind digest concern against the current Statement, Facts F1-F4 and Proof 2.1. This unassigned draft carrier is left unchanged for its owner."
  },
  {
    "ledger": "canonical-defect",
    "id": "lem-tgr-cattaneo-stability-causality",
    "outcome": "confirmed_nonfatal",
    "proposed_disposition": "open",
    "route": "frontier owner; outside unit 61 assignment",
    "location": "items/lem-tgr-cattaneo-stability-causality.md: sources.references[1].title",
    "affected_use": "The source title credits N. Andersson and G. L. Comer for Heat conduction in rotating relativistic stars, but the retrieved title page credits S. K. Lander and N. Andersson.",
    "invalidated_claim": "Bibliographic attribution only; the stated linear thermal equations and assigned physical consumers use the correct model and the consumers already name the correct authors.",
    "minimality": "Correct the authors of the second reference; leave its mathematical Statement and proof unchanged.",
    "reason": "Confirmed the digest alert against the current draft source reference and the actual arXiv title page. No published defect or repair is asserted.",
    "source_urls": [
      "https://arxiv.org/pdf/1804.01520"
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-tgr-stationary-thermal-carriers",
    "severity": "nonfatal",
    "disposition": "fixed",
    "finding": "The oriented supplier was cited without explaining its chartwise application on a possibly nonorientable domain. Added the local restriction argument in Remarks; Definition remains unchanged.",
    "evidence": "items/def-tgr-stationary-thermal-carriers.md: Remarks; thm-gr-killing-and-on-shell-matter-identities clause (a), Proof 1.1."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-tgr-juttner-partition-and-moments",
    "severity": "nonfatal",
    "disposition": "fixed",
    "finding": "F4 omitted differentiability and derivative-measurability hypotheses that the actual smooth integrands already satisfy. Completed F4 without altering the Statement or proof steps.",
    "evidence": "items/thm-tgr-juttner-partition-and-moments.md: F4 and Proof 3.2; thm-differentiation-under-the-integral-sign Statement hypotheses 1-4."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-tgr-stationary-thermal-carriers",
    "severity": "nonfatal",
    "disposition": "fixed",
    "finding": "Corrected the cited paper author from Jose Santiago to Jessica Santiago. This metadata correction has no mathematical interface effect.",
    "source_urls": [
      "https://arxiv.org/abs/1807.02915"
    ],
    "evidence": "Primary arXiv Authors field; item sources.references entry for arXiv:1807.02915."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "supplier": "thm-gr-killing-and-on-shell-matter-identities",
    "consumer": "def-tgr-stationary-thermal-carriers",
    "disposition": "owned-use-reviewed",
    "affected_use": "Definition cites clause (a) to identify the Killing condition with vanishing symmetrized covariant derivative on O, which is only time-oriented.",
    "invalidated_claim": "No published theorem or consumer claim is invalidated: its Proof 1.1 proves a local tensor identity. The repaired draft explicitly applies the oriented statement on each individually oriented chart domain.",
    "minimality": "Adding the chartwise license in draft Remarks suffices. No orientability restriction, new prerequisite, published repair or consumer propagation is necessary.",
    "evidence": "items/thm-gr-killing-and-on-shell-matter-identities.md: Statement (a), Proof 1.1; items/def-tgr-stationary-thermal-carriers.md: Remarks."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-tgr-killing-thermal-normalization",
    "severity": "nonfatal",
    "disposition": "referred-outside-assignment",
    "finding": "The current sources.references entry still gives Jose Santiago for arXiv:1807.02915; the primary record identifies Jessica Santiago. Bibliographic correction only; no source edit made outside this assignment.",
    "evidence": "items/lem-tgr-killing-thermal-normalization.md:23; the supplied Step-4 digest records this same concern.",
    "source_urls": [
      "https://arxiv.org/abs/1807.02915"
    ],
    "route": "controller/owning frontier lane for metadata maintenance"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-tgr-thermal-killing-kinematic-equivalence",
    "severity": "nonfatal",
    "disposition": "referred-outside-assignment",
    "finding": "The current sources.references entry still gives Jose Santiago for arXiv:1807.02915; the primary record identifies Jessica Santiago. Bibliographic correction only; no source edit made outside this assignment.",
    "evidence": "items/lem-tgr-thermal-killing-kinematic-equivalence.md:24; the supplied Step-4 digest records this same concern.",
    "source_urls": [
      "https://arxiv.org/abs/1807.02915"
    ],
    "route": "controller/owning frontier lane for metadata maintenance"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-tgr-massive-juttner-stationarity",
    "severity": "nonfatal",
    "disposition": "referred-outside-assignment",
    "finding": "The current sources.references entry still gives Jose Santiago for arXiv:1807.02915; the primary record identifies Jessica Santiago. Bibliographic correction only; no source edit made outside this assignment.",
    "evidence": "items/thm-tgr-massive-juttner-stationarity.md:41; the supplied Step-4 digest records this same concern.",
    "source_urls": [
      "https://arxiv.org/abs/1807.02915"
    ],
    "route": "controller/owning frontier lane for metadata maintenance"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-tgr-charged-liouville-data",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "Confirmed missing domain qualification for the compensated scalars: on flat R^4 with xi=partial_0 and A=(x^0)^2 dx^1, L_xi A=2x^0 dx^1 has exterior derivative 2 dx^0 wedge dx^1, whereas d(dLambda)=0 by equality of smooth mixed partials. Merely defining the term compensator does not supply one for arbitrary A. The unguarded instruction to set Psi and Phi was therefore not well-defined on all permitted data. Repair makes these scalars conditional on an explicitly supplied global compensator and preserves arbitrary smooth A for trajectories, mass shells, transport and the ansatz.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "no_update",
    "id": "def-tgr-charged-liouville-data",
    "reason": "The assigned supplier and all seven direct item consumers are draft frozen-frontier items. No defective published consumer or outside maintenance target was discovered.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-tgr-finite-cell-gibbs-factorization",
    "model": "gpt-6-luna",
    "context_sha256": "90b871931a26d8d612cc5cfb72d793b90e51dce6d21703a766aa845b6abe02b1",
    "proposed_disposition": "false-positive",
    "reason": "False positive: the actual thm-tgr-electrochemical-stationarity carrier explicitly lists def-countable-choice in deps and states in Facts [F7] that AC_omega is inherited from the smooth tangent-bundle carrier. def-tgr-charged-liouville-data and def-tgr-stationary-thermal-carriers repeat that assumption. The consumer retains it in its Statement, [A2], [F3], deps and step 1.1. The definition of AC_omega need not itself refer forward to this application."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-tgr-proper-clock-qubit-response",
    "model": "gpt-6-luna",
    "context_sha256": "875ff6382c436f539c97138d1d236a6aa973411eca98f11a5f56d6792c755a07",
    "proposed_disposition": "false-positive",
    "reason": "The actual F1 supplier thm-tgr-finite-response-redshift has kind theorem and domain mathematics, with mathematical-premise dependency roles. It proves conditional identities for finite Hermitian matrices and defined clock parameters, and explicitly disclaims measured apparatus data. The cell supplier likewise has domain mathematics. Physical terminology and SI unit annotations do not convert these conditional mathematical deductions into physical premises; the alleged forbidden physical-to-mathematical edge is absent."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-tgr-kms-orbit-time-rescaling",
    "model": "gpt-6-luna",
    "context_sha256": "8946e12ade82eb5176ec306cc132b9d44931387a43d6ad0ed8fcb443a3bd08ac",
    "proposed_disposition": "false-positive",
    "reason": "The cited lemma Statement groups orbit constancy with a stronger thermal conclusion, but its actual Proof 1.1 derives xi(N_xi)=0 before any hypothesis on beta being Killing. The assigned item [F2] expressly cites that proof-level derivation from Killingness and metric compatibility. Indeed -2 N_xi xi(N_xi)=xi(g(xi,xi))=2 xi^a xi^b nabla_a xi_b=0, using only the timelike Killing field and N_xi>0. The supplied smooth Lorentzian geometry satisfies precisely these hypotheses; the missing thermal beta field is irrelevant to this identity."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-tgr-eckart-entropy-specialization",
    "model": "gpt-6-luna",
    "context_sha256": "154f9099d59f6fb17c72539c49945abbdf9051e10addfcdeaa1571dc1b70be37",
    "outcome": "false_positive",
    "reason": "A1 records an inherited assumption, not a theorem that follows from the definition of AC_omega. def-tgr-local-fluid-state invokes def-gr-smooth-lorentzian-objects, whose Definition (c) explicitly says that the smooth-vector-field tangent-bundle structure uses AC_omega; def-smooth-vector-field-as-a-tangent-bundle-section begins by assuming AC_omega. Thus the linked def-countable-choice correctly identifies the axiom, and the actual geometric supplier chain supports the bookkeeping claim. Step 1.1 uses the stated smooth fields, Gibbs/Euler identities, spatial projections and entropy identity; it derives no geometric fact from the choice axiom alone. No defect is confirmed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "post-tgr-equilibrium-particle-exchange",
    "outcome": "confirmed_nonfatal",
    "proposed_status": "fixed",
    "reason": "Finite-cell equilibrium was left undefined; the assigned postulate now adopts entropy stationarity under every variation preserving both totals, with the exact domain, differentiability and positivity conditions. The downstream theorem already assumed these conditions.",
    "uncertain": false,
    "source_urls": [
      "https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S1.html"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-tgr-rindler-rotating-equilibrium-domains",
    "outcome": "false_positive",
    "proposed_status": "dismissed",
    "reason": "The existing selected stationary-bath premise imports the Killing beta hypothesis; each displayed profile also verifies it directly. The carrier remains unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/html/1606.06605",
      "https://arxiv.org/pdf/1807.02915"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_new_fixed_finding",
    "subject": "lem-tgr-finite-bath-exchange-stability",
    "batch": "69",
    "run": "physics-remaining-80-2026-10-17",
    "stage": "step5-initial-r1",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "disposition": "fixed",
    "reason": "F1 attributed neighborhood C2 regularity to the negative-capacity theorem, whose Statement supplies response formulas rather than that regularity claim. Replaced F1 by its exact temperature/capacity content; added the existing shell definition as F4 and an actual prerequisite. Step 3.1 now proves J prime=-f and continuous J double-prime=-f prime, then positive C2 phase volume and entropy on the interior branch. The claim is retained.",
    "evidence": {
      "path": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u69.json",
      "unit": "69"
    },
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_new_fixed_finding",
    "subject": "cex-tgr-point-box-collapse",
    "batch": "69",
    "run": "physics-remaining-80-2026-10-17",
    "stage": "step5-initial-r1",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "disposition": "fixed",
    "reason": "F1 omitted the supplier clause-1 restriction to three dimensions, while Given did not specify position/momentum domains or the partition measure; step 1.1 therefore had no explicit hypothesis match. Defined a bounded nondegenerate box B in R3, q_i in B, p_i in R3, the collision-excluded phase domain, SI units and exact dimensionless partition integral. F1 and step 2.1 now invoke only the supplier clause-1 conclusion Z2=+infinity. The refuted universal claim is unchanged.",
    "evidence": {
      "path": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u69.json",
      "unit": "69"
    },
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No published carrier or supplier interface changed, and no new published-consumer defect was found in the inspected uses. Existing historical ledger rows remain untouched.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "lem-emg-coupled-reduced-einstein-evolution",
    "run": "physics-remaining-80-2026-10-17",
    "batch": "7",
    "caught_at_stage": "5.1-adjudicate",
    "severity": "fatal",
    "disposition": "fixed",
    "defect_type": "logic",
    "reason": "Confirmed quantifier error in proof 2.1: choosing new neighborhoods of the special orthogonal harmonic jet does not establish the conclusion for the arbitrary K,K-prime,R fixed in the Statement. Repaired by retaining those given sets: steps 1.1 and 1.2 verify the smooth symmetric coefficient family on all O, and compactness on a coefficient-time slab times the torus times K-prime gives uniform positivity and derivative bounds. The generic solver then applies to every datum in the specified bounded class, without constraints or jet compatibility. Corrected the stale batch-6 inventory sentence for L5.",
    "evidence": [
      {
        "path": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u7.json",
        "note": "Exact frozen judge tuple, native adjudication and completed repair with current review hashes; no independent review of own repair."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "prop-emg-local-sobolev-stability-continuation",
    "run": "physics-remaining-80-2026-10-17",
    "batch": "7",
    "caught_at_stage": "5.1-adjudicate",
    "severity": "fatal",
    "disposition": "fixed",
    "defect_type": "dependency_citation",
    "reason": "Confirmed missing explicit supplier for the concrete coefficient obligation at restart: the generic solver L1 only covers already verified smooth symmetric positive systems, while the original proof asserted this form and F1 described special-initialization full existence. Added direct mathematical dependency/F5 on the repaired coupled-reduction lemma and verified the combined time matrix, spatial symmetry, smooth zero-order stress/frame terms and compact-neighborhood positivity for arbitrary admissible endpoint states. The Fourier endpoint limit, finite-sum Hs bound, endpoint constraints, C3/C2 recovery and reverse-time overlap estimate then retain their original conclusions.",
    "evidence": [
      {
        "path": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u7.json",
        "note": "Exact frozen judge tuple, native adjudication and completed repair with current review hashes; no independent review of own repair."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "thm-emg-sourcefree-smooth-maximal-development",
    "run": "physics-remaining-80-2026-10-17",
    "batch": "7",
    "caught_at_stage": "5.1-adjudicate",
    "severity": "nonfatal",
    "disposition": "fixed",
    "defect_type": "inaccurate-dependency-restatement",
    "reason": "Confirmed nonfatal inaccurate restatement: L2 assumes an existing smooth solution and concludes its constraints, rather than assuming constrained data. The initial constraints are already explicit hypotheses of this theorem, and F1 is the correct local-existence supplier. Repaired Factual entry L2 and step 1.1 to distinguish those directions. At each spacelike restart of an existing full solution, L2 is correctly applied to obtain constraints; F1 supplies complete-data local existence and uniqueness, and the generic maximal-development theorem then supplies universality and unique data-fixing isometry in the same smooth globally hyperbolic class.",
    "evidence": [
      {
        "path": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u7.json",
        "note": "Exact frozen judge tuple, native adjudication and completed repair with current review hashes; no independent review of own repair."
      }
    ]
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "retain_open_add_scoped_use_evidence",
    "marker": "physics-remaining-80-2026-10-17-batch-7-marker-lem-gr-reduced-einstein-principal-part",
    "subject": "lem-gr-reduced-einstein-principal-part",
    "consumer": "lem-emg-coupled-reduced-einstein-evolution",
    "disposition": "OPEN owner publication maintenance",
    "reason": "Inspected current mathematical interface and its exact owned use; current published frontmatter has precheck pending and no audited/verified/repair marker. The existing publication-maintenance finding remains open. This dispatch supplies neither a whole-supplier audit nor publication acceptance.",
    "affected_use": "Metric principal matrices and algebraic-stress substitution in evolution steps 1.1-1.2.",
    "evidence": [
      {
        "path": "items/lem-gr-reduced-einstein-principal-part.md",
        "section": "Statement, Proof and frontmatter"
      },
      {
        "path": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u7.json",
        "section": "reviews"
      }
    ]
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "retain_open_add_scoped_use_evidence",
    "marker": "physics-remaining-80-2026-10-17-batch-7-marker-thm-gr-smooth-maximal-globally-hyperbolic-development",
    "subject": "thm-gr-smooth-maximal-globally-hyperbolic-development",
    "consumer": "thm-emg-sourcefree-smooth-maximal-development",
    "disposition": "OPEN owner publication maintenance",
    "reason": "Inspected current mathematical interface and its exact owned use; current published frontmatter has precheck pending and no audited/verified/repair marker. The existing publication-maintenance finding remains open. This dispatch supplies neither a whole-supplier audit nor publication acceptance.",
    "affected_use": "Additional fixed-model maximal-development theorem applied after complete-data local existence and restart uniqueness in proof steps 2.1-4.1.",
    "evidence": [
      {
        "path": "items/thm-gr-smooth-maximal-globally-hyperbolic-development.md",
        "section": "Statement, Proof and frontmatter"
      },
      {
        "path": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u7.json",
        "section": "reviews"
      }
    ]
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "propose_append_maintenance",
    "subject": "def-gr-spacelike-hypersurfaces-and-cauchy-sets",
    "disposition": "OPEN original-mathematics maintenance",
    "severity": "nonfatal",
    "reason": "Verified the Step-4 digest alert against current clause (e): H+(S)=D+(S) setminus I-(D+(S)) excludes p with p chronologically preceding a q in D+(S), whereas its explanatory sentence says not chronologically preceded by any point. The chronological direction in that sentence is reversed.",
    "affected_use": "The assigned maximal proof uses the Cauchy-surface and intrinsic-domain clauses through its local and geometric suppliers; it does not use the horizon clause (e).",
    "invalidated_claim": "Only the prose equivalence describing the displayed future Cauchy-horizon set is false.",
    "minimality": "Original mathematics owner can replace the prose with points that do not chronologically precede any point of D+(S), preserving the formula; no owned proof uses the defective sentence.",
    "evidence": [
      {
        "path": "items/def-gr-spacelike-hypersurfaces-and-cauchy-sets.md",
        "section": "Definition (e)"
      },
      {
        "path": "research/physics-remaining-80-2026-10-17-batch-7-step5-context.json",
        "section": "alerts"
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_nonfatal_frontier_referral",
    "subject": "lem-emg-fieldstrength-positive-symmetric-reduction",
    "disposition": "owner review requested; item unchanged",
    "reason": "Verified the digest concern: the last sentence of its first Statement paragraph says manifest omission is recorded in L1, but current L1 explicitly says the model supplier is listed in batch 6. This is an inventory-text contradiction, not a Maxwell-symbol defect. This item is outside the four assigned rejected subjects and was left unchanged.",
    "affected_use": "The assigned evolution and continuation consume the proved symmetric Maxwell matrices and smooth lower-order terms; neither uses the inaccurate manifest-omission sentence.",
    "minimality": "Synchronize that inventory sentence after the frontier owner reviews its Statement event and consumers.",
    "evidence": [
      {
        "path": "items/lem-emg-fieldstrength-positive-symmetric-reduction.md",
        "section": "Statement first paragraph and Facts L1"
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "def-tgr-spherical-entropy-constraint-functional",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "A C2 profile need not define a globally smooth static state, contrary to the original volume-density attribution.",
    "repair": "Defined the positive C2 spatial metric locally and computed sqrt(det h)=r^2 sin(theta)/sqrt(b), preserving all functional hypotheses and formulas.",
    "evidence": "Definition of def-tgr-spherical-entropy-constraint-functional; current guarded review in this report."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "thm-tgr-constrained-entropy-tov-criticality",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "The TOV-equivalence title overstates the precise Tolman–Klein equivalence and TOV implication. The proof also left the applicability to arbitrary admissible sup-norm C1 curves implicit.",
    "repair": "Corrected title, preserved the exact Statement, and added bounded-operator and joint-continuity argument in Proof 1.2 using the existing compact-rectangle differentiation theorem.",
    "evidence": "Current title and Proof 1.2, 7.1; strict contract and layout pass recorded in this report."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "No published supplier or consumer defect was identified in these assigned reviews. The changed Definition has only two direct item consumers, both draft frontier items; their exact uses are recorded as sound. No published carrier was edited."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "run": "physics-remaining-80-2026-10-17",
    "batch": "71",
    "subject": "post-tgr-finite-newton-gravity-preparation",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "Postulate normalization attribution",
    "correction": "The normalization pointer exceeded the box-only physical theorem interface. The general region remains admissible: the repair applies the mathematical Gibbs lemma to an enclosing cube Q, restricts its nonnegative integral to B, and uses strict positivity on positive measure to prove 0<Z_B≤Z_Q<∞.",
    "evidence": [
      {
        "path": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u71.json",
        "note": "Native assigned adjudication and repair; current review hashes are in reviews."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "run": "physics-remaining-80-2026-10-17",
    "batch": "71",
    "subject": "post-tgr-kepler-canonical-preparation",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "sources.references Katz locator",
    "correction": "The Katz locator misattributes cumulative-volume entropy. His equations (2.2)–(2.3) use shell density; the local volume convention and preparation are explicit and mathematically independent. Corrected the citation without changing the model.",
    "evidence": [
      {
        "path": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u71.json",
        "note": "Native assigned adjudication and repair; current review hashes are in reviews."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "run": "physics-remaining-80-2026-10-17",
    "batch": "71",
    "subject": "post-tgr-kepler-microcanonical-volume-preparation",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "sources.references Katz locator",
    "correction": "The Katz locator misattributes cumulative-volume entropy. His equations (2.2)–(2.3) use shell density; the local volume convention and preparation are explicit and mathematically independent. Corrected the citation without changing the model.",
    "evidence": [
      {
        "path": "research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u71.json",
        "note": "Native assigned adjudication and repair; current review hashes are in reviews."
      }
    ]
  },
  {
    "canonical_defect_ledger": [
      {
        "id": "post-tgr-finite-bath-exchange-preparation",
        "model": "gpt-6-luna",
        "context_sha256": "acd2edbf08fce6a73ca3a062b7b22a167506c2c666203d1901f3ad967438dde6",
        "proposed_disposition": "false_positive",
        "reason": "The PDF locator exists; the rejection mistakes HTML section renumbering for absence. See the exact source check in the matching decision."
      },
      {
        "id": "ex-tgr-physical-finite-bath-attraction",
        "model": "gpt-6-luna",
        "context_sha256": "c8b4aecaa45ec2fa50996122beb98e1421655e1845dfc6c3c35391a0c5f946e4",
        "proposed_disposition": "false_positive",
        "reason": "The theorem explicitly assumes the preparation containing E_0 and the logarithmic bath; the matching-energy and half-capacity calculations are valid."
      },
      {
        "id": "ex-tgr-physical-star-half-compactness",
        "model": "gpt-6-luna",
        "context_sha256": "28ef9dc34da9a809d6229a4c32b6bf3e9dc33f7d2b51369f99c4a38a5cc0a88c",
        "proposed_disposition": "false_positive",
        "reason": "The assumed preparation supplies positive rest density and epsilon_0=rho_0 c^2, so positive pressure follows from the displayed positive ratio."
      }
    ],
    "published_consumer_ledger": []
  },
  {
    "defect_ledger": [
      {
        "id": "lem-tgr-positive-damping-boundary",
        "classification": "nonfatal",
        "status": "fixed",
        "location": "Proof step 2.2",
        "evidence": "The given real bounds imply the displayed modulus comparison; Countable Choice is retained only for measure constructions."
      },
      {
        "id": "lem-tgr-exponential-current",
        "classification": "nonfatal",
        "status": "fixed",
        "location": "Frontmatter deps and dependency_roles; Definitions and conventions",
        "evidence": "Three explicitly linked and used published mathematical suppliers were absent from direct declarations. Added them and mirrored them in batch 74 pages manifest; no mathematical interface changed."
      }
    ],
    "published_consumer_ledger": []
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-false-positive",
    "id": "thm-tgr-photon-planck-flux",
    "context_sha256": "cb6ca213d4b3ebcc1057e663000fdf470df3c15d2115caacb2932fcc622a69ea",
    "reason": "F1 inherits AC_omega: its Statement begins “Let I and Fock spaces be as in def-qsm-identical-particle-fock-sectors”, whose Definition explicitly assumes Countable Choice. F6 correctly records this inherited hypothesis; an assumption need not be repeated verbatim in the lemma Statement. This is not a claim that countable occupation enumeration itself requires choice.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-false-positive",
    "id": "cex-tgr-photon-zero-mode-trace",
    "context_sha256": "d081fadb7004f2d45cb705c75e54c55e7c307dd96efa747c1fded2fdd3f78f60",
    "reason": "The supplier thm-tgr-photon-planck-flux has kind theorem, domain mathematics and library mathematics. Its lattice energies and stipulated isotropic transport densities are explicit mathematical hypotheses, with no physical postulate or observation used. Physics terminology and SI units do not create a physical premise. The counterexample uses the supplier only for the explicit base model; its zero-mode fixed-vector and divergent-partition-sum arguments are mathematical.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-open-owner-followup",
    "id": "thm-tgr-photon-planck-flux",
    "severity": "nonfatal",
    "location": "items/thm-tgr-photon-planck-flux.md:46-49 and Proof 3.1",
    "reason": "Independently confirmed the Step-4 domain concern: the literal composition rho_L H has domain D(H), whereas def-trace-of-a-trace-class-operator defines trace only for an everywhere-defined bounded trace-class operator. Step 3.1 proves summability of p_m E(m), but does not identify the bounded extension. This is separate from the rejected choice objection; do not alter that false-positive decision or claim completion.",
    "affected_use": "U_L=Tr(rho_L H) in the Statement and the final sentence of Proof 3.1.",
    "invalidated_claim": "Literal applicability of the supplied bounded-operator trace definition to rho_L H; the established energy sum and Planck/entropy values remain valid.",
    "minimality": "Define B on all ell^2 by (Ba)_m=p_m E(m)a_m and specify Tr(rho_L H)=Tr(B). Summability gives boundedness; finite diagonal truncations converge in operator norm, making B compact, and its nonnegative summable eigenvalues give trace class and the stated trace. On D(H), B=rho_L H; density gives uniqueness. Also H rho_L is everywhere defined since sup_y y exp(-beta y)/Z_L is finite, and equals B. No claim needs weakening.",
    "disposition": "Open: request owner routing for this separate finding. Task forbids editing false-positive item carriers; no repair, independent acceptance or closure claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "propose-maintenance",
    "id": "qm-math-orbital-and-spin",
    "subject_type": "published-page",
    "location": "library/non-relativistic-quantum-mechanics-mathematics/qm-math-orbital-and-spin.md:128",
    "severity": "presentation",
    "reason": "Verified the Step-4 alert against the current published page: it says “All items are draft mathematics under construction”, while its status and the inspected sphere-integral supplier status are published. This is stale status prose, not a defect in the sphere integration argument.",
    "affected_use": "The tgr-mhs04 page requires qm-math-orbital-and-spin; the photon theorem uses its sphere-integral lemma F8.",
    "invalidated_claim": "The published page overview incorrectly describes all its items as draft.",
    "minimality": "Separate maintenance should correct only the stale status sentence after checking actual member statuses. No mathematical Statement or Definition change is needed.",
    "disposition": "Outside assigned frontier; reported without editing the published page or item.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "post-tgr-exponential-current-and-spectral-thermometer",
    "model": "gpt-6-luna",
    "context_sha256": "5191759f125e4299ecf863dca2cc4604fda75ce8de59bcf8d7fe7a584c694138",
    "outcome": "confirmed_fatal",
    "defect_type": "other",
    "status": "fixed",
    "reason": "The common rate-model paragraph calls t proper time in both branches, but the reduced branch supplies only a Killing flow with length parameter u and a tested one-dimensional current. It supplies no timelike curve or metric normalization relating t to proper seconds. This is a physical-formulation defect, classified as other rather than a proof or dependency-citation error. Repaired by defining model time in seconds and identifying t with the supplied hyperbola parameter only in the acceleration branch.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "prop-emg-compact-charge-compatibility",
    "outcome": "false_positive",
    "proposed_action": "Record dismissal of this exact gpt-6-luna dependency-domain objection; no repair or published-consumer finding.",
    "reason": "The cited strict charged barotropic supplier is a domain: mathematics definition of explicit tensor equations, not a physical postulate. It defines j=cNZu and explicitly disclaims empirical applicability. Compact Stokes applies to the smooth two-form i_e vol_h on the compact oriented boundaryless slice, giving integral(div_h e)=0; the assumed Gauss equation and mu_0>0 give integral(g(j,n))=0. Bilinearity and c>0 give the stated Q_n identity and vanishing. No physical premise or additional choice is used.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-emg-linear-eos-variables",
    "outcome": "false_positive",
    "proposed_action": "Record dismissal of this exact gpt-6-luna dependency-domain objection; no repair or published-consumer finding.",
    "reason": "Both cited suppliers have domain: mathematics: an explicit tensor-system definition and a conditional mathematical reduction lemma. Their F1/F2 integral definitions are quoted accurately. For p=w epsilon, 0<w<1 and epsilon>0 give epsilon+p=(1+w)epsilon>0. Integrating 1/((1+w)z) and sqrt(w)/((1+w)z) gives the displayed N and r; the positive logarithm coefficient gives strict monotonicity, range R, and N=N_* exp(r/sqrt(w)). These explicit evaluations require no choice principle or physical premise; no microscopic interpretation is asserted.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-emg-local-charged-fluid-model",
    "proposed_status": "fixed",
    "classification": "confirmed_nonfatal",
    "reason": "Corrected the false sourced-constraint attribution in original proof step 2.1 and the stale F3 stress-supplier description; the displayed public Statement and physical scope are unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-emg-local-charged-barotropic-development",
    "owner_batch": "8",
    "proposed_status": "open",
    "classification": "confirmed_nonfatal",
    "location": "Proof 5.1",
    "reason": "The arbitrary-increasing-parameter transport equation omits the speed a for gamma′=a n; in the chosen coordinate time the missing factor is 1/n^0. The corrected integrating factor proves the same zero propagation. This separate finding is referred to the supplier owner without modifying its carrier."
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "lem-emg-coupled-reduced-einstein-evolution",
  "thm-emg-einstein-gauge-propagation",
  "thm-emg-local-high-sobolev-electrovacuum",
  "thm-emg-smooth-local-geometric-uniqueness",
  "pthm-emg-local-electrovacuum-model",
  "ex-emg-adopted-parallel-field-model",
  "pthm-emg-matter-energy-conditions",
  "ex-emg-ml-b03",
  "post-emg-background-maxwell-test",
  "pthm-emg-source-test-backreaction-scope",
  "ex-emg-ml-b07",
  "lem-emg-local-potential-construction",
  "ex-emg-ml-b08",
  "ex-emg-observer-static-field",
  "ex-emg-xs-rn-charge-sign",
  "thm-emg-xs-mp-verification",
  "prop-emg-xs-mp-multicenter",
  "ex-emg-xs-two-center",
  "ex-emgmath-eh-boundary-derivative",
  "lem-emg-sphere-flux-holonomy",
  "ex-emgmath-monopole-patch-flux",
  "lem-emg-charged-scalar-variation",
  "ex-emgmath-scalar-plane-wave",
  "post-qsm-models-statistics-and-preparation",
  "pthm-qsm-dilute-occupation-limit",
  "ex-qsm-dilute-occupation-limit",
  "ex-qsm-nonnormal-tracial-spin-state",
  "pthm-qsm-oscillator-spin-ensembles",
  "ex-qsm-oscillator-spin-ensembles",
  "lem-tgr-charged-liouville-preserves-mass-shell",
  "lem-tgr-gauge-killing-energy",
  "thm-tgr-electrochemical-stationarity",
  "ex-tgr-electric-circulation-obstruction",
  "ex-tgr-independent-redshifted-cells",
  "lem-csm-gaussian-marked-lift-existence",
  "lem-csm-information-contraction-pinsker",
  "lem-emg-maxwell-stress-divergence",
  "lem-emg-rational-electrovac-verification-correctness",
  "lem-emg-rational-electrovac-verification-termination-resources",
  "lem-emg-xs-duality",
  "lem-emg-xs-kn-rational-calculus",
  "lem-qsm-energy-density-concentration",
  "lem-tgr-static-finite-fermi-occupations",
  "post-csm-canonical-preparation",
  "post-csm-grand-preparation",
  "thm-csm-total-canonical-window",
  "post-csm-fullphase-interacting-preparations",
  "thm-emg-charged-fluid-projections",
  "post-emg-charged-fluid-balance",
  "post-emg-transported-charged-dust",
  "post-emg-trivial-classical-charged-scalar-model",
  "post-qsm-dt-effective-bath",
  "post-tgr-equilibrium-particle-exchange",
  "post-tgr-gravitating-entropy-variational-preparation",
  "thm-emg-xs-rn-verification"
]


