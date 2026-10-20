# Step 5 adjudicate: initial, round 1, unit 28

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-batch-28-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u28.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"machine-learning-all-101-2026-10-19",phase:"initial",round:1,unit:"28",input_sha256:"be31d8759cd439838c6ba1308b97ab1d68ec5727664112594898d2fa2bc53fee",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run machine-learning-all-101-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-laplace-distribution, 1:lem-dp-test-function-extension, 2:lem-laplace-product-density, 3:thm-basic-and-advanced-composition, 4:ex-add-remove-noisy-count.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-laplace-distribution",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Under standard measure support (the smallest closed full-measure set), μ_b has support [0,∞), since every neighborhood of 0 has positive mass; it is only concentrated on (0,∞). [Encyclopedia of Mathematics](https://encyclopediaofmath.org/wiki/Support_of_a_measure)",
      "context_sha256": "2cd344082025850581aa33192565b684e81be6a275d309f17176023ec4f38dc0",
      "item_sha256": "4fd1dedca34cc9ab17dfde317e08a577cc7da50886e8e0aeddd6586a6f21b165",
      "at": "2026-10-20T08:40:39.557Z"
    },
    {
      "id": "lem-dp-test-function-extension",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 misstates the cited DP definition: it gives an event inequality for neighboring database outputs K(D,·), K(D′,·), not arbitrary probability measures P,Q. The proof needs the statement’s given hypothesis instead.",
      "context_sha256": "18f67149fea81e80b5e9b2b721b74aded5820f3aac497ad8a3a4c9437b8ab7a8",
      "item_sha256": "83b39b0121e81e5045dcedbe0ddf58a274838b9423529f5da38fad7bbe056721",
      "at": "2026-10-20T08:41:12.056Z"
    },
    {
      "id": "lem-laplace-product-density",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F7 adds that the finite product law is specified by rectangular factorization, which is absent from the supplied independent-random-elements definition. The proof's independence claim can follow from the definition, but this dependency restatement is unsupported.",
      "context_sha256": "0e2b6733b4a28c7153ee56ab2d6d3ffb7556a35c2f22e5ec5e48fd9798826c3f",
      "item_sha256": "947bea7a091ba9800190bca8c10e346cfac90dad1cebe04df2f4e2cae47c4b23",
      "at": "2026-10-20T08:41:35.545Z"
    },
    {
      "id": "thm-basic-and-advanced-composition",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The advanced clause omits measurability of each round kernel in the prior transcript. The advanced dependency requires it; without it, its composition theorem does not apply and the full transcript law may not be defined.",
      "context_sha256": "557bd614384df41762e83366efbbad93daab7da5e5d1c643d0ddaed6e70f6a41",
      "item_sha256": "a7e87c132c4fb4847714963209909a19ca7ac4b5fb06b9709c6b3f62ce6e9032",
      "at": "2026-10-20T08:42:16.112Z"
    },
    {
      "id": "ex-add-remove-noisy-count",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 and `axiom_use` claim Countable Choice is inherited from the real Laplace law, but the dependency only states the axiom. The finite-dimensional noise and privacy theorem require no Countable Choice here; this is an inaccurate dependency restatement.",
      "context_sha256": "9e356d0091246391d07477e0449f884ece840a7ad22605fe88cbf86000700efe",
      "item_sha256": "001922131436faab05130cc8ec1cc61ae32249aa012bf544cc6bbfa7a0cdbc2c",
      "at": "2026-10-20T08:42:12.191Z"
    }
  ]
