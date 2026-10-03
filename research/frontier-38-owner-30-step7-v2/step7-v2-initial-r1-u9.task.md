# Step 7 adjudicate: initial, round 1, unit 9

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u9.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-38-owner-30",phase:"initial",round:1,unit:"9",input_sha256:"04631c851c21cc7346bc450d030f784cd29d0320411265cce0e01b96cd5fa59e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-38-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 3:thm-robinson-schensted-correspondence, 4:ex-empty-and-singleton-rsk-boundaries, 4:ex-rsk-insertion-and-reverse-deletion.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "thm-robinson-schensted-correspondence",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 is unsupported: 2.1 proves that reinserting the recovered word restores the pair, not that deletion recovers the original word. Injectivity requires the other inverse identity, supplied by part 1 of the inverse lemma but absent from F4 and 2.1.",
      "context_sha256": "15f393c8643d09c83bdcf9d62ed953869dbb9d9f7ddfce385c85aa5d879ef272",
      "item_sha256": "9e5bd69edf2c6aadc6b5775b333f49760560fa4039316c230cf408e9dd40430a",
      "at": "2026-10-03T14:18:51.337Z"
    },
    {
      "id": "ex-empty-and-singleton-rsk-boundaries",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[L4] attributes the general removal recursion to the hook-length theorem and hook definition, but neither supplied interface states or proves it. The needed removal-recursion lemma is supplied only as a sibling interface and is not cited.",
      "context_sha256": "570c722a7506936b4a3ab33d5dbefb7a95214a518291f425ac9585c7acc73d60",
      "item_sha256": "d53bab53209d25084a75cf6d7579a8b415c0f0550c747b4ffcf5cada36024a7a",
      "at": "2026-10-03T14:18:19.918Z"
    },
    {
      "id": "ex-rsk-insertion-and-reverse-deletion",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[L3] inaccurately restates reverse deletion as proceeding downwards from b. The supplied definition visits rows s,s-1,...,1, moving upwards; downward traversal is not licensed by the dependency.",
      "context_sha256": "f1c80c61913abe4e36e0761054ed0f4cb739e6d3f4e8027713f7c6f8186327eb",
      "item_sha256": "78ae664cde92733588fb1b1b2166448dcda9428c1d001334a36ebe5eb3fa74b1",
      "at": "2026-10-03T14:18:11.808Z"
    }
  ]
