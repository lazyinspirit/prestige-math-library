# Step 5 adjudicate: initial, round 1, unit 60

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-60-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u60.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"60",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 10:def-nrqm-driven-dynamics-framework-adiabatic-protocol, 10:def-nrqm-driven-dynamics-framework-interaction-picture, 10:pthm-nrqm-driven-dynamics-bounded-norm-propagator, 10:pthm-nrqm-driven-dynamics-common-domain-propagator, 11:pthm-nrqm-driven-dynamics-circular-drive-exact-rabi, 11:pthm-nrqm-driven-dynamics-mild-propagator-and-pictures, 12:ex-nrqm-driven-dynamics-ammonia-two-level-resonance, 12:ex-nrqm-driven-dynamics-circular-drive-exact-populations, 12:ex-nrqm-driven-dynamics-linear-drive-rotating-wave-budget, 14:ex-nrqm-driven-dynamics-driven-oscillator-coherent-response.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-nrqm-driven-dynamics-framework-adiabatic-protocol",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: Binney §9.1.2, pp. 206–208, treats the linear Stark effect and degenerate perturbation theory, not slow gapped-level following; its adiabatic principle is in §11.1 ([source](https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf)).",
      "context_sha256": "458ffbf1fd2acfa132c40b812a7753fc991dd27d059317fed758b189e0be6e03",
      "item_sha256": "5974476a1df70a41911a996e24b3daae1dec58be54e37280b6e335e63e792d6d",
      "at": "2026-10-12T20:16:18.582Z"
    },
    {
      "id": "def-nrqm-driven-dynamics-framework-interaction-picture",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (e) has a fatal phase error: the decomposition gives A_ba(t,s)=exp(i(sE_a−tE_b)/ℏ)⟨U_I(t,s)φ_a,φ_b⟩, since E(t) contributes exp(−itE_b/ℏ). The stated phase incorrectly uses sE_b.",
      "context_sha256": "8dce0d247063dcfdb41d0de80a6ba93d7e80e591983d830f7b547e57d35754f5",
      "item_sha256": "89eda5b2a7bc54eeaf5e497b8ebcde0ae0cc1213c5ac3988459a4fa5c60b6fb9",
      "at": "2026-10-12T20:15:03.303Z"
    },
    {
      "id": "pthm-nrqm-driven-dynamics-bounded-norm-propagator",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For the allowed singleton interval a=b, F1 supplies U(a,a)=I but no endpoint derivatives. Clause (a) still asserts both operator-norm differential equations, and step 1.1 incorrectly claims F1 supplies them. Restrict to a<b or qualify the derivative claim.",
      "context_sha256": "407ea12d56607e1e082632aeaa6eb16419e06f33f68a6bf8938dee2c4841eb81",
      "item_sha256": "e24429fb4070e3e32131d57764993979e716f0ea2dfbd757c3ab329abcf16c14",
      "at": "2026-10-12T20:15:58.912Z"
    },
    {
      "id": "pthm-nrqm-driven-dynamics-common-domain-propagator",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For I=[a,a], clauses (a) and (b) assert strong derivative equations, but step 1.1 handles the singleton by U(a,a)=I and explicitly asserts no derivative. The proof therefore does not establish the stated claims for every allowed interval.",
      "context_sha256": "f3b924f407808085f9ab0617b59373bdc635e42b5265b72d63410bd911939cd5",
      "item_sha256": "8384ba5881107b861e83840035a3fbf50b503352710f8b65d0636b7006f45752",
      "at": "2026-10-12T20:16:32.478Z"
    },
    {
      "id": "pthm-nrqm-driven-dynamics-circular-drive-exact-rabi",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (c) overclaims for the declared finite interval: with I=[0,1] s and s=0, resonance, and Ω₁=1 s⁻¹, the stated π-pulse and return times lie outside I−s. Qualify those claims by s+τ∈I and periodicity to pairs of times in the domain.",
      "context_sha256": "38d3a51d02b8baade22790e2efe558d257caeb6674b833f314c75d5b607a684c",
      "item_sha256": "b4e75abd448e827dd83c4dd2e48aeb25c9c9670f9a8f7b370163cdf5b1c3e2df",
      "at": "2026-10-12T20:15:35.753Z"
    },
    {
      "id": "pthm-nrqm-driven-dynamics-mild-propagator-and-pictures",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 does not establish uniqueness: F1 constructs a Dyson-sum solution but does not say every family satisfying the mild identity equals that sum. Convergence of the constructed series alone does not prove uniqueness; a Volterra iteration or Grönwall argument is needed.",
      "context_sha256": "3eca8e483b6f64685ea17a6000e68594c010c3b029683379fad088575a0ba134",
      "item_sha256": "a52cdceef26ac4bbd42854acf53d1b7d5df55ddea2e1fac8460a996a3831a6d0",
      "at": "2026-10-12T20:15:25.453Z"
    },
    {
      "id": "ex-nrqm-driven-dynamics-ammonia-two-level-resonance",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L1] omits the error contract’s essential preparation condition: supplier clause (c) assumes ψ(s)=e_up. Its unqualified exact/averaged population claim is false for general preparations; the contract applies only to the specified initial |E> preparation.",
      "context_sha256": "0aaadf72f271f240d533bfdcf0556add5015884488ef9c19f3dbd4b863425e79",
      "item_sha256": "3f01b7de2d5eb8cc3d6fdb9d8a14ba6a8af18ea65a72579a4929cdee88cad5fe",
      "at": "2026-10-12T20:16:52.023Z"
    },
    {
      "id": "ex-nrqm-driven-dynamics-circular-drive-exact-populations",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The supplied theorem defines U_c(t,s) only for s,t in its compact interval I, but the example neither fixes I nor requires it to contain the claimed elapsed times. A shorter I makes the quarter-pulse, pi-pulse and return evaluations out of domain.",
      "context_sha256": "0bfb69d31a04af6e96eae7eaf36755b3725484e0b41db43a0983e20a25c07983",
      "item_sha256": "be1ef1f8fb563b7880c794a978f49f5154d8c8c4001f2c5e96a0e15201822998",
      "at": "2026-10-12T20:16:48.903Z"
    },
    {
      "id": "ex-nrqm-driven-dynamics-linear-drive-rotating-wave-budget",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal arithmetic error: with Ω₁=ω/50, ε(0)=|Ω₁|/(2|ω|)=1/100, not the 1/50 claimed in (d). The bound is conservative there, but its stated value is wrong.",
      "context_sha256": "61a1c28a06a9f61e152a74cfd58d6da23f3d2519d8457caf62bec3eaefbdab49",
      "item_sha256": "7a224a15f29049d10714b10b04518696c985243ad488032fbc3ba6ebfad4526c",
      "at": "2026-10-12T20:15:38.091Z"
    },
    {
      "id": "ex-nrqm-driven-dynamics-driven-oscillator-coherent-response",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Scope mismatch: [L1] and the cited propagator clauses give the formula only for a≤s≤t≤b, but the example quantifies over all s,t∈[a,b]. The proof never extends it to t<s via the inverse evolution.",
      "context_sha256": "b23b3db541c042e37421d9a50c137b75236efa8ed8d16f448e41308ebdcf5981",
      "item_sha256": "5f2b5f4dcffcf1adbeb6804fc012800f349c67257dad7ae5efd554e99091e9c4",
      "at": "2026-10-12T20:16:24.862Z"
    }
  ]
