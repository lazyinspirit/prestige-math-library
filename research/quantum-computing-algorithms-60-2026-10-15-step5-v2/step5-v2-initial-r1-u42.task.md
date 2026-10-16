# Step 5 adjudicate: initial, round 1, unit 42

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-42-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u42.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"initial",round:1,unit:"42",input_sha256:"d23dda1488be643603328de91e0bfb6477b03a1eb49ede19fac9872ac281253d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 14:cex-qa-18-query-cost-is-not-gate-cost, 15:lem-qa-18-johnson-walk-spectrum, 17:thm-qa-18-element-distinctness-qr-access-gate-cost, 17:ex-qa-18-johnson-walk-parameters.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "cex-qa-18-query-cost-is-not-gate-cost",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The claimed exact m-gate CNOT implementation is not licensed: [def-qc-elementary-circuit-resources] permits an arbitrary finite gate alphabet and does not require CNOT. The construction needs an explicit CNOT-availability assumption.",
      "context_sha256": "b7d37d0d7eb1fe9c8992e386bd0982657c68538b3bbffa20ac2e43534edc626d",
      "item_sha256": "23c96446272ac3614c871610e2d8f806dbce8cfe8aa21f163e627fd9de7525c9",
      "at": "2026-10-16T05:05:34.618Z"
    },
    {
      "id": "lem-qa-18-johnson-walk-spectrum",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 defines V_k only for 0≤k≤r but declares R_k:V_k→V_{k+1} and the commutator for k=r, which require undefined V_{r+1} and L_{r+1}. The proof is ill-typed as stated.",
      "context_sha256": "9937b0c3f288aa2ec35c9e19b247af66dc21d850f62ee2d6887ad221ebaee241",
      "item_sha256": "7694f076c757df41e66f29f760515b968138487558c8e174d493fd324239ae4a",
      "at": "2026-10-16T05:05:43.861Z"
    },
    {
      "id": "thm-qa-18-element-distinctness-qr-access-gate-cost",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F7] guarantees only O(S+E+m) parallel gate occurrences; it does not provide the 6S+4E+3m decomposition asserted in §8.1. The statement’s explicit parallel gate-count bound is therefore unproved.",
      "context_sha256": "ccee66c972df7eccd6004b43d01fb171acd473a3ff02129b0b7b0afe30c75587",
      "item_sha256": "4fd2f25d5c5a5e6c2484206cddc64e44167e150e14aef2a1d0861b613df5f3d1",
      "at": "2026-10-16T05:05:50.767Z"
    },
    {
      "id": "ex-qa-18-johnson-walk-parameters",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 counts only subsets containing either named pair, but F3 marks subsets containing any collision pair. Without assuming these are the only collisions, the marked fraction need not be 2/5; for four equal values, it is 16/20.",
      "context_sha256": "9fd0431d1410a3fa2e8ec66d15a10916f07d087b7afac8de00cfad8f09e9cdd5",
      "item_sha256": "dbb8ba455d21cb6fb28a5767bba61b1eb0e7ae07f224380cb571b954cc9f8839",
      "at": "2026-10-16T05:05:19.499Z"
    }
  ]
