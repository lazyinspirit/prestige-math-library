# Step 5 adjudicate: initial, round 1, unit 79

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-79-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u79.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"79",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 26:def-gr-development-and-data-fixing-isometry, 27:def-gr-common-subdevelopment-and-corresponding-boundary, 27:lem-gr-compact-past-above-cauchy-set, 29:lem-gr-intersection-of-developments, 29:lem-gr-isometric-immersion-rigidity, 30:lem-gr-data-fixing-immersion-is-embedding, 31:lem-gr-corresponding-set-smooth-extension, 31:lem-gr-maximal-common-development, 41:ex-gr-minkowski-maximal-development, 42:ex-gr-minkowski-rational-dense-and-basis.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-gr-development-and-data-fixing-isometry",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The model is introduced with equations ℰ(g,ψ)=0, but clause (a) defines a development using E(g,ψ)=0 without defining E or identifying it with ℰ. The matter-equation condition is undefined as written.",
      "context_sha256": "cb09c5ab7a2dcc8d4c04879a3f3b26f2f19fc81efc72285570059f5d321af48d",
      "item_sha256": "45f5dcea346f09dcf646ca994ff54695fed1e47bc55887ea38781dc0ef7542fd",
      "at": "2026-10-12T20:34:51.031Z"
    },
    {
      "id": "def-gr-common-subdevelopment-and-corresponding-boundary",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: clause (d) attributes chronology openness to clauses (a),(b) of the cited Cauchy-set lemma, but its interface states only trichotomy/closedness, not openness of I±(Σ); that claim is needed to choose same-side neighborhoods. Required repo guidance files were unavailable.",
      "context_sha256": "2209fb3110972c4c8a44124e0b387480fdc4f8d5900c199ec1c89901c5afd417",
      "item_sha256": "7c84834f675e368f84cc11a59f5e7028c027f98b2dae5c6868c7c61c42614766",
      "at": "2026-10-12T20:36:33.885Z"
    },
    {
      "id": "lem-gr-compact-past-above-cauchy-set",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: [L1] says J⁺(Σ) is closed, but the cited causal-structure interface gives closedness only for J⁺(x) and J⁺(K) with compact K; the Cauchy-set interface only says Σ is closed. Steps 1.2 and 2.2 rely on this unsupported claim.",
      "context_sha256": "6da3feedd742123aee220393fcf1644385de34237c4fe953bdea7e191ea5fdf1",
      "item_sha256": "e4252500fe3356919ba0dc1d4e1577920ea890bdf07e0bf27c4a8e249cb9e18d",
      "at": "2026-10-12T20:34:51.233Z"
    },
    {
      "id": "lem-gr-intersection-of-developments",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L4 misstates the dependency: the theorem makes only the conformally rescaled metric h' complete, not h=g+2n♭⊗n♭. Steps 3.1–3.2 need completeness for the same metric whose lengths they bound, so convergence of those Cauchy tails is not justified.",
      "context_sha256": "10a650af1d3d98b2a05358ac4fcd844671d14f91c42e5eba84f50a0c61cf94e7",
      "item_sha256": "08da21ba5895ea704a6db3021299ab8dceb0371f2a8cd605d229f86a66f78821",
      "at": "2026-10-12T20:35:31.068Z"
    },
    {
      "id": "lem-gr-isometric-immersion-rigidity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.3 is essential, but its maps lack a specified common codomain: dψ_i(q) lies in Hom(T_qN,T_{ψ_i(q)}N'). No supplied interface defines the “tangent-bundle-like target” or establishes continuity and a closed diagonal there; hence A closed, needed for (a)/(c), is unproved.",
      "context_sha256": "d2d47fa671c01ff5625fe01173eaa3d6c5b675a8804ef395058a17d62ffba547",
      "item_sha256": "5b40a2a878a3592a6bb1559daabd0df159bb6b3aec9d348382b42ca9f4dabf30",
      "at": "2026-10-12T20:34:34.410Z"
    },
    {
      "id": "lem-gr-data-fixing-immersion-is-embedding",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L5]/step 5.1 misstates [[lem-gr-isometric-immersion-rigidity]] clause (b): it gives equal initial differentials only for data-fixing development embeddings on a common subdevelopment, not arbitrary isometric immersions. The cited fact does not license this step.",
      "context_sha256": "bfee1fdaf1371e87215b91ed59f256fb9773730ff6026b03a32031c005a640d1",
      "item_sha256": "bb271a3c7a2379323f1406c85ec96e2d4a4947a3f7ab469ce3e8e2a8fa2baaa4",
      "at": "2026-10-12T20:35:20.952Z"
    },
    {
      "id": "lem-gr-corresponding-set-smooth-extension",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Title defect: “on the closure side” reads as preservation on the closure of U, but the statement and proof establish it only on U∪C. C contains only boundary points with corresponding points and need not equal all of ∂U.",
      "context_sha256": "82ed5b37912989d1fd0c18fffe2e2e149145d1913dc74533c0126b6c70550fa9",
      "item_sha256": "793e8498e2f6819060436e4e5b79b7b3c112598e36bec6ed574af8de5104a6d1",
      "at": "2026-10-12T20:38:29.650Z"
    },
    {
      "id": "lem-gr-maximal-common-development",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L3 establishes nonemptiness only by citing GR and matter local-evolution results. Those physics items cannot justify this mathematics lemma, and no independent mathematical proof that a common subdevelopment exists is given.",
      "context_sha256": "032fbec426e6835d060d95112b747763233dd02944b5c73f18a19192fe2f322a",
      "item_sha256": "e0b86b4bebee5823f16df34ec8bc203cea0c4b07dcd3ba0a4af34ba2e9cd6685",
      "at": "2026-10-12T20:35:11.507Z"
    },
    {
      "id": "ex-gr-minkowski-maximal-development",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L1 overstates thm-gr-smooth-maximal-globally-hyperbolic-development: its claim also requires an existing development and local existence and uniqueness for the same admissible model at every restart. The cited interface does not license L1 as written.",
      "context_sha256": "bec0f15895b707ed164b1e2859e29cd41f5279f0c3d3fc5ce7356f1467852de2",
      "item_sha256": "359c9d3e65bef3a2e11e9d4da0850e4519ec95dfdb1a8e1c67a73190c27907c4",
      "at": "2026-10-12T20:37:53.329Z"
    },
    {
      "id": "ex-gr-minkowski-rational-dense-and-basis",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L2 attributes exp_d(v)=d+v to clause (a), but the supplied theorem gives local geodesic existence and maximality; it does not establish straight-coordinate geodesics or a globally defined exponential map on all rational balls.",
      "context_sha256": "329ecff3f20a2fdf167f2900d84507e67875720e38d679c517d4ab56b3a5090c",
      "item_sha256": "6eb80bf83dcd778c64ab85d8cda5c4ff1637beb554bf5f310699ccc450257ed3",
      "at": "2026-10-12T20:35:43.577Z"
    }
  ]
