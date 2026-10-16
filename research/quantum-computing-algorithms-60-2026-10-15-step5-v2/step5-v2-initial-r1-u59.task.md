# Step 5 adjudicate: initial, round 1, unit 59

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-59-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u59.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"initial",round:1,unit:"59",input_sha256:"d23dda1488be643603328de91e0bfb6477b03a1eb49ede19fac9872ac281253d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-qa-35-finite-probability-entropy-and-stochastic-matrices, 1:lem-qa-35-smp-prior-message-decomposition, 4:lem-qa-35-trace-norm-tensor-density-identity, 15:alg-qa-35-swap-test-fingerprint.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-qa-35-finite-probability-entropy-and-stochastic-matrices",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The acceptance-probability clause is ill-typed: p was introduced with k coordinates, while X has m coordinates, with no condition k=m (or p∈[0,1]^m). For k≠m, pXᵀ is undefined; specify the matching dimension.",
      "context_sha256": "cd759ed312a675fcca4170415c019e84a78c914942909fcabb0156b993aa3f8d",
      "item_sha256": "3bbde9fbfee0b4136df166f65783d6b03a4400ab7c15f7b33bb04278ffdd1da3",
      "at": "2026-10-16T05:13:20.001Z"
    },
    {
      "id": "lem-qa-35-smp-prior-message-decomposition",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The expressions (D^{(j)}A)X_j^T and (DA)X_j^T are ill-typed: X_j is specified as a column of M, so X_j^T is a row, and a row vector cannot multiply it. Use X_j without the transpose, or define X_j as a row vector.",
      "context_sha256": "b2cbf895ba52e823b162cb228eef29ff7772e294e619d1af11f32da206a3cc65",
      "item_sha256": "35edd3c38fd33a9c239ddd83106fae060195e20af15b998082690e7c0e20b3f2",
      "at": "2026-10-16T05:13:14.937Z"
    },
    {
      "id": "lem-qa-35-trace-norm-tensor-density-identity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 omits the non-negativity condition: as written, it claims every T has an orthonormal basis with nonnegative diagonal entries, false for T=iI. The cited equivalence grants this only for non-negative T, so F4 is an inaccurate dependency restatement.",
      "context_sha256": "a4c55c06905937e08931cb09eb6bc60f6e1cfab286d3db4811f8453a2f8870ad",
      "item_sha256": "f50b72cb098c20650a8e1b9d240762cb2077808214907e7d590c5b9f7dc1ec28",
      "at": "2026-10-16T05:13:45.532Z"
    },
    {
      "id": "alg-qa-35-swap-test-fingerprint",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The inputs allow injective E with two codewords at Hamming distance 1 in large N and r=1. Then a SWAP test returns 0 with probability about 1−2/N, so unequal inputs are often declared equal; no stated promise or error bound excludes this.",
      "context_sha256": "9b2a4d674791af39e793ee43d49184e1c67701e0e5813846091ead86c96b7135",
      "item_sha256": "f786940fe112839c8742ab5d801983f1460f2dc86ee721a553bf05d2f0815317",
      "at": "2026-10-16T05:14:16.458Z"
    }
  ]
