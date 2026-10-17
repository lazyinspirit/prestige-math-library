# Step 5 adjudicate: initial, round 1, unit 30

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-batch-30-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u30.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-remaining-80-2026-10-17",phase:"initial",round:1,unit:"30",input_sha256:"34da341a1db0c97e52a6a7416782ee6b88786a786457765413eee2fcfc4a3d68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-remaining-80-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:post-csm-dk-selected-hamiltonian-dynamics, 1:thm-csm-dk-invariant-hamiltonian-and-shell-measures, 1:thm-csm-dk-mixing-hierarchy, 2:thm-csm-dk-liouville-and-fine-entropy, 3:cex-csm-dk-coarse-entropy-returns.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "post-csm-dk-selected-hamiltonian-dynamics",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: Tong notes p_i is ordinary momentum only in Cartesian coordinates, but this item assigns every generalized q^i m and p_i kg·m/s; angular coordinates have angular-momentum conjugates. [Tong §4.1](https://davidtong.org/teaching/classical-dynamics/dynhtml/S4)",
      "context_sha256": "79280115f5eb1b9c4508902880869ee53e4e1b1ce3b24470f8b9b91a617fcb82",
      "item_sha256": "e4aeba721badb67d07ab42d8f385696f88e93f9fe17b51706af8f1ae0f481de8",
      "at": "2026-10-17T08:01:45.338Z"
    },
    {
      "id": "thm-csm-dk-invariant-hamiltonian-and-shell-measures",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The shell claim quantifies over every nonempty shell, but [F7] applies only to E∈J. The proof applies [F7] without establishing that restriction; the caveat excluding critical levels and noncompact bands does not restrict energies to J.",
      "context_sha256": "1ab81d37a259e257ac75ed19a13a8ec64fbac1ab6ca3c4d9d5dd0bdacf7078e5",
      "item_sha256": "12cbfbc9fdde73e0ff651bbe253565cf002d56163049259617fc3bda3b764f58",
      "at": "2026-10-17T08:01:45.140Z"
    },
    {
      "id": "thm-csm-dk-mixing-hierarchy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Duplicates the supplied theorem: it cites its strong-to-weak implication and repeats the same invariant-set Cesàro test for weak-to-ergodic, so this is not a genuinely different proof.",
      "context_sha256": "10da853186c197b9ae3ded0992c2e9666540f56cb27ee69bac564ae53c3ee0ab",
      "item_sha256": "9e0f535311d651cd2f9d71417cb14a69306c6c461632223bbfb108a0555f790d",
      "at": "2026-10-17T08:01:01.840Z"
    },
    {
      "id": "thm-csm-dk-liouville-and-fine-entropy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 misstates [thm-csm-dk-invariant-hamiltonian-and-shell-measures]: its weighted-energy/canonical-probability clause has no full-AC hypothesis; only the unused regular-shell clause does. The claimed full-AC dependency is unsupported.",
      "context_sha256": "71aa8dd6fd003f327a7400f11c0720f578292ff875c6783cf947ee44fa9e7809",
      "item_sha256": "dd037a306ec703dd969bd7fb2cb0bd8c9436530d06b717818881fcec9ac7617e",
      "at": "2026-10-17T08:01:25.228Z"
    },
    {
      "id": "cex-csm-dk-coarse-entropy-returns",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[A1] inaccurately restates [F2]: its supplied interface has no “regular-shell” premise or stated full-AC requirement. It assumes an open complete invariant domain and an integrable density, so this fails the dependency-restatement check.",
      "context_sha256": "5e014c8a0f40de8f37a3fcd7189a1f6c49a4b3785f10d1a19c83d19fec5e4fc3",
      "item_sha256": "afbb6477dfd538e0af242b999711336adaf0cada2eed50b5b820d56b4be8244c",
      "at": "2026-10-17T08:01:45.553Z"
    }
  ]
