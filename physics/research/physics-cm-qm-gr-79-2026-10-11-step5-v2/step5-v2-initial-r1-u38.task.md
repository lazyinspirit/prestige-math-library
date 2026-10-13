# Step 5 adjudicate: initial, round 1, unit 38

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-38-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u38.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"38",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-nrqm-intervals-hilbert-sobolev-spaces, 0:thm-nrqm-intervals-barrier-transfer-and-thick-limit-error, 0:thm-nrqm-intervals-regular-ivp-parameter-series, 1:lem-nrqm-intervals-weak-derivative-ac-representative, 2:ex-nrqm-intervals-contacts-separated-box-degeneracy, 3:lem-nrqm-intervals-integration-by-parts, 4:thm-nrqm-intervals-dirichlet-diagonal-domain-identification.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-nrqm-intervals-hilbert-sobolev-spaces",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition says the identification of H^1_0(0,L) with the classes having vanishing endpoint values is proved “on this page” using trace estimates, but the supplied item contains no trace estimates or proof of that identification.",
      "context_sha256": "0ac7142418f43f307a759547cdd05679c687602f57a9e7588f5280da987bf18a",
      "item_sha256": "6efef64a6c3a9734ca9055e08415d816e317fa780e382319a08071d42e4d6e5f",
      "at": "2026-10-12T19:59:10.002Z"
    },
    {
      "id": "thm-nrqm-intervals-barrier-transfer-and-thick-limit-error",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 claims cosh(0)=1, sinh(0)=0, and cosh²−sinh²=1 from interfaces that supply only addition laws and derivative equations. These unsupported facts are used to assert det M=1, so the matching proof does not establish invertibility.",
      "context_sha256": "35720c24b38b1604984199011f6bbb45677ea85cb2d01ff9e961eca5161648bf",
      "item_sha256": "08629bb4f1341a0b83be34100628094a9d6c0809a3a772e2f1177b80384cbc84",
      "at": "2026-10-12T20:00:36.804Z"
    },
    {
      "id": "thm-nrqm-intervals-regular-ivp-parameter-series",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: [F3] says “Continuous functions are integrable” by thm-continuous-implies-integrable, but that dependency covers only real-valued continuous functions and Riemann integrability; it does not license the blanket complex/Banach-valued claim.",
      "context_sha256": "c2476b33e510f2b42679c12339c6c601ae8461e0f375d21348aad57d1be4e190",
      "item_sha256": "ce54b261655b373bf3f5d74999fc86e2c8ed7106fc1949633dfb3018841275c7",
      "at": "2026-10-12T19:59:36.548Z"
    },
    {
      "id": "lem-nrqm-intervals-weak-derivative-ac-representative",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3 applies Holder to complex-valued u', but the supplied Holder interface covers only real-valued functions. It needs the complex integral triangle inequality and Holder applied to |u'|; as written, that inference is not licensed.",
      "context_sha256": "47ec028f8232cf2ddc6fa104c83932b2b65c40f240d4312884ac6617369bcae2",
      "item_sha256": "4c1d2f7b3f76b064cfbb5370dce4eb4bf2981405911b994d77686efdc231e46c",
      "at": "2026-10-12T19:59:11.125Z"
    },
    {
      "id": "ex-nrqm-intervals-contacts-separated-box-degeneracy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The verification’s “Given” assumes the family is complete and Δ_D already exists as the part (b) operator, then claims to prove (a) and (b). Those conclusions are premises, making the verification circular.",
      "context_sha256": "2a46ff6ee8a2386e51d184a6415e144638431846ee1dc8b64b381979a5500d66",
      "item_sha256": "2e18bb706ad50667c4148a7c845c7ffd4f31f4e5b06c3409dce2181c6a9489b7",
      "at": "2026-10-12T20:00:32.416Z"
    },
    {
      "id": "lem-nrqm-intervals-integration-by-parts",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.2 asserts every δ<ε/4 keeps the convolution supported in (0,L). The cited mollifier interface allows any compactly supported ρ; it gives no unit support-radius bound, so supp ρδ may exceed the cutoff margin.",
      "context_sha256": "bbf293aa60f9dbb33cd00f3c2ea938a0a70bfa26433954cebad929245734c046",
      "item_sha256": "a5713f53fac95d23563a98063761f482ffd93fd4901b104a42fe8e6e7139bddc",
      "at": "2026-10-12T20:00:42.851Z"
    },
    {
      "id": "thm-nrqm-intervals-dirichlet-diagonal-domain-identification",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Part (b)'s simplicity criterion is false as written: 0 belongs to ker(A_D−λ_n) and is orthogonal to e_n. It must exclude nonzero orthogonal vectors or state ker(A_D−λ_n)=ℂe_n.",
      "context_sha256": "674e1c462f28086c059176be948e3db81aff2a024969bdbbc17ddab2f98d427e",
      "item_sha256": "47781ce69aa3c53bcb657356e3caa2e68b41b80700d34833201bbc3ca13c4d94",
      "at": "2026-10-12T19:59:15.409Z"
    }
  ]
