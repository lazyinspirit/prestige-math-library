# Step 5 adjudicate: initial, round 1, unit 44

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-44-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u44.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"inverse-problems-knot-theory-all-109-2026-10-19",phase:"initial",round:1,unit:"44",input_sha256:"c872603b0f7c95c42125928ec1ced19e672caec5508e4ce625685b74e981d23d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run inverse-problems-knot-theory-all-109-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:def-ip-pde-solver-admissibility-contract, 3:lem-ip-finite-element-reduced-gradient-from-discrete-adjoint, 5:alg-ip-finite-element-pde-tikhonov, 7:cex-ip-pde-biased-under-solved-adjoint-gradient, 7:ex-ip-pde-cfl-invalid-iterate.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-ip-pde-solver-admissibility-contract",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The finite-element dependency permits arbitrary finite-dimensional subspaces of continuous functions, not just polynomial spaces. The claim that unisolvence gives a bijection on each local “polynomial space” is an inaccurate dependency restatement.",
      "context_sha256": "accec3781e975390b0a56832d9cde55ffc7c5f5a15d28ce52e3f70edb845a909",
      "item_sha256": "19ed7d5b35a9cddf0f06b1434b242ffbbdeea90f3ec4c751c9eadf6fc9c46c37",
      "at": "2026-10-21T14:47:12.322Z"
    },
    {
      "id": "lem-ip-finite-element-reduced-gradient-from-discrete-adjoint",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 mis-scopes the contract: it defines the adjoint equation for its supplied finite-element model at admissible q∈Q_h, while this lemma assumes arbitrary maps and q∈O. The equation is given in the statement, but the contract does not license that restatement.",
      "context_sha256": "b5f8fed8b1fc31417c59baf79adfcee0ec7e63b8af00e2c5015e61f62f862295",
      "item_sha256": "5e130e66e2da8f319ffdfc5fce5f26d18caab838591f3bb6d177c23685934e23",
      "at": "2026-10-21T14:47:33.462Z"
    },
    {
      "id": "alg-ip-finite-element-pde-tikhonov",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Steps 4 and 7 classify any projection-routine failure as `budget-exhausted`, even when the evaluation budget remains. That misreports the cause and leaves non-budget projection failures without a valid status.",
      "context_sha256": "90950d44a563562b373e699824f06797e6a8471099f7a1f185a3e33f62de30d0",
      "item_sha256": "6fc348546f94c6df8798fe8cec377eb4e81a9be3473830917eacac8f736b935c",
      "at": "2026-10-21T14:47:12.447Z"
    },
    {
      "id": "cex-ip-pde-biased-under-solved-adjoint-gradient",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 overstates the theorem: it says a failed solve or residual certificate implies `linear-solve-failed`, but the supplied theorem only says that status occurs only after a corresponding failed check. The algorithm does support residual rejection, but F4 is an inaccurate dependenc",
      "context_sha256": "c53258ee1b00a824d58cd80242345ae7e249daab64d61918ef3d584ad7c10888",
      "item_sha256": "40207d11197d76f354d576d08cd49fb86947a75165ae159c2ba1f6c25867fb19",
      "at": "2026-10-21T14:48:23.166Z"
    },
    {
      "id": "ex-ip-pde-cfl-invalid-iterate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 reverses the theorem interface’s one-way claim: it says predicate failure implies an inadmissible return, while the theorem says inadmissible is returned only after a corresponding failure. The algorithm interface supports the implication, so F3 suffices, but F4 misstates its ",
      "context_sha256": "aa0fe5089d159e389732a1bb7070e4d1d9e2cbeb586895ccf761f3c1e6d3f984",
      "item_sha256": "72346e5e70c195760f1b0291ac62070bec3163523222a15adf367cc0685d6cbb",
      "at": "2026-10-21T14:48:10.971Z"
    }
  ]
