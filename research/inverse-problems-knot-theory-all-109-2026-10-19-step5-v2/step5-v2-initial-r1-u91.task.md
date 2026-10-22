# Step 5 adjudicate: initial, round 1, unit 91

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-91-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u91.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"inverse-problems-knot-theory-all-109-2026-10-19",phase:"initial",round:1,unit:"91",input_sha256:"c872603b0f7c95c42125928ec1ced19e672caec5508e4ce625685b74e981d23d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run inverse-problems-knot-theory-all-109-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-odd-cube-oriented-face-parity-and-sign-existence, 2:def-generic-movie-of-an-oriented-knot-cobordism, 2:lem-marked-knot-concordances-admit-finite-movies-away-from-the-mark, 2:lem-pointed-odd-barnatan-tensor-product-over-marked-rings, 4:lem-lee-filtered-spectral-sequence-and-two-orientation-classes, 8:def-rasmussen-s-invariant, 8:lem-odd-khovanov-and-barnatan-localization-foundations, 9:cor-rasmussen-s-for-positive-knots, 9:lem-lee-cobordism-filtration-genus-bound, 9:thm-leo-local-equivalence-group-and-concordance-map, 13:cex-knot-kt-38-boundary-case.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-odd-cube-oriented-face-parity-and-sign-existence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The hypotheses do not choose a marked point or require a marked component, so the final claim about comparison commuting with the marked right action is undefined for allowed cubes. The dependency interface supplies that action only for a marked link diagram.",
      "context_sha256": "7fd5a476e39144815bb3c221eb458b64d4902fd6cfbd665f53bfb4f5467e2576",
      "item_sha256": "513526699e1af0c6e42a0a03cbb990f8b71d2d40d03aad177279b289643b89bd",
      "at": "2026-10-21T16:00:55.699Z"
    },
    {
      "id": "def-generic-movie-of-an-oriented-knot-cobordism",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Generic movie events also include Reidemeister moves, whose levels have regular surface height. The definition says every exceptional level has a Morse critical point (birth, death, or saddle), incorrectly conflating projection events with surface critical points.",
      "context_sha256": "70794ce36c2ce7a3b02b9dbadcab1fddbcfb90e13a86f8717cfc9cc28b31ab58",
      "item_sha256": "44774e3678f8eba3aa9c1aba73f40e407f3603b33687d7270a9baff01bafb62c",
      "at": "2026-10-21T16:00:40.737Z"
    },
    {
      "id": "lem-marked-knot-concordances-admit-finite-movies-away-from-the-mark",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 only guarantees genericity for closed-link isotopies fixed near the time ends; it does not supply the relative finite-jet result claimed in F4 or needed in 6.1 with the exterior arc and end collars fixed. The protected-mark movie step is unsupported.",
      "context_sha256": "efccc544c31f05e60d17a2f3520224b7e7290ecc68ebc5038dd819c1427b3ca3",
      "item_sha256": "51c7ac229d5c451f369f3875467d4974bbd8cf92cb3dc8918971925c804e5298",
      "at": "2026-10-21T16:01:34.558Z"
    },
    {
      "id": "lem-pointed-odd-barnatan-tensor-product-over-marked-rings",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Sign comparison is overclaimed: the definition permits any square-compatible signs, while F2 compares only assignments with the same full face products. Square compatibility imposes no condition on zero-composite faces, so the proof cannot transport its map to the stated complexe",
      "context_sha256": "078d9147014a829272e1029f358dbf8cfc0fff2c886e85ac1d69587b92e9b4b0",
      "item_sha256": "21f0e7eaf2c6f233112f25389382bf24023424570f4362c4af636b261ff31706",
      "at": "2026-10-21T16:01:31.726Z"
    },
    {
      "id": "lem-lee-filtered-spectral-sequence-and-two-orientation-classes",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 misstates its cited dependency: the cube lemma proves only that the integral differential squares to zero; it does not identify that differential as Lee’s degree-preserving part. Step 1.1 shows this separately, but the dependency restatement is inaccurate.",
      "context_sha256": "852452a50c05a11b3afd2d523e1fde05f6411b07ff702b574dad8f1d8c907233",
      "item_sha256": "18475a293c80401a691bef177c50db78732661c63e2b9ae75f6d84ee2538c5ee",
      "at": "2026-10-21T16:01:58.690Z"
    },
    {
      "id": "def-rasmussen-s-invariant",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited lemma says the orientation classes have equal least filtration level and their sum/difference lie in distinct quantum-degree mod-4 summands; it does not establish a filtration-level difference of exactly 2. F3 and the key equality are unsupported.",
      "context_sha256": "3222ccd05e9a8e88a5cb1215dff52090cf824d60f400b80d06c56cf8339e2c97",
      "item_sha256": "ab33d1369457f043aeb20c4b2a1abcbf863da9c40f1e65ae0546d2c7e44ae79b",
      "at": "2026-10-21T16:01:23.402Z"
    },
    {
      "id": "lem-odd-khovanov-and-barnatan-localization-foundations",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.5 attributes a pole-movement and planar endpoint comparison to F8, but its supplied interface only compares endpoints already sharing the standard long marked arc and coordinates. The proof therefore does not establish the common endpoints required in steps 2.1 and 4.1.",
      "context_sha256": "d113f82f37cdc7adb10c55c029c56eab82a99d183372c31f0229be0167bdb3cf",
      "item_sha256": "f81ac10cf02a076729f608035b0b20441cb8b972466c5ebb83d397fbf846acf3",
      "at": "2026-10-21T16:02:06.809Z"
    },
    {
      "id": "cor-rasmussen-s-for-positive-knots",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A2's claim that positive-crossing oriented smoothings are 0-resolutions is absent from both cited interfaces: the sign definition never mentions smoothings, and the cube only names A/B smoothings. Step 1.1's degree-0 and state-shift calculation is therefore unsupported.",
      "context_sha256": "fdc9efd55c3ca6b821442af2fe5ab69a5b3bcd6991d5fab64ba1754b8fc297ed",
      "item_sha256": "4a581aa938d00a5e728ac9466f647ea117f4e7e96d519a0dc7e4786c2e384a7d",
      "at": "2026-10-21T16:01:32.848Z"
    },
    {
      "id": "lem-lee-cobordism-filtration-genus-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.2 needs Reidemeister equivalences from [F3] to intertwine marked-point X actions. [F3] supplies only filtered homotopy equivalences, and no equivariance is established here. Without it, the proof does not show orientation classes map nontrivially, so Step 2.1's isomorphism",
      "context_sha256": "4759836291a9679247fa33d845bef6335847bf5b93c0d9b48a1c3b2cf367c14a",
      "item_sha256": "8d39756ac69c8e30e282be7514864efae4c9e821675fa7c5e29ec12c0be6198a",
      "at": "2026-10-21T16:02:11.599Z"
    },
    {
      "id": "thm-leo-local-equivalence-group-and-concordance-map",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 overstates its dependency: the foundations interface gives odd-complex diagram invariance, per-diagram mod-2 comparison, localization and tensor products, but not integral marked movie maps, compatible paired comparisons, or localized concordance equivalence. Step 4.1 needs pa",
      "context_sha256": "3ff75541f20eb0f75b506e67c297f6dccb679512e0d4d097f56620a043c2471c",
      "item_sha256": "8da51abe9f1565b46bb280a395f9fb239ce71a4c4172dcd503502a1c11556097",
      "at": "2026-10-21T16:01:58.311Z"
    },
    {
      "id": "cex-knot-kt-38-boundary-case",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The axiom_use says ACω is inherited from both the s and τ definitions, but the supplied τ interface defines its filtered threshold without ACω; only the s definition assumes it. This is an inaccurate dependency restatement.",
      "context_sha256": "458901c6d3ea6c7b96c47fe8e3c85dcfdfec317490c122637e5a8ea81c797528",
      "item_sha256": "b6cb1216b0326252912f91017cecf930bd7099a26002815a69c9af499196a07c",
      "at": "2026-10-21T16:02:42.540Z"
    }
  ]
