# Step 5 adjudicate: initial, round 1, unit 67

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-67-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u67.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"67",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:def-gr-timelike-worldline-and-proper-time, 3:lem-gr-proper-time-reparametrization-and-four-velocity, 6:thm-gr-nondegenerate-levi-civita-and-tensor-derivative, 7:lem-gr-parallel-transport-and-geodesic-speed, 8:thm-gr-local-geodesics-and-exponential-map.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-gr-timelike-worldline-and-proper-time",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (c) includes k=0, but clause (b) defines velocity only for C¹ curves. Thus requiring a C⁰ curve to have future-timelike velocity is undefined. Restrict k to k≥1.",
      "context_sha256": "896ef541e9b156aa3f7b67216c9d9de8d4cd47fe929cd617e7c0b0ebb17e9898",
      "item_sha256": "186be822b7b7c73417728c8275014408042c0545e1e47d08acd1bd47951754e0",
      "at": "2026-10-12T20:21:16.902Z"
    },
    {
      "id": "lem-gr-proper-time-reparametrization-and-four-velocity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The fixed constant c>0 is also used as the split point in “For a<c<b,” with no new split variable quantified. The statement therefore asserts additivity only at that particular value, not at every intermediate point as the title and proof claim.",
      "context_sha256": "340da79c87e9db92728e4c65d26387480fcc740b2ac5b98b36cae7b9f4d787f0",
      "item_sha256": "afaa5013ff41ec26f767359d6aaea5f20a383c1bb1b6e40600241547dcd15123",
      "at": "2026-10-12T20:21:13.088Z"
    },
    {
      "id": "thm-gr-nondegenerate-levi-civita-and-tensor-derivative",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The theorem covers arbitrary smooth nondegenerate metrics, but (c) invokes the tensor-field definition (and the inverse-metric definition), whose supplied interfaces apply only to time-oriented Lorentzian four-manifolds. They do not license (c) for the stated general case.",
      "context_sha256": "9d23c47b639c58c2f1dc2e9f4708b9b6d3c97712cf787ba9c597deb0559c2e16",
      "item_sha256": "46b2fd386ae1b48fe6325ce95400144e9eea9a1a669a239d0ca83666a0f9a5c8",
      "at": "2026-10-12T20:21:22.132Z"
    },
    {
      "id": "lem-gr-parallel-transport-and-geodesic-speed",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement never requires I to have nonempty interior. The cited covariant-derivative definition explicitly assigns no D_t operator on a singleton interval, so the opening definition of D_t and the metric-pairing claim are not well-typed there.",
      "context_sha256": "5fad8e5afe817a9a5d3918ed7894639abcf16db1562b0632597c51ccca5c5a17",
      "item_sha256": "bfe562b4c34d1dd7be8ef3009f8c4231d264ea8022d23f89ea38b31b81da0f80",
      "at": "2026-10-12T20:20:53.254Z"
    },
    {
      "id": "thm-gr-local-geodesics-and-exponential-map",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 defines S using only open domains, then claims any extension on a larger interval belongs to S. But the geodesic definition also permits half-open and closed intervals, so this does not establish the stated maximality.",
      "context_sha256": "c8815265a9fe6921477292dcff4b0ad57bb4d0a868807dcb21db2b4495e05187",
      "item_sha256": "6fac26527d6acdb4e28cbd0148b9193bd1b2530fdd5e35c43c51d118d507c7f6",
      "at": "2026-10-12T20:24:18.886Z"
    }
  ]
