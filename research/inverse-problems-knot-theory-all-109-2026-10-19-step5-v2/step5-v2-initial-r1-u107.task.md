# Step 5 adjudicate: initial, round 1, unit 107

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-107-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u107.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"inverse-problems-knot-theory-all-109-2026-10-19",phase:"initial",round:1,unit:"107",input_sha256:"c872603b0f7c95c42125928ec1ced19e672caec5508e4ce625685b74e981d23d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run inverse-problems-knot-theory-all-109-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-regular-projection-admits-finite-planar-code, 2:thm-descending-diagram-unknotting-sequence-procedure-properties, 6:lem-seifert-matrices-differ-rank-one-under-crossing-change, 8:lem-bridge-sphere-normalization, 8:thm-descending-diagram-is-unknot-and-finite-bounds, 9:thm-schubert-bridge-connected-sum.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-regular-projection-admits-finite-planar-code",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates its dependency: the cited lemma guarantees regular projections only for links already contained in R³. The proof starts with arbitrary K⊂S³ and gives no isotopy moving it off ∞, so step 1 is unsupported.",
      "context_sha256": "157cc469699a47a6ebc353cf2709e89e8244be6835073013b7bdec2d96217b95",
      "item_sha256": "c06bf98f77cd5de4b340933f9c0559bd9cd3ed27366762ba94c184f9746bb77c",
      "at": "2026-10-21T16:31:41.999Z"
    },
    {
      "id": "thm-descending-diagram-unknotting-sequence-procedure-properties",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement allows a basepoint at a bend lying in an edge’s geometric interior, but the supplied procedure accepts basepoints only away from every bend. For that allowed case, the procedure’s termination and output claims are outside its stated domain.",
      "context_sha256": "602b458e8e652cde735479fd66e05fc34b3414ae23f0df0c70a27cbc3afe8c95",
      "item_sha256": "58e2785565a3c56a10083e7d54f4688b24c1fb23b6eeb823f604fce5758f03a9",
      "at": "2026-10-21T16:33:13.115Z"
    },
    {
      "id": "lem-seifert-matrices-differ-rank-one-under-crossing-change",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Statement never says D± are knot diagrams. The construction algorithm requires one component, the surface lemma covers a single knot, and the Seifert-matrix definition is for knots; the proof's Given silently adds this missing hypothesis.",
      "context_sha256": "6c458c9af644bf8a0847144185491b0082ff7ee3a1cf15cd0366d01ab558f711",
      "item_sha256": "b73a5c318e2385532b0c4e88f237728e23d9de12846c88c8ca96090150fe8bbd",
      "at": "2026-10-21T16:32:29.660Z"
    },
    {
      "id": "lem-bridge-sphere-normalization",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 4.1 allows E0 to contain a puncture, then sets Q=E0∪Δ. Nothing excludes that puncture lying on γ's bridge; then Q meets the bridge, so neither ball contains it. The claimed inside/bridge nesting and strict descent do not follow, leaving move availability unproved.",
      "context_sha256": "bedb20317beb5c137316aa25d4f31bb53acc2a332210b369de544fbc2b5790be",
      "item_sha256": "37ce05ba904865d27f2c64dc3759947f14137bc8cd8af042beb91c9be9e55e00",
      "at": "2026-10-21T16:35:45.978Z"
    },
    {
      "id": "thm-descending-diagram-is-unknot-and-finite-bounds",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 covers finite rational polygonal codes, but D is only required to be an admissible finite planar code. No hypothesis or lemma establishes that D, or the updated code, is rational polygonal, so applying F2 is unlicensed.",
      "context_sha256": "a66211217451ff7ac7db8079358363ef424d652a74d084972655c867e13bd604",
      "item_sha256": "f42e360b28b751be35efbdefd7352711716c0b08b4b2a7c29c4782be5c24388d",
      "at": "2026-10-21T16:31:33.994Z"
    },
    {
      "id": "thm-schubert-bridge-connected-sum",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 4.1 claims the normalization lemma puts the two punctures on opposite sides of S, but its interface only promises two arcs from punctures to C. Thus the claimed oddness of r_i and the lower-bound bridge count are unsupported.",
      "context_sha256": "773135e5face9a8b54b8d0dda7b72e9447b05dfe6f45c5d29b15f68b8fb72263",
      "item_sha256": "2ffad7871e766975c2f7fa9b34beae57d49528b263afabfd22b6303afee71e26",
      "at": "2026-10-21T16:32:29.667Z"
    }
  ]
