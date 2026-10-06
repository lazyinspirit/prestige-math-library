# Step 7 adjudicate: initial, round 1, unit 7

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/step7-v2-initial-r1-u7.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-41-ha-dt-29",phase:"initial",round:1,unit:"7",input_sha256:"79b0e989c27d1e96f1d9b9eaa6792321ec4c5196c7f8d892843c34832f7ef2a9",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-41-ha-dt-29 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-euler-characteristic-of-a-compact-manifold, 1:def-isolated-zero-and-local-index-of-a-vector-field, 10:ex-a-nowhere-zero-vector-field-on-an-odd-sphere, 11:rem-the-outward-boundary-hypothesis-cannot-be-replaced-by-nonzero-on-the-boundary, 11:cex-an-inward-radial-field-violates-the-outward-boundary-formula.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-euler-characteristic-of-a-compact-manifold",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The boundary-inclusive domain misstates def-smooth-manifold, whose interface defines only manifolds without boundary. In particular, [0,1] is outside that definition; a smooth-manifold-with-boundary interface is needed.",
      "context_sha256": "89628fc1301d2caf639ae73871a0ca17a395564b305c3d99f5c8c6d52cf8b41e",
      "item_sha256": "119e162be43c8917f06cdb712bec44778b98c13149f591fb42eac19b100f0f8a",
      "at": "2026-10-06T06:54:51.669Z"
    },
    {
      "id": "def-isolated-zero-and-local-index-of-a-vector-field",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The chosen chart is not required to be smooth. The supplied chart interface permits arbitrary homeomorphisms, for which dφ may not exist, leaving Xφ and the index undefined. The induced tangent-bundle chart dependency requires a smooth chart.",
      "context_sha256": "8f5ebb5e90dd6abbee87245df3eeb55b3e4aefdbd8cd1b2d1972dcd8b7663816",
      "item_sha256": "33723b73677ed2530634aa063071c8b907de602fd448321cd74cf546289383c6",
      "at": "2026-10-06T06:54:57.935Z"
    },
    {
      "id": "ex-a-nowhere-zero-vector-field-on-an-odd-sphere",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The smooth-vector-field definition assumes ACω. The item assumes AC only for later comparisons, so its unconditional field claim lacks that prerequisite or a choice-free construction of the smooth tangent-bundle structure.",
      "context_sha256": "67440d5ceefe66f0eec13bed83f48d4269873b70286176fd52052441485668bc",
      "item_sha256": "0c7d115c26184e58d1ec71ed9d6681305f93b6be509ee5a0ccf24e6abfd4528d",
      "at": "2026-10-06T06:55:03.679Z"
    },
    {
      "id": "rem-the-outward-boundary-hypothesis-cannot-be-replaced-by-nonzero-on-the-boundary",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The final paragraph drops the boundary lemma's isolated-zero hypothesis. A smooth field on D^n can vanish on an interior ball yet be nonzero on the boundary; its zeros have no local indices, so the asserted index sum is undefined.",
      "context_sha256": "41c8ce2a62b66b657f8da02619e366d671d24dead1cf84af7bf61d4bdb7f788d",
      "item_sha256": "b7fa918d6213ebdf95f523385fa76097dc876174642f42e0abe3961a1aa2cb26",
      "at": "2026-10-06T06:54:59.481Z"
    },
    {
      "id": "cex-an-inward-radial-field-violates-the-outward-boundary-formula",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The counterexample repeats the argument already supplied in rem-the-outward-boundary-hypothesis-cannot-be-replaced-by-nonzero-on-the-boundary: the same odd-dimensional ball, inward radial field, index −1, and Euler characteristic 1. No different proof route is given.",
      "context_sha256": "7de82aed8c4970328fc5398ae07685097dd8450f66338f6ee712bb3db1b72760",
      "item_sha256": "b1b31d458fa6120bb9e2371b008553ec568d18ac84abe0db9a333ab52383b72a",
      "at": "2026-10-06T06:55:06.909Z"
    }
  ]
