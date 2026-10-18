# Step 5 adjudicate: initial, round 1, unit 69

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-69-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u69.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"69",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-isogeometric-pullback-energy-norm-equivalence, 2:lem-boundary-preserving-tensor-schoenberg-h1-approximation, 2:lem-nurbs-knot-cell-simplicial-geometry-adapter, 2:thm-nurbs-quotient-best-approximation-transfer, 5:thm-isogeometric-elasticity-galerkin-quasioptimality, 5:thm-nurbs-tensor-product-l2-approximation, 5:cex-multipatch-trace-mismatch-not-h1.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-isogeometric-pullback-energy-norm-equivalence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 says Countable Choice is used only through [F1], [F4], and [F5], but the proof also invokes [F2] and [F6], whose interfaces explicitly assume Countable Choice. This dependency restatement is inaccurate.",
      "context_sha256": "ff1d48ec047e556af45d8c49fb51d484a1b573f8a03b16adcbb1c9eb3505001a",
      "item_sha256": "76252b49aa5f19f65a740ca58d9484268b0005e140380ad1fc5fda678dcdf776",
      "at": "2026-10-18T03:33:36.536Z"
    },
    {
      "id": "lem-boundary-preserving-tensor-schoenberg-h1-approximation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F1] is overstated: the supplied interfaces give polynomial reproduction and basis properties, but no Greville coefficient identity or cell derivative formula. Steps 1.1–1.2 rely on both as if supplied.",
      "context_sha256": "c75773a032c900d4bd8b7a2af42e9515c66673eaa4f6ef9aebe54f907d8e8e27",
      "item_sha256": "de2cdd712b5b89801e8ee863a7fba2607ad94a71e954621bb352134deb852001",
      "at": "2026-10-18T03:33:38.302Z"
    },
    {
      "id": "lem-nurbs-knot-cell-simplicial-geometry-adapter",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The geometry-approximation claim only defines e0 and e1 as norms. The supplied interface requires separate bounds on both errors; none is stated, and no closeness or mesh-dependent estimate follows from admissibility.",
      "context_sha256": "24799e72dd8e7f6fdd36171499ca856c8b18d9599f8e80667a782be805c7d99e",
      "item_sha256": "00fe69651763a0da6af476728e08a0f7dc0b0b57b63ccc3f9ffe926090de1d9c",
      "at": "2026-10-18T03:34:24.544Z"
    },
    {
      "id": "thm-nurbs-quotient-best-approximation-transfer",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 requires bounds on det DF and on DF, DF⁻¹. The statement only assumes an “admissible” map and never states or defines j₊ and L, yet uses them in C_F; step 2.1 therefore invokes F2 without its stated hypotheses.",
      "context_sha256": "4eaf34e6ac21cdaf7bc3225135e3802b40bb17e073e932f4045be4592439fb74",
      "item_sha256": "89ae9240c40e8fb6000a983d37c0f402ca92fcc643d1855475290bbf399db3e0",
      "at": "2026-10-18T03:34:07.266Z"
    },
    {
      "id": "thm-isogeometric-elasticity-galerkin-quasioptimality",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 is restated as if matching traces alone imply global H1, omitting its finite face-to-face cell presentation, disjoint-interior, and other hypotheses. Step 1.1 invokes this broader claim without establishing those conditions.",
      "context_sha256": "6f866c0cc33c25bc29ea2889835dd8e8b0a76af4fb1e031ba89f8cdfa702c9a8",
      "item_sha256": "88606a2f6a298396c5ea637e0a7a32c1348230fb175927fec8cbb364ee512e9f",
      "at": "2026-10-18T03:34:05.120Z"
    },
    {
      "id": "thm-nurbs-tensor-product-l2-approximation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 misstates the pullback lemma: its supplied interface gives H1 norm bounds, not the asserted scalar L2 change-of-variables bound. Step 3.1 relies on that bound to obtain the claimed sqrt(j_+) estimate, so the cited interface does not support this proof step.",
      "context_sha256": "2d1c595a7d8ebe96fe06f06438645ffd1764bbaa1c71a0224ad3eca4eda6cfb8",
      "item_sha256": "b2bd6abd15d2d601f03778bb90aeedef3e5a4cb02ff7f290b5509825bf8dd063",
      "at": "2026-10-18T03:34:05.699Z"
    },
    {
      "id": "cex-multipatch-trace-mismatch-not-h1",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "D_L∪D_R omits the interior interface {1}×(0,1), so it is not D, and v is left undefined there. State the partition is up to measure zero and define v there arbitrarily.",
      "context_sha256": "d338ce47493f35566b8687babe552b77cc8891f6c198e79573b83c0b89996a09",
      "item_sha256": "970253b1e42f31c0ab874ac6e528a7b722ae73f29ae1d9d3f197015ca6a37dc7",
      "at": "2026-10-18T03:34:07.101Z"
    }
  ]
