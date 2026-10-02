# Step 7 adjudicate: initial, round 1, unit 22

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u22.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"22",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-prefix-position-insertion-rewrites-a-trivial-braid-word-into-combing-factors, 10:lem-the-combed-geometric-decomposition-is-unique, 11:ex-the-free-kernel-words-for-three-strand-braid-combing.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-prefix-position-insertion-rewrites-a-trivial-braid-word-into-combing-factors",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "For n=3 and W=σ₁σ₁⁻¹, all j_k=3 and the tracked strand stays at q₃ outside U₁. It never enters either letter’s support, contradicting the universal support-entry claim in the Statement and step 3.1.",
      "context_sha256": "ceb274233e0174cf89dde0ae97390b54260c1fb5d847f3ba6ba4b4effff99953",
      "item_sha256": "b68132da8c43553ad233b398599dd3a8f3c66d95b456a9cb97f548e21c5060d4",
      "at": "2026-10-01T20:55:17.267Z"
    },
    {
      "id": "lem-the-combed-geometric-decomposition-is-unique",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.2 falsely asserts A∘ρ′=ρ. At t=0, A(ρ′(0))=(-2h,0), whereas ρ(0)=(-h,0). Since A is affine, the required displacement identity is aρ′=ρ; the stated similarity calculation is invalid.",
      "context_sha256": "43234aa3fd84f2f3df5d357d02d3e4ffcc3e521ce7ca0a7659e259afd914672c",
      "item_sha256": "96a8b4ba69187e30662e7ea03131286f406574f79aaf3a1c05af9352818ec09e",
      "at": "2026-10-01T20:55:31.494Z"
    },
    {
      "id": "ex-the-free-kernel-words-for-three-strand-braid-combing",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The Given incorrectly describes B3's word problem as free cancellation. The word σ1σ2σ1σ2⁻¹σ1⁻¹σ2⁻¹ is freely reduced and nonempty but equals 1 by the defining braid relation.",
      "context_sha256": "737d6252c5f761d7b83e50a97bb8d6c4fd91ee42775c7d2e73bb3c87bb9e8665",
      "item_sha256": "ca833b20eacdbf98edb99cd555e40a7d2e8f229d088f5b4f149c7aa5d15a30dc",
      "at": "2026-10-01T20:55:07.574Z"
    }
  ]
