# Step 5 adjudicate: initial, round 1, unit 71

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-batch-71-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u71.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-remaining-80-2026-10-17",phase:"initial",round:1,unit:"71",input_sha256:"34da341a1db0c97e52a6a7416782ee6b88786a786457765413eee2fcfc4a3d68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-remaining-80-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 6:post-tgr-finite-newton-gravity-preparation, 6:post-tgr-kepler-canonical-preparation, 6:post-tgr-kepler-microcanonical-volume-preparation, 8:ex-tgr-physical-finite-softened-box.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "post-tgr-finite-newton-gravity-preparation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The postulate admits any bounded measurable region B but says normalization is established by pthm, whose supplied interface covers only a bounded measurable box. Narrow B to a box or supply a normalization result for the wider scope.",
      "context_sha256": "82ea38e9dd5e116d2cdbba3ef109b3da15c56090828e4830da377de46a932d34",
      "item_sha256": "aa6527ecccc575e0fe817bfe74bcf521ea10dbaeaef8acbff4af68ae169e9caa",
      "at": "2026-10-17T08:13:23.114Z"
    },
    {
      "id": "post-tgr-kepler-canonical-preparation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Katz defines Ω(E) using δ(E−H), a shell density of states, so the cited sections do not support the stated Gibbs-volume/canonical distinction. This source-fidelity defect is fatal. [Manuscript](https://arxiv.org/pdf/astro-ph/0212295#page=3)",
      "context_sha256": "fcbef59af0da922033c901dde704f212566e65d5127f6c8b971b3dd6904ce84b",
      "item_sha256": "7c5c76ed7646451a98f72986e3c3f98f763ca0fd6deed357591bbfcdc3b889d3",
      "at": "2026-10-17T08:13:33.430Z"
    },
    {
      "id": "post-tgr-kepler-microcanonical-volume-preparation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal provenance error: Katz §2(i), eq. (2.2), defines Ω by δ(E−H), a shell density, not cumulative phase volume ν{H≤E}; it cannot support the claimed Gibbs-volume source reading. [Katz](https://arxiv.org/pdf/astro-ph/0212295)",
      "context_sha256": "74a92ce2c9b73c660b98c136e39bcc3270b953d67988aa1dd138672624319b96",
      "item_sha256": "11c50984d3bbbc23cef76e6ec674f4d1b4dda202765b2a62895b7e41d017154c",
      "at": "2026-10-17T08:13:07.089Z"
    },
    {
      "id": "ex-tgr-physical-finite-softened-box",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The example gives no unit convention for L, m, G, a, h_* or β. In particular, it does not establish that βH is dimensionless or specify the action unit used by the phase-space reference, leaving the physical parameterization incomplete.",
      "context_sha256": "547e6322d73a53796b282652e7cee9c75160df7c72853e58e78119472d2d4ed0",
      "item_sha256": "9dc82ca36156a3afaf3e7b815eb154b4aec6b6c8f9afa8ffad00b5d064218007",
      "at": "2026-10-17T08:13:07.815Z"
    }
  ]
