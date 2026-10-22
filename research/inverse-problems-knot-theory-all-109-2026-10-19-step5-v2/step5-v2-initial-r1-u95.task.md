# Step 5 adjudicate: initial, round 1, unit 95

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-95-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u95.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"inverse-problems-knot-theory-all-109-2026-10-19",phase:"initial",round:1,unit:"95",input_sha256:"c872603b0f7c95c42125928ec1ced19e672caec5508e4ce625685b74e981d23d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run inverse-problems-knot-theory-all-109-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 9:lem-slice-knot-floer-complex-stably-equivalent-to-unknot, 10:lem-epsilon-stable-equivalence-and-not-a-homomorphism, 13:ex-knot-kt-42-worked-cases.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-slice-knot-floer-complex-stably-equivalent-to-unknot",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 overstates the supplied grid-homology interface: it gives equivalence of normalized minus complexes preserving relative Maslov grading and Alexander filtration, not a finite CFK∞ model or its absolute Maslov and two filtration origins. Step 1.1 relies on that unsupported ident",
      "context_sha256": "15adcd0372f3612f8b8966405c5d480931922bcada050dc408a4a8c349c78fb1",
      "item_sha256": "8741ffd9c79b692d328e453b1b497d3b227907d23e2b006c0e5a4ccbede21965",
      "at": "2026-10-21T16:06:36.330Z"
    },
    {
      "id": "lem-epsilon-stable-equivalence-and-not-a-homomorphism",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fact F1 overstates its interface: `def-epsilon-from-filtered-knot-floer-complex` defines F_s, G_s and ε but supplies no two-hook proof that both maps cannot vanish. The proof assumes the three cases are exhaustive, so ε is not established if both vanish.",
      "context_sha256": "66a4c164da3674a4422651df6d3233ec3751fb214aaf8659818a9e79692d5f0e",
      "item_sha256": "56940f8040c1805ee13719ae46c346bb1365d85cc042c450d31794cf364714cb",
      "at": "2026-10-21T16:10:01.223Z"
    },
    {
      "id": "ex-knot-kt-42-worked-cases",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal: [F4] claims the epsilon lemma supplies a signed-code admission and trefoil staircase, but its interface states only epsilon facts. The grid comparison items do not compute a trefoil grid complex, so the staircase Upsilon calculation is not tied to T_{2,3}.",
      "context_sha256": "610bcf66acbd9e9b0fd866bb75992fc51bfc33de9217612df41ef69dec75cf5d",
      "item_sha256": "76ad103236b19723958f0842c879864339da26604da8b24109acf7f4d02b1311",
      "at": "2026-10-21T16:08:18.097Z"
    }
  ]
