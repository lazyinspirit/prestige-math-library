# Step 5 adjudicate: initial, round 1, unit 55

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-55-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u55.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"non-ml-math-remaining-81-2026-10-18",phase:"initial",round:1,unit:"55",input_sha256:"5a7686cf6af281fffc281470b9fd4d1b4497cd3e88649ffa4676dd5e748ac1b1",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run non-ml-math-remaining-81-2026-10-18 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-general-linear-quotient-stacks-are-algebraic, 1:thm-normalized-rational-vanishing-cycles-have-coherent-operations, 2:def-intrinsic-quotient-stack-borel-moore-grading, 2:lem-quiver-exact-sequence-correspondence-is-smooth-and-proper, 3:lem-quiver-parabolic-levi-borel-model-comparisons, 3:ex-jordan-quiver-extension-correspondence.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-general-linear-quotient-stacks-are-algebraic",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 omits a required condition: [F2] requires [X/G] to be a stack in groupoids before its diagonal and atlas conditions imply algebraicity. The proof never establishes fppf descent for the torsor-with-equivariant-map construction.",
      "context_sha256": "a12fd53cdbca94dc656c4a75862ca76459abfc3a97cc900c9c92a1ff36d213ad",
      "item_sha256": "3f2c092c4e3289650d0bbb92da47ac3d60f943e591ae61b09eb53dab5ecaf4ac",
      "at": "2026-10-18T04:38:24.764Z"
    },
    {
      "id": "thm-normalized-rational-vanishing-cycles-have-coherent-operations",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F8 only asserts that the cover-small inclusion is a chain homotopy equivalence. It does not supply the subspace-preserving retraction and homotopy claimed in Facts F8 and used in 3.2 to contract J. The relative open-pair comparison needed for the Thom–Sebastiani proof is therefor",
      "context_sha256": "09652fce096f32483a8172866e1846a253297ed319a7fa3dceeed05f818d50e3",
      "item_sha256": "d6d9446a28312a20c2a4cc1951da7bd22a3fd94cc943e7924bc3b024eda0c7be",
      "at": "2026-10-18T04:40:31.587Z"
    },
    {
      "id": "def-intrinsic-quotient-stack-borel-moore-grading",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Circular justification: this definition lists lem-quiver-parabolic-levi-borel-model-comparisons as establishing its presentation comparisons, while that lemma itself invokes this definition’s intrinsic grading to prove a comparison. Neither can ground the other.",
      "context_sha256": "0799ff04043aed76a0df9764f60491e3b61ad159dd3553dde270c71a51a7b18b",
      "item_sha256": "53e8ae96be6123eb27ed2c549d54cee3464f8a2e3b907bbebd11d5edbada2d73",
      "at": "2026-10-18T04:38:08.461Z"
    },
    {
      "id": "lem-quiver-exact-sequence-correspondence-is-smooth-and-proper",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 overstates its dependencies: the Grassmannian item only defines a set of subspaces, and the flag item states a result for the full flag variety, not the scheme structure or closed Plücker embedding of each Gr(a,V). Step 1.2 relies on the missing embedding to prove p proper.",
      "context_sha256": "e3750d7b921aa39d2e125205804ab116f59ca5ee585bd0e8faf3bf04452e8500",
      "item_sha256": "0505a4c2f0fae6c595ec59a64173e8fa1d0f87d25e11c910c7abf828c2959006",
      "at": "2026-10-18T04:38:35.188Z"
    },
    {
      "id": "lem-quiver-parabolic-levi-borel-model-comparisons",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates its suppliers: the exact-sequence lemma covers a two-block correspondence and states smoothness/properness; the representation definition gives only two-block matrices. Neither supplied interface provides arbitrary ordered-flag pivot charts or the claimed finite-typ",
      "context_sha256": "a45327fbbc6a229fb5f7c2b2b0e2a390f027593bb2ca4ca6a3666e3738fb89ef",
      "item_sha256": "a8e0175659a66b9129f1e065f898ddfafe535236c7906bb63d6f37ed2366699f",
      "at": "2026-10-18T04:39:02.740Z"
    },
    {
      "id": "ex-jordan-quiver-extension-correspondence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[A1] says AC is used only by [F2]'s properness supplier, but [F3] explicitly assumes AC and is cited to establish that the line variety is projective. This misstates a cited dependency's hypothesis.",
      "context_sha256": "5cc5908fc2752eeb3d9b6fceea3dad379ac42717b445501809b51d79b0a435fa",
      "item_sha256": "831b97f09fa1acc76c84c7a2709da64c0f061a6c2a54f61848f16085761a7d42",
      "at": "2026-10-18T04:38:37.694Z"
    }
  ]
