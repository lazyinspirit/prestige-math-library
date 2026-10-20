# Step 5 adjudicate: initial, round 1, unit 99

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-batch-99-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u99.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"machine-learning-all-101-2026-10-19",phase:"initial",round:1,unit:"99",input_sha256:"be31d8759cd439838c6ba1308b97ab1d68ec5727664112594898d2fa2bc53fee",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run machine-learning-all-101-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:def-verifier-and-generation-protocol, 5:lem-finite-group-relative-update-termination-and-calls, 6:rem-reasoning-training-evidence-and-evaluation-targets, 6:ex-pass-at-one-oracle-pass-n-verifier-selected-accuracy.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-verifier-and-generation-protocol",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reordering the response list leaves its underlying set Y_q and the pmf πθ unchanged, so it does not change the response distribution. The claim that changing the protocol list changes that distribution is false.",
      "context_sha256": "82b7e1e3fced3580f0e308c59f0beb59690a37d4c645542bd28a57e8e68ea339",
      "item_sha256": "d392522cd5f68fe2e827514e027a83679addcdfae5559a3c1daf25d9b66183cb",
      "at": "2026-10-20T10:38:27.801Z"
    },
    {
      "id": "lem-finite-group-relative-update-termination-and-calls",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 misattributes reference-mass positivity to def-verifier-and-generation-protocol, whose interface only guarantees positive policy masses. The algorithm interface supplies reference positivity, but that does not make this dependency restatement accurate.",
      "context_sha256": "1937f07646800630e1031abaecb033b325df265e25f985f35ecfc084ea6338f6",
      "item_sha256": "493a19e34debe41c8464a8f378918664967745f66db1325b26fe6a925e9cb9e5",
      "at": "2026-10-20T10:43:39.628Z"
    },
    {
      "id": "rem-reasoning-training-evidence-and-evaluation-targets",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "If the verifier accepts no returned responses—a permitted case—the stated verifier-selected accuracy has denominator zero and is undefined. The remark gives no nonempty-acceptance condition or convention.",
      "context_sha256": "f147dac0734aa376fa032b80d02613bfa2990f4a52cfd68ce77da1c09dc216d0",
      "item_sha256": "575e2973d311d4312fe2840e1a86b712845d9b0bdc23f6e60070c9a43aaa87cf",
      "at": "2026-10-20T10:40:06.709Z"
    },
    {
      "id": "ex-pass-at-one-oracle-pass-n-verifier-selected-accuracy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 overstates its interface: the theorem gives the formula for rejection-search success only when A=C. Here A≠C, so F3 does not support Step 1.2’s oracle pass@2 claim; that step needs to derive the formula from independence [F8].",
      "context_sha256": "96197169094dfd438c80b1e3f18f9fb560f61ff2cc5cb79c6b8e14003b0307e9",
      "item_sha256": "d0bf9338d35675e28118214950fe4482773a97fbb1c78db4c78f4af49b3385b7",
      "at": "2026-10-20T10:39:25.101Z"
    }
  ]
