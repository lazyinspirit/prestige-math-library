# Step 7 adjudicate: initial, round 1, unit 1

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-42-coxeter-32-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-42-coxeter-32-step7-v2/step7-v2-initial-r1-u1.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-42-coxeter-32",phase:"initial",round:1,unit:"1",input_sha256:"ce87a1bc88a8f056e771220d400256d1be4d20fe7e966bd5434d1ad410d4a79e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-42-coxeter-32 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-hh-finite-polynomial-and-localization-constructions, 0:lem-hh-free-associative-ring-and-relations-descent, 1:ex-hh-elementary-tensor-presentations-and-invariant-contractions, 2:lem-hh-coefficient-extension-and-finite-tensor-separation.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-hh-finite-polynomial-and-localization-constructions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Part 2 asserts finiteness of the Coxeter generator set without a finite-rank hypothesis. The Coxeter system W=⊕_{i∈ℕ} C₂ with its standard generators has an infinite generator set; finiteness of n does not establish this claim.",
      "context_sha256": "343b89a4bdb6160ca256f0608464237a294e9dedd4948144050af0ad08bd08dc",
      "item_sha256": "a92be716a4ec3844ea1a7d752f9c53209e57c40896f1955c1e91f3fef9a632cc",
      "at": "2026-10-08T00:55:18.086Z"
    },
    {
      "id": "lem-hh-free-associative-ring-and-relations-descent",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 inaccurately restates the tensor-product interface: balanced maps induce group homomorphisms, not necessarily R-linear maps. Over R=C, b(z,w)=conjugate(zw) is balanced but induces conjugation, which is not C-linear.",
      "context_sha256": "f2a7082a901fe22e890ab69837c49d9bf6a654e63cdf5533b104d13baaea5f06",
      "item_sha256": "ae058d45b33f8db63e12bd0f50e4b967e266ed3a0e05d54089e87bf78fd94dce",
      "at": "2026-10-08T00:54:49.562Z"
    },
    {
      "id": "ex-hh-elementary-tensor-presentations-and-invariant-contractions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 incorrectly claims every balanced pairing induces a linear map; the cited interface guarantees only a group homomorphism. Over k=C, b(x,y)=conj(x_1 y_2) is balanced but its induced map is not C-linear.",
      "context_sha256": "d9244ca3a77e867a92acad225c0b6d19d0c61c473970334af257c12a1848a69f",
      "item_sha256": "0819db8ec1f2ffac2e99690aea6d1585398399543c6af6f970abc38fd921d02d",
      "at": "2026-10-08T00:54:51.300Z"
    },
    {
      "id": "lem-hh-coefficient-extension-and-finite-tensor-separation",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title promises an exact Choice boundary, but the proof establishes only sufficiency of AC in arbitrary dimension and a choice-free finite-dimensional case. No necessity or sharp boundary is proved.",
      "context_sha256": "493730292796b5e239455f7ea674f207824647bf7b87ba7735124c91069f5be8",
      "item_sha256": "9e16f73fc853b6b589550e781cd4fb4c8b7710913eff4246d2d58e140f884411",
      "at": "2026-10-08T00:54:43.391Z"
    }
  ]
