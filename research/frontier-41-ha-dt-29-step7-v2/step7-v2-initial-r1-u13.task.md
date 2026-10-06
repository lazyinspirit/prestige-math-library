# Step 7 adjudicate: initial, round 1, unit 13

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/step7-v2-initial-r1-u13.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-41-ha-dt-29",phase:"initial",round:1,unit:"13",input_sha256:"79b0e989c27d1e96f1d9b9eaa6792321ec4c5196c7f8d892843c34832f7ef2a9",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-41-ha-dt-29 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-p-surgery-on-a-smooth-m-manifold, 2:lem-surgery-gluing-has-a-canonical-smooth-structure-up-to-diffeomorphism, 6:thm-surgery-is-reversed-by-dual-surgery, 7:rem-middle-dimensional-surgery-has-an-intersection-form-obstruction, 8:rem-smooth-four-dimensional-surgery-is-not-covered-by-the-high-dimensional-program.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-p-surgery-on-a-smooth-m-manifold",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The claim that different framings give different boundary identifications is false. Precompose φ with a disk diffeomorphism rotating near 0 and equal to identity near ∂D²: the normal framing changes, but the image, boundary gluing and surgery remain identical.",
      "context_sha256": "4e18f4e9e319b67f8a5d273de8e3ce75deafd55e239cbdb16cca76224f6d4b0b",
      "item_sha256": "8438ae60ab751372230d24d220535d8e064892dee8c4e49590b10433d1a6c81e",
      "at": "2026-10-06T06:58:01.854Z"
    },
    {
      "id": "lem-surgery-gluing-has-a-canonical-smooth-structure-up-to-diffeomorphism",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F7] and step 2.1 misidentify surgery gluing as a handle attachment. An index-(p+1) handle with attaching region S^p×D^q is D^{p+1}×D^q in dimension m+1; surgery glues its outgoing boundary in dimension m. Thus [F6] does not apply as cited.",
      "context_sha256": "eec691b02746d97a3e7a920b2ef253a851e5c250819be6ea4059281ab59e64dd",
      "item_sha256": "8a1c84a8e3807cdb3e1aabb9ca88dab8c43949402c2043c038f40c622f6f0ecc",
      "at": "2026-10-06T06:58:07.421Z"
    },
    {
      "id": "thm-surgery-is-reversed-by-dual-surgery",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 misstates clause (ii) of the upper-boundary theorem: it supplies homotopy equivalences of pairs, not a reversed handle/collar presentation. Rounding independence does not supply the missing diffeomorphism of traces.",
      "context_sha256": "f9be2a5462f332f7ba90f9210ad663856f2711009f8f1e6e17a24823cdf72b78",
      "item_sha256": "4df7158d4ec6c0015d5e33b79effcd9c8d0f00f199c54ac9f83c939a573f2598",
      "at": "2026-10-06T06:57:54.695Z"
    },
    {
      "id": "rem-middle-dimensional-surgery-has-an-intersection-form-obstruction",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "(iii) wrongly includes odd m: in dimension 2n+1 the obstruction uses a quadratic formation, not a quadratic refinement of a middle-dimensional intersection form on the surgery kernel. [Ranicki, Ch.12](https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro)",
      "context_sha256": "bdd014522bd838c1fa9e7cd541e02521a3510c656684be052139e70767c2be41",
      "item_sha256": "7ad6d17ebf5624a3afaec77828db75d2d6446411aac5b87427bcd75a63d51083",
      "at": "2026-10-06T06:58:50.324Z"
    },
    {
      "id": "rem-smooth-four-dimensional-surgery-is-not-covered-by-the-high-dimensional-program",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The blanket denial of any smooth 4D existence or vanishing statement contradicts the supplied interfaces: framed 1-surgery on S^1×S^3 yields S^4 and kills π_1, with m=4,p=1,q=3 satisfying p≤q−2.",
      "context_sha256": "c1c3bfd0d4bda267ef16a4da78e86cfb499d01f69a344b005997b9cc370a12c2",
      "item_sha256": "20e59d963258e2197d1d84132adf595418361c8387d89e57b7ec8e07efbd44e2",
      "at": "2026-10-06T06:58:17.305Z"
    }
  ]
