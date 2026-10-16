# Step 5 repair: impact-repeat, round 2, unit 1

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/impact-repeat-2.json.





Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-repeat-r2-u1.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"impact-repeat",round:2,unit:"1",input_sha256:"8e9c15f7688cc21f1e02ef74a7be94491ecf8c4adf70677621d514c6f9c199bd",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.







All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "thm-qc-explicit-proper-code-and-universal-gadgets",
    "model": "gpt-6.1-sol",
    "context_sha256": "f2309e956cbf511eb1dcfc22ae6d0dc200b46f674bf229b2b5a214b5f7f2a575",
    "outcome": "false_positive",
    "reason": "The objection applies to F2's abbreviated statement, but not to its constructive proof. lem-qc-four-round-verified-shor-correction Proof 2.2 explicitly begins with 49 identity locations and defines the four rounds and 49 separate final decoders. Proof 1.2-1.3 specifies private truth-table workspaces, two cats, threefold parity verification, majority acceptance and one enable workspace per data coordinate; 4.2 and 5.1 prove the source-bit/target-workspace copying cases. The assigned theorem chooses this constructed C (including the unmodified C in 3.2), so it may use that witness's wiring. Its 5.2-7.1 separately establish logical/syndrome factorization and termwise local refresh absorption without permuting memory coefficients; 8.1-10.1 then verify the finite substitution experiment using the exhibited circuit. This is not an inference of recursive correctness from an arbitrary circuit's one-level guarantees. No defect is established by this tuple.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/quant-ph/9611025"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-qc-bqtisp-to-ptisp-simulation",
    "location": "original Proof step 2.1 and Facts A2",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "reason": "Confirmed an unmet supplier hypothesis in original step 2.1: A1 guarantees polynomial-time Cauchy approximations, whereas the cited VMW compiler Statement requires the first b coordinate bits. Exact digits do not follow from an error-bounded approximation. Repaired by invoking the existing Cauchy-input bit-complexity theorem directly after conditioned determinant normalization; the original simulation Statement is preserved.",
    "status": "fixed",
    "resolution": "New step 1.2 and revised step 2.1 use thm-qc-solovay-kitaev-bit-complexity and lem-qc-fixed-dimension-interval-arithmetic directly; no exact-digit prerequisite remains.",
    "uncertain": false,
    "source_urls": [
      "https://theoryofcomputing.org/articles/v008a001/v008a001.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "lem-qa-16-query-unitary-normal-form",
    "model": "gpt-6.1-sol",
    "context_sha256": "53c3c7c63e73d743faa801f7d15c44bd06f6849066543b73e5f4109d97f58d07",
    "defect_type": "logic",
    "severity": "fatal",
    "location": "proof-step",
    "step": "2.1",
    "subclass": "invalid-witness",
    "disposition": "fixed",
    "pre_sha256": "6558a78533308d8fd773ebc0d7f2bd29943f806891718274ad6cb56d8dca9370",
    "post_sha256": "63ca45af364c2761b18172d9121051faa9e26a758335838206640d3fbf895479",
    "reason": "The literal scratch address i_0=1 is absent from a zero-qubit address register. Selecting the first computational-basis label makes the inactive-slot witness legal for every allowed address size and leaves the Statement intact."
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no-update",
    "id": "lem-qa-16-query-unitary-normal-form",
    "reason": "This repair changes only the assigned draft proof and its owning contract. No Statement or Definition changes, new interfaces, or potentially defective published uses were identified."
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-repaired-finding",
    "id": "thm-qa-18-element-distinctness-qr-access-gate-cost",
    "severity": "nonfatal",
    "status": "fixed",
    "location": "facts-block",
    "locus": "F11; proof 7.1; contract F11/7.1",
    "reason": "The contract quoted an unspecified positive trial constant, whereas the consumer asserted the numerical 1/20 constant. The actual supplier proof establishes that constant, so this is nonfatal citation/interface imprecision. The consumer now invokes the complete rho=1/2 wrapper guaranteed by the cited interface and explicitly counts its constant number of outer trials; capped-storage success is >=19/40.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-repaired-finding",
    "id": "thm-qa-18-element-distinctness-qr-access-gate-cost",
    "severity": "nonfatal",
    "status": "fixed",
    "location": "proof-step",
    "locus": "5.1",
    "reason": "The prose cited steps 3.2–3.4 although no step 3.4 exists after the earlier repair. Replaced it with the actual bucket, lower-level run and highest-level occupancy suppliers 3.2, 3.3, and 4.1, and synchronized the assigned contract derivation.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no-update",
    "id": "thm-qa-18-element-distinctness-qr-access-gate-cost",
    "reason": "Only the assigned draft proof/facts and its owning contract changed. No Statement or Definition changed, no new prerequisite was introduced, and no potentially defective published consumer was identified. There is no published maintenance event from this repair.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[]


