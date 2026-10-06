# Step 7 adjudicate: initial, round 1, unit 18

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/step7-v2-initial-r1-u18.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-41-ha-dt-29",phase:"initial",round:1,unit:"18",input_sha256:"79b0e989c27d1e96f1d9b9eaa6792321ec4c5196c7f8d892843c34832f7ef2a9",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-41-ha-dt-29 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-rotation-number-of-an-immersed-oriented-circle-in-the-plane, 0:lem-the-second-homotopy-group-of-so-three-vanishes, 2:prop-euclidean-formal-immersions-are-sections-of-a-stiefel-bundle, 3:lem-the-basepoint-evaluation-of-the-stiefel-section-space-is-a-fibration, 6:lem-regular-homotopy-preserves-the-formal-gauss-class, 13:thm-smale-classification-of-sphere-immersions-in-euclidean-space, 14:cex-the-figure-eight-and-round-circle-are-not-regularly-homotopic-as-oriented-immersions.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-rotation-number-of-an-immersed-oriented-circle-in-the-plane",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The item says orientation reversal and reparametrisation invariance are part of def-rotation-index-of-a-regular-closed-plane-curve's well-definedness statement. Its supplied interface asserts neither; the citation does not license this restatement.",
      "context_sha256": "26607cf684b7a3f9e899442e95e1f66063cd397a8b09a205eaf621f88dae32c1",
      "item_sha256": "5c67e998b40ee5ec57824732e1f5f2e85b2ede8541e0ec62e1e8d7d12b826e8d",
      "at": "2026-10-06T07:00:31.094Z"
    },
    {
      "id": "lem-the-second-homotopy-group-of-so-three-vanishes",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 inaccurately restates the SU(2) dependency: its interface assumes ACω for the covering statement and does not restrict that assumption to Lie group structure. The unconditional covering result in F1 does not justify this attribution.",
      "context_sha256": "4a4f26b7966e38fc4253923b081fd2f062b5e5c6e0a21d364452acde728fd6ce",
      "item_sha256": "2b40f9d8856e156006dd6a5d8db0323f0abcf829571f8407504722edd4467b40",
      "at": "2026-10-06T07:00:33.031Z"
    },
    {
      "id": "prop-euclidean-formal-immersions-are-sections-of-a-stiefel-bundle",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title asserts an identification with Stiefel sections, but the proof establishes only homotopy equivalence. For M={pt}, m=0, n=1, FImm(M,R)=R whereas Γ(E) is a singleton. Thus the title exceeds the proved statement.",
      "context_sha256": "3c2df9caaad69649512842919df8dfd108d2bea63890c9db0dd8aed8be0b6be9",
      "item_sha256": "59ca57f9cef15ca8b05ccd17e7aee5787c8478ea795545d96538e9486882e75f",
      "at": "2026-10-06T07:00:34.881Z"
    },
    {
      "id": "lem-the-basepoint-evaluation-of-the-stiefel-section-space-is-a-fibration",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 uses 1/(8k) in f_k and the smoothing-radius series without restricting k≥1. Under the library's zero-based sequence convention, the k=0 terms are undefined, so the smoothing map and claimed homotopy equivalence are not established.",
      "context_sha256": "3ed723585ec482d16c83e7a59171111cea0b593b08b4f8c400b570f9f84e561b",
      "item_sha256": "9f1ccdbe69769d16a2f42c2b9c94aeb8c1643364ee26326825ec77ce939d6269",
      "at": "2026-10-06T07:00:36.240Z"
    },
    {
      "id": "lem-regular-homotopy-preserves-the-formal-gauss-class",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F3] omits the derivative-continuity lemma’s explicit AC_ω hypothesis. Step 2.1 invokes it without assuming AC_ω or supplying the requisite tangent-bundle constructions, and step 4.1 incorrectly declares the argument choice-free.",
      "context_sha256": "58ff6293ed98505fdb96d26cddac7aa529d2d0aac201ef3f8014d1d635bcd374",
      "item_sha256": "01f85578c6b36fa2c026a70e0bf134cf0eb661bcb4217da1150b0e14bf96110a",
      "at": "2026-10-06T07:00:27.681Z"
    },
    {
      "id": "thm-smale-classification-of-sphere-immersions-in-euclidean-space",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 inaccurately restates the section-space proposition: arbitrary bundle monomorphisms correspond to sections of the monomorphism bundle, while E parametrizes only isometric injections. Polar normalization is many-to-one, not a bijective correspondence.",
      "context_sha256": "ce64f2ff1b241048869c073330460f18c89cd853eda3ebaea8a2df1680c31318",
      "item_sha256": "cb979c0bbe6b33f278dc3cc869f0db30bc27d6003cf599228a1831564027a9e0",
      "at": "2026-10-06T07:00:40.321Z"
    },
    {
      "id": "cex-the-figure-eight-and-round-circle-are-not-regularly-homotopic-as-oriented-immersions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 restates Whitney–Graustein without its explicit AC_ω hypothesis, and step 2.1 invokes that unconditional equivalence. The supplied dependency interface licenses the classification only assuming countable choice.",
      "context_sha256": "bac831635cfd8cb62772ec57022d5bfca0564929ab82ba534e58db8bcb21a962",
      "item_sha256": "030e547fc78321acce403fad95e61b2e29e07f65075cdf2bee5c354c591a45c0",
      "at": "2026-10-06T07:00:35.685Z"
    }
  ]
