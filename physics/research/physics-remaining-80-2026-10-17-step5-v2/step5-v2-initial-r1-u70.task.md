# Step 5 adjudicate: initial, round 1, unit 70

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-batch-70-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u70.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-remaining-80-2026-10-17",phase:"initial",round:1,unit:"70",input_sha256:"34da341a1db0c97e52a6a7416782ee6b88786a786457765413eee2fcfc4a3d68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-remaining-80-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-tgr-spherical-entropy-constraint-functional, 2:thm-tgr-constant-density-star-verified, 2:thm-tgr-constrained-entropy-tov-criticality, 3:cex-tgr-constant-density-critical-center, 3:cex-tgr-incompressible-causal-transport, 3:ex-tgr-constant-density-positive-branch.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-tgr-spherical-entropy-constraint-functional",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited static-domain interface requires b∈C∞((0,∞)), but admitted profiles are only C² and need not yield such a b. Thus the claimed volume density need not belong to a slice of that domain.",
      "context_sha256": "efe51b271d79e00d0f6fab7e5f0e1bc30f3237eab74b42b8e6800565d0416673",
      "item_sha256": "bb87743e7cd092b35823c091f4f85430fcfa03e54705cc1098e84e954c159a6d",
      "at": "2026-10-17T08:13:46.292Z"
    },
    {
      "id": "thm-tgr-constant-density-star-verified",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The supplied state-domain interface requires smooth φ, b, ε, and p on (0,∞). Here ε jumps at R and b has unequal one-sided r-derivatives there, so the matched construction is not a state in that domain; its interface extension is not licensed by that dependency.",
      "context_sha256": "2c5cd67a90ea80a9566995a20372bb7fe78ea6968001074978390e2a8bd4a8b5",
      "item_sha256": "9dd6a2350b81b8bc4ec26a8c4d845a92444a78a4b02d990e12f209dc4496a0a2",
      "at": "2026-10-17T08:12:44.344Z"
    },
    {
      "id": "thm-tgr-constrained-entropy-tov-criticality",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title claims a “TOV equivalence,” but the theorem proves stationarity iff the Tolman–Klein conditions and derives TOV only as a consequence; it does not show TOV alone is sufficient for stationarity.",
      "context_sha256": "9e8cc78a4f79f6e8611800631fff397e2a7b5d35c48919f6ecfe3e665eb2df02",
      "item_sha256": "5413d1b13670c1f82ef6fb10908dd94643b84510fc0a2e9fc84ec7c1cd4e6693",
      "at": "2026-10-17T08:13:30.969Z"
    },
    {
      "id": "cex-tgr-constant-density-critical-center",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof relies on thm-tgr-constant-density-star-verified for the central pressure and lapse formulas in F1. That physical result cannot justify this mathematical item, and no independent mathematical derivation of those formulas is supplied.",
      "context_sha256": "9eb7bd471dbdeb01cd59bc4ea42e5166486d189a1c048d916c02ff17511f3e52",
      "item_sha256": "2a19f309e6467dacf0e627d371a4f43591a73186a3037f2599c82df2eb7d7cd8",
      "at": "2026-10-17T08:12:30.632Z"
    },
    {
      "id": "cex-tgr-incompressible-causal-transport",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The mathematics-domain item relies on the TGR static-solution result to establish F1, but labels it a mathematical premise. A physics-scope result cannot justify a mathematical item.",
      "context_sha256": "12b99321add328bcbf730dcf11e3800853144ed60c88e8b4c6bb806275e89c9d",
      "item_sha256": "91885190f7030f2cb82694826b9052d3a8adcb42f761774ddde65ce6bedd4b5a",
      "at": "2026-10-17T08:13:37.129Z"
    },
    {
      "id": "ex-tgr-constant-density-positive-branch",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The mathematics item relies on thm-tgr-constant-density-star-verified for the decisive claim that its profiles solve the Einstein system and have regular matching. A physical theorem cannot supply a mathematical item’s justification.",
      "context_sha256": "7568ebd85ac297ff48b7cf55f872179c3a78c02ffcd9018f43ed86ef541a3b19",
      "item_sha256": "ac03a4ca04c54daa43d2c6af1374557cccd6cdc48b31d56d02a92d76fba1b2fb",
      "at": "2026-10-17T08:12:39.950Z"
    }
  ]
