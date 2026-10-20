# Step 5 adjudicate: initial, round 1, unit 4

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-batch-4-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u4.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"machine-learning-all-101-2026-10-19",phase:"initial",round:1,unit:"4",input_sha256:"be31d8759cd439838c6ba1308b97ab1d68ec5727664112594898d2fa2bc53fee",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run machine-learning-all-101-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:ex-affine-halfspaces-have-vc-dimension-p-plus-one, 3:def-vc-pac-learning-criterion, 4:thm-vc-agnostic-sample-complexity.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "ex-affine-halfspaces-have-vc-dimension-p-plus-one",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Indexing makes the proof ill-typed against the supplied standard-basis interface: in R^p the basis vectors are e_i for 0≤i<p, but the item uses e_1,…,e_p and sums coordinates j=1,…,p. In particular, e_p is not a coordinate vector of R^p.",
      "context_sha256": "bb80627f3d1fa97fb21b5c9c204bdadb0e9836d7c0cd85c7404b5d3d2d70e01a",
      "item_sha256": "f809bbb9d05f0dd6126ab9538c8a35c513eae8a7d585b2aef3b091d95bfc7984",
      "at": "2026-10-20T08:09:06.545Z"
    },
    {
      "id": "def-vc-pac-learning-criterion",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Risk measurability is stated after fixing P, but PAC then quantifies over every law P. The definition never requires S↦R_P(A(S)) measurable for each law, so its success event may not be measurable for laws outside the initially fixed one.",
      "context_sha256": "0c364d74efbcad7787047edcad36ffde2f8aa194a4261605325968aa076ccb53",
      "item_sha256": "cb01684af89a1e199cacc6500456245dfba36c600862a0aad7136ff66b9719ed",
      "at": "2026-10-20T08:36:38.426Z"
    },
    {
      "id": "thm-vc-agnostic-sample-complexity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The sample-size corollary calls A agnostic PAC, which by the cited definition requires a guarantee for every law P. Measurability is assumed only for the current P, so the proof gives a distribution-conditional bound; require the assumptions for every P or weaken the conclusion.",
      "context_sha256": "5a603930481353143607e2e652a2aec77f9bece18dc675f3358445404a5ae990",
      "item_sha256": "d886686f9a18a6297eeea7f3721ce87d29d8ac298c2f30f1975e97ad8efbfadb",
      "at": "2026-10-20T08:17:18.647Z"
    }
  ]
