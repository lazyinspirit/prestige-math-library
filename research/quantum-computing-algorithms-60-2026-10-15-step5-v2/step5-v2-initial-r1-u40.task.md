# Step 5 adjudicate: initial, round 1, unit 40

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-40-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u40.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"initial",round:1,unit:"40",input_sha256:"d23dda1488be643603328de91e0bfb6477b03a1eb49ede19fac9872ac281253d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 19:def-qa-16-boolean-query-domain, 21:def-qa-16-filtered-gamma2, 21:thm-qa-16-controlled-consistency-reflection-correct, 27:thm-qa-16-general-adversary-tightness.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-qa-16-boolean-query-domain",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For N=3, F2’s address register has 2-bit basis states, including an unused fourth address. The statement gives no oracle action there, yet step 1.1 claims F2 fixes a total oracle on the N-address register. Specify an encoding and extension, or use a matching address interface.",
      "context_sha256": "fb0c6ca73bd131e2ab3103ea0919b89953839cde42bbdd6356295387ceca08ba",
      "item_sha256": "6ac9591640abb5da2a3f843316a1ed8d8ea874b3152592e00f764dc4d6bfeb48",
      "at": "2026-10-16T05:04:21.779Z"
    },
    {
      "id": "def-qa-16-filtered-gamma2",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "D is only required to be finite, so it may be empty. Then both maxima over D in the defining cost are undefined, and γ₂ is not defined for the empty matrix. Require D≠∅ or specify an empty-domain convention.",
      "context_sha256": "df7fbcf607e175173ce8c653e5f57a0956142444862d5a31dcb3a07e94466e6f",
      "item_sha256": "72f4ed8553d05ea1d6a651de9e3d19655d5673be52aa0b85589127c924b07b14",
      "at": "2026-10-16T05:04:46.951Z"
    },
    {
      "id": "thm-qa-16-controlled-consistency-reflection-correct",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F25 misstates its cited dependency: def-qc-register-and-computational-basis defines register bases and tensor products, not the mode/address/response/work decomposition. That decomposition comes from the algorithm input, so step 1.1 cites an unsupported local fact.",
      "context_sha256": "04d78307b5e637f7ba5033aaf774523798af2b9fa6a84e645998b83f39bc5cb5",
      "item_sha256": "17cf462c9969250eada1f01a1cce397602c22fb3dda45d8a4339b71e8d990308",
      "at": "2026-10-16T05:04:32.660Z"
    },
    {
      "id": "thm-qa-16-general-adversary-tightness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 is overstated: its interface gives filtered γ₂ = Adv± only for nonconstant f. Step 2.1 cites it in the constant case, where that identification is not licensed.",
      "context_sha256": "ced809e85bbac9498294d2d14285bf1054f09179a150516528d3290f4f55a7b4",
      "item_sha256": "36cf581134ee4f50e8cec7527c22f459e64f268348107d7d2a8956e69298c69e",
      "at": "2026-10-16T05:04:49.482Z"
    }
  ]
