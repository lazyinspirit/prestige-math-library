# Step 5 adjudicate: initial, round 1, unit 31

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-31-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u31.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"inverse-problems-knot-theory-all-109-2026-10-19",phase:"initial",round:1,unit:"31",input_sha256:"c872603b0f7c95c42125928ec1ced19e672caec5508e4ce625685b74e981d23d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run inverse-problems-knot-theory-all-109-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-ip-bv-zero-gradient-constant-on-connected-domain, 0:lem-ip-distributional-radon-representation-unique, 0:lem-ip-lw-integral-inequality, 0:lem-ip-open-euclidean-locally-finite-smooth-partition, 0:lem-ip-smooth-compact-support-dense-in-c0, 0:lem-ip-vector-radon-variation-is-radon, 1:lem-ip-unit-vector-density-has-scalar-variation, 3:lem-ip-bv-lipschitz-trace-and-zero-extension, 3:lem-ip-bv-strict-approximation.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-ip-bv-zero-gradient-constant-on-connected-domain",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement does not require u to be real-valued, while the distribution interface permits complex distributions. On Ω=R, u(x)=i is locally integrable with zero distributional derivative but is not equal almost everywhere to any c∈R.",
      "context_sha256": "9556b2d9f434c7755874b98050a37ea185ddd228ca37a72acc26d02e189eae30",
      "item_sha256": "f0830c5b5d4296b37a739a4adf1cd8b1676fdaf6708bac2b36ffd166479f3058",
      "at": "2026-10-21T14:30:07.062Z"
    },
    {
      "id": "lem-ip-distributional-radon-representation-unique",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 uses compact inner regularity of |λ| for arbitrary Borel A. The Radon interface guarantees inner approximation only for open sets and explicitly excludes arbitrary Borel sets; the regular-complex interface inherits that convention, so F1 does not license this step.",
      "context_sha256": "2a796a1baeb6a0df2147d1e49cb87552a0117abc35999b736d2756a6489fa12d",
      "item_sha256": "1ac22e28db75a835ff719d71c7ea8a34f30a94c554ada8a94de42e01be48bf86",
      "at": "2026-10-21T14:30:08.289Z"
    },
    {
      "id": "lem-ip-lw-integral-inequality",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates Tonelli: its interface requires product-measurability, but Lebesgue-measurable g_i need not have product-measurable coordinate lifts. The iterated Tonelli steps are unlicensed without first replacing the g_i by Borel versions or otherwise handling completion.",
      "context_sha256": "d18c2e62b146e9116d7a4cbc7d6c67d6ba982fa3e69f3b667a8d6c56b2dab765",
      "item_sha256": "b807976c940270958287260d9e4a111e728d7d1773bd82540f7405d9a406add3",
      "at": "2026-10-21T14:30:38.517Z"
    },
    {
      "id": "lem-ip-open-euclidean-locally-finite-smooth-partition",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement permits n=0, but [thm-heine-borel-rn] and [lem-smooth-bump-between-concentric-euclidean-balls] apply only for n≥1. The proof relies on both without handling n=0, and [F3] omits its dimension restriction.",
      "context_sha256": "2e69b23f95342e3431f7d09939ebb52ca590e2764617e68c8b25e21e6bae0651",
      "item_sha256": "300c8431e51971ab18a0d0c8c35131bcae0195035d87bcdc917df62f381408df",
      "at": "2026-10-21T14:35:20.408Z"
    },
    {
      "id": "lem-ip-smooth-compact-support-dense-in-c0",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement omits n≥1, but the cited bump and Heine–Borel interfaces apply only for n≥1. Since 0∈N here, the proof invokes them without treating n=0; add n≥1 or a separate zero-dimensional argument.",
      "context_sha256": "8d9b8c73868c08b97e5ecd11b921a40b83ece8c2866dfc54a4e54b6243302d88",
      "item_sha256": "993a10d8b0b9167331b0e66b634a66aae3d29fad1d8e0dc5b42ea1893bf75b45",
      "at": "2026-10-21T14:30:11.368Z"
    },
    {
      "id": "lem-ip-vector-radon-variation-is-radon",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 is unlicensed: the Radon interface expressly lacks compact inner approximation for arbitrary Borel sets; the regular-complex item only defines regularity, and the TV theorem only says |μ_i| is a measure. Steps 3.1 and 4.1 need λ's all-Borel compact approximation, so their core",
      "context_sha256": "569544f43bb373e9265c87e57028705559fca5d16e1eacdf665a6c5788529714",
      "item_sha256": "dadd9e7f2d46c4002a39efeaa224b599a9212c71dcecc15fa68fd738a9277c86",
      "at": "2026-10-21T14:30:55.649Z"
    },
    {
      "id": "lem-ip-unit-vector-density-has-scalar-variation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F1] applies only when the space is an open subset of R^n, but this item allows any locally compact second-countable metric space. The proof explicitly applies [F1] in that broader setting, which its interface does not license.",
      "context_sha256": "b0cd24a452966fc2d9d230826d9dac6ab0c5554eb1afe86ff5a80b5063c04808",
      "item_sha256": "601ab4452a7b7426044a634a55a128d8bcd4b89132583a07c8db6a3ec6f00787",
      "at": "2026-10-21T14:31:01.861Z"
    },
    {
      "id": "lem-ip-bv-lipschitz-trace-and-zero-extension",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates its cited interface: the graph-trace lemma gives chartwise uniqueness and Green formulas, but not agreement on overlapping charts. Step 1.1 relies on that unstated claim to glue local traces, so the proof does not establish the global trace.",
      "context_sha256": "43bd1236588a215be7bfea447efda85353c60aa19fec95330480afa5069eeccd",
      "item_sha256": "a44e848c9390079b413601422996abbdb690cbedd186e1adad2b17dbf9ba304e",
      "at": "2026-10-21T14:32:44.218Z"
    },
    {
      "id": "lem-ip-bv-strict-approximation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "With sequence indices starting at 0, δ_k=1/k and the compact-support choice u_{1/(2k)} are undefined at k=0, so the claimed sequences are not defined for every k∈ℕ.",
      "context_sha256": "8e36f6a371fa0ec9877244f9035620767b9223f3ed538ed2ca2b710341ed7cde",
      "item_sha256": "eed20a9dd467279fe80b08ebf3d7138aca6425424515aee41869e672d02016df",
      "at": "2026-10-21T14:30:59.840Z"
    }
  ]
