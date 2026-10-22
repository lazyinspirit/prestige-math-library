# Step 5 adjudicate: initial, round 1, unit 41

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-41-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u41.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"inverse-problems-knot-theory-all-109-2026-10-19",phase:"initial",round:1,unit:"41",input_sha256:"c872603b0f7c95c42125928ec1ced19e672caec5508e4ce625685b74e981d23d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run inverse-problems-knot-theory-all-109-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-ip-cta-gaussian-beam-ray-limit, 1:lem-ip-limiting-carleman-estimate-on-product, 2:def-ip-conductivity-dirichlet-to-neumann-map, 2:lem-ip-boundary-quasimode-jets-and-borel-correction, 2:lem-ip-cubic-dn-small-data-differentiability, 3:lem-ip-cubic-dn-third-linearization-identity, 4:thm-ip-semilinear-cubic-dn-identification, 5:ex-ip-boundary-jets-do-not-imply-interior-uniqueness.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-ip-cta-gaussian-beam-ray-limit",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates its cited interface: it defines Riemannian metrics and manifolds, but does not establish geodesic normal coordinates, a volume density, or the Laplace–Beltrami operator. Those claims are unsupported dependency restatements.",
      "context_sha256": "42fb4383432f2f23fc5730226173d7642fdb6cff5f300bde096c6efe1296cc15",
      "item_sha256": "a05d18b24b6bd45c9b2307271f1365b40cba461c6ce22cbfe3b98d2bf1c8d26c",
      "at": "2026-10-21T14:44:24.233Z"
    },
    {
      "id": "lem-ip-limiting-carleman-estimate-on-product",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof only handles sufficiently small h: it needs h max_M|x₁|/ε small and then a smaller h to absorb h²q. The statement never requires h₀ to lie below those thresholds, so the claimed range 0<h≤h₀ is unsupported.",
      "context_sha256": "4371a1d59e41bbc4545af68ecf7dee3bc8dcf78b66d6626d52b22efa2f17837a",
      "item_sha256": "67394643967a5794b06f4116d70f60dd461bd64b5f7ea35e6f12c8a4fec2b1aa",
      "at": "2026-10-21T14:47:59.380Z"
    },
    {
      "id": "def-ip-conductivity-dirichlet-to-neumann-map",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1's one-dimensional case is unsupported: [F3] gives positive-conductivity solvability, not an endpoint trace or kernel result. It does not establish that an arbitrary zero-trace difference W lies in H_0^1(M), as required in 2.1.",
      "context_sha256": "955878cb2318120dfdeac72188151e9fde6f8a39b7447ad9612e1cdae6bb2b43",
      "item_sha256": "da15fc5348bd6485c9bb5d31bd71b4c8768739a196ec285e47ef20f16b9198d3",
      "at": "2026-10-21T14:44:06.368Z"
    },
    {
      "id": "lem-ip-boundary-quasimode-jets-and-borel-correction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof applies F3 directly to Ω, but F3 requires a connected compact domain. The cited domain definition explicitly permits disconnected Ω, so F3 does not license the solvability and Poincaré claims used for the exact corrections.",
      "context_sha256": "824eb0ea92a610607ad3c6c81315c9928ccc57773aafeaf3699a5c4aa76a0649",
      "item_sha256": "aac8e7ddb141f41e70c1571b30053a005cfd71d00fd7ac8d51fb682b7b17882f",
      "at": "2026-10-21T14:44:21.282Z"
    },
    {
      "id": "lem-ip-cubic-dn-small-data-differentiability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 is inaccurately restated: its interface requires zero boundary data for the solution, not a zero-trace source F. This violates the required dependency-restatement check.",
      "context_sha256": "ec20b31328df92cba16596b645011cc42ecb63878ae3153eea164f574cd43144",
      "item_sha256": "921c6d92dca1bc52919c2717351e21426ab38485e90fa3e75c091ecee4204771",
      "at": "2026-10-21T14:44:37.789Z"
    },
    {
      "id": "lem-ip-cubic-dn-third-linearization-identity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 is stated only for bounded C^1 domains in dimension n≥2, but the item allows n=1, broadens F5 in its restatement, and invokes it in step 3. Supply a 1D Green formula argument or restrict the item to n≥2.",
      "context_sha256": "27821a532ea79b8283e942ad99f1918b42c724166597c30e6d16d352d406ce0f",
      "item_sha256": "cc3233c93a53f0a61b32ca30cb799935579f7264e71b0714f88b6b658c08ad5b",
      "at": "2026-10-21T14:45:21.040Z"
    },
    {
      "id": "thm-ip-semilinear-cubic-dn-identification",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 says the four-factor witnesses are constant in τ, but LL–LS’s construction uses τ-dependent Gaussian beams and correction terms (Prop. 5.1, [source](https://users.jyu.fi/~salomi/pub/Calderon_elliptic_nonlinear_V16.pdf)). This misstates the cited supplier.",
      "context_sha256": "5e83b1439f2a277de807fc71fb03983f3bbfa37cdc9c2320186cc6c1d0ec0bef",
      "item_sha256": "e82a9d0e9781f0be1f675addee3801a96e1698923c5d4f93898181bfa4bba2e3",
      "at": "2026-10-21T14:46:25.420Z"
    },
    {
      "id": "ex-ip-boundary-jets-do-not-imply-interior-uniqueness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 omits the dependency theorem’s n≥2 hypothesis, while the item allows n=1. On an interval, the full conductivity DN map depends only on ∫1/γ, so it does not determine all boundary jets.",
      "context_sha256": "3d648112ea95178b4bca0dcd957ac3ded8c1dcce1d73689f2bca22e4de0d2727",
      "item_sha256": "411932739c10d387e7c462150c46b10248acd7654500a808a056126eb85add9e",
      "at": "2026-10-21T14:44:57.350Z"
    }
  ]
