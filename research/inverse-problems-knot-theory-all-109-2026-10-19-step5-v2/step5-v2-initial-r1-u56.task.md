# Step 5 adjudicate: initial, round 1, unit 56

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-56-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u56.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"inverse-problems-knot-theory-all-109-2026-10-19",phase:"initial",round:1,unit:"56",input_sha256:"c872603b0f7c95c42125928ec1ced19e672caec5508e4ce625685b74e981d23d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run inverse-problems-knot-theory-all-109-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-wirtinger-crossing-ball-cover, 3:alg-knot-wirtinger-presentation-from-code, 4:thm-knot-wirtinger-presentation-correctness, 5:lem-explicit-unknot-and-figure-eight-oriented-wirtinger-codes, 5:cex-knot-kt-01-boundary-case.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-wirtinger-crossing-ball-cover",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title promises a crossing-ball cover of the knot complement, but the cover constructed is only of the spine Y, with crossing sets V_i that are open 2-disks; no crossing-ball cover of E_K is established.",
      "context_sha256": "3718dd15a70879dc5836e860a1e87523300f8494bca0e4a50e165667292504a2",
      "item_sha256": "8f22e7dd7d35763734b8ee621749b713c68eeb99c04ced7b3896ef56672d0d25",
      "at": "2026-10-21T15:05:49.624Z"
    },
    {
      "id": "alg-knot-wirtinger-presentation-from-code",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The crossing relation is justified only with the lemma’s common upper-collar basing paths, but the algorithm permits arbitrary fixed basing paths. Independent path choices conjugate meridians differently, so the stated symbols need not satisfy the relator; require the common path",
      "context_sha256": "e694caa0231b5624d11cd4a8d5b467b95e6aa450f1a02930072efec54a1b22b2",
      "item_sha256": "3767c0a2ee358f841471d1edfcb498710e7beb28afef03a17ac1d122b5e2b5eb",
      "at": "2026-10-21T15:02:43.581Z"
    },
    {
      "id": "thm-knot-wirtinger-presentation-correctness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 gives the meridian conjugacy equation but does not identify the annular-core image in π1(U) with that relator. Step 2.1 needs this identification for the van Kampen quotient; the equation alone does not supply it.",
      "context_sha256": "e356b7c1711650176cf46810fd829d935500e57fcbb6ea0fe2c65c8e810a38df",
      "item_sha256": "f8909cb6680b8684ff097436233e32860f971b5ce81b8275af53f175019ba317",
      "at": "2026-10-21T15:02:13.373Z"
    },
    {
      "id": "lem-explicit-unknot-and-figure-eight-oriented-wirtinger-codes",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F6 misstates the supplied polygon theorem as constructing a vertical-slab, convex-cell triangulation; its interface only asserts that every simple polygon admits a triangulation. Step 2.1 relies on that unsupported construction for the face-disk extension.",
      "context_sha256": "b76d8af6fe6cf4b20153323ed0fe523544f9e656be01cb2dc0e4df4c0b988098",
      "item_sha256": "80aeb40c275168e8952938e0d0f8fb297c0b0d92319b3c022f461d2956cbfdaf",
      "at": "2026-10-21T15:02:38.541Z"
    },
    {
      "id": "cex-knot-kt-01-boundary-case",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F7 misstates its cited dependency: def-commutator-and-commutator-subgroup defines [G,G] but does not identify G^ab with G/[G,G]. That assertion is supplied by F8, yet step 1.1 relies on F7 for the unknot's abelianization.",
      "context_sha256": "8142a559124a7815dc65296b865b9a84aa1f573730e7513571c75a0f4fa1d8ad",
      "item_sha256": "c65dff93601c00b9579b45800b74b9ee7b6f7c3a3c97e9965a7244bcf754ba61",
      "at": "2026-10-21T15:06:46.902Z"
    }
  ]
