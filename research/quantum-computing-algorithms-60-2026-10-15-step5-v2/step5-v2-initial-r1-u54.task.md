# Step 5 adjudicate: initial, round 1, unit 54

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-54-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u54.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"initial",round:1,unit:"54",input_sha256:"d23dda1488be643603328de91e0bfb6477b03a1eb49ede19fac9872ac281253d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 11:def-qa-30-sdp-reference-state-access, 12:lem-qa-30-finite-grid-quantum-subgradient, 16:thm-qa-30-quantum-membership-separation-cost, 16:thm-qa-30-smooth-fourier-approximation, 23:thm-qa-30-flagged-trace-error-and-cost, 24:lem-qa-30-mmw-to-sdp-feasibility, 25:thm-qa-30-sdp-matrix-expectation-cost, 28:thm-qa-30-quantum-sdp-solver-cost.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-qa-30-sdp-reference-state-access",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For non-power-of-two d, the definition accepts a supplied VΦ without requiring it to prepare |Φ_d⟩ (or specifying its action on ancillas). Thus the access contract need not provide access to the defined reference state.",
      "context_sha256": "444ea99a7bf194ecabf6445747e2611c0bac13b8841e7a87638c2c4ee40e6d53",
      "item_sha256": "b201125fac15a4de7f4bd5863f3e2bc9f72741102ba29e3277614fa853dee05b",
      "at": "2026-10-16T05:10:30.172Z"
    },
    {
      "id": "lem-qa-30-finite-grid-quantum-subgradient",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The procedure never specifies sampling z uniformly from the grid. Step 2.1's good-center probability relies on that choice; for an arbitrary fixed center, D(z) can be large, so the claimed 1−ρ guarantee is unsupported.",
      "context_sha256": "d9fdd43e5f6ad77b83bfc763eef2bd0d7b01fb6281de462f74f794cd4f8c8efb",
      "item_sha256": "8a5e7f7b9f82e4430bf92f0ef199a550f5bb7cc21db2e13a08a425d22c61621e",
      "at": "2026-10-16T05:11:18.464Z"
    },
    {
      "id": "thm-qa-30-quantum-membership-separation-cost",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The supplied algorithm interface does not state the numerical budgets used in F4. Steps 2.1 and 4.1 require address and height errors ≤ε/1000 and δ/1000, plus output-direction slack η/100; without these bounds, the height-search tolerance and final <η separator guarantee do not f",
      "context_sha256": "dd2482fa9a54fdc54a0223c435190ad6867328c4bff63d588cc6fc53e6bc11c3",
      "item_sha256": "c9de307437d495c8331ab4874c6edc99409f2d0662449ac8c76096dd863d7147",
      "at": "2026-10-16T05:11:23.249Z"
    },
    {
      "id": "thm-qa-30-smooth-fourier-approximation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "When B=1, the proof calls 1+e/8 an exact rational normalization, but e is only assumed real and may be irrational. That certification claim is false as stated.",
      "context_sha256": "d6f0128c119ff4f1d7bcf56392a04610c6580013d108223822c88348a576d476",
      "item_sha256": "4fa26b259a09c47de927cfd3d189ca007047ed199f0d3f26da48a5c651e80396",
      "at": "2026-10-16T05:11:20.924Z"
    },
    {
      "id": "thm-qa-30-flagged-trace-error-and-cost",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The RelProb interface requires rational tolerance c, but the proof calls it with c=θ/36 while θ is only assumed real. For irrational θ this is not a valid input; require rational θ or specify a rational c≤θ/36.",
      "context_sha256": "1adb649027a5b502c0c67437e644d907e26447a9a7aba8b94d8f81b0bfcae2e2",
      "item_sha256": "d9a4801bfcaffb5c3d5ff29a7cbd8bd62052b648717ff76980e677844b5a089f",
      "at": "2026-10-16T05:11:08.054Z"
    },
    {
      "id": "lem-qa-30-mmw-to-sdp-feasibility",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 requires rational α, r, θ and b_i, but the statement allows them to be arbitrary reals. Thus its finite oracle guarantee cannot be invoked as written to establish the claimed exact feasibility and returned weights.",
      "context_sha256": "e90c8e3301776dd71d5e3c8276f81c79690f641a95637b751de95e2682b1a5a0",
      "item_sha256": "19b50c4e1bde58c9c3357a8bc3e0766b95ef7040988434807f832ad5dd603e86",
      "at": "2026-10-16T05:11:08.546Z"
    },
    {
      "id": "thm-qa-30-sdp-matrix-expectation-cost",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof invokes QA29 with ε=τ/2 for arbitrary real τ, but QA29 requires rational ε and the sampler interface requires rational τ. For irrational τ, this invocation is not licensed; require rational τ or choose a suitable rational estimator tolerance.",
      "context_sha256": "6ca4754828266f22c035860fe1f899762ee83fd5c41b6624849b290d250cee35",
      "item_sha256": "151ae3e0703b1ad845b83979d8ea8335b44ee34e85e6d69a04b1fb9df2e983c9",
      "at": "2026-10-16T05:10:47.931Z"
    },
    {
      "id": "thm-qa-30-quantum-sdp-solver-cost",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F3] is overstated: its supplied interface gives aggregate query bounds and a gate-cost ledger, but not the per-round formula or Fourier cost in 1.1, nor the Q^7 coefficient-factory count in 2.2. Those steps are not licensed by the cited facts.",
      "context_sha256": "75f6899a558401d456552b054c22234de6450ecc4093345448019f55017890ac",
      "item_sha256": "7fdba1b7c1e490d7790cb97dcf96ca8e058c4dfd38a6efb4531ca7bb537687ad",
      "at": "2026-10-16T05:11:19.222Z"
    }
  ]
