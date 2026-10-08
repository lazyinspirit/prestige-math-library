# Step 7 adjudicate: initial, round 1, unit 5

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-43-complex-representation-15-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u5.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-43-complex-representation-15",phase:"initial",round:1,unit:"5",input_sha256:"213f49668fe9a1811f00252dbb37991fb060239cf233142dbaebe75405f52be9",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-43-complex-representation-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-k-finite-and-smooth-vectors-for-sl2-r, 7:lem-the-weighted-area-form-is-sl2-r-invariant, 10:thm-square-integrability-of-sl2-r-discrete-series-matrix-coefficients, 10:ex-parameter-identifications-in-the-sl2-r-unitary-dual, 11:cor-the-unitary-dual-of-sl2-r-is-non-discrete-and-non-hausdorff-at-the-stated-limits.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-k-finite-and-smooth-vectors-for-sl2-r",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title promises a (g,K)-module, but the item only establishes an action on H∞. It never defines the promised module structure on V, establishes preservation of K-finiteness, or states the required compatibility with K.",
      "context_sha256": "98cbd80f7bf9b016de537a8b1f7ef0db35d3e8c523a58ab86546ca796e07ca09",
      "item_sha256": "272d37dd25044dee07c57f47da25f2f8b42bd48681d07f6fe37f00ee9b17afbd",
      "at": "2026-10-08T06:45:40.963Z"
    },
    {
      "id": "lem-the-weighted-area-form-is-sl2-r-invariant",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 relies on [F1] asserting that the displayed vectors have norm-smooth G-orbit maps. The cited model interface supplies no such assertion; the Hilbert-space interface supplies only K-continuity. Thus strong continuity on G is unsupported.",
      "context_sha256": "93dfff0e7bb9e93ddd08d0028d58f6188e9f7b9ec023d009e093aa67a42ea516",
      "item_sha256": "7331afc75e4bb8c8bd3f42368f7741d0860047df7886660859dd94494eaa3476",
      "at": "2026-10-08T06:45:22.798Z"
    },
    {
      "id": "thm-square-integrability-of-sl2-r-discrete-series-matrix-coefficients",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 inaccurately restates the coefficient dependency: its interface gives only the extremal coefficient and enveloping-algebra decay, not Q_jk or Q_j0(r)=(-r)^j. The latter is essential to step 3.1's isometry computation and is not proved here.",
      "context_sha256": "79077dd9f8a686a98df90ebb212cc86c35c37c68a0407b2ce05d85a7cda15a54",
      "item_sha256": "ce0cbb719c52ec763203e35c4760acdc64a82930ba77e40c6fccb83e2f83e1a2",
      "at": "2026-10-08T06:45:36.981Z"
    },
    {
      "id": "ex-parameter-identifications-in-the-sl2-r-unitary-dual",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The Statement identifies the Hilbert representations D_n^± with the algebraic modules M^+_{-n}, M^-_n. The supplied interfaces identify only their K-finite spans; these algebraic subspaces are not the full G-representations.",
      "context_sha256": "b26130a20cb8d3e29ecfe197fa0cf4433d73c005d7d09d75b84d61d5010a572b",
      "item_sha256": "fe5b195ca2cac86836ba71da6c7376f4fd050ec63bdcdefcb9bba88c7381a339",
      "at": "2026-10-08T06:46:03.080Z"
    },
    {
      "id": "cor-the-unitary-dual-of-sl2-r-is-non-discrete-and-non-hausdorff-at-the-stated-limits",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F6] inaccurately restates its supplier as asserting that the complementary classes are distinct from the trivial class. The supplied interface asserts convergence only; step 3.1 merely repeats [F6], leaving this added claim unsupported.",
      "context_sha256": "397f39790f119e798881f5cdbc5deb396c0b1d015f600fb0d70d11839631ac07",
      "item_sha256": "fbd291a6f56aceba72f4e2337ba1415c8da5a5492a474d892cca00bc1df3e533",
      "at": "2026-10-08T06:46:02.965Z"
    }
  ]
