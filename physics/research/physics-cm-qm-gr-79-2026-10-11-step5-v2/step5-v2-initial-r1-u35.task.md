# Step 5 adjudicate: initial, round 1, unit 35

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-35-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u35.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"35",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-nrqm-composites-chsh-and-finite-sampling-law, 0:lem-nrqm-composites-complex-gaussian-continuation, 0:lem-nrqm-composites-momentum-fourier-jacobian, 0:thm-nrqm-composites-joint-pvm-construction, 1:lem-nrqm-composites-density-and-scalar-spectral-probability, 2:lem-nrqm-composites-finite-effects-and-instruments, 2:ex-nrqm-composites-nonunique-mixed-ensemble, 3:lem-nrqm-composites-countable-kraus-isometric-dilation, 3:lem-nrqm-composites-finite-naimark-compression, 3:lem-nrqm-composites-marker-overlap-contraction, 4:lem-nrqm-composites-local-trace-preserving-no-signalling.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-nrqm-composites-chsh-and-finite-sampling-law",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: step 2.1 applies mutual independence [F3] to every sequence, but [F3] only covers labels in each X_k(Ω). If p_j=0 and j is never attained, that selection is outside [F3]; prove its event empty separately.",
      "context_sha256": "a27654d44065d5e03bc193a0b9ac3a0ffac814863b51460a555de9adc2243e1f",
      "item_sha256": "6313114911c002784ca0ed65a9e1fae31448835dc7d3a560bb11b4df241309ca",
      "at": "2026-10-12T19:56:59.039Z"
    },
    {
      "id": "lem-nrqm-composites-complex-gaussian-continuation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 overstates dominated convergence: it omits measurability of the functions and nonnegative measurable integrable domination required by the cited theorem. As written, the restatement is false for arbitrary nonmeasurable functions.",
      "context_sha256": "438727a63042ed81798247546a1435a4294a7b18dcd519a40d5a84aa3927ff1d",
      "item_sha256": "bdfe92d461535b09326d4fcc83366afb386b2726b44be779011b9ad111ef78fa",
      "at": "2026-10-12T19:57:12.269Z"
    },
    {
      "id": "lem-nrqm-composites-momentum-fourier-jacobian",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement calls the L² spaces Hilbert “by” Riesz–Fischer and the Hilbert-space definition. Riesz–Fischer establishes completeness, while the definition also requires an inner product; that cited pair does not supply the L² inner-product structure.",
      "context_sha256": "d39a3fb1501d08a08d043ee389e780e17053f8e1031a756eb7c164bf15ae9596",
      "item_sha256": "aab9b9f467346cfaa8f8ca0baeb202495387d1a23253452df90947fe7e28b9fa",
      "at": "2026-10-12T19:57:58.972Z"
    },
    {
      "id": "thm-nrqm-composites-joint-pvm-construction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1’s compact-intersection bound is invalid with indices starting at 0: for N≥1, Σ_{n=0}^N ε2^{-n}>ε, so the claimed positive lower bound fails. The proof does not establish continuity from above or that μψ is a premeasure.",
      "context_sha256": "2abb200c0da8a15927d6583306e92b055aeaaac7d737efccc2c133a8f7a84c92",
      "item_sha256": "7b420ee676af6757d9acbd88de0e673c88ec3be1c7203daaf6ad57afe04afceb",
      "at": "2026-10-12T19:57:30.418Z"
    },
    {
      "id": "lem-nrqm-composites-density-and-scalar-spectral-probability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 applies the bounded-calculus identity to Φ_{E_A}(λ), but λ is unbounded and Φ_E is defined only for bounded functions. F6 does not license this step; derive the norm identity using the truncated functions, their norm convergence, and monotone convergence.",
      "context_sha256": "64e6e23885de6e158031a0b57e8ddecd49feea2b876538858e0b006db6348415",
      "item_sha256": "2ad18992f633da1da39b11d2dd4705eaad78ec3c9cf20867a455842afecbe430",
      "at": "2026-10-12T19:57:18.378Z"
    },
    {
      "id": "lem-nrqm-composites-finite-effects-and-instruments",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 omits the supplied density lemma’s Axiom of Countable Choice hypothesis, yet step 1.1 relies on its spectral expansion. That inference is not licensed as stated; add the hypothesis or derive the finite-dimensional expansion locally.",
      "context_sha256": "377c1122f59ebbf3709065d83226dadc8ba5acaea6c54d495f6d2e33e9985bbe",
      "item_sha256": "56888054c47f0627ab13157ac8a5b874bc130d22afb8ae9952279460d7f9d834",
      "at": "2026-10-12T19:57:12.826Z"
    },
    {
      "id": "ex-nrqm-composites-nonunique-mixed-ensemble",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 broadens its cited interface: the density lemma guarantees the weighted sum for an orthonormal family, but A1 also asserts this for any finite family of unit vectors. That extension is not established in the item.",
      "context_sha256": "8df8280eb494544a5917dbbbf5efea55ce24a82baee90360b2efc472773b2918",
      "item_sha256": "b4bb437cce6447d387807545f6cf24799a2af9a0d15ce24c7a7f2832baf7cb30",
      "at": "2026-10-12T19:58:21.491Z"
    },
    {
      "id": "lem-nrqm-composites-countable-kraus-isometric-dilation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 4.1 claims finite rank-one sums are trace-norm dense by the nuclear-bounded-cyclicity dependency, but its supplied interface only handles an already-given nuclear representation; it does not assert that density. Extension to all trace-class inputs is unproved by the listed d",
      "context_sha256": "9865147e0bf99532bef3fcf3ed7504f39d95a3295b8df6d7fad5ff5272bbc58d",
      "item_sha256": "2312785dfb06ad734a46e2e4f6f658acf70d3f04c92e60fe2eac59a82d5af1a5",
      "at": "2026-10-12T19:58:05.510Z"
    },
    {
      "id": "lem-nrqm-composites-finite-naimark-compression",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited finite-effects interface is restricted to finite-dimensional H, but the statement and F1 use it for an arbitrary nonzero Hilbert space. That dependency does not license the stated POVM interface in this scope.",
      "context_sha256": "1b3a8961f26a43bb0e690e2bd2457ce827ce9f3d6cb94379f7b1b2ee1a4f8b8c",
      "item_sha256": "931ec1b0ed848fb70c947934cabac5ba222429d42168e0e83f4c405bb94cb4b9",
      "at": "2026-10-12T19:57:17.906Z"
    },
    {
      "id": "lem-nrqm-composites-marker-overlap-contraction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof applies the Hilbert tensor and partial trace interfaces to L²(D), but its cited quotient definition only establishes almost-everywhere classes. No dependency establishes L²(D)'s Hilbert structure and completeness, so F1 and F2 are not type-justified.",
      "context_sha256": "e371ecede0e75f7db729bfee27cdb10749ee5654fb3a17e95596c1049a4688ac",
      "item_sha256": "49dbdb4748340ce926e7789777a850727c17489bb54937a18e4500542af4f628",
      "at": "2026-10-12T19:58:22.330Z"
    },
    {
      "id": "lem-nrqm-composites-local-trace-preserving-no-signalling",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 attributes trace cyclicity to F4, but F4 supplies only the ideal property and trace continuity; it does not license tr(VRV*B)=tr(RV*BV). Prove cyclicity or cite a result that establishes it.",
      "context_sha256": "7452ea24ffc7207e7f9b0080f800b280cb9c5a997a48c2c38752b09641759998",
      "item_sha256": "7cf7c2629eb2f606d8a25fe8a18dabb1358073ed15ddf2ab998d9385f40c4139",
      "at": "2026-10-12T19:58:48.894Z"
    }
  ]
