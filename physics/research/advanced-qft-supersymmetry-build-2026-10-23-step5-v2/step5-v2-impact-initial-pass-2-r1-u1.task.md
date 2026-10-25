# Step 5 repair: impact-initial-pass-2, round 1, unit 1

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/impact-initial-pass-2-1.json.



Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-impact-initial-pass-2-r1-u1.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"advanced-qft-supersymmetry-build-2026-10-23",phase:"impact-initial-pass-2",round:1,unit:"1",input_sha256:"205481ff582bcbd98150de01f4044c30bc46bd62fd06b69b0b2c76ca43079db5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run advanced-qft-supersymmetry-build-2026-10-23 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.



Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-torus-equivariant-cohomology-cartan-model",
    "action": "propose_record_or_reconcile_assigned_finding",
    "status": "fixed-in-current-carrier",
    "reason": "Rechecked the supplier's now explicit nonnegative integer rank and the period-one normalization. Made the same rank domain explicit in this Definition and Given line so its finite Milnor product and polynomial generator list are typed. The diagonal quotient square commutes and the Cartan-square cancellation is unchanged. Proof 4.1 now correctly calls forms on the empty manifold the zero complex, while the Borel space is empty.",
    "native_adjudication": false,
    "independent_acceptance": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-qftx-supersymmetry-fluctuation-complex",
    "action": "propose_record_or_reconcile_assigned_finding",
    "status": "fixed-in-current-carrier",
    "reason": "Checked supplied smooth graded charts, Q-fixed expansion and D^2=dH on smooth fluctuations against the current background and ghost domains. Those uses remain sound. Corrected the Peelaers source attribution against the actual PDF title page to Wolfger Peelaers, notes by Bruno Le Floch; Definition and scope unchanged.",
    "native_adjudication": false,
    "independent_acceptance": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-aqft-scalar-eom-operator-reduction",
    "action": "propose_record_or_reconcile_assigned_finding",
    "status": "fixed-in-current-carrier",
    "reason": "Confirmed that a numerical nonzero m cannot have degree one as a coefficient over C. Supplied a central formal mass insertion, finite weight-six invariant space, homogeneous relation generators and evaluation to the numerical-mass quotient. Also completed the trivial gauge datum with its product connection, admitted singleton sector and supplied representative. Rechecked the quotient map, symmetry actions, Euler derivative and every first-order substitution term; the numerical action shift and zero-mass/zero-C conclusions are preserved.",
    "native_adjudication": false,
    "independent_acceptance": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-aqft-supersymmetric-threshold-matching",
    "action": "propose_record_or_reconcile_assigned_finding",
    "status": "fixed-in-current-carrier",
    "reason": "The changed action supplier explicitly supplies action-to-scheme coordinates and the theorem already requires P_- to retain W_L and J squared. The extended odd coefficient algebra preserves chiral elimination and the even substitution. Clarified Proof 1.1 to write D-to-F transfer and the action variation under spacetime integration with the stated boundary hypothesis; density equality alone is not valid. The Statement is unchanged.",
    "native_adjudication": false,
    "independent_acceptance": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-qftx-n1-wilsonian-f-term-nonrenormalization",
    "action": "propose_record_or_reconcile_assigned_finding",
    "status": "fixed-in-current-carrier",
    "reason": "Rechecked the action supplier's current FI repair: bare FI coefficients are now explicitly excluded from unconstrained promotion. Updated the Statement's stale description of that rule as a local override to identify it as the supplier's prescribed constant-FI exception. The theorem's fixed numerical-F representative, independent odd parameter extension, common FI kernel and graph counting are preserved. Its exact nonkinetic and FI conclusions are unchanged.",
    "native_adjudication": false,
    "independent_acceptance": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-aqft-wilsonian-superpotential-nonrenormalization",
    "action": "propose_record_or_reconcile_assigned_finding",
    "status": "fixed-in-current-carrier",
    "reason": "The changed supplier proves equality of numerical-constant density coefficients only after fixing their ultraviolet representative. Added that convention to the Statement and A3 and checked P_kin(0)=0 before restricting to W=0. Carried the constant-FI promotion exception, without imposing the unused common-kernel FI conclusion. Corrected the full-AC attribution in metadata, A1 and step 1.1; AC remains an adopted sufficient hypothesis. The fixed projection still preserves every retained coefficient. Current follow-up: the upstream action definition now itself excludes bare FI from unconstrained promotion. A3 matches that rule, and the theorem consumes no FI tadpole conclusion; its fixed constant convention still discharges F2.",
    "native_adjudication": false,
    "independent_acceptance": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-aqft-soft-breaking-effective-operator",
    "action": "propose_record_or_reconcile_assigned_finding",
    "status": "fixed-in-current-carrier",
    "reason": "Supplied the threshold theorem's missing finite-projection retention condition: the selected low span contains Phi cubed and Phi to the fourth with compatible holomorphic scheme coordinates. Checked J=g Phi squared/2 gives the retained minus g squared Phi to the fourth/(8M). Corrected AC inheritance to an adopted sufficient assumption. The physical half-raw F bracket gives the stated soft coefficient, and its fixed nonzero auxiliary background still violates the rigid Ward premise.",
    "native_adjudication": false,
    "independent_acceptance": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-qftx-bpst-instanton-formal-sector-weight",
    "action": "propose_record_or_reconcile_assigned_finding",
    "status": "fixed-in-current-carrier",
    "reason": "The scalar-pairing supplier change leaves charge and action normalization intact. Added the missing model-admissibility hypothesis [P] in Sigma and the constructed bundle as supplied representative, then checked it explicitly against A2 before calling the connection a saddle. The first variation and formal exp(-8 pi squared/g squared+i theta) are retained with no measure assertion; its proof tags now name A2 at the exact applicability check.",
    "native_adjudication": false,
    "independent_acceptance": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-qftx-sobolev-smooth-irreducible-gauge-bundle",
    "action": "propose_record_or_reconcile_assigned_finding",
    "status": "fixed-in-current-carrier",
    "reason": "Confirmed the local g^{ij} partial_i partial_j expression was not the global formally symmetric operator required by F6. Supplied the fixed smooth connection Laplacian on the associated matrix bundle with Frobenius metric and Riemannian density, verified its scalar positive symbol, and moved its smooth lower-order difference into the patched right-hand side. The regularity and convergence bootstraps now apply the exact global estimate; all principal-bundle conclusions and the commutative trivialization diagram are preserved.",
    "native_adjudication": false,
    "independent_acceptance": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-qftx-n1-u1-fi-charge-trace",
    "action": "propose_record_or_reconcile_assigned_finding",
    "status": "fixed-in-current-carrier",
    "reason": "The upstream FI conclusion now explicitly requires a common free propagator/insertion kernel, ultraviolet matching without independent finite FI shifts, and a bare constant FI exception to spurion promotion. Made those imported applicability conditions explicit in the Example, F2 and A2. Under this same-kernel prescription the charge trace is 1-1=0, and only the excluded higher-loop graphs remain; no unweighted cancellation is claimed for arbitrary species-dependent regulators. Current follow-up: the action definition now prescribes the same fixed-FI promotion exception explicitly, and the theorem describes it consistently. The common kernel and zero charge trace assumptions remain exactly those used by step 2.1.",
    "native_adjudication": false,
    "independent_acceptance": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-qftx-n1-wilsonian-wavefunction-vs-holomorphic",
    "action": "propose_record_or_reconcile_assigned_finding",
    "status": "fixed-in-current-carrier",
    "reason": "The result uses only the nonconstant mass and cubic coefficients, so the supplier's numerical-constant ambiguity changes neither prediction. Corrected the overbroad F2 restatement to distinguish protected positive-field-degree coefficients from the separately fixed constant representative. Checked positive Z permits the rescaling and gives m/Z and y/Z^(3/2); the Example and physical scope are unchanged. Current follow-up: the final supplier rule fixes FI promotion at the action-data level; this ungauged example uses no FI branch and protects only m,y, so the checked rescaling and nonconstant-coefficient inference remain valid.",
    "native_adjudication": false,
    "independent_acceptance": false
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "def-qftx-character-localization",
  "def-abbv-equivariant-integration-conventions",
  "ex-aqft-heavy-fermion-anomaly-threshold",
  "ex-aqft-qed-threshold-matching"
]


