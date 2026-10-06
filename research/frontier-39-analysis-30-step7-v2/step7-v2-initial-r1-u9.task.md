# Step 7 adjudicate: initial, round 1, unit 9

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/step7-v2-initial-r1-u9.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-39-analysis-30",phase:"initial",round:1,unit:"9",input_sha256:"9338524b8f90ef76ff4d0d3c41b2d942e870edbc6da3d7062fa8aeac770c3e1f",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-39-analysis-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:cex-rellich-fails-on-rn-by-translations, 0:ex-normalised-critical-bubbles-converge-weakly-but-not-strongly-at-p-star, 4:thm-morrey-rellich-compactness-for-p-greater-than-n, 5:cex-morrey-compactness-loses-the-endpoint-holder-exponent, 7:thm-subcritical-compactness-of-the-sobolev-trace.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "cex-rellich-fails-on-rn-by-translations",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The witness u_k is defined only for k≥1, leaving u_0 undefined. Under the explicit library convention that sequences have domain ℕ with 0∈ℕ, this is not a sequence. Define the translates for k≥0.",
      "context_sha256": "93887699209e5cecc0a33515467a404147214008998c6d63fe4400ead32f1191",
      "item_sha256": "c8f23a0413e22164d9d0e04eb40096bb8360f976dcc90710ea1224838de530b2",
      "at": "2026-10-06T01:44:20.669Z"
    },
    {
      "id": "ex-normalised-critical-bubbles-converge-weakly-but-not-strongly-at-p-star",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The family is defined only for j≥1, leaving u_0 undefined, so it is not a sequence under the library's explicit zero-based convention. Replace j by j+1 throughout the definition and scaling formulas.",
      "context_sha256": "3da7b25f93722ca6131b1b0a9877c6fde369ebc6a55af5fbeb2531d41e72e2e7",
      "item_sha256": "06103cf2416d6ab77e547cda8a596c2b6734478e187158ca6edf837a10664a08",
      "at": "2026-10-06T01:44:41.841Z"
    },
    {
      "id": "thm-morrey-rellich-compactness-for-p-greater-than-n",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "“Compactly embedded in L^q for every finite q” includes 0<q<1, where L^q is not normed. The supplied compact-embedding definition applies only to normed spaces. Restrict this conclusion to 1≤q<∞.",
      "context_sha256": "dcd4d3c5470fda3a9cfd9a4deb6819366625ebba0fcbea0f341e6189efe3fea5",
      "item_sha256": "747eff53a6a8b31a43258382c51ecbddc7c7108ee6fb19260d1b6e089ed5c3a5",
      "at": "2026-10-06T01:42:59.313Z"
    },
    {
      "id": "cex-morrey-compactness-loses-the-endpoint-holder-exponent",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Sequences start at 0 by library convention, but u_0(x)=0^{-α}φ(0x) is undefined since α>0. Thus the claimed bounded sequence and the estimates involving 1/k are not defined for every index. Replace k by k+1 throughout.",
      "context_sha256": "b3151ea25a4b7b494e5f364e97de770245735a10f79e0aceec1e7cd8c2c1b795",
      "item_sha256": "87968a692032877f7a07b471d8895f77ef52d8cf1433eaa2d8ad805cc9eef847",
      "at": "2026-10-06T01:44:23.167Z"
    },
    {
      "id": "thm-subcritical-compactness-of-the-sobolev-trace",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 omits the Morrey–Rellich dependency's extension-domain hypothesis. No argument or citation establishes that the bounded C^1 domain is an extension domain, so step 3.1 does not verify an essential prerequisite.",
      "context_sha256": "58112fdd999266d2dbb2d33a37b723b1de149eff0ff95236bdd34fb239766a9a",
      "item_sha256": "be7536d39948c71ddff3c355db5c12b01a4df129cef28f3503f376b62c170018",
      "at": "2026-10-06T01:43:54.522Z"
    }
  ]
