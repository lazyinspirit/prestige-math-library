# Step 5 adjudicate: initial, round 1, unit 32

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-batch-32-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u32.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-44-special-representation-examples-28-six-step",phase:"initial",round:1,unit:"32",input_sha256:"a3c0decd85fdbe71b25b7ccd7e6264df187be55612edc2bcfbd9729c1e231624",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run frontier-44-special-representation-examples-28-six-step --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:lem-complex-algebraic-morphisms-admit-compatible-finite-smooth-stratifications, 8:lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions, 12:ex-incidence-model-of-a-closed-interval.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-complex-algebraic-morphisms-admit-compatible-finite-smooth-stratifications",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 emits only Z_alpha surjecting onto R_i; Step 2.1 guarantees surjectivity only onto V_i. For the inclusion C*→C, Z_alpha=C* does not surject onto R_i=C, so source points over V_i are never emitted and the claimed partition fails.",
      "context_sha256": "3718027a8928e4f0eab30a968f51110c625f0e16417b02dc381fd09c17b6c06a",
      "item_sha256": "9c26fc89028731b45ea4b60586c42f111fa5ff8cb9f6837354b54407fb7c549c",
      "at": "2026-10-11T15:26:44.316Z"
    },
    {
      "id": "lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F7 and step 2.2 claim comparison with abelian sheaf cohomology, but the cited definition only compares injective resolutions in Ab(X). A k-injective need not be abelian-injective (e.g. F_p on a point); the required comparison is neither supplied nor proved.",
      "context_sha256": "d16a73f423eb35d4e1bc435310141f887dc759e07129b0a8c0f40d6a8ab9ebd9",
      "item_sha256": "85d6e1d615ff5995fbec53ee1958c57d14a2550ded2aa674faf2293e72974cd8",
      "at": "2026-10-11T15:26:08.787Z"
    },
    {
      "id": "ex-incidence-model-of-a-closed-interval",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F1] strengthens the supplied interface: it asserts that ordinary cohomology is computed by the face-poset incidence complex. The interface promises bounded finite cochain models but gives no such identification, which step 1.1 requires.",
      "context_sha256": "3aa67d477a4c526ae9ccdb6148c041b8fc6b9dff4a0b0f4bbdf46a56e6762171",
      "item_sha256": "9bb6679dba5b3b48f0f66fc954fab75856eb62c2b3c195ef5f887b285379de69",
      "at": "2026-10-11T15:26:34.224Z"
    }
  ]
