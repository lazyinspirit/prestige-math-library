# Step 5 adjudicate: initial, round 1, unit 33

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-batch-33-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u33.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-44-special-representation-examples-28-six-step",phase:"initial",round:1,unit:"33",input_sha256:"a3c0decd85fdbe71b25b7ccd7e6264df187be55612edc2bcfbd9729c1e231624",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run frontier-44-special-representation-examples-28-six-step --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 10:lem-compact-controlled-whitney-spaces-admit-commuting-radial-collars, 10:lem-controlled-stratified-submersions-have-continuous-local-trivializations, 11:thm-algebraic-whitney-strata-have-controlled-local-conical-neighborhoods, 13:lem-complex-algebraic-stratifications-have-finite-conical-cochain-models.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-compact-controlled-whitney-spaces-admit-commuting-radial-collars",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 attributes frontier-distance displacement bounds to the control-data dependency, but its supplied interface provides none. Step 1.1 relies on those bounds for closed-band containment without proving them, leaving an essential prerequisite unsupported.",
      "context_sha256": "773f92ae7af9c263be510120fb2b89a6e0a5d110901917e306bed44d0e85fdca",
      "item_sha256": "923e4e205a124eb97300d69153010394acbb3255e141eac844109c5fd1c1b736",
      "at": "2026-10-11T15:26:45.391Z"
    },
    {
      "id": "lem-controlled-stratified-submersions-have-continuous-local-trivializations",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 invokes a frontier-distance displacement bound from [F1], but the supplied control-data interface gives no such bound. The proof neither establishes it nor licenses its use to deduce local boundedness across lower strata.",
      "context_sha256": "b27cd4b1b07d8ecda352e4470e4ed16306f54d5ca3165f0dc997c712369c6e4d",
      "item_sha256": "1da75b7142deafddcf849248a5e772876f52e43c5df67a4113a5eef7e0d8a8d0",
      "at": "2026-10-11T15:26:34.878Z"
    },
    {
      "id": "thm-algebraic-whitney-strata-have-controlled-local-conical-neighborhoods",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 and step 1.1 assert that compatible control data can extend a prescribed ordinary R-tube. The supplied dependency guarantees existence, but no prescribed-tube extension. Thus the claimed preservation of the chosen projection and radius is unproved.",
      "context_sha256": "d2333a054a0795b99e240789067f38c3eaa00592ed8d0915c209c5ee24a813b3",
      "item_sha256": "77184900fdcc2ed961853668d5f26222354a8c878c5b2836e5cc3513818689c1",
      "at": "2026-10-11T15:26:10.207Z"
    },
    {
      "id": "lem-complex-algebraic-stratifications-have-finite-conical-cochain-models",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 7.1 cites F3 for reconstructing an arbitrary constructible complex on a stratified product as constant in the ball direction. F3 supplies no such comparison; F2 gives only topological triviality, and F4's product formula covers base pullbacks.",
      "context_sha256": "faa0b5ea6378255bbb72f59b438e5e8f30a658755aaee0a807a6af073418c25c",
      "item_sha256": "0d6fce9870a91566826e6e100f91243c30b5bd7e738fc5bf73b2765e7140d59c",
      "at": "2026-10-11T15:27:28.347Z"
    }
  ]
