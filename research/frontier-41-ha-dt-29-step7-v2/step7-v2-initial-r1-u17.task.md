# Step 7 adjudicate: initial, round 1, unit 17

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/step7-v2-initial-r1-u17.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-41-ha-dt-29",phase:"initial",round:1,unit:"17",input_sha256:"79b0e989c27d1e96f1d9b9eaa6792321ec4c5196c7f8d892843c34832f7ef2a9",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-41-ha-dt-29 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:rem-a-closed-n-manifold-cannot-immerse-in-r-n, 1:def-space-of-immersions-and-space-of-formal-immersions, 1:lem-the-immersion-condition-is-open-in-the-weak-topology-for-compact-sources, 3:def-regular-homotopy-of-immersions, 5:lem-parametric-immersion-extension-on-a-disk, 6:lem-formal-immersion-homotopies-extend-over-a-subcritical-handle, 8:lem-open-manifolds-admit-handle-filtrations-without-top-index-handles, 9:thm-smale-hirsch-for-open-source-manifolds, 10:ex-an-open-parallelizable-manifold-immerses-in-euclidean-space-of-equal-dimension, 11:thm-smale-hirsch-immersion-theorem.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "rem-a-closed-n-manifold-cannot-immerse-in-r-n",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The claim that every formal immersion of a closed n-manifold into R^n is non-holonomic omits nonemptiness. The empty manifold is closed for n≥1, and its unique formal immersion is holonomic, as the supplied formal-immersion interface confirms.",
      "context_sha256": "6209a16c38e22f1210f6302634192c50ef1317352d00ff881b86ac12bb735844",
      "item_sha256": "90af72b74096818353222b9a9e07467d1886c87856f4b495ec566565a4aa1165",
      "at": "2026-10-06T07:00:21.906Z"
    },
    {
      "id": "def-space-of-immersions-and-space-of-formal-immersions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The definition omits AC_ω, explicitly required by both cited interfaces for the smooth tangent-bundle constructions and the weak topology on C∞(TM,TN). Its unconditional construction therefore lacks an essential dependency hypothesis.",
      "context_sha256": "7e79359b4f53bfaadb6fcfe31cb927006ed2412989b931eca92fde73399efb3d",
      "item_sha256": "88e94ac5956ba2e08554d110a8cf097bbc2cee9ec4be4aefcaec75c989a652c8",
      "at": "2026-10-06T07:00:00.549Z"
    },
    {
      "id": "lem-the-immersion-condition-is-open-in-the-weak-topology-for-compact-sources",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 assumes df has rank m, but the Given only makes F fibrewise injective. A constant f:S^1→R^2 admits such an F while df=0, so the claimed positive determinant margins for f need not exist.",
      "context_sha256": "496d6b976b643e9f89764587f4c7e57f4e32fce1fce01b1bc618e98cce0f6e77",
      "item_sha256": "5805f535ef6c8ed884e85d2fdf185c3495be4d710b85b966dc930a1d74c943cf",
      "at": "2026-10-06T06:59:52.210Z"
    },
    {
      "id": "def-regular-homotopy-of-immersions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The relative definition incorrectly requires H to be constant on A×[0,1]. Rel A means pointwise fixed in t. For M=N=R, H(x,t)=x and A={0,1} is a regular homotopy rel A under the cited interface, but H is not constant on A×[0,1].",
      "context_sha256": "d75702da15e14ddac8d3ee274ad560a735e7bf43062d5eca68c9eb6ff70fc396",
      "item_sha256": "fdf29efe6713536761904921ba1aecb8c34bfd2d424cdcf3c26694fe33c654a9",
      "at": "2026-10-06T07:00:05.421Z"
    },
    {
      "id": "lem-parametric-immersion-extension-on-a-disk",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The relative statement requires G=dg on all of U, but step 10.1 holonomizes only a smaller disk. U may have additional components carrying nonholonomic input; no holonomization there or genuine extension to all of U is supplied.",
      "context_sha256": "053e1095d55ce52f2ba00ae3d291bd5267574ad7b8f0f6333eea0fbe9db3cbd5",
      "item_sha256": "ccf73a6a1d9de716aeed3ec25e7aad117451ae1aa46ad9ad798d2f3e49e9cc79",
      "at": "2026-10-06T07:01:13.904Z"
    },
    {
      "id": "lem-formal-immersion-homotopies-extend-over-a-subcritical-handle",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 inaccurately restates the disk lemma as proving relative full-m-column core integration and cocore compression. Its interface supplies only rank-k disk integration. Step 1.2 invokes this stronger, unsupported conclusion to obtain the essential core homotopy.",
      "context_sha256": "246003269385873ec3460576e1df54b8c2d2d8b7ab683a1ec9930628d1d4c1c5",
      "item_sha256": "559f39cf4670d234bef261faf8d0fc6803106d4c19512933978d42f03c55dc68",
      "at": "2026-10-06T07:00:15.048Z"
    },
    {
      "id": "lem-open-manifolds-admit-handle-filtrations-without-top-index-handles",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1's proposed indexing is not injective: a coordinate-basis element can meet several components of one band, giving them the same least index. Thus the specified countable-choice construction does not select a presentation for every component.",
      "context_sha256": "f52a3c8f4a4b747ffcda979202283ca94c3621f7413a1cc8324639741f8a7d4b",
      "item_sha256": "5ff2a57e9df8532f76dda3d64f0ed7ee1a9a1ca94b86bb22371203b93e2d1964",
      "at": "2026-10-06T07:00:39.497Z"
    },
    {
      "id": "thm-smale-hirsch-for-open-source-manifolds",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F3] and step 5.1 invoke genuine-family smoothing on noncompact M, but both supplied genuine-family/path smoothing interfaces require compact M. This drops an essential dependency hypothesis; injectivity on homotopy groups is therefore unproved.",
      "context_sha256": "f23ee5c02d569a2fef1d08e194cb60c7c7802c97910dbfec7b3ebd7f957cd4c4",
      "item_sha256": "48157d0deacb00bc29dd346e2e081795df33dfa4b43278e2351edc761bcfcfd1",
      "at": "2026-10-06T07:00:25.673Z"
    },
    {
      "id": "ex-an-open-parallelizable-manifold-immerses-in-euclidean-space-of-equal-dimension",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[L2] inaccurately identifies all bundle maps between trivial rank-m bundles with maps into GL_m(R). General bundle maps correspond to matrix-valued maps; for m≥1 the zero bundle map is a counterexample. The GL_m description requires fibrewise injectivity.",
      "context_sha256": "084aee6c95e9871a1e938c577155c9a051228246120d804367ad50f2c95f4252",
      "item_sha256": "b37f0fcff3d72da59e5c38a9f4c946847f2b3166fecb30c8f8d02b4af5aa9513",
      "at": "2026-10-06T07:00:20.864Z"
    },
    {
      "id": "thm-smale-hirsch-immersion-theorem",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 and step 4.1 misstate the disk-extension dependency: its relative interface treats smooth disk families with boundaryless P, and supplies no general neighbourhood-pair transfer with interval factors and smoothing, as claimed.",
      "context_sha256": "8b9db7d9222ddafcea1b7b220b36080ab93c5474bde047ae8999267936414eb0",
      "item_sha256": "0ec3c519025f14ce2a33f62364cc82ff9ea41475287a58319261a558d57ca666",
      "at": "2026-10-06T07:00:11.609Z"
    }
  ]
