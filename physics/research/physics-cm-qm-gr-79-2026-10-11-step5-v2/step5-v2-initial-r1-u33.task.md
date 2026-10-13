# Step 5 adjudicate: initial, round 1, unit 33

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-33-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u33.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"33",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 8:def-cm17-continuum-body-and-units, 9:pthm-cm17-chain-limit-of-the-string-model, 10:def-cm17-traction-and-stress, 10:ex-cm17-spring-chain-limit-numbers, 13:post-cm17-fluid-constitutive, 13:ex-cm17-uniform-expansion-transport-check, 15:ex-cm17-channel-flow-and-no-slip-check, 16:rem-cm17-boundary-regularity-and-scope, 16:ex-cm17-periodic-shear-exact-solution-check.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-cm17-continuum-body-and-units",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The field slots have no domains or defining maps, and `D_t` is never defined or supplied by the particle-worldline dependency, which covers only particle curves. Without a continuum motion map, `a=D_tu` has no operational meaning; dimensions alone do not define it.",
      "context_sha256": "d7a17ea269d02b7fd1c2e7abec5befb1eb92bcb1ba9b124fe10e32998e37b3c8",
      "item_sha256": "6560a448df39a31358a7b411609e529eb2c15ed924b6cee5a2c498c492a26000",
      "at": "2026-10-12T19:54:58.351Z"
    },
    {
      "id": "pthm-cm17-chain-limit-of-the-string-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited continuum-limit theorem requires u on [0,Tmax] to be the restriction of a map defined on an open time neighborhood. The statement omits that hypothesis, so step 2.1 cannot apply the supplier under its stated assumptions.",
      "context_sha256": "6b01aba771c7ae749a933bbf5cea15455aba76b89c5299b36669b6187f2a1cc9",
      "item_sha256": "1806edc0b87eb3f8fdd34cfd64dbcfcd7860291213b38d202cff818e29edb233",
      "at": "2026-10-12T19:57:08.480Z"
    },
    {
      "id": "def-cm17-traction-and-stress",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "`def-cm17-continuum-body-and-units` defines b as body force per unit mass (acceleration), with force per volume ρb. Calling b the “body-force density” misidentifies quantities with distinct units.",
      "context_sha256": "e9c4282e228977e9e6d09e69c1c72bd15f636c80893e36a843ea5d7f6f93c030",
      "item_sha256": "7ffe17a535fec8cc3e2bf3c22392143ef51fef65a5059796aa177cd12fd60ff0",
      "at": "2026-10-12T19:54:56.162Z"
    },
    {
      "id": "ex-cm17-spring-chain-limit-numbers",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Remark 2 calls |ω_a−1| the exact error factor, but the exact nodal error is A sin(ja)[cos(ω_a)−cos(1)]; at N=100 its maximum factor is |cos(ω_a)−cos(1)|≈0.0001384. The stated 0.0001645 is only a Lipschitz upper bound.",
      "context_sha256": "4c973619e86f04958697b46717c2d8c34398027b8128eaeb02083c6b1595d961",
      "item_sha256": "8145be977f67ccd486cc78e5dccc44b6e1e03509d2ef76dd14d85dc13ce460c4",
      "at": "2026-10-12T19:56:58.450Z"
    },
    {
      "id": "post-cm17-fluid-constitutive",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (c) does not restrict its scaling to the constant-density incompressible branches: in (b), ρ varies, so Π=P_m/(ρU_*²) yields ∇P_m/(ρU_*²)=∇Π+Π∇logρ, not the displayed gradient; barotropic Euler is not the stated incompressible Navier–Stokes system.",
      "context_sha256": "e56ca1b3e0a7fe66fd25fde99e5ccd7c21f14eadc41bfea0ad5a75bcc709a0e6",
      "item_sha256": "6e6189ad3e8ee9f727654750609301c523df4e4b5f029a205ec3c9ae5fd60ff0",
      "at": "2026-10-12T19:56:36.408Z"
    },
    {
      "id": "ex-cm17-uniform-expansion-transport-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The density is declared only on the swept region, but part 2 claims continuity identically on I×R³. The cited theorem gives it only on current material regions; outside them ρ is undefined. Restrict the claim or declare a global extension.",
      "context_sha256": "be1bb6a8f21ad2425932bbe0439e5ddbe151c22c2ebc075e519f24716d2ebe70",
      "item_sha256": "0f49e36d25b561d1269dbce6bce5354ac41a218bf8794000df31dd2b90d54b47",
      "at": "2026-10-12T19:56:15.545Z"
    },
    {
      "id": "ex-cm17-channel-flow-and-no-slip-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: the MIT citation mislabels Problems 12.9 and 12.14 as channel-flow support: 12.9 treats generalized-Newtonian pipe flow; 12.14 is Kelvin circulation for an incompressible inviscid fluid ([MIT text](https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf)).",
      "context_sha256": "019b108209df19e2a00ba8c2ee5d952f9fe4da1819f3fb320b16b3cdb77c931b",
      "item_sha256": "2b876f9bc2e5f9b8bd4293afc636d14aac30d688818d21f4e4bd3526a00fcb54",
      "at": "2026-10-12T19:58:29.864Z"
    },
    {
      "id": "rem-cm17-boundary-regularity-and-scope",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The final claim misstates scope: the string solutions depend on a separately adopted 1-D string model (tension, linear density, small transverse displacement), not the cited momentum-balance and continuum constitutive postulates. The page-wide model basis is incomplete.",
      "context_sha256": "d62ed592b925f38cfda162e31b6da95f28386ec3dfdc1d73c4728b1cb6cce399",
      "item_sha256": "a247ebd5c537a8f6907bb2e53303db33c285489027889c5cb4f8342e448e8019",
      "at": "2026-10-12T19:55:42.647Z"
    },
    {
      "id": "ex-cm17-periodic-shear-exact-solution-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 attributes q(1)-q(0)=∫₀¹q′ to the supplied FTC first-part interface, which only gives the derivative of an integral function. The shear classification relies on this unsupported identity to force v″=0; supply a proof or the correct dependency.",
      "context_sha256": "1603f34b55b4ef5e6d4698a771312b28fd2727e0f777cd4534150240a7d25c08",
      "item_sha256": "458501c276446e478934e9d811aebc09737a38a350d85e641e37bd4939140758",
      "at": "2026-10-12T19:58:06.793Z"
    }
  ]
