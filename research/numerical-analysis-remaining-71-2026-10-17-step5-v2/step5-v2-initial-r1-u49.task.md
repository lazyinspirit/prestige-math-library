# Step 5 adjudicate: initial, round 1, unit 49

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-49-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u49.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"49",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-na-periodic-staggered-grid-stokes-operators, 0:def-na-symmetric-saddle-point-system-and-block-preconditioners, 1:lem-na-periodic-staggered-grid-smooth-sampling-consistency, 2:thm-na-symmetrically-preconditioned-saddle-point-spectrum, 3:thm-na-periodic-discrete-helmholtz-projection.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-na-periodic-staggered-grid-stokes-operators",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "`justified_by` cites a circular result: the cited lemma says to use this definition, yet it is needed to justify that `D_h` maps into `Q_h`. The definition gives no independent well-definedness proof for that codomain.",
      "context_sha256": "246d14eb5fd9a5b8b6ed773e71ff6ea82cf589406d2407bc782752748630e662",
      "item_sha256": "6efe6f7aabbbf49cc4fc8b1800988416f87212af4c4828bd261d2cd97b3edd8f",
      "at": "2026-10-18T03:25:53.058Z"
    },
    {
      "id": "def-na-symmetric-saddle-point-system-and-block-preconditioners",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition uses the exact-solve theorem as a dependency and justification, while that theorem assumes this definition. This creates a circular dependency, so the theorem cannot establish the definition’s well-definedness.",
      "context_sha256": "6528469b589c5559a45f85a8c45cbef7a7172ac0fc89222a16d06931f088b5a1",
      "item_sha256": "f37ddc9578691c6f9b2d25a6ecd130ff904dff60684b2229f4258ee97a1d1882",
      "at": "2026-10-18T03:25:58.817Z"
    },
    {
      "id": "lem-na-periodic-staggered-grid-smooth-sampling-consistency",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "“Mean of absolute value” bounds h^dΣ|g(x_j)|, which is false: for zero-mean g=sin(2πx₁), this tends to 2/π as h→0. Step 4.1 proves only |h^dΣg(x_j)|=O(h²).",
      "context_sha256": "29af717733fd45befccdadae703fcbf0ff4aa4c9b22de545f831a34a3eaf08ff",
      "item_sha256": "fe7807ec9541f5eb73a1fd7f6c17fabbfe40a21bcd1bcb8bff4784fa6e9a5f83",
      "at": "2026-10-18T03:26:12.586Z"
    },
    {
      "id": "thm-na-symmetrically-preconditioned-saddle-point-spectrum",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 4.1 gives a false similarity identity: with O=Pγ^{-1/2}C, OᵀXO is not C^{-1}KC^{-T}. The matrices are orthogonally similar using a differently oriented factor, but the stated proof step does not establish that.",
      "context_sha256": "d6312712e623663962f8851273723bb992ae55fcba0d0d21931a1a5dd3b7df62",
      "item_sha256": "2b58becc581a328a9540903eb3c20c3406a7af1557b885face406767788be021",
      "at": "2026-10-18T03:25:53.829Z"
    },
    {
      "id": "thm-na-periodic-discrete-helmholtz-projection",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 attributes the adjoint identity (G_hq,v)_{M_h}=-(q,D_hv)_{Q_h} to the lemma, but its interface states only mean-zero divergence, invertibility, and Poincare. Step 2.1 relies on that identity without deriving it from the operator definitions.",
      "context_sha256": "38712fa34248b86c1d679e63ddbfb74e6fac5578b2d17bccd0602a0ec76f1236",
      "item_sha256": "f172d9105c286c552f326741ef5b052da57717cd0ea710e2c21357047f815179",
      "at": "2026-10-18T03:25:57.045Z"
    }
  ]
