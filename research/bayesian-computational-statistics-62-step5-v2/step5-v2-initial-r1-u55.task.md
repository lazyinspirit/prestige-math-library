# Step 5 adjudicate: initial, round 1, unit 55

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-batch-55-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u55.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"bayesian-computational-statistics-62",phase:"initial",round:1,unit:"55",input_sha256:"4d5c183c713ad11edc9a59026b00de3757557c78741e0adfc236cd5236e91cc8",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run bayesian-computational-statistics-62 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-hypergeometric-binomial-contiguity-for-permutation-samples, 2:lem-permutation-mixture-coupling-for-two-sample-u-statistics, 3:lem-pooled-mixture-projection-and-variance, 4:def-studentized-two-sample-u-statistic.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-hypergeometric-binomial-contiguity-for-permutation-samples",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 only defines IID; it does not supply a binomial count’s IID Bernoulli representation, as Facts/F3 and step 1.2 claim. The supplied interface does not license that dependency restatement.",
      "context_sha256": "4d166e737283696831ba5f7185f566b052adf3a06c5f6e24d6bf324fd23ac4a7",
      "item_sha256": "8025ee13732b14ec91720c36cf47850454aca9b2bfd8099638f86777fd687d6d",
      "at": "2026-10-15T16:22:27.722Z"
    },
    {
      "id": "lem-permutation-mixture-coupling-for-two-sample-u-statistics",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 inaccurately says the independence dependency supplies independence of the labels, fresh draws, and permutation. Its interface only defines independence; it does not assert those constructed variables are independent.",
      "context_sha256": "2656e314b1fac4777de295e6207beacec1615948945ddea75dcb692f1bc785df",
      "item_sha256": "d99db61f075651a6678fcadefa841d76e0a995e77b95ab1e4419ffb1573dcba3",
      "at": "2026-10-15T16:22:38.560Z"
    },
    {
      "id": "lem-pooled-mixture-projection-and-variance",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The final limit is not licensed: the statement never defines N=m+n. Thus p_N=m/N→p does not imply 1+m/n→1/(1−p), as step 3.1 assumes.",
      "context_sha256": "2df7071194560c9226aaf6bdd6851d4b09c2b93e71769b2b0c866be265f6c362",
      "item_sha256": "fa1ed506f38f399cd10a9f2e9354ae1ee5feb330f0cbbb1cc4a093bb9d7b5368",
      "at": "2026-10-15T16:21:45.206Z"
    },
    {
      "id": "def-studentized-two-sample-u-statistic",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: the remark asserts a standard-normal limit without a null or centering condition. For r=1 and h(x;y)=x-y, with consistent sample-variance estimates and unequal means, S diverges instead of converging to N(0,1).",
      "context_sha256": "f71848cc28a482c05c4bda86581ffd6afb1bbd9f0e70d17b2060ce33f52cc0b8",
      "item_sha256": "8d824cbf82a8bdffb80f9a1d1cd110c5eb175f33c7efb2cfa2b6cfd31815cfdd",
      "at": "2026-10-15T16:22:20.014Z"
    }
  ]
