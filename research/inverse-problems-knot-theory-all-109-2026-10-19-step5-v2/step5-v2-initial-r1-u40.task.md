# Step 5 adjudicate: initial, round 1, unit 40

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-40-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u40.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"inverse-problems-knot-theory-all-109-2026-10-19",phase:"initial",round:1,unit:"40",input_sha256:"c872603b0f7c95c42125928ec1ced19e672caec5508e4ce625685b74e981d23d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run inverse-problems-knot-theory-all-109-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-ip-smooth-whitney-extension-on-compact-sets, 3:def-ip-hyperbolic-dirichlet-to-neumann-map, 4:lem-ip-simple-geometry-global-eikonal-geometric-optics, 4:ex-ip-40-ray-limit-error-accounting, 5:thm-ip-wave-data-determine-light-ray-integrals, 5:ex-ip-40-finite-time-invisible-perturbation, 7:ex-ip-40-simple-geometry-adequate-observation-time.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-ip-smooth-whitney-extension-on-compact-sets",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof relies on an unsupported dependency restatement: the supplied finite-order theorem promises a choice-free C^r extension, but does not provide the fixed dyadic cube partition, partition derivative bounds, or lexicographic nearest-point formula used in steps 1.1–3.1.",
      "context_sha256": "2f67e010f12eff717b7bf7f7613debd3343df2a29d4b4e48562964ecfc0fdc8a",
      "item_sha256": "f7beea9238e54e77ce5c56b19dce2e444401106fd06078823e2a90bdc08e0654",
      "at": "2026-10-21T15:18:18.407Z"
    },
    {
      "id": "def-ip-hyperbolic-dirichlet-to-neumann-map",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The well-definedness argument claims the energy theorem gives a C² solution after lifting, but its interface guarantees only an energy solution and says lifting reduces the problem to that assertion. It does not establish the claimed classical regularity.",
      "context_sha256": "6e42b90e28d9ea28b2035aca49a1bd49c4a86ef87aa21bfa1a123f66ba0548a5",
      "item_sha256": "3db4ac73b546cd34a7bd1edf2f6449b26d94a1a03313a256fbfce7a055047302",
      "at": "2026-10-21T14:44:05.092Z"
    },
    {
      "id": "lem-ip-simple-geometry-global-eikonal-geometric-optics",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F2] is misstated: the cited wave theorem guarantees energy solutions and an energy estimate, but no smooth-classical regularity. Step 4.1 relies on that nonexistent “regularity part” to make the corrected solutions smooth.",
      "context_sha256": "003b9bf34d88d4c5537d8a364b6aac2414c9b9e8d2dd54816f56ffde29ab3d78",
      "item_sha256": "16518a8e37019c6d7593c8d8cfb9b116913848377ff01cada1b49b6d1b799aa4",
      "at": "2026-10-21T14:43:08.520Z"
    },
    {
      "id": "ex-ip-40-ray-limit-error-accounting",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The wave application invokes the cited energy theorem without its hypotheses: M need not be connected or have a nonempty smooth boundary, and no operator of the theorem’s form u_tt−Δ_g+q(x), with real time-independent q, is specified. The correction estimate is therefore unsuppor",
      "context_sha256": "19f51b1ceebe7310c3f6de7b924706a2bfa1e9080690eb1b38d9c7afa2c99bab",
      "item_sha256": "b290684212176476b349d01947bb13eff4b45c7bcf81ecde999b4a4c99f3cf29",
      "at": "2026-10-21T14:43:25.305Z"
    },
    {
      "id": "thm-ip-wave-data-determine-light-ray-integrals",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 gives convergence only against compactly supported spacetime tests. Since q1−q2 is constant in time, the proof needs control near t=0,T to pass from a cutoff test to the full identity. F2 supplies neither the claimed closed-cylinder convergence nor the needed packet support.",
      "context_sha256": "36612ea4d81fa3f3f2e727f6a3f10a757b7e8ec14b5a3073b183b6f72fabf7f2",
      "item_sha256": "7df66ff3c3861f88ba09bbca550a12b97ae395a405974bccaa9fdb1ee62f5ef5",
      "at": "2026-10-21T14:43:15.999Z"
    },
    {
      "id": "ex-ip-40-finite-time-invisible-perturbation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement omits classical solvability for every h, but the DN-map definition assumes it and the cited energy theorem only supplies energy solutions. The proof therefore uses maps whose existence in the stated C² class is not established under the item’s hypotheses.",
      "context_sha256": "bc4b4c0f4664cd39c55160eb676f7bc806980e4ed46583d33df301ed8027c9e7",
      "item_sha256": "117ae6dda43e94d32e074bb7adf0281c77fe76f8ea3290f52480e8fe65cf4279",
      "at": "2026-10-21T14:45:25.265Z"
    },
    {
      "id": "ex-ip-40-simple-geometry-adequate-observation-time",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 adds vanishing light-ray integrals as a premise, absent from the supplied corollary interface. Step 2.1 says equal DN maps satisfy F1 without establishing those integrals, so the stated inference is unsupported.",
      "context_sha256": "cabb66eb36354449f809970348426aeb99a87bba0c40301944c3cd9b8529a66f",
      "item_sha256": "3818beeb0bfac6d6d1c3777b01e240f741031615d36db489e05aa55a0f6ef826",
      "at": "2026-10-21T14:43:04.820Z"
    }
  ]
