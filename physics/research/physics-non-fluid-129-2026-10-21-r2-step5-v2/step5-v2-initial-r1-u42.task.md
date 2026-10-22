# Step 5 adjudicate: initial, round 1, unit 42

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-batch-42-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-non-fluid-129-2026-10-21-r2-step5-v2/step5-v2-initial-r1-u42.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-non-fluid-129-2026-10-21-r2",phase:"initial",round:1,unit:"42",input_sha256:"eaf0a68d231b0a7d0d042df337974eaab597dfd3432daa3ad0aaeebd32fe188c",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-non-fluid-129-2026-10-21-r2 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:prop-gr-fx-connection-path-transport-exists, 0:thm-qftx-cw-fundamental-group-presentation, 1:def-gr-fx-connection-path-transport, 3:prop-gr-fx-s1-loop-noncontractible, 4:prop-gr-fx-small-loop-curvature, 4:ex-gr-fx14-1.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "prop-gr-fx-connection-path-transport-exists",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title claims transport along a piecewise-smooth path, but the statement assumes only arbitrary continuous matrix coefficients and defines no path or connection relating them; the proof establishes only a matrix IVP.",
      "context_sha256": "b7a1a7c6600ebd83e8caf169eee1e94adb2e2e0eda9398c2352ad474303d930a",
      "item_sha256": "4d2e411cbacfd717492902a6ec4c5819101a81eab7375cf3879c4da9cb97915f",
      "at": "2026-10-22T03:44:10.626Z"
    },
    {
      "id": "thm-qftx-cw-fundamental-group-presentation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 inaccurately restates the dependency: its interface defines π₁ as a set and only proposes multiplication; a separate theorem proves the group axioms. The audit requires local dependency restatements to match the supplied interface.",
      "context_sha256": "02562066786f3b689cf92f12dc19b84941585a2ebfc1e2779697e53869d01fed",
      "item_sha256": "ad85c4e40b0c1c75055fa06d2d3e34105e7491beca5dd0e83060f5dc61a7a4b6",
      "at": "2026-10-22T03:44:40.678Z"
    },
    {
      "id": "def-gr-fx-connection-path-transport",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The tetrad does not determine ω: the cited interface requires a chosen smooth affine connection ∇ on TM|U, but none is specified. Thus Aγ and the claimed transport are undefined.",
      "context_sha256": "49e8647b42129311a7aab6493bb43e71715729cc365fbbb62b5bd9800529e93f",
      "item_sha256": "fba2cda797e6e26065807a1de5a46e6a58e7ee6e160964e5050114307f11638f",
      "at": "2026-10-22T03:44:50.654Z"
    },
    {
      "id": "prop-gr-fx-s1-loop-noncontractible",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 defines only a candidate for dα and says a later lemma proves it is a form. The proof treats it as an intrinsic 2-form and applies Stokes without that prerequisite, so the closedness argument is unlicensed.",
      "context_sha256": "bbbaffd8b1caab31ba32a58c60083af71eb2b7293fecf74a16ee66bfd8541fa4",
      "item_sha256": "fc91c69e4a0b34fa24767d7d2b44a48026ac4a02f4738dc907b67d57a4d1c0f0",
      "at": "2026-10-22T03:44:48.238Z"
    },
    {
      "id": "prop-gr-fx-small-loop-curvature",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 overstates its interface: the dependency defines curvature for a smooth 4D tetrad connection (q=4), but F2 asserts the coordinate formula for arbitrary matrix connections. Step 3.1 invokes that broader claim for every q.",
      "context_sha256": "731cdab796762b3f24a0c57f04fbd38c08c3fa31cfb4e50a12a52567211ce83a",
      "item_sha256": "997b9df95f1094f8258e21d78d2795c5b7a610590ae4a940d20f2583babf9584",
      "at": "2026-10-22T03:44:49.800Z"
    },
    {
      "id": "ex-gr-fx14-1",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 concludes dα=0 from its values on a frame. The cited definition only supplies a candidate formula and says a later lemma proves it is a form; the proof neither cites nor establishes that tensoriality, so those frame values do not suffice.",
      "context_sha256": "2cd8d2bebbb1237205ac95b6d09b06738fea2f87af1b28105283b3eecb9f37d7",
      "item_sha256": "818a6501376e7589fab029a093c19585de32d843c768521d41a17f2826c20c03",
      "at": "2026-10-22T03:45:04.959Z"
    }
  ]
