# Step 5 adjudicate: initial, round 1, unit 25

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-25-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u25.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"initial",round:1,unit:"25",input_sha256:"d23dda1488be643603328de91e0bfb6477b03a1eb49ede19fac9872ac281253d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-qa-expected-query-cost, 16:def-qa-quantum-query-algorithm, 17:def-qa-classical-bit-cost, 19:ex-qa-promise-and-cost-models.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-qa-expected-query-cost",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The round claim does not follow: rounds padded to at most K steps can have different lengths, so their first R rounds need not form a length-KR prefix. The proof requires padding every round to exactly K steps.",
      "context_sha256": "38e16b827d43a63da06384828a1ebcaebd4a557b04c44f8d9fa141e907a7e534",
      "item_sha256": "6b1265c534d41e345e341017fac76242ae8e2a710242dc372c47902af97d0227",
      "at": "2026-10-16T04:59:52.359Z"
    },
    {
      "id": "def-qa-quantum-query-algorithm",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition permits an explicit preparation interface to supply a nonzero initial state, but def-qa-finite-branch-output-law only covers trees rooted at the standard public-input basis state with zero work registers. Such protocols lack a licensed output law.",
      "context_sha256": "fa8507e9d8ac67ee0695d2222a06ef7990de8ab42af652b6eb60513402ec39c4",
      "item_sha256": "f04edd5c56313be30c9a7a0ec5b1362e0a4112cd861141b50ed73bd493bed0a5",
      "at": "2026-10-16T05:00:30.006Z"
    },
    {
      "id": "def-qa-classical-bit-cost",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Cost is defined as transitions of the query machine but also includes “input-encoding work.” The dependency permits arbitrary injective encodings and says the machine gets no readable copy of hidden enc(z); no encoding procedure is specified as part of the machine, so that work i",
      "context_sha256": "6b2381f8a4273cea9764b30305db3374c766a0992975b73713b00a09d83ded87",
      "item_sha256": "1be0812dd7dd01982a5508141925368f0d5a87289327cffdcb8d3057f038cb8d",
      "at": "2026-10-16T05:00:03.477Z"
    },
    {
      "id": "ex-qa-promise-and-cost-models",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "§1.1 infers a decision reduction from totality and promise-set images, but [def-promise-preserving-reduction] also requires polynomial time. §3.1’s later O(|x|) bound is not cited by that step.",
      "context_sha256": "d574e99dfc4d562c16f398cddd565a6a12b253b996fb5dafae26e9ac545b4013",
      "item_sha256": "faa42cdad9f0f8a23849f228a0d76c69f5cf8e2e5ed4462f9204cfa250523efa",
      "at": "2026-10-16T05:00:31.991Z"
    }
  ]
