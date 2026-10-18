# Step 5 adjudicate: initial, round 1, unit 56

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-56-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u56.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"56",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-supg-general-convection-diffusion-reaction-model, 0:def-supg-one-dimensional-convection-diffusion-model, 0:def-supg-pspg-grad-div-stokes-forms, 1:lem-supg-one-dimensional-l2-interpolation-estimate, 3:ex-supg-convection-boundary-layer-coarse-mesh, 3:ex-supg-overlarge-stabilization-smears-solution.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-supg-general-convection-diffusion-reaction-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The dependency defines shape regularity for the whole mesh family with one uniform bound. The item only requires each individual T_h to be shape-regular, allowing those bounds to grow with h; this misstates the mesh hypothesis.",
      "context_sha256": "3c6ea5501d516a90b4703073758c6b14f87ef71426a7300c1e40e9a720390f35",
      "item_sha256": "be20acd9cc4c21ab2eaf3c777070c263407038aee1f465ac41b8e45d08a08aab",
      "at": "2026-10-18T03:28:47.288Z"
    },
    {
      "id": "def-supg-one-dimensional-convection-diffusion-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For nonzero endpoint data, S_h(g0,g1) is not a vector space: addition and scalar multiplication generally violate the endpoint conditions. Define it as a finite-dimensional affine space; reserve vector-space terminology for V_h.",
      "context_sha256": "34e9b964a75708b5dfc49f50cf1caa3d4f9034f3d068df7ca1c0bebbf780e156",
      "item_sha256": "b8fe2ad5c4009ffa9a9bac4fa47e4a992cbc29c8d784dd2a2ecb5ea8e08a6ae3",
      "at": "2026-10-18T03:28:27.363Z"
    },
    {
      "id": "def-supg-pspg-grad-div-stokes-forms",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The hypotheses do not ensure the forms are well-defined: Ω need not be bounded, and V_h need not lie in L². For Ω=ℝ with one cell and V_h containing a constant, σ=1 makes (σu_h,v_h)_Ω infinite. Add domain or integrability assumptions.",
      "context_sha256": "d7e3e1b105ad3e6bd608df08b10511bd3f23ee385834997659ed7a4c4f47902c",
      "item_sha256": "792eff86a52898704e5d2c7018c980c86025fe510112a9b7bffd70cecd070cd3",
      "at": "2026-10-18T03:28:35.089Z"
    },
    {
      "id": "lem-supg-one-dimensional-l2-interpolation-estimate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates its dependency: the interface defines P1 functions only on a fixed uniform mesh and never defines I_hu. It does not license the stated interpolation property for the arbitrary partition in the lemma.",
      "context_sha256": "2e373bd0e307dfdec6022ab5bd005879281c9f3ad4a1aa367787d6c10c5bc061",
      "item_sha256": "ed59d86a8222c7879e4c82a9bdba910bd5eac36d57f7b704ab10074bd035a48a",
      "at": "2026-10-18T03:28:41.717Z"
    },
    {
      "id": "ex-supg-convection-boundary-layer-coarse-mesh",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 misstates its cited lemma: the supplied lemma gives bounds, not the formula for τ or Pe. Step 2 uses that formula; it is available from the residual-form definition and model instead, so the dependency restatement is inaccurate.",
      "context_sha256": "2becfadcd148802fa05100029a5ec04e8b6645b983eea641c60bc4f4ac963b1f",
      "item_sha256": "81395113d1fe890fcc0353f2cd8c8a12de70760753c41ed57b1995fb71a261c9",
      "at": "2026-10-18T03:28:40.827Z"
    },
    {
      "id": "ex-supg-overlarge-stabilization-smears-solution",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title says “one-cell solution,” but the example uses a two-cell mesh with one interior degree of freedom. That misdescribes the result’s setting.",
      "context_sha256": "efca2bf25f1ff42531e6037d4a4e83c3730aa6f21a4b61172f7fc48325649453",
      "item_sha256": "29e0968651873f402a20ff32e98e6b78cf550b2404d0516dc03e5a27f68497db",
      "at": "2026-10-18T03:28:48.059Z"
    }
  ]
