# Step 5 adjudicate: initial, round 1, unit 6

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-batch-6-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u6.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"bayesian-computational-statistics-62",phase:"initial",round:1,unit:"6",input_sha256:"4d5c183c713ad11edc9a59026b00de3757557c78741e0adfc236cd5236e91cc8",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run bayesian-computational-statistics-62 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-beta-density-normalization, 0:lem-gamma-density-normalization, 0:lem-multinomial-law-normalization, 1:thm-dirichlet-density-normalization, 1:thm-iid-exponential-family-statistic-is-sufficient, 4:ex-beta-binomial-update, 4:ex-exposure-gamma-poisson-update, 4:ex-normal-normal-conjugate-update.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-beta-density-normalization",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Steps 1.1–2.1 apply MCT on the Lebesgue space over (0,1), but the cited Lebesgue definition says sigma-algebra and measure status are not part of the definition. The required thm-lebesgue-measure-is-a-complete-measure is absent from deps.",
      "context_sha256": "87f5b4e62ff3808b802521a136a99667e31c8dc6047499e5e81201c52e9a74c3",
      "item_sha256": "c023ae6a69be970f5a1218c6e0317621221ed339e539ee2f7bf9e0c14321d787",
      "at": "2026-10-15T16:02:33.916Z"
    },
    {
      "id": "lem-gamma-density-normalization",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F8 only defines λ as a restricted set function and defers proving its measurable sets form a σ-algebra and λ is a measure to thm-lebesgue-measure-is-a-complete-measure, which is absent. Thus measurability and MCT’s measure-space hypotheses are unsupported.",
      "context_sha256": "cf4df54a9e063b9ba716f5347d7b7c09adcf9355a36b090364f4eb97d87bbd2f",
      "item_sha256": "0c06b55ae3571e7f3f8031b19dbf44d6b80521e347b196ed3e4b8abff9eafe5c",
      "at": "2026-10-15T16:02:23.556Z"
    },
    {
      "id": "lem-multinomial-law-normalization",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 attributes the factorial formula to def-multinomial-coefficient, whose interface only defines the coefficient as a coloring count. The formula is supplied by thm-multinomial-theorem.",
      "context_sha256": "eb8bbbc04256e44dc2ef9e3f51effe573a8ccfae36788cafa830dd32aef24853",
      "item_sha256": "9fbba746a466bc674a1c76889053520889b5ca11c63efeca0020c3255f099ea4",
      "at": "2026-10-15T16:02:30.331Z"
    },
    {
      "id": "thm-dirichlet-density-normalization",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F6 attributes Γ(s)>0 and finite, plus proof steps 1.2/2.2, to the Beta lemma, but its supplied interface gives only the Beta integral and ratio. The proof then relies on this unsupported restatement for Gamma cancellations and normalization.",
      "context_sha256": "2dd8e2d8634b0d57e0563cc0043e0e8f8ecc1537dc41f1066ec36698df84d94e",
      "item_sha256": "61aa3c87130c81607db90d340af16104c32e62ea7fe588fd29f5bc2cf0fdc071",
      "at": "2026-10-15T16:03:10.854Z"
    },
    {
      "id": "thm-iid-exponential-family-statistic-is-sufficient",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F9 inaccurately restates its dependency: the supplied closure proposition gives sums and scalar multiplication, but not products. Step 1.1 relies on it for measurability of g_eta; cite a measurable-product result or justify that step.",
      "context_sha256": "be255f0f85511476d4ec6e58bd10cc58a7160760bf503c0d3031582e0d2b6e62",
      "item_sha256": "1bdf7740fc9a81a7a1d1d7e93cdb7334c15e126d6a6c56d5e68616c69f086c14",
      "at": "2026-10-15T16:02:36.518Z"
    },
    {
      "id": "ex-beta-binomial-update",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 claims Countable Choice is used for the update theorem’s Beta density normalization, but the supplied interface only assumes Countable Choice and does not establish that use. The cited definition merely defines the axiom.",
      "context_sha256": "a8fc4078d79358196a1ba598cc9f26b82a2a955a7b12bf859da4b426342e193e",
      "item_sha256": "8d697a3ee38515405b4fc7361e31b9f52ed802399c299fc15aea207f7d40a51e",
      "at": "2026-10-15T16:02:41.294Z"
    },
    {
      "id": "ex-exposure-gamma-poisson-update",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1/axiom_use attributes Countable Choice to the update theorem’s Gamma density normalization. The supplied interface only states that Countable Choice is assumed; it does not say normalization needs or uses it, so that rationale is unlicensed.",
      "context_sha256": "fb2348fb734fd301fed84841b985e30dc8b6f7f3ac139c75a5b9d250612a513a",
      "item_sha256": "10e658cb22ba5a1413a1fc786657cd0b0ced8c212e46098274e359e952ac9974",
      "at": "2026-10-15T16:02:51.524Z"
    },
    {
      "id": "ex-normal-normal-conjugate-update",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[A1] is unsupported: the AC interface only defines AC, and the update theorem assumes AC without saying Gaussian density normalization requires it. The posterior calculation itself is correct.",
      "context_sha256": "7b0d7fa162610dc8be50a8c8fe972e0a8f285fc41035678a8a600acda8b35ff0",
      "item_sha256": "2bbf47cf8d6e9d9faf73ac50b0ed189108e6ab5cd51b033425695c6c1a5c3575",
      "at": "2026-10-15T16:02:40.475Z"
    }
  ]
