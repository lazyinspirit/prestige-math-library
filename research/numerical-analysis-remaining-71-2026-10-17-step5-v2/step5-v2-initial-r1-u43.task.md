# Step 5 adjudicate: initial, round 1, unit 43

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-43-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u43.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"43",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 5:lem-pe11-gauge-conforming-edge-approximation, 9:thm-pe11-edge-maxwell-spectral-approximation, 10:ex-pe11-unit-cube-maxwell-mode.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-pe11-gauge-conforming-edge-approximation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 falsely calls every field in K_h continuous: lowest-order Nédélec conformity enforces tangential continuity only, and curl-free fields can jump normally across facets. K_h⊂K follows from V_h⊂V, but does not license the continuity claim.",
      "context_sha256": "dcef911c598d7d7101aef68b7cbf7bdaa7490297cec60a598a96bd921062e2fd",
      "item_sha256": "af29f19644c35cfd96fdfd6da7d5f8b05c654c4d938e5b504f2dd8e01f6dc210",
      "at": "2026-10-18T03:24:16.445Z"
    },
    {
      "id": "thm-pe11-edge-maxwell-spectral-approximation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F6 overstates lem-pe11-hcurl-weak-limit: its interface gives weak-curl subsequences and preservation of H₀(curl), not that H(curl) is Hilbert. Step 1.1 cites this unsupported restatement; prove that claim from the closed graph and the L² Hilbert structure instead.",
      "context_sha256": "8cb30202462765253c99aa8c407736ca7c9cfe037dde07a992fa08eb2e56137d",
      "item_sha256": "55db43be3cb9cec02ee3f868e2eea2996aedd6c6e5d910d6e712b0e448824ddf",
      "at": "2026-10-18T03:24:48.202Z"
    },
    {
      "id": "ex-pe11-unit-cube-maxwell-mode",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 says [F5] gives full-multiplicity discrete cluster approximation, but [F5] only gives the compact coercive problem’s continuous spectrum. That approximation is supplied by [F3], so the stated dependency inference is inaccurate.",
      "context_sha256": "ccc261d5f681dde0ed79e5c9af5acc6ea6d20dd8de0aebb48c98b42ff1ec6a9f",
      "item_sha256": "414493361d99de407fbf8d0f954c49eba472128e8fd6d1adcd1541ff9c2a65e0",
      "at": "2026-10-18T03:24:24.333Z"
    }
  ]
