# Step 5 adjudicate: initial, round 1, unit 18

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-batch-18-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u18.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-44-special-representation-examples-28-six-step",phase:"initial",round:1,unit:"18",input_sha256:"a3c0decd85fdbe71b25b7ccd7e6264df187be55612edc2bcfbd9729c1e231624",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run frontier-44-special-representation-examples-28-six-step --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-finite-generation-and-generation-degree-of-an-fi-module, 1:def-weight-of-a-characteristic-zero-fi-module, 1:lem-branching-rule-for-specht-induction-and-coinvariants, 2:lem-fi-coinvariant-functors-detect-vanishing-in-bounded-weight, 4:lem-generation-degree-bounds-surjectivity-degree-and-weight.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-finite-generation-and-generation-degree-of-an-fi-module",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Generators need specified supports. Take V_S=k for every S, bijections acting identically and other injections by zero. The displayed Σ∩V_S formula makes Σ={1} generate V, although no bounded degree generates V, contradicting the asserted finite degree bound.",
      "context_sha256": "99de4025fdb6ef3d650c7cda95584aa49f5b935e53a50b9a7a82c809a3be761c",
      "item_sha256": "738de6e9751363adeee7e15af4e2fad845b28a23afee0201f25ec7f537a2c652",
      "at": "2026-10-11T15:08:01.624Z"
    },
    {
      "id": "def-weight-of-a-characteristic-zero-fi-module",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "For λ=∅ and n=0, the local padding formula gives (0), which is not a partition. The dependency instead defines ∅[0]=∅. Omitting this exception leaves the displayed Specht module V(∅)_0 undefined at FI degree zero.",
      "context_sha256": "87ab532c62bae45fb6fecbca21147173ff988009591500e66cb9940a7dc07604",
      "item_sha256": "027f301de3c954b1aa3af3bc6d5a869e233e9a2726e4ea927d8812e3c59139cd",
      "at": "2026-10-11T15:08:05.919Z"
    },
    {
      "id": "lem-branching-rule-for-specht-induction-and-coinvariants",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Part (ii) quantifies over integers k≤n without requiring k≥0. For n=0 and k=-1, the subgroup S_{n-k}×S_k contains the undefined S_{-1}, so the asserted module is not well typed. Require 0≤k≤n.",
      "context_sha256": "f1edd2d0b78b6df1324c882e1240589932679afa98161af80c5e6758b9554e80",
      "item_sha256": "a803b2a8dc334a0422463eb5482a103ab614c6138eb1dcb47aa38d0fccdbe8c8",
      "at": "2026-10-11T15:08:44.936Z"
    },
    {
      "id": "lem-fi-coinvariant-functors-detect-vanishing-in-bounded-weight",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 misidentifies the simple module as V(ρ)_n=V_ρ with ρ⊢n. For n>0, V(ρ)_n is undefined: padding requires n≥|ρ|+ρ₁>n. The correctly typed module is V(η)_n=V_ρ, where ρ=η[n].",
      "context_sha256": "aa55f4b0f45ca7bb45d4ce22dc34b419f2ea7311ad733936979f76a967b54d72",
      "item_sha256": "effb6ddc8bd9c7457ec411682636d102785f5f1805128379adbd2f08107e1575",
      "at": "2026-10-11T15:08:32.204Z"
    },
    {
      "id": "lem-generation-degree-bounds-surjectivity-degree-and-weight",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F6 attributes the horizontal-strip constituent rule to lem-free-fi-modules-have-explicit-weight-and-stability-bounds, but its supplied interface states only degree and weight bounds and does not license that restatement.",
      "context_sha256": "95d57798eb36fcd503f1c0917cf4947fb385586361d9b0eb65e1e249eacb3e70",
      "item_sha256": "9285667b2a6373c38655b20b4899cfb4474b65a97717f3877f7af14ce8885605",
      "at": "2026-10-11T15:08:24.002Z"
    }
  ]
