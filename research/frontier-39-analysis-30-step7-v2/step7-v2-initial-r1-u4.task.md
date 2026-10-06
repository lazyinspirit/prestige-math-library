# Step 7 adjudicate: initial, round 1, unit 4

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/step7-v2-initial-r1-u4.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-39-analysis-30",phase:"initial",round:1,unit:"4",input_sha256:"9338524b8f90ef76ff4d0d3c41b2d942e870edbc6da3d7062fa8aeac770c3e1f",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-39-analysis-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:cor-poincare-wirtinger-on-convex-domains, 0:rem-critical-sobolev-does-not-embed-in-linfinity, 1:lem-truncated-riesz-kernel-potential-bounded-on-lp, 3:thm-critical-sobolev-embedding-into-every-finite-lq, 3:thm-morrey-inequality-for-p-greater-than-n, 3:thm-sobolev-poincare-on-bounded-connected-extension-domains, 4:cex-poincare-wirtinger-needs-connectedness.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "cor-poincare-wirtinger-on-convex-domains",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F5] omits the required hypothesis φ∘f∈L¹ from the supplied Jensen interface, restating the cited theorem under broader hypotheses than that dependency licenses.",
      "context_sha256": "66dede9777258749c1d1e41e71b651f9b3696fc4a79970ec011fb245b42b8150",
      "item_sha256": "b44fa3b20fd4ea4a85fa2fd7cd8a350ee19b47091ba4ae13d4927277f6de84d8",
      "at": "2026-10-06T01:18:21.922Z"
    },
    {
      "id": "rem-critical-sobolev-does-not-embed-in-linfinity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Missing hypothesis n≥2. For n=1 and Ω=(0,1), every W^{1,1} function has an absolutely continuous representative with ||u||∞≤||u||1+||u′||1. Thus the asserted failure of the L∞ embedding is false.",
      "context_sha256": "032d27ca7f503bc42198a51eaa4cece829f08a996c91af5152635536688b9423",
      "item_sha256": "33d66f45043863036476ad04775ffd708167e7c6f1c8dbeb1bd5b0c95398ba45",
      "at": "2026-10-06T01:18:22.178Z"
    },
    {
      "id": "lem-truncated-riesz-kernel-potential-bounded-on-lp",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 proves only completed-product measurability of F, whereas the cited Minkowski interface requires product measurability. It applies Minkowski without passing to a product-measurable representative or establishing the completed-product extension.",
      "context_sha256": "b5ff75c1286f31dd438b338946ac1e31d45cc6cd3361c0e48101c60613f2c5b4",
      "item_sha256": "95e56231c63135ef944bd718f5be7e0489f02e939224735c2dd2ca597ca1fe6b",
      "at": "2026-10-06T01:17:23.241Z"
    },
    {
      "id": "thm-critical-sobolev-embedding-into-every-finite-lq",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 drops the source exponent p from the constant, asserting C(n,r,Ω). The supplied dependency gives C(n,p,r,Ω) and does not license this uniform-in-p restatement; choosing p as a function of q only resolves this in step 1.2.",
      "context_sha256": "c52a9db71777891caa119061a0085cfe5258a2b19dcafb4265b30f88aa0931ee",
      "item_sha256": "dcda489858d2af530e0e199d90908e0045c60e3f22a5cc3c5732ba2f75f362e6",
      "at": "2026-10-06T01:18:33.470Z"
    },
    {
      "id": "thm-morrey-inequality-for-p-greater-than-n",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 inaccurately restates the dependency interface: it asserts that Countable Choice is a hypothesis of the cited Hölder theorem, but the supplied Hölder interface has no such hypothesis.",
      "context_sha256": "5cf9c1f984746cc82a2e1af9d665e33a9781a885a915b7397bdeb172c1f8542a",
      "item_sha256": "8be8bbe6ee3ded22926422557da84d5155d071b9f558fa84c87940058646db34",
      "at": "2026-10-06T01:18:20.610Z"
    },
    {
      "id": "thm-sobolev-poincare-on-bounded-connected-extension-domains",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 restates the embedding with C_E(n,q,Ω), omitting dependence on p. The supplied interface gives only C(n,p,q,Ω); the stronger restatement for the full range p≤q≤p* is not licensed.",
      "context_sha256": "082cfb8c089469399bbf4febab4c32109e2bd48fb30feba881fc9e9eb7b3314a",
      "item_sha256": "9594147b07bb020e36f01475f8f0f4f9dbaadd11d70acf9c142868dccf799a62",
      "at": "2026-10-06T01:18:21.537Z"
    },
    {
      "id": "cex-poincare-wirtinger-needs-connectedness",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 asserts the John-domain inequality under the item's Countable Choice hypothesis, but the cited theorem requires full Axiom of Choice. That positive contrast needs the stronger hypothesis; the two-ball counterexample itself is sound.",
      "context_sha256": "3610865b65040b187c6d5adf1761e0acf8184fd8b0f67aa8c6dbf4e1815e4770",
      "item_sha256": "347beace42eca6dcce1346e3bba88161eb1ff6f967b5ffb9acda9cf68ff40f54",
      "at": "2026-10-06T01:18:22.954Z"
    }
  ]
