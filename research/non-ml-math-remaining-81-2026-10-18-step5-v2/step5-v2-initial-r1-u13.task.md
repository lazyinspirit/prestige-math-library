# Step 5 adjudicate: initial, round 1, unit 13

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-13-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u13.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"non-ml-math-remaining-81-2026-10-18",phase:"initial",round:1,unit:"13",input_sha256:"5a7686cf6af281fffc281470b9fd4d1b4497cd3e88649ffa4676dd5e748ac1b1",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run non-ml-math-remaining-81-2026-10-18 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-density-channel-threshold-random-coding-bound, 0:lem-jensen-for-integrable-cost-random-variable, 0:lem-standard-normal-fourth-moment, 1:def-countable-dmc-zero-cost-information-capacity, 2:ex-countable-input-channel-finite-capacity-supremum-not-attained, 3:lem-parallel-awgn-cost-constrained-achievability, 7:def-finite-dmc-feedback-code, 9:ex-correlated-gaussian-noise-orthogonal-reduction.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-density-channel-threshold-random-coding-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The decoder compares imath for every codeword/output pair, but imath is defined only on the joint support. Mismatched pairs can have w=0 with positive probability (e.g. a noiseless binary channel), where ln(w/q) is undefined. Specify score −∞ there.",
      "context_sha256": "aa5b914a2b6052ce678ea223b2fc128f134c2130e0887e115c310a4ce51961ed",
      "item_sha256": "1dc3a89e08a63a22d632c628ab8c2ae9791d2a4a6f8a3fa3969785292e6d4f2b",
      "at": "2026-10-18T04:20:43.088Z"
    },
    {
      "id": "lem-jensen-for-integrable-cost-random-variable",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates the cited interface: it gives suprema for bounded sets of Dedekind cuts, while the real-number supremum claim requires the separately named thm-reals-dedekind-ordered-field, which is not a dependency.",
      "context_sha256": "bbf26b568be3030bf46954cf659bf5385715ee68752d646f4e9699a45845d701",
      "item_sha256": "4c4005693586845a965b812b62e743115a705fa2ea8a2abffe1a06c0d433adbf",
      "at": "2026-10-18T04:20:32.169Z"
    },
    {
      "id": "lem-standard-normal-fourth-moment",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 applies F5 when i=j, but a variable is not independent of itself; generally E[G_i^4]=3σ_i^4≠(E[G_i^2])². Handle diagonal terms using step 2.1; as written, the finite-combination proof is invalid.",
      "context_sha256": "7bd7a7c6663e777e415a65f01e2eeb39d9aacc0b00db77ef2bb68497fc9ef82c",
      "item_sha256": "0935e4a71c668a1aa391192762319e3418e8cee9e934aaf8b15965ace96fedbd",
      "at": "2026-10-18T04:20:34.039Z"
    },
    {
      "id": "def-countable-dmc-zero-cost-information-capacity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The input alphabet is stated as \\(\\mathbb N=\\{1,2,\\ldots\\}\\), but library conventions include 0 in \\(\\mathbb N\\). As written, the channel omits the row for input 0; use the positive integers as the alphabet.",
      "context_sha256": "d7f4bce6d58965c0957443e42f90908541157c0e519439c347d2e6b54bf56050",
      "item_sha256": "9e7b33ffe2854cd68d4977390fd8ebd8a19fb26194a0fd780a85c3cbbe1bd95f",
      "at": "2026-10-18T04:20:35.046Z"
    },
    {
      "id": "ex-countable-input-channel-finite-capacity-supremum-not-attained",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 misstates [def-natural-logarithm]: its interface defines log as the inverse of exp but does not establish 0 ln 0 = 0. That entropy convention appears in other dependencies, so this is an inaccurate dependency restatement.",
      "context_sha256": "44b8cec36f203364bba1a12b55d22b3a3ba94eb539518fce799befcf31a08798",
      "item_sha256": "e97a37e4a96c07f69a67184d7d11ba9cec012a0f245610aff3b49ad3fc9a9ccc",
      "at": "2026-10-18T04:21:00.789Z"
    },
    {
      "id": "lem-parallel-awgn-cost-constrained-achievability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F6 is inaccurately restated: its interface requires exchangeable message codewords, but Facts [F6] states the pruning conclusion for a general random code ensemble. The cited result is overstated.",
      "context_sha256": "768afdfba5059d60dd78c3be60d75d377fd2a8e4a924f89bd82d59139a8a8ee9",
      "item_sha256": "1ab05a2cf5ec87e8ec9fc14a0875073739be0aeac4eb478ae1efd32368a06903",
      "at": "2026-10-18T04:21:17.420Z"
    },
    {
      "id": "def-finite-dmc-feedback-code",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition does not require n≥1, unlike the fixed-length-code interface. At n=0, both the stated rate n⁻¹ ln M and expected average cost divide by zero, so the code is not well-defined.",
      "context_sha256": "baadbcc2627e662e3beb8618ae3fed1e44b0ef5884e5aaea2945356fd3b0790b",
      "item_sha256": "8a5cf1b288ee7e06e4a3b17c77a95dd7216a961828dd7aa991229c7dcdfc341d",
      "at": "2026-10-18T04:20:59.086Z"
    },
    {
      "id": "ex-correlated-gaussian-noise-orthogonal-reduction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 misstates [def-standard-normal-and-normal-laws]: it defines the one-dimensional normal law but says nothing about coordinate independence. F2 assumes independent standard-normal coordinates; F1 supplies the transformed-noise result here.",
      "context_sha256": "3a81ec537653934ffd85e81efe3312930c71ebc6c49e3423e5e775a2529a32c1",
      "item_sha256": "2359babeef29187ced39fc9a5f16a000859ebd68735be0a26f8a14d07a106616",
      "at": "2026-10-18T04:20:56.119Z"
    }
  ]
