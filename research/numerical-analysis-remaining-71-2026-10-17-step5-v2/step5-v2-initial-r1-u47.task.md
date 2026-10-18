# Step 5 adjudicate: initial, round 1, unit 47

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-47-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u47.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"47",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-meshfree-cell-quadrature-and-fill-radius, 1:lem-symmetric-kernel-moment-cancellation, 2:lem-scaled-kernel-moments-and-derivative-bounds, 3:thm-first-derivative-meshfree-convolution-bias.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-meshfree-cell-quadrature-and-fill-radius",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The interior-point clause uses R in B(x,Rε+2h) without defining or quantifying R. The supplied dependencies do not provide it, so the clause does not define a predicate.",
      "context_sha256": "369287820c6b5c106669aea41ae27e2a374927f4a98c464ebda809d352b68c5d",
      "item_sha256": "97ff007ebdee5ef8e9a118694e9e1403a6a0e7c4eff721f04d245452e291a916",
      "at": "2026-10-18T03:25:14.391Z"
    },
    {
      "id": "lem-symmetric-kernel-moment-cancellation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 inaccurately restates the dependency: it omits that U is open and that supp f lies in T(U). As written, its change-of-variables formula need not hold. The proof’s global maps satisfy the supplied conditions, but the required dependency restatement is false.",
      "context_sha256": "aa4e6d7123f64123a9e9a3ac66aeade486b2b475cfcb6f7e8612a8ea7ec12219",
      "item_sha256": "d7fc4ecd42f572d3991058709a6ba3ddf0f5a3ecb3206b8639b77412c272c338",
      "at": "2026-10-18T03:25:18.895Z"
    },
    {
      "id": "lem-scaled-kernel-moments-and-derivative-bounds",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 is overstated: it requires only supp f⊂V, omitting the supplied condition supp f⊂T(U). For a non-surjective T, the stated formula can fail. The scaling application is valid, but this dependency restatement is inaccurate.",
      "context_sha256": "57aee5944c3fa638bf4dab886a171f4a2b50ff240e84210a34046329e3507332",
      "item_sha256": "c17e178b9433f38ca86c6dcbd483392239c12f8f17b96dbf8e5c6be46588bdb2",
      "at": "2026-10-18T03:25:16.284Z"
    },
    {
      "id": "thm-first-derivative-meshfree-convolution-bias",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 is overstated: T:U→V need not be onto, so support f⊂V does not ensure support f⊂T(U). For the inclusion (0,1)→R and f supported near 2, the stated formula fails. The supplied dependency requires support f⊂T(U).",
      "context_sha256": "dbe32d90f440fd9c47bcaed13c875c7cc07f78bfe376bd6a1b8d84392f69a07a",
      "item_sha256": "657a3e9f142eeaeccc1b6f9a64268ebfe91ab2bc3ffa85e53581e130076d6c5d",
      "at": "2026-10-18T03:25:47.613Z"
    }
  ]
