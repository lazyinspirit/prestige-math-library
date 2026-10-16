# Step 5 adjudicate: initial, round 1, unit 12

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-12-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u12.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"initial",round:1,unit:"12",input_sha256:"d23dda1488be643603328de91e0bfb6477b03a1eb49ede19fac9872ac281253d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-qc-fixed-dimension-interval-arithmetic, 7:alg-qc-solovay-kitaev-unitary-compiler, 8:thm-qc-solovay-kitaev-error-and-resource-bound, 10:thm-qc-controlled-phase-approximation.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-qc-fixed-dimension-interval-arithmetic",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 defines effective decoding but gives no Turing-time guarantee. Step 1.1 assumes rational encodings can be scanned for numerator and denominator in O(L) and shortened in O(q²); the cited interface does not provide that, so the claimed bit-cost bound is unsupported.",
      "context_sha256": "708cf739a60fab0573831589bc128a10ea19bedb8da36b7faa36d3b05a9f5983",
      "item_sha256": "e0c96a6e2a08bc1a8c3d22919015ebff01bcb2f6f639e3d6255f4d3729f49a3f",
      "at": "2026-10-16T04:50:50.705Z"
    },
    {
      "id": "alg-qc-solovay-kitaev-unitary-compiler",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The algorithm says to apply a Pauli-coordinate construction from the balanced-commutator lemma, but the supplied lemma interface only asserts that V,W exist; it gives no construction or selection rule. The required exact procedure is therefore unspecified.",
      "context_sha256": "dff18d75278924f3b03ba4bda6aa4bf2b65c231788bf24887c0954ae156db2b5",
      "item_sha256": "c673d04a2c0415136f6ae0034a3008e73ed379aae74691dfe5dc3a44891ad6fa",
      "at": "2026-10-16T04:59:13.053Z"
    },
    {
      "id": "thm-qc-solovay-kitaev-error-and-resource-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement promises a compiler output for every real ε, but the cited compiler interface accepts only rational ε. For irrational ε the call is outside its supplied domain; restrict the statement to rational ε or justify an extension.",
      "context_sha256": "c0a3f30e26a33d4b70edf437e022f5f18ba57283bf48381c2c9e1421f9ca3dde",
      "item_sha256": "b4c3aa3a518184c3bb1d781dd3f5552f44ba288261e0be3618e867a869707369",
      "at": "2026-10-16T04:50:39.966Z"
    },
    {
      "id": "thm-qc-controlled-phase-approximation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "“Must instead” is false: if ∥CPθ−μW∥≤ε, applying P_μ to the added control after controlling W yields C(μW), within ε of C(CPθ). Phase restoration avoids compiling the full three-qubit matrix.",
      "context_sha256": "2bb67739114c1deb40a146ab4565876b65ca3deb64330426a0d8b16fbc955a58",
      "item_sha256": "120ad9ab0e3120532283d129ae50da81b78cf5f78de64b4115495e21b5f7dd33",
      "at": "2026-10-16T04:50:54.970Z"
    }
  ]
