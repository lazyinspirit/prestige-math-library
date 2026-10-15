# Step 5 adjudicate: initial, round 1, unit 6

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-batch-6-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u6.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-td-qft-rpm-62-2026-10-14",phase:"initial",round:1,unit:"6",input_sha256:"c7d8a222abea8b2aeaf8ca5059b6b3a3871cdaeeeed41debed66cfc1d833fd32",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-td-qft-rpm-62-2026-10-14 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:def-tdmath-forward-sector-hypotheses, 3:def-tdmath-forward-signed-comparison, 4:cex-tdmath-bare-contact-interface-incoherent, 4:ex-tdmath-logarithmic-coherence-witness, 14:def-tdmath-decorated-chain-costs, 16:def-tdmath-cost-offset-difference-space, 16:thm-tdmath-unattained-cost-entropy-inference.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-tdmath-forward-sector-hypotheses",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The item leaves the “declared relation” on preparations undefined, so its pullback ≺ and the sets A_x are unbound. The cited compound supplier defines no comparison relation; claiming it defines the equal-mass domain is inaccurate.",
      "context_sha256": "654771ff357f7947ab2784b6869f74c9486e453a68f4136d92bba888b0b8e7f1",
      "item_sha256": "2922304c69b22cad731973d79a8e7dc2d5f63c10aa5372303ae1546c7944b168",
      "at": "2026-10-14T19:47:38.836Z"
    },
    {
      "id": "def-tdmath-forward-signed-comparison",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Equal raw coefficient totals need not give equal represented mass: m(ΣaJΓ(x))=Σa wΓ. Unit coefficients at types of weights 2 and 1 both total 1 but represent different masses, contradicting the definition’s mass claim.",
      "context_sha256": "bf938be87991e58efa0b6df880ef50fa161ae50885594139fe30a6a6ca818853",
      "item_sha256": "d56aa00cf4cd233c7a4b000e24b23536ea862dc2a5e81475b9d23b232176778a",
      "at": "2026-10-14T19:47:38.978Z"
    },
    {
      "id": "cex-tdmath-bare-contact-interface-incoherent",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2 assigns ∼T as equality on tagged states, but the dependency defines it via mutual accessibility of the encoded pair and joined state. No accessibility model realizing that assignment is given, so the countermodel does not satisfy its imported interface.",
      "context_sha256": "705e98177f7b62ce3ea1917b35d791c811502f3636c56c405bdb3bcaac44b596",
      "item_sha256": "3310cd36a0f6835f52d659e1ff101697aabd9281356a9a6fde18c270d29b2162",
      "at": "2026-10-14T20:01:08.128Z"
    },
    {
      "id": "ex-tdmath-logarithmic-coherence-witness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.5 establishes only equality of an undefined θ; T5 requires x∼ₜY. The needed equivalence⇔θ criterion is defined and proved later in 2.1, so step 1.5’s cited facts and prior steps do not establish T5.",
      "context_sha256": "ccb1ce6a009df1292d14577eba6b28e8603e450ee7bc991c3b03859480d93fa3",
      "item_sha256": "082c41e3292610c7980e4560ec14ed9573a1901709b3889b561e531c2702eacd",
      "at": "2026-10-14T20:01:53.709Z"
    },
    {
      "id": "def-tdmath-decorated-chain-costs",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "“Reversible identifications” is unspecified: no identified types or induced maps preserving ν, m, σ, and ≺ are given, yet the definition requires its maps to commute with them. The calibration interface permits only specified scaling/product identifications, so σ and the edge set",
      "context_sha256": "e6154b3d1877fb910fb137b0f9dfde3f793f8ae03a36c2a0de662411fc7f102c",
      "item_sha256": "134a3faa318ec50105651fabf648a716f800b901947b77799d5cc77f1acb31da",
      "at": "2026-10-14T19:56:11.363Z"
    },
    {
      "id": "def-tdmath-cost-offset-difference-space",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition supplies scaling only for t>0, so it does not define scalar multiplication for all real scalars (in particular 0 and negatives). The cited lemma cannot make an unspecified operation part of this definition.",
      "context_sha256": "08af972277f2f0d7a052ee2090fa8980e3700b1fa00c83279bb779712ccc03cf",
      "item_sha256": "54c5c7038b9ea0703d58d32a898b9489b417e1fc32b6e629b9dd56a3ecc8da27",
      "at": "2026-10-14T19:48:33.306Z"
    },
    {
      "id": "thm-tdmath-unattained-cost-entropy-inference",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 is inaccurately restated: the supplied lemma states εₙ=1/(n+1); its Statement does not explicitly use the canonical natural embedding. The equivalent sequence is valid, but this false claim about the dependency interface fails check (2).",
      "context_sha256": "653eecd9470d71be150e5a328b520ecb865778408d746e9350d038bc43d2006a",
      "item_sha256": "abcf404cb2672cdd44f2aeb32f38af96f5569c5b51b645358a44421a10f96027",
      "at": "2026-10-14T19:49:21.752Z"
    }
  ]
