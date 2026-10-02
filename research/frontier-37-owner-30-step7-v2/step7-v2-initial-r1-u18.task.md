# Step 7 adjudicate: initial, round 1, unit 18

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u18.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"18",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-perfect-complex-over-a-ring, 1:lem-triangulated-k-zero-shifts-and-exact-functors, 2:ex-dual-numbers-simple-is-not-perfect.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-perfect-complex-over-a-ring",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The claim that cochain and internal shifts “produce different classes” fails for the zero graded perfect complex: 0[1] ≅ 0{1} ≅ 0. The shifts act on different gradings but need not yield distinct isomorphism classes.",
      "context_sha256": "c7d5b7937ecb1d6b1c7bc3afc0622fbdc87932a1fe7cfbd3a6adc59a4a6ba7cb",
      "item_sha256": "668d1720cb04064903d556d7c67f4e30707aeeae7cad7d405f5a670e59bbf23d",
      "at": "2026-10-01T20:53:54.702Z"
    },
    {
      "id": "lem-triangulated-k-zero-shifts-and-exact-functors",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 inaccurately restates the rotation interface: the final arrow is −f[1]:X[1]→Y[1], whereas F3 gives Y[1]→X[1]. For general f:X→Y, the stated arrow is ill-typed.",
      "context_sha256": "5fe75b2c93e64af3e68462c3166ade3057f3c7471adf8b5624c35472578256e6",
      "item_sha256": "0343a132a15ec44e1310c9c61d2971c9cbc67f898346fb07a9247e718b3c6e2f",
      "at": "2026-10-01T20:53:50.077Z"
    },
    {
      "id": "ex-dual-numbers-simple-is-not-perfect",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The displayed final map A→S is multiplication by ε, hence zero since εS=0. It is not the quotient augmentation and is not surjective. Thus the displayed sequence is not a free resolution, contrary to step 1.1.",
      "context_sha256": "680ceeefd231302cb885be6da78a15381a2076b355ff4e0be9e0bc0998e2e3a3",
      "item_sha256": "0f59b541f97928884e7be820dcab1ce18f3ebc46a132c048ea8c6bec7dfefe51",
      "at": "2026-10-01T20:53:58.151Z"
    }
  ]
