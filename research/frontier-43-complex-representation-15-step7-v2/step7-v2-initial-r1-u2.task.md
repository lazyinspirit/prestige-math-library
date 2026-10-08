# Step 7 adjudicate: initial, round 1, unit 2

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-43-complex-representation-15-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u2.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-43-complex-representation-15",phase:"initial",round:1,unit:"2",input_sha256:"213f49668fe9a1811f00252dbb37991fb060239cf233142dbaebe75405f52be9",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-43-complex-representation-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-positive-measure-subsets-of-haar-measure-contain-finite-positive-measure-subsets, 0:lem-restricted-regular-representation-is-weakly-contained-in-subgroup-regular-representation, 4:lem-a-topological-invariant-mean-yields-norm-approximately-invariant-densities, 5:lem-an-invariant-mean-produces-a-reiter-net, 8:cor-folner-sequences-for-second-countable-compactly-generated-groups.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-positive-measure-subsets-of-haar-measure-contain-finite-positive-measure-subsets",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 uses E_n=A∩{f>1/n} without restricting n≥1. Under the stipulated zero-based indexing, E_0 is undefined. Use E_n=A∩{f>1/(n+1)} and the corresponding bound instead.",
      "context_sha256": "87e566fd662d72c23eb6d229f577397b4ffa5059b5619a3da1c152413d2387d9",
      "item_sha256": "cbce552c57206787a22348b72e837346408aa1483afa611bf8c5e583947c5b84",
      "at": "2026-10-08T06:44:36.421Z"
    },
    {
      "id": "lem-restricted-regular-representation-is-weakly-contained-in-subgroup-regular-representation",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F4] inaccurately restates the inversion dependency: complex u requires ∫Δ_G(y⁻¹)|u(y)|dy<∞, not merely u∈L¹(G). For nonunimodular groups, absolute integrability alone does not imply this weighted condition.",
      "context_sha256": "eccd395128723f842942f3e226946d4eace6671a76b11ebdd9c3e6f8d2eb0de6",
      "item_sha256": "429ecb19a868c5b8597e758a37fe276ae98f243fe70ab6f82d663fc0eea397e0",
      "at": "2026-10-08T06:44:41.557Z"
    },
    {
      "id": "lem-a-topological-invariant-mean-yields-norm-approximately-invariant-densities",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F20 attributes preservation of probability densities under convolution to an explicit remark in the UCB-mean lemma, but its supplied interface contains no such assertion. Thus the citation does not license step 4.1's claim that g_i belongs to P.",
      "context_sha256": "92e4c4f74c9260a0c0247516dcfa44b79bbff63a20c8021b17af13691143d4cf",
      "item_sha256": "04739f4d22bf5b2d60103e921875b6f719c570fe1f88c3c13db035c8638de740",
      "at": "2026-10-08T06:44:51.461Z"
    },
    {
      "id": "lem-an-invariant-mean-produces-a-reiter-net",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F10 attributes preservation of probability densities under extended convolution to the UCB-to-topological-mean lemma, but its supplied interface asserts no such result. Step 4.1 therefore lacks the cited justification that g=f*g_j belongs to P.",
      "context_sha256": "f7852fe10d6db6db93ed7f1725c4a56245e8262611924801c774fe3f34a583c5",
      "item_sha256": "73561991105eece7828b4b6df136fc177e951eb73dbcda32d0110ed593963ab4",
      "at": "2026-10-08T06:44:32.447Z"
    },
    {
      "id": "cor-folner-sequences-for-second-countable-compactly-generated-groups",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 applies compactness of Q to an ambient open cover without citing lem-compactness-of-a-subspace-is-ambient. The supplied def-compact-space interface expressly forbids this use without that citation.",
      "context_sha256": "eacd1e6b14743a6c84c931d4dc3776983853b1fa07e37eede3b694bfa59d4749",
      "item_sha256": "7c373ed55f4b4e35411f7a4d63c45c2f64899aadc1db22fe7af1cf9dd205cf21",
      "at": "2026-10-08T06:44:29.655Z"
    }
  ]
