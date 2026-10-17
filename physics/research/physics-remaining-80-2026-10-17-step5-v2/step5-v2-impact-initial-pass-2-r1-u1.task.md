# Step 5 repair: impact-initial-pass-2, round 1, unit 1

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/impact-initial-pass-2-1.json.



Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-impact-initial-pass-2-r1-u1.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"physics-remaining-80-2026-10-17",phase:"impact-initial-pass-2",round:1,unit:"1",input_sha256:"a99fb4f7bab97a50afb73f05be997adbb44a23eb70097c6b32da8235668f8198",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-remaining-80-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.



Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-emg-xs-harmonic-mp",
    "proposed_status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "The named harmonic tuple omitted Delta H=0 although its direct verification uses that premise. Added the exact harmonic restriction for the named tuple while preserving arbitrary-positive-H formulas, then examined all seven direct item consumers and synchronized the batch-23 manifest. This is an author repair, not independent acceptance or canonical closure.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "post-emg-selected-matter-action",
    "proposed_status": "fixed",
    "severity": "nonfatal",
    "defect_type": "dependency_citation",
    "reason": "Reconciled the referred Noether-interface finding by explicitly supplying its section bundle, real functional domain, frozen admissible variations, linear partial splitting and smooth pathwise transports. Both circle and compact-real-lift branches remain; both direct consumers already inherit or state these hypotheses. Author repair only.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-csm-isobaric-response-identities",
    "proposed_status": "fixed",
    "severity": "nonfatal",
    "defect_type": "dependency_citation",
    "reason": "A1 grouped additional moment envelopes with the preparation postulate citation. Split the attribution: the postulate supplies prior and finite normalization; the existing Statement supplies envelopes. The conditional deduction, Statement and physical scope are unchanged. Author repair only.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-new-finding",
    "reason": "No published carrier was changed or found newly defective in these affected uses. Nine direct item consumers of the two changed interfaces are draft frontier subjects; imported mathematics remained read-only. No whole-supplier audit, source retrieval, independent acceptance or central certification is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-current-owner-repair-record",
    "id": "pthm-csm-dk-qualified-hamiltonian-statistical-predictions",
    "proposed_status": "fixed",
    "reason": "Reconciled clause 2, A5, F2 and the exact hypothesis match in 1.1 with the repaired supplier: n>=1, open O and J, gradient on H inverse J, compact inverse images of every compact K subset J, and the selected E in J. The canonical, fine-entropy, ergodic-average and response branches are preserved. Reconciled the owning contract exact supplier quotations and affected derivations with the current inspected interfaces.",
    "post_sha256": "a2e6028b863ba8a7b7f31c60c4b694dad0a8e68e02c5d3b21681f385718aefdf",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "audit_status": "Author repair and current affected-use review only; no independent acceptance or canonical closure claimed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-current-owner-repair-record",
    "id": "thm-csm-dk-compact-iid-propagation-of-chaos",
    "proposed_status": "fixed",
    "reason": "Made the Statement use the physical-flow conjugation Xi_N inverse Phi_(tau_0 s) Xi_N required by the repaired Dobrushin supplier, preserving the full iid estimates. Added the labelled-coupling continuity bound, finite-slab characteristic support bound, and countable-dense-time supremum argument so the random Wasserstein errors and expectations are measurable. Reconciled the owning contract exact supplier quotations and affected derivations with the current inspected interfaces.",
    "post_sha256": "85e055bc96cf0f4caa4f6bd6c28416e03725311695ac8fff904df1256f20f77b",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "audit_status": "Author repair and current affected-use review only; no independent acceptance or canonical closure claimed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-current-owner-repair-record",
    "id": "pthm-emg-total-matter-field-exchange",
    "proposed_status": "fixed",
    "reason": "Bound the selected action explicitly to the repaired Noether lemma section bundle, real functional domain, linear partial-variation splitting and smooth compact pathwise transports, and verified this match in 1.2. Defined R:=S=g^{ab}Ric_ab at its first Einstein-tensor use. Opposite stress-exchange signs, total conservation and constant-coupling Bianchi compatibility are preserved. Reconciled the owning contract exact supplier quotations and affected derivations with the current inspected interfaces.",
    "post_sha256": "5731eb37d9e0799b66c2f9946fa38e30c969cf1ec135d8a5fea182a8b1d15ba7",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "audit_status": "Author repair and current affected-use review only; no independent acceptance or canonical closure claimed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-current-owner-repair-record",
    "id": "pthm-emg-xs-mp-model",
    "proposed_status": "fixed",
    "reason": "The repaired multicenter proposition requires a sphere embedded in spacetime. Defined i_(s,S)(x)=(s,x), transported its outward orientation, and made every geometric/SI sphere integral its pullback, with time-slice independence from the supplier. Proof 2.2 now matches that interface; all local and outer charge values and SI field equations are retained. Reconciled the owning contract exact supplier quotations and affected derivations with the current inspected interfaces.",
    "post_sha256": "dfb19ba9209236646c0be45d55e804c0504e58fa6c6f5528dbd0696cf6c40fed",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "audit_status": "Author repair and current affected-use review only; no independent acceptance or canonical closure claimed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-current-owner-repair-record",
    "id": "texp-emg-xs-two-center-model",
    "proposed_status": "fixed",
    "reason": "Reconciled the direct multicenter supplier and repaired SI-model interface by defining each sphere integral via i_(s,S)(x)=(s,x), its transported orientation and time-independent pullback. The same 0<r<d/2 and R>d isolate or enclose the centers, and the unchanged linear SI conversion gives both individual fluxes and their sum. Reconciled the owning contract exact supplier quotations and affected derivations with the current inspected interfaces.",
    "post_sha256": "4c619390a6d214b4413aebd826f532536dc28e4d9f91ee81653ed11a56fb2ec1",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "audit_status": "Author repair and current affected-use review only; no independent acceptance or canonical closure claimed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-current-owner-repair-record",
    "id": "thm-emg-xs-kn-verification",
    "proposed_status": "fixed",
    "reason": "The geometric-electrovac change only clarifies flux reparametrizations, unused here. Independently confirmed and repaired the F3 tensor-density attribution: proof 1.2 now expands the covariant derivative, cancels the symmetric-connection/antisymmetric-field term, and obtains the trace connection coefficient from the vector-current identity. The exact rational residuals, field equations and full-sphere continuation remain unchanged. Reconciled the owning contract exact supplier quotations and affected derivations with the current inspected interfaces.",
    "post_sha256": "9556c502166d534978f825c8e6180b4433e6371d43b6e2ef31de804044a306fb",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "audit_status": "Author repair and current affected-use review only; no independent acceptance or canonical closure claimed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-current-owner-repair-record",
    "id": "texp-emg-xs-null-curvature",
    "proposed_status": "fixed",
    "reason": "The geometric-electrovac repair changes only sphere reparametrization, unused by this constant null-wave contraction argument. Added the missing direct mathematical dependency and role for the explicitly cited curvature-convention definition; the Statement, nonzero field/curvature and four vanishing scalar contractions are unchanged.",
    "post_sha256": "ce04a85bdb114a588f26eee156ee14a8e4727b97534b5a1d1184bcf6ad9d3376",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "audit_status": "Author repair and current affected-use review only; no independent acceptance or canonical closure claimed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-current-owner-repair-record",
    "id": "pthm-qsm-onsite-interacting-atoms",
    "proposed_status": "fixed",
    "reason": "The changed free-mode response clause is unused: F2 supplies only the general real-diagonal adjoint argument, and the nonlinear Bose trace/analyticity are proved locally. Corrected the two confirmed proof-local dimensional inequalities with an explicit positive energy reference and beta_0 in inverse joules; all domain, entropy-tail, response and atom formulas remain intact. Reconciled the owning contract exact supplier quotations and affected derivations with the current inspected interfaces.",
    "post_sha256": "022e635646b9ed4a2cb8c3f84bc92f76a9b87c512a09fc8659e7d568cb872a22",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "audit_status": "Author repair and current affected-use review only; no independent acceptance or canonical closure claimed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-current-owner-repair-record",
    "id": "thm-tgr-photon-planck-flux",
    "proposed_status": "fixed",
    "reason": "The occupation supplier open-beta response restriction is unused; all-positive-gamma trace normalization and mode means remain valid. Repaired the separate trace-domain defect by defining the everywhere bounded extension B_L=diag(p_m E(m)), proving finite-truncation compactness, trace class, equality on D(H), uniqueness and H rho_L=B_L everywhere. Corrected a replacement-induced display delimiter caught by rendercheck; all energy, entropy, spectral and flux formulas are preserved. Reconciled the owning contract exact supplier quotations and affected derivations with the current inspected interfaces.",
    "post_sha256": "a6456acbe0f463edccaf6ee55ba2bf9afcead084e7d44bd847a18c7f3e750d41",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "audit_status": "Author repair and current affected-use review only; no independent acceptance or canonical closure claimed."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no-update",
    "reason": "No published carrier was edited or found defective in these scoped affected uses. The changed-interface direct item consumers are all draft frozen-frontier items. Published operator and geometric suppliers were read only for the exact arguments used, without a whole-supplier audit or acceptance claim.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "cex-tgr-photon-zero-mode-trace",
  "ex-emg-nonzero-parallel-field-data",
  "post-tgr-photon-emitter-and-quasistatic-balance"
]


