# Step 5 adjudicate: initial, round 1, unit 38

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-38-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u38.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"38",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-na-hcurl-space, 1:def-na-zero-tangential-hcurl, 2:lem-na-weak-hcurl-tangential-trace, 6:thm-na-uniformly-bounded-commuting-cochain-projection.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-na-hcurl-space",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title restricts the space to a polyhedron, but the definition assumes only that Ω is open and applies to arbitrary open subsets of ℝ³. The title therefore asserts more than the item establishes.",
      "context_sha256": "4258d73d9b4e91abfb6fc62c30421e982f75a1c37fefbadedc41db3adecd1e4f",
      "item_sha256": "3a867150c9fe1e2ce8b52382f218178442dc5c8079356f89cf5ed524fa5d6df6",
      "at": "2026-10-18T03:21:36.822Z"
    },
    {
      "id": "def-na-zero-tangential-hcurl",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition allows any open Ω, but its unqualified remark claims every member has zero weak tangential trace. The cited lemma establishes this only for bounded Lipschitz polyhedra with a finite matching affine tetrahedral mesh.",
      "context_sha256": "6b68aeb39d113d404364931dfefff1285cbbfa240be726420af42e0d3b2a5ad9",
      "item_sha256": "75d2ceb49de892e50146dd01571f919fe9e1818d40062b03fdd939e2e7987c7c",
      "at": "2026-10-18T03:21:35.972Z"
    },
    {
      "id": "lem-na-weak-hcurl-tangential-trace",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: “smooth” is not specified up to the boundary, but [F4] requires C¹ on each closed tetrahedron. Interior smoothness of H(curl) and H¹ fields need not give classical boundary values, so the asserted surface integral may be undefined.",
      "context_sha256": "01778e77a27fc17867042a022965b08d0136a34ae5004b93fedfb1a06a1355ef",
      "item_sha256": "e1bfe40473f05bc1fb4831a6288f9d60f72e2cbb165acefbd3555e871d5e95e2",
      "at": "2026-10-18T03:22:28.718Z"
    },
    {
      "id": "thm-na-uniformly-bounded-commuting-cochain-projection",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2 says [F1] identifies the minus-family target with E_h^k∩H_0Λ^k, but its supplied interface only names E_{h,-}^k=E_{h,0}^k and never identifies that target. The homogeneous projection target is therefore unproved.",
      "context_sha256": "3450184530a6d7d66c002a8bd993c21360d04f99a86132a74778e36f8fe0ee3a",
      "item_sha256": "01c93e4ce5e0cab9bf17a5b3c8dd76d341171d9bd79ce12508c355f9b8438f7e",
      "at": "2026-10-18T03:22:20.033Z"
    }
  ]
