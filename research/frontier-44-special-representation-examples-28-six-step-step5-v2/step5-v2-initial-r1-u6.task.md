# Step 5 adjudicate: initial, round 1, unit 6

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-batch-6-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u6.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-44-special-representation-examples-28-six-step",phase:"initial",round:1,unit:"6",input_sha256:"a3c0decd85fdbe71b25b7ccd7e6264df187be55612edc2bcfbd9729c1e231624",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run frontier-44-special-representation-examples-28-six-step --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:thm-the-i-string-decomposition-of-the-negative-half, 3:def-kashiwara-crystal-operators, 6:ex-crystal-graph-of-b-two-lambda-one, 8:thm-crystal-basis-of-the-negative-half.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "thm-the-i-string-decomposition-of-the-negative-half",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F5] inaccurately restates the supplier: its string decomposition is asserted only for x∈U_A^-, not every x∈U_q^-. Step 4.1 invokes the broader identity as supplied without establishing its extension to U_q^-.",
      "context_sha256": "f93409aec22d6b50f760d8152a0d9653feafb6a2f09cfa6a74f97fb10d60cba2",
      "item_sha256": "45eb600284b464c15bc16599ecc211931f406d5db09504a1538251ccfeba5e1b",
      "at": "2026-10-11T14:54:56.714Z"
    },
    {
      "id": "def-kashiwara-crystal-operators",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.2 falsely identifies every shifted coefficient as u_{m-1}. In L_i(0), u_0=v≠0 but tilde f_i(v)=0; its admissible coefficient at m=1 must be zero, not v. Bottom coefficients must be discarded explicitly.",
      "context_sha256": "9a64d3e7b21622b848ac2769f7660edac533a15dd19b673134f1b9a022b1c961",
      "item_sha256": "8ab580f372ea59ab1f2ce09e437b8d628a7480602310991bddac8a4ae1c8e0b1",
      "at": "2026-10-11T14:57:54.069Z"
    },
    {
      "id": "ex-crystal-graph-of-b-two-lambda-one",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.2 incorrectly expands ΔE₂(v₂₃): the term e₂⊗E₂e₃ requires coefficient q. The displayed expansion equals (q⁻¹+1)v₂₂, not the asserted (q⁻¹+q)v₂₂.",
      "context_sha256": "351d6277e5d19ccdd1cfad9a935f23ddd40099bb4847f655880116bb80af8e07",
      "item_sha256": "5fbc339626d0b2f93ed0f6db3f26efd7d143a4d6d7f018f278ff8243436b4f1b",
      "at": "2026-10-11T14:55:39.321Z"
    },
    {
      "id": "thm-crystal-basis-of-the-negative-half",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 tensors the lattice isomorphism to obtain V(λ)_{λ−α}, then identifies it with U_q^-[-α] without justification. This requires an ambient projection isomorphism or a spanning argument; the cited lattice isomorphism alone proves neither.",
      "context_sha256": "ded4975c50f6f0a8ad72243b773ad2a36bf06418f49534509953bbac246b9386",
      "item_sha256": "b15402a01000e7ed59e264c18d8c0617dac5aa16e013da883312dc2e86735434",
      "at": "2026-10-11T14:55:33.604Z"
    }
  ]
