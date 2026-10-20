# Step 5 adjudicate: repeat, round 1, unit 37

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/repeat-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-batch-37-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-repeat-r1-u37.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"machine-learning-all-101-2026-10-19",phase:"repeat",round:1,unit:"37",input_sha256:"a5c30205133334dfbe5b7d7b702cb1de32b4633029f3d1d5fcd667c85576247b",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run machine-learning-all-101-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-physics-informed-neural-network-loss, 0:def-shin-elliptic-divergence-form-operator, 2:alg-neural-operator-mesh-discretization, 3:thm-shin-parabolic-initial-boundary-existence-and-residual-stability.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-physics-informed-neural-network-loss",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The full-boundary formula requires measurable singletons, which are not assumed. For U=(0,1), Γ={0,1}, a probability measure on the trivial sigma-algebra satisfies the stated assumptions, but μ_b({0}) and μ_b({1}) are undefined.",
      "context_sha256": "1c84b24af4c165b12a645b8d4e1d66afeafad1b7bb38fd2b0e314777a45831e5",
      "item_sha256": "39938b2caa2c845d39c5caefa0a07ab0d7efe26e85870a54404d9d656fe3f675",
      "at": "2026-10-20T13:55:41.108Z"
    },
    {
      "id": "def-shin-elliptic-divergence-form-operator",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "No coefficient regularity or operator domain is imposed. On U=R, take a₁₁(x)=|x|, b₁=c₁=d=0 and smooth u(x)=x. Then L[u]=(|x|)' is undefined at 0. The conditional expansion does not make the initial definition well-defined.",
      "context_sha256": "13aab9d4fb4a8472e03f42296523d4fb81568147ce1ee2ee60cb39cfebc67e11",
      "item_sha256": "dc64abd8a91b67e02b66321c6d9024f5d414377b75e60eea2b89192f1cec7942",
      "at": "2026-10-20T13:53:05.574Z"
    },
    {
      "id": "alg-neural-operator-mesh-discretization",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The integral-only remark falsely says the first output is a finite sum of kernel sections, omitting activation. With κ(x,y)=x−1/2, a≡1, zero bias and ReLU on (0,1), the first output is (x−1/2)₊, outside the span of those sections.",
      "context_sha256": "e6c89225052c148f58a32e45cd775731c1f52652ff1826d09ead6650faa59697",
      "item_sha256": "cac133b1348e668360417d972cadb6719d71bdd844137409246391ca1e629229",
      "at": "2026-10-20T13:52:30.857Z"
    },
    {
      "id": "thm-shin-parabolic-initial-boundary-existence-and-residual-stability",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The energy clause proves only that h_m−u* tends to zero in L²_tH¹. On a disk, Hölder boundary data outside H^{1/2} have a harmonic extension u* outside H¹. Taking h_m=u* satisfies all residual hypotheses, but these functions do not belong to L²_tH¹.",
      "context_sha256": "c27c04c1fe1b894d985e29a52211c409fb1ca2836db8453115e67c962448a1ae",
      "item_sha256": "23210c6a7a2081e49699318e45b1b1c0eb156c637656995853e649e7116ad833",
      "at": "2026-10-20T13:55:38.744Z"
    }
  ]
