# Step 7 adjudicate: initial, round 1, unit 1

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u1.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-40-geometry-braids-rep-27",phase:"initial",round:1,unit:"1",input_sha256:"2f03bb52479aaa390bb3dcd48c71478e0016d3408c93c2f9769a7db5ae31ba68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-40-geometry-braids-rep-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-plane-projective-curve, 2:def-tangent-lines-plane-curve-point, 6:cor-pascal-bezout-obstruction-template, 6:def-flex-and-bitangent-plane-curve, 6:thm-bezout-uniqueness-low-degree-interpolation, 8:ex-flex-cubic-contact-order-three.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-plane-projective-curve",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The choice ledger contradicts the proof: uniqueness of the defining form invokes the supplied radical-ideal correspondence, which assumes AC, yet the final remark says AC is used only to identify components and defining-form consumers need no choice.",
      "context_sha256": "2f92618da00f625f9d367f337a126eec9c46c9f15df3cb91fd123c6d4e1f17d1",
      "item_sha256": "f110d4c65863972134387cfd1f6840f99ded7e163afd94f99da32190187aac23",
      "at": "2026-10-05T19:25:50.814Z"
    },
    {
      "id": "def-tangent-lines-plane-curve-point",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The existence remark incorrectly claims c is determined by f up to order. Over C, f=u=1·u=(1/2)·(2u). UFD uniqueness permits rescaling linear factors, which changes c; normalization is required.",
      "context_sha256": "5050c4a1d11d252ebd4b22ada99bf937dd6b5ab13aa536e3ba8cff95cd532a0a",
      "item_sha256": "c3cc1b0404413c9f44bad918de3b492124079e3e880c6b4a2cddc14ba509b05b",
      "at": "2026-10-05T19:25:46.744Z"
    },
    {
      "id": "cor-pascal-bezout-obstruction-template",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F2] omits the supplier's finiteness hypothesis. For C=E a line, the local intersection multiplicity at any point on that line is not a finite positive integer. Step 1.1 has the needed hypothesis, but the dependency restatement is false as written.",
      "context_sha256": "fe3bf06d707d77a4119191cb948730ad29c88ee423522bd834e75a2252560c99",
      "item_sha256": "f4bb32576c1860eef8d03860ea0c43ad1ecbea28430fcbaa3d51ffcea2ca532e",
      "at": "2026-10-05T19:26:13.175Z"
    },
    {
      "id": "def-flex-and-bitangent-plane-curve",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The degree-bound remark omits the cited corollary's essential hypothesis L⊄C. For C=L of degree 1, L∩C is infinite and every local intersection multiplicity is ∞, contradicting the asserted bound for a line.",
      "context_sha256": "c3971c0285ee983b0d53e21e597b5f49c5e685539873a1426d66e9b36233fd24",
      "item_sha256": "425605d71def55d0036ba5e78751a904f0554b3e8345a15223911265af162525",
      "at": "2026-10-05T19:26:16.355Z"
    },
    {
      "id": "thm-bezout-uniqueness-low-degree-interpolation",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F2] omits the supplier’s finiteness hypothesis. For C=D a line and p on that line, the local intersection length is infinite, not a positive integer. Thus the dependency restatement is false as written.",
      "context_sha256": "521eaf5c8b62db4589cf465e01e4267135887b8059f8e766ce3f6b12193d1d83",
      "item_sha256": "600119912001754108d552f536595127991d7a168df222dcce17a7122faab58a",
      "at": "2026-10-05T19:26:06.423Z"
    },
    {
      "id": "ex-flex-cubic-contact-order-three",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 inaccurately restates the flex criterion without requiring T not to be a component. A smooth point on a line has identically zero tangent restriction but is not a flex. The cited corollary explicitly excludes this case.",
      "context_sha256": "b99cd042bc9cda5a18744fb39389fe1d9bbbb1a71fe77d7cc56e1f842b736afb",
      "item_sha256": "1f04de42f30376f09d1b5c2c3eb0d6b25838679cd2f54dc8501e8b27f13280b1",
      "at": "2026-10-05T19:26:24.546Z"
    }
  ]
