# Step 5 adjudicate: initial, round 1, unit 37

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-37-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u37.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"initial",round:1,unit:"37",input_sha256:"d23dda1488be643603328de91e0bfb6477b03a1eb49ede19fac9872ac281253d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-qa-13-pi-rational-bounds, 17:def-qa-13-amplitude-estimation-task, 19:alg-qa-13-iterative-likelihood-amplitude-estimation, 19:lem-qa-13-certified-count-output-rounding, 21:lem-qa-13-counting-zero-outcome-kernel.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-qa-13-pi-rational-bounds",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title claims these bounds are used in finite schedules, but the statement and proof establish only 3<π<22/7 and give no schedule or use of the bounds.",
      "context_sha256": "a6f02c54bba2aca71078ed7a9e0fce9115264ea4ab8cf9ee30ea7e9e4b63fd46",
      "item_sha256": "1cbdb76ce1b3fe11cb5769c917375f07e6c30e832ba13e8c317f7329db6f0a84",
      "at": "2026-10-16T05:03:08.853Z"
    },
    {
      "id": "def-qa-13-amplitude-estimation-task",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The counting clause reuses H for the declared inner-product space and the Hadamard gate. Thus A=H^{⊗n} and proof step 1.3's H|0⟩ are ill-typed as written, so the counting construction is not established.",
      "context_sha256": "a4fbaefd03de20691b51672389c7bc4df9644ca1c8e7b1a642f0749f94345fff",
      "item_sha256": "6c5d23a80d84ed52ab96447508ca47c508107278610241b53ffba9f7742c954c",
      "at": "2026-10-16T05:03:18.341Z"
    },
    {
      "id": "alg-qa-13-iterative-likelihood-amplitude-estimation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The prepared-success-subspace interface supplies and charges A, A†, S0 and Sgood, but does not say it supplies or charges the good/bad projective instrument. The algorithm’s claim that this contract supplies that measurement is an unsupported dependency restatement.",
      "context_sha256": "f995ecac25cac553d36092bb7e99283273250c398c8796be9371b2eb997e8117",
      "item_sha256": "873c63be907db70a27cde8b07c75342cc354cbd00c057de0010da4a647f02494",
      "at": "2026-10-16T05:03:56.467Z"
    },
    {
      "id": "lem-qa-13-certified-count-output-rounding",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Definition specifies an executable procedure, but the item is filed as kind: lemma with a lem- ID and proves its termination and correctness in the same item. The library convention requires an alg- item and separate proved property results.",
      "context_sha256": "fa3522d6a762d5f7abe59952f056657f37b91dbe6a12d30614115c265bce21e2",
      "item_sha256": "947bfef6f17da4ee15743eeeb0a8f450cd1f838fa23109ece1367e00b2548153",
      "at": "2026-10-16T05:04:01.114Z"
    },
    {
      "id": "lem-qa-13-counting-zero-outcome-kernel",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The unqualified title promises the exact zero-label probability for counting, but the statement and proof omit t=N. For even L, that endpoint has y=L/2 deterministically, so Pr(y=0)=0.",
      "context_sha256": "52b003d50e4cc72c2397d329475bd32f9faa8234d2c925d55f05c5a62449b5c9",
      "item_sha256": "1a63c1a50b0f93a1671fa68af10e8f224ee151246734f83debf49ef196e12594",
      "at": "2026-10-16T05:03:55.256Z"
    }
  ]
