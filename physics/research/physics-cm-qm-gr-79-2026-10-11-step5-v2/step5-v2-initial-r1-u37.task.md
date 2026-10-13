# Step 5 adjudicate: initial, round 1, unit 37

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-37-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u37.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"37",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:thm-nrqm-orbital-and-spin-legendre-rodrigues-equation, 1:thm-nrqm-orbital-and-spin-symmetric-power-su2-representation, 2:thm-nrqm-orbital-and-spin-tsirelson-bound, 2:thm-nrqm-orbital-and-spin-weighted-angular-completeness, 4:thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "thm-nrqm-orbital-and-spin-legendre-rodrigues-equation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 attributes the factorial formula for binomial coefficients to def-binomial-coefficient, which defines them as counts and says the closed form is a separate theorem. Step 1.3 relies on that formula, but thm-binomial-closed-formula is not a dependency.",
      "context_sha256": "21715f67f03c57658b5047a7e94ac863329a02f850164c1011bc0f0ff22c9452",
      "item_sha256": "61778777286e5411e14f643906ca6d6a762ad4f2149c9a1704d55822f7c801c5",
      "at": "2026-10-12T19:58:16.927Z"
    },
    {
      "id": "thm-nrqm-orbital-and-spin-symmetric-power-su2-representation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F8 uses binomial symmetry and a coefficient ratio as supplied facts, but def-binomial-coefficient only defines coefficients as subset counts and explicitly leaves closed-form identities to a separate theorem. Neither identity is proved or supplied here, leaving steps 2.2 and 3.3 ",
      "context_sha256": "292c0930fc297e4e60ea2dbcdb77d549044d06ea1ad888b627776031b7127bb4",
      "item_sha256": "8d1bce558dba00b655630af570f36a987ae3a79e94245772924281b6ead17c5d",
      "at": "2026-10-12T19:58:28.839Z"
    },
    {
      "id": "thm-nrqm-orbital-and-spin-tsirelson-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 restates the cited submultiplicativity corollary, whose supplied interface covers only finite-dimensional spaces, as applying to arbitrary Hilbert spaces. Step 2.1 uses it for potentially infinite-dimensional H and K, so the cited dependency does not license that estimate.",
      "context_sha256": "206a79c5853d2b4165d6f0e08e180a6b460ec3263f748f868808711b0dfc5d93",
      "item_sha256": "021616ada51eebe49ddc6a83650c65c230bad31ba61f8120018684f630d9b421",
      "at": "2026-10-12T19:58:57.373Z"
    },
    {
      "id": "thm-nrqm-orbital-and-spin-weighted-angular-completeness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 attributes the L∞-to-L² bound to the cited density lemma, but its interface states only density. Step 3.1 relies on that extra claim without deriving it, so the local dependency restatement is inaccurate.",
      "context_sha256": "efa4ade64ae5f1af7cb3625d9616aa894dd315c31d223ae93bf79845b3ef5495",
      "item_sha256": "6e60da34e54a09645af3d3119661a557e4ed5451c6dc90c8f8ba41841c5851e5",
      "at": "2026-10-12T19:59:44.283Z"
    },
    {
      "id": "thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (c) takes point values and derivatives of F, but H is a subspace of L²(S²,σ), whose elements are almost-everywhere classes. The cited interface likewise defines Y_lm as classes; point values require explicitly choosing their canonical representatives and lifting each finit",
      "context_sha256": "f609164aee2fb3aa463ae0048897046e6da0e1a6a4862dd2c8ae94131897420b",
      "item_sha256": "5e4e6ed906f6286d2f612be623c0cb28c35a0f0ac9c0b1cc01fc1031fe98b2c9",
      "at": "2026-10-12T20:00:10.906Z"
    }
  ]
