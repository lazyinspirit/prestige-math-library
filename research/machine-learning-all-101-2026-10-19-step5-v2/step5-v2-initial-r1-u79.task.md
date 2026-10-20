# Step 5 adjudicate: initial, round 1, unit 79

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-batch-79-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u79.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"machine-learning-all-101-2026-10-19",phase:"initial",round:1,unit:"79",input_sha256:"be31d8759cd439838c6ba1308b97ab1d68ec5727664112594898d2fa2bc53fee",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run machine-learning-all-101-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-linucb-predictable-mgf-substitution, 3:lem-linucb-gaussian-mixture-supermartingale, 4:alg-linucb, 5:thm-linucb-regret.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-linucb-predictable-mgf-substitution",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 restates the supplied conditional-expectation theorem as including pull-out of bounded G-measurable factors, which its interface does not state. Step 1.1 relies on this; justify the needed indicator case from F1 or cite a dependency that supplies it.",
      "context_sha256": "83fc52af0ddecf1fad8fd0b5111ccd5c5eb7ca3a39f53382fcc5e4eea10b1e0d",
      "item_sha256": "1a7c53ab68540d0aac96d4c7b65037efbc5f924a46493e8dee6fa807f0fa8838",
      "at": "2026-10-20T10:01:11.687Z"
    },
    {
      "id": "lem-linucb-gaussian-mixture-supermartingale",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F6 overstates the supplied conditional-expectation theorem interface, which does not state the pull-out property for bounded measurable factors. Step 2.1 needs that property to infer E[W_kR_t(u)]≤E[W_k], so the cited inference is unsupported.",
      "context_sha256": "f797700bebe47587c26244edfab438da95e8b71faaeea3da53a4cba9dd271948",
      "item_sha256": "92c02f514f247d81ad3a54585177f096797e417fc12d827a841444f8d5fd7158",
      "at": "2026-10-20T10:01:22.416Z"
    },
    {
      "id": "alg-linucb",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Definition embeds completion and operation-count claims without separate proved results. The cited regret theorem assumes this algorithm and does not establish those properties, contrary to the algorithm conventions.",
      "context_sha256": "0cfb32e7b474e1365f4785364f053e6776473b0a9582491ad7fb85e57f335e30",
      "item_sha256": "2497388f17218276503f16ca8cbce0a7a643a027fcca63c0be301260ea92037b",
      "at": "2026-10-20T10:02:37.236Z"
    },
    {
      "id": "thm-linucb-regret",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1/A2 and axiom_use attribute specific proof uses to the confidence theorem, but its supplied interface states only AC and Countable Choice as assumptions and the confidence bound. Those use claims are unlicensed by the interface.",
      "context_sha256": "23b9de1db11d0c0e73f3f7c786b157e88087f65d0cdfe74f77c73d9bf48b85cd",
      "item_sha256": "780a84066857a33dffc19e29c181a905d739367e95c944487c963cd463c295b7",
      "at": "2026-10-20T10:02:37.192Z"
    }
  ]
