# Step 5 adjudicate: initial, round 1, unit 7

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-batch-7-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u7.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-td-qft-rpm-62-2026-10-14",phase:"initial",round:1,unit:"7",input_sha256:"c7d8a222abea8b2aeaf8ca5059b6b3a3871cdaeeeed41debed66cfc1d833fd32",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-td-qft-rpm-62-2026-10-14 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 4:def-td-adiabatic-accessibility, 5:def-td-scaled-products-and-comparison, 6:post-td-accessibility-a1-a6, 8:post-td-thermal-join-axioms, 10:ex-td-positive-log-contact-witness, 14:pthm-td-entropy-under-product-comparison, 15:def-td-cross-type-reaction-network, 19:pthm-td-universal-mixing-entropy.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-td-adiabatic-accessibility",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition quantifies over P∈P_s, but the supplied process interface defines Q only on P_cl(s)⊆P_s. For records outside P_cl(s), Q[P] is undefined; restrict the witness to P_cl(s) or supply a broader heat-transfer map.",
      "context_sha256": "420a6d285d833bdbf82ea9629a5dbefaf127cfd26e439c60d2d317ab054bc9d7",
      "item_sha256": "96d96f07b26b2ed2f9b46dd68818f5bc1fe787e44dd18ad5e0ce24e092d9a5c7",
      "at": "2026-10-14T19:48:44.036Z"
    },
    {
      "id": "def-td-scaled-products-and-comparison",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: the definition treats every λ>0 as a represented scaled type and map, but post-td-bulk-additivity permits only model-designated tags and defines δλ on B_{c,λ}⊆D_c. It overstates the prerequisite’s scope.",
      "context_sha256": "8e4c817b9abb72a7303cf364d882215fbc0d1c9c4ed079f8a280de4d5916fdc7",
      "item_sha256": "941f5b2119c23618212d8345a8a2ed6f64a698daf65a20d44a5bfcfd2a72fc59",
      "at": "2026-10-14T19:49:38.690Z"
    },
    {
      "id": "post-td-accessibility-a1-a6",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A4 requires λA≺λB for every λ>0, but the supplied bulk-additivity interface defines scaling only on B_{c,λ}⊆D_c and may omit tags. A4 does not restrict A,B to those domains or adopt universal scale-map existence, so λA and λB may be undefined.",
      "context_sha256": "04fa180dda9aef20704c5931b7fb3d5e656009f057d12477ea8abc92421ff114",
      "item_sha256": "65210f122ab656ba920df65d8aa19f09565bade553ff085f6f9df63d44ad5587",
      "at": "2026-10-14T19:49:53.433Z"
    },
    {
      "id": "post-td-thermal-join-axioms",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "T2’s scaled-splitting clause is ill-typed: [[def-td-thermal-join]] keeps a tagged join with two work coordinates distinct from the single state x. Lieb–Yngvason §IV.A T2 asserts reversibility between that join state and the separated scaled pair, not between the pair and x. [Sour",
      "context_sha256": "8f8c5cc25c5ba6f8da4398ce550ecb26c5c560cb71657616488ff0f1e96a71e3",
      "item_sha256": "6985bb83deaa763eb5d0a5a7eed4b28a8898ba1550de3424718830bfa6927188",
      "at": "2026-10-14T19:50:01.864Z"
    },
    {
      "id": "ex-td-positive-log-contact-witness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "It declares A≺B for all equal-formal-mass pairs, but the supplied comparison interface permits cross-composition transitions only through a separately declared channel network. Equal formal mass need not mean equal composition, and no such channel is specified.",
      "context_sha256": "41fa5a158275bec5b325e6220a4582206443ab15156abe879948a4ff3fe19c73",
      "item_sha256": "1f4ad4186277c638c2266673c518b6c8afd0cf8e1da5ff20e494944016b7dabc",
      "at": "2026-10-14T19:51:00.549Z"
    },
    {
      "id": "pthm-td-entropy-under-product-comparison",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 inaccurately says [[pthm-td-contact-product-comparison]] constructs a composition-preserving coefficient map and type-weighted point-mass encoding. Its supplied interface gives pairwise calibrators and comparisons only; it does not license that claimed output.",
      "context_sha256": "11167607c3be19b4fd2b46b8f8a5f96bae879db45b26e6e6dde80672ead5c0cb",
      "item_sha256": "77c0fd94707d1e021e526602fbe8fcf68e70b30258a7be37e5a8e80ac370a4b7",
      "at": "2026-10-14T19:49:57.474Z"
    },
    {
      "id": "def-td-cross-type-reaction-network",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Core closed-channel records are said to match def-td-process-and-protocol, whose record is (I,x−,x+,z,κ,r). This definition always adds an outer-boundary field b and supplies no embedding identifying the records and admitted subsets.",
      "context_sha256": "91d17731daa94a44791650d2671d6a327f3d4c08ebd031083244b335da18c5a3",
      "item_sha256": "7cec5d821e2a28dbfa7ab865a37bba707dee50ec4cf4dec4c8f94dfcff8f0eda",
      "at": "2026-10-14T19:49:27.156Z"
    },
    {
      "id": "pthm-td-universal-mixing-entropy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1 applies F3 to every admitted transition, but F3 requires m(Γ)=m(Γ′). Neither the Statement nor the supplied network interface guarantees equal formal mass for every channel transition, so the claimed all-channel monotonicity does not follow.",
      "context_sha256": "7682962bed855d0064a764291fda15c2c2f6591595786d8486f8b71b56c06835",
      "item_sha256": "d98ae40087eea5ad45702cc2c0a0ed040d7126d535b35637dbd458a6bcdb5255",
      "at": "2026-10-14T19:49:52.830Z"
    }
  ]
