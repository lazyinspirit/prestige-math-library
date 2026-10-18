# Step 5 adjudicate: initial, round 1, unit 63

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-63-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u63.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"63",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-intersection-volume-conservative-remapping, 1:lem-curved-p1-interpolation-scaling, 2:lem-curved-boundary-lift-residual, 2:lem-isoparametric-cofactor-normal-perturbation, 2:ex-conservative-transfer-between-moving-curved-meshes, 2:ex-isoparametric-unit-disk-mesh, 3:cex-delaunay-tetrahedral-sliver, 3:ex-parabolic-curved-domain-linear-geometry-approximation.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-intersection-volume-conservative-remapping",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited interface defines measurable sets and a restricted set function, but explicitly does not establish closure under intersections or that the function is a measure. Thus |T_j∩S_i| is not licensed here; add the measure theorem dependency or establish well-definedness.",
      "context_sha256": "e37e42517fdd8834b7741ed1f69d2b2ed5c98e7ef6a443d595779ac5e6c37a55",
      "item_sha256": "87b849eddecec6b5895dfaf8ae76c6c447b12205e9d1b8882b3057a5ad07bb73",
      "at": "2026-10-18T03:31:21.016Z"
    },
    {
      "id": "lem-curved-p1-interpolation-scaling",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 says AC is used only through F1’s automatic nodal-boundedness clause, but step 1 directly invokes F5, whose interface explicitly assumes AC to supply the continuous representative and vertex values.",
      "context_sha256": "bbe146aacc105c8eacbe6a08970e7235a9adb5f89b7331a010bff906996fa724",
      "item_sha256": "93adb50038233682da748fd9c4697717bcdf4588bb70feb580e31eab925b6518",
      "at": "2026-10-18T03:31:55.893Z"
    },
    {
      "id": "lem-curved-boundary-lift-residual",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 says Countable Choice is assumed exactly for F4, but the supplied interface for F6, the Gauss–Green lemma used in step 1.1, also explicitly assumes Countable Choice.",
      "context_sha256": "f23bf21f09145a2ed305c3e99a2a7716d5ed72a8b7eee95760bc057225715cbb",
      "item_sha256": "33297b1d56de7c3f47a6a7f408cac9e52e6023dd39f77364277f1841c8a3323f",
      "at": "2026-10-18T03:31:43.039Z"
    },
    {
      "id": "lem-isoparametric-cofactor-normal-perturbation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal mismatch: for a non-unit facet parametrization, the Gram factor is not ||cof(A)n̂||. On the unit triangle edge f(t)=(1−t,t), A=I gives Gram factor √2 but JΓ=1. Step 1.2 proves equality only for an orthonormal tangent frame.",
      "context_sha256": "b8e3b41a680a4204bdf2b0a5df4ec712526a896fbaee1e1cfca6ac023230f8d0",
      "item_sha256": "852193fbcf0dd3643a874d10a828d692be22bbe258c80431f408f165689d1535",
      "at": "2026-10-18T03:31:41.790Z"
    },
    {
      "id": "ex-conservative-transfer-between-moving-curved-meshes",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 says Countable Choice is assumed exactly for [F4], but [F3] also explicitly requires Countable Choice. The dependency restatement is inaccurate, even though the example assumes CC.",
      "context_sha256": "f1a90cca29a7d061df386b4e5dbb104f39f865535e4fb651339df22686947944",
      "item_sha256": "7181cc6498316830334b5db5708564fcc4114b924c9e21512761b8f3abc89c03",
      "at": "2026-10-18T03:31:48.452Z"
    },
    {
      "id": "ex-isoparametric-unit-disk-mesh",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 also assumes Countable Choice, but its restatement omits that hypothesis while A1 says Countable Choice is assumed exactly for F3. This misstates a cited dependency interface.",
      "context_sha256": "5e9b9580c7b0e47333506e32b48eed38408915cc2a47681fe9676f2de0f7c729",
      "item_sha256": "5b3be95f3c1a98b7d58ced21f3bdca9a80a0b5dbc8e0e4c39c95a62063951642",
      "at": "2026-10-18T03:32:13.790Z"
    },
    {
      "id": "cex-delaunay-tetrahedral-sliver",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 inaccurately attributes a dyadic-coordinate input condition to [F1]; the supplied interface states no such condition.",
      "context_sha256": "2aa6f65a7f3fb3e6c515b31d41d13b9910da138b95c9480e283821993081d6c0",
      "item_sha256": "ed8050d5dd12a68ae674940e5449ae43ec1f1f028e4d62823318026c35de226e",
      "at": "2026-10-18T03:31:33.736Z"
    },
    {
      "id": "ex-parabolic-curved-domain-linear-geometry-approximation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The geometry-approximation definition requires boundary-trace compatibility. The example states the error and Jacobian bounds but never states or proves that compatibility, so applying the tensor-defect lemma to these maps is unsupported.",
      "context_sha256": "d2e9ea94ef1429f5b9d445abfa8fefc699033db017cf7b43afd5354c6b10a3bd",
      "item_sha256": "1cf011894d658b73903214d542939035b0fbc256b0b0f880a62198e5335fae48",
      "at": "2026-10-18T03:31:52.335Z"
    }
  ]
