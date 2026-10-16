# Step 5 adjudicate: initial, round 1, unit 58

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-58-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u58.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"initial",round:1,unit:"58",input_sha256:"d23dda1488be643603328de91e0bfb6477b03a1eb49ede19fac9872ac281253d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 15:def-qa-34-heralded-verification-contract, 16:alg-qa-34-error-budget-allocation, 16:lem-qa-34-modfkv-sampling-gram-bound, 16:thm-qa-34-adaptive-failure-union-bound, 16:ex-qa-34-heralded-success-branch, 17:thm-qa-34-error-budget-allocation-correctness, 17:thm-qa-34-linear-combination-sampler-correct-and-cost.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-qa-34-heralded-verification-contract",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition calls each success branch subnormalized and its positive-probability quotient a state, but the instrument interface says those facts are proved in separate theorems. Neither theorem is a dependency or listed in justified_by, and the definition supplies no well-defi",
      "context_sha256": "41f16ef0441411eaa85279bd88deb9bc5a89dd75bf499435ab17e70422ba288c",
      "item_sha256": "d4852c8c1fa273ded22a9154642163f7ddaf96ff378e1fa49edd27f1b99e2939",
      "at": "2026-10-16T05:12:57.629Z"
    },
    {
      "id": "alg-qa-34-error-budget-allocation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The inputs permit stage compilers without requiring adjacent interface compatibility or declaring the pipeline's input/output types. A classical-string stage followed by one requiring a quantum register cannot be wired, though the instructions require composition; the algorithm i",
      "context_sha256": "7c65c54a5990436ab046908fd04afaaa581f81214a3d841091307382761f3b8b",
      "item_sha256": "d3f3b4f4f03c3c878e96c4724bfa1af73ba5d34a8c74b0c6e52b1ee4d8e953d3",
      "at": "2026-10-16T05:13:28.858Z"
    },
    {
      "id": "lem-qa-34-modfkv-sampling-gram-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates def-qa-34-l2-sample-query-access: it supplies only the squared-row-norm sampler, not a sampler for arbitrary q_i. The theorem assumes such a q_i sampler, so this dependency does not license F1's restatement.",
      "context_sha256": "2a32c25e507f32de8d1184fa3230ddd11fb70b8fa69da00d29ddd467f5fc09b0",
      "item_sha256": "51f463bcdd204423a48eebf08af0b56da263f455b45dbaf69632b7c972c0c415",
      "at": "2026-10-16T05:12:57.122Z"
    },
    {
      "id": "thm-qa-34-adaptive-failure-union-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 says [F5] gives every stage an explicit success/failure status, but its interface gives those outcomes for a heralded procedure, not for each stage. That cited inference is unsupported.",
      "context_sha256": "18fb737d254f39850ccf5a6eb79ae82a4754f5a31e69a8291e73a07183ed9c10",
      "item_sha256": "f4fd3c8f2f0ed7f751132153d5c7adf3d3d547fd1c98ec36fa25867580f49684",
      "at": "2026-10-16T05:13:20.435Z"
    },
    {
      "id": "ex-qa-34-heralded-success-branch",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 is misstated: the supplied contract separates success probability, conditional guarantee, any unconditional guarantee (including failure), and verification/output cost. It does not define a separate “failure probability” contract field, so the cited conclusion is unsupported.",
      "context_sha256": "54d3e7978de73f06fa7b05e59d6fe96e30461b81b87f97d46c581aa3da89efe6",
      "item_sha256": "341d481182906413727b49d9655fba47128aa69ae50930f98179b22b6878df92",
      "at": "2026-10-16T05:13:10.220Z"
    },
    {
      "id": "thm-qa-34-error-budget-allocation-correctness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The depth bound can fail: one stage has a gate on wires a,b; the auxiliary record has a gate on a before it and a gate on b after it. Auxiliary depth and stage depth are each 1, but the composed depth is 3 because the stage links their dependencies.",
      "context_sha256": "b5f03f5e56b3a203ea81c799d19545bd12d24fd31e02829e85c7301cfbf6c3c4",
      "item_sha256": "97b8f3066974b3926b45bd30d14de863a22fbc00c44d7b5a5eed055dad9693aa",
      "at": "2026-10-16T05:13:48.351Z"
    },
    {
      "id": "thm-qa-34-linear-combination-sampler-correct-and-cost",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The O(kR) worst-case query-cost claim does not follow: each trial also uses sample access whose declared cost is unconstrained. The proof bounds entry-query count; it needs a unit-cost sampling assumption or a bound that includes R times the access cost.",
      "context_sha256": "b949d482d308ed33945a2cbbc1063687713db5f6e3e50201c39aeb5fdd997e20",
      "item_sha256": "4326610874514075a6c2e14cacdf41f18bb0ae0ee594e356b32d432bc816b9cf",
      "at": "2026-10-16T05:13:05.085Z"
    }
  ]
