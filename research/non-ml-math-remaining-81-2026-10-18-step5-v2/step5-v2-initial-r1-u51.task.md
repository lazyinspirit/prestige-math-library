# Step 5 adjudicate: initial, round 1, unit 51

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-51-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u51.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"non-ml-math-remaining-81-2026-10-18",phase:"initial",round:1,unit:"51",input_sha256:"5a7686cf6af281fffc281470b9fd4d1b4497cd3e88649ffa4676dd5e748ac1b1",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run non-ml-math-remaining-81-2026-10-18 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-the-nondegenerate-integral-specialization-has-a-quantum-casimir, 3:thm-prime-power-numerical-serre-half-is-the-integral-specialization, 6:prop-green-hall-pairing-is-nondegenerate, 7:lem-finite-dynkin-hall-algebra-is-simple-generated, 7:lem-green-hall-coproduct-is-coassociative, 8:thm-green-hall-coproduct-is-a-twisted-bialgebra-map, 11:prop-ringel-map-is-well-defined-and-has-composition-image.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-the-nondegenerate-integral-specialization-has-a-quantum-casimir",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 uses F1’s nondegenerate Kashiwara/Green form to claim the Drinfeld-pairing Gram matrices from F2 remain invertible after specialization. The interfaces give no identification between these pairings, so specializing Θ—and thus the Casimir construction—is unproved.",
      "context_sha256": "dad540bfd612e3cf62ee9c407fbf184fe24004c6df2f9afca5ed0a60058af4da",
      "item_sha256": "ff3bcd6290ed329034445dcdf652418544eefc101bcb630b7e8bff75e430b73e",
      "at": "2026-10-18T04:37:20.307Z"
    },
    {
      "id": "thm-prime-power-numerical-serre-half-is-the-integral-specialization",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 relies on independence of the specialized toral and triangular factors to conclude both derivatives vanish. F4 attributes this to the Casimir lemma, but its supplied interface does not establish that independence; the generic crossed-double result alone does not justify ",
      "context_sha256": "3394cbaf446d8071ffdc02cfe4abffc0d08440dc6971e7a1a2b746699963099f",
      "item_sha256": "c46ad1d3ca3a4c0cd2b5f64433094958c824c9d5b3ce1136933f3690916e66f0",
      "at": "2026-10-18T04:36:43.936Z"
    },
    {
      "id": "prop-green-hall-pairing-is-nondegenerate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The adjointness step assumes [R] has coefficient ν^{χ₀(M,N)}g^R_{M,N} in [M]⋆[N]. Neither F1 nor F2 establishes this, and the supplied coproduct interface does not define ⋆. The key left-side coefficient is unsupported.",
      "context_sha256": "c3f33fe45f6ce3bc6c1c214657707c8812df834cc211eea169a99dca3ef467b3",
      "item_sha256": "6ebde45ca466a8e93bc8a27dbd3ec8b80259b0292b00b61219a622cb2f2a25fe",
      "at": "2026-10-18T04:36:24.395Z"
    },
    {
      "id": "lem-finite-dynkin-hall-algebra-is-simple-generated",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 misstates the twist: the supplied definition uses χ₀(M,N)=dim Hom−dim Ext¹ and says its identification with the K₀ Euler form is a separate obligation. The proof neither establishes nor cites that identity.",
      "context_sha256": "d034a88f5822beb20d7d3b0215fc379fa746c4a98c266f4f0a65bad873b64229",
      "item_sha256": "ac054a349eec6c574d5363efeb8f96677f3e71120fbf0fe8a0cf072291571993",
      "at": "2026-10-18T04:36:52.052Z"
    },
    {
      "id": "lem-green-hall-coproduct-is-coassociative",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The twist comparison is unproved: the coproduct interface uses χ₀(M,N), but the proof replaces it with ⟨M,N⟩. The supplied interfaces never identify χ₀ with that Euler form, so add that dependency or establish the identity.",
      "context_sha256": "4a697367485378dfa3df148cc010e02e53874c463069c23a8bb44e8ef98c0ad3",
      "item_sha256": "99b3fc39674c786b7f90fb7a4b3cce26d2de1714dd13d90a0e25c97ba72e6411",
      "at": "2026-10-18T04:36:45.494Z"
    },
    {
      "id": "thm-green-hall-coproduct-is-a-twisted-bialgebra-map",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title overclaims: multiplication is defined on completed tensors only when each output coefficient is a finite sum, and the statement explicitly disclaims an algebra structure on the whole completion. The proof shows multiplicativity on Green images, not an algebra map into t",
      "context_sha256": "4810571c52cc874acb3c0756cb59b8740e8b2bf0bd14b9bb876829f511f34468",
      "item_sha256": "09409172fad3e2c066c565afa97aa378cc8ea61aaa2e46583276f736706e0c82",
      "at": "2026-10-18T04:36:35.303Z"
    },
    {
      "id": "prop-ringel-map-is-well-defined-and-has-composition-image",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 6.1 attributes counit agreement on generators to [F4], but that interface supplies only coproduct agreement. The listed Green interface says a counit exists, not that the two counits agree; preservation required for a bialgebra map is unproved.",
      "context_sha256": "f8ac30b4e028370d56f16771a03c7f6b791f8cc1723c9b9097356d07ba058056",
      "item_sha256": "99a8d1256ae35d65f09cad823661b636941f94b114860963e4f18d6cebeb8cf2",
      "at": "2026-10-18T04:37:38.318Z"
    }
  ]
