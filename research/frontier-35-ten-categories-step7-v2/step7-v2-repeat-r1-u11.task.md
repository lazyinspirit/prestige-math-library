# Step 7 adjudicate: repeat, round 1, unit 11

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/repeat-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/step7-v2-repeat-r1-u11.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned frozen-frontier items, including published items if they belong to that frontier. Outside consumers are handled separately by consumer maintenance, never by this repair/adjudication task. Record their affected uses; do not edit them, rejudge them, or treat outside findings as frontier gate blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run:"frontier-35-ten-categories",phase:"repeat",round:1,unit:"11",input_sha256:"90768c273d6e963f7e14d09fd66f42f4306f5af461f572c797393bd9bd2d98c2",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-35-ten-categories --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. Downstream is an array of consumer IDs affected by a Statement/Definition change; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  {
    "id": "def-partition-young-diagram-and-conjugate-partition",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The partition is defined as a finite sequence indexed λ₁,…,λₖ, but the library convention makes sequences functions on ℕ indexed from 0. The definition omits λ₀ and its finite-sequence data type conflicts with that convention.",
    "context_sha256": "1e74ee533540f2743725c4e271477d5c8d7566bbd1de614c9bce4750531e6d7a",
    "item_sha256": "39a10ee09c184dd85315d7ca2ea7530e5abbbb722070119a7dccec98f4633dca",
    "at": "2026-09-27T05:26:47.581Z"
  },
  {
    "id": "def-row-and-column-stabilizers-of-a-tableau",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "For λ=∅, the supplied partition interface gives no λ₁. This definition still uses B₁,…,B_{λ₁} and a product ending at S(B_{λ₁}) under its unrestricted λ⊢n hypothesis. The final n=0 sentence does not make those formulas well-defined.",
    "context_sha256": "57fe4981565f27b0797b024c8f1945854e4514f46c0598394602f69499933b37",
    "item_sha256": "2a758270058b68207d8bb38f5f32b093b0c0f98e5f6fe695db1dbb33ef363ce0",
    "at": "2026-09-27T05:26:35.912Z"
  },
  {
    "id": "ex-removable-nodes-and-row-endpoints",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 1.4 uses λ₁=3>λ₂=2 and λ₂=2>λ₃=1 to justify μ’s addable nodes. But λ=(3,3,1), so λ₂=3. Both cited inequalities are false as written; the step requires μ’s parts.",
    "context_sha256": "eda3533215428024aeb2e9f8930ad7756558de13812840a69dd795e5250b2215",
    "item_sha256": "11ad06de94f7ce73519a32aafb5014e5a172f65338a094e3b9f541f91a0e155f",
    "at": "2026-09-27T05:27:24.787Z"
  },
  {
    "id": "lem-unipotent-invariants-are-exact-over-c",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The title claims exactness for unipotent invariants over C without a finiteness condition. For the complex upper unitriangular group acting on C² by t·(x,y)=(x+ty,y), invariants fail to preserve the surjection C²→C, (x,y)↦y. The proof covers finite U only.",
    "context_sha256": "4f559770b84eeafea7efec8a45219e5a577d04357da76286b22319920d09644e",
    "item_sha256": "5dfc46857a4c117b81b547e47834bb2b47bc67a0cf584cf41209576abc513939",
    "at": "2026-09-27T05:29:14.388Z"
  }
]


