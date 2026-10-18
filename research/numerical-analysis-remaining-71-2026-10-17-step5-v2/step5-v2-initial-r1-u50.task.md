# Step 5 adjudicate: initial, round 1, unit 50

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-50-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u50.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"50",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-pe26-scalar-substructuring-model, 3:thm-pe26-harmonic-extension-minimizes-energy, 4:def-pe26-scaled-averaging-and-bddc-preconditioner, 4:lem-pe26-discrete-trace-schur-equivalence, 5:def-pe26-feti-dp-dual-system-and-preconditioner, 6:lem-pe26-complementary-primal-dual-spectrum, 6:ex-pe26-two-floating-poisson-subdomains, 9:ex-pe26-coarse-solve-work-bottleneck.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-pe26-scalar-substructuring-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The partition condition is vacuous as written: each Ωᵢ is open and their interiors are disjoint, so Ωᵢ∩Ωⱼ=∅. It never constrains the closures’ intersections, allowing non-face-to-face interfaces and leaving the claimed matching interface mesh unspecified.",
      "context_sha256": "59c432f4c85c325c1a539e5a0a4fc367dcc559ed04a2e2015880621c0459af56",
      "item_sha256": "33d4af2a8293a87b17e946879a3ce6f31fc3e7f08711a033675cf02026101bce",
      "at": "2026-10-18T03:26:19.740Z"
    },
    {
      "id": "thm-pe26-harmonic-extension-minimizes-energy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 uses the zero interior row of K_i H_i to erase both cross terms, which requires K_i to be symmetric. The supplied facts give block formulas and positive definiteness of K_II, but not symmetry; without it, the harmonic lift need not minimize v^T K_i v.",
      "context_sha256": "b178c16a049d2e4f7f064f79b96879a6f56ac5213be0e0ae9ab816fad8430396",
      "item_sha256": "16803c559fd8ae5a9dc2f259225da40a1000e87220da948446846486118a2f33",
      "at": "2026-10-18T03:26:28.681Z"
    },
    {
      "id": "def-pe26-scaled-averaging-and-bddc-preconditioner",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The corner-branch formula is undefined: neither this item nor its supplied dependencies define or constrain ρ_i and ρ_j. In particular, the permitted data do not exclude ρ_i+ρ_j=0, so E_0 need not exist.",
      "context_sha256": "d9ae85c58452353e58f9d03c2d52f1267fffd80c69291763a41cc46693a3b674",
      "item_sha256": "7de098b365a66fd5aeeebfd005688fb216a1f22c544edab70b87ee66fdeb0dc6",
      "at": "2026-10-18T03:26:17.341Z"
    },
    {
      "id": "lem-pe26-discrete-trace-schur-equivalence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement allows any continuous P₁ boundary trace, but the cited Schur interface defines energy only for admissible traces; outer Dirichlet vertices are fixed to zero. For traces nonzero there, gᵀSᵢg is undefined. Restrict g to the admissible trace space.",
      "context_sha256": "ef6ab6d6f4a20a54a7575b0f3a9f68402072028cbee5dd1cfe63a9fc5e87052e",
      "item_sha256": "bdb11165614baf40e8e1acb8dbefd0c7341e2b6af55a11ae7162d510656884b9",
      "at": "2026-10-18T03:26:30.830Z"
    },
    {
      "id": "def-pe26-feti-dp-dual-system-and-preconditioner",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition does not require positive definiteness of tilde S. The supplied interfaces allow a floating component with no primal constraint, making tilde S singular; then tilde S^{-1} and the displayed F are undefined.",
      "context_sha256": "ec316d9872452094cb9e7d10e45902a9f20c7ec7ceaacebe1cd72e8e22849cab",
      "item_sha256": "192d8bd9e1729f3a7cf13764f5ac077cd42c78ce23be04a071eef99dab589499",
      "at": "2026-10-18T03:26:52.402Z"
    },
    {
      "id": "lem-pe26-complementary-primal-dual-spectrum",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "With transposes as dual maps, X:U₂'→U₁ and Y:U₁→U₂'; G₂ acts on U₂'. Steps 1.1–2.1 instead type these maps and eigenvectors in U₂, so the claimed eigenspace isomorphism is ill-typed without an identification U₂≅U₂'.",
      "context_sha256": "52c7b6fd4bf2acde8ba121f08927a77a797dd0ae80c4d955dbdb4c549a3e84b9",
      "item_sha256": "40a16ed61390f5321c6bd3f7793baf42fcb70ad485c17bda69b7666717be4c35",
      "at": "2026-10-18T03:26:36.948Z"
    },
    {
      "id": "ex-pe26-two-floating-poisson-subdomains",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3 invokes F3's partially assembled SPD result without establishing its requirement that all subdomain vertices are primal; only the two shared endpoints are stated primal. Dirichlet anchoring may still give SPD, but F3 does not license this inference.",
      "context_sha256": "53a66575fefcbe3bea3c2418eb096e45b489b3c67eae66aa7232daadb3f481ce",
      "item_sha256": "e7a7bb0497866ba430c30a51c0f85eb383cdae5ffc83befda3950c8e3d02c538",
      "at": "2026-10-18T03:26:31.282Z"
    },
    {
      "id": "ex-pe26-coarse-solve-work-bottleneck",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The example invokes F1 without assuming its hypotheses: the required 2D geometry, matching meshes, coefficient scaling, all-vertices-primal constraints, and nonzero spaces are absent. The stated setup alone does not license an N-independent condition bound.",
      "context_sha256": "c326761329265ec3733d392616c29a1e39249807b2b288e00b6941497aac09f2",
      "item_sha256": "6be7a4b203a79df2efc11cf02698caec305ce702ea809c7fce0ce7d679cd0404",
      "at": "2026-10-18T03:26:23.486Z"
    }
  ]
