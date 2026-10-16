# Step 5 adjudicate: initial, round 1, unit 47

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-47-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u47.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"initial",round:1,unit:"47",input_sha256:"d23dda1488be643603328de91e0bfb6477b03a1eb49ede19fac9872ac281253d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-qa-23-polynomial-interval-sign-certificate, 8:lem-qa-23-hermitian-signal-convention-conversion, 9:lem-qa-23-positive-polynomial-complement-factorization, 9:thm-qa-23-qsp-phase-factorization, 10:lem-qa-23-qsp-completion-peel-arithmetic-cost.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-qa-23-polynomial-interval-sign-certificate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 is misstated: the interface allows a zero remainder, but the restatement only allows a lower-degree remainder. Step 1.1 relies on exact divisions when factoring out roots.",
      "context_sha256": "8edacbd5e377dbc319e21f865c8925e08f93ba39fb4a9be360c85effde9c2673",
      "item_sha256": "9ac7ee67a63e48eb50e9836db4e8d5a130d60754e97e9ca7933de74e91f7d2e3",
      "at": "2026-10-16T05:06:40.102Z"
    },
    {
      "id": "lem-qa-23-hermitian-signal-convention-conversion",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 4.1 says a supplied control gives C(U_S), but F5 grants that block only when the operation model explicitly supplies the controlled call. The step overstates the interface.",
      "context_sha256": "019ea014b38ac44635e8fb17d61198432a252fb73f7900299e7aabc65b28e516",
      "item_sha256": "e7450e1cebfcdbf1278bf81fbe066df78bfbe441ceaa1233b85b3975d8423ec3",
      "at": "2026-10-16T05:07:00.449Z"
    },
    {
      "id": "lem-qa-23-positive-polynomial-complement-factorization",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F8 overstates its cited interface: it says C is a field, not that complex polynomials factor there. FTA plus division supply factorization, but the local dependency restatement misattributes that fact.",
      "context_sha256": "ebc306d3f1fab470fa6b57d082368ddd3b03270b504942b3fc42ad9dbe863cdd",
      "item_sha256": "4cde118dad1b707b70aaf24742867f8a23b025270f9fc350a5038dc7fde2a84a",
      "at": "2026-10-16T05:07:36.954Z"
    },
    {
      "id": "thm-qa-23-qsp-phase-factorization",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 applies the induction hypothesis to the peeled source-convention pair (P',Q'), but the theorem's hypothesis yields a Hermitian-reflection sequence, not M'. Use F3 after first rephasing to (i^{d-1}P', i^dQ'); without that, the induction does not reconstruct M'.",
      "context_sha256": "d693217c6b321ccc585301042a82e3ebefe052de09ddb0e3577390cab97526ea",
      "item_sha256": "160aa64f354b44763f8261dbb3ad378eb12228bf8bf04d4e804d81c521796994",
      "at": "2026-10-16T05:07:19.440Z"
    },
    {
      "id": "lem-qa-23-qsp-completion-peel-arithmetic-cost",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.3 attributes nonnegativity of c²−1 to F1, but its interface gives only complement existence, parity, and degree bounds. The required c>1 is proved only later in 4.1, so this step's cited justification for the radical bound is inaccurate.",
      "context_sha256": "8996fb4c8065a713d64d2f61a503f0d8f370b19d7719d71a93366d652d023a95",
      "item_sha256": "911178d475e6fd8ec4e4a8cefd22b98d4aa64e2aee8c894487b5fe1075d0c6c2",
      "at": "2026-10-16T05:08:28.937Z"
    }
  ]
