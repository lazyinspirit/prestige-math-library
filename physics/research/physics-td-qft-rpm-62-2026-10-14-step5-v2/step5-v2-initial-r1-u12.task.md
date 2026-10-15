# Step 5 adjudicate: initial, round 1, unit 12

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-batch-12-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u12.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-td-qft-rpm-62-2026-10-14",phase:"initial",round:1,unit:"12",input_sha256:"c7d8a222abea8b2aeaf8ca5059b6b3a3871cdaeeeed41debed66cfc1d833fd32",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-td-qft-rpm-62-2026-10-14 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-tdmath-elastic-collision-kernel, 0:def-tdmath-finite-site-shell-and-canonical-law, 0:thm-tdmath-continuous-ideal-gas-block-limit, 0:ex-tdmath-pure-state-versus-average-entropy, 1:thm-tdmath-compact-continuous-mixture-attainment, 2:cex-tdmath-noncompact-mixture-nonattainment.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-tdmath-elastic-collision-kernel",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: the definition specifies neither the test-function class nor the space/type of Q(f). Thus “for each test function used” is indeterminate and may be vacuous, so the weak identity does not define a collision operator.",
      "context_sha256": "2233f2ab90f1cafd84c4de5635ab569be78de0f48f91322716441101dcee0840",
      "item_sha256": "cf4a232f403348d87932edb8b2d60f409390b480c450cc870d96ce5b957f236e",
      "at": "2026-10-14T19:54:42.821Z"
    },
    {
      "id": "def-tdmath-finite-site-shell-and-canonical-law",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title promises a narrow shell, but no narrowness condition is imposed on δ_N; it may be large enough that Γ_N=A^N. The definition therefore covers full configuration spaces while claiming narrowness.",
      "context_sha256": "c0ceca9008e88a185d4dcccba433fa9a48c84e386aa820aa10dcdc7ec976e22e",
      "item_sha256": "44ae6a83ba852681efcb8c304d1ad627f778a51a62828453856d11d3a23291ec",
      "at": "2026-10-14T19:56:32.367Z"
    },
    {
      "id": "thm-tdmath-continuous-ideal-gas-block-limit",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Steps 1.1–1.2 apply product measure/Tonelli to Lebesgue factors, but the cited definition explicitly does not establish that λ_n is a measure; its interface points to thm-lebesgue-measure-is-a-complete-measure, absent from deps/justified_by. Thus F2/F3 hypotheses are unmet.",
      "context_sha256": "05aa4123611d62e4d63781a9c8f28420ad7a9e7653274ad29d188a0e90bc14ce",
      "item_sha256": "bfb46669d44ed3ceea460301b1f62b57a0771c7619bf97215500a06fa562d012",
      "at": "2026-10-14T19:55:18.924Z"
    },
    {
      "id": "ex-tdmath-pure-state-versus-average-entropy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 claims the cited definitions establish that phase factors have unit modulus, but their supplied interfaces do not; that fact is in the exponential-modulus corollary. Step 1.1 cites only F2 for the unit-norm inference, so its cited facts do not license the step.",
      "context_sha256": "2b9b06d3f3544da8e99585efd64da88078c3ef4239ab9ad34f1c9708303ab71f",
      "item_sha256": "a48e3e72508b5cc13dc7038fa1a62f4fe2035b05a1cedcf2eb437fa91c69eb53",
      "at": "2026-10-14T20:01:23.364Z"
    },
    {
      "id": "thm-tdmath-compact-continuous-mixture-attainment",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 overstates its dependencies: the supplied interfaces define probability laws and the Lebesgue integral, but state neither bounded-Borel integrability nor linearity. Step 4.1 uses both without a supporting integral theorem, so this dependency restatement is unlicensed.",
      "context_sha256": "21cb14599d8f48f30c51c6b5e5d120e34147a1b33b65e15c51a631c3396d15b2",
      "item_sha256": "248acec6716b8034e5e7e2b65a5cfd6a0ef92bc7dca603cb2dac50ad7400cc34",
      "at": "2026-10-14T19:55:51.700Z"
    },
    {
      "id": "cex-tdmath-noncompact-mixture-nonattainment",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 inaccurately restates its dependency: the integral is the mean energy \\bar a(P), while “mixture energy” a_mix is an infimum over measures with a prescribed barycenter. This dependency mismatch is fatal under the required local-restatement check.",
      "context_sha256": "7ed3fdbc44922960e4682a2659a3e0adf257bb297a0a7f1e9254be3141d71f0f",
      "item_sha256": "f34bb30d0e812b4f4a9360a456ef01515be3fd0bf99ed23fd0225c96363fc7c2",
      "at": "2026-10-14T20:00:43.676Z"
    }
  ]
