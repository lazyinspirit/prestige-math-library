# Step 7 adjudicate: initial, round 1, unit 10

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/step7-v2-initial-r1-u10.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-39-analysis-30",phase:"initial",round:1,unit:"10",input_sha256:"9338524b8f90ef76ff4d0d3c41b2d942e870edbc6da3d7062fa8aeac770c3e1f",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-39-analysis-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:def-weak-dirichlet-solution-for-a-divergence-form-operator, 5:cor-symmetric-lax-milgram-is-energy-minimisation, 5:lem-testing-a-coercive-weak-solution-with-itself-gives-the-energy-bound, 5:ex-complex-sesquilinear-coercivity-differs-from-bilinear-positivity, 7:ex-nonsymmetric-coercive-elliptic-form.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-weak-dirichlet-solution-for-a-divergence-form-operator",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Testing only against H^1_0 does not encode Dirichlet data: for L=-Δ and F=0, u≡1 satisfies every such test identity but has trace 1. Boundary data are imposed by u∈H^1_0 or Tu=g; the final explanatory claim is false.",
      "context_sha256": "f635bcb3d6ddca1147be7dc5155f14a16442c2e2cac0426b895094299502d9fe",
      "item_sha256": "8135d1f1fdc3bf6030971127199663e0a9f90b46fd941d42fb04f1e58d7ea597",
      "at": "2026-10-06T01:46:12.954Z"
    },
    {
      "id": "cor-symmetric-lax-milgram-is-energy-minimisation",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The claim that Re is required on both terms in the complex case is false. Hermitian symmetry already makes a(v,v) real, so J(v)=½a(v,v)−Re F(v) is real valued and has the same strict minimum.",
      "context_sha256": "cf942579f04d9a6db112ad6a3eb0a834fa6721dc437a7e32ac90932447f8285f",
      "item_sha256": "977257f8ef8899fc30166e810f6781e4c070a9c21994326e0589dbb6203d9e4f",
      "at": "2026-10-06T01:45:34.942Z"
    },
    {
      "id": "lem-testing-a-coercive-weak-solution-with-itself-gives-the-energy-bound",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The claimed verbatim application includes inhomogeneous Dirichlet solutions, where u need not lie in the test space H¹₀. For the Laplacian on a ball, u≡1 with boundary datum 1 and F=0 is a weak solution but violates α‖u‖≤‖F‖.",
      "context_sha256": "be93e1760c7bbe7592b1cb1b5f59607852b25025a24de70cf30427ea291c5873",
      "item_sha256": "9654054034df932306f34876bcc4fc9f74ba125c71a57faa407b8315b68db023",
      "at": "2026-10-06T01:46:22.280Z"
    },
    {
      "id": "ex-complex-sesquilinear-coercivity-differs-from-bilinear-positivity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 overclaims: the zero form on any complex H is both bilinear and sesquilinear and satisfies the representation lemma's form hypotheses. On H={0} it is also coercive, so Lax–Milgram's hypotheses can hold.",
      "context_sha256": "62e27fd31fd9c0b6e7b3e6c3596434d201092a3c1ca50b682f106eee0de7bd72",
      "item_sha256": "e52aa9d8cb69f56a18b62892fa61e50f49071028e926b5c148c997730f836292",
      "at": "2026-10-06T01:47:51.752Z"
    },
    {
      "id": "ex-nonsymmetric-coercive-elliptic-form",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 restates the bump lemma as supplying a radial bump, but its interface guarantees only a smooth bump. No radialisation argument is given, so this dependency does not license the radiality used in F4 and step 1.3.",
      "context_sha256": "ea6b3cbe57b910e186048aa109bcef91f33a52680ed7fc3558a072571c811bf5",
      "item_sha256": "0b581e65ffeb463324da64f88363f0ad845ce638cf756a281611092876fb936e",
      "at": "2026-10-06T01:47:30.091Z"
    }
  ]
