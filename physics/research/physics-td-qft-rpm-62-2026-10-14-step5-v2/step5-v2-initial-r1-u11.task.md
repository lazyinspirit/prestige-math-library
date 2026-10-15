# Step 5 adjudicate: initial, round 1, unit 11

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-batch-11-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u11.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-td-qft-rpm-62-2026-10-14",phase:"initial",round:1,unit:"11",input_sha256:"c7d8a222abea8b2aeaf8ca5059b6b3a3871cdaeeeed41debed66cfc1d833fd32",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-td-qft-rpm-62-2026-10-14 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-tdmath-diagonal-operator-model, 0:lem-tdmath-conditional-memory-entropy, 0:thm-tdmath-independent-bulk-limit, 2:thm-tdmath-limiting-derivative-and-concentration, 2:ex-tdmath-finite-ensemble-mismatch, 4:thm-tdmath-measurable-canonical-identities.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-tdmath-diagonal-operator-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title asserts self-adjointness, but the definition and its justified_by lemma establish only the Hilbert/domain setup and linearity, not self-adjointness. Rename the item or supply a proved self-adjointness result.",
      "context_sha256": "5c669aeb7c1ca07a54163e3ce69d35198a415e5ff7e9409d3c50204532114761",
      "item_sha256": "5995970439fcf3751393be5242d38cd1c2893b162565a04c1dd6e2493642c851",
      "at": "2026-10-14T19:52:57.790Z"
    },
    {
      "id": "lem-tdmath-conditional-memory-entropy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 writes an unrestricted sum of q(m|r) log q(m|r), but q may be zero and the cited logarithm is undefined at zero; no 0 log 0 convention is supplied. Restrict the sum to q(m|r)>0.",
      "context_sha256": "eaffa524803aec2d3197fca7d2f148df0ffa497ca313efe2ad964ea01afbbc46",
      "item_sha256": "8b58362964280ae97b05921ec25cd2c4a6ff566af7de7de577f4776b04b437ec",
      "at": "2026-10-14T19:54:41.874Z"
    },
    {
      "id": "thm-tdmath-independent-bulk-limit",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 inaccurately says the exponential definition supplies exp(x+y)=exp(x)exp(y); its interface only defines exp by a power series. Step 1.1 needs this unlisted theorem to factor exp(-β∑E), so the partition factorization is unsupported.",
      "context_sha256": "41c59ad33a3849be997421de4dfb94c90b0ffc5aa3165155379469a6b85685ea",
      "item_sha256": "a95a525ee3b01155c9530599150c0b42214c554c0d3bb4f795fdc50e9e91bb85",
      "at": "2026-10-14T19:57:26.414Z"
    },
    {
      "id": "thm-tdmath-limiting-derivative-and-concentration",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 overstates cor-mean-value-theorem: its interface gives only an intermediate-derivative equality, not derivative monotonicity or convex secant bounds. Step 2.1 cites those unsupported results, making this dependency restatement inaccurate.",
      "context_sha256": "02e96ea8f5ea46f718ec38b93dda9f69e458b79c598ce3a89867346e6acccd38",
      "item_sha256": "03a980753a03ac261b8a8619bea187cd07ab26fc0234fec85f91cc2bd061f78f",
      "at": "2026-10-14T19:54:10.273Z"
    },
    {
      "id": "ex-tdmath-finite-ensemble-mismatch",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: [F2] overstates thm-tdmath-summable-canonical-differentiation: it requires a summable majorant on each compact K⊂J, not merely Z>0 and finite. The example may follow from the definition, but this theorem dependency is inaccurately restated.",
      "context_sha256": "270cf6641dd71bf79db566984bcf1ca15ef0782ea643e32c99fa5c7715363c21",
      "item_sha256": "d87bb459b7d1e9a81efa3bd69c685fe3bfca8e03a47e376d1fa11030d49c5aac",
      "at": "2026-10-14T20:01:19.814Z"
    },
    {
      "id": "thm-tdmath-measurable-canonical-identities",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 attributes exp’s positivity to its power-series definition and derivative theorem, whose supplied interfaces establish only the definition and exp′=exp. The separately cited logarithm definition gives positivity, but F3 is still an inaccurate dependency restatement.",
      "context_sha256": "0962d189dbd8ade26e50d59b5934fb60167275579882e0e9faf89a0606da5ff5",
      "item_sha256": "1b2fb46cc08554a9168bf0a518b854823b13ccaf52cb1a8891f87b767eaecba3",
      "at": "2026-10-14T19:54:15.570Z"
    }
  ]
