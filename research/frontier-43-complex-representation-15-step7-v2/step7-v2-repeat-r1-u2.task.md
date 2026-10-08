# Step 7 adjudicate: repeat, round 1, unit 2

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-43-complex-representation-15-step7-v2/repeat-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-43-complex-representation-15-step7-v2/step7-v2-repeat-r1-u2.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-43-complex-representation-15",phase:"repeat",round:1,unit:"2",input_sha256:"a9600db691b683b232dcb9f3b1651283b10c4e5e2239d42ee82e388c90cda0a1",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-43-complex-representation-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 4:lem-a-topological-invariant-mean-yields-norm-approximately-invariant-densities, 5:lem-an-invariant-mean-produces-a-reiter-net, 8:cor-folner-sequences-for-second-countable-compactly-generated-groups.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-a-topological-invariant-mean-yields-norm-approximately-invariant-densities",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F20 claims an explicit probability-preservation remark in the UCB-to-topological-mean lemma, but its supplied interface contains no such claim. Step 4.1 relies on this unsupported dependency restatement to establish g_i∈P.",
      "context_sha256": "1c486c13e83590c04439f74fafd47780220a27e97113a6b59ee1b8f93e5ecad7",
      "item_sha256": "fe6a0c3e6ab27f44882672b9bbdc9e91f25d827c938f282b058ae70da3477088",
      "at": "2026-10-08T07:46:46.233Z"
    },
    {
      "id": "lem-an-invariant-mean-produces-a-reiter-net",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F10 attributes probability preservation by L1 convolution to a Remark absent from the supplied dependency interface. Step 4.1 relies on this unsupported claim to establish that f*g_j belongs to P.",
      "context_sha256": "16bfda30e776a56750b9b98097317ff16176af9f2431ac324ca385950ac7a08b",
      "item_sha256": "f7e4916b649aa56e10f58e1f4f04b2587d3a90d243c8f815c32f622ffcdd4c45",
      "at": "2026-10-08T07:46:38.798Z"
    },
    {
      "id": "cor-folner-sequences-for-second-countable-compactly-generated-groups",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The sequence is indexed only by n≥1, leaving F_0 undefined, contrary to the library convention that sequences have domain ℕ including 0. Steps 2.2–3.1 require reindexing with K_{n+1} and tolerance 1/(n+1).",
      "context_sha256": "577f149aab7b20695429358d8abd0135a0870f84e2156dd8b925ae4156875abf",
      "item_sha256": "0d46092f5fc5c41076fc6e241263909c16a847a36626838f428f375e8686d090",
      "at": "2026-10-08T07:46:31.101Z"
    }
  ]
