# Step 5 adjudicate: initial, round 1, unit 11

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-batch-11-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u11.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-44-special-representation-examples-28-six-step",phase:"initial",round:1,unit:"11",input_sha256:"a3c0decd85fdbe71b25b7ccd7e6264df187be55612edc2bcfbd9729c1e231624",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run frontier-44-special-representation-examples-28-six-step --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-removable-border-strip-and-height, 3:cor-no-removable-cycle-length-strip-forces-a-character-zero, 4:cor-hook-divisibility-defect-zero-vanishing-criterion.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-removable-border-strip-and-height",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The convention forbidding λ/ν when ν=λ contradicts the skew-diagram dependency, which explicitly permits λ/λ as the empty skew diagram. It may be excluded as a removable border strip, but not as skew-diagram notation.",
      "context_sha256": "30df7d47a191f604ca0a832665c14dfe57b8edd4b58ccd9a1fd83bc9983c59cf",
      "item_sha256": "e86bb3ee8520d61fb9f3d3a899987c881e7dee392ec9831fa3156d7cc6c2cb9c",
      "at": "2026-10-11T15:01:31.781Z"
    },
    {
      "id": "cor-no-removable-cycle-length-strip-forces-a-character-zero",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 and the Statement misstate the cycle-type interface, which defines the list of counts (c_1,...,c_n), not cycle lengths. The identity in S_3 has cycle type (3,0,0), containing an entry 3, but has no 3-cycle; the asserted equivalence fails.",
      "context_sha256": "7322c03024331d1f6fd376c8afc7406a4df411afa7d62c9a782f1d1b5d387df0",
      "item_sha256": "9bdeb846fe5dcf38e3104a6babe4c8ea07ac2cb6b5e4d26897c8969062e9a6a7",
      "at": "2026-10-11T15:01:56.133Z"
    },
    {
      "id": "cor-hook-divisibility-defect-zero-vanishing-criterion",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F4] incorrectly identifies removable border strips with hooks. For λ=(2,2), the 3-hook H(1,1) is not removable: its complement is {(2,2)}, not a Young diagram. The dependency supplies a correspondence, not equality.",
      "context_sha256": "14c60929a88d668861f1588caaf0d343ec7787df31c7a3d69d55ccd2094ff620",
      "item_sha256": "f0197ee30ca0900e0a4b2e7675babb1175632107a73a535da5f4ea638e81efb2",
      "at": "2026-10-11T15:01:38.314Z"
    }
  ]
