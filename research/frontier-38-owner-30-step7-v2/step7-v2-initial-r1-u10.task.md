# Step 7 adjudicate: initial, round 1, unit 10

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u10.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-38-owner-30",phase:"initial",round:1,unit:"10",input_sha256:"04631c851c21cc7346bc450d030f784cd29d0320411265cce0e01b96cd5fa59e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-38-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-compact-open-topology-on-a-discrete-domain-is-pointwise, 3:lem-dual-homomorphisms-are-continuous-and-functorial, 5:ex-pontryagin-dual-of-euclidean-space.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-compact-open-topology-on-a-discrete-domain-is-pointwise",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 uses the ambient-open-cover characterization of compactness without citing lem-compactness-of-a-subspace-is-ambient, contrary to the explicit requirement in def-compact-space. The main proof otherwise uses intrinsic compactness correctly.",
      "context_sha256": "ba6774c414725300c82485ab7d10db9030a46d602c2eee3534ad460cdbefe7af",
      "item_sha256": "8b61b649600d45d2dae39dfbefe4a0f693f720612379a7f7f56b837ad3a2d913",
      "at": "2026-10-03T14:24:22.746Z"
    },
    {
      "id": "lem-dual-homomorphisms-are-continuous-and-functorial",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Steps 2.1 and 4.1 use compactness for ambient open covers without citing lem-compactness-of-a-subspace-is-ambient, expressly required by def-compact-space. The compact-lift and inverse-continuity arguments therefore violate the dependency interface.",
      "context_sha256": "30b1628623a69d0fcf43ea0c61c88e2ffc606688b916c8a53807216206f80ef1",
      "item_sha256": "1ae1f1b843209dcaef726867b8259f953b9bc6d608945035a674f2d99d625890",
      "at": "2026-10-03T14:24:45.259Z"
    },
    {
      "id": "ex-pontryagin-dual-of-euclidean-space",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 forms ξ=(ξ₁,…,ξₙ), but the supplied interfaces define vectors as functions on n, with coordinates 0,…,n−1. Thus ξₙ is undefined and ξ₀ is omitted; no reindexing is supplied to make this vector well typed.",
      "context_sha256": "f33b6f35cbcfb4f763289755bbf499a4259aab48cc41873530514ee402bdf370",
      "item_sha256": "560cc93247697f8cf2203576e2da60377bbe77ac442d88d513dfe46143e58379",
      "at": "2026-10-03T14:25:01.324Z"
    }
  ]
