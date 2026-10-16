# Step 5 adjudicate: initial, round 1, unit 50

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-50-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u50.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"initial",round:1,unit:"50",input_sha256:"d23dda1488be643603328de91e0bfb6477b03a1eb49ede19fac9872ac281253d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 7:lem-qa-26-hhl-prefix-table-synthesis-error, 20:alg-qa-26-hhl-phase-estimation, 21:lem-qa-26-hhl-success-amplitude, 21:thm-qa-26-hhl-amplified-postselection-cost, 22:ex-qa-26-diagonal-hhl, 23:thm-qa-26-hhl-state-correctness.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-qa-26-hhl-prefix-table-synthesis-error",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The strict error bound needs εΨ>0, which is unstated. At εΨ=0, δ=0 forces an exact circuit, but its error 0 is not less than εΨ/100=0. Add εΨ>0 or make the conclusion non-strict.",
      "context_sha256": "8f855c8caf424c835d183d83e20c3c8e1c6b3a540e55dc7dc48e3c462dfe50f0",
      "item_sha256": "62275fb091bdff1db7d0b58ecdcfc6780faeeeddd104266410963e78281ef54b",
      "at": "2026-10-16T05:08:22.292Z"
    },
    {
      "id": "alg-qa-26-hhl-phase-estimation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2 never instructs applying the forward controlled simulations S_H(t_j,η_j), or which phase-register bits control them; it only sets times and error budgets before the QFT. Without those calls, there is no phase kickback and the estimate is independent of H.",
      "context_sha256": "7e07c0dfab1ce53074a435769f6e49b174f66e85c10bf47ee458676431bc58ab",
      "item_sha256": "8ad554a1e3ec5657a9f8df92407908cc383a67c6c362250d5544b27cb22caa43",
      "at": "2026-10-16T05:09:15.733Z"
    },
    {
      "id": "lem-qa-26-hhl-success-amplitude",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Steps 2.1 and 3.1 sum over the full eigenbasis using 1/λ_j. Zero eigenvalues are allowed even when their β_j=0, making those terms undefined. Restrict both sums to indices with β_j≠0 (or define the zero-eigenvalue terms separately).",
      "context_sha256": "2675a18d6f88125a76934692306dbbe1d03e7bff40d7e4e5fed46456fbfe480e",
      "item_sha256": "9ec2a9547610d5df0f8be1cf9636d75f8106d07dfae3d303c546e78fa7879cd3",
      "at": "2026-10-16T05:08:26.462Z"
    },
    {
      "id": "thm-qa-26-hhl-amplified-postselection-cost",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 gives only an aggregate cap of 2RK calls; it does not imply at most RK calls of each type. Step 1.1 makes that unsupported per-type claim, although the stated O bound follows from the aggregate cap.",
      "context_sha256": "80f8cbc62aa7345dd53f37e2fa4d6f5a59850b2b472a07a9b7180f48db769859",
      "item_sha256": "1bb2353d128cc61c745902206dda9ba3b3b72eab29db31f67f555c2a7dfcbd9a",
      "at": "2026-10-16T05:08:25.660Z"
    },
    {
      "id": "ex-qa-26-diagonal-hhl",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "At κ=1, H=diag(1,1)=I has only one distinct eigenvalue, so the title “Two-eigenvalue” overstates the example’s scope. Restrict to κ>1 or retitle it.",
      "context_sha256": "57de76c89633443fe6da4547f696a02ac70655a07cb256c839bf4e316024e32e",
      "item_sha256": "451dc642e6f27f34fa9fb0dcef57118498422c61493bc41386c583863a286984",
      "at": "2026-10-16T05:08:38.520Z"
    },
    {
      "id": "thm-qa-26-hhl-state-correctness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement includes ε=1, but alg-qa-26-hhl-phase-estimation only accepts ε=pε/qε with 0<pε<qε, so OP5 is undefined at that endpoint.",
      "context_sha256": "b6d193e0cbc15aab5a826b1461b6e04100bb25fd7ce03590a84cc4874aa07cea",
      "item_sha256": "9d69bc107b6376acee25a634268d78d2dbe343937e97e2df474a31fd9c7cc32e",
      "at": "2026-10-16T05:09:06.574Z"
    }
  ]
