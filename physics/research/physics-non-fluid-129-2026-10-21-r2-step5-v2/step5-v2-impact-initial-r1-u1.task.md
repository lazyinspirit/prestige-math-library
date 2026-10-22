# Step 5 repair: impact-initial, round 1, unit 1

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-step5-v2/impact-initial-1.json.



Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-impact-initial-r1-u1.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"physics-non-fluid-129-2026-10-21-r2",phase:"impact-initial",round:1,unit:"1",input_sha256:"3f2fa614d0f98bbfd2c8438fd7006c7b52852cc6cefd57d8e9a44738225ae4a6",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-non-fluid-129-2026-10-21-r2 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.



Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "canonical-defect-ledger",
    "subject": "pthm-emx-paraxial-error",
    "proposed_status": "fixed",
    "severity": "nonfatal",
    "location": "Proof 3.1",
    "reason": "The scalar L2 norm includes the square root of transverse area. Its units are V for an electric scalar field in V/m. The revised proof explicitly computes this factor; both inequalities and their hypotheses remain unchanged.",
    "adjudication_ref": {
      "run": "physics-non-fluid-129-2026-10-21-r2",
      "phase": "initial",
      "round": 1,
      "unit": "10",
      "model": "gpt-6-luna",
      "context_sha256": "f99ac5ed98279b7136d34d9feb391f4fcf0f24a0c7c836b22b7a38e6e9b125f7"
    },
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "lem-qsmx-modular-strip-analyticity",
    "run": "physics-non-fluid-129-2026-10-21-r2",
    "phase": "initial",
    "round": 1,
    "unit": "100",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "finding": "F2 cited an unbounded-calculus Statement that omits the norm identity needed by all three analytic estimates.",
    "repair": "Added and cited the existing published PVM-integral norm-identity lemma, made common-domain linearity and the inherited choice hypothesis explicit, and synchronized the owning manifest and contract.",
    "evidence": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u100.json"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "propose_scoped_supplier_use_record",
    "supplier": "lem-unbounded-pvm-integral-is-well-defined-and-closed",
    "consumer": "lem-qsmx-modular-strip-analyticity",
    "disposition": "scoped_use_checked",
    "reason": "The published supplier Statement explicitly gives the squared-norm identity and its proof step 1.2 derives it from truncation convergence. Its Countable Choice hypothesis follows from the consumer's adopted Choice. Only the assigned consumer use was reviewed; the published supplier was not edited or adjudicated, and no whole-item acceptance is claimed."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-qsmx-filtered-generator-locality",
    "model": "gpt-6-luna",
    "context_sha256": "f781e7657e599bbb4928ba4f5a2c8a64b52a8822cb87a68eeae40e2846216602",
    "outcome": "false_positive",
    "reason": "The objection overlooks the boundary estimate explicitly invoked by F5 and Step 4.1. The proof of thm-qsm-finite-range-spin-dynamics uses lem-qsm-boundary-dynamics-cauchy, whose displayed bound depends only on M, R, kappa, hbar and the local support/norm. The assigned path supplies common M,R and kappa <= sup_s ||Phi_s||_{F_a}; replacing ||A|| by sup_s ||Phi'_s(Y)|| therefore gives a Cauchy estimate uniform in s and compact time. Its exterior exponential tail tends to zero along the given exhaustion. Thus Step 4.1 uses an actual proved estimate, rather than inferring uniform path convergence from pointwise convergence alone; the L1 filter tail then gives the claimed uniform coefficient limit.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1004.2086"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "alg-qsmx-schmidt-mps-truncation",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "The compressed remainder was identified with the full-chain output in Definition instruction 3. The assigned repair supplies the full contraction formula and distinguishes its tensor space from the residual space.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "disposition": "fixed",
    "defect_id": "physics-non-fluid-129-2026-10-21-r2-step5-u103-algorithm-output-space",
    "subject": "alg-qsmx-schmidt-mps-truncation",
    "batch": "103"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-qsmx-schmidt-mps-error",
    "route": "frontier-owner",
    "reason": "Proof 1.1 identifies the algorithm compressed remainder psi^(k) with P_k psi in the full tensor product; proof 2.1 subtracts those remainders as full-chain vectors. A retained-left isometry must explicitly embed them. The theorem Statement remains correct; refer this proof-only repair to the native frontier owner, without editing the unassigned item.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "disposition": "open",
    "defect_id": "physics-non-fluid-129-2026-10-21-r2-step5-u103-error-proof-embedding",
    "subject": "thm-qsmx-schmidt-mps-error",
    "batch": "103"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "def-qsmx-toric-cellular-hamiltonian",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "Propose recording the missing distinct-endpoint conditions as a repaired nonfatal definition defect. A closed face-boundary path previously satisfied both labels; all actual endpoint conclusions separately assumed distinct endpoints. Both primal and dual clauses now exclude coincident endpoints, while closed-string formulas and all algebraic claims are preserved. No historical fatal category is inferred.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/quant-ph/9707021"
    ],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "supplier": "def-qsmx-toric-cellular-hamiltonian",
    "disposition": "no_update_needed",
    "reason": "All five direct item consumers are draft members of the frozen frontier (batches 104 and 105); no published consumer or outside-frontier consumer was found by the current items/library reference search. No published repair or maintenance claim is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-qsmx-finite-group-lattice-operators",
    "proposed_status": "fixed",
    "severity": "nonfatal",
    "reason": "At coordinates (0,0),(3,0),(3,2),(0,2), the listed boundary walk has signed area +6 and is counterclockwise. Only the word clockwise in Remarks was incorrect; the ordered holonomy and gauge conjugation remain valid. Replaced that word with counterclockwise, a nonfatal presentation repair.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-qsmx-klr-character-specialization",
    "outcome": "false_positive",
    "reason": "The assigned rejected tuple asks for a spin-module identification which the current public statement expressly excludes. The Grothendieck isomorphism and independent finite-dimensional calculations each have their declared suppliers and complete local deductions; no repair is warranted.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/0804.2080"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-qsmx-spin-weight-and-hall-realization",
    "disposition": "refer_owner",
    "severity": "presentation",
    "reason": "Verified the batch digest concern in the current Definition: the clause \"or equivalently short exact sequences 0 to N to L to M to 0\" does not specify quotienting endpoint-labelled sequences. With M=N=F_3 and L=F_3^2 there are four qualifying subspaces but sixteen endpoint-labelled exact sequences. The primary subspace count is correct; the published lemma lem-hall-sequence-count-equals-aut-weighted-subobject-count states P=a_M a_N g. This supplier is outside this unit assignment and was not edited.",
    "affected_use": "Assigned theorem F3 and steps 1.2, 1.3 and 2.1 use only the explicit spin matrices, polynomial action and tensor sums, so the Hall sequence-count wording does not invalidate them.",
    "minimality": "Refer the unassigned frontier supplier to its owner to qualify the sequence quotient or remove the equivalence wording; no assigned theorem repair follows.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-qsmx-finite-car-quasifree-gibbs-construction",
    "location": "Original Proof 1.2; repaired Proof 2.1",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "proposed_status": "fixed",
    "reason": "The asserted reverse exterior-power basis rotation gives incorrect eigenvectors for general W. Corrected creators, eigenmode occupation basis and conjugated Gibbs density; verified all subsequent Wick and uniqueness uses and retained the full original Statement.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/2111.08343"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-qsmx-finite-boson-stability",
    "location": "Fact F9 and Proof 7.1",
    "outcome": "confirmed_nonfatal",
    "proposed_status": "fixed",
    "reason": "The exponential is unbounded on R but the licensed Borel calculus and lower spectral bound make the argument valid. Corrected F9 and established boundedness on the actual spectral support before identifying full-domain exponentials. Also qualified the title by the assumed certificate.",
    "uncertain": false,
    "source_urls": [
      "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "proposed_updates": [],
    "reason": "No published supplier defect or potentially invalidated published consumer was identified. Both mathematical Statements remain byte-for-byte unchanged; proof, citation-tag, title and contract edits cause no public-interface propagation.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-tgrx-exact-one-form-zero-period",
    "defect": "title-curve-regularity",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "The title now names closed piecewise-C1 curves, matching the unchanged Statement and the exact domain of the supplied period definition."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-tgrx-exact-one-form-zero-period",
    "defect": "coordinate-curve-inverse",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "Proof 1.1 now uses phi composed with the chart inverse kappa^{-1}; no invertibility of the coordinate curve is required. One-sided endpoint derivatives are justified explicitly."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "prop-tgrx-equilibrium-obstructions",
    "defect": "thermal-definition-hypothesis-scope",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "F1 now restricts the cited thermal-vorticity definition to Killing beta. The broader field definitions were already supplied in the Statement and their smoothness is now explained locally."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "prop-tgrx-equilibrium-obstructions",
    "defect": "orientation-interface-localization",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "Proof 1.2 now supplies an orientation on each connected chart domain before applying the published charged-stationarity theorem, and explains how the orientation-independent scalar and one-form identities assemble globally."
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "id": "thm-tgr-electrochemical-stationarity",
    "consumer_id": "prop-tgrx-equilibrium-obstructions",
    "status": "owned-consumer-use-repaired",
    "reason": "The published theorem remains unchanged. Its oriented-domain hypothesis is met locally in consumer proof 1.2; only its first, local stationarity equivalence is used, and tensor/scalar vanishing glues globally. This is an owned-use check, not whole-supplier certification or a proposed published repair.",
    "affected_use": "items/prop-tgrx-equilibrium-obstructions.md, proof 1.2: apply the first stationarity equivalence to the normalized Killing field xi=k_B T_* beta.",
    "invalidated_claim": "The old assertion that all supplier hypotheses hold directly on O omitted the orientation demanded by def-tgr-charged-liouville-data. The mathematical global equivalence remains valid after chartwise application.",
    "minimality": "Only consumer proof 1.2 needs localization; no supplier statement, definition, proof, page, or further consumer changes are necessary."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_adjudicated_finding",
    "subject": "def-tgrx-static-hydrostatic-data",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "disposition": "fixed",
    "reason": "Assigned definition cited the oriented framework outside its domain. Removed that unnecessary edge and supplied its SI and scalar conventions locally, retaining nonorientable backgrounds and orientation-free density integration. No published supplier defect is alleged."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_adjudicated_finding",
    "subject": "ex-tgrx-entropy-does-not-close-hydrodynamics",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "Title overgeneralized the sound bulk-viscosity comparison. Title and manifest now identify exactly the order-zero hydrostatic data and bulk-viscosity conclusion; Example, Verification and physical_scope remain unchanged."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "retain_existing_maintenance",
    "defect_id": "physics-non-fluid-129-2026-10-21-r2-3a-batch-116-cartesian-prose",
    "subject": "def-cartesian-product",
    "consumer": "def-tgrx-static-hydrostatic-data",
    "disposition": "nonfatal-recorded",
    "affected_use": "F2 and proof step 1.1 use only the exact ordered-pair membership criterion for R times Sigma; the malformed opening By / so transition is unused.",
    "invalidated_claim": "No mathematical claim in the owned consumer is invalidated: the displayed separated subset and iff membership criterion are intact.",
    "minimality": "Retain the existing OPEN mathematics-owner prose maintenance, with no duplicate finding and no imported-item edit."
  },
  {
    "defect_ledger": [
      {
        "id": "def-tgrx-noether-horizon-data",
        "outcome": "confirmed_nonfatal",
        "proposed_disposition": "fixed",
        "reason": "Replace the undefined prospective P in the units clause with the explicit algebraic curvature-slot differential and restrict its entropy/dimensional use accordingly; the general boundary-data scope is preserved."
      },
      {
        "id": "pthm-tgrx-noether-charge-decomposition",
        "proposed_disposition": "refer_frontier_owner",
        "severity": "gap-a-reader-closes",
        "reason": "Proof 3.1 needs the on-shell arbitrary-generator-jet antisymmetry and coefficient argument before treating the residual component divergence as an exterior derivative. This is outside the assigned repair carrier; the digest already records the concern, so reconcile with any existing finding rather than duplicate it."
      }
    ],
    "published_consumer_ledger": []
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "cex-emx-edge-moment-domain-failure",
    "status": "fixed",
    "severity": "nonfatal",
    "defect_type": "dependency_citation",
    "location": "Facts & Assumptions, F3; owning proof-contract F3 citation",
    "reason": "Restored the projection supplier’s bounded Lipschitz polyhedron and precise refining-mesh hypotheses in the ancillary comparison. The representative-independence counterexample remains valid on every stated open domain; no public interface changed.",
    "uncertain": false,
    "source_urls": [
      "https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf"
    ],
    "familiar": true
  },
  {
    "defect_ledger": [
      {
        "id": "post-tgrx-free-collapse-scattering",
        "outcome": "confirmed_fatal",
        "defect_type": "logic",
        "status": "fixed",
        "affected_use": "The original quantization paragraph leaves the commutator unconstrained by P.",
        "evidence": "Confirmed missing canonical normalization: replacing K by 2K preserves continuity, K(Pf)=0, incoming-ground conditions and the Hadamard wavefront relation (W_2 scales by 4), but multiplies the field commutator by 4. Geometry and the classical P fix its required causal pairing independently. The repair supplies both causal Green maps for P=-Box_g, fixes E_P(f,g)=integral f(G_adv-G_ret)g dvol_g, and requires 2 Im<Kf,Kg>=E_P(f,g). Fock CCR now give the canonical commutator on D_fin and the normalized state fixes the antisymmetric two-point part. No existence theorem is claimed."
      },
      {
        "id": "post-tgrx-free-collapse-scattering",
        "outcome": "confirmed_nonfatal",
        "status": "fixed",
        "affected_use": "Hollands-Wald source locator says section 2.3(c).",
        "evidence": "Verified the applications heading is section 2.2 and Hawking subsection (c); corrected the assigned locator to section 2.2(c), PDF pages 27-32."
      },
      {
        "id": "rem-tgrx-three-black-hole-states",
        "status": "open",
        "route": "assigned_frontier_owner",
        "affected_use": "Remark defines E_R by X>|T| and interior by T>|X|, then says their union supports a Hadamard state across T=X>0.",
        "evidence": "The literal union excludes T=X>0. The intended connected domain must include the future horizon or explicitly provide a Hadamard extension; no out-of-scope item edit was made."
      },
      {
        "ids": [
          "def-tgrx-exponential-ray-channel",
          "prop-tgrx-collapse-channel-spectrum",
          "pthm-tgrx-conditional-hawking-occupation",
          "rem-tgrx-three-black-hole-states"
        ],
        "status": "open",
        "route": "owning_frontier_lanes",
        "affected_use": "The source locators identify Hollands-Wald Hawking discussion as section 2.3(c).",
        "evidence": "The linked review labels it section 2.2(c); preserve these as separate owner locator corrections, without changing any of those unassigned carriers."
      }
    ],
    "published_consumer_ledger": []
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "run": "physics-non-fluid-129-2026-10-21-r2",
    "batch": "121",
    "subject": "def-tgrx-curvature-squared-variation-tensors",
    "disposition": "fixed",
    "severity": "nonfatal",
    "reason": "The supplier is stated for time-oriented manifolds, whereas the Definition permits non-time-orientable backgrounds. This is a missing local scope justification, not a false curvature formula: a local timelike field selects a cone, unique torsion-free metric connections agree on overlaps independently of that cone, and curvature and metric contractions glue. Added that argument in Scope justification, preserving the entire Definition and its domain. The finite-jet chain rule still gives compactly supported, family-independent first density derivatives and the tensors remain supplied inputs, with no existence assertion.",
    "evidence": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u121.json",
    "post_sha256": "197495c85915a7ce6f119c72f398f92f562c2530637b468fc47be349fe1aa6b4",
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "run": "physics-non-fluid-129-2026-10-21-r2",
    "batch": "121",
    "subject": "def-tgrx-hadamard-stress-contract",
    "disposition": "fixed",
    "severity": "nonfatal",
    "reason": "The original covariance clause compares identical metrics even when the prescribed potentials differ. For an isometry, P(psi* f)-psi*(P′ f)=(V-psi*V′)psi* f, so metric preservation alone does not identify the operators or their singular subtraction data. Restricted the embeddings to V=psi*V′, fixed the compared scale/finite conditions, and required matching pulled-back two-point distributions only for expectation comparisons. The smooth-remainder formula then commutes with restriction and diagonal evaluation; no preferred state or parametrix existence is asserted.",
    "evidence": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u121.json",
    "post_sha256": "faa7765f823a382e5158942f382b052e1d5e27f959beaa448a4e98ee5e35b406",
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "run": "physics-non-fluid-129-2026-10-21-r2",
    "batch": "121",
    "subject": "ex-tgrx-quasistatic-is-not-backreaction",
    "disposition": "fixed",
    "severity": "fatal",
    "reason": "The original absence-of-variables observation did not prove the central uniform non-implication. Replaced it by a conditional counterfamily starting from the supplied candidate: C^(q)=C+qg satisfies exactly the stated local, covariant, conserved correction contract, retains the same positive Hadamard state and all ODE data, and gives R^(q)(u,u)=R^(0)(u,u)+(8piG/c^4)q for a normalized timelike u. Any finite ODE-only bound is exceeded by a finite q. Every prescription fixes its constants within its domain; this proves no instability or divergence in one fixed model, and no existence theorem or empirical observation is invented.",
    "evidence": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u121.json",
    "post_sha256": "3d7b767a2e984013c37782822f60d4d6f1cb6d7b4e2740f19beb08a9623115e4",
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_owner_referral",
    "run": "physics-non-fluid-129-2026-10-21-r2",
    "batch": "129",
    "subject": "op-tgrx-continuum-generalized-entropy",
    "disposition": "open",
    "severity": "nonfatal",
    "reason": "The Open problem first-paragraph definition of covariance explicitly quantifies over isometries without preserving the separately prescribed V. Add V=psi*V-prime (or intertwining P) and common normalization conditions to this restatement. Exact affected use and minimality appear in repair_notes.consumer_uses. This item is a different frontier owner’s subject and was not edited here.",
    "evidence": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u121.json"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update_proposed",
    "run": "physics-non-fluid-129-2026-10-21-r2",
    "reason": "No potentially defective published consumer or original supplier was found in the assigned uses. The published curvature supplier is used locally within its actual time-oriented domain; the broad-domain extension is justified in the assigned draft. The published ODE lemma supplies only its exact scalar bounds and no backreaction theorem."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "rem-tgrx-jt-completion-notunique",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "The Statement now centers the lower edge using E=x+a and x=E-a, with shifted support (0,2a) and the correct positive-energy limit. The owning manifest statement and contract endpoint worksheet were synchronized under the shared-write lock. Proposed fixed finding only; the controller owns canonical ledger adoption."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_false_positive",
    "subject": "op-tgrx-continuum-generalized-entropy",
    "model": "gpt-6-luna",
    "context_sha256": "c97709420b1b6495aeddae1a61a32c88eef7288e4fee8679456ea6aff7b7416c",
    "reason": "The assigned no-deps objection reverses the schema direction: an open problem may consume formulation prerequisites, while no item may use its unresolved conclusion as a logical supplier. Preserve the existing carrier and historical ledger rows.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "refer_to_frontier_owner",
    "subject": "lem-tgr-renormalization-finite-part-ambiguity",
    "location": "items/lem-tgr-renormalization-finite-part-ambiguity.md, Statement",
    "finding": "The current draft Statement defines x_N-r_N -> L but never assumes convergence. With x_N=N, r_N=0, L=0 and a=0, all explicitly stated sequence hypotheses hold, but the displayed convergence conclusion fails. Given/A1 and the proof require the missing hypothesis. This independently verifies the batch-129 digest alert; it is outside unit 129 and was not edited or adjudicated as an assigned tuple.",
    "proposed_severity": "fatal",
    "proposed_class": "accuracy",
    "proposed_subclass": "missing-hypothesis",
    "minimal_repair": "The owning lane should explicitly assume x_N-r_N -> L in the Statement, retain the existing epsilon proof, and examine direct consumers after that interface change.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-emx-scattering-contraction",
    "status": "fixed",
    "defect_type": "logic",
    "reason": "Propose recording the missing real-field/phasor association and all-input hypotheses as repaired in the assigned draft; bind this native decision and its current review hashes. No shared ledger was edited."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-emg-fx-holder-cubic-map",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "F2 invokes a theorem whose explicit Countable Choice hypothesis was absent from both this Statement and its problem Definition. The final step needs Banachness under the cited Banach-space derivative definitions; no local completeness proof discharged that premise. Added Countable Choice to Statement, Given, A1, deps and its role, and made its exact completeness use explicit in F2 and step 3.1. The algebraic remainder and derivative formula are preserved."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-emg-fx-small-constant-field-ball",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F9 omitted the bounded W(k,2)-extension-domain hypothesis and no direct supplier established it. This is a routine missing prerequisite check on the ball, rather than a failure of the smoothness conclusion. Added the exact extension theorem and definitions as dependencies, stated its AC hypothesis in F12, and proved the ball has smooth one-sided sphere graphs in step 1.1. Thus every integer-order embedding/algebra use in step 2.2 has its domain hypothesis. The Example section and its complete smooth constrained-data conclusion are unchanged."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "id": "cor-smooth-weak-dirichlet-solutions-are-classical",
    "status": "open-maintenance",
    "severity": "nonfatal",
    "location": "items/cor-smooth-weak-dirichlet-solutions-are-classical.md, proof step 3.1",
    "affected_use": "The published corollary describes Lu=f using the expression (D_i a^{ij})D_j u+a^{ij}D_iD_j u. Its operator definition is Lu=-D_i(a^{ij}D_j u)+b^iD_i u+cu. The EMG inverse uses the corollary in F9 and proof step 2.1 to obtain smooth representatives solving -Delta u_m=F_m.",
    "invalidated_claim": "The displayed positive-divergence expression in corollary step 3.1 is not the inherited L; its two principal signs are wrong, and the full strong expression must also retain the lower-order terms. The corollary Statement remains obtainable from the correctly signed equation and continuity.",
    "minimality": "Owner mathematics maintenance should replace that a.e. expression by -(D_i a^{ij})D_j u-a^{ij}D_iD_j u+b^iD_i u+cu. This is proof-only. The owned example uses the correctly signed higher-order regularity theorem directly; no assigned claim or interface requires a change. Do not edit or adjudicate the imported published corollary in this dispatch.",
    "reason": "Verified the digest alert against the current step 3.1 and exact divergence-form Definition. Refer to the original mathematics owner; this is not a frontier blocker or a claim of whole-supplier review.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-emg-fx-dirichlet-energy-and-trace",
    "outcome": "false_positive",
    "status": "dismissed",
    "reason": "The title identifies the intended application, not an additional charged-equation conclusion. Step 1.1 proves the cube Poincare bound by coordinate integration and H1 closure; steps 1.2 and 2.1 prove both directions of the C1 zero-boundary characterization by graph-layer approximation and the local boundary L2 estimate. These are exactly the Statement claims and require no charged source."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-emg-fx-newtonian-holder-potential",
    "outcome": "false_positive",
    "status": "dismissed",
    "reason": "The cited bump supplier proof 1.1 constructs rho(x)=sigma((s^2-sum x_j^2)/(s^2-r^2)); this is explicitly radial, nonnegative, smooth, one on the inner ball and supported in the outer ball. Taking its complement and rescaling gives precisely the cutoff and derivative bounds in F5 and step 2.1. The cancellation formula, inner flux -delta_ij/3, near/far Holder split and radius scaling are consistent with -Delta N g=g. No radialization assumption is missing."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-emg-fx-flat-dirichlet-holder-estimate",
    "outcome": "false_positive",
    "status": "dismissed",
    "reason": "The actual bump supplier constructs a smooth function of sum x_j^2 in every dimension, so normalization produces the radial mollifiers and harmonic averaging kernels of F2. Step 3.1 supplies the normal-normal boundary jet of the lift; step 4.1 removes the forcing trace before odd reflection. The even radial cutoff in step 5.1 preserves oddness, and the mean-value convolution in step 6.1 yields the interior harmonic derivative bounds. The stated suppliers license these choices."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-emg-fx-spherical-orbit-geometry",
    "outcome": "confirmed_nonfatal",
    "proposed_status": "fixed",
    "evidence": "Ambiguous global-quotient disclaimer replaced by absence of an assumed larger-spacetime embedding. The product geometry and all five direct item uses remain valid."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-emg-fx-spherical-maxwell-reduction",
    "outcome": "false_positive",
    "proposed_status": "dismissed",
    "evidence": "Current electrovac supplier is mathematical in both metadata and content; the lemma uses mathematical Hodge and flux definitions, not an empirical physical premise."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-emg-fx-spherical-quotient",
    "outcome": "confirmed_nonfatal",
    "proposed_status": "fixed",
    "evidence": "Displayed product field now includes both pullbacks and the scalar composition, and subsequent product shorthand is explicitly defined; all four direct uses remain sound."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "cex-emg-fx-constant-radius-rigidity",
    "proposed_status": "refer_item_owner",
    "severity": "nonfatal",
    "location": "Counterexample 1.1: fixes the base one-form F=-L d tau wedge dz",
    "evidence": "This displayed F is an alternating covariant tensor of degree two. Replace one-form by two-form; the invariance calculation is valid. Pre-existing Step4 digest concern, outside assigned source scope, not caused by either interface clarification."
  },
  {
    "ledger": "published-consumer-ledger",
    "proposed_status": "no_published_consumer_repair",
    "evidence": "Search of current items and library found no published direct dependency/reference consumer of either changed Definition. All direct consumers inventoried here are draft. Published mathematical suppliers were read without modification; no new suspected published defect was found."
  },
  {
    "ledger": "defect-ledger",
    "id": "ex-emx-punctured-flux",
    "location": "Verification 4.1; owning proof contract derivation step-4-1",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "Verification 4.1 contains undefined e0, but 3.1 already establishes the exact period 4π. The cycle cancellation, outward orientation, radial pullback, compact Jordan parameter integrals and sphere-area supplier justify that calculation; F11 then implies nonexactness. This is a nonfatal notation defect, repaired by replacing 4\\pi e0 with 4\\pi\\ne0 without changing any premise or claim."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-emg-fx-linearized-hodge",
    "outcome": "false_positive",
    "reason": "Reconcile the assigned Luna tuple as a false positive: the actual residual supplier and its equation-system suppliers are mathematics, and the checked logical closure contains no physics supplier. The existing mathematical claim and proof remain unchanged. This is proposed adjudication evidence for controller adoption, not a shared-ledger write."
  },
  {
    "ledger": "published-consumer-ledger",
    "id": "lem-emg-fieldstrength-positive-symmetric-reduction",
    "disposition": "refer_maintenance",
    "severity": "nonfatal",
    "location": "items/lem-emg-fieldstrength-positive-symmetric-reduction.md:42 and :56; Statement and [L1]",
    "affected_use": "The Statement calls def-emg-electrovacuum-cauchy-system a draft definition and [L1] says its status is draft and its use remains conditional on that status. The supplier currently declares status: published. Its precheck still says pending, and the quoted source-free equations agree with the current Definition.",
    "invalidated_claim": "Only the assertion that the supplier currently has draft status is stale; no mathematical equation discrepancy was found in this focused status comparison.",
    "minimality": "Maintenance should correct the obsolete status wording while preserving the source-free equations and honest verification qualifications. The published item lies outside this assigned frontier subject and was not edited or adjudicated here.",
    "reason": "Verified the Step-4 digest's presentation alert against the exact current Statement/[L1] and supplier frontmatter. This preexisting outside published-item status defect does not invalidate the assigned Hodge calculation."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "alg-emg-fx-leapfrog-cochains",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "Confirmed a nonfatal output-specification inconsistency: the Definition explicitly restricted output to the N+1 states while its final clause and the termination lemma promised the computed inverse too. The Schur-complement pivot proof and rational updates are sound; no numerical deduction changes. The return instruction now explicitly returns R together with the state list, preserving the stronger existing termination-lemma contract.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-emg-fx-continuous-compact-top-form-integral",
    "outcome": "false_positive",
    "reason": "The cited smooth-flat theorem explicitly identifies beta in its Facts F1 as exp(-1/t) for t>0 and zero otherwise, citing def-the-standard-flat-function, whose Definition agrees pointwise with u. Its recursive proof establishes smoothness at zero. Hence F6 and the smooth quotient q in step 1.1 are licensed. The finite cutoff, continuous zero extension, positive-coordinate change of variables, finite double localization, Darboux bound and smooth-integral comparison meet their supplier hypotheses; no edit is needed."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-emg-fx-semiclassical-source-contract",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "location": "Facts & Assumptions [F2]",
    "reason": "Fact F2 omitted dF=0 from the cited Maxwell stress identity. This is a nonfatal source-hypothesis overstatement: the two proof steps establish only tensor typing and a coordinate-independent predicate, without deriving admissibility from Maxwell equations. F2 now states both equations, constant positive mu0, the precise Hilbert tensor and the metric-compatible lowering calculation, expressly distinguishing this sign explanation from candidate-data assumptions. Smooth source maps give scalar current divergence and covector stress divergence/exchange; normalization and positivity define the supplied states, including a possibly empty class, with no quantum construction or empirical assertion."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "def-emg-fx-matrix-harmonic-problem",
    "batch": "27",
    "severity": "nonfatal",
    "disposition": "fixed",
    "finding": "The announced comparison did not explicitly bind a shared full-boundary datum.",
    "correction": "Defined f:boundary(Omega)->P_n with the ambient smooth-extension regularity; required both solution restrictions to equal f and asserted no existence.",
    "evidence": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u27.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "rem-emg-fx-stationary-spacetime-obligations",
    "batch": "27",
    "severity": "nonfatal",
    "disposition": "fixed",
    "finding": "Timelike only on the declared subset overstates the setup; inline links also violate the uninterrupted-description policy.",
    "correction": "State the timelikeness requirement without asserting causal character elsewhere; move the two inline links to references and retain dated source qualifications.",
    "evidence": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u27.json"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "propose_owned_use_review",
    "consumer": "rem-emg-fx-stationary-spacetime-obligations",
    "suppliers": [
      "lem-emg-sphere-flux-holonomy",
      "def-emg-local-potentials-and-circle-data"
    ],
    "disposition": "owned_use_sound",
    "reason": "For the exact cited product-circle case, d(nu)=0 and z(phi)=z0 exp(-i a phi) give zero curvature and holonomy exp(-2 pi i a); nonintegral a gives nontrivial holonomy. The potential definition permits chartwise one-forms with transition data without asserting a global primitive. No published source repair or whole-supplier audit is claimed.",
    "evidence": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u27.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "post-emg-fx-test-field-regime",
    "proposed_defect_id": "physics-non-fluid-129-2026-10-21-r2-step5-initial-r1-u28-stress-component-units",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "Postulate, unit paragraph",
    "reason": "The uniform covariant-component unit was incorrect for dimensionless sphere coordinates. The repaired interface gives the coordinate-dependent unit law, preserving the model and tensor formula; owning manifest and formulation evidence were synchronized. The direct consumer needs only native interface/context handling, not a source repair.",
    "evidence": [
      {
        "path": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u28.json",
        "note": "Decision, own-repair review, exact hashes, unit calculation, focused checks and direct-consumer disposition."
      }
    ],
    "uncertain": false,
    "source_urls": [
      "https://inspirehep.net/files/c9d9d32ca091d580007a1fee1bb44dc0"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "def-gr-fx-null-screen-geometry",
    "proposed_disposition": "fixed",
    "severity": "nonfatal",
    "finding": "The empty U case satisfies the universal conditions vacuously and is excluded by requiring nonempty U. This is a definition-domain omission, not a failed nonvacuous deduction. Also generalize the local screen constructions to spacelike surfaces without compactness, preserving closed as the compact subclass, to repair the two assigned consumer citation mismatches.",
    "evidence": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u29.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "lem-gr-fx-null-screen-index-form",
    "proposed_disposition": "fixed",
    "severity": "nonfatal",
    "finding": "At the frozen source state F1 points to a definition phrased for compact surfaces although the lemma allows noncompact surfaces. The preceding normal-plane lemma already proves screen positivity, chi symmetry and affine differentiation without compactness; the repaired definition exposes that exact generality. No index-form claim or proof needs narrowing or replacement.",
    "evidence": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u29.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "lem-gr-fx-null-focal-boundary-exclusion",
    "proposed_disposition": "rejected-false-positive",
    "severity": null,
    "finding": "F3 explicitly cites the index-form lemma proof step 3.1. That step constructs Z=V_E+a(1-lambda/L)ell with g(Z,ell)=0, Z(0)=X in T_pS and Z(L)=0, then applies an O(s^2) slice-chart correction whose first derivative is zero. Thus the actual variation field remains Z, so the pointwise speed derivative vanishes and Taylor division by s^2 is valid.",
    "evidence": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u29.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "ex-gr-fx01-2",
    "proposed_disposition": "fixed",
    "severity": "nonfatal",
    "finding": "The compactness restriction in the cited definition is unnecessary for the displayed local boost computation; the preceding normal-plane supplier already has general embedded-surface scope. The definition repair supplies that scope without narrowing S. The example must also state inherited Countable Choice and Dependent Choice for its cited post-focal causal conclusion.",
    "evidence": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u29.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "lem-gr-fx-null-focal-boundary-exclusion",
    "proposed_disposition": "open-owner-referral",
    "severity": "nonfatal",
    "finding": "When lambda_0=L_1, the conclusion evaluates gamma outside its declared domain. Steps 1.1 and 7.1 prove the result for the unique local geodesic extension. Name that extension in the Statement; the mathematics of extension is supplied by thm-gr-local-geodesics-and-exponential-map.",
    "evidence": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u29.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "ex-gr-fx01-1",
    "proposed_disposition": "open-owner-referral",
    "severity": "nonfatal",
    "finding": "The supplier comparison omits explicit AComega/DC assumptions, although the straight timelike segment independently proves the chronological conclusion. The Step4 digest reports this separate presentation concern; current F3 and the independent segment were inspected.",
    "evidence": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u29.json"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "proposed_disposition": "no_update",
    "reason": "No published carrier was changed and no new published-consumer defect was adjudicated. Preserve the existing OPEN standard-smooth-step definition-link maintenance row; this dispatch does not claim to close it or repeat its earlier source review."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-gr-fx-fixed-gauge-data-topology",
    "outcome": "false_positive",
    "model": "gpt-6-luna",
    "context_sha256": "5298d9d4675a0629b403097c569fa4c516c37c032efc4c498a17907f162850aa",
    "reason": "The named supplier is kind: theorem, domain: mathematics, not a physics-theorem. Its Statement assumes a fixed smooth covariant PDE model, complete constrained data, and three explicit hyperbolic initialization/reconstruction hypotheses; it proves a conditional solution result, with no empirical or physical-postulate premise. The assigned definition uses exactly that finite mathematical reduction state (g,p,q,w), alongside the declared torus/Sobolev and symmetric-hyperbolic suppliers. Units are conventions for a possible SI interpretation, not empirical premises. Thus the alleged forbidden physics-to-mathematics edge does not exist.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-gr-fx-metric-pullback-comparison",
    "outcome": "false_positive",
    "model": "gpt-6-luna",
    "context_sha256": "4590837e214a2e5b90fa75126338dcfd48ddee3ae7ae914bb5e9a7bcbe064af2",
    "reason": "The named supplier is kind: definition, domain: mathematics. Its clause (e) expressly defines a mathematical solution class and leaves physical applicability to separate framework postulates; clause (b)1 uses precisely the metric pullback equality phi^*g'=g. This is relevant background for the assigned definition's bilinear-form equality convention. Independently, the displayed pullback is a smooth bilinear form by the differential and smooth-tensor definitions; invertibility of the differential preserves Lorentzian signature. Neither field equations nor measured or physical-postulate premises are used. The claimed forbidden physics dependency is absent; the background reference is not an invalid mathematical premise.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "canonical_defect_ledger": [
      {
        "id": "lem-gr-fx04-conformal-scalar-curvature",
        "model": "gpt-6-luna",
        "context_sha256": "a6a9f494a2792a1568bd8f259532e6dfb4091fc690092870ec40eb34142a71bb",
        "proposed_disposition": "false_positive",
        "reason": "The cited thm-gr-constraint-equations-in-normal-frame is a published theorem with domain: mathematics, not a physics item. Its Statement defines D as the induced metric's Levi-Civita connection, and proof 1.1 derives torsion freedom and metric compatibility by tangential projection, with the curvature convention of L3. The explicit product metric -dτ²+u⁴δ and slice {0}×E satisfy those geometric hypotheses: ∂τ is a smooth future unit normal and the induced metric is positive definite. Clause (d) is conditional on a tensor equation and is not used by F1 or any proof step of the assigned lemma. Neither the supplier's GR title nor its placement makes its purely geometric content a physical premise. A scoped transitive-deps classification check found 1126 mathematical/imported items and no physical or unclassified supplier. The reported domain violation is therefore a false positive; no repair is licensed or needed."
      }
    ],
    "published_consumer_ledger": []
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_new_finding",
    "subject": "def-gr-fx-bondi-expansion",
    "batch": "33",
    "phase": "initial",
    "round": 1,
    "unit": "33",
    "outcome": "confirmed_fatal",
    "defect_type": "other",
    "proposed_disposition": "fixed",
    "reason": "The original vacuum membership condition quantified neither component orders nor a fixed order parameter. This is an undefined-class defect, rather than a faulty proof or missing citation. Replaced it by Ric_g(p)=0 for every p on the supplied end, exactly the R_ab=0 condition already in the mass-coefficient lemma Statement. The general smooth-expansion class is unchanged; formal coefficient examples retain their explicit non-Ricci-flat status.",
    "evidence": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u33.json",
    "post_sha256": "d14ce7c7ce2b7ee6599d2e5ef22a74b7edb4488c62ce0c4679debabede8e85fd"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update_needed",
    "subjects": [],
    "reason": "No affected published consumer or published-supplier defect was identified. The six direct item consumers are all draft items in this frozen frontier; no outside maintenance repair is proposed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "lem-gr-fx-cauchy-slices-are-diffeomorphic",
    "proposal": "record repaired nonfatal Step-5 finding",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "location": "Facts & Assumptions F4; Proof 1.3",
    "evidence": "The old F4 falsely strengthened almost-everywhere timelikeness to pointwise timelikeness. The repaired argument uses nonzero orbit velocity and continuity of its squared norm; even a null orbit line is transverse to a positive-definite hypersurface tangent space. The original Statement and physical_scope are preserved.",
    "post_sha256": "7fa4a0ea91303bbc5303ec7951a3fe55bcc8a5229ed874a7aa454b75bf54c3d3",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "lem-gr-fx-trapped-boundary-compactness",
    "proposal": "record repaired nonfatal Step-5 citation finding and related contract repairs",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "location": "Facts F12, F16–F19; Proof 2.2 and 7.1; owning contract/manifest",
    "evidence": "F17 now cites the topological continuous-image theorem, with Euclidean compactness bridged explicitly to the metric topology. Smooth geodesic evaluation comes from the existing maximal-domain supplier, rather than an overstated local ODE interface. Finite-union compactness is cited to F18. The contract records current exact supplier statements and matching step inputs, including refreshed F8 screen geometry.",
    "post_sha256": "cf08dfeb34dd774fde6abbfd398842beb29b3ee8da403b82d8838ec32774a770",
    "uncertain": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "subject": "def-gr-spacelike-hypersurfaces-and-cauchy-sets",
    "proposal": "refer published definition wording defect to owner maintenance",
    "disposition": "open-maintenance",
    "severity": "presentation",
    "location": "items/def-gr-spacelike-hypersurfaces-and-cauchy-sets.md, Definition clause (e)",
    "affected_use": "The explanation of H^+(S)=D^+(S)\\setminus I^-(D^+(S)) says its points are not chronologically preceded by any point of D^+(S). However p lies in I^-(D^+(S)) exactly when p chronologically precedes some q in D^+(S).",
    "invalidated_claim": "Only the explanatory chronological direction is reversed; the displayed subtraction excludes points that precede another domain point. The assigned Cauchy-slice proof uses clauses (a) and (c), not the horizon clause, and remains sound.",
    "minimality": "Replace the clause with points that do not chronologically precede any point of D^+(S), then have maintenance examine direct uses of that changed Definition. No published item or consumer was edited by this unit.",
    "route": "owner/published mathematics maintenance; outside frozen-frontier Step-5 repairs",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "run": "physics-non-fluid-129-2026-10-21-r2",
    "phase": "initial",
    "round": 1,
    "unit": "35",
    "id": "lem-gr-fx-kerr-exterior-properties",
    "model": "gpt-6-luna",
    "context_sha256": "35270fc4cdff28f965d506fd501d94efe11133e3edc9ff48c1f50dc3d074a24e",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "proposed_disposition": "fixed",
    "reason": "The cited inverse-smoothness lemma requires a time-oriented Lorentzian manifold. Replaced its premature use by direct covariant contractions g(N,.)=-dt off-axis and at the axes, proving g(N,N)=-D/(Sigma Delta)<0 before applying either musical or inverse-smoothness supplier. The coframe determinant and axis block prove the unchanged signature claim; no stronger Choice assumption is used.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "run": "physics-non-fluid-129-2026-10-21-r2",
    "phase": "initial",
    "round": 1,
    "unit": "35",
    "id": "prop-gr-fx-killing-tensor-conservation",
    "model": "gpt-6-luna",
    "context_sha256": "2e34de60ac2691d8c6fc8df9b4b9a6b678899d88ccd380ecd8b0ca1f4298cc0e",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "proposed_disposition": "fixed",
    "reason": "The original Killing-tensor name was supplied only in a time-oriented scope. Preserved the full arbitrary Lorentzian-manifold claim by explicitly defining symmetry and the cyclic covariant equation in the Statement. The nondegenerate Levi-Civita theorem supplies connection and tensor derivative without time orientation. Differentiation gives I_K prime=(nabla_v K)(v,v)+2K(Dv,v)=0, including zero velocities; interval constancy follows. No global timelike field is selected.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "run": "physics-non-fluid-129-2026-10-21-r2",
    "phase": "initial",
    "round": 1,
    "unit": "35",
    "id": "thm-gr-fx-kerr-hamilton-jacobi-separation",
    "model": "gpt-6-luna",
    "context_sha256": "725879c6754149fd07297bcd1273884e13ddfef43b50f62fc6d8aee50acaddc2",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "proposed_disposition": "fixed",
    "reason": "F2 attributed positivity and the inverse-matrix convention to a supplier Statement that instead provides nondegeneracy, signature and time orientation. Restated that interface exactly; step 1.1 now proves Sigma>=r^2>0 and Delta=(r-r_plus)(r-r_minus)>0 from the defining parameters, and F3 supplies inversion. Direct block inversion and separation remain correct, including independent C1 primitives for nonnegative radicands. Reall uses a separation constant shifted by (L-aE)^2, now explicitly distinguished.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "run": "physics-non-fluid-129-2026-10-21-r2",
    "phase": "initial",
    "round": 1,
    "unit": "35",
    "id": "rem-gr-fx-kerr-units-and-physical-parameters",
    "model": "gpt-6-luna",
    "context_sha256": "8811c0991c5374dfdbc76194cc93fe62260e36e909f8bbef8c3a220b2da3f3c3",
    "outcome": "confirmed_fatal",
    "defect_type": "other",
    "proposed_disposition": "fixed",
    "reason": "The original remark used mu,E,L,Q,S without defining them or fixing an action scale, so the dimensions were not determined by its premises. Added the separation theorem as mathematical prerequisite and explicitly adopted S=(G_N/c^3)S_SI for a C1 reduced action in joule seconds, p=dS, E=-p_t, L=p_phi, the mass-shell equation and the shifted angular Q. Coordinate slot dimensions now give the original powers consistently; optional positive-rest-mass interpretation is explicitly conditional. No measurement or dynamical existence is inferred.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "run": "physics-non-fluid-129-2026-10-21-r2",
    "phase": "initial",
    "round": 1,
    "unit": "35",
    "id": "ex-gr-fx07-1",
    "model": "gpt-6-luna",
    "context_sha256": "3cc98b5658d81e749b345733e8646d4aecd5e32ef8fa1a1b51342a9eaca8dc94",
    "outcome": "false_positive",
    "defect_type": null,
    "proposed_disposition": "false-positive",
    "reason": "The Example explicitly identifies the Schwarzschild exterior with radius 2M. This selects m_*=M>0 from the supplied Schwarzschild family in geometric units; it does not quantify over an independently fixed arbitrary Schwarzschild mass. Step 1.1 with s=2m_*=2M is precisely that specialization. All global a=0 tensor terms, exterior domains, axial Killing-tensor contraction and local angular identities agree. The updated conservation Statement still applies in step 2.2. Carrier unchanged; its exact conservation citation quote and owning contract were reconciled.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "run": "physics-non-fluid-129-2026-10-21-r2",
    "phase": "initial",
    "round": 1,
    "unit": "35",
    "id": "ex-gr-fx07-2",
    "model": "gpt-6-luna",
    "context_sha256": "302fb1fba4950c95b876cb00f4393e2ff4b7f44f0af8f1f79d3e8dd9f5b78b5e",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "proposed_disposition": "fixed",
    "reason": "The title included a hidden-symmetry description absent from this example. Renamed it to Negative stationary Killing density in the Kerr ergoregion without changing its Example, physical scope or proof. The decomposition T=alpha n+beta e with beta>|alpha| and the explicitly realized null covector give rho_T=K(alpha-beta)<0 for every supplied observer. Conservation is conditional on the scalar equation; no solution existence or stability claim is asserted.",
    "uncertain": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "No published item was repaired or found mathematically defective in the exact supplier uses examined here. The general nondegenerate connection interface and scoped inverse suppliers suffice after the assigned repairs. No new published-supplier audit or certification is claimed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_owner_referral",
    "run": "physics-non-fluid-129-2026-10-21-r2",
    "id": "prop-gr-fx-kerr-horizon-generator",
    "reason": "Step 2.1 applies def-gr-inverse-metric-and-musical-isomorphisms via F9 to the ingoing extension before constructing its time orientation. F9 requires a time-oriented Lorentzian four-manifold. The norm computation for Nbar appears later in step 3.1.",
    "minimality": "Move the displayed covariant computation g(Nbar,Nbar)=-(Sigma+2Mr)/Sigma<0 ahead of the first F9 application, or define the inverse by pointwise nondegeneracy there and identify it with F9 only after time orientation. No Statement change is needed.",
    "disposition": "OPEN owner examination; unassigned draft item not edited or adjudicated here",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_record",
    "id": "lem-gr-fx-scalar-dominant-energy",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F4 falsely attributes future-cone information to a causal-character definition. The existing mathematical future-causal classification supplies that information; the repaired step 1.2 now proves the sign of -g(n,X) by connectedness and rest-space positivity. Also corrected the independent algebraic sign typo in step 1.1. The claimed inequalities and hypotheses are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_record",
    "id": "lem-gr-fx-schwarzschild-gaussian-beam-concentration",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The freely chosen tortoise-coordinate offset reuses c, already fixed in the model datum. This is a notation collision, not a fatal failure of the expansion: the proof explicitly chooses its additive offset at r0. Replaced it by the explicit length C_*=r0+s log(r0/s-1), so x(r0)=0 without rebinding c. Also stated the unscaled Taylor bound explicitly; the residual retains h^-2 and remains O_H(sqrt(h)). No mathematical or scope weakening.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_record",
    "id": "ex-gr-fx08-1",
    "outcome": "false_positive",
    "status": "false_positive",
    "reason": "The alleged physical supplier is actually kind lemma, domain mathematics. Its complete argument uses the fixed Kerr null normal, the defined mathematical test tensor, smooth joint mode equations and an elementary full-period sine-square integral. It assumes no physical matter coupling, wave existence or empirical law. The example supplies exactly its trace/extension/full-period/cut hypotheses; omega=m Omega_H/2 gives coefficient -(m Omega_H)^2/8 and a strictly negative cut integral wherever the trace is not identically zero. Mathematical dependency roles are correct; no item edit is warranted.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "The assigned carriers are draft frontier items. No published supplier or consumer was edited, no public interface changed, and this assigned review identified no separate potentially defective published use. This is a no-change proposal for this unit only.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-gr-fx09-1",
    "status": "fixed",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "location": "Facts F9/F10 and Verification 3.1",
    "reason": "The original step 3.1 applied F10 after supplying only scalar smallness and margins, omitting a maximal solution and its problem-specific continuation criterion. E=0 on [0,1), E0=0 and constant margins satisfy the scalar data for positive A, epsilon, delta, C with eta>2A epsilon^2, while the declared endpoint remains 1. Those data therefore do not imply an infinite solution lifespan. The repair makes all solution and continuation assumptions explicit before invoking F10.",
    "repair": "Restored the full maximal-solution and finite-endpoint continuation hypotheses in the F9/F10 restatements and explicitly assumed them in step 3.1 before applying F10. The scalar claim and all dependency interfaces remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "defect_ledger": [
      {
        "id": "ex-gr-fx11-2",
        "model": "gpt-6-luna",
        "context_sha256": "3534e8fdf6400e9cd4387412e0f230824c39f87558c87803b6dc75e66f675c42",
        "proposed_disposition": "false_positive",
        "reason": "The supplier Statement alone gives only zero-set equivalence, but its current complete Proof establishes the stronger identity: thm-gr-fx-lichnerowicz-reduction step 1.2 derives R(h)=phi^-5(-8 tildeDelta phi+tildeR phi), and step 3.1 explicitly derives H=phi^-5(-8 tildeDelta phi+tildeR phi)+(2/3)tau^2-phi^-12|tildeSigma|^2. Fact F2 is exactly its algebraic factorization. The example meets all hypotheses: a compact smooth three-torus, smooth positive phi_N (even N and 0<epsilon<1), flat seed metric, zero TT tensor, constant tau=0 and vacuum Lambda=T=0. Hence step 2.2 legitimately gives H=2 epsilon N^2/[L_*^2(1+epsilon)^5]>0. The claimed missing deduction is already supplied; no source edit is warranted."
      }
    ],
    "published_consumer_ledger": []
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "def-emx-finite-energy-boundary-model",
    "proposed_status": "fixed",
    "outcome": "confirmed_nonfatal",
    "defect_type": "nonfatal source/scope qualification",
    "evidence_report": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u4.json",
    "reason": "The proposed static gradient has curl zero but divergence(mu H)=mu Delta(phi), so the evolution equations do not impose the magnetic Gauss constraint. The definition is a consistent curl-evolution energy class; its unqualified Maxwell physical scope omitted this limitation. Clarified the subsystem and displayed the additional volume-charge Gauss test identities without changing the original energy class or any energy conclusion."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "lem-emx-surface-divergence-c1-representation",
    "proposed_status": "fixed",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "evidence_report": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u4.json",
    "reason": "Original step 4.1 applies global uniqueness to a chart-only density without proving it agrees with the constructed global representative on chart-supported tests pointwise. Added an ambient cutoff eta, extended eta(g_X-g) continuously by zero, compared its pairings using steps 2.1 and 3.1, and applied the published global localization lemma to this genuinely global continuous density. Separate final uniqueness completes the unchanged Statement."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "ex-emx-impedance-sign-check",
    "proposed_status": "fixed",
    "outcome": "confirmed_nonfatal",
    "defect_type": "nonfatal source/scope qualification",
    "evidence_report": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u4.json",
    "reason": "Chen PDF p.3 gives n cross H minus lambda E_t equals g and supplies no lambda sign. The original locator promised a conversion that was absent, although the local power calculation was correct. Added the explicit homogeneous conversion n cross H_tau=-Y E_tau, hence lambda=-Y, without attributing passivity to Chen; also corrected Beisert energy PDF pages to 87-88 after reading them."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "pthm-emx-weak-poynting-uniqueness",
    "proposed_status": "open",
    "defect_type": "logic",
    "reason": "Unassigned frontier item overclaims general impedance initial-value uniqueness: separately supplied quadratic Green-compatible pairs do not form a linear admissible class. Exact counterexample and affected clauses are in repair_notes.owner_referrals; owner repair is required, with no invented assigned judge tuple."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "proposed_status": "no_update_required",
    "reason": "Every direct consumer of the changed definition is a draft item in the frozen frontier. No potentially defective published consumer was found in this direct-use examination; imported mathematics remained read-only."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-qftx-cw-fundamental-group-presentation",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "Proposed fixed finding for thm-qftx-cw-fundamental-group-presentation: Reviewed the based tree collapse and van Kampen cell-attachment proof, including empty generator/relator lists and finite selections. F1 now names the exact proved group-laws supplier; Statement unchanged.",
    "ledger_path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-gr-fx-connection-path-transport",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "Proposed fixed finding for def-gr-fx-connection-path-transport: Reviewed the repaired chosen connection, tetrad matrix and finite path pieces. Smoothness gives continuous coefficients on each closed piece; uniqueness gives subdivision independence. The geometric input is now explicit.",
    "ledger_path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "prop-gr-fx-s1-loop-noncontractible",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "Proposed fixed finding for prop-gr-fx-s1-loop-noncontractible: Reviewed the multilinearity proof and finite-chain Stokes supplier. The angular form is smooth and closed, integrates to 2 pi around the loop, and contradicts a thin contraction; Statement unchanged.",
    "ledger_path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "prop-gr-fx-small-loop-curvature",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "Proposed fixed finding for prop-gr-fx-small-loop-curvature: Checked the four signed segment expansions, later-left product and uniform remainder. The general calculation uses the defined matrix expression; the smooth tetrad identification respects its supplier scope. Statement unchanged.",
    "ledger_path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-gr-fx14-1",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "Proposed fixed finding for ex-gr-fx14-1: Checked the global coframe, eta-skew connection, tensorial closedness, curvature calculation, exponential solution and projection argument. The example meets the repaired transport interface and retains its Statement.",
    "ledger_path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "disposition": "no_update",
    "reason": "No potentially defective published consumer was found. The published group-laws, matrix-ODE and tensoriality suppliers were used at their exact proved scope and were not edited. All four direct item consumers of the changed transport Definition belong to the frozen frontier.",
    "ledger_path": "research/published-consumer-supplier-ledger.md"
  },
  {
    "defect_ledger": [
      {
        "subject": "ex-nrqmx-twisted-ring-spectrum",
        "location": "Facts & Assumptions F4",
        "severity": "nonfatal",
        "disposition": "fixed",
        "reason": "Restricted adjoint scaling to nonzero real scalars and proved the exact domain identity. The excluded zero case was never used in the verification."
      },
      {
        "subject": "ex-nrqmx-twisted-ring-spectrum",
        "location": "Verification step 2.1",
        "severity": "nonfatal",
        "disposition": "fixed",
        "reason": "Added the missing reverse boundary-domain inclusion using the p,q basis, preserving the full Example."
      },
      {
        "subject": "ex-nrqmx-twisted-ring-spectrum",
        "location": "Facts & Assumptions F5 and owning contract F3 citations",
        "severity": "nonfatal",
        "disposition": "fixed",
        "reason": "Specified composition locally and replaced irrelevant supplier excerpts with exact finite-interval and second-order Sobolev clauses."
      }
    ],
    "published_consumer_supplier_ledger": []
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-nrqmx-rank-one-resolvent",
    "location": "Facts & Assumptions [A2]",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The resolvent supplier states Countable Choice, whereas Kato-Rellich states AC. A2 now distinguishes these premises and derives Countable Choice by selecting c on the family of values of a sequence and setting f(n)=c(X_n); the theorem continues to assume AC.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_adjudication_record",
    "id": "def-nrqmx-resonance-matrix-element-poles",
    "model": "gpt-6-luna",
    "context_sha256": "54983f78d018a85b4541cf16bd9d01496f14f9b947ead5837bb544955d671e11",
    "outcome": "false_positive",
    "reason": "The Definition explicitly says to use R_T(z)=(T-zI)^(-1); it does not identify that symbol with the supplier's (zI-T)^(-1). Since T-zI=-(zI-T), the local inverse is the negative of the supplied inverse on exactly the same resolvent set. With first-variable-linear inner product, every matrix element and its continuation acquire the same factor -1, leaving pole locations and orders unchanged. No supplier identity with a sign-sensitive numerator is invoked. The stated local convention is consistent and needs no repair."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_adjudication_record",
    "id": "thm-nrqmx-short-range-scattering-completeness",
    "model": "gpt-6-luna",
    "context_sha256": "f1f504e4882c6df33183312073ba8e448a4bf474dc7bf8a53ee6a1ca69c76203",
    "outcome": "false_positive",
    "reason": "The cited completeness theorem [F2] is stated for the unprojected strong limits, with exactly this real bounded compactly supported potential and H^2 realization, and already proves (a) and (b). Its V=0 specialization, explicitly permitted and computed as Omega_pm=I in local step 1.2, gives H_ac(H0)=ran I=H and hence P_ac(H0)=I. Independently, the same supplier's F1 supplies the free scalar spectral density rho_u(E)=sqrt(E)/2 times the sphere integral of |hat u(sqrt(E) omega)|^2, zero on E<=0; thus every free scalar measure is absolutely continuous. The projection in [F4] is therefore the identity, and both wave conventions and their products Omega_+^*Omega_- coincide. This is an immediate consequence of an existing cited supplier, not an unsatisfied prerequisite."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No defective published supplier use or changed public interface was found in this assignment. No published item was edited or adjudicated, and no published maintenance closure is claimed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "def-nrqmx-smooth-projector-bundle",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "The final Definition paragraph omits the interval restriction of its cited regularity supplier. This is a source-scope overstatement, not a missing bundle premise: P is already explicitly assumed C2 on M, and the local well-definedness lemma constructs frames and transport directly. Repaired the example to state the exact interval hypotheses and restrict its resulting projector to M=(0,1); the general bundle definition is preserved.",
    "evidence": "items/def-nrqmx-smooth-projector-bundle.md: final Definition paragraph; thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate Statement (a) and proof 1.1; current unit-47 review."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "cex-nrqmx-gap-closing-adiabatic",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "F1 inaccurately phrases sufficient gap/coherent-selection hypotheses as necessary for an O(1/T) estimate. The actual refutation does not need that converse: the diagonal propagator is explicit, U_T(1)=I2, and endpoint ordered-branch leakage is exactly 1 for every T. Replaced F1 by the supplier's one-way implication; the final fixed invariant-subspace caveat already correctly permits zero leakage at a crossing. Corrected stale [-1,1] calculations in its owning contract to the current [0,1] interval.",
    "evidence": "items/cex-nrqmx-gap-closing-adiabatic.md: F1 and steps 1.1-4.1; strict owning-contract validation in current unit-47 report."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "refer_published_owner_maintenance",
    "subject": "thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate",
    "severity": "nonfatal",
    "disposition": "OPEN publication-owner maintenance",
    "affected_use": "The assigned definition uses its interval projection regularity, and thm-nrqmx-adiabatic-geometric-phase-bound F1 imports its finite adiabatic estimate.",
    "reason": "The inspected published mathematical carrier has no verification.audited, verification.verified or verification.repair field. Its interval regularity and explicit finite-matrix proof suffice for the owned conditional uses; no publication audit or source repair is claimed. The focused depcheck itself passed without diagnostics.",
    "minimality": "Refer only the missing publication evidence to its owner; no mathematical interface change or published source edit is warranted by these reviews."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-nrqmx-heisenberg-exchange-tl",
    "status": "fixed",
    "severity": "nonfatal",
    "outcome": "confirmed_nonfatal",
    "location": "Facts & Assumptions F1; owning contract supplier_excerpts",
    "reason": "Confirmed nonfatal attribution defect: the supplier Definition fixes J_i^a=sigma_i^a/2 and e_i=I-s_i, while its S_i^a=hbar J_i^a remark is conditional physical interpretation. The consuming Statement already defines S_i^a=hbar sigma_i^a/2, so the equality and cancellation in step 1.1 are valid without that remark. Repaired F1 to distinguish supplier definitions from the consuming local definition; no mathematical claim or prerequisite was missing.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "id": "pthm-emx-lorentz-susceptibility",
    "ledger": "canonical-defect-ledger",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "location": "Proof 1.1; local affine-proof uses in 2.1, 3.1, 4.1 and 5.1",
    "reason": "The original step 1.1 invokes a chain rule absent from its declared suppliers: F2 gives exp′=exp but not differentiation after t↦-iωt. This load-bearing dependency-citation gap is repaired by proving the affine case directly from difference quotients, including zero slope, then obtaining both harmonic derivatives and projecting to real parts. The same local rule is explicitly cited in steps 2.1, 3.1, 4.1 and 5.1.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "id": "ex-emx-anomalous-group-delay",
    "ledger": "canonical-defect-ledger",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "location": "Facts & Assumptions A1",
    "reason": "A1 calls the total absolute permittivity susceptibility, while the supplier defines the oscillator susceptibility as chi_abs=a/(omega_0^2-omega^2-i gamma omega) and epsilon=epsilon_infinity+chi_abs. The formulas used in the Statement and Verification are already correct; this is a nonfatal terminology/interface-restatement defect, repaired by naming and displaying both quantities explicitly.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "run": "physics-non-fluid-129-2026-10-21-r2",
    "item": "thm-nrqmx-sharp-joint-measurability",
    "class": "accuracy",
    "subclass": "citation-inflated",
    "severity": "nonfatal",
    "location": "facts-block",
    "disposition": "fixed",
    "reason": "F1 incorrectly attributed closure under marginals to the finite-effects supplier. Deleted the unused attribution; step 1.2 proves its needed domination from the joint marginal sums directly.",
    "evidence": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u50.json"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "item": "thm-nrqmx-sharp-joint-measurability",
    "reason": "No published carrier was changed or found defective in the inspected supplier uses. The assigned draft Statement is unchanged, so there is no supplier-interface event or published consumer maintenance referral."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-nrqmx-finite-environment-recurrence",
    "outcome": "false_positive",
    "reason": "F1 cites the supplier's two-qubit calculation, not an assertion that its Statement contains the construction. The current items/pthm-nrqmx-finite-reduction-channel.md Proof 1.2 explicitly chooses H_tot=hbar*g*Z tensor Z and eta=|+><+|, defines the convergent matrix power series, derives the controlled diagonal blocks V_b, and computes kappa(t)=(exp(-2igt)+exp(2igt))/2=cos(2gt). I checked that complete calculation against the system-first partial trace and the scalar phase suppliers. The owning contract separately records the Statement citation and the exact Proof 1.2 construction in supplier_excerpts. Thus the rejected claim that the cited calculation is unlicensed is false; the narrower Statement excerpt alone does not exhaust the actual supplier argument.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-fixed-finding",
    "subject": "lem-nrqmx-finite-symplectic-implementers",
    "severity": "nonfatal",
    "location": "Facts & Assumptions A1",
    "disposition": "fixed",
    "reason": "A1 incorrectly attributed an explicit Stone–von Neumann hypothesis to two choice definitions, although no Stone–von Neumann theorem is used. Removed that attribution and explained AC⇒Countable Choice and the actual regularity/Fourier/spectral uses. Explicit chirp, dilation, Fourier covariance and factorization prove existence, and irreducibility plus bounded spectral calculus prove phase uniqueness unchanged."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-fixed-finding",
    "subject": "ex-nrqmx-single-mode-squeezing",
    "severity": "fatal",
    "defect_type": "logic",
    "location": "original Verification 1.1 and 3.1",
    "disposition": "fixed",
    "reason": "The finite-core identification does not establish the operator domains used for arbitrary Schwartz vectors, so the claimed squeeze identity and number expectation lacked a load-bearing domain argument. New Verification 1.1 uses exact closed weighted ladder domains, integration by parts against Hermite functions and Parseval to establish domain membership and differential actions on every Schwartz vector. Schwartz invariance then gives a* a=N=(x²−∂²−1)/2 on that domain. All claims and conventions are preserved."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no-update",
    "reason": "No published supplier or consumer repair is required by these unchanged public interfaces. Both added closed-domain suppliers are published mathematical context, read-only; their stated closure and weighted-domain results suffice."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-nrqmx-floquet-galerkin-correctness",
    "status": "fixed",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "Confirmed a missing input-domain hypothesis: with integer Fourier harmonics, d=1, b=0 and N=1/2 leave only harmonic zero, so the compression has size 1 and one block assignment, whereas q=2 and (2N+1)^2=4. The algorithm explicitly requires integer d,b,N; the theorem independently restates its inputs without that restriction. Added explicit integer domains to match the algorithm, preserving its full admissible scope.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-nrqmx-spectral-residual-certificate",
    "location": "Proof step 1.1",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "Propose recording the confirmed wrong-rule citation and its completed sum-rule repair. Statement clause 3 of the existing Borel-calculus dependency applies on D(T) intersect H; no mathematical claim was weakened and no supplier was added. The owning contract derivation now matches the corrected proof.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "defect_ledger": [
      {
        "id": "def-qftx-distributions-on-smooth-manifolds",
        "model": "gpt-6-luna",
        "context_sha256": "5f6f0fc097752e3d34355058a9fba44429976e3a13f3d3631721b30fb41feaf2",
        "proposed_outcome": "confirmed_nonfatal",
        "proposed_status": "fixed",
        "reason": "The manifold test-density topology itself covers zero-dimensional charts, but the phrase Euclidean distribution invokes imported test spaces restricted to n>=1. This is a nonfatal definitional scope omission, not a failed positive-dimensional construction. Added the zero-dimensional Euclidean test spaces, their norm topologies and continuous duals explicitly, with empty multi-index and determinant conventions; retained every manifold dimension and the existing density/pullback formulas."
      },
      {
        "id": "lem-qftx-microcausal-star-product",
        "model": "gpt-6-luna",
        "context_sha256": "85608e6d1f30352f31a8b8b8ee1e6111a477b99c5c039634a5e2c48db6513f2f",
        "proposed_outcome": "confirmed_nonfatal",
        "proposed_status": "fixed",
        "reason": "F3 inaccurately says the tensor wavefront estimate is stated in the supplier interface. It is already proved in thm-qftx-wavefront-product Proof step 1.1 by localized tensor Fourier factorization, rapid decay in a nonzero regular block and polynomial bounds in the other block. Thus the mathematical premise is available: this is a nonfatal citation-locator defect, not an unproved cancellation. F3 now states the bound explicitly, identifies that exact proof step and explains its repetition on product manifolds; the Statement and four proof steps are unchanged."
      }
    ],
    "published_consumer_ledger": [],
    "owner_referrals": [
      {
        "id": "lem-qftx-wavefront-chart-invariance",
        "path": "items/lem-qftx-wavefront-chart-invariance.md",
        "route": "frontier_owner",
        "affected_use": "Statement omits Countable Choice; Given and A1 assume it and Proof steps 1.1, 2.1, 3.2 and 4.1 invoke the stated Fourier/integral suppliers.",
        "minimality": "Owner should expose the hypothesis used by the existing proof and examine direct consumer interfaces, or supply a choice-free proof. Pre-existing finding, outside this assigned tuple set; no edit made."
      },
      {
        "id": "thm-qftx-wavefront-product",
        "path": "items/thm-qftx-wavefront-product.md",
        "route": "frontier_owner",
        "affected_use": "Statement omits Countable Choice; A1 assumes it and Proof step 1.2 invokes lem-qftx-global-microlocal-pullback, whose Statement assumes Countable Choice.",
        "minimality": "Owner should carry the adopted hypothesis in the Statement and examine its direct uses; the assigned star-product Statement already assumes AC_omega. Pre-existing finding; no edit made."
      },
      {
        "id": "thm-qftx-scalar-eg-induction",
        "path": "items/thm-qftx-scalar-eg-induction.md",
        "route": "frontier_owner",
        "affected_use": "F3 attributes W-W^T=iE with causal support to the microcausal-star-product supplier; Proof step 3.1 uses this to interchange spacelike separated blocks.",
        "minimality": "Attribute the antisymmetric-part/causal-support premise to def-qftx-local-time-ordered-system, whose Definition explicitly adopts it. Keep the star-product supplier citation only for its contraction closure conclusion. Pre-existing attribution defect; no edit made."
      }
    ],
    "authority": "Proposed updates only. Controller/owner merges canonical ledgers; no shared ledger, judgment, stamp, certificate or round state was written."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed",
    "defect_id": "physics-non-fluid-129-2026-10-21-r2-step5-initial-r1-u59-riemann-citation",
    "subject": "lem-qftx-finite-lorentz-cocycle-splitting",
    "severity": "fatal",
    "disposition": "fixed",
    "defect_type": "dependency_citation",
    "reason": "F3 supplied only a Lebesgue-integral identity, whereas step 4.1 constructs Riemann chart integrals. Replaced that citation and dependency with the existing published Riemann change-of-variables corollary; its injective C1 map, invertible derivative and compact-support hypotheses hold for every overlap transition and zero-extended partition product.",
    "evidence": [
      {
        "path": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u59.json",
        "note": "Native assigned tuple adjudication and completed scoped repair; controller must adopt this proposal without modifying historical rows."
      }
    ],
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed",
    "defect_id": "physics-non-fluid-129-2026-10-21-r2-step5-initial-r1-u59-positive-index-set",
    "subject": "cex-qftx-resolvent-zero-continuous-spectrum",
    "severity": "fatal",
    "disposition": "fixed",
    "defect_type": "logic",
    "reason": "The library defines natural numbers to include zero, but the witness declares the positive-indexed family (e_n) for n>=1 to be a basis and uses y_n=1/n without specifying a zero coordinate. Made H explicitly ell2(N_{>0}), defined N_{>0}={1,2,...}, its sequence elements, inner product and coordinate basis; every later coordinate index uses that same set.",
    "evidence": [
      {
        "path": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u59.json",
        "note": "Native assigned tuple adjudication and completed scoped repair; controller must adopt this proposal without modifying historical rows."
      }
    ],
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-emx-anisotropic-plane-symbol",
    "proposed_disposition": "fixed",
    "outcome": "confirmed_nonfatal",
    "reason": "The kernel equivalence is algebraically correct for every positive frequency, but post-em-material-closure Postulate (b) restricts the anisotropic physical interpretation to a finite-band effective phase response. The definition and physical_scope omitted that qualification. Added an explicit declared finite positive-frequency band for physical use while preserving the symbol algebra and equivalence for every omega>0; no claim is weakened to evade a mathematical obligation.",
    "evidence": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u6.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-emx-reciprocal-phasor-medium",
    "proposed_disposition": "false-positive",
    "outcome": "false_positive",
    "reason": "The definition explicitly stipulates a fixed-frequency phasor data class using the two displayed curl equations; it does not assert their equivalence to all four Maxwell equations or infer divergence constraints from them. With mu=m I and H=alpha x, the proposed omega=0 example indeed has div B=3m alpha, but this is permitted in the stipulated larger data class and refutes no claim made here. The reciprocity calculation uses only those curls, C1 fields and transpose symmetry; at omega=0 its tensor terms vanish and the divergence identity remains valid. Chew pp.146-148 likewise derives the finite-volume identity from the curls, not from a divergence hypothesis. No item edit is authorized or needed.",
    "evidence": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u6.json",
    "uncertain": false,
    "source_urls": [
      "https://engineering.purdue.edu/wcchew/ece604f23/EMFTEDX032124R.pdf"
    ],
    "familiar": true
  },
  {
    "canonical_defect_ledger": [
      {
        "id": "lem-qftx-transverse-center-scaling-bound",
        "model": "gpt-6-luna",
        "context_sha256": "7cbe128cb4426a65cc59f2f2c8afa040e145f6fbb922523af06b3654f6cfe605",
        "outcome": "false_positive",
        "defect_type": null,
        "proposed_disposition": "false_positive",
        "reason": "The current thm-qftx-wavefront-product Proof 3.1 explicitly derives the absolutely convergent localized Fourier convolution and identifies it with diagonal pullback. Thus F3 is supported by the actual supplier argument, even though the displayed Statement only gives the product and wavefront bound. The assigned lemma itself proves uniform polynomial bounds (1.1–2.1), uniform regular-cone decay (3.1), and the two-region integrable majorant (4.1); joint center transversality and nonnegative bounds are retained. No missing Fourier premise or item edit is justified by this tuple.",
        "uncertain": false
      },
      {
        "id": "def-qftx-local-time-ordered-system",
        "model": "gpt-6-luna",
        "context_sha256": "f34d8012d003436f8739a6edcd50c3e108b5cd85a2bda55e8cfcf26ee332096a",
        "outcome": "confirmed_nonfatal",
        "defect_type": null,
        "proposed_disposition": "repaired",
        "reason": "The adjective analytic had no parameter or analyticity definition. This is a confirmed terminology defect: the preceding scaling clause already requires preservation of the actual scaling degree, not an additional holomorphic regularization. The repair specifies the exact relative distribution, dimension, finite-real degree and family E_delta(t), with the degree-minus-infinity uniqueness case, and defines analytic extension stage as the distribution-theoretic step. It retains all actual-degree and engineering-bound requirements and distinguishes these from the parameter-dependent analytic regularizations in FR equations (93)–(97).",
        "uncertain": false
      },
      {
        "id": "prop-qftx-finite-renormalization-composition",
        "model": "gpt-6-luna",
        "context_sha256": "e49faf0bd4f2b7ccb586fb5e6ab6667305dfb48f54315561f78931102e5e7165",
        "outcome": "confirmed_fatal",
        "defect_type": "dependency_citation",
        "proposed_disposition": "repaired",
        "reason": "The original step 4.1 applies a theorem about support at a single point directly to a distribution supported on the entire total diagonal. This misses an essential hypothesis at the cited use. Repaired steps 4.1 and 5.1 prove the center/relative decomposition Q=1_y tensor q from translation invariance, using compact primitives of tests with zero center integral, then classify the point-supported relative distribution q. The resulting integrated delta-jet formula proves finite local polynomial output, support inclusion and covariance coefficientwise. The Statement also explicitly types the formal C[[hbar]] modules and interaction-degree completion, resolving the digest concern without weakening the claim.",
        "uncertain": false
      },
      {
        "id": "ex-qftx-two-vertex-log",
        "model": "gpt-6-luna",
        "context_sha256": "c0385d8d38806124f9ab199ba7cb8bd9d7ef7999f05bf8adbf8c0461a4f1f90a",
        "outcome": "false_positive",
        "defect_type": null,
        "proposed_disposition": "false_positive",
        "reason": "A1 expressly attributes the assumptions to the anomaly proposition’s suppliers. In that current published proposition, F7 cites the polar-coordinate formula under Countable Choice, F6 states AC implies Countable Choice, and A1 supplies it to F4/F7 from AC. Thus the example does not assert a stronger independent hypothesis of the anomaly proposition; its separately declared AC and Countable Choice are sufficient and redundant. The cutoff-integral subtraction gives the positive (8 pi^2)^(-1) logarithmic coefficient; dimension four permits only a scalar delta ambiguity. The two-vertex TikZ has exactly two parallel internal lines and two external slots at each vertex, as stated.",
        "uncertain": false
      }
    ],
    "published_consumer_ledger": [],
    "frontier_owner_referrals": [
      {
        "id": "thm-qftx-scalar-eg-induction",
        "path": "items/thm-qftx-scalar-eg-induction.md",
        "location": "Proof 6.1; rejection-blind digest concerns[0]",
        "finding": "The current sentence says fixed graph data are Lorentz invariant, although fixed coordinate derivative labels mix under boosts. The balanced-label module is mentioned, but the combined action on labels and numerical distributions, and the finite-dimensional local Hom-module carrying c(X), are not explicit.",
        "affected_use": "The assertion that c(X) vanishes off the diagonal and satisfies the finite-dimensional cocycle-splitting supplier hypotheses requires the combined equivariance defect, not componentwise scalar invariance.",
        "minimality": "Refer to the native owner of this unassigned frontier item to specify that combined action and module in step 6.1. This is a preserved Step-4 concern, not a new assigned tuple, published finding, claim of proof review completion, or permission to edit the item.",
        "disposition": "refer_frontier_owner",
        "uncertain": false
      }
    ]
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-qftx-chiral-anomaly-interface",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "Replace the incorrect componentwise stability assertion with stability of the complete bigraded subspace and explicit degree-changing maps. Also corrected the formal operator module typing and removed the current Definition hyperlink while retaining its existing Definition references. No published supplier or published consumer repair is proposed.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/html/hep-th/0002245"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_record",
    "subject": "def-qftx-finite-gaussian-shell-transform",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "Proof 1.1 omitted the Borel parameter sigma-algebra. Explicit Borel Lebesgue measure and product measurability repair Tonelli application without changing Definition. Owning derivation mirror synchronized under the shared write lock; scoped checks passed. Preserve the earlier distinct exponent-units finding and all original evidence.",
    "adjudication_ref": {
      "path": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u64.json",
      "id": "def-qftx-finite-gaussian-shell-transform"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "no_new_defect",
    "subject": "thm-qftx-heavy-derivative-bound",
    "disposition": "false_positive",
    "reason": "The AC lemma supplies Countable Choice; the separately declared spectral supplier explicitly uses it in its adjoint criterion. The current theorem is sound and unchanged."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "No published defect or changed public supplier interface was found in this assigned review. The Tonelli theorem supplies exactly Borel parameter measurability once the parameter measurable space is specified. No maintenance repair or published acceptance is claimed."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-qftx-compact-green-support-overlap",
    "status": "fixed",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "location": "Statement generalization and Proof step 2.1",
    "reason": "The finite enclosure argument requires ambient closedness. The generalization and proof now explicitly require closedness in M; both actual Green-support consumers meet that condition. This is a proposed ledger update only; native collection and further-round obligations remain with the controller."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-qftx-compact-green-support-overlap",
    "status": "fixed",
    "outcome": "confirmed_nonfatal",
    "location": "Facts F2 and Proof step 2.1",
    "reason": "Verified the Step-4 digest concern against def-compact-space: it defines intrinsic compactness and expressly requires the ambient-cover theorem. Added lem-compactness-of-a-subspace-is-ambient as a mathematical dependency and F2 citation, including its finite-choice indexed form. Updated only this item's owning manifest and contract under the shared lock."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-qftx-euclidean-limit-data",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "The normalized functional need not annihilate an invariant ideal, so the original quotient forms were undefined. The repaired Definition requires annihilation, defines the quotient functional and both positivity tests, and explains representative independence. This is a proposed ledger disposition for controller adoption, not certification.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-emx-retarded-versus-fixed-time",
    "finding": "Nonfatal F3 citation omission for positive-ball measure",
    "proposed_status": "fixed",
    "evidence": "Confirmed a nonfatal local citation omission: the positive-ball lemma was already a direct dependency, but F3 and its contract did not restate or cite its AC_omega positivity clause. Added that exact clause and citation. Strict positivity is mathematically valid and also a Given hypothesis; this is not a missing theorem. Separately repaired the pulse SI amplitude omission with alpha>0 of units C m^-2 s^-2.",
    "path": "research/defect-ledger.jsonl",
    "subject": "ex-emx-retarded-versus-fixed-time",
    "batch": "7",
    "proposed_action": "Controller may append native adjudication/repair evidence; worker did not edit the shared ledger."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-emx-retarded-versus-fixed-time",
    "finding": "Additional SI pulse-amplitude defect found during assigned review",
    "severity": "fatal",
    "defect_type": "other",
    "proposed_status": "fixed",
    "evidence": "With dimensionless f and t in seconds, unscaled G=(t-u)^2 makes rho have units s^2/m and J units s rather than SI charge/current density. Introduced alpha>0 in C m^-2 s^-2 in the public Example and carried it through V=2 alpha F e3 and E_rad=-mu0 alpha F e3/(2pi). No empirical premise or claim was introduced.",
    "path": "research/defect-ledger.jsonl",
    "subject": "ex-emx-retarded-versus-fixed-time",
    "batch": "7",
    "proposed_action": "Controller may append native adjudication/repair evidence; worker did not edit the shared ledger."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-emx-dipole-dark-direction",
    "finding": "Incompatible SI dimensions of electric and circulating current terms",
    "severity": "fatal",
    "defect_type": "other",
    "proposed_status": "fixed",
    "evidence": "Confirmed an SI admissibility defect: for dimensionless f and dimensional t, the original G prime f and H prime partial_i f had units s and s^2/m, so they could not be added as an SI current. Introduced independent positive amplitudes alpha in C m^-2 s^-2 and beta in C m^-1 s^-3, giving G units C m^-2 and H units C m^-1. Both current terms now have units A m^-2. The exact identities become p second=2 alpha F e3 and V1(e3,u)=6 beta F/c>0, preserving the claimed dipole-node counterexample. Category other records physical-unit/interface admissibility, rather than an incorrect integration identity or missing supplier.",
    "path": "research/defect-ledger.jsonl",
    "subject": "ex-emx-dipole-dark-direction",
    "batch": "7",
    "proposed_action": "Controller may append native adjudication/repair evidence; worker did not edit the shared ledger."
  },
  {
    "ledger": "published-consumer-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "marker": "physics-non-fluid-129-2026-10-21-r2-batch-7-kernel-marker",
    "proposed_action": "retain_existing_open_maintenance",
    "reason": "The existing kernel publication-marker maintenance entry remains separate. These example amplitude/citation repairs change neither lem-em-retarded-wave-kernel nor its consumer history theorem interface, and supply no publication-acceptance evidence. No new potentially defective published consumer was found; do not close or recertify that historical maintenance row."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "cex-qftx-fixed-polarization-tensor-factor",
    "location": "Facts & Assumptions F3 and Counterexample step 3.1",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "The rotation supplier explicitly assumes full AC; its premise was absent from the consumer. A1 and def-axiom-of-choice now license the auxiliary conclusion, and the contract and manifest mirror the repair. The original fixed-pair claim and its ACω refutation are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "prop-qftx-spin-to-orbit-constraint",
    "status": "fixed",
    "severity": "nonfatal",
    "location": "Facts & Assumptions F3; Proof step 2.1",
    "finding": "The auxiliary cone-spin qualification omitted fixed helicity and explicit radial and angular support hypotheses.",
    "repair": "F3 now reproduces the exact supplier hypotheses and bound; step 2.1 conditions that auxiliary estimate on them. The general balance and all other Statement claims retain their original scope.",
    "reason": "The missing qualification is repaired without altering the mathematical public interface; the controller may merge this proposed evidence row.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1006.3876"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "prop-qftx-coxeter-specialization",
    "proposed_status": "fixed",
    "severity": "nonfatal",
    "finding": "Undefined statistics terminology in title; exact Coxeter quotient claim and proof are sound.",
    "repair": "Title and owning manifest title now identify the q=1 Coxeter quotient; mathematical interface unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-qftx-vacuum-channel-exchange",
    "proposed_status": "fixed",
    "severity": "nonfatal",
    "finding": "Orthogonality cited without specifying the supplier-required split inner product and orthonormal tree bases; diagram arcs bulged outside endpoint strip; contract allowed impossible coincident roots.",
    "repair": "Explicit space, inner product, bases, projector construction and indices supplied; orthogonal splitting proved; cup/cap arcs corrected; contract boundary and derivations synchronized."
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "id": "prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb",
    "path": "items/prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb.md",
    "proposed_status": "maintenance_required",
    "severity": "nonfatal",
    "route": "original mathematics owner; imported snapshot read-only",
    "affected_use": "The Statement TikZ square-relation diagram uses outer top-cup controls y=3.65 above endpoints y=3 and outer bottom-cap controls y=.35 below endpoints y=1, on both sides of the equality.",
    "invalidated_claim": "These outer arcs are not contained between the top and bottom endpoint boundaries as required by the cited Temperley-Lieb diagram definition. The algebraic square and adjacent-relation proofs remain valid; only the displayed planar generator geometry is defective.",
    "minimality": "Reverse only the four outer curve bulges into the strip, retaining endpoints, the middle closed circle, labels and all algebraic statements/proofs. Any change to this published Statement must follow original-owner consumer review; this dispatch makes no such edit.",
    "evidence": [
      "Chen Definition 1.0.6 requires arcs inside the unit square with endpoints on its top or bottom edges.",
      "Current imported source bytes match research/math-imports.json, SHA-256 48f8f3b57a672e11a291ee57a6fa75f57eaa592de7dbcbf96df66808485e464b."
    ],
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1502.06845"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-emx-runaway-preacceleration",
    "proposed_status": "fixed",
    "severity": "nonfatal",
    "reason": "F2 now states integral-function differentiation with u<v; step 1.1 explicitly applies MVT to P-J, supplying the missing primitive-evaluation bridge using existing dependencies. Proposed evidence for controller merge, not a ledger write or certification."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-emx-force-frequency-regime",
    "proposed_status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "Positive mass and time constant are explicitly present in Example, Given and F1/F2, making the bounded-future uniqueness invocation valid. The owning manifest statement and contract fact mirrors are updated."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-emx-reduction-order-error",
    "proposed_status": "open-owner-referral",
    "severity": "nonfatal",
    "reason": "Unassigned draft item: F2 overattributes primitive evaluation to FTC-first and proof 2.1 integrates differentiated products without the short FTC/MVT bridge. F3 already declares MVT. Refer to its native owner for the analogous minimal proof repair; no source edit or adjudication performed."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "proposed_action": "no_update",
    "reason": "No defective published supplier or published consumer was found in the examined uses; the only outside-assignment finding concerns the draft reduction-of-order theorem."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-qftx-a-two-hall-flags",
    "location": "Facts & Assumptions, F1; cited in Verification 3.1",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "proposed_status": "fixed",
    "reason": "F1 falsely makes semistability of a subrepresentation equivalent to its phase being at most that of an ambient object. For phi_1>phi_2, S_1 is stable, but phi(S_1)>phi(M_0), since the phase of z_1+z_2 lies strictly between the simple phases. The cited Definition instead requires every nonzero U contained in M to satisfy phi(U)<=phi(M). This is a false dependency restatement in the premise cited by Verification 3.1; F1 now gives the quantified criterion and strict stability criterion exactly.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1611.03696"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-csm-frontier-finite-doob-bound",
    "outcome": "confirmed_nonfatal",
    "proposed_status": "fixed",
    "reason": "The event-integral identity is a defining property of conditional expectation, available through the existing supplier closure, so the first-crossing inequality is valid. However F2 attributes that property to a theorem whose Statement only supplies algebra, order and total expectation. Repaired the citation interface with direct definition F7, its dependency/role and contract/manifest mirrors; step 1.1 now displays the event-integral equality explicitly. This is an attribution defect rather than an invalid inequality."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-csm-frontier-finite-chain-martingale",
    "outcome": "confirmed_nonfatal",
    "proposed_status": "fixed",
    "reason": "F2 omitted adaptedness from its supplier definition and step 1.1 left measurability of the drift integral implicit; step 3.1 then used M_u as a measurable factor. The existing uniformized finite-jump construction guarantees this property, so the defect is an omitted elementary verification, not a false claim or a missing model hypothesis. Restored adaptedness in F2 and proved joint measurability and adapted time integrals by deterministic right-grid approximations, with an explicit Riemann-sum error bound that also covers the construction null-event convention. Reused the argument for A and adopted canonical phase numbering with matching contract references."
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no_update",
    "reason": "No published item was edited or found defective in the exact supplier uses inspected. Both assigned mathematical Statements are unchanged, so there is no public-interface event requiring consumer maintenance."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "subject": "lem-csm-frontier-finite-response-covariance",
    "severity": "nonfatal",
    "reason": "The display title omitted beta although the exact Statement and proof already included it. The title and its owning manifest mirror now include beta; no mathematical claim changed.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "subject": "ex-csm-frontier-ising-explicit-contraction",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "The two-field comparison paragraph asserted strict contraction without its required hypothesis. Restored 2d tanh(beta|J|)<1 explicitly in that paragraph and conclusion; the owning description mirror agrees. This is distinct from the historical specification-construction finding.",
    "uncertain": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "Neither repair changes a published supplier. The corrected Example has no item consumers, and its examples page only lists its ID. No potentially defective published use was identified.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "subject": "lem-csm-frontier-sine-comparison",
    "class": "accuracy",
    "subclass": "invalid-inference",
    "severity": "fatal",
    "location": "proof-step",
    "disposition": "fixed",
    "caught_at_stage": "4-judge",
    "caught_by_role": "unknown",
    "adjudicator": "step5-v2-initial-r1-u89",
    "reason": "Step 1.2 invoked cor-mean-value-theorem on [0,|u|] without excluding u=0, although its exact Statement requires a<b and an interior witness. At u=0 that interior is empty. The repair proves |sin 0|=0 from F1 first, then applies MVT only for |u|>0 with continuity supplied by F1 and F3; F4 now records a<b explicitly.",
    "repair_evidence": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u89.json",
    "uncertain": false,
    "caught_by_model": "gpt-6-luna"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No published carrier was changed, and no defective published supplier or consumer was identified in this scoped review."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-csm-frontier-potts-two-vertices",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "Propose recording the missing exhaustive vertex-set hypothesis and its completed repair. An additional isolated vertex changes both normalizers by Q. Explicit V={x,y}, E={e} now makes the existing component and spin enumerations correct; no formula or dependency was removed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "defect_ledger": [
      {
        "id": "lem-csm-frontier-ssep-bracket",
        "status": "fixed",
        "severity": "nonfatal",
        "location": "Facts & Assumptions, F1",
        "reason": "F1 incorrectly assigned transition rate N^2 to equal-occupation swaps. The model assigns that rate only to occupation-changing swaps. Such unchanged swaps have zero observable increment, so extending the generator and squared-jump sums to all bonds is valid; the martingale, bracket formula and bound remain correct. Corrected F1 and made this zero-increment extension explicit."
      }
    ],
    "published_consumer_ledger": []
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-csm-frontier-mft-reversal-identity",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "location": "Proof step 2.1",
    "reason": "The literal pointwise comparison in step 2.1 is incorrect: for the admissible path rho=c in (0,1), j(t,x)=t e_1, the forward-minus-reversed integrand is (t^2-(T-t)^2)/(4c(1-c)), whereas the displayed expression is zero. This is a nonfatal omitted routine substitution: s=T-t, dt=-ds, and exchanged limits express the reversed action at the same forward time. The repaired step states that substitution before quadratic expansion; all hypotheses, the theorem and its dependencies remain unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1404.6466"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-csm-frontier-boltzmann-grad-scaling",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "other",
    "reason": "Explicitly defined contact-time local finiteness, isolated contacts and maximal free-flight intervals; retained the partial-trajectory contract and endpoint qualifications."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-csm-frontier-distinct-scaling-limits",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "Replaced the misleading multiple-limits title with Distinct kinetic scaling prescriptions; preserved the complete Example and Verification, including the sole asserted heat limit."
  },
  {
    "defect_ledger": [
      {
        "ledger": "research/defect-ledger.jsonl",
        "id": "def-csm-frontier-finite-rate-process",
        "proposed_status": "fixed",
        "severity": "nonfatal",
        "finding": "Random-element codomain omitted its sigma-algebra.",
        "repair": "Explicit P(E) and measurable coordinate maps; additionally supplied the second FTC prerequisite for normalization.",
        "evidence": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u94.json"
      },
      {
        "ledger": "research/defect-ledger.jsonl",
        "id": "lem-csm-frontier-finite-jump-feynman-kac",
        "proposed_status": "fixed",
        "severity": "fatal",
        "defect_type": "logic",
        "finding": "Fixed-start right expansions did not establish left continuity or left derivatives.",
        "repair": "Uniform increment estimate plus uniform conditional expansion, with second-FTC integral uniqueness justification.",
        "evidence": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u94.json"
      },
      {
        "ledger": "research/defect-ledger.jsonl",
        "id": "thm-csm-frontier-finite-jarzynski",
        "proposed_status": "open",
        "severity": "nonfatal",
        "route": "frontier_owner",
        "location": "Facts F4 and Proof 4.1",
        "affected_use": "F4 attributes integral_0^T a-prime = a(T)-a(0) to thm-ftc-first-part; step 4.1 uses that endpoint evaluation for common energy shifts.",
        "invalidated_claim": "Only the cited supplier implication is missing; the C1 energy-shift conclusion itself is valid by thm-ftc-second-part.",
        "minimality": "Add second FTC to deps/roles and cite it in F4; preserve the complete Statement and proof calculation. Outside assigned ownership, so no item edit or adjudication performed.",
        "evidence": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u94.json"
      },
      {
        "ledger": "research/defect-ledger.jsonl",
        "id": "thm-csm-frontier-finite-rate-forward-equation",
        "proposed_status": "open",
        "severity": "nonfatal",
        "route": "frontier_owner",
        "location": "Facts F3 and Proof 2.1",
        "affected_use": "Proof 2.1 converts d-prime=dQ and d(0)=0 into d(t)=integral_0^t d(s)Q(s) ds, while F3 cites only the first FTC.",
        "invalidated_claim": "The cited first FTC supplies a derivative of an integral, but does not directly evaluate the integral of d-prime. The continuous solution has the hypotheses of the second FTC.",
        "minimality": "Add/cite the existing second FTC for the displayed integral equation, without changing the Statement or uniqueness argument. This preexisting supplier-citation gap was observed in the direct consumer check and is referred without editing.",
        "evidence": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u94.json"
      }
    ],
    "published_consumer_supplier_ledger": [],
    "published_ledger_reason": "No defective published supplier or published consumer was identified. All eight direct consumers of the changed Definition are draft items in the frozen frontier; no published maintenance or outside-frontier interface event is proposed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "alg-csm-frontier-heat-bath-update",
    "classification": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The redundant algorithmic distributional assertion in Remarks lacked a separate general proved result. Remarks now points to the separate influence-qualified finite-time bias theorem, and the complete operational Definition is byte-for-byte unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "lem-csm-frontier-error-budget-composition",
    "classification": "confirmed_fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "Cancellation disproves the original necessary-zero-error condition for dropping a budget term. The repaired statement preserves the sum estimate and proves the strongest valid uniform non-omission claim by an equality-attaining aligned-increment construction; no statistical probability is invented.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update_needed",
    "ids": [
      "alg-csm-frontier-heat-bath-update",
      "lem-csm-frontier-error-budget-composition"
    ],
    "reason": "Both assigned carriers are draft. The algorithm Definition did not change. The changed lemma has no direct item dependency/reference consumers; its only page placement has no mathematical prose. No published-consumer defect or outside maintenance repair was discovered.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-csm-frontier-inverse-finite-exponential",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "The supplied R^k is the function space on {0,...,k-1}; the original unqualified one-based formula evaluated coordinate k and omitted 0. Defined v_j=v(j-1) explicitly on this page, retaining the intended inner product and all finite-family claims. Also supplied the missing exponential-addition citation in normalization step 2.1.",
    "post_sha256": "c16e3715bafaca6327e7d91feca772d420f9f5b4331bdb5ae1f18357be3f413c"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-csm-frontier-finite-polytope-support",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "F6 claimed a uniform enumeration of rational k-vectors while its supplier proves only binary-product countability and explicitly reserves the uniform construction. This is a routine finite-induction gap, not a false supporting-direction theorem. Added step 1.2 defining P_r as functions r to Q and the restriction/last-coordinate bijection P_(r+1) to P_r times Q, proving countability by induction before taking one enumeration. Also proved vector density from scalar intervals and corrected the coordinate convention in F9 and the simplex proof.",
    "post_sha256": "f51aadd7ec1e8dcacc5117ad0db2edc4558670151433a9cda564dbfa4984ff20"
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "supplier": "def-euclidean-inner-product",
    "consumers": [
      "def-csm-frontier-inverse-finite-exponential",
      "lem-csm-frontier-finite-polytope-support"
    ],
    "action": "record-scoped-use-review",
    "reason": "Published supplier correctly uses functions on zero-based finite domains. Assigned consumers now use an explicit bijective relabeling or its native function notation; no published supplier repair is proposed."
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "supplier": "thm-product-of-countable",
    "consumers": [
      "lem-csm-frontier-finite-polytope-support"
    ],
    "action": "record-scoped-use-review",
    "reason": "Published supplier correctly limits its result to binary products. Consumer now defines finite powers and proves the required induction locally, without attributing an unproved uniform theorem to that supplier."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-csm-frontier-fk-mixed-reflection-gluing",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F3 now includes original boundary wiring as well as exterior open connections; Proof 18.1–20.1 already retained the required terminal identifications."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-csm-frontier-fk-square-critical-point",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Replaced unsupported attribution in Proof 3.1 by the supplier's already stated uniform bound. Corrected the Step-4 digest's statement-first formatting finding by moving the existing supplier reference out of the uninterrupted Statement; no mathematical content changed."
  },
  {
    "ledger": "published-consumer-ledger",
    "id": "lem-csm-lattice-product-and-measure-compactness",
    "status": "open",
    "route": "owner/separate-published-maintenance",
    "affected_use": "items/lem-csm-frontier-fk-free-wired-limits.md F2 and Proof 3.1 invoke its finite-alphabet measure extension; crossing-amplification F1 carries these laws into the assigned critical-point theorem.",
    "invalidated_claim": "Its frontmatter says status: published, but verification contains only judge and no audited, verified or repair field, contrary to the publication-evidence rule in SCHEMA.md. This is a publication-metadata deficiency; no mathematical counterexample or missing Countable Choice premise was found.",
    "minimality": "Do not edit the published supplier in this dispatch. Owner maintenance must recover genuine publication-review evidence or perform the authorized review; a fabricated stamp is not a repair. The original Step-4 digest already flags this same issue."
  },
  {
    "ledger": "defect-ledger",
    "id": "alg-csm-frontier-interval-finite-partition",
    "outcome": "confirmed_fatal",
    "defect_type": "other",
    "status": "fixed",
    "reason": "Both outward-rounded sums lacked a specified grouping; explicit enumeration-ordered left folds repair the procedure without weakening its inputs or outputs."
  },
  {
    "ledger": "published-consumer-ledger",
    "id": "lem-directed-dyadic-rounding-enclosure-and-error",
    "status": "maintenance",
    "reason": "Confirmed the existing Step-4 digest alert: proof step 2.1 contains N_max<x<+infty with a missing backslash. Its Statement and actual overflow argument remain sound. Imported published supplier is read-only; route the presentation correction to mathematics maintenance."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "def-qsmx-von-neumann-algebra",
    "batch": "99",
    "class": "accuracy",
    "subclass": "citation-inaccurate",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "Remarks; F5; proof 2.1",
    "reason": "The GNS supplier Statement explicitly assumes its quasi-local C*-completion and finite-matrix positive-square-root interfaces in addition to Countable Choice. The original Remarks omitted these conditions, although F5 referred to the supplier's stated inputs and the Definition itself was sound. Made all hypotheses explicit in Remarks, F5 and proof 2.1 without changing the Definition or claiming separatingness.",
    "evidence": [
      {
        "path": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u99.json",
        "note": "Exact original rejected tuple, current repaired review and successful focused checks."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "lem-qsmx-von-neumann-predual",
    "batch": "99",
    "class": "accuracy",
    "subclass": "citation-inaccurate",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "Facts & Assumptions F6",
    "reason": "F6 incorrectly attributes Hilbert-space Riesz representation to F2, whose Statement supplies only trace-class duality and finite-rank density. However, the already declared def-qsmx-von-neumann-algebra explicitly defines WOT by matrix coefficients; step 1.3 uses precisely this interface and does not require converting arbitrary H* coordinates. Removed the false attribution and stated its finite matrix-coefficient neighborhoods directly. The finite-coordinate separation and rank-one trace argument remain valid, so the claimed fatal prerequisite gap is not present.",
    "evidence": [
      {
        "path": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u99.json",
        "note": "False Riesz attribution corrected using an already declared matrix-coefficient WOT interface; no fatal gap in the finite-coordinate deduction."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "refer_to_owner_for_adjudication",
    "subject": "def-qsmx-von-neumann-kms-state",
    "batch": "100",
    "location": "Definition, opening paragraph",
    "reason": "The cited predual lemma proves that positive quotient functionals are order-normal but supplies no converse placing every order-normal positive functional in Q. The terminology may therefore be read as asserting an unproved converse.",
    "evidence": [
      {
        "path": "research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u99.json",
        "note": "Outside-lane exact affected use and minimality evidence in repair_notes.outside_lane_findings; no item edit or adjudication claimed."
      }
    ]
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "No published carrier was edited and no new published-supplier defect was found. The published GNS supplier has a complete local quotient/completion proof under the additional interfaces explicitly declared in its Statement; unit 99 repaired only the draft consumer's hypothesis disclosure. The Riesz theorem is an imported read-only supplier, whose Statement was inspected but which is not needed as a new direct prerequisite. This records no whole-supplier audit or new acceptance."
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "alg-nrqmx-floquet-fourier-galerkin",
  "lem-emg-fx-finite-step-termination",
  "prop-emg-fx-discrete-gauss-preservation",
  "cex-emg-fx-cfl-discrete-growth",
  "lem-emg-fx-spherical-maxwell-reduction",
  "def-emg-fx-spherical-quotient",
  "lem-emg-fx-two-dimensional-ricci-trace",
  "lem-emg-fx-warped-curvature",
  "thm-emg-fx-local-charged-birkhoff",
  "cex-emg-fx-constant-radius-rigidity",
  "cex-emx-rough-field-energy-limit",
  "def-qftx-local-wavefront-set",
  "def-qftx-wavefront-hadamard",
  "def-qftx-off-shell-local-polynomial-functionals",
  "def-qftx-polynomial-microcausal-functionals",
  "lem-qftx-wavefront-chart-invariance",
  "lem-qftx-global-microlocal-pullback",
  "thm-qftx-wavefront-product",
  "lem-qftx-microcausal-contraction-compatibility",
  "lem-qftx-microcausal-star-product",
  "def-qftx-local-time-ordered-system",
  "cex-qftx-exact-differentiated-scaling-degree",
  "cex-qftx-positive-not-reflection-positive",
  "cex-qftx-square-delta",
  "thm-qsmx-exchange-lie-weight-blocks",
  "thm-qsmx-klr-character-specialization",
  "cex-qsmx-categorification-not-spectrum",
  "def-csm-frontier-latent-gibbs-observation",
  "lem-csm-frontier-finite-jump-path-density",
  "thm-csm-frontier-finite-rate-forward-equation",
  "def-csm-frontier-stationary-path-entropy",
  "def-emx-whitney-semidescretization",
  "def-gr-fx-bondi-expansion",
  "def-gr-fx-bms-supertranslation",
  "def-gr-fx-trapped-surface-and-black-region",
  "lem-nrqmx-projector-bundle-kato-well-definedness",
  "def-nrqmx-determinant-line-projector",
  "lem-qftx-transverse-center-scaling-bound",
  "lem-qftx-finite-graph-scaling-degree"
]


