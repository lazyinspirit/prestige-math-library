# Step 7 adjudicate: initial, round 1, unit 3

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/step7-v2-initial-r1-u3.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-39-analysis-30",phase:"initial",round:1,unit:"3",input_sha256:"9338524b8f90ef76ff4d0d3c41b2d942e870edbc6da3d7062fa8aeac770c3e1f",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-39-analysis-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-wave-energy-and-energy-flux, 3:cor-energy-uniqueness-for-the-wave-cauchy-problem, 4:cor-compact-support-expands-at-speed-at-most-c, 7:ex-two-dimensional-pulse-has-a-tail-inside-the-cone, 8:cex-finite-speed-does-not-imply-strong-huygens.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-wave-energy-and-energy-flux",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Total energy is defined for measurable Ω⊆Rⁿ without requiring Ω⊆U, although e is defined only on U×I. For U=(0,1) and Ω=R, the integrand is undefined outside U; no extension is specified.",
      "context_sha256": "877ded5d53df10f540887397f2713141b3b2567f6c95c39cf99c9a7bd20cd237",
      "item_sha256": "6f68a483ce93007c2b0c6fbe7e6990780a16d7fc7c21b8b09fbea8de3904822a",
      "at": "2026-10-06T01:16:34.156Z"
    },
    {
      "id": "cor-energy-uniqueness-for-the-wave-cauchy-problem",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 claims equality at t=0, but the Cauchy interface prescribes only limits. Take u=v=0 for t>0, with u(x,0)=1 and v(x,0)=0. Both have zero Cauchy data and sharp zero energy, including their difference, yet disagree at t=0.",
      "context_sha256": "1622d45efe15dd6e4b8e848b30ceec7152d38430a458c25abfa978d3905a835c",
      "item_sha256": "c62393444478ddb263a143e35c0b6af817e31e5b14dc828104bd02e07b1a2778",
      "at": "2026-10-06T01:16:53.402Z"
    },
    {
      "id": "cor-compact-support-expands-at-speed-at-most-c",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 omits the dependency’s essential t>0 hypothesis. At t=0, B_0(x) is empty, so w≡1 with g=0 satisfies F1’s stated hypotheses but contradicts its conclusion. Step 1.1 also invokes F1 at every (x,t), including t=0.",
      "context_sha256": "5e94784a943553cb1823fa6363ec800f5e345b2ae62410490109f3851895f77e",
      "item_sha256": "98bf68763fd4db76d8b54c83617943345fbfcca3241a8037402b10d92c2c2abc",
      "at": "2026-10-06T01:16:52.902Z"
    },
    {
      "id": "ex-two-dimensional-pulse-has-a-tail-inside-the-cone",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 incorrectly calls the three-dimensional shell quiet. The supplied paired interface places the pulse in that shell and identifies the interior behind it as quiet; nonnegative velocity bumps can give positive displacement on the shell.",
      "context_sha256": "64f21468c3b7f5311c3dcde14bce5093f7d4564d81a04e8b11d7dc9855881036",
      "item_sha256": "cdaefd322ef899cc376b934b5a487ab63014c55a923713789a6bc9c8b9bc5437",
      "at": "2026-10-06T01:16:52.803Z"
    },
    {
      "id": "cex-finite-speed-does-not-imply-strong-huygens",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 inaccurately restates strong Huygens with sphere S(x0,t0); the supplied interface requires S(x0,ct0). For arbitrary c>0 these differ, so F4 does not license its application to the witnesses in step 2.1.",
      "context_sha256": "2e76867b441390241967c975844a7497917025ce0b7db0ddf3aa1bedb36d2d7c",
      "item_sha256": "7288d878f0d34723a23c78546d2f07dcc1d643ba446acfe3ba1eb8e31bc8725a",
      "at": "2026-10-06T01:17:01.341Z"
    }
  ]
