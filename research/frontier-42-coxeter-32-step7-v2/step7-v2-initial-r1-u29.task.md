# Step 7 adjudicate: initial, round 1, unit 29

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-42-coxeter-32-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-42-coxeter-32-step7-v2/step7-v2-initial-r1-u29.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-42-coxeter-32",phase:"initial",round:1,unit:"29",input_sha256:"ce87a1bc88a8f056e771220d400256d1be4d20fe7e966bd5434d1ad410d4a79e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-42-coxeter-32 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 14:lem-cg-coxeter-word-transport-and-form-independence, 20:def-cg-sortable-element-skip-roots-and-cone, 21:lem-cg-uniform-omega-positive-and-aligned-sortability.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-cg-coxeter-word-transport-and-form-independence",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F18 omits the dependency’s hypothesis g∈GL(V). When m(s,t)=∞, projection onto R(e_s−e_t) preserves B but is singular, so g⁻¹ is undefined. Thus the local dependency restatement lacks an essential hypothesis.",
      "context_sha256": "d70982b07a351551f7c5c3f6228d590af74e68d92dc8b745eaf2d5b5fc836f15",
      "item_sha256": "f5dba0399944b46754c5416d9034877fa5247ea6025cd8da442b0d1a862cd7ec",
      "at": "2026-10-08T00:59:21.192Z"
    },
    {
      "id": "def-cg-sortable-element-skip-roots-and-cone",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Clause (3) inaccurately restates its justifier: clauses (1),(2) establish skip-root values/signs and basis/independence, but do not establish agreement with the displayed recursion or its termination by induction on (rank, length).",
      "context_sha256": "0efadd939225e51021f642727b8966ca0acf5687f6789f320628f9595781478b",
      "item_sha256": "6d29be0194b42ee27fb585204ab23f01edd65cfa6a83668020738208e9a1ba6e",
      "at": "2026-10-08T00:59:01.430Z"
    },
    {
      "id": "lem-cg-uniform-omega-positive-and-aligned-sortability",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title overclaims: in type A3 with c=abc, abcaba is the c-sorting word of w0, while abacba satisfies (i) after swapping commuting c,a but is not a c-sorting word. The proof establishes only commutation equivalence.",
      "context_sha256": "5788cea96e274d79610a270ef806fe47e832d640a9d1c0d1b0808760f8faa6d1",
      "item_sha256": "1c97324d78cdbfa01fcb3bf7cce86f2cf5c0004cdcb620f3c6f68efc52a217f6",
      "at": "2026-10-08T00:59:39.131Z"
    }
  ]
