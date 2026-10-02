# Step 7 adjudicate: initial, round 1, unit 17

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u17.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"17",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:lem-pcp-verifier-reduces-to-gap-max-three-sat, 3:thm-max-three-sat-has-no-ptas-unless-p-equals-np, 3:ex-conditional-expectation-for-a-small-max-cut-instance.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-pcp-verifier-reduces-to-gap-max-three-sat",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "For a rejecting coin string with no queries, step 2.1 introduces an empty clause and adds a contradictory pair without replacing the empty clause. Step 3.1 has no width-zero case, so the construction fails to produce a 3-CNF on this allowed input.",
      "context_sha256": "5e7a27e47a1d7449875e5e5b9fe969655928602151369f86a16581a965b1e07c",
      "item_sha256": "483813cf9a271dc7456f92c6d0c78efa6fe123e71f40af1a376134c80ebf489d",
      "at": "2026-10-01T20:54:05.313Z"
    },
    {
      "id": "thm-max-three-sat-has-no-ptas-unless-p-equals-np",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.2 requires one δ for every NP language, but the supplier interface allows δ to depend on L. A fixed factor ρ>1−δ for one reduction need not exceed the thresholds for others. No uniform gap or NP-complete anchor is supplied.",
      "context_sha256": "025b52ffbe0029f6927e2fe7b9c85a49c8d60aea46beca6625cba54e9067ad65",
      "item_sha256": "4ecc74f3fc5f4d5e9304f115a6228d75f0d0385105766b612f4998bab7ab1eb3",
      "at": "2026-10-01T20:54:30.541Z"
    },
    {
      "id": "ex-conditional-expectation-for-a-small-max-cut-instance",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 attributes a tie-to-0 rule to the conditional-expectation dependency, whose supplied interface specifies no tie rule. Thus steps 2.1 and 3.1 cannot infer that the cited algorithm selects 0 on ties; the example must explicitly stipulate this convention.",
      "context_sha256": "18a7e5216e7fbc0010292d529064fc694aacdaa65245f6a752e298046b3d70e7",
      "item_sha256": "2c4ad50adabd590a87bf212471d41d7af38664a3a5ef759d1a6ab992d9e4851f",
      "at": "2026-10-01T20:53:48.482Z"
    }
  ]
