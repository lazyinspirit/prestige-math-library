# Step 5 repair: impact-initial, round 1, unit 2

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/impact-initial-1.json.



Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-impact-initial-r1-u2.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"advanced-qft-supersymmetry-build-2026-10-23",phase:"impact-initial",round:1,unit:"2",input_sha256:"d6e4f0ba827d45a431c63ff28e40234a3d616507b9f0f5eba44c7fac3ab8b31e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run advanced-qft-supersymmetry-build-2026-10-23 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.



Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-qftx-super-poincare-algebra-4d",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "Record the assigned untyped Hilbert/rest terminology separately from the historical false-positive real-translation allegation. The repaired Definition gives an algebraic rest module; the analytic bridge is retained under explicitly supplied Hilbert/PVM/domain hypotheses in Remarks."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-qftx-super-poincare-graded-jacobi",
    "supplier": "def-qftx-super-poincare-algebra-4d",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "One actual row/column action defect: the original supplier gave an anti-representation, invalidating the Jacobi proof. The supplier now fixes column entries and its assigned consumer computes the general commutator identity and the E12,E21 witness. Keep this distinct from the historical removed rest calculation and source-locator repairs."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-qftx-n1-chiral-superfield",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "Record the external odd-parameter coefficient-space gap, distinct from the historical Gates page-locator defect. A finite parameter exterior algebra, its graded tensor extension, derivative signs, compatible involution and extended component tuple are now explicit."
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no_update",
    "reason": "Every identified direct item consumer of either changed Definition is a draft in this frozen frontier. No published item was edited or independently adjudicated, and no changed interface requires an outside published-consumer repair."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-equivariant-index-on-a-two-sphere",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "Propose recording the previously undefined isolated fixed-point contribution and inaccurate F1 use as repaired: the Example now defines the quotient and step 2.1 proves its sum equals the independently computed character. No published supplier defect or maintenance repair was discovered.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/2003.00955"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "ex-aqft-fusion-z2-twisted-associator",
    "phase": "initial",
    "round": 1,
    "unit": "15",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "Confirmed logic defect: with the declared ordinary tensor product, the identity of W does not have domain delta_0 tensor W or W tensor delta_0. Normalization only removes cocycle scalar factors; it does not identify those objects. The repair supplies the canonical scalar-multiplication unitors and checks the triangle on homogeneous pure tensors.",
    "post_sha256": "9af0f1f6b7c0cbe128bddfc0a4a8bb8e244d016d4768f06d2b9327d463d6d57f"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No published supplier was edited, and no direct item consumer of the assigned example was found. The imported monoidal and fusion definitions remain read-only."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_record",
    "id": "def-aqft-lsz-amplitude-data",
    "run": "advanced-qft-supersymmetry-build-2026-10-23",
    "phase": "initial",
    "round": 1,
    "unit": "16",
    "severity": "fatal",
    "defect_type": "other",
    "status": "fixed",
    "reason": "Confirmed an undefined limiting construction: regulator labels had no directed order, and no common target topology or reconstruction maps were required. The repaired Definition requires a supplied nonempty directed preorder, common Hausdorff kernel spaces and complex-linear reconstruction maps, and states coefficientwise eventual-neighborhood convergence. It separately types the joint pole extraction, its approach domain and Hausdorff target, and fixes regulator removal before pole extraction. This repairs well-definedness without asserting that any continuum QFT or regulator-independent limit exists.",
    "evidence": "research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-initial-r1-u16.json",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-qftx-su2-noncommuting-yang-mills-action-density",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "reason": "Proposed controller entry for the original unqualified F2 supplier inference, repaired by an explicit choice-free finite matrix calculation. The Example and physical public interface remain unchanged; no consumer event is introduced.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "ex-qftx-finite-orbit-faddeev-popov-jacobian",
    "proposed_defect_id": "advanced-qft-supersymmetry-build-2026-10-23-step5-u20-orbit-unit-convention",
    "outcome": "confirmed_nonfatal",
    "proposed_disposition": "fixed",
    "reason": "The derivative M_(r,0)(1)=r and two intersections are correct, but the physics-domain toy omitted its units. Added the dimensionless convention for x,y,r,theta, the coordinate densities and determinant without altering the calculation."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "def-qftx-formal-perturbative-yang-mills-data",
    "proposed_defect_id": "advanced-qft-supersymmetry-build-2026-10-23-step5-u20-anomaly-cancellation-definition",
    "outcome": "confirmed_nonfatal",
    "proposed_disposition": "fixed",
    "reason": "The named anomaly-cancellation hypothesis had only bounds on any primitive, which do not require exactness. Defined it by a supplied bounded covariant sequence with delta_n=s Xi_n+d_H Theta_n along the explicitly defined corrected partial action. This is a definitional omission rather than a false restoration deduction: the consumer theorem already assumes that exact equation separately."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "pthm-qftx-nonabelian-yang-mills-classical-gauge-invariance",
    "proposed_disposition": "refer_owner",
    "reason": "Current draft Statement additionally asserts a global section over R4, but all four Proof steps establish only curvature covariance and action invariance; no declared dependency or proof step supplies smooth bundle triviality over R4. Independently confirmed the digest alert against the full current argument."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "proposed_disposition": "no_change",
    "reason": "No published carrier was repaired or invalidated. Both direct consumers and the separate gauge-invariance supplier are current drafts; owner referrals remain separate from published maintenance."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_record",
    "id": "ex-qftx-euclidean-trivial-vacuum-sector",
    "class": "accuracy",
    "subclass": "missing-hypothesis",
    "severity": "fatal",
    "location": "statement",
    "status": "fixed",
    "reason": "The model postulate and sector definition allow an arbitrary admitted-sector set Sigma, including a singleton excluding the trivial bundle. The original Example specified P=S4 x SU(2) without [P] in Sigma, so F=0 and vanishing first variation did not imply an admissible saddle. This is a missing model-admissibility hypothesis, hence a logic defect. The repair explicitly admits [P] and supplies P as its representative, retaining every curvature, charge, action, and stationarity conclusion for this example.",
    "post_sha256": "ad6467a2903d18cd022edfa88cf6c975b44b1d5997bc04917c24e8b068bda66a",
    "adjudication_ref": "research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-initial-r1-u21.json:decisions[0]"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "lem-qftx-su2-compact-nonabelian-group",
    "proposed_disposition": "false_positive",
    "reason": "The cited published example proves the needed interface in its Verification, not only its abbreviated Example section. Step 1.1 constructs U(n) as the embedded regular level set of F(A)=A* A, with surjective differential X -> X* A+A* X (a Hermitian S has preimage (1/2)A^{-*}S). Step 2.1 proves SU(n) embedded in U(n) as the determinant-one regular level: the determinant differential on skew-Hermitian tangent matrices is trace and is onto iR. At n=2 these constructions give exactly the standard matrix topology and smooth inclusion rho_2 used by F2 and consumer step 1.1. Embedded-submanifold charts make inclusion a smooth coordinate injection. Thus this is an established conclusion of the actual cited supplier argument; its omission from the short Example paragraph is not a missing mathematical premise.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "subject": "def-lie-group",
    "consumer": "lem-qftx-su2-compact-nonabelian-group",
    "proposed_disposition": "retain_existing_maintenance",
    "existing_defect_id": "advanced-qft-supersymmetry-build-2026-10-23-batch-6-published-1",
    "affected_use": "F3 and proof step 1.1 use the definition of a finite-dimensional real Lie group with smooth multiplication and inversion.",
    "invalidated_claim": "None: the mathematical definition remains usable; its inline prerequisite links violate the uninterrupted-definition presentation instruction.",
    "minimality": "Retain existing nonfatal-recorded outside mathematics-owner maintenance rather than create a duplicate defect. Owner maintenance should preserve the definition and move its two links into Definition references. Imported bytes are read-only and were not edited.",
    "reason": "Independently read the complete current Definition and confirmed both inline wikilinks. The same presentation finding already appears in the canonical published ledger and defect ledger; this report adds the examined batch-22 use without closing outside maintenance.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "op-qftx-clay-4d-yang-mills-existence-mass-gap",
    "status": "open",
    "severity": "fatal",
    "defect_type": "logic",
    "location": "Open problem: canonical local-polynomial paragraph and stronger-variant gauge-field-content paragraph",
    "reason": "Distinct finding, not the assigned sign objection: D_A=d+[A,.] on exterior forms satisfies D_A F_A=0 by the Bianchi identity. Consequently the stated iterates D_A^k F_A vanish for k>=1 and do not provide the tensor covariant derivatives required for local differential-polynomial labels. In a local Cartesian chart take nonzero T in the Lie algebra and A=(x^1)^2 T dx^2. Then F_12=2x^1 T and D_A F_A=0, while the component covariant derivative nabla^A_1 F_12=2T is nonzero. The stated label space and dimension filtration omit the intended derivative labels, contrary to the curvature-and-covariant-derivatives requirement in Jaffe-Witten section 4.",
    "proposed_repair": "Define the tensor covariant derivative in Cartesian coordinates by (nabla^A_lambda T)_{mu_1...mu_r}=partial_lambda T_{mu_1...mu_r}+[A_lambda,T_{mu_1...mu_r}] for every smooth adjoint-valued covariant r-tensor; iterate it without antisymmetrizing derivative slots. Use all finite iterates of this operator on F_A in both label definitions, and assign nabla^A dimension one. Keep the exterior operator D_A separately if used. Mirror the repaired formulation in the owning manifest and contract under the shared lock, then perform ordinary interface-consumer checks.",
    "disposition": "refer_owner_for_separate_authorized_repair",
    "uncertain": false,
    "source_urls": [
      "https://www.claymath.org/wp-content/uploads/2022/06/yangmills.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "op-qftx-clay-4d-yang-mills-existence-mass-gap",
    "status": "open",
    "severity": "fatal",
    "defect_type": "logic",
    "location": "Open problem: stronger-variant Wightman-realization paragraph, tensor covariance identity",
    "reason": "Distinct finding, not the assigned sign objection: for a component column with rho a representation, the law U(g)Phi(x)U(g)^-1=rho(Lambda)Phi(gx) reverses matrix order under successive conjugations. Conjugating first by g_2 and then by g_1 yields rho(Lambda_2)rho(Lambda_1)Phi(g_1 g_2 x), while direct conjugation by U(g_1 g_2) yields rho(Lambda_1)rho(Lambda_2)Phi(g_1 g_2 x). Tensor representations of noncommuting spatial rotations do not satisfy this identity in general. The problem affects the declared nonscalar fields, including the stress tensor; restricting to scalar labels would lose approved scope.",
    "proposed_repair": "Specify column components and replace the matrix prefactor by rho(Lambda^-1), retaining the argument Lambda x+a. Its composition gives rho(Lambda_2^-1)rho(Lambda_1^-1)=rho((Lambda_1 Lambda_2)^-1). State the associated test-function/dual-index convention and check the stress-tensor components. Reconcile only affected owning metadata under the shared lock and perform ordinary interface-consumer checks; the translation sign need not change.",
    "disposition": "refer_owner_for_separate_authorized_repair",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "def-aqft-derivative-expansion-and-truncation",
    "location": "Proof step 2.1",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "F2 defines only the scalar action -log Z_H and supplies no Wilsonian kernel. For example, S_UV=0 gives S_W=0 independently of the nonzero inverse matrix (M^2 I+A)^-1. The unsupported interpretive sentence in step 2.1 is nonfatal because the Definition concerns the explicitly specified formal matrix series, and the range induction proves its stated finite-range assertion without that sentence.",
    "repair": "Replaced the unsupported Wilsonian-kernel identification with the exact formal-truncation conclusion and the limitation of F2; synchronized only the owning contract step-2-1 claim.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "def-aqft-operator-basis-physical-data",
    "defect_id": "advanced-qft-supersymmetry-build-2026-10-23-step5-u25-associated-field-domain",
    "severity": "fatal",
    "proposed_disposition": "fixed",
    "reason": "Charged smooth maps lacked a chosen associated-bundle identification. The current Definition gives sections, overlap transitions and active gauge/connection transformations; the scoped render, contract and dependency checks pass.",
    "decision_ref": "decisions[0]"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "def-aqft-operator-basis-physical-data",
    "defect_id": "advanced-qft-supersymmetry-build-2026-10-23-step5-u25-lorentz-spin-cover",
    "severity": "fatal",
    "proposed_disposition": "fixed",
    "reason": "The SO-only clause excluded Weyl fields; a 2pi spin rotation acts as minus identity. The repaired Definition supplies the SL(2,C) projection and kernel from the published Hermitian-matrix proposition and allows tensor-only models.",
    "origin": "batch-25 Step-4 concern independently checked against current Definition and direct spinorial consumers"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "ex-aqft-scalar-gauge-operator-power-counting",
    "defect_id": "advanced-qft-supersymmetry-build-2026-10-23-step5-u25-admitted-sector-set",
    "severity": "nonfatal",
    "proposed_disposition": "fixed",
    "reason": "Explicit Sigma={[P]} completes the gauge datum without changing the invariant-polynomial identities or power counting.",
    "decision_ref": "decisions[1]"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "def-aqft-threshold-matching-map",
    "defect_id": "advanced-qft-supersymmetry-build-2026-10-23-step5-u25-matching-field-restatement",
    "severity": "fatal",
    "proposed_disposition": "open",
    "route": "frontier_owner",
    "reason": "Definition restates unrestricted even-field maps and an SO-only action although it claims a physical operator-contract instance for gauge and spinorial threshold sectors. Refer exactly the two clauses identified in consumer_checks; no outside edit performed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "ex-aqft-scalar-eom-operator-reduction",
    "defect_id": "advanced-qft-supersymmetry-build-2026-10-23-step5-u25-mass-spurion-grading",
    "severity": "fatal",
    "proposed_disposition": "open",
    "route": "frontier_owner",
    "reason": "The dimension-six relation combines weights six and four when m is a fixed nonzero complex coefficient. Specify a formal graded mass insertion and its specialization before claiming a homogeneous quotient class. The separate stale full F1 quote also needs owning-contract refresh."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "subject": "def-qft-framework-units",
    "proposed_disposition": "open_maintenance",
    "route": "published_physics_supplier_maintenance",
    "reason": "Current published Definition still contains inline supplier links, beginning with def-sr-affine-minkowski-model and def-inertial-frame-and-inertial-chart. Confirmed the digest presentation alert against current bytes. Its natural-unit engineering convention is usable; no published edit or whole-item audit was performed."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "subject": "def-reductive-and-linearly-reductive-over-c",
    "proposed_disposition": "open_maintenance",
    "route": "original_mathematics_owner_read_only_import",
    "reason": "Current imported published Definition contains inline def-rational-action-on-affine-variety, representation and Reynolds-theorem links. Confirmed the digest presentation alert against the snapshot. Its fixed-vector definition remains adequate for the assigned finite algebraic spaces. No import or original was edited."
  },
  {
    "defect_ledger": [
      {
        "subject": "post-aqft-smeft-model",
        "outcome": "confirmed_fatal",
        "defect_type": "dependency_citation",
        "status": "fixed",
        "finding": "The physical-operator supplier was invoked without its required algebraic group, physical-group map or rational finite-jet action. The repaired postulate supplies these with explicit formal-selection status.",
        "evidence": "decisions[0], reviews[0], repair_notes.public_interfaces[0] in this report"
      },
      {
        "subject": "post-aqft-smeft-model",
        "outcome": "confirmed_nonfatal",
        "status": "fixed",
        "finding": "The baryon-circle character needed integer normalization; b^(3B) defines the action and preserves neutral operators.",
        "evidence": "repair_notes.additional_findings[0] and the current Postulate"
      },
      {
        "subject": "def-aqft-chiral-power-counting",
        "outcome": "confirmed_fatal",
        "defect_type": "logic",
        "status": "fixed",
        "finding": "Valence-only labels admitted higher-order vertices with incompatible derivative content. The repaired Definition gives an explicit LO density and limits the formula to its vertices, including singlet decorations.",
        "evidence": "decisions[1], reviews[1], repair_notes.mathematical_check in this report"
      }
    ],
    "published_consumer_ledger": []
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "id": "def-aqft-eft-scattering-channel",
    "action": "propose_append",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "With two entries (p,r) and (4m^2-p,-r), each paired summand equals the full pair principal part; the old list therefore gives P=2P_pair and leaves -P_pair in B. Requiring holomorphy then wrongly excludes every nonzero listed pair. Repaired to one distinct smaller-location representative per crossing pair, retaining the actual residue and all analytic and matching conditions.",
    "evidence": "research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-initial-r1-u28.json",
    "post_sha256": "a62d2d34cb7c93456e1aa9a4c90d97e5b439f7a683388bf643eb0ea23d22b328",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "id": "ex-aqft-eft-positivity-application",
    "action": "propose_append",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "The candidate arithmetic is correct, but unindexed C_8 was not explicitly identified with the supplier coefficient C_8(mu_*) at a common matching scale. This is a notation/scope defect rather than a failure of the sign calculation. Repaired by fixing 0<mu_*<4m once and indexing all matching data, candidates, proof conclusions and the diagram axis by that same scale. No scale-independent sign is claimed.",
    "evidence": "research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-initial-r1-u28.json",
    "post_sha256": "e1b6e5fa298ae36502013c06f55b93ae99a92c247f2dafe241fdc7f35e541c4c",
    "uncertain": false
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "id": "thm-monotonicity-of-the-integral",
    "action": "propose_evidence_append_to_existing",
    "existing_defect_id": "advanced-qft-supersymmetry-build-2026-10-23-batch-28-published-zero-commentary",
    "status": "nonfatal-recorded",
    "maintenance_status": "OPEN original mathematics-owner wording maintenance",
    "reason": "Current Statement still has malformed zero-integral commentary. The checked conditional positivity chain uses only sound finite-integral nonnegativity, never zero-integral pointwise vanishing. Preserve and deduplicate the existing batch-28 maintenance finding; no published repair or independent audit is claimed.",
    "evidence": "research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-initial-r1-u28.json",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_open_finding",
    "subject": "def-qftx-physical-superspace-normalization",
    "location": "Definition, displayed D-to-F transfer at items/def-qftx-physical-superspace-normalization.md:49",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "OPEN",
    "reason": "The pointwise identity [U]_D=[P_phys U]_F contradicts the stated coefficient-extraction definitions. Take f in C_c^infinity(R^4) equal to (x^0)^2 near zero and U=f(x). The supplied operators give P_raw f=-theta-1 theta-2 Box f, where Box=eta^{mu nu} partial_mu partial_nu. At zero the left bracket is 0 and the right bracket is -1/2. This is the separate concern already identified in the rejection-blind batch digest; the assigned judge's top-monomial sign objection remains false.",
    "minimal_repair": "Preserve both brackets, all component normalizations and P_phys=-P_raw/2. Replace the displayed density equality by integral d^4x [U]_D = integral d^4x [P_phys U]_F for smooth coefficientwise compactly supported U, or precisely specified vanishing boundary flux; distinguish density equality modulo a spacetime divergence. Synchronize the exact owning manifest mirror and inspect direct consumers of the changed Definition under owner authorization.",
    "owner_route": "Root scientific finding/authorized repair; this initial unit cannot edit a false-positive subject. Closure remains blocked by this distinct confirmed defect.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/html/hep-ph/9709356v7"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "subject": "pthm-qftx-n1-wilsonian-f-term-nonrenormalization",
    "proposed_status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "evidence": "The constant F coefficient is unobservable by the rigid F bracket; Statement/A5 and Proof 1.1/5.1 now fix its ultraviolet representative. Additional FI common-kernel and constant-background-promotion defects repaired in the same carrier; no independent proof acceptance is asserted."
  },
  {
    "ledger": "canonical-defect-ledger",
    "subject": "def-qftx-wilsonian-n1-action-data",
    "proposed_status": "open-owner-referral",
    "severity": "fatal",
    "evidence": "Definition says constant Abelian FI terms are included in G, then promotes independent real D coefficients to unconstrained real superfields with background gauge Ward identities. For P_xi V_1 the gauge variation contains -[P_phys(P_xi)Lambda_1]_F+h.c., which need not vanish. The assigned theorem now states a local FI exception, but this unassigned upstream Definition remains for its owner; not edited."
  },
  {
    "ledger": "canonical-defect-ledger",
    "subject": "pthm-aqft-wilsonian-superpotential-nonrenormalization",
    "proposed_status": "open-frontier-consumer-referral",
    "severity": "fatal",
    "evidence": {
      "id": "pthm-aqft-wilsonian-superpotential-nonrenormalization",
      "path": "items/pthm-aqft-wilsonian-superpotential-nonrenormalization.md",
      "affected_use": "F2 and Proof 1.1 assert full F_rem equality and then W_lambda=W_Lambda0 before applying P_hol in 2.1.",
      "disposition": "refer_frontier_owner",
      "reason": "Its Statement does not fix the constant representative and does not require P_hol to annihilate numerical constants. The action definition allows a supplied relation quotient and does not itself remove all constant coefficients. Thus a retained constant can reproduce the original null-density ambiguity.",
      "minimality": "Carry the ultraviolet constant-representative convention into its Statement and F2/A3/1.1, preserving all retained nonconstant coefficients and the fixed projection. Do not require a common FI kernel because this proof does not consume the FI conclusion."
    }
  },
  {
    "ledger": "published-consumer-ledger",
    "proposed_status": "no-new-published-consumer-finding",
    "evidence": "All three direct item consumers found by dependency/reference search are draft frontier carriers. No published item was edited or adjudicated. Imported-mathematics presentation alerts in the batch digest remain outside this assignment."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "def-qftx-susy-vacuum-moduli-data",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "The displayed ordinary derivative gains an uncancelled derivative of a local gauge transformation. Replaced it by a precisely defined connection covariant derivative; unitary covariance makes the kinetic contraction invariant. F/D maps, their zero locus, compact-group quotient and conditional quantum rays are unchanged.",
    "post_sha256": "1ecbd19721f4c0ef4d7de81278770b53bed0c2e673717bbd2cccbf72c7e125c8"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "def-qftx-n2-coulomb-branch-data",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "The quantum period a(u) is not a classical eigenvalue coordinate at finite u. Bilal §3.4, printed p.12 and its footnote, explicitly gives only asymptotic equality and a nonzero inverse-u correction. Distinguished a_cl and replaced the quantum equality by a(u)^2/(2u) tending to 1 on a chosen weak-coupling electric branch at fixed dynamical scale.",
    "post_sha256": "510d90dc7a031f40f5c0faf71f4cbe340e046c93b713426438a09ddec29d744a"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "ex-qftx-n2-monopole-perturbed-vacuum",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The cited global polynomial model does not cover a merely holomorphic u; field rescaling alone cannot discharge that hypothesis. The local supplier already explicitly specifies the required positive sum-of-squares potential, so the repair proves its zero criterion directly and retains only the earlier compact-orbit convention. All product, equal-modulus, uniqueness and mass calculations remain valid.",
    "post_sha256": "6d2a6cdb4219583154c092200e2362002dc51a88fc6e1ef21aafebf1813cf235"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "pthm-qftx-n2-linear-monopole-bps-vortex-bound",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The square identity and full-field minimum are correct for the explicitly displayed polynomial functional, but unrestricted core fields need a separate formal extension rather than physical validity imported from the local supplier. Clarified that extension and the conditional patch/cutoff interpretation without dropping any variational conclusion. The cylinder class already restricts a to a valid disk; extra cutoff constraints must admit its minimizers and collars. Also supplied the missing polar-measure citation and arc-length conversion in step 2.1.",
    "post_sha256": "494f58435bd16dc1f603cb0e465f3edca7ec41fd0957bbb5148e8c0fa22bcb7d"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "refer_frontier_owner",
    "id": "pthm-qftx-n2-monopole-condensation-after-n1-perturbation",
    "status": "open",
    "severity": "nonfatal",
    "reason": "Proof 1.1 invokes F2 after rescaling despite the global polynomial W hypothesis, while its own F1 supplies a local holomorphic potential. The algebraic vacuum conclusion is directly justified by F1 positivity; clarify F2 as orbit convention only, as in the repaired assigned example. No source edit or adjudication outside this unit was performed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "refer_frontier_owner",
    "id": "pthm-qftx-n2-nonlinear-local-electric-flux-confinement",
    "status": "open",
    "severity": "nonfatal",
    "reason": "Current proof 3.1 infers radial integrability of G(R) from finite planar energy without an exact polar-measure supplier. Digest concern confirmed: Fubini alone does not change coordinates. Add the published polar formula and ds=R dθ convention, as done in the assigned linear theorem; no Statement change is needed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "refer_frontier_owner",
    "id": "post-qftx-n2-seiberg-witten-effective-solution",
    "status": "open",
    "severity": "nonfatal",
    "reason": "Current source metadata and Postulate references say §4.7 for the local-coordinate discussion. The consulted v1 source contains §5.7, The Effective Parameter, printed p.33. This is a source-locator repair only; adopted local inverse assumptions need no change."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No potentially defective published consumer or published original repair was identified in these exact supplier events. Published polar-coordinate suppliers were read as mathematical context and left byte-for-byte unchanged; all nine direct item consumers are draft."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "defect_id": "advanced-qft-supersymmetry-build-2026-10-23-step5-initial-r1-u35-t-status",
    "subject": "ex-qftx-n4-su2-line-operator-duality",
    "batch": "35",
    "class": "accuracy",
    "subclass": "citation-misattributed",
    "severity": "nonfatal",
    "location": "physical_scope and Verification step 2.1",
    "disposition": "fixed",
    "correction": "Distinguished the T theta shift from conjectural quantum S-equivalence throughout the assigned carrier and its owning metadata; retained all finite charge claims.",
    "evidence": [
      {
        "path": "research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-initial-r1-u35.json",
        "note": "Native assigned adjudication and scoped repair evidence; no independent review of the repair is claimed."
      }
    ]
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-aqft-two-group-split-background-coupling",
    "status": "fixed",
    "severity": "nonfatal",
    "defect": "Missing explicit fixed tangential data for the cited finite coupling interface",
    "reason": "The objection identifies a real omitted applicability hypothesis: F3/F4 require a fixed smooth manifold, tangent-bundle classifying map and tangential lift, whereas the original Example supplied only an oriented triangulation. This is nonfatal because A1 and the direct singleton sum already give Z_x=Z_y=1 and uniquely force the phase to be 1, independently of F4. Repaired by specifying the smooth unit sphere, radial identification, Gauss map tau_M(p)=p-perp, identity fibration xi and theta=tau_M, with the tangent-bundle identification and orientation held fixed. Verification now checks the lifting condition and the coherent phase law before applying F4.",
    "uncertain": false,
    "source_urls": [
      "https://msp.org/gt/2018/22-5/gt-v22-n5-p05-s.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "defect-ledger",
    "id": "ex-qftx-su2-brst-nilpotence",
    "model": "gpt-6-luna",
    "context_sha256": "5838ba02f6ea23fa8ee960e7cabe2a27a419ad6cf7837fe459514ca72e5d8a2e",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "Original verification step 2.1 applied an n>=1 supplier without that hypothesis. Steps 2.1 and 3.1 now separate the positive-dimensional supplier invocation from a complete local zero-dimensional proof. The fatal finding still counts in this round despite its completed repair."
  },
  {
    "canonical_defect_ledger": {
      "path": "research/defect-ledger.jsonl",
      "proposed_updates": [
        {
          "subject": "def-aqft-anomaly-matching-data",
          "finding": "Full-counterterm units omitted; bare unit-coefficient d^4x did not define a dimensionless action density.",
          "severity": "fatal",
          "disposition": "fixed",
          "repair": "Reference-mass normalized full jet algebra and finite vacuum-subtracted action changes.",
          "source": "step5-v2-initial-r1-u41"
        },
        {
          "subject": "def-aqft-anomaly-matching-data",
          "finding": "The stated upper-index gamma5 sign contradicted Bilal Eq. (2.20) and the adopted source-positive polynomial.",
          "severity": "fatal",
          "disposition": "fixed",
          "repair": "Corrected gamma5=-i gamma^0 gamma^1 gamma^2 gamma^3, preserving the intended source-positive determinant law.",
          "source": "step5-v2-initial-r1-u41"
        },
        {
          "subject": "ex-aqft-mixed-background-counterterm-shift",
          "finding": "Judge objection that no prerequisite admits C4=lambda B wedge K3.",
          "disposition": "false_positive",
          "evidence": "The current assigned supplier explicitly admits exactly this counterterm before and after repair; no item edit."
        },
        {
          "subject": "def-aqft-heavy-chiral-u1-threshold-data",
          "existing_defect_id": "advanced-qft-supersymmetry-build-2026-10-23-3a-batch-41-downstream-chirality-1",
          "proposed_action": "Retain current affected-use referral for owner reconciliation with existing open/fixed historical entries; do not infer present soundness from a historical fixed label.",
          "disposition": "open",
          "evidence": "Current Definition repeats positive upper-index product and falsely claims agreement with shared/Bilal convention."
        },
        {
          "subject": "pthm-aqft-heavy-chiral-threshold-wess-zumino-match",
          "existing_defect_id": "advanced-qft-supersymmetry-build-2026-10-23-3a-batch-41-downstream-chirality-2",
          "proposed_action": "Retain current affected-use referral for owner reconciliation with existing open/fixed historical entries; no historical taxonomy is reassigned.",
          "disposition": "open",
          "evidence": "Current Statement and Proof 1.2 repeat the opposite source chirality while importing the source-positive signed coefficient."
        }
      ]
    },
    "published_consumer_ledger": {
      "path": "research/published-consumer-supplier-ledger.md",
      "proposed_updates": [],
      "reason": "All six direct item consumers of the changed definition are draft frozen-frontier subjects. Two require frontier-owner attention; no published consumer or outside-frontier maintenance target was identified."
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-aqft-exact-background-rg-flow",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Record the repaired inaccurate supplier-domain restatement. Broader field data are explicitly local extensions; no missing integration hypothesis or invalid RG deduction was found. Controller adoption is required; no shared ledger was edited."
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no_change",
    "reason": "The exhaustive item/reference search found two direct draft consumers and no direct published consumer of this definition. No published repair or maintenance obligation was identified by this interface correction."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-aqft-susy-wilsonian-action",
    "proposed_status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "Action records were not identified with matching scheme vectors. The assigned repair supplies extraction, bijective coordinate identifications and conjugated matching; selected amplitude equality remains required."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-aqft-supersymmetric-threshold-matching",
    "proposed_status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "The original finite-coordinate conclusion allowed removal of the generated dimension-five F-component operator. The assigned repair requires its retention for the full coordinate formula and supplies the projected formula for smaller truncations."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-aqft-susy-wilsonian-action",
    "proposed_status": "fixed",
    "severity": "nonfatal",
    "reason": "The Step-4 digest correctly identified a false claim that full AC is required by the current regulated equivalence theorem. Corrected the assigned definition and threshold theorem while retaining full AC as an adopted sufficient assumption."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-aqft-soft-breaking-effective-operator",
    "proposed_status": "open",
    "severity": "nonfatal",
    "route": "frontier-owner",
    "reason": "Verification step 1.1 invokes the threshold theorem without explicitly supplying its finite-projection retention condition. Add a low-energy holomorphic representative space containing Phi^3 and Phi^4 and compatible coefficient coordinates; the displayed algebraic result is unchanged. The item is unassigned and was not edited."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-aqft-wilsonian-superpotential-nonrenormalization",
    "proposed_status": "open",
    "severity": "nonfatal",
    "route": "frontier-owner",
    "reason": "A1 states that the invariant-quotient/on-shell-equivalence input uses full AC, although the current equivalence supplier has no such premise. Correct that attribution in A1, step 1.1 and axiom metadata without changing the conditional nonrenormalization conclusion. The item is unassigned and was not edited."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-aqft-soft-breaking-effective-operator",
    "proposed_status": "open",
    "severity": "nonfatal",
    "route": "frontier-owner",
    "reason": "The axiom metadata, A1 and Verification step 2.1 repeat the unnecessary full-AC inheritance attribution. Treat full AC as adopted sufficient ambient data; the component extraction itself uses no choice. Refer alongside the retention clarification, without outside edits."
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "proposed_status": "no_update",
    "reason": "The exact dependency/reference search found only three direct draft frontier item consumers and the two draft owning pages. No published or outside-frontier consumer was found for either changed interface; no published item was edited or adjudicated."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "def-aqft-calibrated-pvalue",
    "severity": "nonfatal",
    "proposed_status": "fixed",
    "finding": "Name-only model hypothesis did not restate the actual measurable-space and probability-family supplier content.",
    "evidence": "Definition now explicitly supplies (S,S), nonempty Theta, probability measures P_theta, Borel-measurable T and the setwise simple-null pushforward. The referenced test-model supplier already gave the intended hypotheses, so this does not expose a counterexample to calibration.",
    "route": "controller-merge"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "exp-aqft-cms-global-smeft-fit-2026",
    "severity": "fatal",
    "defect_type": "other",
    "proposed_status": "fixed",
    "finding": "Omitted topU3l/CP restrictions materially broadened the source-reported model scope.",
    "evidence": "CMS section 1 and Table 1 impose the source flavor restriction and omit CP-violating variants; Setup, physical_scope and empirical conditions now distinguish 129 model operators from 64 studied coefficients. The unrestricted suppliers remain unchanged.",
    "route": "controller-merge"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "exp-aqft-cms-global-smeft-fit-2026",
    "severity": "nonfatal",
    "proposed_status": "fixed",
    "finding": "Setup called 21 fixed PCA directions ones with no sensitivity.",
    "evidence": "CMS sections 6-7 use a finite sensitivity cutoff, not identically vanishing response. Setup now says insufficiently constrained and defines the orthogonal source rotation; the 43/21 split and null-compatibility values are preserved.",
    "route": "controller-merge"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "exp-aqft-cms-multiboson-smeft-2026",
    "proposed_status": "false-positive",
    "finding": "Alleged expected intervals lack tabulated provenance.",
    "evidence": "Actual Table 4 Expected/Observed column headings and all 24 cells contradict the incomplete observed-only caption. No repair is licensed or needed.",
    "route": "controller-merge"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "subject": "def-cm-statistical-test-and-size",
    "proposed_status": "maintenance-referral",
    "severity": "nonfatal",
    "path": "items/def-cm-statistical-test-and-size.md",
    "location": "Definition",
    "affected_use": "([[def-measurable-space]], [[def-sigma-algebra]])",
    "invalidated_claim": "The complete Definition is interrupted by supplier hyperlinks, contrary to the current statement-first editorial rule; no mathematical hypothesis is thereby shown false.",
    "minimality": "Move the existing links after the complete Definition, preserving every hypothesis and dependency. Imported and published suppliers were not edited.",
    "route": "owner/separate-maintenance",
    "native_adjudication": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "subject": "def-cm-measurement-model",
    "proposed_status": "maintenance-referral",
    "severity": "nonfatal",
    "path": "items/def-cm-measurement-model.md",
    "location": "Definition",
    "affected_use": "([[def-probability-measure]])",
    "invalidated_claim": "The complete Definition is interrupted by supplier hyperlinks, contrary to the current statement-first editorial rule; no mathematical hypothesis is thereby shown false.",
    "minimality": "Move the existing links after the complete Definition, preserving every hypothesis and dependency. Imported and published suppliers were not edited.",
    "route": "owner/separate-maintenance",
    "native_adjudication": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "subject": "def-cm-likelihood-function",
    "proposed_status": "maintenance-referral",
    "severity": "nonfatal",
    "path": "items/def-cm-likelihood-function.md",
    "location": "Definition",
    "affected_use": "([[def-measurable-space]])",
    "invalidated_claim": "The complete Definition is interrupted by supplier hyperlinks, contrary to the current statement-first editorial rule; no mathematical hypothesis is thereby shown false.",
    "minimality": "Move the existing links after the complete Definition, preserving every hypothesis and dependency. Imported and published suppliers were not edited.",
    "route": "owner/separate-maintenance",
    "native_adjudication": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "subject": "def-cm-confidence-set-and-coverage",
    "proposed_status": "maintenance-referral",
    "severity": "nonfatal",
    "path": "items/def-cm-confidence-set-and-coverage.md",
    "location": "Definition",
    "affected_use": "([[def-measurable-space]])",
    "invalidated_claim": "The complete Definition is interrupted by supplier hyperlinks, contrary to the current statement-first editorial rule; no mathematical hypothesis is thereby shown false.",
    "minimality": "Move the existing links after the complete Definition, preserving every hypothesis and dependency. Imported and published suppliers were not edited.",
    "route": "owner/separate-maintenance",
    "native_adjudication": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "subject": "def-sr-total-four-momentum-and-invariant-mass",
    "proposed_status": "maintenance-referral",
    "severity": "nonfatal",
    "path": "items/def-sr-total-four-momentum-and-invariant-mass.md",
    "location": "Definition",
    "affected_use": "model of [[def-sr-affine-minkowski-model]]",
    "invalidated_claim": "The complete Definition is interrupted by supplier hyperlinks, contrary to the current statement-first editorial rule; no mathematical hypothesis is thereby shown false.",
    "minimality": "Move the existing links after the complete Definition, preserving every hypothesis and dependency. Imported and published suppliers were not edited.",
    "route": "owner/separate-maintenance",
    "native_adjudication": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "subject": "lem-extended-reals-complete",
    "proposed_status": "maintenance-referral",
    "severity": "nonfatal",
    "path": "items/lem-extended-reals-complete.md",
    "location": "Proof steps 2.4, 2.8 and 3.1",
    "affected_use": "Steps 2.4 and 3.1 say -infinity is below no real, and step 2.8 says +infinity is above no real.",
    "invalidated_claim": "These explanatory phrases reverse the extended-real order. The actual exclusions needed are that no real a satisfies a <= -infinity or +infinity <= a.",
    "minimality": "Correct those phrases in separate original-mathematics maintenance. The displayed inequalities already yield the intended exclusions, so the supremum/infimum statements and owned likelihood-supremum use need not change. No published supplier repair or whole-proof acceptance is claimed.",
    "route": "owner/original-mathematics-maintenance",
    "native_adjudication": false
  },
  {
    "canonical_defect_ledger": [
      {
        "id": "def-qftx-susy-background-data",
        "finding": "Undefined field-space differential structure in gauge-fixing definition",
        "classification": "confirmed_fatal",
        "defect_type": "other",
        "proposed_status": "fixed",
        "evidence": "Definition now specifies real Frechet charts, C1 derivatives, R, f, M=-df R, reduced splitting and continuous inverse as supplied data.",
        "report": "research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-initial-r1-u47.json"
      },
      {
        "id": "post-qftx-rigid-supersymmetric-background",
        "finding": "Missing A, Psi and K factors in formal measure",
        "classification": "confirmed_fatal",
        "defect_type": "other",
        "proposed_status": "fixed",
        "evidence": "The displayed formal integral explicitly integrates the complete independent physical/ghost/auxiliary tuple.",
        "report": "research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-initial-r1-u47.json"
      },
      {
        "id": "post-qftx-rigid-supersymmetric-background",
        "finding": "Dimensionless xi2 incompatible with the unnormalized four-dimensional pairing",
        "classification": "confirmed_fatal",
        "defect_type": "other",
        "proposed_status": "fixed",
        "evidence": "With Q of dimension 1/2 the assigned ghost dimensions give atilde0 dimension 3 and a0 dimension 1, so xi2 must have dimension 2; xi2=hatxi2/r^2 now enforces it. This is a separately confirmed digest finding on the same assigned item, not an invented judge tuple.",
        "report": "research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-initial-r1-u47.json"
      },
      {
        "id": "def-qftx-susy-background-data",
        "finding": "Incorrect first name in Peelaers source title",
        "classification": "confirmed_nonfatal",
        "proposed_status": "fixed",
        "evidence": "Source title corrected to Wolfger Peelaers (lectures), Bruno Le Floch (notes), matching the actual PDF title page.",
        "report": "research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-initial-r1-u47.json"
      },
      {
        "id": "post-qftx-rigid-supersymmetric-background",
        "finding": "Incorrect first name in Peelaers source title",
        "classification": "confirmed_nonfatal",
        "proposed_status": "fixed",
        "evidence": "Source title corrected to Wolfger Peelaers (lectures), Bruno Le Floch (notes), matching the actual PDF title page.",
        "report": "research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-initial-r1-u47.json"
      },
      {
        "id": "ex-qftx-susy-round-s4-localization-data",
        "finding": "Incorrect Vasilis Peelaers source-title attribution outside assigned write scope",
        "classification": "confirmed_nonfatal",
        "proposed_status": "open",
        "route": "owning_frontier_owner",
        "affected_use": "items/ex-qftx-susy-round-s4-localization-data.md sources.references names Vasilis Peelaers, while the linked title page names Wolfger Peelaers and notes by Bruno Le Floch.",
        "invalidated_claim": "Bibliographic attribution only; the examined mathematical consumer use remains sound.",
        "minimality": "Correct only the source-title metadata in the owning lane; no public claim or proof change is required.",
        "source_urls": [
          "https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf"
        ],
        "uncertain": false
      },
      {
        "id": "def-qftx-supersymmetry-fluctuation-complex",
        "finding": "Incorrect Vasilis Peelaers source-title attribution outside assigned write scope",
        "classification": "confirmed_nonfatal",
        "proposed_status": "open",
        "route": "owning_frontier_owner",
        "affected_use": "items/def-qftx-supersymmetry-fluctuation-complex.md sources.references names Vasilis Peelaers, while the linked title page names Wolfger Peelaers and notes by Bruno Le Floch.",
        "invalidated_claim": "Bibliographic attribution only; the examined mathematical consumer use remains sound.",
        "minimality": "Correct only the source-title metadata in the owning lane; no public claim or proof change is required.",
        "source_urls": [
          "https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf"
        ],
        "uncertain": false
      },
      {
        "id": "pthm-qftx-qexact-localization-ward-identity",
        "finding": "Incorrect Vasilis Peelaers source-title attribution outside assigned write scope",
        "classification": "confirmed_nonfatal",
        "proposed_status": "open",
        "route": "owning_frontier_owner",
        "affected_use": "items/pthm-qftx-qexact-localization-ward-identity.md sources.references names Vasilis Peelaers, while the linked title page names Wolfger Peelaers and notes by Bruno Le Floch.",
        "invalidated_claim": "Bibliographic attribution only; the examined mathematical consumer use remains sound.",
        "minimality": "Correct only the source-title metadata in the owning lane; no public claim or proof change is required.",
        "source_urls": [
          "https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf"
        ],
        "uncertain": false
      }
    ],
    "published_consumer_ledger": []
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-qftx-supersymmetry-fluctuation-complex",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "finding": "The original configuration subset and transformation had no differentiable local structure, leaving the fluctuation derivative undefined.",
    "resolution": "Supplied local graded charts, smooth coefficient maps, compatible constraints and the formal first-order construction, including its square on a common smooth domain."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-qftx-supersymmetry-fluctuation-complex",
    "severity": "nonfatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "finding": "The concrete spinors, lifted symmetry, ghost transformation and completed gauge fixing were used without their actual model supplier.",
    "resolution": "Added post-qftx-rigid-supersymmetric-background as a formulation prerequisite and identified its content before the round-sphere conventions."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "def-qftx-instanton-number-and-asd-sector",
    "action": "propose_new_scoped_record",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "Opposite Hermitian-linearity convention in the SU(2) Definition.",
    "reason": "The supplied Hermitian definition is linear in its first argument, whereas v* w is conjugate-linear there. Replaced h by w* v and checked the associated metric and d+A compatibility directly. This is a convention mismatch closed by conjugating the scalar pairing; U(2), SU(2), the connection, curvature, norms and Chern number are identical.",
    "repair_report": "research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-initial-r1-u5.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "lem-qftx-round-s4-spin-twist-index-one",
    "action": "record_false_positive_without_modifying_historical_findings",
    "reason": "The Statement explicitly fixes Delta+ as the +1 eigenspace of Gamma=-c1c2c3c4. Its displayed Clifford matrices give Gamma=diag(-I,I), so Delta+(a,b)=b in precisely this quaternion coordinate convention. The judge inserts an unstated rule Delta+(a,b)=a from suggestive factor subscripts. Direct block multiplication, the positive-block connection -1/4 sum omega_ij c_i c_j, and the clutch (u,u^-1) give the stated self-dual BPST connection on the Gamma-positive twist; there is no wrong-twist deduction.",
    "repair_report": "research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-initial-r1-u5.json"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "subject": "def-qftx-instanton-number-and-asd-sector",
    "action": "propose_scoped_supplier_use_note",
    "reason": "The published def-complex-linear-and-compatible-bundle-connections explicitly uses a first-linear Hermitian pairing. Its current input is met by the corrected draft h(v,w)=w* v; the published Chern–Weil comparison is then applied under full AC. No published source defect or published consumer repair is proposed."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-qftx-physical-bps-index",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "The original restatement included the zero vector, contrary to its exact BPS supplier. Added the missing nonzero condition and checked both direct consumers; their operator-only uses remain valid.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-qftx-superconformal-index-free-chiral",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "Removed the premature trace-class inference and corrected F1's attribution. The existing convergence argument supported the conclusion; the repaired proof explicitly establishes protected trace class before using A2 and F2.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1608.02965"
    ],
    "familiar": false
  },
  {
    "ledger": "published-consumer-ledger",
    "id": "def-trace-class-operator",
    "status": "nonfatal-recorded",
    "severity": "nonfatal",
    "disposition": "refer_original_mathematics_maintenance",
    "path": "items/def-trace-class-operator.md",
    "observed_raw_sha256": "b3a8ca3ab9dc51e63e689e8e75d5e96b01d7e8b785327ff828d08b9aaa8bd48d",
    "affected_use": "The Definition opens with an inline wikilink to def-countable-choice and continues with supplier hyperlinks inside the complete mathematical definition.",
    "invalidated_claim": "No mathematical claim is invalidated; this is an uninterrupted-definition presentation violation confirmed against the actual imported bytes.",
    "minimality": "The original mathematics owner can preserve the complete definition and every dependency while moving links into an immediately following Definition references section. Physics imports remain read-only; no Step 5 item gate or adjudication is claimed for this alert.",
    "reason": "The Step-4 alert is confirmed as a presentation defect; left the published imported item unchanged and referred it separately to original mathematics maintenance.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-ledger",
    "id": "def-trace-of-a-trace-class-operator",
    "status": "nonfatal-recorded",
    "severity": "nonfatal",
    "disposition": "refer_original_mathematics_maintenance",
    "path": "items/def-trace-of-a-trace-class-operator.md",
    "observed_raw_sha256": "65e37b4124755bde324a7bc369e3c5ef79e18c1340863e13a7ae5cc90a7329fa",
    "affected_use": "The Definition opens with an inline wikilink to def-countable-choice and continues with supplier hyperlinks inside the complete mathematical definition.",
    "invalidated_claim": "No mathematical claim is invalidated; this is an uninterrupted-definition presentation violation confirmed against the actual imported bytes.",
    "minimality": "The original mathematics owner can preserve the complete definition and every dependency while moving links into an immediately following Definition references section. Physics imports remain read-only; no Step 5 item gate or adjudication is claimed for this alert.",
    "reason": "The Step-4 alert is confirmed as a presentation defect; left the published imported item unchanged and referred it separately to original mathematics maintenance.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-qftx-physical-bps-charge-data",
    "finding": "Assigned monopole/dyon arrow-sign objection",
    "proposed_status": "false-positive",
    "reason": "The chosen skew Euler form counts arrows second->first positively. Its ordered value on (m,d) is +2 for the existing d->m orientation. Denef's distinct arrow-sign convention does not invalidate an explicitly conditional local convention. No source repair or new acceptance stamp is proposed.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/hep-th/0206072"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-qftx-physical-bps-charge-data",
    "finding": "Rest-fiber action is not supplied as a mathematically typed little-group representation",
    "proposed_status": "OPEN",
    "severity": "fatal",
    "defect_type": "logic",
    "route": "owner-scientific-repair",
    "location": "items/def-qftx-physical-bps-charge-data.md:63-67, Definition",
    "affected_use": "The Definition equips a massive rest fiber with a full unitary super-Poincare representation at fixed momentum and then defines pi(g)=U(g,0)|_H1 as the rotation action used to specify J3 and the second-helicity trace.",
    "invalidated_claim": "The asserted restriction is strongly continuous and supplies the needed rest-fiber spin action. An abstract momentum fiber is not supplied with an embedding or an action of the full U, and a nonzero normalizable fixed-momentum subspace cannot provide this missing construction under the cited representation definition.",
    "reason": "This verifies the separate Step-4 concern against current suppliers. Write p=(-M,0,0,0), M>0, in covector coordinates. In the normalizable-subspace reading choose nonzero psi with E({p})psi=psi. Spectral covariance in def-qftx-unitary-super-poincare-representation gives E({Lambda_g^vee p})U(g,0)psi=U(g,0)psi. For nontrivial boosts g_n tending to the identity these momenta differ from p. Orthogonality of disjoint spectral projections gives ||U(g_n,0)psi-psi||^2=2||psi||^2, contradicting strong continuity. In the alternative abstract-fiber reading, U(g,0)|_H1 is undefined without additional fiber-action data. The central-charge theorem explicitly avoids identifying an abstract rest fiber with a normalizable subspace. Empty stable support does not cure the defective specification for a supplied supported sector. This is a distinct confirmed defect, not evidence for the arrow objection.",
    "minimality": "Supply an abstract massive rest supertranslation fiber with the precise BPS supplier's operator/domain data and a separately supplied strongly continuous unitary SU(2) representation on that fiber. Require invariance of the BPS subspace and use this action for exp(-i theta J3). Retain the same charge labels, mass saturation, stability/gap, trace, and physical qualifications. Do not infer fiber actions by restricting a full Hilbert-space representation, or weaken the item to permit only empty support. Any resulting Definition change requires examining the two direct consumers listed in repair_notes.",
    "repair_status": "not_repaired_here",
    "authorization_limit": "The exact task says 'Do not edit false-positive items.' The original assigned tuple is a false positive; a distinct owner finding/repair route is necessary. No claim of completed item repair or closure is made.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-ledger",
    "id": "def-trace-class-operator",
    "proposed_status": "maintenance-referral",
    "severity": "nonfatal",
    "reason": "The current imported published Definition contains inline supplier wikilinks, including its Countable Choice and singular-value suppliers. This confirms the digest's uninterrupted-definition presentation alert. The local physical consumer assumes a bounded trace-class insertion explicitly, so this presentation defect does not invalidate that use. Imported mathematics and originals are read-only; no repair, gate, source retrieval or whole-supplier acceptance is claimed.",
    "affected_use": "items/def-qftx-physical-bps-charge-data.md requires the second-helicity insertion to be bounded and trace class, under the supplier's AC_omega hypothesis.",
    "invalidated_claim": "No mathematical conclusion of the physical consumer is invalidated by these inline links; only the supplier's required uninterrupted presentation is defective.",
    "minimality": "The mathematics owner should move links after the complete Definition while preserving all hypotheses, formulas and logical dependencies.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-ledger",
    "id": "def-trace-of-a-trace-class-operator",
    "proposed_status": "maintenance-referral",
    "severity": "nonfatal",
    "reason": "The current imported published Definition contains inline supplier wikilinks in the Countable Choice, supplied-basis, summability and trace discussion, confirming the digest's presentation alert. The physical consumer supplies its Hilbert basis and uses the absolutely convergent diagonal trace; it does not infer ambient basis existence. This is separate mathematics maintenance, with no imported or original source edit and no new acceptance claim.",
    "affected_use": "items/def-qftx-physical-bps-charge-data.md defines Omega=-1/2 tr_E(B) relative to a supplied Hilbert basis and explicitly does not need basis independence.",
    "invalidated_claim": "The inline links violate uninterrupted presentation but do not invalidate the supplied-basis trace used by this consumer.",
    "minimality": "The mathematics owner should retain the complete definition and its convergence argument, moving all links to the immediately following Definition references section.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-qftx-spectral-network-data",
    "proposed_defect_id": "advanced-qft-supersymmetry-build-2026-10-23-step5-u55-relative-central-charge-domain",
    "severity": "fatal",
    "defect_type": "other",
    "disposition": "fixed",
    "reason": "The original relative-charge genericity condition lacked its domain and map. Endpoint sectors and affine central-charge maps are now supplied with physical/geometric separation and conditional period descent.",
    "evidence": "research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-initial-r1-u55.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-qftx-spectral-network-data",
    "proposed_defect_id": "advanced-qft-supersymmetry-build-2026-10-23-step5-u55-support-rotation",
    "severity": "fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "reason": "The digest identifies a separate confirmed defect: a 1-2 spatial rotation sends (x^1,0,0) off the original fixed support when sin(t) is nonzero. Replaced that support by the x^3-axis arrangement, retained J_12, and required the model to supply actions on decorated labels and BPS sectors.",
    "evidence": "research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-initial-r1-u55.json"
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "id": "def-qftx-spectral-network-data",
    "disposition": "no-published-maintenance-required",
    "reason": "The only current direct item consumer is the draft frontier T3 example. No published item was changed or found defective; imported mathematical suppliers remain read-only."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "def-qftx-smooth-sobolev-gauge-configuration",
    "location": "Definition: final sentence of the finite-center paragraph",
    "severity": "nonfatal",
    "proposed_disposition": "fixed",
    "reason": "The cited calculus interface did not establish the finite-center Hilbert Lie quotient. The assigned repair now supplies the quotient charts, topology, separation and descended operations locally; preserve the original judge tuple and earlier independent evidence."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "lem-qftx-gauge-sobolev-calculus",
    "location": "Original Proof 3.1 and Statement multiplication clause",
    "severity": "nonfatal",
    "proposed_disposition": "fixed",
    "reason": "The extra Banach inverse-function invocation lacked its open-domain map, and the multiplication clause lacked a target. The repaired proof specifies the ambient map with invertible derivative and its restriction, while the Statement explicitly separates matrix multiplication and the adjoint-valued bracket."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "refer_to_frontier_owner",
    "subject": "thm-qftx-sobolev-smooth-irreducible-gauge-bundle",
    "location": "Facts F6; Proof 5.2 and 6.1",
    "severity": "nonfatal",
    "proposed_disposition": "owner_review_required",
    "reason": "The Step-4 digest concern is present in the current proof: chartwise g^{ij} partial_i partial_j on matrix entries is not identified with the global formally symmetric bundle operator required by its F6 supplier. A fixed smooth connection Laplacian on the associated matrix bundle, with the smooth lower-order difference placed on the right, supplies the missing bridge for regularity and convergence. This unassigned draft frontier item was not edited or adjudicated."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "Both assigned carriers and every direct dependency/reference consumer are draft members of the frozen frontier. No published carrier or imported mathematical supplier was repaired, and no published consumer use was found."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "def-qftx-suspension-pinch-map",
    "proposed_status": "fixed",
    "severity": "nonfatal",
    "finding": "F1 omitted the supplier's well-pointed CGWH hypotheses. The arbitrary-space definition and closed-half pasting/quotient-descent proof are valid independently. Repaired F1 to distinguish the restricted supplier convention from the local construction; Definition is unchanged.",
    "adjudication_ref": {
      "run": "advanced-qft-supersymmetry-build-2026-10-23",
      "phase": "initial",
      "round": 1,
      "unit": "58",
      "model": "gpt-6-luna",
      "context_sha256": "407292f500d07a5a3455233d4a19818eb04a6ecc7c206d2dbf4e426a5f87b1a1"
    },
    "reason": "Proposed current-round finding and completed repair for controller adoption; no shared ledger or independent acceptance was written.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "thm-qftx-reduced-gauge-group-sphere-nontriviality",
    "proposed_status": "fixed",
    "severity": "fatal",
    "finding": "The original path-lifting argument placed the terminal lift in the starting fiber, which is false for a non-loop. Repaired step 1.1: a path q(x) to q(y) lifts from x to yz for z in Z_N; conversely a path x to yz projects to one from q(x) to q(y). This proves the claimed component-orbit correspondence and the infinite-components conclusion without changing the Statement.",
    "adjudication_ref": {
      "run": "advanced-qft-supersymmetry-build-2026-10-23",
      "phase": "initial",
      "round": 1,
      "unit": "58",
      "model": "gpt-6-luna",
      "context_sha256": "87ea63900dad424ea68ca4fb8e37fd1337a81d4859077007e6b5bd6784e9f3ad"
    },
    "reason": "Proposed current-round finding and completed repair for controller adoption; no shared ledger or independent acceptance was written.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/DEFECT-LEDGER.md",
    "id": "thm-qftx-projective-gaga-for-monad-data",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "The original F5 and step 10.1 require injective O-module sheaves to be flasque, but the cited enough-injectives Statement supplies only resolutions, and flasque acyclicity assumes flasqueness. This essential missing citation affects the family comparison. The existing published lemma lem-injective-modules-flasque-and-ext-of-structure-sheaf, clause 1, proves the required result for every ringed space under AC; its extension-by-zero proof was checked against Stacks Lemma 20.8.1. Added that direct dependency and precise F5 citation and made the restricted acyclic-resolution argument explicit, without changing the Statement.",
    "repair_evidence": [
      "items/thm-qftx-projective-gaga-for-monad-data.md#Facts & Assumptions",
      "items/thm-qftx-projective-gaga-for-monad-data.md#Proof",
      "research/advanced-qft-supersymmetry-build-2026-10-23-batch-59.proof-contracts.json"
    ],
    "uncertain": false,
    "source_urls": [
      "https://stacks.math.columbia.edu/tag/01EA"
    ],
    "familiar": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "id": "thm-flasque-sheaves-acyclic",
    "severity": "nonfatal",
    "status": "open",
    "route": "original-mathematics-maintenance",
    "reason": "Read-only presentation finding in the imported published supplier: proof step 5.1 ends with the exact text \"[step 1.1, step 4.1] ∎ [F4] ∎\"; punctuation/tags/QED do not follow the required final-step layout, and steps 2.1–4.1 also contain duplicate trailing tag groups. The checked dimension-shifting argument still establishes the acyclicity used by the assigned theorem. Imported bytes were left unchanged; refer the formatting repair to the original mathematics owner, outside Step 5 frontier work.",
    "affected_use": "The assigned theorem F5 and step 10.1 use only the published Statement that every open restriction of a flasque abelian sheaf is cohomologically acyclic. The extra rendered tag/QED tokens do not invalidate that mathematical implication.",
    "invalidated_claim": "No mathematical claim was found invalidated by these presentation tokens.",
    "minimality": "Original mathematical maintenance may remove duplicate trailing tag/QED groups without changing the Statement; physics imports and pins remain read-only.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-qftx-su2-wilson-plaquette-measure",
    "status": "false_positive",
    "reason": "False positive: the Definition begins 'Use the matrix group G_2=SU(2)' and defines mu_2 on that group. Its finite link measure is the product of mu_2 over the positive edges, whose domain is necessarily SU(2)^{E+}; the stated link matrices and their finite products therefore lie in SU(2), the domain of tau. The generic G in the cited reusable lattice datum does not override this explicit local group selection.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-qftx-su2-one-plaquette-wilson-average",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "location": "Verification, original step 1.1; repaired steps 1.1 and 2.1",
    "reason": "Confirmed fatal logic gap: old Verification step 1.1 concluded the unnormalized four-link partition factor from F3's normalized plaquette law. A normalized law is unchanged when its unnormalized weight is multiplied by a positive constant, so that implication does not determine Z_square. Repaired by integrating A first in U_p=A B C^{-1} D^{-1}: right invariance of mu_2, supplied by the one-plaquette average lemma, and finite-probability Fubini prove the unweighted Haar pushforward. Applying it to exp(beta tau) gives Z_square=exp(-beta) z_beta; applying it to weighted Borel indicators proves the original holonomy law.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "defect_ledger": [
      {
        "ledger": "defect",
        "id": "lem-qftx-asd-penrose-kernel-vanishing",
        "severity": "nonfatal",
        "disposition": "fixed",
        "finding": "Confirmed nonfatal auxiliary-claim defect: steps 1.1–2.1 already prove the unchanged conditional Statement by injectivity and a positive energy identity, but the extra all-Ward application 3.1 omitted the coupled supplier's full AC premise. Full AC and the exact Ward operator are now explicit in A1, L1 and the additional proof application; the primary conditional proof no longer invokes Ward existence."
      },
      {
        "ledger": "defect",
        "id": "thm-qftx-zero-fi-regular-adhm-asd-correspondence",
        "severity": "fatal",
        "defect_type": "logic",
        "disposition": "fixed",
        "finding": "The judge overstates the ordinary forward gap: the normalization supplier's proof 2.1 already constructs the forward Ward object, and the underlying intrinsic theorem has a converse. However, the criticized correspondence steps 3.1 and 5.1 claim first-order inverse compatibility from A4/A5, whose Ward interface is ordinary only. This is a fatal gap in the stated first-order conclusion. The repair gives explicit forward reality/charge checks and proves the missing dual-number Ward equivalence, framed morphisms and restricted real tangent quotients locally, without changing the Statement."
      },
      {
        "ledger": "defect",
        "id": "ex-qftx-zero-fi-flat-framed-sector",
        "severity": "nonfatal",
        "disposition": "fixed",
        "finding": "Confirmed nonfatal omitted-premise defect in the auxiliary comparison: original step 2.1 used the conditional correspondence without its explicit full AC hypothesis. The Example's singleton classification is preserved and now has a direct positive-trace energy calculation and explicit converse; the additional comparison is made only under full AC and all ordinary supplier hypotheses. Parallel transport on simply connected S4 fixes the global framing and proves the based stabilizer trivial."
      },
      {
        "ledger": "defect",
        "id": "lem-qftx-linear-twistor-monad-charge-normalization",
        "severity": "nonfatal",
        "disposition": "refer_frontier_owner",
        "finding": "Outside assigned repair scope: the Statement places H and ch in singular cohomology, while Facts F1/F4 cite def-chern-character-and-todd-class, whose Definition is in the rational Chow ring. Proof 1.1 needs an explicit topological line-bundle justification. The numerical claim is sound: split the two monad sequences smoothly and apply multiplicativity of total topological Chern classes, or additivity of the topological Chern character. The assigned correspondence supplies this finite monad total-Chern calculation locally in proof 1.2.",
        "affected_use": "items/lem-qftx-linear-twistor-monad-charge-normalization.md: Facts F1/F4 and Proof 1.1 infer a singular-cohomology Chern character from an algebraic Chow-ring definition.",
        "invalidated_claim": "The cited Definition alone does not establish the asserted domain transition; the finite monad charge computation itself is recoverable without changing the Statement.",
        "minimality": "Add the two smooth kernel/image sequence splittings and compute topological line classes; no change to its Statement or consumer interfaces is needed.",
        "uncertain": false,
        "source_urls": [],
        "familiar": true
      }
    ],
    "published_consumer_ledger": []
  },
  {
    "id": "thm-qftx-critical-flux-cylinder-linear-energy",
    "ledger": "canonical-defect-ledger",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Corrected the sign of *dh in F2 and step 1.3 for conjugate vortices; theorem Statement and collar estimate retained."
  },
  {
    "id": "ex-qftx-multiple-centred-critical-vortex",
    "ledger": "canonical-defect-ledger",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "Restored finite-energy end traces and exact fixed-flux/canonical/angular hypotheses in the Example, F4 and proof step 3.1; the former broader end class included inadmissible infinite-energy traces."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "ex-qftx-gaga-analytic-nonreduced-quotient",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "Propose recording the formal-ring/quotient notation collision in Verification 1.1 and 2.1 as repaired. The witness x is compared with x^2T in T, and its nonzero coset belongs to Q=T/(x^2T). No public claim changes."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "lem-qftx-gaga-algebraic-analytic-local-completions",
    "severity": "nonfatal",
    "disposition": "open",
    "route": "assigned-item owner",
    "reason": "Confirmed the separate Step-4 digest concern in current Remarks: IT is an ideal of T, so the instruction to quotient every corner by IT is ill-typed. Top corners require IA_0 and IH; bottom corners require IT. The displayed ambient square and Proof 4.1 use the correct maps. Refer the wording correction to its owner; this dispatch does not edit or adjudicate that unassigned supplier."
  },
  {
    "ledger": "defect-ledger",
    "id": "lem-qftx-gaga-frechet-complex-compact-finiteness",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "The old title omits the necessary cohomology-surjectivity hypothesis; a zero cochain map to an infinite-dimensional complex concentrated in degree q disproves the unqualified reading. The Statement already has both hypotheses. Checked the surjective cocycle-plus-boundary map, compact perturbation and quotient-openness argument. Repaired only the title and manifest title mirror.",
    "correction": "Qualified title by cohomology surjectivity; Statement and Proof unchanged."
  },
  {
    "ledger": "defect-ledger",
    "id": "lem-qftx-gaga-coherent-section-restriction-compact",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "The expression 1/j lacked an explicit positive index range. Added integers j>=1 in proof step 2.1 and its contract derivation. These compact sets exhaust every compact target subset; Cauchy bounds, Ascoli and diagonal convergence give compact free restriction, and the open presentation quotient transfers compactness to coherent sections. The Statement remains unchanged.",
    "correction": "Explicit positive exhaustion index j>=1 in proof step 2.1 and exact derivation mirror; Statement unchanged."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-qftx-gaga-analytic-untwisted-obstruction",
    "proposed_action": "record-fixed-defect",
    "severity": "nonfatal",
    "status": "fixed",
    "location": "Original Proof 2.1; repaired Proof 1.2",
    "reason": "The general degree-k support classification lacked its empty-support primitive. The explicit single-face primitive and finite-mode summation now complete it. No public claim or dependency changed.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology",
    "proposed_action": "retain-false-positive-adjudication-without-defect-row",
    "reason": "The point case is discharged before the explicit r>=1 branch; the cited twisting-bundle definition is not used outside its range.",
    "uncertain": false
  },
  {
    "ledger": "published-consumer",
    "proposed_action": "no-update",
    "reason": "No published carrier was edited and no defective published consumer use was discovered. Both public sections are unchanged, so no supplier-interface maintenance event is generated.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-qftx-coupled-penrose-positive-orientation-asd",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "Confirmed the final sentence asserts an invalid single-plane equivalence: the nonzero self-dual form dz1 wedge dbar z1 + dz2 wedge dbar z2 has zero F_12. The finite-t polynomial correctly detects all three self-dual coefficients. Repaired the statement to quantify over the full CP1 family and computed the second-chart polynomial explicitly; zero rank and complex End(E) coefficients are included.",
    "adjudication_ref": {
      "run": "advanced-qft-supersymmetry-build-2026-10-23",
      "phase": "initial",
      "round": 1,
      "unit": "68",
      "model": "gpt-6-luna",
      "context_sha256": "f6d9093eb2cc294ba3f48aeaac8d0bea8d3ef3d63dc44f43dc92246ea4d72455"
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-qftx-penrose-flat-summand-vanishing",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "Verification 1.1 replaced the example bundle by the trivial summand and never applied the theorem to F0 or the whole sum. Repaired it by checking unitarity, block curvature, full AC and both Dolbeault components for A0 direct-sum d and F0 direct-sum O^m, then applying F1 to the full bundle and its dual. Step 2.1 now proves the finite direct-sum cohomology and harmonic-projection identities with the stated A-indexed notation, including m=0.",
    "adjudication_ref": {
      "run": "advanced-qft-supersymmetry-build-2026-10-23",
      "phase": "initial",
      "round": 1,
      "unit": "68",
      "model": "gpt-6-luna",
      "context_sha256": "7de0c9c9b0978ba37c11dad2ab23602edcda8f04b422af63f61dfd38bcfb3619"
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-qftx-coupled-penrose-incidence-geometry",
    "severity": "nonfatal",
    "status": "open",
    "disposition": "refer_item_owner",
    "location": "items/def-qftx-coupled-penrose-incidence-geometry.md#Remarks",
    "reason": "Verified the batch-68 Step-4 digest: both vertical TikZ arrow labels contain two literal backslashes before pi, so the intended projection labels need a single backslash. The inclusion/projection square is mathematically correct. This unassigned draft was left unchanged and needs its owner's presentation repair."
  },
  {
    "ledger": "canonical-defect-ledger",
    "subject": "lem-qftx-positive-real-monad-charge-normalization",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "finding": "F5 overstates the real Chern–Weil comparison supplier as integral Whitney multiplication.",
    "repair": "Direct published integral Whitney supplier, explicit applicability and exact-sequence splitting; no public claim change."
  },
  {
    "ledger": "canonical-defect-ledger",
    "subject": "lem-qftx-positive-real-monad-chain-lift",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "F2 misattributes the separately assumed scalar global-sections equality to the negative-twist supplier.",
    "repair": "Separate existing hypothesis and supplier conclusion; step 4.1 cites the hypothesis directly."
  },
  {
    "ledger": "canonical-defect-ledger",
    "subject": "ex-qftx-positive-real-monad-zero-charge",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "Step 1.1 incorrectly calls the all-zero indexed word-vector family empty.",
    "repair": "State that every word vector, including I(w) for length zero, vanishes and hence spans V=0; align contract boundary."
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "subject": "thm-cohomology-projective-space-twisting-sheaves",
    "status": "maintenance-required",
    "severity": "nonfatal",
    "route": "owner / separate original-mathematics maintenance; imported carrier left read-only",
    "finding": "Current published proof has stale bare step references: 3.1 and 3.2 name 1.6 instead of 2.2; 3.3 names decomposition 1.5 instead of 2.1; 4.1 also names nonexistent 1.6 and 2.3.",
    "affected_use": "Assigned charge-normalization proof step 1.1 uses only the supplier Statement at A=C,n=3,d=-1,0,1, giving chi values 0,1,4. Those computations agree with the displayed Laurent groups in supplier step 2.2. The stale locators do not change those values.",
    "invalidated_claim": "No assigned claim is invalidated; proof-navigation references in the imported published supplier require separate maintenance.",
    "minimality": "Correct only the cited bare step numbers after original-mathematics owner review; no imported supplier or outside consumer was edited here.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "subject": "def-standard-product-torus-as-a-compact-lie-group",
    "action": "record_adjudicated_repair",
    "severity": "fatal",
    "defect_type": "other",
    "proposed_status": "fixed",
    "reason": "The untyped rank parameter made the finite product and dimension undefined for permitted noninteger values. The Definition and Given line now explicitly require a nonnegative integer, and the owning manifest mirrors the repaired Definition. The original rejected tuple remains preserved."
  },
  {
    "ledger": "canonical-defect-ledger",
    "subject": "lem-torus-classifying-space-cohomology",
    "action": "refer_frontier_owner",
    "severity": "fatal",
    "defect_type": "other",
    "proposed_status": "OPEN",
    "reason": "A separate current-source finding: its Statement and Given line also say only r>=0 before forming r-fold products and polynomial generators. Its finite-product proof is valid for integer r, and the supplier repair preserves its F6 use, but its standalone parameter declaration needs the same explicit nonnegative-integer condition. This consumer is in the frozen frontier but outside this assignment; no edit or adjudication of it was performed."
  },
  {
    "ledger": "canonical-defect-ledger",
    "subject": "def-torus-equivariant-cohomology-cartan-model",
    "action": "reconcile_existing_digest_concern_with_frontier_owner",
    "severity": "nonfatal",
    "proposed_status": "OPEN",
    "reason": "Verified the batch digest's distinct concern against current Proof 4.1: for M empty it calls the form complex empty. Each space of forms is the zero vector space, so the form complex is the zero complex; the Borel space is empty. Its cohomology conclusion is correct. Refer the minimal wording correction to the frontier owner without duplicating an existing ledger finding. No source edit was made here."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-equivariant-controlled-symbol-realization",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "Proof 7.2 used arbitrary-density formal adjoints as equivariant operators. Repaired by an explicit invariant auxiliary density for the R(G) computation while retaining arbitrary-density harmonic representatives. Only the proof and its owning contract changed."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-equivariant-fourier-hardy-symbol-index",
    "status": "fixed",
    "severity": "nonfatal",
    "defect_type": "other",
    "reason": "Verification 1.1 incorrectly asserted norm one at the allowed zero representation. Replaced by norm at most one; Verification 4.1 now specializes to scalar coefficients before deriving the scalar index. The Example and its zero-coefficient case are preserved."
  },
  {
    "ledger": "canonical-defect-ledger",
    "subject": "lem-equivariant-symbol-fixed-inclusion-localization",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "location": "Facts F2 and Proof 7.1",
    "reason": "Proposed fixed finding: the compact-ambient slice interface was used for a noncompact orbit immersion; the repaired item cites the published general orbit theorem directly and keeps its complete local tube proof.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "subject": "lem-equivariant-symbol-fixed-inclusion-localization",
    "status": "fixed",
    "severity": "nonfatal",
    "defect_type": "other",
    "location": "Proof 10.1",
    "reason": "Proposed fixed ancillary finding: arbitrary finite-rank bundles are continuous in F1, so character-averaged eigenspace projections are continuous; smoothness was unnecessary and unsupported.",
    "uncertain": false
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "no_update",
    "reason": "No published item was edited and no potentially defective published consumer was found. The assigned mathematical Statement is byte-for-byte unchanged, so this repair produces no supplier-interface consumer event.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-fixed-finding",
    "subject": "lem-qftx-proper-closed-subgroup-has-annihilating-character",
    "severity": "fatal",
    "adjudication_outcome": "confirmed_fatal",
    "reason": "F1 incorrectly promoted a homogeneous quotient manifold to a Lie group. Step 1.1 now proves normality and smooth multiplication/inversion using local submersion sections from the constant-rank theorem before applying the Lie exponential. The exponential is explicitly open, justifying the compact quotient used in the lattice argument. The Statement and AC_omega hypothesis are unchanged.",
    "uncertain": false,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-fixed-finding",
    "subject": "lem-qftx-compact-manifold-cohomology-positive-ideal-nilpotent",
    "severity": "nonfatal",
    "adjudication_outcome": "confirmed_nonfatal",
    "reason": "F4 supplies a finite convex cover together with its nerve equivalence; it did not identify the independently chosen cover in step 1.1. This is a nonfatal witness-selection error: choose the cover and equivalence from F4 itself, then use its contractible intersections in the unchanged Mayer–Vietoris induction. Empty members are explicitly harmless. The finite CW conclusion, vanishing bound, ideal nilpotence and AC hypothesis are retained.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-fixed-finding",
    "subject": "def-qftx-character-localization",
    "severity": "nonfatal",
    "adjudication_outcome": "confirmed_nonfatal",
    "reason": "The tensor/dual proposition gives integral additivity and duality, not the coefficient-naturality clause attributed to it in F3. Step 1.1 now proves coefficient change locally: postcomposition by Q→R commutes with the singular coboundary and pullback, and the two integral coefficient maps compose. Applying it to the supplied rational character equality gives the real equality with the same tautological normalization. The denominator, fraction and empty/rank-zero checks remain valid; Definition unchanged.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-fixed-finding",
    "subject": "ex-qftx-borel-localization-free-circle-orbit",
    "severity": "nonfatal",
    "adjudication_outcome": "confirmed_nonfatal",
    "reason": "The current localization Definition covers Q and R under AC and contains no readiness-record condition. F3 wrongly treated an operational readiness warning as a mathematical hypothesis. Removed that assertion, carried inherited AC explicitly in the Example, Given, facts and dependency metadata, and retained the quotient homeomorphism and annihilation-by-u calculation. The translation action has no fixed point, and its compact smooth hypotheses satisfy the stated localization theorem.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-fixed-finding",
    "subject": "ex-qftx-borel-localization-rotation-on-projective-line",
    "severity": "fatal",
    "adjudication_outcome": "confirmed_fatal",
    "reason": "The example invoked an AC-conditional Borel localization theorem without stating AC, and F3 omitted that premise. Added AC to the full Example, both Given clauses, A1, deps and axiom metadata; F3 now states its complete compact smooth hypotheses, which step 2.1 verifies before application. Removed the unrelated readiness warning. The two chart actions give weights +1 and −1, and the Borel space of the two-point fixed set gives the two stated localized summands.",
    "uncertain": false,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no-published-repair-proposed",
    "reason": "The published quotient supplier correctly supplies a homogeneous manifold rather than a quotient group for arbitrary subgroups. The published Chern supplier correctly states integral tensor/dual identities. Both misstatements were in assigned draft consumers and are repaired there; no published supplier or published consumer was found defective, edited or adjudicated.",
    "uncertain": false
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "def-torus-equivariant-cohomology-cartan-model",
  "post-qftx-rigid-supersymmetric-background",
  "def-qftx-supersymmetry-fluctuation-complex",
  "def-qftx-zero-fi-regular-adhm-and-twistor-data",
  "pthm-aqft-forward-positivity-wilson-coefficient",
  "ex-aqft-eft-positivity-application",
  "pthm-aqft-symmetry-preserving-rg-anomaly-match",
  "ex-aqft-local-anomaly-counterterm-transport",
  "ex-aqft-mixed-background-counterterm-shift",
  "ex-aqft-scalar-eom-operator-reduction",
  "ex-aqft-scalar-gauge-operator-power-counting",
  "ex-aqft-single-chiral-fundamental-polynomial",
  "pthm-aqft-smeft-as-restricted-heft-branch",
  "ex-aqft-smeft-heft-observable-map",
  "pthm-aqft-supersymmetric-threshold-matching",
  "pthm-qftx-n1-wilsonian-f-term-nonrenormalization",
  "pthm-aqft-wilsonian-superpotential-nonrenormalization",
  "ex-aqft-soft-breaking-effective-operator",
  "pthm-aqft-selected-chiral-spectrum-anomaly-cancellation",
  "ex-aqft-vectorlike-conjugate-chiral-pair",
  "thm-qftx-yang-mills-selfdual-action-bound",
  "prop-qftx-su2-bpst-explicit-connection-on-s4",
  "ex-qftx-bpst-instanton-formal-sector-weight",
  "ex-qftx-brst-exact-lorenz-gauge-term",
  "lem-qftx-gauge-stabilizer-and-properness",
  "lem-qftx-covariant-laplacian-sobolev-splitting",
  "thm-qftx-sobolev-smooth-irreducible-gauge-bundle",
  "ex-qftx-coulomb-chart-linearization",
  "ex-qftx-covariantly-constant-stabilizer",
  "ex-qftx-equivariant-cohomology-of-a-free-circle-action",
  "ex-qftx-euclidean-trivial-vacuum-sector",
  "ex-qftx-n1-supercharge-oscillator",
  "ex-qftx-n1-u1-fi-charge-trace",
  "ex-qftx-n1-wilsonian-wavefunction-vs-holomorphic",
  "ex-qftx-n2-long-rest-fiber-algebra",
  "ex-qftx-n2-monopole-perturbed-vacuum",
  "ex-qftx-n2-short-rest-fiber-algebra"
]


