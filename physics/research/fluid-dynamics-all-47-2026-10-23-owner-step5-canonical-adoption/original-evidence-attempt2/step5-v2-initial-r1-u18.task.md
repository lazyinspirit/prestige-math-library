# Step 5 adjudicate: initial, round 1, unit 18

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/fluid-dynamics-all-47-2026-10-23-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/fluid-dynamics-all-47-2026-10-23-batch-18-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u18.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"fluid-dynamics-all-47-2026-10-23",phase:"initial",round:1,unit:"18",input_sha256:"9be711b940a681b75640bcf998c1259c5d3eb539d47214af2cabfb73a7f7cd6d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run fluid-dynamics-all-47-2026-10-23 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-fd-flat-channel-domains, 0:def-fd-smooth-wall-exterior-solution-domains, 1:def-fd-polytropic-symmetric-variables, 1:ex-fd-couette-vorticity, 3:thm-fd-smooth-polytropic-euler-ivp.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-fd-flat-channel-domains",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The boundary-condition clauses use u and g without defining their types or domains, so the trace equality is not fully specified. Define u as a vector field on a stated channel and g as data on the two wall faces.",
      "context_sha256": "b5763e5338d7ba1352098727fa6c2e511393eb33558be7911ca1c3bd96793793",
      "item_sha256": "b3193cb3df851beb68ea5e1927ebddf4e8c663f18c06f210fa11138ca8e9bec1",
      "at": "2026-10-22T22:45:00.598Z"
    },
    {
      "id": "def-fd-smooth-wall-exterior-solution-domains",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The moving-wall condition u|∂Ω=g is ill-typed: g is never defined, including its domain, codomain, time dependence, or regularity. The definition standard requires these data to be explicit.",
      "context_sha256": "f224f4e09b28782574c03abbf2c078978b1bdd8d67b2a74ddd47d821905bc934",
      "item_sha256": "7f6adbf14daf073717016191498759383793c9ed5d6d3612295e238625e01152",
      "at": "2026-10-22T22:44:58.478Z"
    },
    {
      "id": "def-fd-polytropic-symmetric-variables",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal: q is introduced as a point in R^{d+1}, then q_t, spatial derivatives, and integral Fourier coefficients are used without specifying a field domain or regularity/integrability. The Sobolev dependency licenses integral coefficients only for componentwise-integrable fields.",
      "context_sha256": "df6d58b5d2888944a8697bdf764727b8a6b2242c0b712c88085b1b0864df2e7e",
      "item_sha256": "c0b40745324574dc01abb09b464b195ff28bf8a9f182483101e23ef7423b5adf",
      "at": "2026-10-22T22:45:17.197Z"
    },
    {
      "id": "ex-fd-couette-vorticity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 misstates the dependency: it calls the periodic x and z coordinates “streamwise,” but for the stated x-directed shear, z is transverse. The interface only says the first and third quotient coordinates are periodic.",
      "context_sha256": "4c247dfa73659b3c0e50a6e97f2bdc3478df76bd9e7db0bbcd067339f958c14b",
      "item_sha256": "4fa7c259ab9ad3206b59c0edc48625c2f1903df2e42f70d69549f9f6c98ab5c0",
      "at": "2026-10-22T22:45:39.703Z"
    },
    {
      "id": "thm-fd-smooth-polytropic-euler-ivp",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 4.1 repeatedly chooses a convergent subsequence of the previously chosen subsequence. Countable Choice covers a fixed sequence of nonempty sets, but these choices depend on earlier choices; the proof needs countable dependent choice or a stated canonical diagonal extraction.",
      "context_sha256": "b73178aa97d913fd5752bcdf5455de5e7ea3a8cfaac0623edce7e594bd2958c0",
      "item_sha256": "4e8217e91ce0832734a00d0bb824de02bd8a7653a7a63710fdef045a54432f9f",
      "at": "2026-10-22T22:45:18.885Z"
    }
  ]
