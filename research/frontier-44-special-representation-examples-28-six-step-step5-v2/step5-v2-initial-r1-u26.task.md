# Step 5 adjudicate: initial, round 1, unit 26

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-batch-26-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u26.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-44-special-representation-examples-28-six-step",phase:"initial",round:1,unit:"26",input_sha256:"a3c0decd85fdbe71b25b7ccd7e6264df187be55612edc2bcfbd9729c1e231624",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run frontier-44-special-representation-examples-28-six-step --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-analytic-topology-and-finite-smooth-algebraic-stratifications, 0:lem-finite-poset-diagrams-have-bounded-finite-bar-models, 8:lem-field-module-sheaves-have-injective-derived-models.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-analytic-topology-and-finite-smooth-algebraic-stratifications",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The assertion that “all cited suppliers are choice-free” contradicts def-constructible-subset-variety, whose supplied interface explicitly assumes the Axiom of Choice.",
      "context_sha256": "047afc2cb5f06475d324d7e4c3c982e44e2ae7a8a613a9df8f0d32f5b7b383b0",
      "item_sha256": "d7f7709d3105707870575973941945166aef3fdd34cdee4a6e1e2a6ed30496b8",
      "at": "2026-10-11T15:32:35.726Z"
    },
    {
      "id": "lem-finite-poset-diagrams-have-bounded-finite-bar-models",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 5.2 misapplies F1: the source upper bound is 0, not M's b. For a singleton poset and M=k in degree -1, the factor Hom(B^0,M^{-1}) is nonzero at r=-1 and i=0, contradicting its claimed requirement i≤b=-1.",
      "context_sha256": "f3c0d5f455bfecff93736b201b42c693a5bc9823ee8ff186b5764b45670ab695",
      "item_sha256": "f45d6f5dfcd2541cb330b3a1fcfc1994786d4818192ad379007183763e938f93",
      "at": "2026-10-11T15:30:50.889Z"
    },
    {
      "id": "lem-field-module-sheaves-have-injective-derived-models",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The statement says all bounded-below injective complexes model the bounded derived category, but they model D^+. At X=pt, the injective complex I^n=k for every n≥0, with zero differential, has unbounded cohomology and cannot represent an object of D^b.",
      "context_sha256": "e6d520208e0819e2c87306343a64cade1ffa37010a2bc6c2d2e2a94a15d93317",
      "item_sha256": "7cc39e9a83c84be8cdabf59de6c431e8e8e6a70f9057f5e3886efa5cb18f0d12",
      "at": "2026-10-11T15:31:01.392Z"
    }
  ]
