# Step 5 adjudicate: initial, round 1, unit 10

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-10-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u10.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"inverse-problems-knot-theory-all-109-2026-10-19",phase:"initial",round:1,unit:"10",input_sha256:"c872603b0f7c95c42125928ec1ced19e672caec5508e4ce625685b74e981d23d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run inverse-problems-knot-theory-all-109-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-ip-sparse-gaussian-extremal-profile, 4:lem-ip-q2-ellipsoid-extremal-profile-is-minimizer, 6:cor-ip-ellipsoid-sharp-gaussian-testing-asymptotics, 6:ex-ip-mildly-illposed-analytic-detection-rate, 6:ex-ip-severely-illposed-analytic-detection-rate, 6:ex-ip-severely-illposed-sobolev-detection-rate.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-ip-sparse-gaussian-extremal-profile",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The profile sequences are not restricted to i≥1. By convention their indices include 0, but z and d are defined only on (0,∞); thus z(0) and d(0) are undefined, and h_0 also collides with the scale parameter.",
      "context_sha256": "cf0ec216d2644ad5d7d6c1b3f5d8f00a99d0debf8681d34df99fee56c17220f7",
      "item_sha256": "a50f7ee03eaaff5aca848c484684bd0c6865bf30def973197961e66d8873670b",
      "at": "2026-10-21T14:14:51.598Z"
    },
    {
      "id": "lem-ip-q2-ellipsoid-extremal-profile-is-minimizer",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 omits the dependency’s required σ_j→∞ setup, while the statement allows bounded positive nondecreasing σ. It therefore applies the cited definition outside its supplied interface.",
      "context_sha256": "12c342fe4f4254ebf031ce5626d521454cdb43ef88655472501143687ccd2bbf",
      "item_sha256": "17630e24ea479379a3c956a4b464cdbbc3a0f42006c90979f9145809a01b1351",
      "at": "2026-10-21T14:14:05.530Z"
    },
    {
      "id": "cor-ip-ellipsoid-sharp-gaussian-testing-asymptotics",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 attributes the uniform alternative-mean bound m_eta≥u_epsilon to the supplied detection-boundary interface, which neither states that bound nor gives the variational details needed to derive it. The upper bounds in 2.1 and 4.1 rely on it.",
      "context_sha256": "c73e882a6e9516e9e85217a8e990d88bbbd0d93e94a98a35f216e5b15202090b",
      "item_sha256": "12661e194276241759061d904a9676fce38344878dd7d272b0d7be16a8f76e6a",
      "at": "2026-10-21T14:14:52.209Z"
    },
    {
      "id": "ex-ip-mildly-illposed-analytic-detection-rate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "With sequences indexed from 0, the stated σ_j=j^β gives σ_0=0. Both extremal-profile dependencies require positive σ_j, so their existence and minimizer results do not apply as cited.",
      "context_sha256": "a69d9f98434f0c5e73fd79089fe07ae1200d931f95ad8f49a71993cbfabe9931",
      "item_sha256": "24fd0302d2df8abaef292f002551380708f79bf82534ce11210a037c66d46854",
      "at": "2026-10-21T14:15:09.365Z"
    },
    {
      "id": "ex-ip-severely-illposed-analytic-detection-rate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 requires Countable Choice, but the example never assumes it. The cited risk implications therefore do not follow from F1 under the stated hypotheses.",
      "context_sha256": "8d5bea2e3c1e84e008e91cd8247a0348067146df0d78194f3aa9b69d373308d0",
      "item_sha256": "31dc172c54bbe37f64dc6ca49767d6699b8027fb9c94ab29782cef37800d5f4b",
      "at": "2026-10-21T14:15:30.212Z"
    },
    {
      "id": "ex-ip-severely-illposed-sobolev-detection-rate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 invokes [thm-ip-ellipsoid-detection-boundary] without its explicit Countable Choice hypothesis, which the example never assumes. The cited minimax-risk limits therefore do not follow from the stated setup.",
      "context_sha256": "fc7af668a54a3d2090874d7c979b272a524c380bb23d6213d3f7690c864599f3",
      "item_sha256": "d19d2e4daff87bb437c5e76318ece65216407a2355c4044823b662e6d289976b",
      "at": "2026-10-21T14:15:58.837Z"
    }
  ]
