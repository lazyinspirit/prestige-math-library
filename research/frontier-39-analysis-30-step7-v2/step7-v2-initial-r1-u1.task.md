# Step 7 adjudicate: initial, round 1, unit 1

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/step7-v2-initial-r1-u1.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-39-analysis-30",phase:"initial",round:1,unit:"1",input_sha256:"9338524b8f90ef76ff4d0d3c41b2d942e870edbc6da3d7062fa8aeac770c3e1f",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-39-analysis-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:cex-classical-parabolic-corner-regularity-needs-compatible-initial-and-boundary-data, 2:rem-backward-ill-posed-does-not-mean-universal-nonexistence, 3:cex-final-time-face-is-not-part-of-the-parabolic-boundary.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "cex-classical-parabolic-corner-regularity-needs-compatible-initial-and-boundary-data",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Steps 1.1 and 1.2 use sequences (1/k,0) and (0,T/k), undefined at k=0 under the library’s mandatory zero-based indexing. Thus the stated sequences and their claims for every k are invalid; use k+1 in both denominators.",
      "context_sha256": "f1a611645b6553c90bfd7d8954708c03f4eaa6427791f437505a76198757bffe",
      "item_sha256": "e069daff97884521c315b62a32acfb5f593bb1f9f34bafaa824f283c48ae8d27",
      "at": "2026-10-06T01:15:41.414Z"
    },
    {
      "id": "rem-backward-ill-posed-does-not-mean-universal-nonexistence",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The cited H_t acts on L^p(R^n), not L^2(0,π), and is not the interval Dirichlet flow. Even zero-extending interval data generally gives H_t f nonzero at the endpoints, so the claimed backward solutions are not licensed by this dependency.",
      "context_sha256": "f2162d418996a10489fc7c6062a6b1195f3c29bd6739dccfddb0f81dc90954d4",
      "item_sha256": "8147a74024956bea5170f273702d75318b7d2f5812c8839f13b8d202a09a749e",
      "at": "2026-10-05T21:15:24.092Z"
    },
    {
      "id": "cex-final-time-face-is-not-part-of-the-parabolic-boundary",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 inaccurately restates the cylinder interface: inequalities “in Q” include t=T with a left time derivative, whereas F1 says they refer to the open cylinder. The supplied definition explicitly rules out that reading.",
      "context_sha256": "c27aef40aa6c87f5408c77d11f530ba9f5ee26e234f4b597656989a946a4d74d",
      "item_sha256": "2abe0423ee7ceeab86d7a5969fd72a1a1b5bcd3cbe6c0855b4c765b5db057f11",
      "at": "2026-10-06T01:15:41.698Z"
    }
  ]
