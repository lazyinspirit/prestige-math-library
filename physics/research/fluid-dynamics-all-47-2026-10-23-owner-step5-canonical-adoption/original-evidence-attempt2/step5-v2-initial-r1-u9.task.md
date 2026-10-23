# Step 5 adjudicate: initial, round 1, unit 9

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/fluid-dynamics-all-47-2026-10-23-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/fluid-dynamics-all-47-2026-10-23-batch-9-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u9.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"fluid-dynamics-all-47-2026-10-23",phase:"initial",round:1,unit:"9",input_sha256:"9be711b940a681b75640bcf998c1259c5d3eb539d47214af2cabfb73a7f7cd6d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run fluid-dynamics-all-47-2026-10-23 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:post-fd-boundary-data, 4:pthm-fd-conservation-jump-laws, 5:pthm-fd-cauchy-momentum-angular, 5:pthm-fd-control-volume-balances, 5:pthm-fd-energy-decomposition.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "post-fd-boundary-data",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Powers is mis-cited: the linked notes list §5.4.1 as Underlying experiments (p. 165); pp. 173–174 are within stress–strain analysis, while boundary/interface conditions are §6.1 ([notes](https://www3.nd.edu/~powers/ame.60635/notes.pdf)).",
      "context_sha256": "2420c43d3e88e9cfbed9f230cf2929e336e44b636e5727a6b0777e3e6da65fde",
      "item_sha256": "13476024150248e50eba7778c18dcd177490ff927d378ec4ad8a15dad9411c79",
      "at": "2026-10-22T22:44:12.381Z"
    },
    {
      "id": "pthm-fd-conservation-jump-laws",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The F2 restatement and the final formula use [F]·n for every flux, including the momentum tensor. The supplied lemma defines the tensor contraction as [F]n; as written, this is an inaccurate, ill-typed dependency restatement.",
      "context_sha256": "8f860c5384bd9db902f988fac3504aef5e8886430131df2b3b401c214899af70",
      "item_sha256": "d0fb569a2bf31268f03d99f778044897d4dd27857185a815879564e54c08db33",
      "at": "2026-10-22T22:42:22.046Z"
    },
    {
      "id": "pthm-fd-cauchy-momentum-angular",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 misstates [[pthm-fd-continuous-source-local-balances]]: it requires e,q∈C¹(O) and r∈C⁰(O). The item gives only ρ,u,b,σ on O; the postulate supplies thermodynamic fields on swept regions, not all O, so F3 is not applicable as invoked.",
      "context_sha256": "8a20ae1b51c0a175a850bf159b5aee436d01b2a03690522b47a09889399e68bc",
      "item_sha256": "9b5b0a731fff5bbd609c00691cb34fdb350fb9caf65ddef0381e9f471e17a034",
      "at": "2026-10-22T22:44:17.664Z"
    },
    {
      "id": "pthm-fd-control-volume-balances",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2 applies F1/F2 on Ω_t, but their interfaces establish local balances only on an admissible material region χ_t(B) with I containing 0. The statement neither supplies that material motion nor relates Ω_t to its balanced region; Ω_t may be unrelated, so the PDEs used in steps",
      "context_sha256": "e4d56f28a16488fd3368d35c1cfc3c9e38831701b07e5a2e5cfd53ba108b7b97",
      "item_sha256": "7f27e964da83b542228bf5f97d37b93814e8a87298dde80f6acfc59f9e112838",
      "at": "2026-10-22T22:42:21.463Z"
    },
    {
      "id": "pthm-fd-energy-decomposition",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement never requires u(t,χ(t,a))=∂tχ(t,a). The mass-continuity and local-balance dependencies use the motion-induced material velocity; with an independent C¹ field u, steps 2.1–5.1 and the conservation claim do not follow.",
      "context_sha256": "7c8eefec6c873df6f153f9967cfba6bd5aaac27c6e618fb0aff1c205ca9cba61",
      "item_sha256": "e8be51108e462493ed98de2ba75b3667a09334c602498abcb7ad786c132e67bd",
      "at": "2026-10-22T22:42:38.124Z"
    }
  ]
