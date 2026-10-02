# Step 7 adjudicate: initial, round 1, unit 15

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u15.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"15",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-haar-averaging-operator-on-hom-spaces, 0:lem-a-compact-scalar-identity-forces-finite-dimension, 0:lem-compact-convolution-operators-are-hilbert-schmidt, 0:ex-compact-group-with-no-faithful-finite-dimensional-representation, 1:lem-a-rank-one-haar-average-is-a-nonzero-compact-intertwiner, 1:lem-haar-averaging-projects-onto-the-intertwiner-space, 2:thm-finite-dimensional-compact-group-representations-are-completely-reducible, 2:ex-averaging-a-form-for-a-circle-representation.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-haar-averaging-operator-on-hom-spaces",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The finite-rank continuity citation is inaccurately restated: its interface proves only π(g)Tπ(g)⁻¹ for T∈B(H), whereas this item claims it proves σ(k)Tπ(k)⁻¹ for arbitrary pairs of representations on H and J. The generalization needs an argument.",
      "context_sha256": "c4e1e045a1bf5a3de31e2f54a272aba324215049f6a763495e72c9a6193e1f5a",
      "item_sha256": "033e026a0f5c8a4ecd13d414b56fe35631d352f69af764f8d054e5e095530cf7",
      "at": "2026-10-01T20:53:08.463Z"
    },
    {
      "id": "lem-a-compact-scalar-identity-forces-finite-dimension",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 and step 1.1 contradict the operator-norm interface when H={0}: then ||c^{-1}I_H||=0, not |c|^{-1}>0. The hypothesis c≠0 does not exclude the zero Hilbert space.",
      "context_sha256": "57d2d9fb326375c2ee56a866199862549b97a0db95c2a04a8220f9e0c9791624",
      "item_sha256": "673e5fb98b35283f6dfa0ce0ab3adc30bb184cafbc4935dee16b60ef6b86769e",
      "at": "2026-10-01T20:52:55.069Z"
    },
    {
      "id": "lem-compact-convolution-operators-are-hilbert-schmidt",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F7] inaccurately restates the composition theorem for arbitrary topological maps; its supplied interface only covers real-valued functions on subsets of R. Step 1.1 applies it to K×K→K→C, outside those hypotheses.",
      "context_sha256": "7c962da6341ca8943bbfc1f35ce557e62fbfd30666b384638ff821419952c698",
      "item_sha256": "2bdb52551bd89b4bd6d30994cbb8808b3259eedf3b8334ef9bf2322cba808771",
      "at": "2026-10-01T20:52:56.210Z"
    },
    {
      "id": "ex-compact-group-with-no-faithful-finite-dimensional-representation",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title omits continuity, while the supplied representation definition is algebraic. Steps 2.3–4.2 establish only the continuous case, so the title asserts more than the proof establishes.",
      "context_sha256": "fd953fc45d669fe29f5646d5bbe6cf3e16d9c0acacdf3dd487f2c227be0d887f",
      "item_sha256": "a6f7a682b9b71a6a8ef3a2a6d8771df292ae46eabd57fb5dd505f30cc07eead7",
      "at": "2026-10-01T20:53:12.583Z"
    },
    {
      "id": "lem-a-rank-one-haar-average-is-a-nonzero-compact-intertwiner",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[A9] incorrectly asserts integral invariance for every measurable complex-valued function. The supplied dependency requires integrability in the complex case; without it, the displayed integrals may be undefined.",
      "context_sha256": "b703d2255796ce6dd5314fb153a644af166a93b6389f7653e70e8a4f571b88e6",
      "item_sha256": "dba64efcba79a4dfd757ea8fa77d5004f1185d65c587a684a7bf3ce568e85bc7",
      "at": "2026-10-01T20:52:59.421Z"
    },
    {
      "id": "lem-haar-averaging-projects-onto-the-intertwiner-space",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F4] incorrectly states the unit-sphere norm formula without the dependency's nonzero-domain hypothesis. If H={0}, then B(H,J)={0}; its unit sphere is empty, so step 1.3's cited supremum argument fails. The dependency uses the unit ball for this case.",
      "context_sha256": "31ec3d408860f8346cf55a604d7f2dcffdb35ceaa14597a6d81a202c6921a534",
      "item_sha256": "8abcfc49c565ee438e434381694fe2b5ae5091236b26cffa597bde7c369c1128",
      "at": "2026-10-01T20:52:53.656Z"
    },
    {
      "id": "thm-finite-dimensional-compact-group-representations-are-completely-reducible",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F1] omits the averaging lemma's hypothesis that μ is a normalized Haar probability measure. Neither the Given assumptions nor the proof supplies such a measure or invokes Haar existence, so step 1.3 applies the lemma without establishing its prerequisite.",
      "context_sha256": "78ca95dc32593ba99a2ed7754dd4a2d954c2aaab51e5e35643f890168dadfe78",
      "item_sha256": "99a183de6a3b3d007ee0b7da3fda262ce2622c000a1d97673b7ca8d8edc24ce0",
      "at": "2026-10-01T20:53:03.953Z"
    },
    {
      "id": "ex-averaging-a-form-for-a-circle-representation",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 overstates thm-algebra-of-continuous-functions: its interface restricts domains to subsets of R. Step 1.1 applies that restatement to functions on R² and R⁴ without establishing the required joint continuity.",
      "context_sha256": "a3e93725551a862aeca35906d43bd5d9850a28e4e804007020cee81f486a1282",
      "item_sha256": "d3f35ecc1d4403b6c6dd62f67e17d7fda4f67b5338ba25d5267a289800c6bd66",
      "at": "2026-10-01T20:53:14.346Z"
    }
  ]
