# Step 7 adjudicate: initial, round 1, unit 3

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u3.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-40-geometry-braids-rep-27",phase:"initial",round:1,unit:"3",input_sha256:"2f03bb52479aaa390bb3dcd48c71478e0016d3408c93c2f9769a7db5ae31ba68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-40-geometry-braids-rep-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-a-system-of-imprimitivity-gives-a-representation-of-the-transformation-algebra, 1:lem-borel-cross-sections-for-closed-subgroups, 1:lem-pvm-multiplicity-model-over-a-standard-borel-space, 3:lem-a-transitive-quasi-invariant-borel-g-space-is-ergodic, 6:lem-the-stabilizer-action-on-an-imprimitivity-fiber-is-unitary, 8:thm-mackey-imprimitivity-theorem.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-a-system-of-imprimitivity-gives-a-representation-of-the-transformation-algebra",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 omits the cited strong-convergence theorem’s uniform bound on ||b_n||∞. For the diagonal PVM on ℓ²(N), b_n=n·1_{ {n} } tends pointwise to 0, but ||M_{b_n}ξ||=1 for ξ_n=1/n (n≥1). Thus F1 is false.",
      "context_sha256": "02b6f99d2615a71540866b73e32f6bde376ad5ea447ff3509eefeed6acb1aa8f",
      "item_sha256": "a8c10d86a966a6c90ef11ff3bcb32cfcc721d9748817e1744416634291acd36d",
      "at": "2026-10-05T19:27:40.637Z"
    },
    {
      "id": "lem-borel-cross-sections-for-closed-subgroups",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.2 starts at k_1, leaving k_0 and p_0 undefined. Steps 2.1–3.1 invoke sequence convergence and completeness, but the supplied interfaces explicitly require sequences on ℕ starting at 0 and require shifting one-based indexing.",
      "context_sha256": "ff420ed81ec94161df40a5a1afb1384e2f50444dfb568e56507a38499c1766a5",
      "item_sha256": "1fd48d428229a53b5fe29f3f9ce37a9158480320045eb8a5c7d277c4de0345b7",
      "at": "2026-10-05T19:27:50.937Z"
    },
    {
      "id": "lem-pvm-multiplicity-model-over-a-standard-borel-space",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F4] and step 3.1 require a model for the prescribed generator S=∫c dP. The supplied multiplicity theorem asserts existence for some generator, not every prescribed generator. Its fixed-generator uniqueness clause does not supply this missing existence result.",
      "context_sha256": "b6915274fe6a5c760b7c0783927446a5003c6033315e9566c3f8c1cff6cdd5a6",
      "item_sha256": "199ccab8f28e48a495ef0ac98c65fd7b97999cfec9e026aa345ba0f22668014d",
      "at": "2026-10-05T19:27:43.597Z"
    },
    {
      "id": "lem-a-transitive-quasi-invariant-borel-g-space-is-ergodic",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 inaccurately restates its cited dependency: the supplied Haar-lifts interface asserts neither completed-product Tonelli/Fubini nor the modular change-of-variables null preservation. Steps 2.1–3.1 rely on that unsupported attribution.",
      "context_sha256": "712d8277319eb6205286b6d2317b76bacfea99caaa172f3983d8bc6860c2338c",
      "item_sha256": "615166c42b9a97c490cc964877aa5fb78f86bebf2e7ff80ed60407f9170eaefd",
      "at": "2026-10-05T19:28:13.060Z"
    },
    {
      "id": "lem-the-stabilizer-action-on-an-imprimitivity-fiber-is-unitary",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 inaccurately restates the cocycle-fields dependency as supplying continuity in local measure. Its supplied interface gives no such conclusion, and the proof does not establish this essential hypothesis for applying Haar regularization in step 1.1.",
      "context_sha256": "4daabea7ec8dea3021a54b1431f683e8e6b05bcd74d039be4a35b2114ba25c0d",
      "item_sha256": "55d2e9923b5dd9881d681a74c10e8780e4edc056ff47446eb68441a7ec6a06d2",
      "at": "2026-10-05T19:27:55.429Z"
    },
    {
      "id": "thm-mackey-imprimitivity-theorem",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The converse quantifies over all strongly continuous σ without requiring K separable. Take G=H={e} and nonseparable K: induction returns K, which cannot support a system under the supplied definition requiring a separable Hilbert space.",
      "context_sha256": "37f0c0e90ee02b687f93edb3084f2ce356fdd3c9f4c63f65fae42e1996eaab21",
      "item_sha256": "767597920fe3937c171e5718d8926397dde445a01c7b80c9a6ba8024d57f89d5",
      "at": "2026-10-05T19:28:14.642Z"
    }
  ]
