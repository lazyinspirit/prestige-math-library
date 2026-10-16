# Step 5 adjudicate: initial, round 1, unit 43

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-43-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u43.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"initial",round:1,unit:"43",input_sha256:"d23dda1488be643603328de91e0bfb6477b03a1eb49ede19fac9872ac281253d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 3:cex-qa-19-adjacency-laplacian-sign-conventions, 12:alg-qa-19-hypercube-state-transfer, 16:ex-qa-19-complete-graph-search-matrix.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "cex-qa-19-adjacency-laplacian-sign-conventions",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F10 overstates its dependencies: they give outcome weights as tr(ρP) for density operators, but do not connect a unit vector to ρ=|ψ⟩⟨ψ| or derive squared-coordinate probabilities. Thus step 2.1's measurement-law counterexample is unsupported.",
      "context_sha256": "bc4585b40d671e575bd4c523051f21c80f9e518b1193ef0e13d081603ba381d5",
      "item_sha256": "272df143f688cdd95ca7166c56d8e5125fe7ec50d095abaaee743f6da89d1434",
      "at": "2026-10-16T05:05:52.589Z"
    },
    {
      "id": "alg-qa-19-hypercube-state-transfer",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The local-operation branch lacks the promised proof that its ordered product equals U_{A_n}(π/2). The Hamiltonian-access dependency says this equivalence must be proved or separately certified; no correctness argument or certificate is included.",
      "context_sha256": "0b048c6804670f4bae03eac050008f77b6943592b6620476868a1b43995096df",
      "item_sha256": "3887b5677c22961b4451dac47f7b50a2b45e2c2991824c287f1572fb1b3b5f0e",
      "at": "2026-10-16T05:05:31.216Z"
    },
    {
      "id": "ex-qa-19-complete-graph-search-matrix",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 overstates thm-qa-19-complete-graph-search-correctness: its interface asserts success at the stated time but does not name this invariant block. Step 5.2 inaccurately attributes the block to that theorem.",
      "context_sha256": "002fa29d0a69c94a994388e1cca31ed0ec51a547d137542ff35f3aad0066df8e",
      "item_sha256": "074893356edc814589a2fc08710abd9777cb57b3f0e5c60a7aa5f0286287cb2e",
      "at": "2026-10-16T05:05:44.073Z"
    }
  ]
