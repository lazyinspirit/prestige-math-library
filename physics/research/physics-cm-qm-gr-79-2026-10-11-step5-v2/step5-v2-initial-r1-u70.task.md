# Step 5 adjudicate: initial, round 1, unit 70

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-70-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u70.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"70",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 4:def-gr-observer-energy-momentum-current, 5:lem-gr-observer-energy-momentum-decomposition, 8:lem-gr-congruence-acceleration-and-expansion-properties, 8:cex-gr-conservation-does-not-imply-nonnegative-measured-energy-density, 15:rem-gr-no-universal-global-energy, 16:rem-gr-local-and-global-energy-scope-and-deferrals.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-gr-observer-energy-momentum-current",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal dependency cycle: this definition lists the decomposition lemma in deps/justified_by, while that lemma defines its μ, J, Φ, S, and h as those of this definition. The lemma cannot justify the definition that it already depends on.",
      "context_sha256": "f8a7431d0062f954623a70c8fb086bbb535663aec133a78da97fef7d7715f2da",
      "item_sha256": "f4407198be09ef7f5f7ac3db54ecf0e60129952d90dc72fa40da404db5bd1f1d",
      "at": "2026-10-12T20:23:21.348Z"
    },
    {
      "id": "lem-gr-observer-energy-momentum-decomposition",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Part (d) equates the covariant restriction of T_p with S_p, but S is defined by contravariant components S^{ab}. Their types differ; it must lower S with g or compare raised T with S.",
      "context_sha256": "2f31855c16eeaf94984658b3cb940e25b08b493a68ac3805904bf27b463dd377",
      "item_sha256": "7ed0ee9bffbdcd497a07a506411b827fe09755e25ae9c89b6751bc9374bc6118",
      "at": "2026-10-12T20:23:46.777Z"
    },
    {
      "id": "lem-gr-congruence-acceleration-and-expansion-properties",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Part (a) identifies h as the projection field from def-gr-observer-energy-momentum-current, whose interface requires a smooth symmetric tensor T; none is supplied. Use the projection h_n from def-gr-observer-and-rest-space instead.",
      "context_sha256": "1ec9871265cec42a9f13730cc2b28fc514b1ac841bf0ec0f9e41981d7e2320cf",
      "item_sha256": "5d5abb862b791ac60b21da0be3f6c6ce1ab5c66b1f8679839f3f97821b59ca5f",
      "at": "2026-10-12T20:24:20.560Z"
    },
    {
      "id": "cex-gr-conservation-does-not-imply-nonnegative-measured-energy-density",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The example omits the time-orientation field N required by the cited Lorentzian and observer-congruence definitions. “Chart orientation” does not establish that ∂₀ is future-directed, so [L4] and the claimed observer counterexample are not licensed.",
      "context_sha256": "e439452f89e794ce95ed082f4c96fe015f2a82604b896b2acb1e26687b3a2e4c",
      "item_sha256": "a92f75217a13a0c6e8b8f90b7dc3ba5e8daa1690b46c61e687c52f37d7041153",
      "at": "2026-10-12T20:24:31.041Z"
    },
    {
      "id": "rem-gr-no-universal-global-energy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The note says the cited normal-coordinate theorem and scope remark record that curvature cannot be removed by the adapted chart. The supplied theorem makes no curvature or second-derivative assertion, and the remark contract excludes curvature claims; that restatement is unsuppor",
      "context_sha256": "c85a9028dceb5cd5660e4dc95ce322e587b861630cc813f807d4b19f5c906b60",
      "item_sha256": "ac39c18f46da099f98d7eaa66f68b1b33751d8ed350604d00c7f06f6088095d7",
      "at": "2026-10-12T20:24:31.025Z"
    },
    {
      "id": "rem-gr-local-and-global-energy-scope-and-deferrals",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The claim that noncompact regions are outside the branch overstates the dependencies: they allow smooth fields on open domains, and the spacetime need not be compact. Finite-chain restrictions limit the chains, not the spacetime domain.",
      "context_sha256": "0fb5f5f2e943421c6a42db36dc2f2903d0a471cb35d86e49375a210ba58c88e5",
      "item_sha256": "f5a2d1eec73a92b136e81d801f27612d23bd2dec8d36bce8f2ca59cffe77d29f",
      "at": "2026-10-12T20:25:02.535Z"
    }
  ]
