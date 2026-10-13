# Step 5 adjudicate: initial, round 1, unit 14

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-14-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u14.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"14",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 3:def-holomorphic-kam-domain-and-diophantine-labels, 5:lem-frequency-reparametrization-by-contraction, 9:lem-kam-conjugation-symmetry-of-the-construction, 10:lem-kam-limit-is-an-embedding, 12:ex-two-rotor-kam-model-with-units.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-holomorphic-kam-domain-and-diophantine-labels",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: O_0(Ω)=∅, so the general norm definition gives |g|_{r,s,0}=0, while the same symbol is defined as sup over B_r×S_s, which is nonzero for a nonzero constant g. The norm definitions conflict.",
      "context_sha256": "8738f50332ab028ed8f1c4c6dcc93f481538264b7908bd6e6500df17d79a3c4b",
      "item_sha256": "b2abb3cb8c8339070da92ec39e34c2a86aa7d4652db7cecb2a9b459bbcabdefc",
      "at": "2026-10-12T19:34:22.119Z"
    },
    {
      "id": "lem-frequency-reparametrization-by-contraction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 4.1 applies [F5] to maps from an open subset of C^n to C^n. The supplied Weierstrass theorem covers scalar functions on open subsets of C; the several-variable power-series theorem requires continuity and separate holomorphy, which this limit is not shown to have.",
      "context_sha256": "2bbe00851a512c911d49e32affbd479282d6f6bf96c0e2a146f97b7cbca944b2",
      "item_sha256": "fcce3a40de2f11b05eec0507603b5dcc30118a17aed6bcd697def3f953bf8e11",
      "at": "2026-10-12T19:33:29.209Z"
    },
    {
      "id": "lem-kam-conjugation-symmetry-of-the-construction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The supplied convergence result gives Ψ∞ on L={0}×S×Λ, holomorphic in θ for each real label. The definition of g^c requires a holomorphic map on a conjugation-invariant domain in (I,θ,ν), so Ψ∞^c in clause 3 is undefined; only symmetry of each restricted θ-slice is established.",
      "context_sha256": "323115260d840f096a846f19b4ccf3ea18b07860030edb50eb5ee99864955d65",
      "item_sha256": "d51035846f247c7ee5627db0e9aa34f9eef689f05a36813c93798aad6bd96db3",
      "at": "2026-10-12T19:49:56.160Z"
    },
    {
      "id": "lem-kam-limit-is-an-embedding",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause 5 is not established: the cited KAM theorem requires CE0≤1/16, while the hypothesis gives only CE0≤1/8. The workaround asserts the weighted-Jacobian and residual bounds without deriving them or citing an interface that states them, so [F5] cannot justify clause 5.",
      "context_sha256": "bc1a81372e20df9004d455696f1fe0511f515c89119447bb4559fbb7f35c60b9",
      "item_sha256": "db9d9bd4ed67fae9e7c7f0688207514ac22aa24c05028eb6cc95f487affb7cb2",
      "at": "2026-10-12T19:34:01.202Z"
    },
    {
      "id": "ex-two-rotor-kam-model-with-units",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The KAM theorem and slab estimate require α>0, but step 3.1 assumes only α<min(c,3/640). Negative α satisfies that bound and can make ε cosh(s₀)²≤cα² hold for arbitrarily large perturbations, so the cited conclusions do not follow.",
      "context_sha256": "47f6b68e98e0b09cfd91308d5df8c2c3a8990c158b5c7245f12b54a8b972b713",
      "item_sha256": "a45e3189a59e304dbaa8eddfbef8fd311d35799f22976472ce5dbb2ad5b9cc70",
      "at": "2026-10-12T19:35:01.977Z"
    }
  ]
