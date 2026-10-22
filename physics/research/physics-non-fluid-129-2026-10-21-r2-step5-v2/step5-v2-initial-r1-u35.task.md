# Step 5 adjudicate: initial, round 1, unit 35

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-batch-35-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u35.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-non-fluid-129-2026-10-21-r2",phase:"initial",round:1,unit:"35",input_sha256:"eaf0a68d231b0a7d0d042df337974eaab597dfd3432daa3ad0aaeebd32fe188c",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-non-fluid-129-2026-10-21-r2 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-gr-fx-kerr-exterior-properties, 1:prop-gr-fx-killing-tensor-conservation, 2:thm-gr-fx-kerr-hamilton-jacobi-separation, 3:rem-gr-fx-kerr-units-and-physical-parameters, 3:ex-gr-fx07-1, 3:ex-gr-fx07-2.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-gr-fx-kerr-exterior-properties",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: [F3] is restated as applying to any smooth nondegenerate metric, but its supplied interface requires a time-oriented Lorentzian four-manifold. Step 3.1 invokes it before N is shown timelike, making the dependency circular.",
      "context_sha256": "35270fc4cdff28f965d506fd501d94efe11133e3edc9ff48c1f50dc3d074a24e",
      "item_sha256": "4a9df0fec66baf23ef67e8b0807c1092de424a028ed20e0158f14135d2efc3f9",
      "at": "2026-10-22T03:41:51.546Z"
    },
    {
      "id": "prop-gr-fx-killing-tensor-conservation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement omits time orientation. The cited definition only defines a rank-two Killing tensor on a smooth time-oriented Lorentzian 4-manifold (M,g,N); Lorentzian 4-manifolds need not be time-orientable, so the stated scope exceeds its dependency.",
      "context_sha256": "2e34de60ac2691d8c6fc8df9b4b9a6b678899d88ccd380ecd8b0ca1f4298cc0e",
      "item_sha256": "a686c9b86543b4bf46085d9dab885d36c243f497c93632617f5213c40dc34d46",
      "at": "2026-10-22T03:41:40.090Z"
    },
    {
      "id": "thm-gr-fx-kerr-hamilton-jacobi-separation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 misstates the supplied interface for lem-gr-fx-kerr-exterior-properties: it asserts Σ,Δ>0 and an inverse-matrix claim, while the interface states nondegeneracy, signature, and time orientation. This dependency restatement fails the required interface check.",
      "context_sha256": "725879c6754149fd07297bcd1273884e13ddfef43b50f62fc6d8aee50acaddc2",
      "item_sha256": "aa5c1ea79cec14490430af91ed451e1e0c171a7206793e593faf50d2d32dbdfd",
      "at": "2026-10-22T03:41:42.511Z"
    },
    {
      "id": "rem-gr-fx-kerr-units-and-physical-parameters",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: μ, E, L, Q, and S are undefined Hamilton–Jacobi quantities with no action or affine-parameter normalization. Their dimensions vary by convention; the supplied dependencies do not fix the asserted powers.",
      "context_sha256": "8811c0991c5374dfdbc76194cc93fe62260e36e909f8bbef8c3a220b2da3f3c3",
      "item_sha256": "7c5d42bda7a1e9ffafc086ff9794b8664a348b2542d9021f0b375c4cc4e75f43",
      "at": "2026-10-22T03:42:30.319Z"
    },
    {
      "id": "ex-gr-fx07-1",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 equates the Schwarzschild radius 2m_* with 2M, but the assumptions never match the Schwarzschild datum’s mass parameter to M. For an arbitrary supplied datum, the claimed metric equality need not hold.",
      "context_sha256": "3cc98b5658d81e749b345733e8646d4aecd5e32ef8fa1a1b51342a9eaca8dc94",
      "item_sha256": "4e9212afd3a2e048bd4451d61c485ffa0491f992b0e86df84c4565b498affb42",
      "at": "2026-10-22T03:41:52.251Z"
    },
    {
      "id": "ex-gr-fx07-2",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title overclaims: it advertises Kerr’s hidden symmetry, but the statement and proof only calculate a negative density for the stationary Killing field T; no hidden symmetry is defined or established.",
      "context_sha256": "302fb1fba4950c95b876cb00f4393e2ff4b7f44f0af8f1f79d3e8dd9f5b78b5e",
      "item_sha256": "117f1d2659a73c748d6ee0ae465d5df92e7cd2d47b451e424ad307242f8edfd4",
      "at": "2026-10-22T03:42:04.543Z"
    }
  ]
