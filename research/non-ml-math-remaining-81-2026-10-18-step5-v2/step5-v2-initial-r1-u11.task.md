# Step 5 adjudicate: initial, round 1, unit 11

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-11-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u11.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"non-ml-math-remaining-81-2026-10-18",phase:"initial",round:1,unit:"11",input_sha256:"5a7686cf6af281fffc281470b9fd4d1b4497cd3e88649ffa4676dd5e748ac1b1",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run non-ml-math-remaining-81-2026-10-18 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 6:lem-it-rate-distortion-convexity-and-monotonicity, 6:thm-it-gaussian-squared-error-rate-distortion, 7:alg-it-finite-alphabet-blahut-arimoto, 7:ex-it-binary-hamming-rate-distortion-curve.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-it-rate-distortion-convexity-and-monotonicity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.3 chooses a minimizer W_k for every k; [F2] gives only individual existence. This countable selection is unjustified in ZF and contradicts axiom_use. Specify canonical minimizers or give a choice-free limit argument.",
      "context_sha256": "13de7a3e003ca07526598f1caefb8ae12c802fb4727b4890323a6c9749591619",
      "item_sha256": "006ba79c6aaf9f7ee40e38c1d8541ebc42866333d5aff1553c4dc90c20383331",
      "at": "2026-10-18T04:20:10.272Z"
    },
    {
      "id": "thm-it-gaussian-squared-error-rate-distortion",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The sequence h=1/n is undefined at n=0, but the library indexes sequences by ℕ with 0∈ℕ. Thus the decreasing sequence needed for continuity from above is not defined as written; use h=1/(n+1).",
      "context_sha256": "eafe2438c1e951f1f5de934eab1dd0015a9b6e585524ee62b40d6d13924ed76c",
      "item_sha256": "deb24fbb76a0d893f931d3d86fdeb9813fddbb4c98172b9ae8cfec51474dcddc",
      "at": "2026-10-18T04:20:33.590Z"
    },
    {
      "id": "alg-it-finite-alphabet-blahut-arimoto",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The outer loop promises an output for every τ>0, but nothing here establishes that ln γ_t→0 or otherwise guarantees a stopping index. Per-iteration interval refinement certifies values; it does not establish convergence.",
      "context_sha256": "473e57cff4e900a9cd1e575fe1c7582932646a86c28e9da0835c790ac15b5015",
      "item_sha256": "a28da64beb3885b90b939a3ddbf22375aff6bc3c9e41587b9754a7b7a10e02ef",
      "at": "2026-10-18T04:21:33.776Z"
    },
    {
      "id": "ex-it-binary-hamming-rate-distortion-curve",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F1] overstates its dependency: the supplied interface gives only the rate function, not a backward-channel construction. Thus the claimed reproduction mass is unsupported; moreover, the stated scope D<1/2 is too broad for that formula.",
      "context_sha256": "5382c22d8c16ab6d585ef9561eae2b105cd23b845895a1508aea4b2625811703",
      "item_sha256": "361a7caa5ef3ce346e749d4a8a2b47ae24f4f42d376ffaf50c96386bb7a344bb",
      "at": "2026-10-18T04:19:54.800Z"
    }
  ]
