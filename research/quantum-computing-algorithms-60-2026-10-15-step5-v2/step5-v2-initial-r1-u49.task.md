# Step 5 adjudicate: initial, round 1, unit 49

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-49-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u49.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"initial",round:1,unit:"49",input_sha256:"d23dda1488be643603328de91e0bfb6477b03a1eb49ede19fac9872ac281253d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-qa-25-parity-path-transfer, 13:def-qa-25-hamiltonian-simulation-polynomial, 14:thm-qa-25-qubitization-signal-sequence, 15:thm-qa-25-bounded-error-parity-query-lower-bound, 18:ex-qa-25-parity-no-fast-forwarding, 19:alg-qa-25-small-time-aware-simulator, 21:thm-qa-25-qubitized-simulation-correctness, 23:thm-qa-25-qubitized-simulation-resource-bound.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-qa-25-parity-path-transfer",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 is overstated: the supplied spectral-theorem interface gives an orthonormal eigenbasis for normal endomorphisms, but says nothing about operator norm. Step 2.1 relies on the unprovided norm-eigenvalue claim to conclude ||X_r||=1.",
      "context_sha256": "02c718437603cd2bac63dfab21dfd2d28c66f2bd97bce995c39f11a140e380b3",
      "item_sha256": "d50f2cd33de5dd95686e1e392769f21330215997aa2b34611064d1fcf8d50269",
      "at": "2026-10-16T05:07:18.353Z"
    },
    {
      "id": "def-qa-25-hamiltonian-simulation-polynomial",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Chebyshev recurrence is stated for k≥0, so at k=0 it uses undefined T_{-1}. State the recurrence for k≥1.",
      "context_sha256": "337641ffcff0a9b347a7d78372079bb03c25be4a4ea40b0ad6b13042aa024ca1",
      "item_sha256": "ee1984e0a8e8942fd3112528eef5f94887a2bef7dde7711ab85d6019e27b2651",
      "at": "2026-10-16T05:07:22.986Z"
    },
    {
      "id": "thm-qa-25-qubitization-signal-sequence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.2 attributes determinant and polynomial-entry conventions to [F4], but [F4] gives the QSVT action and compressed-block formulas. The full matrix-entry and sign conventions are stated in [F5], which that step does not cite.",
      "context_sha256": "bc1a248c2bf476e1d92404d4eae02ac86141bac480019ca76f514b929691404d",
      "item_sha256": "0effc9795c9786a97a4ee14ae0a2421ab05cf0487638f2691ae277672939f0f2",
      "at": "2026-10-16T05:08:24.017Z"
    },
    {
      "id": "thm-qa-25-bounded-error-parity-query-lower-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 overstates its cited interface: def-qc-uniform-circuit-family specifies circuit encoding and gates, but not a query algorithm’s inter-query operations or a computational-basis output measurement. The proof relies on that unsupported output model to define p.",
      "context_sha256": "a38159045b0db662743c8b68d6f3364c569aa3526c3759e66eadffd630da0820",
      "item_sha256": "f10fd4ce826125f140141e30f936ac687fa008c5b3d1fe687a35c7af3a369d1a",
      "at": "2026-10-16T05:07:38.449Z"
    },
    {
      "id": "ex-qa-25-parity-no-fast-forwarding",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 concerns rounded weights q_i, not this exact-weight path: at n=2, q_i=23/32≠1/√2. So step 2’s identification with F3’s family is inaccurate; its lower bound also applies only in the specified row/value oracle model.",
      "context_sha256": "39e60e589337398e71c257c6130562e72bc692ab60d6a4e0da1d23a1f220419c",
      "item_sha256": "fc633e025ca2f04d41bbe73235369dd955a5a6082ad3df3f108df778a9877459",
      "at": "2026-10-16T05:08:11.276Z"
    },
    {
      "id": "alg-qa-25-small-time-aware-simulator",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The large-time branch calls the simulator without requiring its declared access and cost information or certified scalar comparison and interval-evaluation routines. A block encoding and the single τ-versus-ε comparison do not satisfy that dependency interface.",
      "context_sha256": "373572c00d777824e846baab87ebb38fa85ee9af886dbcc8eb6347e34660768b",
      "item_sha256": "8790083f0f462a18ed9164e8c7877f36da7294c56a6a11fd8d90429425beb554",
      "at": "2026-10-16T05:07:42.478Z"
    },
    {
      "id": "thm-qa-25-qubitized-simulation-correctness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title asserts near-optimality, but the Statement and Proof establish only simulation error bounds; they prove no query or complexity bound. Rename it “Qubitized simulation correctness.”",
      "context_sha256": "b5bf9198791c793a02581d249f53e372e202af8017fc4c7653fe63feae53d0a3",
      "item_sha256": "74f4e6c141d8c16699dc925cf24f43bb1463865bfbda9d07bc944ba1ad83c796",
      "at": "2026-10-16T05:08:41.413Z"
    },
    {
      "id": "thm-qa-25-qubitized-simulation-resource-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: the interfaces give OP4’s degree and per-sequence QSVT costs, but never state that W contains one even and one odd extraction or that OAA is W,W*,W. The asserted total signal and reflection counts are therefore unsupported.",
      "context_sha256": "af44f980d335cf7ca3a2dd697831e75427b40e658b2f3d853002bff12c273147",
      "item_sha256": "36f28e4b9251a3836425e76c6feebc502d1df036c2574ee7c635e1c1502c53bc",
      "at": "2026-10-16T05:08:06.013Z"
    }
  ]
